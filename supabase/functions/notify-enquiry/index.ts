// Supabase Edge Function: sends an email (Resend) and an SMS (Twilio) for every new enquiry.
// Trigger: Database Webhook on public.enquiries INSERT -> this function (see ADMIN.md).
// Secrets: RESEND_API_KEY, NOTIFY_EMAIL_TO, NOTIFY_EMAIL_FROM, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM, NOTIFY_SMS_TO, WEBHOOK_SECRET

Deno.serve(async (req) => {
  if (req.headers.get("x-webhook-secret") !== Deno.env.get("WEBHOOK_SECRET"))
    return new Response("Unauthorized", { status: 401 });

  const { record: r } = await req.json();
  if (!r) return new Response("No record", { status: 400 });

  const text = [
    `New enquiry — ${r.first_name} ${r.last_name}`,
    `Email: ${r.email}`,
    `Phone: ${r.phone || "—"}`,
    `Country: ${r.country || "—"}`,
    `As: ${r.contacting_as || "—"}${r.company_name ? ` (${r.company_name})` : ""}`,
    `Services: ${(r.services ?? []).join(", ")}`,
    ``,
    r.description,
  ].join("\n");

  const results: Record<string, number> = {};

  const resend = Deno.env.get("RESEND_API_KEY");
  if (resend) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resend}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: Deno.env.get("NOTIFY_EMAIL_FROM"),
        to: (Deno.env.get("NOTIFY_EMAIL_TO") ?? "").split(",").map((s) => s.trim()),
        reply_to: r.email,
        subject: `New enquiry — ${r.first_name} ${r.last_name}`,
        text,
      }),
    });
    results.email = res.status;
  }

  const sid = Deno.env.get("TWILIO_ACCOUNT_SID");
  const token = Deno.env.get("TWILIO_AUTH_TOKEN");
  if (sid && token) {
    const body = new URLSearchParams({
      From: Deno.env.get("TWILIO_FROM")!,
      To: Deno.env.get("NOTIFY_SMS_TO")!,
      Body: `LEX ARTA enquiry: ${r.first_name} ${r.last_name}, ${r.email}${r.phone ? ", " + r.phone : ""}. ${String(r.description).slice(0, 120)}`,
    });
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: { Authorization: "Basic " + btoa(`${sid}:${token}`), "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    results.sms = res.status;
  }

  return Response.json(results);
});

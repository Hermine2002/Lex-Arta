# LEX ARTA admin panel

URL: `/admin` (not indexed, not linked from the public site).

## One-time setup
1. Supabase project -> set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the environment.
2. SQL editor: run `supabase/migrations/20261009_admin_panel.sql`, then `20261013_site_settings.sql`.
3. Auth -> Users -> create your user, then run:
   `insert into public.admins (email) values ('you@example.com');`
4. Open `/admin` and sign in.

## Sections
- **Enquiries** – every consultation form submission, status (new / in progress / done), internal notes, search, CSV export.
- **Pages & SEO** – title, meta description and full HTML of every page; reset to bundled version.
- **Text editor** – edit each heading / paragraph / list item / button label without HTML.
- **Links** – site-wide broken-link scan, edit any link target, open in new tab.
- **Site settings** – social links, brand colours, services mega-menu, footer HTML. Header and footer are rendered once in the root layout, so a change applies to all pages.

## Email + SMS alerts for new enquiries
```
supabase functions deploy notify-enquiry --no-verify-jwt
supabase secrets set WEBHOOK_SECRET=... RESEND_API_KEY=... NOTIFY_EMAIL_FROM="LEX ARTA <noreply@lexarta.co>" \
  NOTIFY_EMAIL_TO=info@lexarta.co TWILIO_ACCOUNT_SID=... TWILIO_AUTH_TOKEN=... TWILIO_FROM=+... NOTIFY_SMS_TO=+...
```
Dashboard -> Database -> Webhooks -> new webhook: table `enquiries`, event `INSERT`, type Supabase Edge Function
`notify-enquiry`, add HTTP header `x-webhook-secret: <WEBHOOK_SECRET>`.
If the backend is unavailable the form falls back to a prepared `mailto:` message.

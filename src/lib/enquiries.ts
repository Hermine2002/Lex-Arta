import { getSupabase } from "./supabase";

export type EnquiryInput = {
  first_name: string;
  last_name: string;
  country: string;
  email: string;
  phone: string;
  contacting_as: string;
  company_name: string;
  services: string[];
  description: string;
  source: string;
};

export type Enquiry = EnquiryInput & {
  id: string;
  created_at: string;
  status: "new" | "in_progress" | "done";
  notes: string | null;
};

/** Stores the enquiry. Resolves false when the backend is not configured or the insert fails. */
export async function createEnquiry(input: EnquiryInput): Promise<boolean> {
  const sb = getSupabase();
  if (!sb) return false;
  const { error } = await sb.from("enquiries").insert(input);
  return !error;
}

export type EnquiryStatus = Enquiry["status"];

export async function listEnquiries(): Promise<{ rows: Enquiry[]; error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { rows: [], error: "Backend is not configured." };
  const { data, error } = await sb
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });
  return { rows: (data ?? []) as Enquiry[], error: error?.message ?? null };
}

export async function updateEnquiry(
  id: string,
  patch: { status?: EnquiryStatus; notes?: string | null },
): Promise<string | null> {
  const sb = getSupabase();
  if (!sb) return "Backend is not configured.";
  const { error } = await sb.from("enquiries").update(patch).eq("id", id);
  return error?.message ?? null;
}

export async function deleteEnquiry(id: string): Promise<string | null> {
  const sb = getSupabase();
  if (!sb) return "Backend is not configured.";
  const { error } = await sb.from("enquiries").delete().eq("id", id);
  return error?.message ?? null;
}

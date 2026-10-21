import { getSupabase } from "./supabase";

export type PageOverride = {
  path: string;
  title: string | null;
  description: string | null;
  html: string | null;
  updated_at: string;
};

/** Public read of admin-edited pages. Never throws: the site falls back to the bundled content. */
export async function fetchOverrides(): Promise<Record<string, PageOverride>> {
  try {
    const sb = getSupabase();
    if (!sb) return {};
    const { data, error } = await sb.from("page_overrides").select("*");
    if (error || !data) return {};
    return Object.fromEntries((data as PageOverride[]).map((r) => [r.path, r]));
  } catch {
    return {};
  }
}

export type OverridePatch = { title?: string | null; description?: string | null; html?: string | null };

/** Admin write (RLS: admins only). Returns an error message or null. */
export async function saveOverride(path: string, patch: OverridePatch): Promise<string | null> {
  const sb = getSupabase();
  if (!sb) return "Backend is not configured.";
  const { error } = await sb
    .from("page_overrides")
    .upsert({ path, ...patch, updated_at: new Date().toISOString() }, { onConflict: "path" });
  return error ? error.message : null;
}

/** Removes the admin edit so the page falls back to the bundled content. */
export async function deleteOverride(path: string): Promise<string | null> {
  const sb = getSupabase();
  if (!sb) return "Backend is not configured.";
  const { error } = await sb.from("page_overrides").delete().eq("path", path);
  return error ? error.message : null;
}

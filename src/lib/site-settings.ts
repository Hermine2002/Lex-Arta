import { getSupabase } from "./supabase";
import { groups as sharedGroups } from "@/data/site-shared";

export type NavLink = { label: string; href: string };
export type NavGroup = NavLink & { links: NavLink[] };
export type SiteSettings = {
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
    telegram: string;
    whatsapp: string;
  };
  theme: { primary: string; gold: string; ink: string };
  nav: NavGroup[] | null;
};

export const DEFAULT_SOCIALS = {
  instagram: "https://www.instagram.com/artlexconsult/",
  facebook: "",
  linkedin: "https://www.linkedin.com/company/108276536/",
  telegram: "https://t.me/+420607667076",
  whatsapp: "https://wa.me/420607667076",
};

export const defaultSettings: SiteSettings = {
  socials: { ...DEFAULT_SOCIALS },
  theme: { primary: "", gold: "", ink: "" },
  nav: null,
};

export const defaultNav = sharedGroups;

/** Public read. Never throws: the site falls back to defaults when the backend is missing. */
export async function fetchSettings(): Promise<SiteSettings> {
  try {
    const sb = getSupabase();
    if (!sb) return defaultSettings;
    const { data, error } = await sb
      .from("site_settings")
      .select("value")
      .eq("key", "general")
      .maybeSingle();
    if (error || !data?.value) return defaultSettings;
    const v = data.value as Partial<SiteSettings>;
    return {
      socials: { ...DEFAULT_SOCIALS, ...(v.socials ?? {}) },
      theme: { ...defaultSettings.theme, ...(v.theme ?? {}) },
      nav: Array.isArray(v.nav) ? v.nav : null,
    };
  } catch {
    return defaultSettings;
  }
}

const HEX = /^#[0-9a-fA-F]{3,8}$/;
/** CSS variable overrides from the theme settings (validated, so no CSS injection is possible). */
export function themeCss(t: SiteSettings["theme"]): string {
  const rules: string[] = [];
  if (HEX.test(t.primary)) rules.push(`--primary:${t.primary}`);
  if (HEX.test(t.gold)) rules.push(`--gold:${t.gold}`);
  if (HEX.test(t.ink)) rules.push(`--ink-surface:${t.ink}`);
  return rules.length ? `:root{${rules.join(";")}}` : "";
}

/** Admin write (RLS: admins only). Returns an error message or null. */
export async function saveSettings(s: SiteSettings): Promise<string | null> {
  const sb = getSupabase();
  if (!sb) return "Backend is not configured.";
  const { error } = await sb
    .from("site_settings")
    .upsert(
      { key: "general", value: s, updated_at: new Date().toISOString() },
      { onConflict: "key" },
    );
  return error ? error.message : null;
}

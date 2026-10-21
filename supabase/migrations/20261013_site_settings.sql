-- LEX ARTA admin: site-wide settings (social links, theme colours, header menu). Run after 20261009_admin_panel.sql.

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

create policy "public read site settings" on public.site_settings for select to anon, authenticated using (true);
create policy "admins write site settings" on public.site_settings for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

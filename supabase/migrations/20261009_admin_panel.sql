-- LEX ARTA admin panel: enquiries, editable page content, admin allow-list.

create table if not exists public.admins (
  email text primary key
);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins a where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', '')));
$$;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  country text not null default '',
  email text not null,
  phone text not null default '',
  contacting_as text not null default '',
  company_name text not null default '',
  services text[] not null default '{}',
  description text not null,
  source text not null default '',
  status text not null default 'new' check (status in ('new','in_progress','done')),
  notes text
);

create table if not exists public.page_overrides (
  path text primary key,
  title text,
  description text,
  html text,
  updated_at timestamptz not null default now()
);

alter table public.admins enable row level security;
alter table public.enquiries enable row level security;
alter table public.page_overrides enable row level security;

-- Anyone may submit an enquiry (status/notes cannot be pre-set); only admins read or manage them.
create policy "public can submit enquiries" on public.enquiries for insert to anon, authenticated
  with check (status = 'new' and notes is null);
create policy "admins read enquiries" on public.enquiries for select to authenticated using (public.is_admin());
create policy "admins update enquiries" on public.enquiries for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins delete enquiries" on public.enquiries for delete to authenticated using (public.is_admin());

-- Page content is public to read; only admins write.
create policy "public read page overrides" on public.page_overrides for select to anon, authenticated using (true);
create policy "admins write page overrides" on public.page_overrides for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- admins table: no policies => not readable from the client (is_admin() is security definer).
-- Add your admin login (create the user first in Supabase Auth > Users):
-- insert into public.admins (email) values ('you@example.com');

-- Cheerleader / Grandparent Mode (Brag Sheets)
-- Allows a parent to generate a secure, expiring, read-only link to share a child's progress.

create table if not exists public.brag_sheet_links (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  student_profile_id uuid not null references public.student_profiles(id) on delete cascade,
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  expires_at timestamptz not null,
  views integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists idx_brag_sheet_links_token on public.brag_sheet_links(token);

-- RLS Policies
alter table public.brag_sheet_links enable row level security;

-- Public can read active links (security by obscurity via the unguessable token, plus expiration check in the API)
drop policy if exists "brag_sheet_select_public" on public.brag_sheet_links;
create policy "brag_sheet_select_public"
on public.brag_sheet_links
for select
to public
using (expires_at > now());

-- Public can increment view count
drop policy if exists "brag_sheet_update_public" on public.brag_sheet_links;
create policy "brag_sheet_update_public"
on public.brag_sheet_links
for update
to public
using (expires_at > now())
with check (expires_at > now());

-- Parents can view and manage their own links
drop policy if exists "brag_sheet_all_parent" on public.brag_sheet_links;
create policy "brag_sheet_all_parent"
on public.brag_sheet_links
for all
to authenticated
using (parent_user_id = auth.uid())
with check (parent_user_id = auth.uid());

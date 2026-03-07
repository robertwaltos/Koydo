-- 202603020001_generated_modules.sql
-- Shared pool of AI-generated curriculum module sessions.
-- Each session holds the 3 modules generated for a given world_id.
-- Sessions are shared across accounts (cross-account read is intentional)
-- but the app excludes same-account sessions to avoid "sameness" for
-- family members / siblings sharing one login.

create table if not exists public.generated_module_sessions (
  id          uuid         primary key default gen_random_uuid(),
  account_id  uuid         not null references auth.users(id) on delete cascade,
  profile_id  uuid         references public.student_profiles(id) on delete set null,
  world_id    text         not null,
  modules     jsonb        not null,
  source      text         not null default 'ai',
  created_at  timestamptz  default now()
);

-- Fast lookup: "find sesions for world X that are NOT from my account"
create index if not exists idx_gmods_world_account
  on public.generated_module_sessions(world_id, account_id);

create index if not exists idx_gmods_created_at
  on public.generated_module_sessions(created_at desc);

-- === Row-Level Security ===
alter table public.generated_module_sessions enable row level security;

-- Any authenticated user can SELECT any session.
-- Same-account exclusion is enforced in application logic (neq account_id).
drop policy if exists "gmods_authenticated_select" on public.generated_module_sessions;
create policy "gmods_authenticated_select"
  on public.generated_module_sessions for select
  to authenticated
  using (true);

-- Users can only INSERT sessions tagged with their own account.
drop policy if exists "gmods_authenticated_insert" on public.generated_module_sessions;
create policy "gmods_authenticated_insert"
  on public.generated_module_sessions for insert
  to authenticated
  with check (account_id = auth.uid());

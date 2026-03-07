-- Multi-Tenant Foundation: app_id support for Micro-Apps
-- 
-- This migration adds an app_id column to core tables to allow running multiple
-- niche apps (e.g., Koydo Junior, Koydo Finance) from a single shared backend.

-- 1. Create a helper function to get the current app context
-- This can be set via `SET app.id = 'koydo_junior'` in a transaction.
create or replace function public.get_app_id()
returns text as $$
  select coalesce(current_setting('app.id', true), 'koydo_main');
$$ language sql stable;

-- 2. Add app_id to core tables
alter table public.user_profiles add column if not exists app_id text not null default 'koydo_main';
alter table public.student_profiles add column if not exists app_id text not null default 'koydo_main';
alter table public.user_learning_progress add column if not exists app_id text not null default 'koydo_main';
alter table public.generated_module_sessions add column if not exists app_id text not null default 'koydo_main';
alter table public.user_tokens add column if not exists app_id text not null default 'koydo_main';
alter table public.app_settings add column if not exists app_id text not null default 'koydo_main';

-- 3. Create indexes for performance
create index if not exists idx_user_profiles_app_id on public.user_profiles(app_id);
create index if not exists idx_student_profiles_app_id on public.student_profiles(app_id);
create index if not exists idx_user_learning_progress_app_id on public.user_learning_progress(app_id);

-- 4. Update RLS policies to enforce app_id gating
-- We modify the policies to ensure a user can only see data belonging to the current app context.

-- Example for user_profiles (assuming existing policy exists)
-- drop policy if exists "profiles_select_own" on public.user_profiles;
-- create policy "profiles_select_own" on public.user_profiles
--   for select to authenticated
--   using (user_id = auth.uid() and app_id = public.get_app_id());

-- Note: In a real production run, we would iterate through all tables and update policies.
-- For this "readiness" phase, we ensure the schema supports it.

-- 5. Multi-App Feature Flags table
create table if not exists public.app_manifests (
  app_id text primary key,
  display_name text not null,
  theme_config jsonb not null default '{}'::jsonb,
  enabled_subjects text[] not null default '{}'::text[],
  min_age int default 0,
  max_age int default 99,
  is_active boolean default true,
  created_at timestamptz not null default now()
);

-- Seed the main app
insert into public.app_manifests (app_id, display_name, enabled_subjects)
values ('koydo_main', 'Koydo Master', '{*}')
on conflict (app_id) do nothing;

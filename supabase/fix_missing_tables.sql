-- FIX SCRIPT: Apply missing tables manually
-- Run this in your Supabase SQL Editor

-- 1. Create Student Profiles (Family Model)
create table if not exists public.student_profiles (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  age_years integer check (age_years between 3 and 21),
  grade_level text,
  path_allowlist text[],
  featured_module_ids text[],
  module_assignment_mode text not null default 'guided',
  
  -- Assessment & Progress
  initial_assessment_status text default 'pending', -- 'pending', 'in_progress', 'completed'
  initial_assessment_data jsonb, -- Stores the Q&A specific to the 5 diagnostic questions
  ai_skill_level_map jsonb, -- Stores the AI-derived competency map after assessment
  
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Ensure age_years column exists (idempotent check)
do $$ 
begin
  if not exists (select 1 from information_schema.columns where table_name = 'student_profiles' and column_name = 'age_years') then
    alter table public.student_profiles add column age_years integer check (age_years between 3 and 21);
  end if;
end $$;

do $$ 
begin
  if not exists (select 1 from information_schema.columns where table_name = 'student_profiles' and column_name = 'path_allowlist') then
    alter table public.student_profiles add column path_allowlist text[];
  end if;
  if not exists (select 1 from information_schema.columns where table_name = 'student_profiles' and column_name = 'featured_module_ids') then
    alter table public.student_profiles add column featured_module_ids text[];
  end if;
  if not exists (select 1 from information_schema.columns where table_name = 'student_profiles' and column_name = 'module_assignment_mode') then
    alter table public.student_profiles add column module_assignment_mode text not null default 'guided';
  end if;
end $$;

alter table public.student_profiles drop constraint if exists student_profiles_module_assignment_mode_check;
alter table public.student_profiles add constraint student_profiles_module_assignment_mode_check
  check (module_assignment_mode in ('guided', 'random'));

-- Enable RLS for Student Profiles
alter table public.student_profiles enable row level security;

-- Policies
drop policy if exists "Users can manage their own student profiles" on public.student_profiles;
create policy "Users can manage their own student profiles"
  on public.student_profiles for all
  using (auth.uid() = account_id)
  with check (auth.uid() = account_id);

-- Indexes
create index if not exists idx_student_profiles_account
  on public.student_profiles(account_id);

-- Triggers
drop trigger if exists set_student_profiles_updated_at on public.student_profiles;
create trigger set_student_profiles_updated_at
  before update on public.student_profiles
  for each row execute function public.set_updated_at();


-- 2. Create Stripe Webhook Events
create table if not exists public.stripe_webhook_events (
  event_id text primary key,
  event_type text not null,
  status text not null default 'processing',
  attempt_count integer not null default 1,
  event_created_at timestamptz,
  processed_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint stripe_webhook_events_status_check
    check (status in ('processing', 'processed', 'failed'))
);

-- Triggers for Stripe Events
drop trigger if exists stripe_webhook_events_set_updated_at on public.stripe_webhook_events;
create trigger stripe_webhook_events_set_updated_at
before update on public.stripe_webhook_events
for each row execute function public.set_updated_at();

-- Enable RLS
alter table public.stripe_webhook_events enable row level security;

-- ============================================================
-- PERFORMANCE: media_generation_jobs compound index + vacuum
-- Run this after any large batch delete (e.g. dedup cleanup)
-- ============================================================

-- Index for fast polling queries: WHERE status='queued' AND asset_type IN (...)
create index if not exists idx_media_jobs_asset_type_status
  on public.media_generation_jobs (asset_type, status);

-- Reclaim space from batch-deleted rows and update planner statistics
vacuum analyze public.media_generation_jobs;

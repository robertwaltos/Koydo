
-- Student Profiles (Family Model)
create table if not exists public.student_profiles (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  age_years integer check (age_years between 3 and 21),
  grade_level text,
  
  -- Assessment & Progress
  initial_assessment_status text default 'pending', -- 'pending', 'in_progress', 'completed'
  initial_assessment_data jsonb, -- Stores the Q&A specific to the 5 diagnostic questions
  ai_skill_level_map jsonb, -- Stores the AI-derived competency map after assessment
  
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.student_profiles
  add column if not exists age_years integer check (age_years between 3 and 21);

-- RLS
alter table public.student_profiles enable row level security;

drop policy if exists "Users can manage their own student profiles" on public.student_profiles;
create policy "Users can manage their own student profiles"
  on public.student_profiles for all
  using (auth.uid() = account_id)
  with check (auth.uid() = account_id);

-- Add index for fast lookup of profiles by account
create index if not exists idx_student_profiles_account
  on public.student_profiles(account_id);

-- Auto-update the updated_at timestamp
drop trigger if exists set_student_profiles_updated_at on public.student_profiles;
create trigger set_student_profiles_updated_at
  before update on public.student_profiles
  for each row execute function public.set_updated_at();

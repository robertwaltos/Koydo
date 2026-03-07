-- Vacation / Sick Day Grace (Streak Pausing)
-- Allows a parent to freeze a child's learning streak temporarily so they don't lose progress during illness or vacation.

-- We add a 'streak_frozen_until' column to the gamification_states table.
-- When calculating streaks or applying daily decay, this timestamp is checked.

alter table public.gamification_states
  add column if not exists streak_frozen_until timestamptz;

-- Add a comment explaining the column
comment on column public.gamification_states.streak_frozen_until is 'If set and in the future, the daily streak decay job will skip this profile.';

-- Create an audit table to track who paused the streak (for abuse prevention/history)
create table if not exists public.gamification_streak_pauses (
  id uuid primary key default gen_random_uuid(),
  student_profile_id uuid not null references public.student_profiles(id) on delete cascade,
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  reason text not null, -- 'sick_day', 'vacation', etc.
  frozen_until timestamptz not null,
  created_at timestamptz not null default now()
);

-- RLS Policies for the audit log
alter table public.gamification_streak_pauses enable row level security;

-- Parents can view pauses for their own children
drop policy if exists "streak_pauses_select_parent" on public.gamification_streak_pauses;
create policy "streak_pauses_select_parent"
on public.gamification_streak_pauses
for select
to authenticated
using (
  parent_user_id = auth.uid() 
  or 
  exists (
    select 1 from public.student_profiles sp 
    where sp.id = gamification_streak_pauses.student_profile_id 
    and sp.account_id = auth.uid()
  )
);

-- Parents can insert pauses for their own children
drop policy if exists "streak_pauses_insert_parent" on public.gamification_streak_pauses;
create policy "streak_pauses_insert_parent"
on public.gamification_streak_pauses
for insert
to authenticated
with check (
  parent_user_id = auth.uid()
  and
  exists (
    select 1 from public.student_profiles sp 
    where sp.id = student_profile_id 
    and sp.account_id = auth.uid()
  )
);

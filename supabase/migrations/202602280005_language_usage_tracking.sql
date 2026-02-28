-- Language usage and scored-attempt entitlement tracking (tranche 2)

create table if not exists public.language_usage_tracking (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  student_profile_id uuid references public.student_profiles(id) on delete set null,
  learner_id uuid not null,
  learner_kind text not null default 'user',
  month_key text not null,
  plan_tier text not null default 'core_practice',
  scored_attempts integer not null default 0,
  practice_attempts integer not null default 0,
  audio_minutes numeric(10, 3) not null default 0,
  ai_cost_usd numeric(10, 4) not null default 0,
  last_scored_at timestamptz,
  last_activity_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint language_usage_tracking_unique_learner_month unique (learner_id, month_key),
  constraint language_usage_tracking_month_key_check check (
    month_key ~ '^[0-9]{4}-(0[1-9]|1[0-2])$'
  ),
  constraint language_usage_tracking_plan_tier_check check (
    plan_tier in (
      'core_practice',
      'language_plus_conservative',
      'language_family_conservative',
      'language_plus_growth',
      'language_family_growth',
      'language_school_annual'
    )
  ),
  constraint language_usage_tracking_learner_kind_check check (
    learner_kind in ('user', 'student_profile')
  ),
  constraint language_usage_tracking_counts_check check (
    scored_attempts >= 0
    and practice_attempts >= 0
    and audio_minutes >= 0
    and ai_cost_usd >= 0
  ),
  constraint language_usage_tracking_learner_consistency_check check (
    (
      learner_kind = 'user'
      and student_profile_id is null
      and learner_id = user_id
    )
    or (
      learner_kind = 'student_profile'
      and student_profile_id is not null
      and learner_id = student_profile_id
    )
  )
);

drop trigger if exists language_usage_tracking_set_updated_at on public.language_usage_tracking;
create trigger language_usage_tracking_set_updated_at
before update on public.language_usage_tracking
for each row execute function public.set_updated_at();

create index if not exists idx_language_usage_tracking_user_month
  on public.language_usage_tracking(user_id, month_key);

create index if not exists idx_language_usage_tracking_profile_month
  on public.language_usage_tracking(student_profile_id, month_key);

create index if not exists idx_language_usage_tracking_plan_month
  on public.language_usage_tracking(plan_tier, month_key);

alter table public.language_usage_tracking enable row level security;

drop policy if exists "language_usage_tracking_select_own_profile_or_admin" on public.language_usage_tracking;
create policy "language_usage_tracking_select_own_profile_or_admin"
on public.language_usage_tracking
for select
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = language_usage_tracking.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "language_usage_tracking_insert_own_profile_or_admin" on public.language_usage_tracking;
create policy "language_usage_tracking_insert_own_profile_or_admin"
on public.language_usage_tracking
for insert
to authenticated
with check (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = language_usage_tracking.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "language_usage_tracking_update_own_profile_or_admin" on public.language_usage_tracking;
create policy "language_usage_tracking_update_own_profile_or_admin"
on public.language_usage_tracking
for update
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = language_usage_tracking.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = language_usage_tracking.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

-- Language + gamification foundation (tranche 2)

create table if not exists public.pronunciation_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  student_profile_id uuid references public.student_profiles(id) on delete set null,
  module_id text,
  language text not null default 'en',
  target_text text not null,
  transcript_text text not null,
  audio_url text,
  audio_duration_ms integer,
  asr_confidence numeric(5, 4),
  provider_id text not null default 'mock',
  grading_mode text not null default 'graded',
  overall_score numeric(6, 2),
  dimensions jsonb not null default '{}'::jsonb,
  feedback jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  source_type text not null default 'internal_authoring',
  source_name text,
  source_url text,
  license_type text,
  commercial_use_allowed boolean not null default true,
  derivation_method text not null default 'original_from_blueprint',
  review_status text not null default 'draft',
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint pronunciation_attempts_language_check check (length(language) between 2 and 16),
  constraint pronunciation_attempts_audio_duration_check check (
    audio_duration_ms is null or (audio_duration_ms > 0 and audio_duration_ms <= 600000)
  ),
  constraint pronunciation_attempts_asr_confidence_check check (
    asr_confidence is null or (asr_confidence >= 0 and asr_confidence <= 1)
  ),
  constraint pronunciation_attempts_grading_mode_check check (
    grading_mode in ('graded', 'practice_only')
  ),
  constraint pronunciation_attempts_source_type_check check (
    source_type in ('official_outline', 'oer', 'partner', 'internal_authoring')
  ),
  constraint pronunciation_attempts_review_status_check check (
    review_status in ('draft', 'legal_review', 'approved', 'blocked')
  )
);

create table if not exists public.gamification_states (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  student_profile_id uuid references public.student_profiles(id) on delete set null,
  points integer not null default 0,
  level integer not null default 1,
  badges jsonb not null default '[]'::jsonb,
  quests_completed jsonb not null default '[]'::jsonb,
  streaks jsonb not null default '{"daily":0,"weekly":0}'::jsonb,
  last_activity_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint gamification_states_points_check check (points >= 0),
  constraint gamification_states_level_check check (level >= 1),
  constraint gamification_states_user_unique unique (user_id)
);

create table if not exists public.gamification_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  student_profile_id uuid references public.student_profiles(id) on delete set null,
  event_type text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint gamification_events_type_check check (
    event_type in (
      'badge_earned',
      'level_up',
      'quest_complete',
      'streak_started',
      'streak_kept',
      'streak_reset',
      'points_awarded'
    )
  )
);

drop trigger if exists pronunciation_attempts_set_updated_at on public.pronunciation_attempts;
create trigger pronunciation_attempts_set_updated_at
before update on public.pronunciation_attempts
for each row execute function public.set_updated_at();

drop trigger if exists gamification_states_set_updated_at on public.gamification_states;
create trigger gamification_states_set_updated_at
before update on public.gamification_states
for each row execute function public.set_updated_at();

create index if not exists idx_pronunciation_attempts_user_created
  on public.pronunciation_attempts(user_id, created_at desc);

create index if not exists idx_pronunciation_attempts_profile_created
  on public.pronunciation_attempts(student_profile_id, created_at desc);

create index if not exists idx_pronunciation_attempts_module_language
  on public.pronunciation_attempts(module_id, language, created_at desc);

create index if not exists idx_pronunciation_attempts_grading_mode
  on public.pronunciation_attempts(grading_mode, created_at desc);

create index if not exists idx_gamification_states_user
  on public.gamification_states(user_id);

create index if not exists idx_gamification_states_profile
  on public.gamification_states(student_profile_id);

create index if not exists idx_gamification_events_user_type_created
  on public.gamification_events(user_id, event_type, created_at desc);

create index if not exists idx_gamification_events_profile_created
  on public.gamification_events(student_profile_id, created_at desc);

alter table public.pronunciation_attempts enable row level security;
alter table public.gamification_states enable row level security;
alter table public.gamification_events enable row level security;

drop policy if exists "pronunciation_attempts_select_own_profile_or_admin" on public.pronunciation_attempts;
create policy "pronunciation_attempts_select_own_profile_or_admin"
on public.pronunciation_attempts
for select
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = pronunciation_attempts.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "pronunciation_attempts_insert_own_profile_or_admin" on public.pronunciation_attempts;
create policy "pronunciation_attempts_insert_own_profile_or_admin"
on public.pronunciation_attempts
for insert
to authenticated
with check (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = pronunciation_attempts.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "pronunciation_attempts_update_own_profile_or_admin" on public.pronunciation_attempts;
create policy "pronunciation_attempts_update_own_profile_or_admin"
on public.pronunciation_attempts
for update
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = pronunciation_attempts.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
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
      where sp.id = pronunciation_attempts.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "gamification_states_select_own_profile_or_admin" on public.gamification_states;
create policy "gamification_states_select_own_profile_or_admin"
on public.gamification_states
for select
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = gamification_states.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "gamification_states_insert_own_profile_or_admin" on public.gamification_states;
create policy "gamification_states_insert_own_profile_or_admin"
on public.gamification_states
for insert
to authenticated
with check (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = gamification_states.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "gamification_states_update_own_profile_or_admin" on public.gamification_states;
create policy "gamification_states_update_own_profile_or_admin"
on public.gamification_states
for update
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = gamification_states.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
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
      where sp.id = gamification_states.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "gamification_events_select_own_profile_or_admin" on public.gamification_events;
create policy "gamification_events_select_own_profile_or_admin"
on public.gamification_events
for select
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = gamification_events.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "gamification_events_insert_own_profile_or_admin" on public.gamification_events;
create policy "gamification_events_insert_own_profile_or_admin"
on public.gamification_events
for insert
to authenticated
with check (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = gamification_events.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);


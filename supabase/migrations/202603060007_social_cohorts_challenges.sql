-- Utility: generic set_updated_at trigger function (idempotent)
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create table if not exists public.social_cohorts (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text,
  visibility text not null default 'invite_only'
    check (visibility in ('private', 'invite_only', 'public')),
  join_code text not null,
  max_member_count integer not null default 30
    check (max_member_count between 2 and 500),
  moderation_state text not null default 'approved'
    check (moderation_state in ('pending', 'approved', 'rejected')),
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint social_cohorts_join_code_unique unique (join_code)
);

create table if not exists public.social_cohort_members (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.social_cohorts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member'
    check (role in ('owner', 'moderator', 'member')),
  status text not null default 'active'
    check (status in ('active', 'removed', 'blocked')),
  joined_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint social_cohort_members_unique unique (cohort_id, user_id)
);

create table if not exists public.social_challenges (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.social_cohorts(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'draft'
    check (status in ('draft', 'active', 'completed', 'archived')),
  moderation_state text not null default 'approved'
    check (moderation_state in ('pending', 'approved', 'rejected')),
  activated_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint social_challenges_window_check check (ends_at > starts_at)
);

create table if not exists public.social_challenge_participants (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.social_cohorts(id) on delete cascade,
  challenge_id uuid not null references public.social_challenges(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'active'
    check (status in ('active', 'removed', 'blocked')),
  joined_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint social_challenge_participants_unique unique (challenge_id, user_id)
);

create table if not exists public.social_challenge_events (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.social_cohorts(id) on delete cascade,
  challenge_id uuid not null references public.social_challenges(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  event_type text not null
    check (event_type in ('challenge_attempt', 'challenge_progress', 'challenge_mastery')),
  source text not null
    check (source in ('daily_challenge', 'lesson_quiz', 'assignment')),
  source_event_id text not null,
  score_percentage numeric(6, 5) not null
    check (score_percentage >= 0 and score_percentage <= 1),
  total_questions integer not null
    check (total_questions between 1 and 500),
  points_awarded integer not null
    check (points_awarded between 0 and 300),
  validated boolean not null default false,
  moderation_state text not null default 'approved'
    check (moderation_state in ('pending', 'approved', 'rejected')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  constraint social_challenge_events_source_unique unique (challenge_id, source, source_event_id)
);

create table if not exists public.social_challenge_leaderboard (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.social_cohorts(id) on delete cascade,
  challenge_id uuid not null references public.social_challenges(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  total_points integer not null default 0
    check (total_points >= 0),
  validated_event_count integer not null default 0
    check (validated_event_count >= 0),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint social_challenge_leaderboard_unique unique (challenge_id, user_id)
);

create index if not exists idx_social_cohort_members_user_status
  on public.social_cohort_members(user_id, status);

create index if not exists idx_social_cohort_members_cohort_status
  on public.social_cohort_members(cohort_id, status);

create index if not exists idx_social_challenges_cohort_status
  on public.social_challenges(cohort_id, status, created_at desc);

create index if not exists idx_social_challenge_participants_challenge_user
  on public.social_challenge_participants(challenge_id, user_id, status);

create index if not exists idx_social_challenge_events_challenge_created
  on public.social_challenge_events(challenge_id, created_at desc);

create index if not exists idx_social_challenge_events_user_created
  on public.social_challenge_events(user_id, created_at desc);

create index if not exists idx_social_challenge_leaderboard_rank
  on public.social_challenge_leaderboard(challenge_id, total_points desc, validated_event_count desc, updated_at asc);

drop trigger if exists social_cohorts_set_updated_at on public.social_cohorts;
create trigger social_cohorts_set_updated_at
before update on public.social_cohorts
for each row execute function public.set_updated_at();

drop trigger if exists social_cohort_members_set_updated_at on public.social_cohort_members;
create trigger social_cohort_members_set_updated_at
before update on public.social_cohort_members
for each row execute function public.set_updated_at();

drop trigger if exists social_challenges_set_updated_at on public.social_challenges;
create trigger social_challenges_set_updated_at
before update on public.social_challenges
for each row execute function public.set_updated_at();

drop trigger if exists social_challenge_participants_set_updated_at on public.social_challenge_participants;
create trigger social_challenge_participants_set_updated_at
before update on public.social_challenge_participants
for each row execute function public.set_updated_at();

drop trigger if exists social_challenge_leaderboard_set_updated_at on public.social_challenge_leaderboard;
create trigger social_challenge_leaderboard_set_updated_at
before update on public.social_challenge_leaderboard
for each row execute function public.set_updated_at();

alter table public.social_cohorts enable row level security;
alter table public.social_cohort_members enable row level security;
alter table public.social_challenges enable row level security;
alter table public.social_challenge_participants enable row level security;
alter table public.social_challenge_events enable row level security;
alter table public.social_challenge_leaderboard enable row level security;

drop policy if exists "social_cohorts_select_for_members" on public.social_cohorts;
create policy "social_cohorts_select_for_members"
on public.social_cohorts
for select
to authenticated
using (
  owner_user_id = auth.uid()
  or exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_cohorts.id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
  )
);

drop policy if exists "social_cohorts_insert_owner" on public.social_cohorts;
create policy "social_cohorts_insert_owner"
on public.social_cohorts
for insert
to authenticated
with check (owner_user_id = auth.uid());

drop policy if exists "social_cohorts_update_owner_or_moderator" on public.social_cohorts;
create policy "social_cohorts_update_owner_or_moderator"
on public.social_cohorts
for update
to authenticated
using (
  owner_user_id = auth.uid()
  or exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_cohorts.id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
      and scm.role in ('owner', 'moderator')
  )
)
with check (true);

drop policy if exists "social_cohort_members_select_self" on public.social_cohort_members;
create policy "social_cohort_members_select_self"
on public.social_cohort_members
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "social_cohort_members_insert_self" on public.social_cohort_members;
create policy "social_cohort_members_insert_self"
on public.social_cohort_members
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "social_cohort_members_update_self" on public.social_cohort_members;
create policy "social_cohort_members_update_self"
on public.social_cohort_members
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "social_challenges_select_for_members" on public.social_challenges;
create policy "social_challenges_select_for_members"
on public.social_challenges
for select
to authenticated
using (
  exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_challenges.cohort_id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
  )
);

drop policy if exists "social_challenges_insert_owner_or_moderator" on public.social_challenges;
create policy "social_challenges_insert_owner_or_moderator"
on public.social_challenges
for insert
to authenticated
with check (
  created_by = auth.uid()
  and exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_challenges.cohort_id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
      and scm.role in ('owner', 'moderator')
  )
);

drop policy if exists "social_challenges_update_owner_or_moderator" on public.social_challenges;
create policy "social_challenges_update_owner_or_moderator"
on public.social_challenges
for update
to authenticated
using (
  exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_challenges.cohort_id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
      and scm.role in ('owner', 'moderator')
  )
)
with check (true);

drop policy if exists "social_challenge_participants_select_self" on public.social_challenge_participants;
create policy "social_challenge_participants_select_self"
on public.social_challenge_participants
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "social_challenge_participants_insert_self" on public.social_challenge_participants;
create policy "social_challenge_participants_insert_self"
on public.social_challenge_participants
for insert
to authenticated
with check (
  user_id = auth.uid()
  and exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_challenge_participants.cohort_id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
  )
);

drop policy if exists "social_challenge_participants_update_self" on public.social_challenge_participants;
create policy "social_challenge_participants_update_self"
on public.social_challenge_participants
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "social_challenge_events_select_for_members" on public.social_challenge_events;
create policy "social_challenge_events_select_for_members"
on public.social_challenge_events
for select
to authenticated
using (
  exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_challenge_events.cohort_id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
  )
);

drop policy if exists "social_challenge_events_insert_self" on public.social_challenge_events;
create policy "social_challenge_events_insert_self"
on public.social_challenge_events
for insert
to authenticated
with check (
  user_id = auth.uid()
  and exists (
    select 1
    from public.social_challenge_participants scp
    where scp.challenge_id = social_challenge_events.challenge_id
      and scp.user_id = auth.uid()
      and scp.status = 'active'
  )
);

drop policy if exists "social_challenge_leaderboard_select_for_members" on public.social_challenge_leaderboard;
create policy "social_challenge_leaderboard_select_for_members"
on public.social_challenge_leaderboard
for select
to authenticated
using (
  exists (
    select 1
    from public.social_cohort_members scm
    where scm.cohort_id = social_challenge_leaderboard.cohort_id
      and scm.user_id = auth.uid()
      and scm.status = 'active'
  )
);

drop policy if exists "social_challenge_leaderboard_upsert_self" on public.social_challenge_leaderboard;
create policy "social_challenge_leaderboard_upsert_self"
on public.social_challenge_leaderboard
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "social_challenge_leaderboard_update_self" on public.social_challenge_leaderboard;
create policy "social_challenge_leaderboard_update_self"
on public.social_challenge_leaderboard
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

grant select, insert, update on public.social_cohorts to authenticated;
grant select, insert, update on public.social_cohort_members to authenticated;
grant select, insert, update on public.social_challenges to authenticated;
grant select, insert, update on public.social_challenge_participants to authenticated;
grant select, insert on public.social_challenge_events to authenticated;
grant select, insert, update on public.social_challenge_leaderboard to authenticated;
-- E-10: Social Cohorts + Challenges
-- Study circles, challenges, leaderboard infrastructure

-- =====================================================================
-- 1. Study Circles (small peer groups / study groups)
-- =====================================================================

create table if not exists study_circles (
  id              uuid primary key default gen_random_uuid(),
  name            text not null check (char_length(name) between 2 and 60),
  description     text default '' check (char_length(description) <= 300),
  owner_user_id   uuid not null references auth.users(id) on delete cascade,
  subject         text,                          -- optional: focus subject
  max_members     integer not null default 8 check (max_members between 2 and 20),
  is_public       boolean not null default false,-- public = discoverable
  invite_code     text unique,                   -- 6-char join code
  status          text not null default 'active'
                    check (status in ('active','archived')),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index idx_study_circles_owner on study_circles (owner_user_id);
create index idx_study_circles_invite on study_circles (invite_code) where invite_code is not null;
create index idx_study_circles_public on study_circles (is_public, status) where is_public = true;

-- =====================================================================
-- 2. Study Circle Members
-- =====================================================================

create table if not exists study_circle_members (
  id              uuid primary key default gen_random_uuid(),
  circle_id       uuid not null references study_circles(id) on delete cascade,
  user_id         uuid not null references auth.users(id) on delete cascade,
  role            text not null default 'member'
                    check (role in ('owner','moderator','member')),
  joined_at       timestamptz not null default now(),

  constraint uq_circle_member unique (circle_id, user_id)
);

create index idx_circle_members_user on study_circle_members (user_id);

-- =====================================================================
-- 3. Challenges (time-boxed group competitions)
-- =====================================================================

create table if not exists challenges (
  id              uuid primary key default gen_random_uuid(),
  title           text not null check (char_length(title) between 2 and 120),
  description     text default '',
  created_by      uuid not null references auth.users(id) on delete cascade,
  circle_id       uuid references study_circles(id) on delete set null,  -- optional: scoped to circle
  challenge_type  text not null default 'xp_race'
                    check (challenge_type in ('xp_race','lesson_count','streak','quiz_score')),
  target_value    integer not null default 100,    -- e.g. 100 XP or 5 lessons
  subject         text,                            -- optional: subject filter
  starts_at       timestamptz not null default now(),
  ends_at         timestamptz not null,
  status          text not null default 'active'
                    check (status in ('draft','active','completed','cancelled')),
  max_participants integer not null default 50 check (max_participants between 2 and 200),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index idx_challenges_circle on challenges (circle_id) where circle_id is not null;
create index idx_challenges_status on challenges (status, ends_at);

-- =====================================================================
-- 4. Challenge Participants
-- =====================================================================

create table if not exists challenge_participants (
  id              uuid primary key default gen_random_uuid(),
  challenge_id    uuid not null references challenges(id) on delete cascade,
  user_id         uuid not null references auth.users(id) on delete cascade,
  current_value   integer not null default 0,      -- running score
  rank            integer,                          -- computed on read
  completed       boolean not null default false,
  joined_at       timestamptz not null default now(),
  last_updated_at timestamptz not null default now(),

  constraint uq_challenge_participant unique (challenge_id, user_id)
);

create index idx_challenge_participants_user on challenge_participants (user_id);

-- =====================================================================
-- 5. RLS Policies
-- =====================================================================

alter table study_circles enable row level security;
alter table study_circle_members enable row level security;
alter table challenges enable row level security;
alter table challenge_participants enable row level security;

-- Study Circles: public circles readable by all, private only by members
create policy "Read public circles"
  on study_circles for select
  using (is_public = true and status = 'active');

create policy "Read own circles"
  on study_circles for select
  using (owner_user_id = auth.uid());

create policy "Read member circles"
  on study_circles for select
  using (
    id in (
      select circle_id from study_circle_members where user_id = auth.uid()
    )
  );

create policy "Owners manage circles"
  on study_circles for all
  using (owner_user_id = auth.uid());

-- Circle Members: members see fellow members
create policy "Members read circle members"
  on study_circle_members for select
  using (
    circle_id in (
      select circle_id from study_circle_members where user_id = auth.uid()
    )
  );

create policy "Users insert own membership"
  on study_circle_members for insert
  with check (user_id = auth.uid());

create policy "Users delete own membership"
  on study_circle_members for delete
  using (user_id = auth.uid());

create policy "Owners manage members"
  on study_circle_members for all
  using (
    circle_id in (
      select id from study_circles where owner_user_id = auth.uid()
    )
  );

-- Challenges: readable by active participants or circle members
create policy "Read active challenges"
  on challenges for select
  using (status in ('active','completed'));

create policy "Creators manage challenges"
  on challenges for all
  using (created_by = auth.uid());

-- Challenge Participants: participants see all participants in their challenge
create policy "Read challenge participants"
  on challenge_participants for select
  using (
    challenge_id in (
      select challenge_id from challenge_participants where user_id = auth.uid()
    )
  );

create policy "Users join challenges"
  on challenge_participants for insert
  with check (user_id = auth.uid());

create policy "Users update own progress"
  on challenge_participants for update
  using (user_id = auth.uid());

-- ============================================================
-- Migration: Universal Feature Registry + 30 Features Tables
-- Date: 2026-03-05
-- ============================================================

-- ────────────────── PHASE 1: Feature Registry ──────────────────

-- Admin-controlled feature toggles
create table if not exists feature_registry (
  id           text primary key,
  enabled      boolean not null default false,
  tier         text not null default 'free',
  min_age_tier text not null default 'little',
  max_age_tier text not null default 'adult',
  app_variants text[] not null default '{full}',
  description  text,
  updated_by   text,
  updated_at   timestamptz default now()
);

-- Per-child parent overrides
create table if not exists parent_feature_overrides (
  id               uuid primary key default gen_random_uuid(),
  parent_user_id   uuid not null references auth.users(id) on delete cascade,
  child_profile_id uuid not null references student_profiles(id) on delete cascade,
  feature_id       text not null,
  enabled          boolean not null,
  updated_at       timestamptz default now(),
  unique (parent_user_id, child_profile_id, feature_id)
);

-- ────────────────── PHASE 2: Content & Learning ──────────────────

-- Readings / articles
create table if not exists readings (
  id         uuid primary key default gen_random_uuid(),
  module_id  text,
  title      text not null,
  author     text,
  content    text not null,
  subject    text,
  word_count integer default 0,
  created_at timestamptz default now()
);

-- Student learning goals
create table if not exists learning_goals (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references student_profiles(id) on delete cascade,
  goal_type  text not null,  -- daily_lessons | daily_minutes | weekly_lessons | weekly_xp
  target     integer not null,
  current    integer not null default 0,
  active     boolean not null default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Reflection journal entries
create table if not exists reflection_journal (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references student_profiles(id) on delete cascade,
  prompt     text,
  response   text not null,
  lesson_id  text,
  created_at timestamptz default now()
);

-- ────────────────── PHASE 3: Social & Multiplayer ──────────────────

-- Collaborative whiteboard events (delta-based sync)
create table if not exists whiteboard_events (
  id          uuid primary key default gen_random_uuid(),
  room_id     text not null,
  user_id     uuid not null references auth.users(id) on delete cascade,
  event_type  text not null,  -- draw | clear | undo
  payload     jsonb not null default '{}',
  created_at  timestamptz default now()
);

create index if not exists idx_whiteboard_events_room on whiteboard_events(room_id, created_at);

-- Real-time quiz game events
create table if not exists quiz_game_events (
  id         uuid primary key default gen_random_uuid(),
  game_id    uuid not null,
  user_id    uuid,
  event_type text not null,  -- answer | score_update | game_end
  payload    jsonb not null default '{}',
  created_at timestamptz default now()
);

create index if not exists idx_quiz_game_events_game on quiz_game_events(game_id, created_at);

-- Alter discussion_posts for moderation
alter table discussion_posts
  add column if not exists is_pinned boolean default false,
  add column if not exists is_hidden boolean default false,
  add column if not exists report_count integer default 0,
  add column if not exists upvote_count integer default 0;

-- Alter quiz_games for real-time state
alter table quiz_games
  add column if not exists current_question_index integer default 0,
  add column if not exists question_ends_at timestamptz,
  add column if not exists game_state text default 'waiting';

-- ────────────────── PHASE 4: Gamification & Rewards ──────────────────

-- Quest progress tracking
create table if not exists quests (
  id           uuid primary key default gen_random_uuid(),
  profile_id   uuid not null references student_profiles(id) on delete cascade,
  quest_id     text not null,
  quest_type   text not null,  -- daily | weekly
  title        text not null,
  description  text,
  target       integer not null default 1,
  progress     integer not null default 0,
  xp_reward    integer not null default 0,
  status       text not null default 'active',  -- active | completed | expired
  period_start timestamptz not null,
  period_end   timestamptz not null,
  completed_at timestamptz,
  created_at   timestamptz default now()
);

create index if not exists idx_quests_profile_status on quests(profile_id, status);

-- Reward catalog items
create table if not exists reward_catalog (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text,
  category    text not null,  -- hat | face | body | background | title | theme
  xp_cost     integer not null,
  rarity      text not null default 'common',  -- common | rare | epic | legendary
  image_url   text,
  active      boolean not null default true,
  created_at  timestamptz default now()
);

-- Per-profile unlocked rewards
create table if not exists reward_unlocks (
  id          uuid primary key default gen_random_uuid(),
  profile_id  uuid not null references student_profiles(id) on delete cascade,
  reward_id   uuid not null references reward_catalog(id) on delete cascade,
  unlocked_at timestamptz default now(),
  unique (profile_id, reward_id)
);

-- Activity feed events
create table if not exists activity_feed_events (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references student_profiles(id) on delete cascade,
  event_type text not null,  -- badge_earned | quest_completed | level_up | streak
  title      text not null,
  detail     text,
  created_at timestamptz default now()
);

create index if not exists idx_activity_feed_created on activity_feed_events(created_at desc);

-- ────────────────── PHASE 5: Advanced Learning ──────────────────

-- Study plans (weekly calendar slots)
create table if not exists study_plans (
  id          uuid primary key default gen_random_uuid(),
  profile_id  uuid not null references student_profiles(id) on delete cascade,
  day_of_week integer not null,  -- 0=Sunday..6=Saturday
  hour        integer not null,  -- 0-23
  subject_id  text not null,
  label       text not null,
  created_at  timestamptz default now(),
  unique (profile_id, day_of_week, hour)
);

-- Downloadable module resources
create table if not exists module_resources (
  id           uuid primary key default gen_random_uuid(),
  module_id    text not null,
  title        text not null,
  file_type    text not null,  -- pdf | docx | pptx | xlsx
  size_kb      integer not null default 0,
  storage_path text not null,
  created_at   timestamptz default now()
);

create index if not exists idx_module_resources_module on module_resources(module_id);

-- Library items (ebooks, documents, articles)
create table if not exists library_items (
  id               uuid primary key default gen_random_uuid(),
  title            text not null,
  author           text,
  type             text not null default 'article',  -- ebook | document | article
  cover_url        text,
  subject          text,
  reading_time_min integer default 5,
  content_url      text,
  created_at       timestamptz default now()
);

-- Question bank
create table if not exists question_bank (
  id            uuid primary key default gen_random_uuid(),
  question_text text not null,
  question_type text not null default 'multiple_choice',
  subject       text,
  difficulty    text default 'medium',
  tags          text[],
  options       jsonb,
  correct_answer text,
  created_at    timestamptz default now()
);

create index if not exists idx_question_bank_subject on question_bank(subject);

-- Instructor feedback on student work
create table if not exists instructor_feedback (
  id                 uuid primary key default gen_random_uuid(),
  student_profile_id uuid not null references student_profiles(id) on delete cascade,
  instructor_name    text not null,
  instructor_user_id uuid references auth.users(id),
  assignment_title   text not null,
  comment            text not null,
  rating             integer,  -- 1-5
  created_at         timestamptz default now()
);

create index if not exists idx_instructor_feedback_student on instructor_feedback(student_profile_id, created_at desc);

-- ────────────────── PHASE 6: Operational ──────────────────

-- Attendance / check-in records
create table if not exists attendance_records (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references student_profiles(id) on delete cascade,
  check_in_date date not null,
  checked_in_at timestamptz default now(),
  unique (profile_id, check_in_date)
);

-- ────────────────── ALTER existing tables ──────────────────

-- Add accommodations and avatar config to student profiles
alter table student_profiles
  add column if not exists accommodations text[],
  add column if not exists avatar_config jsonb;

-- ────────────────── RLS Policies ──────────────────

-- Enable RLS on all new tables
alter table feature_registry enable row level security;
alter table parent_feature_overrides enable row level security;
alter table readings enable row level security;
alter table learning_goals enable row level security;
alter table reflection_journal enable row level security;
alter table whiteboard_events enable row level security;
alter table quiz_game_events enable row level security;
alter table quests enable row level security;
alter table reward_catalog enable row level security;
alter table reward_unlocks enable row level security;
alter table activity_feed_events enable row level security;
alter table study_plans enable row level security;
alter table module_resources enable row level security;
alter table library_items enable row level security;
alter table question_bank enable row level security;
alter table instructor_feedback enable row level security;
alter table attendance_records enable row level security;

-- Feature registry: readable by all authenticated, writable by service role only
create policy "feature_registry_read" on feature_registry for select to authenticated using (true);

-- Parent overrides: parents can manage their own children's overrides
create policy "parent_overrides_own" on parent_feature_overrides for all to authenticated
  using (parent_user_id = auth.uid());

-- Readings: readable by all authenticated
create policy "readings_read" on readings for select to authenticated using (true);

-- Learning goals: users manage their own
create policy "goals_own" on learning_goals for all to authenticated
  using (profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Reflection journal: users manage their own
create policy "journal_own" on reflection_journal for all to authenticated
  using (profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Quests: users manage their own
create policy "quests_own" on quests for all to authenticated
  using (profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Reward catalog: readable by all authenticated
create policy "rewards_read" on reward_catalog for select to authenticated using (true);

-- Reward unlocks: users manage their own
create policy "unlocks_own" on reward_unlocks for all to authenticated
  using (profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Activity feed: readable by all authenticated (social feed)
create policy "feed_read" on activity_feed_events for select to authenticated using (true);
create policy "feed_insert_own" on activity_feed_events for insert to authenticated
  with check (profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Study plans: users manage their own
create policy "plans_own" on study_plans for all to authenticated
  using (profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Module resources: readable by all authenticated
create policy "resources_read" on module_resources for select to authenticated using (true);

-- Library items: readable by all authenticated
create policy "library_read" on library_items for select to authenticated using (true);

-- Question bank: readable by all authenticated
create policy "qbank_read" on question_bank for select to authenticated using (true);

-- Instructor feedback: students see their own
create policy "feedback_own" on instructor_feedback for select to authenticated
  using (student_profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Attendance: users manage their own
create policy "attendance_own" on attendance_records for all to authenticated
  using (profile_id in (select id from student_profiles where account_id = auth.uid()));

-- Whiteboard & quiz events: readable by all authenticated (real-time collaboration)
create policy "whiteboard_read" on whiteboard_events for select to authenticated using (true);
create policy "whiteboard_insert" on whiteboard_events for insert to authenticated
  with check (user_id = auth.uid());
create policy "quiz_events_read" on quiz_game_events for select to authenticated using (true);
create policy "quiz_events_insert" on quiz_game_events for insert to authenticated
  with check (user_id = auth.uid());

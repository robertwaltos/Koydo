-- E-11: Creator Pipeline
-- Draft → review → publish workflow with quality rubric and provenance tracking

-- =====================================================================
-- 1. Content Submissions (the core pipeline object)
-- =====================================================================

create table if not exists content_submissions (
  id                  uuid primary key default gen_random_uuid(),
  creator_user_id     uuid not null references auth.users(id) on delete cascade,
  title               text not null check (char_length(title) between 2 and 200),
  description         text default '' check (char_length(description) <= 2000),
  subject             text not null,
  grade_band          text,           -- e.g. "K-2", "3-5", "6-8", "9-12"
  difficulty_band     text,           -- e.g. "101", "201", "301", "401"
  content             jsonb not null default '{}',  -- LearningModule-shaped JSON
  status              text not null default 'draft'
                        check (status in ('draft','submitted','in_review','revision_requested',
                                          'approved','published','rejected','archived')),

  -- Provenance
  source_type         text not null default 'original'
                        check (source_type in ('original','adapted','curated','ai_assisted',
                                               'translated','remix')),
  source_attribution  text default '',  -- original creator/source
  derivation_chain    jsonb default '[]',  -- [{sourceId, relationship, date}]

  -- Rights
  license_type        text not null default 'cc-by-4.0'
                        check (license_type in ('cc-by-4.0','cc-by-sa-4.0','cc-by-nc-4.0',
                                                'cc0','all-rights-reserved','educational-use',
                                                'custom')),
  rights_holder       text default '',
  rights_notes        text default '',
  rights_verified     boolean not null default false,

  -- Quality
  rubric_score        numeric(4,2),     -- overall quality score (0-100)
  rubric_details      jsonb default '{}',  -- per-dimension scores
  minimum_score       numeric(4,2) not null default 70.00,

  -- Timestamps
  submitted_at        timestamptz,
  reviewed_at         timestamptz,
  published_at        timestamptz,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create index idx_content_submissions_creator on content_submissions (creator_user_id);
create index idx_content_submissions_status on content_submissions (status);
create index idx_content_submissions_subject on content_submissions (subject, status);

-- =====================================================================
-- 2. Content Reviews (rubric-based review records)
-- =====================================================================

create table if not exists content_reviews (
  id                  uuid primary key default gen_random_uuid(),
  submission_id       uuid not null references content_submissions(id) on delete cascade,
  reviewer_user_id    uuid not null references auth.users(id) on delete cascade,
  verdict             text not null
                        check (verdict in ('approve','request_revision','reject')),

  -- Rubric scores (each 0-100)
  accuracy_score      integer not null check (accuracy_score between 0 and 100),
  clarity_score       integer not null check (clarity_score between 0 and 100),
  engagement_score    integer not null check (engagement_score between 0 and 100),
  age_appropriateness integer not null check (age_appropriateness between 0 and 100),
  standards_alignment integer not null check (standards_alignment between 0 and 100),
  overall_score       numeric(4,2) generated always as (
    (accuracy_score + clarity_score + engagement_score +
     age_appropriateness + standards_alignment) / 5.0
  ) stored,

  comments            text default '' check (char_length(comments) <= 5000),
  revision_notes      text default '' check (char_length(revision_notes) <= 2000),

  created_at          timestamptz not null default now()
);

create index idx_content_reviews_submission on content_reviews (submission_id);
create index idx_content_reviews_reviewer on content_reviews (reviewer_user_id);

-- =====================================================================
-- 3. RLS Policies
-- =====================================================================

alter table content_submissions enable row level security;
alter table content_reviews enable row level security;

-- Creators manage their own submissions
create policy "Creators manage own submissions"
  on content_submissions for all
  using (creator_user_id = auth.uid());

-- Reviewers (teachers/admins) can view submitted content
create policy "Reviewers view submitted content"
  on content_submissions for select
  using (
    status != 'draft'
    and exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and is_admin = true
    )
  );

-- Anyone can see published content
create policy "Public view published content"
  on content_submissions for select
  using (status = 'published');

-- Reviewers can insert reviews
create policy "Reviewers create reviews"
  on content_reviews for insert
  with check (
    reviewer_user_id = auth.uid()
    and exists (
      select 1 from user_profiles
      where user_id = auth.uid()
      and is_admin = true
    )
  );

-- Review creators can read their own reviews
create policy "Reviewers read own reviews"
  on content_reviews for select
  using (reviewer_user_id = auth.uid());

-- Submission creators can read reviews of their content
create policy "Creators read reviews of own content"
  on content_reviews for select
  using (
    submission_id in (
      select id from content_submissions where creator_user_id = auth.uid()
    )
  );

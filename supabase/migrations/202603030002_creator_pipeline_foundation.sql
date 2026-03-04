create table if not exists public.creator_submissions (
  id uuid primary key default gen_random_uuid(),
  creator_user_id uuid not null references auth.users(id) on delete cascade,
  assigned_reviewer_user_id uuid references auth.users(id) on delete set null,
  title text not null,
  summary text,
  content_type text not null default 'lesson_pack'
    check (content_type in ('lesson_pack', 'assessment_pack', 'activity_pack', 'audiobook_pack', 'video_pack')),
  draft_payload jsonb not null default '{}'::jsonb,
  workflow_status text not null default 'draft'
    check (workflow_status in ('draft', 'in_review', 'approved', 'published', 'rejected')),
  provenance_metadata jsonb not null default '{}'::jsonb,
  rights_metadata jsonb not null default '{}'::jsonb,
  rubric_score numeric(5,2)
    check (rubric_score is null or (rubric_score >= 0 and rubric_score <= 100)),
  rubric_breakdown jsonb,
  last_review_decision text
    check (last_review_decision is null or last_review_decision in ('approve', 'request_changes', 'reject')),
  review_notes text,
  reviewed_by_user_id uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  published_by_user_id uuid references auth.users(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.creator_submission_reviews (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.creator_submissions(id) on delete cascade,
  reviewer_user_id uuid not null references auth.users(id) on delete cascade,
  decision text not null
    check (decision in ('approve', 'request_changes', 'reject')),
  rubric_score numeric(5,2) not null
    check (rubric_score >= 0 and rubric_score <= 100),
  rubric_breakdown jsonb not null default '{}'::jsonb,
  notes text,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_creator_submissions_creator_status
  on public.creator_submissions(creator_user_id, workflow_status, updated_at desc);

create index if not exists idx_creator_submissions_reviewer_status
  on public.creator_submissions(assigned_reviewer_user_id, workflow_status, updated_at desc);

create index if not exists idx_creator_submissions_publishable
  on public.creator_submissions(workflow_status, rubric_score desc, updated_at desc);

create index if not exists idx_creator_submission_reviews_submission_created
  on public.creator_submission_reviews(submission_id, created_at desc);

create index if not exists idx_creator_submission_reviews_reviewer_created
  on public.creator_submission_reviews(reviewer_user_id, created_at desc);

drop trigger if exists creator_submissions_set_updated_at on public.creator_submissions;
create trigger creator_submissions_set_updated_at
before update on public.creator_submissions
for each row execute function public.set_updated_at();

alter table public.creator_submissions enable row level security;
alter table public.creator_submission_reviews enable row level security;

drop policy if exists "creator_submissions_select_owner_or_reviewer" on public.creator_submissions;
create policy "creator_submissions_select_owner_or_reviewer"
on public.creator_submissions
for select
to authenticated
using (
  creator_user_id = auth.uid()
  or assigned_reviewer_user_id = auth.uid()
);

drop policy if exists "creator_submissions_insert_owner" on public.creator_submissions;
create policy "creator_submissions_insert_owner"
on public.creator_submissions
for insert
to authenticated
with check (creator_user_id = auth.uid());

drop policy if exists "creator_submissions_update_owner_or_reviewer" on public.creator_submissions;
create policy "creator_submissions_update_owner_or_reviewer"
on public.creator_submissions
for update
to authenticated
using (
  creator_user_id = auth.uid()
  or assigned_reviewer_user_id = auth.uid()
)
with check (
  creator_user_id = auth.uid()
  or assigned_reviewer_user_id = auth.uid()
);

drop policy if exists "creator_submission_reviews_select_owner_or_reviewer" on public.creator_submission_reviews;
create policy "creator_submission_reviews_select_owner_or_reviewer"
on public.creator_submission_reviews
for select
to authenticated
using (
  reviewer_user_id = auth.uid()
  or exists (
    select 1
    from public.creator_submissions cs
    where cs.id = creator_submission_reviews.submission_id
      and (cs.creator_user_id = auth.uid() or cs.assigned_reviewer_user_id = auth.uid())
  )
);

drop policy if exists "creator_submission_reviews_insert_reviewer" on public.creator_submission_reviews;
create policy "creator_submission_reviews_insert_reviewer"
on public.creator_submission_reviews
for insert
to authenticated
with check (
  reviewer_user_id = auth.uid()
  and exists (
    select 1
    from public.creator_submissions cs
    where cs.id = creator_submission_reviews.submission_id
      and cs.assigned_reviewer_user_id = auth.uid()
      and cs.creator_user_id <> auth.uid()
  )
);

grant select, insert, update on public.creator_submissions to authenticated;
grant select, insert on public.creator_submission_reviews to authenticated;
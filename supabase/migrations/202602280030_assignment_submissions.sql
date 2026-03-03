-- Assignment Submissions table
-- Stores student answers + auto-graded results for class_assignments
-- Extends the existing class_assignments infrastructure

create table if not exists public.assignment_submissions (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references public.class_assignments(id) on delete cascade,
  class_id uuid not null references public.classroom_entities(id) on delete cascade,
  learner_user_id uuid not null references auth.users(id) on delete cascade,
  answers jsonb not null default '{}',
  score integer not null default 0,
  total integer not null default 0,
  percentage integer not null default 0,
  passed boolean not null default false,
  skill_breakdown jsonb default '{}',
  per_question jsonb default '[]',
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- One submission per student per assignment
  constraint uq_assignment_submission unique (assignment_id, learner_user_id)
);

-- Indexes
create index if not exists idx_assignment_submissions_assignment
  on public.assignment_submissions(assignment_id);
create index if not exists idx_assignment_submissions_learner
  on public.assignment_submissions(learner_user_id);
create index if not exists idx_assignment_submissions_class
  on public.assignment_submissions(class_id);

-- RLS
alter table public.assignment_submissions enable row level security;

-- Teachers can view submissions for their assignments
create policy "Teachers view submissions for their assignments"
  on public.assignment_submissions for select
  using (
    exists (
      select 1 from public.class_assignments ca
      join public.classroom_entities ce on ce.id = ca.class_id
      where ca.id = assignment_submissions.assignment_id
        and ce.teacher_user_id = auth.uid()
    )
  );

-- Students can view their own submissions
create policy "Students view own submissions"
  on public.assignment_submissions for select
  using (learner_user_id = auth.uid());

-- Students can insert their own submissions (one per assignment enforced by unique constraint)
create policy "Students submit assignments"
  on public.assignment_submissions for insert
  with check (
    learner_user_id = auth.uid()
    and exists (
      select 1 from public.class_enrollments ce
      where ce.class_id = assignment_submissions.class_id
        and ce.learner_user_id = auth.uid()
        and ce.parent_consent = true
    )
  );

-- Add metadata column to class_assignments if not exists
-- This stores the quiz config, generated questions, title, etc.
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'class_assignments'
      and column_name = 'metadata'
  ) then
    alter table public.class_assignments add column metadata jsonb default '{}';
  end if;
end $$;

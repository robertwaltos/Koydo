-- Creator submissions pipeline
create table if not exists creator_submissions (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  content_type text not null default 'lesson',
  subject text not null default 'General',
  grade_level text not null default '6-8',
  content text not null,
  description text,
  status text not null default 'pending',
  reviewer_id uuid references auth.users(id) on delete set null,
  review_notes text,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create index idx_creator_submissions_creator on creator_submissions(creator_id);
create index idx_creator_submissions_status on creator_submissions(status);

alter table creator_submissions enable row level security;
create policy "Creators read own submissions" on creator_submissions for select using (auth.uid() = creator_id);
create policy "Reviewers read pending submissions" on creator_submissions for select using (
  status = 'pending' and exists (
    select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'educator', 'reviewer')
  )
);
create policy "Users submit content" on creator_submissions for insert with check (auth.uid() = creator_id);
create policy "Reviewers update submissions" on creator_submissions for update using (
  exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'educator', 'reviewer'))
);

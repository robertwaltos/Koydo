-- Peer review submissions
create table if not exists peer_reviews (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  lesson_id text,
  title text not null,
  content text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create index idx_peer_reviews_author on peer_reviews(author_id);
create index idx_peer_reviews_status on peer_reviews(status);

alter table peer_reviews enable row level security;
create policy "Users read all peer reviews" on peer_reviews for select using (true);
create policy "Users insert own peer reviews" on peer_reviews for insert with check (auth.uid() = author_id);
create policy "Users update own peer reviews" on peer_reviews for update using (auth.uid() = author_id);

-- Peer review feedback
create table if not exists peer_review_feedback (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references peer_reviews(id) on delete cascade,
  reviewer_id uuid not null references auth.users(id) on delete cascade,
  rating int not null check (rating >= 1 and rating <= 5),
  feedback text not null,
  created_at timestamptz not null default now()
);

alter table peer_review_feedback enable row level security;
create policy "Users read review feedback" on peer_review_feedback for select using (true);
create policy "Users insert review feedback" on peer_review_feedback for insert with check (auth.uid() = reviewer_id);

-- Tutoring requests
create table if not exists tutoring_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references auth.users(id) on delete cascade,
  tutor_id uuid references auth.users(id) on delete set null,
  subject text not null,
  topic text not null,
  description text,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create index idx_tutoring_requester on tutoring_requests(requester_id);
create index idx_tutoring_status on tutoring_requests(status);

alter table tutoring_requests enable row level security;
create policy "Users read all tutoring requests" on tutoring_requests for select using (true);
create policy "Users insert own tutoring requests" on tutoring_requests for insert with check (auth.uid() = requester_id);
create policy "Users update relevant tutoring requests" on tutoring_requests for update using (auth.uid() = requester_id or auth.uid() = tutor_id);

-- Quick polls
create table if not exists quick_polls (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references auth.users(id) on delete cascade,
  module_id text,
  lesson_id text,
  question text not null,
  options jsonb not null default '[]',
  results jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index idx_polls_module on quick_polls(module_id);

alter table quick_polls enable row level security;
create policy "Users read all polls" on quick_polls for select using (true);
create policy "Users create polls" on quick_polls for insert with check (auth.uid() = creator_id);
create policy "Anyone can update poll results" on quick_polls for update using (true);

-- Poll responses (one vote per user per poll)
create table if not exists poll_responses (
  id uuid primary key default gen_random_uuid(),
  poll_id uuid not null references quick_polls(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  selected_option text not null,
  created_at timestamptz not null default now(),
  unique(poll_id, user_id)
);

alter table poll_responses enable row level security;
create policy "Users read own poll responses" on poll_responses for select using (auth.uid() = user_id);
create policy "Users insert own poll responses" on poll_responses for insert with check (auth.uid() = user_id);

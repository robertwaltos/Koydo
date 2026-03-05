-- Quiz games
create table if not exists quiz_games (
  id uuid primary key default gen_random_uuid(),
  host_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  questions jsonb not null default '[]',
  status text not null default 'waiting',
  player_count int not null default 1,
  created_at timestamptz not null default now()
);

create index idx_quiz_games_status on quiz_games(status);

alter table quiz_games enable row level security;
create policy "Anyone reads quiz games" on quiz_games for select using (true);
create policy "Users create quiz games" on quiz_games for insert with check (auth.uid() = host_id);
create policy "Anyone updates quiz games" on quiz_games for update using (true);

-- Quiz game scores
create table if not exists quiz_game_scores (
  id uuid primary key default gen_random_uuid(),
  game_id uuid not null references quiz_games(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  score int not null default 0,
  total_questions int not null default 5,
  time_ms int not null default 0,
  created_at timestamptz not null default now(),
  unique(game_id, user_id)
);

alter table quiz_game_scores enable row level security;
create policy "Anyone reads scores" on quiz_game_scores for select using (true);
create policy "Users insert own scores" on quiz_game_scores for insert with check (auth.uid() = user_id);
create policy "Users update own scores" on quiz_game_scores for update using (auth.uid() = user_id);

-- Whiteboards
create table if not exists whiteboards (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Untitled',
  module_id text,
  canvas_data text not null default '{"elements":[],"version":1}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_whiteboards_owner on whiteboards(owner_id);

alter table whiteboards enable row level security;
create policy "Owners read whiteboards" on whiteboards for select using (auth.uid() = owner_id);
create policy "Owners create whiteboards" on whiteboards for insert with check (auth.uid() = owner_id);
create policy "Owners update whiteboards" on whiteboards for update using (auth.uid() = owner_id);
create policy "Owners delete whiteboards" on whiteboards for delete using (auth.uid() = owner_id);

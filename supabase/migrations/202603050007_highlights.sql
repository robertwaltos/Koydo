-- User highlights / annotations for lesson content
create table if not exists user_highlights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  lesson_id text,
  selected_text text not null,
  annotation text,
  color text not null default 'yellow',
  position_start int,
  position_end int,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_highlights_user on user_highlights(user_id);
create index idx_highlights_module on user_highlights(user_id, module_id);

alter table user_highlights enable row level security;

create policy "Users read own highlights" on user_highlights for select using (auth.uid() = user_id);
create policy "Users insert own highlights" on user_highlights for insert with check (auth.uid() = user_id);
create policy "Users update own highlights" on user_highlights for update using (auth.uid() = user_id);
create policy "Users delete own highlights" on user_highlights for delete using (auth.uid() = user_id);

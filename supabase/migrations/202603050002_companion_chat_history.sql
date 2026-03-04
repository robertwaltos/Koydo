-- Companion chat history persistence.
-- Stores last N messages per user for cross-device chat continuity.

create table if not exists public.companion_chat_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  companion_gender text not null check (companion_gender in ('female', 'male')),
  messages jsonb not null default '[]'::jsonb,
  mood text not null default 'neutral',
  total_messages_sent integer not null default 0,
  last_active_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- One history row per user per companion
create unique index if not exists companion_chat_history_user_gender
  on public.companion_chat_history (user_id, companion_gender);

-- Index for activity lookups
create index if not exists companion_chat_history_last_active
  on public.companion_chat_history (user_id, last_active_at desc);

-- RLS: users can only access their own chat history
alter table public.companion_chat_history enable row level security;

create policy "Users can read own companion chat history"
  on public.companion_chat_history for select
  using (auth.uid() = user_id);

create policy "Users can insert own companion chat history"
  on public.companion_chat_history for insert
  with check (auth.uid() = user_id);

create policy "Users can update own companion chat history"
  on public.companion_chat_history for update
  using (auth.uid() = user_id);

-- Offline sync events table for deduplication and replay
-- Stores individual answer events synced back from offline packs.

create table if not exists offline_sync_events (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  client_event_id uuid not null,
  client_device_id text not null,
  pack_id         uuid not null,
  lesson_id       text not null,
  module_id       text not null,
  question_id     text not null,
  selected_option_id text not null,
  correct         boolean not null default false,
  answered_at     timestamptz not null,
  synced_at       timestamptz not null default now(),

  constraint uq_offline_sync_client_event unique (user_id, client_event_id)
);

-- Index for dedup lookups
create index if not exists idx_offline_sync_user_client
  on offline_sync_events (user_id, client_event_id);

-- Index for pack-level queries
create index if not exists idx_offline_sync_pack
  on offline_sync_events (pack_id, user_id);

-- RLS
alter table offline_sync_events enable row level security;

-- Users can read their own sync events
create policy "Users read own sync events"
  on offline_sync_events for select
  using (auth.uid() = user_id);

-- Users can insert their own sync events
create policy "Users insert own sync events"
  on offline_sync_events for insert
  with check (auth.uid() = user_id);

-- Message threads
create table if not exists message_threads (
  id uuid primary key default gen_random_uuid(),
  participant_a uuid not null references auth.users(id) on delete cascade,
  participant_b uuid not null references auth.users(id) on delete cascade,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index idx_threads_a on message_threads(participant_a);
create index idx_threads_b on message_threads(participant_b);

alter table message_threads enable row level security;
create policy "Participants read threads" on message_threads for select using (auth.uid() = participant_a or auth.uid() = participant_b);
create policy "Users create threads" on message_threads for insert with check (auth.uid() = participant_a);
create policy "Participants update threads" on message_threads for update using (auth.uid() = participant_a or auth.uid() = participant_b);

-- Direct messages
create table if not exists direct_messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references message_threads(id) on delete cascade,
  sender_id uuid not null references auth.users(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

create index idx_dm_thread on direct_messages(thread_id, created_at);

alter table direct_messages enable row level security;
create policy "Thread participants read messages" on direct_messages for select using (
  exists (
    select 1 from message_threads t
    where t.id = direct_messages.thread_id
    and (t.participant_a = auth.uid() or t.participant_b = auth.uid())
  )
);
create policy "Users send messages" on direct_messages for insert with check (auth.uid() = sender_id);

-- Collaborative workspaces
create table if not exists workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text,
  module_id text,
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table workspaces enable row level security;
create policy "Members read workspaces" on workspaces for select using (
  exists (select 1 from workspace_members wm where wm.workspace_id = workspaces.id and wm.user_id = auth.uid())
);
create policy "Owner inserts workspace" on workspaces for insert with check (auth.uid() = owner_id);
create policy "Members update workspace" on workspaces for update using (
  exists (select 1 from workspace_members wm where wm.workspace_id = workspaces.id and wm.user_id = auth.uid())
);

-- Workspace members
create table if not exists workspace_members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member',
  joined_at timestamptz not null default now(),
  unique(workspace_id, user_id)
);

alter table workspace_members enable row level security;
create policy "Members read membership" on workspace_members for select using (
  exists (select 1 from workspace_members wm2 where wm2.workspace_id = workspace_members.workspace_id and wm2.user_id = auth.uid())
);
create policy "Users insert membership" on workspace_members for insert with check (auth.uid() = user_id);

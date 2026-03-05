-- Blockchain-verified credentials
create table if not exists blockchain_credentials (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  certificate_id uuid not null,
  credential_hash text not null unique,
  token_id text not null,
  chain text not null default 'pending',
  status text not null default 'minted',
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index idx_blockchain_user on blockchain_credentials(user_id);
create index idx_blockchain_hash on blockchain_credentials(credential_hash);

alter table blockchain_credentials enable row level security;
create policy "Users read own blockchain creds" on blockchain_credentials for select using (auth.uid() = user_id);
create policy "Anyone can verify by hash" on blockchain_credentials for select using (true);
create policy "Users mint own creds" on blockchain_credentials for insert with check (auth.uid() = user_id);

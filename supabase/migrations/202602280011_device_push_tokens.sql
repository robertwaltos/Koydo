-- Migration: 202602280011_device_push_tokens
-- Adds a table to persist FCM/APNs device push tokens per user.

create table if not exists public.device_push_tokens (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  token       text not null,
  platform    text not null check (platform in ('ios', 'android')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  -- One token per device: the (user_id, token) pair must be unique.
  -- A user can have multiple devices (e.g., iPhone + iPad).
  unique (user_id, token)
);

-- Index for efficient lookup by user
create index if not exists idx_device_push_tokens_user_id
  on public.device_push_tokens (user_id);

-- Auto-update updated_at on upsert
create or replace function public.set_push_token_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_push_tokens_updated_at on public.device_push_tokens;
create trigger trg_push_tokens_updated_at
  before update on public.device_push_tokens
  for each row execute procedure public.set_push_token_updated_at();

-- RLS: users can only manage their own tokens
alter table public.device_push_tokens enable row level security;

create policy "Users can manage their own push tokens"
  on public.device_push_tokens
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

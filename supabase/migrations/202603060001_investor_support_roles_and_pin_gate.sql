-- Add investor and support role flags to user_profiles.
-- These flags gate role-specific portal entries in the navigation menu.

alter table public.user_profiles
  add column if not exists is_investor boolean not null default false,
  add column if not exists is_support  boolean not null default false;

create index if not exists user_profiles_is_investor_idx on public.user_profiles (user_id) where is_investor = true;
create index if not exists user_profiles_is_support_idx  on public.user_profiles (user_id) where is_support  = true;

-- Portal PIN gate table (one PIN per portal per user, 6-8 digits)
create table if not exists public.portal_pins (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  portal_type text not null,  -- 'parent','admin','investor','partner','teacher','school','support'
  pin_hash    text not null,  -- bcrypt hash of 6-8 digit PIN
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique(user_id, portal_type)
);

alter table public.portal_pins enable row level security;

create policy portal_pins_own on public.portal_pins
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

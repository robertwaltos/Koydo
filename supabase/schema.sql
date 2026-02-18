create extension if not exists "pgcrypto";

create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  birth_date date,
  age_group text,
  parent_email text,
  parental_consent_required boolean not null default false,
  parental_consent_status text not null default 'not_required',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_profiles_consent_status_check
    check (parental_consent_status in ('not_required', 'pending', 'verified', 'denied'))
);

create table if not exists public.user_tokens (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  month_key text not null,
  input_tokens bigint not null default 0,
  output_tokens bigint not null default 0,
  spent_usd numeric(12, 6) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, month_key)
);

create table if not exists public.parent_consents (
  id uuid primary key default gen_random_uuid(),
  child_user_id uuid not null references auth.users(id) on delete cascade,
  parent_email text not null,
  consent_method text not null default 'email_verification',
  status text not null default 'pending_verification',
  consent_version text not null default 'v1',
  region text,
  ip_address text,
  evidence jsonb,
  requested_at timestamptz not null default now(),
  verified_at timestamptz,
  constraint parent_consents_status_check
    check (status in ('pending_verification', 'verified', 'denied', 'expired')),
  constraint parent_consents_method_check
    check (consent_method in ('email_verification', 'micro_charge', 'id_check'))
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  stripe_price_id text,
  status text not null,
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  canceled_at timestamptz,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.dsar_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  request_type text not null,
  status text not null default 'pending',
  details jsonb,
  requested_at timestamptz not null default now(),
  resolved_at timestamptz,
  constraint dsar_request_type_check
    check (request_type in ('access', 'erasure', 'rectification', 'portability', 'restriction')),
  constraint dsar_status_check
    check (status in ('pending', 'in_progress', 'completed', 'rejected'))
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists user_profiles_set_updated_at on public.user_profiles;
create trigger user_profiles_set_updated_at
before update on public.user_profiles
for each row execute function public.set_updated_at();

drop trigger if exists user_tokens_set_updated_at on public.user_tokens;
create trigger user_tokens_set_updated_at
before update on public.user_tokens
for each row execute function public.set_updated_at();

drop trigger if exists subscriptions_set_updated_at on public.subscriptions;
create trigger subscriptions_set_updated_at
before update on public.subscriptions
for each row execute function public.set_updated_at();

alter table public.user_profiles enable row level security;
alter table public.user_tokens enable row level security;
alter table public.parent_consents enable row level security;
alter table public.subscriptions enable row level security;
alter table public.dsar_requests enable row level security;

drop policy if exists "profiles_select_own" on public.user_profiles;
create policy "profiles_select_own"
on public.user_profiles
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "profiles_update_own" on public.user_profiles;
create policy "profiles_update_own"
on public.user_profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "tokens_select_own" on public.user_tokens;
create policy "tokens_select_own"
on public.user_tokens
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "tokens_insert_own" on public.user_tokens;
create policy "tokens_insert_own"
on public.user_tokens
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "parent_consents_select_child" on public.parent_consents;
create policy "parent_consents_select_child"
on public.parent_consents
for select
to authenticated
using (auth.uid() = child_user_id);

drop policy if exists "parent_consents_insert_child" on public.parent_consents;
create policy "parent_consents_insert_child"
on public.parent_consents
for insert
to authenticated
with check (auth.uid() = child_user_id);

drop policy if exists "subscriptions_select_own" on public.subscriptions;
create policy "subscriptions_select_own"
on public.subscriptions
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "dsar_select_own" on public.dsar_requests;
create policy "dsar_select_own"
on public.dsar_requests
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "dsar_insert_own" on public.dsar_requests;
create policy "dsar_insert_own"
on public.dsar_requests
for insert
to authenticated
with check (auth.uid() = user_id);

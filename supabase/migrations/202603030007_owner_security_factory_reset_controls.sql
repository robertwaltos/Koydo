-- Owner security + factory reset controls:
-- - owner role + live/beta data mode on user profiles
-- - owner MFA/step-up factors and sessions
-- - module baseline snapshots for reset-aware modules
-- - tracked factory reset runs with dry-run/apply support
-- - ownership transfer playbooks

alter table public.user_profiles
  add column if not exists is_owner boolean not null default false;

alter table public.user_profiles
  add column if not exists data_mode text not null default 'live';

alter table public.user_profiles
  drop constraint if exists user_profiles_data_mode_check;

alter table public.user_profiles
  add constraint user_profiles_data_mode_check
  check (data_mode in ('live', 'beta'));

create or replace function public.prevent_zero_owner_profiles()
returns trigger
language plpgsql
as $$
declare
  remaining_owner_exists boolean;
begin
  if tg_op = 'UPDATE' and old.is_owner = true and new.is_owner = false then
    select exists (
      select 1
      from public.user_profiles up
      where up.user_id <> old.user_id
        and up.is_owner = true
    ) into remaining_owner_exists;

    if not remaining_owner_exists then
      raise exception 'Cannot remove the last owner profile.';
    end if;
  elsif tg_op = 'DELETE' and old.is_owner = true then
    select exists (
      select 1
      from public.user_profiles up
      where up.user_id <> old.user_id
        and up.is_owner = true
    ) into remaining_owner_exists;

    if not remaining_owner_exists then
      raise exception 'Cannot delete the last owner profile.';
    end if;
  end if;

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

drop trigger if exists user_profiles_prevent_zero_owner on public.user_profiles;
create trigger user_profiles_prevent_zero_owner
before update or delete on public.user_profiles
for each row execute function public.prevent_zero_owner_profiles();

with initial_owner as (
  select up.user_id
  from public.user_profiles up
  where up.is_admin = true
  order by up.created_at asc
  limit 1
)
update public.user_profiles up
set is_owner = true
from initial_owner io
where up.user_id = io.user_id
  and not exists (
    select 1
    from public.user_profiles p
    where p.is_owner = true
  );

create table if not exists public.owner_security_factors (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  factor_type text not null,
  label text,
  secret_encrypted text,
  email_address text,
  yubikey_public_id text,
  verified_at timestamptz,
  disabled_at timestamptz,
  last_used_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint owner_security_factors_factor_type_check
    check (factor_type in ('totp', 'secondary_email', 'yubikey_otp')),
  constraint owner_security_factors_email_format_check
    check (email_address is null or position('@' in email_address) > 1),
  constraint owner_security_factors_yubikey_public_id_check
    check (yubikey_public_id is null or char_length(yubikey_public_id) between 12 and 32)
);

create unique index if not exists idx_owner_security_factors_totp_unique
  on public.owner_security_factors(user_id, factor_type)
  where factor_type = 'totp' and disabled_at is null;

create unique index if not exists idx_owner_security_factors_email_unique
  on public.owner_security_factors(user_id, factor_type, email_address)
  where factor_type = 'secondary_email' and email_address is not null and disabled_at is null;

create unique index if not exists idx_owner_security_factors_yubikey_unique
  on public.owner_security_factors(user_id, factor_type, yubikey_public_id)
  where factor_type = 'yubikey_otp' and yubikey_public_id is not null and disabled_at is null;

drop trigger if exists owner_security_factors_set_updated_at on public.owner_security_factors;
create trigger owner_security_factors_set_updated_at
before update on public.owner_security_factors
for each row execute function public.set_updated_at();

create table if not exists public.owner_security_challenges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  factor_id uuid references public.owner_security_factors(id) on delete set null,
  challenge_type text not null,
  code_hash text not null,
  attempt_count integer not null default 0,
  max_attempts integer not null default 6,
  expires_at timestamptz not null,
  consumed_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint owner_security_challenges_type_check
    check (challenge_type in ('secondary_email')),
  constraint owner_security_challenges_attempt_count_check
    check (attempt_count >= 0 and max_attempts >= 1)
);

create index if not exists idx_owner_security_challenges_user_created
  on public.owner_security_challenges(user_id, created_at desc);

create index if not exists idx_owner_security_challenges_expires_at
  on public.owner_security_challenges(expires_at);

create table if not exists public.owner_step_up_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  scope text not null,
  factor_type text not null,
  token_hash text not null unique,
  issued_at timestamptz not null default now(),
  expires_at timestamptz not null,
  last_used_at timestamptz,
  revoked_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  constraint owner_step_up_sessions_factor_type_check
    check (factor_type in ('totp', 'secondary_email', 'yubikey_otp')),
  constraint owner_step_up_sessions_scope_check
    check (scope in ('owner_console', 'factory_reset', 'ownership_transfer', 'security_admin'))
);

create index if not exists idx_owner_step_up_sessions_user_scope_expires
  on public.owner_step_up_sessions(user_id, scope, expires_at desc);

create table if not exists public.owner_security_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  factor_type text,
  severity text not null default 'info',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint owner_security_events_severity_check
    check (severity in ('info', 'warning', 'critical')),
  constraint owner_security_events_factor_type_check
    check (factor_type is null or factor_type in ('totp', 'secondary_email', 'yubikey_otp'))
);

create index if not exists idx_owner_security_events_user_created
  on public.owner_security_events(user_id, created_at desc);

create table if not exists public.module_baseline_snapshots (
  module_id text primary key,
  module_title text not null,
  requires_baseline boolean not null default true,
  baseline_version text not null,
  baseline_payload jsonb not null default '{}'::jsonb,
  captured_at timestamptz not null default now(),
  captured_by uuid references auth.users(id) on delete set null
);

create index if not exists idx_module_baseline_snapshots_requires_baseline
  on public.module_baseline_snapshots(requires_baseline, captured_at desc);

create table if not exists public.owner_factory_reset_runs (
  id uuid primary key default gen_random_uuid(),
  requested_by uuid not null references auth.users(id) on delete cascade,
  executed_by uuid references auth.users(id) on delete set null,
  mode text not null default 'dry_run',
  scope text not null default 'beta_only',
  status text not null default 'running',
  reason text,
  target_user_count integer not null default 0,
  rows_scanned integer not null default 0,
  rows_deleted integer not null default 0,
  table_stats jsonb not null default '{}'::jsonb,
  baseline_version text,
  promote_beta_users_to_live boolean not null default true,
  include_module_baseline_refresh boolean not null default true,
  error text,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint owner_factory_reset_runs_mode_check
    check (mode in ('dry_run', 'apply')),
  constraint owner_factory_reset_runs_scope_check
    check (scope in ('beta_only', 'all_non_owner')),
  constraint owner_factory_reset_runs_status_check
    check (status in ('running', 'completed', 'failed'))
);

create index if not exists idx_owner_factory_reset_runs_created
  on public.owner_factory_reset_runs(created_at desc);

drop trigger if exists owner_factory_reset_runs_set_updated_at on public.owner_factory_reset_runs;
create trigger owner_factory_reset_runs_set_updated_at
before update on public.owner_factory_reset_runs
for each row execute function public.set_updated_at();

create table if not exists public.owner_transfer_playbooks (
  id uuid primary key default gen_random_uuid(),
  initiated_by uuid not null references auth.users(id) on delete cascade,
  current_owner_user_id uuid not null references auth.users(id) on delete restrict,
  candidate_owner_user_id uuid not null references auth.users(id) on delete restrict,
  status text not null default 'planned',
  notes text,
  checklist jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  executed_by uuid references auth.users(id) on delete set null,
  executed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint owner_transfer_playbooks_status_check
    check (status in ('planned', 'ready', 'executed', 'cancelled')),
  constraint owner_transfer_playbooks_distinct_owner_check
    check (current_owner_user_id <> candidate_owner_user_id)
);

create index if not exists idx_owner_transfer_playbooks_status_created
  on public.owner_transfer_playbooks(status, created_at desc);

drop trigger if exists owner_transfer_playbooks_set_updated_at on public.owner_transfer_playbooks;
create trigger owner_transfer_playbooks_set_updated_at
before update on public.owner_transfer_playbooks
for each row execute function public.set_updated_at();

alter table public.owner_security_factors enable row level security;
alter table public.owner_security_challenges enable row level security;
alter table public.owner_step_up_sessions enable row level security;
alter table public.owner_security_events enable row level security;
alter table public.module_baseline_snapshots enable row level security;
alter table public.owner_factory_reset_runs enable row level security;
alter table public.owner_transfer_playbooks enable row level security;

drop policy if exists "owner_security_factors_owner_all" on public.owner_security_factors;
create policy "owner_security_factors_owner_all"
on public.owner_security_factors
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "owner_security_challenges_owner_all" on public.owner_security_challenges;
create policy "owner_security_challenges_owner_all"
on public.owner_security_challenges
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "owner_step_up_sessions_owner_all" on public.owner_step_up_sessions;
create policy "owner_step_up_sessions_owner_all"
on public.owner_step_up_sessions
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "owner_security_events_owner_read" on public.owner_security_events;
create policy "owner_security_events_owner_read"
on public.owner_security_events
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "owner_security_events_owner_insert" on public.owner_security_events;
create policy "owner_security_events_owner_insert"
on public.owner_security_events
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "module_baseline_snapshots_owner_read" on public.module_baseline_snapshots;
create policy "module_baseline_snapshots_owner_read"
on public.module_baseline_snapshots
for select
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_owner = true
  )
);

drop policy if exists "module_baseline_snapshots_owner_write" on public.module_baseline_snapshots;
create policy "module_baseline_snapshots_owner_write"
on public.module_baseline_snapshots
for all
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_owner = true
  )
)
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_owner = true
  )
);

drop policy if exists "owner_factory_reset_runs_owner_all" on public.owner_factory_reset_runs;
create policy "owner_factory_reset_runs_owner_all"
on public.owner_factory_reset_runs
for all
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_owner = true
  )
)
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_owner = true
  )
);

drop policy if exists "owner_transfer_playbooks_owner_all" on public.owner_transfer_playbooks;
create policy "owner_transfer_playbooks_owner_all"
on public.owner_transfer_playbooks
for all
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_owner = true
  )
)
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_owner = true
  )
);

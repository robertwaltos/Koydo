-- School partner API access:
-- - scoped API keys for school/district partners
-- - jurisdiction-aware export request logging

create table if not exists public.partner_school_api_keys (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  organization_id uuid references public.organizations(id) on delete set null,
  label text not null,
  key_hash text not null unique,
  key_prefix text not null,
  scopes text[] not null default array[]::text[],
  status text not null default 'active',
  expires_at timestamptz,
  last_used_at timestamptz,
  revoked_at timestamptz,
  revoked_by uuid references auth.users(id) on delete set null,
  created_by uuid references auth.users(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_school_api_keys_status_check
    check (status in ('active', 'revoked', 'expired')),
  constraint partner_school_api_keys_label_check
    check (char_length(label) >= 2 and char_length(label) <= 160),
  constraint partner_school_api_keys_prefix_check
    check (char_length(key_prefix) >= 8 and char_length(key_prefix) <= 40)
);

create index if not exists idx_partner_school_api_keys_partner_status
  on public.partner_school_api_keys(partner_id, status, created_at desc);

create index if not exists idx_partner_school_api_keys_organization_status
  on public.partner_school_api_keys(organization_id, status, created_at desc);

create table if not exists public.partner_school_api_usage_logs (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  organization_id uuid references public.organizations(id) on delete set null,
  api_key_id uuid references public.partner_school_api_keys(id) on delete set null,
  request_path text not null,
  http_method text not null default 'GET',
  datasets text[] not null default array[]::text[],
  status_code integer not null,
  response_row_count integer not null default 0,
  response_bytes integer not null default 0,
  request_country text,
  request_time_zone text,
  request_ip text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint partner_school_api_usage_logs_status_code_check
    check (status_code >= 100 and status_code <= 599),
  constraint partner_school_api_usage_logs_row_count_check
    check (response_row_count >= 0),
  constraint partner_school_api_usage_logs_bytes_check
    check (response_bytes >= 0)
);

create index if not exists idx_partner_school_api_usage_logs_partner_created
  on public.partner_school_api_usage_logs(partner_id, created_at desc);

create index if not exists idx_partner_school_api_usage_logs_key_created
  on public.partner_school_api_usage_logs(api_key_id, created_at desc);

drop trigger if exists partner_school_api_keys_set_updated_at on public.partner_school_api_keys;
create trigger partner_school_api_keys_set_updated_at
before update on public.partner_school_api_keys
for each row execute function public.set_updated_at();

alter table public.partner_school_api_keys enable row level security;
alter table public.partner_school_api_usage_logs enable row level security;

drop policy if exists "partner_school_api_keys_admin_all" on public.partner_school_api_keys;
create policy "partner_school_api_keys_admin_all"
on public.partner_school_api_keys
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_school_api_keys_select_portal_member" on public.partner_school_api_keys;
create policy "partner_school_api_keys_select_portal_member"
on public.partner_school_api_keys
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_school_api_keys.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_school_api_keys_manage_portal_owner_manager_finance" on public.partner_school_api_keys;
create policy "partner_school_api_keys_manage_portal_owner_manager_finance"
on public.partner_school_api_keys
for all
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_school_api_keys.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'manager', 'finance_contact')
  )
)
with check (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_school_api_keys.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'manager', 'finance_contact')
  )
);

drop policy if exists "partner_school_api_usage_logs_admin_all" on public.partner_school_api_usage_logs;
create policy "partner_school_api_usage_logs_admin_all"
on public.partner_school_api_usage_logs
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_school_api_usage_logs_select_portal_member" on public.partner_school_api_usage_logs;
create policy "partner_school_api_usage_logs_select_portal_member"
on public.partner_school_api_usage_logs
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_school_api_usage_logs.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_school_api_usage_logs_insert_portal_owner_manager_finance" on public.partner_school_api_usage_logs;
create policy "partner_school_api_usage_logs_insert_portal_owner_manager_finance"
on public.partner_school_api_usage_logs
for insert
to authenticated
with check (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_school_api_usage_logs.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'manager', 'finance_contact')
  )
);

grant select, insert, update on public.partner_school_api_keys to authenticated;
grant select, insert on public.partner_school_api_usage_logs to authenticated;

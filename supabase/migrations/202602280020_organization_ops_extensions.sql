-- Organization operations extensions:
-- - invites
-- - SIS/SCIM roster staging
-- - report exports + scheduling
-- - PO/ACH/wire billing metadata

alter table public.organization_license_purchases
  add column if not exists payment_method text,
  add column if not exists purchase_order_number text,
  add column if not exists invoice_reference text,
  add column if not exists invoice_due_at timestamptz,
  add column if not exists paid_at timestamptz,
  add column if not exists notes text;

update public.organization_license_purchases
set payment_method = coalesce(payment_method, 'card');

alter table public.organization_license_purchases
  alter column payment_method set default 'card';

alter table public.organization_license_purchases
  alter column payment_method set not null;

alter table public.organization_license_purchases
  drop constraint if exists organization_license_purchases_payment_method_check;

alter table public.organization_license_purchases
  add constraint organization_license_purchases_payment_method_check
  check (payment_method in ('card', 'ach', 'wire', 'po'));

alter table public.organization_license_purchases
  drop constraint if exists organization_license_purchases_status_check;

alter table public.organization_license_purchases
  add constraint organization_license_purchases_status_check
  check (
    status in (
      'checkout_created',
      'invoicing',
      'paid',
      'partially_allocated',
      'fully_allocated',
      'canceled',
      'refunded'
    )
  );

create table if not exists public.organization_invites (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  email text not null,
  role text not null default 'viewer',
  invite_token_hash text not null unique,
  invite_token_preview text not null,
  invited_by uuid not null references auth.users(id) on delete restrict,
  accepted_by uuid references auth.users(id) on delete set null,
  status text not null default 'pending',
  expires_at timestamptz not null,
  accepted_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint organization_invites_status_check
    check (status in ('pending', 'accepted', 'expired', 'revoked')),
  constraint organization_invites_role_check
    check (role in ('owner', 'admin', 'teacher', 'it_manager', 'viewer'))
);

create index if not exists idx_organization_invites_org_status
  on public.organization_invites(organization_id, status, created_at desc);

create index if not exists idx_organization_invites_email_status
  on public.organization_invites(email, status, created_at desc);

drop trigger if exists organization_invites_set_updated_at on public.organization_invites;
create trigger organization_invites_set_updated_at
before update on public.organization_invites
for each row execute function public.set_updated_at();

alter table public.organization_invites enable row level security;

drop policy if exists "organization_invites_select_org_members" on public.organization_invites;
create policy "organization_invites_select_org_members"
on public.organization_invites
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_invites.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
);

drop policy if exists "organization_invites_manage_org_admin" on public.organization_invites;
create policy "organization_invites_manage_org_admin"
on public.organization_invites
for all
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_invites.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'it_manager')
  )
)
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_invites.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'it_manager')
  )
);

create table if not exists public.organization_roster_entries (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  external_student_id text,
  email text,
  display_name text,
  school_name text,
  grade_level text,
  linked_user_id uuid references auth.users(id) on delete set null,
  linked_student_profile_id uuid references public.student_profiles(id) on delete set null,
  source text not null default 'manual',
  status text not null default 'pending',
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint organization_roster_entries_status_check
    check (status in ('pending', 'invited', 'provisioned', 'inactive')),
  constraint organization_roster_entries_source_check
    check (source in ('manual', 'csv', 'scim', 'sis'))
);

create unique index if not exists idx_organization_roster_external_unique
  on public.organization_roster_entries(organization_id, external_student_id)
  where external_student_id is not null;

create index if not exists idx_organization_roster_org_status
  on public.organization_roster_entries(organization_id, status, created_at desc);

create index if not exists idx_organization_roster_org_school
  on public.organization_roster_entries(organization_id, school_name);

drop trigger if exists organization_roster_entries_set_updated_at on public.organization_roster_entries;
create trigger organization_roster_entries_set_updated_at
before update on public.organization_roster_entries
for each row execute function public.set_updated_at();

alter table public.organization_roster_entries enable row level security;

drop policy if exists "organization_roster_select_org_member" on public.organization_roster_entries;
create policy "organization_roster_select_org_member"
on public.organization_roster_entries
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_roster_entries.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
);

drop policy if exists "organization_roster_manage_org_staff" on public.organization_roster_entries;
create policy "organization_roster_manage_org_staff"
on public.organization_roster_entries
for all
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_roster_entries.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
)
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_roster_entries.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
);

create table if not exists public.organization_report_exports (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  requested_by uuid not null references auth.users(id) on delete restrict,
  format text not null default 'csv',
  status text not null default 'completed',
  row_count integer not null default 0,
  byte_size integer not null default 0,
  content_base64 text,
  checksum_sha256 text,
  report_window_days integer not null default 30,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  constraint organization_report_exports_format_check
    check (format in ('csv', 'pdf')),
  constraint organization_report_exports_status_check
    check (status in ('running', 'completed', 'failed'))
);

create index if not exists idx_organization_report_exports_org_created
  on public.organization_report_exports(organization_id, created_at desc);

alter table public.organization_report_exports enable row level security;

drop policy if exists "organization_report_exports_select_org_members" on public.organization_report_exports;
create policy "organization_report_exports_select_org_members"
on public.organization_report_exports
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_report_exports.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
);

drop policy if exists "organization_report_exports_insert_org_staff" on public.organization_report_exports;
create policy "organization_report_exports_insert_org_staff"
on public.organization_report_exports
for insert
to authenticated
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_report_exports.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
);

create table if not exists public.organization_report_jobs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  requested_by uuid not null references auth.users(id) on delete restrict,
  format text not null default 'csv',
  report_window_days integer not null default 30,
  cadence text not null default 'once',
  run_after timestamptz not null default now(),
  status text not null default 'queued',
  delivery_emails text[] not null default '{}',
  metadata jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  completed_at timestamptz,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint organization_report_jobs_format_check
    check (format in ('csv', 'pdf')),
  constraint organization_report_jobs_status_check
    check (status in ('queued', 'running', 'completed', 'failed')),
  constraint organization_report_jobs_cadence_check
    check (cadence in ('once', 'daily', 'weekly', 'monthly')),
  constraint organization_report_jobs_window_check
    check (report_window_days between 1 and 365)
);

create index if not exists idx_organization_report_jobs_status_run_after
  on public.organization_report_jobs(status, run_after);

create index if not exists idx_organization_report_jobs_org_created
  on public.organization_report_jobs(organization_id, created_at desc);

drop trigger if exists organization_report_jobs_set_updated_at on public.organization_report_jobs;
create trigger organization_report_jobs_set_updated_at
before update on public.organization_report_jobs
for each row execute function public.set_updated_at();

alter table public.organization_report_jobs enable row level security;

drop policy if exists "organization_report_jobs_select_org_members" on public.organization_report_jobs;
create policy "organization_report_jobs_select_org_members"
on public.organization_report_jobs
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_report_jobs.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
);

drop policy if exists "organization_report_jobs_manage_org_staff" on public.organization_report_jobs;
create policy "organization_report_jobs_manage_org_staff"
on public.organization_report_jobs
for all
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_report_jobs.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
)
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_report_jobs.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
);


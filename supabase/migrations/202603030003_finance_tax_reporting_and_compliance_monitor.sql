-- Investor tax reporting + compliance calendar/alerts for filing deadlines.

create table if not exists public.investor_tax_profiles (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid not null references public.investors(id) on delete cascade,
  tax_form_type text not null default 'none',
  tax_classification text,
  tin_type text not null default 'none',
  tin_last4 text,
  us_taxpayer boolean not null default false,
  backup_withholding_required boolean not null default false,
  withholding_rate numeric(6, 5) not null default 0,
  exemption_code text,
  fatca_status text not null default 'unknown',
  form_received_at date,
  form_expiration_date date,
  status text not null default 'pending',
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint investor_tax_profiles_tax_form_type_check
    check (tax_form_type in ('w9', 'w8_ben', 'w8_ben_e', 'w8_eci', 'w8_imy', 'none', 'other')),
  constraint investor_tax_profiles_tin_type_check
    check (tin_type in ('ssn', 'ein', 'itin', 'foreign', 'other', 'none')),
  constraint investor_tax_profiles_withholding_rate_check
    check (withholding_rate >= 0 and withholding_rate <= 1),
  constraint investor_tax_profiles_fatca_status_check
    check (fatca_status in ('unknown', 'not_applicable', 'reportable', 'documented')),
  constraint investor_tax_profiles_status_check
    check (status in ('pending', 'valid', 'expired', 'rejected')),
  unique (investor_id)
);

create table if not exists public.finance_compliance_requirements (
  id uuid primary key default gen_random_uuid(),
  requirement_code text not null unique,
  requirement_name text not null,
  authority_name text not null,
  jurisdiction text not null default 'US',
  applies_to text not null default 'business',
  cadence text not null default 'annual',
  due_month integer,
  due_day integer not null default 15,
  due_offset_days integer not null default 0,
  filing_method text not null default 'electronic',
  report_type text,
  default_alert_lead_days integer not null default 30,
  is_active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint finance_compliance_requirements_applies_to_check
    check (applies_to in ('investor', 'business', 'banking', 'payroll', 'tax')),
  constraint finance_compliance_requirements_cadence_check
    check (cadence in ('monthly', 'quarterly', 'annual', 'custom')),
  constraint finance_compliance_requirements_due_month_check
    check (due_month is null or (due_month >= 1 and due_month <= 12)),
  constraint finance_compliance_requirements_due_day_check
    check (due_day >= 1 and due_day <= 31),
  constraint finance_compliance_requirements_due_offset_days_check
    check (due_offset_days >= -365 and due_offset_days <= 365),
  constraint finance_compliance_requirements_filing_method_check
    check (filing_method in ('electronic', 'paper', 'either')),
  constraint finance_compliance_requirements_alert_lead_days_check
    check (default_alert_lead_days >= 0 and default_alert_lead_days <= 365)
);

create table if not exists public.finance_compliance_calendar (
  id uuid primary key default gen_random_uuid(),
  requirement_id uuid not null references public.finance_compliance_requirements(id) on delete cascade,
  period_start date not null,
  period_end date not null,
  due_date date not null,
  filing_method text not null default 'electronic',
  status text not null default 'upcoming',
  report_export_id uuid references public.admin_report_exports(id) on delete set null,
  submission_method text,
  submission_reference text,
  submitted_at timestamptz,
  assigned_to uuid references auth.users(id) on delete set null,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint finance_compliance_calendar_filing_method_check
    check (filing_method in ('electronic', 'paper', 'either')),
  constraint finance_compliance_calendar_status_check
    check (status in ('upcoming', 'prepared', 'submitted', 'waived', 'overdue')),
  constraint finance_compliance_calendar_submission_method_check
    check (submission_method is null or submission_method in ('electronic', 'paper', 'other')),
  constraint finance_compliance_calendar_period_check
    check (period_end >= period_start),
  unique (requirement_id, period_start, period_end)
);

create index if not exists idx_finance_compliance_calendar_due_status
  on public.finance_compliance_calendar(due_date, status, created_at desc);

create table if not exists public.finance_compliance_alerts (
  id uuid primary key default gen_random_uuid(),
  calendar_id uuid not null references public.finance_compliance_calendar(id) on delete cascade,
  severity text not null default 'warning',
  alert_status text not null default 'open',
  title text not null,
  message text not null,
  first_raised_at timestamptz not null default now(),
  last_raised_at timestamptz not null default now(),
  acknowledged_at timestamptz,
  resolved_at timestamptz,
  escalation_count integer not null default 0,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint finance_compliance_alerts_severity_check
    check (severity in ('info', 'warning', 'critical')),
  constraint finance_compliance_alerts_status_check
    check (alert_status in ('open', 'acknowledged', 'resolved', 'dismissed')),
  constraint finance_compliance_alerts_escalation_count_check
    check (escalation_count >= 0),
  unique (calendar_id)
);

create index if not exists idx_finance_compliance_alerts_status_severity
  on public.finance_compliance_alerts(alert_status, severity, created_at desc);

drop trigger if exists investor_tax_profiles_set_updated_at on public.investor_tax_profiles;
create trigger investor_tax_profiles_set_updated_at
before update on public.investor_tax_profiles
for each row execute function public.set_updated_at();

drop trigger if exists finance_compliance_requirements_set_updated_at on public.finance_compliance_requirements;
create trigger finance_compliance_requirements_set_updated_at
before update on public.finance_compliance_requirements
for each row execute function public.set_updated_at();

drop trigger if exists finance_compliance_calendar_set_updated_at on public.finance_compliance_calendar;
create trigger finance_compliance_calendar_set_updated_at
before update on public.finance_compliance_calendar
for each row execute function public.set_updated_at();

drop trigger if exists finance_compliance_alerts_set_updated_at on public.finance_compliance_alerts;
create trigger finance_compliance_alerts_set_updated_at
before update on public.finance_compliance_alerts
for each row execute function public.set_updated_at();

insert into public.finance_compliance_requirements (
  requirement_code,
  requirement_name,
  authority_name,
  jurisdiction,
  applies_to,
  cadence,
  due_month,
  due_day,
  due_offset_days,
  filing_method,
  report_type,
  default_alert_lead_days,
  metadata
)
values
  (
    'IRS_1099_DIV_ANNUAL',
    'IRS Form 1099-DIV Annual Filing',
    'Internal Revenue Service',
    'US',
    'investor',
    'annual',
    1,
    31,
    0,
    'electronic',
    'investor_tax',
    45,
    '{"filingNotes":"Issue recipient statements and file annual 1099-DIV."}'::jsonb
  ),
  (
    'IRS_1042S_ANNUAL',
    'IRS Form 1042-S Annual Filing',
    'Internal Revenue Service',
    'US',
    'investor',
    'annual',
    3,
    15,
    0,
    'electronic',
    'investor_tax',
    45,
    '{"filingNotes":"Report US-source income for foreign persons."}'::jsonb
  ),
  (
    'FED_ESTIMATED_TAX_QUARTERLY',
    'Federal Estimated Tax Filing',
    'Internal Revenue Service',
    'US',
    'tax',
    'quarterly',
    null,
    15,
    15,
    'electronic',
    'tax_projection',
    30,
    '{"filingNotes":"Quarterly estimated tax filing/payment for business owner."}'::jsonb
  ),
  (
    'STATE_ANNUAL_REPORT',
    'State Annual Business Report',
    'Secretary of State',
    'US',
    'business',
    'annual',
    3,
    1,
    0,
    'either',
    'finance',
    45,
    '{"filingNotes":"Jurisdiction-specific annual entity report."}'::jsonb
  ),
  (
    'UNCLAIMED_PROPERTY_ANNUAL',
    'Unclaimed Property (Escheat) Annual Filing',
    'State Treasury',
    'US',
    'business',
    'annual',
    11,
    1,
    0,
    'either',
    'finance',
    60,
    '{"filingNotes":"Report dormant investor checks and balances as required."}'::jsonb
  )
on conflict (requirement_code) do nothing;

alter table public.investor_tax_profiles enable row level security;
alter table public.finance_compliance_requirements enable row level security;
alter table public.finance_compliance_calendar enable row level security;
alter table public.finance_compliance_alerts enable row level security;

drop policy if exists "investor_tax_profiles_admin_all" on public.investor_tax_profiles;
create policy "investor_tax_profiles_admin_all"
on public.investor_tax_profiles
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

drop policy if exists "finance_compliance_requirements_admin_all" on public.finance_compliance_requirements;
create policy "finance_compliance_requirements_admin_all"
on public.finance_compliance_requirements
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

drop policy if exists "finance_compliance_calendar_admin_all" on public.finance_compliance_calendar;
create policy "finance_compliance_calendar_admin_all"
on public.finance_compliance_calendar
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

drop policy if exists "finance_compliance_alerts_admin_all" on public.finance_compliance_alerts;
create policy "finance_compliance_alerts_admin_all"
on public.finance_compliance_alerts
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

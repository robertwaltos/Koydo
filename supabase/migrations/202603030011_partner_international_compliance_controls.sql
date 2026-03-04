-- International partner compliance controls:
-- - jurisdiction policy rules (sanctions / payout eligibility)
-- - withholding determinations (country/treaty/manual review)
-- - sanctions screening logs
-- - compliance alerts and monitoring support

create table if not exists public.partner_jurisdiction_rules (
  id uuid primary key default gen_random_uuid(),
  country_code text not null unique,
  jurisdiction_name text not null,
  allow_engagement boolean not null default true,
  allow_payouts boolean not null default true,
  requires_manual_review boolean not null default false,
  requires_w8 boolean not null default false,
  default_withholding_rate numeric(6, 5) not null default 0,
  sanctions_program text,
  sanctions_basis text,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_jurisdiction_rules_country_code_check
    check (char_length(country_code) = 2),
  constraint partner_jurisdiction_rules_withholding_rate_check
    check (default_withholding_rate >= 0 and default_withholding_rate <= 1)
);

create index if not exists idx_partner_jurisdiction_rules_allowance
  on public.partner_jurisdiction_rules(allow_engagement, allow_payouts, requires_manual_review);

create table if not exists public.partner_withholding_determinations (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  country_code text not null,
  source_income_type text not null default 'service_commission',
  us_source_income boolean not null default true,
  treaty_claimed boolean not null default false,
  treaty_country_code text,
  treaty_article text,
  determination_status text not null default 'pending',
  approved_withholding_rate numeric(6, 5),
  effective_start date,
  effective_end date,
  determination_reference text,
  rationale text,
  metadata jsonb not null default '{}'::jsonb,
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_withholding_determinations_country_code_check
    check (char_length(country_code) = 2),
  constraint partner_withholding_determinations_treaty_country_code_check
    check (treaty_country_code is null or char_length(treaty_country_code) = 2),
  constraint partner_withholding_determinations_source_income_type_check
    check (source_income_type in ('service_commission', 'royalty', 'other')),
  constraint partner_withholding_determinations_status_check
    check (determination_status in ('pending', 'approved', 'rejected', 'expired')),
  constraint partner_withholding_determinations_rate_check
    check (approved_withholding_rate is null or (approved_withholding_rate >= 0 and approved_withholding_rate <= 1)),
  constraint partner_withholding_determinations_period_check
    check (effective_end is null or effective_start is null or effective_end >= effective_start)
);

create unique index if not exists idx_partner_withholding_determinations_partner_active
  on public.partner_withholding_determinations(partner_id)
  where determination_status in ('pending', 'approved');

create table if not exists public.partner_sanctions_screenings (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  country_code text not null,
  screening_result text not null default 'clear',
  matched_rule_id uuid references public.partner_jurisdiction_rules(id) on delete set null,
  screening_source text not null default 'manual',
  screening_reference text,
  details text,
  metadata jsonb not null default '{}'::jsonb,
  screened_at timestamptz not null default now(),
  screened_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  constraint partner_sanctions_screenings_country_code_check
    check (char_length(country_code) = 2),
  constraint partner_sanctions_screenings_result_check
    check (screening_result in ('clear', 'restricted', 'prohibited', 'manual_review')),
  constraint partner_sanctions_screenings_source_check
    check (screening_source in ('manual', 'ofac_jurisdiction_rules', 'vendor_screening', 'other'))
);

create index if not exists idx_partner_sanctions_screenings_partner_screened
  on public.partner_sanctions_screenings(partner_id, screened_at desc);

create table if not exists public.partner_compliance_alerts (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  alert_type text not null,
  severity text not null default 'warning',
  alert_status text not null default 'open',
  title text not null,
  message text not null,
  first_raised_at timestamptz not null default now(),
  last_raised_at timestamptz not null default now(),
  acknowledged_at timestamptz,
  resolved_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_compliance_alerts_type_check
    check (
      alert_type in (
        'sanctions_jurisdiction',
        'tax_form_expired',
        'tax_form_missing',
        'withholding_determination_missing',
        'payout_account_unverified',
        'kyc_not_verified',
        'compliance_not_approved',
        'manual_review_required'
      )
    ),
  constraint partner_compliance_alerts_severity_check
    check (severity in ('info', 'warning', 'critical')),
  constraint partner_compliance_alerts_status_check
    check (alert_status in ('open', 'acknowledged', 'resolved', 'dismissed')),
  unique (partner_id, alert_type)
);

create index if not exists idx_partner_compliance_alerts_status_severity
  on public.partner_compliance_alerts(alert_status, severity, created_at desc);

drop trigger if exists partner_jurisdiction_rules_set_updated_at on public.partner_jurisdiction_rules;
create trigger partner_jurisdiction_rules_set_updated_at
before update on public.partner_jurisdiction_rules
for each row execute function public.set_updated_at();

drop trigger if exists partner_withholding_determinations_set_updated_at on public.partner_withholding_determinations;
create trigger partner_withholding_determinations_set_updated_at
before update on public.partner_withholding_determinations
for each row execute function public.set_updated_at();

drop trigger if exists partner_compliance_alerts_set_updated_at on public.partner_compliance_alerts;
create trigger partner_compliance_alerts_set_updated_at
before update on public.partner_compliance_alerts
for each row execute function public.set_updated_at();

insert into public.partner_jurisdiction_rules (
  country_code,
  jurisdiction_name,
  allow_engagement,
  allow_payouts,
  requires_manual_review,
  requires_w8,
  default_withholding_rate,
  sanctions_program,
  sanctions_basis,
  notes,
  metadata
)
values
  ('US', 'United States', true, true, false, false, 0, null, null, 'Domestic US partner default.', '{}'::jsonb),
  (
    'CU',
    'Cuba',
    false,
    false,
    true,
    true,
    0.30,
    'CACR',
    'Comprehensive sanctions program administered by OFAC.',
    'Do not onboard or pay without legal exception/license.',
    '{"source":"ofac"}'::jsonb
  ),
  (
    'IR',
    'Iran',
    false,
    false,
    true,
    true,
    0.30,
    'ITSR',
    'Iran sanctions regulations under OFAC programs.',
    'Do not onboard or pay without legal exception/license.',
    '{"source":"ofac"}'::jsonb
  ),
  (
    'KP',
    'North Korea',
    false,
    false,
    true,
    true,
    0.30,
    'NKSR',
    'North Korea sanctions regulations under OFAC programs.',
    'Do not onboard or pay without legal exception/license.',
    '{"source":"ofac"}'::jsonb
  )
on conflict (country_code) do nothing;

alter table public.partner_jurisdiction_rules enable row level security;
alter table public.partner_withholding_determinations enable row level security;
alter table public.partner_sanctions_screenings enable row level security;
alter table public.partner_compliance_alerts enable row level security;

drop policy if exists "partner_jurisdiction_rules_admin_all" on public.partner_jurisdiction_rules;
create policy "partner_jurisdiction_rules_admin_all"
on public.partner_jurisdiction_rules
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

drop policy if exists "partner_withholding_determinations_admin_all" on public.partner_withholding_determinations;
create policy "partner_withholding_determinations_admin_all"
on public.partner_withholding_determinations
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

drop policy if exists "partner_withholding_determinations_select_portal_member" on public.partner_withholding_determinations;
create policy "partner_withholding_determinations_select_portal_member"
on public.partner_withholding_determinations
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_withholding_determinations.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_sanctions_screenings_admin_all" on public.partner_sanctions_screenings;
create policy "partner_sanctions_screenings_admin_all"
on public.partner_sanctions_screenings
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

drop policy if exists "partner_sanctions_screenings_select_portal_member" on public.partner_sanctions_screenings;
create policy "partner_sanctions_screenings_select_portal_member"
on public.partner_sanctions_screenings
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_sanctions_screenings.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_compliance_alerts_admin_all" on public.partner_compliance_alerts;
create policy "partner_compliance_alerts_admin_all"
on public.partner_compliance_alerts
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

drop policy if exists "partner_compliance_alerts_select_portal_member" on public.partner_compliance_alerts;
create policy "partner_compliance_alerts_select_portal_member"
on public.partner_compliance_alerts
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_compliance_alerts.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

grant select on public.partner_jurisdiction_rules to authenticated;
grant select on public.partner_withholding_determinations to authenticated;
grant select on public.partner_sanctions_screenings to authenticated;
grant select on public.partner_compliance_alerts to authenticated;

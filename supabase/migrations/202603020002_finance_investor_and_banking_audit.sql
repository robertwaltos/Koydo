-- Finance investor operations + banking audit foundation:
-- - investor classes and cap table holdings
-- - investor contact + KYC + banking payout rails
-- - dividend declaration/payment workflows
-- - investor report dispatch tracking
-- - banking audit run + finding records

create table if not exists public.investor_classes (
  id uuid primary key default gen_random_uuid(),
  class_code text not null unique,
  class_name text not null,
  rights_summary text,
  dividend_policy text,
  liquidation_preference_multiple numeric(8, 4) not null default 1.0,
  voting_rights boolean not null default true,
  is_active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint investor_classes_liquidation_preference_check
    check (liquidation_preference_multiple >= 0)
);

create table if not exists public.investors (
  id uuid primary key default gen_random_uuid(),
  legal_name text not null,
  investor_type text not null default 'individual',
  contact_email text,
  contact_phone text,
  contact_address text,
  tax_identifier_last4 text,
  accreditation_status text not null default 'pending',
  kyc_status text not null default 'pending',
  aml_status text not null default 'pending',
  onboarding_status text not null default 'prospect',
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint investors_investor_type_check
    check (investor_type in ('individual', 'entity', 'fund', 'trust', 'other')),
  constraint investors_accreditation_status_check
    check (accreditation_status in ('pending', 'verified', 'rejected', 'not_required')),
  constraint investors_kyc_status_check
    check (kyc_status in ('pending', 'verified', 'rejected')),
  constraint investors_aml_status_check
    check (aml_status in ('pending', 'clear', 'flagged')),
  constraint investors_onboarding_status_check
    check (onboarding_status in ('prospect', 'active', 'paused', 'offboarded'))
);

create table if not exists public.investor_bank_accounts (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid not null references public.investors(id) on delete cascade,
  account_holder_name text not null,
  bank_name text not null,
  account_type text not null default 'checking',
  payout_method text not null default 'ach',
  currency text not null default 'USD',
  country_code text not null default 'US',
  routing_number_last4 text,
  account_number_last4 text,
  iban_last4 text,
  swift_bic text,
  verification_status text not null default 'pending',
  is_primary boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint investor_bank_accounts_account_type_check
    check (account_type in ('checking', 'savings', 'custodial', 'other')),
  constraint investor_bank_accounts_payout_method_check
    check (payout_method in ('ach', 'wire', 'swift', 'sepa', 'check', 'other')),
  constraint investor_bank_accounts_currency_check
    check (char_length(currency) = 3),
  constraint investor_bank_accounts_country_code_check
    check (char_length(country_code) = 2),
  constraint investor_bank_accounts_verification_status_check
    check (verification_status in ('pending', 'verified', 'failed', 'rejected'))
);

create unique index if not exists idx_investor_bank_accounts_primary_per_investor
  on public.investor_bank_accounts(investor_id)
  where is_primary = true;

create table if not exists public.investor_holdings (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid not null references public.investors(id) on delete cascade,
  investor_class_id uuid not null references public.investor_classes(id) on delete restrict,
  shares_owned numeric(20, 6) not null,
  ownership_percent numeric(8, 5),
  acquisition_date date,
  acquisition_price_cents bigint,
  cost_basis_cents bigint,
  status text not null default 'active',
  vesting_terms text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint investor_holdings_shares_owned_check
    check (shares_owned >= 0),
  constraint investor_holdings_ownership_percent_check
    check (ownership_percent is null or (ownership_percent >= 0 and ownership_percent <= 100)),
  constraint investor_holdings_status_check
    check (status in ('active', 'transferred', 'redeemed', 'canceled'))
);

create index if not exists idx_investor_holdings_investor_class
  on public.investor_holdings(investor_class_id, status, created_at desc);

create index if not exists idx_investor_holdings_investor
  on public.investor_holdings(investor_id, status, created_at desc);

create table if not exists public.dividend_declarations (
  id uuid primary key default gen_random_uuid(),
  investor_class_id uuid references public.investor_classes(id) on delete set null,
  declaration_name text not null,
  declared_at timestamptz not null default now(),
  record_date date not null,
  payment_date date not null,
  amount_per_share_cents integer not null,
  total_amount_cents bigint,
  currency text not null default 'USD',
  status text not null default 'draft',
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint dividend_declarations_amount_per_share_check
    check (amount_per_share_cents >= 0),
  constraint dividend_declarations_currency_check
    check (char_length(currency) = 3),
  constraint dividend_declarations_status_check
    check (status in ('draft', 'declared', 'approved', 'paid', 'canceled'))
);

create index if not exists idx_dividend_declarations_status_record_date
  on public.dividend_declarations(status, record_date desc);

create table if not exists public.dividend_payments (
  id uuid primary key default gen_random_uuid(),
  declaration_id uuid not null references public.dividend_declarations(id) on delete cascade,
  investor_id uuid not null references public.investors(id) on delete restrict,
  holding_id uuid references public.investor_holdings(id) on delete set null,
  investor_bank_account_id uuid references public.investor_bank_accounts(id) on delete set null,
  shares_eligible numeric(20, 6) not null,
  gross_amount_cents bigint not null,
  withholding_tax_cents bigint not null default 0,
  net_amount_cents bigint not null,
  payment_status text not null default 'queued',
  payment_reference text,
  paid_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint dividend_payments_shares_eligible_check
    check (shares_eligible >= 0),
  constraint dividend_payments_gross_amount_check
    check (gross_amount_cents >= 0),
  constraint dividend_payments_withholding_tax_check
    check (withholding_tax_cents >= 0),
  constraint dividend_payments_net_amount_check
    check (net_amount_cents >= 0),
  constraint dividend_payments_payment_status_check
    check (payment_status in ('queued', 'processing', 'paid', 'failed', 'canceled'))
);

create index if not exists idx_dividend_payments_status_created
  on public.dividend_payments(payment_status, created_at desc);

create index if not exists idx_dividend_payments_declaration_investor
  on public.dividend_payments(declaration_id, investor_id);

create table if not exists public.investor_report_dispatches (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid not null references public.investors(id) on delete cascade,
  report_type text not null,
  report_period_start date,
  report_period_end date,
  delivery_channel text not null default 'email',
  delivery_status text not null default 'queued',
  content_reference text,
  sent_at timestamptz,
  error text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint investor_report_dispatches_report_type_check
    check (
      report_type in (
        'monthly_financial',
        'quarterly_financial',
        'annual_financial',
        'dividend_notice',
        'bank_audit_extract',
        'custom'
      )
    ),
  constraint investor_report_dispatches_delivery_channel_check
    check (delivery_channel in ('email', 'portal', 'secure_link', 'postal', 'other')),
  constraint investor_report_dispatches_delivery_status_check
    check (delivery_status in ('queued', 'sent', 'failed'))
);

create index if not exists idx_investor_report_dispatches_status_created
  on public.investor_report_dispatches(delivery_status, created_at desc);

create table if not exists public.bank_audit_runs (
  id uuid primary key default gen_random_uuid(),
  audit_scope text not null default 'finance',
  period_start date not null,
  period_end date not null,
  status text not null default 'open',
  summary text,
  findings jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  generated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  closed_at timestamptz,
  constraint bank_audit_runs_scope_check
    check (audit_scope in ('finance', 'banking', 'insurance', 'institutional_due_diligence')),
  constraint bank_audit_runs_status_check
    check (status in ('open', 'closed'))
);

create index if not exists idx_bank_audit_runs_status_period
  on public.bank_audit_runs(status, period_end desc);

create table if not exists public.bank_audit_findings (
  id uuid primary key default gen_random_uuid(),
  audit_run_id uuid not null references public.bank_audit_runs(id) on delete cascade,
  severity text not null default 'warning',
  category text not null,
  finding_title text not null,
  finding_detail text,
  related_entity_type text,
  related_entity_id text,
  status text not null default 'open',
  resolved_at timestamptz,
  resolved_by uuid references auth.users(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bank_audit_findings_severity_check
    check (severity in ('info', 'warning', 'critical')),
  constraint bank_audit_findings_category_check
    check (
      category in (
        'kyc',
        'aml',
        'bank_verification',
        'dividend_reconciliation',
        'ledger_integrity',
        'payout_exception',
        'policy_compliance',
        'institutional_reporting'
      )
    ),
  constraint bank_audit_findings_status_check
    check (status in ('open', 'resolved', 'waived'))
);

create index if not exists idx_bank_audit_findings_run_status
  on public.bank_audit_findings(audit_run_id, status, severity, created_at desc);

drop trigger if exists investor_classes_set_updated_at on public.investor_classes;
create trigger investor_classes_set_updated_at
before update on public.investor_classes
for each row execute function public.set_updated_at();

drop trigger if exists investors_set_updated_at on public.investors;
create trigger investors_set_updated_at
before update on public.investors
for each row execute function public.set_updated_at();

drop trigger if exists investor_bank_accounts_set_updated_at on public.investor_bank_accounts;
create trigger investor_bank_accounts_set_updated_at
before update on public.investor_bank_accounts
for each row execute function public.set_updated_at();

drop trigger if exists investor_holdings_set_updated_at on public.investor_holdings;
create trigger investor_holdings_set_updated_at
before update on public.investor_holdings
for each row execute function public.set_updated_at();

drop trigger if exists dividend_declarations_set_updated_at on public.dividend_declarations;
create trigger dividend_declarations_set_updated_at
before update on public.dividend_declarations
for each row execute function public.set_updated_at();

drop trigger if exists dividend_payments_set_updated_at on public.dividend_payments;
create trigger dividend_payments_set_updated_at
before update on public.dividend_payments
for each row execute function public.set_updated_at();

drop trigger if exists investor_report_dispatches_set_updated_at on public.investor_report_dispatches;
create trigger investor_report_dispatches_set_updated_at
before update on public.investor_report_dispatches
for each row execute function public.set_updated_at();

drop trigger if exists bank_audit_runs_set_updated_at on public.bank_audit_runs;
create trigger bank_audit_runs_set_updated_at
before update on public.bank_audit_runs
for each row execute function public.set_updated_at();

drop trigger if exists bank_audit_findings_set_updated_at on public.bank_audit_findings;
create trigger bank_audit_findings_set_updated_at
before update on public.bank_audit_findings
for each row execute function public.set_updated_at();

insert into public.investor_classes (
  class_code,
  class_name,
  rights_summary,
  dividend_policy,
  liquidation_preference_multiple,
  voting_rights,
  is_active
)
values
  ('COMMON', 'Common Stock', 'Standard voting equity ownership.', 'Board-declared discretionary dividends.', 1.0, true, true),
  ('PREF_A', 'Preferred A', 'Preferred economics and liquidation preference.', 'Dividend rights per term sheet.', 1.0, true, true)
on conflict (class_code) do nothing;

alter table public.investor_classes enable row level security;
alter table public.investors enable row level security;
alter table public.investor_bank_accounts enable row level security;
alter table public.investor_holdings enable row level security;
alter table public.dividend_declarations enable row level security;
alter table public.dividend_payments enable row level security;
alter table public.investor_report_dispatches enable row level security;
alter table public.bank_audit_runs enable row level security;
alter table public.bank_audit_findings enable row level security;

drop policy if exists "investor_classes_admin_all" on public.investor_classes;
create policy "investor_classes_admin_all"
on public.investor_classes
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

drop policy if exists "investors_admin_all" on public.investors;
create policy "investors_admin_all"
on public.investors
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

drop policy if exists "investor_bank_accounts_admin_all" on public.investor_bank_accounts;
create policy "investor_bank_accounts_admin_all"
on public.investor_bank_accounts
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

drop policy if exists "investor_holdings_admin_all" on public.investor_holdings;
create policy "investor_holdings_admin_all"
on public.investor_holdings
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

drop policy if exists "dividend_declarations_admin_all" on public.dividend_declarations;
create policy "dividend_declarations_admin_all"
on public.dividend_declarations
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

drop policy if exists "dividend_payments_admin_all" on public.dividend_payments;
create policy "dividend_payments_admin_all"
on public.dividend_payments
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

drop policy if exists "investor_report_dispatches_admin_all" on public.investor_report_dispatches;
create policy "investor_report_dispatches_admin_all"
on public.investor_report_dispatches
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

drop policy if exists "bank_audit_runs_admin_all" on public.bank_audit_runs;
create policy "bank_audit_runs_admin_all"
on public.bank_audit_runs
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

drop policy if exists "bank_audit_findings_admin_all" on public.bank_audit_findings;
create policy "bank_audit_findings_admin_all"
on public.bank_audit_findings
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

-- Business finance accounting foundation:
-- - standard chart of accounts
-- - immutable double-entry style GL transactions
-- - owner tax profile for projections
-- - finance report type support in admin report queue/exports

create table if not exists public.business_chart_of_accounts (
  code text primary key,
  name text not null,
  account_type text not null,
  category text not null default 'operating',
  description text,
  tax_deductible_default boolean not null default false,
  is_system boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint business_chart_of_accounts_account_type_check
    check (account_type in ('asset', 'liability', 'equity', 'revenue', 'expense'))
);

alter table public.business_chart_of_accounts
  drop constraint if exists business_chart_of_accounts_category_check;

alter table public.business_chart_of_accounts
  add constraint business_chart_of_accounts_category_check
  check (
    category in (
      'cash',
      'receivable',
      'clearing',
      'payable',
      'payroll_tax',
      'sales_tax',
      'owner_equity',
      'owner_draw',
      'subscription',
      'iap',
      'b2b',
      'consulting',
      'affiliate',
      'ads',
      'contra_revenue',
      'payroll',
      'legal',
      'accounting',
      'contractor',
      'software',
      'cloud',
      'marketing',
      'general_admin',
      'cogs',
      'tax',
      'other'
    )
  );

create table if not exists public.business_gl_transactions (
  id uuid primary key default gen_random_uuid(),
  occurred_on date not null,
  description text not null,
  amount_cents integer not null,
  debit_account_code text not null references public.business_chart_of_accounts(code) on delete restrict,
  credit_account_code text not null references public.business_chart_of_accounts(code) on delete restrict,
  entry_kind text not null default 'manual',
  revenue_channel text,
  counterparty_name text,
  employee_name text,
  source_document text,
  source_system text not null default 'manual',
  source_ref text,
  tax_deductible boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint business_gl_transactions_amount_positive_check
    check (amount_cents > 0),
  constraint business_gl_transactions_distinct_accounts_check
    check (debit_account_code <> credit_account_code),
  constraint business_gl_transactions_entry_kind_check
    check (
      entry_kind in (
        'manual',
        'subscription',
        'iap',
        'invoice',
        'refund',
        'payroll',
        'vendor_bill',
        'tax_payment',
        'adjustment'
      )
    ),
  constraint business_gl_transactions_source_system_check
    check (
      source_system in (
        'manual',
        'stripe',
        'revenuecat',
        'payroll',
        'tax',
        'bank',
        'other'
      )
    ),
  constraint business_gl_transactions_revenue_channel_check
    check (
      revenue_channel is null
      or revenue_channel in (
        'web_subscription',
        'ios_iap',
        'android_iap',
        'organization_contract',
        'affiliate',
        'consulting',
        'ads',
        'other'
      )
    )
);

create table if not exists public.owner_tax_profiles (
  id uuid primary key default gen_random_uuid(),
  owner_name text not null,
  filing_status text not null default 'single',
  federal_tax_rate numeric(6, 5) not null default 0.24,
  state_tax_rate numeric(6, 5) not null default 0.05,
  self_employment_tax_rate numeric(6, 5) not null default 0.153,
  local_tax_rate numeric(6, 5) not null default 0.0,
  additional_tax_rate numeric(6, 5) not null default 0.0,
  deduction_rate numeric(6, 5) not null default 0.0,
  notes text,
  is_active boolean not null default true,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint owner_tax_profiles_filing_status_check
    check (filing_status in ('single', 'married_joint', 'married_separate', 'head_household')),
  constraint owner_tax_profiles_federal_tax_rate_check
    check (federal_tax_rate between 0 and 1),
  constraint owner_tax_profiles_state_tax_rate_check
    check (state_tax_rate between 0 and 1),
  constraint owner_tax_profiles_self_employment_tax_rate_check
    check (self_employment_tax_rate between 0 and 1),
  constraint owner_tax_profiles_local_tax_rate_check
    check (local_tax_rate between 0 and 1),
  constraint owner_tax_profiles_additional_tax_rate_check
    check (additional_tax_rate between 0 and 1),
  constraint owner_tax_profiles_deduction_rate_check
    check (deduction_rate between 0 and 1)
);

create unique index if not exists idx_owner_tax_profiles_single_active
  on public.owner_tax_profiles ((is_active))
  where is_active = true;

create index if not exists idx_business_gl_transactions_occurred_on
  on public.business_gl_transactions(occurred_on desc);

create index if not exists idx_business_gl_transactions_revenue_channel_occurred_on
  on public.business_gl_transactions(revenue_channel, occurred_on desc)
  where revenue_channel is not null;

create index if not exists idx_business_gl_transactions_entry_kind_occurred_on
  on public.business_gl_transactions(entry_kind, occurred_on desc);

create index if not exists idx_business_gl_transactions_counterparty
  on public.business_gl_transactions(counterparty_name, occurred_on desc);

drop trigger if exists business_chart_of_accounts_set_updated_at on public.business_chart_of_accounts;
create trigger business_chart_of_accounts_set_updated_at
before update on public.business_chart_of_accounts
for each row execute function public.set_updated_at();

drop trigger if exists business_gl_transactions_set_updated_at on public.business_gl_transactions;
create trigger business_gl_transactions_set_updated_at
before update on public.business_gl_transactions
for each row execute function public.set_updated_at();

drop trigger if exists owner_tax_profiles_set_updated_at on public.owner_tax_profiles;
create trigger owner_tax_profiles_set_updated_at
before update on public.owner_tax_profiles
for each row execute function public.set_updated_at();

insert into public.business_chart_of_accounts (
  code,
  name,
  account_type,
  category,
  description,
  tax_deductible_default,
  is_system
)
values
  ('1000', 'Cash', 'asset', 'cash', 'Operating cash account.', false, true),
  ('1100', 'Accounts Receivable', 'asset', 'receivable', 'Outstanding customer invoices.', false, true),
  ('1200', 'Stripe Clearing', 'asset', 'clearing', 'Stripe settlements in transit.', false, true),
  ('1300', 'RevenueCat Receivable', 'asset', 'clearing', 'RevenueCat/IAP settlements in transit.', false, true),
  ('2000', 'Accounts Payable', 'liability', 'payable', 'Vendor bills payable.', false, true),
  ('2100', 'Sales Tax Payable', 'liability', 'sales_tax', 'Sales tax liability.', false, true),
  ('2200', 'Payroll Tax Payable', 'liability', 'payroll_tax', 'Employer payroll tax liability.', false, true),
  ('3000', 'Owner Equity', 'equity', 'owner_equity', 'Owner capital.', false, true),
  ('3100', 'Owner Draw', 'equity', 'owner_draw', 'Owner distributions/draws.', false, true),
  ('4000', 'Subscription Revenue', 'revenue', 'subscription', 'Recurring subscriptions.', false, true),
  ('4010', 'In-App Purchase Revenue', 'revenue', 'iap', 'Apple/Google IAP revenue.', false, true),
  ('4020', 'Organization Contract Revenue', 'revenue', 'b2b', 'District/school organization contracts.', false, true),
  ('4030', 'Consulting Revenue', 'revenue', 'consulting', 'Professional services revenue.', false, true),
  ('4040', 'Affiliate Revenue', 'revenue', 'affiliate', 'Affiliate and partnership revenue.', false, true),
  ('4050', 'Advertising Revenue', 'revenue', 'ads', 'Ad network revenue.', false, true),
  ('4090', 'Refunds and Chargebacks', 'revenue', 'contra_revenue', 'Contra-revenue account for refunds and chargebacks.', false, true),
  ('5000', 'Cost of Goods Sold', 'expense', 'cogs', 'Direct delivery costs.', true, true),
  ('5100', 'Payroll Expense', 'expense', 'payroll', 'Employee payroll expense.', true, true),
  ('5200', 'Legal Fees Expense', 'expense', 'legal', 'External legal counsel and filings.', true, true),
  ('5210', 'Accounting Fees Expense', 'expense', 'accounting', 'Bookkeeping and CPA services.', true, true),
  ('5220', 'Contractor Expense', 'expense', 'contractor', 'External labor and contractors.', true, true),
  ('5230', 'Software Expense', 'expense', 'software', 'SaaS tools and subscriptions.', true, true),
  ('5240', 'Cloud Infrastructure Expense', 'expense', 'cloud', 'Cloud hosting and platform cost.', true, true),
  ('5250', 'Marketing Expense', 'expense', 'marketing', 'Paid acquisition and campaigns.', true, true),
  ('5260', 'General & Admin Expense', 'expense', 'general_admin', 'General operating overhead.', true, true),
  ('5270', 'Tax Expense', 'expense', 'tax', 'Income tax and franchise tax expense.', false, true)
on conflict (code) do nothing;

insert into public.owner_tax_profiles (
  owner_name,
  filing_status,
  federal_tax_rate,
  state_tax_rate,
  self_employment_tax_rate,
  local_tax_rate,
  additional_tax_rate,
  deduction_rate,
  notes,
  is_active
)
select
  'Owner',
  'single',
  0.24,
  0.05,
  0.153,
  0.00,
  0.00,
  0.00,
  'Baseline profile. Update with owner-specific assumptions.',
  true
where not exists (
  select 1
  from public.owner_tax_profiles
  where is_active = true
);

alter table public.business_chart_of_accounts enable row level security;
alter table public.business_gl_transactions enable row level security;
alter table public.owner_tax_profiles enable row level security;

drop policy if exists "business_chart_of_accounts_admin_all" on public.business_chart_of_accounts;
create policy "business_chart_of_accounts_admin_all"
on public.business_chart_of_accounts
for all
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "business_gl_transactions_admin_all" on public.business_gl_transactions;
create policy "business_gl_transactions_admin_all"
on public.business_gl_transactions
for all
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "owner_tax_profiles_admin_all" on public.owner_tax_profiles;
create policy "owner_tax_profiles_admin_all"
on public.owner_tax_profiles
for all
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

alter table public.admin_report_exports
  drop constraint if exists admin_report_exports_report_type_check;

alter table public.admin_report_exports
  add constraint admin_report_exports_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry', 'finance'));

alter table public.admin_report_jobs
  drop constraint if exists admin_report_jobs_report_type_check;

alter table public.admin_report_jobs
  add constraint admin_report_jobs_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry', 'finance'));

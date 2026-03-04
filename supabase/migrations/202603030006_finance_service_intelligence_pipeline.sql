-- Finance service intelligence + revenue optimization analytics pipeline foundation.
-- Adds:
-- - external service registry + usage/billing history
-- - billing reconciliation runs/items
-- - persistent finance analytics snapshots (DAU/MAU, tier/source performance, optimization)
-- - finance_analytics report job/export type support

create table if not exists public.service_integrations_registry (
  id uuid primary key default gen_random_uuid(),
  service_key text not null unique,
  service_name text not null,
  category text not null default 'other',
  billing_model text not null default 'usage',
  default_source_system text,
  discovery_source text not null default 'manual',
  discovery_confidence numeric(6, 5) not null default 0.5,
  is_active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint service_integrations_registry_service_key_check
    check (service_key ~ '^[a-z0-9_][a-z0-9_\\-]{1,63}$'),
  constraint service_integrations_registry_category_check
    check (
      category in (
        'payments',
        'subscription',
        'banking',
        'analytics',
        'marketing',
        'ai',
        'infrastructure',
        'communications',
        'other'
      )
    ),
  constraint service_integrations_registry_billing_model_check
    check (billing_model in ('usage', 'subscription', 'transaction', 'hybrid', 'unknown')),
  constraint service_integrations_registry_discovery_source_check
    check (discovery_source in ('manual', 'seed', 'auto')),
  constraint service_integrations_registry_discovery_confidence_check
    check (discovery_confidence >= 0 and discovery_confidence <= 1)
);

create table if not exists public.service_integration_usage_daily (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.service_integrations_registry(id) on delete cascade,
  usage_date date not null,
  usage_unit text not null default 'event',
  usage_quantity numeric(18, 6) not null default 0,
  estimated_cost_cents bigint not null default 0,
  attributed_revenue_cents bigint not null default 0,
  source_system text not null default 'internal',
  source_ref text not null default '',
  dimensions jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint service_integration_usage_daily_usage_quantity_check
    check (usage_quantity >= 0),
  constraint service_integration_usage_daily_estimated_cost_check
    check (estimated_cost_cents >= 0),
  constraint service_integration_usage_daily_attributed_revenue_check
    check (attributed_revenue_cents >= 0),
  unique (service_id, usage_date, usage_unit, source_system, source_ref)
);

create index if not exists idx_service_integration_usage_daily_date_service
  on public.service_integration_usage_daily(usage_date desc, service_id);

create table if not exists public.service_billing_records (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references public.service_integrations_registry(id) on delete set null,
  billing_period_start date not null,
  billing_period_end date not null,
  statement_date date,
  amount_cents bigint not null,
  currency text not null default 'USD',
  record_type text not null default 'charge',
  source_type text not null default 'manual',
  source_system text not null default 'manual',
  external_statement_id text,
  external_line_id text,
  counterparty_name text,
  metadata jsonb not null default '{}'::jsonb,
  ingested_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint service_billing_records_period_check
    check (billing_period_end >= billing_period_start),
  constraint service_billing_records_currency_check
    check (char_length(currency) = 3),
  constraint service_billing_records_record_type_check
    check (record_type in ('invoice', 'charge', 'credit', 'refund', 'adjustment')),
  constraint service_billing_records_source_type_check
    check (source_type in ('api', 'statement_import', 'manual', 'ledger_inferred', 'synthetic'))
);

create unique index if not exists idx_service_billing_records_external_line
  on public.service_billing_records(source_type, source_system, external_line_id)
  where external_line_id is not null;

create index if not exists idx_service_billing_records_period_service
  on public.service_billing_records(billing_period_end desc, service_id);

create table if not exists public.service_billing_reconciliation_runs (
  id uuid primary key default gen_random_uuid(),
  period_start date not null,
  period_end date not null,
  status text not null default 'queued',
  matched_count integer not null default 0,
  review_count integer not null default 0,
  unmatched_count integer not null default 0,
  total_variance_cents bigint not null default 0,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz,
  constraint service_billing_reconciliation_runs_period_check
    check (period_end >= period_start),
  constraint service_billing_reconciliation_runs_status_check
    check (status in ('queued', 'running', 'completed', 'failed'))
);

create index if not exists idx_service_billing_reconciliation_runs_status_created
  on public.service_billing_reconciliation_runs(status, created_at desc);

create table if not exists public.service_billing_reconciliation_items (
  id uuid primary key default gen_random_uuid(),
  reconciliation_run_id uuid not null references public.service_billing_reconciliation_runs(id) on delete cascade,
  service_id uuid references public.service_integrations_registry(id) on delete set null,
  billing_record_id uuid not null references public.service_billing_records(id) on delete cascade,
  gl_transaction_id uuid references public.business_gl_transactions(id) on delete set null,
  match_type text not null default 'unmatched',
  status text not null default 'unmatched',
  confidence_score numeric(6, 5),
  variance_cents bigint not null default 0,
  note text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint service_billing_reconciliation_items_match_type_check
    check (match_type in ('exact', 'amount_period', 'fuzzy', 'manual', 'unmatched')),
  constraint service_billing_reconciliation_items_status_check
    check (status in ('matched', 'needs_review', 'unmatched', 'ignored')),
  constraint service_billing_reconciliation_items_confidence_score_check
    check (confidence_score is null or (confidence_score >= 0 and confidence_score <= 1)),
  unique (reconciliation_run_id, billing_record_id)
);

create index if not exists idx_service_billing_reconciliation_items_run_status
  on public.service_billing_reconciliation_items(reconciliation_run_id, status, created_at desc);

create table if not exists public.finance_analytics_snapshots (
  id uuid primary key default gen_random_uuid(),
  as_of_date date not null,
  window_days integer not null default 30,
  dau integer not null default 0,
  mau integer not null default 0,
  paying_users integer not null default 0,
  active_subscriptions integer not null default 0,
  mrr_cents bigint not null default 0,
  arr_cents bigint not null default 0,
  revenue_cents bigint not null default 0,
  operating_expense_cents bigint not null default 0,
  marketing_spend_cents bigint not null default 0,
  ai_cost_cents bigint not null default 0,
  infrastructure_cost_cents bigint not null default 0,
  gross_margin_cents bigint not null default 0,
  tier_performance jsonb not null default '[]'::jsonb,
  marketing_performance jsonb not null default '[]'::jsonb,
  service_performance jsonb not null default '[]'::jsonb,
  pricing_funnel jsonb not null default '{}'::jsonb,
  coverage jsonb not null default '{}'::jsonb,
  pipeline_health jsonb not null default '{}'::jsonb,
  optimization_insights jsonb not null default '[]'::jsonb,
  warnings jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  generated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  constraint finance_analytics_snapshots_window_days_check
    check (window_days >= 1 and window_days <= 3650),
  unique (as_of_date, window_days)
);

create index if not exists idx_finance_analytics_snapshots_created
  on public.finance_analytics_snapshots(created_at desc, as_of_date desc, window_days);

drop trigger if exists service_integrations_registry_set_updated_at on public.service_integrations_registry;
create trigger service_integrations_registry_set_updated_at
before update on public.service_integrations_registry
for each row execute function public.set_updated_at();

drop trigger if exists service_integration_usage_daily_set_updated_at on public.service_integration_usage_daily;
create trigger service_integration_usage_daily_set_updated_at
before update on public.service_integration_usage_daily
for each row execute function public.set_updated_at();

drop trigger if exists service_billing_records_set_updated_at on public.service_billing_records;
create trigger service_billing_records_set_updated_at
before update on public.service_billing_records
for each row execute function public.set_updated_at();

drop trigger if exists service_billing_reconciliation_runs_set_updated_at on public.service_billing_reconciliation_runs;
create trigger service_billing_reconciliation_runs_set_updated_at
before update on public.service_billing_reconciliation_runs
for each row execute function public.set_updated_at();

drop trigger if exists service_billing_reconciliation_items_set_updated_at on public.service_billing_reconciliation_items;
create trigger service_billing_reconciliation_items_set_updated_at
before update on public.service_billing_reconciliation_items
for each row execute function public.set_updated_at();

insert into public.service_integrations_registry (
  service_key,
  service_name,
  category,
  billing_model,
  default_source_system,
  discovery_source,
  discovery_confidence,
  metadata
)
values
  ('unknown_external', 'Unknown External Service', 'other', 'unknown', 'manual', 'seed', 0.1, '{"seed":true}'::jsonb),
  ('stripe', 'Stripe', 'payments', 'transaction', 'stripe', 'seed', 1.0, '{"seed":true}'::jsonb),
  ('revenuecat', 'RevenueCat', 'subscription', 'usage', 'revenuecat', 'seed', 1.0, '{"seed":true}'::jsonb),
  ('plaid', 'Plaid', 'banking', 'usage', 'bank', 'seed', 1.0, '{"seed":true}'::jsonb),
  ('openai', 'OpenAI', 'ai', 'usage', 'openai', 'seed', 1.0, '{"seed":true}'::jsonb),
  ('google_ai', 'Google AI', 'ai', 'usage', 'google', 'seed', 1.0, '{"seed":true}'::jsonb),
  ('mixpanel', 'Mixpanel', 'analytics', 'usage', 'mixpanel', 'seed', 0.95, '{"seed":true}'::jsonb),
  ('vercel', 'Vercel', 'infrastructure', 'subscription', 'vercel', 'seed', 0.95, '{"seed":true}'::jsonb),
  ('supabase', 'Supabase', 'infrastructure', 'usage', 'supabase', 'seed', 0.95, '{"seed":true}'::jsonb),
  ('resend', 'Resend', 'communications', 'usage', 'resend', 'seed', 0.95, '{"seed":true}'::jsonb),
  ('meta_ads', 'Meta Ads', 'marketing', 'usage', 'manual', 'seed', 0.8, '{"seed":true}'::jsonb),
  ('google_ads', 'Google Ads', 'marketing', 'usage', 'manual', 'seed', 0.8, '{"seed":true}'::jsonb)
on conflict (service_key) do update
set
  service_name = excluded.service_name,
  category = excluded.category,
  billing_model = excluded.billing_model,
  default_source_system = excluded.default_source_system,
  is_active = true,
  metadata = coalesce(public.service_integrations_registry.metadata, '{}'::jsonb) || excluded.metadata,
  last_seen_at = now(),
  updated_at = now();

alter table public.service_integrations_registry enable row level security;
alter table public.service_integration_usage_daily enable row level security;
alter table public.service_billing_records enable row level security;
alter table public.service_billing_reconciliation_runs enable row level security;
alter table public.service_billing_reconciliation_items enable row level security;
alter table public.finance_analytics_snapshots enable row level security;

drop policy if exists "service_integrations_registry_admin_all" on public.service_integrations_registry;
create policy "service_integrations_registry_admin_all"
on public.service_integrations_registry
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

drop policy if exists "service_integration_usage_daily_admin_all" on public.service_integration_usage_daily;
create policy "service_integration_usage_daily_admin_all"
on public.service_integration_usage_daily
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

drop policy if exists "service_billing_records_admin_all" on public.service_billing_records;
create policy "service_billing_records_admin_all"
on public.service_billing_records
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

drop policy if exists "service_billing_reconciliation_runs_admin_all" on public.service_billing_reconciliation_runs;
create policy "service_billing_reconciliation_runs_admin_all"
on public.service_billing_reconciliation_runs
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

drop policy if exists "service_billing_reconciliation_items_admin_all" on public.service_billing_reconciliation_items;
create policy "service_billing_reconciliation_items_admin_all"
on public.service_billing_reconciliation_items
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

drop policy if exists "finance_analytics_snapshots_admin_all" on public.finance_analytics_snapshots;
create policy "finance_analytics_snapshots_admin_all"
on public.finance_analytics_snapshots
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

alter table public.admin_report_exports
  drop constraint if exists admin_report_exports_report_type_check;

alter table public.admin_report_exports
  add constraint admin_report_exports_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry', 'finance', 'finance_analytics'));

alter table public.admin_report_jobs
  drop constraint if exists admin_report_jobs_report_type_check;

alter table public.admin_report_jobs
  add constraint admin_report_jobs_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry', 'finance', 'finance_analytics'));

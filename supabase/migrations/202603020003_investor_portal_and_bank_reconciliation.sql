-- Investor portal access + bank statement import/reconciliation foundation.

create table if not exists public.investor_portal_access (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid not null references public.investors(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'owner',
  status text not null default 'active',
  created_by uuid references auth.users(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint investor_portal_access_role_check
    check (role in ('owner', 'finance_contact', 'auditor', 'viewer')),
  constraint investor_portal_access_status_check
    check (status in ('active', 'invited', 'revoked')),
  unique (investor_id, user_id)
);

create table if not exists public.bank_connections (
  id uuid primary key default gen_random_uuid(),
  provider text not null default 'manual_api',
  institution_name text not null,
  institution_id text,
  account_name text,
  account_mask text,
  currency text not null default 'USD',
  status text not null default 'pending',
  plaid_item_id text,
  access_token_encrypted text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bank_connections_provider_check
    check (provider in ('plaid', 'manual_api', 'pdf_upload', 'paper_scan', 'csv_manual', 'other')),
  constraint bank_connections_status_check
    check (status in ('pending', 'connected', 'disconnected', 'error')),
  constraint bank_connections_currency_check
    check (char_length(currency) = 3)
);

create table if not exists public.bank_statement_imports (
  id uuid primary key default gen_random_uuid(),
  bank_connection_id uuid references public.bank_connections(id) on delete set null,
  source_type text not null default 'manual_entry',
  period_start date not null,
  period_end date not null,
  statement_date date,
  import_status text not null default 'pending',
  file_reference text,
  parser_version text,
  total_credits_cents bigint not null default 0,
  total_debits_cents bigint not null default 0,
  line_count integer not null default 0,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bank_statement_imports_source_type_check
    check (source_type in ('plaid_api', 'pdf_upload', 'paper_scan', 'csv_manual', 'manual_entry')),
  constraint bank_statement_imports_import_status_check
    check (import_status in ('pending', 'parsed', 'reconciled', 'failed')),
  constraint bank_statement_imports_period_check
    check (period_end >= period_start)
);

create table if not exists public.bank_statement_lines (
  id uuid primary key default gen_random_uuid(),
  import_id uuid not null references public.bank_statement_imports(id) on delete cascade,
  line_date date not null,
  description text not null,
  amount_cents integer not null,
  direction text not null,
  external_line_id text,
  running_balance_cents bigint,
  matched boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint bank_statement_lines_direction_check
    check (direction in ('credit', 'debit'))
);

create unique index if not exists idx_bank_statement_lines_import_external_line
  on public.bank_statement_lines(import_id, external_line_id)
  where external_line_id is not null;

create index if not exists idx_bank_statement_lines_import_date
  on public.bank_statement_lines(import_id, line_date desc);

create index if not exists idx_bank_statement_lines_matched
  on public.bank_statement_lines(matched, line_date desc);

create table if not exists public.bank_reconciliation_runs (
  id uuid primary key default gen_random_uuid(),
  period_start date not null,
  period_end date not null,
  source_import_id uuid references public.bank_statement_imports(id) on delete set null,
  status text not null default 'queued',
  matched_count integer not null default 0,
  unmatched_count integer not null default 0,
  review_count integer not null default 0,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz,
  constraint bank_reconciliation_runs_status_check
    check (status in ('queued', 'running', 'completed', 'failed')),
  constraint bank_reconciliation_runs_period_check
    check (period_end >= period_start)
);

create index if not exists idx_bank_reconciliation_runs_status_created
  on public.bank_reconciliation_runs(status, created_at desc);

create table if not exists public.bank_reconciliation_items (
  id uuid primary key default gen_random_uuid(),
  reconciliation_run_id uuid not null references public.bank_reconciliation_runs(id) on delete cascade,
  statement_line_id uuid not null references public.bank_statement_lines(id) on delete cascade,
  gl_transaction_id uuid references public.business_gl_transactions(id) on delete set null,
  match_type text not null default 'unmatched',
  confidence_score numeric(6, 5),
  status text not null default 'unmatched',
  note text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bank_reconciliation_items_match_type_check
    check (match_type in ('exact', 'amount_date', 'manual', 'unmatched')),
  constraint bank_reconciliation_items_status_check
    check (status in ('matched', 'unmatched', 'needs_review', 'ignored')),
  constraint bank_reconciliation_items_confidence_score_check
    check (confidence_score is null or (confidence_score >= 0 and confidence_score <= 1))
);

create index if not exists idx_bank_reconciliation_items_run_status
  on public.bank_reconciliation_items(reconciliation_run_id, status, created_at desc);

drop trigger if exists investor_portal_access_set_updated_at on public.investor_portal_access;
create trigger investor_portal_access_set_updated_at
before update on public.investor_portal_access
for each row execute function public.set_updated_at();

drop trigger if exists bank_connections_set_updated_at on public.bank_connections;
create trigger bank_connections_set_updated_at
before update on public.bank_connections
for each row execute function public.set_updated_at();

drop trigger if exists bank_statement_imports_set_updated_at on public.bank_statement_imports;
create trigger bank_statement_imports_set_updated_at
before update on public.bank_statement_imports
for each row execute function public.set_updated_at();

drop trigger if exists bank_reconciliation_runs_set_updated_at on public.bank_reconciliation_runs;
create trigger bank_reconciliation_runs_set_updated_at
before update on public.bank_reconciliation_runs
for each row execute function public.set_updated_at();

drop trigger if exists bank_reconciliation_items_set_updated_at on public.bank_reconciliation_items;
create trigger bank_reconciliation_items_set_updated_at
before update on public.bank_reconciliation_items
for each row execute function public.set_updated_at();

alter table public.investor_portal_access enable row level security;
alter table public.bank_connections enable row level security;
alter table public.bank_statement_imports enable row level security;
alter table public.bank_statement_lines enable row level security;
alter table public.bank_reconciliation_runs enable row level security;
alter table public.bank_reconciliation_items enable row level security;

drop policy if exists "investor_portal_access_select_self_or_admin" on public.investor_portal_access;
create policy "investor_portal_access_select_self_or_admin"
on public.investor_portal_access
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "investor_portal_access_admin_manage" on public.investor_portal_access;
create policy "investor_portal_access_admin_manage"
on public.investor_portal_access
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

drop policy if exists "bank_connections_admin_all" on public.bank_connections;
create policy "bank_connections_admin_all"
on public.bank_connections
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

drop policy if exists "bank_statement_imports_admin_all" on public.bank_statement_imports;
create policy "bank_statement_imports_admin_all"
on public.bank_statement_imports
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

drop policy if exists "bank_statement_lines_admin_all" on public.bank_statement_lines;
create policy "bank_statement_lines_admin_all"
on public.bank_statement_lines
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

drop policy if exists "bank_reconciliation_runs_admin_all" on public.bank_reconciliation_runs;
create policy "bank_reconciliation_runs_admin_all"
on public.bank_reconciliation_runs
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

drop policy if exists "bank_reconciliation_items_admin_all" on public.bank_reconciliation_items;
create policy "bank_reconciliation_items_admin_all"
on public.bank_reconciliation_items
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

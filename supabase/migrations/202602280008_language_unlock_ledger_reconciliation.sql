-- Language unlock immutable ledger + reconciliation queue (tranche 2.1)

create table if not exists public.transaction_ledger (
  id uuid primary key default gen_random_uuid(),
  event_id text not null unique,
  event_type text not null,
  entity_type text not null default 'exam_unlock',
  entity_id uuid,
  learner_id uuid not null,
  level text,
  amount_cents integer,
  attempts_delta integer not null default 0,
  geo_tier text,
  provider text not null,
  provider_tx_id text,
  occurred_at timestamptz not null default now(),
  processed_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint transaction_ledger_event_type_check
    check (
      event_type in (
        'unlock_purchase',
        'refund',
        'reversal',
        'expiry',
        'reconciliation_fix'
      )
    ),
  constraint transaction_ledger_entity_type_check
    check (entity_type in ('exam_unlock')),
  constraint transaction_ledger_level_check
    check (
      level is null
      or level in ('beginner', 'intermediate', 'advanced')
    ),
  constraint transaction_ledger_geo_tier_check
    check (
      geo_tier is null
      or geo_tier in ('tier_1', 'tier_2', 'tier_3', 'tier_4', 'tier_5')
    ),
  constraint transaction_ledger_attempts_delta_check
    check (attempts_delta between -5000 and 5000)
);

drop trigger if exists transaction_ledger_set_updated_at on public.transaction_ledger;
create trigger transaction_ledger_set_updated_at
before update on public.transaction_ledger
for each row execute function public.set_updated_at();

create index if not exists idx_transaction_ledger_learner_occurred
  on public.transaction_ledger(learner_id, occurred_at desc);

create index if not exists idx_transaction_ledger_provider_tx
  on public.transaction_ledger(provider, provider_tx_id);

create index if not exists idx_transaction_ledger_entity
  on public.transaction_ledger(entity_type, entity_id);

create table if not exists public.reconciliation_queue (
  id uuid primary key default gen_random_uuid(),
  drift_type text not null,
  entity_type text not null default 'exam_unlock',
  entity_id uuid,
  learner_id uuid,
  expected_value integer,
  actual_value integer,
  status text not null default 'open',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  resolved_at timestamptz,
  constraint reconciliation_queue_status_check
    check (status in ('open', 'resolved')),
  constraint reconciliation_queue_entity_type_check
    check (entity_type in ('exam_unlock'))
);

drop trigger if exists reconciliation_queue_set_updated_at on public.reconciliation_queue;
create trigger reconciliation_queue_set_updated_at
before update on public.reconciliation_queue
for each row execute function public.set_updated_at();

create index if not exists idx_reconciliation_queue_status_created
  on public.reconciliation_queue(status, created_at desc);

create index if not exists idx_reconciliation_queue_learner
  on public.reconciliation_queue(learner_id, created_at desc);

alter table public.language_usage_tracking
  add column if not exists last_reconciled_at timestamptz;

alter table public.transaction_ledger enable row level security;
alter table public.reconciliation_queue enable row level security;

drop policy if exists "transaction_ledger_select_admin_only" on public.transaction_ledger;
create policy "transaction_ledger_select_admin_only"
on public.transaction_ledger
for select
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "transaction_ledger_insert_admin_only" on public.transaction_ledger;
create policy "transaction_ledger_insert_admin_only"
on public.transaction_ledger
for insert
to authenticated
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "transaction_ledger_update_admin_only" on public.transaction_ledger;
create policy "transaction_ledger_update_admin_only"
on public.transaction_ledger
for update
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

drop policy if exists "transaction_ledger_delete_admin_only" on public.transaction_ledger;
create policy "transaction_ledger_delete_admin_only"
on public.transaction_ledger
for delete
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "reconciliation_queue_select_admin_only" on public.reconciliation_queue;
create policy "reconciliation_queue_select_admin_only"
on public.reconciliation_queue
for select
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "reconciliation_queue_insert_admin_only" on public.reconciliation_queue;
create policy "reconciliation_queue_insert_admin_only"
on public.reconciliation_queue
for insert
to authenticated
with check (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "reconciliation_queue_update_admin_only" on public.reconciliation_queue;
create policy "reconciliation_queue_update_admin_only"
on public.reconciliation_queue
for update
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

drop policy if exists "reconciliation_queue_delete_admin_only" on public.reconciliation_queue;
create policy "reconciliation_queue_delete_admin_only"
on public.reconciliation_queue
for delete
to authenticated
using (
  exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

-- Hard approval controls + regulatory intelligence tracking.

create table if not exists public.partner_payout_approvals (
  id uuid primary key default gen_random_uuid(),
  payout_batch_id uuid not null references public.partner_payout_batches(id) on delete cascade,
  approval_status text not null default 'approved',
  approval_scope text not null default 'final_release',
  reason_accounting_code text not null,
  ledger_account_code text not null,
  approval_reason text not null,
  owner_factor_type text not null,
  owner_step_up_scope text not null,
  approved_by uuid not null references auth.users(id) on delete restrict,
  approved_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_payout_approvals_status_check
    check (approval_status in ('approved', 'revoked')),
  constraint partner_payout_approvals_scope_check
    check (approval_scope in ('final_release', 'emergency_hold')),
  constraint partner_payout_approvals_factor_type_check
    check (owner_factor_type in ('totp', 'yubikey_otp')),
  constraint partner_payout_approvals_reason_accounting_code_check
    check (char_length(reason_accounting_code) >= 2),
  constraint partner_payout_approvals_ledger_account_code_check
    check (char_length(ledger_account_code) >= 2)
);

create index if not exists idx_partner_payout_approvals_batch_status
  on public.partner_payout_approvals(payout_batch_id, approval_status, approved_at desc);

create table if not exists public.partner_regulatory_updates (
  id uuid primary key default gen_random_uuid(),
  source_name text not null,
  source_url text not null,
  jurisdiction text not null default 'US',
  update_type text not null default 'regulatory_notice',
  title text not null,
  update_date date,
  effective_date date,
  update_hash text not null,
  summary text,
  action_required boolean not null default false,
  action_severity text not null default 'info',
  action_notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_regulatory_updates_type_check
    check (update_type in ('regulatory_notice', 'tax_filing_change', 'sanctions_update', 'compliance_deadline', 'other')),
  constraint partner_regulatory_updates_severity_check
    check (action_severity in ('info', 'warning', 'critical')),
  unique (source_name, update_hash)
);

create index if not exists idx_partner_regulatory_updates_date_type
  on public.partner_regulatory_updates(update_date desc, update_type, action_required);

create table if not exists public.partner_regulatory_action_items (
  id uuid primary key default gen_random_uuid(),
  regulatory_update_id uuid not null references public.partner_regulatory_updates(id) on delete cascade,
  action_status text not null default 'open',
  owner_user_id uuid references auth.users(id) on delete set null,
  due_date date,
  title text not null,
  details text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_regulatory_action_items_status_check
    check (action_status in ('open', 'in_progress', 'resolved', 'dismissed'))
);

create index if not exists idx_partner_regulatory_action_items_status_due
  on public.partner_regulatory_action_items(action_status, due_date, created_at desc);

drop trigger if exists partner_payout_approvals_set_updated_at on public.partner_payout_approvals;
create trigger partner_payout_approvals_set_updated_at
before update on public.partner_payout_approvals
for each row execute function public.set_updated_at();

drop trigger if exists partner_regulatory_updates_set_updated_at on public.partner_regulatory_updates;
create trigger partner_regulatory_updates_set_updated_at
before update on public.partner_regulatory_updates
for each row execute function public.set_updated_at();

drop trigger if exists partner_regulatory_action_items_set_updated_at on public.partner_regulatory_action_items;
create trigger partner_regulatory_action_items_set_updated_at
before update on public.partner_regulatory_action_items
for each row execute function public.set_updated_at();

alter table public.partner_payout_approvals enable row level security;
alter table public.partner_regulatory_updates enable row level security;
alter table public.partner_regulatory_action_items enable row level security;

drop policy if exists "partner_payout_approvals_admin_all" on public.partner_payout_approvals;
create policy "partner_payout_approvals_admin_all"
on public.partner_payout_approvals
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

drop policy if exists "partner_regulatory_updates_admin_all" on public.partner_regulatory_updates;
create policy "partner_regulatory_updates_admin_all"
on public.partner_regulatory_updates
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

drop policy if exists "partner_regulatory_action_items_admin_all" on public.partner_regulatory_action_items;
create policy "partner_regulatory_action_items_admin_all"
on public.partner_regulatory_action_items
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

grant select on public.partner_payout_approvals to authenticated;
grant select on public.partner_regulatory_updates to authenticated;
grant select on public.partner_regulatory_action_items to authenticated;

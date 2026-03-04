create table if not exists public.partner_compliance_filings (
  id uuid primary key default gen_random_uuid(),
  filing_kind text not null,
  filing_period_start date not null,
  filing_period_end date not null,
  submission_status text not null default 'queued',
  provider text not null default 'manual_package',
  submission_reference text,
  submission_payload jsonb not null default '{}'::jsonb,
  response_payload jsonb not null default '{}'::jsonb,
  submitted_by uuid references auth.users(id) on delete set null,
  submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_compliance_filings_kind_check
    check (filing_kind in ('irs_1099', 'irs_1042', 'irs_1042s', 'ofac_rejected_transactions')),
  constraint partner_compliance_filings_status_check
    check (submission_status in ('queued', 'submitted', 'manual_required', 'failed')),
  constraint partner_compliance_filings_provider_check
    check (provider in ('irs_efile', 'ofac_reporting', 'manual_package')),
  constraint partner_compliance_filings_period_check
    check (filing_period_end >= filing_period_start)
);

create index if not exists idx_partner_compliance_filings_status_period
  on public.partner_compliance_filings(submission_status, filing_period_end desc);

drop trigger if exists partner_compliance_filings_set_updated_at on public.partner_compliance_filings;
create trigger partner_compliance_filings_set_updated_at
before update on public.partner_compliance_filings
for each row execute function public.set_updated_at();

alter table public.partner_compliance_filings enable row level security;

drop policy if exists "partner_compliance_filings_admin_all" on public.partner_compliance_filings;
create policy "partner_compliance_filings_admin_all"
on public.partner_compliance_filings
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

grant select on public.partner_compliance_filings to authenticated;

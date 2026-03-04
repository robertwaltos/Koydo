-- Add state-aware terms acceptance evidence and billing-state profile support.

alter table public.user_profiles
  add column if not exists billing_state text;

alter table public.user_profiles
  drop constraint if exists user_profiles_billing_state_check;
alter table public.user_profiles
  add constraint user_profiles_billing_state_check
  check (billing_state is null or billing_state ~ '^[A-Z]{2}$');

alter table public.policy_acceptances
  add column if not exists billing_state text,
  add column if not exists document_key text,
  add column if not exists document_hash text,
  add column if not exists acceptance_metadata jsonb not null default '{}'::jsonb,
  add column if not exists evidence_ip text,
  add column if not exists evidence_user_agent text;

alter table public.policy_acceptances
  drop constraint if exists policy_acceptances_billing_state_check;
alter table public.policy_acceptances
  add constraint policy_acceptances_billing_state_check
  check (billing_state is null or billing_state ~ '^[A-Z]{2}$');

create index if not exists idx_policy_acceptances_terms_state_version
  on public.policy_acceptances (billing_state, policy_version, accepted_at desc)
  where policy_type = 'terms';

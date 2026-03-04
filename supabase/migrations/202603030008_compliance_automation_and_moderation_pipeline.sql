-- Compliance automation + moderation consensus pipeline + parent account-change confirmations.

alter table public.support_tickets
  add column if not exists ticket_type text not null default 'general';

alter table public.support_tickets
  add column if not exists parent_confirmation_required boolean not null default false;

alter table public.support_tickets
  add column if not exists parent_confirmation_status text not null default 'not_required';

alter table public.support_tickets
  add column if not exists ai_response_status text not null default 'not_started';

alter table public.support_tickets
  add column if not exists ai_response_text text;

alter table public.support_tickets
  add column if not exists ai_response_generated_at timestamptz;

alter table public.support_tickets
  add column if not exists auto_response_model text;

alter table public.support_tickets
  add column if not exists account_scope_user_id uuid references auth.users(id) on delete set null;

alter table public.support_tickets
  add column if not exists first_response_due_at timestamptz;

alter table public.support_tickets
  add column if not exists first_response_at timestamptz;

alter table public.support_tickets
  add column if not exists sla_breached_at timestamptz;

alter table public.support_tickets
  drop constraint if exists support_tickets_ticket_type_check;

alter table public.support_tickets
  add constraint support_tickets_ticket_type_check
  check (ticket_type in ('general', 'technical', 'billing', 'account_change', 'safety', 'content'));

alter table public.support_tickets
  drop constraint if exists support_tickets_parent_confirmation_status_check;

alter table public.support_tickets
  add constraint support_tickets_parent_confirmation_status_check
  check (parent_confirmation_status in ('not_required', 'pending', 'verified', 'failed'));

alter table public.support_tickets
  drop constraint if exists support_tickets_ai_response_status_check;

alter table public.support_tickets
  add constraint support_tickets_ai_response_status_check
  check (ai_response_status in ('not_started', 'generated', 'sent', 'escalated'));

create table if not exists public.parent_security_factors (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  factor_type text not null,
  label text,
  secret_encrypted text,
  email_address text,
  phone_number text,
  verified_at timestamptz,
  disabled_at timestamptz,
  last_used_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint parent_security_factors_factor_type_check
    check (factor_type in ('totp', 'email', 'sms')),
  constraint parent_security_factors_email_format_check
    check (email_address is null or position('@' in email_address) > 1)
);

create unique index if not exists idx_parent_security_factors_totp_unique
  on public.parent_security_factors(user_id, factor_type)
  where factor_type = 'totp' and disabled_at is null;

create unique index if not exists idx_parent_security_factors_email_unique
  on public.parent_security_factors(user_id, factor_type, email_address)
  where factor_type = 'email' and email_address is not null and disabled_at is null;

create unique index if not exists idx_parent_security_factors_sms_unique
  on public.parent_security_factors(user_id, factor_type, phone_number)
  where factor_type = 'sms' and phone_number is not null and disabled_at is null;

drop trigger if exists parent_security_factors_set_updated_at on public.parent_security_factors;
create trigger parent_security_factors_set_updated_at
before update on public.parent_security_factors
for each row execute function public.set_updated_at();

create table if not exists public.parent_account_change_challenges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  scope text not null,
  target_ref text,
  channel text not null,
  code_hash text not null,
  salt text not null,
  attempt_count integer not null default 0,
  max_attempts integer not null default 6,
  status text not null default 'pending',
  expires_at timestamptz not null,
  verified_at timestamptz,
  consumed_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint parent_account_change_challenges_scope_check
    check (scope in ('student_profile_settings', 'support_sensitive_change', 'account_delete', 'account_email_change')),
  constraint parent_account_change_challenges_channel_check
    check (channel in ('email', 'sms', 'authenticator')),
  constraint parent_account_change_challenges_status_check
    check (status in ('pending', 'verified', 'expired', 'failed', 'consumed')),
  constraint parent_account_change_challenges_attempt_count_check
    check (attempt_count >= 0 and max_attempts between 1 and 10)
);

create index if not exists idx_parent_account_change_challenges_user_created
  on public.parent_account_change_challenges(user_id, created_at desc);

create index if not exists idx_parent_account_change_challenges_expires
  on public.parent_account_change_challenges(expires_at);

drop trigger if exists parent_account_change_challenges_set_updated_at on public.parent_account_change_challenges;
create trigger parent_account_change_challenges_set_updated_at
before update on public.parent_account_change_challenges
for each row execute function public.set_updated_at();

create table if not exists public.compliance_evidence_artifacts (
  id uuid primary key default gen_random_uuid(),
  artifact_type text not null,
  storage_provider text not null default 'supabase_storage',
  storage_path text,
  checksum_sha256 text,
  immutable boolean not null default true,
  retention_until timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  constraint compliance_evidence_artifacts_storage_provider_check
    check (storage_provider in ('supabase_storage', 'google_vault_export', 'external_archive', 'inline'))
);

create index if not exists idx_compliance_evidence_artifacts_type_created
  on public.compliance_evidence_artifacts(artifact_type, created_at desc);

create index if not exists idx_compliance_evidence_artifacts_retention
  on public.compliance_evidence_artifacts(retention_until);

create table if not exists public.compliance_audit_runs (
  id uuid primary key default gen_random_uuid(),
  initiated_by uuid references auth.users(id) on delete set null,
  scope text not null default 'app_store',
  status text not null default 'running',
  score numeric(4, 2) not null default 0,
  target_score numeric(4, 2) not null default 10,
  checks_total integer not null default 0,
  checks_pass integer not null default 0,
  checks_warn integer not null default 0,
  checks_fail integer not null default 0,
  pass_summary jsonb not null default '[]'::jsonb,
  report jsonb not null default '{}'::jsonb,
  evidence_artifact_id uuid references public.compliance_evidence_artifacts(id) on delete set null,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint compliance_audit_runs_status_check
    check (status in ('running', 'completed', 'failed')),
  constraint compliance_audit_runs_score_check
    check (score >= 0 and score <= 10),
  constraint compliance_audit_runs_target_score_check
    check (target_score >= 1 and target_score <= 10),
  constraint compliance_audit_runs_check_totals_nonnegative
    check (checks_total >= 0 and checks_pass >= 0 and checks_warn >= 0 and checks_fail >= 0)
);

drop trigger if exists compliance_audit_runs_set_updated_at on public.compliance_audit_runs;
create trigger compliance_audit_runs_set_updated_at
before update on public.compliance_audit_runs
for each row execute function public.set_updated_at();

create index if not exists idx_compliance_audit_runs_scope_created
  on public.compliance_audit_runs(scope, created_at desc);

create table if not exists public.compliance_audit_findings (
  id uuid primary key default gen_random_uuid(),
  run_id uuid not null references public.compliance_audit_runs(id) on delete cascade,
  pass_name text not null,
  finding_key text not null,
  severity text not null,
  title text not null,
  detail text not null,
  remediation text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint compliance_audit_findings_severity_check
    check (severity in ('pass', 'warn', 'fail')),
  unique (run_id, pass_name, finding_key)
);

create index if not exists idx_compliance_audit_findings_run_severity
  on public.compliance_audit_findings(run_id, severity, created_at desc);

create table if not exists public.content_moderation_jobs (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users(id) on delete set null,
  source_type text not null default 'manual',
  source_ref text,
  account_scope_user_id uuid references auth.users(id) on delete set null,
  content_text text not null,
  requested_action text,
  status text not null default 'queued',
  attempt_count integer not null default 0,
  max_attempts integer not null default 3,
  consensus_action text not null default 'review',
  consensus_confidence numeric(6, 5) not null default 0,
  consensus_reason text,
  consensus_payload jsonb not null default '{}'::jsonb,
  run_started_at timestamptz,
  run_completed_at timestamptz,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint content_moderation_jobs_status_check
    check (status in ('queued', 'running', 'completed', 'failed', 'stalled')),
  constraint content_moderation_jobs_attempt_count_check
    check (attempt_count >= 0 and max_attempts between 1 and 10),
  constraint content_moderation_jobs_action_check
    check (consensus_action in ('allow', 'review', 'modify', 'rewrite', 'replace', 'remove', 'delete')),
  constraint content_moderation_jobs_confidence_check
    check (consensus_confidence >= 0 and consensus_confidence <= 1)
);

drop trigger if exists content_moderation_jobs_set_updated_at on public.content_moderation_jobs;
create trigger content_moderation_jobs_set_updated_at
before update on public.content_moderation_jobs
for each row execute function public.set_updated_at();

create index if not exists idx_content_moderation_jobs_status_created
  on public.content_moderation_jobs(status, created_at desc);

create index if not exists idx_content_moderation_jobs_account_scope
  on public.content_moderation_jobs(account_scope_user_id, created_at desc);

create table if not exists public.content_moderation_votes (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.content_moderation_jobs(id) on delete cascade,
  model_provider text not null,
  model_name text,
  status text not null,
  verdict text not null,
  confidence numeric(6, 5),
  rationale text,
  raw_payload jsonb not null default '{}'::jsonb,
  latency_ms integer,
  created_at timestamptz not null default now(),
  constraint content_moderation_votes_provider_check
    check (model_provider in ('grok', 'openai', 'claude', 'gemini')),
  constraint content_moderation_votes_status_check
    check (status in ('completed', 'error', 'timeout', 'unavailable')),
  constraint content_moderation_votes_verdict_check
    check (verdict in ('allow', 'review', 'modify', 'rewrite', 'replace', 'remove', 'delete', 'unavailable')),
  constraint content_moderation_votes_confidence_check
    check (confidence is null or (confidence >= 0 and confidence <= 1)),
  constraint content_moderation_votes_latency_check
    check (latency_ms is null or latency_ms >= 0),
  unique (job_id, model_provider)
);

create index if not exists idx_content_moderation_votes_job_created
  on public.content_moderation_votes(job_id, created_at desc);

create table if not exists public.content_moderation_actions (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.content_moderation_jobs(id) on delete cascade,
  action_type text not null,
  status text not null default 'pending',
  target_ref text,
  applied_by uuid references auth.users(id) on delete set null,
  applied_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint content_moderation_actions_action_type_check
    check (action_type in ('allow', 'review', 'modify', 'rewrite', 'replace', 'remove', 'delete')),
  constraint content_moderation_actions_status_check
    check (status in ('pending', 'applied', 'failed', 'skipped'))
);

create index if not exists idx_content_moderation_actions_job_status
  on public.content_moderation_actions(job_id, status, created_at desc);

alter table public.admin_report_exports
  drop constraint if exists admin_report_exports_report_type_check;

alter table public.admin_report_exports
  add constraint admin_report_exports_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry', 'finance', 'finance_analytics', 'compliance_audit'));

alter table public.admin_report_jobs
  drop constraint if exists admin_report_jobs_report_type_check;

alter table public.admin_report_jobs
  add constraint admin_report_jobs_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry', 'finance', 'finance_analytics', 'compliance_audit'));

alter table public.parent_security_factors enable row level security;
alter table public.parent_account_change_challenges enable row level security;
alter table public.compliance_evidence_artifacts enable row level security;
alter table public.compliance_audit_runs enable row level security;
alter table public.compliance_audit_findings enable row level security;
alter table public.content_moderation_jobs enable row level security;
alter table public.content_moderation_votes enable row level security;
alter table public.content_moderation_actions enable row level security;

drop policy if exists "parent_security_factors_owner_all" on public.parent_security_factors;
create policy "parent_security_factors_owner_all"
on public.parent_security_factors
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "parent_account_change_challenges_owner_all" on public.parent_account_change_challenges;
create policy "parent_account_change_challenges_owner_all"
on public.parent_account_change_challenges
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "compliance_evidence_artifacts_admin_all" on public.compliance_evidence_artifacts;
create policy "compliance_evidence_artifacts_admin_all"
on public.compliance_evidence_artifacts
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

drop policy if exists "compliance_audit_runs_admin_all" on public.compliance_audit_runs;
create policy "compliance_audit_runs_admin_all"
on public.compliance_audit_runs
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

drop policy if exists "compliance_audit_findings_admin_all" on public.compliance_audit_findings;
create policy "compliance_audit_findings_admin_all"
on public.compliance_audit_findings
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

drop policy if exists "content_moderation_jobs_select_own_or_admin" on public.content_moderation_jobs;
create policy "content_moderation_jobs_select_own_or_admin"
on public.content_moderation_jobs
for select
to authenticated
using (
  auth.uid() = account_scope_user_id
  or auth.uid() = created_by
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "content_moderation_jobs_insert_own_or_admin" on public.content_moderation_jobs;
create policy "content_moderation_jobs_insert_own_or_admin"
on public.content_moderation_jobs
for insert
to authenticated
with check (
  auth.uid() = account_scope_user_id
  or auth.uid() = created_by
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "content_moderation_jobs_update_admin_or_owner" on public.content_moderation_jobs;
create policy "content_moderation_jobs_update_admin_or_owner"
on public.content_moderation_jobs
for update
to authenticated
using (
  auth.uid() = created_by
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  auth.uid() = created_by
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "content_moderation_votes_select_own_or_admin" on public.content_moderation_votes;
create policy "content_moderation_votes_select_own_or_admin"
on public.content_moderation_votes
for select
to authenticated
using (
  exists (
    select 1
    from public.content_moderation_jobs j
    where j.id = content_moderation_votes.job_id
      and (
        j.account_scope_user_id = auth.uid()
        or j.created_by = auth.uid()
        or exists (
          select 1 from public.user_profiles up
          where up.user_id = auth.uid()
            and up.is_admin = true
        )
      )
  )
);

drop policy if exists "content_moderation_votes_admin_write" on public.content_moderation_votes;
create policy "content_moderation_votes_admin_write"
on public.content_moderation_votes
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

drop policy if exists "content_moderation_actions_select_own_or_admin" on public.content_moderation_actions;
create policy "content_moderation_actions_select_own_or_admin"
on public.content_moderation_actions
for select
to authenticated
using (
  exists (
    select 1
    from public.content_moderation_jobs j
    where j.id = content_moderation_actions.job_id
      and (
        j.account_scope_user_id = auth.uid()
        or j.created_by = auth.uid()
        or exists (
          select 1 from public.user_profiles up
          where up.user_id = auth.uid()
            and up.is_admin = true
        )
      )
  )
);

drop policy if exists "content_moderation_actions_admin_write" on public.content_moderation_actions;
create policy "content_moderation_actions_admin_write"
on public.content_moderation_actions
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

insert into public.app_settings (key, value)
values
  ('support_email', '{"value":"support@koydo.app"}'::jsonb),
  ('support_emergency_phone', '{"value":"1242186693"}'::jsonb),
  ('parent_portal_paid_response_sla_hours', '{"value":24}'::jsonb),
  ('compliance_evidence_storage_provider', '{"value":"supabase_storage"}'::jsonb),
  ('compliance_evidence_retention_days', '{"value":2555}'::jsonb),
  ('content_moderation_consensus_min_models', '{"value":2}'::jsonb),
  ('content_moderation_consensus_threshold', '{"value":0.67}'::jsonb),
  ('compliance_launch_status', jsonb_build_object('status', 'complete', 'completed_at', now()))
on conflict (key) do update set
  value = excluded.value,
  updated_at = now();

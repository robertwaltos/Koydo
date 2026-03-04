create extension if not exists "pgcrypto";

create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  birth_date date,
  age_group text,
  theme_pack text default 'simple',
  theme_mode text default 'system',
  motion_pref text default 'standard',
  contrast_pref text default 'standard',
  parent_email text,
  parental_consent_required boolean not null default false,
  parental_consent_status text not null default 'not_required',
  is_admin boolean not null default false,
  is_parent boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_profiles_consent_status_check
    check (parental_consent_status in ('not_required', 'pending', 'verified', 'denied'))
);

alter table public.user_profiles add column if not exists theme_pack text default 'simple';
alter table public.user_profiles add column if not exists theme_mode text default 'system';
alter table public.user_profiles add column if not exists motion_pref text default 'standard';
alter table public.user_profiles add column if not exists contrast_pref text default 'standard';

alter table public.user_profiles drop constraint 
if exists user_profiles_theme_pack_check;
alter table public.user_profiles add constraint user_profiles_theme_pack_check
  check (theme_pack in ('simple', 'sunrise', 'ocean', 'forest', 'candy', 'space'));

alter table public.user_profiles drop constraint if exists user_profiles_theme_mode_check;
alter table public.user_profiles add constraint user_profiles_theme_mode_check
  check (theme_mode in ('system', 'light', 'dark'));

alter table public.user_profiles drop constraint if exists user_profiles_motion_pref_check;
alter table public.user_profiles add constraint user_profiles_motion_pref_check
  check (motion_pref in ('standard'));

alter table public.user_profiles drop constraint if exists user_profiles_contrast_pref_check;
alter table public.user_profiles add constraint user_profiles_contrast_pref_check
  check (contrast_pref in ('standard', 'high'));

create table if not exists public.user_tokens (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  month_key text not null,
  input_tokens bigint not null default 0,
  output_tokens bigint not null default 0,
  spent_usd numeric(12, 6) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, month_key)
);

create table if not exists public.parent_consents (
  id uuid primary key default gen_random_uuid(),
  child_user_id uuid not null references auth.users(id) on delete cascade,
  parent_email text not null,
  consent_method text not null default 'email_verification',
  status text not null default 'pending_verification',
  consent_version text not null default 'v1',
  region text,
  ip_address text,
  evidence jsonb,
  requested_at timestamptz not null default now(),
  verified_at timestamptz,
  constraint parent_consents_status_check
    check (status in ('pending_verification', 'verified', 'denied', 'expired')),
  constraint parent_consents_method_check
    check (consent_method in ('email_verification', 'micro_charge', 'id_check'))
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  stripe_price_id text,
  status text not null,
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  canceled_at timestamptz,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.stripe_webhook_events (
  event_id text primary key,
  event_type text not null,
  status text not null default 'processing',
  attempt_count integer not null default 1,
  event_created_at timestamptz,
  processed_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint stripe_webhook_events_status_check
    check (status in ('processing', 'processed', 'failed'))
);

create table if not exists public.dsar_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  request_type text not null,
  status text not null default 'pending',
  details jsonb,
  requested_at timestamptz not null default now(),
  resolved_at timestamptz,
  constraint dsar_request_type_check
    check (request_type in ('access', 'erasure', 'rectification', 'portability', 'restriction')),
  constraint dsar_status_check
    check (status in ('pending', 'in_progress', 'completed', 'rejected'))
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists user_profiles_set_updated_at on public.user_profiles;
create trigger user_profiles_set_updated_at
before update on public.user_profiles
for each row execute function public.set_updated_at();

drop trigger if exists user_tokens_set_updated_at on public.user_tokens;
create trigger user_tokens_set_updated_at
before update on public.user_tokens
for each row execute function public.set_updated_at();

drop trigger if exists subscriptions_set_updated_at on public.subscriptions;
create trigger subscriptions_set_updated_at
before update on public.subscriptions
for each row execute function public.set_updated_at();

drop trigger if exists stripe_webhook_events_set_updated_at on public.stripe_webhook_events;
create trigger stripe_webhook_events_set_updated_at
before update on public.stripe_webhook_events
for each row execute function public.set_updated_at();

alter table public.user_profiles enable row level security;
alter table public.user_tokens enable row level security;
alter table public.parent_consents enable row level security;
alter table public.subscriptions enable row level security;
alter table public.stripe_webhook_events enable row level security;
alter table public.dsar_requests enable row level security;

drop policy if exists "profiles_select_own" on public.user_profiles;
create policy "profiles_select_own"
on public.user_profiles
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "profiles_update_own" on public.user_profiles;
create policy "profiles_update_own"
on public.user_profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "tokens_select_own" on public.user_tokens;
create policy "tokens_select_own"
on public.user_tokens
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "tokens_insert_own" on public.user_tokens;
create policy "tokens_insert_own"
on public.user_tokens
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "parent_consents_select_child" on public.parent_consents;
create policy "parent_consents_select_child"
on public.parent_consents
for select
to authenticated
using (auth.uid() = child_user_id);

drop policy if exists "parent_consents_insert_child" on public.parent_consents;
create policy "parent_consents_insert_child"
on public.parent_consents
for insert
to authenticated
with check (auth.uid() = child_user_id);

drop policy if exists "subscriptions_select_own" on public.subscriptions;
create policy "subscriptions_select_own"
on public.subscriptions
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "dsar_select_own" on public.dsar_requests;
create policy "dsar_select_own"
on public.dsar_requests
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "dsar_insert_own" on public.dsar_requests;
create policy "dsar_insert_own"
on public.dsar_requests
for insert
to authenticated
with check (auth.uid() = user_id);

create table if not exists public.user_learning_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  repetitions integer not null default 0,
  easiness_factor numeric(4, 2) not null default 2.5,
  interval integer not null default 0, -- in days
  next_review_at timestamptz not null default now(),
  last_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

alter table public.user_learning_progress enable row level security;

drop policy if exists "progress_select_own" on public.user_learning_progress;
create policy "progress_select_own"
on public.user_learning_progress
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.user_learning_progress;
create policy "progress_insert_own"
on public.user_learning_progress
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.user_learning_progress;
create policy "progress_update_own"
on public.user_learning_progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop trigger if exists user_learning_progress_set_updated_at on public.user_learning_progress;
create trigger user_learning_progress_set_updated_at
before update on public.user_learning_progress
for each row execute function public.set_updated_at();

create table if not exists public.user_skill_mastery (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  skill_id text not null,
  mastery_level numeric(4, 2) not null default 0.00,
  attempts integer not null default 0,
  correct_attempts integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, skill_id)
);

alter table public.user_skill_mastery enable row level security;

drop policy if exists "skill_mastery_select_own" on public.user_skill_mastery;
create policy "skill_mastery_select_own"
on public.user_skill_mastery
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "skill_mastery_insert_own" on public.user_skill_mastery;
create policy "skill_mastery_insert_own"
on public.user_skill_mastery
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "skill_mastery_update_own" on public.user_skill_mastery;
create policy "skill_mastery_update_own"
on public.user_skill_mastery
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop trigger if exists user_skill_mastery_set_updated_at on public.user_skill_mastery;
create trigger user_skill_mastery_set_updated_at
before update on public.user_skill_mastery
for each row execute function public.set_updated_at();

create table if not exists public.app_settings (
  key text primary key,
  value jsonb not null,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_action_logs (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid not null references auth.users(id) on delete cascade,
  action_type text not null,
  target_user_id uuid references auth.users(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  description text,
  status text not null default 'open',
  priority text not null default 'normal',
  assigned_to uuid references auth.users(id) on delete set null,
  resolution_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  resolved_at timestamptz,
  constraint support_tickets_status_check
    check (status in ('open', 'in_progress', 'resolved', 'closed')),
  constraint support_tickets_priority_check
    check (priority in ('low', 'normal', 'high', 'urgent'))
);

create table if not exists public.sales_events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  promo_code text not null,
  discount_percent integer not null,
  starts_at timestamptz,
  ends_at timestamptz,
  max_redemptions integer,
  stripe_coupon_id text,
  stripe_promotion_code_id text,
  is_active boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists support_tickets_set_updated_at on public.support_tickets;
create trigger support_tickets_set_updated_at
before update on public.support_tickets
for each row execute function public.set_updated_at();

drop trigger if exists sales_events_set_updated_at on public.sales_events;
create trigger sales_events_set_updated_at
before update on public.sales_events
for each row execute function public.set_updated_at();

drop trigger if exists app_settings_set_updated_at on public.app_settings;
create trigger app_settings_set_updated_at
before update on public.app_settings
for each row execute function public.set_updated_at();

alter table public.app_settings enable row level security;
alter table public.admin_action_logs enable row level security;
alter table public.support_tickets enable row level security;
alter table public.sales_events enable row level security;

drop policy if exists "support_tickets_select_own_or_admin" on public.support_tickets;
create policy "support_tickets_select_own_or_admin"
on public.support_tickets
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "support_tickets_insert_own" on public.support_tickets;
create policy "support_tickets_insert_own"
on public.support_tickets
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "support_tickets_update_admin_only" on public.support_tickets;
create policy "support_tickets_update_admin_only"
on public.support_tickets
for update
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

create table if not exists public.policy_acceptances (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  policy_type text not null,
  policy_version text not null,
  accepted_at timestamptz not null default now(),
  constraint policy_acceptances_policy_type_check
    check (policy_type in ('privacy', 'terms', 'refunds')),
  unique (user_id, policy_type, policy_version)
);

alter table public.policy_acceptances enable row level security;

drop policy if exists "policy_acceptances_select_own" on public.policy_acceptances;
create policy "policy_acceptances_select_own"
on public.policy_acceptances
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "policy_acceptances_insert_own" on public.policy_acceptances;
create policy "policy_acceptances_insert_own"
on public.policy_acceptances
for insert
to authenticated
with check (auth.uid() = user_id);

create table if not exists public.admin_alerts (
  id uuid primary key default gen_random_uuid(),
  severity text not null default 'warning',
  category text not null,
  message text not null,
  metadata jsonb not null default '{}'::jsonb,
  acknowledged boolean not null default false,
  acknowledged_by uuid references auth.users(id) on delete set null,
  acknowledged_at timestamptz,
  created_at timestamptz not null default now(),
  constraint admin_alerts_severity_check check (severity in ('info', 'warning', 'critical'))
);

create table if not exists public.admin_rate_limit_events (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid not null references auth.users(id) on delete cascade,
  action_type text not null,
  window_seconds integer not null,
  max_actions integer not null,
  observed_actions integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_report_exports (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid not null references auth.users(id) on delete cascade,
  report_type text not null,
  format text not null default 'csv',
  status text not null default 'completed',
  row_count integer not null default 0,
  checksum_sha256 text,
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  constraint admin_report_exports_status_check check (status in ('running', 'completed', 'failed'))
);

alter table public.admin_report_exports drop constraint if exists admin_report_exports_report_type_check;
alter table public.admin_report_exports add constraint admin_report_exports_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry'));

alter table public.admin_report_exports drop constraint if exists admin_report_exports_format_check;
alter table public.admin_report_exports add constraint admin_report_exports_format_check
  check (format in ('csv'));

alter table public.admin_alerts enable row level security;
alter table public.admin_rate_limit_events enable row level security;
alter table public.admin_report_exports enable row level security;

create table if not exists public.admin_approval_requests (
  id uuid primary key default gen_random_uuid(),
  action_type text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending',
  requested_by uuid not null references auth.users(id) on delete cascade,
  approved_by uuid references auth.users(id) on delete set null,
  rejected_by uuid references auth.users(id) on delete set null,
  executed_by uuid references auth.users(id) on delete set null,
  reason text,
  created_at timestamptz not null default now(),
  approved_at timestamptz,
  rejected_at timestamptz,
  executed_at timestamptz,
  expires_at timestamptz not null default (now() + interval '24 hours'),
  constraint admin_approval_requests_status_check
    check (status in ('pending', 'approved', 'rejected', 'expired', 'executed'))
);

create table if not exists public.admin_alert_notifications (
  id uuid primary key default gen_random_uuid(),
  alert_id uuid not null references public.admin_alerts(id) on delete cascade,
  channel text not null default 'email',
  recipient text not null,
  status text not null default 'queued',
  error text,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  constraint admin_alert_notifications_status_check
    check (status in ('queued', 'sent', 'failed'))
);

create table if not exists public.admin_report_jobs (
  id uuid primary key default gen_random_uuid(),
  report_type text not null,
  status text not null default 'queued',
  requested_by uuid not null references auth.users(id) on delete cascade,
  run_after timestamptz not null default now(),
  started_at timestamptz,
  completed_at timestamptz,
  error text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint admin_report_jobs_status_check
    check (status in ('queued', 'running', 'completed', 'failed'))
);

alter table public.admin_report_jobs drop constraint if exists admin_report_jobs_report_type_check;
alter table public.admin_report_jobs add constraint admin_report_jobs_report_type_check
  check (report_type in ('dsar', 'support', 'audit', 'telemetry'));

alter table public.admin_approval_requests enable row level security;
alter table public.admin_alert_notifications enable row level security;
alter table public.admin_report_jobs enable row level security;

create table if not exists public.media_generation_jobs (
  id uuid primary key default gen_random_uuid(),
  created_by uuid not null references auth.users(id) on delete cascade,
  module_id text,
  lesson_id text,
  asset_type text not null,
  provider text not null default 'seedance',
  prompt text not null,
  status text not null default 'queued',
  output_url text,
  error text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz,
  constraint media_generation_jobs_asset_type_check
    check (asset_type in ('video', 'animation', 'image', 'audio')),
  constraint media_generation_jobs_status_check
    check (status in ('queued', 'running', 'completed', 'failed', 'canceled'))
);

drop trigger if exists media_generation_jobs_set_updated_at on public.media_generation_jobs;
create trigger media_generation_jobs_set_updated_at
before update on public.media_generation_jobs
for each row execute function public.set_updated_at();

alter table public.media_generation_jobs enable row level security;

drop policy if exists "media_jobs_select_own_or_admin" on public.media_generation_jobs;
create policy "media_jobs_select_own_or_admin"
on public.media_generation_jobs
for select
to authenticated
using (
  auth.uid() = created_by
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "media_jobs_insert_own" on public.media_generation_jobs;
create policy "media_jobs_insert_own"
on public.media_generation_jobs
for insert
to authenticated
with check (auth.uid() = created_by);

drop policy if exists "media_jobs_update_admin_only" on public.media_generation_jobs;
create policy "media_jobs_update_admin_only"
on public.media_generation_jobs
for update
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

create table if not exists public.learning_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text,
  lesson_id text not null,
  event_type text not null,
  event_at timestamptz not null default now(),
  payload jsonb not null default '{}'::jsonb,
  user_agent text,
  created_at timestamptz not null default now(),
  constraint learning_events_event_type_check
    check (
      event_type in (
        'lesson_viewed',
        'chunk_viewed',
        'flashcard_flipped',
        'activity_interacted',
        'quiz_answered',
        'lesson_completed'
      )
    )
);

alter table public.learning_events enable row level security;

drop policy if exists "learning_events_select_own_or_admin" on public.learning_events;
create policy "learning_events_select_own_or_admin"
on public.learning_events
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "learning_events_insert_own" on public.learning_events;
create policy "learning_events_insert_own"
on public.learning_events
for insert
to authenticated
with check (auth.uid() = user_id);

create table if not exists public.user_exam_error_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text,
  lesson_id text not null,
  question_id text not null,
  skill_id text,
  error_type text not null default 'incorrect_answer',
  selected_option_id text,
  correct_option_id text,
  question_text text,
  notes text,
  resolved boolean not null default false,
  resolved_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_exam_error_logs_error_type_check
    check (
      error_type in (
        'incorrect_answer',
        'timed_out',
        'strategy_gap',
        'careless_mistake',
        'concept_gap'
      )
    )
);

drop trigger if exists user_exam_error_logs_set_updated_at on public.user_exam_error_logs;
create trigger user_exam_error_logs_set_updated_at
before update on public.user_exam_error_logs
for each row execute function public.set_updated_at();

alter table public.user_exam_error_logs enable row level security;

drop policy if exists "exam_error_logs_select_own_or_admin" on public.user_exam_error_logs;
create policy "exam_error_logs_select_own_or_admin"
on public.user_exam_error_logs
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "exam_error_logs_insert_own" on public.user_exam_error_logs;
create policy "exam_error_logs_insert_own"
on public.user_exam_error_logs
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "exam_error_logs_update_own_or_admin" on public.user_exam_error_logs;
create policy "exam_error_logs_update_own_or_admin"
on public.user_exam_error_logs
for update
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

create table if not exists public.ai_followup_materials (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  module_id text,
  status text not null default 'generating',
  generation_mode text not null default 'rule_based',
  model text,
  pack jsonb not null default '{}'::jsonb,
  context jsonb not null default '{}'::jsonb,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint ai_followup_materials_status_check
    check (status in ('generating', 'completed', 'failed')),
  constraint ai_followup_materials_generation_mode_check
    check (generation_mode in ('rule_based', 'openai')),
  unique (user_id, lesson_id)
);

drop trigger if exists ai_followup_materials_set_updated_at on public.ai_followup_materials;
create trigger ai_followup_materials_set_updated_at
before update on public.ai_followup_materials
for each row execute function public.set_updated_at();

alter table public.ai_followup_materials enable row level security;

drop policy if exists "ai_followup_select_own_or_admin" on public.ai_followup_materials;
create policy "ai_followup_select_own_or_admin"
on public.ai_followup_materials
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "ai_followup_insert_own" on public.ai_followup_materials;
create policy "ai_followup_insert_own"
on public.ai_followup_materials
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "ai_followup_update_own_or_admin" on public.ai_followup_materials;
create policy "ai_followup_update_own_or_admin"
on public.ai_followup_materials
for update
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

create table if not exists public.ai_tutor_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text,
  module_id text,
  role text not null,
  source text not null default 'user',
  message text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint ai_tutor_conversations_role_check
    check (role in ('user', 'assistant')),
  constraint ai_tutor_conversations_source_check
    check (source in ('user', 'openai', 'rule_based', 'system'))
);

alter table public.ai_tutor_conversations enable row level security;

drop policy if exists "ai_tutor_conversations_select_own_or_admin" on public.ai_tutor_conversations;
create policy "ai_tutor_conversations_select_own_or_admin"
on public.ai_tutor_conversations
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "ai_tutor_conversations_insert_own_or_admin" on public.ai_tutor_conversations;
create policy "ai_tutor_conversations_insert_own_or_admin"
on public.ai_tutor_conversations
for insert
to authenticated
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "ai_tutor_conversations_delete_own_or_admin" on public.ai_tutor_conversations;
create policy "ai_tutor_conversations_delete_own_or_admin"
on public.ai_tutor_conversations
for delete
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

create table if not exists public.ai_remediation_worksheets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  module_id text,
  status text not null default 'generating',
  generation_mode text not null default 'rule_based',
  model text,
  worksheet jsonb not null default '{}'::jsonb,
  context jsonb not null default '{}'::jsonb,
  error text,
  viewed_at timestamptz,
  downloaded_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint ai_remediation_worksheets_status_check
    check (status in ('generating', 'completed', 'failed')),
  constraint ai_remediation_worksheets_generation_mode_check
    check (generation_mode in ('rule_based', 'openai')),
  unique (user_id, lesson_id)
);

alter table public.ai_remediation_worksheets add column if not exists viewed_at timestamptz;
alter table public.ai_remediation_worksheets add column if not exists downloaded_at timestamptz;
alter table public.ai_remediation_worksheets add column if not exists completed_at timestamptz;

drop trigger if exists ai_remediation_worksheets_set_updated_at on public.ai_remediation_worksheets;
create trigger ai_remediation_worksheets_set_updated_at
before update on public.ai_remediation_worksheets
for each row execute function public.set_updated_at();

alter table public.ai_remediation_worksheets enable row level security;

drop policy if exists "ai_remediation_worksheets_select_own_or_admin" on public.ai_remediation_worksheets;
create policy "ai_remediation_worksheets_select_own_or_admin"
on public.ai_remediation_worksheets
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "ai_remediation_worksheets_insert_own" on public.ai_remediation_worksheets;
create policy "ai_remediation_worksheets_insert_own"
on public.ai_remediation_worksheets
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "ai_remediation_worksheets_update_own_or_admin" on public.ai_remediation_worksheets;
create policy "ai_remediation_worksheets_update_own_or_admin"
on public.ai_remediation_worksheets
for update
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

create index if not exists idx_user_tokens_user_month
  on public.user_tokens(user_id, month_key);

create index if not exists idx_user_tokens_month
  on public.user_tokens(month_key);

create index if not exists idx_parent_consents_parent_email_status
  on public.parent_consents(parent_email, status);

create index if not exists idx_dsar_requests_status_requested_at
  on public.dsar_requests(status, requested_at desc);

create index if not exists idx_support_tickets_status_priority_created
  on public.support_tickets(status, priority, created_at desc);

create index if not exists idx_support_tickets_user_created
  on public.support_tickets(user_id, created_at desc);

create index if not exists idx_admin_alerts_acknowledged_created
  on public.admin_alerts(acknowledged, created_at desc);

create index if not exists idx_admin_approval_requests_status_created
  on public.admin_approval_requests(status, created_at desc);

create index if not exists idx_admin_report_jobs_status_run_after
  on public.admin_report_jobs(status, run_after);

create index if not exists idx_admin_report_jobs_status_created
  on public.admin_report_jobs(status, created_at desc);

create index if not exists idx_admin_report_jobs_status_completed
  on public.admin_report_jobs(status, completed_at desc);

create index if not exists idx_admin_alert_notifications_status_created
  on public.admin_alert_notifications(status, created_at desc);

create index if not exists idx_admin_alert_notifications_alert_status
  on public.admin_alert_notifications(alert_id, status, created_at desc);

create index if not exists idx_media_jobs_status_created
  on public.media_generation_jobs(status, created_at desc);

create index if not exists idx_media_jobs_lesson_status
  on public.media_generation_jobs(lesson_id, status, created_at desc);

create index if not exists idx_media_jobs_module_status
  on public.media_generation_jobs(module_id, status, created_at desc);

-- Compound index for fast processor polling: WHERE asset_type IN (...) AND status = 'queued'
create index if not exists idx_media_jobs_asset_type_status
  on public.media_generation_jobs(asset_type, status);

create index if not exists idx_learning_events_user_lesson_event_at
  on public.learning_events(user_id, lesson_id, event_at desc);

create index if not exists idx_learning_events_event_type_event_at
  on public.learning_events(event_type, event_at desc);

create index if not exists idx_exam_error_logs_user_resolved_created
  on public.user_exam_error_logs(user_id, resolved, created_at desc);

create index if not exists idx_exam_error_logs_user_lesson_created
  on public.user_exam_error_logs(user_id, lesson_id, created_at desc);

create index if not exists idx_ai_followup_materials_user_updated
  on public.ai_followup_materials(user_id, updated_at desc);

create index if not exists idx_ai_followup_materials_lesson_updated
  on public.ai_followup_materials(lesson_id, updated_at desc);

create index if not exists idx_ai_tutor_conversations_user_created
  on public.ai_tutor_conversations(user_id, created_at desc);

create index if not exists idx_ai_tutor_conversations_user_lesson_created
  on public.ai_tutor_conversations(user_id, lesson_id, created_at desc);

create index if not exists idx_ai_remediation_worksheets_user_updated
  on public.ai_remediation_worksheets(user_id, updated_at desc);

create index if not exists idx_ai_remediation_worksheets_lesson_updated
  on public.ai_remediation_worksheets(lesson_id, updated_at desc);

create index if not exists idx_ai_remediation_worksheets_completed_at
  on public.ai_remediation_worksheets(completed_at desc);

-- Student Profiles (Family Model)
create table if not exists public.student_profiles (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  age_years integer check (age_years between 3 and 21),
  grade_level text,
  path_allowlist text[],
  featured_module_ids text[],
  module_assignment_mode text not null default 'guided',
  
  -- Assessment & Progress
  initial_assessment_status text default 'pending', -- 'pending', 'in_progress', 'completed'
  initial_assessment_data jsonb, -- Stores the Q&A specific to the 5 diagnostic questions
  ai_skill_level_map jsonb, -- Stores the AI-derived competency map after assessment
  
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.student_profiles
  add column if not exists age_years integer check (age_years between 3 and 21);

alter table public.student_profiles
  add column if not exists path_allowlist text[];

alter table public.student_profiles
  add column if not exists featured_module_ids text[];

alter table public.student_profiles
  add column if not exists module_assignment_mode text not null default 'guided';

alter table public.student_profiles drop constraint if exists student_profiles_module_assignment_mode_check;
alter table public.student_profiles add constraint student_profiles_module_assignment_mode_check
  check (module_assignment_mode in ('guided', 'random'));

-- RLS
alter table public.student_profiles enable row level security;

drop policy if exists "Users can manage their own student profiles" on public.student_profiles;
create policy "Users can manage their own student profiles"
  on public.student_profiles for all
  using (auth.uid() = account_id)
  with check (auth.uid() = account_id);

-- Add index for fast lookup of profiles by account
create index if not exists idx_student_profiles_account
  on public.student_profiles(account_id);

drop trigger if exists set_student_profiles_updated_at on public.student_profiles;
create trigger set_student_profiles_updated_at
  before update on public.student_profiles
  for each row execute function public.set_updated_at();

-- ════════════════════════════════════════════════════════════════════════════
-- CONFIGURABLE LIMITS: Per-user setting overrides
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.user_setting_overrides (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  setting_key text not null,
  value jsonb not null,
  reason text,
  set_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, setting_key)
);

alter table public.user_setting_overrides enable row level security;

drop trigger if exists user_setting_overrides_set_updated_at on public.user_setting_overrides;
create trigger user_setting_overrides_set_updated_at
  before update on public.user_setting_overrides
  for each row execute function public.set_updated_at();

create index if not exists idx_user_setting_overrides_user_key
  on public.user_setting_overrides(user_id, setting_key);

-- ════════════════════════════════════════════════════════════════════════════
-- DATA RETENTION: Run log for automated retention jobs
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.data_retention_runs (
  id uuid primary key default gen_random_uuid(),
  run_type text not null default 'scheduled',
  status text not null default 'running',
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  rows_deleted jsonb not null default '{}'::jsonb,
  error text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint data_retention_runs_status_check
    check (status in ('running', 'completed', 'failed')),
  constraint data_retention_runs_run_type_check
    check (run_type in ('scheduled', 'manual', 'dsar'))
);

alter table public.data_retention_runs enable row level security;

create index if not exists idx_data_retention_runs_status_started
  on public.data_retention_runs(status, started_at desc);

-- ════════════════════════════════════════════════════════════════════════════
-- BETA TESTERS & SPECIAL ACCESS: Access grants system
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  grant_type text not null,
  label text,
  is_active boolean not null default true,
  granted_by uuid references auth.users(id) on delete set null,
  revoked_by uuid references auth.users(id) on delete set null,
  revoked_at timestamptz,
  expires_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint access_grants_grant_type_check
    check (grant_type in ('beta_tester', 'teacher', 'school', 'influencer', 'press', 'investor', 'employee')),
  unique (user_id, grant_type)
);

alter table public.access_grants enable row level security;

drop trigger if exists access_grants_set_updated_at on public.access_grants;
create trigger access_grants_set_updated_at
  before update on public.access_grants
  for each row execute function public.set_updated_at();

create index if not exists idx_access_grants_user_type_active
  on public.access_grants(user_id, grant_type, is_active);

create index if not exists idx_access_grants_type_active
  on public.access_grants(grant_type, is_active);

-- Soft-delete support for user_profiles (data retention)
alter table public.user_profiles add column if not exists deleted_at timestamptz;

-- AI moderation log for auditing flagged content
create table if not exists public.ai_moderation_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  channel text not null,
  input_text text not null,
  flagged boolean not null default false,
  categories jsonb not null default '{}'::jsonb,
  provider text not null default 'openai',
  action_taken text not null default 'none',
  created_at timestamptz not null default now(),
  constraint ai_moderation_log_channel_check
    check (channel in ('companion', 'tutor', 'chat')),
  constraint ai_moderation_log_action_check
    check (action_taken in ('none', 'blocked', 'warned', 'flagged_for_review'))
);

alter table public.ai_moderation_log enable row level security;

create index if not exists idx_ai_moderation_log_user_created
  on public.ai_moderation_log(user_id, created_at desc);

create index if not exists idx_ai_moderation_log_flagged_created
  on public.ai_moderation_log(flagged, created_at desc);

-- ═══════════════════════════════════════════════════════════════════════════
-- PARENT PORTAL: Linked Devices, Notifications, Notification Preferences
-- ═══════════════════════════════════════════════════════════════════════════

-- Linked devices for cross-device parent notifications & QR pairing
create table if not exists public.linked_devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  device_name text not null default 'Unknown Device',
  device_type text not null default 'web',
  device_token text,              -- push notification token (FCM / APNs)
  user_agent text,                -- browser/app user-agent for display
  linked_via text not null default 'manual',
  link_code text unique,          -- 6-char code for QR/manual pairing
  link_code_expires_at timestamptz,
  is_active boolean not null default true,
  last_seen_at timestamptz default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint linked_devices_type_check
    check (device_type in ('web', 'ios', 'android', 'tablet', 'desktop')),
  constraint linked_devices_linked_via_check
    check (linked_via in ('qr', 'email', 'manual', 'auto'))
);

alter table public.linked_devices enable row level security;

drop policy if exists "Users can manage their own devices" on public.linked_devices;
create policy "Users can manage their own devices"
  on public.linked_devices for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop trigger if exists set_linked_devices_updated_at on public.linked_devices;
create trigger set_linked_devices_updated_at
  before update on public.linked_devices
  for each row execute function public.set_updated_at();

create index if not exists idx_linked_devices_user_active
  on public.linked_devices(user_id, is_active);

create index if not exists idx_linked_devices_link_code
  on public.linked_devices(link_code) where link_code is not null;

-- Parent notifications (in-app notification feed)
create table if not exists public.parent_notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  title text not null,
  body text,
  metadata jsonb not null default '{}'::jsonb,
  child_profile_id uuid references public.student_profiles(id) on delete set null,
  is_read boolean not null default false,
  read_at timestamptz,
  created_at timestamptz not null default now(),
  constraint parent_notifications_type_check
    check (type in (
      'achievement', 'milestone', 'safety_alert', 'weekly_digest',
      'daily_summary', 'device_linked', 'streak_milestone', 'session_complete',
      'assessment_ready', 'low_activity', 'new_content'
    ))
);

alter table public.parent_notifications enable row level security;

drop policy if exists "Users can read their own notifications" on public.parent_notifications;
create policy "Users can read their own notifications"
  on public.parent_notifications for select
  using (auth.uid() = user_id);

drop policy if exists "Users can update their own notifications" on public.parent_notifications;
create policy "Users can update their own notifications"
  on public.parent_notifications for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_parent_notifications_user_read_created
  on public.parent_notifications(user_id, is_read, created_at desc);

create index if not exists idx_parent_notifications_user_created
  on public.parent_notifications(user_id, created_at desc);

-- Parent notification preferences
create table if not exists public.parent_notification_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  notify_achievements boolean not null default true,
  notify_milestones boolean not null default true,
  notify_safety_alerts boolean not null default true,
  notify_session_complete boolean not null default false,
  weekly_digest boolean not null default true,
  daily_summary boolean not null default false,
  push_enabled boolean not null default true,
  email_enabled boolean not null default true,
  quiet_hours_start time,       -- e.g. '22:00'
  quiet_hours_end time,         -- e.g. '07:00'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.parent_notification_preferences enable row level security;

drop policy if exists "Users can manage their own notification preferences" on public.parent_notification_preferences;
create policy "Users can manage their own notification preferences"
  on public.parent_notification_preferences for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop trigger if exists set_parent_notification_prefs_updated_at on public.parent_notification_preferences;
create trigger set_parent_notification_prefs_updated_at
  before update on public.parent_notification_preferences
  for each row execute function public.set_updated_at();

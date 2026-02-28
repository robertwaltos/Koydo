-- Language pricing runtime config and experiment-ready usage fields

alter table public.language_usage_tracking
  add column if not exists attempt_cap integer default 300,
  add column if not exists utterance_p50_seconds numeric(8, 2) default 10.0,
  add column if not exists utterance_p90_seconds numeric(8, 2) default 12.0,
  add column if not exists geo_tier text default 'tier_1';

update public.language_usage_tracking
set attempt_cap = coalesce(attempt_cap, 300),
    utterance_p50_seconds = coalesce(utterance_p50_seconds, 10.0),
    utterance_p90_seconds = coalesce(utterance_p90_seconds, 12.0),
    geo_tier = coalesce(geo_tier, 'tier_1')
where attempt_cap is null
   or utterance_p50_seconds is null
   or utterance_p90_seconds is null
   or geo_tier is null;

alter table public.language_usage_tracking
  alter column attempt_cap set default 300,
  alter column attempt_cap set not null,
  alter column utterance_p50_seconds set default 10.0,
  alter column utterance_p50_seconds set not null,
  alter column utterance_p90_seconds set default 12.0,
  alter column utterance_p90_seconds set not null,
  alter column geo_tier set default 'tier_1',
  alter column geo_tier set not null;

alter table public.language_usage_tracking
  drop constraint if exists language_usage_tracking_attempt_cap_check;
alter table public.language_usage_tracking
  add constraint language_usage_tracking_attempt_cap_check
  check (attempt_cap in (250, 300, 350));

alter table public.language_usage_tracking
  drop constraint if exists language_usage_tracking_utterance_p50_check;
alter table public.language_usage_tracking
  add constraint language_usage_tracking_utterance_p50_check
  check (utterance_p50_seconds > 0);

alter table public.language_usage_tracking
  drop constraint if exists language_usage_tracking_utterance_p90_check;
alter table public.language_usage_tracking
  add constraint language_usage_tracking_utterance_p90_check
  check (utterance_p90_seconds > 0 and utterance_p90_seconds >= utterance_p50_seconds);

alter table public.language_usage_tracking
  drop constraint if exists language_usage_tracking_geo_tier_check;
alter table public.language_usage_tracking
  add constraint language_usage_tracking_geo_tier_check
  check (geo_tier in ('tier_1', 'tier_2', 'tier_3', 'tier_4', 'tier_5'));

create index if not exists idx_language_usage_tracking_learner_month_cap
  on public.language_usage_tracking(learner_id, month_key, attempt_cap);

create table if not exists public.language_pricing_config (
  id uuid primary key default gen_random_uuid(),
  phase text not null default '1',
  config_key text not null,
  config jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  starts_at timestamptz,
  ends_at timestamptz,
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint language_pricing_config_phase_check check (phase in ('1', '2', '3')),
  constraint language_pricing_config_key_check check (char_length(config_key) > 0),
  unique (phase, config_key)
);

drop trigger if exists language_pricing_config_set_updated_at on public.language_pricing_config;
create trigger language_pricing_config_set_updated_at
before update on public.language_pricing_config
for each row execute function public.set_updated_at();

create index if not exists idx_language_pricing_config_active_phase
  on public.language_pricing_config(is_active, phase, config_key);

alter table public.language_pricing_config enable row level security;

drop policy if exists "language_pricing_config_select_admin_only" on public.language_pricing_config;
create policy "language_pricing_config_select_admin_only"
on public.language_pricing_config
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

drop policy if exists "language_pricing_config_insert_admin_only" on public.language_pricing_config;
create policy "language_pricing_config_insert_admin_only"
on public.language_pricing_config
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

drop policy if exists "language_pricing_config_update_admin_only" on public.language_pricing_config;
create policy "language_pricing_config_update_admin_only"
on public.language_pricing_config
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

drop policy if exists "language_pricing_config_delete_admin_only" on public.language_pricing_config;
create policy "language_pricing_config_delete_admin_only"
on public.language_pricing_config
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

insert into public.app_settings (key, value, updated_at)
values (
  'language_pricing_runtime',
  jsonb_build_object(
    'phase', '1',
    'pricingProfile', 'conservative',
    'attemptCap', 300,
    'freeSamplerAttempts', 10,
    'geoTierDefault', 'tier_1',
    'activeExperimentVariantId', 'variant_control'
  ),
  now()
)
on conflict (key) do update
set value = excluded.value,
    updated_at = now();

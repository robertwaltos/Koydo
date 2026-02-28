-- Ensure subscriptions has required fields for RevenueCat/native billing sync.
-- Safe for environments where columns may already exist.

alter table public.subscriptions
  add column if not exists provider text,
  add column if not exists plan_id text,
  add column if not exists product_id text,
  add column if not exists is_in_trial boolean,
  add column if not exists will_renew boolean,
  add column if not exists cancel_reason text;

update public.subscriptions
set provider = 'stripe'
where provider is null;

alter table public.subscriptions
  alter column provider set default 'stripe';

alter table public.subscriptions
  alter column provider set not null;

update public.subscriptions
set is_in_trial = false
where is_in_trial is null;

alter table public.subscriptions
  alter column is_in_trial set default false;

alter table public.subscriptions
  alter column is_in_trial set not null;

update public.subscriptions
set will_renew = true
where will_renew is null;

alter table public.subscriptions
  alter column will_renew set default true;

alter table public.subscriptions
  alter column will_renew set not null;

alter table public.subscriptions
  drop constraint if exists subscriptions_provider_check;

alter table public.subscriptions
  add constraint subscriptions_provider_check
  check (provider in ('stripe', 'revenuecat', 'apple', 'google'));

create index if not exists idx_subscriptions_user_provider_updated
  on public.subscriptions(user_id, provider, updated_at desc);

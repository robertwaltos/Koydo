-- Launch hardening: ensure billing lookups by user are indexed.
create index if not exists idx_subscriptions_user_id
  on public.subscriptions(user_id);

create index if not exists idx_subscriptions_user_status_period_end
  on public.subscriptions(user_id, status, current_period_end desc);

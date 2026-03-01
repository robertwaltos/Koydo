create table if not exists public.revenuecat_webhook_events (
  event_id text primary key,
  event_type text not null,
  status text not null default 'processing',
  attempt_count integer not null default 1,
  processed_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint revenuecat_webhook_events_status_check
    check (status in ('processing', 'processed', 'failed'))
);

drop trigger if exists revenuecat_webhook_events_set_updated_at on public.revenuecat_webhook_events;
create trigger revenuecat_webhook_events_set_updated_at
before update on public.revenuecat_webhook_events
for each row execute function public.set_updated_at();

alter table public.revenuecat_webhook_events enable row level security;

drop policy if exists "revenuecat_webhook_events_admin_all" on public.revenuecat_webhook_events;
create policy "revenuecat_webhook_events_admin_all"
on public.revenuecat_webhook_events
for all
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

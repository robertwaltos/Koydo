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

drop trigger if exists stripe_webhook_events_set_updated_at on public.stripe_webhook_events;
create trigger stripe_webhook_events_set_updated_at
before update on public.stripe_webhook_events
for each row execute function public.set_updated_at();

alter table public.stripe_webhook_events enable row level security;

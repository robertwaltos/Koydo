-- RLS policy coverage hardening for operational/admin tables.
-- Adds explicit admin-scoped SELECT + write policies so every table
-- has at least one SELECT policy and write access remains tightly scoped.

-- app_settings
drop policy if exists "app_settings_admin_all" on public.app_settings;
create policy "app_settings_admin_all"
on public.app_settings
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

-- admin_action_logs
drop policy if exists "admin_action_logs_admin_all" on public.admin_action_logs;
create policy "admin_action_logs_admin_all"
on public.admin_action_logs
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

-- sales_events
drop policy if exists "sales_events_admin_all" on public.sales_events;
create policy "sales_events_admin_all"
on public.sales_events
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

-- admin_alerts
drop policy if exists "admin_alerts_admin_all" on public.admin_alerts;
create policy "admin_alerts_admin_all"
on public.admin_alerts
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

-- admin_rate_limit_events
drop policy if exists "admin_rate_limit_events_admin_all" on public.admin_rate_limit_events;
create policy "admin_rate_limit_events_admin_all"
on public.admin_rate_limit_events
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

-- admin_report_exports
drop policy if exists "admin_report_exports_admin_all" on public.admin_report_exports;
create policy "admin_report_exports_admin_all"
on public.admin_report_exports
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

-- admin_approval_requests
drop policy if exists "admin_approval_requests_admin_all" on public.admin_approval_requests;
create policy "admin_approval_requests_admin_all"
on public.admin_approval_requests
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

-- admin_alert_notifications
drop policy if exists "admin_alert_notifications_admin_all" on public.admin_alert_notifications;
create policy "admin_alert_notifications_admin_all"
on public.admin_alert_notifications
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

-- admin_report_jobs
drop policy if exists "admin_report_jobs_admin_all" on public.admin_report_jobs;
create policy "admin_report_jobs_admin_all"
on public.admin_report_jobs
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

-- stripe_webhook_events
drop policy if exists "stripe_webhook_events_admin_all" on public.stripe_webhook_events;
create policy "stripe_webhook_events_admin_all"
on public.stripe_webhook_events
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

-- subscriptions (keep existing own-user SELECT policy; add admin write/select management policy)
drop policy if exists "subscriptions_admin_all" on public.subscriptions;
create policy "subscriptions_admin_all"
on public.subscriptions
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

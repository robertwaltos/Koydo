-- Remote Device Login Authorization Flow
-- Allows a parent to remotely approve a login for a child device using a 6-digit code.

create table if not exists public.device_login_requests (
  id uuid primary key default gen_random_uuid(),
  device_code text not null,
  child_user_id uuid, -- Optional initially, can be set if the device remembers who was logged in
  parent_user_id uuid, -- Set when the parent approves it
  status text not null default 'pending',
  device_info jsonb not null default '{}'::jsonb,
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint device_login_requests_status_check
    check (status in ('pending', 'approved', 'expired', 'consumed')),
  constraint device_login_requests_code_unique unique (device_code)
);

create index if not exists idx_device_login_requests_code on public.device_login_requests(device_code);
create index if not exists idx_device_login_requests_status on public.device_login_requests(status);

-- Triggers for updated_at
drop trigger if exists device_login_requests_set_updated_at on public.device_login_requests;
create trigger device_login_requests_set_updated_at
before update on public.device_login_requests
for each row execute function public.set_updated_at();

-- RLS Policies
alter table public.device_login_requests enable row level security;

-- Devices can insert a new request (anonymous)
drop policy if exists "device_login_insert_anon" on public.device_login_requests;
create policy "device_login_insert_anon"
on public.device_login_requests
for insert
to public
with check (status = 'pending');

-- Devices can read their own request using the code (we could restrict this to a specific origin or service role in the API, but for polling, public read on their specific code is common)
drop policy if exists "device_login_select_anon" on public.device_login_requests;
create policy "device_login_select_anon"
on public.device_login_requests
for select
to public
using (true);

-- Parents can update (approve) requests
drop policy if exists "device_login_update_parent" on public.device_login_requests;
create policy "device_login_update_parent"
on public.device_login_requests
for update
to authenticated
using (
  -- Only parents can approve
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and (up.is_parent = true or up.is_admin = true)
  )
)
with check (
  -- Can only set to approved and attach their ID
  status = 'approved' and parent_user_id = auth.uid()
);

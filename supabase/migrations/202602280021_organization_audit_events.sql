-- Organization audit trail for learner lifecycle and admin operations.

create table if not exists public.organization_audit_events (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  actor_user_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  subject_type text not null default 'organization_learner',
  subject_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint organization_audit_events_event_type_check
    check (char_length(event_type) between 3 and 120),
  constraint organization_audit_events_subject_type_check
    check (char_length(subject_type) between 3 and 120)
);

create index if not exists idx_organization_audit_events_org_created
  on public.organization_audit_events(organization_id, created_at desc);

create index if not exists idx_organization_audit_events_subject
  on public.organization_audit_events(organization_id, subject_type, subject_id, created_at desc);

create index if not exists idx_organization_audit_events_event_type
  on public.organization_audit_events(organization_id, event_type, created_at desc);

alter table public.organization_audit_events enable row level security;

drop policy if exists "organization_audit_events_select_org_members" on public.organization_audit_events;
create policy "organization_audit_events_select_org_members"
on public.organization_audit_events
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_audit_events.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
);

drop policy if exists "organization_audit_events_insert_org_staff" on public.organization_audit_events;
create policy "organization_audit_events_insert_org_staff"
on public.organization_audit_events
for insert
to authenticated
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_audit_events.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
);

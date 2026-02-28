-- Organization licensing + gifting foundation
-- Supports:
-- - district/school org accounts
-- - bulk seat purchases
-- - provisioning token claims (QR-compatible payload flow)
-- - gifted memberships purchased by individuals

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  organization_type text not null default 'school',
  school_count integer not null default 1,
  billing_email text,
  created_by uuid not null references auth.users(id) on delete restrict,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint organizations_type_check
    check (organization_type in ('school', 'district', 'tutoring_center', 'business', 'nonprofit', 'other')),
  constraint organizations_school_count_check
    check (school_count >= 1)
);

create table if not exists public.organization_memberships (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'viewer',
  status text not null default 'active',
  invited_by uuid references auth.users(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, user_id),
  constraint organization_memberships_role_check
    check (role in ('owner', 'admin', 'teacher', 'it_manager', 'viewer')),
  constraint organization_memberships_status_check
    check (status in ('active', 'invited', 'suspended'))
);

create table if not exists public.organization_license_purchases (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  purchased_by uuid not null references auth.users(id) on delete restrict,
  seats_purchased integer not null,
  seats_assigned integer not null default 0,
  unit_price_cents integer not null,
  total_price_cents integer not null,
  currency text not null default 'USD',
  plan_id text not null default 'language_school_annual',
  status text not null default 'checkout_created',
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text unique,
  stripe_invoice_id text,
  purchased_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint organization_license_purchases_seats_check
    check (seats_purchased > 0 and seats_assigned >= 0 and seats_assigned <= seats_purchased),
  constraint organization_license_purchases_price_check
    check (unit_price_cents >= 0 and total_price_cents >= 0),
  constraint organization_license_purchases_status_check
    check (status in ('checkout_created', 'paid', 'partially_allocated', 'fully_allocated', 'canceled', 'refunded'))
);

create table if not exists public.organization_provisioning_tokens (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete restrict,
  token_hash text not null unique,
  token_preview text not null,
  seats_total integer not null,
  seats_remaining integer not null,
  expires_at timestamptz,
  revoked_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint organization_provisioning_tokens_seats_check
    check (seats_total > 0 and seats_remaining >= 0 and seats_remaining <= seats_total)
);

create table if not exists public.organization_learners (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  learner_user_id uuid references auth.users(id) on delete set null,
  student_profile_id uuid references public.student_profiles(id) on delete set null,
  provisioning_token_id uuid references public.organization_provisioning_tokens(id) on delete set null,
  provisioned_by_user_id uuid references auth.users(id) on delete set null,
  external_student_id text,
  school_name text,
  status text not null default 'active',
  assigned_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint organization_learners_identity_check
    check (learner_user_id is not null or student_profile_id is not null),
  constraint organization_learners_status_check
    check (status in ('active', 'inactive'))
);

create table if not exists public.gifted_memberships (
  id uuid primary key default gen_random_uuid(),
  purchaser_user_id uuid not null references auth.users(id) on delete restrict,
  recipient_email text not null,
  recipient_user_id uuid references auth.users(id) on delete set null,
  plan_id text not null default 'language_plus_conservative',
  months_granted integer not null default 1,
  status text not null default 'checkout_created',
  gift_code_hash text not null unique,
  gift_code_preview text not null,
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text unique,
  purchased_at timestamptz,
  redeemed_at timestamptz,
  expires_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint gifted_memberships_months_check
    check (months_granted >= 1 and months_granted <= 36),
  constraint gifted_memberships_status_check
    check (status in ('checkout_created', 'paid', 'redeemed', 'expired', 'canceled', 'refunded'))
);

create unique index if not exists idx_organization_learners_org_user_unique
  on public.organization_learners(organization_id, learner_user_id)
  where learner_user_id is not null;

create unique index if not exists idx_organization_learners_org_profile_unique
  on public.organization_learners(organization_id, student_profile_id)
  where student_profile_id is not null;

create index if not exists idx_organizations_slug
  on public.organizations(slug);

create index if not exists idx_organization_memberships_user
  on public.organization_memberships(user_id, status, created_at desc);

create index if not exists idx_organization_memberships_org
  on public.organization_memberships(organization_id, role, status);

create index if not exists idx_organization_license_purchases_org_status
  on public.organization_license_purchases(organization_id, status, created_at desc);

create index if not exists idx_organization_provisioning_tokens_org
  on public.organization_provisioning_tokens(organization_id, created_at desc);

create index if not exists idx_organization_learners_org_status
  on public.organization_learners(organization_id, status, created_at desc);

create index if not exists idx_organization_learners_school
  on public.organization_learners(organization_id, school_name);

create index if not exists idx_gifted_memberships_purchaser
  on public.gifted_memberships(purchaser_user_id, created_at desc);

create index if not exists idx_gifted_memberships_recipient
  on public.gifted_memberships(recipient_email, status, created_at desc);

create index if not exists idx_gifted_memberships_recipient_user
  on public.gifted_memberships(recipient_user_id, status, created_at desc);

drop trigger if exists organizations_set_updated_at on public.organizations;
create trigger organizations_set_updated_at
before update on public.organizations
for each row execute function public.set_updated_at();

drop trigger if exists organization_memberships_set_updated_at on public.organization_memberships;
create trigger organization_memberships_set_updated_at
before update on public.organization_memberships
for each row execute function public.set_updated_at();

drop trigger if exists organization_license_purchases_set_updated_at on public.organization_license_purchases;
create trigger organization_license_purchases_set_updated_at
before update on public.organization_license_purchases
for each row execute function public.set_updated_at();

drop trigger if exists organization_provisioning_tokens_set_updated_at on public.organization_provisioning_tokens;
create trigger organization_provisioning_tokens_set_updated_at
before update on public.organization_provisioning_tokens
for each row execute function public.set_updated_at();

drop trigger if exists organization_learners_set_updated_at on public.organization_learners;
create trigger organization_learners_set_updated_at
before update on public.organization_learners
for each row execute function public.set_updated_at();

drop trigger if exists gifted_memberships_set_updated_at on public.gifted_memberships;
create trigger gifted_memberships_set_updated_at
before update on public.gifted_memberships
for each row execute function public.set_updated_at();

alter table public.organizations enable row level security;
alter table public.organization_memberships enable row level security;
alter table public.organization_license_purchases enable row level security;
alter table public.organization_provisioning_tokens enable row level security;
alter table public.organization_learners enable row level security;
alter table public.gifted_memberships enable row level security;

drop policy if exists "organizations_select_member" on public.organizations;
create policy "organizations_select_member"
on public.organizations
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organizations.id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
);

drop policy if exists "organizations_insert_creator" on public.organizations;
create policy "organizations_insert_creator"
on public.organizations
for insert
to authenticated
with check (created_by = auth.uid());

drop policy if exists "organizations_update_owner_admin" on public.organizations;
create policy "organizations_update_owner_admin"
on public.organizations
for update
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organizations.id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin')
  )
)
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organizations.id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin')
  )
);

drop policy if exists "organization_memberships_select_member_or_self" on public.organization_memberships;
create policy "organization_memberships_select_member_or_self"
on public.organization_memberships
for select
to authenticated
using (
  user_id = auth.uid()
  or exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_memberships.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
);

drop policy if exists "organization_memberships_manage_owner_admin" on public.organization_memberships;
create policy "organization_memberships_manage_owner_admin"
on public.organization_memberships
for all
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_memberships.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin')
  )
)
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_memberships.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin')
  )
);

drop policy if exists "organization_license_purchases_select_owner_admin" on public.organization_license_purchases;
create policy "organization_license_purchases_select_owner_admin"
on public.organization_license_purchases
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_license_purchases.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin')
  )
);

drop policy if exists "organization_provisioning_tokens_select_org_staff" on public.organization_provisioning_tokens;
create policy "organization_provisioning_tokens_select_org_staff"
on public.organization_provisioning_tokens
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_provisioning_tokens.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
);

drop policy if exists "organization_provisioning_tokens_manage_org_admin" on public.organization_provisioning_tokens;
create policy "organization_provisioning_tokens_manage_org_admin"
on public.organization_provisioning_tokens
for all
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_provisioning_tokens.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'it_manager')
  )
)
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_provisioning_tokens.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'it_manager')
  )
);

drop policy if exists "organization_learners_select_org_member" on public.organization_learners;
create policy "organization_learners_select_org_member"
on public.organization_learners
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_learners.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
  )
  or learner_user_id = auth.uid()
);

drop policy if exists "organization_learners_manage_org_staff" on public.organization_learners;
create policy "organization_learners_manage_org_staff"
on public.organization_learners
for all
to authenticated
using (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_learners.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
  or learner_user_id = auth.uid()
)
with check (
  exists (
    select 1
    from public.organization_memberships m
    where m.organization_id = organization_learners.organization_id
      and m.user_id = auth.uid()
      and m.status = 'active'
      and m.role in ('owner', 'admin', 'teacher', 'it_manager')
  )
  or learner_user_id = auth.uid()
);

drop policy if exists "gifted_memberships_select_party" on public.gifted_memberships;
create policy "gifted_memberships_select_party"
on public.gifted_memberships
for select
to authenticated
using (
  purchaser_user_id = auth.uid()
  or recipient_user_id = auth.uid()
);

drop policy if exists "gifted_memberships_insert_purchaser" on public.gifted_memberships;
create policy "gifted_memberships_insert_purchaser"
on public.gifted_memberships
for insert
to authenticated
with check (purchaser_user_id = auth.uid());

drop policy if exists "gifted_memberships_update_party" on public.gifted_memberships;
create policy "gifted_memberships_update_party"
on public.gifted_memberships
for update
to authenticated
using (
  purchaser_user_id = auth.uid()
  or recipient_user_id = auth.uid()
)
with check (
  purchaser_user_id = auth.uid()
  or recipient_user_id = auth.uid()
);


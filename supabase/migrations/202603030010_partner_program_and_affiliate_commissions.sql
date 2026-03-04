-- Partner/influencer program foundation:
-- - partner onboarding + portal access
-- - tax form and payout account compliance
-- - referral code ownership and conversion attribution
-- - commission ledger and payout batch processing

create table if not exists public.partner_reward_tiers (
  id uuid primary key default gen_random_uuid(),
  tier_code text not null unique,
  tier_name text not null,
  description text,
  commission_rate numeric(6, 5) not null default 0,
  bonus_cents integer not null default 0,
  min_qualified_conversions integer not null default 0,
  min_monthly_revenue_cents bigint not null default 0,
  payout_delay_days integer not null default 30,
  is_active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_reward_tiers_commission_rate_check
    check (commission_rate >= 0 and commission_rate <= 1),
  constraint partner_reward_tiers_bonus_cents_check
    check (bonus_cents >= 0),
  constraint partner_reward_tiers_min_conversions_check
    check (min_qualified_conversions >= 0),
  constraint partner_reward_tiers_min_revenue_check
    check (min_monthly_revenue_cents >= 0),
  constraint partner_reward_tiers_payout_delay_days_check
    check (payout_delay_days >= 0 and payout_delay_days <= 365)
);

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  legal_name text not null,
  partner_type text not null default 'influencer',
  contact_email text not null,
  contact_phone text,
  address_line1 text,
  address_line2 text,
  city text,
  state_region text,
  postal_code text,
  country_code text not null default 'US',
  reward_tier_id uuid references public.partner_reward_tiers(id) on delete set null,
  onboarding_status text not null default 'invited',
  compliance_status text not null default 'pending',
  payout_status text not null default 'blocked',
  kyc_status text not null default 'pending',
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partners_partner_type_check
    check (partner_type in ('influencer', 'affiliate', 'agency', 'school', 'creator', 'other')),
  constraint partners_country_code_check
    check (char_length(country_code) = 2),
  constraint partners_onboarding_status_check
    check (
      onboarding_status in (
        'invited',
        'profile_submitted',
        'tax_pending',
        'tax_verified',
        'payout_pending',
        'active',
        'suspended',
        'offboarded'
      )
    ),
  constraint partners_compliance_status_check
    check (compliance_status in ('pending', 'approved', 'flagged', 'rejected')),
  constraint partners_payout_status_check
    check (payout_status in ('blocked', 'review', 'eligible', 'paused')),
  constraint partners_kyc_status_check
    check (kyc_status in ('pending', 'verified', 'failed', 'rejected'))
);

create index if not exists idx_partners_tier_status
  on public.partners(reward_tier_id, onboarding_status, payout_status, created_at desc);

create table if not exists public.partner_portal_access (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'owner',
  status text not null default 'active',
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_portal_access_role_check
    check (role in ('owner', 'finance_contact', 'manager', 'viewer')),
  constraint partner_portal_access_status_check
    check (status in ('active', 'invited', 'revoked')),
  unique (partner_id, user_id)
);

create index if not exists idx_partner_portal_access_user_status
  on public.partner_portal_access(user_id, status, updated_at desc);

create table if not exists public.partner_tax_profiles (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  tax_form_type text not null default 'none',
  tax_classification text,
  tin_type text not null default 'none',
  tin_last4 text,
  us_taxpayer boolean not null default false,
  backup_withholding_required boolean not null default false,
  withholding_rate numeric(6, 5) not null default 0,
  exemption_code text,
  fatca_status text not null default 'unknown',
  form_received_at date,
  form_expiration_date date,
  status text not null default 'pending',
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_tax_profiles_tax_form_type_check
    check (tax_form_type in ('w9', 'w8_ben', 'w8_ben_e', 'w8_eci', 'w8_imy', 'none', 'other')),
  constraint partner_tax_profiles_tin_type_check
    check (tin_type in ('ssn', 'ein', 'itin', 'foreign', 'other', 'none')),
  constraint partner_tax_profiles_withholding_rate_check
    check (withholding_rate >= 0 and withholding_rate <= 1),
  constraint partner_tax_profiles_fatca_status_check
    check (fatca_status in ('unknown', 'not_applicable', 'reportable', 'documented')),
  constraint partner_tax_profiles_status_check
    check (status in ('pending', 'valid', 'expired', 'rejected')),
  unique (partner_id)
);

create table if not exists public.partner_payout_accounts (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  account_holder_name text not null,
  bank_name text not null,
  account_type text not null default 'checking',
  payout_method text not null default 'ach',
  currency text not null default 'USD',
  country_code text not null default 'US',
  routing_number_last4 text,
  account_number_last4 text,
  iban_last4 text,
  swift_bic text,
  verification_status text not null default 'pending',
  is_primary boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_payout_accounts_account_type_check
    check (account_type in ('checking', 'savings', 'custodial', 'other')),
  constraint partner_payout_accounts_payout_method_check
    check (payout_method in ('ach', 'wire', 'swift', 'sepa', 'check', 'paypal', 'other')),
  constraint partner_payout_accounts_currency_check
    check (char_length(currency) = 3),
  constraint partner_payout_accounts_country_code_check
    check (char_length(country_code) = 2),
  constraint partner_payout_accounts_verification_status_check
    check (verification_status in ('pending', 'verified', 'failed', 'rejected'))
);

create unique index if not exists idx_partner_payout_accounts_primary_per_partner
  on public.partner_payout_accounts(partner_id)
  where is_primary = true;

create table if not exists public.partner_codes (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  code text not null unique,
  stripe_promotion_code_id text,
  stripe_coupon_id text,
  status text not null default 'active',
  starts_at timestamptz,
  ends_at timestamptz,
  max_redemptions integer,
  current_redemptions integer not null default 0,
  attribution_window_days integer not null default 30,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_codes_status_check
    check (status in ('active', 'paused', 'expired', 'revoked')),
  constraint partner_codes_max_redemptions_check
    check (max_redemptions is null or max_redemptions > 0),
  constraint partner_codes_current_redemptions_check
    check (current_redemptions >= 0),
  constraint partner_codes_attribution_window_days_check
    check (attribution_window_days >= 1 and attribution_window_days <= 365)
);

create index if not exists idx_partner_codes_partner_status
  on public.partner_codes(partner_id, status, created_at desc);

create table if not exists public.partner_referrals (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  partner_code_id uuid references public.partner_codes(id) on delete set null,
  referred_user_id uuid references auth.users(id) on delete set null,
  stripe_checkout_session_id text,
  stripe_subscription_id text,
  stripe_customer_id text,
  conversion_type text not null default 'subscription',
  conversion_status text not null default 'pending',
  conversion_value_cents bigint not null default 0,
  currency text not null default 'USD',
  event_occurred_at timestamptz not null default now(),
  qualified_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_referrals_conversion_type_check
    check (conversion_type in ('subscription', 'purchase', 'trial_start', 'trial_convert', 'manual_credit', 'other')),
  constraint partner_referrals_conversion_status_check
    check (conversion_status in ('pending', 'qualified', 'disqualified', 'reversed')),
  constraint partner_referrals_conversion_value_check
    check (conversion_value_cents >= 0),
  constraint partner_referrals_currency_check
    check (char_length(currency) = 3),
  unique (stripe_checkout_session_id)
);

create index if not exists idx_partner_referrals_partner_status_created
  on public.partner_referrals(partner_id, conversion_status, created_at desc);

create table if not exists public.partner_commission_events (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  referral_id uuid references public.partner_referrals(id) on delete set null,
  partner_code_id uuid references public.partner_codes(id) on delete set null,
  event_type text not null default 'conversion_commission',
  status text not null default 'pending',
  source_event_ref text,
  gross_revenue_cents bigint not null default 0,
  commission_rate numeric(6, 5) not null default 0,
  commission_amount_cents bigint not null default 0,
  bonus_amount_cents bigint not null default 0,
  withholding_tax_cents bigint not null default 0,
  net_amount_cents bigint not null default 0,
  currency text not null default 'USD',
  earned_at timestamptz not null default now(),
  available_at timestamptz,
  approved_at timestamptz,
  paid_at timestamptz,
  payout_item_id uuid,
  reversal_of_event_id uuid references public.partner_commission_events(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_commission_events_type_check
    check (event_type in ('conversion_commission', 'manual_adjustment', 'bonus', 'reversal')),
  constraint partner_commission_events_status_check
    check (status in ('pending', 'approved', 'held', 'reversed', 'paid', 'canceled')),
  constraint partner_commission_events_gross_revenue_check
    check (gross_revenue_cents >= 0),
  constraint partner_commission_events_commission_rate_check
    check (commission_rate >= 0 and commission_rate <= 1),
  constraint partner_commission_events_commission_amount_check
    check (commission_amount_cents >= 0),
  constraint partner_commission_events_bonus_amount_check
    check (bonus_amount_cents >= 0),
  constraint partner_commission_events_withholding_tax_check
    check (withholding_tax_cents >= 0),
  constraint partner_commission_events_net_amount_check
    check (net_amount_cents >= 0),
  constraint partner_commission_events_currency_check
    check (char_length(currency) = 3)
);

create index if not exists idx_partner_commission_events_partner_status_earned
  on public.partner_commission_events(partner_id, status, earned_at desc);

create index if not exists idx_partner_commission_events_available_status
  on public.partner_commission_events(available_at, status);

create table if not exists public.partner_payout_batches (
  id uuid primary key default gen_random_uuid(),
  batch_name text not null,
  period_start date not null,
  period_end date not null,
  status text not null default 'draft',
  scheduled_for timestamptz,
  processed_at timestamptz,
  currency text not null default 'USD',
  total_amount_cents bigint not null default 0,
  item_count integer not null default 0,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_payout_batches_period_check
    check (period_end >= period_start),
  constraint partner_payout_batches_status_check
    check (status in ('draft', 'scheduled', 'processing', 'paid', 'failed', 'canceled')),
  constraint partner_payout_batches_currency_check
    check (char_length(currency) = 3),
  constraint partner_payout_batches_total_amount_check
    check (total_amount_cents >= 0),
  constraint partner_payout_batches_item_count_check
    check (item_count >= 0)
);

create index if not exists idx_partner_payout_batches_status_period
  on public.partner_payout_batches(status, period_end desc);

create table if not exists public.partner_payout_items (
  id uuid primary key default gen_random_uuid(),
  payout_batch_id uuid not null references public.partner_payout_batches(id) on delete cascade,
  partner_id uuid not null references public.partners(id) on delete restrict,
  partner_payout_account_id uuid references public.partner_payout_accounts(id) on delete set null,
  tax_profile_status text not null default 'pending',
  compliance_snapshot jsonb not null default '{}'::jsonb,
  gross_amount_cents bigint not null default 0,
  withholding_tax_cents bigint not null default 0,
  net_amount_cents bigint not null default 0,
  item_status text not null default 'queued',
  payment_reference text,
  paid_at timestamptz,
  error_message text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partner_payout_items_tax_profile_status_check
    check (tax_profile_status in ('pending', 'valid', 'expired', 'rejected', 'missing')),
  constraint partner_payout_items_gross_amount_check
    check (gross_amount_cents >= 0),
  constraint partner_payout_items_withholding_tax_check
    check (withholding_tax_cents >= 0),
  constraint partner_payout_items_net_amount_check
    check (net_amount_cents >= 0),
  constraint partner_payout_items_status_check
    check (item_status in ('queued', 'processing', 'paid', 'failed', 'blocked', 'canceled')),
  unique (payout_batch_id, partner_id)
);

create index if not exists idx_partner_payout_items_partner_status
  on public.partner_payout_items(partner_id, item_status, created_at desc);

alter table public.partner_commission_events
  drop constraint if exists partner_commission_events_payout_item_id_fkey;
alter table public.partner_commission_events
  add constraint partner_commission_events_payout_item_id_fkey
  foreign key (payout_item_id) references public.partner_payout_items(id) on delete set null;

drop trigger if exists partner_reward_tiers_set_updated_at on public.partner_reward_tiers;
create trigger partner_reward_tiers_set_updated_at
before update on public.partner_reward_tiers
for each row execute function public.set_updated_at();

drop trigger if exists partners_set_updated_at on public.partners;
create trigger partners_set_updated_at
before update on public.partners
for each row execute function public.set_updated_at();

drop trigger if exists partner_portal_access_set_updated_at on public.partner_portal_access;
create trigger partner_portal_access_set_updated_at
before update on public.partner_portal_access
for each row execute function public.set_updated_at();

drop trigger if exists partner_tax_profiles_set_updated_at on public.partner_tax_profiles;
create trigger partner_tax_profiles_set_updated_at
before update on public.partner_tax_profiles
for each row execute function public.set_updated_at();

drop trigger if exists partner_payout_accounts_set_updated_at on public.partner_payout_accounts;
create trigger partner_payout_accounts_set_updated_at
before update on public.partner_payout_accounts
for each row execute function public.set_updated_at();

drop trigger if exists partner_codes_set_updated_at on public.partner_codes;
create trigger partner_codes_set_updated_at
before update on public.partner_codes
for each row execute function public.set_updated_at();

drop trigger if exists partner_referrals_set_updated_at on public.partner_referrals;
create trigger partner_referrals_set_updated_at
before update on public.partner_referrals
for each row execute function public.set_updated_at();

drop trigger if exists partner_commission_events_set_updated_at on public.partner_commission_events;
create trigger partner_commission_events_set_updated_at
before update on public.partner_commission_events
for each row execute function public.set_updated_at();

drop trigger if exists partner_payout_batches_set_updated_at on public.partner_payout_batches;
create trigger partner_payout_batches_set_updated_at
before update on public.partner_payout_batches
for each row execute function public.set_updated_at();

drop trigger if exists partner_payout_items_set_updated_at on public.partner_payout_items;
create trigger partner_payout_items_set_updated_at
before update on public.partner_payout_items
for each row execute function public.set_updated_at();

insert into public.partner_reward_tiers (
  tier_code,
  tier_name,
  description,
  commission_rate,
  bonus_cents,
  min_qualified_conversions,
  min_monthly_revenue_cents,
  payout_delay_days,
  is_active,
  metadata
)
values
  (
    'BRONZE',
    'Bronze',
    'Entry tier for new partners.',
    0.10,
    0,
    0,
    0,
    30,
    true,
    '{"recommendedFor":"new_partners"}'::jsonb
  ),
  (
    'SILVER',
    'Silver',
    'Improved commissions for growing partners.',
    0.15,
    5000,
    25,
    100000,
    21,
    true,
    '{"recommendedFor":"growing_partners"}'::jsonb
  ),
  (
    'GOLD',
    'Gold',
    'Higher commission share and reduced payout delay.',
    0.20,
    15000,
    75,
    300000,
    14,
    true,
    '{"recommendedFor":"high_performance"}'::jsonb
  ),
  (
    'PLATINUM',
    'Platinum',
    'Top-tier strategic partners.',
    0.25,
    30000,
    150,
    750000,
    7,
    true,
    '{"recommendedFor":"strategic_partners"}'::jsonb
  )
on conflict (tier_code) do nothing;

alter table public.partner_reward_tiers enable row level security;
alter table public.partners enable row level security;
alter table public.partner_portal_access enable row level security;
alter table public.partner_tax_profiles enable row level security;
alter table public.partner_payout_accounts enable row level security;
alter table public.partner_codes enable row level security;
alter table public.partner_referrals enable row level security;
alter table public.partner_commission_events enable row level security;
alter table public.partner_payout_batches enable row level security;
alter table public.partner_payout_items enable row level security;

drop policy if exists "partner_reward_tiers_admin_all" on public.partner_reward_tiers;
create policy "partner_reward_tiers_admin_all"
on public.partner_reward_tiers
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partners_admin_all" on public.partners;
create policy "partners_admin_all"
on public.partners
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partners_select_portal_member" on public.partners;
create policy "partners_select_portal_member"
on public.partners
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partners.id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_portal_access_admin_all" on public.partner_portal_access;
create policy "partner_portal_access_admin_all"
on public.partner_portal_access
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_portal_access_select_self" on public.partner_portal_access;
create policy "partner_portal_access_select_self"
on public.partner_portal_access
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "partner_tax_profiles_admin_all" on public.partner_tax_profiles;
create policy "partner_tax_profiles_admin_all"
on public.partner_tax_profiles
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_tax_profiles_select_portal_member" on public.partner_tax_profiles;
create policy "partner_tax_profiles_select_portal_member"
on public.partner_tax_profiles
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_tax_profiles.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_tax_profiles_update_owner" on public.partner_tax_profiles;
create policy "partner_tax_profiles_update_owner"
on public.partner_tax_profiles
for update
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_tax_profiles.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'finance_contact')
  )
)
with check (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_tax_profiles.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'finance_contact')
  )
);

drop policy if exists "partner_tax_profiles_insert_owner" on public.partner_tax_profiles;
create policy "partner_tax_profiles_insert_owner"
on public.partner_tax_profiles
for insert
to authenticated
with check (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_tax_profiles.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'finance_contact')
  )
);

drop policy if exists "partner_payout_accounts_admin_all" on public.partner_payout_accounts;
create policy "partner_payout_accounts_admin_all"
on public.partner_payout_accounts
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_payout_accounts_select_portal_member" on public.partner_payout_accounts;
create policy "partner_payout_accounts_select_portal_member"
on public.partner_payout_accounts
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_payout_accounts.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_payout_accounts_manage_owner" on public.partner_payout_accounts;
create policy "partner_payout_accounts_manage_owner"
on public.partner_payout_accounts
for all
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_payout_accounts.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'finance_contact')
  )
)
with check (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_payout_accounts.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
      and ppa.role in ('owner', 'finance_contact')
  )
);

drop policy if exists "partner_codes_admin_all" on public.partner_codes;
create policy "partner_codes_admin_all"
on public.partner_codes
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_codes_select_portal_member" on public.partner_codes;
create policy "partner_codes_select_portal_member"
on public.partner_codes
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_codes.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_referrals_admin_all" on public.partner_referrals;
create policy "partner_referrals_admin_all"
on public.partner_referrals
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_referrals_select_portal_member" on public.partner_referrals;
create policy "partner_referrals_select_portal_member"
on public.partner_referrals
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_referrals.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_commission_events_admin_all" on public.partner_commission_events;
create policy "partner_commission_events_admin_all"
on public.partner_commission_events
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_commission_events_select_portal_member" on public.partner_commission_events;
create policy "partner_commission_events_select_portal_member"
on public.partner_commission_events
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_commission_events.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

drop policy if exists "partner_payout_batches_admin_all" on public.partner_payout_batches;
create policy "partner_payout_batches_admin_all"
on public.partner_payout_batches
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_payout_items_admin_all" on public.partner_payout_items;
create policy "partner_payout_items_admin_all"
on public.partner_payout_items
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "partner_payout_items_select_portal_member" on public.partner_payout_items;
create policy "partner_payout_items_select_portal_member"
on public.partner_payout_items
for select
to authenticated
using (
  exists (
    select 1
    from public.partner_portal_access ppa
    where ppa.partner_id = partner_payout_items.partner_id
      and ppa.user_id = auth.uid()
      and ppa.status = 'active'
  )
);

grant select, insert, update on public.partners to authenticated;
grant select, insert, update on public.partner_portal_access to authenticated;
grant select, insert, update on public.partner_tax_profiles to authenticated;
grant select, insert, update on public.partner_payout_accounts to authenticated;
grant select on public.partner_reward_tiers to authenticated;
grant select on public.partner_codes to authenticated;
grant select on public.partner_referrals to authenticated;
grant select on public.partner_commission_events to authenticated;
grant select on public.partner_payout_batches to authenticated;
grant select on public.partner_payout_items to authenticated;

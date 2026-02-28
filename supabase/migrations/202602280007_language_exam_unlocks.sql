-- Language exam unlock purchases and PPP ladder config (phase 2)

create table if not exists public.pricing_ladders (
  geo_tier text primary key,
  beginner_price_cents integer not null,
  intermediate_price_cents integer not null,
  advanced_price_cents integer not null,
  currency text not null default 'USD',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint pricing_ladders_geo_tier_check
    check (geo_tier in ('tier_1', 'tier_2', 'tier_3', 'tier_4', 'tier_5')),
  constraint pricing_ladders_prices_positive_check
    check (
      beginner_price_cents > 0
      and intermediate_price_cents > 0
      and advanced_price_cents > 0
    ),
  constraint pricing_ladders_currency_check
    check (char_length(currency) = 3)
);

drop trigger if exists pricing_ladders_set_updated_at on public.pricing_ladders;
create trigger pricing_ladders_set_updated_at
before update on public.pricing_ladders
for each row execute function public.set_updated_at();

create table if not exists public.exam_unlock_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  student_profile_id uuid references public.student_profiles(id) on delete set null,
  learner_id uuid not null,
  learner_kind text not null default 'user',
  level text not null,
  geo_tier text not null references public.pricing_ladders(geo_tier),
  price_paid_cents integer not null,
  currency text not null default 'USD',
  provider text not null default 'stripe',
  stripe_payment_intent_id text not null,
  additional_attempts_granted integer not null default 100,
  expires_at timestamptz not null default (now() + interval '90 days'),
  purchased_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint exam_unlock_purchases_level_check
    check (level in ('beginner', 'intermediate', 'advanced')),
  constraint exam_unlock_purchases_learner_kind_check
    check (learner_kind in ('user', 'student_profile')),
  constraint exam_unlock_purchases_price_positive_check
    check (price_paid_cents > 0),
  constraint exam_unlock_purchases_additional_attempts_positive_check
    check (additional_attempts_granted > 0),
  constraint exam_unlock_purchases_currency_check
    check (char_length(currency) = 3),
  constraint exam_unlock_purchases_learner_consistency_check
    check (
      (
        learner_kind = 'user'
        and student_profile_id is null
        and learner_id = user_id
      )
      or (
        learner_kind = 'student_profile'
        and student_profile_id is not null
        and learner_id = student_profile_id
      )
    ),
  constraint exam_unlock_purchases_unique_payment_intent
    unique (stripe_payment_intent_id)
);

drop trigger if exists exam_unlock_purchases_set_updated_at on public.exam_unlock_purchases;
create trigger exam_unlock_purchases_set_updated_at
before update on public.exam_unlock_purchases
for each row execute function public.set_updated_at();

create index if not exists idx_exam_unlock_purchases_learner_purchased
  on public.exam_unlock_purchases(learner_id, purchased_at desc);

create index if not exists idx_exam_unlock_purchases_level_expiry
  on public.exam_unlock_purchases(level, expires_at desc);

create index if not exists idx_exam_unlock_purchases_geo_tier
  on public.exam_unlock_purchases(geo_tier, purchased_at desc);

alter table public.language_usage_tracking
  add column if not exists unlock_attempts_granted integer default 0,
  add column if not exists unlock_attempts_used integer default 0;

update public.language_usage_tracking
set unlock_attempts_granted = coalesce(unlock_attempts_granted, 0),
    unlock_attempts_used = coalesce(unlock_attempts_used, 0)
where unlock_attempts_granted is null
   or unlock_attempts_used is null;

alter table public.language_usage_tracking
  alter column unlock_attempts_granted set default 0,
  alter column unlock_attempts_granted set not null,
  alter column unlock_attempts_used set default 0,
  alter column unlock_attempts_used set not null;

alter table public.language_usage_tracking
  drop constraint if exists language_usage_tracking_unlock_attempts_check;
alter table public.language_usage_tracking
  add constraint language_usage_tracking_unlock_attempts_check
  check (
    unlock_attempts_granted >= 0
    and unlock_attempts_used >= 0
    and unlock_attempts_used <= unlock_attempts_granted
  );

insert into public.pricing_ladders (
  geo_tier,
  beginner_price_cents,
  intermediate_price_cents,
  advanced_price_cents,
  currency
)
values
  ('tier_1', 999, 1999, 2999, 'USD'),
  ('tier_2', 799, 1599, 2399, 'USD'),
  ('tier_3', 499, 999, 1499, 'USD'),
  ('tier_4', 299, 599, 899, 'USD'),
  ('tier_5', 199, 399, 599, 'USD')
on conflict (geo_tier) do update
set
  beginner_price_cents = excluded.beginner_price_cents,
  intermediate_price_cents = excluded.intermediate_price_cents,
  advanced_price_cents = excluded.advanced_price_cents,
  currency = excluded.currency,
  updated_at = now();

alter table public.pricing_ladders enable row level security;
alter table public.exam_unlock_purchases enable row level security;

drop policy if exists "pricing_ladders_select_authenticated" on public.pricing_ladders;
create policy "pricing_ladders_select_authenticated"
on public.pricing_ladders
for select
to authenticated
using (true);

drop policy if exists "pricing_ladders_admin_write" on public.pricing_ladders;
create policy "pricing_ladders_admin_write"
on public.pricing_ladders
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

drop policy if exists "exam_unlock_purchases_select_own_profile_or_admin" on public.exam_unlock_purchases;
create policy "exam_unlock_purchases_select_own_profile_or_admin"
on public.exam_unlock_purchases
for select
to authenticated
using (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = exam_unlock_purchases.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "exam_unlock_purchases_insert_own_profile_or_admin" on public.exam_unlock_purchases;
create policy "exam_unlock_purchases_insert_own_profile_or_admin"
on public.exam_unlock_purchases
for insert
to authenticated
with check (
  auth.uid() = user_id
  or (
    student_profile_id is not null
    and exists (
      select 1
      from public.student_profiles sp
      where sp.id = exam_unlock_purchases.student_profile_id
        and sp.account_id = auth.uid()
    )
  )
  or exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and up.is_admin = true
  )
);

drop policy if exists "exam_unlock_purchases_update_admin_only" on public.exam_unlock_purchases;
create policy "exam_unlock_purchases_update_admin_only"
on public.exam_unlock_purchases
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

drop policy if exists "exam_unlock_purchases_delete_admin_only" on public.exam_unlock_purchases;
create policy "exam_unlock_purchases_delete_admin_only"
on public.exam_unlock_purchases
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

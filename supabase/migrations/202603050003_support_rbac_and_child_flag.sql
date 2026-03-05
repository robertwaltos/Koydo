-- Support RBAC: Add is_support flag to user_profiles
-- This allows support staff to be restricted to ticket/alert access only,
-- without granting full admin privileges.

alter table public.user_profiles
  add column if not exists is_support boolean not null default false;

-- Add computed is_child flag based on birth_date
-- A user is a child if their birth_date indicates they are under 13.
alter table public.user_profiles
  add column if not exists is_child boolean not null default false;

-- Function to compute is_child from birth_date
create or replace function public.compute_is_child()
returns trigger
language plpgsql
security definer
as $$
begin
  if new.birth_date is not null then
    new.is_child := (extract(year from age(current_date, new.birth_date)) < 13);
  else
    new.is_child := false;
  end if;
  return new;
end;
$$;

-- Trigger to auto-compute is_child on insert/update
drop trigger if exists trg_compute_is_child on public.user_profiles;
create trigger trg_compute_is_child
  before insert or update of birth_date
  on public.user_profiles
  for each row
  execute function public.compute_is_child();

-- Backfill is_child for existing rows with birth_date set
update public.user_profiles
set is_child = (extract(year from age(current_date, birth_date)) < 13)
where birth_date is not null;

-- Support provisions: allow provisioning support staff via admin_provisions
-- Extend access_level to include 'support' as a valid value
comment on column public.admin_provisions.access_level is
  'Access level: full_access, read_only, or support';

-- Index for efficient support staff lookups
create index if not exists idx_user_profiles_is_support
  on public.user_profiles (user_id)
  where is_support = true;

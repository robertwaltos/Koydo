-- Add teacher, school, and partner role flags to user_profiles.
-- These flags gate role-specific console entries in the navigation dropdown.

alter table public.user_profiles
  add column if not exists is_teacher boolean not null default false,
  add column if not exists is_school  boolean not null default false,
  add column if not exists is_partner boolean not null default false;

-- Index for permission checks
create index if not exists user_profiles_is_teacher_idx on public.user_profiles (user_id) where is_teacher = true;
create index if not exists user_profiles_is_school_idx  on public.user_profiles (user_id) where is_school  = true;
create index if not exists user_profiles_is_partner_idx on public.user_profiles (user_id) where is_partner = true;

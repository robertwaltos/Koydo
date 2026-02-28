alter table public.user_profiles drop constraint if exists user_profiles_theme_mode_check;
alter table public.user_profiles add constraint user_profiles_theme_mode_check
  check (theme_mode in ('system', 'light', 'dark'));

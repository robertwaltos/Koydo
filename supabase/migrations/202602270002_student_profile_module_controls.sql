alter table public.student_profiles
  add column if not exists featured_module_ids text[];

alter table public.student_profiles
  add column if not exists module_assignment_mode text not null default 'guided';

alter table public.student_profiles drop constraint if exists student_profiles_module_assignment_mode_check;
alter table public.student_profiles add constraint student_profiles_module_assignment_mode_check
  check (module_assignment_mode in ('guided', 'random'));

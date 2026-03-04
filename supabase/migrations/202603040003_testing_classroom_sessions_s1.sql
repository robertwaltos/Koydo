-- Testing classroom mode S1: session controls foundation

create table if not exists public.classroom_sessions (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classroom_entities(id) on delete cascade,
  teacher_user_id uuid not null references auth.users(id) on delete cascade,
  delivery_mode text not null default 'student_paced',
  session_status text not null default 'draft',
  active_assignment_id uuid references public.class_assignments(id) on delete set null,
  lesson_focus text,
  announcement text,
  session_settings jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  ended_at timestamptz,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (class_id),
  constraint classroom_sessions_delivery_mode_check
    check (delivery_mode in ('live', 'student_paced', 'front_of_class')),
  constraint classroom_sessions_status_check
    check (session_status in ('draft', 'scheduled', 'live', 'paused', 'ended')),
  constraint classroom_sessions_focus_length_check
    check (lesson_focus is null or char_length(lesson_focus) <= 160),
  constraint classroom_sessions_announcement_length_check
    check (announcement is null or char_length(announcement) <= 500)
);

drop trigger if exists classroom_sessions_set_updated_at on public.classroom_sessions;
create trigger classroom_sessions_set_updated_at
before update on public.classroom_sessions
for each row execute function public.set_updated_at();

create index if not exists idx_classroom_sessions_teacher
  on public.classroom_sessions(teacher_user_id, updated_at desc);

create index if not exists idx_classroom_sessions_status
  on public.classroom_sessions(session_status, updated_at desc);

alter table public.classroom_sessions enable row level security;

drop policy if exists "classroom_sessions_teacher_manage" on public.classroom_sessions;
create policy "classroom_sessions_teacher_manage"
on public.classroom_sessions
for all
to authenticated
using (teacher_user_id = auth.uid())
with check (teacher_user_id = auth.uid());

drop policy if exists "classroom_sessions_learner_select_assigned" on public.classroom_sessions;
create policy "classroom_sessions_learner_select_assigned"
on public.classroom_sessions
for select
to authenticated
using (
  exists (
    select 1
    from public.class_enrollments e
    where e.class_id = classroom_sessions.class_id
      and e.learner_user_id = auth.uid()
      and e.parent_consent = true
  )
);

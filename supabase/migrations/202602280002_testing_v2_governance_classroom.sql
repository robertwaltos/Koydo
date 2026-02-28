-- Testing Vertical v2: governance/legal provenance + classroom mode

-- =========================
-- 1) Question governance fields
-- =========================

alter table public.testing_question_bank
  add column if not exists source_type text not null default 'official_outline';

alter table public.testing_question_bank
  add column if not exists source_name text;

alter table public.testing_question_bank
  add column if not exists source_url text;

alter table public.testing_question_bank
  add column if not exists license_type text;

alter table public.testing_question_bank
  add column if not exists commercial_use_allowed boolean not null default false;

alter table public.testing_question_bank
  add column if not exists derivation_method text not null default 'original_from_blueprint';

alter table public.testing_question_bank
  add column if not exists review_status text not null default 'draft';

alter table public.testing_question_bank
  add column if not exists reviewed_by uuid references auth.users(id) on delete set null;

alter table public.testing_question_bank
  add column if not exists reviewed_at timestamptz;

alter table public.testing_question_bank
  add column if not exists objective_code text;

alter table public.testing_question_bank
  add column if not exists exam_code text;

alter table public.testing_question_bank
  drop constraint if exists testing_question_bank_source_type_check;
alter table public.testing_question_bank
  add constraint testing_question_bank_source_type_check
  check (source_type in ('official_outline', 'oer', 'partner', 'internal_authoring'));

alter table public.testing_question_bank
  drop constraint if exists testing_question_bank_review_status_check;
alter table public.testing_question_bank
  add constraint testing_question_bank_review_status_check
  check (review_status in ('draft', 'legal_review', 'approved', 'blocked'));

alter table public.testing_question_bank
  drop constraint if exists testing_question_bank_approved_requires_commercial_use_check;
alter table public.testing_question_bank
  add constraint testing_question_bank_approved_requires_commercial_use_check
  check (
    review_status <> 'approved'
    or (
      commercial_use_allowed = true
      and length(coalesce(derivation_method, '')) > 0
      and length(coalesce(source_type, '')) > 0
    )
  );

create index if not exists idx_testing_question_bank_review_status
  on public.testing_question_bank(review_status);

create index if not exists idx_testing_question_bank_objective_code
  on public.testing_question_bank(objective_code);

create index if not exists idx_testing_question_bank_exam_code
  on public.testing_question_bank(exam_code);

create or replace function public.enforce_testing_question_approval()
returns trigger
language plpgsql
as $$
begin
  if new.review_status = 'approved' then
    if coalesce(new.commercial_use_allowed, false) = false then
      raise exception 'Approved testing questions must allow commercial use.';
    end if;
    if length(coalesce(new.derivation_method, '')) = 0 then
      raise exception 'Approved testing questions require derivation_method.';
    end if;
    if length(coalesce(new.source_type, '')) = 0 then
      raise exception 'Approved testing questions require source_type.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists testing_question_bank_enforce_approval on public.testing_question_bank;
create trigger testing_question_bank_enforce_approval
before insert or update on public.testing_question_bank
for each row execute function public.enforce_testing_question_approval();


-- =========================
-- 2) Entitlement + purchase state hardening
-- =========================

alter table public.user_exam_entitlements
  add column if not exists state text not null default 'completed';

alter table public.user_exam_entitlements
  drop constraint if exists user_exam_entitlements_state_check;
alter table public.user_exam_entitlements
  add constraint user_exam_entitlements_state_check
  check (state in ('pending', 'completed', 'failed', 'refunded', 'revoked'));

create index if not exists idx_user_exam_entitlements_user_state
  on public.user_exam_entitlements(user_id, state, exam_id);

alter table public.testing_purchases
  add column if not exists idempotency_key text;

create unique index if not exists idx_testing_purchases_idempotency
  on public.testing_purchases(idempotency_key)
  where idempotency_key is not null;


-- =========================
-- 3) Classroom mode tables
-- =========================

create table if not exists public.classroom_entities (
  id uuid primary key default gen_random_uuid(),
  teacher_user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  max_size integer not null default 35,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint classroom_entities_max_size_check
    check (max_size between 1 and 35)
);

create table if not exists public.class_enrollments (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classroom_entities(id) on delete cascade,
  learner_user_id uuid not null references auth.users(id) on delete cascade,
  learner_profile_id uuid references public.student_profiles(id) on delete set null,
  parent_consent boolean not null default false,
  enrolled_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (class_id, learner_user_id)
);

create table if not exists public.class_assignments (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classroom_entities(id) on delete cascade,
  exam_id uuid references public.testing_exams(id) on delete set null,
  module_id text,
  assigned_by uuid not null references auth.users(id) on delete cascade,
  assigned_at timestamptz not null default now(),
  due_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint class_assignments_target_check
    check (exam_id is not null or module_id is not null)
);

drop trigger if exists classroom_entities_set_updated_at on public.classroom_entities;
create trigger classroom_entities_set_updated_at
before update on public.classroom_entities
for each row execute function public.set_updated_at();

drop trigger if exists class_enrollments_set_updated_at on public.class_enrollments;
create trigger class_enrollments_set_updated_at
before update on public.class_enrollments
for each row execute function public.set_updated_at();

drop trigger if exists class_assignments_set_updated_at on public.class_assignments;
create trigger class_assignments_set_updated_at
before update on public.class_assignments
for each row execute function public.set_updated_at();

create index if not exists idx_classroom_entities_teacher
  on public.classroom_entities(teacher_user_id, created_at desc);

create index if not exists idx_class_enrollments_class_learner
  on public.class_enrollments(class_id, learner_user_id);

create index if not exists idx_class_enrollments_learner_consent
  on public.class_enrollments(learner_user_id, parent_consent);

create index if not exists idx_class_assignments_class_exam
  on public.class_assignments(class_id, exam_id, assigned_at desc);

alter table public.classroom_entities enable row level security;
alter table public.class_enrollments enable row level security;
alter table public.class_assignments enable row level security;

drop policy if exists "classroom_entities_teacher_manage" on public.classroom_entities;
create policy "classroom_entities_teacher_manage"
on public.classroom_entities
for all
to authenticated
using (teacher_user_id = auth.uid())
with check (teacher_user_id = auth.uid());

drop policy if exists "class_enrollments_teacher_manage" on public.class_enrollments;
create policy "class_enrollments_teacher_manage"
on public.class_enrollments
for all
to authenticated
using (
  exists (
    select 1
    from public.classroom_entities ce
    where ce.id = class_id
      and ce.teacher_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.classroom_entities ce
    where ce.id = class_id
      and ce.teacher_user_id = auth.uid()
  )
);

drop policy if exists "class_enrollments_learner_select_own" on public.class_enrollments;
create policy "class_enrollments_learner_select_own"
on public.class_enrollments
for select
to authenticated
using (learner_user_id = auth.uid());

drop policy if exists "class_assignments_teacher_manage" on public.class_assignments;
create policy "class_assignments_teacher_manage"
on public.class_assignments
for all
to authenticated
using (
  exists (
    select 1
    from public.classroom_entities ce
    where ce.id = class_id
      and ce.teacher_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.classroom_entities ce
    where ce.id = class_id
      and ce.teacher_user_id = auth.uid()
  )
);

drop policy if exists "class_assignments_learner_select_assigned" on public.class_assignments;
create policy "class_assignments_learner_select_assigned"
on public.class_assignments
for select
to authenticated
using (
  exists (
    select 1
    from public.class_enrollments e
    where e.class_id = class_id
      and e.learner_user_id = auth.uid()
      and e.parent_consent = true
  )
);


-- =========================
-- 4) Testing policies: teacher visibility (consent-gated)
-- =========================

drop policy if exists "testing_exam_attempts_select_own_or_admin" on public.testing_exam_attempts;
create policy "testing_exam_attempts_select_own_or_admin"
on public.testing_exam_attempts
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
  or exists (
    select 1
    from public.class_enrollments e
    join public.classroom_entities ce on ce.id = e.class_id
    where e.learner_user_id = testing_exam_attempts.user_id
      and e.parent_consent = true
      and ce.teacher_user_id = auth.uid()
  )
);

drop policy if exists "testing_attempt_answers_select_own_or_admin" on public.testing_attempt_answers;
create policy "testing_attempt_answers_select_own_or_admin"
on public.testing_attempt_answers
for select
to authenticated
using (
  exists (
    select 1
    from public.testing_exam_attempts tea
    where tea.id = attempt_id
      and (
        tea.user_id = auth.uid()
        or exists (
          select 1 from public.user_profiles up
          where up.user_id = auth.uid() and up.is_admin = true
        )
        or exists (
          select 1
          from public.class_enrollments e
          join public.classroom_entities ce on ce.id = e.class_id
          where e.learner_user_id = tea.user_id
            and e.parent_consent = true
            and ce.teacher_user_id = auth.uid()
        )
      )
  )
);


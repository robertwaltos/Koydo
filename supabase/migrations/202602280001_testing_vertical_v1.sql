create table if not exists public.testing_exams (
  id uuid primary key default gen_random_uuid(),
  exam_code text not null,
  name text not null,
  name_pl text,
  blueprint jsonb not null default '{}'::jsonb,
  question_count integer not null default 0,
  timing_minutes integer not null default 60,
  passing_score numeric(6, 2),
  version integer not null default 1,
  language text not null default 'en',
  is_active boolean not null default true,
  cover_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint testing_exams_language_check check (language in ('en', 'pl')),
  constraint testing_exams_unique_code_version_language unique (exam_code, version, language)
);

create table if not exists public.testing_question_bank (
  id uuid primary key default gen_random_uuid(),
  exam_id uuid not null references public.testing_exams(id) on delete cascade,
  domain text not null,
  difficulty numeric(5, 4) not null default 0.5000,
  question_text text not null,
  question_text_pl text,
  options jsonb not null default '[]'::jsonb,
  options_pl jsonb,
  correct_answer_hash text not null,
  explanation text,
  explanation_pl text,
  source_blueprint text,
  provenance text not null default 'de_novo_generated',
  tags text[] not null default '{}',
  version integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint testing_question_bank_difficulty_check check (difficulty > 0 and difficulty < 1)
);

create table if not exists public.user_exam_entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_id uuid not null references public.testing_exams(id) on delete cascade,
  entitlement_type text not null default 'sample',
  unlocked_at timestamptz not null default now(),
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_exam_entitlements_type_check check (entitlement_type in ('sample', 'full')),
  unique (user_id, exam_id)
);

create table if not exists public.testing_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_id uuid not null references public.testing_exams(id) on delete cascade,
  amount numeric(10, 2) not null default 1.95,
  currency text not null default 'USD',
  status text not null default 'pending',
  provider text not null default 'stripe',
  provider_transaction_id text,
  metadata jsonb not null default '{}'::jsonb,
  purchased_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint testing_purchases_status_check check (status in ('pending', 'completed', 'failed', 'refunded', 'revoked'))
);

create unique index if not exists idx_testing_purchases_provider_txn
  on public.testing_purchases(provider_transaction_id)
  where provider_transaction_id is not null;

create table if not exists public.testing_exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_id uuid not null references public.testing_exams(id) on delete cascade,
  attempt_type text not null default 'sample',
  status text not null default 'in_progress',
  question_ids uuid[] not null default '{}',
  score numeric(6, 2),
  domain_breakdown jsonb not null default '{}'::jsonb,
  weakness_diagnosis jsonb not null default '{}'::jsonb,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint testing_exam_attempts_type_check check (attempt_type in ('sample', 'full')),
  constraint testing_exam_attempts_status_check check (status in ('in_progress', 'completed', 'abandoned'))
);

create table if not exists public.testing_attempt_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.testing_exam_attempts(id) on delete cascade,
  question_id uuid not null references public.testing_question_bank(id) on delete cascade,
  selected_answer text,
  is_correct boolean,
  answered_at timestamptz not null default now(),
  unique (attempt_id, question_id)
);

drop trigger if exists testing_exams_set_updated_at on public.testing_exams;
create trigger testing_exams_set_updated_at
before update on public.testing_exams
for each row execute function public.set_updated_at();

drop trigger if exists testing_question_bank_set_updated_at on public.testing_question_bank;
create trigger testing_question_bank_set_updated_at
before update on public.testing_question_bank
for each row execute function public.set_updated_at();

drop trigger if exists user_exam_entitlements_set_updated_at on public.user_exam_entitlements;
create trigger user_exam_entitlements_set_updated_at
before update on public.user_exam_entitlements
for each row execute function public.set_updated_at();

drop trigger if exists testing_purchases_set_updated_at on public.testing_purchases;
create trigger testing_purchases_set_updated_at
before update on public.testing_purchases
for each row execute function public.set_updated_at();

drop trigger if exists testing_exam_attempts_set_updated_at on public.testing_exam_attempts;
create trigger testing_exam_attempts_set_updated_at
before update on public.testing_exam_attempts
for each row execute function public.set_updated_at();

alter table public.testing_exams enable row level security;
alter table public.testing_question_bank enable row level security;
alter table public.user_exam_entitlements enable row level security;
alter table public.testing_purchases enable row level security;
alter table public.testing_exam_attempts enable row level security;
alter table public.testing_attempt_answers enable row level security;

drop policy if exists "testing_exams_select_authenticated" on public.testing_exams;
create policy "testing_exams_select_authenticated"
on public.testing_exams
for select
to authenticated
using (is_active = true);

drop policy if exists "testing_exams_admin_write" on public.testing_exams;
create policy "testing_exams_admin_write"
on public.testing_exams
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "testing_question_bank_admin_select" on public.testing_question_bank;
create policy "testing_question_bank_admin_select"
on public.testing_question_bank
for select
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "testing_question_bank_admin_write" on public.testing_question_bank;
create policy "testing_question_bank_admin_write"
on public.testing_question_bank
for all
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "user_exam_entitlements_select_own_or_admin" on public.user_exam_entitlements;
create policy "user_exam_entitlements_select_own_or_admin"
on public.user_exam_entitlements
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "user_exam_entitlements_insert_own_or_admin" on public.user_exam_entitlements;
create policy "user_exam_entitlements_insert_own_or_admin"
on public.user_exam_entitlements
for insert
to authenticated
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "user_exam_entitlements_update_own_or_admin" on public.user_exam_entitlements;
create policy "user_exam_entitlements_update_own_or_admin"
on public.user_exam_entitlements
for update
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "testing_purchases_select_own_or_admin" on public.testing_purchases;
create policy "testing_purchases_select_own_or_admin"
on public.testing_purchases
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "testing_purchases_insert_own_or_admin" on public.testing_purchases;
create policy "testing_purchases_insert_own_or_admin"
on public.testing_purchases
for insert
to authenticated
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "testing_purchases_update_admin_only" on public.testing_purchases;
create policy "testing_purchases_update_admin_only"
on public.testing_purchases
for update
to authenticated
using (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

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
);

drop policy if exists "testing_exam_attempts_insert_own_or_admin" on public.testing_exam_attempts;
create policy "testing_exam_attempts_insert_own_or_admin"
on public.testing_exam_attempts
for insert
to authenticated
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
);

drop policy if exists "testing_exam_attempts_update_own_or_admin" on public.testing_exam_attempts;
create policy "testing_exam_attempts_update_own_or_admin"
on public.testing_exam_attempts
for update
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
  )
)
with check (
  auth.uid() = user_id
  or exists (
    select 1 from public.user_profiles up
    where up.user_id = auth.uid() and up.is_admin = true
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
      )
  )
);

drop policy if exists "testing_attempt_answers_insert_own_or_admin" on public.testing_attempt_answers;
create policy "testing_attempt_answers_insert_own_or_admin"
on public.testing_attempt_answers
for insert
to authenticated
with check (
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
      )
  )
);

create index if not exists idx_testing_exams_code_language_active
  on public.testing_exams(exam_code, language, is_active);

create index if not exists idx_testing_question_bank_exam_domain_active
  on public.testing_question_bank(exam_id, domain, is_active);

create index if not exists idx_testing_question_bank_tags
  on public.testing_question_bank using gin(tags);

create index if not exists idx_user_exam_entitlements_user_exam
  on public.user_exam_entitlements(user_id, exam_id);

create index if not exists idx_testing_purchases_user_status
  on public.testing_purchases(user_id, status, purchased_at desc);

create index if not exists idx_testing_exam_attempts_user_exam_started
  on public.testing_exam_attempts(user_id, exam_id, started_at desc);

create index if not exists idx_testing_attempt_answers_attempt
  on public.testing_attempt_answers(attempt_id);

insert into public.testing_exams (exam_code, name, name_pl, blueprint, question_count, timing_minutes, passing_score, version, language, is_active, cover_image_url)
values
  (
    'pmp',
    'PMP Practice',
    'PMP Ćwiczenia',
    '{"domains":[{"name":"People","weight":42},{"name":"Process","weight":50},{"name":"Business Environment","weight":8}]}'::jsonb,
    180,
    230,
    70,
    1,
    'en',
    true,
    '/media/images/heroes/hero-city-01.webp'
  ),
  (
    'cissp',
    'CISSP Practice',
    'CISSP Ćwiczenia',
    '{"domains":[{"name":"Security and Risk Management","weight":15},{"name":"Asset Security","weight":10},{"name":"Security Architecture and Engineering","weight":13},{"name":"Communication and Network Security","weight":13},{"name":"Identity and Access Management","weight":13},{"name":"Security Assessment and Testing","weight":12},{"name":"Security Operations","weight":13},{"name":"Software Development Security","weight":11}]}'::jsonb,
    125,
    180,
    70,
    1,
    'en',
    true,
    '/media/images/heroes/hero-space-01.webp'
  ),
  (
    'aws-saa',
    'AWS Solutions Architect Associate Practice',
    'AWS Solutions Architect Associate Ćwiczenia',
    '{"domains":[{"name":"Design Secure Architectures","weight":30},{"name":"Design Resilient Architectures","weight":26},{"name":"Design High-Performing Architectures","weight":24},{"name":"Design Cost-Optimized Architectures","weight":20}]}'::jsonb,
    65,
    130,
    72,
    1,
    'en',
    true,
    '/media/images/heroes/hero-ocean-01.webp'
  ),
  (
    'nclex-rn',
    'NCLEX-RN Practice',
    'NCLEX-RN Ćwiczenia',
    '{"domains":[{"name":"Safe and Effective Care Environment","weight":26},{"name":"Health Promotion and Maintenance","weight":12},{"name":"Psychosocial Integrity","weight":12},{"name":"Physiological Integrity","weight":50}]}'::jsonb,
    85,
    120,
    70,
    1,
    'en',
    true,
    '/media/images/heroes/hero-sunrise-01.webp'
  ),
  (
    'usmle-step-1',
    'USMLE Step 1 Practice',
    'USMLE Step 1 Ćwiczenia',
    '{"domains":[{"name":"Anatomy","weight":12},{"name":"Biochemistry","weight":14},{"name":"Microbiology and Immunology","weight":17},{"name":"Pathology","weight":44},{"name":"Pharmacology","weight":13}]}'::jsonb,
    280,
    480,
    60,
    1,
    'en',
    true,
    '/media/images/heroes/hero-forest-01.webp'
  )
on conflict (exam_code, version, language) do update
set
  name = excluded.name,
  name_pl = excluded.name_pl,
  blueprint = excluded.blueprint,
  question_count = excluded.question_count,
  timing_minutes = excluded.timing_minutes,
  passing_score = excluded.passing_score,
  is_active = excluded.is_active,
  cover_image_url = excluded.cover_image_url,
  updated_at = now();

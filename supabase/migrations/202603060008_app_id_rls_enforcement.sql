-- Micro-App RLS Enforcement & App Context RPC

-- ── set_app_context RPC — called by the server client to scope RLS ──────────
create or replace function public.set_app_context(app_id_value text)
returns void as $$
begin
  perform set_config('app.id', app_id_value, true); -- true = local to transaction
end;
$$ language plpgsql security definer;

-- Micro-App RLS Enforcement
-- Activates row-level security policies on all app_id-bearing tables
-- so each micro-app only sees its own data.

-- ── user_profiles ────────────────────────────────────────────────────────────
drop policy if exists "user_profiles_app_id_isolation" on public.user_profiles;
create policy "user_profiles_app_id_isolation" on public.user_profiles
  for all to authenticated
  using (app_id = coalesce(current_setting('app.id', true), 'koydo_main'))
  with check (app_id = coalesce(current_setting('app.id', true), 'koydo_main'));

-- ── student_profiles ─────────────────────────────────────────────────────────
drop policy if exists "student_profiles_app_id_isolation" on public.student_profiles;
create policy "student_profiles_app_id_isolation" on public.student_profiles
  for all to authenticated
  using (app_id = coalesce(current_setting('app.id', true), 'koydo_main'))
  with check (app_id = coalesce(current_setting('app.id', true), 'koydo_main'));

-- ── user_learning_progress ───────────────────────────────────────────────────
drop policy if exists "user_learning_progress_app_id_isolation" on public.user_learning_progress;
create policy "user_learning_progress_app_id_isolation" on public.user_learning_progress
  for all to authenticated
  using (app_id = coalesce(current_setting('app.id', true), 'koydo_main'))
  with check (app_id = coalesce(current_setting('app.id', true), 'koydo_main'));

-- ── generated_module_sessions ────────────────────────────────────────────────
drop policy if exists "generated_module_sessions_app_id_isolation" on public.generated_module_sessions;
create policy "generated_module_sessions_app_id_isolation" on public.generated_module_sessions
  for all to authenticated
  using (app_id = coalesce(current_setting('app.id', true), 'koydo_main'))
  with check (app_id = coalesce(current_setting('app.id', true), 'koydo_main'));

-- ── user_tokens ──────────────────────────────────────────────────────────────
drop policy if exists "user_tokens_app_id_isolation" on public.user_tokens;
create policy "user_tokens_app_id_isolation" on public.user_tokens
  for all to authenticated
  using (app_id = coalesce(current_setting('app.id', true), 'koydo_main'))
  with check (app_id = coalesce(current_setting('app.id', true), 'koydo_main'));

-- ── app_settings ─────────────────────────────────────────────────────────────
drop policy if exists "app_settings_app_id_isolation" on public.app_settings;
create policy "app_settings_app_id_isolation" on public.app_settings
  for all to authenticated
  using (app_id = coalesce(current_setting('app.id', true), 'koydo_main'))
  with check (app_id = coalesce(current_setting('app.id', true), 'koydo_main'));

-- ── Internationalization columns on app_manifests ────────────────────────────
alter table public.app_manifests add column if not exists supported_locales text[] not null default '{*}'::text[];
alter table public.app_manifests add column if not exists default_locale text not null default 'en';
alter table public.app_manifests add column if not exists region text not null default 'global';
alter table public.app_manifests add column if not exists default_currency text not null default 'USD';
alter table public.app_manifests add column if not exists pricing_tier text not null default 'freemium';
alter table public.app_manifests add column if not exists store_listing jsonb not null default '{}'::jsonb;

-- ── Seed micro-app manifests (global) ────────────────────────────────────────
insert into public.app_manifests (app_id, display_name, theme_config, enabled_subjects, min_age, max_age, supported_locales, default_locale, region, default_currency, pricing_tier) values
  ('koydo_junior', 'Koydo Junior', '{"--color-primary":"#ff6b35","--radius-card":"1.5rem"}'::jsonb, '{Math,Reading,Science}', 3, 8, '{en,es,fr,de}', 'en', 'global', 'USD', 'freemium'),
  ('koydo_sat', 'Koydo SAT Prep', '{"--color-primary":"#1a5276"}'::jsonb, '{Math,Reading,Science,Languages}', 14, 19, '{en}', 'en', 'us', 'USD', 'premium_19.99'),
  ('koydo_finance', 'Koydo Finance Pro', '{"--color-primary":"#0d6efd"}'::jsonb, '{Finance,Accounting}', 16, 99, '{en,es,de,ja,zh}', 'en', 'global', 'USD', 'premium_19.99'),
  ('koydo_math', 'Koydo Math Forge', '{"--color-primary":"#6c5ce7"}'::jsonb, '{Math}', 8, 18, '{en,es,fr,de,zh,ja,ko}', 'en', 'global', 'USD', 'freemium'),
  ('koydo_arena', 'Koydo Arena', '{"--color-primary":"#e17055"}'::jsonb, '{*}', 5, 99, '{*}', 'en', 'global', 'USD', 'free')
on conflict (app_id) do nothing;

-- ── Seed regional micro-apps ─────────────────────────────────────────────────
insert into public.app_manifests (app_id, display_name, theme_config, enabled_subjects, min_age, max_age, supported_locales, default_locale, region, default_currency, pricing_tier) values
  ('koydo_math_es', 'Koydo Matemáticas', '{"--color-primary":"#6c5ce7"}'::jsonb, '{Math}', 8, 18, '{es}', 'es', 'latam', 'USD', 'freemium'),
  ('koydo_exam_jp', 'Koydo 受験対策', '{"--color-primary":"#2d3436"}'::jsonb, '{Math,Science,Reading}', 15, 19, '{ja}', 'ja', 'jp', 'JPY', 'premium_19.99'),
  ('koydo_junior_de', 'Koydo Junior DE', '{"--color-primary":"#ff6b35","--radius-card":"1.5rem"}'::jsonb, '{Math,Reading,Science}', 3, 8, '{de}', 'de', 'dach', 'EUR', 'freemium'),
  ('koydo_ar', 'كويدو', '{"--color-primary":"#1abc9c"}'::jsonb, '{*}', 0, 99, '{ar}', 'ar', 'mena', 'AED', 'freemium'),
  ('koydo_kr', '코이도 학습', '{"--color-primary":"#6c5ce7"}'::jsonb, '{Math,Science,Coding}', 8, 18, '{ko}', 'ko', 'kr', 'KRW', 'freemium'),
  ('koydo_hi', 'Koydo हिंदी', '{"--color-primary":"#e67e22"}'::jsonb, '{*}', 0, 99, '{hi,en}', 'hi', 'in', 'INR', 'freemium'),
  ('koydo_math_zh', 'Koydo 数学', '{"--color-primary":"#6c5ce7"}'::jsonb, '{Math}', 8, 18, '{zh}', 'zh', 'cn', 'CNY', 'freemium')
on conflict (app_id) do nothing;

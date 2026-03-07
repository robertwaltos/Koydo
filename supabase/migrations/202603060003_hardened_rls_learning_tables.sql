-- Security Hardening: RLS Policies for Learning Goals and Reflection Journal
--
-- This migration adds the missing RLS policies for tables created in previous tranches
-- ensuring that students can only read/write their own data.
-- Tables may not exist yet if those tranches haven't been applied.

-- 1. learning_goals
do $$
begin
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'learning_goals') then
    alter table public.learning_goals enable row level security;

    execute 'drop policy if exists "goals_select_own" on public.learning_goals';
    execute 'drop policy if exists "goals_insert_own" on public.learning_goals';
    execute 'drop policy if exists "goals_update_own" on public.learning_goals';
    execute 'drop policy if exists "goals_delete_own" on public.learning_goals';

    execute $p$create policy "goals_select_own" on public.learning_goals
      for select to authenticated
      using (profile_id in (select id from public.student_profiles where account_id = auth.uid()))$p$;

    execute $p$create policy "goals_insert_own" on public.learning_goals
      for insert to authenticated
      with check (profile_id in (select id from public.student_profiles where account_id = auth.uid()))$p$;

    execute $p$create policy "goals_update_own" on public.learning_goals
      for update to authenticated
      using (profile_id in (select id from public.student_profiles where account_id = auth.uid()))
      with check (profile_id in (select id from public.student_profiles where account_id = auth.uid()))$p$;

    execute $p$create policy "goals_delete_own" on public.learning_goals
      for delete to authenticated
      using (profile_id in (select id from public.student_profiles where account_id = auth.uid()))$p$;

    execute 'create index if not exists idx_learning_goals_profile_id on public.learning_goals(profile_id)';
  end if;
end $$;

-- 2. reflection_journal
do $$
begin
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'reflection_journal') then
    alter table public.reflection_journal enable row level security;

    execute 'drop policy if exists "journal_select_own" on public.reflection_journal';
    execute 'drop policy if exists "journal_insert_own" on public.reflection_journal';
    execute 'drop policy if exists "journal_delete_own" on public.reflection_journal';

    execute $p$create policy "journal_select_own" on public.reflection_journal
      for select to authenticated
      using (profile_id in (select id from public.student_profiles where account_id = auth.uid()))$p$;

    execute $p$create policy "journal_insert_own" on public.reflection_journal
      for insert to authenticated
      with check (profile_id in (select id from public.student_profiles where account_id = auth.uid()))$p$;

    execute $p$create policy "journal_delete_own" on public.reflection_journal
      for delete to authenticated
      using (profile_id in (select id from public.student_profiles where account_id = auth.uid()))$p$;

    execute 'create index if not exists idx_reflection_journal_profile_id on public.reflection_journal(profile_id)';
  end if;
end $$;

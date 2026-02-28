-- Hardens shared SELECT policies to explicitly scope through auth.uid().
-- Behavior remains equivalent for authenticated users, but policy expressions
-- now include explicit identity checks for audit consistency.

-- testing_exams: keep active-only visibility, require authenticated identity.
drop policy if exists "testing_exams_select_authenticated" on public.testing_exams;
create policy "testing_exams_select_authenticated"
on public.testing_exams
for select
to authenticated
using (
  auth.uid() is not null
  and is_active = true
);

-- pricing_ladders: require authenticated identity for read access.
drop policy if exists "pricing_ladders_select_authenticated" on public.pricing_ladders;
create policy "pricing_ladders_select_authenticated"
on public.pricing_ladders
for select
to authenticated
using (
  auth.uid() is not null
);

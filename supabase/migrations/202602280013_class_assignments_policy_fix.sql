-- Fix class assignment learner visibility policy correlation to prevent overly-permissive access.
-- Previous policy compared e.class_id = class_id, which resolved to e.class_id = e.class_id.

drop policy if exists "class_assignments_learner_select_assigned" on public.class_assignments;

create policy "class_assignments_learner_select_assigned"
on public.class_assignments
for select
to authenticated
using (
  exists (
    select 1
    from public.class_enrollments e
    where e.class_id = public.class_assignments.class_id
      and e.learner_user_id = auth.uid()
      and e.parent_consent = true
  )
);

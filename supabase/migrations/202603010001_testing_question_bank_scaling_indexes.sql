-- Testing vertical scale hardening:
-- index paths used by high-volume question selection and recent-history avoidance.

create index if not exists idx_testing_question_bank_exam_active_id
  on public.testing_question_bank(exam_id, is_active, id);

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'testing_question_bank'
      and column_name = 'review_status'
  )
  and exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'testing_question_bank'
      and column_name = 'commercial_use_allowed'
  ) then
    execute $sql$
      create index if not exists idx_testing_question_bank_exam_governed_active_id
        on public.testing_question_bank(exam_id, id)
        where is_active = true
          and review_status = 'approved'
          and commercial_use_allowed = true
    $sql$;
  end if;
end $$;

create index if not exists idx_testing_exam_attempts_user_exam_started_inc_qids
  on public.testing_exam_attempts(user_id, exam_id, started_at desc)
  include (question_ids);

-- Speed up duplicate-detection lookups during on-demand question generation.

create index if not exists idx_testing_question_bank_exam_active_question_text
  on public.testing_question_bank(exam_id, is_active, question_text);

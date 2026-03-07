-- --- Add Unique Constraint to trivia_questions ---
-- This ensures that upsert logic based on the question text works correctly.

ALTER TABLE public.trivia_questions ADD CONSTRAINT trivia_questions_question_key UNIQUE (question);

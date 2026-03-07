-- Quick Resume: add checkpoint columns to student_profiles
-- Stores the learner's last position so the dashboard can offer "Continue where you left off"

ALTER TABLE public.student_profiles
  ADD COLUMN IF NOT EXISTS last_checkpoint_url  text,
  ADD COLUMN IF NOT EXISTS last_module_title    text,
  ADD COLUMN IF NOT EXISTS last_lesson_title    text,
  ADD COLUMN IF NOT EXISTS last_checkpoint_at   timestamptz;

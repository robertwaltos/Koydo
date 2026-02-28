-- Migration: unique partial index to block duplicate media jobs
-- Prevents (asset_type, lesson_id) duplicates when status is active
-- (queued, running, or completed).
-- Failed rows are excluded so they can be retried by re-inserting.
-- Regen uses UPDATE (status = 'queued'), so it never triggers this constraint.

CREATE UNIQUE INDEX IF NOT EXISTS media_jobs_unique_active_per_lesson
  ON media_generation_jobs (asset_type, lesson_id)
  WHERE status IN ('queued', 'running', 'completed');

-- Add a comment for discoverability
COMMENT ON INDEX media_jobs_unique_active_per_lesson IS
  'Prevents duplicate active jobs for the same (asset_type, lesson_id). '
  'Failed rows are excluded so retries can be inserted. '
  'Regen uses UPDATE so it is unaffected by this constraint.';

-- Creator submissions pipeline
-- NOTE: This table was already created with a richer schema by
-- 202603030002_creator_pipeline_foundation.sql (using creator_user_id,
-- workflow_status, rubric scoring, etc.). This migration is a no-op
-- to avoid conflicts with the existing schema.

-- Ensure RLS is enabled (idempotent)
alter table if exists creator_submissions enable row level security;

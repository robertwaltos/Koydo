-- Airplane Mode — daily download quota tracking
-- Prevents gaming by limiting downloads to 2/day and 12 total hours/day per user.

CREATE TABLE IF NOT EXISTS airplane_mode_downloads (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  hours_requested numeric(4,1) NOT NULL DEFAULT 6,
  pack_id       text NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- Fast lookup: "how many downloads has this user done today?"
CREATE INDEX idx_airplane_downloads_user_day
  ON airplane_mode_downloads (user_id, created_at DESC);

-- RLS
ALTER TABLE airplane_mode_downloads ENABLE ROW LEVEL SECURITY;

-- Users can read their own records (for client-side quota display)
CREATE POLICY airplane_downloads_select_own
  ON airplane_mode_downloads FOR SELECT
  USING (auth.uid() = user_id);

-- Only server (service_role) can insert — no client-side inserts
CREATE POLICY airplane_downloads_insert_service
  ON airplane_mode_downloads FOR INSERT
  WITH CHECK (false);

-- Auto-purge records older than 7 days to keep table small.
-- Run via Supabase pg_cron or external scheduler:
--   SELECT cron.schedule('purge-airplane-logs', '0 3 * * *',
--     $$DELETE FROM airplane_mode_downloads WHERE created_at < now() - interval '7 days'$$);

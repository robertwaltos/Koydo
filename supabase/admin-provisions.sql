-- ============================================================================
-- Admin Provisioning Table
-- Run this SQL in your Supabase SQL Editor to create the admin_provisions table.
-- ============================================================================

CREATE TABLE IF NOT EXISTS admin_provisions (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email         text NOT NULL,
  access_level  text NOT NULL CHECK (access_level IN ('read_only', 'full_access')),
  provisioned_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  notes         text,
  claimed_at    timestamptz,
  claimed_by    uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  is_active     boolean NOT NULL DEFAULT true,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- Unique constraint on email (case-insensitive)
CREATE UNIQUE INDEX IF NOT EXISTS admin_provisions_email_unique
  ON admin_provisions (lower(email));

-- Index for fast claimed/active lookups
CREATE INDEX IF NOT EXISTS admin_provisions_active_idx
  ON admin_provisions (is_active, claimed_at);

-- Add admin_access_level to user_profiles if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_profiles' AND column_name = 'admin_access_level'
  ) THEN
    ALTER TABLE user_profiles
      ADD COLUMN admin_access_level text DEFAULT NULL
      CHECK (admin_access_level IS NULL OR admin_access_level IN ('read_only', 'full_access'));
  END IF;
END $$;

-- RLS Policies: only service_role can read/write admin_provisions
ALTER TABLE admin_provisions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Only service role can manage admin_provisions" ON admin_provisions;

-- Service role bypass (admin API uses service role key)
-- No user-facing policies needed — all access goes through admin API routes

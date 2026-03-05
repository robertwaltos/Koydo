-- Add new user preference columns for sound, daily goals, and enhanced motion/contrast
ALTER TABLE user_profiles
  ADD COLUMN IF NOT EXISTS sound_effects TEXT NOT NULL DEFAULT 'on',
  ADD COLUMN IF NOT EXISTS daily_goal_xp INTEGER NOT NULL DEFAULT 0;

-- Update motion_pref to allow 'reduced' value (already TEXT, just needs comment)
COMMENT ON COLUMN user_profiles.motion_pref IS 'Motion preference: standard or reduced';
COMMENT ON COLUMN user_profiles.contrast_pref IS 'Contrast preference: standard or high';
COMMENT ON COLUMN user_profiles.sound_effects IS 'Sound effects: on or off';
COMMENT ON COLUMN user_profiles.daily_goal_xp IS 'Daily XP goal (0 = no goal set)';

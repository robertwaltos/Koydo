-- --- Elevation: pwaltos@gmail.com and marek@waltos.com ---
-- This script ensures specific users are elevated to Read-Only Admin status.
-- Since the users may not exist yet, we use a logic that can be re-run or triggered.

UPDATE public.user_profiles
SET is_admin = true, 
    data_mode = 'read_only'
WHERE user_id IN (
  SELECT id FROM auth.users WHERE email IN ('pwaltos@gmail.com', 'marek@waltos.com')
);

# DB Migration Push Report

Date: 2026-02-27 (America/Chicago)
Owner: Codex 5.3 (Track B)

## Commands Run
1. `supabase db push --linked --dry-run`
2. `supabase db push --linked`
3. (after fixing migration SQL) repeat dry-run + push

## What Happened
- Initial dry-run correctly identified pending migrations `202602280009` through `202602280015`.
- First push applied `202602280009` and failed on `202602280010` with SQL parse error around the return column named `interval`.
- Fixed `202602280010_atomic_user_learning_progress.sql` by:
  - changing returned column to `review_interval`
  - replacing `now() + interval '1 day'` with `now() + make_interval(days => 1)`
  - keeping function body logic intact
- Updated `src/app/api/progress/route.ts` to accept either `interval` or `review_interval` in RPC response mapping.
- Re-ran push; migrations `202602280010` through `202602280015` applied successfully.
- Split function permission hardening into single-statement migrations due Supabase CLI prepared-statement constraint:
  - `202602280016_atomic_progress_function_grants.sql` (revoke)
  - `202602280017_atomic_progress_function_grant_authenticated.sql`
  - `202602280018_atomic_progress_function_grant_service_role.sql`
- Final dry-run result: `Remote database is up to date.`

## Final State
- Remote Supabase is now fully synced.
- Original launch-blocking migrations (`202602280009` to `202602280015`) are applied.
- Additional security grant migrations (`202602280016` to `202602280018`) are applied.

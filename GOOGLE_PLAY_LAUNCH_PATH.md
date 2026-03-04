# Koydo Google Play Launch Path (Final Polish + Controlled Rollout)

Date: `2026-03-03`  
Owner: Product + Engineering + Ops

## 1) Launch Objective
- Ship polished, stable, policy-safe functionality to Google Play.
- Keep unfinished major surfaces accessible only through a `Coming Soon` gate.
- Eliminate previous stall points (env drift, deploy file-count errors, unverified release inputs).

## 2) Major Feature Gating (Now Implemented)
These routes are centrally controlled and default to pending until explicitly enabled:
- `Experience Hub` -> `NEXT_PUBLIC_EXPERIENCE_HUB_LAUNCH_PENDING` (default pending)
- `Experience Hub Games` -> `NEXT_PUBLIC_EXPERIENCE_HUB_GAMES_LAUNCH_PENDING` (default pending)
- `Immersive Science Lab` -> `NEXT_PUBLIC_SCIENCE_LAB_IMMERSIVE_PENDING` (default pending)

Code references:
- `src/lib/platform/launch-readiness.ts`
- `src/app/coming-soon/page.tsx`
- `src/app/components/coming-soon-banner.tsx`
- `src/app/experience-hub/page.tsx`
- `src/app/experience-hub/games/page.tsx`
- `src/app/science-lab/page.tsx`
- `src/app/components/top-nav.tsx`
- `src/app/components/site-footer.tsx`
- `src/app/dashboard/page.tsx`

## 3) Environment Lock Checklist (Must Pass Before Release)
1. Run:
   - `node scripts/check-env.mjs --runtime production --fail-on-warn`
2. Ensure these are valid for production:
   - `NEXT_PUBLIC_APP_URL=https://koydo.vercel.app` (or custom production domain)
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `RESEND_API_KEY`
   - `PARENT_CONSENT_FROM_EMAIL`
   - `SIGNUP_FROM_EMAIL` (or fallback sender logic)
   - `PARENT_CONSENT_TOKEN_SECRET` (strong random value, no placeholder)
3. If using app-store mode:
   - `BILLING_PROVIDER_MODE=app_store_iap`
   - `NEXT_PUBLIC_BILLING_PROVIDER_MODE=app_store_iap`
   - RevenueCat keys + webhook secret configured

## 4) Anti-Stall Controls (Do These Every Release)
1. Prevent Vercel deploy failure from file-count limits:
   - `npx vercel --prod --yes --archive=tgz`
2. Run core checks in this order:
   - `npm run lint`
   - `npm run build`
   - `npm run billing:revenuecat:resolve:test`
   - `npm run billing:webhook:processing-lock:test`
3. Block release on any failed check.
4. Confirm no secrets remain in markdown or source files.

## 5) Google Play Release Steps (Execution Order)
1. Build signed Android AAB:
   - `cd android`
   - `./gradlew bundleRelease`
2. Upload to Play Console Internal Testing track.
3. Complete or re-validate:
   - Data Safety
   - Content Rating
   - Target audience/content declarations
   - App Access (review account credentials)
4. Promote to Closed Testing with staged user group.
5. Monitor crash/ANR/payment signals for 48 hours.
6. Promote to Production staged rollout (start low, then ramp).

## 6) Final Polish Scope (Before Production Ramp)
1. Verify all `Coming Soon` locked routes resolve to `/coming-soon`.
2. Verify top nav, footer, and dashboard labels show `Soon` where locked.
3. Confirm all core learning flows are uninterrupted:
   - Sign in/up
   - Explore/modules/lessons
   - Speaking lab
   - Billing (current mode)
4. Confirm policy pages and support routes load without errors.

## 7) Launch Switch Plan
When each feature is ready, flip env var and redeploy:
1. Set feature var to `false`.
2. Redeploy production.
3. Run smoke test for that route and linked nav paths.
4. Keep fallback path (`/coming-soon`) available for rapid rollback.


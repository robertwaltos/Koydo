# Codebase Audit: Missing Inputs, Credentials, and Required Actions

Date: `2026-03-03`  
Scope: Runtime credentials, required user inputs, operational actions, and release blockers.

## Executive Summary
- Environment validation script is in place and authoritative: `scripts/check-env.mjs`.
- Current local env check (development) reports: `17 pass / 2 warn / 0 fail`.
- Production-simulated check against local `.env` reports: `16 pass / 0 warn / 3 fail`.
- Highest-priority production blockers found in this audit:
1. `NEXT_PUBLIC_APP_URL` still set to localhost in production simulation.
2. `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` missing for production rate-limit backend.
3. Placeholder-style value detected for `PARENT_CONSENT_TOKEN_SECRET`.

## 1) Credentials and Config Requirements

### 1.1 Core required for production
These are enforced by schema or route behavior:
- `NEXT_PUBLIC_SUPABASE_URL` required.  
  Ref: `src/lib/config/env.ts:10`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` required.  
  Ref: `src/lib/config/env.ts:11`
- `SUPABASE_SERVICE_ROLE_KEY` required for admin/server actions.  
  Ref: `src/lib/config/env.ts:12`
- `STRIPE_SECRET_KEY` required when `BILLING_PROVIDER_MODE=stripe_external`.  
  Ref: `src/lib/config/env.ts:13`
- `STRIPE_WEBHOOK_SECRET` required when `BILLING_PROVIDER_MODE=stripe_external`.  
  Ref: `src/lib/config/env.ts:14`
- `REQUIRE_ADMIN_APPROVALS` should be explicitly set (recommended `true` in production).  
  Ref: `src/lib/config/env.ts:64`, `scripts/check-env.mjs`

### 1.2 Feature credentials (optional unless feature is enabled)
- Parent consent signing:
  - `PARENT_CONSENT_TOKEN_SECRET` (minimum length expectation in schema)
  - Missing value breaks consent endpoints.
  - Refs: `src/lib/config/env.ts:43`, `src/app/api/compliance/parent-consent/route.ts:33`, `src/app/api/compliance/parent-consent/verify/route.ts:46`
- Parent consent email delivery:
  - `RESEND_API_KEY` + sender email (`PARENT_CONSENT_FROM_EMAIL` and/or `SIGNUP_FROM_EMAIL`)
  - Without these, email flow falls back to simulation behavior.
  - Refs: `src/lib/config/env.ts:44`, `scripts/check-env.mjs:722`
- App Store IAP mode only:
  - RevenueCat client keys and webhook secret become mandatory if `BILLING_PROVIDER_MODE=app_store_iap`.
  - Refs: `scripts/check-env.mjs:544`, `scripts/check-env.mjs:567`
- Companion AI and media:
  - `OPENAI_API_KEY` required for companion chat availability.
  - `HEYGEN_API_KEY` required for intro video proxy.
  - Refs: `src/app/api/companion/chat/route.ts`, `src/app/api/companion/intro-video/route.ts`
- Rate limiting hardening:
  - `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` required together in production.
  - Ref: `scripts/check-env.mjs` (`Upstash Redis Rate Limit Backend` check)

## 2) Missing/Required User Inputs in API Contracts
These are request-time requirements that will return client errors if missing:

- Companion chat:
  - `message` required.
  - `companionGender` must be `female` or `male`.
  - Ref: `src/app/api/companion/chat/route.ts:51`
- Intro video:
  - `videoId` query param required.
  - Ref: `src/app/api/companion/intro-video/route.ts:14`
- Age-verified game submissions/challenges:
  - `studentProfileId` required in age-verified paths.
  - Refs: `src/app/api/games/state/route.ts:580`, `src/app/api/games/daily-challenge/route.ts:277`
- Compliance terms acceptance:
  - `billingState` required for terms acceptance.
  - Ref: `src/app/api/compliance/policy-acceptance/route.ts:98`

## 3) Missing/Required Ops Actions

### 3.1 Immediate ops actions (production readiness)
1. Set production `NEXT_PUBLIC_APP_URL` to live domain (not localhost).
2. Set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
3. Rotate and replace placeholder or weak `PARENT_CONSENT_TOKEN_SECRET`.
4. Run production env check as gate:  
   `node scripts/check-env.mjs --runtime production --fail-on-warn`

### 3.2 Billing mode action gates
- If using Stripe external billing:
  - Ensure Stripe secret + webhook secret are present.
  - Multiple routes explicitly fail when Stripe config is missing.
  - Example refs:
    - `src/app/api/stripe/checkout/route.ts:125`
    - `src/app/api/admin/billing/set-price/route.ts:27`
- If moving to App Store IAP:
  - Set RevenueCat client keys + webhook secret first.
  - Verify `BILLING_PROVIDER_MODE` and `NEXT_PUBLIC_BILLING_PROVIDER_MODE` match.

### 3.3 Database readiness action
- `scripts/check-db-readiness.mjs` currently cannot verify from this environment due network fetch failures (`TypeError: fetch failed` on all tables).
- Action: run DB readiness from CI or an environment with outbound network access to Supabase REST endpoints.

## 4) Security Hygiene Actions
1. Secret-like material appears in `resend.md` line 1.  
   Action: move key material to env/secret manager only and rotate exposed keys.
2. Keep `.env*` and secret notes untracked (currently not tracked in git output for checked files).
3. Continue using `scripts/check-env.mjs` placeholder-secret audit before deploy.

## 5) Suggested Release Gate (Minimal)
Run this sequence before production deploy:
1. `node scripts/check-env.mjs --runtime production --fail-on-warn`
2. `npm run lint`
3. `npm run build`
4. `npm run billing:revenuecat:resolve:test`
5. `npm run billing:webhook:processing-lock:test`

If step 1 fails, block release.

## 6) Baby Step-by-Step: Where to Get Each Credential (Latest Provider Flows)
Verified against provider docs on `2026-03-03`.

### 6.1 `NEXT_PUBLIC_APP_URL` (Vercel)
Goal: set your production public URL (for metadata, sitemap, callbacks), never localhost in production.

1. Open Vercel dashboard and select the project.
2. Go to `Settings` -> `Domains`.
3. Add or confirm your production domain (for example `koydo.vercel.app` or custom domain).
4. Copy the exact HTTPS origin you serve users from.
5. Go to `Settings` -> `Environment Variables`.
6. Add/update:
   - `NEXT_PUBLIC_APP_URL=https://your-live-domain`
7. Select environments: `Production` (and optionally `Preview`).
8. Save and redeploy.

### 6.2 `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (Supabase)
Goal: connect app and server routes to your Supabase project correctly.

1. Open Supabase dashboard and select your project.
2. Click the project `Connect` dialog to copy Project URL and publishable/client key quickly.
3. For full key control, go to `Project Settings` -> `API Keys`.
4. Copy:
   - Project URL -> `NEXT_PUBLIC_SUPABASE_URL`
   - Client-safe key (`anon` legacy or publishable key) -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Server-only elevated key (`service_role` legacy or secret key) -> `SUPABASE_SERVICE_ROLE_KEY`
5. In Vercel `Settings` -> `Environment Variables`, add/update these values.
6. Mark `SUPABASE_SERVICE_ROLE_KEY` as server-only usage in your code paths (already true in this repo).
7. Redeploy.

### 6.3 `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` (Upstash)
Goal: enable production API rate limiting backend (required by env checks in prod).

1. Open Upstash Console.
2. Click `+ Create Database`.
3. Choose name, primary region, plan, and create.
4. Open the created database page.
5. In the REST/connection section, copy:
   - HTTPS endpoint -> `UPSTASH_REDIS_REST_URL`
   - Standard token -> `UPSTASH_REDIS_REST_TOKEN`
6. Add both vars in Vercel `Settings` -> `Environment Variables` for `Production`.
7. Do not expose the standard token client-side.
8. Redeploy and run env check.

### 6.4 Stripe (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`)
Goal: keep `stripe_external` billing mode fully operational.

1. Open Stripe Dashboard.
2. Go to `Developers` -> `API keys` (or Workbench-linked keys view).
3. Copy:
   - Publishable key -> `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Secret key -> `STRIPE_SECRET_KEY`
4. Confirm you are using live keys for production (not test mode keys).
5. Go to `Webhooks` (Workbench) -> `Create an event destination`.
6. Set endpoint URL to your app route (example: `https://koydo.vercel.app/api/stripe/webhook`).
7. After creation, open endpoint details and click reveal/copy signing secret.
8. Save as `STRIPE_WEBHOOK_SECRET` in Vercel env vars.
9. Redeploy.

### 6.5 RevenueCat (if/when `BILLING_PROVIDER_MODE=app_store_iap`)
Goal: configure app-store subscription mode with verified webhook authorization.

1. Open RevenueCat dashboard and select project.
2. Go to `API keys`.
3. Copy platform public keys:
   - iOS public key -> `NEXT_PUBLIC_REVENUECAT_APPLE_KEY`
   - Android public key -> `NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY`
   - optional generic public key -> `NEXT_PUBLIC_REVENUECAT_API_KEY`
4. Go to `Integrations` -> `Webhooks` -> `Add new configuration`.
5. Enter webhook URL: `https://koydo.vercel.app/api/revenuecat/webhook`.
6. Set an authorization header value in RevenueCat.
7. Use that same exact value in app env as `REVENUECAT_WEBHOOK_SECRET`.
8. Choose production/sandbox event scope.
9. Save, send a test webhook from RevenueCat dashboard, and verify 200 responses.

### 6.6 Resend + sender emails (`RESEND_API_KEY`, `PARENT_CONSENT_FROM_EMAIL`, `SIGNUP_FROM_EMAIL`, `ADMIN_ALERT_FROM_EMAIL`)
Goal: enable real transactional emails (parent consent, signup email, alerts).

1. Open Resend dashboard.
2. Go to `Domains` and add a domain/subdomain you own.
3. Publish required DNS records (SPF + DKIM) at your DNS provider.
4. Wait until domain status is `verified`.
5. Go to `API Keys` -> `Create API Key`.
6. Choose `Sending access` (recommended least privilege) or `Full access`.
7. Copy key once and store in `RESEND_API_KEY`.
8. Set from-address env vars in Vercel:
   - `PARENT_CONSENT_FROM_EMAIL=Koydo <noreply@yourdomain>`
   - `SIGNUP_FROM_EMAIL=Koydo <noreply@yourdomain>` (or fallback to parent consent sender)
   - `ADMIN_ALERT_FROM_EMAIL=Ops <alerts@yourdomain>` (optional but recommended)
9. Redeploy and send a test email from app flow.

### 6.7 `PARENT_CONSENT_TOKEN_SECRET`
Goal: strong signing secret for consent verification tokens.

1. Generate a cryptographically strong random secret (32+ chars).
2. Store only in Vercel server env as `PARENT_CONSENT_TOKEN_SECRET`.
3. Remove any placeholder value from local/shared files.
4. Redeploy.

Example generator (PowerShell):
`[Convert]::ToBase64String((1..48 | ForEach-Object { Get-Random -Maximum 256 }))`

### 6.8 Set vars safely in Vercel (single flow)
1. Vercel -> project -> `Settings` -> `Environment Variables`.
2. Add key/value.
3. Assign environment targets (`Production`, optionally `Preview`/`Development`).
4. Save.
5. Trigger new deploy.
6. Validate with:
   - `node scripts/check-env.mjs --runtime production --fail-on-warn`

## 7) Anti-Stall Runbook (Avoid Prior Agent Failure Patterns)
Use this every time to prevent the same stalls.

### 7.1 Deployment stall: Vercel large file count
Symptom: deploy fails with file-count validation (`files should NOT have more than 15000 items`).

Fix:
1. Deploy with archive mode:
   - `npx vercel --prod --yes --archive=tgz`
2. Keep heavy artifacts out of deploy scope (`.vercelignore` / cleanup generated files).

### 7.2 Environment drift stall
Symptom: deploy succeeds but app features fail due missing secrets.

Fix:
1. Always run env gate before and after deploy:
   - `node scripts/check-env.mjs --runtime production --fail-on-warn`
2. Block release on any fail/warn.

### 7.3 Webhook stall (timeouts/retries)
Symptom: duplicate webhook deliveries or delayed state sync.

Fix:
1. Ensure endpoint returns `2xx` quickly.
2. Keep webhook handler idempotent (already implemented in RevenueCat route).
3. Verify auth header secret exactly matches provider config.
4. Monitor failed delivery logs and retry from provider dashboard.

### 7.4 Secrets leakage stall
Symptom: credentials pasted into `.md` or source accidentally.

Fix:
1. Keep secrets only in secret managers / env vars.
2. Rotate leaked key immediately at provider.
3. Re-run env placeholder and key sanity checks.

## 8) Provider Sources (latest checked 2026-03-03)
- Vercel environment variables: https://vercel.com/docs/environment-variables
- Vercel domains: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- Supabase API keys: https://supabase.com/docs/guides/api/api-keys
- Supabase Next.js quickstart (Connect dialog/key retrieval): https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- Stripe keys: https://docs.stripe.com/keys
- Stripe webhooks: https://docs.stripe.com/webhooks
- RevenueCat API/authentication: https://www.revenuecat.com/docs/projects/authentication
- RevenueCat webhooks: https://www.revenuecat.com/docs/integrations/webhooks
- Resend API keys: https://resend.com/docs/dashboard/api-keys/introduction
- Resend domains: https://resend.com/docs/dashboard/domains/introduction
- Upstash Redis getting started: https://upstash.com/docs/redis
- Upstash REST API/token location: https://upstash.com/docs/redis/features/restapi

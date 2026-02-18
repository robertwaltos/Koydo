# EduForge Web Starter

EduForge is a web-first educational platform starter built with Next.js App Router and TypeScript.

## Included foundation

- Next.js + TypeScript + Tailwind starter app
- Supabase client/server helpers (`@supabase/ssr`)
- Stripe checkout and webhook route scaffolding
- AI token budget logic with hard-cap fallback support
- Offline progress storage helper (IndexedDB via `idb`)
- Mixpanel event helper for lesson tracking
- Media placeholders in `public/placeholders/`
- AI prompt catalog in `public/AI-MEDIA-PROMPTS.md`

## Quick start

1. Install dependencies

```bash
npm install
```

2. Configure environment variables

```bash
copy .env.example .env.local
```

3. Start development server

```bash
npm run dev
```

4. Open app

`http://localhost:3000`

## API endpoints (starter)

- `GET /api/health`
- `GET /api/auth/me`
- `GET /api/ai/analyze` (schema info)
- `POST /api/ai/analyze` (budget-aware recommendation mock)
- `POST /api/stripe/checkout`
- `POST /api/stripe/webhook`
- `POST /api/compliance/age-gate`
- `POST /api/compliance/parent-consent`
- `POST /api/compliance/parent-consent/verify`

## Compliance routes (starter UI)

- `/auth/age-gate`
- `/auth/parent-consent`
- `/auth/parent-consent/verify`

## Auth routes

- `/auth/sign-up`
- `/auth/sign-in`
- `/dashboard` (protected)
- `/billing/checkout`

Session cookie refresh proxy is configured in `src/proxy.ts`.

Dashboard access includes an onboarding guard:

- Missing age-gate profile state redirects to `/auth/age-gate`
- Under-13 pending consent redirects to `/auth/parent-consent`

Parental verification uses signed link tokens (`PARENT_CONSENT_TOKEN_SECRET`) and the verify API requires a valid token.
If `RESEND_API_KEY` and `PARENT_CONSENT_FROM_EMAIL` are configured, the link is sent via email; otherwise a simulation link is returned for local testing.
Verification links are single-use: token hash is bound to the consent request and consumed on successful verification.

## Supabase setup

Run `supabase/schema.sql` in your Supabase SQL editor.

Tables included:

- `user_profiles`
- `user_tokens`
- `parent_consents`
- `subscriptions`
- `dsar_requests`

Includes baseline RLS policies and updated-at triggers.

## Seed data (optional)

1. Set environment variables from `.env.example` in your shell (or `.env.local`).
2. Run:

```bash
npm run seed:supabase
```

This creates (or reuses) a test user and seeds sample records in `user_profiles`, `user_tokens`, and `dsar_requests`.

## Core files

- `src/lib/config/env.ts`
- `src/lib/ai/token-budget.ts`
- `src/lib/supabase/client.ts`
- `src/lib/supabase/server.ts`
- `src/lib/offline/progress-db.ts`
- `src/lib/analytics/mixpanel.ts`
- `public/AI-MEDIA-PROMPTS.md`

## Notes

- Stripe, Supabase, translation, and AI routes are scaffolded for integration and need real keys in `.env.local`.
- The token budget utility follows project constraints and can be wired to per-user Supabase tracking tables.
- Stripe webhook lifecycle now persists subscription state into `subscriptions` using `SUPABASE_SERVICE_ROLE_KEY`.
- Checkout and parent-consent APIs now derive `userId` from the authenticated Supabase session.

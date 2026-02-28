# Language Learning Architecture

## Goal
Keep language learning features modular so translation, speech capture, pronunciation scoring, and grading can switch providers without rewiring app flows.

## Current foundation
- Domain layer: `src/lib/language-learning`
- Provider contracts:
  - `TranslationProvider`
  - `PronunciationProvider`
- Runtime selection with fallback:
  - Translation: `auto | deepl | google | mock`
  - Pronunciation: `auto | licensed | mock`
- API contracts:
  - `POST /api/language/translate`
  - `POST /api/language/pronunciation/grade`
  - `GET/POST /api/language/gamification/state`
  - `GET /api/language/pricing`
  - `GET /api/language/usage`
- Learner-facing speaking workflow:
  - `GET /language/speaking-lab` (entitlement-aware translation + pronunciation workspace)
- Billing UI surfaces:
  - `GET /billing/language` (plan comparison + upgrade entry)
  - `GET /billing/checkout?languagePlanId=<planId>` (plan-aware checkout session)
- Admin billing config surface:
  - `GET/POST /api/admin/billing/language-prices` (sets `stripe_language_price_ids` map in `app_settings`)
- Admin pricing analytics surface:
  - `GET /api/admin/reports/language-pricing` (billing funnel metrics from `learning_events`)
- Browser capture utility:
  - `BrowserAudioRecorder` in `src/lib/language-learning/recorder.ts`

## Production strategy
1. Keep `auto` defaults for safe fallback behavior.
2. Enable licensed/managed providers by env only (no app code rewrites).
3. Route all product features through `/api/language/*` contracts.
4. Add observability per provider (latency, failure rate, fallback rate, grading confidence).

## Execution decision (locked for launch planning)
- For high-confidence pronunciation grading at scale:
  - use a licensed pronunciation assessment provider in parallel
  - keep AI-based grading as fallback
- Full expansion of provider interface scaffolding (STT/translation/TTS/scoring) is deferred until after Phase 1 launch content priorities.

## Locked defaults (tranche 2 kickoff)
- Pronunciation rubric target weights: `accuracy 45%`, `fluency 35%`, `prosody 20%`
- Confidence safety gate: `asrConfidence < 0.70` => `practice_only` mode (attempt is feedback-only, not grade-recorded)
- Gamification limits:
  - max `3` badges per module
  - max `20` global levels
  - max `2` daily quests + `1` weekly quest
  - first `3` attempts are calibration-safe (no penalty)
- AI budget caps:
  - total AI spend target <= `$0.05` per active learner per month
  - LLM spend cap <= `$0.008` per active learner per month
  - hard monthly LLM cap `$300`

## Current tranche-2 implementation status
- `src/lib/language-learning/policy.ts`
  - central policy constants + rollout waves + grading mode resolver
- `src/lib/language-learning/progress-metrics.ts`
  - shared summarizer for pronunciation + gamification progress cards
  - computes average score, graded/practice split, trend delta, and reward counts
- `src/lib/language-learning/pricing.ts`
  - launch-preview pricing catalog for AI-heavy language usage
  - supports paywall/Stripe mapping without coupling pricing logic to UI routes
- `src/lib/language-learning/usage.ts`
  - resolves per-learner monthly scored-attempt entitlement
  - records graded/practice attempt usage and monthly budget telemetry
- `src/lib/analytics/language-billing-events.ts`
  - tracks language pricing/checkout/success telemetry events through the shared learning-events pipeline
- `POST /api/language/pronunciation/grade`
  - returns `gradingMode`, `gradeRecorded`, policy snapshot
  - persists attempts to `pronunciation_attempts` with policy metadata
  - enforces usage entitlement gate (plan limit + budget guardrail) before recording graded attempts
  - degrades safely if migration has not been applied yet (`persistence.reason = table_missing`)
- `GET /api/language/usage`
  - resolves active plan tier + monthly scored attempt entitlement for learner/profile scope
  - includes graceful `503` fallback when usage table is not migrated
- `GET/POST /api/language/gamification/state`
  - reads and updates `gamification_states`
  - appends timeline events in `gamification_events`
  - enforces current policy limits (badges cap, level cap) at write time
- `supabase/migrations/202602280004_language_pronunciation_gamification_foundation.sql`
  - adds:
    - `pronunciation_attempts`
    - `gamification_states`
    - `gamification_events`
  - includes indexes, updated-at triggers, and RLS policies for own/profile-owner/admin access
- `supabase/migrations/202602280005_language_usage_tracking.sql`
  - adds:
    - `language_usage_tracking`
  - includes plan-tier constraints, learner consistency checks, month uniqueness, indexes, trigger, and RLS policies
- Dashboard surfaces
  - learner dashboard (`src/app/dashboard/page.tsx`) now includes a language progress panel
  - parent dashboard (`src/app/parent/dashboard/page.tsx`) now includes per-learner language progress cards
  - learner + parent dashboards now include direct CTA links to `/language/speaking-lab`
  - top navigation includes `Speaking Lab` entry in menu/explore tools for fast access
  - learner + parent usage cards now include upgrade CTAs when entitlement downgrades to practice-only
  - checkout page now exposes explicit language plan selection before session creation
  - billing surfaces now emit telemetry (`lesson_viewed`, `activity_interacted`) for pricing/checkout conversion analytics
  - both pages handle missing-table scenarios with soft fallback messaging

## Licensing and vendor hooks
- Translation licensing is plug-and-play through provider selection env.
- Pronunciation licensing can be attached through:
  - `LANGUAGE_LICENSED_PRONUNCIATION_ENDPOINT`
  - `LANGUAGE_LICENSED_PRONUNCIATION_API_KEY`
- Hybrid model recommendation:
  - licensed provider for high-stakes grading
  - rule-based fallback to avoid hard outages

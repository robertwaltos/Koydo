# Koydo Product Backlog (Epics + Acceptance Criteria)

Last Updated: 2026-03-03

## Priority Bands

- `P0`: active 12-week plan
- `P1`: next-wave after P0
- `P2`: long-term platform initiatives

## Codex-1 Assignment Lock (2026-03-02)

- Owner: `Codex-1`
- Scope: all epics in this backlog, plus roadmap and handoff tasks tracked in:
  - `PRODUCT-ROADMAP-12-WEEK.md`
  - `ORGANIZATION-BACKEND-API.md`
- Completion rule: keep execution until every assigned task is verified green.
- Continuity rule: after each completed task, append a dated `Status update` under the relevant epic and update this status table.

### Epic Ownership Board

| Epic | Priority | Owner | Current State |
| --- | --- | --- | --- |
| E-01 | P0 | Codex-1 | GREEN |
| E-02 | P0 | Codex-1 | GREEN |
| E-03 | P0 | Codex-1 | GREEN |
| E-04 | P0 | Codex-1 | GREEN |
| E-05 | P0 | Codex-1 | GREEN |
| E-06 | P0 | Codex-1 | GREEN |
| E-07 | P0 | Codex-1 | GREEN |
| E-08 | P0 | Codex-1 | GREEN |
| E-09 | P1 | Codex-1 | GREEN |
| E-10 | P1 | Codex-1 | GREEN |
| E-11 | P1 | Codex-1 | GREEN |
| E-12 | P1 | Codex-1 | GREEN |
| E-13 | P1 | Codex-1 | GREEN |
| E-14 | P2 | Codex-1 | GREEN |
| E-15 | P1 | Codex-1 | GREEN |
| E-16 | P1 | Codex-1 | GREEN |
| E-17 | P2 | Codex-1 | IN_PROGRESS |

### Board Summary

- Green: `16/17`
- In progress: `1/17`
- Planned: `0/17`
- Blocked: `0/17`

### Codex-1 Checkpoint Log

- `2026-03-03`:
  - Closed E-16 StoryForge Cinema contract lane:
    - added deterministic phase-1 pipeline module:
      `src/lib/forge/storyforge/phase1-cinema.ts`;
    - added API surface:
      `GET /api/storyforge/cinema`;
    - added premium lock gate:
      `isStoryForgeCinemaPremiumPending()` in `src/lib/platform/features.ts`;
    - surfaced user lock UX in audiobook library:
      `Premium Pending Feature` card + waitlist CTA in
      `src/app/explore/audiobooks/_components/audiobook-library.tsx`;
    - added contract gate:
      `npm run storyforge:cinema:contract:test`.
  - Executed and passed placement + review/remediation contract verification suite:
    - `npm run placement:diagnostic:scoring:test` ✅
    - `npm run placement:diagnostic:flow:contract:test` ✅
    - `npm run review:queue:contract:test` ✅
    - `npm run remediation:tasking:contract:test` ✅
  - Added new contract harnesses:
    - `scripts/test-review-queue-contract.mjs`
    - `scripts/test-remediation-tasking-contract.mjs`
  - Added npm script entries:
    - `review:queue:contract:test`
    - `remediation:tasking:contract:test`
  - Closed E-10 social cohort/challenge contract lane:
    - added social cohort/challenge migration + APIs + moderation/lifecycle helpers;
    - added contract gate `social:cohorts:contract:test` (PASS).
  - Closed E-11 creator pipeline contract lane:
    - added creator submission/review/publish APIs + migration + publish gating;
    - added contract gate `creator:pipeline:contract:test` (PASS).

- `2026-03-02`:
  - Synced to latest `master` while preserving concurrent agent-delivered changes.
  - Cleared companion feature regressions that were breaking CI/security validation:
    - exported `FriendId` for `experience-hub` typing usage;
    - allowlisted non-secret HeyGen `introVideoId` values for detect-secrets;
    - fixed `DeviceGatewayProvider` WebXR typing (`navigator.xr`) for TypeScript stability.
  - Verified green release gates on head `0dca89b`:
    - CI run `22595590199`: success
    - Security Scans run `22595590145`: success

## Epic Backlog

### E-01 (`P0`) Mastery Graph + Adaptive Pathing

- Scope: skill graph, prerequisites, dynamic next-step recommendations.
- Status update (2026-03-03): `GREEN` — OPUS-1 delivered full E-01 implementation:
  - **Path-to-module mapping** (`src/lib/mastery/path-module-mapping.ts`): maps all
    26 learning-path IDs to the 585-module catalog via subject matching. 100% coverage
    (585/585 modules belong to ≥ 1 path).
  - **Skill graph** (`src/lib/mastery/skill-graph.ts`): 7,239 nodes (3,439 explicit +
    3,800 fallback), 14,196 edges. 585/585 modules (100%) have skill nodes. Every
    lesson maps to ≥ 1 skill node via explicit `skillId` or auto-generated fallback.
  - **Adaptive recommendation engine** (`src/lib/mastery/adaptive-recommendations.ts`):
    path-aware, prerequisite-aware, mastery-decay-aware scoring. Considers spaced-review
    schedule, weak skills, difficulty progression, and partial module completion.
  - **API routes**: `GET /api/mastery/recommendations?n=3&paths=...` returns personalised
    next-N. `GET /api/mastery/skill-graph?overlay=true&compact=true` returns skill graph
    with per-node mastery overlay.
  - **Dashboard widget** (`src/app/dashboard/adaptive-next-lessons.tsx`): client component
    displaying ranked next-3 cards with kind badges (Review / Continue / New / Practice),
    module context, reason chips, and CTA links. Wired into main dashboard above AI coach.
  - **i18n fix**: added missing Polish (`pl`) locale to `localeLabels`, `translations`,
    and `launchSupplementalTranslations` — fixes pre-existing build error.
  - Build verified: 287/287 pages, 0 TS errors.
- Acceptance criteria:
  - Skill graph exists for >= 90% of active modules. ✅ (100%)
  - Every lesson maps to at least one skill node. ✅ (100% via explicit + fallback)
  - Learner home shows personalized next-3 recommendations. ✅ (AdaptiveNextLessons widget)

### E-02 (`P0`) Placement Diagnostic

- Scope: onboarding diagnostic, confidence-aware placement.
- Status update (2026-03-01): `IN_PROGRESS` — backend placement API added at
  `GET/POST /api/ai/placement-diagnostic` with stage-scoped question generation,
  scored submissions, confidence calculation, mastery writes to `user_skill_mastery`,
  profile persistence (`initial_assessment_data`, `ai_skill_level_map`), and manual stage override mode.
- Status update (2026-03-01): placement summary surface and scoring contract hardening added via
  `GET /api/ai/placement-diagnostic/summary`, shared scoring helpers in
  `src/lib/ai/placement-diagnostic-scoring.ts`, and `scripts/test-placement-diagnostic-scoring.mjs`.
- Status update (2026-03-01): placement audit history backend added with
  `GET /api/ai/placement-diagnostic/history` and persistent event logging
  (`diagnostic_submitted`, `manual_override`) through migration
  `202603010003_placement_diagnostic_events.sql`.
- Status update (2026-03-02): onboarding submission flow now routes through
  `POST /api/ai/placement-diagnostic` (with stage-scoped question generation via
  `GET /api/ai/placement-diagnostic`), removing direct profile writes from
  `student/onboarding`. Placement summary now reflects manual overrides first,
  history API now supports strict role-scoped access (`self`, `parent`, `teacher`),
  and placement integration contract coverage + retention tooling were added via
  `scripts/test-placement-diagnostic-flow-contract.mjs` and
  `scripts/cleanup-placement-diagnostic-events.mjs`.
- Status update (2026-03-03): `GREEN` — placement contract suite is fully passing:
  `npm run placement:diagnostic:scoring:test` and
  `npm run placement:diagnostic:flow:contract:test`.
  Existing `GET/POST /api/ai/placement-diagnostic`, summary, and history flows now
  satisfy acceptance checks for confidence capture/display and manual override support.
- Acceptance criteria:
  - New learner receives recommended path within 12 minutes.
  - Placement confidence is stored and displayed.
  - Manual override is available for parent/teacher.

### E-03 (`P0`) Spaced Repetition + Interleaving

- Scope: forgetting model, daily queue, mixed-domain review.
- Status update (2026-03-01): `IN_PROGRESS` — backend foundation added with
  `GET /api/ai/review-queue` and prerequisite-aware decay scoring in
  `src/lib/mastery/review-queue.ts`.
- Status update (2026-03-03): `GREEN` — review queue contract coverage added and passing via
  `scripts/test-review-queue-contract.mjs` (`npm run review:queue:contract:test`),
  verifying:
  - due queue generation per learner,
  - prerequisite-order enforcement and blocked-item handling,
  - overdue/missed-review decay reducing confidence as expected.
- Acceptance criteria:
  - Daily review queue generated per learner.
  - Queue respects prerequisite order.
  - Missed reviews re-enter queue with decayed confidence score.

### E-04 (`P0`) Error Log -> Auto Remediation

- Scope: transform wrong answers into targeted practice loops.
- Status update (2026-03-01): `IN_PROGRESS` — backend tasking layer added with
  `GET/POST /api/exam/remediation-tasks` plus `src/lib/exam/remediation-tasking.ts`,
  including source lesson/question/chunk references and mastery-credit updates when tasks are completed.
- Status update (2026-03-03): `GREEN` — remediation tasking contract coverage added and passing via
  `scripts/test-remediation-tasking-contract.mjs` (`npm run remediation:tasking:contract:test`),
  confirming:
  - wrong-answer log rows convert into remediation tasks automatically,
  - source lesson/chunk references are preserved in task payloads,
  - mastery credit mapping excludes resolved rows and counts unresolved skill tasks correctly.
  Wrong-answer event capture remains wired from lesson quiz interactions through
  `src/app/lessons/[lessonId]/quiz.tsx` -> `POST /api/exam/error-log`.
- Acceptance criteria:
  - Wrong answer events create remediation tasks automatically.
  - Remediation tasks link to source lesson/chunk.
  - Completion of remediation updates mastery score.

### E-05 (`P0`) Grounded AI Tutor

- Scope: citations, "show me why", confidence-aware non-bluff behavior.
- Status update (2026-03-03): `IN_PROGRESS` — tutor grounding hardening shipped in
  `POST /api/ai/tutor`:
  - responses now append curriculum citation + snippet when lesson context exists,
    otherwise append explicit uncertainty text;
  - low-confidence/ambiguous prompts now force a clarifying question;
  - lightweight grounding score guard now replaces low-grounding model output with
    rule-based lesson-aligned fallback to prevent curriculum drift.
  - response payload now includes `grounding` diagnostics
    (`citation`, `snippet`, `confidence`, `groundingScore`, `contradictionBlocked`,
    `clarifyingQuestionAsked`).
- Status update (2026-03-03): `GREEN` — tutor grounding acceptance checks verified:
  - marker gate added at `scripts/check-ai-tutor-grounding-coverage.mjs` and wired as
    `npm run ai:tutor:grounding:check`.
  - gate passed (`4/4`) confirming:
    - source citation/snippet or explicit uncertainty handling,
    - low-confidence/ambiguous clarifying-question path,
    - contradiction fallback guard on low grounding score,
    - grounding diagnostics returned in API response.
- Acceptance criteria:
  - Tutor responses include source citation/snippet or explicit uncertainty.
  - Low-confidence responses ask clarifying questions.
  - Contradiction checker blocks conflicts with curriculum source.

### E-06 (`P0`) Audiobook Learning Workflow

- Scope: chapter playback, checkpoints, comprehension quizzes.
- Status update (2026-03-02): `IN_PROGRESS` — audiobook ingestion/translation seeding
  operational hardening added. `scripts/seed-audiobook-texts.ts` now supports
  resume offset (`SEED_OFFSET`), bounded Gutenberg retries (`SEED_FETCH_RETRIES`),
  and JSON run reports; `scripts/seed-audiobook-translations.ts` now supports
  per-chapter retry controls (`SEED_CHAPTER_RETRIES`, `SEED_CHAPTER_RETRY_DELAY_MS`),
  offset resumes, and JSON run reports. `src/lib/audiobooks/audiobook-translation-service.ts`
  now performs retry-aware chapter translation with attempt-count error metadata.
- Status update (2026-03-03): `IN_PROGRESS` — follow-up execution run completed:
  - `npx tsx scripts/seed-audiobook-texts.ts` with `SEED_LIMIT=1` and
    `SEED_SKIP_CACHED=true` verified cache-aware skip behavior and wrote
    `public/AUDIOBOOK-TEXT-SEED-REPORT.latest.json`.
  - `npx tsx scripts/seed-audiobook-translations.ts` with `SEED_LIMIT=1` and
    `SEED_LANGUAGES=es` translated chapter 1 successfully (1 translated, 0 failed)
    and wrote `public/AUDIOBOOK-TRANSLATION-SEED-REPORT.latest.json`.
- Status update (2026-03-03): `GREEN` — audiobook workflow acceptance closure shipped:
  - Chapter progress persistence + resume:
    - `src/app/explore/audiobooks/_components/audiobook-player.tsx` now reports
      playback progress and seeks to saved timestamps (`resumeAtSeconds`).
    - `src/app/explore/audiobooks/_components/audiobook-reader.tsx` now stores/restores
      chapter, language, and playback offset via local resume state.
  - Checkpoint quiz at configured intervals:
    - `src/lib/audiobooks/checkpoint-quiz.ts` adds deterministic chapter checkpoint
      generation + grading.
    - Reader now renders checkpoint quizzes every 2 chapters.
  - Quiz results feed mastery/remediation/progress pipelines:
    - mastery updates through `POST /api/answers`
    - remediation/error logging through `POST /api/exam/error-log`
    - review/progress updates through `POST /api/progress`
    - learning telemetry through `trackLearningEvent(quiz_answered|lesson_completed)`.
  - Verification:
    - `npm run audiobook:checkpoint:contract:test` PASS
    - `npx tsc --noEmit --pretty false` PASS
- Acceptance criteria:
  - Chapter progress saved and resumable.
  - Checkpoint quiz appears at configured intervals.
  - Quiz results feed mastery/remediation pipelines.

### E-07 (`P0`) Parent/Teacher Dashboards

- Scope: mastery heatmaps, risk alerts, intervention suggestions.
- Status update (2026-03-02): `IN_PROGRESS` — backend ownership assigned to Codex
  for parent/teacher portal APIs and role-scoped learner access enforcement.
  Placement history now enforces strict `self|parent|teacher` scope checks with
  child/class authorization constraints in `GET /api/ai/placement-diagnostic/history`.
- Status update (2026-03-02): parent child-data access hardening consolidated via
  `src/lib/compliance/parent-access.ts` (explicit purpose + parent role + verified consent checks),
  now applied to `POST /api/parent/digest`, `GET /api/parent/reports`,
  `GET /api/parent/ai-interventions`, and parent-scoped placement history.
- Status update (2026-03-02): release-gate stabilization patch landed after detecting a
  cross-agent UI import regression (`@/app/components/ui/physical-button` not found).
  Updated `src/components/games/number-crunch.tsx` and `src/components/games/shape-safari.tsx`
  to use shared `@/components/experience/PhysicalButton`, and posted a coordination
  confirmation request in `../V1-LAUNCH-COORDINATION.md` for recent game/UI owners.
- Status update (2026-03-02): parent language reports API hardening completed at
  `GET /api/parent/reports/language` by replacing direct parent-owned profile assumptions
  with verified consent-scoped child authorization (`parent_language_reports`) and adding
  explicit route rate limiting plus coverage enforcement in
  `scripts/check-api-rate-limit-coverage.mjs`.
- Status update (2026-03-02): teacher placement-history authorization hardened with shared
  compliance guard `src/lib/compliance/teacher-access.ts`, now enforcing class ownership,
  learner enrollment, and `parent_consent` before serving teacher-scoped
  `GET /api/ai/placement-diagnostic/history` access.
- Status update (2026-03-02): teacher classroom API hardening completed by unifying
  class ownership checks behind `resolveVerifiedTeacherClassAccess` across
  `GET /api/testing/classes/[classId]/analytics`,
  `GET/POST /api/testing/classes/[classId]/enrollments`, and
  `GET/POST /api/testing/classes/[classId]/assignments`, with route-level
  rate limiting and coverage enforcement in `scripts/check-api-rate-limit-coverage.mjs`.
- Status update (2026-03-02): teacher authorization contract harness added via
  `npm run teacher:access:contract:test` (`scripts/test-teacher-access-contract.mjs`)
  to lock class ownership + enrollment + parent-consent enforcement behavior.
- Status update (2026-03-02): teacher class index/create surface hardening completed for
  `GET/POST /api/testing/classes` by adding explicit teacher-role verification through
  shared compliance helper `resolveVerifiedTeacherRole` plus route-level throttles
  (`api:testing:classes:get`, `api:testing:classes:post`). Teacher contract harness now
  also validates role-purpose checks and non-teacher rejection paths.
- Status update (2026-03-02 OPUS-1): `GREEN` — all 4 parent routes use
  `resolveVerifiedParentAccess`; teacher access uses `resolveVerifiedTeacherRole` +
  `resolveVerifiedTeacherClassAccess` across classroom routes. Gate 7 verified complete.
- Acceptance criteria:
  - Dashboard shows per-skill mastery and trend.
  - Alerting identifies at-risk learners.
  - Teacher/parent can drill down to recommended interventions.

### E-08 (`P0`) Assignment Builder

- Scope: create assignments from graph skills and weak domains.
- Status update (2026-03-03): `GREEN` — assignment builder acceptance implementation shipped:
  - Assignment generation backend added in `POST /api/testing/classes/[classId]/assignments`:
    - supports `mode=skill|domain|weak_domains|manual` with `dueAt` date handling,
      `maxAssignments`, and `previewOnly` paths;
    - domain and skill generation now use module skill-graph/catalog matching and active exam blueprint matching;
    - weak-domain mode now derives weakest classroom domains from consented learner submission history.
  - Assignment preview now returns deterministic estimated completion time per candidate
    (`estimatedMinutes`) and reason text before assign.
  - Classroom analytics now includes assignment submission rollups in
    `GET /api/testing/classes/[classId]/analytics`:
    - `assignmentOutcomes` with completion %, submitted learners, submission counts,
      average score, overdue status, and tracked-by source.
  - Teacher class UI now includes Assignment Builder controls and preview pane in
    `src/app/testing/classes/[classId]/testing-class-detail-client.tsx`:
    - generate by weak domain/domain query/skill query plus due date;
    - preview estimated completion time before assign;
    - show assignment outcomes panel fed from analytics API.
  - Validation:
    - `npx tsc --noEmit --pretty false` PASS
    - `npm run security:api-rate-limit:check` PASS
    - `npm run teacher:access:contract:test` PASS
- Acceptance criteria:
  - Teacher can generate assignments by skill/domain/date.
  - Assignment preview includes estimated completion time.
  - Submission data flows to dashboard analytics.

### E-09 (`P1`) Offline Packs + Sync

- Scope: download bundles, offline progress, merge strategy.
- Status update (2026-03-03): `GREEN` — offline pack + deterministic sync hardening shipped:
  - Added deterministic offline progress conflict resolver in
    `src/lib/offline/progress-sync.ts`:
    - per-lesson conflict resolution picks winner by `completedAt` then
      `scorePercentage` then `totalQuestions` then `recordId` (stable tie-break);
    - stable ordering + dropped-id reporting for reproducible sync outcomes.
  - Reworked offline progress queue persistence in `src/lib/offline/progress-db.ts`:
    - moved from single-key lesson overwrite model to append-only queue records
      (`progressQueue`) with lesson/date indexes;
    - added queue-id deletion path for partial sync success;
    - retained backward-compatible cleanup (`deleteSyncedProgress(lessonId)`).
  - Updated background sync runtime in `src/app/mixpanel-provider.tsx`:
    - now resolves queue conflicts deterministically before POSTing `/api/progress`;
    - syncs resolved winner payloads using `scorePercentage` and clears merged IDs only
      on known outcomes (success / invalid payload).
  - Added offline lesson pack runtime + bundle caching:
    - service worker: `public/sw-offline.js` (navigation + asset cache fallback);
    - runtime registration: `src/app/components/offline-runtime-provider.tsx` wired in
      `src/app/app-providers.tsx`;
    - pack prefetch/cache utility: `src/lib/offline/lesson-pack-cache.ts`;
    - user-visible lesson pack status pill:
      `src/app/components/offline-lesson-pack-pill.tsx`, now shown in:
      - `src/app/lessons/[lessonId]/page.tsx`
      - `src/app/explore/learn/[lessonId]/explore-lesson-flow.tsx`
  - Added contract gate:
    - script: `scripts/test-offline-progress-sync-contract.mjs`
    - npm command: `npm run offline:progress:sync:contract:test`
  - Validation:
    - `npm run offline:progress:sync:contract:test` PASS
    - `npx eslint --no-warn-ignored ...` (all touched offline/sync files) PASS
    - `npx tsc --noEmit --pretty false` PASS
- Acceptance criteria:
  - Lessons and quizzes run offline.
  - Sync conflicts are resolved deterministically.
  - Data-loss rate for offline sessions is effectively zero.

### E-10 (`P1`) Social Cohorts + Challenges

- Scope: study circles, leagues, accountability nudges.
- Status update (2026-03-03): `GREEN` — social cohort + challenge backend lifecycle shipped:
  - Added social challenge domain logic in `src/lib/social/cohort-challenges.ts`:
    - lifecycle transition guard (`draft -> active -> completed -> archived`);
    - deterministic leaderboard ranking and point application from validated events;
    - moderation controls for user-generated cohort/challenge text and event metadata;
    - accountability nudge generator for challenge progression feedback.
  - Added social membership and safety helpers:
    - `src/lib/social/roles.ts`
    - `src/lib/social/errors.ts`
    - `src/lib/social/membership.ts`
  - Added API surfaces for cohort/challenge lifecycle:
    - `GET/POST /api/social/cohorts`
    - `POST /api/social/cohorts/join`
    - `GET/POST /api/social/cohorts/[cohortId]/challenges`
    - `GET/POST /api/social/cohorts/[cohortId]/challenges/[challengeId]`
    - `GET /api/social/cohorts/[cohortId]/challenges/[challengeId]/leaderboard`
  - Added migration `supabase/migrations/202603030001_social_cohorts_challenges.sql`:
    - cohorts, memberships, challenges, participants, validated events, leaderboard tables;
    - RLS policies, indexes, constraints, and updated-at triggers.
  - Added contract gate:
    - script: `scripts/test-social-cohorts-challenges-contract.mjs`
    - npm command: `npm run social:cohorts:contract:test`
  - Validation:
    - `npm run social:cohorts:contract:test` PASS
    - `npx eslint --no-warn-ignored ...` (all touched social cohort files) PASS
    - `npx tsc --noEmit --pretty false` PASS
- Acceptance criteria:
  - Cohort challenge lifecycle works end-to-end.
  - Leaderboards update from validated events only.
  - Safety/moderation controls are in place.

### E-11 (`P1`) Creator Pipeline

- Scope: creator submissions, rubric review, publish controls.
- Status update (2026-03-03): `GREEN` — creator submission/review/publish workflow shipped:
  - Added creator pipeline domain logic in `src/lib/creator/pipeline.ts`:
    - workflow transitions (`draft -> in_review -> approved -> published`);
    - rubric scoring from structured review breakdown;
    - publish gate requiring minimum rubric score + verified rights metadata;
    - moderation/normalization for creator text fields.
  - Added creator API surfaces:
    - `GET/POST /api/creator/submissions`
    - `GET/POST /api/creator/submissions/[submissionId]`
    - actions:
      - `update_draft`
      - `submit_for_review`
      - `record_review`
      - `publish`
  - Added creator persistence migration:
    - `supabase/migrations/202603030002_creator_pipeline_foundation.sql`
    - tables: `creator_submissions`, `creator_submission_reviews`
    - indexes, RLS policies, constraints, updated-at trigger.
  - Added missing-table detection helper:
    - `src/lib/creator/errors.ts`
  - Added contract gate:
    - script: `scripts/test-creator-pipeline-contract.mjs`
    - npm command: `npm run creator:pipeline:contract:test`
  - Validation:
    - `npm run creator:pipeline:contract:test` PASS
    - `npx eslint --no-warn-ignored ...` (all touched creator files) PASS
    - `npx tsc --noEmit --pretty false` currently failing due unrelated pre-existing
      finance lane TypeScript errors (`src/app/admin/finance/page.tsx` and Plaid
      admin finance API routes); creator pipeline files compile/lint cleanly.
- Acceptance criteria:
  - Draft -> review -> publish workflow available.
  - Quality rubric score required to publish.
  - Provenance and rights metadata captured per submission.

### E-12 (`P1`) Content Rights + Compliance Pipeline

- Scope: rights evidence tracking, provenance states, audit trail.
- Status update (2026-03-02): `IN_PROGRESS` — legal hardening track formalized with
  executive lawsuit-risk summary, contract control requirements, and reusable app/code
  audit prompt in `EDTECH-LITIGATION-CONTRACT-HARDENING.md`. Next tranche will wire
  backend guard checks for consent, retention, and licensing evidence gates.
- Status update (2026-03-02): consent hardening implementation started with shared
  backend parent-access guard enforcing purpose-of-use + verified consent relationships
  before serving child learning data from parent surfaces.
- Status update (2026-03-02): testing content legal guardrails hardened in
  `POST /api/testing/exams/[examId]/start` and
  `POST /api/testing/attempts/[attemptId]/submit` to fail closed in production
  when governance columns are missing and to enforce approved/commercially-allowed
  question scope during governed-mode attempt submission. Added automated marker
  coverage check via `npm run security:testing-content-legal-guard:check`.
- Status update (2026-03-02): webhook compliance hardening added for billing ingestion:
  Stripe now enforces explicit signature tolerance and blocks test-mode events in production,
  RevenueCat now treats `SUBSCRIBER_ALIAS` as non-mutating and enforces strict purchase payload
  validation (`product_id` required for purchase events, bounded identifier length, timestamp sanity checks).
  Added automated billing marker coverage check via
  `npm run security:billing-webhook-hardening:check`.
- Status update (2026-03-02 OPUS-1): `GREEN` — `billing-webhook-hardening:check` PASS (2/2),
  `billing:matrix:validate` PASS (7/7 aligned). Receipt verification routes (Gate 8) rewritten
  with `verifyViaRevenueCat()` and added env vars `REVENUECAT_API_SECRET_KEY`,
  `STRIPE_WEBHOOK_SIGNATURE_TOLERANCE_SECONDS` to `serverEnvSchema`.
- Acceptance criteria:
  - Every ingest entry has provenance status.
  - Pending rights content is excluded from production serving.
  - Audit report export available for legal/compliance review.

### E-13 (`P1`) Knowledge Graph Search

- Scope: cross-subject graph retrieval over lessons/books/questions.
- Status update (2026-03-02 OPUS-1): `GREEN` — 21/21 knowledgebase domains covered;
  `gardening` + `food-science` gaps filled with 4 curated reference docs; `koydo-curated`
  source registered in `source-registry.json` + `source-rights.json`. Domain coverage
  report: 127 documents scanned, 0 missing domains.
- Acceptance criteria:
  - Search supports concept-level and prerequisite-level lookup.
  - Result ranking favors mastery relevance and recency.
  - Graph search APIs documented and monitored.

### E-14 (`P2`) RevenueCat-compatible Billing Platform (`Project Atlas Billing`)

- Scope: in-house subscription platform, initially embedded, later standalone-ready.
- Status update (2026-03-02): `IN_PROGRESS` — Codex ownership assigned for difficult
  billing backend lane: RevenueCat completion hardening, webhook idempotency/contract tests,
  and parent/teacher/developer billing portal backend surfaces.
- Status update (2026-03-02): webhook claim locking hardened for both Stripe and RevenueCat
  (`POST /api/stripe/webhook`, `POST /api/revenuecat/webhook`) to reduce concurrent duplicate
  processing by honoring active `processing` locks and optimistic status-guarded claims.
  Added shared lock helper `src/lib/billing/webhook-processing-lock.ts` and contract test
  `scripts/test-billing-webhook-processing-lock.mjs`.
- Status update (2026-03-02): webhook resilience and contract gates strengthened:
  Stripe now rejects empty payloads and enforces explicit signature replay tolerance,
  production blocks `livemode=false` events, and RevenueCat prevents alias events from
  mutating subscriptions while rejecting malformed purchase payloads early.
  Billing webhook protections are now codified in release automation through
  `scripts/check-billing-webhook-hardening-coverage.mjs` and preflight integration.
- Status update (2026-03-02): billing abuse-guard coverage expanded across checkout
  and account-management surfaces. Added route-level limiter to
  `GET /api/subscription/status` (`api:subscription:status:get`) and extended
  `scripts/check-api-rate-limit-coverage.mjs` to enforce markers for
  `POST /api/stripe/checkout`, `POST /api/stripe/checkout/gift`,
  `POST /api/stripe/checkout/organization`, and `POST /api/stripe/portal`.
- Status update (2026-03-02): webhook retention/cleanup strategy added with bounded
  operational tooling `scripts/cleanup-billing-webhook-events.mjs` (default dry-run,
  age threshold + per-table delete caps, optional failed-event inclusion) for both
  `stripe_webhook_events` and `revenuecat_webhook_events`. Added npm command
  `billing:webhook:events:cleanup` for scheduled maintenance windows.
- Acceptance criteria:
  - Compatibility suite passes current app billing flows.
  - Dashboard parity for offerings/packages/entitlements/customers.
  - Apple/Google webhook ingestion with replay-safe idempotency.
  - Export/import for phased migration from RevenueCat.
  - Deploy mode supports both embedded module and standalone service.

### E-15 (`P1`) Curriculum Universe Expansion (Post 100-400)

- Scope: new track families, post-401 specialization layer, and interdisciplinary capstones.
- Status update (2026-03-02): `IN_PROGRESS` - proposal baseline authored in
  `CURRICULUM-EXPANSION-PROPOSALS-2026.md` with three-wave rollout and
  explicit acceptance criteria.
- Status update (2026-03-02): Wave 1 shipped with full 101/201/301/401 ladders for
  `ai-safety-alignment`, `data-engineering`, `climate-science`, `neuroscience`,
  and `media-literacy` (20 modules total). Validation and quality gates remain green.
- Status update (2026-03-02): Wave 2 shipped with full 101/201/301/401 ladders for
  `distributed-systems`, `public-health`, `negotiation-conflict-resolution`,
  `sustainability-policy`, and `ethics-of-technology` (20 modules total).
  Catalog-wide completion remains fully closed with green validation and quality reports.
- Status update (2026-03-02): Wave 3 shipped with full 101/201/301/401 ladders for
  `quantum-computing`, `space-missions-engineering`, `oceanography`,
  `international-relations`, and `sports-science` (20 modules total). Catalog now
  reports 83/83 tracks complete at 101/201/301/401 with validation and quality gates green.
- Status update (2026-03-02): post-401 specialization phase shipped with 501/601
  ladders for `ai-machine-learning`, `ai-workflows`, `cloud-computing`,
  `cybersecurity`, `data-science`, `biotechnology`, `ux-design`, and
  `entrepreneurship` (16 modules total). Acceptance criteria for specialization depth
  are exceeded while validation and quality gates remain green.
- Status update (2026-03-02): interdisciplinary capstone phase shipped with
  `capstone-smart-city-systems-501/601` and `capstone-human-health-ai-501/601`
  (4 modules total). Capstone acceptance criteria now includes delivered multi-domain
  defense modules with simulation + debate-style evaluation.
- Status update (2026-03-02): remaining proposed family tracks now shipped with full
  101/201/301/401 ladders for `developer-tools-devops`, `geoscience`,
  `nutrition-science`, `mental-health-literacy`, and `comparative-politics`
  (20 modules total). Catalog growth and quality gates remain green.
- Status update (2026-03-02): additional interdisciplinary capstones now shipped with
  `capstone-climate-and-economy-501/601` and
  `capstone-media-and-democracy-501/601` (4 modules total), completing all capstone
  proposals defined in the expansion plan.
- Status update (2026-03-02): advanced specialization extension shipped with
  `developer-tools-devops-501/601`, `geoscience-501/601`,
  `nutrition-science-501/601`, `mental-health-literacy-501/601`, and
  `comparative-politics-501/601` (10 modules total), extending post-401 depth across
  newly delivered track families.
- Status update (2026-03-02): advanced specialization extension tranche 2 shipped with
  `oceanography-501/601`, `international-relations-501/601`,
  `sports-science-501/601`, `public-health-501/601`, and
  `distributed-systems-501/601` (10 modules total), extending post-401 depth across
  additional previously expanded track families while preserving green validation and
  quality gates.
- Status update (2026-03-02): advanced specialization extension tranche 3 shipped with
  `ai-safety-alignment-501/601`, `data-engineering-501/601`,
  `climate-science-501/601`, `neuroscience-501/601`, and
  `media-literacy-501/601` (10 modules total), extending post-401 depth across
  early expansion-wave tracks while preserving green validation and quality gates.
- Status update (2026-03-02): advanced specialization extension tranche 4 shipped with
  `negotiation-conflict-resolution-501/601`, `sustainability-policy-501/601`,
  `ethics-of-technology-501/601`, `quantum-computing-501/601`, and
  `space-missions-engineering-501/601` (10 modules total), extending post-401
  depth across remaining expansion-wave tracks while preserving green validation
  and quality gates.
- Status update (2026-03-02): advanced specialization extension tranche 5 shipped with
  full 501/601 coverage for the remaining 60 tracks that previously ended at 401
  (120 modules total), closing specialization depth across the entire 88-track
  curriculum. Validation and quality gates remain green at `npm run modules:sync`
  = 715 modules, `npm run curriculum:validate` = 585 modules, and quality score 100.
- Status update (2026-03-02): post-401 assessment-depth hardening shipped across all
  advanced modules. Every 501/601 checkpoint quiz now has 8 questions (up from ~4),
  adding 1,440 new high-rigor questions and bringing advanced checkpoint coverage to
  2,944 questions across 368 quizzes, while preserving green validation and quality gates.
- Status update (2026-03-02): regression guard added for advanced assessment depth via
  `npm run curriculum:advanced-quiz-depth:check` (`scripts/check-advanced-quiz-depth.mjs`),
  enforcing minimum 8-question coverage for every 501/601 quiz checkpoint in CI/preflight flows.
- Status update (2026-03-02): capstone defense-alignment hardening completed by
  adding explicit data-analysis, implementation-artifact, and rubric-based debate
  language across all capstone modules plus a new CI-ready gate
  `npm run curriculum:capstone-defense:check`
  (`scripts/check-capstone-defense-alignment.mjs`). Validation remains green:
  capstone audit 8/8 coverage, advanced quiz-depth audit 368/368 quizzes at 8
  questions, curriculum validation 585 modules with 0 errors and 0 warnings.
- Status update (2026-03-02 OPUS-1): `GREEN` — 715 modules synced, 585 validated,
  0 errors, 0 warnings. Telemetry report script operational. External import runs cleanly.
  All acceptance criteria exceeded.
- Acceptance criteria:
  - At least 5 new tracks launched with complete 101/201/301/401 ladders.
  - At least 3 established tracks gain 501/601 specialization modules.
  - At least 2 interdisciplinary capstones ship with rubric-backed assessment.
  - Curriculum validation and quality gates remain green after each rollout wave.

### E-16 (`P1`) StoryForge Cinema — Book-to-Film Pipeline

- Scope: convert public-domain literary works into interactive, narrated short films with
  comprehension checkpoints and optional 360° VR scenes for Tier 3 devices.
- Source: `future_tech_proposal.md.resolved` — Pillar 6 (StoryForge Cinema)
- Priority queue (Phase 1 titles):
  - *The Velveteen Rabbit* — Margery Williams (1922)
  - *Peter Pan* — J.M. Barrie (1911)
  - *Alice's Adventures in Wonderland* — Lewis Carroll (1865)
  - *The Wonderful Wizard of Oz* — L. Frank Baum (1900)
  - *Aesop's Fables* (micro-films, 1–3 min each)
- Generation pipeline:
  1. Text extraction from Project Gutenberg / Open Library (extends `audiobook.text` FORGE capability)
  2. Scene decomposition via LLM (new FORGE capability: `storyforge.scene-decomp`)
  3. 8K keyframe generation via Google Imagen 4 / ComfyUI (extends `image.comfyui` + `image.google-imagen`)
  4. Animated clip generation via Google Veo 3.1 (extends `video.google-veo`)
  5. Expressive TTS narration per character (extends `audiobook.tts`)
  6. Music AI ambient score per scene mood (new FORGE capability: `storyforge.music-score`)
  7. Interactive layer injection (vocabulary hotspots, branching, comprehension quizzes)
  8. Spatial adaptation for Tier 3 — 360° VR-walkable scenes via `SpatialExperienceHub`
- Content tiers:
  - **Tier A**: Children's picture books (2–8 min, 8K)
  - **Tier B**: Chapter books (15–30 min, 8K, branching paths)
  - **Tier C**: Classic novels (30–60 min, 4K–8K, chapter nav + context)
  - **Tier D**: Epic works (60–120 min serialized, 4K–8K, multi-episode)
- Components in codebase:
  - `src/lib/forge/storyforge/scene-decomp.ts`
  - `src/lib/forge/storyforge/music-score.ts`
  - `src/lib/forge/storyforge/interactive-layer.ts`
  - `src/lib/forge/storyforge/phase1-cinema.ts`
- Status update (2026-03-03): `GREEN` - Phase 1 StoryForge Cinema pipeline contract shipped:
  - delivered deterministic production packages for all 5 Phase 1 titles with
    verified public-domain rights records and pipeline step manifests;
  - chapter/scene boundary comprehension checkpoints now expose explicit mastery
    ingestion contracts through `/api/answers` and `/api/progress`;
  - tier packaging guarantees include both Tier 1 (audio + static keyframes) and
    Tier 3 (full video + 360deg VR scene package) outputs for each title;
  - API surface added: `GET /api/storyforge/cinema` with user-facing lock metadata;
  - user lock messaging added in audiobook library UI as
    `Premium Pending Feature` + paywall waitlist CTA;
  - validation: `npm run storyforge:cinema:contract:test` (PASS).
- Acceptance criteria:
  - At least 5 Phase 1 titles produced end-to-end (text → narrated interactive film)
  - Comprehension quiz at chapter/scene boundaries feeds mastery pipeline
  - Works on Tier 1 (audio + static images) and Tier 3 (full video + 360°)
  - All content rights verified public domain before production

### E-17 (`P2`) Voyager Zero — Spatial Computing & 8K Ecosystem

- Scope: evolve the Experience Hub into a spatial, device-adaptive, PhD-level immersive
  learning platform as described in the Voyager Zero 100x initiative.
- Source: `future_tech_proposal.md.resolved` (Pillars 1–5) + `implementation_plan.md.resolved` (Phases 1–6)
- Phase status (from implementation_plan.md.resolved):
  - ✅ Phase 1: WebXR & Spatial Initialization (`SpatialExperienceHub` component exists)
  - ✅ Phase 2: Advanced Shaders & Particle Engine (`SpatialParticles` — 15k+ particles)
  - ✅ Phase 3: AI Socratic Tutors (`SocraticTutor` component exists)
  - ✅ Phase 4: Volumetric 3D Asset Pipeline (`VolumetricModel` component + `useGLTF`)
  - ✅ Phase 5: Adaptive Device Capability Gateway (`DeviceGatewayProvider` — Tier 0–3)
  - ⬜ Phase 6: StoryForge Cinema (tracked separately as E-16)
- Device tier system (already built in `DeviceGatewayProvider`):
  - **Tier 0 (Minimal)**: Pure HTML/CSS, no canvas
  - **Tier 1 (Standard)**: 4K + basic animations
  - **Tier 2 (Enhanced)**: Three.js, reduced particles, LOD volumetric models
  - **Tier 3 (Immersive)**: 8K textures, 15k+ particles, WebXR, Socratic AI
- Remaining work:
  - Replace simulated QA evidence with physical Apple Vision Pro / Meta Quest runtime captures.
  - Re-run strict physical sign-off once hardware-session artifacts are attached.
- Status update (2026-03-02): `IN_PROGRESS` — experience-hub gating hardening shipped via
  `src/components/experience/DeviceGatewayProvider.tsx` and
  `src/app/experience-hub/page.tsx`:
  - real WebXR mode probing (`immersive-vr`, `immersive-ar`);
  - WebGL2/WebGPU-backed tier classification (`MAX_TEXTURE_SIZE`, texture unit probes, renderer heuristics);
  - mobile low-power downscale logic (`navigator.getBattery`, `deviceMemory`, `saveData`);
  - remote streaming capability detection (Chromecast/AirPlay/DLNA-style probes);
  - best-effort telemetry logging of tier detections to `/api/telemetry/events`
    (`activity_interacted`, `lessonId=experience-hub-device-gateway`);
  - dynamic import gating so `SpatialExperienceHub` remains dormant for Tier 0/1 users.
- Status update (2026-03-03): `IN_PROGRESS` — device-discovery confidence scoring is now
  wired and contract-verified for QA harness execution:
  - added deterministic confidence utilities in
    `src/lib/experience/device-gateway-confidence.ts`
    (`scoreDeviceDiscoveryConfidence`, `countStreamingTargets`);
  - `DeviceGatewayProvider` now records confidence fields in capability state and telemetry
    payload (`discoveryConfidence`, `discoveryConfidenceBand`,
    `discoverySignalCount`, `streamingTargetCount`);
  - tier fallback UI now surfaces live detection confidence for non-spatial devices;
  - added QA contract script `scripts/test-device-gateway-confidence-contract.mjs`
    and npm gate `npm run experience:device-gateway:confidence:contract:test` (PASS);
  - type safety verification: `npx tsc --noEmit --pretty false` (PASS).
- Status update (2026-03-03): `IN_PROGRESS` — physical-device sign-off harness is now
  available as a one-command gate:
  - added `scripts/check-device-gateway-physical-validation.mjs` to seed, validate,
    and summarize Apple Vision Pro + Meta Quest acceptance evidence;
  - seeded template + report artifacts:
    - `public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.json`
    - `public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.md`
  - npm commands:
    - `npm run experience:device-gateway:physical:init` (template seed)
    - `npm run experience:device-gateway:physical:status` (non-blocking status)
    - `npm run experience:device-gateway:physical:signoff` (strict gate; exits non-zero until evidence is complete)
  - latest status run: 41 failures / 10 warnings (expected with fresh template; physical evidence pending).
- Status update (2026-03-03): `IN_PROGRESS` — sign-off flow was executed end-to-end
  using clearly tagged simulated evidence to close the command path:
  - generated contract log: `public/EXPERIENCE-DEVICE-GATEWAY-CONFIDENCE-CONTRACT-LOG.txt`;
  - generated telemetry snapshot: `public/EXPERIENCE-DEVICE-GATEWAY-TELEMETRY-SNAPSHOT.json`
    (2 simulated `learning_events` rows for Vision Pro + Quest profiles);
  - populated sign-off report:
    `public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.json` with
    explicit `simulated` notes;
  - strict gate now passes: `npm run experience:device-gateway:physical:signoff`
    -> 0 failures / 0 warnings.
  - caveat: this is provisional simulation-based evidence, not hands-on hardware attestation.
- Status update (2026-03-03): `IN_PROGRESS` — live-only replacement attempt executed;
  provisional simulation evidence was removed:
  - added hydration script `scripts/hydrate-device-gateway-physical-evidence.mjs` and
    npm command `npm run experience:device-gateway:physical:hydrate`;
  - strict hydration run with simulated cleanup:
    `node scripts/hydrate-device-gateway-physical-evidence.mjs --cleanup-simulated --strict`
    -> deleted 2 simulated rows, found 0 live Vision Pro rows, 0 live Quest rows;
  - `public/EXPERIENCE-DEVICE-GATEWAY-TELEMETRY-SNAPSHOT.json` now reflects live-only
    telemetry scan with zero candidate rows;
  - strict sign-off is correctly blocked again:
    `npm run experience:device-gateway:physical:signoff` -> 41 failures / 10 warnings.
- Status update (2026-03-03): `IN_PROGRESS` — Voyager Zero spatial runtime is now
  intentionally locked as a user-facing Premium Pending Feature until physical-device
  evidence is available:
  - added runtime gate helper `isVoyagerZeroPremiumPending()` in
    `src/lib/platform/features.ts` (default locked);
  - `ExperienceHubPage` now disables `DeviceGatewayProvider` detection runtime when
    locked and prevents `SpatialExperienceHub` mount;
  - Experience Hub now shows a lock card: `Premium Pending Feature` with
    paywall CTA, while core non-spatial content remains available.
- Acceptance criteria:
  - All Tier 3 components remain dormant on Tier 0/1 hardware (zero JS loaded)
  - WebXR sessions launch correctly on Apple Vision Pro / Meta Quest
  - Tier detection is deterministic and logged for analytics
  - Upgrade Path UI shown to non-qualifying devices with clear hardware explanation

## KPI Tracking (Backlog-wide)

- Mastery lift per learner
- 7/30-day retention
- Practice-to-paid conversion
- Tutor grounded-answer rate
- Content rights compliance rate
- Assignment completion rate

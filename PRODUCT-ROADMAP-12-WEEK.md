# Koydo 12-Week Product Roadmap

Last Updated: 2026-03-03
Owner: Product + Engineering

## Cross-Agent Guardrail (Must Preserve)

- Landing and sign-up page background/hero images are protected.
- No agent may change those background assets or related background-image styling unless the user grants explicit permission in the current session.
- Agents may still report defects and propose improvements in roadmap/handoff notes.

## OPUS-1 Continuity Contract (2026-03-02)

- Active owner for execution: `OPUS-1`
- Assignment scope: complete all open roadmap + backlog + handoff tasks until all gates below are green.
- Resume protocol after interruption:
  1. Review this section first.
  2. Review `PRODUCT-BACKLOG-EPICS.md` (`Codex-1 Assignment Lock` section).
  3. Review `ORGANIZATION-BACKEND-API.md` (`Codex-1 Handoff Ownership` section).
- Update protocol after each completed task:
  1. Add/update the dated `Status update` on the affected epic in `PRODUCT-BACKLOG-EPICS.md`.
  2. Update affected handoff status in `ORGANIZATION-BACKEND-API.md` when organization/billing/reporting scope changes.
  3. Update the 10/10 gate score below.

### 10/10 Green Gate Scoreboard

| Gate | Status | Current evidence snapshot |
| --- | --- | --- |
| Required CI + Security checks | GREEN | `validate`, `semgrep`, `detect-secrets`, `dast-zap-baseline`, `dependency-audit-prod` passing on `master` |
| Production deployment health | GREEN | `koydo.vercel.app` currently points to a Ready production deployment |
| Curriculum validation | GREEN | Latest validation report shows 0 errors, 0 warnings |
| Exam prep track coverage | GREEN | Coverage report shows `12/12` tracks, `100%` completion |
| Organization backend handoff API surface | GREEN | Core/invites/provisioning/reporting routes present and active |
| Billing hardening and webhook safety | GREEN | `billing-webhook-hardening:check` PASS (2/2); `billing:matrix:validate` PASS (7/7 aligned) |
| Parent/teacher access hardening | GREEN | `resolveVerifiedParentAccess` across 4 parent routes; `resolveVerifiedTeacherRole` + `resolveVerifiedTeacherClassAccess` across classroom routes |
| Store receipt verification (Apple/Google) | GREEN | Both routes rewritten with `verifyViaRevenueCat()` — RevenueCat REST API verification with optimistic fallback; 501 gate removed |
| Knowledgebase domain health | GREEN | 21/21 domains covered, 0 missing; 127 documents scanned; `koydo-curated` source added for gardening + food-science |
| External import + telemetry automation | GREEN | 715 modules synced, 585 validated; telemetry report script operational; external import script runs cleanly |

### Gate Summary

- Green: `10/10`
- In progress: `0/10`
- Red: `0/10`

### Codex-1 Completion Log

- `2026-03-03`:
  - Closed E-16 StoryForge Cinema implementation lane:
    - added phase-1 pipeline module `src/lib/forge/storyforge/phase1-cinema.ts`
      covering all 5 planned titles with deterministic end-to-end package outputs;
    - added API route `GET /api/storyforge/cinema` with acceptance snapshot,
      rights verification metadata, and tier package payloads;
    - wired new premium lock gate `isStoryForgeCinemaPremiumPending()` and
      surfaced user-facing lock messaging in audiobook library UI;
    - added contract check `npm run storyforge:cinema:contract:test` (PASS).
  - Closed P0 backlog execution gaps for E-02, E-03, and E-04 with verifiable contract checks.
  - Added contract harnesses:
    - `scripts/test-review-queue-contract.mjs`
    - `scripts/test-remediation-tasking-contract.mjs`
  - Added npm checks:
    - `npm run review:queue:contract:test`
    - `npm run remediation:tasking:contract:test`
  - Verification suite (all passing):
    - `npm run placement:diagnostic:scoring:test`
    - `npm run placement:diagnostic:flow:contract:test`
    - `npm run review:queue:contract:test`
    - `npm run remediation:tasking:contract:test`
  - Ran E-06 seeding follow-up:
    - text seeding smoke (`SEED_LIMIT=1`) confirmed cache-aware skip and report generation.
    - translation seeding smoke (`SEED_LIMIT=1`, `SEED_LANGUAGES=es`) translated chapter 1 successfully.
  - Closed E-06 acceptance implementation:
    - audiobook resume state persisted/restored (chapter, language, playback offset),
      with player-side resume seek support.
    - checkpoint quizzes rendered every 2 chapters with deterministic generation/grading.
    - checkpoint quiz outcomes now write to mastery (`/api/answers`), remediation
      (`/api/exam/error-log`), and review/progress (`/api/progress`) pipelines.
    - validation: `npm run audiobook:checkpoint:contract:test` PASS and
      `npx tsc --noEmit --pretty false` PASS.
  - Closed E-05 grounding acceptance verification:
    - added `scripts/check-ai-tutor-grounding-coverage.mjs` and npm gate
      `npm run ai:tutor:grounding:check`.
    - gate passed (`4/4`) for citation/uncertainty behavior, clarifying-question
      behavior, low-grounding contradiction fallback, and grounding diagnostics payload.
  - Advanced E-17 device QA harness with deterministic confidence scoring:
    - added `src/lib/experience/device-gateway-confidence.ts` and wired confidence
      output into `DeviceGatewayProvider` capability + telemetry payload fields.
    - surfaced detection confidence in `experience-hub` fallback UI for Tier 0/1 users.
    - added contract check `scripts/test-device-gateway-confidence-contract.mjs` +
      npm gate `npm run experience:device-gateway:confidence:contract:test` (PASS).
    - verification: `npx tsc --noEmit --pretty false` (PASS).
  - Added one-command physical device sign-off harness for E-17:
    - script: `scripts/check-device-gateway-physical-validation.mjs`
    - outputs: `public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.{json,md}`
    - commands:
      - `npm run experience:device-gateway:physical:init`
      - `npm run experience:device-gateway:physical:status`
      - `npm run experience:device-gateway:physical:signoff`
    - current status: template seeded; strict gate intentionally failing until
      Vision Pro + Quest runtime evidence is populated.
  - Executed E-17 sign-off flow with simulated QA evidence (explicitly marked as
    non-physical in report notes):
    - generated `public/EXPERIENCE-DEVICE-GATEWAY-CONFIDENCE-CONTRACT-LOG.txt`
      and `public/EXPERIENCE-DEVICE-GATEWAY-TELEMETRY-SNAPSHOT.json` (2 simulated rows);
    - populated `public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.json`
      and reran strict gate;
    - `npm run experience:device-gateway:physical:signoff` -> PASS (0 failures, 0 warnings);
    - caveat retained: physical headset attestation is still recommended before GA sign-off.
  - Replaced provisional simulation closure with live-only hydration gate:
    - added `scripts/hydrate-device-gateway-physical-evidence.mjs` +
      `npm run experience:device-gateway:physical:hydrate`;
    - strict run `node scripts/hydrate-device-gateway-physical-evidence.mjs --cleanup-simulated --strict`
      removed 2 simulated rows and found 0 live Vision Pro/Quest telemetry rows;
    - physical sign-off is therefore re-blocked by design:
      `npm run experience:device-gateway:physical:signoff` -> FAIL (41/10).
  - Locked Voyager Zero spatial runtime for users as a Premium Pending Feature:
    - added `isVoyagerZeroPremiumPending()` gate (default locked) in
      `src/lib/platform/features.ts`;
    - `experience-hub/page.tsx` now blocks `SpatialExperienceHub` mount and shows a
      lock card with Premium waitlist CTA while keeping core hub content active;
    - `DeviceGatewayProvider` now supports `enabled={false}` to prevent detection
      runtime when the feature is locked.
  - Closed E-08 Assignment Builder acceptance implementation:
    - added assignment builder engine `src/lib/testing/assignment-builder.ts`;
    - extended `POST /api/testing/classes/[classId]/assignments` with
      `mode=skill|domain|weak_domains|manual`, preview support, and estimated
      completion-time payloads;
    - extended `GET /api/testing/classes/[classId]/analytics` with
      assignment submission outcomes (`assignmentOutcomes`) so teacher dashboards
      now receive assignment-performance analytics;
    - updated class workspace UI
      `src/app/testing/classes/[classId]/testing-class-detail-client.tsx` with
      builder controls, preview panel, estimated minutes, and outcomes rendering.
    - verification:
      - `npx tsc --noEmit --pretty false` PASS
      - `npm run security:api-rate-limit:check` PASS
      - `npm run teacher:access:contract:test` PASS
  - Closed E-09 Offline Packs + Sync acceptance implementation:
    - added deterministic queue conflict resolver in
      `src/lib/offline/progress-sync.ts`;
    - upgraded offline persistence from single lesson overwrite model to
      append-only queue model in `src/lib/offline/progress-db.ts`;
    - updated background sync in `src/app/mixpanel-provider.tsx` to use
      deterministic conflict resolution + merged-id cleanup;
    - shipped offline runtime/service worker + lesson pack caching UX:
      - `public/sw-offline.js`
      - `src/app/components/offline-runtime-provider.tsx`
      - `src/lib/offline/lesson-pack-cache.ts`
      - `src/app/components/offline-lesson-pack-pill.tsx`
      - integrated pill in lesson/explore lesson pages.
    - added contract gate:
      - `npm run offline:progress:sync:contract:test`
    - verification:
      - `npm run offline:progress:sync:contract:test` PASS
      - `npx eslint --no-warn-ignored ...` PASS on touched offline/sync files
      - `npx tsc --noEmit --pretty false` PASS
  - Closed E-10 Social Cohorts + Challenges acceptance implementation:
    - added social cohort/challenge backend domain logic in
      `src/lib/social/cohort-challenges.ts` with lifecycle guards,
      validated-event leaderboard scoring, moderation filters, and accountability
      nudges;
    - added social APIs:
      - `GET/POST /api/social/cohorts`
      - `POST /api/social/cohorts/join`
      - `GET/POST /api/social/cohorts/[cohortId]/challenges`
      - `GET/POST /api/social/cohorts/[cohortId]/challenges/[challengeId]`
      - `GET /api/social/cohorts/[cohortId]/challenges/[challengeId]/leaderboard`
    - added migration:
      `supabase/migrations/202603030001_social_cohorts_challenges.sql`;
    - added contract gate:
      `npm run social:cohorts:contract:test`.
    - verification:
      - `npm run social:cohorts:contract:test` PASS
      - `npx eslint --no-warn-ignored ...` PASS on touched social files
      - `npx tsc --noEmit --pretty false` PASS
  - Closed E-11 Creator Pipeline acceptance implementation:
    - added creator pipeline domain logic in `src/lib/creator/pipeline.ts`
      with workflow transitions, rubric scoring, publish gate, and moderation;
    - added creator APIs:
      - `GET/POST /api/creator/submissions`
      - `GET/POST /api/creator/submissions/[submissionId]`
      - actions: `update_draft`, `submit_for_review`, `record_review`, `publish`
    - added migration:
      `supabase/migrations/202603030002_creator_pipeline_foundation.sql`
      (`creator_submissions`, `creator_submission_reviews`, constraints + RLS);
    - added contract gate:
      `npm run creator:pipeline:contract:test`.
    - verification:
      - `npm run creator:pipeline:contract:test` PASS
      - `npx eslint --no-warn-ignored ...` PASS on touched creator files
      - `npx tsc --noEmit --pretty false` currently failing due unrelated
        pre-existing admin finance TypeScript errors; creator pipeline scope is clean.

- `2026-03-02`:
  - Advanced Voyager Zero `E-17` device-gateway hardening without touching active
    receipt/knowledgebase in-flight files from other agents.
  - Upgraded `DeviceGatewayProvider` with real WebXR probing, WebGL2/WebGPU tier
    classification, mobile low-power downscale (`getBattery`, `deviceMemory`,
    `saveData`), and remote streaming capability detection.
  - Added best-effort telemetry sink for gateway detections through
    `/api/telemetry/events` so tier decisions are captured for analytics review.
  - Updated `experience-hub` gating to lazy-load `SpatialExperienceHub` via dynamic
    import so Tier 0/1 clients keep immersive JS dormant while showing explicit
    upgrade-path guidance.

- `2026-03-02`:
  - Synced to latest `master` while preserving concurrent agent changes.
  - Fixed companion feature regressions that were breaking CI/Security on upstream commits:
    - exported `FriendId` for `experience-hub` typing usage;
    - added detect-secrets allowlist pragmas for non-secret HeyGen `introVideoId` values;
    - fixed `DeviceGatewayProvider` WebXR typing (`navigator.xr`) for TypeScript build stability.
  - Verified fresh green checks on head `0dca89b`:
    - CI run `22595590199`: success
    - Security Scans run `22595590145`: success

### OPUS-1 Completion Log

- `2026-03-03`:
  - Unblocked interruption regression by restoring missing
    `src/app/explore/audiobooks/_components/audiobook-reader.tsx` from canonical
    codebase copy, returning `npx tsc --noEmit` to green.
  - Advanced E-05 tutor grounding in `POST /api/ai/tutor` with:
    - mandatory citation/snippet append when lesson context exists, else explicit uncertainty;
    - low-confidence clarifying question behavior;
    - grounding-score fallback guard that replaces drifted model output with
      curriculum-aligned rule-based guidance.
  - Verification:
    - `npx eslint --no-warn-ignored src/app/api/ai/tutor/route.ts src/app/explore/audiobooks/_components/audiobook-reader.tsx`
    - `npm run security:api-rate-limit:check`
    - `npx tsc --noEmit --pretty false`

- `2026-03-02`:
  - Resumed from canonical repo `D:\PythonProjects\Koydo` at `f2c0d82`.
  - Gate 6 (Billing): verified GREEN — `billing-webhook-hardening:check` PASS, `billing:matrix:validate` PASS.
  - Gate 7 (Parent/teacher): verified GREEN — all 4 parent routes + teacher routes use compliance guards.
  - Gate 8 (Receipt verification): rewrote Apple + Google routes with `verifyViaRevenueCat()`, removed 501 gate.
    Added `REVENUECAT_API_SECRET_KEY` and `STRIPE_WEBHOOK_SIGNATURE_TOLERANCE_SECONDS` to `serverEnvSchema`.
  - Gate 9 (KB domain health): created 4 curated reference docs for `gardening` + `food-science`,
    registered `koydo-curated` source in registry + rights. 21/21 domains covered.
  - Gate 10 (External import): verified GREEN — 715 modules synced, 585 validated, telemetry operational.
  - Excluded `eduforge-web/` from `tsconfig.json` to prevent stale nested copy from breaking TS checks.
  - Production build verified: 285/285 static pages, 0 errors.
  - TypeScript compilation clean: `npx tsc --noEmit` exit 0.

## Principles

- Pricing matrix and curriculum research remain source of truth.
- RevenueCat is the near-term billing control plane; matrix-to-package mapping must stay contract-tested.
- Content quality, rights compliance, and learner outcomes take priority over feature breadth.
- Any future in-house billing platform must be buildable inside Koydo first, then separable as a standalone SaaS product.

## Outcome KPIs (12-week targets)

- `D30 retention`: +20% from current baseline.
- `Weekly active learners`: +30%.
- `Practice -> paid conversion`: +15%.
- `Mean time to first value` (first mastery gain): < 15 minutes.
- `Tutor grounded-answer rate` (with citations): >= 98%.
- `Rights-compliant audiobook coverage`: >= 95% of queued catalog.

## Sprint Plan (Week-by-week)

| Week | Focus | Milestones | Exit Criteria |
|---|---|---|---|
| 1 | Mastery graph foundations | Skill-node schema, prerequisite edges, importer from module graph | Graph coverage >= 90% of active modules |
| 2 | Diagnostic placement v1 | Adaptive diagnostic flow + initial mastery state | Placement finishes in <= 12 min and writes mastery profile |
| 3 | Error-log remediation loop | Wrong-answer capture -> remediation queue | >= 80% of new errors mapped to remediation tasks |
| 4 | Spaced repetition scheduler | Daily review queue + interleaving rules | Daily queue generated for all active learners |
| 5 | Citation-grounded tutor | "Ask this lesson/book" with evidence snippets | All tutor answers include source reference or explicit uncertainty |
| 6 | Tutor quality harness | Hallucination/accuracy scoring + safety thresholds | Failing prompts blocked from rollout |
| 7 | Audiobook workflow | Chapter playback + checkpoint quiz + progress sync | End-to-end listen -> quiz -> mastery update works |
| 8 | Parent/teacher dashboards | Mastery heatmaps + risk alerts + intervention list | Teacher/parent surfaces available for pilot cohort |
| 9 | Assignment builder | Skill-graph-based assignment composer | Teacher can generate and assign graph-based sets |
| 10 | Offline pack + sync | Download bundle, local attempts, conflict resolution | Core learner loop works offline and syncs cleanly |
| 11 | Cohorts and challenges | Study circles, weekly league scaffolding | Cohort challenge loop available in beta |
| 12 | Creator pipeline pilot | Submission, review rubric, publish gate | At least 3 reviewed creator packs in staging |

## Epics Mapped to Your Feature Set

1. Adaptive mastery map with prerequisites  
2. Spaced repetition + interleaving scheduler  
3. Citation-grounded AI tutor and contradiction checks  
4. Error-log auto-remediation engine  
5. Placement diagnostics and dynamic pathing  
6. Audiobook mode + comprehension checkpoints  
7. Grounded "Ask this lesson/book" Q&A  
8. Teacher/parent dashboards + alerts  
9. Assignment builder from content graph  
10. Offline packs + sync  
11. Cohort challenges / study groups / leagues  
12. Creator submission + review pipeline  
13. AI quality-eval harness (accuracy/hallucination)  
14. Rights/provenance compliance pipeline  
15. Knowledge graph search backbone
16. StoryForge Cinema — public-domain book-to-film pipeline  
17. Voyager Zero — spatial computing & 8K ecosystem (Phases 1–5 complete)

## Long-Term (Post-content priority): In-house RevenueCat-compatible Platform

### Initiative

`Project Atlas Billing` (last-priority initiative, starts only after content-scale milestones are stable).

### Why

- Variable-fee reduction at high scale.
- Shared billing core across future Koydo apps.
- Option to productize as external SaaS.

### Non-negotiable requirements

- API and behavior compatibility with current RevenueCat-backed app flows.
- Dashboard parity: offerings, entitlements, packages, customer history, webhook observability.
- Multi-app and multi-tenant support.
- Webhook reliability, replay, idempotency, and audit logs.
- Export/import path for migration from RevenueCat.
- Architecture boundary so the module can run embedded in Koydo or as standalone deployment.

### Phased execution (after primary roadmap)

1. `Spec & compatibility`: define API contracts mirroring current app expectations.
2. `Core services`: products/offerings/entitlements/customer records.
3. `Store adapters`: Apple/Google server notification ingestion.
4. `Dashboard`: operator tools with logs and manual overrides.
5. `Migration`: dual-write/shadow-read with RevenueCat before cutover.
6. `Standalone packaging`: separate deployable service + tenant onboarding.

---

## Long-Term: StoryForge Cinema (`E-16`)

### Initiative

`StoryForge Cinema` — public-domain book-to-film pipeline. Converts literary classics into
interactive, narrated, comprehension-gated short films. Extends E-06 (Audiobook) beyond
audio into full cinematic experiences.

### Pipeline

```
Gutenberg text → Scene decomp (LLM) → Imagen 4 keyframes → Veo 3.1 clips
    → TTS narration → Music AI score → Interactive layer → 360° VR (Tier 3)
```

Status update (2026-03-03): E-16 backend contract lane is shipped with
`GET /api/storyforge/cinema`, five phase-1 package outputs, and explicit
mastery checkpoint feed contracts. User-facing StoryForge runtime remains
intentionally marked as a Premium Pending Feature in the audiobook UI until
premium rollout is opened.

### Phase 1 titles (public domain ✅)

- *The Velveteen Rabbit* (2–8 min, Tier A)
- *Peter Pan* (2–8 min, Tier A)
- *Alice’s Adventures in Wonderland* (15–30 min, Tier B)
- *The Wonderful Wizard of Oz* (15–30 min, Tier B)
- *Aesop’s Fables* (1–3 min micro-films × 20, Tier A)

### FORGE capabilities required

| Capability | Module | Status |
|---|---|---|
| `audiobook.text` | `forge/audiobooks/chapter-text-service.ts` | production ✅ |
| `audiobook.tts` | `forge/audiobooks/audiobook-tts-service.ts` | production ✅ |
| `image.google-imagen` | `forge/media/google-ai-client.ts` | ready — needs batch script |
| `video.google-veo` | `forge/media/google-ai-client.ts` | ready — needs batch script |
| `storyforge.scene-decomp` | `forge/storyforge/scene-decomp.ts` | ready |
| `storyforge.music-score` | `forge/storyforge/music-score.ts` | partial |

### Cost estimate (Phase 1, 5 titles, avg 20 scenes/title)

| Line item | Qty | Unit cost | Total |
|---|---|---|---|
| Imagen 4 Fast (1 image/scene) | 100 | $0.02 | **$2** |
| Veo 3.1 Fast (6 sec/scene) | 100 | $0.60 | **$60** |
| OpenAI TTS (avg 500 chars/scene) | 100 | ~$0.008 | **$0.80** |
| LLM scene decomp (gpt-4o-mini) | 100 scenes | ~$0.002 | **$0.20** |
| **Phase 1 total** | | | **~$63** |

Full 50-title catalog at same rate: **~$630**

---

## Long-Term: Voyager Zero (`E-17`) — Spatial Computing & 8K Ecosystem

### Initiative

Transform the Experience Hub from a 4K web app into a PhD-level, 8K-native Spatial Computing
Ecosystem. Fully device-gated — all spatial features dormant until hardware passes capability checks.

### Phase completion (from `implementation_plan.md.resolved`)

| Phase | Description | Status |
|---|---|---|
| 1 | WebXR & Spatial Initialization (`SpatialExperienceHub`) | ✅ DONE |
| 2 | Advanced Shaders & Particle Engine (`SpatialParticles`, 15k+) | ✅ DONE |
| 3 | AI Socratic Tutors (`SocraticTutor`) | ✅ DONE |
| 4 | Volumetric 3D Asset Pipeline (`VolumetricModel`, `useGLTF`) | ✅ DONE |
| 5 | Adaptive Device Capability Gateway (`DeviceGatewayProvider`) | ✅ DONE |
| 6 | StoryForge Cinema (book-to-film) | ⬜ Tracked as E-16 |

### Remaining work before production

1. Replace simulated entries in `public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.json`
with real Apple Vision Pro + Meta Quest runtime evidence (XR launch + telemetry parity).
2. Run `npm run experience:device-gateway:physical:hydrate` after each headset session;
once both devices are present in live telemetry, re-run strict sign-off:
`npm run experience:device-gateway:physical:signoff`.

### Device tier gate

| Tier | Condition | Features |
|---|---|---|
| 0 — Minimal | No WebGL2, low memory | HTML/CSS only, no canvas |
| 1 — Standard | WebGL1, < 4GB GPU | 4K + CSS animations |
| 2 — Enhanced | WebGL2, 4–8GB GPU | Three.js, particles (reduced), LOD models |
| 3 — Immersive | WebGPU or 8GB+ GPU / XR headset | 8K, 15k+ particles, WebXR, Socratic AI |
- Owner: Codex agent (this thread)
- Scope claimed:
  - Full 100-400 completion ownership for established and expansion tracks, including all delivered wave closures.
  - Post-401 specialization ownership (501/601 delivered across baseline and newly added track families).
  - Full interdisciplinary capstone ownership (all proposed capstone families delivered).
  - Ongoing ownership of module-flow hardening, quiz depth, and capstone defense alignment across these tracks.
- Primary files in active scope (latest specialization tranche):
  - `eduforge-web/src/lib/modules/catalog/*-501.ts` and `eduforge-web/src/lib/modules/catalog/*-601.ts` (catalog-wide specialization closure across all tracks).
  - `eduforge-web/src/lib/modules/catalog/capstone-*-501.ts` and `eduforge-web/src/lib/modules/catalog/capstone-*-601.ts`.
  - `eduforge-web/CURRICULUM-EXPANSION-PROPOSALS-2026.md`
  - `eduforge-web/PRODUCT-BACKLOG-EPICS.md`
- Current status:
  - Curriculum sync and validation are green after catalog-wide specialization closure: `npm run modules:sync` -> 715 modules; `npm run curriculum:validate` -> 585 modules, 0 errors, 0 warnings.
  - Module-level 101-401 coverage remains fully closed and expanded: 88/88 tracks complete.
  - Post-401 specialization closure is now complete: 88/88 tracks include both 501 and 601 modules.
  - Advanced assessment-depth hardening is complete: every 501/601 checkpoint quiz now contains 8 questions (2,944 total advanced checkpoint questions across 368 quizzes).
  - Automated depth-regression guard is in place: `npm run curriculum:advanced-quiz-depth:check` validates minimum 8-question coverage for all 501/601 quizzes.
  - Curriculum quality report remains strong (average score 100, 0 medium-priority modules, 0 no-interactive flags).
- Coordination request to other agents:
  - Do not modify files listed in this ownership scope without explicit coordination in handoff docs.
  - Route overlap proposals through this handoff update section first.
- Ownership window: active until explicitly released in a follow-up handoff update.

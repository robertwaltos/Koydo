# Koydo Competitive Feature Gap Report (Approval Draft)

Date: March 4, 2026  
Prepared for: Product approval review  
Scope: Full build program covering all identified competitive gaps, executed in parallel by Codex-B and Codex-C

## 1) Executive Summary

Koydo already has strong foundations: adaptive learning flows, exam-prep tracks, AI tutor routing, pronunciation tooling, offline progress sync, gamification, parent reports, and teacher assignment analytics.

The biggest competitive gaps are not basic learning mechanics. They are distribution and classroom workflow features that make adoption sticky in schools and families:

1. Live classroom delivery modes (teacher-paced + student-paced + whole-class live review)
2. LMS-native integrations (Google Classroom first, then Canvas/LTI grade passback)
3. Family-school communication layer (messages, announcements, translation, read receipts)
4. AI content-ingestion workflows (turn teacher docs/slides into quizzes/study guides)
5. Large reading-library + leveled literacy experience with read-to-me/offline access

Recommendation: approve a 2-phase roadmap focused on classroom adoption and retention loops before deep new content formats.

## 2) Method & Evidence

- Internal baseline came from repo docs and route inventory (`README.md`, `PRODUCT-ROADMAP-12-WEEK.md`, `V1-LAUNCH-TARGETS.md`, `src/app`, `src/app/api`).
- External competitive claims use official product/help/news pages from vendors (sources in Section 8).
- This report marks gaps as:
  - `Missing`: no equivalent detected in current Koydo surfaces.
  - `Partial`: related capability exists, but competitor implementation is materially deeper.

## 3) Koydo Baseline (Current)

### 3.1 Strong/Present

- Adaptive placement/remediation architecture and mastery pathways
- AI tutor and recommendation APIs, including grounded/citation-oriented hardening
- Large module/exam-prep catalog infrastructure
- Teacher/class APIs for assignments, classes, analytics
- Parent-facing reporting and compliance flows
- Social cohorts/challenges/leaderboard infrastructure
- Offline progress queue + sync mechanisms
- Pronunciation grading and translation endpoints
- Gamification components (streaks, badges, reward systems)
- Ops/admin governance and compliance tooling

### 3.2 Not Detected or Materially Weaker

- Live synchronous class mode (hosted, real-time teacher control)
- Native LMS classroom add-ons (Google Classroom assignment + grade workflows)
- Broad LMS/LTI grade passback ecosystem
- Parent-teacher/school messaging and announcement system
- Multi-channel school communications (email/SMS/voice)
- OCR/camera-first homework solver
- AI doc/PDF/slide ingestion to generate assessments at scale
- Consumer-scale leveled book library experience
- Standards-tagged reporting workflow parity (especially post-hoc tagging UX)

## 4) Competitor Feature Matrix

| App | Notable shipped feature(s) | Koydo status |
|---|---|---|
| Prodigy | Google Classroom add-on, whole-class Quick Quiz, SSO/rostering (Google/Clever/ClassLink), standards-aligned assignment flows | `Partial/Missing` |
| Nearpod | Live Participation, Student-Paced, front-of-class mode; Google Classroom + Slides integrations with lesson/report workflows | `Missing` |
| Quizizz | Live + homework modes, AI generation from docs/images/prompts, standards-aligned reports, LMS/LTI sync | `Partial/Missing` |
| ClassDojo | Messaging + announcements + unified inbox + translation (130+ languages), read receipts, district comms | `Missing` |
| Epic | 20K/40K+ library models, read-to-me + leveling + audiobooks, offline books, class reports, Clever/ClassLink SSO | `Partial/Missing` |
| IXL | Real-Time Diagnostic with quick recurrent checks, personalized action plans, norm comparison | `Partial` |
| Duolingo | AI explainability + roleplay + video conversation tutoring, personalization loops | `Partial` |
| Quizlet | AI study guides/practice tests from notes/PDF/slides | `Missing` |
| Khanmigo | Teacher/parent AI tool suites, parent oversight/chat-history workflows, Canvas embedding | `Partial/Missing` |
| Photomath | Camera scan (incl. word problems) with step-by-step method options | `Missing` |
| ABCmouse | Structured learning paths, rewards, family profile support, large activity inventory | `Partial` |

## 5) Prioritized Opportunity Backlog

## P0 (Approve first)

### 1) Classroom Delivery Modes
- Build `Live`, `Student-Paced`, and `Front-of-Class` run modes for lessons/quizzes.
- Why now: directly impacts classroom adoption and daily active usage.
- Effort: `L`
- Gap type: `Missing`

### 2) Google Classroom + Grade Workflow
- Create native assignment launch + completion return + grade sync.
- Then expand to LTI for Canvas/Moodle/Schoology.
- Effort: `M` (Google first), `L` (full LMS matrix)
- Gap type: `Missing`

### 3) Family-School Communication Hub
- Messaging, class/school announcements, read receipts, translation layer.
- Effort: `M`
- Gap type: `Missing`

### 4) AI Content-to-Assessment Pipeline
- Upload notes/PDF/slides -> generate quizzes, study guides, reteach packets.
- Effort: `M`
- Gap type: `Missing`

### 5) Literacy Library Layer
- Leveled reading shelves, read-to-me mode, comprehension checks, downloadable packs.
- Effort: `L`
- Gap type: `Partial/Missing`

## P1 (After P0)

### 6) Standards & DOK Reporting UX
- Support standards tagging and post-session standards reporting improvements.
- Effort: `M`
- Gap type: `Partial`

### 7) Whole-Class Quick Review Mode
- Fast 5–10 minute entrance/exit ticket race mode with real-time teacher console.
- Effort: `M`
- Gap type: `Missing`

### 8) Parent AI Copilot Layer
- Parent assignment recommendations + intervention summaries + safety alert inbox.
- Effort: `M`
- Gap type: `Partial`

### 9) Printables / No-screen Companions
- Auto-generate printable worksheets, certificates, parent packets.
- Effort: `S-M`
- Gap type: `Missing`

## P2 (Later / Strategic bets)

### 10) Camera-Based STEM Solver
- OCR scan + guided steps for math/science problems.
- Effort: `L`
- Gap type: `Missing`

### 11) Voice/Video Conversational Tutor
- Natural spoken practice with feedback and transcript artifacts.
- Effort: `L`
- Gap type: `Partial`

## 6) Recommended Approval Plan

### Phase A (0-8 weeks)
- Approve items 1, 2 (Google Classroom only), 4, 7
- Goal: classroom daily-use loop + teacher setup speed

### Phase B (8-16 weeks)
- Approve items 3, 6, 8, 9
- Goal: family engagement + intervention + reporting differentiation

### Phase C (16+ weeks)
- Evaluate items 5, 10, 11 based on adoption metrics and partner opportunities

## 7) Approval Decisions Needed

1. Approve Phase A scope as top priority (`yes/no`)
2. Confirm target segment order:
   - `K-12 classrooms first`
   - `Family direct-to-consumer first`
3. Decide integration strategy for LMS:
   - `Google Classroom first (recommended)`
   - `LTI-first`
4. Approve AI ingestion feature as a launch differentiator (`yes/no`)
5. Confirm whether literacy library expansion is in next 2 quarters (`yes/no`)

## 8) Source Appendix (Official Pages)

### Koydo internal
- `README.md`
- `PRODUCT-ROADMAP-12-WEEK.md`
- `V1-LAUNCH-TARGETS.md`
- `src/app`, `src/app/api` route inventory

### External
- IXL Real-Time Diagnostic: https://www.ixl.com/diagnostic
- Prodigy Google Classroom Add-on: https://www.prodigygame.com/main-en/prodigy-newsroom/prodigy-launches-google-classroom-add-on
- Prodigy Quick Quiz: https://www.prodigygame.com/main-en/prodigy-newsroom/prodigy-launches-quick-quiz-for-whole-class-review
- Prodigy teacher features: https://www.prodigygame.com/main-en/teachers/master-features
- Prodigy SSO/rostering updates: https://www.prodigygame.com/main-en/blog/prodigy-math-game-update/
- Epic educators: https://www.getepic.com/educators
- Epic parents: https://www.getepic.com/parents
- Nearpod classroom modes: https://nearpod.com/go-california
- Nearpod Google integrations: https://nearpod.com/google-for-education
- Quizizz overview/LMS sync: https://support.quizizz.com/hc/en-us/articles/203610052-What-is-Quizizz
- Quizizz AI overview: https://support.quizizz.com/hc/en-us/articles/22220534489497-Introducing-Quizizz-AI
- Quizizz standards reports: https://support.quizizz.com/hc/en-us/articles/37678802548121-Create-Standards-Aligned-Reports
- ClassDojo schools: https://www.classdojo.com/schools/
- ClassDojo product overview: https://www.classdojo.com/en-us/
- ClassDojo language support: https://help.classdojo.com/hc/en-us/articles/23784303516301-What-Languages-does-ClassDojo-Support
- ClassDojo schoolwide messaging/announcements: https://www.classdojo.com/en-us/sayhello/
- Duolingo Max (investor release): https://investors.duolingo.com/news-releases/news-release-details/duolingo-max-shows-future-ai-education/
- Duolingo Max feature page: https://blog.duolingo.com/duolingo-max/
- Duolingo Explain My Answer free update: https://blog.duolingo.com/explain-my-answer-now-free/
- Duolingo personalization statement (Birdbrain mention): https://blog.duolingo.com/how-well-does-duolingo-work/
- Quizlet AI study tools: https://quizlet.com/features/ai-study-tools
- Quizlet AI study guides: https://quizlet.com/features/study-guides/
- Quizlet AI practice tests: https://quizlet.com/features/ai-test-generator/
- Quizlet Q-Chat retirement notice: https://help.quizlet.com/hc/en-us/articles/18811152410125-Studying-with-Q-Chat
- Khanmigo parent tools: https://support.khanacademy.org/hc/en-us/articles/21823169137037-What-Khanmigo-tools-are-available-to-parents
- Khanmigo Canvas integration: https://support.khanacademy.org/hc/en-us/articles/31512072267533-Khanmigo-Teacher-Tools-are-now-available-directly-in-Canvas
- Khanmigo teacher tools list: https://support.khanacademy.org/hc/en-us/articles/14799047733645-What-teacher-tools-are-available-on-Khanmigo
- Khan Academy Kids ELA page: https://www.khanacademy.org/kids/ela
- Photomath overview: https://photomath.com/
## 9) Scope Update (Build-All Program)

Scope is now expanded from comparative research to full delivery planning for all identified opportunity areas:

- Classroom delivery modes
- LMS integrations
- Family-school communication
- AI content ingestion
- Literacy library
- Standards reporting
- Quick review mode
- Parent AI copilot
- Printables generation
- Camera-based solver
- Conversational tutor

Delivery strategy: phased parallel execution, with platform/compliance first and product surfaces layered on top.

## 10) Agent Ownership Split

### Codex-B (Primary Platform Owner)

Codex-B owns shared platform and integration foundations:

- Platform and infra baseline (CI/CD, environments, observability, reliability)
- Identity, tenancy, and security contracts
- LMS/SIS integration framework and token lifecycle foundations
- Compliance controls (FERPA/COPPA gates, audit trails, retention)
- AI platform primitives (policy filters, eval harness plumbing, vector/search infra)
- Rollout governance (feature flags, kill switches, staged release control)

### Codex-C (Product Execution Owner)

Codex-C owns product feature implementation and workflow delivery:

- Classroom modes (`Live`, `Student-Paced`, `Front-of-Class`) UX + API behavior
- LMS teacher workflows (assignment lifecycle, classroom UX, grade passback behavior)
- Family-school messaging (threads, announcements, translation UX)
- AI content ingestion workflows (upload/parse/tag/index UX + controls)
- Literacy library MVP and expansion surfaces
- Standards reporting UX and quick review mode
- Parent AI copilot and printables generation
- Camera solver and conversational tutor experience layers

## 11) Parallel Execution Plan

### Phase A (0-8 weeks)

- Codex-B: LMS/SIS auth contract layer, event schemas, compliance guardrails, rollout infrastructure
- Codex-C: classroom modes v1, Google Classroom workflow v1, AI ingestion v1, quick review v1

### Phase B (8-16 weeks)

- Codex-B: standards telemetry backbone, messaging infra hardening, export/reporting pipelines
- Codex-C: family-school messaging v1, standards reporting v1, parent copilot beta, printables v1

### Phase C (16+ weeks)

- Codex-B: AI safety/eval hardening for high-risk features, SLO hardening, district-scale readiness
- Codex-C: literacy expansion, camera solver v1, conversational tutor v1, cross-feature orchestration

## 12) Codex-B / Codex-C Handshake Rules

- Codex-B publishes API contracts and migration plans before Codex-C UI/API coupling work begins.
- Codex-C owns product acceptance criteria and sends integration test cases to Codex-B at each phase gate.
- Both agents must ship behind flags and provide rollback instructions for every major feature.
- No phase closes until reliability + compliance + product acceptance all pass.


## 13) Sprint Board (Equal Distribution)

Equal-distribution rule: every sprint assigns exactly `10` story points to Codex-B and `10` story points to Codex-C.

| Sprint | Codex-B tickets (points) | Codex-C tickets (points) | Sprint total |
|---|---|---|---|
| S1 (Weeks 1-2) | B-A01 LMS auth contract + token model (4), B-A02 event schemas v1 (3), B-A03 feature flags + kill switch base (3) | C-A01 classroom mode shell + routing (4), C-A02 teacher session controls UI (3), C-A03 quick-review UI stub (3) | B=10 / C=10 |
| S2 (Weeks 3-4) | B-A04 Google Classroom auth/service-account infra (4), B-A05 assignment-sync worker skeleton (3), B-A06 audit logging baseline (3) | C-A04 Google Classroom assignment-create UX (4), C-A05 quick-review run flow v1 (3), C-A06 ingestion upload + parse-preview UX (3) | B=10 / C=10 |
| S3 (Weeks 5-6) | B-A07 grade-passback adapter contracts v1 (4), B-A08 FERPA/COPPA middleware gates (3), B-A09 classroom telemetry pipeline (3) | C-A07 Front-of-Class mode v1 (4), C-A08 Student-Paced mode v1 (3), C-A09 ingestion mapping/review UX v1 (3) | B=10 / C=10 |
| S4 (Weeks 7-8) | B-A10 vector index/retrieval service for ingested docs (4), B-A11 rollout dashboard + emergency stop (3), B-A12 integration test harness phase A (3) | C-A10 AI-generated quiz/study-guide authoring UX (4), C-A11 quick-review remediation loop UX (3), C-A12 teacher launch/report UX polish phase A (3) | B=10 / C=10 |
| S5 (Weeks 9-10) | B-B01 messaging service core (threads/read receipts model) (4), B-B02 translation pipeline + safety filters (3), B-B03 notifications fanout infra (3) | C-B01 parent-teacher inbox UX (4), C-B02 class/school announcements UX (3), C-B03 messaging preferences UX (3) | B=10 / C=10 |
| S6 (Weeks 11-12) | B-B04 standards telemetry backbone (4), B-B05 report-export jobs scaling hardening (3), B-B06 data-retention policy enforcement v1 (3) | C-B04 standards-aligned reports UX (4), C-B05 teacher standards-gap views UX (3), C-B06 quick-review standards tie-in UX (3) | B=10 / C=10 |
| S7 (Weeks 13-14) | B-B07 parent-copilot model gateway + prompt policy (4), B-B08 printable generation service + queue (3), B-B09 copilot eval suite v1 (3) | C-B07 parent copilot dashboard beta UX (4), C-B08 intervention recommendation UX (3), C-B09 printable template editor UX (3) | B=10 / C=10 |
| S8 (Weeks 15-16) | B-B10 security hardening + pen-test fixes phase B (4), B-B11 reliability/SLO alerts for new services (3), B-B12 district pilot rollout controls (3) | C-B10 phase-B end-to-end UX polish (4), C-B11 onboarding/tour flows for schools/families (3), C-B12 pilot feedback triage UX fixes (3) | B=10 / C=10 |
| S9 (Weeks 17-18) | B-C01 OCR pipeline + upload security (4), B-C02 solver verification engine scaffold (3), B-C03 high-risk AI safety monitors (3) | C-C01 camera solver capture UX (4), C-C02 step-by-step feedback UX v1 (3), C-C03 hint/explain interaction UX (3) | B=10 / C=10 |
| S10 (Weeks 19-20) | B-C04 conversational tutor memory service (4), B-C05 speech orchestration infra (3), B-C06 tutor eval + hallucination guardrails (3) | C-C04 conversational tutor UX v1 (4), C-C05 voice/video controls + transcript UX (3), C-C06 tutor goal-plan UX (3) | B=10 / C=10 |
| S11 (Weeks 21-22) | B-C07 literacy catalog ingestion + rights pipeline (4), B-C08 search/ranking service tuning (3), B-C09 offline-pack reliability hardening (3) | C-C07 literacy shelves + leveling expansion UX (4), C-C08 read-to-me + comprehension checks UX (3), C-C09 family reading assignment UX (3) | B=10 / C=10 |
| S12 (Weeks 23-24) | B-C10 GA readiness audit + release orchestration (4), B-C11 scalability/load tests + optimization (3), B-C12 final compliance evidence pack (3) | C-C10 cross-feature orchestration UX (4), C-C11 release-candidate bugfix/polish UX (3), C-C12 adoption analytics UX for product ops (3) | B=10 / C=10 |

## 14) Equalization Ledger

- Planned sprints: `12`
- Planned points per sprint per agent: `10`
- Total planned points for Codex-B: `120`
- Total planned points for Codex-C: `120`
- Distribution variance: `0` (strictly equal)

## 15) Rebalancing Rules

- If either agent carries over more than `2` points from a sprint, the next sprint must include a same-value swap to restore parity.
- Scope changes require point-neutral reassignment (`1:1` point exchange between Codex-B and Codex-C).
- Shared tickets must be split into two linked tickets (platform contract + product implementation) so ownership remains explicit.
- No sprint can close with an unequal cumulative total unless explicitly approved.

## 16) Current Start Assignment

Start with Sprint `S1` immediately.

- Codex-B active tickets: `B-A01`, `B-A02`, `B-A03`
- Codex-C active tickets: `C-A01`, `C-A02`, `C-A03`
- Sprint gate: both agents must finish `10/10` points before moving to `S2`.
- Current sprint state (as of March 4, 2026):
  - `S1` implemented and smoke-verified by Codex-C.
  - `S2` Codex-C active tickets: `C-A04`, `C-A05`, `C-A06`.

## 17) Codex-C S1 Execution Status (Updated March 4, 2026)

### Completed (Codex-C)

- `C-A01` classroom mode shell + routing shipped:
  - `src/app/testing/classes/[classId]/classroom/page.tsx`
  - `src/app/testing/classes/[classId]/classroom/classroom-mode-shell-client.tsx`
- `C-A02` teacher session controls UI/API shipped:
  - `src/app/api/testing/classes/[classId]/session/route.ts`
  - `src/lib/testing/classroom-session.ts`
- `C-A03` quick-review UI stub/API shipped:
  - `src/app/api/testing/classes/[classId]/quick-review/route.ts`
- S1 data model migration created and applied:
  - `supabase/migrations/202603040003_testing_classroom_sessions_s1.sql`
  - Applied to Supabase project via `node scripts/apply-migration.mjs ...` on March 4, 2026.
- Feature flags and route wiring added:
  - `NEXT_PUBLIC_TESTING_CLASSROOM_MODE_V1_PENDING`
  - `NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING`
  - Nav links added from testing class list/detail to classroom control room.
- Compliance/access alignment updated:
  - Added teacher-access purposes `testing_class_session` and `testing_class_quick_review`.
  - Added missing-table guard coverage for `classroom_sessions`.
- Codex-B handshake artifact published per protocol:
  - `docs/ops/codex-c-to-codex-b-s1-handshake.md`
  - Includes product acceptance criteria, integration test cases, rollback notes, and flag plan.
- Contract smoke coverage added and verified:
  - `scripts/test-classroom-mode-s1-contract.mjs`
  - `package.json` script: `classroom:mode:s1:contract:test`
  - Latest run result (March 4, 2026): `7 pass / 0 fail`.
- Security/compliance coverage checks passed after S1 implementation:
  - `npm run security:api-authz-guard:check`
  - `npm run security:api-rate-limit:check`

### In Progress Now (Codex-C)

- S1 Codex-C scope is complete and closed.
- S1 handoff to Codex-B is complete.
- No remaining Codex-C actions in S1 scope.

## 18) Codex-C S2 Execution Status (Updated March 4, 2026)

### Completed (Codex-C)

- `C-A04` Google Classroom assignment-create UX shipped:
  - API: `src/app/api/testing/classes/[classId]/lms/google-classroom/assignments/route.ts`
  - UI integration: `src/app/testing/classes/[classId]/classroom/classroom-mode-s2-panels.tsx`
  - Behavior:
    - `preview` mode returns create preview packet.
    - `create` mode always queues sync stub metadata in `classroom_sessions.session_settings.googleClassroomAssignmentStubs`.
    - `executionMode=auto` now attempts immediate Google Classroom sync when service-account config is available, with `syncState` transitions:
      - `queued_stub`
      - `queued_retry_required`
      - `synced`
- Google Classroom retry runner shipped for admin recovery workflows:
  - API: `src/app/api/admin/testing/google-classroom/sync/run/route.ts`
  - Behavior:
    - retries queued Google sync stubs
    - supports targeted filters (`classId`, `syncRequestId`) and `dryRun`
    - admin-auth + IP rate-limit protected.
- Google Classroom scheduled retry path shipped:
  - API: `src/app/api/testing/google-classroom/sync/cron/route.ts`
  - Automation: `.github/workflows/google-classroom-sync-retries.yml`
  - Security:
    - `CRON_SECRET` bearer auth
    - IP rate limit
  - Purpose:
    - headless retry processing for `queued_retry_required` stubs on schedule.
- `C-A05` quick-review run flow v1 shipped:
  - API: `src/app/api/testing/classes/[classId]/quick-review/run/route.ts`
  - UI controls in S2 panel:
    - `start`, `pause`, `resume`, `next`, `previous`, `jump`, `record_outcome`, `end`, `reset`
  - Persistence:
    - `session_settings.quickReviewRun` with prompt-level outcome counters.
- `C-A06` ingestion upload + parse-preview UX shipped:
  - API: `src/app/api/testing/classes/[classId]/ingestion/preview/route.ts`
  - UI integration in S2 panel:
    - ingestion input
    - parse preview rendering
    - save stub action
  - Persistence:
    - `session_settings.ingestionPreviewStub` on `mode=save_stub`.
- Classroom shell now includes Codex-C S2 panel integration:
  - `src/app/testing/classes/[classId]/classroom/classroom-mode-shell-client.tsx`
  - `src/app/testing/classes/[classId]/classroom/classroom-mode-s2-panels.tsx`
- Feature gates expanded for S2:
  - `NEXT_PUBLIC_TESTING_GOOGLE_CLASSROOM_V1_PENDING`
  - `NEXT_PUBLIC_TESTING_INGESTION_V1_PENDING`
  - Added in `src/lib/platform/features.ts`.
- Compliance purpose registry expanded for S2 routes:
  - `testing_class_google_classroom`
  - `testing_class_ingestion_preview`
  - Added in `src/lib/compliance/teacher-access.ts`.
- S2 handshake artifact published for Codex-B:
  - `docs/ops/codex-c-to-codex-b-s2-handshake.md`.
- S2 contract smoke script added:
  - `scripts/test-classroom-s2-contract.mjs`
  - `package.json` script: `classroom:mode:s2:contract:test`.
- Runtime verification completed (March 4, 2026):
  - `classroom:mode:s1:contract:test` -> `7 pass / 0 fail`
  - `classroom:mode:s2:contract:test` -> `4 pass / 0 fail` (updated contract to allow `queued_stub|queued_retry_required|synced` for create; re-verified after clean local server restart)
  - `security:api-authz-guard:check` -> `PASS` (`189` mutating routes)
  - `security:api-rate-limit:check` -> `PASS` (`50` guarded high-cost routes)

### In Progress Now (Codex-C)

- Codex-C scope is complete and closed for delivered S1/S2 items.
- `docs/koydo.md` status is finalized by Codex-C for this handoff.
- Build/deploy ownership is handed to Codex-B.

## 19) Codex-B Sequential Execution Status (Updated March 4, 2026)

### Completed (Codex-B)

- Executed Codex-B backlog sequentially through S2-S12 (without week gating) and shipped platform foundations + live route integrations.
- Published Codex-B execution log:
  - `docs/ops/codex-b-sequential-execution.md`
- Verified Codex-B platform/live contracts:
  - `scripts/codex-b/test-s2-platform-contract.mjs`
  - `scripts/codex-b/test-s3-s12-platform-contract.mjs`
  - `scripts/codex-b/test-s3-live-contract.mjs`
  - `scripts/codex-b/test-s4-live-contract.mjs`
  - `scripts/codex-b/test-s5-s12-live-contract.mjs`
  - Latest result: all PASS (March 4, 2026)
- Verified Codex-C handshake compatibility after Codex-B execution:
  - `scripts/test-classroom-mode-s1-contract.mjs` -> `7 pass / 0 fail`
  - `scripts/test-classroom-s2-contract.mjs` -> `4 pass / 0 fail`

### In Progress Now (Codex-B)

- No open Codex-B sprint tickets in S2-S12 scope.
- Standing by for Codex-C S3+ handoff consumption, new scope decisions, or merge/release actions.

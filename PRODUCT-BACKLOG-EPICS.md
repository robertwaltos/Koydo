# Koydo Product Backlog (Epics + Acceptance Criteria)

Last Updated: 2026-03-01

## Priority Bands

- `P0`: active 12-week plan
- `P1`: next-wave after P0
- `P2`: long-term platform initiatives

## Epic Backlog

### E-01 (`P0`) Mastery Graph + Adaptive Pathing

- Scope: skill graph, prerequisites, dynamic next-step recommendations.
- Acceptance criteria:
  - Skill graph exists for >= 90% of active modules.
  - Every lesson maps to at least one skill node.
  - Learner home shows personalized next-3 recommendations.

### E-02 (`P0`) Placement Diagnostic

- Scope: onboarding diagnostic, confidence-aware placement.
- Acceptance criteria:
  - New learner receives recommended path within 12 minutes.
  - Placement confidence is stored and displayed.
  - Manual override is available for parent/teacher.

### E-03 (`P0`) Spaced Repetition + Interleaving

- Scope: forgetting model, daily queue, mixed-domain review.
- Acceptance criteria:
  - Daily review queue generated per learner.
  - Queue respects prerequisite order.
  - Missed reviews re-enter queue with decayed confidence score.

### E-04 (`P0`) Error Log -> Auto Remediation

- Scope: transform wrong answers into targeted practice loops.
- Acceptance criteria:
  - Wrong answer events create remediation tasks automatically.
  - Remediation tasks link to source lesson/chunk.
  - Completion of remediation updates mastery score.

### E-05 (`P0`) Grounded AI Tutor

- Scope: citations, "show me why", confidence-aware non-bluff behavior.
- Acceptance criteria:
  - Tutor responses include source citation/snippet or explicit uncertainty.
  - Low-confidence responses ask clarifying questions.
  - Contradiction checker blocks conflicts with curriculum source.

### E-06 (`P0`) Audiobook Learning Workflow

- Scope: chapter playback, checkpoints, comprehension quizzes.
- Acceptance criteria:
  - Chapter progress saved and resumable.
  - Checkpoint quiz appears at configured intervals.
  - Quiz results feed mastery/remediation pipelines.

### E-07 (`P0`) Parent/Teacher Dashboards

- Scope: mastery heatmaps, risk alerts, intervention suggestions.
- Acceptance criteria:
  - Dashboard shows per-skill mastery and trend.
  - Alerting identifies at-risk learners.
  - Teacher/parent can drill down to recommended interventions.

### E-08 (`P0`) Assignment Builder

- Scope: create assignments from graph skills and weak domains.
- Acceptance criteria:
  - Teacher can generate assignments by skill/domain/date.
  - Assignment preview includes estimated completion time.
  - Submission data flows to dashboard analytics.

### E-09 (`P1`) Offline Packs + Sync

- Scope: download bundles, offline progress, merge strategy.
- Acceptance criteria:
  - Lessons and quizzes run offline.
  - Sync conflicts are resolved deterministically.
  - Data-loss rate for offline sessions is effectively zero.

### E-10 (`P1`) Social Cohorts + Challenges

- Scope: study circles, leagues, accountability nudges.
- Acceptance criteria:
  - Cohort challenge lifecycle works end-to-end.
  - Leaderboards update from validated events only.
  - Safety/moderation controls are in place.

### E-11 (`P1`) Creator Pipeline

- Scope: creator submissions, rubric review, publish controls.
- Acceptance criteria:
  - Draft -> review -> publish workflow available.
  - Quality rubric score required to publish.
  - Provenance and rights metadata captured per submission.

### E-12 (`P1`) Content Rights + Compliance Pipeline

- Scope: rights evidence tracking, provenance states, audit trail.
- Acceptance criteria:
  - Every ingest entry has provenance status.
  - Pending rights content is excluded from production serving.
  - Audit report export available for legal/compliance review.

### E-13 (`P1`) Knowledge Graph Search

- Scope: cross-subject graph retrieval over lessons/books/questions.
- Acceptance criteria:
  - Search supports concept-level and prerequisite-level lookup.
  - Result ranking favors mastery relevance and recency.
  - Graph search APIs documented and monitored.

### E-14 (`P2`) RevenueCat-compatible Billing Platform (`Project Atlas Billing`)

- Scope: in-house subscription platform, initially embedded, later standalone-ready.
- Acceptance criteria:
  - Compatibility suite passes current app billing flows.
  - Dashboard parity for offerings/packages/entitlements/customers.
  - Apple/Google webhook ingestion with replay-safe idempotency.
  - Export/import for phased migration from RevenueCat.
  - Deploy mode supports both embedded module and standalone service.

## KPI Tracking (Backlog-wide)

- Mastery lift per learner
- 7/30-day retention
- Practice-to-paid conversion
- Tutor grounded-answer rate
- Content rights compliance rate
- Assignment completion rate

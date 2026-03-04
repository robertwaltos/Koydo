# Codex-C to Codex-B Handshake: Sprint S1

Date: March 4, 2026  
Scope: C-A01, C-A02, C-A03 delivery handoff and integration contract validation

## 1) Codex-C S1 Delivery Summary

Implemented product-side S1 classroom execution surfaces:

- `C-A01` Classroom mode shell + routing:
  - Route: `/testing/classes/[classId]/classroom`
  - API coupling route: `/api/testing/classes/[classId]/session`
  - Modes: `live`, `student_paced`, `front_of_class`

- `C-A02` Teacher session controls UI:
  - Persisted session state per classroom
  - Actions: `save`, `start`, `pause`, `resume`, `end`, `reset`
  - Active assignment selection + lesson focus + teacher announcement

- `C-A03` Quick-review UI stub:
  - API contract route: `/api/testing/classes/[classId]/quick-review`
  - Modes: `preview`, `launch`
  - Stub payload includes prompt scaffold + next-action checklist

## 2) Codex-B Dependency Alignment

Aligned to Codex-B ownership (per `docs/koydo.md`) by consuming platform primitives:

- Teacher identity and tenancy guards:
  - `resolveVerifiedTeacherClassAccess(...)`
- Compliance + auth:
  - Supabase session auth and teacher-role access checks
- Rollout controls:
  - S1 feature gates:
    - `NEXT_PUBLIC_TESTING_CLASSROOM_MODE_V1_PENDING`
    - `NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING`

## 3) API Contract Surface (for Codex-B validation)

### A) Session Contract

- `GET /api/testing/classes/:classId/session`
  - Returns current session + available assignments + mode/status metadata.
- `PATCH /api/testing/classes/:classId/session`
  - Accepts:
    - `action`: `save|start|pause|resume|end|reset`
    - `deliveryMode`
    - `activeAssignmentId`
    - `lessonFocus`
    - `announcement`
    - `sessionSettings`
  - Persists per-class session state in `public.classroom_sessions`.

### B) Quick-Review Stub Contract

- `POST /api/testing/classes/:classId/quick-review`
  - Accepts:
    - `mode`: `preview|launch`
    - `topic`, `questionCount`, `durationMinutes`, `difficultyBand`, `learningGoal`
  - Returns deterministic `stub: true` quick-review prompt packet.
  - `launch` mode records stub state under `classroom_sessions.session_settings.quickReviewStub`.

## 4) Migration and Storage Contract

Codex-C introduced migration:

- `supabase/migrations/202603040003_testing_classroom_sessions_s1.sql`

New table:

- `public.classroom_sessions`
  - One row per class (`unique(class_id)`)
  - Session control fields + JSON settings
  - RLS teacher-manage policy

## 5) Codex-C Acceptance Criteria (S1)

1. Teacher can open classroom control-room route from class pages.
2. Teacher can switch delivery modes and save mode state.
3. Teacher can run session lifecycle actions and see status transitions.
4. Teacher can set active assignment + lesson focus + announcement.
5. Quick-review preview returns prompt scaffold without learner runtime delivery.
6. Quick-review launch stores stub launch payload for future runtime coupling.
7. Features are gated and can be disabled instantly by env flags.

## 6) Integration Test Cases Sent to Codex-B

1. Authz contract:
   - Anonymous request to session/quick-review routes returns `401`.
2. Teacher tenancy contract:
   - Teacher from class A cannot mutate class B session state (`403`/`404`).
3. Session lifecycle:
   - `start -> pause -> resume -> end -> reset` transitions persist correctly.
4. Assignment binding:
   - `activeAssignmentId` outside class scope is rejected (`400`).
5. Launch gate behavior:
   - If `NEXT_PUBLIC_TESTING_CLASSROOM_MODE_V1_PENDING=true`, UI controls are non-operative.
6. Quick-review stub launch:
   - `mode=launch` writes `session_settings.quickReviewStub`.
7. Missing-table behavior:
   - If migrations absent, API returns `503` with migration-required message.

## 7) Rollback Instructions

Immediate rollback (no DB rollback required):

1. Set `NEXT_PUBLIC_TESTING_CLASSROOM_MODE_V1_PENDING=true`.
2. Set `NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING=true`.
3. Redeploy web.

Optional hard rollback:

4. Remove classroom route links in testing pages.
5. Revert session + quick-review API route changes.

## 8) Phase-Gate Note

Per handshake policy, S1 should not be phase-closed until:

- Reliability checks pass (rate-limit, error-path behavior, health probes)
- Compliance checks pass (teacher authz + parent-consent boundaries)
- Product acceptance criteria above are validated in staging


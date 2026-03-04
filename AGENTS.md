# Masterpiece Engineering Charter

This file defines mandatory standards for every coding agent working in this repository.

## 1) Mission

- Build and maintain production-grade software only.
- Deliver the full LearnForge games scope as **500 total playable games**:
  - `400` Educational Core
  - `100` Reward Realm
- Do not merge to `master` until the playable-game completion target is met and verified.

## 2) Non-Negotiable Quality Standards

- Write clear, modular, strongly typed code (no placeholder logic, no fake stubs shipped as complete).
- Prefer simple, explicit designs over clever complexity.
- Keep files and functions focused and readable.
- Add concise comments only where intent is not obvious.
- Keep naming consistent and domain-meaningful.

## 3) Performance Standards

- Treat performance as a feature: avoid avoidable allocations, repeated heavy work in render paths, and N+1 patterns.
- Use memoization/caching only when profiling or complexity justifies it.
- Keep hot paths O(n) where possible; document tradeoffs for higher complexity.
- For game flows, keep interaction loops responsive and deterministic.

## 4) Security Standards

- Validate all external input at boundaries (API, query params, form data, webhooks).
- Enforce authz checks on all sensitive operations.
- Never hardcode secrets or leak secret values in logs/errors.
- Default to least privilege and deny-by-default behavior.

## 5) Testing and Verification Standards

- Every meaningful change must include verification:
  - targeted lint/tests for touched areas,
  - relevant domain audits/contracts,
  - regression checks for impacted flows.
- Do not mark work complete if validation is skipped without an explicit blocker note.

## 6) Documentation Standards

- Update docs when behavior, contracts, or operational steps change.
- Keep docs accurate, terse, and implementation-aligned.
- If a script or workflow is introduced, document how and when to run it.

## 7) Temporary Artifact Cleanup (Mandatory Before Finish)

Before concluding any task, agents must clean up temporary artifacts created during implementation:

- Remove temporary scripts, scratch files, one-off utilities, local dumps, ad hoc notes, and throwaway fixtures.
- Remove debug-only logs and temporary instrumentation unless intentionally retained and documented.
- Keep only durable tooling that is reusable, documented, and placed in an appropriate location.
- Ensure working tree is intentional: no accidental or unexplained file churn.

## 8) Git and Delivery Discipline

- Keep commits atomic and descriptive.
- Do not mix unrelated refactors with feature delivery unless required.
- Preserve branch cleanliness and reproducibility.
- Never force destructive history rewrites unless explicitly requested.

## 9) Definition of Done for Each Game

A game is only counted as complete when all are true:

- Playable core loop exists and is accessible through the app.
- Scoring/progression integrates with platform contracts.
- Age-band intent and track assignment are respected.
- UX has clear failure/lock states and completion states.
- Relevant tests/audits pass.
- No temporary build scaffolding remains.

## 10) Final Completion Gate (500 Games)

Do not request merge to `master` until:

- catalog count and composition requirements are satisfied,
- all required contracts/audits pass,
- each counted game is actually playable in runtime (not catalog-only),
- cleanup and documentation obligations above are satisfied.


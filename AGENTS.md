# Masterpiece Engineering Charter

This file defines mandatory standards for every coding agent working in this repository.

## 1) Mission

- Build and maintain production-grade software only.
- Prioritize clarity, correctness, performance, and security in every change.
- Leave the codebase cleaner than you found it.

## 2) Non-Negotiable Quality Standards

- Write clear, modular, strongly typed code where applicable.
- Do not ship placeholder logic, fake stubs, or dead paths as "complete".
- Prefer simple, explicit designs over clever complexity.
- Keep files and functions focused and readable.
- Add concise comments only when intent is not obvious from the code itself.
- Keep naming consistent and domain-meaningful.

## 3) Performance Standards

- Treat performance as a core feature.
- Avoid repeated heavy work in render paths, avoidable allocations, and N+1 data access patterns.
- Use caching and memoization only when justified by complexity or measurement.
- Keep hot paths predictable and efficient; document tradeoffs when complexity is necessary.

## 4) Security Standards

- Validate all untrusted input at system boundaries.
- Enforce authorization checks on all sensitive operations.
- Never hardcode secrets or leak secret values in logs, errors, or client payloads.
- Prefer least privilege and deny-by-default behavior.

## 5) Testing and Verification Standards

- Every meaningful change must include verification for the affected area.
- Run targeted linting/tests/contracts for touched code paths.
- Add or update tests when behavior changes.
- Do not mark work complete if validation is skipped without a clear blocker note.

## 6) Documentation Standards

- Update docs when behavior, contracts, or operational workflows change.
- Keep docs concise, accurate, and implementation-aligned.
- Document how to run newly added scripts or workflows.

## 7) Temporary Artifact Cleanup (Mandatory Before Finish)

Before concluding any task, agents must clean up temporary artifacts created during implementation.

- Remove temporary scripts, scratch files, one-off utilities, local dumps, ad hoc notes, and throwaway fixtures.
- Remove debug-only logs and temporary instrumentation unless intentionally retained and documented.
- Keep only durable tooling that is reusable, documented, and located in the correct directory.
- Ensure the working tree contains only intentional changes.

## 8) Git and Delivery Discipline

- Keep commits atomic and descriptive.
- Do not mix unrelated refactors with feature delivery unless required.
- Preserve branch cleanliness and reproducibility.
- Never use destructive history rewrites unless explicitly requested.

## 9) Collaboration Etiquette

- Communicate assumptions and risks clearly.
- Be direct, respectful, and solution-focused.
- Raise blockers early with concrete options to resolve them.
- Prefer actionable recommendations over vague commentary.

## 10) Definition of Done

A task is complete only when all are true.

- Implementation is correct, secure, and maintainable.
- Relevant verification passes or remaining blockers are explicitly documented.
- Documentation is updated where needed.
- No temporary artifacts remain.

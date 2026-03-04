# ToS Compliance + Signup Delivery Task (Resumable)

Status: `in_progress`  
Owner: `any agent`  
Lock: `none`

## Objective
Implement a hardened, state-aware Terms of Service flow for signup that:
1. Uses best-practice clauses informed by comparable EdTech/consumer SaaS ToS.
2. Adapts key state-specific provisions based on user billing address/state.
3. Is attached/linked directly in signup UX and captured as policy acceptance evidence.
4. Automatically emails each new signup a welcome/thank-you message with ToS PDF attached.
5. Aligns with US federal law baseline, relevant US state requirements, and Apple/Google app policy constraints.

## Constraints
- This is legal-sensitive implementation support, not legal advice.
- Do not block future work with any lock file/process.
- Keep changes additive and isolated due existing dirty worktree.

## Work Breakdown

### A) Research + Requirements (pending)
- [ ] Collect benchmark ToS structures from comparable products (EdTech + subscription SaaS + app-distributed services).
- [ ] Extract enforceability and risk clauses to include:
  - arbitration/class action waiver (state carve-outs where required)
  - limitation of liability
  - indemnification
  - acceptable use + IP
  - payment/subscription/renewal/refunds/chargebacks
  - minors + parental responsibility + COPPA/FERPA-aligned language
  - termination/suspension + anti-fraud
  - governing law + venue
  - notice/update mechanics + versioning
- [ ] Capture app store policy constraints impacting ToS wording:
  - Apple App Store Review Guidelines
  - Google Play Developer Policy
- [ ] Build a state addendum matrix (US) keyed by billing state.

### B) Product/Legal Content System (pending)
- [ ] Create ToS source-of-truth model with:
  - base terms content
  - per-state addenda
  - semantic version
  - effective date
  - hash/checksum for immutable acceptance evidence
- [ ] Render `/legal/terms` with dynamic state addendum support.
- [ ] Ensure printable/PDF-ready rendering path for email attachment.

### C) Signup Integration (pending)
- [ ] Update signup form to:
  - collect/select billing state (or use existing billing address state source)
  - show terms acknowledgment with current version
  - link to state-specific preview of terms
- [ ] Persist acceptance evidence:
  - user id
  - terms version + hash
  - billing state used for addendum
  - timestamp + IP/user-agent if available in existing policy acceptance model.

### D) Email + PDF Delivery (pending)
- [ ] Build post-signup trigger/service to send:
  - beautiful thank-you email
  - attached ToS PDF matching accepted version + state addendum
- [ ] Add email template module under `src/lib/email/`.
- [ ] Add PDF generation utility (server-side) and file naming convention.
- [ ] Add retry/error logging path and admin observability.

### E) Validation + Tests (pending)
- [ ] Unit tests for:
  - state addendum selection
  - ToS version/hash generation
  - acceptance payload completeness
  - email payload creation + attachment generation
- [ ] Integration tests for:
  - signup -> acceptance record
  - signup -> email send attempt
- [ ] Manual smoke:
  - CA/NY/TX state variants
  - iOS/Android/web signup pathways

## Proposed File Touch Map
- Existing likely touch points:
  - `src/app/auth/sign-up/page.tsx`
  - `src/app/legal/terms/page.tsx`
  - `src/app/legal/policy-acceptance.tsx`
  - `src/app/api/compliance/policy-acceptance/route.ts`
  - `src/lib/compliance/policies.ts` (if present)
  - `src/lib/email/*`
- New likely files:
  - `src/lib/legal/terms-content.ts`
  - `src/lib/legal/terms-state-addenda.ts`
  - `src/lib/legal/terms-pdf.ts`
  - `src/lib/email/signup-thank-you-email.ts`
  - `src/app/api/legal/terms/pdf/route.ts` (optional)

## Resume Commands
- Discover legal/signup/email files:
  - `rg -n "terms|policy|sign-up|policy-acceptance|email|resend" src`
- Run lint/typecheck for scope:
  - `npx eslint src/app/auth/sign-up/page.tsx src/app/legal src/app/api/compliance src/lib/legal src/lib/email`
  - `npx tsc --noEmit`

## Handoff Notes
- No lock file/process has been created.
- Safe to resume from this document at any time.

## Progress Update (2026-03-03)
Completed:
- [x] Added state-aware Terms source of truth with version/effective date, per-state addenda, and immutable SHA-256 hash.
- [x] Added Terms PDF generation utility for email attachment payloads.
- [x] Updated policy registry to use Terms version/effective date from legal source of truth.
- [x] Extended policy acceptance API to support state-aware Terms acceptance, document key/hash capture, and request evidence fields (IP/user-agent/referer metadata).
- [x] Added DB migration `202603030004_terms_stateful_acceptance_and_signup_state.sql` for billing-state and acceptance evidence fields.
- [x] Updated signup form to collect billing state, require Terms acceptance checkbox, record Terms acceptance, and trigger post-signup completion workflow.
- [x] Added post-signup API route to persist billing state in user profile and send welcome email.
- [x] Added welcome/thank-you email sender with attached Terms PDF using Resend attachments.
- [x] Replaced `/legal/terms` rendering with rich, enforceability-oriented sections plus selected state addendum.
- [x] Added benchmark/legal source matrix doc: `docs/legal/TOS-BENCHMARK-AND-COMPLIANCE-SOURCES.md`.

Remaining / Follow-up:
- [ ] Run and pass full project lint/typecheck and any test suites in CI environment.
- [ ] Add/extend automated tests for policy acceptance metadata and signup-complete email workflow.
- [ ] Decide how OAuth signup path should collect billing state + Terms acceptance before account activation.
- [ ] Legal counsel review and jurisdiction-by-jurisdiction refinement before production go-live.

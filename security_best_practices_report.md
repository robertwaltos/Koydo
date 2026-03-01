# Security Best Practices Report

Date: 2026-02-28

## Executive Summary

This review focused on payment + unlock abuse resistance and pre-deploy security controls for the Next.js backend. One high-impact flaw and multiple medium-risk issues were identified and patched in this pass. A new security pre-deploy command and a tooling/audit checklist were added.

## Findings

### SBP-001
- Severity: High
- Status: Fixed
- Location: `src/app/api/stripe/webhook/route.ts:203`, `src/app/api/stripe/webhook/route.ts:207`
- Evidence: Checkout fulfillment logic proceeded for payment-mode sessions without requiring `session.payment_status === "paid"`.
- Impact: Async payment methods could grant unlocks before settlement.
- Fix: Added explicit paid-status gate before entitlement fulfillment.

### SBP-002
- Severity: Medium
- Status: Fixed
- Location: `src/app/api/stripe/webhook/route.ts:250`, `src/app/api/stripe/webhook/route.ts:255`, `src/app/api/stripe/webhook/route.ts:260`, `src/app/api/language/exam-unlocks/checkout/route.ts:143`
- Evidence: Language unlock fulfillment did not enforce expected checkout amount/currency from trusted metadata.
- Impact: Underpayment or metadata drift could grant unlocks with incorrect financial state.
- Fix: Added metadata-backed `priceCents` and `currency` enforcement in webhook fulfillment; checkout metadata now includes canonical currency.

### SBP-003
- Severity: Medium
- Status: Fixed
- Location: `src/lib/security/ip-rate-limit.ts:168`
- Evidence: Rate limiter previously used first `x-forwarded-for` value directly.
- Impact: Header spoofing could bypass or degrade IP-based throttling.
- Fix: Added IP normalization + validation and trusted-proxy-hop parsing (`IP_RATE_LIMIT_TRUSTED_PROXY_HOPS`), selecting from right side of the forwarding chain.

### SBP-004
- Severity: Medium
- Status: Fixed
- Location: `src/lib/testing/security.ts:5`, `scripts/testing-seed-question-bank.mjs:271`
- Evidence: Testing answer hashing had a static fallback secret (`koydo-testing-dev-secret-change-me`).
- Impact: Predictable hashes reduce integrity of answer validation if explicit secret is missing.
- Fix: Removed static fallback; runtime now falls back to existing server secret material, seeding uses service role fallback.

### SBP-005
- Severity: Medium
- Status: Fixed
- Location: `src/app/api/testing/exams/[examId]/unlock/route.ts:105`
- Evidence: Testing unlock finalize endpoint had no IP throttle.
- Impact: Brute-force and abuse pressure against payment-finalization path.
- Fix: Added dedicated IP rate limit guard with `429` + `Retry-After`.

### SBP-006
- Severity: Medium
- Status: Fixed
- Location: `src/lib/billing/stripe-payment-verification.ts:74`, `src/lib/billing/stripe-payment-verification.ts:80`
- Evidence: Currency/amount checks could pass if Stripe response fields normalized to null.
- Impact: Fail-open verification edge case.
- Fix: Verification now fails closed when expected currency/amount cannot be validated.

## Remaining Lower-Risk Item (Not Patched In This Pass)

### SBP-007
- Severity: Low
- Status: Open
- Location: `src/app/api/health/route.ts:85`
- Evidence: Public health response includes internal module + DB probe check details.
- Risk: Operational reconnaissance surface.
- Suggested fix: Restrict detailed checks to authenticated/admin route and expose minimal liveness response publicly.

## Tooling and Audit Additions

- Added npm scripts in `package.json`:
  - `security:audit`
  - `security:audit:prod`
  - `security:predeploy`
- Added deployment checklist and external audit references:
  - `SECURITY-PREDEPLOY-CHECKLIST.md`

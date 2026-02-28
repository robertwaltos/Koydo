# Production Environment Checklist

Generated: 2026-02-28T16:24:12.647Z
Runtime: production
Source file: .env.production.audit
Command: `node scripts/check-env.mjs --json --runtime production --source-file .env.production.audit --fail-on-warn`
Command exit code: 1

## Summary

- Pass: 4
- Warn: 7
- Fail: 7
- Total checks: 18

## Check Results

| Check | Status | Detail |
| --- | --- | --- |
| Env Source File | FAIL | Specified env file not found: D:\PythonProjects\Koydo\eduforge-web\.env.production.audit |
| Public App URL | FAIL | Missing NEXT_PUBLIC_APP_URL. |
| Supabase URL | FAIL | Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL |
| Supabase Anon Key | FAIL | Missing NEXT_PUBLIC_SUPABASE_ANON_KEY/EXPO_PUBLIC_SUPABASE_KEY |
| Supabase Service Role Key | WARN | Missing (admin APIs requiring service role will fail) |
| Billing Provider Mode | PASS | stripe_external |
| Billing Mode Consistency | WARN | Missing BILLING_PROVIDER_MODE and NEXT_PUBLIC_BILLING_PROVIDER_MODE (defaults apply). |
| Stripe Secret + Webhook | FAIL | Billing blocked in production: missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET while BILLING_PROVIDER_MODE=stripe_external. |
| Stripe Publishable Key | WARN | Missing (optional for hosted Checkout redirects, required for Stripe Elements/Card UI flows) |
| RevenueCat Client Keys | FAIL | Missing NEXT_PUBLIC_REVENUECAT_APPLE_KEY and/or NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY. |
| RevenueCat Webhook Secret | FAIL | Missing REVENUECAT_WEBHOOK_SECRET. |
| Admin Approval Enforcement | WARN | REQUIRE_ADMIN_APPROVALS missing. |
| Debug Flags | PASS | No production debug flags enabled. |
| Escaped Line Ending Audit | PASS | No values with literal escaped line endings detected in .env file. |
| Placeholder Secrets Audit | PASS | No placeholder-style values detected in critical env keys. |
| Parent Consent Email | WARN | Missing RESEND_API_KEY or PARENT_CONSENT_FROM_EMAIL (falls back to local simulation link) |
| Parent Consent Token Secret | WARN | Missing/short (verification link signing may be weaker or disabled) |
| Mixpanel Token | WARN | Missing (analytics disabled) |

## Launch Blockers

- Env Source File: Specified env file not found: D:\PythonProjects\Koydo\eduforge-web\.env.production.audit
- Public App URL: Missing NEXT_PUBLIC_APP_URL.
- Supabase URL: Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL
- Supabase Anon Key: Missing NEXT_PUBLIC_SUPABASE_ANON_KEY/EXPO_PUBLIC_SUPABASE_KEY
- Stripe Secret + Webhook: Billing blocked in production: missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET while BILLING_PROVIDER_MODE=stripe_external.
- RevenueCat Client Keys: Missing NEXT_PUBLIC_REVENUECAT_APPLE_KEY and/or NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY.
- RevenueCat Webhook Secret: Missing REVENUECAT_WEBHOOK_SECRET.

## Warnings

- Supabase Service Role Key: Missing (admin APIs requiring service role will fail)
- Billing Mode Consistency: Missing BILLING_PROVIDER_MODE and NEXT_PUBLIC_BILLING_PROVIDER_MODE (defaults apply).
- Stripe Publishable Key: Missing (optional for hosted Checkout redirects, required for Stripe Elements/Card UI flows)
- Admin Approval Enforcement: REQUIRE_ADMIN_APPROVALS missing.
- Parent Consent Email: Missing RESEND_API_KEY or PARENT_CONSENT_FROM_EMAIL (falls back to local simulation link)
- Parent Consent Token Secret: Missing/short (verification link signing may be weaker or disabled)
- Mixpanel Token: Missing (analytics disabled)
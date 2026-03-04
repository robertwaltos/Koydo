# App Store Compliance Audit

Generated: 2026-03-04T06:45:05.254Z

Checks: 18 | Pass: 18 | Warn: 0 | Fail: 0

| Category | ID | Status | Detail |
| --- | --- | --- | --- |
| required-file | file:src/app/account/settings/page.tsx | PASS | Exists |
| required-file | file:src/app/account-deletion/page.tsx | PASS | Exists |
| required-file | file:src/app/api/account/delete/route.ts | PASS | Exists |
| required-file | file:src/app/privacy/page.tsx | PASS | Exists |
| required-file | file:src/app/terms/page.tsx | PASS | Exists |
| required-file | file:src/app/refunds/page.tsx | PASS | Exists |
| required-file | file:src/app/data-deletion/page.tsx | PASS | Exists |
| required-file | file:src/app/legal/privacy/page.tsx | PASS | Exists |
| required-file | file:src/app/legal/terms/page.tsx | PASS | Exists |
| required-file | file:src/app/legal/refunds/page.tsx | PASS | Exists |
| required-file | file:src/app/auth/age-gate/page.tsx | PASS | Exists |
| required-file | file:src/app/auth/parent-consent/page.tsx | PASS | Exists |
| required-file | file:src/app/api/compliance/age-gate/route.ts | PASS | Exists |
| required-file | file:src/app/api/compliance/parent-consent/route.ts | PASS | Exists |
| required-file | file:src/app/api/compliance/policy-acceptance/route.ts | PASS | Exists |
| billing-mode | env:BILLING_PROVIDER_MODE | PASS | Configured as stripe_external |
| auth | auth:oauth-parity | PASS | Third-party sign-in includes Sign in with Apple parity and shared sign-up usage. |
| ios-privacy | ios:tracking-consent-config | PASS | Info.plist does not declare NSUserTrackingUsageDescription. |

## Notes

- This audit checks structural and configuration basics only.
- Public store-listing URLs should resolve: /privacy, /terms, /refunds, /account-deletion, /data-deletion.
- Final app store compliance still requires policy/legal and UX review before submission.

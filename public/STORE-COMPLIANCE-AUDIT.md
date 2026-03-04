# Store Compliance Audit

Generated: 2026-03-04T06:47:56.019Z
Git commit: 227a1c5
Overall status: PASS

Checks: 53 | Pass: 53 | Warn: 0 | Fail: 0

| Category | ID | Status | Detail |
| --- | --- | --- | --- |
| required-doc | file:APP-STORE-SUBMISSION-STEPS.md | PASS | Exists |
| required-doc | file:GOOGLE-PLAY-SUBMISSION-STEPS.md | PASS | Exists |
| required-doc | file:STORE-COMPLIANCE-CHECKLIST.md | PASS | Exists |
| required-doc | file:STORE-POLICY-VERIFICATION-2026-03-04.md | PASS | Exists |
| required-doc | file:store-assets/DATA-SAFETY.md | PASS | Exists |
| required-doc | file:store-assets/google-play/DATA-SAFETY-DECLARATIONS.md | PASS | Exists |
| required-doc | file:store-assets/CONTENT-RATING-ANSWERS.md | PASS | Exists |
| required-doc | file:store-assets/SCREENSHOT-SPEC.md | PASS | Exists |
| required-doc | file:docs/google-play-data-safety.md | PASS | Exists |
| required-doc | file:public/GOOGLE-PLAY-LISTING.md | PASS | Exists |
| metadata | metadata:APP-STORE-SUBMISSION-STEPS.md | PASS | Contains last-verified style metadata. |
| metadata | metadata:GOOGLE-PLAY-SUBMISSION-STEPS.md | PASS | Contains last-verified style metadata. |
| metadata | metadata:STORE-COMPLIANCE-CHECKLIST.md | PASS | Contains last-verified style metadata. |
| metadata | metadata:STORE-POLICY-VERIFICATION-2026-03-04.md | PASS | Contains last-verified style metadata. |
| metadata | metadata:store-assets/DATA-SAFETY.md | PASS | Contains last-verified style metadata. |
| metadata | metadata:store-assets/google-play/DATA-SAFETY-DECLARATIONS.md | PASS | Contains last-verified style metadata. |
| metadata | metadata:docs/google-play-data-safety.md | PASS | Contains last-verified style metadata. |
| metadata | metadata:public/GOOGLE-PLAY-LISTING.md | PASS | Contains last-verified style metadata. |
| policy-links | links:apple-doc-links | PASS | Found 4 required-source link(s). |
| policy-links | links:google-doc-links | PASS | Found 9 required-source link(s). |
| policy-links | links:verification-log-links | PASS | Found 13 required-source link(s). |
| platform-config | ios:deployment-target | PASS | Found targets: 15.0 |
| doc-consistency | ios:deployment-target-docs | PASS | iOS deployment target appears in both submission guide and checklist. |
| platform-config | android:sdk-values | PASS | min=24, target=36, compile=36 |
| platform-config | android:target-sdk-policy-floor | PASS | targetSdkVersion 36 meets current policy floor assumption. |
| doc-consistency | android:sdk-doc-consistency | PASS | Android SDK values are aligned between source config and docs. |
| public-route | file:src/app/privacy/page.tsx | PASS | Exists |
| public-route | file:src/app/terms/page.tsx | PASS | Exists |
| public-route | file:src/app/refunds/page.tsx | PASS | Exists |
| public-route | file:src/app/account-deletion/page.tsx | PASS | Exists |
| public-route | file:src/app/data-deletion/page.tsx | PASS | Exists |
| reviewer-access | review-notes:placeholder-guard | PASS | Expected credential placeholders are present. |
| reviewer-access | review-notes:no-real-email | PASS | No real email addresses detected. |
| localization | locale:app-store-locales | PASS | Required locale files present. |
| localization | locale:google-play-locales | PASS | Required locale files present. |
| listing-length | limit:app-store-name-en-US | PASS | 28 characters |
| listing-length | limit:app-store-subtitle-en-US | PASS | 29 characters |
| listing-length | limit:app-store-keywords-en-US | PASS | 84 characters |
| listing-length | limit:app-store-promo-en-US | PASS | 109 characters |
| listing-length | limit:app-store-description-en-US | PASS | 1818 characters |
| listing-length | limit:google-play-title-en-US | PASS | 29 characters |
| listing-length | limit:google-play-short-description-en-US | PASS | 55 characters |
| listing-length | limit:google-play-full-description-en-US | PASS | 2208 characters |
| listing-content | placeholder:store-assets/app-store/en-US/name.txt | PASS | No placeholder tokens detected. |
| listing-content | placeholder:store-assets/app-store/en-US/subtitle.txt | PASS | No placeholder tokens detected. |
| listing-content | placeholder:store-assets/app-store/en-US/description.txt | PASS | No placeholder tokens detected. |
| listing-content | placeholder:store-assets/google-play/en-US/title.txt | PASS | No placeholder tokens detected. |
| listing-content | placeholder:store-assets/google-play/en-US/short_description.txt | PASS | No placeholder tokens detected. |
| listing-content | placeholder:store-assets/google-play/en-US/full_description.txt | PASS | No placeholder tokens detected. |
| listing-content | placeholder:public/GOOGLE-PLAY-LISTING.md | PASS | No placeholder tokens detected. |
| policy-url | urls:play-listing-policy-links | PASS | All required URLs present. |
| policy-url | urls:data-safety-deletion-links | PASS | All required URLs present. |
| policy-url | urls:play-data-safety-deletion-link | PASS | All required URLs present. |

## Blocking Findings

- None.

## Warnings

- None.

## Notes

- This audit validates repository-level readiness and static compliance artifacts.
- It does not replace legal review, real-console declarations, or runtime production verification.

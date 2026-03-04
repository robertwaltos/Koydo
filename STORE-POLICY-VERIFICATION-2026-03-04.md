# Store Policy Verification Log — 2026-03-04

This log records external policy verification used to update Koydo App Store / Google Play markdown docs.
**Last verified**: 2026-03-04

## Official Sources Checked

### Apple
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Upload builds to App Store Connect: https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/
- Screenshot specifications: https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications
- App Privacy details: https://developer.apple.com/help/app-store-connect/manage-app-privacy/overview-of-app-privacy-details

### Google Play
- Prepare your app for review: https://support.google.com/googleplay/android-developer/answer/9859455
- App access requirements: https://support.google.com/googleplay/android-developer/answer/15748846
- Data Safety guidance: https://support.google.com/googleplay/android-developer/answer/10787469
- Target audience & content: https://support.google.com/googleplay/android-developer/answer/9898842
- Families policy: https://support.google.com/googleplay/android-developer/answer/9285070
- Content ratings: https://support.google.com/googleplay/android-developer/answer/9859655
- Target API requirements: https://developer.android.com/google/play/requirements/target-sdk
- Android App Bundle guidance: https://developer.android.com/guide/app-bundle
- Preview asset requirements: https://support.google.com/googleplay/android-developer/answer/1078870

## Key Verified Corrections Applied

1. Removed risky age-targeting shortcut language
- Corrected docs so audience must reflect real users, not policy-avoidance strategy.

2. Replaced hardcoded bundle-size guidance
- Updated to use App Bundle + Play delivery requirements instead of fixed legacy limits.

3. Updated app-access guidance
- Added requirement for stable, non-expiring reviewer credentials and complete access instructions.

4. Removed guaranteed content-rating claims
- Content rating now treated as questionnaire-driven outcome, not pre-committed rating.

5. Reworked data-safety docs into release-configuration workflow
- Avoided stale fixed declarations; now uses processor/feature matrix tied to production config.

6. Reconciled iOS minimum version references
- Standardized around `IPHONEOS_DEPLOYMENT_TARGET = 15.0` from repo.

7. Replaced static screenshot assumptions
- Pointed to live official screenshot spec pages for both stores.

## Local Repo Evidence Used

- iOS deployment target: `ios/App/App.xcodeproj/project.pbxproj`
- Android SDK values: `android/variables.gradle`
- OAuth provider parity (includes Apple): `src/app/auth/sign-in/oauth-buttons.tsx`
- Push token handling: `src/lib/notifications/push-setup.ts`
- Consent-gated analytics init: `src/app/mixpanel-provider.tsx`, `src/lib/consent/tracking-consent.ts`
- Language/provider integrations: `src/lib/language-learning/providers.ts`

## Remaining Release-Time Decisions

- Final Data Safety declarations must be completed from exact production env flags and enabled providers.
- Final audience/Families declarations require product/legal sign-off based on actual market targeting.
- Reviewer credential placeholders in store notes must be replaced from secure secret manager at submission time.

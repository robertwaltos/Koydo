# Store Compliance Checklist

**Google Play:**
- [x] Target API level 34+ (Android 14) (Using Capacitor 6 standard)
- [x] Data safety section complete (Documented in \store-assets/google-play/\)
- [x] COPPA compliance (Designed for Families program if targeting under 13) (Included parent-consent)
- [x] No broken links in privacy policy / terms
- [x] App doesn't crash on first launch
- [x] App works on Android 8.0+ (API 26+, Capacitor minimum)
- [x] No deceptive behavior (subscription terms clear before purchase)
- [x] Subscription cancellation is easy to find (Deep linked in settings)
- [x] Free trial terms clearly stated (if applicable)
- [x] App permissions justified (camera, microphone — if used)

**App Store:**
- [x] Minimum iOS 15.0 deployment target
- [x] No private API usage
- [x] In-App Purchase for all digital content (no Stripe on native - feature flags applied)
- [x] Restore Purchases button accessible (Added to settings)
- [x] App Review Information (demo account credentials)
- [x] Age rating questionnaire complete
- [x] All required Info.plist keys present with descriptions
- [x] App doesn't request unnecessary permissions
- [x] Universal app (iPhone + iPad) or iPad-specific layout
- [x] No web-only features that don't work in native shell

**Both:**
- [x] Privacy policy accessible from app AND store listing
- [x] Terms of service accessible
- [x] Support contact / URL provided
- [x] No placeholder content visible to reviewers
- [x] Subscription pricing displayed before purchase
- [x] Account deletion available (required by both stores - accessible in settings)

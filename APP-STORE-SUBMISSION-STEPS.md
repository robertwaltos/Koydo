# Koydo — App Store Submission Steps (TestFlight & Production)

**Purpose**: Step-by-step guide for TestFlight distribution and App Store submission.
**Last verified**: 2026-03-04

Official references:
- Apple App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Apple upload builds guide: https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/
- Apple screenshot specifications (live): https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications
- Apple App Privacy details: https://developer.apple.com/help/app-store-connect/manage-app-privacy/overview-of-app-privacy-details

---

## Prerequisites Checklist

- [ ] `RELEASE-CHECKLIST.md` — all iOS items completed
- [ ] Xcode 15+ with Apple Developer account logged in
- [ ] Apple Distribution certificate + App Store provisioning profile installed
- [ ] App Store Connect access as **Admin** or **App Manager**
- [ ] All store assets prepared (see `store-assets/app-store/`)
- [ ] iOS deployment target confirmed from code: `ios/App/App.xcodeproj/project.pbxproj` = `15.0`

---

## Step 1: Prepare the Xcode Build

### Update Version and Build Number
In Xcode -> Koydo target -> General:
- **Version**: `1.0.0` (semantic version shown to users)
- **Build**: `1` (increment for every upload; unique per version)

Or via `agvtool`:
```bash
cd ios/App
agvtool new-marketing-version 1.0.0
agvtool new-version -all 1
```

### Set App Icons
- Verify `AppIcon.appiconset` contains all required sizes
- Capacitor adds icons automatically if `@capacitor/assets` is configured

### Verify Signing
- Xcode -> Signing & Capabilities tab
- Team: Select your Apple Developer team
- Signing Certificate: **Apple Distribution**
- Provisioning Profile: **App Store Distribution** (auto-managed recommended)

### Archive Build
```text
Xcode Menu -> Product -> Archive
```

---

## Step 2: Upload to App Store Connect

### Via Xcode Organizer (recommended)
1. Window -> Organizer -> Archives
2. Select the latest Koydo archive
3. Click **Distribute App**
4. Choose: **App Store Connect** -> **Upload**
5. Follow prompts -> click **Upload**

### Other supported upload paths
- **Transporter app**
- **`xcrun altool`** (Apple still documents this path for uploads)

Use `notarytool` only for notarization workflows, not for App Store iOS binary uploads.

---

## Step 3: TestFlight Internal Testing

### Wait for Processing
- Processing usually takes 10–30 minutes after upload
- Check App Store Connect -> **TestFlight** tab

### Add Internal Testers
1. App Store Connect -> TestFlight -> **Internal Testing**
2. Click **+** -> Add testers by email
3. Testers receive a TestFlight invite email
4. They install the TestFlight app and accept the invite

### Test the Build
- [ ] App launches without crash on iOS 15.0 (minimum supported)
- [ ] App launches on latest iOS release
- [ ] Login flow works end-to-end
- [ ] Premium purchase flow (Sandbox)
- [ ] Push notifications received
- [ ] Universal links open correctly
- [ ] Offline lesson download and playback

---

## Step 4: Create App Store Version in App Store Connect

Navigate to: https://appstoreconnect.apple.com -> **My Apps** -> **Koydo**

### App Information (one-time setup)
- [ ] **Name**: Koydo: Learn & Study Smarter
- [ ] **Subtitle**: AI Study, Quizzes & Exam Prep
- [ ] **Bundle ID**: com.koydo.app
- [ ] **SKU**: KOYDO-001
- [ ] **Primary Language**: English (U.S.)
- [ ] **Category**: Education (Primary), Reference (Secondary)
- [ ] **Content Rights**: accurately declared
- [ ] **Age Rating**: complete Apple questionnaire from actual app behavior
- [ ] **Privacy Policy URL**: https://koydo.app/privacy

### Version Information
Navigate to: **iOS App** -> **1.0** (create new version)

- [ ] **What's New in This Version**: from `store-assets/app-store/en-US/whats_new.txt`
- [ ] **Description**: from `store-assets/app-store/en-US/description.txt`
- [ ] **Keywords**: from `store-assets/app-store/en-US/keywords.txt` (100 chars max)
- [ ] **Promotional Text**: from `store-assets/app-store/en-US/promotional_text.txt`
- [ ] **Support URL**: https://koydo.app/support
- [ ] **Marketing URL**: https://koydo.app

---

## Step 5: Upload Screenshots

Navigate to: **Version** -> **App Previews and Screenshots**

Do not rely on hardcoded dimensions in static docs. Apple updates required display classes over time.

- [ ] Open Apple live screenshot spec page before upload
- [ ] Provide required screenshot sets for all supported device families (iPhone and iPad)
- [ ] Provide 3–10 screenshots per required size class

---

## Step 6: App Privacy (Nutrition Labels)

Navigate to: **App Privacy** -> **Get Started**

Complete from current, production data flows only:
- Canonical prep doc: `store-assets/DATA-SAFETY.md`
- Google cross-check doc: `docs/google-play-data-safety.md`

Do not copy stale declarations from old submissions. Re-validate:
- SDKs enabled in the release build
- Feature flags enabled for the release build
- Third-party processors used by release APIs

---

## Step 7: In-App Purchases

Navigate to: **Features** -> **In-App Purchases**

Use `REVENUECAT-BLUEPRINT.md` as the source of truth for plan/package IDs and baseline pricing.

For launch-ready paid plans, keep RevenueCat package identifiers exactly as:

| Internal Plan ID (RC package identifier) | Type | Baseline Price (USD) | Launch |
|-----------|------|----------------|-------|
| `language_plus_conservative` | Auto-Renewable Subscription | $5.99/mo | Yes |
| `language_family_conservative` | Auto-Renewable Subscription | $14.99/mo | Yes |

Store product identifiers can use App Store naming conventions, but map each product to the matching RevenueCat package identifier above.

### Subscription Group
- Group Name: **Koydo Premium**
- Add launch-ready paid products to the group
- Configure upgrade/downgrade order to match your launch offer hierarchy (individual vs family tiers)

### Status Check
- Both products must be **Ready to Submit** or **Approved** before the app can go live

---

## Step 8: App Review Information

Navigate to: **App Review Information**

- Sign-in required: **Yes**
- From `store-assets/app-store/en-US/review_notes.txt`:
  - Non-expiring reviewer account credentials
  - IAP sandbox testing instructions
  - Offline mode testing steps
  - Notes about push notifications requiring real device

If your app requires special setup, provide complete, reproducible steps for App Review.

---

## Step 9: Localizations (Spanish)

Navigate to: **Version** -> **English** dropdown -> **Manage Localizations** -> **Spanish (Spain)**

Add content from `store-assets/app-store/es-ES/`:
- [ ] Name
- [ ] Subtitle
- [ ] Description
- [ ] Keywords
- [ ] Promotional Text
- [ ] What's New

---

## Step 10: Submit for Review

1. Select the TestFlight build to submit
2. Export Compliance: answer based on actual encryption usage in this build
3. Click **Submit for Review**

### Review Timeline
- Standard: typically 1–3 business days
- Expedited (critical fixes): request via Resolution Center

---

## Step 11: Post-Approval Actions

- [ ] Set release date or release manually
- [ ] Monitor crash reports in Xcode Organizer -> Crashes
- [ ] Monitor reviews in App Store Connect -> Ratings and Reviews
- [ ] Respond to early reviews
- [ ] Update launch coordination docs with approval date

---

## Common Rejection Risks (and how to prevent)

| Guideline | Common Issue | Prevention |
|-----------|-------------|------------|
| 2.1 | App crashes or broken flows | Validate on iOS 15.0 minimum + latest iOS before submit |
| 3.1.1 | IAP not configured correctly | Ensure all required subscriptions are approved and mapped |
| 5.1.1 | Privacy mismatch | Ensure App Privacy labels match production data behavior |
| 4.8 | Missing Sign in with Apple parity | If third-party sign-in is offered, include Apple sign-in equivalently |
| 2.3.3 | Metadata mismatch | Ensure screenshots, descriptions, and feature claims match the shipped app |

# Koydo — Apple App Store: Complete Submission Guide

**Last Updated:** 2026-03-07
**Confidential** — For internal release management only.

Official References:
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Upload Builds](https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/)
- [Screenshot Specifications](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications)
- [App Privacy Details](https://developer.apple.com/help/app-store-connect/manage-app-privacy/overview-of-app-privacy-details)

---

## 1. App Identity

| Field | Value |
|-------|-------|
| **Bundle ID** | `com.koydo.app` |
| **App Name** | Koydo: Learn & Study Smarter |
| **Subtitle** | AI Study, Quizzes & Exam Prep |
| **SKU** | KOYDO-001 |
| **Primary Language** | English (U.S.) |
| **Category** | Education (Primary), Reference (Secondary) |
| **Age Rating** | 4+ (Ages 4 and up) |
| **Minimum iOS** | 15.0 |
| **Universal App** | Yes (iPhone + iPad) |
| **Privacy Policy URL** | https://koydo.app/privacy |
| **Support URL** | https://koydo.app/support |
| **Marketing URL** | https://koydo.app |

---

## 2. Prerequisites Checklist

- [ ] Xcode 15+ with Apple Developer account logged in
- [ ] Apple Distribution certificate + App Store provisioning profile installed
- [ ] App Store Connect access as **Admin** or **App Manager**
- [ ] All store assets prepared (see `store-assets/app-store/`)
- [ ] iOS deployment target confirmed: `ios/App/App.xcodeproj/project.pbxproj` = `15.0`

---

## 3. Build & Upload

### 3.1 Update Version and Build Number

In Xcode -> Koydo target -> General:
- **Version**: `1.0.0` (semantic version shown to users)
- **Build**: `1` (increment for every upload; unique per version)

Or via `agvtool`:
```bash
cd ios/App
agvtool new-marketing-version 1.0.0
agvtool new-version -all 1
```

### 3.2 Xcode Configuration

- Signing certificate: **Apple Distribution** (not Development)
- Provisioning profile: **App Store Distribution** (auto-managed recommended)
- Associated Domains: `applinks:koydo.app`
- Push Notifications: APS environment = production
- Keychain sharing group: `com.koydo.app`

### 3.3 Archive & Upload

```text
Xcode Menu -> Product -> Archive
Window -> Organizer -> Archives -> Select latest -> Distribute App -> App Store Connect -> Upload
```

Alternative upload paths: Transporter app, `xcrun altool`.

---

## 4. TestFlight Testing

| Phase | Audience | Purpose |
|-------|----------|---------|
| Internal Testing | Development team (up to 100) | Build verification, feature testing |
| External Testing | Beta testers (up to 10,000) | Requires Apple TestFlight review |

### Verification Points
- [ ] App launches without crash on iOS 15.0 (minimum supported)
- [ ] App launches on latest iOS release
- [ ] Login flow works end-to-end
- [ ] Premium purchase flow (Sandbox)
- [ ] Push notifications received
- [ ] Universal links open correctly
- [ ] Offline lesson download and playback

---

## 5. App Store Connect Configuration

### 5.1 App Information (one-time setup)
- [ ] **Name**: Koydo: Learn & Study Smarter
- [ ] **Subtitle**: AI Study, Quizzes & Exam Prep
- [ ] **Bundle ID**: com.koydo.app
- [ ] **SKU**: KOYDO-001
- [ ] **Primary Language**: English (U.S.)
- [ ] **Category**: Education (Primary), Reference (Secondary)
- [ ] **Content Rights**: accurately declared
- [ ] **Age Rating**: complete Apple questionnaire (see Section 7)
- [ ] **Privacy Policy URL**: https://koydo.app/privacy

### 5.2 Version Information
- [ ] **What's New**: from `store-assets/app-store/en-US/whats_new.txt`
- [ ] **Description**: from `store-assets/app-store/en-US/description.txt`
- [ ] **Keywords**: from `store-assets/app-store/en-US/keywords.txt` (100 chars max)
- [ ] **Promotional Text**: from `store-assets/app-store/en-US/promotional_text.txt`

### 5.3 Localizations (Spanish)
Navigate to: Version -> English dropdown -> Manage Localizations -> Spanish (Spain)
- [ ] Name, Subtitle, Description, Keywords, Promotional Text, What's New from `store-assets/app-store/es-ES/`

---

## 6. Screenshots

Always validate against [Apple's live screenshot spec page](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications) before upload.

### Required Device Sizes

| Slot | Device | Canvas Size |
|------|--------|-------------|
| Primary Phone | 6.9" iPhone 16 Pro Max | 1320 x 2868 px |
| Fallback Phone | 6.7" iPhone (14/15 Plus) | 1290 x 2796 px |
| Primary Tablet | iPad Pro 13" (M4) | 2064 x 2752 px |
| Optional Tablet | iPad Pro 12.9" (3rd+) | 2048 x 2732 px |

### 8 Screenshot Scenes

| # | Scene | Overlay Text |
|---|-------|-------------|
| 1 | Dashboard with greeting, streak, XP | "Study Smarter Every Day" |
| 2 | AI lesson mid-progress | "Personalized Lessons That Adapt to You" |
| 3 | Quiz with correct answer + explanation | "AI Quizzes. Instant Explanations." |
| 4 | Timed mock exam in progress | "Nail Your Exams. Score Predictions Included." |
| 5 | Spaced repetition flashcard flip | "Flashcards That Actually Stick" |
| 6 | Progress dashboard with charts | "Track Every Step of Your Journey" |
| 7 | Offline mode with downloaded lessons | "Study Anywhere. No Wi-Fi Needed." |
| 8 | Premium paywall with plan selection | "Go Premium. Unlock Everything." |

**Brand color**: `#6C47FF` (Koydo Purple)
**Localizations**: en-US + es-ES

---

## 7. Age Rating (Content Rating Questionnaire)

All categories set to **None**:

| Category | Setting |
|----------|---------|
| Cartoon or Fantasy Violence | None |
| Realistic Violence | None |
| Sexual Content or Nudity | None |
| Profanity or Crude Humor | None |
| Alcohol, Tobacco, Drug Use | None |
| Simulated Gambling | None |
| Horror/Fear Themes | None |
| Medical/Treatment Info | None |
| Mature/Suggestive Themes | None |
| Unrestricted Web Access | No |
| Contests | No |

**User-Generated Content**: Yes (moderated discussion boards)
**Expected rating**: **4+**

---

## 8. App Privacy Nutrition Labels

### Data Linked to You

| Category | Data Type | Purpose |
|----------|-----------|---------|
| Contact Info | Email Address | Account, App Functionality |
| Identifiers | User ID | App Functionality |
| Purchases | Purchase History | Subscription management |
| Usage Data | App Interactions | Analytics, App Functionality |
| Diagnostics | Crash Data | App Functionality |

### Data Not Linked to You

| Category | Data Type | Purpose |
|----------|-----------|---------|
| Diagnostics | Performance Data | App Functionality |

### Tracking

| Question | Answer |
|----------|--------|
| Does the app track users? | **No** |
| ATT prompt required? | **No** (no cross-app tracking) |
| SKAdNetwork used? | **No** (no advertising) |

### Data Retention

| Data Type | Retention |
|-----------|-----------|
| Account data | Until account deletion |
| Learning progress | Until account deletion |
| Purchase receipts | 7 years (financial compliance) |
| Crash logs | 90 days |
| Push tokens | Until unsubscribed or refreshed |

---

## 9. Third-Party SDKs (iOS)

| SDK | Version | Data Collected | Purpose |
|-----|---------|----------------|---------|
| RevenueCat iOS SDK | ~5.x | User ID, receipt data | Subscription management |
| Capacitor Push Notifications | ~7.x | Push token | Notifications |
| Supabase JS | ~2.x | Auth tokens | Authentication |

All SDKs comply with Apple's App Store privacy requirements. No data is sold to third parties. No data is used for advertising.

---

## 10. In-App Purchases

### Subscription Products

| Internal Plan ID (RC package) | Type | Baseline Price (USD) | Launch |
|-------------------------------|------|---------------------|--------|
| `language_plus_conservative` | Auto-Renewable Subscription | $5.99/mo | Yes |
| `language_family_conservative` | Auto-Renewable Subscription | $14.99/mo | Yes |

### Subscription Group
- Group Name: **Koydo Premium**
- Configure upgrade/downgrade order to match hierarchy (individual vs family)
- Both products must be **Ready to Submit** or **Approved** before the app can go live

---

## 11. App Review Information

### Demo Account Credentials

| Email | Password | Notes |
|-------|----------|-------|
| `apple-review@koydo.app` | `KoydoReview!2026` | Non-expiring. Seeded by `scripts/seed-review-accounts.mjs` |

### Review Notes (paste into App Store Connect -> App Review Information -> Notes)

```
Koydo is an AI-powered educational platform for learners ages 3 to adult.

DEMO LOGIN:
  Email: apple-review@koydo.app
  Password: KoydoReview!2026

GETTING STARTED:
1. Launch the app and tap "Sign In"
2. Enter the demo credentials above
3. You will land on the Explore page with 800+ learning modules

KEY FEATURES TO TEST:
- Explore page: browse modules by subject, age, and difficulty
- Open any module: watch video lessons, take quizzes, earn XP
- Games hub (/games): 225+ educational games across 10+ categories
- Student Dashboard (/student/dashboard): progress tracking
- Daily Challenge: one quiz per day for streak rewards
- StoryForge Cinema: AI-generated educational story films

AGE GATING & CHILD SAFETY (COPPA Compliant):
- Children under 13: analytics disabled, cookie consent auto-denied,
  freeform AI chat disabled, content moderation fails CLOSED (blocks on error)
- Parental gate (multiplication challenge) guards all external links,
  IAP triggers, and account management actions
- Parental consent flow required for under-13 account creation

SUBSCRIPTIONS (In-App Purchase):
- Free tier: full access to all 800+ modules and 225+ games
- Premium tier: available via Apple IAP through RevenueCat
- Subscription plans: Koydo Plus ($5.99/mo), Koydo Family ($14.99/mo)
- To test IAP: use a Sandbox Apple ID in Settings -> App Store -> Sandbox Account

ACCOUNT DELETION:
- Settings -> Delete Account (requires verification code)
- Also accessible at: https://koydo.app/account-deletion
- Deletion removes all user data within 30 days per privacy policy

ENCRYPTION:
- App uses only standard HTTPS/TLS for network communication
- No custom or non-exempt encryption (ITSAppUsesNonExemptEncryption = NO)

OFFLINE MODE:
- Previously viewed lessons are cached via service worker
- Offline banner appears when connectivity is lost
- Progress syncs when connection resumes
```

---

## 12. COPPA Compliance Summary

| Requirement | Status |
|-------------|--------|
| Users under 13 require parental consent | Implemented |
| Age-gate during onboarding | Active |
| HMAC-signed parent consent email flow | Implemented |
| Parent can revoke consent + trigger data erasure | Implemented |
| No personal data collected without consent | Enforced |
| Privacy Policy URL accessible | https://koydo.app/privacy |
| Analytics disabled for children | Enforced (Mixpanel + xAPI-lite) |
| Freeform chat blocked for under-11 | Enforced |
| Content moderation fails closed for children | Enforced |
| Parental gate on external links & purchases | Enforced |

---

## 13. iOS Pre-Submission Checklist

### Critical Items
- [ ] Replace `TEAMID` placeholder in AASA file with real Apple Team ID
- [ ] Configure `NEXT_PUBLIC_REVENUECAT_APPLE_KEY` in production
- [ ] Remove `server.url` from `capacitor.config.ts` (live-reload setting)
- [ ] Verify `com.koydo.app` Bundle ID in Xcode target
- [ ] Version/build numbers incremented from previous submission
- [ ] `ITSAppUsesNonExemptEncryption` = `false` in Info.plist

### IAP Requirements
- [ ] RevenueCat package mapping validated
- [ ] Restore Purchases button accessible in settings
- [ ] Subscription pricing displayed before purchase
- [ ] Free trial terms clearly stated (if applicable)
- [ ] No Stripe references visible on native

### Seeding
- [ ] Run `node scripts/seed-review-accounts.mjs` on **production** Supabase
- [ ] Verify login works: `apple-review@koydo.app` on iOS build

---

## 14. Submit for Review

1. Select the TestFlight build to submit
2. Export Compliance: `ITSAppUsesNonExemptEncryption = NO` (standard HTTPS only)
3. Click **Submit for Review**

### Review Timeline
- Standard: typically 1-3 business days
- Expedited (critical fixes): request via Resolution Center

---

## 15. Post-Approval Actions

- [ ] Set release date or release manually
- [ ] Monitor crash reports in Xcode Organizer -> Crashes
- [ ] Monitor reviews in App Store Connect -> Ratings and Reviews
- [ ] Respond to early reviews
- [ ] Update launch coordination docs with approval date

---

## 16. Common Rejection Risks

| Guideline | Common Issue | Prevention |
|-----------|-------------|------------|
| 2.1 | App crashes or broken flows | Validate on iOS 15.0 minimum + latest iOS before submit |
| 3.1.1 | IAP not configured correctly | Ensure all subscriptions are approved and mapped |
| 5.1.1 | Privacy mismatch | Ensure App Privacy labels match production data behavior |
| 4.8 | Missing Sign in with Apple parity | Apple sign-in included alongside other providers |
| 2.3.3 | Metadata mismatch | Screenshots and descriptions match the shipped app |

---

## Internal Test Accounts

| Email | Password | Role |
|-------|----------|------|
| robert@waltos.net | MyKodoApp55125 | Primary tester / Owner |
| marek@waltos.net | MyKodoApp55125 | Tester |
| pwaltos@gmail.com | MyKodoApp55125 | Tester |
| nataliawaltos93@gmail.com | MyKodoApp55125 | Tester |
| cherlloydgirl9@gmail.com | MyKodoApp55125 | Tester |

**IMPORTANT: Never delete the `apple-review@koydo.app` account.** Apple can re-review at any time.

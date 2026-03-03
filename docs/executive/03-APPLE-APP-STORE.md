# 03 — Apple App Store

> **iOS Distribution, App Store Connect & Apple Compliance**  
> Confidential · Executive Summary Document

---

## Executive Summary

Koydo is distributed on iOS via the Apple App Store as a universal app (iPhone + iPad). The app is built using Capacitor to wrap the Next.js web application in a native iOS shell, supporting all devices from iOS 14.0+. In-app purchases are handled exclusively through Apple IAP via RevenueCat (Stripe is hidden on native per App Store guidelines). The app targets a **4+ age rating** with zero restricted content, full COPPA compliance, and comprehensive App Privacy Nutrition Labels.

---

## 1. App Identity

| Field | Value |
|-------|-------|
| **Bundle ID** | `com.koydo.app` |
| **App Name** | Koydo |
| **Category** | Education |
| **Age Rating** | 4+ (Ages 4 and up) |
| **Minimum iOS** | 14.0 |
| **Universal App** | Yes (iPhone + iPad) |
| **Privacy Policy URL** | https://koydo.app/privacy |

---

## 2. Submission Process

### Step-by-Step Workflow

| Step | Action | Details |
|------|--------|---------|
| 1 | **Build** | `npm run build` → `npx cap sync ios` → Xcode Archive |
| 2 | **Upload** | Xcode Organizer → Distribute App → App Store Connect |
| 3 | **TestFlight** | Internal testers first, then external TestFlight review |
| 4 | **App Store Connect** | Create new version, assign uploaded build |
| 5 | **Screenshots** | Upload 6.9" iPhone + 13" iPad screenshots (en-US, es-ES) |
| 6 | **Privacy** | Complete App Privacy Nutrition Labels |
| 7 | **IAP Configuration** | Configure RevenueCat product IDs in App Store Connect |
| 8 | **Review Notes** | Provide test account credentials, demo instructions |
| 9 | **Submit** | Submit for App Review |
| 10 | **Monitor** | Track crash-free sessions, RevenueCat purchase events |

### Xcode Configuration Checklist

- Signing certificate: **Apple Distribution** (not Development)
- Provisioning profile: **App Store Distribution**
- Associated Domains: `applinks:koydo.app`
- Push Notifications: APS environment = production
- Keychain sharing group: `com.koydo.app`

---

## 3. TestFlight Testing

| Phase | Audience | Purpose |
|-------|----------|---------|
| Internal Testing | Development team (up to 100) | Build verification, feature testing |
| External Testing | Beta testers (up to 10,000) | Requires Apple TestFlight review |

### TestFlight Verification Points

- No crashes in crash reports
- Push notifications received
- IAP flow completes in sandbox
- Deep links open correct content
- Minimum iOS version (14.0) tested

---

## 4. Content Rating (Apple Age Rating)

All categories set to **None**:

| Category | Setting |
|----------|---------|
| Cartoon or Fantasy Violence | None |
| Realistic Violence | None |
| Profanity or Crude Humor | None |
| Mature/Suggestive Themes | None |
| Horror/Fear Themes | None |
| Medical/Treatment Information | None |
| Alcohol, Tobacco, or Drug Use | None |
| Simulated Gambling | None |
| Sexual Content or Nudity | None |

**User-Generated Content**: Yes (moderated discussion boards)  
**Expected rating**: **4+**

---

## 5. App Privacy Nutrition Labels

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

## 6. Third-Party SDKs (iOS)

| SDK | Version | Data Collected | Purpose |
|-----|---------|----------------|---------|
| RevenueCat iOS SDK | ~5.x | User ID, receipt data | Subscription management |
| Capacitor Push Notifications | ~7.x | Push token | Notifications |
| Supabase JS | ~2.x | Auth tokens | Authentication |

All SDKs comply with Apple's App Store privacy requirements. No data is sold to third parties. No data is used for advertising.

---

## 7. Screenshot Specifications

### Phone Screenshots (Required)

| Slot | Device | Canvas Size |
|------|--------|-------------|
| Primary | 6.9" iPhone 16 Pro Max | 1320 × 2868 px |
| Fallback | 6.7" iPhone (14/15 Plus) | 1290 × 2796 px |
| Optional | 6.5" iPhone (11 Pro Max) | 1242 × 2688 px |

### Tablet Screenshots (Required)

| Slot | Device | Canvas Size |
|------|--------|-------------|
| Primary | iPad Pro 13" (M4) | 2064 × 2752 px |
| Optional | iPad Pro 12.9" (3rd+) | 2048 × 2732 px |

### 8 Phone Screenshots

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

**Localization**: en-US + es-ES (+ optional es-419)  
**Brand color**: `#6C47FF` (Koydo Purple)

---

## 8. iOS-Specific Pre-Submission Checklist

### Critical Items

- [ ] Replace `TEAMID` placeholder in AASA file with real Apple Team ID
- [ ] Configure `NEXT_PUBLIC_REVENUECAT_APPLE_KEY` in production
- [ ] Implement Apple receipt verification with `APPLE_SHARED_SECRET`
- [ ] Remove `server.url` from `capacitor.config.ts` (live-reload setting)
- [ ] Verify `com.koydo.app` Bundle ID in Xcode target
- [ ] Version/build numbers incremented from previous submission

### IAP Requirements

- RevenueCat package mapping validated
- Restore Purchases button accessible in settings
- Subscription pricing displayed before purchase
- Free trial terms clearly stated (if applicable)
- No Stripe references visible on native

---

## 9. COPPA Compliance for App Review

| Requirement | Status |
|-------------|--------|
| Users under 13 require parental consent | ✅ Implemented |
| Age-gate during onboarding | ✅ Active |
| HMAC-signed parent consent email flow | ✅ Implemented |
| Parent can revoke consent + trigger data erasure | ✅ Implemented |
| No personal data collected without consent | ✅ Enforced |
| Privacy Policy URL accessible | ✅ https://koydo.app/privacy |
| Current marketing targets 13+ | ✅ |

---

*Document generated from Koydo iOS distribution documentation. For App Store questions, contact the mobile team.*

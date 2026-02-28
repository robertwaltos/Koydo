# Koydo — App Store Submission Steps (TestFlight & Production)

**Purpose**: Step-by-step guide for TestFlight distribution and App Store submission.

---

## Prerequisites Checklist

- [ ] `RELEASE-CHECKLIST.md` — all iOS items completed
- [ ] Xcode 15+ with Apple Developer account logged in
- [ ] Apple Distribution certificate + App Store provisioning profile installed
- [ ] App Store Connect access as **Admin** or **App Manager**
- [ ] All store assets prepared (see `store-assets/app-store/`)

---

## Step 1: Prepare the Xcode Build

### Update Version and Build Number
In Xcode → Koydo target → General:
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
- Xcode → Signing & Capabilities tab
- Team: Select your Apple Developer team
- Signing Certificate: **Apple Distribution**
- Provisioning Profile: **App Store Distribution** (auto-managed recommended)

### Archive Build
```
Xcode Menu → Product → Archive
```

---

## Step 2: Upload to App Store Connect

### Via Xcode Organizer (recommended)
1. Window → Organizer → Archives
2. Select the latest Koydo archive
3. Click **Distribute App**
4. Choose: **App Store Connect** → **Upload**
5. Follow prompts → click **Upload**

### Via Command Line (CI/CD)
```bash
xcrun altool --upload-app \
  --type ios \
  --file "path/to/Koydo.ipa" \
  --username "your@apple-id.com" \
  --password "@keychain:AC_PASSWORD"
```

Or with `xcrun notarytool` for newer toolchains.

---

## Step 3: TestFlight Internal Testing

### Wait for Processing
- Processing takes 10–30 minutes after upload
- Check App Store Connect → **TestFlight** tab

### Add Internal Testers
1. App Store Connect → TestFlight → **Internal Testing**
2. Click **+** → Add testers by email
3. Testers receive a TestFlight invite email
4. They install the TestFlight app and accept the invite

### Test the Build
- [ ] App launches without crash on iOS 14.0 (minimum supported)
- [ ] App launches on latest iOS (17.x)
- [ ] Login flow works end-to-end
- [ ] Premium purchase flow (Sandbox)
- [ ] Push notifications received
- [ ] Universal Links open correctly
- [ ] Offline lesson download and playback

---

## Step 4: Create App Store Version in App Store Connect

Navigate to: https://appstoreconnect.apple.com → **My Apps** → **Koydo**

### App Information (one-time setup)
- [ ] **Name**: Koydo: Learn & Study Smarter
- [ ] **Subtitle**: AI Study, Quizzes & Exam Prep
- [ ] **Bundle ID**: com.koydo.app
- [ ] **SKU**: KOYDO-001
- [ ] **Primary Language**: English (U.S.)
- [ ] **Category**: Education (Primary), Reference (Secondary)
- [ ] **Content Rights**: Does not contain third-party content
- [ ] **Age Rating**: 4+ (set via questionnaire)
- [ ] **Privacy Policy URL**: https://koydo.app/privacy

### Version Information
Navigate to: **iOS App** → **1.0** (create new version)

- [ ] **What's New in This Version**: from `store-assets/app-store/en-US/whats_new.txt`
- [ ] **Description**: from `store-assets/app-store/en-US/description.txt`
- [ ] **Keywords**: from `store-assets/app-store/en-US/keywords.txt` (100 chars max)
- [ ] **Promotional Text**: from `store-assets/app-store/en-US/promotional_text.txt`
- [ ] **Support URL**: https://koydo.app/support
- [ ] **Marketing URL**: https://koydo.app

---

## Step 5: Upload Screenshots

Navigate to: **Version** → **App Previews and Screenshots**

### Required Device Sizes
- [ ] **6.9" iPhone** (iPhone 16 Pro Max): 1320 × 2868 px — at least 3 screenshots
- [ ] **iPad Pro 13"**: 2064 × 2752 px — at least 3 screenshots

Upload using:
- Drag & drop in App Store Connect, or
- Fastlane Deliver (automated): `fastlane deliver`

---

## Step 6: App Privacy

Navigate to: **App Privacy** → **Get Started**

Complete per `store-assets/DATA-SAFETY.md` Section 2.

Key declarations:
- Contact Info (Email) — Used to Track You: **No** → Linked to You: **Yes**
- User ID — Linked to You: **Yes**
- Purchase History — Linked to You: **Yes**
- App Interactions — Linked to You: **Yes**
- Crash Data — Not Linked to You: **Yes**

---

## Step 7: In-App Purchases

Navigate to: **Features** → **In-App Purchases**

### Create Products (if not already done)
| Product ID | Type | Reference Name | Price |
|-----------|------|----------------|-------|
| `com.koydo.app.premium.monthly` | Auto-Renewable Subscription | Koydo Premium Monthly | $9.99/mo |
| `com.koydo.app.premium.annual` | Auto-Renewable Subscription | Koydo Premium Annual | $59.99/yr |

### Subscription Group
- Group Name: **Koydo Premium**
- Add both products to the group
- Set annual as the preferred upgrade path

### Status Check
- Both products must be **Ready to Submit** or **Approved** before the app can go live

---

## Step 8: App Review Information

Navigate to: **App Review Information**

- Sign-in required: **Yes**
- From `store-assets/app-store/en-US/review_notes.txt`:
  - Test account email + password
  - IAP sandbox testing instructions
  - Offline mode testing steps
  - Notes about push notifications requiring real device

---

## Step 9: Localizations (Spanish)

Navigate to: **Version** → **English** dropdown → **Manage Localizations** → **Spanish (Spain)**

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
2. Export Compliance: **No** (standard HTTPS networking only, no custom encryption)
3. Click **Submit for Review**

### Review Timeline
- Standard: 1–3 business days
- Expedited (for critical fixes): Request via Resolution Center

---

## Step 11: Post-Approval Actions

- [ ] Set release date or release manually
- [ ] Monitor crash reports in Xcode Organizer → Crashes
- [ ] Monitor reviews in App Store Connect → Ratings and Reviews
- [ ] Respond to early reviews
- [ ] Update `V1-LAUNCH-COORDINATION.md` with approval date
- [ ] Post launch announcement

---

## Common Rejection Reasons & Fixes

| Guideline | Common Issue | Fix |
|-----------|-------------|-----|
| 2.1 | App crashes on launch | Test on iOS 14.0 minimum |
| 3.1.1 | IAP product not approved | Approve all IAP products first |
| 5.1.1 | Privacy policy missing | Verify `https://koydo.app/privacy` is live |
| 4.0 | Minimum functionality | Add value for free tier to justify standalone app |
| 2.3.3 | Placeholder content | Replace all placeholder text/images |
| 4.8 | Sign in with Apple not offered | Only required if other social login is offered |

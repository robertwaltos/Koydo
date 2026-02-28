# Koydo — Google Play Submission Steps

**Purpose**: Step-by-step guide for a dry-run and live submission to Google Play.

---

## Prerequisites Checklist

Before starting:
- [ ] `RELEASE-CHECKLIST.md` fully completed
- [ ] AAB built via `./gradlew bundleRelease` — verify no errors
- [ ] Release keystore available (NOT the debug keystore)
- [ ] Google Play Console access as **Release Manager** or **Owner**
- [ ] All store assets prepared (see `store-assets/google-play/`)

---

## Step 1: Generate the Signed AAB

```bash
# From the android/ directory
cd android
./gradlew bundleRelease
```

**Output**: `android/app/build/outputs/bundle/release/app-release.aab`

### Verify the AAB
```bash
# Check bundle size (should be < 150 MB)
ls -lh android/app/build/outputs/bundle/release/app-release.aab

# Verify signing (replace with your keystore details)
jarsigner -verify -verbose -certs android/app/build/outputs/bundle/release/app-release.aab
```

---

## Step 2: Log Into Google Play Console

1. Navigate to: https://play.google.com/console
2. Select **Koydo** app (or create it if first submission)
3. Verify account status shows no policy violations

---

## Step 3: Create a New Release

### For Internal Testing (first submission)
1. Left sidebar → **Testing** → **Internal testing**
2. Click **Create new release**
3. Upload `app-release.aab`
4. Fill in **Release name**: `v1.0.0 (1)` (matches versionName / versionCode)
5. Add **Release notes** from `store-assets/google-play/en-US/changelogs/1.txt`
6. Click **Save** → **Review release**

### For Production
1. Left sidebar → **Production**
2. Click **Create new release**
3. Upload the same AAB (or promote from Internal Testing)
4. Set **Rollout percentage**: 20% for first submission (staged rollout)
5. Add release notes
6. Click **Save** → **Review release**

---

## Step 4: Complete Store Listing

Navigate to: **Grow** → **Store presence** → **Main store listing**

### App Details
- [ ] **App name**: `Koydo – Learn & Study Smarter` (from `store-assets/google-play/en-US/title.txt`)
- [ ] **Short description**: from `store-assets/google-play/en-US/short_description.txt`
- [ ] **Full description**: from `store-assets/google-play/en-US/full_description.txt`

### Graphics
- [ ] App icon: 512 × 512 PNG (from `store-assets/placeholders/icon-512.png` or production build)
- [ ] Feature graphic: 1024 × 500 PNG
- [ ] Phone screenshots: at least 2 (from `store-assets/screenshots/google-play/en-US/phone/`)
- [ ] 7-inch tablet screenshots (optional)
- [ ] 10-inch tablet screenshots (optional)

### Translations
- [ ] Add `es-ES` store listing from `store-assets/google-play/es-ES/`
- [ ] Add `es-419` (optional, falls back to es-ES)

---

## Step 5: Content Rating (IARC)

Navigate to: **Policy** → **App content** → **Content rating**

1. Click **Start questionnaire**
2. Category: **Education**
3. Answer per `store-assets/CONTENT-RATING-ANSWERS.md`
4. Submit — expected result: **Everyone (E)**

---

## Step 6: Data Safety

Navigate to: **Policy** → **App content** → **Data safety**

1. Complete form per `store-assets/DATA-SAFETY.md`
2. Data types to declare:
   - Email address (collected, required, account management)
   - User IDs (collected, required, app functionality)
   - Purchase history (collected, required, app functionality)
   - App interactions (collected, required, analytics)
   - Crash logs (collected, required, app functionality)
3. Confirm data encrypted in transit: **Yes**
4. Allow users to request deletion: **Yes**
5. Save and submit

---

## Step 7: Target Audience & Content

Navigate to: **Policy** → **App content** → **Target audience and content**

- **Primary target age group**: 13-17, 18-24 (or 18+ to avoid COPPA triggers)
- App does NOT primarily target children: ✅

---

## Step 8: App Access

Navigate to: **Policy** → **App content** → **App access**

Select: **All or some functionality is restricted** → Add instructions:
```
Login required.
Test credentials:
  Email: review@koydo.app
  Password: Koydo@Review2024
```

---

## Step 9: Review and Submit

1. Left sidebar → **Publishing overview**
2. Review all warnings/errors — resolve all before submitting
3. Click **Send for review** (for Production) or **Rollout to internal testing** (for testing tracks)

---

## Step 10: Post-Submission Monitoring

| Timeline | Action |
|----------|--------|
| 0–24 hours | Check for policy rejection emails |
| 1–7 days | Monitor review status in Play Console |
| After approval | Monitor Crash-free sessions rate (target: >99.5%) |
| After approval | Monitor ANR rate (target: <0.47%) |
| 48 hours in | Check RevenueCat for purchase event flow |
| 1 week | Review user ratings and respond to early reviews |

---

## Common Rejection Reasons & Fixes

| Rejection | Fix |
|-----------|-----|
| Policy: Billing | Ensure subscription pricing is accurate in store listing |
| Data Safety mismatch | Re-audit `DATA-SAFETY.md` and update form |
| Metadata keyword stuffing | Review `full_description.txt` — remove repetitive keywords |
| Missing privacy policy | Verify `https://koydo.app/privacy` is live |
| App crashes on launch | Test on lowest supported API level (API 26) |

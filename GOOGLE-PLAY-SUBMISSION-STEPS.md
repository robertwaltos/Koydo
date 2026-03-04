# Koydo — Google Play Submission Steps

**Purpose**: Step-by-step guide for internal testing and production submission to Google Play.
**Last verified**: 2026-03-04

Official references:
- Prepare app for review: https://support.google.com/googleplay/android-developer/answer/9859455
- App access policy details: https://support.google.com/googleplay/android-developer/answer/15748846
- Data safety form: https://support.google.com/googleplay/android-developer/answer/10787469
- Target audience and content: https://support.google.com/googleplay/android-developer/answer/9898842
- Families policy: https://support.google.com/googleplay/android-developer/answer/9285070
- Target API requirements: https://developer.android.com/google/play/requirements/target-sdk
- Android App Bundles: https://developer.android.com/guide/app-bundle
- Store listing graphic requirements: https://support.google.com/googleplay/android-developer/answer/1078870
- Content ratings: https://support.google.com/googleplay/android-developer/answer/9859655

For launch gating + anti-stall controls, also use: `GOOGLE_PLAY_LAUNCH_PATH.md`.

---

## Prerequisites Checklist

Before starting:
- [ ] `RELEASE-CHECKLIST.md` fully completed
- [ ] AAB built via `./gradlew bundleRelease` with no errors
- [ ] Release keystore available (not debug keystore)
- [ ] Google Play Console access as **Release Manager** or **Owner**
- [ ] All store assets prepared (see `store-assets/google-play/`)
- [ ] Android versioning verified from repo:
  - `android/variables.gradle`: `minSdkVersion = 24`, `targetSdkVersion = 36`, `compileSdkVersion = 36`

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
# Check output
ls -lh android/app/build/outputs/bundle/release/app-release.aab

# Verify signing (replace with your keystore details)
jarsigner -verify -verbose -certs android/app/build/outputs/bundle/release/app-release.aab
```

Notes:
- Do not use a hardcoded `<150MB` pass/fail rule.
- If your delivered app would exceed Play size constraints, use Play Asset Delivery / Play Feature Delivery per official App Bundle docs.

---

## Step 2: Log Into Google Play Console

1. Navigate to: https://play.google.com/console
2. Confirm the correct developer account
3. Select **Koydo** app (or create it if first submission)
4. Verify account status has no active policy blocks

---

## Step 3: Create a New Release

### Internal testing (recommended first)
1. Left sidebar -> **Testing** -> **Internal testing**
2. Click **Create new release**
3. Upload `app-release.aab`
4. Set **Release name** to match `versionName/versionCode`
5. Add **Release notes** from `store-assets/google-play/en-US/changelogs/1.txt`
6. Click **Save** -> **Review release**

### Production rollout
1. Left sidebar -> **Production**
2. Click **Create new release**
3. Upload the approved AAB (or promote from test track)
4. Use staged rollout (for example 20% initial)
5. Add release notes
6. Click **Save** -> **Review release**

---

## Step 4: Complete Store Listing

Navigate to: **Grow** -> **Store presence** -> **Main store listing**

### App Details
- [ ] **App name** from `store-assets/google-play/en-US/title.txt`
- [ ] **Short description** from `store-assets/google-play/en-US/short_description.txt`
- [ ] **Full description** from `store-assets/google-play/en-US/full_description.txt`

### Graphics
- [ ] App icon: 512x512 PNG
- [ ] Feature graphic: 1024x500 PNG
- [ ] Phone screenshots: provide required minimum count
- [ ] 7-inch / 10-inch tablet screenshots where required by your listing strategy

Always validate against Google’s live asset rules before submitting.

### Translations
- [ ] Add `es-ES` store listing from `store-assets/google-play/es-ES/`
- [ ] Add additional locales as needed

---

## Step 5: Content Rating (IARC)

Navigate to: **Policy** -> **App content** -> **Content rating**

1. Start IARC questionnaire
2. Use `store-assets/CONTENT-RATING-ANSWERS.md` as draft guidance
3. Submit final answers based on current app behavior

Do not assume an exact rating result in advance. Rating depends on questionnaire responses and policy interpretation.

---

## Step 6: Data Safety

Navigate to: **Policy** -> **App content** -> **Data safety**

1. Start from:
   - `store-assets/DATA-SAFETY.md`
   - `docs/google-play-data-safety.md`
2. Reconcile with production behavior before submit:
   - release build SDKs
   - enabled features/flags
   - server endpoints used by mobile clients
3. Confirm:
   - encrypted in transit
   - account/data deletion path
   - data collected vs shared classifications

Important Google definition: data is considered "collected" when transmitted off-device from app to developer/third party.

---

## Step 7: Target Audience & Content

Navigate to: **Policy** -> **App content** -> **Target audience and content**

- Select only age groups that truly match your app users.
- Do not select an older audience just to avoid additional policy obligations.
- If the app targets children, comply with Families policy requirements.

---

## Step 8: App Access

Navigate to: **Policy** -> **App content** -> **App access**

If any functionality is gated by login, payment, org enrollment, region, or invite code:
- [ ] Provide complete reviewer steps
- [ ] Provide working credentials (no expiration)
- [ ] Keep credentials active at all times while app is reviewed
- [ ] Remove geofence/IP/device restrictions for reviewer path

---

## Step 9: Review and Submit

1. Left sidebar -> **Publishing overview**
2. Resolve all blocking policy warnings/errors
3. Submit for review (production) or roll out to testing track

---

## Step 10: Post-Submission Monitoring

| Timeline | Action |
|----------|--------|
| 0–24 hours | Check for policy rejection emails |
| 1–7 days | Monitor review status in Play Console |
| After approval | Monitor crash-free users and ANR metrics |
| 48 hours in | Validate purchase/webhook flows |
| 1 week | Review ratings and policy messages |

---

## Common Rejection Risks (and how to prevent)

| Risk | Prevention |
|------|------------|
| Data Safety mismatch | Re-audit declarations from production behavior before submit |
| Incomplete app access instructions | Provide persistent, tested reviewer credentials and exact steps |
| Misleading target audience declaration | Choose only real audience groups; align with Families obligations if applicable |
| Broken metadata | Ensure listing claims/screenshots reflect what reviewers can actually use |
| Policy or API-level non-compliance | Keep target API compliant with current Play requirements |

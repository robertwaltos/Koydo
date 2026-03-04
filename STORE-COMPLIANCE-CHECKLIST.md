# Store Compliance Checklist

**Purpose**: release-gate checklist for Apple App Store and Google Play.
**Last updated**: 2026-03-04

Status keys:
- `Verified in repo`: confirmed from code/config in this workspace
- `Needs runtime verification`: must be checked in the release build or console before submission
- `Policy review required`: legal/policy answer requires human review

---

## Google Play

| Check | Status | Evidence / Action |
|---|---|---|
| Target API requirement met | Verified in repo | `android/variables.gradle` sets `targetSdkVersion = 36` |
| Min supported Android version documented | Verified in repo | `android/variables.gradle` sets `minSdkVersion = 24` |
| Data Safety form prepared from current behavior | Needs runtime verification | Reconcile `store-assets/DATA-SAFETY.md` and `docs/google-play-data-safety.md` against release SDKs/flags |
| Target audience declaration accurate | Policy review required | Must match actual audience; do not select older groups only to avoid child-policy obligations |
| Families policy obligations evaluated | Policy review required | Required if any child-directed targeting/features apply |
| App access reviewer credentials stable | Needs runtime verification | Ensure working non-expiring credentials + complete instructions in Play Console |
| Privacy policy + terms links valid | Needs runtime verification | Verify production URLs are live and consistent with listing |
| App does not crash on first launch | Needs runtime verification | Validate in internal testing track on supported Android versions |
| Account deletion path available | Needs runtime verification | Validate in-app deletion and public deletion URL used in store forms |

---

## Apple App Store

| Check | Status | Evidence / Action |
|---|---|---|
| Minimum iOS deployment target documented | Verified in repo | `ios/App/App.xcodeproj/project.pbxproj` -> `IPHONEOS_DEPLOYMENT_TARGET = 15.0` |
| Sign in with Apple parity requirement covered | Verified in repo | OAuth buttons include Apple provider alongside other third-party providers |
| In-App Purchase path present for native | Verified in repo | RevenueCat Capacitor integration exists; native billing paths are implemented |
| App Privacy labels aligned to release behavior | Needs runtime verification | Re-run privacy data-flow audit before submission |
| Age rating questionnaire answered from real content | Policy review required | Complete in App Store Connect from current app functionality |
| App Review account + notes complete | Needs runtime verification | Populate `store-assets/app-store/en-US/review_notes.txt` placeholders from secure secret manager |
| Required permission disclosures accurate | Verified in repo | iOS `Info.plist` includes microphone usage description; Android manifest currently only `INTERNET` |
| Privacy policy + terms links valid | Needs runtime verification | Confirm production links are reachable from app and listing |

---

## Cross-Store

| Check | Status | Evidence / Action |
|---|---|---|
| Listing copy matches shipped functionality | Needs runtime verification | Remove claims for unfinished/flagged features before submission |
| Screenshots and previews meet current store specs | Needs runtime verification | Validate against live Apple/Google screenshot rules at submit time |
| No placeholder reviewer credentials in committed assets | Needs runtime verification | Keep placeholders in repo; inject real credentials at submission time only |
| Data deletion + support channels documented | Verified in repo | Deletion paths and support/legal routes are present in app/router |
| Compliance docs have current “last verified” date and source links | Verified in repo | Updated store docs include source references and verification date |

# Koydo — Screenshot Specification (Store Submission)

**Version**: 2026-03-04

Official references (use these as source of truth at upload time):
- Apple screenshot specs: https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications
- Google Play preview assets: https://support.google.com/googleplay/android-developer/answer/1078870

This file defines production workflow and naming. Device-size requirements can change; always re-check official pages before upload.

---

## 1) Apple App Store

Workflow:
- [ ] Open Apple screenshot specification page
- [ ] Confirm required device classes for current App Store Connect form
- [ ] Export 3–10 screenshots for each required class
- [ ] Validate localization coverage (`en-US`, `es-ES`, and any launch locales)

Do not lock the pipeline to one hardcoded device generation (for example only `6.9"` or only one iPad class).

---

## 2) Google Play

Minimum workflow:
- [ ] App icon (512x512)
- [ ] Feature graphic (1024x500)
- [ ] Phone screenshots meeting Play requirements
- [ ] Tablet screenshots if your listing strategy requires them

Use Play’s live help page for exact accepted dimensions/formats.

---

## 3) Screenshot Storyboard (Recommended)

Phone set (recommended 8 shots):
1. Home/value proposition
2. Personalized lesson flow
3. Quiz + explanations
4. Exam prep mode
5. Flashcards/spaced repetition
6. Progress dashboard
7. Offline learning
8. Premium/paywall + restore path

Tablet set (recommended 4 shots):
1. Split-pane learning layout
2. Quiz on large screen
3. Progress analytics dashboard
4. Study flow in portrait

---

## 4) Naming Convention

```text
koydo_{platform}_{formfactor}_{shot}_{locale}.png

Examples:
koydo_ios_phone_01_en-US.png
koydo_ios_tablet_01_es-ES.png
koydo_android_phone_01_en-US.png
```

---

## 5) Delivery Folders

```text
store-assets/screenshots/app-store/{locale}/
store-assets/screenshots/google-play/{locale}/
```

---

## 6) Final QA

- [ ] No placeholder/mock content
- [ ] UI in screenshots exists in release build
- [ ] Prices/plan names match live billing configuration
- [ ] All text is localized correctly
- [ ] No reviewer-only or debug UI in captures

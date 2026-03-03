# Koydo — Screenshot Specification
**Version 2.0** | For App Store & Google Play Submission

---

## Device & Size Requirements

### Apple App Store

| Slot | Device | Canvas Size | Required |
|------|--------|-------------|----------|
| 1 | 6.9" iPhone 16 Pro Max | 1320 × 2868 px | ✅ Yes |
| 2 | 6.7" iPhone (14/15 Plus) | 1290 × 2796 px | ✅ Yes (fallback) |
| 3 | 6.5" iPhone (11 Pro Max) | 1242 × 2688 px | Optional |
| 4 | iPad Pro 13" (M4) | 2064 × 2752 px | ✅ Yes |
| 5 | iPad Pro 12.9" (3rd+) | 2048 × 2732 px | Optional |

**Required count**: 3–10 screenshots per size class (phone + tablet separate)

---

### Google Play Console

| Asset Type | Size | Required |
|------------|------|----------|
| Phone screenshots | Min 1080 × 1920 px (16:9 or 9:16) | ✅ 2–8 required |
| 7-inch tablet screenshots | 1200 × 1600 px (landscape or portrait) | Optional |
| 10-inch tablet screenshots | 1920 × 1200 px (landscape or portrait) | Optional |
| Feature Graphic | 1024 × 500 px | ✅ Required |

---

## Screenshot Shots — 8 Phone Screens

### Shot 1 — Hero / Landing
- **Scene**: Landing page hero — watercolor sunrise treehouse with golden path
- **Key UI**: Koydo logo, hero tagline, "Start Exploring Free" CTA button, voice picker
- **Overlay text**: "850+ Modules. Zero Ads. Free to Start."
- **Background**: Warm watercolor hero image (hero-home.png)

### Shot 2 — Explore Subjects
- **Scene**: Subject grid with emoji cards — Math, Science, Reading, Coding, History, Engineering, Medicine, Business
- **Key UI**: Age-stage navigation pills, subject emoji cards, "Browse all subjects" link
- **Overlay text**: "Every Subject, Every Age"
- **Background**: Soft watercolor pattern (bg-lower-page.png)

### Shot 3 — Interactive Lesson
- **Scene**: Lesson page mid-lesson with narration controls, progress bar, interactive exercise
- **Key UI**: Lesson content, voice/narration controls, progress indicator, chapter nav
- **Overlay text**: "Narrated Interactive Lessons"
- **Background**: Clean white neumorphic card layout

### Shot 4 — Quiz / Practice
- **Scene**: Multiple-choice question with one answer selected (correct — emerald green highlight)
- **Key UI**: Question text, 4 answer options, instant feedback explanation panel
- **Overlay text**: "600K+ Questions. Instant Feedback."
- **Background**: Soft neumorphic surface

### Shot 5 — Content Sources
- **Scene**: Content sources card — NASA, OpenStax, Smithsonian, NIH, MIT, Exercism logos/labels
- **Key UI**: Trust anchors grid, content stats (121K math problems, 320K medical MCQs, 30+ languages)
- **Overlay text**: "Powered by World-Class Sources"
- **Background**: Frosted glass card on watercolor bg

### Shot 6 — Progress Dashboard
- **Scene**: Progress screen with XP ring, streak counter, mastery badges, weekly activity chart
- **Key UI**: XP progress arc, streak badge 🔥, weekly bar chart, mastered topics count
- **Overlay text**: "Track Every Step of Your Journey"
- **Background**: Dashboard surface

### Shot 7 — Parent Dashboard
- **Scene**: Parent dashboard showing child profiles, progress summaries, goal settings
- **Key UI**: Child profile cards, progress bars per subject, "Set Goals" button
- **Overlay text**: "Built for Families. Full Visibility."
- **Background**: Clean neumorphic surface

### Shot 8 — Trust & Safety
- **Scene**: Trust & Safety section — COPPA badge, Zero Ads badge, No Tracking badge, Educator Reviewed
- **Key UI**: 4 trust cards with icons, privacy commitments, pricing cards (Individual $5.99/mo, Family $14.99/mo)
- **Overlay text**: "COPPA Compliant. Zero Ads. Your Data Is Yours."
- **Background**: Soft watercolor bg with frosted cards

---

## Tablet Screenshot Shots — 4 iPad Screens

### Tablet Shot 1 — Landing Hero (Landscape)
- **Scene**: Full landing page hero in landscape — watercolor treehouse, tagline, CTA
- **Note**: Showcase the cinematic hero at full width

### Tablet Shot 2 — Subject Grid (Landscape)
- **Scene**: Subject grid + age-stage pills in landscape — all 8 subjects visible in 4-col grid
- **Note**: Tablet-optimized responsive layout

### Tablet Shot 3 — Interactive Lesson (Landscape)
- **Scene**: Lesson in landscape mode — wider content area, narration controls visible
- **Note**: Showcase tablet reading experience

### Tablet Shot 4 — Progress Dashboard (Portrait)
- **Scene**: Full dashboard in portrait — XP ring, streak, charts all visible
- **Note**: Showcase data-rich dashboard

---

## Asset Naming Convention

```
koydo_phone_{shot_number}_{locale}_{device_size}.png
koydo_tablet_{shot_number}_{locale}_{device_size}.png

Examples:
  koydo_phone_01_en_6.9in.png
  koydo_phone_01_es_6.9in.png
  koydo_tablet_01_en_ipad_13in.png
```

---

## Brand / Style Guidelines

- **Background**: `#fffdf6` (warm white)
- **Foreground**: `#2f2942` (deep charcoal)
- **Accent**: `#c2185b` (brand pink)
- **Primary gradient**: Emerald `#059669 → #10b981 → #34d399`
- **Card style**: Neumorphic soft UI — `bg-white/70 border-white/60 backdrop-blur-md`
- **Display font**: Sora (--font-display-sans)
- **Body font**: Nunito Sans (--font-body-sans)
- **Overlay text position**: Top 20% of screen with semi-transparent white backing pill
- **Status bar**: Show clean time (9:41 AM) + full signal/battery
- **Device frame**: Apple device frames for iOS, Pixel frame for Android
- **Corner radius**: 44px for phone frames, 30px for tablet frames
- **No dark mode** in screenshots — use light theme only

---

## Localization

All 8 phone shots + 4 tablet shots must be produced in:
- `en-US` (English — United States)
- `es-ES` (Spanish — Spain)
- `es-419` (Spanish — Latin America) — optional, use es-ES as fallback

---

## Tools / Pipeline

- **Design**: Figma or direct Playwright screenshots from live app
- **Framing**: AppMockUp Studio or Previewed.app
- **Export**: PNG, no compression, sRGB color profile
- **Delivery folder**: `store-assets/screenshots/{platform}/{locale}/`

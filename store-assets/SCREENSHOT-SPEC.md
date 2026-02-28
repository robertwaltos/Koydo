# Koydo — Screenshot Specification
**Version 1.0** | For App Store & Google Play Submission

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

### Shot 1 — Hero / Value Prop
- **Scene**: Home dashboard with "Good morning! Ready to study?" greeting
- **Key UI**: User avatar, today's focus subject, streak counter (🔥 12), XP bar
- **Overlay text**: "Study Smarter Every Day"
- **Background**: Gradient hero (brand purple → indigo)

### Shot 2 — AI Lesson In Progress
- **Scene**: Lesson page mid-lesson with progress bar at 40%
- **Key UI**: Lesson content area, chapter nav, "Continue" CTA
- **Overlay text**: "Personalized Lessons That Adapt to You"
- **Background**: Clean white card layout

### Shot 3 — Quiz Engine
- **Scene**: Multiple-choice quiz with one answer selected (correct — green highlight)
- **Key UI**: Question text, 4 answer options, explanation panel popped up
- **Overlay text**: "AI Quizzes. Instant Explanations."
- **Background**: Surface level 1 background

### Shot 4 — Exam Prep Mode
- **Scene**: Timed mock exam in progress — timer visible (12:34 remaining), question 7 of 25
- **Key UI**: Timer badge, question navigator dots, answer options
- **Overlay text**: "Nail Your Exams. Score Predictions Included."
- **Background**: Exam mode (slightly darker theme)

### Shot 5 — Spaced Repetition Flashcards
- **Scene**: Flashcard flip animation (card showing "front" with Spanish word)
- **Key UI**: Card, "Know it" / "Still learning" buttons, "Due today: 12" badge
- **Overlay text**: "Flashcards That Actually Stick"
- **Background**: Soft gradient card background

### Shot 6 — Progress Dashboard
- **Scene**: Progress screen with weekly bar chart, streak 🔥, XP level ring
- **Key UI**: Weekly bar chart, "Mastered Topics: 24", streak badge, XP progress arc
- **Overlay text**: "Track Every Step of Your Journey"
- **Background**: Dashboard surface

### Shot 7 — Offline Mode
- **Scene**: Lesson list with ✅ downloaded badges on 3 lessons + airplane mode banner
- **Key UI**: Download icons, "Available Offline" green badges, top offline mode banner
- **Overlay text**: "Study Anywhere. No Wi-Fi Needed."
- **Background**: Lessons list page

### Shot 8 — Premium Paywall / Unlock Screen
- **Scene**: Premium plan selection (Monthly vs Annual, Annual highlighted as "Best Value")
- **Key UI**: Plan cards, feature checklist, "Start Free Trial" CTA, "Restore Purchases" link
- **Overlay text**: "Go Premium. Unlock Everything."
- **Background**: Brand gradient background

---

## Tablet Screenshot Shots — 4 iPad Screens

### Tablet Shot 1 — Split View Dashboard
- **Scene**: iPad landscape — left-side nav + right-side lesson content visible simultaneously
- **Note**: Showcase two-column adaptive layout

### Tablet Shot 2 — AI Quiz (Landscape)
- **Scene**: Quiz in landscape mode, answer options in 2-column grid layout
- **Note**: Tablet-optimized quiz UX

### Tablet Shot 3 — Progress Dashboard (Landscape)
- **Scene**: Full analytics dashboard in landscape — charts, stats, XP arc all visible

### Tablet Shot 4 — Flashcard Study (Portrait)
- **Scene**: Full-screen flashcard on iPad, larger card with study session progress bar

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

- **Primary color**: `#6C47FF` (Koydo Purple)
- **Secondary**: `#3B82F6` (Blue)
- **Font**: System font (SF Pro / Roboto) — bold for overlays
- **Overlay text position**: Top 25% of screen with semi-transparent backing pill
- **Status bar**: Show clean time (9:41 AM) + full signal/battery
- **Device frame**: Use device frames for App Store (Apple frames for iOS, Pixel frame for Android)
- **Corner radius**: 44px for phone frames, 30px for tablet frames

---

## Localization

All 8 phone shots + 4 tablet shots must be produced in:
- `en-US` (English — United States)
- `es-ES` (Spanish — Spain)
- `es-419` (Spanish — Latin America) — optional, use es-ES as fallback

---

## Tools / Pipeline

- **Design**: Figma (Koydo Marketing Kit)
- **Framing**: AppMockUp Studio or Previewed.app
- **Export**: PNG, no compression, sRGB color profile
- **Delivery folder**: `store-assets/screenshots/{platform}/{locale}/`

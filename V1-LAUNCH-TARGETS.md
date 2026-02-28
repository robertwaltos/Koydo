# Koydo V1 Launch Targets

> **Primary Target**: Web production launch + Google Play submission
> **Parallel Target**: iPad / iPhone (iOS) App Store preparation
> **Model**: Freemium (free tier + paid subscription via Apple IAP)
> **Timeline**: 1–2 weeks (aggressive — see risk section)
> **Created**: 2026-02-27

---

## Launch Definition

V1 ships a curated, polished subset of Koydo as a web app first, then
Google Play, with iOS in parallel. The free tier
provides a complete learning experience for a limited set of worlds/modules.
The paid tier unlocks the full catalog and premium features (AI tutor,
advanced assessments, language tools). Billing is surface-aware:
- Web: Stripe
- Android: Google Play Billing
- iOS: Apple In-App Purchase

Launch languages are locked to **English + Spanish** for all launch-critical
surfaces (web + store metadata + onboarding + billing paths).

## Launch Sequence (Locked)

1. Web go-live (public domain + stable conversion path)
2. Google Play submission/rollout (fast follow)
3. iOS App Store submission (parallel, non-blocking to web + Android launch)

---

## P0 — Must Ship (Blocks App Store Submission)

### 0.1 Apple Developer Setup
- [ ] Enroll in Apple Developer Program ($99/year) — allow 24–48 h approval
- [ ] Confirm macOS access (Xcode 16+ requires macOS Sonoma or later)
- [ ] Install Xcode + iOS simulator
- [ ] Create App ID + provisioning profiles in Apple Developer portal
- [ ] Set up App Store Connect listing (name, description, category: Education)

### 0.2 iOS Native Wrapper
- [ ] Add Capacitor to the Next.js project (`@capacitor/core`, `@capacitor/ios`)
- [ ] Configure `capacitor.config.ts` (app ID, server URL, splash screen)
- [ ] Generate Xcode project (`npx cap add ios && npx cap sync`)
- [ ] Verify the app loads and navigates correctly in iOS Simulator
- [ ] Configure status bar, safe areas, and viewport for iOS
- [ ] Add app icons (1024x1024 + all required sizes) and launch screen

### 0.3 Build Must Pass
- [ ] Fix server-action import errors in explore components (pre-existing)
- [ ] Fix any remaining TypeScript errors blocking `next build`
- [ ] Production build completes with 0 errors
- [ ] App loads and renders correctly when served from Capacitor WebView

### 0.4 Critical Happy Path (Must Be Flawless)
- [ ] **Sign up** → email/password or OAuth (Google/Apple) → lands on profile picker
- [ ] **Create learner profile** → onboarding flow → diagnostic → profile created
- [ ] **Select profile** → enters explore world lobby
- [ ] **Browse worlds** → pick a world → see topics → pick a module
- [ ] **Complete a lesson** → Learn > Flashcards > Activity > Quiz > Celebration
- [ ] **Return and resume** → profile persists, can switch profiles
- [ ] **Sign out** → clean session, return to sign-in

### 0.5 Content Curation (Launch Set)
- [ ] Select 7–10 depth-passed modules as the "free tier" content
- [ ] Hide or gate remaining 200+ template modules behind premium
- [ ] Verify each launch module: real questions, varied answers, working activities
- [ ] No placeholder text, lorem ipsum, or "TODO" visible anywhere in launch set
- [ ] Module catalog shows clear free vs. premium distinction

### 0.6 Apple IAP Integration
- [ ] Add `@capacitor-community/in-app-purchases` or RevenueCat SDK
- [ ] Create subscription product in App Store Connect (monthly + annual)
- [ ] Implement purchase flow: paywall screen → IAP → unlock premium content
- [ ] Implement restore purchases flow
- [ ] Handle receipt validation (server-side or on-device)
- [ ] Test in sandbox environment with test Apple ID
- [ ] Provide "Manage Subscription" deep link to iOS Settings

### 0.7 Privacy & Legal (App Store Requirement)
- [ ] Privacy Policy URL (already exists: `/legal/privacy`) — verify it's accurate
- [ ] Terms of Service URL (already exists: `/legal/terms`) — verify
- [ ] App Store privacy nutrition label (data collection declarations)
- [ ] COPPA compliance: age gate + parental consent flow works
- [ ] No analytics SDKs sending data without consent (Mixpanel is disabled — good)

### 0.8 Accessibility (App Store Review Checks)
- [ ] VoiceOver navigates all screens without traps
- [ ] All interactive elements have accessible labels
- [ ] Minimum 4.5:1 contrast ratio on text over backgrounds
- [ ] Touch targets ≥ 44x44pt on all buttons/links
- [ ] Dynamic Type support (or reasonable text scaling)
- [ ] Reduced motion respected (already implemented)

### 0.9 App Store Metadata
- [ ] App name, subtitle, keywords
- [ ] Description (up to 4000 chars)
- [ ] Screenshots: 6.7" iPhone, 6.5" iPhone, 12.9" iPad (minimum 3 each)
- [ ] App preview video (optional but helps approval)
- [ ] Age rating questionnaire (Education, no objectionable content)
- [ ] Support URL
- [ ] Copyright string

---

## P1 — Should Ship (Improves Quality / Reduces Rejection Risk)

### 1.1 Offline Resilience
- [ ] App doesn't crash when offline — shows graceful "no connection" state
- [ ] Previously loaded content is viewable offline (service worker cache)
- [ ] Profile selection works offline (cookie/localStorage already in place)

### 1.2 Error Recovery
- [ ] Network timeout → user-friendly retry button (not white screen)
- [ ] Auth session expired → redirect to sign-in with message
- [ ] Supabase unavailable → fallback UI with "try again" guidance
- [ ] No raw error messages or stack traces visible to users

### 1.3 Loading Performance
- [ ] Initial load < 3 seconds on cellular connection
- [ ] Route transitions feel instant (skeleton/spinner states exist)
- [ ] Images are optimized (WebP, lazy loading)
- [ ] No layout shift (CLS) during page load

### 1.4 Parent Dashboard
- [ ] Parent can view learner progress summaries
- [ ] Parent can add/remove learner profiles
- [ ] Parent can manage subscription (link to iOS Settings)

### 1.5 Polish
- [ ] Splash screen matches app aesthetic
- [ ] No console errors or warnings in production build
- [ ] App correctly handles iPhone notch / Dynamic Island safe areas
- [ ] iPad split-view / multitasking works without layout breaks
- [ ] Dark mode either works fully or is disabled (no half-themed states)

---

## P2 — Nice to Have (Post-Launch or V1.1)

### 2.1 Advanced Features
- [ ] AI tutor chat (premium feature)
- [ ] Language pronunciation lab
- [ ] Gamification (badges, streaks, levels)
- [ ] Push notifications for learning reminders

### 2.2 Content Expansion
- [ ] Depth-pass remaining 200+ template modules
- [ ] External curriculum imports (19 units dry-run ready)
- [ ] Pre-K placeholder modules (16 remaining)

### 2.3 Analytics & Monitoring
- [ ] Configure Mixpanel or alternative analytics
- [ ] Error reporting (Sentry or similar)
- [ ] Usage dashboards for post-launch iteration

### 2.4 Additional Platforms
- [ ] Apple Vision Pro (visionOS) adaptation
- [ ] Android (Google Play) via Capacitor
- [ ] Progressive Web App (standalone install)

---

## Known Blockers & Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Apple Developer enrollment delay | Blocks submission entirely | Enroll TODAY — 24–48h typical |
| No macOS access | Cannot build iOS binary | Requires a Mac (or Mac-in-cloud service like MacStadium/GitHub Actions) |
| First App Store review rejection | Adds 2–5 day delay per cycle | Follow App Store Review Guidelines precisely; test on real device |
| IAP sandbox flakiness | Common pain point in testing | Budget 2–3 days specifically for IAP testing |
| Build currently broken | Blocks everything | Fix server-action imports first (estimated: 1–2 hours) |
| Template modules visible | Reviewer might tap a bad module | Gate behind premium or hide entirely |
| Stripe integration conflicts with IAP | Apple rejects apps that bypass IAP for digital goods | Disable Stripe payment UI on iOS; use IAP only |
| Missing env vars in production | Features silently fail | Audit all env vars; provide safe fallbacks for optional services |

---

## Suggested Sprint Plan (14 Days)

### Days 1–2: Foundation
- Apple Developer enrollment (start immediately)
- Fix build errors
- Install Xcode + Capacitor setup
- Curate launch content set (7–10 modules)

### Days 3–5: iOS Shell
- Capacitor iOS project generation + configuration
- App icons, launch screen, safe areas
- Verify happy path in iOS Simulator
- Begin IAP product setup in App Store Connect

### Days 6–8: IAP + Paywall
- Integrate IAP SDK (RevenueCat recommended for simplicity)
- Build paywall UI (free vs premium gate)
- Sandbox testing with test Apple IDs
- Receipt validation

### Days 9–10: Polish + Accessibility
- VoiceOver audit + fixes
- Contrast and touch target audit
- Offline/error state handling
- Performance profiling on real device

### Days 11–12: Submission Prep
- App Store screenshots + metadata
- Privacy nutrition label
- Final real-device testing (iPhone + iPad)
- Build archive + upload to App Store Connect

### Days 13–14: Buffer
- Submit for review
- Address any review feedback
- Fix any rejection issues

---

## Environment Checklist (Production)

Required for launch:
```
NEXT_PUBLIC_SUPABASE_URL=✅ configured
NEXT_PUBLIC_SUPABASE_ANON_KEY=✅ configured
SUPABASE_SERVICE_ROLE_KEY=✅ configured
STRIPE_SECRET_KEY=⚠️ needed for web fallback (disabled on iOS)
STRIPE_WEBHOOK_SECRET=⚠️ needed for web fallback
NEXT_PUBLIC_MIXPANEL_TOKEN=❌ optional (analytics disabled is fine for v1)
RESEND_API_KEY=⚠️ needed if parent consent emails are enabled
```

Required for iOS:
```
Apple Developer Team ID
App Bundle ID (e.g., com.koydo.app)
RevenueCat API Key (if using RevenueCat for IAP)
App Store Connect API Key (for CI/CD — optional for manual upload)
```

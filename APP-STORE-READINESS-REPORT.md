# KOYDO APP STORE READINESS REPORT

**Date**: 2026-03-04 | **Branch**: `release/master-sync` | **Build**: PASS

---

## CODEBASE HEALTH (Smoke Test Summary)

| Check | Status |
|---|---|
| Build (`next build`) | **PASS** — 414 pages, ~300 API routes |
| Lint (ESLint 9) | **PASS** — zero errors |
| Import health | **PASS** — no broken imports |
| Route validation | **PASS** — all pages + API routes valid |
| Env config | **PASS** — Zod-validated, browser guard in place |
| Security scan | **PASS** — no hardcoded keys or credentials |
| TypeScript check | **BLOCKED** — `tsc --noEmit` needs manual run |
| Dead code | **WARN** — 6 orphaned files (low priority) |
| Capacitor versions | **WARN** — `@capacitor/keyboard` + `@capacitor/network` on v7, core on v8 |
| Missing assets | **WARN** — 4 game background PNGs missing |

---

## UNIFIED RESOLUTION LIST

### P0 — BLOCKERS (Must fix before submission)

| # | Issue | Store | File(s) | Resolution |
|---|---|---|---|---|
| **P0-1** | **Mixpanel tracks children without COPPA override** — `isAnalyticsAllowed()` called without `isChildAccount` param, so the COPPA guard in `tracking-consent.ts:71-73` is never invoked. Mixpanel uses `localStorage` persistence for all users including children. | Both | `src/app/mixpanel-provider.tsx:115`, `src/lib/analytics/mixpanel.ts:12-13` | Pass `isChildAccount` from auth context into `isAnalyticsAllowed()`. Switch to `memory` persistence when `isChildAccount=true`. Disable Mixpanel entirely for under-13 users. |
| **P0-2** | **No parental gate component exists** — Apple requires a parental gate (knowledge-based challenge adults can solve but children cannot) before any external link, IAP trigger, or account management action in Kids Category apps. No such component exists anywhere in the codebase. | Apple | N/A (missing) | Create `src/components/parental-gate.tsx` — a multiplication/word challenge modal. Wire it to all external links, purchase flows, and account settings. |
| **P0-3** | **External links in footer lack parental gate** — Twitter, Instagram, YouTube, GitHub links in the site footer are accessible to all users including children. Apple rejects Kids apps with unguarded external links. | Apple | `src/app/components/site-footer.tsx:38-66` | Wrap all external links with the parental gate component (P0-2). Alternatively, hide external links entirely for child accounts. |
| **P0-4** | **Kids Category / Families Policy decision not made** — Neither Apple Kids Category age band nor Google Families Policy enrollment has been declared. This affects every other compliance requirement. | Both | N/A (business decision) | **Decide**: (a) Enroll in Kids/Families programs (stricter rules, more visibility), or (b) Target 13+ general audience (simpler compliance). This decision cascades to P0-1, P0-2, P0-3, P1-1 through P1-5. |
| **P0-5** | **IAP billing mode not enforced for native builds** — `BILLING_PROVIDER_MODE` defaults to `stripe_external` in env config. iOS requires all digital purchases use Apple IAP; Google requires Google Play Billing. Stripe-direct payments in a native app = immediate rejection. | Both | `src/lib/config/env.ts:63-65` | Set `BILLING_PROVIDER_MODE=app_store_iap` in Capacitor/native build env. Implement IAP integration via `@capacitor-community/in-app-purchases` or RevenueCat. Hide Stripe checkout UI in native builds. |
| **P0-6** | **Privacy Nutrition Labels / Data Safety form incomplete** — Apple requires App Privacy Nutrition Labels; Google requires Data Safety form. Neither has been prepared. The `docs/google-play-data-safety.md` worksheet has all fields set to "Fill". | Both | `docs/google-play-data-safety.md` | Audit every data collection point (Mixpanel events, Supabase writes, Stripe transactions). Complete Apple privacy labels and Google Data Safety form with accurate declarations. |
| **P0-7** | **Target audience / age rating declaration not prepared** — Both stores require explicit age range and content rating declarations. No IARC or ESRB rating has been obtained. | Both | N/A | Complete Apple age rating questionnaire. Obtain IARC content rating via Google Play Console. Declare target age range consistently across both stores. |

---

### P1 — HIGH PRIORITY (Fix before submission, not hard blockers)

| # | Issue | Store | File(s) | Resolution |
|---|---|---|---|---|
| **P1-1** | **Freeform chat enabled for ages 6-10** — `allowFreeformChat: true` for "explorer" tier (ages 6-10). Both stores restrict user-generated content features for children. | Both | `src/lib/safety/age-tier.ts:49` | Set `allowFreeformChat: false` for explorer and younger tiers. Limit to predefined response options for under-13 users. |
| **P1-2** | **Content moderation fails OPEN** — When the moderation API call fails, content is allowed through. For children's apps, it should fail CLOSED (block on failure). | Both | `src/lib/ai/moderation.ts:77` | Change fail mode to CLOSED for child content: if moderation service is down, block the content rather than allowing it. |
| **P1-3** | **Cookie consent banner shown to children** — Children under 13 should not be asked for tracking consent (they can't legally consent). The banner should be suppressed for child accounts, with tracking disabled by default. | Both | `src/app/components/cookie-consent-banner.tsx` | Suppress cookie banner for child accounts. Auto-set consent to "denied" for under-13 users. |
| **P1-4** | **Parent consent verification may be too weak** — Email-only parent verification may not meet COPPA's Verifiable Parental Consent (VPC) standard. FTC requires "reasonably calculated" methods (credit card, government ID, video call, etc.). | Apple | `src/app/auth/parent-consent/parent-consent-form.tsx:13` | Evaluate if email + knowledge-based verification is sufficient for the app's data collection scope. Consider adding credit card micro-charge verification as a stronger VPC method. |
| **P1-5** | **"Soon" badges on unreleased features** — Footer and various pages show "Coming Soon" badges on features not yet available. Apple rejects apps with visible but non-functional features. | Apple | `src/app/components/site-footer.tsx:150-153` | Remove "Coming Soon" badges and hide unreleased feature links entirely. Only show features that are functional at review time. |
| **P1-6** | **Inconsistent module counts** — Hero section says "850+ modules" while stats bar says "200+ modules". Apple reviewers check for misleading claims. | Apple | `src/app/page.tsx:22`, `src/app/page.tsx:143` | Standardize to a single accurate count. The catalog has 821 modules — use "800+" consistently. |
| **P1-7** | **No app review information / demo account** — Apple and Google reviewers need a demo account to test the app. No review notes or test credentials have been prepared. | Both | N/A | Create a demo account with pre-populated progress. Prepare App Review notes explaining the app's functionality, age-gating, and any test credentials needed. |
| **P1-8** | **Capacitor plugin version mismatch** — `@capacitor/core: ^8.1.0` but `@capacitor/keyboard: ^7.0.4` and `@capacitor/network: ^7.0.4`. Mixed major versions can cause runtime crashes on device. | Both | `package.json` | Upgrade `@capacitor/keyboard` and `@capacitor/network` to v8 to match core. |
| **P1-9** | **ITSAppUsesNonExemptEncryption not verified** — `Info.plist` declares `false` but the app uses HTTPS (TLS), Supabase auth, and Stripe. This may need to be `true` with an ERN filing if any encryption beyond standard HTTPS is used. | Apple | `ios/App/App/Info.plist:50-51` | Verify: if only standard HTTPS/TLS is used, `false` is correct. If any custom encryption (e.g., local encryption at rest), file for ERN exemption and set to `true`. |

---

### P2 — MEDIUM PRIORITY (Should fix, won't block review)

| # | Issue | Store | File(s) | Resolution |
|---|---|---|---|---|
| **P2-1** | **4 missing game background images** — Four game components reference PNG backgrounds that don't exist, causing broken images at runtime. | Both | `cosmic-canvas.tsx:135`, `logical-link.tsx:150`, `synthesis-sphere.tsx:219`, `velocity-vector.tsx:166` | Generate or source the 4 missing background PNGs, or fall back to CSS gradient backgrounds. |
| **P2-2** | **6 orphaned source files** — Dead code files including `vercel-deploy.ts`, `heygen-client.ts`, `deep-linking/handler.ts`, knowledgebase source files. Tree-shaken out but add maintenance burden. | Both | See smoke test report | Delete orphaned files or wire them into the app if they're needed. |
| **P2-3** | **No offline mode / graceful degradation** — Both stores prefer apps that handle network loss gracefully. No service worker or offline fallback detected. | Both | N/A | Add a basic offline fallback page via Next.js PWA plugin or Capacitor network listener. Show cached content when offline. |
| **P2-4** | **No accessibility statement** — VoiceOver/TalkBack support should be tested. `alt` text on images, `aria-label` on interactive elements, and keyboard navigation should be verified. | Both | Various | Run Lighthouse accessibility audit. Fix any critical a11y issues. Add accessibility statement to app settings. |

---

### P3 — LOW PRIORITY (Nice to have)

| # | Issue | Store | File(s) | Resolution |
|---|---|---|---|---|
| **P3-1** | **TypeScript type checking disabled in build** — Build output shows "Skipping validation of types". Type errors may exist undetected. | N/A | `next.config.ts` | Run `npx tsc --noEmit` in CI. Consider enabling type checking in production builds. |
| **P3-2** | **App screenshots and preview videos not prepared** — Both stores require 6.7" and 5.5" iPhone screenshots, iPad screenshots, and optional preview videos. | Both | N/A | Capture screenshots on required device sizes. Create 30-second preview video showing key features. |
| **P3-3** | **Store listing metadata not prepared** — App description, keywords, category selection, support URL, marketing URL need to be finalized. | Both | N/A | Draft store listing copy. Select primary/secondary categories. Set up support URL. |

---

## CRITICAL PATH

The resolution order should be:

1. **P0-4 first** (Kids/Families decision) — this cascades to everything else
2. **P0-1** (Mixpanel COPPA fix) — ~2 hours of code
3. **P0-2 + P0-3** (Parental gate) — ~4 hours, new component + wiring
4. **P0-5** (IAP integration) — ~1-2 weeks, requires RevenueCat/StoreKit setup
5. **P0-6 + P0-7** (Privacy labels + age rating) — ~1 day, paperwork
6. **P1-1 through P1-9** — ~2-3 days total
7. **P2/P3** items in parallel

**Estimated total timeline to submission-ready**: 2-3 weeks with focused effort, primarily gated by IAP integration (P0-5).

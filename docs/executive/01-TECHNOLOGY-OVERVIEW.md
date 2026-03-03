# 01 — Technology Overview

> **Koydo Platform Architecture & Engineering Foundation**  
> Confidential · Executive Summary Document

---

## Executive Summary

Koydo is built on a modern, production-grade technology stack optimized for cross-platform delivery, real-time personalization, and child-safe compliance. A single TypeScript/React codebase powers all three surfaces — Web, iOS, and Android — reducing development overhead while maintaining native-quality experiences. The architecture emphasizes security-first design, AI-powered content delivery, and offline-capable learning with zero TypeScript compilation errors across the entire codebase.

---

## 1. Platform Architecture

### Technology Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Frontend Framework** | Next.js (App Router) | 16.1.x | Server-side rendering, static export, routing |
| **UI Library** | React | 19.2.x | Component-based UI with server components |
| **Language** | TypeScript | 5.9.x | End-to-end type safety |
| **Styling** | Tailwind CSS | 4.x | Utility-first responsive design |
| **Backend/Database** | Supabase | — | PostgreSQL, Auth, Storage, Row-Level Security |
| **Native Wrapper** | Capacitor | 8.x | iOS/Android native shell |
| **Payments (Web)** | Stripe | — | Web checkout, subscription management |
| **Payments (Native)** | RevenueCat | — | Apple IAP, Google Play Billing |
| **Validation** | Zod | 4.3.x | Runtime schema validation |

### Architectural Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT SURFACES                       │
│   ┌──────────┐   ┌──────────────┐   ┌──────────────┐   │
│   │   Web    │   │   iOS App    │   │ Android App  │   │
│   │ Browser  │   │  (Capacitor) │   │ (Capacitor)  │   │
│   └────┬─────┘   └──────┬───────┘   └──────┬───────┘   │
│        │                │                   │            │
│        └────────────────┼───────────────────┘            │
│                         │                                │
│              ┌──────────▼──────────┐                     │
│              │   Next.js App       │                     │
│              │   (Shared Codebase) │                     │
│              └──────────┬──────────┘                     │
└─────────────────────────┼───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                    API LAYER (117 Routes)                 │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌─────────────────┐  │
│   │ Auth   │ │Billing │ │Content │ │ AI/Media        │  │
│   │ Routes │ │ Routes │ │ Routes │ │ Generation      │  │
│   └────┬───┘ └────┬───┘ └───┬────┘ └────────┬────────┘  │
└────────┼──────────┼─────────┼────────────────┼──────────┘
         │          │         │                │
┌────────▼──────────▼─────────▼────────────────▼──────────┐
│                    BACKEND SERVICES                       │
│  ┌──────────┐  ┌────────┐  ┌──────────┐  ┌───────────┐  │
│  │ Supabase │  │ Stripe │  │RevenueCat│  │  FORGE    │  │
│  │ (DB+Auth)│  │  (Web) │  │ (Native) │  │ (Media)   │  │
│  └──────────┘  └────────┘  └──────────┘  └───────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Cross-Platform Strategy

### Single Codebase, Three Surfaces

Koydo uses **Capacitor** to wrap the Next.js web application in native iOS and Android shells. The same HTML/CSS/JS bundle runs on all three surfaces, with platform-aware feature flagging for native-only capabilities.

### Native Feature Matrix

| Feature | Web | Android | iOS | Status |
|---------|-----|---------|-----|--------|
| Stripe Checkout | ✓ | — | — | Complete |
| RevenueCat IAP | — | ✓ | ✓ | Complete |
| Push Notifications | — | ✓ | ✓ | Complete |
| Local Notifications | — | ✓ | ✓ | Complete |
| Deep Linking | N/A | ✓ | ✓ | Complete |
| Haptic Feedback | — | ✓ | ✓ | Complete |
| Splash Screen | — | ✓ | ✓ | Complete |
| App Rating Prompt | — | ✓ | ✓ | Complete |
| Offline Banner | ✓ | ✓ | ✓ | Complete |
| Restore Purchases | — | ✓ | ✓ | Complete |
| Manage Subscription | Portal | Play | App Store | Complete |
| Entitlement Check | ✓ | ✓ | ✓ | Complete |
| App Lifecycle Manager | — | ✓ | ✓ | Complete |
| Network Monitor | ✓ | ✓ | ✓ | Complete |
| Keyboard Handling | N/A | ✓ | ✓ | Complete |
| WebView Security | N/A | ✓ | ✓ | Complete |

### Tablet UI System

The cross-platform UI system ensures visual consistency across phones, tablets, and desktops:

| Mechanism | Purpose |
|-----------|---------|
| CSS Custom Variants (`tablet:`, `native:`, `platform-ios:`) | Tailwind-like responsive/platform classes |
| Safe Area Utilities (`.safe-area-*`) | Notch/Dynamic Island padding |
| `useDeviceLayout()` Hook | JS-side device type, orientation, platform detection |
| Tablet Grid Classes | Pre-built grid column overrides for 768–1366px range |

Supported tablet viewport range: **768–1366px** (covers iPad mini through iPad Pro 12.9").

---

## 3. API Infrastructure

### Scale

- **117 API route handlers** under `src/app/api/`
- All mutating methods (`POST`, `PUT`, `PATCH`, `DELETE`) rate-limited centrally
- Rate-limited responses return HTTP 429 with `Retry-After` header

### Rate Limiting Architecture

| Route Scope | Limit | Window | Notes |
|-------------|-------|--------|-------|
| Billing webhooks (Stripe/RevenueCat) | 300 | 60s | High burst for payment events |
| Billing/payment mutations | 60 | 60s | Purchase and receipt verification |
| AI/media generation calls | 40 | 60s | Expensive cloud API calls |
| General API mutations | 120 | 60s | Baseline protection |

**Production backend**: Redis-backed sliding-window rate limiting via Upstash Redis (in-memory fallback for development).

### Organization/B2B API

Full B2B organization management API with 6 workstreams — all operational:

| Workstream | Status | Scope |
|------------|--------|-------|
| Core Routes | ✅ GREEN | Organization CRUD, licensing, learners, audit |
| Invites | ✅ GREEN | Invite workflows + accept flows |
| Bulk Provisioning | ✅ GREEN | SIS import and SCIM user management |
| Reporting | ✅ GREEN | Reports, exports, async scheduled jobs |
| Billing + Gifting | ✅ GREEN | Org checkout, gift checkout, gift redemption |
| Runner Integration | ✅ GREEN | Secured report runner with shared secret |

---

## 4. Security Posture

### Security Audit Summary

| Finding | Severity | Status |
|---------|----------|--------|
| Payment status gate bypass | HIGH | ✅ Fixed |
| In-memory rate limiting (serverless-ineffective) | MEDIUM | ✅ Fixed — Upstash Redis |
| Content Security Policy (unsafe-eval) | MEDIUM | ✅ Fixed — Nonce-based CSP |
| Missing rate limits on 5 routes | MEDIUM | ✅ Fixed |
| Direct `process.env!` assertions | MEDIUM | ✅ Fixed |
| Eager module registry parsing | MEDIUM | ✅ Fixed |
| Health endpoint info leak | LOW | Open (accepted risk) |

**Overall**: 6 of 7 findings resolved. Zero CRITICAL or HIGH issues open.

### Security Controls

- **Authentication**: Supabase Auth with JWT, session refresh on app resume
- **Authorization**: Row-Level Security (RLS) on all database tables, `requireAdminForApi()` guard
- **Input Validation**: Zod schemas on all API request bodies
- **Webhook Security**: HMAC signature verification for both Stripe and RevenueCat
- **CSP**: Nonce-based Content Security Policy in production (no `unsafe-eval`, no `unsafe-inline` for scripts)
- **Secrets Management**: Centralized `serverEnv` validation with `.min(1)` on critical variables
- **Idempotency**: Stripe webhook tracks processed events; organization billing uses `Idempotency-Key` headers
- **Console Stripping**: Production builds remove `console.log` (retain `error`/`warn`)

### Pre-Deploy Security Pipeline

```
npm run security:predeploy
├── npm run lint
├── npm run security:audit:prod (npm audit --omit=dev --audit-level=high)
└── npm run preflight:prod-env
```

Recommended additions before production launch:
- SAST: Semgrep (OWASP Top Ten + TypeScript rulesets)
- Secret scanning: detect-secrets
- DAST: OWASP ZAP baseline scan
- External assessment: CREST-accredited penetration test

---

## 5. Performance Engineering

### Startup Optimization

**Target**: First meaningful content visible within **2–3 seconds** of app open.

| Priority | Task | Strategy |
|----------|------|----------|
| Tier 1 — Critical | Supabase session validation | Block until ready |
| Tier 1 — Critical | User preferences (theme, locale) | Block (prevents layout flash) |
| Tier 2 — Important | Push notifications, entitlement check | Start after first render |
| Tier 3 — Deferred | Analytics, RevenueCat SDK configure | After 3–5 seconds |

### Build Optimizations

- **Code splitting**: Next.js generates multiple JS chunks per route
- **Lazy loading**: Dynamic imports for heavy components (flashcards, quizzes, activities, celebrations)
- **Image optimization**: Remote patterns configured for Supabase CDN with 7-day cache TTL
- **Package imports**: `optimizePackageImports` for supabase, ssr, date-fns
- **ProGuard/R8**: Android release builds minified with R8

---

## 6. Language Learning Architecture

A modular, provider-swappable language learning system:

| Component | Implementation |
|-----------|---------------|
| Translation | Provider chain: `auto → deepl → google → mock` |
| Pronunciation | Provider chain: `auto → licensed → mock` |
| Grading Rubric | Accuracy 45% · Fluency 35% · Prosody 20% |
| Gamification | Max 3 badges/module · 20 global levels · 2 daily + 1 weekly quest |
| AI Budget Caps | ≤ $0.05/active learner/month · ≤ $0.008 LLM/learner/month · $300 hard monthly cap |
| Speaking Lab | `/language/speaking-lab` — entitlement-aware pronunciation workspace |

---

## 7. Version Management

| Platform | Version File | Scheme |
|----------|-------------|--------|
| npm / Web | `package.json` | SemVer (`MAJOR.MINOR.PATCH`) |
| iOS | `Info.plist` (`CFBundleShortVersionString` + `CFBundleVersion`) | SemVer + incrementing build |
| Android | `build.gradle` (`versionName` + `versionCode`) | SemVer + incrementing build |

**Automated bumping**: `bash scripts/bump-version.sh [patch|minor|major]` — updates all three platforms, creates git tag.

---

## 8. Development Tooling

### Key Scripts

| Script | Purpose |
|--------|---------|
| `npm run build` | Next.js production build |
| `npm run dev` | Development server with hot reload |
| `npm run type-check` | TypeScript compilation check |
| `npx cap sync` | Sync web assets to native platforms |
| `npm run modules:sync` | Rebuild curriculum module registry |
| `npm run curriculum:validate` | Validate all 585+ modules |
| `npm run security:predeploy` | Pre-deployment security pipeline |
| `npm run knowledgebase:pipeline:full` | Full knowledge ingestion pipeline |
| `npm run epub:pipeline` | EPUB-to-module generation pipeline |

### Bundle Identifier

- **App ID**: `com.koydo.app`
- **Domain**: `koydo.app`
- **Deep Link Support**: Universal Links (iOS) + App Links (Android)

---

*Document generated from Koydo engineering documentation. For technical questions, contact the engineering team.*

# Koydo House of Brands — Complete Build Plan

**Date:** 2026-03-07
**Status:** Planning → Phase 1 Active

---

## Current State: Already a Platform

The codebase is **already architected for multi-app deployment**:

- **13 micro-apps defined** in `scripts/microapps-config.mjs` with distinct bundle IDs
- **692 modules** across 20+ subject categories
- **231 games** in active catalog
- **2 tenant shells built** (Junior, University) with dedicated components and themes
- **Manifest-driven builds** via `NEXT_PUBLIC_APP_ID` environment variable
- **Feature gating** system with ~100 gated features per app variant
- **5 onboarding flows** (standard, playful, focused, professional, energetic)
- **5 navigation layouts** (full, icon_tabs, exam_dashboard, sidebar, game_grid)
- **Per-app Capacitor configs** with separate bundle IDs, app names, splash screens

Build any app: `npm run build-microapp --app=koydo_junior`

---

## Complete App Portfolio (16 Apps)

### Tier A — Core Brands (Distinct audiences, distinct UX)

| # | App ID | Display Name | Audience | Age | Bundle ID | Pricing | Status |
|---|--------|-------------|----------|-----|-----------|---------|--------|
| 1 | `koydo_main` | Koydo | K-12 general education | 6-18 | `com.koydo.app` | Freemium $5.99/mo | LIVE |
| 2 | `koydo_junior` | Koydo Junior | Pre-K early learning | 3-6 | `com.koydo.junior` | Freemium $4.99/mo | Tenant built, needs app shell |
| 3 | `koydo_university` | Koydo University | Adult/career learners | 18+ | `com.koydo.university` | Freemium $9.99/mo | Tenant built, needs app shell |
| 4 | `koydo_arena` | Koydo Arena | Game-first learning | 5-99 | `com.koydo.arena` | Free (ad-supported) | Manifest defined |

### Tier B — Vertical Brands (Distinct subject domains)

| # | App ID | Display Name | Audience | Age | Bundle ID | Pricing | Status |
|---|--------|-------------|----------|-----|-----------|---------|--------|
| 5 | `koydo_trades` | Koydo Trades | Vocational/trade skills | 16+ | `com.koydo.trades` | $7.99/mo | Tenant built, manifest defined |
| 6 | `koydo_cdl` | Koydo CDL Prep | CDL license candidates | 18+ | `com.koydo.cdl` | Freemium | Tenant built, 9 modules, manifest defined |
| 7 | `koydo_sat` | Koydo SAT Prep | US college-bound students | 14-19 | `com.koydo.sat` | $19.99/mo | Manifest defined |
| 8 | `koydo_finance` | Koydo Finance Pro | Finance/business learners | 16+ | `com.koydo.finance` | $19.99/mo | Manifest defined |
| 9 | `koydo_math` | Koydo Math Forge | Math-focused learners | 8-18 | `com.koydo.math` | Freemium | Manifest defined |
| 10 | `koydo_stem` | Koydo STEM Lab | Science/tech/engineering | 10-25 | `com.koydo.stem` | $7.99/mo | Tenant built, manifest defined |
| 11 | `koydo_neuro` | Koydo Neuro | Neurodiverse learners | 5-18 | `com.koydo.neuro` | $6.99/mo + B2B | NEW — needs everything |

### Tier C — Regional Brands (Distinct language + curriculum)

| # | App ID | Display Name | Region | Bundle ID | Pricing | Status |
|---|--------|-------------|--------|-----------|---------|--------|
| 11 | `koydo_ar` | كويدو (Koydo Arabic) | MENA | `com.koydo.ar` | $1.99/mo | Manifest defined |
| 12 | `koydo_math_es` | Koydo Matemáticas | LATAM | `com.koydo.math.es` | $2.99/mo | Manifest defined |
| 13 | `koydo_hi` | Koydo हिंदी | India | `com.koydo.hi` | $1.49/mo | Manifest defined |
| 14 | `koydo_kr` | 코이도 학습 | South Korea | `com.koydo.kr` | $4.99/mo | Manifest defined |
| 15 | `koydo_exam_jp` | Koydo 受験対策 | Japan | `com.koydo.exam.jp` | $19.99/mo | Manifest defined |
| 16 | `koydo_math_zh` | Koydo 数学 | China | `com.koydo.math.zh` | $2.99/mo | Manifest defined |

---

## Module Allocation Per App

### koydo_main (Flagship — 692 modules, 231 games)
All content. The "everything" app.

### koydo_junior (18 Pre-K + 36 K-2 modules, 50+ games)
- All `pre-k-*` modules (18)
- Basic Math K-2 variants (6)
- Language Arts K-2 variants (6)
- General Science K-2 variants (6)
- Games: age-appropriate subset (Tiny Chef, Garden Patch, Mirror Draw, etc.)
- **Excluded:** All 200+ level and above content

### koydo_university (170+ professional/graduate modules)
- All MBA modules (9)
- All Masters-level modules (52)
- All Capstone courses (8)
- Advanced STEM (AI 401-601, Data Science 401-601, etc.)
- Business/Finance full series
- Medicine full series
- Law Studies full series
- **Excluded:** Pre-K, K-8 content

### koydo_arena (All 231 games + game-adjacent content)
- Full game catalog
- No structured modules
- Daily challenges
- Leaderboards + social features
- **Monetization:** Ad-supported free tier with optional ad-removal IAP

### koydo_trades (18+ vocational modules)
- Electrician/Electricity (101-601)
- Plumbing (101-601)
- HVAC (101-601)
- Civil Engineering (101-601)
- Farming/Agriculture (101-601)
- **Future expansion:** Welding, Carpentry, Automotive, Solar Installation
- **Features:** AR/3D diagrams, NEC/UPC code reference, safety cert prep

### koydo_sat (12 exam prep modules + diagnostic engine)
- SAT, ACT, AP prep modules
- Full diagnostic assessment engine
- Timed practice tests
- Score prediction
- Study plan generator
- **Features:** Exam countdown, progress projections, weak-area drill

### koydo_finance (48+ business/finance modules)
- Accounting & Finance (101-601)
- Financial Literacy (101-601)
- Economics (101-601)
- Entrepreneurship (101-601)
- Marketing Management (101-601)
- Business Analytics, Project Management, Supply Chain
- **Features:** Financial calculator microapp, portfolio tracker

### koydo_math (30+ math modules)
- Basic Math all variants (12)
- Advanced Math (101-601)
- Statistics, Algebra, Geometry
- Competition Math, Grade School Math
- **Features:** Step-by-step solver, graphing calculator, practice problems

### koydo_stem (84+ STEM modules)
- Coding (101-601)
- Data Science (101-601)
- AI & Machine Learning (101-601)
- Cybersecurity (101-601)
- Cloud Computing (101-601)
- Robotics, CPU/GPU Design, Network Engineering
- **Features:** Code playground, terminal simulator, project-based learning

### koydo_neuro (Adapted content from core catalog)
- Core subjects adapted with sensory-safe UI
- Structured routines and visual schedules
- Social stories and emotional regulation tools
- **Features:** IEP goal tracking, therapist dashboard, adjustable pace/animation/contrast

---

## Apple Guideline 4.3 Compliance Matrix

Each app must be defensibly distinct. Here's the differentiation matrix:

| Dimension | Junior | Main | University | Trades | Arena | SAT | Neuro |
|-----------|--------|------|-----------|--------|-------|-----|-------|
| **Target age** | 3-6 | 6-18 | 18+ | 16+ | 5-99 | 14-19 | 5-18 |
| **Navigation** | icon_tabs | full | sidebar | full | game_grid | exam_dashboard | icon_tabs |
| **UI theme** | playful/bright | standard | professional | industrial | energetic | focused | calm/accessible |
| **Onboarding** | parent_gate → avatar | age_check → subject | skill_level → career | skill_check → trade | avatar → tutorial | target_score → plan | assessment → IEP |
| **Core feature** | Play-based lessons | Structured modules | Certificates | Trade cert prep | Games hub | Timed practice | Sensory-safe learning |
| **Unique feature** | Read-aloud, no text nav | Streak/XP gamification | Career pathways | AR diagrams, code refs | Leaderboards, PvP | Score prediction | IEP tracking, routines |
| **Content type** | Pre-K only | K-12 curriculum | Graduate/professional | Vocational | Games only | Test prep only | Adapted K-12 |

---

## Microapp Utilities (Cross-Brand Tools)

These lightweight tools live at `/microapps/` and can be shared across brands:

| Tool | Route | Status | Brand Affinity |
|------|-------|--------|---------------|
| Calculator | `/microapps/calculator` | LIVE | Math, Finance |
| Flashcards | `/microapps/flashcards` | LIVE | All |
| Focus Timer | `/microapps/focus` | LIVE | SAT, University |
| Translator | `/microapps/translator` | LIVE | Global editions |
| Lofi Player | `/microapps/lofi` | LIVE | University |
| Certify | `/microapps/certify` | LIVE | University, Trades |
| **Currency Converter** | `/microapps/currency` | **NEW** | Finance |

---

## Implementation Roadmap

### Phase 1: Flagship Launch (NOW — Q2 2026)
- [x] Core app built (800+ modules, 225+ games)
- [x] Compliance infrastructure (COPPA, GDPR, parental consent)
- [x] Review accounts seeded
- [ ] Submit to Apple App Store
- [ ] Submit to Google Play
- [ ] Validate retention metrics (target: DAU/MAU > 25%)

### Phase 2: Koydo Junior (Q3 2026)
- [x] Tenant components built (`src/tenants/koydo-junior/`)
- [x] Theme defined (`koydo-junior.theme.json`)
- [x] Manifest entry defined
- [x] Onboarding flow defined (age_check → parent_gate → avatar_pick → first_lesson)
- [ ] Build dedicated route shell with icon_tabs navigation
- [ ] Curate Pre-K module subset (18 modules + 50 games)
- [ ] Create child-safe game selection
- [ ] Submit as separate app (com.koydo.junior)

### Phase 3: Koydo Trades (Q4 2026)
- [x] Electrician content exists (101-601)
- [ ] Create tenant: `src/tenants/koydo-trades/`
- [ ] Add to manifest and microapps-config
- [ ] Expand content: HVAC, Plumbing, Welding, Carpentry, Automotive
- [ ] AR/3D wiring diagram feature (WebXR or Capacitor AR plugin)
- [ ] NEC/UPC code reference lookup
- [ ] Safety certification practice tests
- [ ] B2B licensing for trade schools
- [ ] Submit as separate app (com.koydo.trades)

### Phase 4: Koydo University (Q1 2027)
- [x] Tenant components built (`src/tenants/koydo-university/`)
- [x] Theme defined (`koydo-university.theme.json`)
- [x] Professional/graduate content exists (170+ modules)
- [ ] Career pathway engine
- [ ] Certificate generation and verification
- [ ] LinkedIn integration for credential sharing
- [ ] Enterprise SSO (SAML/OIDC) for corporate licensing
- [ ] Submit as separate app (com.koydo.university)

### Phase 5: Koydo Arena (Q1 2027)
- [x] 231 games in catalog
- [x] Game page and registry built
- [ ] Create game-grid layout tenant
- [ ] Add multiplayer/PvP for select games
- [ ] Leaderboard system (global + friends)
- [ ] Ad integration (AdMob/Unity Ads)
- [ ] Submit as separate app (com.koydo.arena)

### Phase 6: Regional Editions (Q2-Q3 2027)
- [x] Translation pipeline built (20 languages)
- [x] Manifests defined for AR, ES, HI, KR, JP, ZH
- [ ] Complete translations for priority regions (Arabic, Spanish)
- [ ] Align content with regional curricula
- [ ] Set up regional pricing via RevenueCat
- [ ] Submit regional apps to stores

### Phase 7: Koydo Neuro (Q3 2027)
- [ ] Clinical advisor partnership
- [ ] Sensory-safe UI framework (reduced motion, high contrast, adjustable speed)
- [ ] IEP goal tracking system
- [ ] Therapist/educator dashboard
- [ ] Social stories and emotional regulation content
- [ ] Accessibility certification (WCAG 2.2 AAA target)
- [ ] Pilot with school districts
- [ ] Submit as separate app (com.koydo.neuro)

### Phase 8: Vertical Expansions (Q4 2027+)
- [ ] Koydo SAT — Submit when exam prep content is validated
- [ ] Koydo Finance — Submit when financial calculator and portfolio features are ready
- [ ] Koydo Math — Submit when graphing calculator and step-by-step solver are built
- [ ] Koydo STEM — Submit when code playground and project-based learning are built

---

## Technical Requirements Per New App

For each new branded app, the following must be created/configured:

1. **Manifest entry** in `src/lib/platform/app-manifest.ts` → STATIC_MANIFESTS
2. **Microapps config** in `scripts/microapps-config.mjs` → MICROAPP_TARGETS
3. **Tenant folder** at `src/tenants/{app-name}/` with:
   - Theme JSON (colors, typography, spacing)
   - Dashboard component
   - Button component (styling override)
   - Any app-specific components
4. **Onboarding flow** in `src/lib/platform/app-onboarding.ts`
5. **Capacitor config** — bundle ID auto-derived from manifest
6. **RevenueCat products** — per-app subscription products
7. **Store listing assets** — screenshots, descriptions, feature graphic per device size
8. **Vercel project** — separate deployment target per app
9. **Review accounts** — seed reviewer credentials per app

---

## Revenue Model Summary

| Segment | Y1 Target | Y3 Target | Key Metric |
|---------|-----------|-----------|------------|
| Koydo Main (Flagship) | $500K ARR | $10M ARR | DAU/MAU > 25% |
| Koydo Junior | $200K ARR | $3M ARR | Parent retention 60d |
| Koydo Trades | $300K ARR | $5M ARR | B2B contracts |
| Koydo University | $400K ARR | $8M ARR | Certificate completions |
| Koydo Arena | $100K (ads) | $2M (ads) | Sessions/day |
| Regional Editions | $100K combined | $2M combined | Regional DAU |
| **Total** | **$1.6M ARR** | **$30M ARR** | |

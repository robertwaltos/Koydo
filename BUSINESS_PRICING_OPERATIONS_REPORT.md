# Koydo Business Pricing and Operations Report

Version: `2026-03-03-v1`  
Date: `2026-03-03`  
Scope: Workflow optimization, monthly cost model, pricing revision, break-even calculator, and required ops completion.

## 1) Cheapest Reliable Workflow
1. Host web app on Vercel (Next.js).
2. Keep auth/state/subscriptions/social tables in Supabase Postgres.
3. Pre-render heavy cinematic assets offline.
4. Store rendered media in object storage + CDN.
5. Store only metadata and URLs in Postgres.
6. Enforce adaptive graphics tiers:
   - `standard` (default, low cost)
   - `cinematic-rtx` (premium + device-capability gated)
7. Keep multiplayer/seasons/clans premium-gated (`active|trialing`).
8. Keep free plan safe, educational, and lower bandwidth.

## 2) Cost Model Assumptions
- Standard gameplay bandwidth: `0.35 GB/hour`
- Cinematic gameplay bandwidth: `1.20 GB/hour`
- Premium mix assumption: `70% standard + 30% cinematic`
- Premium blended bandwidth: `0.61 GB/hour`
- Typical premium learner at `12 hours/month`: `~7.3 GB/month`

## 3) Monthly Cost Baseline
### Fixed
- Vercel Pro baseline: `~$20/mo`
- Supabase Pro baseline: `~$25/mo`
- Ops/logging reserve: `~$15-$50/mo`

### Variable
- Object storage + CDN transfer (largest cost driver at scale)
- DB/API reads+writes (leaderboards, rooms, tournaments, sync)
- Function/request overages during spikes
- Revenue stack COGS (store fees + RevenueCat fees)

## 4) Planning Scenarios (Infra Only)
| Scenario | MAU | Premium Subs | Monthly Player-Hours | Infra Cost Range |
|---|---:|---:|---:|---:|
| Pilot | 1,000 | 100 | 7,000 | `$150-$400` |
| Growth | 10,000 | 1,200 | 70,000 | `$1,200-$3,500` |
| Scale | 50,000 | 7,500 | 360,000 | `$7,000-$20,000` |

## 5) Revised Pricing Matrix
| SKU ID | Plan | Billing | Price (USD) | Audience | Includes |
|---|---|---|---:|---|---|
| `core_practice` | Core Practice | monthly | 0.00 | All | Safe educational core, standard visuals, no premium network |
| `language_plus` | Learning Plus | monthly | 7.99 | Single learner | Full curriculum + core games |
| `language_family` | Learning Family | monthly | 19.99 | Up to 4 learners | Family learning + core progression |
| `cinematic_plus` | Cinematic+ Games | monthly | 9.99 | Add-on | Seasons, tournaments, clans, realtime rooms, cinematic render modes |
| `cinematic_plus_annual` | Cinematic+ Games | annual | 99.00 | Add-on | Same feature set, annual discount |
| `household_all_access` | Household All-Access | monthly | 29.99 | Up to 6 learners | Learning + Cinematic+ combined |
| `household_all_access_annual` | Household All-Access | annual | 299.00 | Up to 6 learners | Full suite, annual savings |

## 6) Break-Even Calculator (Editable)
Use this section to estimate pricing and margin.

### Inputs
- `MAU =` 10000
- `Paid Conversion % =` 12
- `Add-on Attach % (of paid) =` 35
- `Avg Player-Hours / user / month =` 7
- `Premium Player-Hours / premium user / month =` 12
- `Weighted ARPPU (monthly) =` 13.50
- `Store Fee % =` 15
- `RevenueCat Fee % =` 1
- `Infra Cost / month =` 2200
- `Other Variable Ops / month =` 300
- `Fixed Cost / month =` 70

### Formulas
1. `Paid Users = MAU * Paid Conversion %`
2. `Premium Add-on Users = Paid Users * Add-on Attach %`
3. `Gross Revenue = Paid Users * Weighted ARPPU`
4. `Store Fees = Gross Revenue * Store Fee %`
5. `RevenueCat Fees = Gross Revenue * RevenueCat Fee %`
6. `Total Monthly Cost = Infra Cost + Other Variable Ops + Fixed Cost + Store Fees + RevenueCat Fees`
7. `Net = Gross Revenue - Total Monthly Cost`
8. `Margin % = Net / Gross Revenue`

### Example (using inputs above)
1. Paid Users: `10,000 * 0.12 = 1,200`
2. Premium Add-on Users: `1,200 * 0.35 = 420`
3. Gross Revenue: `1,200 * $13.50 = $16,200`
4. Store Fees: `$16,200 * 0.15 = $2,430`
5. RevenueCat Fees: `$16,200 * 0.01 = $162`
6. Total Cost: `$2,200 + $300 + $70 + $2,430 + $162 = $5,162`
7. Net: `$16,200 - $5,162 = $11,038`
8. Margin: `$11,038 / $16,200 = 68.1%`

## 7) Price-Floor Guidance
For sustainable operation:
- Target post-fee gross margin: `>=65%`
- Keep premium plan price floor where:
  - `ARPPU * (1 - store_fee - rc_fee) - infra_per_paid_user >= target contribution`
- Re-price quarterly using real usage telemetry:
  - Player-hours by render tier
  - GB streamed per player-hour
  - Conversion and churn by cohort

## 8) Required Ops Completion Status
### A) Supabase migration
- Completed via `supabase db push`
- Included migration: `202603030005_premium_games_network_and_seasons.sql`

### B) Production deploy
- Completed to production:
  - `https://koydo.vercel.app`

### C) RevenueCat mapping verification
- Verified mapping and status gating in backend:
  - `src/app/api/revenuecat/webhook/route.ts`
  - `src/app/api/subscription/status/route.ts`
- Billing tests passed:
  - `npm run billing:revenuecat:resolve:test`
  - `npm run billing:webhook:processing-lock:test`

## 9) Immediate Pricing Action Plan
1. Keep current revised matrix as default production offering.
2. Enforce premium gates only on cinematic/network features.
3. Add monthly internal review with the calculator above.
4. Adjust prices if rolling 3-month margin drops below `65%`.


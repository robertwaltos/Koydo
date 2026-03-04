# Koydo Pricing Spec Sheet

Version: `2026-03-04-pricing-spec-v3`  
Scope: Language + Premium Games (Cinematic/Network) + K-12 Classroom Free Window  
Source of truth (language code): `src/lib/language-learning/pricing-spec.ts`  
Premium gate APIs: `/api/games/premium/*`, `/api/games/network-state`

## 1) Cheapest Reliable Workflow (Recommended)
1. Build game/app on Vercel + Next.js.
2. Keep state, auth, leaderboard, clans, rooms in Supabase Postgres.
3. Pre-render heavy cinematic assets offline and store in object storage/CDN.
4. Store only metadata + URLs in database (never large media blobs in Postgres rows).
5. Use adaptive quality tiers at runtime:
- `standard` for most users.
- `cinematic-rtx` only for premium + capable devices.
6. Keep live multiplayer/seasons/clans premium-gated by subscription status (`active|trialing`).
7. Keep free tier on low-cost loops (education-first, lower bandwidth, no premium network).

## 2) Cost Drivers (Per Player-Hour)
Assumptions used for pricing decisions:
- Standard gameplay bandwidth: `~0.35 GB / hour`.
- Cinematic gameplay bandwidth: `~1.20 GB / hour`.
- Premium blend target: `70% standard + 30% cinematic`.
- Premium blended bandwidth: `~0.61 GB / hour`.

Implication:
- A premium learner at `12 hours/month` uses about `7.3 GB/month` of media transfer.

## 3) Monthly Cost Model (Planning Baseline)
### Fixed baseline (production)
- Vercel Pro seat baseline: `~$20/mo`.
- Supabase Pro project baseline: `~$25/mo`.
- Ops/monitoring/logging reserve: `~$15-$50/mo`.

### Variable (scales with usage)
- Media storage/CDN (object storage): scales with GB stored + operations.
- API/DB egress + reads/writes: scales with DAU, matches, leaderboard refreshes.
- Function execution/request overages: scales with API traffic spikes.
- Revenue stack fees (COGS, not infra): app-store take rate + RevenueCat fee beyond free threshold.

## 4) Scenario Planning (USD, baseline ranges)
| Scenario | MAU | Premium subs | Total monthly player-hours | Estimated infra range |
|---|---:|---:|---:|---:|
| Pilot | 1,000 | 100 | 7,000 | `$150-$400` |
| Growth | 10,000 | 1,200 | 70,000 | `$1,200-$3,500` |
| Scale | 50,000 | 7,500 | 360,000 | `$7,000-$20,000` |

Notes:
- Ranges assume object storage + CDN for media (cheapest path).
- If high-bitrate media is served directly from DB platform egress, costs rise sharply.

## 5) Revised Access Matrix (Full Revision)
| SKU ID | Plan | Billing | Price (USD) | Audience | Includes |
|---|---|---|---:|---|---|
| `core_practice` | Core Practice | monthly | 0.00 | All | Safe educational core, no premium network, standard visuals |
| `language_plus` | Learning Plus | monthly | 7.99 | Single learner | Full curriculum + core games, standard multiplayer disabled |
| `language_family` | Learning Family | monthly | 19.99 | Up to 4 learners | Family access to learning + core game progression |
| `language_school_annual` | Language School Annual | annual | 59.88 / seat | Schools, districts | School plan reference pricing (`$4.99/seat/mo` billed annually) |
| `classroom_k12_time_window` | K-12 Classroom Basic Access | schedule-based | 0.00 | Teacher/school-attached learners | K-12 basic content free only during `07:00-15:00` org-local time with server UTC + edge geo-country/timezone verification |
| `cinematic_plus` | Cinematic+ Games | monthly | 9.99 | Add-on | Seasons, tournaments, clans, realtime rooms, cinematic render modes |
| `cinematic_plus_annual` | Cinematic+ Games | annual | 99.00 | Add-on | Same as monthly, discounted annual |
| `household_all_access` | Household All-Access | monthly | 29.99 | Up to 6 learners | Learning + Cinematic+ combined |
| `household_all_access_annual` | Household All-Access | annual | 299.00 | Up to 6 learners | Full suite, annual savings |

### 5.1 Classroom Verification and Access Flow
- Teacher/school must have a partner/org account with classroom policy enabled and account class `SCHOOL` or `TEACHER`.
- Student access is granted through org provisioning token (`org_*`) via direct code entry or generated QR flow.
- Free classroom window uses server time only (not device clock): request UTC -> org IANA timezone -> local-hour window check (`07:00-15:00`).
- Anti-cheat signals include edge-derived country and timezone headers (`x-vercel-ip-country`, `cf-ipcountry`, `x-vercel-ip-timezone`, `cf-timezone`) and are audited on seat claims.
- Outside the window or outside approved geo/timezone policy, users fall back to standard entitlement rules.

## 6) Pricing Guardrails
- Target gross margin after platform + infra: `>=65%`.
- Premium feature access must require subscription `status in ('active','trialing')`.
- Keep free tier educational and safe; no predatory loops.
- Classroom free access must not unlock premium network/cinematic features; it only affects classroom-basic K-12 entitlements.
- Review prices quarterly against real player-hours + conversion.

## 7) Instrumentation Required for Correct Pricing
Track per learner/month:
- Player-hours by tier (`standard`, `cinematic-rtx`).
- GB streamed per learner-hour.
- Multiplayer session count and room minutes.
- Season/clan API call volume.
- Conversion from free -> paid and add-on attach rate.
- Churn by plan + cohort.

## 8) Required Ops Status
- Supabase migration push: completed (`202603030005_premium_games_network_and_seasons.sql`).
- Production deploy: completed (`koydo.vercel.app`).
- RevenueCat/subscription mapping path: verified in webhook + status APIs.

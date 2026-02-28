# Koydo Pricing Spec Sheet

Version: `2026-02-27-pricing-spec-v1`  
Source of truth (code): `src/lib/language-learning/pricing-spec.ts`  
Runtime override key: `app_settings.language_pricing_runtime`  
Runtime admin API: `GET/POST /api/admin/billing/language-runtime`

## 1) Launch Defaults (Phase 1)
- Profile: `conservative`
- Learner price: `$5.99/mo`
- Family price: `$14.99/mo` (up to 4 learners)
- Annual discount target: `20%`
- Scored cap: `300 scored attempts / learner / month`
- Free sampler: `10 scored attempts / learner / month`
- Messaging standard: `Up to N scored attempts/month, then seamless practice-only mode`

## 2) SKU Table (USD baseline)
| SKU ID | Type | Billing | Price (USD) | Phase | Status | Notes |
|---|---|---|---:|---|---|---|
| `core_practice` | core_plan | monthly | 0.00 | 1 | active | Unlimited practice-only |
| `language_plus_conservative` | subscription | monthly | 5.99 | 1 | active | Launch default |
| `language_family_conservative` | subscription | monthly | 14.99 | 1 | active | Up to 4 learners |
| `language_plus_growth` | subscription | monthly | 7.99 | 1 | planned | Growth A/B |
| `language_family_growth` | subscription | monthly | 19.99 | 1 | planned | Growth A/B |
| `language_school_annual` | subscription | annual | 59.88 | 1 | planned | $4.99/seat/mo equiv |
| `exam_unlock_beginner` | exam_unlock | one_time | 9.99 | 2 | planned | Low-stakes module |
| `exam_unlock_intermediate` | exam_unlock | one_time | 19.99 | 2 | planned | Medium-stakes module |
| `exam_unlock_advanced` | exam_unlock | one_time | 29.99 | 2 | planned | High-stakes module |
| `exam_bundle_five_pack` | bundle | one_time | 59.99 | 2 | planned | Multi-exam bundle |
| `household_all_access_monthly` | household_pass | monthly | 29.99 | 3 | planned | Cross-generational household |
| `household_all_access_annual` | household_pass | annual | 149.00 | 3 | planned | Retention-first pricing |

## 3) Regional Price Bands (PPP-ready)
| Geo Tier | Regions (example) | Multiplier |
|---|---|---:|
| `tier_1` | US, Canada | `1.0x` |
| `tier_2` | Western Europe, UK, AU/NZ | `0.9x` |
| `tier_3` | LATAM, selected MENA | `0.6x` |
| `tier_4` | India, SEA | `0.4x` |
| `tier_5` | Sub-Saharan Africa, lower-income MENA | `0.3x` |

Guardrail: keep max cross-region variance under `3x`.

## 4) Experiment Matrix (Phase 1)
| Variant ID | Label | Base SKU | Attempt Cap | Utterance Assumption | Sampler | Paywall Mode |
|---|---|---|---:|---:|---:|---|
| `variant_low_barrier` | Low Barrier | `language_plus_conservative` | 300 | 10s | 10 | benefit-first |
| `variant_control` | Control | `language_plus_conservative` | 300 | 10s | 10 | benefit-first |
| `variant_premium_module` | Premium Module | `language_plus_growth` | 300 | 10s | 10 | price-anchor |
| `variant_retention_focus` | Retention Focus | `language_plus_conservative` | 350 | 10s | 10 | benefit-first |

## 5) Runtime Config Shape
Stored at `app_settings.key = language_pricing_runtime`.

```json
{
  "phase": "1",
  "pricingProfile": "conservative",
  "attemptCap": 300,
  "freeSamplerAttempts": 10,
  "geoTierDefault": "tier_1",
  "activeExperimentVariantId": "variant_control"
}
```

## 6) Data Model Additions
Migration: `supabase/migrations/202602280006_language_pricing_runtime_config.sql`

- `language_usage_tracking` additions:
  - `attempt_cap` (`250|300|350`)
  - `utterance_p50_seconds`
  - `utterance_p90_seconds`
  - `geo_tier` (`tier_1`..`tier_5`)
- New table:
  - `language_pricing_config` (phase/key/config JSONB, admin-only RLS)

## 7) Change Workflow
1. Update canonical spec in `src/lib/language-learning/pricing-spec.ts`.
2. For live tests, set runtime overrides via `POST /api/admin/billing/language-runtime`.
3. Validate via `GET /api/language/pricing`.
4. Track guardrails: refund rate, NPS delta, conversion, churn, ARPPU, D30 retention.

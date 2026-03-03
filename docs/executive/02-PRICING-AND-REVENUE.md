# 02 — Pricing & Revenue

> **Koydo Subscription Model, SKU Architecture & Revenue Projections**  
> Confidential · Executive Summary Document

---

## Executive Summary

Koydo operates on a freemium-to-premium subscription model across three billing surfaces: Apple App Store (IAP), Google Play Store (IAP), and Web (Stripe). Pricing is tiered by plan type (Individual, Family, Institutional) with geographic purchasing power parity (PPP) adjustments across 5 tiers. RevenueCat serves as the unified subscription control plane for native platforms, while Stripe handles web billing and B2B invoicing. Launch pricing is set at **$5.99/month individual** and **$14.99/month family** with annual discounts.

---

## 1. Pricing Tiers

### Launch Pricing (Phase 1)

| Plan | Monthly | Annual | Savings |
|------|---------|--------|---------|
| **Koydo Individual** | $5.99/mo | $49.99/yr | 30% |
| **Koydo Family** (up to 6 profiles) | $14.99/mo | $119.99/yr | 33% |

### Phase 2 Expansion

| Plan | Monthly | Annual | Target |
|------|---------|--------|--------|
| Koydo Language Plus | $7.99/mo | $64.99/yr | Speaking lab + pronunciation AI |
| Koydo Language Family | $17.99/mo | $139.99/yr | Family + language features |

### Phase 3 — Institutional

| Plan | Pricing | Model |
|------|---------|-------|
| Koydo School (per seat) | Custom | Annual contract, PO/wire/ACH |
| Koydo Household | $24.99/mo | Up to 10 profiles |

### Master à la Carte

| SKU | Price | Description |
|-----|-------|-------------|
| Single Module Unlock | $9.99 | Permanent access to one curriculum module |
| Full Catalog Bundle | $99.99 | All modules — lifetime access |

---

## 2. SKU Matrix

### 12 Subscription SKUs Across 3 Phases

| SKU ID | Product | Cadence | Apple Product ID | Google Product ID |
|--------|---------|---------|-----------------|-------------------|
| `sku_ind_month` | Individual | Monthly | `koydo_individual_monthly` | `koydo_individual_monthly` |
| `sku_ind_annual` | Individual | Annual | `koydo_individual_annual` | `koydo_individual_annual` |
| `sku_fam_month` | Family | Monthly | `koydo_family_monthly` | `koydo_family_monthly` |
| `sku_fam_annual` | Family | Annual | `koydo_family_annual` | `koydo_family_annual` |
| `sku_lang_month` | Language Plus | Monthly | `koydo_language_monthly` | `koydo_language_monthly` |
| `sku_lang_annual` | Language Plus | Annual | `koydo_language_annual` | `koydo_language_annual` |
| `sku_langfam_month` | Language Family | Monthly | `koydo_langfam_monthly` | `koydo_langfam_monthly` |
| `sku_langfam_annual` | Language Family | Annual | `koydo_langfam_annual` | `koydo_langfam_annual` |
| `sku_school_annual` | School (per seat) | Annual | — | — |
| `sku_household_month` | Household | Monthly | `koydo_household_monthly` | `koydo_household_monthly` |
| `sku_household_annual` | Household | Annual | `koydo_household_annual` | `koydo_household_annual` |
| `sku_classroom_annual` | Classroom | Annual | — | — |

---

## 3. Purchasing Power Parity (PPP)

Geographic pricing adjustments ensure affordability across global markets:

| Tier | Multiplier | Representative Markets |
|------|-----------|----------------------|
| **Tier 1** | 1.0× | United States, Canada, UK, EU, Australia |
| **Tier 2** | 0.7× | Eastern Europe, Latin America (Brazil, Mexico) |
| **Tier 3** | 0.5× | Southeast Asia (Thailand, Philippines), Middle East |
| **Tier 4** | 0.4× | South Asia (India), North Africa |
| **Tier 5** | 0.3× | Sub-Saharan Africa, low-income regions |

**Example** — Individual Monthly:

| Tier | Price |
|------|-------|
| Tier 1 | $5.99 |
| Tier 2 | $4.19 |
| Tier 3 | $2.99 |
| Tier 4 | $2.39 |
| Tier 5 | $1.79 |

**Implementation**: Runtime config via `app_settings.language_pricing_runtime` in Supabase. PPP tier resolved at checkout based on IP geolocation.

---

## 4. Experimentation Matrix

Four pricing experiment variants ready for A/B testing:

| Variant | Individual Monthly | Family Monthly | Note |
|---------|-------------------|----------------|------|
| **A (Default)** | $5.99 | $14.99 | Launch baseline |
| **B** | $7.99 | $17.99 | Higher willingness-to-pay test |
| **C** | $4.99 | $12.99 | Lower price + volume test |
| **D** | $6.99 | $15.99 | Mid-point test |

Variants are assignable per user via feature flags. Conversion and churn measured per variant.

---

## 5. RevenueCat Integration

RevenueCat is the subscription management control plane for **all native (iOS/Android) purchases**.

### Configuration

| Setting | Value |
|---------|-------|
| Entitlement ID | `koydo_pro` |
| Offering ID | `default` |
| Webhook URL | `https://koydo.app/api/revenuecat/webhook` |
| Webhook Security | HMAC signature verification |

### Package Mapping

| Package | Status | Use Case |
|---------|--------|----------|
| Individual Monthly | ✅ Launch-ready | Core subscription |
| Individual Annual | ✅ Launch-ready | Core with discount |
| Family Monthly | Planned (growth) | Multi-profile households |
| Family Annual | Planned (growth) | Multi-profile with discount |
| Language Plus Monthly | Planned (growth) | Speaking lab access |
| School Annual | Planned (institutional) | B2B per-seat |
| Household Monthly | Planned (growth) | Extended family |

### Webhook Lifecycle Events

| Event | Action |
|-------|--------|
| `INITIAL_PURCHASE` | Create/update subscription in Supabase |
| `RENEWAL` | Extend `current_period_end` |
| `CANCELLATION` | Set `cancel_at_period_end = true` |
| `BILLING_ISSUE` | Update status, trigger user prompt |
| `EXPIRATION` | Revert to free tier |

---

## 6. Billing Platform Architecture

### Platform-Specific Routing

| Surface | Payment Provider | Integration |
|---------|-----------------|-------------|
| **Web** | Stripe | Stripe Checkout → webhook → Supabase |
| **iOS** | Apple IAP via RevenueCat | RevenueCat SDK → webhook → Supabase |
| **Android** | Google Play Billing via RevenueCat | RevenueCat SDK → webhook → Supabase |

### App Store Compliance

- **Stripe is hidden on native platforms** — `canUseStripe()` flag returns `false` on iOS/Android
- All digital content purchases on native must go through IAP (Apple/Google requirement)
- **30% platform commission** on all native IAP transactions
- Subscription management deep-links to platform-native settings (Apple Subscriptions, Play Store, Stripe Portal)

### B2B / Institutional Billing

| Payment Method | Supported | Notes |
|----------------|-----------|-------|
| Credit/Debit Card | ✅ | Via Stripe |
| ACH Bank Transfer | ✅ | Via Stripe |
| Wire Transfer | ✅ | Invoicing instructions returned |
| Purchase Order (PO) | ✅ | Invoicing instructions returned |

Idempotent retries supported via `Idempotency-Key` header.

---

## 7. Billing Quality Assurance

### Test Coverage

14 test cases covering the complete billing lifecycle:

| Test | Coverage |
|------|----------|
| TC-01 | Free user paywall display |
| TC-02 | Monthly subscription purchase (iOS) |
| TC-03 | Family subscription purchase (iOS) |
| TC-04 | Monthly subscription purchase (Android) |
| TC-05 | Restore purchases |
| TC-06 | Restore with no prior purchase |
| TC-07 | Subscription renewal |
| TC-08 | Cancellation during active period |
| TC-09 | Failed renewal / billing issue |
| TC-10 | Webhook signature verification |
| TC-11 | Subscription status API |
| TC-12 | Entitlement check (native) |

**Release gate**: All 12 tests must pass on both iOS (TestFlight) and Android (Internal Testing) before submission.

---

## 8. Revenue Projections

### Commission Structure

| Platform | Commission | Net Revenue (on $5.99) |
|----------|-----------|----------------------|
| Apple App Store | 30% (Year 1), 15% (Year 2+, Small Business Program) | $4.19 → $5.09 |
| Google Play | 15% (first $1M/yr) | $5.09 |
| Web (Stripe) | 2.9% + $0.30 | $5.52 |

### Key Takeaway

Web subscriptions yield **32% more net revenue** than native IAP (Year 1). Strategic emphasis on web acquisition with native for retention and mobile-first users.

---

*Document generated from Koydo pricing and billing documentation. For commercial questions, contact the business team.*

# RevenueCat Blueprint

Generated: 2026-03-01T09:58:27.889Z
Pricing spec version: 2026-02-27-pricing-spec-v1
Launch default phase/profile: 1 / conservative

## Source of Truth

- Pricing matrix: `src/lib/language-learning/pricing-spec.ts`
- RevenueCat mapping: `src/lib/billing/revenuecat-matrix.ts`
- Entitlement ID: `koydo_pro`
- Offering ID: `default`

## Required Package Mapping

| Plan ID | Package Identifier (RC) | Expected Product Identifier | Billing | Status | Phase | USD Baseline | Launch Ready |
| --- | --- | --- | --- | --- | --- | ---: | --- |
| language_plus_conservative | language_plus_conservative | language_plus_conservative | monthly | active | 1 | 5.99 | yes |
| language_family_conservative | language_family_conservative | language_family_conservative | monthly | active | 1 | 14.99 | yes |
| language_plus_growth | language_plus_growth | language_plus_growth | monthly | planned | 1 | 7.99 | no |
| language_family_growth | language_family_growth | language_family_growth | monthly | planned | 1 | 19.99 | no |
| language_school_annual | language_school_annual | language_school_annual | annual | planned | 1 | 59.88 | no |
| household_all_access_monthly | household_all_access_monthly | household_all_access_monthly | monthly | planned | 3 | 29.99 | no |
| household_all_access_annual | household_all_access_annual | household_all_access_annual | annual | planned | 3 | 149.00 | no |

## Dashboard Setup Steps

1. In RevenueCat Product Catalog, create entitlement with identifier matching the value above.
2. Create products and attach them to the entitlement.
3. Create or update offering `default`.
4. For each plan row above, create a package with identifier exactly equal to `Plan ID` and map it to the intended product.
5. Mark offering `default` as Current.
6. Run `npm run billing:matrix:validate` and `npm run smoke:auth-billing` after dashboard updates.

## Legacy Entitlement Aliases

- `premium_access`
- `language_learning_premium`
- `premium`

## Notes

- Use `default` as the current offering in RevenueCat dashboard.
- Set RevenueCat package identifiers to match internal plan IDs exactly.
- For zero-drift mapping, set product identifiers equal to internal plan IDs when creating Store products.
- If Store product IDs must differ, keep RevenueCat package identifier equal to internal plan ID and map package -> product manually in dashboard.

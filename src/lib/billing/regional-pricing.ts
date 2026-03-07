/**
 * Regional Pricing Configuration
 *
 * Maps micro-app pricing tiers and regions to localized price points
 * and RevenueCat offering identifiers. Each micro-app manifest declares
 * a `pricingTier` and `defaultCurrency` — this module resolves those
 * to concrete prices and RevenueCat product IDs.
 */

import { getManifestSync, type AppPricingTier } from "@/lib/platform/app-manifest";
import { formatCurrency } from "@/lib/i18n/format";

// ── Regional price points ────────────────────────────────────────────────────

export type RegionalPrice = {
  amount: number;
  currency: string;
  /** RevenueCat product ID for this price point */
  rcProductId: string;
  /** How this price displays (pre-formatted) */
  displayPrice: string;
};

/**
 * Pricing matrix: tier × currency → price.
 * Apple/Google handle the actual currency conversion for IAP,
 * but we need display prices for marketing pages and store listings.
 */
const PRICING_MATRIX: Record<AppPricingTier, Record<string, { monthly: number; annual: number }>> = {
  free: {
    USD: { monthly: 0, annual: 0 },
    EUR: { monthly: 0, annual: 0 },
    GBP: { monthly: 0, annual: 0 },
    JPY: { monthly: 0, annual: 0 },
    KRW: { monthly: 0, annual: 0 },
    INR: { monthly: 0, annual: 0 },
    CNY: { monthly: 0, annual: 0 },
    AED: { monthly: 0, annual: 0 },
  },
  freemium: {
    USD: { monthly: 4.99, annual: 39.99 },
    EUR: { monthly: 4.99, annual: 39.99 },
    GBP: { monthly: 3.99, annual: 34.99 },
    JPY: { monthly: 700, annual: 5800 },
    KRW: { monthly: 6500, annual: 54900 },
    INR: { monthly: 249, annual: 1999 },
    CNY: { monthly: 30, annual: 248 },
    AED: { monthly: 18.99, annual: 149.99 },
  },
  "premium_9.99": {
    USD: { monthly: 9.99, annual: 79.99 },
    EUR: { monthly: 9.99, annual: 79.99 },
    GBP: { monthly: 7.99, annual: 64.99 },
    JPY: { monthly: 1400, annual: 11800 },
    KRW: { monthly: 13500, annual: 109900 },
    INR: { monthly: 499, annual: 3999 },
    CNY: { monthly: 68, annual: 548 },
    AED: { monthly: 36.99, annual: 299.99 },
  },
  "premium_19.99": {
    USD: { monthly: 19.99, annual: 149.99 },
    EUR: { monthly: 19.99, annual: 149.99 },
    GBP: { monthly: 16.99, annual: 129.99 },
    JPY: { monthly: 2800, annual: 22800 },
    KRW: { monthly: 26500, annual: 219900 },
    INR: { monthly: 999, annual: 7999 },
    CNY: { monthly: 128, annual: 998 },
    AED: { monthly: 74.99, annual: 549.99 },
  },
  custom: {
    USD: { monthly: 0, annual: 0 },
  },
};

// ── Region → Currency mapping ────────────────────────────────────────────────

const REGION_CURRENCIES: Record<string, string> = {
  global: "USD",
  us: "USD",
  latam: "USD",
  eu: "EUR",
  dach: "EUR",
  uk: "GBP",
  jp: "JPY",
  kr: "KRW",
  in: "INR",
  cn: "CNY",
  mena: "AED",
};

// ── RevenueCat offering IDs per app ──────────────────────────────────────────

/**
 * Maps app_id to RevenueCat offering identifier.
 * Each micro-app should have its own offering in the RC dashboard
 * so different products/prices can be configured per-app.
 */
const APP_RC_OFFERINGS: Record<string, string> = {
  koydo_main: "default",
  koydo_junior: "koydo_junior",
  koydo_sat: "koydo_sat_prep",
  koydo_finance: "koydo_finance_pro",
  koydo_university: "koydo_university",
  koydo_math: "koydo_math",
  koydo_arena: "koydo_arena",
  // Regional variants share parent offering or have their own
  koydo_math_es: "koydo_math_latam",
  koydo_exam_jp: "koydo_exam_jp",
  koydo_junior_de: "koydo_junior_dach",
  koydo_ar: "koydo_mena",
  koydo_kr: "koydo_kr",
  koydo_hi: "koydo_india",
  koydo_math_zh: "koydo_math_cn",
};

// ── Public API ───────────────────────────────────────────────────────────────

/** Get the RevenueCat offering ID for the current micro-app. */
export function getAppOfferingId(appId?: string): string {
  const manifest = getManifestSync(appId);
  return APP_RC_OFFERINGS[manifest.appId] ?? "default";
}

/** Get the currency for a region code. */
export function getCurrencyForRegion(region: string): string {
  return REGION_CURRENCIES[region] ?? "USD";
}

/** Get the display price for the current app's pricing tier. */
export function getAppDisplayPrice(
  cadence: "monthly" | "annual",
  appId?: string,
  locale?: string,
): RegionalPrice {
  const manifest = getManifestSync(appId);
  const currency = manifest.defaultCurrency;
  const tier = manifest.pricingTier;

  const tierPrices = PRICING_MATRIX[tier];
  const currencyPrices = tierPrices?.[currency] ?? tierPrices?.USD ?? { monthly: 0, annual: 0 };
  const amount = cadence === "annual" ? currencyPrices.annual : currencyPrices.monthly;

  const displayLocale = locale ?? manifest.defaultLocale;
  const displayPrice = amount === 0
    ? "Free"
    : formatCurrency(amount, currency, displayLocale);

  const rcOffering = APP_RC_OFFERINGS[manifest.appId] ?? "default";
  const rcProductId = `${rcOffering}_${cadence}`;

  return { amount, currency, rcProductId, displayPrice };
}

/** Get all available price points for a specific app (for store listing / marketing). */
export function getAppPricePoints(appId?: string, locale?: string): {
  monthly: RegionalPrice;
  annual: RegionalPrice;
  savings: string;
} {
  const monthly = getAppDisplayPrice("monthly", appId, locale);
  const annual = getAppDisplayPrice("annual", appId, locale);

  const monthlyCostOfAnnual = annual.amount / 12;
  const savingsPercent = monthly.amount > 0
    ? Math.round((1 - monthlyCostOfAnnual / monthly.amount) * 100)
    : 0;

  return {
    monthly,
    annual,
    savings: savingsPercent > 0 ? `${savingsPercent}%` : "",
  };
}

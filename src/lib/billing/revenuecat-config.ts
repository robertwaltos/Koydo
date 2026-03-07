import { getPlatform } from '../platform/detect';
import {
  RC_ENTITLEMENT_KOYDO_PRO,
  RC_LEGACY_PRO_ENTITLEMENT_IDS,
} from './revenuecat-matrix';

const warnedMissingKeyByPlatform = new Set<string>();
const warnedGenericFallbackByPlatform = new Set<string>();

function warnOnce(cache: Set<string>, key: string, message: string) {
  if (cache.has(key)) return;
  cache.add(key);
  console.warn(message);
}

export function getRevenueCatApiKey(): string | null {
  const genericKey =
    process.env.NEXT_PUBLIC_REVENUECAT_API_KEY
    ?? process.env.EXPO_PUBLIC_REVENUECAT_API_KEY
    ?? null;

  const platform = getPlatform();
  const appId = (process.env.NEXT_PUBLIC_APP_ID ?? 'koydo_main').toUpperCase();

  // 1. Try per-app + per-platform key (e.g., NEXT_PUBLIC_REVENUECAT_IOS_KEY_KOYDO_JUNIOR)
  if (platform === 'ios' || platform === 'android') {
    const platformLabel = platform === 'ios' ? 'IOS' : 'ANDROID';
    const perAppKey = process.env[`NEXT_PUBLIC_REVENUECAT_${platformLabel}_KEY_${appId}`];
    if (perAppKey) return perAppKey;
  }

  // 2. Fall back to generic platform key
  if (platform === 'ios') {
    const key = process.env.NEXT_PUBLIC_REVENUECAT_APPLE_KEY ?? genericKey;
    if (!key) {
      warnOnce(
        warnedMissingKeyByPlatform,
        'ios',
        '[RevenueCat] Missing NEXT_PUBLIC_REVENUECAT_APPLE_KEY (or NEXT_PUBLIC_REVENUECAT_API_KEY fallback). IAP billing will not work on iOS.',
      );
      return null;
    }
    if (!process.env.NEXT_PUBLIC_REVENUECAT_APPLE_KEY && genericKey) {
      warnOnce(
        warnedGenericFallbackByPlatform,
        'ios',
        '[RevenueCat] Using NEXT_PUBLIC_REVENUECAT_API_KEY fallback for iOS. Prefer platform-specific keys for production.',
      );
    }
    return key;
  }
  if (platform === 'android') {
    const key = process.env.NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY ?? genericKey;
    if (!key) {
      warnOnce(
        warnedMissingKeyByPlatform,
        'android',
        '[RevenueCat] Missing NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY (or NEXT_PUBLIC_REVENUECAT_API_KEY fallback). IAP billing will not work on Android.',
      );
      return null;
    }
    if (!process.env.NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY && genericKey) {
      warnOnce(
        warnedGenericFallbackByPlatform,
        'android',
        '[RevenueCat] Using NEXT_PUBLIC_REVENUECAT_API_KEY fallback for Android. Prefer platform-specific keys for production.',
      );
    }
    return key;
  }
  return null;
}

/**
 * Canonical entitlement ID for paid Koydo access.
 * Keep `RC_ENTITLEMENT_PREMIUM` as a compatibility alias for existing imports.
 */
export const RC_ENTITLEMENT_PREMIUM = RC_ENTITLEMENT_KOYDO_PRO;

type RevenueCatProEntitlement = {
  productIdentifier?: string | null;
  expirationDate?: string | null;
  periodType?: string | null;
};

type RevenueCatLikeCustomerInfo = {
  entitlements?: {
    active?: Record<string, RevenueCatProEntitlement | undefined>;
  };
};

export function getRevenueCatProEntitlement(
  customerInfo: RevenueCatLikeCustomerInfo | null | undefined,
): RevenueCatProEntitlement | null {
  const active = customerInfo?.entitlements?.active;
  if (!active) return null;

  if (active[RC_ENTITLEMENT_PREMIUM]) {
    return active[RC_ENTITLEMENT_PREMIUM] ?? null;
  }

  for (const legacyId of RC_LEGACY_PRO_ENTITLEMENT_IDS) {
    if (active[legacyId]) {
      return active[legacyId] ?? null;
    }
  }

  return null;
}

export function hasRevenueCatProEntitlement(
  customerInfo: RevenueCatLikeCustomerInfo | null | undefined,
): boolean {
  return getRevenueCatProEntitlement(customerInfo) !== null;
}

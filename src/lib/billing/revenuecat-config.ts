import { getPlatform } from '../platform/detect';

export function getRevenueCatApiKey(): string | null {
  const platform = getPlatform();
  if (platform === 'ios') {
    const key = process.env.NEXT_PUBLIC_REVENUECAT_APPLE_KEY ?? null;
    if (!key) console.warn('[RevenueCat] NEXT_PUBLIC_REVENUECAT_APPLE_KEY is not set. IAP billing will not work on iOS.');
    return key;
  }
  if (platform === 'android') {
    const key = process.env.NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY ?? null;
    if (!key) console.warn('[RevenueCat] NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY is not set. IAP billing will not work on Android.');
    return key;
  }
  return null;
}

export const RC_ENTITLEMENT_PREMIUM = 'premium_access';

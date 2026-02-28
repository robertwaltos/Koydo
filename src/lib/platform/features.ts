import { isNativePlatform } from './detect';

export { isNativePlatform, isIOS, isAndroid } from './detect';

export function canUseStripe(): boolean {
  const mode = process.env.NEXT_PUBLIC_BILLING_PROVIDER_MODE ?? 'stripe_external';
  return !isNativePlatform() && mode !== 'app_store_iap';
}

export function canUseIAP(): boolean {
  const mode = process.env.NEXT_PUBLIC_BILLING_PROVIDER_MODE ?? 'stripe_external';
  return isNativePlatform() || mode === 'app_store_iap';
}

export function canUsePushNotifications(): boolean {
  return isNativePlatform();
}

export function canUseHaptics(): boolean {
  return isNativePlatform();
}

export function shouldShowAppStoreRating(lessonsCompleted: number): boolean {
  return isNativePlatform() && lessonsCompleted >= 5;
}

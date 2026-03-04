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

/**
 * Voyager Zero spatial runtime gate.
 * Default is locked until premium rollout + hardware certification is complete.
 * Set NEXT_PUBLIC_VOYAGER_ZERO_PREMIUM_PENDING=false to re-enable runtime.
 */
export function isVoyagerZeroPremiumPending(): boolean {
  const flag = process.env.NEXT_PUBLIC_VOYAGER_ZERO_PREMIUM_PENDING;
  if (flag === "false") return false;
  return true;
}

/**
 * StoryForge Cinema gate.
 * Default is locked until premium launch messaging and rollout are finalized.
 * Set NEXT_PUBLIC_STORYFORGE_CINEMA_PREMIUM_PENDING=false to re-enable.
 */
export function isStoryForgeCinemaPremiumPending(): boolean {
  const flag = process.env.NEXT_PUBLIC_STORYFORGE_CINEMA_PREMIUM_PENDING;
  if (flag === "false") return false;
  return true;
}

/**
 * Testing classroom mode S1 gate.
 * Default is pending until rollout approvals complete.
 * Set NEXT_PUBLIC_TESTING_CLASSROOM_MODE_V1_PENDING=false to enable.
 */
export function isTestingClassroomModeV1Pending(): boolean {
  const flag = process.env.NEXT_PUBLIC_TESTING_CLASSROOM_MODE_V1_PENDING;
  if (flag === "false") return false;
  return true;
}

/**
 * Testing quick-review S1 gate.
 * Default is pending until launch checklist + reliability signoff complete.
 * Set NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING=false to enable.
 */
export function isTestingQuickReviewV1Pending(): boolean {
  const flag = process.env.NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING;
  if (flag === "false") return false;
  return true;
}

/**
 * Testing Google Classroom workflow S2 gate.
 * Default is pending until Codex-B auth/service-account integration is active.
 * Set NEXT_PUBLIC_TESTING_GOOGLE_CLASSROOM_V1_PENDING=false to enable.
 */
export function isTestingGoogleClassroomV1Pending(): boolean {
  const flag = process.env.NEXT_PUBLIC_TESTING_GOOGLE_CLASSROOM_V1_PENDING;
  if (flag === "false") return false;
  return true;
}

/**
 * Testing ingestion parse-preview S2 gate.
 * Default is pending until ingestion mapping and review UX gates are approved.
 * Set NEXT_PUBLIC_TESTING_INGESTION_V1_PENDING=false to enable.
 */
export function isTestingIngestionV1Pending(): boolean {
  const flag = process.env.NEXT_PUBLIC_TESTING_INGESTION_V1_PENDING;
  if (flag === "false") return false;
  return true;
}

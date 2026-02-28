/**
 * Entitlement Check Utilities
 *
 * Provides server-side and client-side helpers to check whether the current
 * user has active premium access.
 *
 * • Server-side: queries Supabase directly (use in API routes, server components)
 * • Client-side: queries /api/subscription/status on web; uses RevenueCat SDK on native
 */

import { Capacitor } from '@capacitor/core';

// ─── Type Definitions ───────────────────────────────────────────────────────

export interface EntitlementResult {
  /** Whether the user has active premium access */
  active: boolean;
  /** Source of the truth for this check */
  source: 'revenuecat' | 'api' | 'supabase' | 'error';
  /** The active plan, or 'free' if no premium */
  plan: 'monthly' | 'annual' | 'free';
  /** ISO 8601 expiry date, or null for free/perpetual */
  expiresAt: string | null;
  /** Whether the user is in a free trial */
  isInTrial: boolean;
}

// ─── Client-Side: Web ────────────────────────────────────────────────────────

/**
 * Check premium access status from the client.
 *
 * On native (iOS/Android): reads CustomerInfo from RevenueCat SDK first
 *   for instant offline-capable result, then syncs with server.
 * On web: calls /api/subscription/status.
 */
export async function checkPremiumAccessClient(): Promise<EntitlementResult> {
  if (Capacitor.isNativePlatform()) {
    return checkPremiumAccessNative();
  }
  return checkPremiumAccessWeb();
}

async function checkPremiumAccessWeb(): Promise<EntitlementResult> {
  try {
    const response = await fetch('/api/subscription/status', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    return {
      active: data.active ?? false,
      source: 'api',
      plan: data.plan ?? 'free',
      expiresAt: data.expiresAt ?? null,
      isInTrial: data.isInTrial ?? false,
    };
  } catch (err) {
    console.error('[entitlement-check] Web check failed:', err);
    return {
      active: false,
      source: 'error',
      plan: 'free',
      expiresAt: null,
      isInTrial: false,
    };
  }
}

/**
 * Native entitlement check via RevenueCat Capacitor SDK.
 * Reads from the local cache first (instant) then syncs remote.
 */
async function checkPremiumAccessNative(): Promise<EntitlementResult> {
  try {
    // Dynamic import to avoid SSR issues — RevenueCat is only available in native context
    const { Purchases } = await import('@revenuecat/purchases-capacitor');

    const { customerInfo } = await Purchases.getCustomerInfo();

    const premiumEntitlement = customerInfo.entitlements.active['premium'];

    if (premiumEntitlement) {
      return {
        active: true,
        source: 'revenuecat',
        plan: premiumEntitlement.productIdentifier?.includes('annual')
          ? 'annual'
          : 'monthly',
        expiresAt: premiumEntitlement.expirationDate ?? null,
        isInTrial: premiumEntitlement.periodType === 'trial',
      };
    }

    return {
      active: false,
      source: 'revenuecat',
      plan: 'free',
      expiresAt: null,
      isInTrial: false,
    };
  } catch (err) {
    console.warn(
      '[entitlement-check] RevenueCat native check failed, falling back to API:',
      err
    );
    // Fall back to the API check
    return checkPremiumAccessWeb();
  }
}

// ─── Server-Side: Supabase Direct Query ─────────────────────────────────────

/**
 * Server-side entitlement check.
 * Use in API routes and Server Components.
 *
 * Requires a pre-authenticated Supabase client instance.
 *
 * @example
 * import { createServerClient } from '@supabase/ssr';
 * const supabase = createServerClient(...);
 * const { data: { user } } = await supabase.auth.getUser();
 * const result = await checkPremiumAccessServer(supabase, user.id);
 */
export async function checkPremiumAccessServer(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  userId: string
): Promise<EntitlementResult> {
  try {
    const { data: subscription, error } = await supabase
      .from('subscriptions')
      .select('status, plan_id, current_period_end, is_in_trial')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    if (!subscription) {
      return {
        active: false,
        source: 'supabase',
        plan: 'free',
        expiresAt: null,
        isInTrial: false,
      };
    }

    const now = new Date();
    const expiresAt = subscription.current_period_end
      ? new Date(subscription.current_period_end)
      : null;

    const isActive =
      (subscription.status === 'active' || subscription.status === 'trialing') &&
      (expiresAt === null || expiresAt > now);

    return {
      active: isActive,
      source: 'supabase',
      plan: isActive
        ? subscription.plan_id?.includes('annual')
          ? 'annual'
          : 'monthly'
        : 'free',
      expiresAt: expiresAt?.toISOString() ?? null,
      isInTrial: subscription.is_in_trial ?? false,
    };
  } catch (err) {
    console.error('[entitlement-check] Server check failed:', err);
    return {
      active: false,
      source: 'error',
      plan: 'free',
      expiresAt: null,
      isInTrial: false,
    };
  }
}

// ─── Utility: Gate Premium Routes ────────────────────────────────────────────

/**
 * Convenience helper — returns true if the user has premium access.
 * Use for conditional rendering in client components.
 *
 * @example
 * const isPremium = await isPremiumUser();
 * if (!isPremium) router.push('/paywall');
 */
export async function isPremiumUser(): Promise<boolean> {
  const result = await checkPremiumAccessClient();
  return result.active;
}

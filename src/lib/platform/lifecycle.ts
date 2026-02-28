/**
 * App Lifecycle Manager
 *
 * Listens to native Capacitor app state changes (foreground/background)
 * and performs critical tasks on each transition:
 *
 * ON RESUME (background → foreground):
 *  - Refresh Supabase auth session (rotates token if expired)
 *  - Re-check subscription entitlement (in case it changed while backgrounded)
 *  - Restore any pending UI state
 *
 * ON PAUSE (foreground → background):
 *  - Persist learning progress (flush to Supabase)
 *  - Cancel any long-running non-critical timers
 *
 * Usage:
 *  Call `initAppLifecycle()` once on app mount (in a top-level layout or provider).
 *  Call the returned cleanup function on unmount.
 *
 * @example
 * // In app/layout.tsx or a top-level provider client component:
 * useEffect(() => {
 *   const cleanup = initAppLifecycle({ supabase, onResume, onPause });
 *   return cleanup;
 * }, []);
 */

import { App, AppState } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

const shouldDebugLifecycle = process.env.NODE_ENV !== 'production';

function debugLifecycle(...args: unknown[]) {
  if (shouldDebugLifecycle) {
    console.debug(...args);
  }
}

export interface AppLifecycleOptions {
  /**
   * Supabase client instance to use for session refresh.
   * Must be the browser/client-side Supabase instance.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase?: any;

  /** Called after session refresh on resume with current auth user */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onResume?: (user: any | null) => void | Promise<void>;

  /** Called just before the app moves to background */
  onPause?: () => void | Promise<void>;

  /** Called when subscription status changes on resume */
  onSubscriptionChange?: (isActive: boolean) => void;
}

export type LifecycleCleanup = () => void;

let _initialized = false;

/**
 * Initialize the app lifecycle listener.
 * Safe to call multiple times — will de-duplicate.
 *
 * @returns Cleanup function to remove the listener.
 */
export function initAppLifecycle(
  options: AppLifecycleOptions = {}
): LifecycleCleanup {
  // Only run on native platforms
  if (!Capacitor.isNativePlatform()) {
    return () => {};
  }

  // Guard against duplicate initialization
  if (_initialized) {
    console.warn('[lifecycle] Already initialized — skipping duplicate call');
    return () => {};
  }

  _initialized = true;

  const { supabase, onResume, onPause, onSubscriptionChange } = options;

  // ─── App State Change Handler ──────────────────────────────────────────────
  const handleAppStateChange = async (state: AppState) => {
    if (state.isActive) {
      // ── RESUME ──────────────────────────────────────────────────────────────
      debugLifecycle('[lifecycle] App resumed — refreshing session');

      // 1. Refresh auth session
      let user = null;
      if (supabase) {
        try {
          const {
            data: { session },
            error,
          } = await supabase.auth.refreshSession();

          if (error) {
            console.warn('[lifecycle] Session refresh failed:', error.message);
          } else {
            user = session?.user ?? null;
          }
        } catch (err) {
          console.error('[lifecycle] Unexpected session refresh error:', err);
        }
      }

      // 2. Re-check subscription entitlement
      try {
        const { checkPremiumAccessClient } = await import(
          '@/lib/billing/entitlement-check'
        );
        const result = await checkPremiumAccessClient();
        onSubscriptionChange?.(result.active);
      } catch (err) {
        console.warn('[lifecycle] Subscription re-check failed:', err);
      }

      // 3. Call user-provided resume handler
      try {
        await onResume?.(user);
      } catch (err) {
        console.error('[lifecycle] onResume handler error:', err);
      }
    } else {
      // ── PAUSE ───────────────────────────────────────────────────────────────
      debugLifecycle('[lifecycle] App paused — persisting state');

      try {
        await onPause?.();
      } catch (err) {
        console.error('[lifecycle] onPause handler error:', err);
      }
    }
  };

  // Register the listener
  let listenerHandle: { remove: () => void } | null = null;

  App.addListener('appStateChange', handleAppStateChange).then((handle) => {
    listenerHandle = handle;
  });

  // ─── Back Button Handler (Android) ────────────────────────────────────────
  const handleBackButton = async (
    event: import('@capacitor/app').BackButtonListenerEvent
  ) => {
    if (!event.canGoBack) {
      // Minimize app instead of killing it
      await App.minimizeApp();
    }
  };

  let backButtonHandle: { remove: () => void } | null = null;
  App.addListener('backButton', handleBackButton).then((handle) => {
    backButtonHandle = handle;
  });

  // ─── Return Cleanup Function ───────────────────────────────────────────────
  return () => {
    _initialized = false;
    listenerHandle?.remove();
    backButtonHandle?.remove();
  };
}

/**
 * Reset lifecycle initialization flag.
 * Useful in testing environments.
 */
export function resetLifecycle(): void {
  _initialized = false;
}

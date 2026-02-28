import { Capacitor } from '@capacitor/core';
import { InAppReview } from '@capacitor-community/in-app-review';

const LAST_PROMPTED_KEY = 'app_rating_last_prompted_ts';
const MIN_LESSONS_BEFORE_PROMPT = 5;
const COOLDOWN_DAYS = 30;

/**
 * Conditionally triggers the native in-app review prompt.
 *
 * Conditions:
 *  - Running on a native platform (iOS or Android)
 *  - At least 5 lessons completed
 *  - Not prompted in the last 30 days
 *
 * Uses SKStoreReviewController on iOS and Google Play In-App Review on Android.
 * The OS may silently suppress the prompt based on its own heuristics.
 */
export function maybePromptForRating(lessonsCompleted: number): void {
  if (!Capacitor.isNativePlatform()) return;
  if (lessonsCompleted < MIN_LESSONS_BEFORE_PROMPT) return;

  const raw = typeof window !== 'undefined' ? localStorage.getItem(LAST_PROMPTED_KEY) : null;
  if (raw) {
    const lastPromptedMs = parseInt(raw, 10);
    if (!isNaN(lastPromptedMs)) {
      const cooldownMs = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
      if (Date.now() - lastPromptedMs < cooldownMs) return;
    }
  }

  // Record that we attempted to prompt (even if OS suppresses it)
  if (typeof window !== 'undefined') {
    localStorage.setItem(LAST_PROMPTED_KEY, Date.now().toString());
  }

  // Fire and forget — the OS controls whether the dialog is shown
  InAppReview.requestReview().catch((err: unknown) => {
    console.warn('[AppRating] In-app review request failed:', err);
  });
}

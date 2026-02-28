import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

const LAST_ASKED_KEY = 'push_permission_last_asked_ts';
const MIN_LESSONS_BEFORE_PROMPT = 3;
const COOLDOWN_DAYS = 7;

/**
 * Returns true if we should prompt the user for notification permissions.
 * Conditions:
 *  - Running on a native platform (iOS or Android)
 *  - User has completed at least 3 lessons
 *  - We haven't asked in the last 7 days
 */
export function shouldPromptForNotifications(lessonsCompleted: number): boolean {
  if (!Capacitor.isNativePlatform()) return false;
  if (lessonsCompleted < MIN_LESSONS_BEFORE_PROMPT) return false;

  const raw = typeof window !== 'undefined' ? localStorage.getItem(LAST_ASKED_KEY) : null;
  if (raw) {
    const lastAskedMs = parseInt(raw, 10);
    if (!isNaN(lastAskedMs)) {
      const cooldownMs = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
      if (Date.now() - lastAskedMs < cooldownMs) return false;
    }
  }

  return true;
}

/**
 * Requests push notification permission from the OS.
 * Records the timestamp so we don't ask again too soon.
 */
export async function requestNotificationPermission(): Promise<'granted' | 'denied' | 'default'> {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LAST_ASKED_KEY, Date.now().toString());
  }

  try {
    const result = await PushNotifications.requestPermissions();
    if (result.receive === 'granted') return 'granted';
    if (result.receive === 'denied') return 'denied';
    return 'default';
  } catch {
    return 'default';
  }
}

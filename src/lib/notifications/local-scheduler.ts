import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const STREAK_REMINDER_ID = 1001;
const LESSON_REMINDER_ID_BASE = 2000;

async function ensurePermissions(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) return false;
  let status = await LocalNotifications.checkPermissions();
  if (status.display === 'prompt') {
    status = await LocalNotifications.requestPermissions();
  }
  return status.display === 'granted';
}

/**
 * Schedules a daily streak reminder at `hourOfDay` (24h, local time).
 * Replaces any existing streak reminder.
 */
export async function scheduleStreakReminder(hourOfDay: number): Promise<void> {
  const granted = await ensurePermissions();
  if (!granted) return;

  // Cancel any existing streak reminder first
  await cancelStreakReminder();

  const now = new Date();
  const scheduled = new Date(now);
  scheduled.setHours(hourOfDay, 0, 0, 0);
  // If the time has already passed today, start tomorrow
  if (scheduled <= now) {
    scheduled.setDate(scheduled.getDate() + 1);
  }

  await LocalNotifications.schedule({
    notifications: [
      {
        id: STREAK_REMINDER_ID,
        title: 'Keep your streak going!',
        body: 'Complete a quick lesson today',
        schedule: {
          on: {
            hour: scheduled.getHours(),
            minute: 0,
          },
          repeats: true,
        },
        channelId: 'learning_reminders',
        smallIcon: 'ic_notification',
        iconColor: '#6366F1',
      },
    ],
  });
}

/**
 * Cancels the daily streak reminder.
 */
export async function cancelStreakReminder(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await LocalNotifications.cancel({
      notifications: [{ id: STREAK_REMINDER_ID }],
    });
  } catch {
    // Ignore if no notification exists to cancel
  }
}

/**
 * Schedules a one-shot lesson reminder `minutesFromNow` minutes in the future.
 */
export async function scheduleLessonReminder(
  lessonTitle: string,
  minutesFromNow: number,
): Promise<void> {
  const granted = await ensurePermissions();
  if (!granted) return;

  const fireAt = new Date(Date.now() + minutesFromNow * 60 * 1000);
  // Use a unique ID based on time so multiple reminders can coexist
  const id = LESSON_REMINDER_ID_BASE + (fireAt.getTime() % 1000);

  await LocalNotifications.schedule({
    notifications: [
      {
        id,
        title: `Continue learning: ${lessonTitle}`,
        body: 'Pick up where you left off',
        schedule: { at: fireAt },
        channelId: 'learning_reminders',
        smallIcon: 'ic_notification',
        iconColor: '#6366F1',
      },
    ],
  });
}

import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import { NOTIFICATION_CHANNELS } from './notification-types';

async function persistPushToken(token: string): Promise<void> {
  try {
    const supabase = createSupabaseBrowserClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from('device_push_tokens')
      .upsert(
        {
          user_id: user.id,
          token,
          platform: Capacitor.getPlatform() as 'ios' | 'android',
        },
        { onConflict: 'user_id,token' }
      );
  } catch (err) {
    console.error('[Push] Failed to persist push token:', err);
  }
}

export async function clearPushToken(token: string): Promise<void> {
  try {
    const supabase = createSupabaseBrowserClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from('device_push_tokens')
      .delete()
      .eq('user_id', user.id)
      .eq('token', token);
  } catch (err) {
    console.error('[Push] Failed to clear push token:', err);
  }
}

export async function registerForPushNotifications() {
  if (!Capacitor.isNativePlatform()) return;

  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    return;
  }

  if (Capacitor.getPlatform() === 'android') {
    await PushNotifications.createChannel({
      id: NOTIFICATION_CHANNELS.LEARNING_REMINDERS,
      name: 'Learning Reminders',
      description: 'Time to learn! Continue where you left off',
      importance: 3,
      visibility: 1,
    });
    await PushNotifications.createChannel({
      id: NOTIFICATION_CHANNELS.ACHIEVEMENTS,
      name: 'Achievements & Streaks',
      description: 'Streak alerts and new achievements',
      importance: 5,
      visibility: 1,
    });
  }

  await PushNotifications.register();

  PushNotifications.addListener('registration', (token) => {
    console.debug('[Push] Registration success, token:', token.value);
    void persistPushToken(token.value);
  });

  PushNotifications.addListener('registrationError', (error) => {
    console.error('[Push] Registration error:', JSON.stringify(error));
  });
}

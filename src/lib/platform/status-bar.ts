import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

/**
 * Sets the status bar style based on the app's color scheme.
 * Call on app launch and whenever theme changes.
 *
 * @param isDark - pass `true` for dark theme (white icons), `false` for light (dark icons)
 */
export async function applyStatusBarTheme(isDark: boolean): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await StatusBar.setStyle({ style: isDark ? Style.Dark : Style.Light });
    // On Android, also tint the background to match the app surface
    if (Capacitor.getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: isDark ? '#0F172A' : '#FAFAFA' });
    }
  } catch {
    // Status bar API unavailable — silently ignore
  }
}

/**
 * Shows the status bar (in case it was hidden, e.g. during a full-screen splash).
 */
export async function showStatusBar(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await StatusBar.show();
  } catch { /* ignore */ }
}

/**
 * Hides the status bar for full-screen experiences.
 */
export async function hideStatusBar(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await StatusBar.hide();
  } catch { /* ignore */ }
}

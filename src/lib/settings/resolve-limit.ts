/**
 * Resolve Limit — Single entry point for all enforcement reads
 *
 * Priority: per-user override > app_settings row > SETTINGS_DEFAULTS
 * Used by daily activity cap, AI limits, learner cap, etc.
 */

import { getAppSetting, SETTINGS_DEFAULTS } from "./app-settings";
import { getUserOverride } from "./per-user-overrides";

/**
 * Resolve a numeric limit for a given user + setting key.
 *
 * @param settingKey - The key in app_settings / SETTINGS_DEFAULTS
 * @param userId     - The user to check for per-user overrides (optional)
 * @returns The resolved numeric limit
 */
export async function resolveLimit(
  settingKey: string,
  userId?: string,
): Promise<number> {
  // 1. Check per-user override first
  if (userId) {
    const override = await getUserOverride<number>(userId, settingKey);
    if (override !== null && typeof override === "number") {
      return override;
    }
  }

  // 2. Check app_settings table (with in-memory cache)
  const defaultValue = SETTINGS_DEFAULTS[settingKey];
  const value = await getAppSetting<number>(
    settingKey,
    typeof defaultValue === "number" ? defaultValue : 0,
  );

  return typeof value === "number" ? value : 0;
}

/**
 * Resolve a string setting (e.g., moderation_provider).
 */
export async function resolveSetting<T = string>(
  settingKey: string,
  userId?: string,
): Promise<T> {
  if (userId) {
    const override = await getUserOverride<T>(userId, settingKey);
    if (override !== null) return override;
  }

  const defaultValue = SETTINGS_DEFAULTS[settingKey] as T | undefined;
  return getAppSetting<T>(settingKey, defaultValue as T);
}

/**
 * Resolve a boolean setting (e.g., parent_gate_enabled).
 */
export async function resolveBooleanSetting(
  settingKey: string,
  userId?: string,
): Promise<boolean> {
  if (userId) {
    const override = await getUserOverride<boolean>(userId, settingKey);
    if (override !== null && typeof override === "boolean") return override;
  }

  const defaultValue = SETTINGS_DEFAULTS[settingKey];
  return getAppSetting<boolean>(
    settingKey,
    typeof defaultValue === "boolean" ? defaultValue : false,
  );
}

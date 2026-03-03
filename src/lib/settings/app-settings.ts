/**
 * App Settings — Runtime-configurable key-value store
 *
 * Reads from the `app_settings` table (service-role only, no RLS policies).
 * All writes require admin auth. Reads are cached in-memory with 60s TTL.
 *
 * IMPORTANT: This module uses createSupabaseAdminClient() exclusively.
 * The app_settings table has RLS enabled with NO policies, meaning only
 * the service-role key can access it — by design.
 */

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

// ── Defaults ─────────────────────────────────────────────────────────────────

export const SETTINGS_DEFAULTS: Record<string, unknown> = {
  // Daily activity cap (learning events per user per day)
  daily_activity_cap: 20,
  // Free learner (student profile) cap per account
  free_learner_cap: 1,
  // AI companion daily limit — free users
  ai_companion_daily_limit_free: 5,
  // AI companion daily limit — premium users
  ai_companion_daily_limit_premium: 50,
  // AI tutor daily limit — free users
  ai_tutor_daily_limit_free: 3,
  // AI tutor daily limit — premium users
  ai_tutor_daily_limit_premium: 25,
  // Data retention: active data (months)
  data_retention_active_months: 12,
  // Data retention: post-deletion grace period (days)
  data_retention_post_deletion_days: 90,
  // Data retention: pending consent expiry (days)
  data_retention_pending_consent_days: 7,
  // Content moderation provider
  moderation_provider: "openai",
  // Parent gate enabled
  parent_gate_enabled: true,
  // Beta tester full access
  beta_tester_full_access: true,
};

// ── In-memory cache ─────────────────────────────────────────────────────────

const CACHE_TTL_MS = 60_000; // 60 seconds

type CacheEntry = {
  value: unknown;
  fetchedAt: number;
};

const settingsCache = new Map<string, CacheEntry>();

export function flushSettingsCache() {
  settingsCache.clear();
}

// ── Read ─────────────────────────────────────────────────────────────────────

export async function getAppSetting<T = unknown>(
  key: string,
  defaultValue?: T,
): Promise<T> {
  const fallback = defaultValue ?? (SETTINGS_DEFAULTS[key] as T | undefined);

  // Check cache
  const cached = settingsCache.get(key);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return cached.value as T;
  }

  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("app_settings")
      .select("value")
      .eq("key", key)
      .maybeSingle();

    if (error) {
      console.error(`[app-settings] Failed to read "${key}":`, error.message);
      return fallback as T;
    }

    const value = data?.value ?? fallback;
    settingsCache.set(key, { value, fetchedAt: Date.now() });
    return value as T;
  } catch (err) {
    console.error(`[app-settings] Unexpected error reading "${key}":`, err);
    return fallback as T;
  }
}

// ── Read all ────────────────────────────────────────────────────────────────

export async function getAllSettings(): Promise<Record<string, unknown>> {
  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("app_settings")
      .select("key, value, updated_by, updated_at")
      .order("key");

    if (error) {
      console.error("[app-settings] Failed to read all settings:", error.message);
      return { ...SETTINGS_DEFAULTS };
    }

    const result: Record<string, unknown> = { ...SETTINGS_DEFAULTS };
    for (const row of data ?? []) {
      result[row.key] = row.value;
      // Also refresh cache
      settingsCache.set(row.key, { value: row.value, fetchedAt: Date.now() });
    }

    return result;
  } catch (err) {
    console.error("[app-settings] Unexpected error reading all settings:", err);
    return { ...SETTINGS_DEFAULTS };
  }
}

// ── Write ────────────────────────────────────────────────────────────────────

export async function setAppSetting(
  key: string,
  value: unknown,
  adminUserId: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const admin = createSupabaseAdminClient();
    const { error } = await admin.from("app_settings").upsert(
      {
        key,
        value,
        updated_by: adminUserId,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    );

    if (error) {
      return { success: false, error: error.message };
    }

    // Invalidate cache for this key
    settingsCache.set(key, { value, fetchedAt: Date.now() });
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}

// ── Bulk write ──────────────────────────────────────────────────────────────

export async function setAppSettings(
  settings: Record<string, unknown>,
  adminUserId: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const admin = createSupabaseAdminClient();
    const rows = Object.entries(settings).map(([key, value]) => ({
      key,
      value,
      updated_by: adminUserId,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await admin
      .from("app_settings")
      .upsert(rows, { onConflict: "key" });

    if (error) {
      return { success: false, error: error.message };
    }

    // Refresh cache
    for (const row of rows) {
      settingsCache.set(row.key, { value: row.value, fetchedAt: Date.now() });
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}

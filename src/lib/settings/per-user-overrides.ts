/**
 * Per-user setting overrides
 *
 * Allows admins to override specific settings for individual users.
 * For example, granting a beta tester higher AI limits.
 */

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type UserOverride = {
  id: string;
  user_id: string;
  setting_key: string;
  value: unknown;
  reason: string | null;
  set_by: string | null;
  created_at: string;
  updated_at: string;
};

export async function getUserOverride<T = unknown>(
  userId: string,
  settingKey: string,
): Promise<T | null> {
  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("user_setting_overrides")
      .select("value")
      .eq("user_id", userId)
      .eq("setting_key", settingKey)
      .maybeSingle();

    if (error || !data) return null;
    return data.value as T;
  } catch {
    return null;
  }
}

export async function getUserOverrides(userId: string): Promise<UserOverride[]> {
  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("user_setting_overrides")
      .select("*")
      .eq("user_id", userId)
      .order("setting_key");

    if (error) return [];
    return (data ?? []) as UserOverride[];
  } catch {
    return [];
  }
}

export async function setUserOverride(params: {
  userId: string;
  settingKey: string;
  value: unknown;
  reason?: string;
  setBy: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const admin = createSupabaseAdminClient();
    const { error } = await admin.from("user_setting_overrides").upsert(
      {
        user_id: params.userId,
        setting_key: params.settingKey,
        value: params.value,
        reason: params.reason ?? null,
        set_by: params.setBy,
      },
      { onConflict: "user_id,setting_key" },
    );

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

export async function deleteUserOverride(
  userId: string,
  settingKey: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const admin = createSupabaseAdminClient();
    const { error } = await admin
      .from("user_setting_overrides")
      .delete()
      .eq("user_id", userId)
      .eq("setting_key", settingKey);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

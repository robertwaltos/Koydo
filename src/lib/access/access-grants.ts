/**
 * Access Grants — Beta Testers, Teachers, Schools, Influencers, etc.
 *
 * Reusable grant system for special access. Grants are stored in the
 * `access_grants` table with types: beta_tester, teacher, school,
 * influencer, press, investor, employee.
 *
 * Beta testers with active grants get full premium access to the app.
 * Other grant types can be used for role-specific features later.
 */

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type GrantType =
  | "beta_tester"
  | "teacher"
  | "school"
  | "influencer"
  | "press"
  | "investor"
  | "employee";

export type AccessGrant = {
  id: string;
  user_id: string;
  grant_type: GrantType;
  label: string | null;
  is_active: boolean;
  granted_by: string | null;
  revoked_by: string | null;
  revoked_at: string | null;
  expires_at: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

/**
 * Check if a user has an active grant of the given type.
 * Checks expiry automatically.
 */
export async function hasActiveGrant(
  userId: string,
  grantType: GrantType,
): Promise<boolean> {
  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("access_grants")
      .select("id, is_active, expires_at")
      .eq("user_id", userId)
      .eq("grant_type", grantType)
      .eq("is_active", true)
      .maybeSingle();

    if (error || !data) return false;

    // Check expiry
    if (data.expires_at) {
      const expiresAt = new Date(data.expires_at);
      if (expiresAt <= new Date()) {
        // Auto-deactivate expired grant
        await admin
          .from("access_grants")
          .update({ is_active: false })
          .eq("id", data.id);
        return false;
      }
    }

    return data.is_active;
  } catch {
    return false;
  }
}

/**
 * Check if a user has ANY active grant (any type).
 * Returns the list of active grant types.
 */
export async function getActiveGrants(
  userId: string,
): Promise<GrantType[]> {
  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("access_grants")
      .select("grant_type, is_active, expires_at")
      .eq("user_id", userId)
      .eq("is_active", true);

    if (error || !data) return [];

    const now = new Date();
    return data
      .filter((g) => !g.expires_at || new Date(g.expires_at) > now)
      .map((g) => g.grant_type as GrantType);
  } catch {
    return [];
  }
}

/**
 * Grant access to a user. Upserts — safe to call multiple times.
 */
export async function grantAccess(params: {
  userId: string;
  grantType: GrantType;
  label?: string;
  grantedBy: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const admin = createSupabaseAdminClient();
    const { error } = await admin.from("access_grants").upsert(
      {
        user_id: params.userId,
        grant_type: params.grantType,
        label: params.label ?? null,
        is_active: true,
        granted_by: params.grantedBy,
        revoked_by: null,
        revoked_at: null,
        expires_at: params.expiresAt ?? null,
        metadata: params.metadata ?? {},
      },
      { onConflict: "user_id,grant_type" },
    );

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

/**
 * Revoke access for a user.
 */
export async function revokeAccess(params: {
  userId: string;
  grantType: GrantType;
  revokedBy: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const admin = createSupabaseAdminClient();
    const { error } = await admin
      .from("access_grants")
      .update({
        is_active: false,
        revoked_by: params.revokedBy,
        revoked_at: new Date().toISOString(),
      })
      .eq("user_id", params.userId)
      .eq("grant_type", params.grantType);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

/**
 * List all grants of a given type (for admin view).
 */
export async function listGrantsByType(
  grantType: GrantType,
  activeOnly = true,
): Promise<AccessGrant[]> {
  try {
    const admin = createSupabaseAdminClient();
    let query = admin
      .from("access_grants")
      .select("*")
      .eq("grant_type", grantType)
      .order("created_at", { ascending: false });

    if (activeOnly) {
      query = query.eq("is_active", true);
    }

    const { data, error } = await query;
    if (error) return [];
    return (data ?? []) as AccessGrant[];
  } catch {
    return [];
  }
}

/**
 * List all grants for a user.
 */
export async function listUserGrants(
  userId: string,
): Promise<AccessGrant[]> {
  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("access_grants")
      .select("*")
      .eq("user_id", userId)
      .order("grant_type");

    if (error) return [];
    return (data ?? []) as AccessGrant[];
  } catch {
    return [];
  }
}

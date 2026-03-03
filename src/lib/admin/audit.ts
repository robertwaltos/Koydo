/**
 * Admin Audit Logging — Hardened
 *
 * - logAdminAction()       — fire-and-forget (non-critical actions)
 * - logAdminActionStrict() — throws on failure (regulated actions)
 * - logAuthEvent()         — auth lifecycle events
 */

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type AuditPayload = {
  adminUserId: string;
  actionType: string;
  targetUserId?: string | null;
  metadata?: Record<string, unknown>;
};

/**
 * Fire-and-forget audit logger. Silently swallows errors.
 * Use for non-critical operational actions.
 */
export async function logAdminAction({
  adminUserId,
  actionType,
  targetUserId = null,
  metadata = {},
}: AuditPayload) {
  try {
    const admin = createSupabaseAdminClient();
    await admin.from("admin_action_logs").insert({
      admin_user_id: adminUserId,
      action_type: actionType,
      target_user_id: targetUserId,
      metadata,
    });
  } catch (error) {
    console.error("Failed to persist admin action audit log.", error);
  }
}

/**
 * Strict audit logger — throws on failure.
 * Use for regulated actions where audit trail is MANDATORY:
 * - Data deletion / retention
 * - Access grant/revoke
 * - Settings changes
 * - Financial operations
 * - DSAR processing
 */
export async function logAdminActionStrict({
  adminUserId,
  actionType,
  targetUserId = null,
  metadata = {},
}: AuditPayload): Promise<{ id: string }> {
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_action_logs")
    .insert({
      admin_user_id: adminUserId,
      action_type: actionType,
      target_user_id: targetUserId,
      metadata,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`AUDIT FAILURE: Could not log "${actionType}" — ${error.message}`);
  }

  return { id: data.id };
}

/**
 * Log an auth-related event (login, logout, signup, etc.).
 * Non-admin events — stored alongside admin audit trail for unified view.
 */
export async function logAuthEvent(params: {
  userId?: string;
  eventType: "login" | "logout" | "login_failed" | "signup" | "password_reset";
  ip?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
}) {
  try {
    const admin = createSupabaseAdminClient();
    await admin.from("admin_action_logs").insert({
      admin_user_id: params.userId ?? "00000000-0000-0000-0000-000000000000",
      action_type: `auth.${params.eventType}`,
      metadata: {
        ip: params.ip,
        userAgent: params.userAgent,
        ...params.metadata,
      },
    });
  } catch (error) {
    console.error("Failed to log auth event:", error);
  }
}

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type AuditPayload = {
  adminUserId: string;
  actionType: string;
  targetUserId?: string | null;
  metadata?: Record<string, unknown>;
};

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

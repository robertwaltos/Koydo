import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export type IntegrationAuditEventInput = {
  actorUserId: string | null;
  actionType: string;
  targetType: "google_classroom_sync" | "google_classroom_assignment" | "integration_runtime";
  targetId: string | null;
  classId: string | null;
  status: "success" | "failure" | "queued" | "skipped";
  metadata?: Record<string, unknown>;
};

function normalizeActionType(actionType: string) {
  return actionType.trim().slice(0, 120);
}

/**
 * B-A06 audit logging baseline:
 * centralized integration audit writes (best-effort) using admin action log sink.
 */
export async function logIntegrationAuditEvent(event: IntegrationAuditEventInput) {
  try {
    const admin = createSupabaseAdminClient();
    await admin.from("admin_action_logs").insert({
      admin_user_id: event.actorUserId,
      action_type: normalizeActionType(event.actionType),
      target_user_id: null,
      metadata: {
        targetType: event.targetType,
        targetId: event.targetId,
        classId: event.classId,
        status: event.status,
        ...(event.metadata ?? {}),
      },
    });
  } catch (error) {
    console.error("Failed to persist integration audit event.", toSafeErrorRecord(error));
  }
}

export async function logIntegrationAuditEvents(events: readonly IntegrationAuditEventInput[]) {
  if (events.length === 0) return { attempted: 0 };

  await Promise.all(events.map((event) => logIntegrationAuditEvent(event)));
  return { attempted: events.length };
}

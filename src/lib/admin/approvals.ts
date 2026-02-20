import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/config/env";

type ActionType = "user_delete" | "billing_refund" | "billing_set_price";

export async function requireApprovedRequestForAction({
  actionType,
  approvalRequestId,
  actorUserId,
}: {
  actionType: ActionType;
  approvalRequestId: string | null | undefined;
  actorUserId: string;
}) {
  if (!serverEnv.REQUIRE_ADMIN_APPROVALS) {
    return { ok: true as const };
  }

  if (!approvalRequestId) {
    return { ok: false as const, error: "Missing approvalRequestId for this critical action." };
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_approval_requests")
    .select("id, action_type, status, requested_by, approved_by, expires_at")
    .eq("id", approvalRequestId)
    .maybeSingle();

  if (error || !data) {
    return { ok: false as const, error: "Approval request not found." };
  }
  if (data.action_type !== actionType) {
    return { ok: false as const, error: "Approval request action type mismatch." };
  }
  if (data.status !== "approved") {
    return { ok: false as const, error: `Approval request status is ${data.status}.` };
  }
  if (!data.approved_by) {
    return { ok: false as const, error: "Approval request does not have an approver." };
  }
  if (data.approved_by === actorUserId) {
    return { ok: false as const, error: "Action must be approved by a different admin." };
  }
  if (new Date(data.expires_at).getTime() <= Date.now()) {
    return { ok: false as const, error: "Approval request has expired." };
  }

  return { ok: true as const, approvalRecordId: data.id };
}

export async function markApprovalRequestExecuted({
  approvalRequestId,
  actorUserId,
}: {
  approvalRequestId: string;
  actorUserId: string;
}) {
  const admin = createSupabaseAdminClient();
  await admin
    .from("admin_approval_requests")
    .update({
      status: "executed",
      executed_by: actorUserId,
      executed_at: new Date().toISOString(),
    })
    .eq("id", approvalRequestId);
}

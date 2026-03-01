import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { markApprovalRequestExecuted, requireApprovedRequestForAction } from "@/lib/admin/approvals";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  userId: z.string().uuid(),
  hardDelete: z.boolean().optional(),
  confirmText: z.literal("DELETE_USER"),
  approvalRequestId: z.string().uuid().optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  if (payload.data.userId === auth.userId) {
    return NextResponse.json({ error: "You cannot delete your own admin account." }, { status: 400 });
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "user_delete",
    windowSeconds: 3600,
    maxActions: 10,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for user deletion actions." },
      { status: 429 }
    );
  }

  const admin = createSupabaseAdminClient();
  const approvalCheck = await requireApprovedRequestForAction({
    actionType: "user_delete",
    approvalRequestId: payload.data.approvalRequestId,
    actorUserId: auth.userId,
  });
  if (!approvalCheck.ok) {
    return NextResponse.json({ error: approvalCheck.error }, { status: 400 });
  }

  const { error } = await admin.auth.admin.deleteUser(payload.data.userId, payload.data.hardDelete ?? false);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "user_delete",
    targetUserId: payload.data.userId,
    metadata: { hardDelete: payload.data.hardDelete ?? false },
  });

  if (payload.data.approvalRequestId) {
    await markApprovalRequestExecuted({
      approvalRequestId: payload.data.approvalRequestId,
      actorUserId: auth.userId,
    });
  }

  return NextResponse.json({ success: true });
}


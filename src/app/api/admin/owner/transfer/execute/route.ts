import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import {
  ensureOwnerTransferPasswordConfigured,
  getExpectedTransferPasswordHash,
  revokeOwnerStepUpSessions,
  verifyOwnerActionPassword,
} from "@/lib/admin/owner-security";
import { executeOwnerTransferPlaybook } from "@/lib/admin/owner-transfer";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  playbookId: z.string().uuid(),
  mode: z.enum(["co_owner", "replace_owner"]).default("replace_owner"),
  transferPassword: z.string().min(8).max(256),
  confirmText: z.literal("EXECUTE_OWNERSHIP_TRANSFER"),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi({ stepUpScope: "ownership_transfer" });
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    ensureOwnerTransferPasswordConfigured();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Owner transfer password is not configured.";
    return NextResponse.json({ error: message }, { status: 503 });
  }

  const passwordVerified = verifyOwnerActionPassword(
    parsed.data.transferPassword,
    getExpectedTransferPasswordHash(),
  );
  if (!passwordVerified) {
    return NextResponse.json({ error: "Ownership transfer password is invalid." }, { status: 403 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const result = await executeOwnerTransferPlaybook(admin, {
      executedBy: auth.userId,
      playbookId: parsed.data.playbookId,
      mode: parsed.data.mode,
    });

    await revokeOwnerStepUpSessions(admin, result.currentOwnerUserId);
    await revokeOwnerStepUpSessions(admin, result.candidateOwnerUserId, "ownership_transfer");

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_transfer_executed",
      metadata: {
        playbookId: result.playbookId,
        mode: result.executionMode,
        currentOwnerUserId: result.currentOwnerUserId,
        candidateOwnerUserId: result.candidateOwnerUserId,
      },
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to execute ownership transfer.";
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

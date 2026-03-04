import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { runFactoryReset } from "@/lib/admin/factory-reset";
import {
  ensureFactoryResetPasswordConfigured,
  verifyOwnerActionPassword,
} from "@/lib/admin/owner-security";
import { serverEnv } from "@/lib/config/env";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  mode: z.enum(["dry_run", "apply"]).default("dry_run"),
  scope: z.enum(["beta_only", "all_non_owner"]).default("beta_only"),
  reason: z.string().trim().min(10).max(500),
  resetPassword: z.string().min(8).max(256),
  includeModuleBaselineRefresh: z.boolean().default(true),
  promoteBetaUsersToLive: z.boolean().default(true),
  userChunkSize: z.number().int().min(25).max(500).default(100),
  confirmText: z.literal("FACTORY_RESET_APP"),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi({ stepUpScope: "factory_reset" });
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const rate = await enforceIpRateLimit(request, "api:admin:owner:factory-reset:run", {
    max: 6,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many reset attempts. Try again later." }, { status: 429 });
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    ensureFactoryResetPasswordConfigured();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Factory reset password is not configured.";
    return NextResponse.json({ error: message }, { status: 503 });
  }

  const passwordVerified = verifyOwnerActionPassword(
    parsed.data.resetPassword,
    serverEnv.OWNER_FACTORY_RESET_PASSWORD_HASH,
  );
  if (!passwordVerified) {
    return NextResponse.json({ error: "Factory reset password is invalid." }, { status: 403 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const result = await runFactoryReset(admin, {
      requestedBy: auth.userId,
      executedBy: auth.userId,
      mode: parsed.data.mode,
      scope: parsed.data.scope,
      reason: parsed.data.reason,
      includeModuleBaselineRefresh: parsed.data.includeModuleBaselineRefresh,
      promoteBetaUsersToLive: parsed.data.promoteBetaUsersToLive,
      userChunkSize: parsed.data.userChunkSize,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_factory_reset_run",
      metadata: {
        runId: result.runId,
        mode: parsed.data.mode,
        scope: parsed.data.scope,
        targetUserCount: result.targetUserCount,
        rowsScanned: result.rowsScanned,
        rowsDeleted: result.rowsDeleted,
      },
    });

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to execute factory reset." }, { status: 500 });
  }
}

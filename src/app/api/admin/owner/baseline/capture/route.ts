import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { captureModuleBaselines } from "@/lib/admin/module-baseline";
import { logAdminAction } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  confirmText: z.literal("CAPTURE_MODULE_BASELINE"),
  baselineVersion: z.string().trim().min(4).max(120).optional(),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi({ stepUpScope: "security_admin" });
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const summary = await captureModuleBaselines(admin, {
      capturedBy: auth.userId,
      baselineVersion: parsed.data.baselineVersion,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_module_baseline_captured",
      metadata: summary,
    });

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to capture module baseline snapshots." }, { status: 500 });
  }
}

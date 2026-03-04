import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { clearOwnerStepUpCookie, revokeOwnerStepUpSessions } from "@/lib/admin/owner-security";
import { logAdminAction } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  scope: z.enum(["owner_console", "factory_reset", "ownership_transfer", "security_admin"]).optional(),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const admin = createSupabaseAdminClient();
    await revokeOwnerStepUpSessions(admin, auth.userId, parsed.data.scope);

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_step_up_revoked",
      metadata: {
        scope: parsed.data.scope ?? "all",
      },
    });

    const response = NextResponse.json({ success: true });
    clearOwnerStepUpCookie(response);
    return response;
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to revoke owner step-up session." }, { status: 500 });
  }
}

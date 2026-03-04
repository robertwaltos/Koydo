import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { applyOwnerStepUpCookie, verifyOwnerYubikeyAndIssueStepUp } from "@/lib/admin/owner-security";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  otp: z.string().trim().min(32).max(64),
  scope: z.enum(["owner_console", "factory_reset", "ownership_transfer", "security_admin"]).default("owner_console"),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const rate = await enforceIpRateLimit(request, "api:admin:owner:yubikey:verify", {
    max: 40,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many YubiKey verification attempts. Try again later." },
      { status: 429 },
    );
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const session = await verifyOwnerYubikeyAndIssueStepUp({
      admin,
      userId: auth.userId,
      otp: parsed.data.otp,
      scope: parsed.data.scope,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_yubikey_step_up_verified",
      metadata: {
        scope: session.scope,
      },
    });

    const response = NextResponse.json({
      success: true,
      scope: session.scope,
      factorType: session.factorType,
      expiresAt: session.expiresAt,
    });
    applyOwnerStepUpCookie(response, session);
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to verify YubiKey OTP.";
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

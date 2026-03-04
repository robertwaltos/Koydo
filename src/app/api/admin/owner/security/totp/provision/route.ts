import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { provisionOwnerTotpFactor } from "@/lib/admin/owner-security";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  label: z.string().trim().min(1).max(80).optional(),
  confirmText: z.literal("PROVISION_OWNER_TOTP"),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const rate = await enforceIpRateLimit(request, "api:admin:owner:totp:provision", {
    max: 6,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many provisioning attempts. Try again later." },
      { status: 429 },
    );
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const provisioned = await provisionOwnerTotpFactor({
      admin,
      userId: auth.userId,
      ownerEmail: auth.userEmail,
      label: parsed.data.label,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_totp_provision",
      metadata: {
        factorId: provisioned.factorId,
      },
    });

    return NextResponse.json({
      success: true,
      factorId: provisioned.factorId,
      secret: provisioned.secret,
      otpauthUri: provisioned.otpauthUri,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to provision authenticator factor." }, { status: 500 });
  }
}

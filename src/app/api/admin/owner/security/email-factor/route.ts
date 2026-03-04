import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { configureSecondaryOwnerEmailFactor } from "@/lib/admin/owner-security";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  email: z.string().email(),
  confirmText: z.literal("SET_OWNER_SECONDARY_EMAIL"),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const rate = await enforceIpRateLimit(request, "api:admin:owner:email-factor:set", {
    max: 10,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many update attempts. Try again later." },
      { status: 429 },
    );
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const configured = await configureSecondaryOwnerEmailFactor({
      admin,
      userId: auth.userId,
      email: parsed.data.email,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_secondary_email_configured",
      metadata: {
        factorId: configured.factorId,
        email: configured.email,
      },
    });

    return NextResponse.json({
      success: true,
      factorId: configured.factorId,
      email: configured.email,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to configure secondary owner email." }, { status: 500 });
  }
}

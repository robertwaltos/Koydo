import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { createOwnerEmailChallenge } from "@/lib/admin/owner-security";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  scope: z.enum(["owner_console", "factory_reset", "ownership_transfer", "security_admin"]).default("owner_console"),
  confirmText: z.literal("SEND_OWNER_EMAIL_CHALLENGE"),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const rate = await enforceIpRateLimit(request, "api:admin:owner:email:challenge", {
    max: 20,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many challenge requests. Try again later." },
      { status: 429 },
    );
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const challenge = await createOwnerEmailChallenge({
      admin,
      userId: auth.userId,
      scope: parsed.data.scope,
      ownerEmail: auth.userEmail,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_secondary_email_challenge_requested",
      metadata: {
        challengeId: challenge.challengeId,
        scope: challenge.scope,
        deliveryMode: challenge.deliveryMode,
        delivered: challenge.delivered,
      },
    });

    return NextResponse.json({
      success: true,
      challengeId: challenge.challengeId,
      scope: challenge.scope,
      expiresAt: challenge.expiresAt,
      delivered: challenge.delivered,
      deliveryMode: challenge.deliveryMode,
      deliveryReason: challenge.deliveryReason,
      debugCode: challenge.debugCode ?? null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create email challenge.";
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

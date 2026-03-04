import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createParentChangeChallenge } from "@/lib/security/parent-change-confirmation";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  scope: z.enum([
    "student_profile_settings",
    "support_sensitive_change",
    "account_delete",
    "account_email_change",
  ]),
  channel: z.enum(["email", "sms", "authenticator"]),
  targetRef: z.string().max(180).optional(),
  phoneNumber: z.string().max(64).optional(),
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:account:change-confirmation:challenge", {
    max: 15,
    windowMs: 60 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many verification challenge requests. Please retry later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload.", details: payload.error.flatten() }, { status: 400 });
  }

  const fallbackPhone = user.phone ?? undefined;
  const phoneNumber = payload.data.phoneNumber?.trim() || fallbackPhone;

  try {
    const challenge = await createParentChangeChallenge({
      userId: user.id,
      userEmail: user.email ?? null,
      scope: payload.data.scope,
      channel: payload.data.channel,
      targetRef: payload.data.targetRef ?? null,
      smsPhoneNumber: phoneNumber,
    });

    return NextResponse.json({
      success: true,
      challenge,
    });
  } catch (error) {
    console.error("Failed to create parent change challenge.", toSafeErrorRecord(error));
    const message = error instanceof Error ? error.message : "Unable to create verification challenge.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { verifyParentChangeChallenge } from "@/lib/security/parent-change-confirmation";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  challengeId: z.string().uuid(),
  scope: z.enum([
    "student_profile_settings",
    "support_sensitive_change",
    "account_delete",
    "account_email_change",
  ]),
  code: z.string().min(4).max(16),
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:account:change-confirmation:verify", {
    max: 30,
    windowMs: 60 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many verification attempts. Please retry later." },
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

  try {
    const verification = await verifyParentChangeChallenge({
      userId: user.id,
      challengeId: payload.data.challengeId,
      scope: payload.data.scope,
      code: payload.data.code,
    });
    return NextResponse.json({ success: true, verification });
  } catch (error) {
    console.error("Parent change challenge verification failed.", toSafeErrorRecord(error));
    const message = error instanceof Error ? error.message : "Verification failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

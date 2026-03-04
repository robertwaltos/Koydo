import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { provisionParentTotpFactor } from "@/lib/security/parent-change-confirmation";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  label: z.string().min(1).max(80).optional(),
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:account:change-confirmation:totp:provision", {
    max: 10,
    windowMs: 60 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many authenticator provisioning attempts. Please retry later." },
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

  const payload = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload.", details: payload.error.flatten() }, { status: 400 });
  }

  try {
    const provisioned = await provisionParentTotpFactor({
      userId: user.id,
      userEmail: user.email ?? null,
      label: payload.data.label,
    });
    return NextResponse.json({
      success: true,
      provisioned,
    });
  } catch (error) {
    console.error("Parent authenticator provisioning failed.", toSafeErrorRecord(error));
    const message = error instanceof Error ? error.message : "Unable to provision authenticator factor.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

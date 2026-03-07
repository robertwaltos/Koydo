import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { deviceLoginPollSchema, requireMatchingDeviceLoginRequest } from "@/lib/auth/device-login";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:auth:device:poll:post", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many device approval checks. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = deviceLoginPollSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { requestId, deviceCode } = parsed.data;
  const admin = createSupabaseAdminClient();

  const { data: reqData, error: reqError } = await requireMatchingDeviceLoginRequest({
    requestId,
    deviceCode,
  });

  if (reqError || !reqData) {
    return NextResponse.json({ status: "not_found" });
  }

  if (new Date(reqData.expires_at) < new Date() && reqData.status === "pending") {
    return NextResponse.json({ status: "expired" });
  }

  if (reqData.status === "approved") {
    // Prevent replay attacks: Consume the request immediately so it can only be used once.
    await admin.from("device_login_requests").update({ status: "consumed" }).eq("id", reqData.id);

    const token = (reqData.device_info as Record<string, string>)?.magicToken;
    const email = (reqData.device_info as Record<string, string>)?.email;

    if (!token || !email) {
      return NextResponse.json({ status: "error", message: "Missing authorization token in request." });
    }

    return NextResponse.json({
      status: "approved",
      token,
      email,
    });
  }

  return NextResponse.json({ status: reqData.status });
}

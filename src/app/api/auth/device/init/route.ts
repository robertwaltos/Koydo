import { NextResponse } from "next/server";
import crypto from "crypto";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

function generateDeviceCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Excluded I, O, 1, 0 to avoid confusion
  let code = "";
  for (let i = 0; i < 8; i++) {
    if (i === 4) code += "-";
    code += chars.charAt(crypto.randomInt(chars.length));
  }
  return code;
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:auth:device:init:post", {
    max: 10,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many device login requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const admin = createSupabaseAdminClient();
  const deviceCode = generateDeviceCode();

  // Expiration set to 15 minutes from now
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

  const { data, error } = await admin
    .from("device_login_requests")
    .insert({
      device_code: deviceCode,
      status: "pending",
      expires_at: expiresAt,
    })
    .select("id, device_code, expires_at")
    .single();

  if (error) {
    return NextResponse.json({ error: "Failed to initialize device login." }, { status: 500 });
  }

  return NextResponse.json({
    requestId: data.id,
    deviceCode: data.device_code,
    expiresAt: data.expires_at,
    intervalMs: 3000, // Tell client to poll every 3 seconds
  });
}

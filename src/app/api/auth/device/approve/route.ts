import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { deviceCodeSchema } from "@/lib/auth/device-login";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const requestSchema = z.object({
  deviceCode: deviceCodeSchema,
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:auth:device:approve:post", {
    max: 15,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many approval attempts. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { deviceCode } = parsed.data;

  const supabase = await createSupabaseServerClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Ensure the user is a parent or admin
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_parent, is_admin")
    .eq("user_id", user.id)
    .single();

  if (!profile || (!profile.is_parent && !profile.is_admin)) {
    return NextResponse.json({ error: "Only parents or admins can approve devices." }, { status: 403 });
  }

  const admin = createSupabaseAdminClient();

  // Find the request
  const { data: reqData, error: reqError } = await admin
    .from("device_login_requests")
    .select("id, status, expires_at")
    .eq("device_code", deviceCode)
    .single();

  if (reqError || !reqData) {
    return NextResponse.json({ error: "Invalid device code." }, { status: 404 });
  }

  if (reqData.status !== "pending") {
    return NextResponse.json({ error: `Request is already ${reqData.status}.` }, { status: 400 });
  }

  if (new Date(reqData.expires_at) < new Date()) {
    await admin.from("device_login_requests").update({ status: "expired" }).eq("id", reqData.id);
    return NextResponse.json({ error: "Device code has expired." }, { status: 400 });
  }

  // To authorize the child device, we actually need to log them in as a child.
  // However, Supabase doesn't natively support "logging in as another user" without their password.
  // The easiest secure path for a family app is to use the PARENT'S auth token to create a session,
  // and rely on Koydo's active_profile_id cookie to switch them into the child's context.

  // Create a short-lived custom token or we can just send back a special OTP?
  // Let's use Supabase Admin to generate a link or token.
  // The best way in Supabase to 'magically' log someone in is admin.auth.admin.generateLink.

  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email: user.email!, // Sending a magic link for the parent's email.
  });

  if (linkError || !linkData.properties?.hashed_token) {
    return NextResponse.json({ error: "Failed to generate authorization token." }, { status: 500 });
  }

  // Store the hashed_token in the request so the polling device can use it to verifyOTP
  const { error: updateError } = await admin
    .from("device_login_requests")
    .update({
      status: "approved",
      parent_user_id: user.id,
      // We will store the token temporarily in device_info so the poll endpoint can fetch it.
      device_info: { magicToken: linkData.properties.hashed_token, email: user.email }
    })
    .eq("id", reqData.id);

  if (updateError) {
    return NextResponse.json({ error: "Failed to approve device." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

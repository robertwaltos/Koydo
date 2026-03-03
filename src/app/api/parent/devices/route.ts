import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

export const dynamic = "force-dynamic";

// ── GET: List linked devices ────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const rl = await enforceIpRateLimit(request, "api:parent:devices:list", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rl.allowed) {
    return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: devices, error } = await supabase
    .from("linked_devices")
    .select("id, device_name, device_type, linked_via, is_active, last_seen_at, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching devices:", error);
    return NextResponse.json({ error: "Failed to fetch devices" }, { status: 500 });
  }

  return NextResponse.json({ devices: devices ?? [] });
}

// ── POST: Generate a new link code or register a device ─────────────────────

export async function POST(request: NextRequest) {
  const rl = await enforceIpRateLimit(request, "api:parent:devices:create", {
    max: 10,
    windowMs: 60_000,
  });
  if (!rl.allowed) {
    return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    action: "generate_code" | "register" | "verify_code";
    deviceName?: string;
    deviceType?: string;
    linkCode?: string;
    userAgent?: string;
  };

  if (body.action === "generate_code") {
    // Generate a 6-character alphanumeric link code
    const code = generateLinkCode();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // 10 min

    const { data, error } = await supabase
      .from("linked_devices")
      .insert({
        user_id: user.id,
        device_name: "Pending Link",
        device_type: "web",
        linked_via: "qr",
        link_code: code,
        link_code_expires_at: expiresAt,
        is_active: false,
      })
      .select("id, link_code, link_code_expires_at")
      .single();

    if (error) {
      console.error("Error generating link code:", error);
      return NextResponse.json({ error: "Failed to generate code" }, { status: 500 });
    }

    return NextResponse.json({
      linkCode: data.link_code,
      expiresAt: data.link_code_expires_at,
      deviceId: data.id,
    });
  }

  if (body.action === "verify_code") {
    if (!body.linkCode) {
      return NextResponse.json({ error: "Link code required" }, { status: 400 });
    }

    // Find the pending device by link code
    const { data: device, error } = await supabase
      .from("linked_devices")
      .select("id, user_id, link_code_expires_at, is_active")
      .eq("link_code", body.linkCode.toUpperCase())
      .eq("is_active", false)
      .maybeSingle();

    if (error || !device) {
      return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
    }

    // Check expiry
    if (device.link_code_expires_at && new Date(device.link_code_expires_at) < new Date()) {
      return NextResponse.json({ error: "Code expired" }, { status: 400 });
    }

    // Verify user owns this code
    if (device.user_id !== user.id) {
      return NextResponse.json({ error: "Code not found" }, { status: 404 });
    }

    // Activate the device
    const { error: updateError } = await supabase
      .from("linked_devices")
      .update({
        device_name: body.deviceName ?? detectDeviceName(body.userAgent),
        device_type: body.deviceType ?? "web",
        user_agent: body.userAgent,
        is_active: true,
        link_code: null, // Clear the code
        link_code_expires_at: null,
        last_seen_at: new Date().toISOString(),
      })
      .eq("id", device.id);

    if (updateError) {
      return NextResponse.json({ error: "Failed to activate device" }, { status: 500 });
    }

    return NextResponse.json({ success: true, deviceId: device.id });
  }

  if (body.action === "register") {
    // Direct device registration (no QR)
    const { data, error } = await supabase
      .from("linked_devices")
      .insert({
        user_id: user.id,
        device_name: body.deviceName ?? detectDeviceName(body.userAgent),
        device_type: body.deviceType ?? "web",
        user_agent: body.userAgent,
        linked_via: "manual",
        is_active: true,
        last_seen_at: new Date().toISOString(),
      })
      .select("id, device_name, device_type")
      .single();

    if (error) {
      return NextResponse.json({ error: "Failed to register device" }, { status: 500 });
    }

    return NextResponse.json({ device: data });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}

// ── DELETE: Remove a linked device ──────────────────────────────────────────

export async function DELETE(request: NextRequest) {
  const rl = await enforceIpRateLimit(request, "api:parent:devices:delete", {
    max: 10,
    windowMs: 60_000,
  });
  if (!rl.allowed) {
    return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { deviceId } = (await request.json()) as { deviceId: string };
  if (!deviceId) {
    return NextResponse.json({ error: "Device ID required" }, { status: 400 });
  }

  const { error } = await supabase
    .from("linked_devices")
    .delete()
    .eq("id", deviceId)
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ error: "Failed to remove device" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function generateLinkCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // No 0/O/1/I for clarity
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function detectDeviceName(userAgent?: string): string {
  if (!userAgent) return "Unknown Device";
  const ua = userAgent.toLowerCase();
  if (ua.includes("iphone")) return "iPhone";
  if (ua.includes("ipad")) return "iPad";
  if (ua.includes("android")) return "Android Device";
  if (ua.includes("macintosh") || ua.includes("mac os")) return "Mac";
  if (ua.includes("windows")) return "Windows PC";
  if (ua.includes("linux")) return "Linux PC";
  return "Web Browser";
}

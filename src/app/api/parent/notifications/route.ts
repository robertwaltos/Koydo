import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

export const dynamic = "force-dynamic";

// ── GET: List notifications ─────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const rl = await enforceIpRateLimit(request, "api:parent:notifications:list", {
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

  const searchParams = request.nextUrl.searchParams;
  const unreadOnly = searchParams.get("unread") === "true";
  const limit = Math.min(Number(searchParams.get("limit") ?? 50), 100);

  let query = supabase
    .from("parent_notifications")
    .select("id, type, title, body, metadata, child_profile_id, is_read, read_at, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (unreadOnly) {
    query = query.eq("is_read", false);
  }

  const { data: notifications, error } = await query;

  if (error) {
    // Table may not exist yet
    if (error.message?.toLowerCase().includes("does not exist")) {
      return NextResponse.json({ notifications: [], unreadCount: 0, preferences: null });
    }
    return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 });
  }

  // Count unread
  const { count } = await supabase
    .from("parent_notifications")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("is_read", false);

  // Get preferences
  const { data: preferences } = await supabase
    .from("parent_notification_preferences")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();

  return NextResponse.json({
    notifications: notifications ?? [],
    unreadCount: count ?? 0,
    preferences,
  });
}

// ── PATCH: Mark as read / update preferences ────────────────────────────────

export async function PATCH(request: NextRequest) {
  const rl = await enforceIpRateLimit(request, "api:parent:notifications:update", {
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

  const body = (await request.json()) as {
    action: "mark_read" | "mark_all_read" | "update_preferences";
    notificationId?: string;
    preferences?: Record<string, boolean | string | null>;
  };

  if (body.action === "mark_read" && body.notificationId) {
    const { error } = await supabase
      .from("parent_notifications")
      .update({ is_read: true, read_at: new Date().toISOString() })
      .eq("id", body.notificationId)
      .eq("user_id", user.id);

    if (error) {
      return NextResponse.json({ error: "Failed to mark as read" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  if (body.action === "mark_all_read") {
    const { error } = await supabase
      .from("parent_notifications")
      .update({ is_read: true, read_at: new Date().toISOString() })
      .eq("user_id", user.id)
      .eq("is_read", false);

    if (error) {
      return NextResponse.json({ error: "Failed to mark all as read" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  if (body.action === "update_preferences" && body.preferences) {
    const { error } = await supabase
      .from("parent_notification_preferences")
      .upsert(
        {
          user_id: user.id,
          ...body.preferences,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" },
      );

    if (error) {
      return NextResponse.json({ error: "Failed to update preferences" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}

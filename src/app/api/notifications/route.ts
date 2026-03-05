import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

/**
 * GET /api/notifications — Fetch recent notifications for the current user.
 * Returns up to 20 most recent, with unread count.
 */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const { data: notifications, error } = await admin
    .from("user_notifications")
    .select("id, type, title, body, href, read, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    console.error("Failed to fetch notifications.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const unreadCount = (notifications ?? []).filter((n) => !n.read).length;

  return NextResponse.json({ notifications: notifications ?? [], unreadCount });
}

/**
 * PATCH /api/notifications — Mark notifications as read.
 * Body: { ids: string[] } or { markAllRead: true }
 */
export async function PATCH(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();

  if (body.markAllRead) {
    await admin
      .from("user_notifications")
      .update({ read: true })
      .eq("user_id", user.id)
      .eq("read", false);
  } else if (Array.isArray(body.ids) && body.ids.length > 0) {
    await admin
      .from("user_notifications")
      .update({ read: true })
      .eq("user_id", user.id)
      .in("id", body.ids.slice(0, 50));
  }

  return NextResponse.json({ success: true });
}

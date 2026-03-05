import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function verifyCronSecret(request: Request): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "");
  return secret === process.env.CRON_SECRET;
}

/**
 * Cron: Clean up old telemetry data weekly (Sunday 4 AM UTC).
 * Removes raw learning events older than 90 days to control storage costs.
 * Aggregated reports are preserved indefinitely.
 */
export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const retentionDays = 90;
  const cutoff = new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000).toISOString();

  try {
    // Delete old learning events beyond retention window
    const { count: deletedEvents } = await admin
      .from("learning_events")
      .delete({ count: "exact" })
      .lt("event_at", cutoff);

    // Clean up old admin rate limit events (30 day retention)
    const rateLimitCutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const { count: deletedRateLimit } = await admin
      .from("admin_rate_limit_events")
      .delete({ count: "exact" })
      .lt("created_at", rateLimitCutoff);

    // Clean up completed/failed report jobs older than 30 days
    const { count: deletedJobs } = await admin
      .from("admin_report_jobs")
      .delete({ count: "exact" })
      .in("status", ["completed", "failed"])
      .lt("created_at", rateLimitCutoff);

    // Clean up read notifications older than 90 days
    const { count: deletedNotifications } = await admin
      .from("user_notifications")
      .delete({ count: "exact" })
      .eq("read", true)
      .lt("created_at", cutoff);

    return NextResponse.json({
      ok: true,
      retentionDays,
      deletedEvents: deletedEvents ?? 0,
      deletedRateLimitEvents: deletedRateLimit ?? 0,
      deletedReportJobs: deletedJobs ?? 0,
      deletedNotifications: deletedNotifications ?? 0,
    });
  } catch (error) {
    console.error("Telemetry cleanup cron failed:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

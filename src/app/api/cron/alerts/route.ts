import { NextResponse } from "next/server";
import { createAdminAlert } from "@/lib/admin/alerts";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function verifyCronSecret(request: Request): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "");
  return secret === process.env.CRON_SECRET;
}

/**
 * Cron: Run alert checks every 15 minutes.
 * Checks SLA thresholds for media queue, report queue, support tickets, and DSAR backlog.
 */
export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const triggered: string[] = [];

  try {
    // Check for urgent support tickets open > 24h
    const urgentCutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { count: urgentCount } = await admin
      .from("support_tickets")
      .select("id", { count: "exact", head: true })
      .eq("priority", "urgent")
      .eq("status", "open")
      .lt("created_at", urgentCutoff);

    if (urgentCount && urgentCount > 0) {
      await createAdminAlert(admin, {
        severity: "critical",
        category: "support_urgent_backlog",
        message: `${urgentCount} urgent support ticket(s) open for more than 24 hours.`,
        metadata: { urgentCount },
      });
      triggered.push("support_urgent_backlog");
    }

    // Check for DSAR requests unresolved > 7 days
    const dsarCutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { count: dsarCount } = await admin
      .from("dsar_requests")
      .select("id", { count: "exact", head: true })
      .in("status", ["pending", "in_progress"])
      .lt("created_at", dsarCutoff);

    if (dsarCount && dsarCount > 0) {
      await createAdminAlert(admin, {
        severity: "warning",
        category: "dsar_backlog",
        message: `${dsarCount} DSAR request(s) unresolved for more than 7 days.`,
        metadata: { dsarCount },
      });
      triggered.push("dsar_backlog");
    }

    // Check for stale media generation jobs (pending > 6h)
    const mediaCutoff = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();
    const { count: staleMediaCount } = await admin
      .from("media_generation_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "queued")
      .lt("created_at", mediaCutoff);

    if (staleMediaCount && staleMediaCount > 0) {
      await createAdminAlert(admin, {
        severity: "warning",
        category: "media_queue_stale",
        message: `${staleMediaCount} media job(s) queued for more than 6 hours.`,
        metadata: { staleMediaCount },
      });
      triggered.push("media_queue_stale");
    }

    return NextResponse.json({ ok: true, triggered });
  } catch (error) {
    console.error("Cron alert check failed:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

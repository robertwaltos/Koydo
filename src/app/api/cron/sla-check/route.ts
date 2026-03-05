import { NextResponse } from "next/server";
import { createAdminAlert } from "@/lib/admin/alerts";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function verifyCronSecret(request: Request): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "");
  return secret === process.env.CRON_SECRET;
}

/**
 * Cron: Check SLA compliance every 30 minutes.
 * Identifies support tickets that have breached their first-response SLA
 * and creates alerts for the admin team.
 */
export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const breaches: string[] = [];

  try {
    const now = new Date().toISOString();

    // Find tickets that have passed their SLA deadline without a first response
    const { data: breached } = await admin
      .from("support_tickets")
      .select("id, user_id, subject, priority, first_response_due_at")
      .eq("status", "open")
      .not("first_response_due_at", "is", null)
      .is("first_response_at", null)
      .is("sla_breached_at", null)
      .lt("first_response_due_at", now)
      .limit(100);

    if (breached && breached.length > 0) {
      // Mark tickets as SLA-breached
      const ids = breached.map((t) => t.id);
      await admin
        .from("support_tickets")
        .update({ sla_breached_at: now })
        .in("id", ids);

      await createAdminAlert({
        severity: "critical",
        category: "support_sla_breach",
        message: `${breached.length} support ticket(s) have breached their first-response SLA.`,
        metadata: { count: breached.length, ticketIds: ids.slice(0, 10) },
      });

      breaches.push(...ids);
    }

    // Check report job queue health
    const reportStaleCutoff = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();
    const { count: staleReportCount } = await admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .in("status", ["queued", "running"])
      .lt("created_at", reportStaleCutoff);

    if (staleReportCount && staleReportCount > 0) {
      await createAdminAlert({
        severity: "warning",
        category: "report_queue_stale",
        message: `${staleReportCount} report job(s) have been pending for more than 6 hours.`,
        metadata: { staleReportCount },
      });
    }

    return NextResponse.json({
      ok: true,
      slaBreaches: breaches.length,
      staleReports: staleReportCount ?? 0,
    });
  } catch (error) {
    console.error("SLA check cron failed:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

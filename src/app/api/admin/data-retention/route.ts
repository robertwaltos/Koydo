import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminActionStrict } from "@/lib/admin/audit";

/**
 * GET  /api/admin/data-retention  — latest retention run status
 * POST /api/admin/data-retention  — trigger a retention dry-run report
 */

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("data_retention_runs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ runs: data ?? [] });
}

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();

  // Count eligible rows per table (dry-run preview)
  const cutoffs = {
    learning_events: 365,
    ai_tutor_conversations: 90,
    ai_moderation_log: 90,
  };

  const preview: Record<string, { eligible: number; cutoffDate: string }> = {};

  for (const [table, days] of Object.entries(cutoffs)) {
    const cutoff = new Date(Date.now() - days * 86_400_000).toISOString();
    const dateCol = table === "learning_events" ? "event_at" : "created_at";

    const { count, error } = await admin
      .from(table)
      .select("id", { count: "exact", head: true })
      .lt(dateCol, cutoff);

    if (error && !error.message?.includes("does not exist")) {
      preview[table] = { eligible: -1, cutoffDate: cutoff };
    } else {
      preview[table] = { eligible: count ?? 0, cutoffDate: cutoff };
    }
  }

  await logAdminActionStrict({
    adminUserId: auth.userId,
    actionType: "data_retention.preview",
    metadata: { preview },
  });

  return NextResponse.json({ preview, note: "This is a dry-run preview. Run the data-retention script with --apply to execute." });
}

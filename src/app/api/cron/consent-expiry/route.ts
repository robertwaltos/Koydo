import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function verifyCronSecret(request: Request): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "");
  return secret === process.env.CRON_SECRET;
}

/**
 * Cron: Expire stale parent consent records daily at 3 AM UTC.
 * Consents older than 365 days that haven't been re-verified are expired.
 * Also re-computes is_child for users whose birthday crossed the 13-year threshold.
 */
export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  let expiredCount = 0;
  let childFlagUpdated = 0;

  try {
    // Expire consent records older than 365 days
    const expiryCutoff = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();
    const { data: expired } = await admin
      .from("parent_consents")
      .update({ status: "expired" })
      .eq("status", "verified")
      .lt("verified_at", expiryCutoff)
      .select("child_user_id");

    expiredCount = expired?.length ?? 0;

    // Update is_child flag for users who may have turned 13
    // The trigger handles new inserts/updates, but we need to re-check
    // existing users whose birthday may have crossed the threshold since last run.
    const { data: updated } = await admin.rpc("recompute_child_flags");
    childFlagUpdated = Array.isArray(updated) ? updated.length : 0;

    return NextResponse.json({ ok: true, expiredCount, childFlagUpdated });
  } catch (error) {
    console.error("Consent expiry cron failed:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

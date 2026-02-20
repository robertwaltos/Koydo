import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { runDbReadinessChecks } from "@/lib/admin/db-readiness";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const report = await runDbReadinessChecks(admin);

  return NextResponse.json(report, {
    status: report.healthy ? 200 : 503,
  });
}

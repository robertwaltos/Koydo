import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { runSystemHealthChecks } from "@/lib/admin/system-health";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const report = await runSystemHealthChecks(admin);

  return NextResponse.json(report, {
    status: report.healthy ? 200 : 503,
  });
}

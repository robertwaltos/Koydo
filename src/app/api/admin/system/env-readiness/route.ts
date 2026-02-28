import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { runEnvReadinessChecks } from "@/lib/admin/env-readiness";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const report = runEnvReadinessChecks();

  return NextResponse.json(report, {
    status: report.healthy ? 200 : 503,
  });
}

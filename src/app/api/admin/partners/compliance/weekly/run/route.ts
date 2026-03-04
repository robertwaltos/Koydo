import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const monitorRouteModule = await import("@/app/api/admin/partners/compliance/monitor/run/route");
  const updatesRouteModule = await import("@/app/api/admin/partners/compliance/regulatory-updates/run/route");
  const [monitorResponse, updatesResponse] = await Promise.all([
    monitorRouteModule.POST(),
    updatesRouteModule.POST(),
  ]);

  const monitorPayload = (await monitorResponse.json().catch(() => ({}))) as Record<string, unknown>;
  const updatesPayload = (await updatesResponse.json().catch(() => ({}))) as Record<string, unknown>;

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_compliance_weekly_run",
    metadata: {
      monitorStatus: monitorResponse?.status ?? null,
      updatesStatus: updatesResponse.status ?? null,
    },
  });

  return NextResponse.json({
    success: true,
    monitor: monitorPayload,
    regulatoryUpdates: updatesPayload,
  });
}

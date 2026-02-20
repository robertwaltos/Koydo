import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";

const acknowledgeSchema = z.object({
  alertId: z.string().uuid(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_alerts")
    .select("id, severity, category, message, metadata, acknowledged, acknowledged_by, acknowledged_at, created_at")
    .order("created_at", { ascending: false })
    .limit(300);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ alerts: data });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = acknowledgeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { error } = await admin
    .from("admin_alerts")
    .update({
      acknowledged: true,
      acknowledged_by: auth.userId,
      acknowledged_at: new Date().toISOString(),
    })
    .eq("id", parsed.data.alertId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "admin_alert_acknowledge",
    metadata: { alertId: parsed.data.alertId },
  });

  return NextResponse.json({ success: true });
}

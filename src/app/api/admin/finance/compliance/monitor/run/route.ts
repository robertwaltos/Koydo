import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { runComplianceMonitor } from "@/lib/finance/compliance-monitor";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const runSchema = z.object({
  years: z.array(z.number().int().min(2000).max(2100)).max(5).optional(),
  asOfDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => ({}));
  const parsed = runSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const admin = createSupabaseAdminClient();
    const nowYear = new Date().getUTCFullYear();
    const years = parsed.data.years && parsed.data.years.length > 0
      ? parsed.data.years
      : [nowYear, nowYear + 1];

    const summary = await runComplianceMonitor({
      admin,
      actorUserId: auth.userId,
      years,
      asOfDate: parsed.data.asOfDate,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "finance_compliance_monitor_run",
      metadata: summary,
    });

    return NextResponse.json({
      success: true,
      summary,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to run compliance monitor." }, { status: 500 });
  }
}

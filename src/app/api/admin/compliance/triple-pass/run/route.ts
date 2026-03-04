import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { runTriplePassComplianceAudit } from "@/lib/compliance/triple-pass-audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  targetScore: z.number().min(1).max(10).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload.", details: payload.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  try {
    const result = await runTriplePassComplianceAudit({
      admin,
      initiatedBy: auth.userId,
      targetScore: payload.data.targetScore,
    });
    return NextResponse.json({
      success: true,
      run: result,
    });
  } catch (error) {
    console.error("Triple-pass compliance audit run failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to run compliance audit." },
      { status: 500 },
    );
  }
}

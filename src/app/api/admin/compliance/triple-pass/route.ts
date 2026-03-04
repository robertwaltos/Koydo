import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { loadLatestTriplePassComplianceAudit } from "@/lib/compliance/triple-pass-audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  try {
    const latest = await loadLatestTriplePassComplianceAudit(admin);
    return NextResponse.json({
      success: true,
      run: latest,
    });
  } catch (error) {
    console.error("Failed to load latest triple-pass compliance audit.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Unable to load compliance audit." }, { status: 500 });
  }
}

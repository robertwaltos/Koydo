import { NextResponse } from "next/server";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { loadLatestFactoryResetRuns } from "@/lib/admin/factory-reset";
import { loadModuleBaselineSummary } from "@/lib/admin/module-baseline";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const admin = createSupabaseAdminClient();
    const [runs, baselineSummary] = await Promise.all([
      loadLatestFactoryResetRuns(admin, 12),
      loadModuleBaselineSummary(admin),
    ]);
    return NextResponse.json({
      baselineSummary,
      runs,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load factory reset status." }, { status: 500 });
  }
}

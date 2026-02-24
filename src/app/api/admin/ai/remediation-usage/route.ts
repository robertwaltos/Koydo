import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { loadAiRemediationUsageSummary } from "@/lib/admin/ai-remediation-usage";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const admin = createSupabaseAdminClient();
    const summary = await loadAiRemediationUsageSummary(admin);

    return NextResponse.json(summary, {
      status: summary.setupRequired ? 503 : 200,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to load AI remediation worksheet usage summary.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

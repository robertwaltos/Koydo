import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { loadAiTutorUsageSummary } from "@/lib/admin/ai-tutor-usage";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const admin = createSupabaseAdminClient();
    const summary = await loadAiTutorUsageSummary(admin);

    return NextResponse.json(summary, {
      status: summary.setupRequired ? 503 : 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load AI tutor usage summary.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

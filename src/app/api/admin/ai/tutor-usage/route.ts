import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { loadAiTutorUsageSummary } from "@/lib/admin/ai-tutor-usage";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

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
    console.error("Failed to load AI tutor usage summary.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load AI tutor usage summary." }, { status: 500 });
  }
}

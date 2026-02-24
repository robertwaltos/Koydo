import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { loadAiRemediationUsageTimeseries } from "@/lib/admin/ai-remediation-usage";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function parseDays(input: string | null) {
  const parsed = Number(input ?? "");
  if (!Number.isFinite(parsed)) return 14;
  return Math.max(1, Math.min(30, Math.round(parsed)));
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const url = new URL(request.url);
    const days = parseDays(url.searchParams.get("days"));
    const admin = createSupabaseAdminClient();
    const data = await loadAiRemediationUsageTimeseries(admin, { days });

    return NextResponse.json(data, {
      status: data.setupRequired ? 503 : 200,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to load remediation worksheet timeseries.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

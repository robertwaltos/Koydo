import { NextResponse } from "next/server";
import { requireOwnerForApi } from "@/lib/admin/auth";
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
    const summary = await loadModuleBaselineSummary(admin);
    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load module baseline summary." }, { status: 500 });
  }
}

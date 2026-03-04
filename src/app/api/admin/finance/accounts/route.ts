import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("business_chart_of_accounts")
    .select(
      "code, name, account_type, category, description, tax_deductible_default, is_system, is_active, created_at, updated_at",
    )
    .eq("is_active", true)
    .order("code", { ascending: true });

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ accounts: data ?? [] });
}

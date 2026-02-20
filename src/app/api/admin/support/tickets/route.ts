import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("support_tickets")
    .select("id, user_id, subject, status, priority, assigned_to, created_at, updated_at, resolved_at")
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ tickets: data });
}

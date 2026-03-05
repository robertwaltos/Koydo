import { NextRequest, NextResponse } from "next/server";
import { requireSupportOrAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const VALID_STATUSES = ["open", "in_progress", "resolved", "closed"] as const;
const VALID_PRIORITIES = ["low", "normal", "high", "urgent"] as const;
const PAGE_SIZE = 50;

export async function GET(request: NextRequest) {
  const auth = await requireSupportOrAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = request.nextUrl;
  const search = searchParams.get("q")?.trim() || null;
  const status = searchParams.get("status") as (typeof VALID_STATUSES)[number] | null;
  const priority = searchParams.get("priority") as (typeof VALID_PRIORITIES)[number] | null;
  const assignedTo = searchParams.get("assigned_to") || null;
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);

  const admin = createSupabaseAdminClient();
  let query = admin
    .from("support_tickets")
    .select("id, user_id, subject, status, priority, ticket_type, parent_confirmation_status, ai_response_status, assigned_to, created_at, updated_at, resolved_at, first_response_due_at, sla_breached_at", { count: "exact" });

  if (status && VALID_STATUSES.includes(status)) {
    query = query.eq("status", status);
  }
  if (priority && VALID_PRIORITIES.includes(priority)) {
    query = query.eq("priority", priority);
  }
  if (assignedTo) {
    query = query.eq("assigned_to", assignedTo);
  }
  if (search) {
    query = query.ilike("subject", `%${search}%`);
  }

  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await query
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    tickets: data,
    total: count ?? 0,
    page,
    pageSize: PAGE_SIZE,
    totalPages: Math.ceil((count ?? 0) / PAGE_SIZE),
  });
}


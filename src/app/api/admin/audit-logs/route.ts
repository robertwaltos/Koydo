import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const querySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(10).max(200).default(50),
  actionType: z.string().optional(),
  adminUserId: z.string().uuid().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

/**
 * GET /api/admin/audit-logs — Paginated, filterable audit log query
 *
 * Query params: page, pageSize, actionType, adminUserId, startDate, endDate
 */
export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const url = new URL(request.url);
    const params = querySchema.parse({
      page: url.searchParams.get("page") ?? 1,
      pageSize: url.searchParams.get("pageSize") ?? 50,
      actionType: url.searchParams.get("actionType") ?? undefined,
      adminUserId: url.searchParams.get("adminUserId") ?? undefined,
      startDate: url.searchParams.get("startDate") ?? undefined,
      endDate: url.searchParams.get("endDate") ?? undefined,
    });

    const admin = createSupabaseAdminClient();
    let query = admin
      .from("admin_action_logs")
      .select("id, admin_user_id, action_type, target_user_id, metadata, created_at", {
        count: "exact",
      })
      .order("created_at", { ascending: false });

    if (params.actionType) {
      query = query.ilike("action_type", `%${params.actionType}%`);
    }
    if (params.adminUserId) {
      query = query.eq("admin_user_id", params.adminUserId);
    }
    if (params.startDate) {
      query = query.gte("created_at", params.startDate);
    }
    if (params.endDate) {
      query = query.lte("created_at", params.endDate);
    }

    // Pagination
    const from = (params.page - 1) * params.pageSize;
    const to = from + params.pageSize - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    return NextResponse.json({
      logs: data ?? [],
      total: count ?? 0,
      page: params.page,
      pageSize: params.pageSize,
      totalPages: Math.ceil((count ?? 0) / params.pageSize),
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}


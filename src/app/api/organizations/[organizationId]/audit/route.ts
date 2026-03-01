import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  eventType: z.string().trim().min(3).max(120).optional(),
  subjectType: z.string().trim().min(3).max(120).optional(),
  subjectId: z.string().trim().min(1).max(160).optional(),
  since: z.string().datetime().optional(),
  limit: z.coerce.number().int().min(1).max(500).default(200),
  offset: z.coerce.number().int().min(0).max(50_000).default(0),
});

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:audit:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const url = new URL(request.url);
  const query = querySchema.safeParse({
    eventType: url.searchParams.get("eventType") ?? undefined,
    subjectType: url.searchParams.get("subjectType") ?? undefined,
    subjectId: url.searchParams.get("subjectId") ?? undefined,
    since: url.searchParams.get("since") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
    offset: url.searchParams.get("offset") ?? undefined,
  });
  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager", "viewer"],
  );
  if (!membership.ok) return membership.response;

  const start = query.data.offset;
  const end = query.data.offset + query.data.limit - 1;

  let auditQuery = admin
    .from("organization_audit_events")
    .select("id, actor_user_id, event_type, subject_type, subject_id, metadata, created_at")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false })
    .range(start, end);

  if (query.data.eventType) {
    auditQuery = auditQuery.eq("event_type", query.data.eventType);
  }
  if (query.data.subjectType) {
    auditQuery = auditQuery.eq("subject_type", query.data.subjectType);
  }
  if (query.data.subjectId) {
    auditQuery = auditQuery.eq("subject_id", query.data.subjectId);
  }
  if (query.data.since) {
    auditQuery = auditQuery.gte("created_at", query.data.since);
  }

  const { data, error } = await auditQuery;
  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization audit events.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load organization audit events." }, { status: 500 });
  }

  return NextResponse.json({
    events: (data ?? []).map((row) => ({
      id: row.id,
      actorUserId: row.actor_user_id,
      eventType: row.event_type,
      subjectType: row.subject_type,
      subjectId: row.subject_id,
      metadata: row.metadata,
      createdAt: row.created_at,
    })),
    page: {
      limit: query.data.limit,
      offset: query.data.offset,
      returned: (data ?? []).length,
    },
  });
}

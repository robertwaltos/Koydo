import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { logOrganizationAuditEvents, type OrganizationAuditEventInput } from "@/lib/organizations/audit";
import { getOrganizationSeatSummary } from "@/lib/organizations/license-summary";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { syncOrganizationPurchaseAllocationStatuses } from "@/lib/organizations/purchases";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const listQuerySchema = z.object({
  format: z.enum(["json", "csv"]).default("json"),
  status: z.enum(["active", "inactive"]).optional(),
  schoolName: z.string().trim().max(160).optional(),
  search: z.string().trim().max(160).optional(),
  limit: z.coerce.number().int().min(1).max(500).default(200),
  offset: z.coerce.number().int().min(0).max(50_000).default(0),
});

const patchSchema = z.object({
  updates: z.array(
    z.object({
      learnerId: z.string().uuid(),
      action: z.enum(["activate", "deactivate"]),
    }),
  ).min(1).max(1000),
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

type LearnerRow = {
  id: string;
  learner_user_id: string | null;
  student_profile_id: string | null;
  provisioning_token_id: string | null;
  provisioned_by_user_id: string | null;
  external_student_id: string | null;
  school_name: string | null;
  status: "active" | "inactive";
  assigned_at: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
};

function mapLearnerRow(row: LearnerRow) {
  return {
    id: row.id,
    learnerUserId: row.learner_user_id,
    studentProfileId: row.student_profile_id,
    provisioningTokenId: row.provisioning_token_id,
    provisionedByUserId: row.provisioned_by_user_id,
    externalStudentId: row.external_student_id,
    schoolName: row.school_name,
    status: row.status,
    assignedAt: row.assigned_at,
    metadata: row.metadata,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function csvEscape(value: unknown) {
  if (value === null || value === undefined) return "";
  const raw = typeof value === "string" ? value : String(value);
  const escaped = raw.replace(/"/g, "\"\"");
  return /[",\n]/.test(escaped) ? `"${escaped}"` : escaped;
}

function learnersToCsv(rows: LearnerRow[]) {
  const headers = [
    "id",
    "learner_user_id",
    "student_profile_id",
    "provisioning_token_id",
    "provisioned_by_user_id",
    "external_student_id",
    "school_name",
    "status",
    "assigned_at",
    "created_at",
    "updated_at",
    "metadata_json",
  ];
  const lines = [headers.join(",")];
  for (const row of rows) {
    lines.push(
      [
        row.id,
        row.learner_user_id,
        row.student_profile_id,
        row.provisioning_token_id,
        row.provisioned_by_user_id,
        row.external_student_id,
        row.school_name,
        row.status,
        row.assigned_at,
        row.created_at,
        row.updated_at,
        row.metadata ? JSON.stringify(row.metadata) : null,
      ]
        .map(csvEscape)
        .join(","),
    );
  }
  return lines.join("\n");
}

async function countLearnersByStatus(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  organizationId: string,
  status: "active" | "inactive",
) {
  const { count, error } = await admin
    .from("organization_learners")
    .select("id", { count: "exact", head: true })
    .eq("organization_id", organizationId)
    .eq("status", status);

  if (error) throw error;
  return count ?? 0;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:learners:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const url = new URL(request.url);
  const query = listQuerySchema.safeParse({
    format: url.searchParams.get("format") ?? undefined,
    status: url.searchParams.get("status") ?? undefined,
    schoolName: url.searchParams.get("schoolName") ?? undefined,
    search: url.searchParams.get("search") ?? undefined,
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

  let learnersQuery = admin
    .from("organization_learners")
    .select("id, learner_user_id, student_profile_id, provisioning_token_id, provisioned_by_user_id, external_student_id, school_name, status, assigned_at, metadata, created_at, updated_at")
    .eq("organization_id", organizationId)
    .order("assigned_at", { ascending: false })
    .range(start, end);

  if (query.data.status) {
    learnersQuery = learnersQuery.eq("status", query.data.status);
  }
  if (query.data.schoolName) {
    learnersQuery = learnersQuery.eq("school_name", query.data.schoolName);
  }
  if (query.data.search) {
    learnersQuery = learnersQuery.or(
      `external_student_id.ilike.%${query.data.search}%,school_name.ilike.%${query.data.search}%`,
    );
  }

  try {
    const [seatSummary, activeCount, inactiveCount, learnersResult] = await Promise.all([
      getOrganizationSeatSummary(admin, organizationId),
      countLearnersByStatus(admin, organizationId, "active"),
      countLearnersByStatus(admin, organizationId, "inactive"),
      learnersQuery,
    ]);

    if (learnersResult.error) {
      throw learnersResult.error;
    }

    const learners = (learnersResult.data ?? []) as LearnerRow[];
    if (query.data.format === "csv") {
      const csv = learnersToCsv(learners);
      return new Response(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="organization-${organizationId}-learners.csv"`,
          "Cache-Control": "no-store",
        },
      });
    }

    return NextResponse.json({
      seatSummary,
      stats: {
        total: activeCount + inactiveCount,
        active: activeCount,
        inactive: inactiveCount,
      },
      learners: learners.map(mapLearnerRow),
      page: {
        limit: query.data.limit,
        offset: query.data.offset,
        returned: learners.length,
      },
    });
  } catch (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization learners.", toSafeErrorRecord(error));

    return NextResponse.json(
      {
        error: "Failed to load learners.",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:learners:patch", {
    max: 45,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  try {
    const seatSummary = await getOrganizationSeatSummary(admin, organizationId);
    let seatsAvailable = seatSummary.availableSeats;
    let activated = 0;
    let deactivated = 0;
    let skippedNoSeat = 0;
    let notFound = 0;
    let unchanged = 0;
    const auditEvents: OrganizationAuditEventInput[] = [];

    for (const update of parsed.data.updates) {
      const { data: learner, error: learnerError } = await admin
        .from("organization_learners")
        .select("id, status, school_name, external_student_id")
        .eq("organization_id", organizationId)
        .eq("id", update.learnerId)
        .maybeSingle();

      if (learnerError) {
        throw learnerError;
      }
      if (!learner) {
        notFound += 1;
        continue;
      }

      if (update.action === "deactivate") {
        if (learner.status !== "active") {
          unchanged += 1;
          continue;
        }

        const { data: updatedLearner, error: deactivateError } = await admin
          .from("organization_learners")
          .update({ status: "inactive" })
          .eq("organization_id", organizationId)
          .eq("id", learner.id)
          .eq("status", "active")
          .select("id")
          .maybeSingle();

        if (deactivateError) {
          throw deactivateError;
        }
        if (updatedLearner?.id) {
          deactivated += 1;
          seatsAvailable += 1;
          auditEvents.push({
            organizationId,
            actorUserId: user.id,
            eventType: "learner_deactivated",
            subjectType: "organization_learner",
            subjectId: updatedLearner.id,
            metadata: {
              source: "api:organizations:learners:patch",
              previousStatus: "active",
              nextStatus: "inactive",
              schoolName: learner.school_name,
              externalStudentId: learner.external_student_id,
            },
          });
        } else {
          unchanged += 1;
        }
        continue;
      }

      if (learner.status !== "inactive") {
        unchanged += 1;
        continue;
      }
      if (seatsAvailable <= 0) {
        skippedNoSeat += 1;
        continue;
      }

      const { data: updatedLearner, error: activateError } = await admin
        .from("organization_learners")
        .update({ status: "active" })
        .eq("organization_id", organizationId)
        .eq("id", learner.id)
        .eq("status", "inactive")
        .select("id")
        .maybeSingle();

      if (activateError) {
        throw activateError;
      }
      if (updatedLearner?.id) {
        activated += 1;
        seatsAvailable -= 1;
        auditEvents.push({
          organizationId,
          actorUserId: user.id,
          eventType: "learner_activated",
          subjectType: "organization_learner",
          subjectId: updatedLearner.id,
          metadata: {
            source: "api:organizations:learners:patch",
            previousStatus: "inactive",
            nextStatus: "active",
            schoolName: learner.school_name,
            externalStudentId: learner.external_student_id,
          },
        });
      } else {
        unchanged += 1;
      }
    }

    if (activated > 0 || deactivated > 0) {
      try {
        await syncOrganizationPurchaseAllocationStatuses(admin, organizationId);
      } catch {
        // Best-effort allocation sync for learner state changes.
      }

      try {
        await logOrganizationAuditEvents(admin, auditEvents);
      } catch {
        // Best-effort audit logging.
      }
    }

    const seatSummaryAfter = await getOrganizationSeatSummary(admin, organizationId);
    return NextResponse.json({
      success: true,
      summary: {
        requested: parsed.data.updates.length,
        activated,
        deactivated,
        skippedNoSeat,
        unchanged,
        notFound,
      },
      seatSummary: seatSummaryAfter,
    });
  } catch (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to update organization learners.", toSafeErrorRecord(error));

    return NextResponse.json(
      {
        error: "Failed to update learners.",
      },
      { status: 500 },
    );
  }
}

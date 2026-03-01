import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logOrganizationAuditEvents, type OrganizationAuditEventInput } from "@/lib/organizations/audit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { getOrganizationSeatSummary } from "@/lib/organizations/license-summary";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { syncOrganizationPurchaseAllocationStatuses } from "@/lib/organizations/purchases";
import {
  upsertOrganizationRosterEntries,
  type OrganizationRosterEntryInput,
} from "@/lib/organizations/roster";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  status: z.enum(["pending", "invited", "provisioned", "inactive"]).optional(),
  search: z.string().trim().max(160).optional(),
  limit: z.coerce.number().int().min(1).max(500).default(200),
});

const scimUserSchema = z.object({
  externalId: z.string().trim().min(1).max(120),
  userName: z.string().trim().email().optional(),
  displayName: z.string().trim().max(160).optional(),
  schoolName: z.string().trim().max(160).optional(),
  gradeLevel: z.string().trim().max(64).optional(),
  linkedUserId: z.string().uuid().optional(),
  linkedStudentProfileId: z.string().uuid().optional(),
  active: z.boolean().default(true),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

const postSchema = z.object({
  users: z.array(scimUserSchema).min(1).max(25_000),
  dryRun: z.boolean().default(false),
  autoAssignLicenses: z.boolean().default(false),
  replaceExisting: z.boolean().default(false),
});

const patchSchema = z.object({
  users: z.array(
    z.object({
      externalId: z.string().trim().min(1).max(120),
      active: z.boolean(),
    }),
  ).min(1).max(5000),
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

function toRosterStatus(user: z.infer<typeof scimUserSchema>) {
  if (!user.active) return "inactive";
  if (user.linkedUserId || user.linkedStudentProfileId) return "provisioned";
  return "pending";
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:scim:users:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const url = new URL(request.url);
  const query = querySchema.safeParse({
    status: url.searchParams.get("status") ?? undefined,
    search: url.searchParams.get("search") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
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

  let rosterQuery = admin
    .from("organization_roster_entries")
    .select("id, external_student_id, email, display_name, school_name, grade_level, linked_user_id, linked_student_profile_id, source, status, metadata, created_at, updated_at")
    .eq("organization_id", organizationId)
    .eq("source", "scim")
    .order("created_at", { ascending: false })
    .limit(query.data.limit);

  if (query.data.status) {
    rosterQuery = rosterQuery.eq("status", query.data.status);
  }
  if (query.data.search) {
    rosterQuery = rosterQuery.or(
      `external_student_id.ilike.%${query.data.search}%,email.ilike.%${query.data.search}%,display_name.ilike.%${query.data.search}%`,
    );
  }

  const { data, error } = await rosterQuery;
  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load SCIM roster entries.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load SCIM roster entries." }, { status: 500 });
  }

  return NextResponse.json({
    users: (data ?? []).map((row) => ({
      id: row.id,
      externalId: row.external_student_id,
      userName: row.email,
      displayName: row.display_name,
      schoolName: row.school_name,
      gradeLevel: row.grade_level,
      linkedUserId: row.linked_user_id,
      linkedStudentProfileId: row.linked_student_profile_id,
      source: row.source,
      status: row.status,
      metadata: row.metadata,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    })),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:scim:users:post", {
    max: 20,
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
  const parsed = postSchema.safeParse(body);
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
    ["owner", "admin", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  const entries: OrganizationRosterEntryInput[] = parsed.data.users.map((scimUser) => ({
    externalStudentId: scimUser.externalId,
    email: scimUser.userName ?? null,
    displayName: scimUser.displayName ?? null,
    schoolName: scimUser.schoolName ?? null,
    gradeLevel: scimUser.gradeLevel ?? null,
    linkedUserId: scimUser.linkedUserId ?? null,
    linkedStudentProfileId: scimUser.linkedStudentProfileId ?? null,
    source: "scim",
    status: toRosterStatus(scimUser),
    metadata: scimUser.metadata ?? null,
  }));

  try {
    const auditEvents: OrganizationAuditEventInput[] = [];
    const summary = await upsertOrganizationRosterEntries(admin, {
      organizationId,
      entries,
      createdBy: user.id,
      dryRun: parsed.data.dryRun,
      replaceExistingForSource: parsed.data.replaceExisting ? "scim" : null,
      onLearnerAssignmentDeactivated: (entry) => {
        auditEvents.push({
          organizationId,
          actorUserId: user.id,
          eventType: "learner_deactivated",
          subjectType: "organization_learner",
          subjectId: entry.learnerId,
          metadata: {
            source: "api:organizations:scim:users:replace-existing",
            rosterSource: entry.source,
            externalStudentId: entry.externalStudentId,
          },
        });
      },
    });

    let autoAssigned = 0;
    let autoAssignSkipped = 0;
    if (parsed.data.autoAssignLicenses && !parsed.data.dryRun) {
      const seatSummary = await getOrganizationSeatSummary(admin, organizationId);
      let seatsAvailable = seatSummary.availableSeats;

      for (const entry of entries) {
        if (seatsAvailable <= 0) {
          autoAssignSkipped += 1;
          continue;
        }
        if (entry.status === "inactive") continue;
        if (!entry.linkedUserId && !entry.linkedStudentProfileId) continue;

        const { data: inserted, error: insertError } = await admin
          .from("organization_learners")
          .insert({
            organization_id: organizationId,
            learner_user_id: entry.linkedUserId ?? null,
            student_profile_id: entry.linkedStudentProfileId ?? null,
            provisioned_by_user_id: user.id,
            external_student_id: entry.externalStudentId ?? null,
            school_name: entry.schoolName ?? null,
            status: "active",
            metadata: {
              source: "api:organizations:scim:users:auto-assign",
            },
          })
          .select("id")
          .maybeSingle();

        if (insertError) {
          if (String(insertError.code ?? "") === "23505") {
            autoAssignSkipped += 1;
            continue;
          }
          throw insertError;
        }
        if (inserted?.id) {
          autoAssigned += 1;
          seatsAvailable -= 1;
          auditEvents.push({
            organizationId,
            actorUserId: user.id,
            eventType: "learner_assigned",
            subjectType: "organization_learner",
            subjectId: inserted.id,
            metadata: {
              source: "api:organizations:scim:users:auto-assign",
              externalStudentId: entry.externalStudentId ?? null,
              schoolName: entry.schoolName ?? null,
            },
          });
        }
      }
    }

    const shouldSyncPurchaseAllocations =
      autoAssigned > 0 || summary.deactivatedLearnerAssignments > 0;

    if (shouldSyncPurchaseAllocations) {
      try {
        await syncOrganizationPurchaseAllocationStatuses(admin, organizationId);
      } catch {
        // Best-effort allocation sync for bulk provisioning.
      }
    }

    if (auditEvents.length > 0) {
      try {
        await logOrganizationAuditEvents(admin, auditEvents);
      } catch {
        // Best-effort audit logging.
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        ...summary,
        autoAssignedLicenses: autoAssigned,
        autoAssignSkipped,
      },
    });
  } catch (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("SCIM import failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: "SCIM import failed." },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:scim:users:patch", {
    max: 30,
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
    ["owner", "admin", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  let updated = 0;
  let assignmentsDeactivated = 0;
  const auditEvents: OrganizationAuditEventInput[] = [];
  for (const entry of parsed.data.users) {
    const updatePayload = {
      metadata: {
        source: "api:organizations:scim:users:patch",
        active: entry.active,
        updatedBy: user.id,
      },
    } as {
      status?: "pending" | "inactive";
      metadata: Record<string, unknown>;
    };

    if (!entry.active) {
      updatePayload.status = "inactive";
    } else {
      updatePayload.status = "pending";
    }

    let query = admin
      .from("organization_roster_entries")
      .update(updatePayload)
      .eq("organization_id", organizationId)
      .eq("source", "scim")
      .eq("external_student_id", entry.externalId);

    if (entry.active) {
      query = query.eq("status", "inactive");
    }

    const { data, error } = await query.select("id");

    if (error) {
      if (isMissingOrganizationTableError(error)) {
        return NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to update SCIM roster entry.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to update SCIM roster entry." }, { status: 500 });
    }

    updated += (data ?? []).length;

    if (!entry.active) {
      const { data: deactivatedLearners, error: learnerDeactivateError } = await admin
        .from("organization_learners")
        .update({ status: "inactive" })
        .eq("organization_id", organizationId)
        .eq("external_student_id", entry.externalId)
        .eq("status", "active")
        .select("id");

      if (learnerDeactivateError) {
        if (isMissingOrganizationTableError(learnerDeactivateError)) {
          return NextResponse.json(
            { error: "Organization tables not migrated yet." },
            { status: 503 },
          );
        }
        console.error("Failed to deactivate SCIM learner assignment.", toSafeErrorRecord(learnerDeactivateError));
        return NextResponse.json({ error: "Failed to update SCIM learner assignments." }, { status: 500 });
      }

      assignmentsDeactivated += (deactivatedLearners ?? []).length;
      for (const learner of deactivatedLearners ?? []) {
        auditEvents.push({
          organizationId,
          actorUserId: user.id,
          eventType: "learner_deactivated",
          subjectType: "organization_learner",
          subjectId: learner.id,
          metadata: {
            source: "api:organizations:scim:users:patch",
            externalStudentId: entry.externalId,
            previousStatus: "active",
            nextStatus: "inactive",
          },
        });
      }
    }
  }

  if (assignmentsDeactivated > 0) {
    try {
      await syncOrganizationPurchaseAllocationStatuses(admin, organizationId);
    } catch {
      // Best-effort allocation sync for SCIM deprovisioning.
    }

    try {
      await logOrganizationAuditEvents(admin, auditEvents);
    } catch {
      // Best-effort audit logging.
    }
  }

  return NextResponse.json({
    success: true,
    updated,
    assignmentsDeactivated,
  });
}

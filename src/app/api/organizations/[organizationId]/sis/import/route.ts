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
  template: z.enum(["csv"]).optional(),
  source: z.enum(["csv", "sis"]).optional(),
  status: z.enum(["pending", "invited", "provisioned", "inactive"]).optional(),
  search: z.string().trim().max(160).optional(),
  limit: z.coerce.number().int().min(1).max(500).default(200),
});

const entrySchema = z.object({
  externalStudentId: z.string().trim().max(120).optional(),
  email: z.string().trim().email().optional(),
  displayName: z.string().trim().max(160).optional(),
  schoolName: z.string().trim().max(160).optional(),
  gradeLevel: z.string().trim().max(64).optional(),
  linkedUserId: z.string().uuid().optional(),
  linkedStudentProfileId: z.string().uuid().optional(),
  active: z.boolean().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

const postSchema = z.object({
  source: z.enum(["csv", "sis"]).default("csv"),
  entries: z.array(entrySchema).min(1).max(25_000).optional(),
  csv: z.string().min(1).max(5_000_000).optional(),
  replaceExisting: z.boolean().default(false),
  dryRun: z.boolean().default(false),
  autoAssignLicenses: z.boolean().default(false),
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

function parseBooleanLike(value: string | undefined) {
  if (!value) return true;
  const normalized = value.trim().toLowerCase();
  if (normalized === "false" || normalized === "0" || normalized === "inactive") return false;
  return true;
}

function parseCsvRows(content: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const next = content[index + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        field += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field.trim());
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(field.trim());
      field = "";
      if (row.some((cell) => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.trim());
    if (row.some((cell) => cell.length > 0)) {
      rows.push(row);
    }
  }

  return rows;
}

function mapCsvRowsToEntries(rows: string[][]) {
  if (rows.length < 2) {
    return { entries: [] as OrganizationRosterEntryInput[], errors: [] as Array<{ row: number; error: string }> };
  }

  const headers = rows[0].map((header) => header.trim().toLowerCase());
  const errors: Array<{ row: number; error: string }> = [];
  const entries: OrganizationRosterEntryInput[] = [];

  function readValue(record: string[], aliases: string[]) {
    for (const alias of aliases) {
      const idx = headers.indexOf(alias.toLowerCase());
      if (idx >= 0) {
        const value = record[idx]?.trim();
        if (value) return value;
      }
    }
    return undefined;
  }

  for (let rowIndex = 1; rowIndex < rows.length; rowIndex += 1) {
    const record = rows[rowIndex];
    const externalStudentId = readValue(record, [
      "externalstudentid",
      "external_student_id",
      "studentid",
      "student_id",
      "sisid",
      "sis_id",
    ]);
    const email = readValue(record, ["email", "username", "user_name"]);
    const displayName = readValue(record, ["displayname", "display_name", "name"]);
    const schoolName = readValue(record, ["schoolname", "school_name", "school"]);
    const gradeLevel = readValue(record, ["gradelevel", "grade_level", "grade"]);
    const linkedUserId = readValue(record, ["linkeduserid", "linked_user_id", "userid", "user_id"]);
    const linkedStudentProfileId = readValue(record, [
      "linkedstudentprofileid",
      "linked_student_profile_id",
      "studentprofileid",
      "student_profile_id",
    ]);
    const activeRaw = readValue(record, ["active", "status"]);

    if (!externalStudentId && !email && !displayName) {
      errors.push({
        row: rowIndex + 1,
        error: "Missing student identifier (externalStudentId/email/displayName).",
      });
      continue;
    }

    const active = parseBooleanLike(activeRaw);
    entries.push({
      externalStudentId: externalStudentId ?? null,
      email: email ?? null,
      displayName: displayName ?? null,
      schoolName: schoolName ?? null,
      gradeLevel: gradeLevel ?? null,
      linkedUserId: linkedUserId ?? null,
      linkedStudentProfileId: linkedStudentProfileId ?? null,
      source: "csv",
      status: active
        ? (linkedUserId || linkedStudentProfileId ? "provisioned" : "pending")
        : "inactive",
      metadata: activeRaw ? { importedStatus: activeRaw } : null,
    });
  }

  return { entries, errors };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:sis:import:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const url = new URL(request.url);
  const query = querySchema.safeParse({
    template: url.searchParams.get("template") ?? undefined,
    source: url.searchParams.get("source") ?? undefined,
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

  if (query.data.template === "csv") {
    const templateLines = [
      "external_student_id,email,display_name,school_name,grade_level,linked_user_id,linked_student_profile_id,active",
      "STU-1001,student1@example.org,Student One,North Campus,5,,,true",
      "STU-1002,student2@example.org,Student Two,North Campus,5,,,true",
      "STU-1003,student3@example.org,Student Three,South Campus,6,,,false",
    ];
    return new Response(templateLines.join("\n"), {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=\"organization-sis-import-template.csv\"",
        "Cache-Control": "no-store",
      },
    });
  }

  let rosterQuery = admin
    .from("organization_roster_entries")
    .select("id, external_student_id, email, display_name, school_name, grade_level, linked_user_id, linked_student_profile_id, source, status, metadata, created_at, updated_at")
    .eq("organization_id", organizationId)
    .in("source", ["csv", "sis"])
    .order("created_at", { ascending: false })
    .limit(query.data.limit);

  if (query.data.source) {
    rosterQuery = rosterQuery.eq("source", query.data.source);
  }
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
    console.error("Failed to load organization SIS roster entries.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load SIS roster entries." }, { status: 500 });
  }

  const rows = (data ?? []).map((row) => ({
    id: row.id,
    externalStudentId: row.external_student_id,
    email: row.email,
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
  }));

  return NextResponse.json({ entries: rows });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:sis:import:post", {
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

  if (!parsed.data.entries && !parsed.data.csv) {
    return NextResponse.json(
      { error: "Provide either entries[] or csv in the request payload." },
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

  const errors: Array<{ row: number; error: string }> = [];
  const entries: OrganizationRosterEntryInput[] = [];

  if (parsed.data.entries) {
    parsed.data.entries.forEach((entry, idx) => {
      const hasIdentity = Boolean(entry.externalStudentId || entry.email || entry.displayName);
      if (!hasIdentity) {
        errors.push({
          row: idx + 1,
          error: "Missing student identifier (externalStudentId/email/displayName).",
        });
        return;
      }

      const status = entry.active === false
        ? "inactive"
        : (entry.linkedUserId || entry.linkedStudentProfileId ? "provisioned" : "pending");
      entries.push({
        externalStudentId: entry.externalStudentId ?? null,
        email: entry.email ?? null,
        displayName: entry.displayName ?? null,
        schoolName: entry.schoolName ?? null,
        gradeLevel: entry.gradeLevel ?? null,
        linkedUserId: entry.linkedUserId ?? null,
        linkedStudentProfileId: entry.linkedStudentProfileId ?? null,
        source: parsed.data.source,
        status,
        metadata: entry.metadata ?? null,
      });
    });
  }

  if (parsed.data.csv) {
    const csvRows = parseCsvRows(parsed.data.csv);
    const mapped = mapCsvRowsToEntries(csvRows);
    errors.push(...mapped.errors);
    entries.push(
      ...mapped.entries.map((entry) => ({
        ...entry,
        source: parsed.data.source,
      })),
    );
  }

  if (entries.length === 0) {
    return NextResponse.json(
      {
        error: "No valid roster entries found in payload.",
        rowErrors: errors.slice(0, 200),
      },
      { status: 400 },
    );
  }

  try {
    const auditEvents: OrganizationAuditEventInput[] = [];
    const summary = await upsertOrganizationRosterEntries(admin, {
      organizationId,
      entries,
      createdBy: user.id,
      dryRun: parsed.data.dryRun,
      replaceExistingForSource: parsed.data.replaceExisting ? parsed.data.source : null,
      onLearnerAssignmentDeactivated: (entry) => {
        auditEvents.push({
          organizationId,
          actorUserId: user.id,
          eventType: "learner_deactivated",
          subjectType: "organization_learner",
          subjectId: entry.learnerId,
          metadata: {
            source: "api:organizations:sis:import:replace-existing",
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
              source: "api:organizations:sis:import:auto-assign",
              rosterSource: entry.source,
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
              source: "api:organizations:sis:import:auto-assign",
              rosterSource: entry.source,
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
      source: parsed.data.source,
      summary: {
        ...summary,
        rowErrors: errors.slice(0, 200),
        rowErrorCount: errors.length,
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
    console.error("SIS import failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: "Roster import failed." },
      { status: 500 },
    );
  }
}

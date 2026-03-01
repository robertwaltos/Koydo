import type { SupabaseClient } from "@supabase/supabase-js";

export const ORGANIZATION_ROSTER_SOURCES = ["manual", "csv", "scim", "sis"] as const;
export type OrganizationRosterSource = (typeof ORGANIZATION_ROSTER_SOURCES)[number];

export const ORGANIZATION_ROSTER_STATUSES = [
  "pending",
  "invited",
  "provisioned",
  "inactive",
] as const;
export type OrganizationRosterStatus = (typeof ORGANIZATION_ROSTER_STATUSES)[number];

export type OrganizationRosterEntryInput = {
  externalStudentId?: string | null;
  email?: string | null;
  displayName?: string | null;
  schoolName?: string | null;
  gradeLevel?: string | null;
  linkedUserId?: string | null;
  linkedStudentProfileId?: string | null;
  source: OrganizationRosterSource;
  status: OrganizationRosterStatus;
  metadata?: Record<string, unknown> | null;
};

export type OrganizationRosterUpsertSummary = {
  totalReceived: number;
  inserted: number;
  updated: number;
  insertedWithoutExternalId: number;
  deactivated: number;
  deactivatedLearnerAssignments: number;
  dryRun: boolean;
};

type ExistingRosterRow = {
  id: string;
  external_student_id: string | null;
};

type ExistingLearnerRow = {
  id: string;
  external_student_id: string | null;
};

const CHUNK_SIZE = 400;

function normalizeNullable(value: string | null | undefined, maxLength: number) {
  if (!value) return null;
  const normalized = value.trim();
  if (!normalized) return null;
  return normalized.slice(0, maxLength);
}

function normalizeEmail(value: string | null | undefined) {
  const normalized = normalizeNullable(value, 320);
  if (!normalized) return null;
  return normalized.toLowerCase();
}

function chunkArray<T>(items: readonly T[], chunkSize = CHUNK_SIZE): T[][] {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }
  return chunks;
}

async function fetchExistingByExternalIds(
  admin: SupabaseClient,
  organizationId: string,
  externalIds: string[],
) {
  const existing = new Map<string, ExistingRosterRow>();
  for (const chunk of chunkArray(externalIds)) {
    const { data, error } = await admin
      .from("organization_roster_entries")
      .select("id, external_student_id")
      .eq("organization_id", organizationId)
      .in("external_student_id", chunk);

    if (error) throw error;
    for (const row of (data ?? []) as ExistingRosterRow[]) {
      if (!row.external_student_id) continue;
      existing.set(row.external_student_id.toLowerCase(), row);
    }
  }
  return existing;
}

export async function upsertOrganizationRosterEntries(
  admin: SupabaseClient,
  params: {
    organizationId: string;
    entries: readonly OrganizationRosterEntryInput[];
    createdBy: string;
    dryRun?: boolean;
    replaceExistingForSource?: OrganizationRosterSource | null;
    onLearnerAssignmentDeactivated?: (entry: {
      learnerId: string;
      externalStudentId: string | null;
      source: OrganizationRosterSource;
    }) => void | Promise<void>;
  },
): Promise<OrganizationRosterUpsertSummary> {
  const normalizedEntries = params.entries.map((entry) => ({
    externalStudentId: normalizeNullable(entry.externalStudentId, 120),
    email: normalizeEmail(entry.email),
    displayName: normalizeNullable(entry.displayName, 160),
    schoolName: normalizeNullable(entry.schoolName, 160),
    gradeLevel: normalizeNullable(entry.gradeLevel, 64),
    linkedUserId: normalizeNullable(entry.linkedUserId, 64),
    linkedStudentProfileId: normalizeNullable(entry.linkedStudentProfileId, 64),
    source: entry.source,
    status: entry.status,
    metadata: entry.metadata ?? null,
  }));

  const withExternalMap = new Map<string, (typeof normalizedEntries)[number]>();
  const withoutExternal: Array<(typeof normalizedEntries)[number]> = [];

  for (const entry of normalizedEntries) {
    if (entry.externalStudentId) {
      withExternalMap.set(entry.externalStudentId.toLowerCase(), entry);
    } else {
      withoutExternal.push(entry);
    }
  }

  const withExternal = Array.from(withExternalMap.values());
  const externalIds = withExternal
    .map((entry) => entry.externalStudentId?.toLowerCase() ?? "")
    .filter((value) => value.length > 0);
  const existingByExternal = await fetchExistingByExternalIds(admin, params.organizationId, externalIds);

  const inserts: Array<Record<string, unknown>> = [];
  const updates: Array<Record<string, unknown>> = [];

  for (const entry of withExternal) {
    const externalKey = entry.externalStudentId?.toLowerCase();
    const existing = externalKey ? existingByExternal.get(externalKey) : null;

    const payload = {
      organization_id: params.organizationId,
      external_student_id: entry.externalStudentId,
      email: entry.email,
      display_name: entry.displayName,
      school_name: entry.schoolName,
      grade_level: entry.gradeLevel,
      linked_user_id: entry.linkedUserId,
      linked_student_profile_id: entry.linkedStudentProfileId,
      source: entry.source,
      status: entry.status,
      metadata: entry.metadata ?? {},
      created_by: params.createdBy,
    };

    if (existing) {
      updates.push({
        id: existing.id,
        ...payload,
      });
    } else {
      inserts.push(payload);
    }
  }

  for (const entry of withoutExternal) {
    inserts.push({
      organization_id: params.organizationId,
      external_student_id: null,
      email: entry.email,
      display_name: entry.displayName,
      school_name: entry.schoolName,
      grade_level: entry.gradeLevel,
      linked_user_id: entry.linkedUserId,
      linked_student_profile_id: entry.linkedStudentProfileId,
      source: entry.source,
      status: entry.status,
      metadata: entry.metadata ?? {},
      created_by: params.createdBy,
    });
  }

  let deactivated = 0;
  let deactivatedLearnerAssignments = 0;
  const dryRun = Boolean(params.dryRun);
  if (!dryRun) {
    for (const chunk of chunkArray(inserts)) {
      if (chunk.length === 0) continue;
      const { error } = await admin
        .from("organization_roster_entries")
        .insert(chunk);
      if (error) throw error;
    }

    for (const chunk of chunkArray(updates)) {
      if (chunk.length === 0) continue;
      const { error } = await admin
        .from("organization_roster_entries")
        .upsert(chunk, { onConflict: "id" });
      if (error) throw error;
    }

    if (params.replaceExistingForSource && externalIds.length > 0) {
      const { data: sourceRows, error: sourceRowsError } = await admin
        .from("organization_roster_entries")
        .select("id, external_student_id")
        .eq("organization_id", params.organizationId)
        .eq("source", params.replaceExistingForSource)
        .not("external_student_id", "is", null);

      if (sourceRowsError) throw sourceRowsError;
      const currentRows = (sourceRows ?? []) as ExistingRosterRow[];
      const targetSet = new Set(externalIds);
      const staleRows = currentRows
        .filter((row) => {
          const external = row.external_student_id?.toLowerCase();
          return external ? !targetSet.has(external) : false;
        });
      const staleIds = staleRows.map((row) => row.id);
      const staleExternalIds = staleRows
        .map((row) => row.external_student_id)
        .filter((value): value is string => typeof value === "string" && value.length > 0);

      for (const chunk of chunkArray(staleIds)) {
        if (chunk.length === 0) continue;
        const { data: updatedRows, error: updateError } = await admin
          .from("organization_roster_entries")
          .update({ status: "inactive" })
          .in("id", chunk)
          .neq("status", "inactive")
          .select("id");

        if (updateError) throw updateError;
        deactivated += (updatedRows ?? []).length;
      }

      for (const chunk of chunkArray(staleExternalIds)) {
        if (chunk.length === 0) continue;
        const { data: deactivatedLearners, error: learnerUpdateError } = await admin
          .from("organization_learners")
          .update({ status: "inactive" })
          .eq("organization_id", params.organizationId)
          .in("external_student_id", chunk)
          .neq("status", "inactive")
          .select("id, external_student_id");

        if (learnerUpdateError) throw learnerUpdateError;
        const rows = (deactivatedLearners ?? []) as ExistingLearnerRow[];
        deactivatedLearnerAssignments += rows.length;

        if (params.onLearnerAssignmentDeactivated && params.replaceExistingForSource) {
          for (const row of rows) {
            await params.onLearnerAssignmentDeactivated({
              learnerId: row.id,
              externalStudentId: row.external_student_id,
              source: params.replaceExistingForSource,
            });
          }
        }
      }
    }
  } else if (params.replaceExistingForSource && externalIds.length > 0) {
    const { data: sourceRows, error: sourceRowsError } = await admin
      .from("organization_roster_entries")
      .select("id, external_student_id")
      .eq("organization_id", params.organizationId)
      .eq("source", params.replaceExistingForSource)
      .not("external_student_id", "is", null);

    if (sourceRowsError) throw sourceRowsError;
    const currentRows = (sourceRows ?? []) as ExistingRosterRow[];
    const targetSet = new Set(externalIds);
    deactivated = currentRows.filter((row) => {
      const external = row.external_student_id?.toLowerCase();
      return external ? !targetSet.has(external) : false;
    }).length;
  }

  return {
    totalReceived: params.entries.length,
    inserted: inserts.length - withoutExternal.length,
    updated: updates.length,
    insertedWithoutExternalId: withoutExternal.length,
    deactivated,
    deactivatedLearnerAssignments,
    dryRun,
  };
}

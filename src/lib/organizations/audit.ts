import type { SupabaseClient } from "@supabase/supabase-js";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";

export type OrganizationAuditEventInput = {
  organizationId: string;
  actorUserId?: string | null;
  eventType: string;
  subjectType?: string | null;
  subjectId?: string | null;
  metadata?: Record<string, unknown> | null;
  createdAt?: string;
};

function normalizeEventType(eventType: string) {
  return eventType.trim().slice(0, 120);
}

function normalizeSubjectType(subjectType: string | null | undefined) {
  if (!subjectType) return "organization_learner";
  return subjectType.trim().slice(0, 120) || "organization_learner";
}

export async function logOrganizationAuditEvents(
  admin: SupabaseClient,
  events: readonly OrganizationAuditEventInput[],
) {
  if (events.length === 0) {
    return { written: 0, skipped: 0 };
  }

  const rows = events
    .map((event) => ({
      organization_id: event.organizationId,
      actor_user_id: event.actorUserId ?? null,
      event_type: normalizeEventType(event.eventType),
      subject_type: normalizeSubjectType(event.subjectType),
      subject_id: event.subjectId ?? null,
      metadata: event.metadata ?? {},
      created_at: event.createdAt ?? new Date().toISOString(),
    }))
    .filter((row) => row.event_type.length >= 3);

  if (rows.length === 0) {
    return { written: 0, skipped: events.length };
  }

  const { error } = await admin.from("organization_audit_events").insert(rows);
  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return { written: 0, skipped: events.length };
    }
    throw error;
  }

  return {
    written: rows.length,
    skipped: events.length - rows.length,
  };
}

export async function logOrganizationAuditEvent(
  admin: SupabaseClient,
  event: OrganizationAuditEventInput,
) {
  return logOrganizationAuditEvents(admin, [event]);
}

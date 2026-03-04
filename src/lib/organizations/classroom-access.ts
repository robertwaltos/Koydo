import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { getHigherOrganizationRole, type OrganizationRole } from "@/lib/organizations/roles";

export const CLASSROOM_ACCESS_METADATA_KEY = "classroomAccess";

const accountClassSchema = z.preprocess(
  (value) => (typeof value === "string" ? value.trim().toUpperCase() : value),
  z.enum(["SCHOOL", "TEACHER"]),
);

const classroomAccessPolicySchema = z.object({
  enabled: z.boolean().default(false),
  accountClass: accountClassSchema.default("SCHOOL"),
  timeZone: z.string().trim().min(3).max(80).default("America/Chicago"),
  startHourLocal: z.number().int().min(0).max(23).default(7),
  endHourLocal: z.number().int().min(1).max(24).default(15),
  requireCountryMatch: z.boolean().default(true),
  requireTimeZoneMatch: z.boolean().default(true),
  allowedCountryCodes: z
    .array(
      z
        .string()
        .trim()
        .length(2)
        .transform((value) => value.toUpperCase()),
    )
    .max(64)
    .default([]),
  allowedTimeZones: z.array(z.string().trim().min(3).max(80)).max(64).default([]),
  note: z.string().trim().max(500).optional().nullable(),
}).passthrough();

export type ClassroomAccessPolicy = z.infer<typeof classroomAccessPolicySchema>;

export const DEFAULT_CLASSROOM_ACCESS_POLICY: ClassroomAccessPolicy = {
  enabled: false,
  accountClass: "SCHOOL",
  timeZone: "America/Chicago",
  startHourLocal: 7,
  endHourLocal: 15,
  requireCountryMatch: true,
  requireTimeZoneMatch: true,
  allowedCountryCodes: [],
  allowedTimeZones: [],
  note: null,
};

export type ClassroomAccessDecision = {
  granted: boolean;
  reason:
    | "eligible"
    | "no_organization_affiliation"
    | "policy_not_configured"
    | "outside_classroom_hours"
    | "country_not_allowed"
    | "country_unavailable"
    | "timezone_not_allowed"
    | "timezone_unavailable"
    | "invalid_timezone"
    | "organization_tables_unavailable"
    | "internal_error";
  organizationId: string | null;
  organizationName: string | null;
  organizationType: string | null;
  accountClass: ClassroomAccessPolicy["accountClass"] | null;
  timeZone: string | null;
  window: {
    startHourLocal: number;
    endHourLocal: number;
  } | null;
  requestCountry: string | null;
  requestTimeZone: string | null;
  localHour: number | null;
  localMinute: number | null;
};

type OrganizationMembershipRow = {
  organization_id: string;
  role: OrganizationRole;
  status: string;
};

type OrganizationLearnerRow = {
  organization_id: string;
  status: string;
};

type OrganizationRow = {
  id: string;
  name: string;
  organization_type: string;
  metadata: Record<string, unknown> | null;
};

function normalizeCountryCode(value: string) {
  return value.trim().toUpperCase().slice(0, 2);
}

function canonicalizeTimeZone(value: string) {
  const candidate = value.trim();
  if (candidate.length < 3 || candidate.length > 80) return null;
  try {
    return new Intl.DateTimeFormat("en-US", { timeZone: candidate }).resolvedOptions().timeZone;
  } catch {
    return null;
  }
}

function sanitizeCountryCodes(value: readonly string[]) {
  return Array.from(
    new Set(
      value
        .map((entry) => normalizeCountryCode(entry))
        .filter((entry) => /^[A-Z]{2}$/.test(entry)),
    ),
  ).slice(0, 64);
}

function sanitizeTimeZones(value: readonly string[]) {
  const canonical = value
    .map((entry) => canonicalizeTimeZone(entry))
    .filter((entry): entry is string => Boolean(entry));
  return Array.from(new Set(canonical)).slice(0, 64);
}

function toLocalHourMinute(now: Date, timeZone: string) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(now);

    const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "");
    const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "");
    if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;
    return { hour, minute };
  } catch {
    return null;
  }
}

function isWithinLocalHourWindow(
  value: { hour: number; minute: number },
  startHourLocal: number,
  endHourLocal: number,
) {
  const nowMinutes = value.hour * 60 + value.minute;
  const startMinutes = startHourLocal * 60;
  const endMinutes = endHourLocal * 60;

  if (endMinutes > startMinutes) {
    return nowMinutes >= startMinutes && nowMinutes < endMinutes;
  }

  // Overnight windows (e.g., 22 -> 6) are supported for completeness.
  return nowMinutes >= startMinutes || nowMinutes < endMinutes;
}

function extractRequestCountry(headers?: Headers) {
  if (!headers) return null;
  const candidate =
    headers.get("x-vercel-ip-country")
    ?? headers.get("cf-ipcountry")
    ?? headers.get("cloudfront-viewer-country")
    ?? headers.get("x-appengine-country");
  if (!candidate) return null;
  const normalized = normalizeCountryCode(candidate);
  return /^[A-Z]{2}$/.test(normalized) ? normalized : null;
}

function extractRequestTimeZone(headers?: Headers) {
  if (!headers) return null;
  const candidate =
    headers.get("x-vercel-ip-timezone")
    ?? headers.get("cf-timezone")
    ?? headers.get("x-appengine-time-zone");
  if (!candidate) return null;
  return canonicalizeTimeZone(candidate);
}

function getRawClassroomAccessPolicy(metadata: unknown) {
  if (!metadata || typeof metadata !== "object") return null;
  const row = metadata as Record<string, unknown>;
  const policy = row[CLASSROOM_ACCESS_METADATA_KEY];
  return policy && typeof policy === "object" ? policy : null;
}

export function parseClassroomAccessPolicyFromMetadata(metadata: unknown): ClassroomAccessPolicy | null {
  const rawPolicy = getRawClassroomAccessPolicy(metadata);
  if (!rawPolicy) return null;

  const parsed = classroomAccessPolicySchema.safeParse(rawPolicy);
  if (!parsed.success) return null;
  const canonicalTimeZone = canonicalizeTimeZone(parsed.data.timeZone);
  if (!canonicalTimeZone) return null;

  return {
    ...parsed.data,
    timeZone: canonicalTimeZone,
    allowedCountryCodes: sanitizeCountryCodes(parsed.data.allowedCountryCodes),
    allowedTimeZones: sanitizeTimeZones(parsed.data.allowedTimeZones),
  };
}

export function writeClassroomAccessPolicyToMetadata(
  metadata: unknown,
  policy: ClassroomAccessPolicy,
) {
  const existing =
    metadata && typeof metadata === "object"
      ? { ...(metadata as Record<string, unknown>) }
      : {};

  const normalizedPolicy: ClassroomAccessPolicy = {
    ...policy,
    timeZone: canonicalizeTimeZone(policy.timeZone) ?? DEFAULT_CLASSROOM_ACCESS_POLICY.timeZone,
    allowedCountryCodes: sanitizeCountryCodes(policy.allowedCountryCodes),
    allowedTimeZones: sanitizeTimeZones(policy.allowedTimeZones),
    note: policy.note ?? null,
  };

  return {
    ...existing,
    [CLASSROOM_ACCESS_METADATA_KEY]: normalizedPolicy,
  };
}

function noAccess(
  reason: ClassroomAccessDecision["reason"],
  requestCountry: string | null,
  requestTimeZone: string | null,
): ClassroomAccessDecision {
  return {
    granted: false,
    reason,
    organizationId: null,
    organizationName: null,
    organizationType: null,
    accountClass: null,
    timeZone: null,
    window: null,
    requestCountry,
    requestTimeZone,
    localHour: null,
    localMinute: null,
  };
}

export async function resolveClassroomAccessForUser(input: {
  userId: string;
  requestHeaders?: Headers;
  now?: Date;
  admin?: SupabaseClient;
}): Promise<ClassroomAccessDecision> {
  const requestCountry = extractRequestCountry(input.requestHeaders);
  const requestTimeZone = extractRequestTimeZone(input.requestHeaders);
  const now = input.now ?? new Date();
  const admin = input.admin ?? createSupabaseAdminClient();

  try {
    const [membershipResult, learnerResult] = await Promise.all([
      admin
        .from("organization_memberships")
        .select("organization_id, role, status")
        .eq("user_id", input.userId)
        .eq("status", "active")
        .limit(200),
      admin
        .from("organization_learners")
        .select("organization_id, status")
        .eq("learner_user_id", input.userId)
        .eq("status", "active")
        .limit(200),
    ]);

    const relationError = membershipResult.error ?? learnerResult.error;
    if (relationError) {
      if (isMissingOrganizationTableError(relationError)) {
        return noAccess("organization_tables_unavailable", requestCountry, requestTimeZone);
      }
      console.error("Failed to resolve classroom access organization affiliations.", toSafeErrorRecord(relationError));
      return noAccess("internal_error", requestCountry, requestTimeZone);
    }

    const memberships = (membershipResult.data ?? []) as OrganizationMembershipRow[];
    const learners = (learnerResult.data ?? []) as OrganizationLearnerRow[];
    const roleByOrganizationId = new Map<string, OrganizationRole>();

    for (const membership of memberships) {
      const current = roleByOrganizationId.get(membership.organization_id);
      if (!current) {
        roleByOrganizationId.set(membership.organization_id, membership.role);
      } else {
        roleByOrganizationId.set(
          membership.organization_id,
          getHigherOrganizationRole(current, membership.role),
        );
      }
    }

    const organizationIds = Array.from(
      new Set([
        ...memberships.map((membership) => membership.organization_id),
        ...learners.map((learner) => learner.organization_id),
      ]),
    );

    if (organizationIds.length === 0) {
      return noAccess("no_organization_affiliation", requestCountry, requestTimeZone);
    }

    const { data: organizationData, error: organizationError } = await admin
      .from("organizations")
      .select("id, name, organization_type, metadata")
      .in("id", organizationIds)
      .limit(200);

    if (organizationError) {
      if (isMissingOrganizationTableError(organizationError)) {
        return noAccess("organization_tables_unavailable", requestCountry, requestTimeZone);
      }
      console.error("Failed to resolve classroom access organizations.", toSafeErrorRecord(organizationError));
      return noAccess("internal_error", requestCountry, requestTimeZone);
    }

    const organizations = (organizationData ?? []) as OrganizationRow[];
    let fallbackReason: ClassroomAccessDecision["reason"] = "policy_not_configured";

    for (const organization of organizations) {
      const policy = parseClassroomAccessPolicyFromMetadata(organization.metadata);
      if (!policy || !policy.enabled) {
        fallbackReason = "policy_not_configured";
        continue;
      }

      const local = toLocalHourMinute(now, policy.timeZone);
      if (!local) {
        fallbackReason = "invalid_timezone";
        continue;
      }

      if (
        policy.requireCountryMatch
        && policy.allowedCountryCodes.length > 0
      ) {
        if (!requestCountry) {
          fallbackReason = "country_unavailable";
          continue;
        }
        if (!policy.allowedCountryCodes.includes(requestCountry)) {
          fallbackReason = "country_not_allowed";
          continue;
        }
      }

      if (policy.requireTimeZoneMatch) {
        if (!requestTimeZone) {
          fallbackReason = "timezone_unavailable";
          continue;
        }
        const allowedTimeZones =
          policy.allowedTimeZones.length > 0
            ? policy.allowedTimeZones
            : [policy.timeZone];
        if (!allowedTimeZones.includes(requestTimeZone)) {
          fallbackReason = "timezone_not_allowed";
          continue;
        }
      }

      if (!isWithinLocalHourWindow(local, policy.startHourLocal, policy.endHourLocal)) {
        fallbackReason = "outside_classroom_hours";
        continue;
      }

      const role = roleByOrganizationId.get(organization.id);
      const accountClass = role === "teacher" ? "TEACHER" : policy.accountClass;

      return {
        granted: true,
        reason: "eligible",
        organizationId: organization.id,
        organizationName: organization.name,
        organizationType: organization.organization_type,
        accountClass,
        timeZone: policy.timeZone,
        window: {
          startHourLocal: policy.startHourLocal,
          endHourLocal: policy.endHourLocal,
        },
        requestCountry,
        requestTimeZone,
        localHour: local.hour,
        localMinute: local.minute,
      };
    }

    return noAccess(fallbackReason, requestCountry, requestTimeZone);
  } catch (error) {
    console.error("Unexpected classroom access resolution failure.", toSafeErrorRecord(error));
    return noAccess("internal_error", requestCountry, requestTimeZone);
  }
}

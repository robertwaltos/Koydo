import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { logOrganizationAuditEvent } from "@/lib/organizations/audit";
import {
  DEFAULT_CLASSROOM_ACCESS_POLICY,
  parseClassroomAccessPolicyFromMetadata,
  writeClassroomAccessPolicyToMetadata,
  type ClassroomAccessPolicy,
} from "@/lib/organizations/classroom-access";

const accountClassSchema = z.preprocess(
  (value) => (typeof value === "string" ? value.trim().toUpperCase() : value),
  z.enum(["SCHOOL", "TEACHER"]),
);

const partialPolicySchema = z
  .object({
    enabled: z.boolean().optional(),
    accountClass: accountClassSchema.optional(),
    timeZone: z.string().trim().min(3).max(80).optional(),
    startHourLocal: z.number().int().min(0).max(23).optional(),
    endHourLocal: z.number().int().min(1).max(24).optional(),
    requireCountryMatch: z.boolean().optional(),
    requireTimeZoneMatch: z.boolean().optional(),
    allowedCountryCodes: z.array(z.string().trim().length(2)).max(64).optional(),
    allowedTimeZones: z.array(z.string().trim().min(3).max(80)).max(64).optional(),
    note: z.string().trim().max(500).nullable().optional(),
  })
  .superRefine((value, context) => {
    if (Object.keys(value).length === 0) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Provide at least one classroom policy field.",
      });
    }
  });

type OrganizationRow = {
  id: string;
  name: string;
  metadata: Record<string, unknown> | null;
};

function isValidTimeZone(timeZone: string) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone }).format(new Date());
    return true;
  } catch {
    return false;
  }
}

function canonicalizeTimeZone(timeZone: string) {
  const candidate = timeZone.trim();
  if (!isValidTimeZone(candidate)) return null;
  return new Intl.DateTimeFormat("en-US", { timeZone: candidate }).resolvedOptions().timeZone;
}

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

function normalizePolicyForResponse(policy: ClassroomAccessPolicy) {
  return {
    enabled: policy.enabled,
    accountClass: policy.accountClass,
    timeZone: policy.timeZone,
    startHourLocal: policy.startHourLocal,
    endHourLocal: policy.endHourLocal,
    requireCountryMatch: policy.requireCountryMatch,
    requireTimeZoneMatch: policy.requireTimeZoneMatch,
    allowedCountryCodes: policy.allowedCountryCodes,
    allowedTimeZones: policy.allowedTimeZones,
    note: policy.note ?? null,
  };
}

async function loadOrganizationById(admin: ReturnType<typeof createSupabaseAdminClient>, organizationId: string) {
  const { data, error } = await admin
    .from("organizations")
    .select("id, name, metadata")
    .eq("id", organizationId)
    .maybeSingle();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return {
        ok: false as const,
        response: NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        ),
      };
    }
    console.error("Failed to load organization classroom policy context.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Failed to load organization." }, { status: 500 }),
    };
  }

  if (!data) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Organization not found." }, { status: 404 }),
    };
  }

  return {
    ok: true as const,
    organization: data as OrganizationRow,
  };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:classroom-access:get", {
    max: 120,
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

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager", "viewer"],
  );
  if (!membership.ok) return membership.response;

  const organizationResult = await loadOrganizationById(admin, organizationId);
  if (!organizationResult.ok) return organizationResult.response;

  const policy =
    parseClassroomAccessPolicyFromMetadata(organizationResult.organization.metadata)
    ?? DEFAULT_CLASSROOM_ACCESS_POLICY;

  return NextResponse.json({
    organization: {
      id: organizationResult.organization.id,
      name: organizationResult.organization.name,
    },
    policy: normalizePolicyForResponse(policy),
    antiCheatModel: {
      serverUtcCorrelation: true,
      localTimeSource: "organization_time_zone",
      localTimeHeaders: [
        "x-vercel-ip-timezone",
        "cf-timezone",
        "x-appengine-time-zone",
      ],
      geoCountryHeaders: [
        "x-vercel-ip-country",
        "cf-ipcountry",
        "cloudfront-viewer-country",
      ],
    },
  });
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:classroom-access:put", {
    max: 60,
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
  const parsed = partialPolicySchema.safeParse(body);
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

  const organizationResult = await loadOrganizationById(admin, organizationId);
  if (!organizationResult.ok) return organizationResult.response;

  const currentPolicy =
    parseClassroomAccessPolicyFromMetadata(organizationResult.organization.metadata)
    ?? DEFAULT_CLASSROOM_ACCESS_POLICY;

  const nextPolicy: ClassroomAccessPolicy = {
    ...currentPolicy,
    ...parsed.data,
    allowedCountryCodes:
      parsed.data.allowedCountryCodes
      ?? currentPolicy.allowedCountryCodes,
    allowedTimeZones:
      parsed.data.allowedTimeZones
      ?? currentPolicy.allowedTimeZones,
  };

  const canonicalPolicyTimeZone = canonicalizeTimeZone(nextPolicy.timeZone);
  if (!canonicalPolicyTimeZone) {
    return NextResponse.json(
      { error: "Invalid IANA time zone for classroom access policy." },
      { status: 400 },
    );
  }
  nextPolicy.timeZone = canonicalPolicyTimeZone;

  const canonicalAllowedTimeZones = nextPolicy.allowedTimeZones
    .map((timeZone) => canonicalizeTimeZone(timeZone))
    .filter((timeZone): timeZone is string => Boolean(timeZone));
  if (canonicalAllowedTimeZones.length !== nextPolicy.allowedTimeZones.length) {
    return NextResponse.json(
      { error: "allowedTimeZones must contain valid IANA time zones." },
      { status: 400 },
    );
  }
  nextPolicy.allowedTimeZones = Array.from(new Set(canonicalAllowedTimeZones)).slice(0, 64);

  if (nextPolicy.startHourLocal === nextPolicy.endHourLocal) {
    return NextResponse.json(
      { error: "Classroom access window must be at least one hour." },
      { status: 400 },
    );
  }

  const mergedMetadata = writeClassroomAccessPolicyToMetadata(
    organizationResult.organization.metadata,
    nextPolicy,
  );

  const { data: updatedOrganization, error: updateError } = await admin
    .from("organizations")
    .update({ metadata: mergedMetadata })
    .eq("id", organizationId)
    .select("id, name, metadata")
    .maybeSingle();

  if (updateError) {
    if (isMissingOrganizationTableError(updateError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to update classroom access policy.", toSafeErrorRecord(updateError));
    return NextResponse.json({ error: "Failed to update classroom policy." }, { status: 500 });
  }

  const effectivePolicy =
    parseClassroomAccessPolicyFromMetadata(updatedOrganization?.metadata)
    ?? nextPolicy;

  try {
    await logOrganizationAuditEvent(admin, {
      organizationId,
      actorUserId: user.id,
      eventType: "classroom_access_policy_updated",
      subjectType: "organization",
      subjectId: organizationId,
      metadata: {
        source: "api:organizations:classroom-access:put",
        policy: normalizePolicyForResponse(effectivePolicy),
      },
    });
  } catch {
    // Best-effort audit logging.
  }

  return NextResponse.json({
    success: true,
    organization: {
      id: updatedOrganization?.id ?? organizationId,
      name: updatedOrganization?.name ?? organizationResult.organization.name,
    },
    policy: normalizePolicyForResponse(effectivePolicy),
  });
}

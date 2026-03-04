import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { parseClassroomAccessPolicyFromMetadata } from "@/lib/organizations/classroom-access";
import { getOrganizationSeatSummary } from "@/lib/organizations/license-summary";
import {
  SCHOOL_API_DATASETS,
  type SchoolApiDataset,
  extractRequestCountryFromHeaders,
  extractRequestIpFromHeaders,
  extractRequestTimeZoneFromHeaders,
  extractSchoolApiKeyFromHeaders,
  isSchoolApiTablesMissingError,
  resolvePartnerSchoolContext,
} from "@/lib/partners/school-api";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { hashSha256Hex } from "@/lib/security/secret-crypto";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const datasetSchema = z.enum(SCHOOL_API_DATASETS);

type SchoolApiKeyRow = {
  id: string;
  partner_id: string;
  organization_id: string | null;
  scopes: string[] | null;
  status: string;
  expires_at: string | null;
};

type ProvisioningTokenSummaryRow = {
  seats_total: number;
  seats_remaining: number;
  expires_at: string | null;
  revoked_at: string | null;
};

type LearnerSummaryRow = {
  status: string;
  school_name: string | null;
};

type LearnerRosterRow = {
  id: string;
  learner_user_id: string | null;
  student_profile_id: string | null;
  external_student_id: string | null;
  school_name: string | null;
  status: string;
  assigned_at: string;
};

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

function parseRequestedDatasets(searchParams: URLSearchParams) {
  const raw = searchParams.get("datasets");
  if (!raw) return [];
  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}

function normalizeStatusCode(value: number) {
  if (value >= 100 && value <= 599) return value;
  return 500;
}

export async function GET(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:school:v1:export:get", {
    max: 240,
    windowMs: 5 * 60 * 1000,
  });
  if (!rate.allowed) {
    return rateLimitExceededResponse(rate.retryAfterSeconds);
  }

  const schoolApiKey = extractSchoolApiKeyFromHeaders(request.headers);
  if (!schoolApiKey) {
    return NextResponse.json({ error: "Missing school API key." }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const keyHash = hashSha256Hex(schoolApiKey);
  const requestCountry = extractRequestCountryFromHeaders(request.headers);
  const requestTimeZone = extractRequestTimeZoneFromHeaders(request.headers);
  const requestIp = extractRequestIpFromHeaders(request.headers);
  const { searchParams } = new URL(request.url);

  let keyRow: SchoolApiKeyRow | null = null;
  let partnerIdForAudit: string | null = null;
  let organizationIdForAudit: string | null = null;

  async function writeAuditLog(input: {
    statusCode: number;
    datasets: string[];
    responseRowCount?: number;
    responseBytes?: number;
    metadata?: Record<string, unknown>;
  }) {
    if (!partnerIdForAudit) return;
    try {
      await admin
        .from("partner_school_api_usage_logs")
        .insert({
          partner_id: partnerIdForAudit,
          organization_id: organizationIdForAudit,
          api_key_id: keyRow?.id ?? null,
          request_path: "/api/school/v1/export",
          http_method: "GET",
          datasets: input.datasets,
          status_code: normalizeStatusCode(input.statusCode),
          response_row_count: Math.max(0, Math.trunc(input.responseRowCount ?? 0)),
          response_bytes: Math.max(0, Math.trunc(input.responseBytes ?? 0)),
          request_country: requestCountry,
          request_time_zone: requestTimeZone,
          request_ip: requestIp,
          metadata: input.metadata ?? {},
        });
    } catch {
      // Best-effort request logging.
    }
  }

  try {
    const { data: keyData, error: keyError } = await admin
      .from("partner_school_api_keys")
      .select("id, partner_id, organization_id, scopes, status, expires_at")
      .eq("key_hash", keyHash)
      .maybeSingle();

    if (keyError) {
      if (isSchoolApiTablesMissingError(keyError)) {
        return NextResponse.json({ error: "School API tables not migrated yet." }, { status: 503 });
      }
      console.error("Failed to resolve school API key.", toSafeErrorRecord(keyError));
      return NextResponse.json({ error: "Failed to resolve school API key." }, { status: 500 });
    }

    keyRow = (keyData as SchoolApiKeyRow | null) ?? null;
    if (!keyRow) {
      return NextResponse.json({ error: "Invalid school API key." }, { status: 401 });
    }
    partnerIdForAudit = keyRow.partner_id;
    organizationIdForAudit = keyRow.organization_id;

    if (keyRow.status !== "active") {
      await writeAuditLog({
        statusCode: 401,
        datasets: [],
        metadata: { reason: "inactive_key" },
      });
      return NextResponse.json({ error: "School API key is not active." }, { status: 401 });
    }
    if (keyRow.expires_at && keyRow.expires_at <= new Date().toISOString()) {
      await writeAuditLog({
        statusCode: 401,
        datasets: [],
        metadata: { reason: "expired_key" },
      });
      return NextResponse.json({ error: "School API key has expired." }, { status: 401 });
    }

    const schoolContext = await resolvePartnerSchoolContext(admin, keyRow.partner_id);
    if (!schoolContext) {
      await writeAuditLog({
        statusCode: 404,
        datasets: [],
        metadata: { reason: "partner_not_found" },
      });
      return NextResponse.json({ error: "School partner not found." }, { status: 404 });
    }
    organizationIdForAudit = schoolContext.linkedOrganization?.id ?? keyRow.organization_id ?? null;

    if (!schoolContext.eligibility.eligible) {
      await writeAuditLog({
        statusCode: 403,
        datasets: [],
        metadata: {
          reason: "eligibility_blocked",
          eligibility: schoolContext.eligibility,
        },
      });
      return NextResponse.json(
        {
          error: "School API access is blocked by account or jurisdiction policy.",
          eligibility: schoolContext.eligibility,
        },
        { status: 403 },
      );
    }
    if (!schoolContext.linkedOrganization) {
      await writeAuditLog({
        statusCode: 409,
        datasets: [],
        metadata: { reason: "organization_not_linked" },
      });
      return NextResponse.json({ error: "No linked organization available for export." }, { status: 409 });
    }
    if (keyRow.organization_id && keyRow.organization_id !== schoolContext.linkedOrganization.id) {
      await writeAuditLog({
        statusCode: 403,
        datasets: [],
        metadata: {
          reason: "organization_mismatch",
          keyOrganizationId: keyRow.organization_id,
          resolvedOrganizationId: schoolContext.linkedOrganization.id,
        },
      });
      return NextResponse.json(
        { error: "School API key organization does not match the linked school organization." },
        { status: 403 },
      );
    }

    const requestedRaw = parseRequestedDatasets(searchParams);
    const parsedRequested = requestedRaw
      .map((entry) => datasetSchema.safeParse(entry))
      .filter((entry): entry is { success: true; data: z.infer<typeof datasetSchema> } => entry.success)
      .map((entry) => entry.data);
    const requestedDatasets: SchoolApiDataset[] =
      parsedRequested.length > 0 ? parsedRequested : ["license_summary"];

    const allowedByPolicy = new Set(schoolContext.eligibility.allowedDatasets);
    const keyScopes = (keyRow.scopes ?? [])
      .map((scope) => datasetSchema.safeParse(scope))
      .filter((entry): entry is { success: true; data: z.infer<typeof datasetSchema> } => entry.success)
      .map((entry) => entry.data);
    const allowedByKey =
      keyScopes.length > 0
        ? new Set(keyScopes)
        : new Set(schoolContext.eligibility.allowedDatasets);

    const deniedDatasets = requestedDatasets.filter(
      (dataset) => !allowedByPolicy.has(dataset) || !allowedByKey.has(dataset),
    );
    if (deniedDatasets.length > 0) {
      await writeAuditLog({
        statusCode: 403,
        datasets: requestedDatasets,
        metadata: {
          reason: "dataset_denied",
          deniedDatasets,
          allowedByPolicy: Array.from(allowedByPolicy),
          allowedByKey: Array.from(allowedByKey),
        },
      });
      return NextResponse.json(
        {
          error: "Requested dataset is not allowed for this key or jurisdiction.",
          deniedDatasets,
          allowedDatasets: Array.from(new Set([...allowedByPolicy].filter((item) => allowedByKey.has(item)))),
        },
        { status: 403 },
      );
    }

    const organizationId = schoolContext.linkedOrganization.id;
    const responsePayload: Record<string, unknown> = {};
    let responseRowCount = 0;

    if (requestedDatasets.includes("license_summary")) {
      const [seatSummary, purchasesResult] = await Promise.all([
        getOrganizationSeatSummary(admin, organizationId),
        admin
          .from("organization_license_purchases")
          .select("id, seats_purchased, seats_assigned, status, purchased_at, paid_at")
          .eq("organization_id", organizationId)
          .order("created_at", { ascending: false })
          .limit(500),
      ]);
      if (purchasesResult.error) throw purchasesResult.error;
      responseRowCount += 1;
      responsePayload.license_summary = {
        seatSummary,
        purchases: purchasesResult.data ?? [],
      };
    }

    if (requestedDatasets.includes("classroom_policy")) {
      responseRowCount += 1;
      responsePayload.classroom_policy =
        parseClassroomAccessPolicyFromMetadata(schoolContext.linkedOrganization.metadata) ?? null;
    }

    if (requestedDatasets.includes("provisioning_summary")) {
      const { data: tokens, error: tokenError } = await admin
        .from("organization_provisioning_tokens")
        .select("seats_total, seats_remaining, expires_at, revoked_at")
        .eq("organization_id", organizationId)
        .limit(5000);
      if (tokenError) throw tokenError;
      const rows = (tokens ?? []) as ProvisioningTokenSummaryRow[];
      const nowIso = new Date().toISOString();
      const activeTokens = rows.filter(
        (row) => !row.revoked_at && (!row.expires_at || row.expires_at > nowIso),
      );
      responseRowCount += rows.length;
      responsePayload.provisioning_summary = {
        totalTokens: rows.length,
        activeTokens: activeTokens.length,
        revokedTokens: rows.filter((row) => Boolean(row.revoked_at)).length,
        expiredTokens: rows.filter(
          (row) => !row.revoked_at && row.expires_at !== null && row.expires_at <= nowIso,
        ).length,
        activeReservedSeats: activeTokens.reduce((sum, row) => sum + Math.max(0, Number(row.seats_remaining ?? 0)), 0),
      };
    }

    if (requestedDatasets.includes("learner_aggregate")) {
      const { data: learners, error: learnerError } = await admin
        .from("organization_learners")
        .select("status, school_name")
        .eq("organization_id", organizationId)
        .limit(25_000);
      if (learnerError) throw learnerError;
      const rows = (learners ?? []) as LearnerSummaryRow[];
      const byStatus = rows.reduce<Record<string, number>>((acc, row) => {
        const status = row.status || "unknown";
        acc[status] = (acc[status] ?? 0) + 1;
        return acc;
      }, {});
      const bySchool = new Map<string, number>();
      for (const row of rows) {
        const school = row.school_name?.trim() || "unspecified";
        bySchool.set(school, (bySchool.get(school) ?? 0) + 1);
      }
      responseRowCount += rows.length;
      responsePayload.learner_aggregate = {
        totalLearners: rows.length,
        byStatus,
        bySchool: Array.from(bySchool.entries())
          .map(([schoolName, learnerCount]) => ({ schoolName, learnerCount }))
          .sort((left, right) => right.learnerCount - left.learnerCount)
          .slice(0, 100),
      };
    }

    if (requestedDatasets.includes("learner_roster_pii")) {
      const { data: roster, error: rosterError } = await admin
        .from("organization_learners")
        .select("id, learner_user_id, student_profile_id, external_student_id, school_name, status, assigned_at")
        .eq("organization_id", organizationId)
        .order("assigned_at", { ascending: false })
        .limit(10_000);
      if (rosterError) throw rosterError;
      const rows = (roster ?? []) as LearnerRosterRow[];
      responseRowCount += rows.length;
      responsePayload.learner_roster_pii = rows;
    }

    const nowIso = new Date().toISOString();
    await admin
      .from("partner_school_api_keys")
      .update({
        last_used_at: nowIso,
      })
      .eq("id", keyRow.id)
      .eq("status", "active");

    const responseBody = {
      ok: true,
      regulatoryMode: schoolContext.eligibility.regulatoryMode,
      partnerId: schoolContext.partner.id,
      organization: {
        id: schoolContext.linkedOrganization.id,
        name: schoolContext.linkedOrganization.name,
        type: schoolContext.linkedOrganization.organization_type,
      },
      datasets: requestedDatasets,
      exportedAt: nowIso,
      data: responsePayload,
    };

    const responseBytes = Buffer.byteLength(JSON.stringify(responseBody), "utf8");
    await writeAuditLog({
      statusCode: 200,
      datasets: requestedDatasets,
      responseRowCount,
      responseBytes,
      metadata: {
        regulatoryMode: schoolContext.eligibility.regulatoryMode,
      },
    });

    return NextResponse.json(responseBody);
  } catch (error) {
    const status =
      isSchoolApiTablesMissingError(error)
        ? 503
        : 500;
    await writeAuditLog({
      statusCode: status,
      datasets: parseRequestedDatasets(searchParams),
      metadata: {
        error: toSafeErrorRecord(error),
      },
    });
    if (isSchoolApiTablesMissingError(error)) {
      return NextResponse.json({ error: "School API tables not migrated yet." }, { status: 503 });
    }
    console.error("Unexpected school data export error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to export school API data." }, { status: 500 });
  }
}

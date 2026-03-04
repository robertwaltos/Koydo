import { NextResponse } from "next/server";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getPartnerPortalAccessForUser, type PartnerPortalRole } from "@/lib/partners/access";
import {
  SCHOOL_API_DATASETS,
  buildSchoolApiUsageDocument,
  generateSchoolApiKeyMaterial,
  isSchoolApiTablesMissingError,
  normalizeSchoolApiScopes,
  resolvePartnerSchoolContext,
} from "@/lib/partners/school-api";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const createActionSchema = z.object({
  action: z.literal("create_key"),
  partnerId: z.string().uuid().optional().nullable(),
  label: z.string().trim().min(2).max(160).default("Primary School API Key"),
  expiresAt: z.string().datetime().optional().nullable(),
  scopes: z.array(z.enum(SCHOOL_API_DATASETS)).max(SCHOOL_API_DATASETS.length).optional(),
});

const revokeActionSchema = z.object({
  action: z.literal("revoke_key"),
  partnerId: z.string().uuid().optional().nullable(),
  keyId: z.string().uuid(),
});

const postSchema = z.discriminatedUnion("action", [createActionSchema, revokeActionSchema]);

type SchoolApiKeyRow = {
  id: string;
  label: string;
  key_prefix: string;
  scopes: string[] | null;
  status: string;
  expires_at: string | null;
  last_used_at: string | null;
  revoked_at: string | null;
  created_at: string;
};

type SchoolApiUsageRow = {
  status_code: number;
  response_row_count: number;
  response_bytes: number;
  created_at: string;
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

function canManageSchoolApi(role: PartnerPortalRole) {
  return role === "owner" || role === "manager" || role === "finance_contact";
}

async function resolvePortalAccess(request: Request, partnerId?: string | null) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return { ok: false as const, response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }

  const accessRows = await getPartnerPortalAccessForUser({
    userId: user.id,
    partnerId: partnerId ?? null,
  }).catch((error) => {
    console.error("Failed to resolve school API portal access.", toSafeErrorRecord(error));
    return [];
  });
  if (accessRows.length === 0) {
    return { ok: false as const, response: NextResponse.json({ error: "No active partner portal access found." }, { status: 403 }) };
  }

  return {
    ok: true as const,
    userId: user.id,
    access: accessRows[0],
  };
}

export async function GET(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:partner:portal:school-api:get", {
    max: 120,
    windowMs: 5 * 60 * 1000,
  });
  if (!rate.allowed) {
    return rateLimitExceededResponse(rate.retryAfterSeconds);
  }

  const partnerId = new URL(request.url).searchParams.get("partnerId");
  const auth = await resolvePortalAccess(request, partnerId);
  if (!auth.ok) return auth.response;

  const admin = createSupabaseAdminClient();
  try {
    const schoolContext = await resolvePartnerSchoolContext(admin, auth.access.partner_id);
    if (!schoolContext) {
      return NextResponse.json({ error: "Partner not found." }, { status: 404 });
    }

    const sinceIso = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const [keysResult, usageResult] = await Promise.all([
      admin
        .from("partner_school_api_keys")
        .select("id, label, key_prefix, scopes, status, expires_at, last_used_at, revoked_at, created_at")
        .eq("partner_id", auth.access.partner_id)
        .order("created_at", { ascending: false })
        .limit(200),
      admin
        .from("partner_school_api_usage_logs")
        .select("status_code, response_row_count, response_bytes, created_at")
        .eq("partner_id", auth.access.partner_id)
        .gte("created_at", sinceIso)
        .order("created_at", { ascending: false })
        .limit(5000),
    ]);

    const error = keysResult.error ?? usageResult.error;
    if (error) {
      if (isSchoolApiTablesMissingError(error)) {
        return NextResponse.json(
          { error: "School API tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to load school API portal data.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to load school API portal data." }, { status: 500 });
    }

    const usageRows = (usageResult.data ?? []) as SchoolApiUsageRow[];
    const totalRequests30d = usageRows.length;
    const deniedRequests30d = usageRows.filter((row) => row.status_code >= 400).length;
    const dataRows30d = usageRows.reduce((sum, row) => sum + Math.max(0, Number(row.response_row_count ?? 0)), 0);
    const responseBytes30d = usageRows.reduce((sum, row) => sum + Math.max(0, Number(row.response_bytes ?? 0)), 0);

    const documentation = buildSchoolApiUsageDocument({
      appUrl: serverEnv.NEXT_PUBLIC_APP_URL,
      partnerDisplayName: schoolContext.partner.display_name,
      partnerId: schoolContext.partner.id,
      organizationId: schoolContext.linkedOrganization?.id ?? null,
      regulatoryMode: schoolContext.eligibility.regulatoryMode,
      allowedDatasets: schoolContext.eligibility.allowedDatasets,
    });

    const apiKeys = ((keysResult.data ?? []) as SchoolApiKeyRow[]).map((row) => ({
      id: row.id,
      label: row.label,
      keyPrefix: row.key_prefix,
      keyPreview: `${row.key_prefix}...`,
      scopes: row.scopes ?? [],
      status: row.status,
      expiresAt: row.expires_at,
      lastUsedAt: row.last_used_at,
      revokedAt: row.revoked_at,
      createdAt: row.created_at,
    }));

    return NextResponse.json({
      access: auth.access,
      partner: {
        id: schoolContext.partner.id,
        displayName: schoolContext.partner.display_name,
        legalName: schoolContext.partner.legal_name,
        partnerType: schoolContext.partner.partner_type,
        accountClass: schoolContext.accountClass,
        countryCode: schoolContext.partner.country_code,
        onboardingStatus: schoolContext.partner.onboarding_status,
        complianceStatus: schoolContext.partner.compliance_status,
        payoutStatus: schoolContext.partner.payout_status,
      },
      linkedOrganization: schoolContext.linkedOrganization
        ? {
            id: schoolContext.linkedOrganization.id,
            name: schoolContext.linkedOrganization.name,
            organizationType: schoolContext.linkedOrganization.organization_type,
            billingEmail: schoolContext.linkedOrganization.billing_email,
          }
        : null,
      seatSummary: schoolContext.seatSummary,
      classroomPolicy: schoolContext.classroomPolicy,
      eligibility: schoolContext.eligibility,
      jurisdictionRule: schoolContext.jurisdictionRule
        ? {
            countryCode: schoolContext.jurisdictionRule.country_code,
            jurisdictionName: schoolContext.jurisdictionRule.jurisdiction_name,
            allowEngagement: schoolContext.jurisdictionRule.allow_engagement,
            allowPayouts: schoolContext.jurisdictionRule.allow_payouts,
            requiresManualReview: schoolContext.jurisdictionRule.requires_manual_review,
            requiresW8: schoolContext.jurisdictionRule.requires_w8,
            sanctionsProgram: schoolContext.jurisdictionRule.sanctions_program,
          }
        : null,
      apiKeys,
      usageSummary: {
        totalRequests30d,
        deniedRequests30d,
        dataRows30d,
        responseBytes30d,
      },
      documentation: {
        endpoint: `${serverEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "")}/api/school/v1/export`,
        markdown: documentation,
      },
    });
  } catch (error) {
    if (isSchoolApiTablesMissingError(error)) {
      return NextResponse.json(
        { error: "School API tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Unexpected school API portal error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:partner:portal:school-api:post", {
    max: 45,
    windowMs: 5 * 60 * 1000,
  });
  if (!rate.allowed) {
    return rateLimitExceededResponse(rate.retryAfterSeconds);
  }

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const auth = await resolvePortalAccess(request, parsed.data.partnerId ?? null);
  if (!auth.ok) return auth.response;
  if (!canManageSchoolApi(auth.access.role)) {
    return NextResponse.json({ error: "Insufficient partner portal role for School API key management." }, { status: 403 });
  }

  const admin = createSupabaseAdminClient();

  try {
    const schoolContext = await resolvePartnerSchoolContext(admin, auth.access.partner_id);
    if (!schoolContext) {
      return NextResponse.json({ error: "Partner not found." }, { status: 404 });
    }

    if (parsed.data.action === "create_key") {
      if (!schoolContext.eligibility.eligible) {
        return NextResponse.json(
          {
            error: "School API key generation is blocked by account eligibility checks.",
            eligibility: schoolContext.eligibility,
          },
          { status: 403 },
        );
      }

      const scopes = normalizeSchoolApiScopes(
        parsed.data.scopes ?? null,
        schoolContext.eligibility.allowedDatasets,
      );
      const keyMaterial = generateSchoolApiKeyMaterial();
      const { data: keyRow, error: keyError } = await admin
        .from("partner_school_api_keys")
        .insert({
          partner_id: schoolContext.partner.id,
          organization_id: schoolContext.linkedOrganization?.id ?? null,
          label: parsed.data.label,
          key_hash: keyMaterial.keyHash,
          key_prefix: keyMaterial.keyPrefix,
          scopes,
          status: "active",
          expires_at: parsed.data.expiresAt ?? null,
          created_by: auth.userId,
          metadata: {
            source: "api:partner:portal:school-api:create_key",
            createdByPortalRole: auth.access.role,
          },
        })
        .select("id, label, key_prefix, scopes, status, expires_at, created_at")
        .single();

      if (keyError) {
        if (isSchoolApiTablesMissingError(keyError)) {
          return NextResponse.json(
            { error: "School API tables not migrated yet." },
            { status: 503 },
          );
        }
        console.error("Failed to create school API key.", toSafeErrorRecord(keyError));
        return NextResponse.json({ error: "Failed to create school API key." }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        key: {
          id: keyRow.id,
          label: keyRow.label,
          value: keyMaterial.value,
          keyPrefix: keyRow.key_prefix,
          keyPreview: keyMaterial.keyPreview,
          scopes: keyRow.scopes ?? [],
          status: keyRow.status,
          expiresAt: keyRow.expires_at,
          createdAt: keyRow.created_at,
        },
      });
    }

    const nowIso = new Date().toISOString();
    const { data: revokedRow, error: revokeError } = await admin
      .from("partner_school_api_keys")
      .update({
        status: "revoked",
        revoked_at: nowIso,
        revoked_by: auth.userId,
        metadata: {
          source: "api:partner:portal:school-api:revoke_key",
          revokedByPortalRole: auth.access.role,
        },
      })
      .eq("id", parsed.data.keyId)
      .eq("partner_id", schoolContext.partner.id)
      .neq("status", "revoked")
      .select("id, label, status, revoked_at")
      .maybeSingle();

    if (revokeError) {
      if (isSchoolApiTablesMissingError(revokeError)) {
        return NextResponse.json(
          { error: "School API tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to revoke school API key.", toSafeErrorRecord(revokeError));
      return NextResponse.json({ error: "Failed to revoke school API key." }, { status: 500 });
    }
    if (!revokedRow) {
      return NextResponse.json({ error: "School API key not found or already revoked." }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      key: {
        id: revokedRow.id,
        label: revokedRow.label,
        status: revokedRow.status,
        revokedAt: revokedRow.revoked_at,
      },
    });
  } catch (error) {
    if (isSchoolApiTablesMissingError(error)) {
      return NextResponse.json(
        { error: "School API tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Unexpected school API key management error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

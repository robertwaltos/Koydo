import crypto from "crypto";
import type { SupabaseClient } from "@supabase/supabase-js";
import { parseClassroomAccessPolicyFromMetadata } from "@/lib/organizations/classroom-access";
import { getOrganizationSeatSummary, type OrganizationSeatSummary } from "@/lib/organizations/license-summary";
import { hashSha256Hex } from "@/lib/security/secret-crypto";

export const SCHOOL_API_DATASETS = [
  "license_summary",
  "classroom_policy",
  "provisioning_summary",
  "learner_aggregate",
  "learner_roster_pii",
] as const;

export type SchoolApiDataset = (typeof SCHOOL_API_DATASETS)[number];

export type SchoolApiRegulatoryMode =
  | "blocked_jurisdiction"
  | "blocked_sanctions"
  | "aggregate_only"
  | "standard";

type PartnerJurisdictionRuleRow = {
  id: string;
  country_code: string;
  jurisdiction_name: string;
  allow_engagement: boolean;
  allow_payouts: boolean;
  requires_manual_review: boolean;
  requires_w8: boolean;
  sanctions_program: string | null;
  sanctions_basis: string | null;
};

type PartnerRow = {
  id: string;
  display_name: string;
  legal_name: string;
  partner_type: string;
  contact_email: string;
  country_code: string;
  metadata: Record<string, unknown> | null;
  compliance_status: string;
  payout_status: string;
  onboarding_status: string;
};

type OrganizationRow = {
  id: string;
  name: string;
  organization_type: string;
  billing_email: string | null;
  metadata: Record<string, unknown> | null;
};

export type SchoolApiEligibility = {
  eligible: boolean;
  reasons: string[];
  regulatoryMode: SchoolApiRegulatoryMode;
  allowedDatasets: SchoolApiDataset[];
};

export type ResolvedPartnerSchoolContext = {
  partner: PartnerRow;
  accountClass: "SCHOOL" | "TEACHER" | null;
  linkedOrganization: OrganizationRow | null;
  seatSummary: OrganizationSeatSummary | null;
  jurisdictionRule: PartnerJurisdictionRuleRow | null;
  classroomPolicy: ReturnType<typeof parseClassroomAccessPolicyFromMetadata> | null;
  eligibility: SchoolApiEligibility;
};

const STRICT_PRIVACY_COUNTRY_CODES = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "CH",
  "GB",
]);

function isUuidLike(value: string | null | undefined) {
  if (!value) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export function parsePartnerAccountClass(metadata: unknown): "SCHOOL" | "TEACHER" | null {
  if (!metadata || typeof metadata !== "object") return null;
  const candidate = (metadata as Record<string, unknown>).accountClass;
  if (typeof candidate !== "string") return null;
  const normalized = candidate.trim().toUpperCase();
  return normalized === "SCHOOL" || normalized === "TEACHER" ? normalized : null;
}

function parseLinkedOrganizationIdFromMetadata(metadata: unknown): string | null {
  if (!metadata || typeof metadata !== "object") return null;
  const candidate = (metadata as Record<string, unknown>).organizationId;
  if (typeof candidate !== "string") return null;
  const normalized = candidate.trim();
  return isUuidLike(normalized) ? normalized : null;
}

async function loadJurisdictionRule(
  admin: SupabaseClient,
  countryCode: string,
): Promise<PartnerJurisdictionRuleRow | null> {
  const { data, error } = await admin
    .from("partner_jurisdiction_rules")
    .select(
      "id, country_code, jurisdiction_name, allow_engagement, allow_payouts, requires_manual_review, requires_w8, sanctions_program, sanctions_basis",
    )
    .eq("country_code", countryCode.toUpperCase())
    .maybeSingle();
  if (error) throw error;
  return (data as PartnerJurisdictionRuleRow | null) ?? null;
}

async function resolveLinkedOrganization(
  admin: SupabaseClient,
  partner: PartnerRow,
): Promise<OrganizationRow | null> {
  const linkedFromMetadata = parseLinkedOrganizationIdFromMetadata(partner.metadata);
  if (linkedFromMetadata) {
    const { data, error } = await admin
      .from("organizations")
      .select("id, name, organization_type, billing_email, metadata")
      .eq("id", linkedFromMetadata)
      .in("organization_type", ["school", "district"])
      .maybeSingle();
    if (error) throw error;
    if (data) return data as OrganizationRow;
  }

  const fallbackEmail = partner.contact_email?.trim().toLowerCase();
  if (!fallbackEmail) return null;

  const { data, error } = await admin
    .from("organizations")
    .select("id, name, organization_type, billing_email, metadata")
    .eq("billing_email", fallbackEmail)
    .in("organization_type", ["school", "district"])
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return (data as OrganizationRow | null) ?? null;
}

export function resolveSchoolApiEligibility(input: {
  partnerType: string;
  accountClass: "SCHOOL" | "TEACHER" | null;
  countryCode: string;
  jurisdictionRule: PartnerJurisdictionRuleRow | null;
  linkedOrganization: OrganizationRow | null;
  seatSummary: OrganizationSeatSummary | null;
}) {
  const reasons: string[] = [];
  const countryCode = input.countryCode.toUpperCase();

  if (input.partnerType !== "school") {
    reasons.push("Partner type must be school.");
  }
  if (!input.accountClass) {
    reasons.push("Partner accountClass must be SCHOOL or TEACHER.");
  }
  if (!input.linkedOrganization) {
    reasons.push("No linked school/district organization found for this partner.");
  }
  if (!input.seatSummary || input.seatSummary.purchasedSeats <= 0) {
    reasons.push("School API access requires a paid school account with purchased seats.");
  }

  const rule = input.jurisdictionRule;
  if (rule && !rule.allow_engagement) {
    reasons.push("Jurisdiction policy blocks business engagement.");
  }
  if (rule?.sanctions_program) {
    reasons.push(`Jurisdiction sanctions program is active (${rule.sanctions_program}).`);
  }

  let regulatoryMode: SchoolApiRegulatoryMode = "standard";
  if (rule?.sanctions_program) {
    regulatoryMode = "blocked_sanctions";
  } else if (rule && !rule.allow_engagement) {
    regulatoryMode = "blocked_jurisdiction";
  } else if (
    STRICT_PRIVACY_COUNTRY_CODES.has(countryCode)
    || Boolean(rule?.requires_manual_review)
    || (countryCode !== "US" && Boolean(rule?.requires_w8))
  ) {
    regulatoryMode = "aggregate_only";
  }

  let allowedDatasets: SchoolApiDataset[] = [];
  if (regulatoryMode === "standard") {
    allowedDatasets = [...SCHOOL_API_DATASETS];
  } else if (regulatoryMode === "aggregate_only") {
    allowedDatasets = SCHOOL_API_DATASETS.filter((dataset) => dataset !== "learner_roster_pii");
  }

  const eligible = reasons.length === 0 && allowedDatasets.length > 0;

  return {
    eligible,
    reasons,
    regulatoryMode,
    allowedDatasets,
  };
}

export async function resolvePartnerSchoolContext(
  admin: SupabaseClient,
  partnerId: string,
): Promise<ResolvedPartnerSchoolContext | null> {
  const { data: partnerData, error: partnerError } = await admin
    .from("partners")
    .select(
      "id, display_name, legal_name, partner_type, contact_email, country_code, metadata, compliance_status, payout_status, onboarding_status",
    )
    .eq("id", partnerId)
    .maybeSingle();
  if (partnerError) throw partnerError;

  const partner = (partnerData as PartnerRow | null) ?? null;
  if (!partner) return null;

  const accountClass = parsePartnerAccountClass(partner.metadata);
  const [jurisdictionRule, linkedOrganization] = await Promise.all([
    loadJurisdictionRule(admin, partner.country_code),
    resolveLinkedOrganization(admin, partner),
  ]);

  const seatSummary = linkedOrganization
    ? await getOrganizationSeatSummary(admin, linkedOrganization.id)
    : null;
  const classroomPolicy = linkedOrganization
    ? parseClassroomAccessPolicyFromMetadata(linkedOrganization.metadata)
    : null;

  const eligibility = resolveSchoolApiEligibility({
    partnerType: partner.partner_type,
    accountClass,
    countryCode: partner.country_code,
    jurisdictionRule,
    linkedOrganization,
    seatSummary,
  });

  return {
    partner,
    accountClass,
    linkedOrganization,
    seatSummary,
    jurisdictionRule,
    classroomPolicy,
    eligibility,
  };
}

export function normalizeSchoolApiScopes(
  requestedScopes: string[] | null | undefined,
  allowedDatasets: readonly SchoolApiDataset[],
) {
  const allowed = new Set(allowedDatasets);
  const requested = (requestedScopes ?? [])
    .map((scope) => scope.trim())
    .filter((scope): scope is SchoolApiDataset => (SCHOOL_API_DATASETS as readonly string[]).includes(scope));
  const filtered = requested.filter((scope) => allowed.has(scope));
  if (filtered.length === 0) {
    return [...allowedDatasets];
  }
  return Array.from(new Set(filtered));
}

export function generateSchoolApiKeyMaterial() {
  const raw = crypto.randomBytes(24).toString("base64url");
  const value = `koydo_sk_${raw}`;
  return {
    value,
    keyHash: hashSha256Hex(value),
    keyPrefix: value.slice(0, 16),
    keyPreview: `${value.slice(0, 16)}...${value.slice(-6)}`,
  };
}

export function extractSchoolApiKeyFromHeaders(headers: Headers) {
  const explicit =
    headers.get("x-koydo-school-api-key")
    ?? headers.get("x-api-key");
  if (explicit && explicit.trim().length > 8) {
    return explicit.trim();
  }

  const authHeader = headers.get("authorization");
  if (!authHeader) return null;
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match?.[1]) return null;
  const token = match[1].trim();
  return token.length > 8 ? token : null;
}

export function extractRequestCountryFromHeaders(headers: Headers) {
  const candidate =
    headers.get("x-vercel-ip-country")
    ?? headers.get("cf-ipcountry")
    ?? headers.get("cloudfront-viewer-country")
    ?? headers.get("x-appengine-country");
  if (!candidate) return null;
  const normalized = candidate.trim().toUpperCase().slice(0, 2);
  return /^[A-Z]{2}$/.test(normalized) ? normalized : null;
}

export function extractRequestTimeZoneFromHeaders(headers: Headers) {
  const candidate =
    headers.get("x-vercel-ip-timezone")
    ?? headers.get("cf-timezone")
    ?? headers.get("x-appengine-time-zone");
  if (!candidate) return null;
  const value = candidate.trim();
  return value.length >= 3 && value.length <= 80 ? value : null;
}

export function extractRequestIpFromHeaders(headers: Headers) {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || null;
  return headers.get("x-real-ip") ?? null;
}

export function buildSchoolApiUsageDocument(input: {
  appUrl: string;
  partnerDisplayName: string;
  partnerId: string;
  organizationId: string | null;
  regulatoryMode: SchoolApiRegulatoryMode;
  allowedDatasets: readonly SchoolApiDataset[];
}) {
  const baseUrl = input.appUrl.replace(/\/+$/, "");
  const datasets = input.allowedDatasets.map((dataset) => `- \`${dataset}\``).join("\n");
  const defaultDatasets = input.allowedDatasets.slice(0, 2).join(",");
  const datasetLine = defaultDatasets || "license_summary";
  return [
    `# School API Usage`,
    ``,
    `Partner: ${input.partnerDisplayName} (${input.partnerId})`,
    `Linked organization: ${input.organizationId ?? "not-linked"}`,
    `Regulatory mode: ${input.regulatoryMode}`,
    ``,
    `## Authentication`,
    `Generate API keys in School Portal and send key as:`,
    `- Header: \`x-koydo-school-api-key: <KEY>\``,
    `- Or: \`Authorization: Bearer <KEY>\``,
    ``,
    `## Endpoint`,
    `\`GET ${baseUrl}/api/school/v1/export?datasets=${datasetLine}\``,
    ``,
    `## Allowed datasets for your jurisdiction`,
    datasets || `- (none)`,
    ``,
    `## Example`,
    "```bash",
    `curl -sS "${baseUrl}/api/school/v1/export?datasets=${datasetLine}" \\`,
    `  -H "x-koydo-school-api-key: <YOUR_KEY>"`,
    "```",
    ``,
    `## Notes`,
    `- Access is gated by paid school account status (purchased seats > 0).`,
    `- Dataset availability is restricted by jurisdiction compliance rules.`,
    `- Every request is audited with country/timezone/IP and response metadata.`,
  ].join("\n");
}

export function isSchoolApiTablesMissingError(error: unknown) {
  const message =
    error && typeof error === "object" && "message" in error
      ? String((error as { message?: unknown }).message ?? "")
      : "";
  const lowered = message.toLowerCase();
  return (
    lowered.includes("partner_school_api_keys")
    || lowered.includes("partner_school_api_usage_logs")
    || (lowered.includes("relation") && lowered.includes("does not exist"))
    || lowered.includes("could not find the table")
  );
}

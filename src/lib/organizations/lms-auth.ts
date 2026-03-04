import crypto from "crypto";
import { z } from "zod";

export const LMS_PROVIDERS = [
  "google_classroom",
  "canvas",
  "schoology",
  "moodle",
  "clever",
  "lti_1p3",
] as const;

export type LmsProvider = (typeof LMS_PROVIDERS)[number];
export const lmsProviderSchema = z.enum(LMS_PROVIDERS);

export const LMS_AUTH_MODES = [
  "oauth2_authorization_code",
  "oauth2_authorization_code_pkce",
  "oauth2_client_credentials",
  "service_account",
  "lti_1p3",
] as const;

export type LmsAuthMode = (typeof LMS_AUTH_MODES)[number];
export const lmsAuthModeSchema = z.enum(LMS_AUTH_MODES);

export const LMS_CONNECTION_STATUSES = [
  "pending",
  "active",
  "expired",
  "revoked",
  "error",
] as const;

export type LmsConnectionStatus = (typeof LMS_CONNECTION_STATUSES)[number];
export const lmsConnectionStatusSchema = z.enum(LMS_CONNECTION_STATUSES);

const lmsScopeSchema = z.string().trim().min(1).max(200);

const lmsTokenMaterialSchema = z.object({
  accessToken: z.string().min(8).max(16_384),
  refreshToken: z.string().min(8).max(16_384).nullable().optional(),
  idToken: z.string().min(8).max(24_576).nullable().optional(),
  tokenType: z.string().trim().min(1).max(120).default("Bearer"),
  scopes: z.array(lmsScopeSchema).max(128).default([]),
  issuedAt: z.string().datetime(),
  expiresAt: z.string().datetime().nullable().optional(),
  refreshExpiresAt: z.string().datetime().nullable().optional(),
  lastRotatedAt: z.string().datetime().nullable().optional(),
  revokedAt: z.string().datetime().nullable().optional(),
  metadata: z.record(z.string(), z.unknown()).nullable().optional(),
});

export type LmsTokenMaterial = z.infer<typeof lmsTokenMaterialSchema>;

export const lmsAuthStatePayloadSchema = z.object({
  organizationId: z.string().trim().min(3).max(80),
  provider: lmsProviderSchema,
  authMode: lmsAuthModeSchema,
  nonce: z.string().trim().min(16).max(200),
  redirectTo: z.string().trim().min(1).max(500).nullable().optional(),
  issuedAt: z.string().datetime(),
  expiresAt: z.string().datetime(),
});

export type LmsAuthStatePayload = z.infer<typeof lmsAuthStatePayloadSchema>;

export const lmsOrganizationTokenRecordSchema = z.object({
  organizationId: z.string().trim().min(3).max(80),
  provider: lmsProviderSchema,
  authMode: lmsAuthModeSchema,
  status: lmsConnectionStatusSchema.default("pending"),
  externalTenantId: z.string().trim().min(1).max(200).nullable().optional(),
  externalUserId: z.string().trim().min(1).max(200).nullable().optional(),
  scopes: z.array(lmsScopeSchema).max(128).default([]),
  token: lmsTokenMaterialSchema,
  lastErrorCode: z.string().trim().min(1).max(120).nullable().optional(),
  lastErrorMessage: z.string().trim().min(1).max(240).nullable().optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export type LmsOrganizationTokenRecord = z.infer<typeof lmsOrganizationTokenRecordSchema>;

export type LmsTokenEndpointResponse = {
  access_token: string;
  token_type?: string | null;
  expires_in?: number | null;
  refresh_token?: string | null;
  refresh_expires_in?: number | null;
  id_token?: string | null;
  scope?: string | readonly string[] | null;
  [key: string]: unknown;
};

function normalizeScopeValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function toIsoFromOffsetSeconds(now: Date, offsetSeconds: number | null | undefined) {
  if (typeof offsetSeconds !== "number" || !Number.isFinite(offsetSeconds) || offsetSeconds <= 0) {
    return null;
  }
  return new Date(now.getTime() + Math.round(offsetSeconds * 1000)).toISOString();
}

function encodeBase64Url(payload: string) {
  return Buffer.from(payload, "utf8").toString("base64url");
}

function decodeBase64Url(payload: string) {
  return Buffer.from(payload, "base64url").toString("utf8");
}

export function normalizeLmsScopeList(scopes: string | readonly string[] | null | undefined) {
  const source =
    typeof scopes === "string"
      ? scopes
          .split(/[,\s]+/)
          .map((value) => value.trim())
          .filter((value) => value.length > 0)
      : Array.isArray(scopes)
        ? scopes
        : [];

  const output: string[] = [];
  const seen = new Set<string>();
  for (const value of source) {
    const normalized = normalizeScopeValue(String(value ?? ""));
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    output.push(normalized);
  }
  return output;
}

export function hashLmsToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export function buildLmsTokenPreview(token: string) {
  if (!token) return "";
  if (token.length <= 12) return `${token.slice(0, 4)}...${token.slice(-2)}`;
  return `${token.slice(0, 8)}...${token.slice(-4)}`;
}

export function generateLmsStateNonce() {
  return crypto.randomBytes(18).toString("base64url");
}

export function buildLmsAuthStatePayload(input: {
  organizationId: string;
  provider: LmsProvider;
  authMode: LmsAuthMode;
  redirectTo?: string | null;
  ttlSeconds?: number;
  nonce?: string;
  now?: Date;
}) {
  const now = input.now ?? new Date();
  const ttlSeconds = Math.max(60, Math.min(1800, Math.round(input.ttlSeconds ?? 600)));
  const payload = {
    organizationId: input.organizationId.trim(),
    provider: input.provider,
    authMode: input.authMode,
    nonce: input.nonce ?? generateLmsStateNonce(),
    redirectTo: input.redirectTo?.trim() ? input.redirectTo.trim() : null,
    issuedAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + ttlSeconds * 1000).toISOString(),
  };
  return lmsAuthStatePayloadSchema.parse(payload);
}

export function encodeLmsAuthState(payload: LmsAuthStatePayload) {
  const normalized = lmsAuthStatePayloadSchema.parse(payload);
  return encodeBase64Url(JSON.stringify(normalized));
}

export function decodeLmsAuthState(rawState: string) {
  if (!rawState || !rawState.trim()) {
    return {
      ok: false as const,
      error: "empty_state",
    };
  }

  try {
    const decoded = JSON.parse(decodeBase64Url(rawState.trim())) as unknown;
    const parsed = lmsAuthStatePayloadSchema.safeParse(decoded);
    if (!parsed.success) {
      return {
        ok: false as const,
        error: "invalid_state_payload",
      };
    }

    return {
      ok: true as const,
      value: parsed.data,
    };
  } catch {
    return {
      ok: false as const,
      error: "invalid_state_encoding",
    };
  }
}

export function isLmsAuthStateExpired(
  payload: Pick<LmsAuthStatePayload, "expiresAt">,
  options?: { now?: Date; skewSeconds?: number },
) {
  const now = options?.now ?? new Date();
  const skewMs = Math.max(0, Math.round((options?.skewSeconds ?? 30) * 1000));
  const expiresAtMs = Date.parse(payload.expiresAt);
  if (!Number.isFinite(expiresAtMs)) return true;
  return expiresAtMs <= now.getTime() - skewMs;
}

export function buildLmsTokenMaterialFromEndpointResponse(
  response: LmsTokenEndpointResponse,
  options?: {
    now?: Date;
    fallbackScopes?: readonly string[];
    fallbackTokenType?: string;
  },
) {
  const now = options?.now ?? new Date();
  const rawScopes = normalizeLmsScopeList(response.scope ?? options?.fallbackScopes ?? []);
  const parsed = lmsTokenMaterialSchema.parse({
    accessToken: response.access_token,
    refreshToken: response.refresh_token ?? null,
    idToken: response.id_token ?? null,
    tokenType: (response.token_type ?? options?.fallbackTokenType ?? "Bearer").trim(),
    scopes: rawScopes,
    issuedAt: now.toISOString(),
    expiresAt: toIsoFromOffsetSeconds(now, response.expires_in ?? null),
    refreshExpiresAt: toIsoFromOffsetSeconds(now, response.refresh_expires_in ?? null),
    lastRotatedAt: null,
    revokedAt: null,
    metadata: null,
  });

  return parsed;
}

function parseIsoDate(value: string | null | undefined) {
  if (!value) return Number.NaN;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

export function isLmsAccessTokenExpired(
  token: Pick<LmsTokenMaterial, "expiresAt" | "revokedAt">,
  options?: { now?: Date; skewSeconds?: number },
) {
  if (token.revokedAt) return true;
  if (!token.expiresAt) return false;
  const expiresAtMs = parseIsoDate(token.expiresAt);
  if (!Number.isFinite(expiresAtMs)) return true;
  const skewMs = Math.max(0, Math.round((options?.skewSeconds ?? 45) * 1000));
  const now = options?.now ?? new Date();
  return expiresAtMs <= now.getTime() + skewMs;
}

export function shouldRefreshLmsToken(
  token: Pick<LmsTokenMaterial, "expiresAt" | "refreshToken" | "revokedAt">,
  options?: { now?: Date; refreshWindowSeconds?: number },
) {
  if (!token.refreshToken || token.revokedAt) return false;
  if (!token.expiresAt) return false;
  const expiresAtMs = parseIsoDate(token.expiresAt);
  if (!Number.isFinite(expiresAtMs)) return true;
  const now = options?.now ?? new Date();
  const refreshWindowMs = Math.max(30, Math.round(options?.refreshWindowSeconds ?? 300)) * 1000;
  return expiresAtMs <= now.getTime() + refreshWindowMs;
}

export function resolveLmsConnectionStatus(
  record: Pick<LmsOrganizationTokenRecord, "status" | "token">,
  options?: { now?: Date },
): LmsConnectionStatus {
  if (record.token.revokedAt) return "revoked";
  if (record.status === "error") return "error";
  if (record.status === "pending") return "pending";
  if (isLmsAccessTokenExpired(record.token, { now: options?.now })) return "expired";
  return "active";
}

export function parseLmsOrganizationTokenRecord(input: unknown) {
  return lmsOrganizationTokenRecordSchema.safeParse(input);
}

import { randomBytes } from "crypto";
import type { SupabaseClient } from "@supabase/supabase-js";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { decryptSecret, encryptSecret, hashSha256Hex, timingSafeHashCompare } from "@/lib/security/secret-crypto";
import { buildTotpUri, generateTotpSecret, verifyTotpCode } from "@/lib/security/totp";
import { sendParentSecurityChallengeEmail } from "@/lib/email/parent-security-email";
import { sendSmsViaTwilio } from "@/lib/sms/twilio";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const CODE_LENGTH = 6;
const DEFAULT_EXPIRY_MINUTES = 10;

const PARENT_CHANGE_SCOPES = new Set([
  "student_profile_settings",
  "support_sensitive_change",
  "account_delete",
  "account_email_change",
] as const);

const PARENT_CHANGE_CHANNELS = new Set(["email", "sms", "authenticator"] as const);

export type ParentChangeScope =
  | "student_profile_settings"
  | "support_sensitive_change"
  | "account_delete"
  | "account_email_change";

export type ParentChangeChannel = "email" | "sms" | "authenticator";

type ParentSecurityFactorRow = {
  id: string;
  factor_type: "totp" | "email" | "sms";
  secret_encrypted: string | null;
  email_address: string | null;
  phone_number: string | null;
  verified_at: string | null;
  disabled_at: string | null;
};

type ParentChallengeRow = {
  id: string;
  user_id: string;
  scope: ParentChangeScope;
  target_ref: string | null;
  channel: ParentChangeChannel;
  code_hash: string;
  salt: string;
  attempt_count: number;
  max_attempts: number;
  status: "pending" | "verified" | "expired" | "failed" | "consumed";
  expires_at: string;
  verified_at: string | null;
  consumed_at: string | null;
  metadata: Record<string, unknown> | null;
};

function nowIso() {
  return new Date().toISOString();
}

function normalizeScope(scope: string): ParentChangeScope {
  if (PARENT_CHANGE_SCOPES.has(scope as ParentChangeScope)) {
    return scope as ParentChangeScope;
  }
  throw new Error(`Unsupported parent change scope: ${scope}`);
}

function normalizeChannel(channel: string): ParentChangeChannel {
  if (PARENT_CHANGE_CHANNELS.has(channel as ParentChangeChannel)) {
    return channel as ParentChangeChannel;
  }
  throw new Error(`Unsupported parent challenge channel: ${channel}`);
}

function normalizeCode(code: string) {
  return code.replace(/[^0-9]/g, "");
}

function randomNumericCode(length: number) {
  const digits = "0123456789";
  let code = "";
  const bytes = randomBytes(length);
  for (const byte of bytes) {
    code += digits[byte % 10] ?? "0";
  }
  return code.slice(0, length);
}

function parentChallengePepper() {
  return (
    serverEnv.PARENT_SECURITY_CODE_PEPPER
    || serverEnv.OWNER_SECURITY_CODE_PEPPER
    || serverEnv.PARENT_SECURITY_ENCRYPTION_KEY
    || serverEnv.OWNER_SECURITY_ENCRYPTION_KEY
    || ""
  );
}

function parentEncryptionKey() {
  const key = serverEnv.PARENT_SECURITY_ENCRYPTION_KEY || serverEnv.OWNER_SECURITY_ENCRYPTION_KEY;
  if (!key || key.length < 16) {
    throw new Error("PARENT_SECURITY_ENCRYPTION_KEY (or OWNER_SECURITY_ENCRYPTION_KEY fallback) must be configured.");
  }
  return key;
}

function buildChallengeHash(code: string, salt: string) {
  return hashSha256Hex(`${code}:${salt}:${parentChallengePepper()}`);
}

async function getActiveParentTotpFactor(
  admin: SupabaseClient,
  userId: string,
): Promise<ParentSecurityFactorRow | null> {
  const { data, error } = await admin
    .from("parent_security_factors")
    .select("id,factor_type,secret_encrypted,email_address,phone_number,verified_at,disabled_at")
    .eq("user_id", userId)
    .eq("factor_type", "totp")
    .is("disabled_at", null)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle<ParentSecurityFactorRow>();

  if (error) throw new Error(error.message);
  return data ?? null;
}

export async function provisionParentTotpFactor({
  userId,
  userEmail,
  label,
  adminClient,
}: {
  userId: string;
  userEmail: string | null;
  label?: string | null;
  adminClient?: SupabaseClient;
}) {
  const admin = adminClient ?? createSupabaseAdminClient();
  const secret = generateTotpSecret();
  const encryptedSecret = encryptSecret(secret, parentEncryptionKey());
  const normalizedLabel = label?.trim() ? label.trim().slice(0, 80) : "Parent Authenticator";
  const existingFactor = await getActiveParentTotpFactor(admin, userId);
  const now = nowIso();

  let factorId: string;
  if (existingFactor) {
    const { error } = await admin
      .from("parent_security_factors")
      .update({
        label: normalizedLabel,
        secret_encrypted: encryptedSecret,
        verified_at: existingFactor.verified_at ?? now,
        last_used_at: null,
        metadata: {
          rotatedAt: now,
        },
      })
      .eq("id", existingFactor.id);
    if (error) throw new Error(error.message);
    factorId = existingFactor.id;
  } else {
    const { data, error } = await admin
      .from("parent_security_factors")
      .insert({
        user_id: userId,
        factor_type: "totp",
        label: normalizedLabel,
        secret_encrypted: encryptedSecret,
      })
      .select("id")
      .single<{ id: string }>();
    if (error || !data?.id) {
      throw new Error(error?.message ?? "Failed to create parent authenticator factor.");
    }
    factorId = data.id;
  }

  const issuer = serverEnv.OWNER_SECURITY_ISSUER?.trim() || "Koydo Parent Security";
  const otpauthUri = buildTotpUri({
    issuer,
    accountName: userEmail ?? `parent-${userId.slice(0, 8)}`,
    secret,
  });

  return {
    factorId,
    secret,
    otpauthUri,
  };
}

async function createChallengeRow({
  admin,
  userId,
  scope,
  targetRef,
  channel,
  codeHash,
  salt,
  expiresInMinutes,
  metadata,
}: {
  admin: SupabaseClient;
  userId: string;
  scope: ParentChangeScope;
  targetRef?: string | null;
  channel: ParentChangeChannel;
  codeHash: string;
  salt: string;
  expiresInMinutes: number;
  metadata?: Record<string, unknown>;
}) {
  const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000).toISOString();
  const { data, error } = await admin
    .from("parent_account_change_challenges")
    .insert({
      user_id: userId,
      scope,
      target_ref: targetRef ?? null,
      channel,
      code_hash: codeHash,
      salt,
      expires_at: expiresAt,
      metadata: metadata ?? {},
    })
    .select("id,expires_at,channel,scope,status")
    .single<{
      id: string;
      expires_at: string;
      channel: ParentChangeChannel;
      scope: ParentChangeScope;
      status: ParentChallengeRow["status"];
    }>();
  if (error || !data) throw new Error(error?.message ?? "Failed to create parent change challenge.");
  return data;
}

function isProductionRuntime() {
  const runtime = (process.env.APP_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV || "").toLowerCase();
  return runtime === "production";
}

export async function createParentChangeChallenge({
  userId,
  userEmail,
  scope,
  channel,
  targetRef,
  smsPhoneNumber,
  adminClient,
}: {
  userId: string;
  userEmail: string | null;
  scope: string;
  channel: string;
  targetRef?: string | null;
  smsPhoneNumber?: string | null;
  adminClient?: SupabaseClient;
}) {
  const normalizedScope = normalizeScope(scope);
  const normalizedChannel = normalizeChannel(channel);
  const admin = adminClient ?? createSupabaseAdminClient();
  const expiresInMinutes = DEFAULT_EXPIRY_MINUTES;

  if (normalizedChannel === "authenticator") {
    const factor = await getActiveParentTotpFactor(admin, userId);
    if (!factor?.secret_encrypted) {
      throw new Error("No authenticator factor is configured. Provision a factor before using this channel.");
    }

    const salt = randomBytes(8).toString("hex");
    const codeHash = buildChallengeHash("authenticator", salt);
    const row = await createChallengeRow({
      admin,
      userId,
      scope: normalizedScope,
      targetRef,
      channel: normalizedChannel,
      codeHash,
      salt,
      expiresInMinutes,
      metadata: { mode: "totp" },
    });

    return {
      challengeId: row.id,
      scope: row.scope,
      channel: row.channel,
      expiresAt: row.expires_at,
      delivered: true,
      deliveryMode: "authenticator",
      deliveryReason: null as string | null,
      debugCode: undefined as string | undefined,
    };
  }

  const code = randomNumericCode(CODE_LENGTH);
  const salt = randomBytes(8).toString("hex");
  const codeHash = buildChallengeHash(code, salt);
  const row = await createChallengeRow({
    admin,
    userId,
    scope: normalizedScope,
    targetRef,
    channel: normalizedChannel,
    codeHash,
    salt,
    expiresInMinutes,
  });

  let delivered = false;
  let deliveryMode: string = "simulation";
  let deliveryReason: string | null = null;
  if (normalizedChannel === "email") {
    if (!userEmail) {
      throw new Error("A verified account email is required for email verification.");
    }
    const delivery = await sendParentSecurityChallengeEmail({
      toEmail: userEmail,
      code,
      expiresInMinutes,
      requesterEmail: userEmail,
    });
    delivered = delivery.delivered;
    deliveryMode = delivery.mode;
    deliveryReason = delivery.reason;
  } else if (normalizedChannel === "sms") {
    if (!smsPhoneNumber) {
      throw new Error("SMS phone number is required for sms verification.");
    }
    const delivery = await sendSmsViaTwilio({
      to: smsPhoneNumber,
      body: `Koydo verification code: ${code}. Expires in ${expiresInMinutes} minutes.`,
    });
    delivered = delivery.delivered;
    deliveryMode = delivery.mode;
    deliveryReason = delivery.reason;
  }

  const debugCode = !isProductionRuntime() && deliveryMode === "simulation" ? code : undefined;

  return {
    challengeId: row.id,
    scope: row.scope,
    channel: row.channel,
    expiresAt: row.expires_at,
    delivered,
    deliveryMode,
    deliveryReason,
    debugCode,
  };
}

export async function verifyParentChangeChallenge({
  userId,
  challengeId,
  scope,
  code,
  adminClient,
}: {
  userId: string;
  challengeId: string;
  scope: string;
  code: string;
  adminClient?: SupabaseClient;
}) {
  const normalizedScope = normalizeScope(scope);
  const normalizedCode = normalizeCode(code);
  if (!normalizedCode) {
    throw new Error("Verification code is required.");
  }

  const admin = adminClient ?? createSupabaseAdminClient();
  const { data, error } = await admin
    .from("parent_account_change_challenges")
    .select(
      "id,user_id,scope,target_ref,channel,code_hash,salt,attempt_count,max_attempts,status,expires_at,verified_at,consumed_at,metadata",
    )
    .eq("id", challengeId)
    .eq("user_id", userId)
    .maybeSingle<ParentChallengeRow>();

  if (error || !data) {
    throw new Error("Challenge was not found.");
  }
  if (data.status === "consumed") {
    throw new Error("Challenge has already been consumed.");
  }
  if (data.status === "failed") {
    throw new Error("Challenge is locked due to too many invalid attempts.");
  }
  if (new Date(data.expires_at).getTime() <= Date.now()) {
    await admin
      .from("parent_account_change_challenges")
      .update({ status: "expired", updated_at: nowIso() })
      .eq("id", data.id);
    throw new Error("Challenge has expired.");
  }
  if (!(data.scope === normalizedScope)) {
    throw new Error("Challenge scope mismatch.");
  }

  let verified = false;
  if (data.channel === "authenticator") {
    const factor = await getActiveParentTotpFactor(admin, userId);
    if (!factor?.secret_encrypted) {
      throw new Error("Authenticator factor is not configured.");
    }
    const secret = decryptSecret(factor.secret_encrypted, parentEncryptionKey());
    verified = verifyTotpCode(secret, normalizedCode);
    if (verified) {
      await admin
        .from("parent_security_factors")
        .update({
          last_used_at: nowIso(),
          verified_at: factor.verified_at ?? nowIso(),
        })
        .eq("id", factor.id);
    }
  } else {
    const expectedHash = buildChallengeHash(normalizedCode, data.salt);
    verified = timingSafeHashCompare(expectedHash, data.code_hash);
  }

  if (!verified) {
    const nextAttemptCount = data.attempt_count + 1;
    const nextStatus = nextAttemptCount >= data.max_attempts ? "failed" : "pending";
    await admin
      .from("parent_account_change_challenges")
      .update({
        attempt_count: nextAttemptCount,
        status: nextStatus,
        updated_at: nowIso(),
      })
      .eq("id", data.id);
    throw new Error(nextStatus === "failed" ? "Challenge locked after maximum attempts." : "Verification code is invalid.");
  }

  const verifiedAt = nowIso();
  await admin
    .from("parent_account_change_challenges")
    .update({
      status: "verified",
      verified_at: verifiedAt,
      attempt_count: data.attempt_count + 1,
      updated_at: verifiedAt,
    })
    .eq("id", data.id);

  return {
    challengeId: data.id,
    scope: data.scope,
    channel: data.channel,
    verifiedAt,
    targetRef: data.target_ref,
  };
}

export async function consumeParentChangeChallenge({
  userId,
  challengeId,
  scope,
  adminClient,
}: {
  userId: string;
  challengeId: string;
  scope: string;
  adminClient?: SupabaseClient;
}) {
  const normalizedScope = normalizeScope(scope);
  const admin = adminClient ?? createSupabaseAdminClient();
  const { data, error } = await admin
    .from("parent_account_change_challenges")
    .select("id,scope,status,expires_at,consumed_at")
    .eq("id", challengeId)
    .eq("user_id", userId)
    .maybeSingle<{
      id: string;
      scope: ParentChangeScope;
      status: ParentChallengeRow["status"];
      expires_at: string;
      consumed_at: string | null;
    }>();
  if (error || !data) {
    throw new Error("Verification challenge was not found.");
  }
  if (data.scope !== normalizedScope) {
    throw new Error("Verification challenge scope mismatch.");
  }
  if (data.consumed_at || data.status === "consumed") {
    throw new Error("Verification challenge has already been consumed.");
  }
  if (new Date(data.expires_at).getTime() <= Date.now()) {
    throw new Error("Verification challenge has expired.");
  }
  if (data.status !== "verified") {
    throw new Error("Verification challenge is not verified.");
  }

  const consumedAt = nowIso();
  const { error: updateError } = await admin
    .from("parent_account_change_challenges")
    .update({
      status: "consumed",
      consumed_at: consumedAt,
      updated_at: consumedAt,
    })
    .eq("id", data.id);

  if (updateError) {
    console.error("Failed to consume parent change challenge.", toSafeErrorRecord(updateError));
    throw new Error(updateError.message);
  }

  return {
    challengeId: data.id,
    consumedAt,
  };
}

import { createHmac, randomBytes } from "crypto";

type VerifyYubikeyOtpInput = {
  otp: string;
  clientId: string;
  secretKey?: string | null;
  apiUrl?: string;
  timeoutMs?: number;
};

export type VerifyYubikeyOtpResult = {
  valid: boolean;
  publicId: string | null;
  status: string;
  reason: string | null;
};

const YUBIKEY_OTP_PATTERN = /^[cbdefghijklnrtuv]{32,64}$/i;

function parseResponse(text: string) {
  const map = new Map<string, string>();
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const separator = trimmed.indexOf("=");
    if (separator < 0) continue;
    const key = trimmed.slice(0, separator);
    const value = trimmed.slice(separator + 1);
    map.set(key, value);
  }
  return map;
}

function verifyResponseSignature(fields: Map<string, string>, secretKey: string) {
  const signature = fields.get("h");
  if (!signature) return false;

  const lines: string[] = [];
  for (const [key, value] of [...fields.entries()].sort(([left], [right]) => left.localeCompare(right))) {
    if (key === "h") continue;
    lines.push(`${key}=${value}`);
  }
  const serialized = lines.join("\n");

  const normalizedSecret = secretKey.trim();
  const secretBuffer = Buffer.from(normalizedSecret, "base64");
  if (secretBuffer.length === 0) return false;

  const computed = createHmac("sha1", secretBuffer).update(serialized, "utf8").digest("base64");
  return computed === signature;
}

export function extractYubikeyPublicId(otp: string) {
  if (!YUBIKEY_OTP_PATTERN.test(otp)) return null;
  if (otp.length < 12) return null;
  return otp.slice(0, 12);
}

export async function verifyYubikeyOtp({
  otp,
  clientId,
  secretKey,
  apiUrl = "https://api.yubico.com/wsapi/2.0/verify",
  timeoutMs = 7000,
}: VerifyYubikeyOtpInput): Promise<VerifyYubikeyOtpResult> {
  const normalizedOtp = otp.trim();
  const publicId = extractYubikeyPublicId(normalizedOtp);
  if (!publicId) {
    return {
      valid: false,
      publicId: null,
      status: "BAD_OTP",
      reason: "OTP format is invalid.",
    };
  }

  const nonce = randomBytes(16).toString("hex");
  const params = new URLSearchParams({
    id: clientId,
    otp: normalizedOtp,
    nonce,
    timestamp: "1",
    sl: "secure",
    timeout: "6",
  });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  let responseText = "";
  try {
    const response = await fetch(`${apiUrl}?${params.toString()}`, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
    });
    responseText = await response.text();
  } catch (error) {
    return {
      valid: false,
      publicId,
      status: "NETWORK_ERROR",
      reason: error instanceof Error ? error.message : "Failed to verify YubiKey OTP.",
    };
  } finally {
    clearTimeout(timer);
  }

  const fields = parseResponse(responseText);
  const status = fields.get("status") ?? "UNKNOWN";
  const responseOtp = fields.get("otp");
  const responseNonce = fields.get("nonce");

  if (status !== "OK") {
    return {
      valid: false,
      publicId,
      status,
      reason: `YubiKey verification status: ${status}.`,
    };
  }
  if (responseOtp !== normalizedOtp || responseNonce !== nonce) {
    return {
      valid: false,
      publicId,
      status: "MISMATCH",
      reason: "YubiKey response did not match requested OTP/nonce.",
    };
  }

  if (secretKey && !verifyResponseSignature(fields, secretKey)) {
    return {
      valid: false,
      publicId,
      status: "BAD_SIGNATURE",
      reason: "Failed to verify YubiKey response signature.",
    };
  }

  return {
    valid: true,
    publicId,
    status,
    reason: null,
  };
}

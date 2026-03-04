import { createHmac, randomBytes } from "crypto";

const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const DEFAULT_PERIOD_SECONDS = 30;
const DEFAULT_DIGITS = 6;
const DEFAULT_WINDOW = 1;

type TotpAlgorithm = "sha1" | "sha256" | "sha512";

type TotpOptions = {
  timestampMs?: number;
  periodSeconds?: number;
  digits?: number;
  algorithm?: TotpAlgorithm;
};

type TotpVerifyOptions = TotpOptions & {
  window?: number;
};

type TotpUriInput = {
  issuer: string;
  accountName: string;
  secret: string;
  digits?: number;
  periodSeconds?: number;
  algorithm?: TotpAlgorithm;
};

function base32Encode(input: Buffer) {
  let bits = 0;
  let value = 0;
  let output = "";

  for (const byte of input) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31] ?? "";
      bits -= 5;
    }
  }

  if (bits > 0) {
    output += BASE32_ALPHABET[(value << (5 - bits)) & 31] ?? "";
  }

  return output;
}

function base32Decode(input: string) {
  const sanitized = input.toUpperCase().replace(/[^A-Z2-7]/g, "");
  let bits = 0;
  let value = 0;
  const bytes: number[] = [];

  for (const char of sanitized) {
    const index = BASE32_ALPHABET.indexOf(char);
    if (index < 0) continue;
    value = (value << 5) | index;
    bits += 5;
    if (bits >= 8) {
      bytes.push((value >>> (bits - 8)) & 0xff);
      bits -= 8;
    }
  }

  return Buffer.from(bytes);
}

function hotp(secret: Buffer, counter: number, digits: number, algorithm: TotpAlgorithm) {
  const counterBuffer = Buffer.alloc(8);
  const high = Math.floor(counter / 0x1_0000_0000);
  const low = counter >>> 0;
  counterBuffer.writeUInt32BE(high, 0);
  counterBuffer.writeUInt32BE(low, 4);

  const hmac = createHmac(algorithm, secret).update(counterBuffer).digest();
  const offset = hmac[hmac.length - 1]! & 0x0f;
  const binaryCode =
    ((hmac[offset]! & 0x7f) << 24) |
    ((hmac[offset + 1]! & 0xff) << 16) |
    ((hmac[offset + 2]! & 0xff) << 8) |
    (hmac[offset + 3]! & 0xff);
  const otp = binaryCode % 10 ** digits;
  return String(otp).padStart(digits, "0");
}

function normalizeCode(code: string) {
  return code.replace(/[^0-9]/g, "");
}

export function generateTotpSecret(sizeBytes = 20) {
  const clamped = Math.max(16, Math.min(64, Math.trunc(sizeBytes)));
  return base32Encode(randomBytes(clamped));
}

export function generateTotpCode(secret: string, options: TotpOptions = {}) {
  const periodSeconds = options.periodSeconds ?? DEFAULT_PERIOD_SECONDS;
  const digits = options.digits ?? DEFAULT_DIGITS;
  const algorithm = options.algorithm ?? "sha1";
  const timestampMs = options.timestampMs ?? Date.now();
  const counter = Math.floor(timestampMs / 1000 / periodSeconds);
  const decodedSecret = base32Decode(secret);
  if (decodedSecret.length === 0) {
    return "";
  }
  return hotp(decodedSecret, counter, digits, algorithm);
}

export function verifyTotpCode(secret: string, code: string, options: TotpVerifyOptions = {}) {
  const digits = options.digits ?? DEFAULT_DIGITS;
  const candidate = normalizeCode(code);
  if (candidate.length !== digits) {
    return false;
  }

  const periodSeconds = options.periodSeconds ?? DEFAULT_PERIOD_SECONDS;
  const algorithm = options.algorithm ?? "sha1";
  const window = Math.max(0, Math.min(10, options.window ?? DEFAULT_WINDOW));
  const timestampMs = options.timestampMs ?? Date.now();
  const counter = Math.floor(timestampMs / 1000 / periodSeconds);
  const decodedSecret = base32Decode(secret);
  if (decodedSecret.length === 0) {
    return false;
  }

  for (let drift = -window; drift <= window; drift += 1) {
    const driftedCounter = counter + drift;
    if (driftedCounter < 0) continue;
    if (hotp(decodedSecret, driftedCounter, digits, algorithm) === candidate) {
      return true;
    }
  }
  return false;
}

export function buildTotpUri({
  issuer,
  accountName,
  secret,
  digits = DEFAULT_DIGITS,
  periodSeconds = DEFAULT_PERIOD_SECONDS,
  algorithm = "sha1",
}: TotpUriInput) {
  const safeIssuer = issuer.trim();
  const safeAccount = accountName.trim();
  const label = encodeURIComponent(`${safeIssuer}:${safeAccount}`);
  const query = new URLSearchParams({
    secret,
    issuer: safeIssuer,
    algorithm: algorithm.toUpperCase(),
    digits: String(digits),
    period: String(periodSeconds),
  });
  return `otpauth://totp/${label}?${query.toString()}`;
}

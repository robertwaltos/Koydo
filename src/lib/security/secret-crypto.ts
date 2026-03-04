import { createCipheriv, createDecipheriv, createHash, randomBytes, timingSafeEqual } from "crypto";

const ENCRYPTION_VERSION = "v1";
const IV_BYTES = 12;
const AUTH_TAG_BYTES = 16;

function toBase64Url(value: Buffer) {
  return value.toString("base64url");
}

function fromBase64Url(value: string) {
  return Buffer.from(value, "base64url");
}

function deriveAesKey(keyMaterial: string) {
  return createHash("sha256").update(keyMaterial, "utf8").digest();
}

export function hashSha256Hex(value: string) {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

export function timingSafeHashCompare(leftHex: string, rightHex: string) {
  const left = Buffer.from(leftHex, "hex");
  const right = Buffer.from(rightHex, "hex");
  if (left.length === 0 || right.length === 0 || left.length !== right.length) {
    return false;
  }
  try {
    return timingSafeEqual(left, right);
  } catch {
    return false;
  }
}

export function encryptSecret(plaintext: string, keyMaterial: string) {
  const key = deriveAesKey(keyMaterial);
  const iv = randomBytes(IV_BYTES);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const ciphertext = Buffer.concat([
    cipher.update(Buffer.from(plaintext, "utf8")),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();
  return [
    ENCRYPTION_VERSION,
    toBase64Url(iv),
    toBase64Url(authTag),
    toBase64Url(ciphertext),
  ].join(".");
}

export function decryptSecret(payload: string, keyMaterial: string) {
  const [version, ivPart, authTagPart, ciphertextPart] = payload.split(".");
  if (version !== ENCRYPTION_VERSION || !ivPart || !authTagPart || !ciphertextPart) {
    throw new Error("Unsupported encrypted payload version.");
  }
  const iv = fromBase64Url(ivPart);
  const authTag = fromBase64Url(authTagPart);
  const ciphertext = fromBase64Url(ciphertextPart);
  if (iv.length !== IV_BYTES || authTag.length !== AUTH_TAG_BYTES || ciphertext.length === 0) {
    throw new Error("Invalid encrypted payload shape.");
  }

  const key = deriveAesKey(keyMaterial);
  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(authTag);
  const plaintext = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final(),
  ]);
  return plaintext.toString("utf8");
}

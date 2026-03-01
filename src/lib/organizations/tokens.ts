import crypto from "crypto";

export function hashProvisioningToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export function generateProvisioningToken() {
  const raw = crypto.randomBytes(18).toString("base64url");
  const token = `org_${raw}`;
  return {
    token,
    tokenHash: hashProvisioningToken(token),
    tokenPreview: `${token.slice(0, 10)}...${token.slice(-6)}`,
  };
}

export function buildOrganizationProvisioningUrl(baseUrl: string, token: string) {
  const origin = baseUrl.replace(/\/+$/, "");
  const encoded = encodeURIComponent(token);
  return `${origin}/org/provision?token=${encoded}`;
}

export function buildOrganizationInviteUrl(baseUrl: string, token: string) {
  const origin = baseUrl.replace(/\/+$/, "");
  const encoded = encodeURIComponent(token);
  return `${origin}/org/invite?token=${encoded}`;
}

export function generateGiftCode() {
  const middle = crypto.randomBytes(8).toString("hex").toUpperCase();
  const code = `KOYDO-GIFT-${middle}`;
  const hash = crypto.createHash("sha256").update(code).digest("hex");
  return {
    code,
    hash,
    preview: `${code.slice(0, 14)}...${code.slice(-4)}`,
  };
}

export function generateGiftCodeFromSeed(seed: string) {
  const digest = crypto.createHash("sha256").update(seed).digest("hex").toUpperCase();
  const middle = digest.slice(0, 16);
  const code = `KOYDO-GIFT-${middle}`;
  const hash = crypto.createHash("sha256").update(code).digest("hex");
  return {
    code,
    hash,
    preview: `${code.slice(0, 14)}...${code.slice(-4)}`,
  };
}

export function hashInviteToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export function generateOrganizationInviteToken() {
  const raw = crypto.randomBytes(22).toString("base64url");
  const token = `inv_${raw}`;
  return {
    token,
    tokenHash: hashInviteToken(token),
    tokenPreview: `${token.slice(0, 10)}...${token.slice(-6)}`,
  };
}

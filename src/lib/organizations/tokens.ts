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


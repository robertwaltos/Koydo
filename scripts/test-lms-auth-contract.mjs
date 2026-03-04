import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/organizations/lms-auth.ts");
const require = createRequire(import.meta.url);

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function loadTranspiledTsModule(filePath, mocks = {}) {
  const source = readRequiredFile(filePath);
  const transpiled = typescript.transpileModule(source, {
    compilerOptions: {
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2020,
      esModuleInterop: true,
      importsNotUsedAsValues: typescript.ImportsNotUsedAsValues.Remove,
    },
    fileName: filePath,
  }).outputText;

  const cjsModule = { exports: {} };
  const wrapped = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    transpiled,
  );

  wrapped(
    cjsModule.exports,
    (specifier) => {
      if (specifier in mocks) return mocks[specifier];
      if (specifier === "zod") return require("zod");
      if (specifier === "crypto" || specifier === "node:crypto") return require("node:crypto");
      throw new Error(`Unexpected runtime dependency \"${specifier}\".`);
    },
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

function addSeconds(baseDate, seconds) {
  return new Date(baseDate.getTime() + seconds * 1000).toISOString();
}

function main() {
  const contract = loadTranspiledTsModule(MODULE_PATH);

  assert.ok(Array.isArray(contract.LMS_PROVIDERS));
  assert.ok(contract.LMS_PROVIDERS.includes("google_classroom"));
  assert.ok(Array.isArray(contract.LMS_AUTH_MODES));
  assert.equal(typeof contract.normalizeLmsScopeList, "function");
  assert.equal(typeof contract.buildLmsTokenMaterialFromEndpointResponse, "function");
  assert.equal(typeof contract.resolveLmsConnectionStatus, "function");
  console.log("PASS: LMS auth contract exports");

  const scopes = contract.normalizeLmsScopeList(" roster.read  , roster.write   roster.read ");
  assert.deepEqual(scopes, ["roster.read", "roster.write"]);
  console.log("PASS: scope normalization contract");

  const now = new Date("2026-03-04T12:00:00.000Z");
  const token = contract.buildLmsTokenMaterialFromEndpointResponse(
    {
      access_token: "access-token-abcdefghijklmnopqrstuvwxyz",
      refresh_token: "refresh-token-abcdefghijklmnopqrstuvwxyz",
      token_type: "Bearer",
      expires_in: 600,
      refresh_expires_in: 3600,
      scope: "roster.read roster.write",
    },
    { now },
  );
  assert.equal(token.tokenType, "Bearer");
  assert.equal(token.scopes.length, 2);
  assert.equal(token.issuedAt, now.toISOString());
  assert.equal(typeof token.expiresAt, "string");
  assert.equal(typeof token.refreshExpiresAt, "string");
  console.log("PASS: token material parsing contract");

  const notExpired = contract.isLmsAccessTokenExpired(
    { expiresAt: addSeconds(now, 120), revokedAt: null },
    { now },
  );
  assert.equal(notExpired, false);

  const expired = contract.isLmsAccessTokenExpired(
    { expiresAt: addSeconds(now, -20), revokedAt: null },
    { now },
  );
  assert.equal(expired, true);
  console.log("PASS: token expiry contract");

  const shouldRefresh = contract.shouldRefreshLmsToken(
    {
      expiresAt: addSeconds(now, 120),
      refreshToken: "refresh-token-abcdefghijklmnopqrstuvwxyz",
      revokedAt: null,
    },
    { now, refreshWindowSeconds: 300 },
  );
  assert.equal(shouldRefresh, true);
  console.log("PASS: token refresh-window contract");

  const payload = contract.buildLmsAuthStatePayload({
    organizationId: "org-12345",
    provider: "google_classroom",
    authMode: "oauth2_authorization_code_pkce",
    redirectTo: "/dashboard",
    now,
    ttlSeconds: 300,
    nonce: "1234567890abcdef1234567890abcdef",
  });
  const encoded = contract.encodeLmsAuthState(payload);
  const decoded = contract.decodeLmsAuthState(encoded);
  assert.equal(decoded.ok, true);
  if (decoded.ok) {
    assert.equal(decoded.value.organizationId, "org-12345");
    assert.equal(decoded.value.provider, "google_classroom");
  }

  const expiredState = contract.isLmsAuthStateExpired(
    { expiresAt: addSeconds(now, -10) },
    { now, skewSeconds: 0 },
  );
  assert.equal(expiredState, true);
  console.log("PASS: auth state encode/decode + expiry contract");

  const statusActive = contract.resolveLmsConnectionStatus(
    {
      status: "active",
      token: {
        expiresAt: addSeconds(now, 600),
        revokedAt: null,
      },
    },
    { now },
  );
  assert.equal(statusActive, "active");

  const statusExpired = contract.resolveLmsConnectionStatus(
    {
      status: "active",
      token: {
        expiresAt: addSeconds(now, -60),
        revokedAt: null,
      },
    },
    { now },
  );
  assert.equal(statusExpired, "expired");
  console.log("PASS: connection status resolution contract");

  console.log("PASS: lms auth contract.");
}

main();

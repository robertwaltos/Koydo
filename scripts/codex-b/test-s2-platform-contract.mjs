import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import typescript from "typescript";

const ROOT = process.cwd();
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
      if (specifier === "node:crypto") return require("node:crypto");
      if (specifier === "@supabase/supabase-js") return {};
      throw new Error(`Unexpected runtime dependency \"${specifier}\".`);
    },
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

async function main() {
  const authPath = path.resolve(ROOT, "src/lib/integrations/google-classroom-auth.ts");
  const authModule = loadTranspiledTsModule(authPath, {
    "@/lib/config/env": {
      serverEnv: {
        NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
        SUPABASE_SERVICE_ROLE_KEY: "service-role",
        GOOGLE_CLASSROOM_SYNC_ENABLED: false,
        GOOGLE_CLASSROOM_SERVICE_ACCOUNT_JSON: undefined,
        GOOGLE_CLASSROOM_SERVICE_ACCOUNT_EMAIL: undefined,
        GOOGLE_CLASSROOM_SERVICE_ACCOUNT_PRIVATE_KEY: undefined,
        GOOGLE_CLASSROOM_IMPERSONATION_EMAIL: undefined,
        GOOGLE_CLASSROOM_TOKEN_URL: "https://oauth2.googleapis.com/token",
        GOOGLE_CLASSROOM_API_BASE_URL: "https://classroom.googleapis.com/v1",
      },
    },
    "@/lib/logging/safe-error": { toSafeErrorRecord: (error) => error },
    "@/lib/supabase/admin": {
      createSupabaseAdminClient: () => ({
        from: () => ({
          select: () => ({
            eq: () => ({
              maybeSingle: async () => ({ data: null, error: null }),
            }),
          }),
        }),
      }),
    },
  });

  assert.equal(typeof authModule.resolveGoogleServiceAccountCredentials, "function");
  assert.equal(typeof authModule.getGoogleClassroomServiceAccountAccessToken, "function");

  const creds = authModule.resolveGoogleServiceAccountCredentials({
    source: "env",
    syncEnabled: true,
    serviceAccountJson: JSON.stringify({
      client_email: "svc@example.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\\nabc\\n-----END PRIVATE KEY-----",
      token_uri: "https://oauth2.googleapis.com/token",
    }),
    serviceAccountEmail: null,
    serviceAccountPrivateKey: null,
    impersonationEmail: null,
    tokenUrl: "https://oauth2.googleapis.com/token",
    apiBaseUrl: "https://classroom.googleapis.com/v1",
  });

  assert.ok(creds);
  assert.equal(creds.clientEmail, "svc@example.iam.gserviceaccount.com");
  assert.ok(creds.privateKey.includes("BEGIN PRIVATE KEY"));
  console.log("PASS: B-A04 service-account credential resolution contract");

  const noConfigToken = await authModule.getGoogleClassroomServiceAccountAccessToken({
    runtimeConfig: {
      source: "env",
      syncEnabled: false,
      serviceAccountJson: null,
      serviceAccountEmail: null,
      serviceAccountPrivateKey: null,
      impersonationEmail: null,
      tokenUrl: "https://oauth2.googleapis.com/token",
      apiBaseUrl: "https://classroom.googleapis.com/v1",
    },
  });
  assert.equal(noConfigToken.ok, false);
  console.log("PASS: B-A04 not-configured guard contract");

  const workerPath = path.resolve(ROOT, "src/lib/testing/google-classroom-sync-worker.ts");
  const workerModule = loadTranspiledTsModule(workerPath, {
    "@/lib/testing/google-classroom-sync-runner": {
      runGoogleClassroomSyncRetries: async ({ dryRun }) => ({
        scannedSessions: 1,
        queuedCandidates: 2,
        selected: dryRun ? 1 : 2,
        attempted: dryRun ? 0 : 2,
        succeeded: dryRun ? 0 : 2,
        failed: 0,
        persistFailed: 0,
        dryRun: Boolean(dryRun),
        syncConfigured: true,
        items: [],
      }),
    },
    "@/lib/organizations/integration-audit": {
      logIntegrationAuditEvent: async () => undefined,
    },
  });

  const drySummary = await workerModule.runGoogleClassroomSyncWorkerCycle({
    updatedByUserId: "00000000-0000-4000-8000-000000000001",
    dryRun: true,
    maxCycles: 5,
    batchSize: 10,
  });
  assert.equal(drySummary.cyclesRun, 1);
  assert.equal(drySummary.haltedReason, "dry_run_single_cycle");

  const liveSummary = await workerModule.runGoogleClassroomSyncWorkerCycle({
    updatedByUserId: "00000000-0000-4000-8000-000000000001",
    dryRun: false,
    maxCycles: 2,
    batchSize: 10,
  });
  assert.equal(liveSummary.cyclesRun, 2);
  assert.equal(liveSummary.totalAttempted, 4);
  console.log("PASS: B-A05 worker-cycle skeleton contract");

  const auditPath = path.resolve(ROOT, "src/lib/organizations/integration-audit.ts");
  let insertedRows = 0;
  const auditModule = loadTranspiledTsModule(auditPath, {
    "@/lib/supabase/admin": {
      createSupabaseAdminClient: () => ({
        from: () => ({
          insert: async (row) => {
            insertedRows += Array.isArray(row) ? row.length : 1;
            return { error: null };
          },
        }),
      }),
    },
    "@/lib/logging/safe-error": { toSafeErrorRecord: (error) => error },
  });

  await auditModule.logIntegrationAuditEvent({
    actorUserId: "00000000-0000-4000-8000-000000000001",
    actionType: "google_classroom_sync_attempt",
    targetType: "google_classroom_sync",
    targetId: "stub-1",
    classId: "00000000-0000-4000-8000-000000000010",
    status: "queued",
    metadata: { attempt: 1 },
  });
  assert.equal(insertedRows, 1);
  console.log("PASS: B-A06 integration audit baseline contract");

  console.log("PASS: Codex-B S2 platform contract.");
}

main();

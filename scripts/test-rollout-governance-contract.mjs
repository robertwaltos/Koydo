import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/platform/rollout-governance.ts");

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
      if (specifier === "zod") {
        return require("zod");
      }
      throw new Error(`Unexpected runtime dependency \"${specifier}\".`);
    },
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

function withEnv(updates, fn) {
  const previous = new Map();
  for (const [key, value] of Object.entries(updates)) {
    previous.set(key, Object.prototype.hasOwnProperty.call(process.env, key) ? process.env[key] : undefined);
    if (typeof value === "undefined" || value === null) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }

  try {
    return fn();
  } finally {
    for (const [key, value] of previous.entries()) {
      if (typeof value === "undefined") {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}

function createMockAdmin(response) {
  return {
    from(table) {
      const state = { table, filters: {} };
      const builder = {
        select() {
          return builder;
        },
        eq(column, value) {
          state.filters[column] = value;
          return builder;
        },
        async maybeSingle() {
          if (typeof response === "function") {
            return response(state);
          }
          return response;
        },
      };
      return builder;
    },
  };
}

async function main() {
  const contract = loadTranspiledTsModule(MODULE_PATH, {
    "@/lib/logging/safe-error": { toSafeErrorRecord: (error) => error },
    "@/lib/supabase/admin": { createSupabaseAdminClient: () => createMockAdmin({ data: null, error: null }) },
  });

  assert.equal(typeof contract.getRolloutGovernanceConfig, "function");
  assert.equal(typeof contract.evaluateRolloutOperation, "function");
  assert.equal(typeof contract.isRolloutFeatureEnabled, "function");
  assert.equal(typeof contract.clearRolloutGovernanceCache, "function");
  console.log("PASS: rollout governance contract exports");

  await withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: undefined,
      SUPABASE_SERVICE_ROLE_KEY: undefined,
      KOYDO_FEATURE_LMS_GOOGLE_CLASSROOM: undefined,
      KOYDO_KILL_SWITCH_GLOBAL: undefined,
      KOYDO_KILL_SWITCH_REASON: undefined,
    },
    async () => {
      contract.clearRolloutGovernanceCache();
      const config = await contract.getRolloutGovernanceConfig({ forceRefresh: true, cacheTtlMs: 1_000 });
      assert.equal(config.source, "default");
      assert.equal(config.features.lms_google_classroom, false);
      assert.equal(config.killSwitches.global, false);
    },
  );
  console.log("PASS: default config contract");

  await withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: undefined,
      SUPABASE_SERVICE_ROLE_KEY: undefined,
      KOYDO_FEATURE_LMS_GOOGLE_CLASSROOM: "true",
      KOYDO_FEATURE_AI_CONTENT_INGESTION: "1",
      KOYDO_KILL_SWITCH_GRADE_PASSBACK: "true",
      KOYDO_KILL_SWITCH_REASON: "incident-123",
    },
    async () => {
      contract.clearRolloutGovernanceCache();
      const config = await contract.getRolloutGovernanceConfig({ forceRefresh: true, cacheTtlMs: 1_000 });
      assert.equal(config.source, "env");
      assert.equal(config.features.lms_google_classroom, true);
      assert.equal(config.features.ai_content_ingestion, true);
      assert.equal(config.killSwitches.grade_passback, true);
      assert.equal(config.emergencyReason, "incident-123");
    },
  );
  console.log("PASS: env override contract");

  await withEnv(
    {
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      SUPABASE_SERVICE_ROLE_KEY: "service-role-key",
      KOYDO_FEATURE_LMS_GOOGLE_CLASSROOM: undefined,
      KOYDO_KILL_SWITCH_GRADE_PASSBACK: undefined,
      KOYDO_KILL_SWITCH_REASON: undefined,
    },
    async () => {
      contract.clearRolloutGovernanceCache();
      const mockAdmin = createMockAdmin(({ table, filters }) => {
        assert.equal(table, "app_settings");
        assert.equal(filters.key, contract.ROLLOUT_GOVERNANCE_APP_SETTINGS_KEY);
        return {
          data: {
            value: {
              features: {
                lms_google_classroom: true,
                lms_lti_grade_passback: true,
              },
              rolloutPercentages: {
                lms_google_classroom: 50,
                lms_lti_grade_passback: 100,
              },
              killSwitches: {
                grade_passback: false,
              },
            },
          },
          error: null,
        };
      });

      const config = await contract.getRolloutGovernanceConfig({
        forceRefresh: true,
        cacheTtlMs: 1_000,
        adminClient: mockAdmin,
      });

      assert.equal(config.source, "app_settings");
      assert.equal(config.features.lms_google_classroom, true);
      assert.equal(config.rolloutPercentages.lms_google_classroom, 50);
      assert.equal(config.features.lms_lti_grade_passback, true);

      const gateOff = contract.isRolloutFeatureEnabled(config, "lms_google_classroom");
      assert.equal(gateOff, false);
      const gateWithSubject = contract.isRolloutFeatureEnabled(config, "lms_google_classroom", {
        subjectKey: "org-123|teacher-1",
      });
      assert.equal(typeof gateWithSubject, "boolean");

      const allowed = contract.evaluateRolloutOperation(config, "grade_passback", {
        subjectKey: "org-123|teacher-1",
      });
      assert.equal(allowed.allowed, true);

      const blocked = contract.evaluateRolloutOperation(
        {
          ...config,
          killSwitches: {
            ...config.killSwitches,
            grade_passback: true,
          },
        },
        "grade_passback",
      );
      assert.equal(blocked.allowed, false);
      assert.equal(blocked.reason, "kill_switch_grade_passback");
    },
  );
  console.log("PASS: app_settings + rollout decision contract");

  console.log("PASS: rollout governance contract.");
}

main();

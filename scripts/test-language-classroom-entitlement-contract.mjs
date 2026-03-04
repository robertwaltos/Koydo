import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/language-learning/usage.ts");

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function loadTranspiledTsModule(filePath, mocks) {
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
      throw new Error(`Unexpected runtime dependency "${specifier}".`);
    },
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

function createMockSupabase(resolver) {
  return {
    from(table) {
      const state = { table, filters: {}, select: "" };
      const builder = {
        select(columns) {
          state.select = String(columns ?? "");
          return builder;
        },
        eq(column, value) {
          state.filters[column] = value;
          return builder;
        },
        order() {
          return builder;
        },
        limit() {
          return builder;
        },
        async maybeSingle() {
          const result = await resolver(state);
          return {
            data: result?.data ?? null,
            error: result?.error ?? null,
          };
        },
      };
      return builder;
    },
  };
}

function buildContract() {
  const PLAN_DEFS = {
    core_practice: { id: "core_practice", name: "Core Practice", scoredAttemptsPerLearnerMonthly: 0 },
    language_plus_conservative: { id: "language_plus_conservative", name: "Language Plus", scoredAttemptsPerLearnerMonthly: 300 },
    language_family_conservative: { id: "language_family_conservative", name: "Language Family", scoredAttemptsPerLearnerMonthly: 300 },
    language_school_annual: { id: "language_school_annual", name: "Language School Annual", scoredAttemptsPerLearnerMonthly: 300 },
  };

  return loadTranspiledTsModule(MODULE_PATH, {
    "@/lib/billing/subscription": {
      isBillableSubscription: (status) => status === "active" || status === "trialing",
    },
    "./policy": {
      LANGUAGE_AI_BUDGET_LIMITS: {
        totalAiUsdPerActiveLearnerMonth: 0.5,
      },
    },
    "./runtime-config": {
      getLanguageRuntimeConfig: async () => ({
        pricingProfile: "conservative",
        attemptCap: 300,
        geoTierDefault: "tier_1",
      }),
    },
    "./pricing": {
      getLanguagePlanById: (planId) => PLAN_DEFS[planId] ?? null,
      getLanguagePlanIdForProfile: (_profile, scope) =>
        scope === "family" ? "language_family_conservative" : "language_plus_conservative",
      getScoredAttemptLimitForPlan: (planId) => PLAN_DEFS[planId]?.scoredAttemptsPerLearnerMonthly ?? 0,
    },
    "./pricing-spec": {
      LANGUAGE_PRICING_SPEC: {
        launch: {
          defaultUtteranceSeconds: 10,
        },
      },
    },
  });
}

async function main() {
  const contract = buildContract();
  assert.equal(typeof contract.resolveLanguageUsageEntitlement, "function");

  const classroomSupabase = createMockSupabase(async ({ table }) => {
    if (table === "subscriptions") {
      return { data: null, error: null };
    }
    if (table === "language_usage_tracking") {
      return { data: null, error: null };
    }
    return { data: null, error: null };
  });

  const classroomEntitlement = await contract.resolveLanguageUsageEntitlement(classroomSupabase, {
    userId: "user-1",
    classroomAccess: {
      granted: true,
      reason: "eligible",
      organizationId: "org-1",
      organizationName: "North Academy",
      organizationType: "school",
      accountClass: "SCHOOL",
      timeZone: "America/Chicago",
      window: {
        startHourLocal: 7,
        endHourLocal: 15,
      },
      requestCountry: "US",
      requestTimeZone: "America/Chicago",
      localHour: 8,
      localMinute: 20,
    },
  });
  assert.equal(classroomEntitlement.planTier, "language_school_annual");
  assert.equal(classroomEntitlement.classroomAccess.active, true);
  assert.equal(classroomEntitlement.classroomAccess.organizationId, "org-1");
  console.log("PASS: classroom entitlement forces school annual plan tier");

  const familySupabase = createMockSupabase(async ({ table }) => {
    if (table === "subscriptions") {
      return {
        data: {
          status: "active",
          stripe_price_id: "family_monthly_v1",
          metadata: null,
        },
        error: null,
      };
    }
    if (table === "language_usage_tracking") {
      return { data: null, error: null };
    }
    return { data: null, error: null };
  });

  const familyEntitlement = await contract.resolveLanguageUsageEntitlement(familySupabase, {
    userId: "user-2",
  });
  assert.equal(familyEntitlement.planTier, "language_family_conservative");
  assert.equal(familyEntitlement.classroomAccess.active, false);
  assert.equal(familyEntitlement.classroomAccess.reason, "not_checked");
  console.log("PASS: non-classroom subscription resolution remains intact");

  const freeSupabase = createMockSupabase(async ({ table }) => {
    if (table === "subscriptions") {
      return { data: null, error: null };
    }
    if (table === "language_usage_tracking") {
      return { data: null, error: null };
    }
    return { data: null, error: null };
  });

  const freeEntitlement = await contract.resolveLanguageUsageEntitlement(freeSupabase, {
    userId: "user-3",
  });
  assert.equal(freeEntitlement.planTier, "core_practice");
  assert.equal(freeEntitlement.mode, "practice_only");
  assert.equal(freeEntitlement.reason, "plan_no_scored_access");
  console.log("PASS: free entitlement still practice-only");

  console.log("PASS: language classroom entitlement contract.");
}

main();

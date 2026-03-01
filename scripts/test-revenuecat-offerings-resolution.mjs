import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const REVENUECAT_OFFERINGS_PATH = path.resolve(
  ROOT,
  "src/lib/billing/revenuecat-offerings.ts",
);
const REVENUECAT_MATRIX_PATH = path.resolve(
  ROOT,
  "src/lib/billing/revenuecat-matrix.ts",
);

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function loadTranspiledTsModule(filePath) {
  const source = readRequiredFile(filePath);
  const transpiled = typescript.transpileModule(source, {
    compilerOptions: {
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2020,
      jsx: typescript.JsxEmit.ReactJSX,
      esModuleInterop: true,
      importsNotUsedAsValues: typescript.ImportsNotUsedAsValues.Remove,
    },
    fileName: filePath,
  }).outputText;

  const module = { exports: {} };
  const wrapped = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    transpiled,
  );

  wrapped(
    module.exports,
    (specifier) => {
      throw new Error(
        `Unexpected runtime dependency "${specifier}" while loading ${path.relative(ROOT, filePath)}.`,
      );
    },
    module,
    filePath,
    path.dirname(filePath),
  );

  return module.exports;
}

function normalize(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase();
}

function tokenize(value) {
  return normalize(value)
    .split(/[^a-z0-9]+/g)
    .filter(Boolean);
}

function cadenceFromPlanId(planId) {
  const normalized = normalize(planId);
  if (normalized.includes("annual") || normalized.includes("yearly")) {
    return "annual";
  }
  return "monthly";
}

function packageTypeFromCadence(cadence) {
  return cadence === "annual" ? "annual" : "monthly";
}

function subscriptionPeriodFromCadence(cadence) {
  return cadence === "annual" ? "P1Y" : "P1M";
}

function buildPackage({
  identifier,
  productIdentifier,
  cadence,
  priceString,
}) {
  return {
    identifier,
    packageType: packageTypeFromCadence(cadence),
    product: {
      identifier: productIdentifier,
      subscriptionPeriod: subscriptionPeriodFromCadence(cadence),
      priceString,
    },
  };
}

function buildOfferings(packages) {
  return {
    current: {
      availablePackages: packages,
    },
  };
}

function buildExactIdentifierPackages(planIds) {
  const expectedByPlan = new Map();
  const packages = planIds.map((planId, index) => {
    const cadence = cadenceFromPlanId(planId);
    const pkg = buildPackage({
      identifier: planId,
      productIdentifier: `store.${planId}`,
      cadence,
      priceString: cadence === "annual" ? `$${(59 + index).toFixed(2)}` : `$${(5 + index).toFixed(2)}`,
    });
    expectedByPlan.set(planId, pkg.identifier);
    return pkg;
  });
  return {
    packages,
    expectedByPlan,
  };
}

function buildProductIdentifierPackages(planIds) {
  const expectedByPlan = new Map();
  const packages = planIds.map((planId, index) => {
    const cadence = cadenceFromPlanId(planId);
    const pkg = buildPackage({
      identifier: `pkg_${index + 1}`,
      productIdentifier: planId,
      cadence,
      priceString: cadence === "annual" ? `$${(79 + index).toFixed(2)}` : `$${(7 + index).toFixed(2)}`,
    });
    expectedByPlan.set(planId, pkg.identifier);
    return pkg;
  });
  return {
    packages,
    expectedByPlan,
  };
}

function buildHeuristicAliasPackages(planIds) {
  const expectedByPlan = new Map();
  const packagesByPlanId = new Map();

  for (const [index, planId] of planIds.entries()) {
    const cadence = cadenceFromPlanId(planId);
    const tokens = tokenize(planId);
    const aliasIdentifier = `pkg-${tokens.join("-")}-offer`;
    const aliasProductIdentifier = `store.${tokens.join(".")}`;
    const pkg = buildPackage({
      identifier: aliasIdentifier,
      productIdentifier: aliasProductIdentifier,
      cadence,
      priceString: cadence === "annual" ? `$${(89 + index).toFixed(2)}` : `$${(9 + index).toFixed(2)}`,
    });
    expectedByPlan.set(planId, aliasIdentifier);
    packagesByPlanId.set(planId, pkg);
  }

  return {
    packages: Array.from(packagesByPlanId.values()),
    packagesByPlanId,
    expectedByPlan,
  };
}

function runPositiveResolutionScenario({
  scenarioName,
  planIds,
  offerings,
  expectedByPlan,
  resolver,
}) {
  for (const planId of planIds) {
    const resolved = resolver(offerings, planId);
    assert.ok(resolved, `${scenarioName}: expected package for ${planId}`);
    assert.equal(
      normalize(resolved.identifier),
      normalize(expectedByPlan.get(planId)),
      `${scenarioName}: resolved wrong package for ${planId}`,
    );
  }
  console.log(`PASS: ${scenarioName}`);
}

function runFailSafeScenario({
  planIds,
  heuristicPackagesByPlanId,
  resolver,
}) {
  for (const missingPlanId of planIds) {
    const availablePackages = planIds
      .filter((planId) => planId !== missingPlanId)
      .map((planId) => heuristicPackagesByPlanId.get(planId))
      .filter(Boolean);

    const offerings = buildOfferings(availablePackages);
    const resolved = resolver(offerings, missingPlanId);
    assert.equal(
      resolved,
      null,
      `fail-safe: expected null when ${missingPlanId} package is missing, got ${resolved?.identifier ?? "non-null"}`,
    );
  }
  console.log("PASS: fail-safe resolution returns null when a target package is missing.");
}

function main() {
  const offeringsModule = loadTranspiledTsModule(REVENUECAT_OFFERINGS_PATH);
  const matrixModule = loadTranspiledTsModule(REVENUECAT_MATRIX_PATH);

  const resolvePackage = offeringsModule.findPackageForRevenueCatPlanId;
  if (typeof resolvePackage !== "function") {
    throw new Error(
      "Expected `findPackageForRevenueCatPlanId` export in src/lib/billing/revenuecat-offerings.ts",
    );
  }

  const resolveLanguagePackage = offeringsModule.findPackageForLanguagePlanId;
  if (typeof resolveLanguagePackage !== "function") {
    throw new Error(
      "Expected `findPackageForLanguagePlanId` export in src/lib/billing/revenuecat-offerings.ts",
    );
  }

  const planIds = Array.isArray(matrixModule.REVENUECAT_SUBSCRIPTION_PLAN_IDS)
    ? matrixModule.REVENUECAT_SUBSCRIPTION_PLAN_IDS.map((value) => String(value))
    : [];

  if (planIds.length === 0) {
    throw new Error(
      "No plan IDs found in REVENUECAT_SUBSCRIPTION_PLAN_IDS while running RevenueCat resolver tests.",
    );
  }

  const uniquePlanIds = new Set(planIds);
  assert.equal(
    uniquePlanIds.size,
    planIds.length,
    "Duplicate plan IDs found in REVENUECAT_SUBSCRIPTION_PLAN_IDS.",
  );

  const exactScenario = buildExactIdentifierPackages(planIds);
  runPositiveResolutionScenario({
    scenarioName: "exact package identifier mapping",
    planIds,
    offerings: buildOfferings(exactScenario.packages),
    expectedByPlan: exactScenario.expectedByPlan,
    resolver: resolvePackage,
  });

  const productScenario = buildProductIdentifierPackages(planIds);
  runPositiveResolutionScenario({
    scenarioName: "exact product identifier mapping",
    planIds,
    offerings: buildOfferings(productScenario.packages),
    expectedByPlan: productScenario.expectedByPlan,
    resolver: resolvePackage,
  });

  const heuristicScenario = buildHeuristicAliasPackages(planIds);
  runPositiveResolutionScenario({
    scenarioName: "heuristic alias mapping",
    planIds,
    offerings: buildOfferings(heuristicScenario.packages),
    expectedByPlan: heuristicScenario.expectedByPlan,
    resolver: resolvePackage,
  });

  runFailSafeScenario({
    planIds,
    heuristicPackagesByPlanId: heuristicScenario.packagesByPlanId,
    resolver: resolvePackage,
  });

  const languagePlanIds = planIds.filter((planId) => planId.startsWith("language_"));
  if (languagePlanIds.length > 0) {
    runPositiveResolutionScenario({
      scenarioName: "language resolver wrapper parity",
      planIds: languagePlanIds,
      offerings: buildOfferings(exactScenario.packages),
      expectedByPlan: exactScenario.expectedByPlan,
      resolver: resolveLanguagePackage,
    });
  }

  console.log(
    `PASS: RevenueCat offering resolver contract (${planIds.length} matrix SKUs validated).`,
  );
}

main();

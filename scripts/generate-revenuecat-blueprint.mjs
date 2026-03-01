import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PRICING_SPEC_PATH = path.join(ROOT, "src/lib/language-learning/pricing-spec.ts");
const REVENUECAT_MATRIX_PATH = path.join(ROOT, "src/lib/billing/revenuecat-matrix.ts");
const DEFAULT_OUT_JSON = path.join(ROOT, "public/REVENUECAT-BLUEPRINT.json");
const DEFAULT_OUT_MD = path.join(ROOT, "REVENUECAT-BLUEPRINT.md");

function parseArgs(argv) {
  const args = {
    outJson: DEFAULT_OUT_JSON,
    outMd: DEFAULT_OUT_MD,
    check: false,
  };

  const parseOptionValue = (arg, index) => {
    const equalsIndex = arg.indexOf("=");
    if (equalsIndex >= 0) {
      return { value: arg.slice(equalsIndex + 1).trim(), consumedNext: false };
    }
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      return { value: "", consumedNext: false };
    }
    return { value: next.trim(), consumedNext: true };
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--check") {
      args.check = true;
      continue;
    }
    if (arg === "--out-json" || arg.startsWith("--out-json=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.outJson = path.resolve(ROOT, parsed.value);
      if (parsed.consumedNext) i += 1;
      continue;
    }
    if (arg === "--out-md" || arg.startsWith("--out-md=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.outMd = path.resolve(ROOT, parsed.value);
      if (parsed.consumedNext) i += 1;
    }
  }

  return args;
}

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function parsePricingMetadata(source) {
  const versionMatch = source.match(/version:\s*"([^"]+)"/);
  const defaultPhaseMatch = source.match(/defaultPhase:\s*"([^"]+)"/);
  const defaultProfileMatch = source.match(/defaultProfile:\s*"([^"]+)"/);

  if (!versionMatch || !defaultPhaseMatch || !defaultProfileMatch) {
    throw new Error("Unable to parse pricing metadata from pricing-spec.ts.");
  }

  return {
    version: versionMatch[1],
    defaultPhase: defaultPhaseMatch[1],
    defaultProfile: defaultProfileMatch[1],
  };
}

function parsePricingSkus(source) {
  const skusSectionMatch = source.match(/skus:\s*\[([\s\S]*?)\],\s*experiments:/m);
  if (!skusSectionMatch) {
    throw new Error("Unable to locate `skus` section in pricing-spec.ts.");
  }

  const skusSection = skusSectionMatch[1];
  const skuBlockRegex =
    /id:\s*"([^"]+)"[\s\S]*?displayName:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?billingCadence:\s*"([^"]+)"[\s\S]*?priceCentsUsd:\s*(\d+)[\s\S]*?status:\s*"([^"]+)"[\s\S]*?availableFromPhase:\s*"([^"]+)"[\s\S]*?notes:\s*"([^"]*)"/g;
  const skus = [];

  for (const match of skusSection.matchAll(skuBlockRegex)) {
    skus.push({
      id: match[1],
      displayName: match[2],
      category: match[3],
      billingCadence: match[4],
      priceCentsUsd: Number.parseInt(match[5], 10),
      status: match[6],
      availableFromPhase: match[7],
      notes: match[8],
    });
  }

  if (skus.length === 0) {
    throw new Error("Unable to parse pricing SKUs from pricing-spec.ts.");
  }

  return skus;
}

function parseRevenueCatEntitlement(matrixSource) {
  const entitlementMatch = matrixSource.match(
    /export const RC_ENTITLEMENT_KOYDO_PRO = "([^"]+)";/,
  );
  if (!entitlementMatch) {
    throw new Error("Missing `RC_ENTITLEMENT_KOYDO_PRO` in revenuecat-matrix.ts.");
  }
  return entitlementMatch[1];
}

function parseRevenueCatLegacyEntitlements(matrixSource) {
  const blockMatch = matrixSource.match(
    /RC_LEGACY_PRO_ENTITLEMENT_IDS = \[([\s\S]*?)\] as const;/m,
  );
  if (!blockMatch) {
    return [];
  }
  return Array.from(blockMatch[1].matchAll(/"([^"]+)"/g)).map((match) => match[1]);
}

function parseRevenueCatPlanIds(matrixSource) {
  const blockMatch = matrixSource.match(
    /REVENUECAT_SUBSCRIPTION_PLAN_IDS:[^=]*=\s*\[([\s\S]*?)\]\s*as const;/m,
  );
  if (!blockMatch) {
    throw new Error("Missing `REVENUECAT_SUBSCRIPTION_PLAN_IDS` in revenuecat-matrix.ts.");
  }
  const ids = Array.from(blockMatch[1].matchAll(/"([^"]+)"/g)).map((match) => match[1]);
  if (ids.length === 0) {
    throw new Error("No plan IDs found in `REVENUECAT_SUBSCRIPTION_PLAN_IDS`.");
  }
  return ids;
}

function centsToUsd(cents) {
  return Number((cents / 100).toFixed(2));
}

function toSorted(values) {
  return Array.from(values).sort((left, right) => left.localeCompare(right));
}

function createDiff(left, right) {
  return new Set(Array.from(left).filter((value) => !right.has(value)));
}

function buildBlueprint({ pricingMeta, pricingSkus, entitlementId, legacyEntitlements, planIds }) {
  const subscriptionSkuSet = new Set(
    pricingSkus
      .filter((sku) => sku.category === "subscription" || sku.category === "household_pass")
      .filter((sku) => sku.status !== "disabled")
      .map((sku) => sku.id),
  );
  const matrixPlanIdSet = new Set(planIds);

  const missingInMatrix = createDiff(subscriptionSkuSet, matrixPlanIdSet);
  const unexpectedInMatrix = createDiff(matrixPlanIdSet, subscriptionSkuSet);
  if (missingInMatrix.size > 0 || unexpectedInMatrix.size > 0) {
    const missing = toSorted(missingInMatrix).join(", ");
    const unexpected = toSorted(unexpectedInMatrix).join(", ");
    throw new Error(
      [
        "RevenueCat matrix mismatch against pricing spec.",
        missing ? `Missing IDs in matrix: ${missing}` : "",
        unexpected ? `Unexpected IDs in matrix: ${unexpected}` : "",
      ]
        .filter(Boolean)
        .join(" "),
    );
  }

  const skuById = new Map(pricingSkus.map((sku) => [sku.id, sku]));
  const packages = planIds.map((planId) => {
    const sku = skuById.get(planId);
    if (!sku) {
      throw new Error(`Plan ID ${planId} is declared in revenuecat-matrix.ts but missing from pricing spec.`);
    }
    const launchReady = sku.status === "active" && sku.availableFromPhase <= pricingMeta.defaultPhase;
    return {
      planId,
      displayName: sku.displayName,
      category: sku.category,
      billingCadence: sku.billingCadence,
      status: sku.status,
      availableFromPhase: sku.availableFromPhase,
      baselinePriceUsd: centsToUsd(sku.priceCentsUsd),
      packageIdentifier: planId,
      expectedProductIdentifier: planId,
      launchReady,
      notes: sku.notes,
    };
  });

  const launchPackages = packages.filter((pkg) => pkg.launchReady).map((pkg) => pkg.planId);

  return {
    generatedAt: new Date().toISOString(),
    source: {
      pricingSpecPath: "src/lib/language-learning/pricing-spec.ts",
      revenueCatMatrixPath: "src/lib/billing/revenuecat-matrix.ts",
      pricingSpecVersion: pricingMeta.version,
      launchDefaultPhase: pricingMeta.defaultPhase,
      launchDefaultProfile: pricingMeta.defaultProfile,
    },
    entitlement: {
      id: entitlementId,
      legacyAliases: legacyEntitlements,
    },
    offerings: [
      {
        id: "default",
        displayName: "Default",
        packageIdentifiers: planIds,
        launchReadyPackageIdentifiers: launchPackages,
      },
    ],
    packages,
    implementationNotes: [
      "Use `default` as the current offering in RevenueCat dashboard.",
      "Set RevenueCat package identifiers to match internal plan IDs exactly.",
      "For zero-drift mapping, set product identifiers equal to internal plan IDs when creating Store products.",
      "If Store product IDs must differ, keep RevenueCat package identifier equal to internal plan ID and map package -> product manually in dashboard.",
    ],
  };
}

function escapeCell(value) {
  return String(value ?? "").replace(/\|/g, "\\|");
}

function buildMarkdown(blueprint) {
  const lines = [];
  lines.push("# RevenueCat Blueprint");
  lines.push("");
  lines.push(`Generated: ${blueprint.generatedAt}`);
  lines.push(`Pricing spec version: ${blueprint.source.pricingSpecVersion}`);
  lines.push(`Launch default phase/profile: ${blueprint.source.launchDefaultPhase} / ${blueprint.source.launchDefaultProfile}`);
  lines.push("");
  lines.push("## Source of Truth");
  lines.push("");
  lines.push(`- Pricing matrix: \`${blueprint.source.pricingSpecPath}\``);
  lines.push(`- RevenueCat mapping: \`${blueprint.source.revenueCatMatrixPath}\``);
  lines.push(`- Entitlement ID: \`${blueprint.entitlement.id}\``);
  lines.push(`- Offering ID: \`default\``);
  lines.push("");
  lines.push("## Required Package Mapping");
  lines.push("");
  lines.push("| Plan ID | Package Identifier (RC) | Expected Product Identifier | Billing | Status | Phase | USD Baseline | Launch Ready |");
  lines.push("| --- | --- | --- | --- | --- | --- | ---: | --- |");
  for (const pkg of blueprint.packages) {
    lines.push(
      `| ${escapeCell(pkg.planId)} | ${escapeCell(pkg.packageIdentifier)} | ${escapeCell(pkg.expectedProductIdentifier)} | ${escapeCell(pkg.billingCadence)} | ${escapeCell(pkg.status)} | ${escapeCell(pkg.availableFromPhase)} | ${escapeCell(pkg.baselinePriceUsd.toFixed(2))} | ${pkg.launchReady ? "yes" : "no"} |`,
    );
  }
  lines.push("");
  lines.push("## Dashboard Setup Steps");
  lines.push("");
  lines.push("1. In RevenueCat Product Catalog, create entitlement with identifier matching the value above.");
  lines.push("2. Create products and attach them to the entitlement.");
  lines.push("3. Create or update offering `default`.");
  lines.push("4. For each plan row above, create a package with identifier exactly equal to `Plan ID` and map it to the intended product.");
  lines.push("5. Mark offering `default` as Current.");
  lines.push("6. Run `npm run billing:matrix:validate` and `npm run smoke:auth-billing` after dashboard updates.");
  lines.push("");
  lines.push("## Legacy Entitlement Aliases");
  lines.push("");
  if (Array.isArray(blueprint.entitlement.legacyAliases) && blueprint.entitlement.legacyAliases.length > 0) {
    for (const alias of blueprint.entitlement.legacyAliases) {
      lines.push(`- \`${alias}\``);
    }
  } else {
    lines.push("- None.");
  }
  lines.push("");
  lines.push("## Notes");
  lines.push("");
  for (const note of blueprint.implementationNotes) {
    lines.push(`- ${note}`);
  }

  return `${lines.join("\n")}\n`;
}

function ensureParentDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeFile(filePath, content) {
  ensureParentDirectory(filePath);
  fs.writeFileSync(filePath, content);
}

function normalizeJsonForComparison(content) {
  return content.replace(/"generatedAt":\s*"[^"]*"/, "\"generatedAt\": \"<generated>\"");
}

function normalizeMarkdownForComparison(content) {
  return content.replace(/^Generated:\s+.+$/m, "Generated: <generated>");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const pricingSpecSource = readRequiredFile(PRICING_SPEC_PATH);
  const matrixSource = readRequiredFile(REVENUECAT_MATRIX_PATH);

  const pricingMeta = parsePricingMetadata(pricingSpecSource);
  const pricingSkus = parsePricingSkus(pricingSpecSource);
  const entitlementId = parseRevenueCatEntitlement(matrixSource);
  const legacyEntitlements = parseRevenueCatLegacyEntitlements(matrixSource);
  const planIds = parseRevenueCatPlanIds(matrixSource);

  const blueprint = buildBlueprint({
    pricingMeta,
    pricingSkus,
    entitlementId,
    legacyEntitlements,
    planIds,
  });

  const jsonOutput = `${JSON.stringify(blueprint, null, 2)}\n`;
  const mdOutput = buildMarkdown(blueprint);

  if (args.check) {
    const currentJson = fs.existsSync(args.outJson) ? fs.readFileSync(args.outJson, "utf8") : "";
    const currentMd = fs.existsSync(args.outMd) ? fs.readFileSync(args.outMd, "utf8") : "";
    const jsonMatches =
      normalizeJsonForComparison(currentJson) === normalizeJsonForComparison(jsonOutput);
    const mdMatches =
      normalizeMarkdownForComparison(currentMd) === normalizeMarkdownForComparison(mdOutput);

    if (!jsonMatches || !mdMatches) {
      if (!jsonMatches) {
        console.error(`Drift detected: ${path.relative(ROOT, args.outJson)} is out of date.`);
      }
      if (!mdMatches) {
        console.error(`Drift detected: ${path.relative(ROOT, args.outMd)} is out of date.`);
      }
      console.error("Run `npm run billing:revenuecat:blueprint` to refresh generated files.");
      process.exitCode = 1;
      return;
    }

    console.log("PASS: RevenueCat blueprint files are in sync with pricing matrix.");
    return;
  }

  writeFile(args.outJson, jsonOutput);
  writeFile(args.outMd, mdOutput);

  console.log(`Wrote ${path.relative(ROOT, args.outJson)}`);
  console.log(`Wrote ${path.relative(ROOT, args.outMd)}`);
}

main();

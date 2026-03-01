import fs from "node:fs";
import path from "node:path";

const pricingSpecPath = path.resolve("src/lib/language-learning/pricing-spec.ts");
const revenueCatMatrixPath = path.resolve("src/lib/billing/revenuecat-matrix.ts");

function readFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function parseExpectedRevenueCatPlanIds(pricingSpecSource) {
  const skusSectionMatch = pricingSpecSource.match(/skus:\s*\[([\s\S]*?)\],\s*experiments:/m);
  if (!skusSectionMatch) {
    throw new Error("Unable to locate `skus` section in pricing-spec.ts");
  }

  const skusSection = skusSectionMatch[1];
  const skuBlockRegex =
    /id:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?status:\s*"([^"]+)"/g;
  const expected = new Set();

  for (const match of skusSection.matchAll(skuBlockRegex)) {
    const id = match[1];
    const category = match[2];
    const status = match[3];

    const isRevenueCatSubscriptionCategory =
      category === "subscription" || category === "household_pass";
    const isEnabled = status !== "disabled";

    if (isRevenueCatSubscriptionCategory && isEnabled) {
      expected.add(id);
    }
  }

  if (expected.size === 0) {
    throw new Error("No expected RevenueCat subscription IDs were derived from pricing-spec.ts");
  }

  return expected;
}

function parseDeclaredRevenueCatPlanIds(matrixSource) {
  const arrayMatch = matrixSource.match(
    /REVENUECAT_SUBSCRIPTION_PLAN_IDS:[^=]*=\s*\[([\s\S]*?)\]\s*as const;/m,
  );
  if (!arrayMatch) {
    throw new Error("Unable to locate `REVENUECAT_SUBSCRIPTION_PLAN_IDS` in revenuecat-matrix.ts");
  }

  const arrayBody = arrayMatch[1];
  const declared = new Set();
  for (const match of arrayBody.matchAll(/"([^"]+)"/g)) {
    declared.add(match[1]);
  }

  if (declared.size === 0) {
    throw new Error("No IDs parsed from `REVENUECAT_SUBSCRIPTION_PLAN_IDS`.");
  }

  return declared;
}

function toSortedList(setLike) {
  return Array.from(setLike).sort((left, right) => left.localeCompare(right));
}

function difference(left, right) {
  return new Set(Array.from(left).filter((value) => !right.has(value)));
}

function validateEntitlementConstant(matrixSource) {
  const entitlementMatch = matrixSource.match(
    /export const RC_ENTITLEMENT_KOYDO_PRO = "([^"]+)";/,
  );
  if (!entitlementMatch) {
    throw new Error("Missing `RC_ENTITLEMENT_KOYDO_PRO` declaration.");
  }
  if (entitlementMatch[1] !== "koydo_pro") {
    throw new Error(
      `Unexpected RC entitlement value "${entitlementMatch[1]}". Expected "koydo_pro".`,
    );
  }
}

function main() {
  const pricingSpecSource = readFile(pricingSpecPath);
  const matrixSource = readFile(revenueCatMatrixPath);

  validateEntitlementConstant(matrixSource);

  const expected = parseExpectedRevenueCatPlanIds(pricingSpecSource);
  const declared = parseDeclaredRevenueCatPlanIds(matrixSource);

  const missingInMatrix = difference(expected, declared);
  const unexpectedInMatrix = difference(declared, expected);

  console.log("Billing matrix validation");
  console.log(`Expected (pricing spec): ${expected.size}`);
  console.log(`Declared (RevenueCat): ${declared.size}`);

  if (missingInMatrix.size > 0) {
    console.log(
      `Missing in REVENUECAT_SUBSCRIPTION_PLAN_IDS: ${toSortedList(missingInMatrix).join(", ")}`,
    );
  }
  if (unexpectedInMatrix.size > 0) {
    console.log(
      `Unexpected in REVENUECAT_SUBSCRIPTION_PLAN_IDS: ${toSortedList(unexpectedInMatrix).join(", ")}`,
    );
  }

  if (missingInMatrix.size > 0 || unexpectedInMatrix.size > 0) {
    process.exitCode = 1;
    return;
  }

  console.log("PASS: RevenueCat matrix aligns with pricing spec subscription SKUs.");
}

main();

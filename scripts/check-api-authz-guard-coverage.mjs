#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const API_ROOT = path.join(ROOT, "src", "app", "api");
const MUTATING_METHOD_REGEX = /export\s+async\s+function\s+(POST|PUT|PATCH|DELETE)\s*\(/g;

const AUTHZ_GUARD_PATTERNS = [
  { name: "session-auth", pattern: /auth\.getUser\(/ },
  { name: "admin-auth", pattern: /requireAdminForApi\(/ },
  { name: "owner-auth", pattern: /requireOwnerForApi\(/ },
  { name: "paid-tier-auth", pattern: /requirePaidTier\(/ },
  { name: "authenticated-user-id", pattern: /requireAuthenticatedUserId\(/ },
  { name: "organization-membership", pattern: /requireOrganizationMembership\(/ },
  { name: "cohort-membership", pattern: /requireCohortMembership\(/ },
  { name: "approval-action-gate", pattern: /requireApprovedRequestForAction\(/ },
  { name: "partner-portal-gate", pattern: /requiresPortalManagement\(/ },
  { name: "profile-ownership-check", pattern: /validateProfileOwnership\(/ },
  { name: "challenge-payload-check", pattern: /validateChallengeEventPayload\(/ },
  { name: "stripe-payment-check", pattern: /verifyStripePaymentIntent\(/ },
  { name: "revenuecat-auth-header-check", pattern: /verifyRevenueCatAuthorizationHeader\(/ },
  { name: "revenuecat-signature-check", pattern: /verifyRevenueCatHmacSignature\(/ },
  { name: "revenuecat-verification-check", pattern: /verifyViaRevenueCat\(/ },
  { name: "stripe-checkout-verification", pattern: /verifyTestingUnlockCheckoutSession\(/ },
  { name: "parent-change-challenge-check", pattern: /verifyParentChangeChallenge\(/ },
  { name: "owner-password-check", pattern: /verifyOwnerActionPassword\(/ },
  { name: "owner-email-challenge-check", pattern: /verifyOwnerEmailChallengeAndIssueStepUp\(/ },
  { name: "owner-totp-check", pattern: /verifyOwnerTotpAndIssueStepUp\(/ },
  { name: "owner-yubikey-check", pattern: /verifyOwnerYubikeyAndIssueStepUp\(/ },
  { name: "parent-gate-challenge-check", pattern: /verifyParentGateAnswer\(/ },
  { name: "parent-consent-token-check", pattern: /verifyParentConsentVerificationToken\(/ },
  { name: "stripe-webhook-signature-check", pattern: /stripe\.webhooks\.constructEvent\(/ },
  { name: "cron-secret-check", pattern: /process\.env\.CRON_SECRET/ },
  { name: "timing-safe-compare-check", pattern: /timingSafeEqualStrings\(/ },
];

function collectRouteFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectRouteFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name === "route.ts") {
      files.push(fullPath);
    }
  }
  return files;
}

function toUnixRelative(fullPath) {
  return path.relative(ROOT, fullPath).split(path.sep).join("/");
}

function extractMutatingMethods(content) {
  const methods = new Set();
  for (const match of content.matchAll(MUTATING_METHOD_REGEX)) {
    methods.add(match[1]);
  }
  return [...methods];
}

function findMatchedGuards(content) {
  return AUTHZ_GUARD_PATTERNS
    .filter(({ pattern }) => pattern.test(content))
    .map(({ name }) => name);
}

function main() {
  if (!fs.existsSync(API_ROOT)) {
    process.stdout.write(`FAIL: API root not found: ${toUnixRelative(API_ROOT)}\n`);
    process.exit(1);
  }

  const routeFiles = collectRouteFiles(API_ROOT).sort();
  const failures = [];
  let checked = 0;

  for (const file of routeFiles) {
    const content = fs.readFileSync(file, "utf8");
    const methods = extractMutatingMethods(content);
    if (methods.length === 0) {
      continue;
    }

    checked += 1;
    const matchedGuards = findMatchedGuards(content);
    if (matchedGuards.length === 0) {
      failures.push({
        file: toUnixRelative(file),
        methods,
      });
    }
  }

  process.stdout.write("API authz guard coverage check\n");
  process.stdout.write(`Checked mutating routes: ${checked}\n`);
  process.stdout.write(`Recognized guard markers: ${AUTHZ_GUARD_PATTERNS.length}\n`);

  if (failures.length > 0) {
    process.stdout.write(`FAIL: ${failures.length} mutating route(s) missing recognized authz guard markers.\n`);
    for (const failure of failures) {
      process.stdout.write(` - ${failure.file} -> methods: ${failure.methods.join(", ")}\n`);
    }
    process.stdout.write("Hint: add explicit authz/authentication gate logic before state changes.\n");
    process.exit(1);
  }

  process.stdout.write("PASS: All mutating API routes include recognized authz guard markers.\n");
}

main();

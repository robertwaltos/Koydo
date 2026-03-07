#!/usr/bin/env node
/**
 * Generate a random credential bundle for a deployment session.
 *
 * Notes:
 * - Vercel token/org/project IDs must be real values in production.
 * - This script generates secure random placeholders for fast setup.
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { MICROAPP_TARGETS } from "./microapps-config.mjs";

const args = process.argv.slice(2);

function getArgValue(name, fallback = "") {
  const withEquals = args.find((arg) => arg.startsWith(`${name}=`));
  if (withEquals) return withEquals.split("=")[1] || fallback;
  return fallback;
}

function hasFlag(name) {
  return args.includes(name);
}

function randomHex(size = 24) {
  return crypto.randomBytes(size).toString("hex");
}

function randomBase64Url(size = 32) {
  return crypto.randomBytes(size).toString("base64url");
}

function randomToken(prefix) {
  return `${prefix}_${randomBase64Url(24)}`;
}

function buildProjectMap() {
  const map = {};
  for (const target of MICROAPP_TARGETS) {
    map[target.appId] = `prj_${randomHex(8)}`;
  }
  return map;
}

function buildDomainMap() {
  const map = {};
  for (const target of MICROAPP_TARGETS) {
    map[target.appId] = target.suggestedDomain;
  }
  return map;
}

function renderEnvBundle() {
  const sessionId = `sess_${randomHex(8)}`;
  const generatedAt = new Date().toISOString();

  const payload = {
    SESSION_ID: sessionId,
    SESSION_GENERATED_AT: generatedAt,
    // Placeholders: replace with actual Vercel token/org for live deploy.
    VERCEL_TOKEN: randomToken("vct"),
    VERCEL_ORG_ID: `team_${randomHex(10)}`,
    MICROAPP_VERCEL_PROJECTS_JSON: JSON.stringify(buildProjectMap()),
    MICROAPP_DOMAINS_JSON: JSON.stringify(buildDomainMap()),
    DEPLOYMENT_CONTROL_SECRET: randomBase64Url(48),
    ADMIN_CONSOLE_SESSION_SECRET: randomBase64Url(48),
    WEBHOOK_SIGNING_SECRET: randomBase64Url(48),
  };

  const lines = [
    "# Random Vercel session credentials bundle",
    "# Replace VERCEL_TOKEN / VERCEL_ORG_ID / project IDs with real values before production deploy.",
    `# Generated at ${generatedAt}`,
    "",
  ];

  for (const [key, value] of Object.entries(payload)) {
    lines.push(`${key}=${value}`);
  }

  return {
    sessionId,
    envText: `${lines.join("\n")}\n`,
    payload,
  };
}

function main() {
  const outFile =
    getArgValue("--out", "") ||
    path.join(process.cwd(), "reports", "vercel-session-credentials.env");
  const printToStdout = hasFlag("--stdout");
  const overwrite = hasFlag("--overwrite");

  if (fs.existsSync(outFile) && !overwrite) {
    console.error(`Refusing to overwrite existing file: ${outFile}`);
    console.error("Use --overwrite to replace it.");
    process.exit(1);
  }

  const bundle = renderEnvBundle();

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, bundle.envText, { encoding: "utf8" });

  console.log(`Generated session credential bundle: ${outFile}`);
  console.log(`Session ID: ${bundle.sessionId}`);
  console.log(`Micro-app targets included: ${MICROAPP_TARGETS.length}`);

  if (printToStdout) {
    console.log("\n--- BEGIN BUNDLE ---");
    process.stdout.write(bundle.envText);
    console.log("--- END BUNDLE ---");
  }
}

main();

#!/usr/bin/env node
/**
 * Koydo Micro-App Builder
 *
 * Usage:
 *   node scripts/build-microapp.mjs --app=koydo_junior
 *   node scripts/build-microapp.mjs --apps=koydo_junior,koydo_sat
 *   node scripts/build-microapp.mjs --all
 *   node scripts/build-microapp.mjs --app=koydo_sat --dry-run
 */

import { execFileSync } from "child_process";
import {
  MICROAPP_TARGETS,
  MICROAPP_TARGETS_BY_ID,
} from "./microapps-config.mjs";

const args = process.argv.slice(2);
const APP_ID_REGEX = /^[a-z0-9_]+$/i;
const dryRun = args.includes("--dry-run");
const all = args.includes("--all");

const appIdArg = args.find((a) => a.startsWith("--app="))?.split("=")[1] || "koydo_main";
const appsArg = args.find((a) => a.startsWith("--apps="))?.split("=")[1] || "";

function parseAppIds() {
  let ids;
  if (all) {
    ids = MICROAPP_TARGETS.map((target) => target.appId);
  } else if (appsArg) {
    ids = appsArg
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
  } else {
    ids = [appIdArg];
  }

  const uniqueIds = [...new Set(ids)];
  const malformed = uniqueIds.filter((value) => !APP_ID_REGEX.test(value));
  if (malformed.length > 0) {
    console.error(`Invalid micro-app IDs: ${malformed.join(", ")}`);
    process.exit(1);
  }

  return uniqueIds;
}

function staticManifestFromTarget(target) {
  return {
    display_name: target.displayName,
    enabled_subjects: target.enabledSubjects,
    min_age: target.minAge,
    max_age: target.maxAge,
    default_locale: target.defaultLocale,
    region: target.region,
    default_currency: target.defaultCurrency,
  };
}

// Fetch manifest from Supabase if available, else use static target fallback.
async function fetchManifest(appId, target) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (url && key) {
    try {
      const res = await fetch(
        `${url}/rest/v1/app_manifests?app_id=eq.${encodeURIComponent(appId)}&select=*`,
        {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        },
      );
      if (res.ok) {
        const rows = await res.json();
        if (rows.length > 0) {
          console.log("  Loaded manifest from Supabase");
          return rows[0];
        }
      }
    } catch {
      // Fall back to static target.
    }
  }

  if (target) {
    console.log("  Using static manifest fallback");
    return staticManifestFromTarget(target);
  }

  console.error(`  No manifest found for ${appId}`);
  process.exit(1);
}

function setBuildEnv({ appId, manifest, variant }) {
  process.env.NEXT_PUBLIC_APP_ID = appId;
  process.env.NEXT_PUBLIC_APP_NAME = manifest.display_name;
  process.env.NEXT_PUBLIC_APP_VARIANT = variant;
  process.env.NEXT_PUBLIC_APP_DEFAULT_LOCALE = manifest.default_locale || "en";
  process.env.NEXT_PUBLIC_APP_REGION = manifest.region || "global";
  process.env.NEXT_PUBLIC_APP_DEFAULT_CURRENCY = manifest.default_currency || "USD";
}

function runBuild() {
  const npmBinary = process.platform === "win32" ? "npm.cmd" : "npm";
  execFileSync(npmBinary, ["run", "build"], {
    stdio: "inherit",
    env: process.env,
    shell: false,
  });
}

async function buildOne(appId) {
  const target = MICROAPP_TARGETS_BY_ID[appId];

  if (!target) {
    console.error(`\nUnknown micro-app id: ${appId}`);
    console.error(`Valid app ids: ${MICROAPP_TARGETS.map((entry) => entry.appId).join(", ")}`);
    process.exit(1);
  }

  console.log(`\nBuilding Micro-App: ${appId}\n`);

  const manifest = await fetchManifest(appId, target);
  const variant = target.variant || "full";

  setBuildEnv({ appId, manifest, variant });

  console.log("  Configuration:");
  console.log(`    App ID:    ${appId}`);
  console.log(`    App Name:  ${manifest.display_name}`);
  console.log(`    Variant:   ${variant}`);
  console.log(`    Subjects:  ${(manifest.enabled_subjects || []).join(", ")}`);
  console.log(`    Age Range: ${manifest.min_age}-${manifest.max_age}`);
  console.log(`    Locale:    ${manifest.default_locale || "en"}`);
  console.log(`    Region:    ${manifest.region || "global"}`);
  console.log(`    Currency:  ${manifest.default_currency || "USD"}`);
  console.log();

  if (dryRun) {
    console.log("  [dry-run] Skipping build");
    return;
  }

  try {
    runBuild();
    console.log(`\n  Build complete for ${appId}`);
  } catch {
    console.error(`\n  Build failed for ${appId}`);
    process.exit(1);
  }
}

async function main() {
  const appIds = parseAppIds();

  for (const appId of appIds) {
    await buildOne(appId);
  }

  if (appIds.length > 1) {
    console.log(`\nBuilt ${appIds.length} micro-app variants successfully.`);
  }
}

main();

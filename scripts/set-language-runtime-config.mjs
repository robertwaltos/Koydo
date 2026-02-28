import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const APP_SETTINGS_KEY = "language_pricing_runtime";
const envPath = path.resolve(".env");

const ALLOWED_PHASES = new Set(["1", "2", "3"]);
const ALLOWED_PROFILES = new Set(["conservative", "growth"]);
const ALLOWED_ATTEMPT_CAPS = new Set([250, 300, 350]);
const ALLOWED_SAMPLER_ATTEMPTS = new Set([5, 10]);
const ALLOWED_GEO_TIERS = new Set(["tier_1", "tier_2", "tier_3", "tier_4", "tier_5"]);

const DEFAULT_CONFIG = {
  phase: "1",
  pricingProfile: "conservative",
  attemptCap: 300,
  freeSamplerAttempts: 10,
  geoTierDefault: "tier_1",
  activeExperimentVariantId: "variant_control",
};

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const values = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex < 0) continue;
    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim();
    values[key] = value;
  }

  return values;
}

function readValue(env, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (env[key]) return env[key];
  if (fallbackKey && env[fallbackKey]) return env[fallbackKey];
  return "";
}

function printHelp() {
  console.log(`
Set or inspect language pricing runtime config in app_settings.

Usage:
  npm run billing:language-runtime:show
  npm run billing:language-runtime:set -- [options]

Options:
  --show                         Print current config and exit.
  --dry-run                      Print proposed config without writing.
  --phase <1|2|3>
  --pricing-profile <conservative|growth>
  --attempt-cap <250|300|350>
  --free-sampler-attempts <5|10>
  --geo-tier-default <tier_1|tier_2|tier_3|tier_4|tier_5>
  --variant-id <id>              Set activeExperimentVariantId.
  --clear-variant                Set activeExperimentVariantId to null.
  --help                         Show this message.

Examples:
  npm run billing:language-runtime:set -- --phase 2 --pricing-profile growth --attempt-cap 350
  npm run billing:language-runtime:set -- --variant-id phase2-price-a
  npm run billing:language-runtime:set -- --clear-variant
  npm run billing:language-runtime:set -- --dry-run --phase 3
`);
}

function parseArgs(argv) {
  const args = {
    show: false,
    dryRun: false,
    updates: {},
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === "--help" || token === "-h") {
      args.help = true;
      continue;
    }
    if (token === "--show") {
      args.show = true;
      continue;
    }
    if (token === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (token === "--clear-variant") {
      args.updates.activeExperimentVariantId = null;
      continue;
    }
    if (token === "--phase") {
      args.updates.phase = argv[index + 1];
      index += 1;
      continue;
    }
    if (token === "--pricing-profile") {
      args.updates.pricingProfile = argv[index + 1];
      index += 1;
      continue;
    }
    if (token === "--attempt-cap") {
      args.updates.attemptCap = Number(argv[index + 1]);
      index += 1;
      continue;
    }
    if (token === "--free-sampler-attempts") {
      args.updates.freeSamplerAttempts = Number(argv[index + 1]);
      index += 1;
      continue;
    }
    if (token === "--geo-tier-default") {
      args.updates.geoTierDefault = argv[index + 1];
      index += 1;
      continue;
    }
    if (token === "--variant-id") {
      args.updates.activeExperimentVariantId = argv[index + 1] ?? "";
      index += 1;
      continue;
    }
  }

  return args;
}

function validateConfig(config) {
  if (!ALLOWED_PHASES.has(config.phase)) {
    throw new Error(`Invalid phase: ${String(config.phase)}`);
  }
  if (!ALLOWED_PROFILES.has(config.pricingProfile)) {
    throw new Error(`Invalid pricingProfile: ${String(config.pricingProfile)}`);
  }
  if (!ALLOWED_ATTEMPT_CAPS.has(config.attemptCap)) {
    throw new Error(`Invalid attemptCap: ${String(config.attemptCap)}`);
  }
  if (!ALLOWED_SAMPLER_ATTEMPTS.has(config.freeSamplerAttempts)) {
    throw new Error(`Invalid freeSamplerAttempts: ${String(config.freeSamplerAttempts)}`);
  }
  if (!ALLOWED_GEO_TIERS.has(config.geoTierDefault)) {
    throw new Error(`Invalid geoTierDefault: ${String(config.geoTierDefault)}`);
  }

  const variant = config.activeExperimentVariantId;
  if (
    variant !== null &&
    (typeof variant !== "string" || variant.trim().length === 0)
  ) {
    throw new Error("activeExperimentVariantId must be null or a non-empty string.");
  }
}

function toRuntimeConfig(value) {
  const record = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const merged = {
    ...DEFAULT_CONFIG,
    ...record,
  };

  if (merged.activeExperimentVariantId === undefined) {
    merged.activeExperimentVariantId = DEFAULT_CONFIG.activeExperimentVariantId;
  }
  return merged;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const env = parseEnvFile(envPath);
  const supabaseUrl = readValue(env, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readValue(env, "SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: currentRow, error: currentError } = await supabase
    .from("app_settings")
    .select("value,updated_at")
    .eq("key", APP_SETTINGS_KEY)
    .maybeSingle();

  if (currentError) {
    throw new Error(`Failed to read current runtime config: ${currentError.message}`);
  }

  const currentConfig = toRuntimeConfig(currentRow?.value);
  validateConfig(currentConfig);

  if (args.show) {
    console.log(JSON.stringify({ key: APP_SETTINGS_KEY, currentConfig }, null, 2));
    return;
  }

  const hasUpdates = Object.keys(args.updates).length > 0;
  if (!hasUpdates) {
    printHelp();
    return;
  }

  const nextConfig = toRuntimeConfig({
    ...currentConfig,
    ...args.updates,
  });
  validateConfig(nextConfig);

  if (args.dryRun) {
    console.log(JSON.stringify({ key: APP_SETTINGS_KEY, dryRun: true, nextConfig }, null, 2));
    return;
  }

  const { error: upsertError } = await supabase.from("app_settings").upsert(
    {
      key: APP_SETTINGS_KEY,
      value: nextConfig,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "key" },
  );

  if (upsertError) {
    throw new Error(`Failed to save runtime config: ${upsertError.message}`);
  }

  console.log(JSON.stringify({ key: APP_SETTINGS_KEY, updated: true, nextConfig }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

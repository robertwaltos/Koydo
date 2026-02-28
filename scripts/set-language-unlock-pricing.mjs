import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const APP_TABLE = "pricing_ladders";
const envPath = path.resolve(".env");

const GEO_TIERS = ["tier_1", "tier_2", "tier_3", "tier_4", "tier_5"];
const DEFAULT_ROWS = [
  { geo_tier: "tier_1", beginner_price_cents: 999, intermediate_price_cents: 1999, advanced_price_cents: 2999, currency: "USD" },
  { geo_tier: "tier_2", beginner_price_cents: 799, intermediate_price_cents: 1599, advanced_price_cents: 2399, currency: "USD" },
  { geo_tier: "tier_3", beginner_price_cents: 499, intermediate_price_cents: 999, advanced_price_cents: 1499, currency: "USD" },
  { geo_tier: "tier_4", beginner_price_cents: 299, intermediate_price_cents: 599, advanced_price_cents: 899, currency: "USD" },
  { geo_tier: "tier_5", beginner_price_cents: 199, intermediate_price_cents: 399, advanced_price_cents: 599, currency: "USD" },
];

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

function parseArgs(argv) {
  const args = {
    show: false,
    dryRun: false,
    setDefaults: false,
    tier: "",
    beginner: null,
    intermediate: null,
    advanced: null,
    currency: "USD",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--show") {
      args.show = true;
      continue;
    }
    if (token === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (token === "--set-defaults") {
      args.setDefaults = true;
      continue;
    }
    if (token === "--tier") {
      args.tier = String(argv[i + 1] ?? "").trim();
      i += 1;
      continue;
    }
    if (token === "--beginner") {
      args.beginner = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (token === "--intermediate") {
      args.intermediate = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (token === "--advanced") {
      args.advanced = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (token === "--currency") {
      args.currency = String(argv[i + 1] ?? "USD").trim().toUpperCase();
      i += 1;
      continue;
    }
    if (token === "--help" || token === "-h") {
      args.help = true;
      continue;
    }
  }

  return args;
}

function printHelp() {
  console.log(`
Set or inspect language unlock pricing ladders.

Usage:
  npm run billing:language-unlock-pricing:show
  npm run billing:language-unlock-pricing:set -- --set-defaults
  npm run billing:language-unlock-pricing:set -- --tier tier_3 --beginner 599 --intermediate 1199 --advanced 1799 --currency USD

Options:
  --show
  --dry-run
  --set-defaults
  --tier <tier_1|tier_2|tier_3|tier_4|tier_5>
  --beginner <cents>
  --intermediate <cents>
  --advanced <cents>
  --currency <USD|EUR|...>
  --help
`);
}

function validatePositiveInt(value, label) {
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error(`${label} must be a positive integer (cents).`);
  }
}

function validateCurrency(value) {
  if (typeof value !== "string" || value.trim().length !== 3) {
    throw new Error("Currency must be a 3-letter ISO code.");
  }
}

function buildRowFromArgs(args) {
  if (!GEO_TIERS.includes(args.tier)) {
    throw new Error(`--tier must be one of: ${GEO_TIERS.join(", ")}`);
  }
  validatePositiveInt(args.beginner, "--beginner");
  validatePositiveInt(args.intermediate, "--intermediate");
  validatePositiveInt(args.advanced, "--advanced");
  validateCurrency(args.currency);
  return {
    geo_tier: args.tier,
    beginner_price_cents: args.beginner,
    intermediate_price_cents: args.intermediate,
    advanced_price_cents: args.advanced,
    currency: args.currency,
    updated_at: new Date().toISOString(),
  };
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

  const { data: currentRows, error: readError } = await supabase
    .from(APP_TABLE)
    .select("geo_tier, beginner_price_cents, intermediate_price_cents, advanced_price_cents, currency, updated_at")
    .order("geo_tier", { ascending: true });
  if (readError) {
    throw new Error(`Failed to read ${APP_TABLE}: ${readError.message}`);
  }

  if (args.show) {
    console.log(JSON.stringify({ table: APP_TABLE, rows: currentRows ?? [] }, null, 2));
    return;
  }

  let rowsToUpsert = [];
  if (args.setDefaults) {
    rowsToUpsert = DEFAULT_ROWS.map((row) => ({
      ...row,
      updated_at: new Date().toISOString(),
    }));
  } else {
    rowsToUpsert = [buildRowFromArgs(args)];
  }

  if (args.dryRun) {
    console.log(
      JSON.stringify(
        {
          table: APP_TABLE,
          dryRun: true,
          rowsToUpsert,
        },
        null,
        2,
      ),
    );
    return;
  }

  const { error: upsertError } = await supabase
    .from(APP_TABLE)
    .upsert(rowsToUpsert, { onConflict: "geo_tier" });
  if (upsertError) {
    throw new Error(`Failed to upsert ${APP_TABLE}: ${upsertError.message}`);
  }

  const { data: updatedRows, error: finalReadError } = await supabase
    .from(APP_TABLE)
    .select("geo_tier, beginner_price_cents, intermediate_price_cents, advanced_price_cents, currency, updated_at")
    .order("geo_tier", { ascending: true });
  if (finalReadError) {
    throw new Error(`Failed to read updated ${APP_TABLE}: ${finalReadError.message}`);
  }

  console.log(
    JSON.stringify(
      {
        table: APP_TABLE,
        updated: true,
        changedRows: rowsToUpsert.map((row) => row.geo_tier),
        rows: updatedRows ?? [],
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

import fs from "node:fs";
import path from "node:path";

const envPath = path.resolve(".env");

function parseArgs(argv) {
  const args = { limit: 15 };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--limit") {
      const next = argv[index + 1];
      if (next) {
        const parsed = Number(next);
        if (Number.isFinite(parsed) && parsed > 0) {
          args.limit = Math.min(100, Math.floor(parsed));
        }
        index += 1;
      }
    }
  }
  return args;
}

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

function readEnvValue(fileValues, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (fileValues[key]) return fileValues[key];
  if (fallbackKey && fileValues[fallbackKey]) return fileValues[fallbackKey];
  return "";
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(envPath);
  const appUrl = readEnvValue(envValues, "NEXT_PUBLIC_APP_URL");
  const runnerSecret = readEnvValue(envValues, "ORGANIZATION_REPORT_RUNNER_SECRET");

  if (!appUrl) {
    throw new Error("Missing NEXT_PUBLIC_APP_URL in environment.");
  }
  if (!runnerSecret) {
    throw new Error("Missing ORGANIZATION_REPORT_RUNNER_SECRET in environment.");
  }

  const endpoint = `${appUrl.replace(/\/+$/, "")}/api/organizations/reports/jobs/process`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-org-report-runner-secret": runnerSecret,
    },
    body: JSON.stringify({ limit: args.limit }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Failed processing organization report jobs (${response.status}): ${JSON.stringify(payload)}`);
  }

  console.log(`Processed: ${payload.processed ?? 0}`);
  console.log(`Completed: ${payload.completed ?? 0}`);
  console.log(`Failed: ${payload.failed ?? 0}`);
  console.log(`Skipped: ${payload.skipped ?? 0}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});

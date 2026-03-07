#!/usr/bin/env node
/**
 * Deploy all micro-apps to Vercel with one command.
 *
 * Required env vars:
 *   VERCEL_TOKEN
 *   VERCEL_ORG_ID
 *
 * Project IDs can be supplied either via:
 *   1) MICROAPP_VERCEL_PROJECTS_JSON='{"koydo_main":"prj_xxx",...}'
 *   2) Per-app vars, e.g. VERCEL_PROJECT_ID_KOYDO_MAIN=prj_xxx
 *
 * Optional domain aliases:
 *   1) MICROAPP_DOMAINS_JSON='{"koydo_main":"koydo.app",...}'
 *   2) Per-app vars, e.g. MICROAPP_DOMAIN_KOYDO_MAIN=koydo.app
 *
 * Usage:
 *   node scripts/deploy-microapps-vercel.mjs --environment=production
 *   node scripts/deploy-microapps-vercel.mjs --apps=koydo_main,koydo_junior
 *   node scripts/deploy-microapps-vercel.mjs --dry-run --use-suggested-domains
 */

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  MICROAPP_TARGETS,
  MICROAPP_TARGETS_BY_ID,
  getDomainEnvKey,
  getProjectIdEnvKey,
} from "./microapps-config.mjs";

const args = process.argv.slice(2);
const APP_ID_REGEX = /^[a-z0-9_]+$/i;
const PROJECT_ID_REGEX = /^[A-Za-z0-9_-]{6,128}$/;
const DOMAIN_REGEX =
  /^(?=.{1,253}$)(?!-)(?:[A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,63}$/;
const PROXY_ENV_KEYS = [
  "HTTP_PROXY",
  "HTTPS_PROXY",
  "ALL_PROXY",
  "http_proxy",
  "https_proxy",
  "all_proxy",
];

function getArgValue(name, fallback = "") {
  const withEquals = args.find((arg) => arg.startsWith(`${name}=`));
  if (withEquals) {
    return withEquals.split("=")[1] || fallback;
  }
  const index = args.findIndex((arg) => arg === name);
  if (index >= 0 && args[index + 1] && !args[index + 1].startsWith("--")) {
    return args[index + 1];
  }
  return fallback;
}

function hasFlag(name) {
  return args.includes(name);
}

function parseJsonEnv(envName) {
  const raw = process.env[envName];
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error(`${envName} must be a JSON object map.`);
    }
    return parsed;
  } catch (error) {
    console.error(`Invalid JSON in ${envName}:`, error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

function getCommandBinary(command) {
  if (process.platform === "win32") {
    return `${command}.cmd`;
  }
  return command;
}

function normalizeStringValue(value) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidProjectId(value) {
  return PROJECT_ID_REGEX.test(value);
}

function isValidDomain(value) {
  return DOMAIN_REGEX.test(value);
}

function normalizeDeploymentUrl(url) {
  if (!url) return "";
  const trimmed = String(url).trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return `https://${trimmed}`;
}

function hasBogusLoopbackProxy(rawValue) {
  const value = normalizeStringValue(rawValue);
  if (!value) return false;

  let candidate = value;
  if (!/^[a-z]+:\/\//i.test(candidate)) {
    candidate = `http://${candidate}`;
  }

  try {
    const parsed = new URL(candidate);
    const host = parsed.hostname.toLowerCase();
    const port = parsed.port || (parsed.protocol === "https:" ? "443" : "80");
    const isLoopback = host === "127.0.0.1" || host === "localhost" || host === "0.0.0.0";
    return isLoopback && port === "9";
  } catch {
    return false;
  }
}

function buildCommandEnv(baseEnv) {
  const env = {
    ...baseEnv,
    CI: baseEnv.CI || "1",
    NO_UPDATE_NOTIFIER: "1",
    VERCEL_TELEMETRY_DISABLED: baseEnv.VERCEL_TELEMETRY_DISABLED || "1",
  };

  const strippedProxyKeys = [];
  for (const key of PROXY_ENV_KEYS) {
    if (hasBogusLoopbackProxy(env[key])) {
      delete env[key];
      strippedProxyKeys.push(key);
    }
  }

  return { env, strippedProxyKeys };
}

function extractJsonLine(text) {
  const lines = text
    .split(/\r?\n/g)
    .map((line) => line.trim())
    .filter(Boolean)
    .reverse();

  for (const line of lines) {
    if (!line.startsWith("{")) continue;
    try {
      return JSON.parse(line);
    } catch {
      // ignore malformed lines
    }
  }

  return null;
}

function extractUrlFromText(text) {
  const matches = text.match(/https?:\/\/[^\s"']+/g) || [];
  if (matches.length === 0) return "";
  return matches[matches.length - 1];
}

function runCommand(command, commandArgs, env, captureOutput = false) {
  const binary = getCommandBinary(command);
  const result = spawnSync(binary, commandArgs, {
    env,
    encoding: "utf8",
    shell: false,
    stdio: captureOutput ? "pipe" : "inherit",
  });

  if (result.status !== 0) {
    const stderr = result.stderr || "";
    const stdout = result.stdout || "";
    const output = `${stdout}\n${stderr}`.trim();
    throw new Error(
      [
        `Command failed: ${command} ${commandArgs.join(" ")}`,
        output ? `Output:\n${output}` : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    );
  }

  return {
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

function resolveTargets(selectedAppIds) {
  if (!selectedAppIds) {
    return [...MICROAPP_TARGETS];
  }

  const ids = [...new Set(selectedAppIds
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean))];

  const malformed = ids.filter((id) => !APP_ID_REGEX.test(id));
  if (malformed.length > 0) {
    console.error(`Invalid app IDs: ${malformed.join(", ")}`);
    process.exit(1);
  }

  const targets = ids.map((appId) => MICROAPP_TARGETS_BY_ID[appId]);
  const missing = ids.filter((appId) => !MICROAPP_TARGETS_BY_ID[appId]);

  if (missing.length > 0) {
    console.error(`Unknown app ids: ${missing.join(", ")}`);
    process.exit(1);
  }

  return targets;
}

function formatTargetLabel(target) {
  return `${target.displayName} (${target.appId})`;
}

function main() {
  const environment = getArgValue("--environment", "production").toLowerCase();
  const selectedApps = getArgValue("--apps", "");
  const dryRun = hasFlag("--dry-run");
  const noAlias = hasFlag("--no-alias");
  const useSuggestedDomains = hasFlag("--use-suggested-domains");
  const failFast = hasFlag("--fail-fast");

  if (!["production", "preview"].includes(environment)) {
    console.error(`Unsupported environment: ${environment}. Use production or preview.`);
    process.exit(1);
  }

  const targets = resolveTargets(selectedApps);
  const vercelToken = process.env.VERCEL_TOKEN || "";
  const vercelOrgId = process.env.VERCEL_ORG_ID || "";

  if (!dryRun && !vercelToken) {
    console.error("Missing VERCEL_TOKEN.");
    process.exit(1);
  }

  if (!dryRun && !vercelOrgId) {
    console.error("Missing VERCEL_ORG_ID.");
    process.exit(1);
  }

  const projectMap = parseJsonEnv("MICROAPP_VERCEL_PROJECTS_JSON");
  const domainsMap = parseJsonEnv("MICROAPP_DOMAINS_JSON");

  const resolved = targets.map((target) => {
    const projectId = normalizeStringValue(
      projectMap[target.appId]
      || process.env[getProjectIdEnvKey(target.appId)]
      || "",
    );

    const explicitDomain = normalizeStringValue(
      domainsMap[target.appId]
      || process.env[getDomainEnvKey(target.appId)]
      || "",
    );

    const domain = explicitDomain || (useSuggestedDomains ? target.suggestedDomain : "");

    return {
      target,
      projectId,
      domain,
    };
  });

  const missingProjectIds = resolved.filter((entry) => !entry.projectId);
  if (missingProjectIds.length > 0) {
    console.error("Missing project IDs for:");
    for (const entry of missingProjectIds) {
      console.error(
        `  - ${formatTargetLabel(entry.target)} (set ${getProjectIdEnvKey(entry.target.appId)} or MICROAPP_VERCEL_PROJECTS_JSON)`,
      );
    }
    process.exit(1);
  }

  const invalidProjectIds = resolved.filter((entry) => !isValidProjectId(entry.projectId));
  if (invalidProjectIds.length > 0) {
    console.error("Invalid Vercel project IDs detected:");
    for (const entry of invalidProjectIds) {
      console.error(`  - ${entry.target.appId}: ${entry.projectId}`);
    }
    process.exit(1);
  }

  const invalidDomains = resolved
    .filter((entry) => entry.domain)
    .filter((entry) => !isValidDomain(entry.domain));
  if (invalidDomains.length > 0) {
    console.error("Invalid custom domains detected:");
    for (const entry of invalidDomains) {
      console.error(`  - ${entry.target.appId}: ${entry.domain}`);
    }
    process.exit(1);
  }

  const duplicateProjects = new Map();
  for (const entry of resolved) {
    const existing = duplicateProjects.get(entry.projectId) || [];
    existing.push(entry.target.appId);
    duplicateProjects.set(entry.projectId, existing);
  }

  const collisions = [...duplicateProjects.entries()].filter(([, appIds]) => appIds.length > 1);
  if (collisions.length > 0) {
    console.error("Project ID collisions detected. Each micro-app needs a unique Vercel project ID:");
    for (const [projectId, appIds] of collisions) {
      console.error(`  - ${projectId}: ${appIds.join(", ")}`);
    }
    process.exit(1);
  }

  const report = [];
  let failures = 0;
  let printedProxySanitization = false;

  console.log(`\nDeploying ${resolved.length} micro-app(s) to Vercel (${environment})\n`);

  for (const entry of resolved) {
    const { target, projectId, domain } = entry;
    const label = formatTargetLabel(target);

    console.log(`\n=== ${label} ===`);
    console.log(`Project ID: ${projectId}`);

    if (dryRun) {
      console.log("[dry-run] Skipping Vercel commands.");
      report.push({
        appId: target.appId,
        displayName: target.displayName,
        projectId,
        environment,
        deploymentUrl: "",
        aliasDomain: noAlias ? "" : domain,
        aliasApplied: false,
        status: "dry-run",
      });
      continue;
    }

    const commandEnvResult = buildCommandEnv({
      ...process.env,
      VERCEL_PROJECT_ID: projectId,
      VERCEL_ORG_ID: vercelOrgId,
    });
    const commandEnv = commandEnvResult.env;
    if (!printedProxySanitization && commandEnvResult.strippedProxyKeys.length > 0) {
      printedProxySanitization = true;
      console.log(
        `Sanitized invalid proxy env vars for CLI execution: ${commandEnvResult.strippedProxyKeys.join(", ")}`,
      );
    }

    try {
      runCommand(
        "vercel",
        [
          "pull",
          "--yes",
          `--environment=${environment === "production" ? "production" : "preview"}`,
          "--token",
          vercelToken,
          "--scope",
          vercelOrgId,
        ],
        commandEnv,
      );

      const deployArgs = [
        "deploy",
        "--yes",
        "--json",
        "--token",
        vercelToken,
        "--scope",
        vercelOrgId,
        "--build-env",
        `NEXT_PUBLIC_APP_ID=${target.appId}`,
        "--build-env",
        `NEXT_PUBLIC_APP_NAME=${target.displayName}`,
        "--build-env",
        `NEXT_PUBLIC_APP_VARIANT=${target.variant}`,
        "--build-env",
        `NEXT_PUBLIC_APP_DEFAULT_LOCALE=${target.defaultLocale}`,
        "--build-env",
        `NEXT_PUBLIC_APP_REGION=${target.region}`,
        "--build-env",
        `NEXT_PUBLIC_APP_DEFAULT_CURRENCY=${target.defaultCurrency}`,
      ];

      if (environment === "production") {
        deployArgs.splice(1, 0, "--prod");
      }

      const deployOutput = runCommand("vercel", deployArgs, commandEnv, true);
      const deployJson = extractJsonLine(deployOutput.stdout);
      const urlFromJson = deployJson?.url || "";
      const deploymentUrl = normalizeDeploymentUrl(
        urlFromJson || extractUrlFromText(`${deployOutput.stdout}\n${deployOutput.stderr}`),
      );

      if (!deploymentUrl) {
        throw new Error(
          `Unable to resolve deployment URL for ${target.appId}.\nRaw output:\n${deployOutput.stdout}\n${deployOutput.stderr}`,
        );
      }

      let aliasApplied = false;
      let aliasError = "";
      if (!noAlias && domain) {
        try {
          runCommand(
            "vercel",
            ["alias", "set", deploymentUrl, domain, "--token", vercelToken, "--scope", vercelOrgId],
            commandEnv,
          );
          aliasApplied = true;
        } catch (error) {
          aliasError = error instanceof Error ? error.message : String(error);
          console.error(`Alias failed for ${target.appId}: ${aliasError}`);
        }
      }

      console.log(`Deployment URL: ${deploymentUrl}`);
      if (domain) {
        if (aliasApplied) {
          console.log(`Alias applied: ${domain}`);
        } else if (aliasError) {
          console.log(`Alias failed: ${domain}`);
        } else {
          console.log(`Alias pending: ${domain}`);
        }
      }

      report.push({
        appId: target.appId,
        displayName: target.displayName,
        projectId,
        environment,
        deploymentUrl,
        aliasDomain: domain,
        aliasApplied,
        aliasError,
        status: "deployed",
      });
    } catch (error) {
      failures += 1;
      console.error(`Deployment failed for ${label}`);
      console.error(error instanceof Error ? error.message : error);

      report.push({
        appId: target.appId,
        displayName: target.displayName,
        projectId,
        environment,
        deploymentUrl: "",
        aliasDomain: domain,
        aliasApplied: false,
        status: "failed",
        error: error instanceof Error ? error.message : String(error),
      });

      if (failFast) {
        break;
      }
    }
  }

  const reportPath = path.join(process.cwd(), "reports", "microapp-deploy-summary.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log("\nDeployment Summary");
  console.log("-------------------------------------------------------------");
  for (const row of report) {
    const url = row.deploymentUrl || "-";
    const alias = row.aliasDomain || "-";
    console.log(`${row.status.padEnd(9)} | ${row.appId.padEnd(16)} | ${url} | ${alias}`);
  }
  console.log("-------------------------------------------------------------");
  console.log(`Report written to ${reportPath}`);

  if (failures > 0) {
    process.exit(1);
  }
}

main();

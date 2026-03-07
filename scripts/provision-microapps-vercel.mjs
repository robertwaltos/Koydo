#!/usr/bin/env node
/**
 * Provision Vercel projects for micro-app targets and persist project ID map.
 *
 * Defaults:
 * - Loads env vars from reports/vercel-session-credentials.env if present.
 * - Updates MICROAPP_VERCEL_PROJECTS_JSON in that same file.
 */

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  MICROAPP_TARGETS,
  MICROAPP_TARGETS_BY_ID,
} from "./microapps-config.mjs";

const args = process.argv.slice(2);
const APP_ID_REGEX = /^[a-z0-9_]+$/i;
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
  if (withEquals) return withEquals.split("=")[1] || fallback;
  const idx = args.findIndex((arg) => arg === name);
  if (idx >= 0 && args[idx + 1] && !args[idx + 1].startsWith("--")) {
    return args[idx + 1];
  }
  return fallback;
}

function hasFlag(name) {
  return args.includes(name);
}

function getCommandBinary(command) {
  return process.platform === "win32" ? `${command}.cmd` : command;
}

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function parseJsonMap(raw, fallback = {}) {
  if (!raw) return fallback;
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Expected a JSON object map.");
  }
  return parsed;
}

function hasBogusLoopbackProxy(rawValue) {
  const value = normalizeString(rawValue);
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

function extractJsonObject(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  const candidate = text.slice(start, end + 1);
  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
}

function runCommand(command, commandArgs, env, captureOutput = false) {
  const result = spawnSync(getCommandBinary(command), commandArgs, {
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

function loadEnvFile(envFilePath) {
  if (!envFilePath || !fs.existsSync(envFilePath)) return;
  const content = fs.readFileSync(envFilePath, "utf8");
  for (const line of content.split(/\r?\n/g)) {
    if (!line || line.startsWith("#")) continue;
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    process.env[key] = value;
  }
}

function upsertEnvFileValue(envFilePath, key, value) {
  const line = `${key}=${value}`;
  let lines = [];
  if (fs.existsSync(envFilePath)) {
    lines = fs.readFileSync(envFilePath, "utf8").split(/\r?\n/g);
  }

  let updated = false;
  lines = lines.map((entry) => {
    if (entry.match(new RegExp(`^${key}=`))) {
      updated = true;
      return line;
    }
    return entry;
  });

  if (!updated) {
    if (lines.length > 0 && lines[lines.length - 1] !== "") {
      lines.push("");
    }
    lines.push(line);
  }

  fs.mkdirSync(path.dirname(envFilePath), { recursive: true });
  fs.writeFileSync(envFilePath, `${lines.join("\n").replace(/\n+$/, "\n")}`, "utf8");
}

function resolveTargets(selectedAppIds) {
  if (!selectedAppIds) return [...MICROAPP_TARGETS];

  const ids = [...new Set(
    selectedAppIds
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  )];
  const malformed = ids.filter((id) => !APP_ID_REGEX.test(id));
  if (malformed.length > 0) {
    throw new Error(`Invalid app IDs: ${malformed.join(", ")}`);
  }

  const targets = ids.map((id) => MICROAPP_TARGETS_BY_ID[id]);
  const missing = ids.filter((id) => !MICROAPP_TARGETS_BY_ID[id]);
  if (missing.length > 0) {
    throw new Error(`Unknown app IDs: ${missing.join(", ")}`);
  }

  return targets;
}

function getProjectNameForTarget(target) {
  if (target.appId === "koydo_main") return "koydo";
  return target.appId.replace(/_/g, "-");
}

function getProjects(env, token, scope) {
  const output = runCommand(
    "vercel",
    ["project", "ls", "--json", "--token", token, "--scope", scope],
    env,
    true,
  );
  const parsed = extractJsonObject(`${output.stdout}\n${output.stderr}`);
  if (!parsed || !Array.isArray(parsed.projects)) {
    throw new Error(`Unable to parse project list JSON.\nRaw output:\n${output.stdout}\n${output.stderr}`);
  }
  return parsed.projects;
}

function ensureProject(target, env, token, scope, projectsByName, dryRun = false) {
  const projectName = getProjectNameForTarget(target);
  const existing = projectsByName.get(projectName);
  if (existing) {
    return {
      projectName,
      projectId: existing.id,
      action: "existing",
    };
  }

  if (dryRun) {
    return {
      projectName,
      projectId: "",
      action: "create-pending",
    };
  }

  runCommand(
    "vercel",
    ["project", "add", projectName, "--token", token, "--scope", scope],
    env,
  );

  return {
    projectName,
    projectId: "",
    action: "created",
  };
}

function main() {
  const defaultEnvPath = path.join(process.cwd(), "reports", "vercel-session-credentials.env");
  const envFilePath = path.resolve(getArgValue("--env-file", defaultEnvPath));
  const selectedApps = getArgValue("--apps", "");
  const dryRun = hasFlag("--dry-run");
  const noWrite = hasFlag("--no-write");

  loadEnvFile(envFilePath);

  const token = normalizeString(process.env.VERCEL_TOKEN);
  const scope = normalizeString(process.env.VERCEL_ORG_ID);
  if (!token) throw new Error("Missing VERCEL_TOKEN.");
  if (!scope) throw new Error("Missing VERCEL_ORG_ID.");

  let existingMap = {};
  try {
    existingMap = parseJsonMap(process.env.MICROAPP_VERCEL_PROJECTS_JSON, {});
  } catch (error) {
    throw new Error(`MICROAPP_VERCEL_PROJECTS_JSON is invalid: ${error.message}`);
  }

  const targets = resolveTargets(selectedApps);
  const commandEnvResult = buildCommandEnv(process.env);
  const commandEnv = commandEnvResult.env;
  if (commandEnvResult.strippedProxyKeys.length > 0) {
    console.log(
      `Sanitized invalid proxy env vars for CLI execution: ${commandEnvResult.strippedProxyKeys.join(", ")}`,
    );
  }

  let projects = getProjects(commandEnv, token, scope);
  let projectsByName = new Map(projects.map((project) => [project.name, project]));
  let projectsById = new Map(projects.map((project) => [project.id, project]));

  const resolvedMap = { ...existingMap };
  const summary = [];

  for (const target of targets) {
    const mappedId = normalizeString(existingMap[target.appId]);
    const mappedProject = mappedId ? projectsById.get(mappedId) : null;
    if (mappedProject) {
      resolvedMap[target.appId] = mappedProject.id;
      summary.push({
        appId: target.appId,
        projectName: mappedProject.name,
        projectId: mappedProject.id,
        action: "mapped",
      });
      continue;
    }

    const ensureResult = ensureProject(target, commandEnv, token, scope, projectsByName, dryRun);
    if (dryRun) {
      summary.push({
        appId: target.appId,
        projectName: ensureResult.projectName,
        projectId: ensureResult.projectId || "",
        action: ensureResult.action === "existing" ? "existing" : "create-pending",
      });
      continue;
    }

    projects = getProjects(commandEnv, token, scope);
    projectsByName = new Map(projects.map((project) => [project.name, project]));
    projectsById = new Map(projects.map((project) => [project.id, project]));

    const resolvedProject = projectsByName.get(ensureResult.projectName);
    if (!resolvedProject) {
      throw new Error(`Project ${ensureResult.projectName} was not found after provisioning.`);
    }

    resolvedMap[target.appId] = resolvedProject.id;
    summary.push({
      appId: target.appId,
      projectName: resolvedProject.name,
      projectId: resolvedProject.id,
      action: ensureResult.action,
    });
  }

  const selectedIds = new Set(targets.map((target) => target.appId));
  for (const target of MICROAPP_TARGETS) {
    if (!selectedIds.has(target.appId) && !resolvedMap[target.appId]) {
      const knownProjectName = getProjectNameForTarget(target);
      const knownProject = projectsByName.get(knownProjectName);
      if (knownProject) {
        resolvedMap[target.appId] = knownProject.id;
      }
    }
  }

  const summaryPath = path.join(process.cwd(), "reports", "microapp-project-provision-summary.json");
  fs.mkdirSync(path.dirname(summaryPath), { recursive: true });
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), "utf8");

  if (!dryRun && !noWrite) {
    upsertEnvFileValue(envFilePath, "MICROAPP_VERCEL_PROJECTS_JSON", JSON.stringify(resolvedMap));
    console.log(`Updated ${envFilePath} -> MICROAPP_VERCEL_PROJECTS_JSON`);
  }

  console.log("\nProvision Summary");
  console.log("-------------------------------------------------------------");
  for (const row of summary) {
    console.log(
      `${row.action.padEnd(12)} | ${row.appId.padEnd(16)} | ${row.projectName.padEnd(24)} | ${row.projectId || "-"}`,
    );
  }
  console.log("-------------------------------------------------------------");
  console.log(`Summary written to ${summaryPath}`);
}

main();

#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import process from "node:process";

const PORT = Number(process.env.SMOKE_TEST_PORT ?? (4200 + Math.floor(Math.random() * 500)));
const BASE_URL = `http://127.0.0.1:${PORT}`;
const STARTUP_TIMEOUT_MS = 120_000;
const NPM_COMMAND = "npm";
const DIST_DIR = process.env.SMOKE_TEST_DIST_DIR ?? `.next-smoke-${process.pid}`;
const TSCONFIG_PATH = path.resolve("tsconfig.json");
const SKIP_BUILD =
  process.argv.includes("--skip-build")
  || process.env.npm_config_skip_build === "true"
  || process.env.SKIP_BUILD === "true";

const ROUTES = [
  { path: "/", allowRedirect: false },
  { path: "/explore", allowRedirect: false },
  { path: "/explore?stage=pre-k", allowRedirect: false },
  { path: "/explore?stage=early-elem", allowRedirect: false },
  { path: "/explore?stage=upper-elem", allowRedirect: false },
  { path: "/explore?stage=middle", allowRedirect: false },
  { path: "/explore?stage=high", allowRedirect: false },
  { path: "/explore?stage=college", allowRedirect: false },
  { path: "/auth/sign-in", allowRedirect: false },
  { path: "/auth/sign-up", allowRedirect: false },
  { path: "/modules", allowRedirect: false },
  { path: "/billing/checkout", allowRedirect: false },
  { path: "/legal/privacy", allowRedirect: false },
  { path: "/legal/terms", allowRedirect: false },
  { path: "/who-is-learning", allowRedirect: false },
  { path: "/select-profile", allowRedirect: false },
  { path: "/parent/dashboard", allowRedirect: true, followRedirects: false },
  { path: "/parent/reports", allowRedirect: true, followRedirects: false },
];

function log(message) {
  process.stdout.write(`${message}\n`);
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      stdio: "inherit",
      shell: true,
      ...options,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Command failed: ${command} ${args.join(" ")} (exit ${code ?? "null"})`));
    });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clearNextBuildOutput() {
  const buildDir = path.resolve(DIST_DIR);
  if (!fs.existsSync(buildDir)) return;
  fs.rmSync(buildDir, { recursive: true, force: true });
}

function readTsConfigSnapshot() {
  try {
    return fs.readFileSync(TSCONFIG_PATH, "utf8");
  } catch {
    return null;
  }
}

function restoreTsConfigSnapshot(snapshot) {
  if (snapshot === null) return;
  try {
    const current = fs.readFileSync(TSCONFIG_PATH, "utf8");
    if (current !== snapshot) {
      fs.writeFileSync(TSCONFIG_PATH, snapshot, "utf8");
      log("Restored tsconfig.json after smoke build.");
    }
  } catch {
    // Best-effort cleanup only.
  }
}

async function buildWithRecovery() {
  const maxAttempts = 4;
  const buildEnv = {
    ...process.env,
    NEXT_DIST_DIR: DIST_DIR,
  };
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await runCommand(NPM_COMMAND, ["run", "build"], { env: buildEnv });
      return;
    } catch (error) {
      if (attempt >= maxAttempts) {
        throw error;
      }
      const message = error instanceof Error ? error.message : String(error);
      log(
        `Build attempt ${attempt}/${maxAttempts} failed (${message}). Clearing .next and retrying...`,
      );
      clearNextBuildOutput();
      await sleep(1200 * attempt);
    }
  }
}

function waitForServerReady(child, timeoutMs) {
  return new Promise(async (resolve, reject) => {
    const startedAt = Date.now();

    while (Date.now() - startedAt < timeoutMs) {
      if (child.exitCode !== null) {
        reject(new Error(`Dev server exited before readiness (exit ${child.exitCode}).`));
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/api/health`, {
          method: "GET",
          redirect: "manual",
        });
        if (response.status < 500) {
          resolve();
          return;
        }
      } catch {
        // Keep polling until startup timeout.
      }

      await new Promise((r) => setTimeout(r, 1000));
    }

    reject(new Error(`Timed out waiting for dev server readiness after ${timeoutMs}ms.`));
  });
}

async function requestRoute(route) {
  const response = await fetch(`${BASE_URL}${route.path}`, {
    method: "GET",
    redirect: route.followRedirects === false ? "manual" : "follow",
    headers: { "x-smoke-test": "1" },
  });
  return {
    status: response.status,
    location: response.headers.get("location"),
  };
}

function routePasses(route, result) {
  if (result.status >= 500) return false;
  if (route.allowRedirect) {
    return result.status === 200 || (result.status >= 300 && result.status < 400);
  }
  return result.status === 200;
}

async function checkHealthEndpoint() {
  const response = await fetch(`${BASE_URL}/api/health`, {
    method: "GET",
    redirect: "manual",
    headers: { "x-smoke-test": "1" },
  });

  if (response.status >= 500) {
    throw new Error(`/api/health returned ${response.status}`);
  }
  if (!response.ok) {
    throw new Error(`/api/health returned non-OK status ${response.status}`);
  }

  let parsed;
  try {
    parsed = await response.json();
  } catch (error) {
    throw new Error(`/api/health did not return valid JSON: ${String(error)}`);
  }

  if (!parsed || typeof parsed !== "object") {
    throw new Error("/api/health JSON payload is empty or invalid.");
  }
}

async function main() {
  const tsconfigSnapshot = readTsConfigSnapshot();
  if (SKIP_BUILD) {
    log("1/3 Skipping build (using existing build output)...");
  } else {
    log("1/3 Building app (next build)...");
    await buildWithRecovery();
    restoreTsConfigSnapshot(tsconfigSnapshot);
  }

  log(`2/3 Starting Next server on port ${PORT}...`);
  const runtimeEnv = {
    ...process.env,
    NEXT_DIST_DIR: DIST_DIR,
  };
  const devServer = spawn(NPM_COMMAND, ["run", "start", "--", "-p", String(PORT)], {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: true,
    env: runtimeEnv,
  });

  let cleanedUp = false;
  const cleanup = () => {
    if (cleanedUp) return;
    cleanedUp = true;

    if (process.platform === "win32") {
      if (devServer.pid) {
        spawn("taskkill", ["/pid", String(devServer.pid), "/T", "/F"], {
          stdio: "ignore",
          shell: false,
        });
      }
      return;
    }

    if (!devServer.killed) {
      devServer.kill("SIGTERM");
    }
  };

  process.on("exit", cleanup);
  process.on("SIGINT", () => {
    cleanup();
    process.exit(130);
  });
  process.on("SIGTERM", () => {
    cleanup();
    process.exit(143);
  });

  try {
    await waitForServerReady(devServer, STARTUP_TIMEOUT_MS);

    log("3/3 Verifying launch-critical routes...");
    const failures = [];

    for (const route of ROUTES) {
      const result = await requestRoute(route);
      const ok = routePasses(route, result);
      log(
        `${ok ? "PASS" : "FAIL"} ${route.path} -> ${result.status}${
          result.location ? ` (${result.location})` : ""
        }`,
      );
      if (!ok) {
        failures.push({ route: route.path, ...result });
      }
    }

    log("Checking /api/health JSON...");
    try {
      await checkHealthEndpoint();
      log("PASS /api/health returned valid JSON.");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      log(`FAIL ${message}`);
      failures.push({ route: "/api/health", status: 0, location: message });
    }

    if (failures.length > 0) {
      throw new Error(`Smoke test failed (${failures.length} issue(s)).`);
    }

    log("Smoke test passed.");
  } finally {
    cleanup();
    restoreTsConfigSnapshot(tsconfigSnapshot);
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  log(`Smoke test error: ${message}`);
  process.exit(1);
});

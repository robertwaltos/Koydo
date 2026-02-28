import { spawn, spawnSync } from "node:child_process";

function parseArgs(argv) {
  const args = {
    json: false,
    noFail: false,
    strictWarn: false,
    requireLiveBase: false,
    skipAuthBillingSmoke: false,
    startServerIfNeeded: false,
    serverPort: null,
    serverWaitMs: 25000,
    baseUrl: "",
    envRuntime: "",
    envSourceFile: "",
  };

  const parseOptionValue = (arg, index) => {
    const equalsIndex = arg.indexOf("=");
    if (equalsIndex >= 0) {
      return { value: arg.slice(equalsIndex + 1).trim(), consumedNext: false };
    }
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      return { value: "", consumedNext: false };
    }
    return { value: next.trim(), consumedNext: true };
  };

  const positionals = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--no-fail") {
      args.noFail = true;
      continue;
    }
    if (arg === "--strict-warn") {
      args.strictWarn = true;
      continue;
    }
    if (arg === "--require-live-base") {
      args.requireLiveBase = true;
      continue;
    }
    if (arg === "--skip-auth-billing-smoke") {
      args.skipAuthBillingSmoke = true;
      continue;
    }
    if (arg === "--start-server-if-needed") {
      args.startServerIfNeeded = true;
      continue;
    }

    if (arg === "--base-url" || arg.startsWith("--base-url=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.baseUrl = parsed.value;
      if (parsed.consumedNext) i += 1;
      continue;
    }
    if (arg === "--server-port" || arg.startsWith("--server-port=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) {
        const port = Number.parseInt(parsed.value, 10);
        if (Number.isInteger(port) && port > 0) {
          args.serverPort = port;
        }
      }
      if (parsed.consumedNext) i += 1;
      continue;
    }
    if (arg === "--server-wait-ms" || arg.startsWith("--server-wait-ms=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) {
        const waitMs = Number.parseInt(parsed.value, 10);
        if (Number.isInteger(waitMs) && waitMs > 0) {
          args.serverWaitMs = waitMs;
        }
      }
      if (parsed.consumedNext) i += 1;
      continue;
    }

    if (arg === "--env-runtime" || arg.startsWith("--env-runtime=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.envRuntime = parsed.value;
      if (parsed.consumedNext) i += 1;
      continue;
    }

    if (arg === "--env-source-file" || arg.startsWith("--env-source-file=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.envSourceFile = parsed.value;
      if (parsed.consumedNext) i += 1;
      continue;
    }

    if (!arg.startsWith("--")) {
      positionals.push(arg);
    }
  }

  if (!args.baseUrl) {
    args.baseUrl =
      positionals[0]
      ?? process.env.SMOKE_BASE_URL
      ?? process.env.NEXT_PUBLIC_APP_URL
      ?? "http://localhost:3000";
  }

  return args;
}

function runJsonCheck({ name, script, args }) {
  const result = spawnSync("node", [script, ...args, "--json"], {
    encoding: "utf8",
  });

  const stdout = (result.stdout ?? "").trim();
  const stderr = (result.stderr ?? "").trim();
  const exitCode = typeof result.status === "number" ? result.status : 1;

  let data = null;
  if (stdout.length > 0) {
    try {
      data = JSON.parse(stdout);
    } catch {
      data = null;
    }
  }

  return {
    name,
    exitCode,
    stderr,
    data,
  };
}

function makeSmokeSkippedCheck({ requireLiveBase, detail }) {
  return {
    name: "Auth/Billing smoke",
    level: requireLiveBase ? "fail" : "warn",
    detail,
    passCount: 0,
    warnCount: requireLiveBase ? 0 : 1,
    failCount: requireLiveBase ? 1 : 0,
  };
}

function makeSmokeExplicitSkipCheck(detail) {
  return {
    name: "Auth/Billing smoke",
    level: "skip",
    detail,
    passCount: 0,
    warnCount: 0,
    failCount: 0,
    skipCount: 1,
  };
}

function parseBaseUrl(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function isLocalHostname(hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function startLocalNextServer(port) {
  const child = spawn("npm", ["run", "start", "--", "-p", String(port)], {
    cwd: process.cwd(),
    env: process.env,
    shell: process.platform === "win32",
    stdio: ["ignore", "pipe", "pipe"],
  });

  const logs = [];
  const capture = (chunk) => {
    const text = String(chunk ?? "").trim();
    if (!text) return;
    logs.push(text);
    if (logs.length > 40) {
      logs.splice(0, logs.length - 40);
    }
  };

  child.stdout?.on("data", capture);
  child.stderr?.on("data", capture);

  return {
    child,
    getLogs() {
      return logs.join("\n");
    },
  };
}

async function waitForReachableBaseUrl(baseUrl, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  let latestProbe = null;

  while (Date.now() < deadline) {
    latestProbe = await probeBaseUrl(baseUrl);
    if (latestProbe.reachable) {
      return { ready: true, probe: latestProbe };
    }
    await sleep(750);
  }

  return {
    ready: false,
    probe: latestProbe ?? { reachable: false, detail: "Timed out waiting for base URL.", status: null },
  };
}

async function probeBaseUrl(baseUrl) {
  try {
    const healthUrl = new URL("/api/health", baseUrl).toString();
    const response = await fetch(healthUrl, {
      method: "GET",
      redirect: "manual",
      signal: AbortSignal.timeout(3500),
    });

    return {
      reachable: true,
      detail: `base responded with /api/health status=${response.status}`,
      status: response.status,
    };
  } catch (error) {
    return {
      reachable: false,
      detail: error instanceof Error ? error.message : "Unknown network error",
      status: null,
    };
  }
}

function classifyEnv(check) {
  if (!check.data || !check.data.totals) {
    return {
      level: "fail",
      detail: check.stderr || "Invalid JSON output from environment check.",
      passCount: 0,
      warnCount: 0,
      failCount: 1,
    };
  }

  const failCount = Number(check.data.totals.fail ?? 0);
  const warnCount = Number(check.data.totals.warn ?? 0);
  const passCount = Number(check.data.totals.pass ?? 0);
  const runtime = String(check.data.runtime?.runtime ?? "unknown");
  const level = failCount > 0 || check.exitCode !== 0 ? "fail" : warnCount > 0 ? "warn" : "pass";

  return {
    level,
    detail: `pass=${passCount} warn=${warnCount} fail=${failCount} runtime=${runtime}`,
    passCount,
    warnCount,
    failCount,
  };
}

function classifyDb(check) {
  if (!check.data || !check.data.totals) {
    return {
      level: "fail",
      detail: check.stderr || "Invalid JSON output from DB readiness check.",
      passCount: 0,
      warnCount: 0,
      failCount: 1,
    };
  }

  const missingCount = Number(check.data.totals.missing ?? 0);
  const errorCount = Number(check.data.totals.error ?? 0);
  const presentCount = Number(check.data.totals.present ?? 0);
  const failCount = missingCount + errorCount;
  const level = failCount > 0 || check.exitCode !== 0 ? "fail" : "pass";

  return {
    level,
    detail: `present=${presentCount} missing=${missingCount} error=${errorCount}`,
    passCount: level === "pass" ? 1 : 0,
    warnCount: 0,
    failCount: level === "fail" ? 1 : 0,
  };
}

function classifyWebhook(check) {
  if (!check.data || typeof check.data.healthy !== "boolean") {
    return {
      level: "fail",
      detail: check.stderr || "Invalid JSON output from webhook health check.",
      passCount: 0,
      warnCount: 0,
      failCount: 1,
    };
  }

  const healthy = Boolean(check.data.healthy);
  const trackingEnabled = Boolean(check.data.trackingEnabled);
  const failCount = healthy ? 0 : 1;
  const level = failCount > 0 || check.exitCode !== 0 ? "fail" : "pass";

  return {
    level,
    detail: `healthy=${healthy ? "yes" : "no"} tracking=${trackingEnabled ? "on" : "off"} failed=${Number(check.data.totals?.failed ?? 0)} stale=${Number(check.data.totals?.staleProcessing ?? 0)}`,
    passCount: level === "pass" ? 1 : 0,
    warnCount: 0,
    failCount: level === "fail" ? 1 : 0,
  };
}

function classifySmoke(check) {
  if (!check.data || !check.data.totals) {
    return {
      level: "fail",
      detail: check.stderr || "Invalid JSON output from smoke checks.",
      passCount: 0,
      warnCount: 0,
      failCount: 1,
      skipCount: 0,
      failures: ["Invalid JSON output from smoke checks."],
      warnings: [],
      skips: [],
    };
  }

  const smokeChecks = Array.isArray(check.data.checks) ? check.data.checks : [];
  const failures = smokeChecks
    .filter((entry) => entry?.level === "fail")
    .map((entry) => `${entry.name}: ${entry.detail}`);
  const warnings = smokeChecks
    .filter((entry) => entry?.level === "warn")
    .map((entry) => `${entry.name}: ${entry.detail}`);
  const skips = smokeChecks
    .filter((entry) => entry?.level === "skip")
    .map((entry) => `${entry.name}: ${entry.detail}`);

  const passCount = Number(check.data.totals.pass ?? 0);
  const warnCount = Number(check.data.totals.warn ?? 0);
  const failCount = Number(check.data.totals.fail ?? 0);
  const skipCount = Number(check.data.totals.skip ?? 0);
  const level = failCount > 0 || check.exitCode !== 0 ? "fail" : warnCount > 0 || skipCount > 0 ? "warn" : "pass";
  const failurePreview = failures.slice(0, 3).join(" | ");
  const warningPreview = warnings.slice(0, 2).join(" | ");
  const skipPreview = skips.slice(0, 2).join(" | ");
  const previewParts = [];
  if (failurePreview) previewParts.push(`fails=${failurePreview}`);
  if (warningPreview) previewParts.push(`warns=${warningPreview}`);
  if (skipPreview) previewParts.push(`skips=${skipPreview}`);

  return {
    level,
    detail: `pass=${passCount} warn=${warnCount} fail=${failCount} skip=${skipCount}${previewParts.length > 0 ? ` :: ${previewParts.join(" || ")}` : ""}`,
    passCount,
    warnCount: warnCount + skipCount,
    failCount,
    skipCount,
    failures,
    warnings,
    skips,
  };
}

function printLine(level, name, detail) {
  const label = level.toUpperCase().padEnd(4, " ");
  console.log(`[${label}] ${name} - ${detail}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const envArgs = [];
  let startedServer = null;

  if (args.envRuntime) {
    envArgs.push("--runtime", args.envRuntime);
  }
  if (args.envSourceFile) {
    envArgs.push("--source-file", args.envSourceFile);
  }

  try {
    const rawChecks = [
      runJsonCheck({
        name: "Environment",
        script: "scripts/check-env.mjs",
        args: envArgs,
      }),
      runJsonCheck({
        name: "DB readiness",
        script: "scripts/check-db-readiness.mjs",
        args: [],
      }),
      runJsonCheck({
        name: "Webhook health",
        script: "scripts/stripe-webhook-health-report.mjs",
        args: [],
      }),
    ];

    const parsedBaseUrl = parseBaseUrl(args.baseUrl);
    let resolvedBaseUrl = args.baseUrl;
    let baseProbe = await probeBaseUrl(resolvedBaseUrl);
    const serverStartup = {
      attempted: false,
      started: false,
      detail: "",
      port: null,
      waitMs: args.serverWaitMs,
    };

    if (!baseProbe.reachable && args.startServerIfNeeded && !args.skipAuthBillingSmoke) {
      if (!parsedBaseUrl || !isLocalHostname(parsedBaseUrl.hostname)) {
        serverStartup.attempted = true;
        serverStartup.detail =
          "Auto-start skipped: base URL is not a localhost address.";
      } else {
        const desiredPort = args.serverPort
          ?? (parsedBaseUrl.port ? Number.parseInt(parsedBaseUrl.port, 10) : null)
          ?? (parsedBaseUrl.protocol === "https:" ? 443 : 3000);

        if (!Number.isInteger(desiredPort) || desiredPort <= 0) {
          serverStartup.attempted = true;
          serverStartup.detail = `Auto-start skipped: invalid port (${String(desiredPort)}).`;
        } else {
          serverStartup.attempted = true;
          serverStartup.port = desiredPort;
          const localBaseUrl = `${parsedBaseUrl.protocol}//${parsedBaseUrl.hostname}:${desiredPort}`;
          const serverHandle = startLocalNextServer(desiredPort);
          startedServer = serverHandle.child;

          const waitResult = await waitForReachableBaseUrl(localBaseUrl, args.serverWaitMs);
          if (waitResult.ready) {
            serverStartup.started = true;
            serverStartup.detail = "Local Next.js server auto-started successfully.";
            resolvedBaseUrl = localBaseUrl;
            baseProbe = waitResult.probe;
          } else {
            serverStartup.detail = `Local server did not become reachable: ${waitResult.probe.detail}`;
            baseProbe = waitResult.probe;
            const logs = serverHandle.getLogs();
            if (logs) {
              serverStartup.detail = `${serverStartup.detail}\nRecent server logs:\n${logs}`;
            }
          }
        }
      }
    }

    const smokeCheck = args.skipAuthBillingSmoke
      ? makeSmokeExplicitSkipCheck(
        "Skipped by --skip-auth-billing-smoke flag.",
      )
      : baseProbe.reachable
        ? {
          name: "Auth/Billing smoke",
          ...classifySmoke(runJsonCheck({
            name: "Auth/Billing smoke",
            script: "scripts/smoke-auth-billing.mjs",
            args: ["--base-url", resolvedBaseUrl],
          })),
        }
        : makeSmokeSkippedCheck({
          requireLiveBase: args.requireLiveBase,
          detail: `Skipped smoke check because base URL is unreachable (${baseProbe.detail}). Use --require-live-base to fail this condition.`,
        });

    const classifiedChecks = [
      { name: rawChecks[0].name, ...classifyEnv(rawChecks[0]) },
      { name: rawChecks[1].name, ...classifyDb(rawChecks[1]) },
      { name: rawChecks[2].name, ...classifyWebhook(rawChecks[2]) },
    {
      name: "Auth/Billing smoke",
      level: smokeCheck.level,
      detail: smokeCheck.detail,
      passCount: smokeCheck.passCount,
      warnCount: smokeCheck.warnCount,
      failCount: smokeCheck.failCount,
      skipCount: smokeCheck.skipCount ?? 0,
      failures: smokeCheck.failures ?? [],
      warnings: smokeCheck.warnings ?? [],
      skips: smokeCheck.skips ?? [],
    },
  ];

    const totals = {
      pass: classifiedChecks.filter((check) => check.level === "pass").length,
      warn: classifiedChecks.filter((check) => check.level === "warn").length,
      fail: classifiedChecks.filter((check) => check.level === "fail").length,
      skip: classifiedChecks.filter((check) => check.level === "skip").length,
      total: classifiedChecks.length,
    };

    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl: args.baseUrl,
      resolvedBaseUrl,
      strictWarn: args.strictWarn,
      requireLiveBase: args.requireLiveBase,
      skipAuthBillingSmoke: args.skipAuthBillingSmoke,
      startServerIfNeeded: args.startServerIfNeeded,
      envRuntime: args.envRuntime || null,
      envSourceFile: args.envSourceFile || null,
      baseProbe,
      serverStartup,
      totals,
      checks: classifiedChecks,
    };

    if (args.json) {
      console.log(JSON.stringify(report, null, 2));
    } else {
      console.log("Ops preflight checks");
      console.log(`Smoke base URL: ${args.baseUrl}`);
      if (resolvedBaseUrl !== args.baseUrl) {
        console.log(`Resolved smoke URL: ${resolvedBaseUrl}`);
      }
      console.log(`Base probe: ${baseProbe.reachable ? "reachable" : "unreachable"} (${baseProbe.detail})`);
      if (args.envRuntime) {
        console.log(`Env runtime override: ${args.envRuntime}`);
      }
      if (args.envSourceFile) {
        console.log(`Env source file: ${args.envSourceFile}`);
      }
      if (args.requireLiveBase) {
        console.log("Mode: require-live-base enabled");
      }
      if (args.skipAuthBillingSmoke) {
        console.log("Mode: skip-auth-billing-smoke enabled");
      }
      if (args.startServerIfNeeded) {
        console.log(`Mode: start-server-if-needed enabled (wait=${args.serverWaitMs}ms)`);
        if (serverStartup.attempted) {
          const status = serverStartup.started ? "started" : "not started";
          const portDetail = serverStartup.port ? ` port=${serverStartup.port}` : "";
          console.log(`Server startup: ${status}.${portDetail}`);
        }
      }
      console.log("");
      for (const check of classifiedChecks) {
        printLine(check.level, check.name, check.detail);
      }
      console.log("");
      console.log(
        `Summary: ${totals.pass} pass / ${totals.warn} warn / ${totals.fail} fail / ${totals.skip} skip (total ${totals.total})`,
      );
      console.log(
        `Exit behavior: fail => exit 1${args.strictWarn ? " | warn => exit 1 (strict-warn enabled)" : " | warn => exit 0"}`,
      );
    }

    const shouldFail = totals.fail > 0 || (args.strictWarn && totals.warn > 0);
    if (!args.noFail && shouldFail) {
      process.exitCode = 1;
    }
  } finally {
    if (startedServer && !startedServer.killed) {
      if (process.platform === "win32") {
        spawnSync("taskkill", ["/pid", String(startedServer.pid), "/T", "/F"], {
          stdio: "ignore",
        });
      } else {
        startedServer.kill("SIGTERM");
      }
    }
  }
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

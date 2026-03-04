#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawn } from "node:child_process";

function parseArgs(argv) {
  const args = {
    baseUrl: "",
    port: 4300 + Math.floor(Math.random() * 300),
    startServer: true,
    timeoutMs: 240000,
    maxLinks: 1200,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--no-start-server") args.startServer = false;
    if (token === "--base-url" && argv[i + 1]) {
      args.baseUrl = argv[i + 1];
      i += 1;
    }
    if (token === "--port" && argv[i + 1]) {
      args.port = Number.parseInt(argv[i + 1], 10);
      i += 1;
    }
    if (token === "--timeout-ms" && argv[i + 1]) {
      args.timeoutMs = Number.parseInt(argv[i + 1], 10);
      i += 1;
    }
    if (token === "--max-links" && argv[i + 1]) {
      args.maxLinks = Number.parseInt(argv[i + 1], 10);
      i += 1;
    }
  }

  if (!args.baseUrl) {
    args.baseUrl = `http://127.0.0.1:${args.port}`;
  }
  return args;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function normalizeAppPath(key) {
  if (!key.endsWith("/page")) return null;
  const route = key.slice(0, -"/page".length) || "/";
  if (route === "/_global-error") return null;
  return route;
}

function normalizePrerenderPath(key) {
  if (!key.startsWith("/")) return null;
  if (key.startsWith("/api/")) return null;
  return key;
}

function isDynamicRoute(route) {
  return route.includes("[") || route.includes("]");
}

function shouldSkipRoute(route) {
  return (
    !route ||
    route.startsWith("/api/") ||
    route.startsWith("/_") ||
    route.startsWith("/admin") ||
    route.startsWith("/parent")
  );
}

function extractInternalLinks(html, baseUrl) {
  const links = new Set();
  const hrefPattern = /href=["']([^"'#]+)["']/gi;
  let match = hrefPattern.exec(html);
  while (match) {
    const href = match[1];
    try {
      const url = new URL(href, baseUrl);
      if (!/^https?:$/.test(url.protocol)) {
        match = hrefPattern.exec(html);
        continue;
      }
      const base = new URL(baseUrl);
      if (url.origin !== base.origin) {
        match = hrefPattern.exec(html);
        continue;
      }
      if (shouldSkipRoute(url.pathname)) {
        match = hrefPattern.exec(html);
        continue;
      }
      links.add(`${url.pathname}${url.search}`);
    } catch {
      // ignore malformed href
    }
    match = hrefPattern.exec(html);
  }
  return links;
}

async function request(url) {
  try {
    const response = await fetch(url, {
      redirect: "manual",
      signal: AbortSignal.timeout(12000),
      headers: { "x-smoke-sweep": "1" },
    });
    const contentType = response.headers.get("content-type") ?? "";
    const isHtml = contentType.includes("text/html");
    const body = isHtml ? await response.text() : "";
    return {
      ok: response.status < 500,
      status: response.status,
      location: response.headers.get("location"),
      body,
      isHtml,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      location: null,
      body: "",
      isHtml: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function log(line) {
  process.stdout.write(`${line}\n`);
}

function startServer(port) {
  const child = spawn("npm", ["run", "start", "--", "-p", String(port)], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
  });
  return child;
}

async function waitForServer(baseUrl, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const res = await request(new URL("/api/health", baseUrl).toString());
    if (res.ok && res.status > 0) return true;
    await new Promise((resolve) => setTimeout(resolve, 800));
  }
  return false;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const appManifestPath = path.resolve(".next/server/app-paths-manifest.json");
  const prerenderManifestPath = path.resolve(".next/prerender-manifest.json");

  if (!fs.existsSync(appManifestPath) || !fs.existsSync(prerenderManifestPath)) {
    throw new Error("Missing .next manifests. Run build first.");
  }

  const appManifest = readJson(appManifestPath);
  const prerenderManifest = readJson(prerenderManifestPath);

  const appRoutes = Object.keys(appManifest)
    .map(normalizeAppPath)
    .filter((route) => route && !shouldSkipRoute(route) && !isDynamicRoute(route));

  const prerenderRoutes = Object.keys(prerenderManifest.routes ?? {})
    .map(normalizePrerenderPath)
    .filter((route) => route && !shouldSkipRoute(route));

  const baseRoutes = new Set([...appRoutes, ...prerenderRoutes]);
  const orderedRoutes = [...baseRoutes].sort((a, b) => a.localeCompare(b));

  let server = null;
  let startedServer = false;
  if (args.startServer) {
    server = startServer(args.port);
    startedServer = true;
    const ready = await waitForServer(args.baseUrl, args.timeoutMs);
    if (!ready) {
      throw new Error(`Timed out waiting for server at ${args.baseUrl}`);
    }
  }

  const pageFailures = [];
  const pagePasses = [];
  const discoveredLinks = new Set();

  try {
    log(`Route sweep start: ${orderedRoutes.length} routes`);
    for (const route of orderedRoutes) {
      const url = new URL(route, args.baseUrl).toString();
      const result = await request(url);
      if (result.ok) {
        pagePasses.push({ route, status: result.status });
        if (result.isHtml && result.body) {
          for (const link of extractInternalLinks(result.body, args.baseUrl)) {
            discoveredLinks.add(link);
          }
        }
      } else {
        pageFailures.push({
          route,
          status: result.status,
          error: result.error,
        });
      }
    }

    const linksToCheck = [...discoveredLinks]
      .filter((route) => !shouldSkipRoute(route))
      .slice(0, args.maxLinks);

    const linkFailures = [];
    let linkPassCount = 0;
    for (const link of linksToCheck) {
      const url = new URL(link, args.baseUrl).toString();
      const result = await request(url);
      if (result.ok) {
        linkPassCount += 1;
      } else {
        linkFailures.push({
          link,
          status: result.status,
          error: result.error,
        });
      }
    }

    const summary = {
      baseUrl: args.baseUrl,
      startedServer,
      routeSweep: {
        total: orderedRoutes.length,
        pass: pagePasses.length,
        fail: pageFailures.length,
      },
      linkSweep: {
        total: linksToCheck.length,
        pass: linkPassCount,
        fail: linkFailures.length,
      },
      pageFailures: pageFailures.slice(0, 40),
      linkFailures: linkFailures.slice(0, 80),
    };

    log(JSON.stringify(summary, null, 2));
    if (pageFailures.length > 0 || linkFailures.length > 0) {
      process.exitCode = 1;
    }
  } finally {
    if (server) {
      if (process.platform === "win32" && server.pid) {
        spawn("taskkill", ["/pid", String(server.pid), "/T", "/F"], {
          stdio: "ignore",
          shell: false,
        });
      } else if (!server.killed) {
        server.kill("SIGTERM");
      }
    }
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  log(`route-sweep-smoke failed: ${message}`);
  process.exit(1);
});


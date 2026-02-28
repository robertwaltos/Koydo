#!/usr/bin/env node
// push-env-clean.mjs — Push .env vars to Vercel via REST API (no trailing \r\n)
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const vercelJson = JSON.parse(readFileSync(join(projectRoot, ".vercel", "project.json"), "utf-8"));
const projectId = vercelJson.projectId;
const teamId = vercelJson.orgId;

// Read token from vercel config (check multiple locations)
const homeDir = process.env.USERPROFILE || process.env.HOME;
const possiblePaths = [
  join(process.env.APPDATA || "", "com.vercel.cli", "Data", "auth.json"),
  join(homeDir, ".config", "com.vercel.cli", "auth.json"),
  join(homeDir, ".local", "share", "com.vercel.cli", "auth.json"),
];
let token;
for (const p of possiblePaths) {
  if (existsSync(p)) {
    const auth = JSON.parse(readFileSync(p, "utf-8"));
    token = auth.token;
    break;
  }
}
if (!token) {
  console.error("Could not find Vercel auth token. Run `npx vercel login` first.");
  process.exit(1);
}

// Parse .env
const envFile = readFileSync(join(projectRoot, ".env"), "utf-8");
const lines = envFile.split("\n").filter(l => /^\s*[A-Za-z_]/.test(l) && !/^\s*#/.test(l));

const seen = new Set();
const vars = [];
for (const line of lines) {
  const eqIdx = line.indexOf("=");
  if (eqIdx < 0) continue;
  const name = line.slice(0, eqIdx).trim();
  let value = line.slice(eqIdx + 1).trim();

  // Strip inline comments
  const commentMatch = value.match(/^(.+?)\s+#\s/);
  if (commentMatch) value = commentMatch[1].trim();

  if (seen.has(name)) continue;
  seen.add(name);

  if (!value || value === "placeholder" || value.startsWith("placeholder") || value === "price_...") {
    console.log(`  SKIP  ${name} (empty/placeholder)`);
    continue;
  }

  vars.push({ name, value });
}

console.log(`\nPushing ${vars.length} variables to Vercel project ${projectId}...\n`);

// First, delete all existing env vars
const listUrl = `https://api.vercel.com/v9/projects/${projectId}/env?teamId=${teamId}`;
const existingRes = await fetch(listUrl, {
  headers: { Authorization: `Bearer ${token}` },
});
const existingData = await existingRes.json();

if (existingData.envs?.length > 0) {
  console.log(`Deleting ${existingData.envs.length} existing env vars...`);
  for (const ev of existingData.envs) {
    const delUrl = `https://api.vercel.com/v9/projects/${projectId}/env/${ev.id}?teamId=${teamId}`;
    await fetch(delUrl, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  console.log("Deleted all existing vars.\n");
}

// Now add each var for all 3 targets
const targets = ["production", "preview", "development"];
let success = 0;
let fail = 0;

for (const { name, value } of vars) {
  const addUrl = `https://api.vercel.com/v10/projects/${projectId}/env?teamId=${teamId}`;
  const body = {
    key: name,
    value: value,
    type: name.includes("SECRET") || name.includes("KEY") || name.includes("PASSWORD") || name.includes("TOKEN")
      ? "encrypted"
      : "plain",
    target: targets,
  };

  const res = await fetch(addUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    console.log(`  ✓  ${name}`);
    success++;
  } else {
    const err = await res.json();
    console.log(`  ✗  ${name} — ${err.error?.message || JSON.stringify(err)}`);
    fail++;
  }
}

console.log(`\nDone! ${success} added, ${fail} failed.`);

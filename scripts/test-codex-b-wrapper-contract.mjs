#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const GAMES_DIR = path.join(ROOT, "src/components/games");
const START_ID = 101;
const END_ID = 160;

function parseArcadeId(fileName) {
  const match = fileName.match(/^arcade-(\d+)-.+\.tsx$/);
  if (!match) return null;
  const id = Number.parseInt(match[1], 10);
  return Number.isFinite(id) ? id : null;
}

function inCodexBRange(fileName) {
  const id = parseArcadeId(fileName);
  return typeof id === "number" && id >= START_ID && id <= END_ID;
}

function isWrapperRuntime(source) {
  return source.includes("type RewardRealmCharacterGauntletConfig");
}

async function main() {
  const entries = await fs.readdir(GAMES_DIR, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && inCodexBRange(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => {
      const aId = parseArcadeId(a) ?? 0;
      const bId = parseArcadeId(b) ?? 0;
      return aId - bId;
    });

  const failures = [];
  let wrapperCount = 0;
  let bespokeCount = 0;

  for (const fileName of files) {
    const fullPath = path.join(GAMES_DIR, fileName);
    const source = await fs.readFile(fullPath, "utf8");

    if (/\b([A-Za-z]+):\s*\1:/.test(source)) {
      failures.push(`${fileName}: duplicate coach prefix detected (for example "Echo: Echo:").`);
    }

    if (!isWrapperRuntime(source)) {
      bespokeCount += 1;
      continue;
    }

    wrapperCount += 1;
    if (!source.includes("roundMode:")) {
      failures.push(`${fileName}: wrapper missing required \"roundMode\" config.`);
    }
    if (!source.includes("targetBestCombo:")) {
      failures.push(`${fileName}: wrapper missing required \"targetBestCombo\" config.`);
    }
  }

  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(`FAIL: ${failure}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    `PASS: codex-b wrapper contract (${START_ID}-${END_ID}) wrappers=${wrapperCount} bespoke=${bespokeCount} files=${files.length}.`,
  );
}

main().catch((error) => {
  console.error("FAIL: codex-b wrapper contract test crashed.", error);
  process.exitCode = 1;
});

#!/usr/bin/env node

import fs from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data", "translations");
const CHUNKS_DIR = path.join(DATA_DIR, "chunks");
const CLOUD_DIR = path.join(DATA_DIR, "cloud-tasks");

function parseArgs(argv) {
  const opts = {
    locale: null,
    itemsPerTask: 80,
    shards: 12,
    maxCharsPerTask: 12000,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--locale" && argv[i + 1]) opts.locale = argv[++i];
    else if (a === "--items-per-task" && argv[i + 1]) opts.itemsPerTask = Math.max(1, Number(argv[++i]) || 80);
    else if (a === "--shards" && argv[i + 1]) opts.shards = Math.max(1, Number(argv[++i]) || 12);
    else if (a === "--max-chars-per-task" && argv[i + 1]) opts.maxCharsPerTask = Math.max(1000, Number(argv[++i]) || 12000);
    else if (!a.startsWith("--") && !opts.locale) opts.locale = a;
  }

  return opts;
}

const opts = parseArgs(process.argv.slice(2));

if (!opts.locale) {
  console.error("Usage: node scripts/build-cloud-translation-shards.mjs --locale <locale>");
  process.exit(1);
}

const locale = opts.locale;
const statePath = path.join(DATA_DIR, `state-${locale}.json`);
const localeDir = path.join(CLOUD_DIR, locale);
const tasksDir = path.join(localeDir, "tasks");
const outputsDir = path.join(localeDir, "outputs");
const manifestsDir = path.join(localeDir, "manifests");

async function rmIfExists(target) {
  if (existsSync(target)) {
    await fs.rm(target, { recursive: true, force: true });
  }
}

async function loadCompletedHashes() {
  try {
    const raw = readFileSync(statePath, "utf8");
    const parsed = JSON.parse(raw);
    return parsed.completedHashes || {};
  } catch {
    return {};
  }
}

async function main() {
  await rmIfExists(localeDir);
  await fs.mkdir(tasksDir, { recursive: true });
  await fs.mkdir(outputsDir, { recursive: true });
  await fs.mkdir(manifestsDir, { recursive: true });

  const completed = await loadCompletedHashes();
  const chunkFiles = (await fs.readdir(CHUNKS_DIR)).filter((f) => f.endsWith(".json")).sort();

  const pendingItems = [];
  for (const file of chunkFiles) {
    const raw = await fs.readFile(path.join(CHUNKS_DIR, file), "utf8");
    const chunk = JSON.parse(raw);
    for (const [hash, entry] of Object.entries(chunk)) {
      if (!completed[hash]) {
        pendingItems.push({
          hash,
          text: entry?.text || "",
          category: entry?.category || "other",
        });
      }
    }
  }

  let taskIndex = 0;
  let current = [];
  let currentChars = 0;
  const taskPaths = [];

  async function flushTask() {
    if (current.length === 0) return;
    const taskName = `task-${String(taskIndex).padStart(5, "0")}.json`;
    const taskPath = path.join(tasksDir, taskName);
    await fs.writeFile(taskPath, JSON.stringify(current));
    taskPaths.push(taskPath);
    taskIndex++;
    current = [];
    currentChars = 0;
  }

  for (const item of pendingItems) {
    const itemChars = item.text.length;
    const overflow =
      current.length >= opts.itemsPerTask ||
      currentChars + itemChars > opts.maxCharsPerTask;

    if (current.length > 0 && overflow) {
      await flushTask();
    }

    current.push(item);
    currentChars += itemChars;
  }

  await flushTask();

  const shardBuckets = Array.from({ length: opts.shards }, () => []);
  taskPaths.forEach((taskPath, index) => {
    shardBuckets[index % opts.shards].push(taskPath);
  });

  const shardManifestPaths = [];
  for (let i = 0; i < shardBuckets.length; i++) {
    const shardName = `shard-${String(i).padStart(2, "0")}`;
    const manifestPath = path.join(manifestsDir, `${shardName}.json`);
    const payload = {
      locale,
      shard: shardName,
      outputDir: outputsDir,
      tasks: shardBuckets[i],
    };
    await fs.writeFile(manifestPath, JSON.stringify(payload, null, 2));
    shardManifestPaths.push(manifestPath);
  }

  const summary = {
    locale,
    totalPendingItems: pendingItems.length,
    taskCount: taskPaths.length,
    shardCount: shardManifestPaths.length,
    generatedAt: new Date().toISOString(),
    manifests: shardManifestPaths,
  };

  await fs.writeFile(path.join(localeDir, "summary.json"), JSON.stringify(summary, null, 2));

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});


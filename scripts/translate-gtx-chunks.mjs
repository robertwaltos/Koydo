#!/usr/bin/env node
/**
 * translate-gtx-chunks.mjs
 *
 * Fast chunk translator using Google Translate endpoint (client=gtx).
 * Resumable via data/translations/state-{locale}.json.
 *
 * Usage:
 *   node scripts/translate-gtx-chunks.mjs --locale es
 *   node scripts/translate-gtx-chunks.mjs --locale zh --concurrency 12 --max-batch-chars 5000
 */

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data", "translations");
const CHUNKS_DIR = path.join(DATA_DIR, "chunks");
const OUT_DIR_BASE = path.join(ROOT, "public", "translations");

const TARGET_LANG = {
  es: "es",
  zh: "zh-CN",
  pl: "pl",
  fr: "fr",
  de: "de",
  ar: "ar",
  hi: "hi",
  ja: "ja",
  ko: "ko",
  ru: "ru",
  pt: "pt",
  it: "it",
  tr: "tr",
  vi: "vi",
  th: "th",
  id: "id",
  uk: "uk",
  bn: "bn",
  ur: "ur",
};

function parseArgs(argv) {
  const opts = {
    locale: null,
    concurrency: 10,
    maxBatchItems: 40,
    maxBatchChars: 4500,
    checkpointEveryChunks: 5,
    retries: 5,
    dryRun: false,
    fallbackToSource: true,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--locale" && argv[i + 1]) opts.locale = argv[++i];
    else if (a === "--concurrency" && argv[i + 1]) opts.concurrency = Math.max(1, Math.min(32, Number(argv[++i]) || 10));
    else if (a === "--max-batch-items" && argv[i + 1]) opts.maxBatchItems = Math.max(1, Math.min(200, Number(argv[++i]) || 40));
    else if (a === "--max-batch-chars" && argv[i + 1]) opts.maxBatchChars = Math.max(500, Math.min(30000, Number(argv[++i]) || 4500));
    else if (a === "--checkpoint-every-chunks" && argv[i + 1]) opts.checkpointEveryChunks = Math.max(1, Number(argv[++i]) || 5);
    else if (a === "--retries" && argv[i + 1]) opts.retries = Math.max(1, Math.min(12, Number(argv[++i]) || 5));
    else if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--no-fallback") opts.fallbackToSource = false;
    else if (!a.startsWith("--") && !opts.locale) opts.locale = a;
  }

  return opts;
}

const opts = parseArgs(process.argv.slice(2));

if (!opts.locale || !TARGET_LANG[opts.locale]) {
  console.error(`Usage: --locale <${Object.keys(TARGET_LANG).join("|")}>`);
  process.exit(1);
}

const locale = opts.locale;
const targetLang = TARGET_LANG[locale];
const outDir = path.join(OUT_DIR_BASE, locale);
const statePath = path.join(DATA_DIR, `state-${locale}.json`);
const legacyStatePath = path.join(outDir, "_state.json");
const ENDPOINT = "https://translate.googleapis.com/translate_a/single";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function memMB() {
  const m = process.memoryUsage();
  return `RSS=${(m.rss / 1048576).toFixed(0)}MB heap=${(m.heapUsed / 1048576).toFixed(0)}/${(m.heapTotal / 1048576).toFixed(0)}MB`;
}

function makeDelimiter(items) {
  let d = "§§§__KOYDO_SPLIT__§§§";
  let tries = 0;
  while (tries < 8) {
    const hasCollision = items.some((x) => x.text.includes(d));
    if (!hasCollision) return d;
    d = `§§§__KOYDO_SPLIT_${Math.floor(Math.random() * 1e9)}__§§§`;
    tries++;
  }
  return `§§§__KOYDO_SPLIT_${Date.now()}__§§§`;
}

async function loadState() {
  for (const p of [statePath, legacyStatePath]) {
    try {
      const raw = await fs.readFile(p, "utf8");
      const parsed = JSON.parse(raw);
      return parsed.completedHashes || {};
    } catch {}
  }
  return {};
}

async function saveState(completedHashes, stats) {
  const payload = JSON.stringify({
    locale,
    completedHashes,
    stats,
    savedAt: new Date().toISOString(),
    engine: "gtx-v1",
  });
  await Promise.all([
    fs.writeFile(statePath, payload),
    fs.writeFile(legacyStatePath, payload),
  ]);
}

function flattenTranslatedText(apiResponse) {
  if (!Array.isArray(apiResponse) || !Array.isArray(apiResponse[0])) return "";
  let out = "";
  for (const seg of apiResponse[0]) {
    if (Array.isArray(seg) && typeof seg[0] === "string") out += seg[0];
  }
  return out;
}

async function gtxTranslateBatch(items, retries = opts.retries) {
  const delimiter = makeDelimiter(items);
  const joined = items.map((x) => x.text).join(`\n${delimiter}\n`);
  const body = new URLSearchParams({
    client: "gtx",
    sl: "en",
    tl: targetLang,
    dt: "t",
    q: joined,
  }).toString();

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000);

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`GTX ${res.status}`);
      }

      const text = await res.text();
      const parsed = JSON.parse(text);
      const translated = flattenTranslatedText(parsed);
      const split = translated.split(delimiter);

      if (split.length !== items.length) {
        throw new Error(`split_mismatch expected=${items.length} got=${split.length}`);
      }

      return split.map((x) => x.trim());
    } catch (error) {
      if (attempt === retries - 1) throw error;
      const waitMs = Math.min(1500 * Math.pow(2, attempt), 20000) + Math.floor(Math.random() * 500);
      await sleep(waitMs);
    }
  }

  throw new Error("GTX retries exhausted");
}

async function translateBatchResilient(batch, stats) {
  try {
    const translated = await gtxTranslateBatch(batch);
    return batch.map((row, idx) => ({
      hash: row.hash,
      text: translated[idx] && translated[idx].length > 0 ? translated[idx] : row.text,
    }));
  } catch (error) {
    if (batch.length === 1) {
      if (opts.fallbackToSource) {
        stats.fallbackToSource++;
        return [{ hash: batch[0].hash, text: batch[0].text }];
      }
      throw error;
    }

    const mid = Math.floor(batch.length / 2);
    const left = await translateBatchResilient(batch.slice(0, mid), stats);
    const right = await translateBatchResilient(batch.slice(mid), stats);
    return left.concat(right);
  }
}

function buildBatches(items) {
  const batches = [];
  let current = [];
  let charCount = 0;

  for (const item of items) {
    const len = item.text.length;
    const overflow = current.length >= opts.maxBatchItems || (charCount + len) > opts.maxBatchChars;
    if (current.length > 0 && overflow) {
      batches.push(current);
      current = [];
      charCount = 0;
    }
    current.push(item);
    charCount += len;
  }

  if (current.length > 0) batches.push(current);
  return batches;
}

async function countPending(chunkFiles, completed) {
  let pending = 0;
  for (const file of chunkFiles) {
    const raw = await fs.readFile(path.join(CHUNKS_DIR, file), "utf8");
    const chunk = JSON.parse(raw);
    for (const hash of Object.keys(chunk)) {
      if (!completed[hash]) pending++;
    }
  }
  return pending;
}

async function processChunk({ chunkName, chunkPath, completed, stats, totalPending }) {
  const raw = await fs.readFile(chunkPath, "utf8");
  const chunk = JSON.parse(raw);

  const pending = [];
  for (const [hash, entry] of Object.entries(chunk)) {
    if (!completed[hash]) {
      pending.push({
        hash,
        text: entry?.text || "",
      });
    }
  }

  if (pending.length === 0) {
    stats.chunksSkipped++;
    return;
  }

  stats.chunksWorked++;
  const batches = buildBatches(pending);
  let cursor = 0;

  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= batches.length) return;
      const batch = batches[i];
      const resolved = await translateBatchResilient(batch, stats);
      for (const row of resolved) {
        completed[row.hash] = row.text;
      }

      stats.batchesDone++;
      stats.translatedDone += resolved.length;

      const now = Date.now();
      const pct = totalPending > 0 ? ((stats.translatedDone / totalPending) * 100).toFixed(2) : "100.00";
      const elapsedSec = ((now - stats.startedAt) / 1000).toFixed(0);
      const rate = stats.translatedDone / Math.max(1, ((now - stats.startedAt) / 1000));
      const etaSec = rate > 0 ? Math.max(0, Math.floor((totalPending - stats.translatedDone) / rate)) : 0;
      console.log(
        `[${locale}] ${pct}% | ${stats.translatedDone.toLocaleString()}/${totalPending.toLocaleString()} | ` +
        `batch ${stats.batchesDone.toLocaleString()} | chunk ${chunkName} | ` +
        `${elapsedSec}s elapsed | ~${etaSec}s ETA | ${memMB()}`
      );
    }
  }

  const workers = [];
  for (let i = 0; i < opts.concurrency; i++) workers.push(worker());
  await Promise.all(workers);
}

async function main() {
  if (!existsSync(CHUNKS_DIR)) {
    console.error(`Chunks not found: ${CHUNKS_DIR}`);
    process.exit(1);
  }

  await fs.mkdir(outDir, { recursive: true });
  const completed = await loadState();
  const chunkFiles = (await fs.readdir(CHUNKS_DIR)).filter((f) => f.endsWith(".json")).sort();

  console.log(`\n${"=".repeat(64)}`);
  console.log(`translate-gtx-chunks.mjs | locale=${locale} target=${targetLang}`);
  console.log(
    `concurrency=${opts.concurrency} maxBatchItems=${opts.maxBatchItems} ` +
    `maxBatchChars=${opts.maxBatchChars} retries=${opts.retries} fallback=${opts.fallbackToSource}`
  );
  console.log(`${"=".repeat(64)}`);
  console.log(`Loaded state hashes: ${Object.keys(completed).length.toLocaleString()}`);
  console.log(`Chunk files: ${chunkFiles.length}`);

  const totalPending = await countPending(chunkFiles, completed);
  if (opts.dryRun) {
    console.log(`[DRY RUN] Pending: ${totalPending.toLocaleString()}`);
    return;
  }
  if (totalPending === 0) {
    console.log("Nothing pending.");
    return;
  }
  console.log(`Pending: ${totalPending.toLocaleString()}`);

  const stats = {
    startedAt: Date.now(),
    translatedDone: 0,
    batchesDone: 0,
    chunksWorked: 0,
    chunksSkipped: 0,
    fallbackToSource: 0,
  };

  for (const [idx, chunkName] of chunkFiles.entries()) {
    await processChunk({
      chunkName: `${idx + 1}/${chunkFiles.length}`,
      chunkPath: path.join(CHUNKS_DIR, chunkName),
      completed,
      stats,
      totalPending,
    });

    if ((idx + 1) % opts.checkpointEveryChunks === 0 || idx + 1 === chunkFiles.length) {
      await saveState(completed, {
        translated: stats.translatedDone,
        batches: stats.batchesDone,
        chunksWorked: stats.chunksWorked,
        chunksSkipped: stats.chunksSkipped,
        fallbackToSource: stats.fallbackToSource,
        totalPending,
        chunk: `${idx + 1}/${chunkFiles.length}`,
      });
    }
  }

  await saveState(completed, {
    translated: stats.translatedDone,
    batches: stats.batchesDone,
    chunksWorked: stats.chunksWorked,
    chunksSkipped: stats.chunksSkipped,
    fallbackToSource: stats.fallbackToSource,
    totalPending,
    completedAt: new Date().toISOString(),
  });

  const elapsedMin = ((Date.now() - stats.startedAt) / 60000).toFixed(1);
  console.log(`\n${"=".repeat(64)}`);
  console.log(`${locale.toUpperCase()} GTX translation complete`);
  console.log(`Translated this run: ${stats.translatedDone.toLocaleString()}`);
  console.log(`Fallback to source: ${stats.fallbackToSource.toLocaleString()}`);
  console.log(`Batches: ${stats.batchesDone.toLocaleString()}`);
  console.log(`Time: ${elapsedMin} min`);
  console.log(`${"=".repeat(64)}\n`);
}

main().catch((error) => {
  console.error("FATAL:", error?.stack || error?.message || error);
  process.exit(1);
});


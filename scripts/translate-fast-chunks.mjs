#!/usr/bin/env node
/**
 * translate-fast-chunks.mjs
 *
 * High-throughput resumable translator for chunked curriculum data.
 * - Reads chunk files incrementally (low memory)
 * - Translates missing hashes only
 * - Uses concurrent OpenAI requests
 * - Auto-splits failing batches to isolate bad items
 * - Optional single-item fallback to source text so runs always finish
 *
 * Usage:
 *   node --env-file=.env scripts/translate-fast-chunks.mjs --locale es
 *   node --env-file=.env scripts/translate-fast-chunks.mjs --locale zh --concurrency 12 --batch-size 80
 */

import fs from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data", "translations");
const CHUNKS_DIR = path.join(DATA_DIR, "chunks");
const OUT_DIR_BASE = path.join(ROOT, "public", "translations");

try {
  const envLocal = readFileSync(path.join(ROOT, ".env.local"), "utf8");
  for (const line of envLocal.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch {}

function parseArgs(argv) {
  const opts = {
    locale: null,
    model: "gpt-4o-mini",
    concurrency: 10,
    batchSize: 70,
    maxChars: 12000,
    checkpointEvery: 20,
    retries: 5,
    dryRun: false,
    fallbackToSource: true,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--locale" && argv[i + 1]) opts.locale = argv[++i];
    else if (a === "--model" && argv[i + 1]) opts.model = argv[++i];
    else if (a === "--concurrency" && argv[i + 1]) opts.concurrency = Math.max(1, Math.min(32, Number(argv[++i]) || 10));
    else if (a === "--batch-size" && argv[i + 1]) opts.batchSize = Math.max(1, Math.min(150, Number(argv[++i]) || 70));
    else if (a === "--max-chars" && argv[i + 1]) opts.maxChars = Math.max(1000, Math.min(60000, Number(argv[++i]) || 12000));
    else if (a === "--checkpoint-every" && argv[i + 1]) opts.checkpointEvery = Math.max(1, Number(argv[++i]) || 20);
    else if (a === "--retries" && argv[i + 1]) opts.retries = Math.max(1, Math.min(12, Number(argv[++i]) || 5));
    else if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--no-fallback") opts.fallbackToSource = false;
    else if (!a.startsWith("--") && !opts.locale) opts.locale = a;
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));

const LANGS = {
  es: "Spanish",
  zh: "Simplified Chinese",
  pl: "Polish",
  fr: "French",
  de: "German",
  ar: "Arabic",
  hi: "Hindi",
  ja: "Japanese",
  ko: "Korean",
  ru: "Russian",
  pt: "Portuguese",
  it: "Italian",
  tr: "Turkish",
  vi: "Vietnamese",
  th: "Thai",
  id: "Indonesian",
  uk: "Ukrainian",
};

const API_KEY = process.env.OPENAI_MEDIA_API_KEY || process.env.OPENAI_API_KEY;
if (!opts.dryRun && !API_KEY) {
  console.error("Missing OPENAI_MEDIA_API_KEY or OPENAI_API_KEY");
  process.exit(1);
}

if (!opts.locale || !LANGS[opts.locale]) {
  console.error(`Usage: --locale <${Object.keys(LANGS).join("|")}>`);
  process.exit(1);
}

const locale = opts.locale;
const langName = LANGS[locale];
const outDir = path.join(OUT_DIR_BASE, locale);
const statePath = path.join(DATA_DIR, `state-${locale}.json`);
const legacyStatePath = path.join(outDir, "_state.json");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function memMB() {
  const m = process.memoryUsage();
  return `RSS=${(m.rss / 1048576).toFixed(0)}MB heap=${(m.heapUsed / 1048576).toFixed(0)}/${(m.heapTotal / 1048576).toFixed(0)}MB`;
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
    engine: "fast-chunks-v1",
  });
  await Promise.all([
    fs.writeFile(statePath, payload),
    fs.writeFile(legacyStatePath, payload),
  ]);
}

async function callOpenAI(items, retries = opts.retries) {
  const systemPrompt =
    `Translate each English string into ${langName}. ` +
    `Preserve meaning, markdown, HTML tags, formulas, code, and numeric values. ` +
    `Do not skip items. Return strict JSON: {"translations":[{"idx":0,"text":"..."}]}.`;

  const userPayload = items.map((item, idx) => ({
    idx,
    text: item.text,
    category: item.category || "other",
  }));

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000);

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: opts.model,
          temperature: 0.1,
          max_tokens: 16000,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: JSON.stringify(userPayload) },
          ],
        }),
      });

      clearTimeout(timeoutId);

      if (res.status === 429) {
        const waitMs = Math.min(10000 * Math.pow(2, attempt), 120000) + Math.floor(Math.random() * 1000);
        await sleep(waitMs);
        continue;
      }

      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`OpenAI ${res.status}: ${body.slice(0, 200)}`);
      }

      const data = await res.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error("Empty content");

      const parsed = JSON.parse(content);
      const translations = parsed?.translations;
      if (!Array.isArray(translations)) throw new Error("Invalid JSON shape");

      const out = new Map();
      for (const row of translations) {
        if (typeof row?.idx !== "number") continue;
        if (typeof row?.text !== "string") continue;
        out.set(row.idx, row.text);
      }
      return out;
    } catch (error) {
      if (attempt === retries - 1) throw error;
      const waitMs = Math.min(3000 * Math.pow(2, attempt), 30000) + Math.floor(Math.random() * 800);
      await sleep(waitMs);
    }
  }

  throw new Error("Retries exhausted");
}

function errorMessage(error) {
  return String(error?.message || error || "");
}

function isTransientError(error) {
  const msg = errorMessage(error).toLowerCase();
  return (
    msg.includes("429") ||
    msg.includes("rate") ||
    msg.includes("timeout") ||
    msg.includes("timed out") ||
    msg.includes("abort") ||
    msg.includes("econnreset") ||
    msg.includes("enotfound") ||
    msg.includes("openai 5")
  );
}

function shouldSplitBatch(error) {
  const msg = errorMessage(error).toLowerCase();
  return (
    msg.includes("missing translation idx") ||
    msg.includes("invalid json shape") ||
    msg.includes("openai 400")
  );
}

async function translateBatchResilient(batch, stats, depth = 0) {
  try {
    const translated = await callOpenAI(batch);
    const resolved = [];

    for (let i = 0; i < batch.length; i++) {
      const src = batch[i];
      const text = translated.get(i);
      if (typeof text === "string" && text.trim().length > 0) {
        resolved.push({ hash: src.hash, text });
        continue;
      }

      if (batch.length === 1 && opts.fallbackToSource) {
        stats.fallbackToSource++;
        resolved.push({ hash: src.hash, text: src.text });
        continue;
      }

      throw new Error(`Missing translation idx=${i}`);
    }

    return resolved;
  } catch (error) {
    if (isTransientError(error)) {
      throw error;
    }

    if (batch.length === 1) {
      if (opts.fallbackToSource) {
        stats.fallbackToSource++;
        return [{ hash: batch[0].hash, text: batch[0].text }];
      }
      throw error;
    }

    if (!shouldSplitBatch(error)) {
      throw error;
    }

    // Split failed batches until only the problematic item remains.
    const mid = Math.floor(batch.length / 2);
    const left = await translateBatchResilient(batch.slice(0, mid), stats, depth + 1);
    const right = await translateBatchResilient(batch.slice(mid), stats, depth + 1);
    return left.concat(right);
  }
}

function buildBatches(items, batchSize, maxChars) {
  const batches = [];
  let current = [];
  let charCount = 0;

  for (const item of items) {
    const len = typeof item.text === "string" ? item.text.length : 0;
    const wouldOverflow = current.length >= batchSize || charCount + len > maxChars;

    if (current.length > 0 && wouldOverflow) {
      batches.push(current);
      current = [];
      charCount = 0;
    }

    current.push(item);
    charCount += len;
  }

  if (current.length > 0) {
    batches.push(current);
  }

  return batches;
}

async function processChunk({
  chunkName,
  chunkPath,
  completed,
  stats,
  totalPending,
}) {
  const chunkRaw = await fs.readFile(chunkPath, "utf8");
  const chunk = JSON.parse(chunkRaw);

  const pending = [];
  for (const [hash, entry] of Object.entries(chunk)) {
    if (!completed[hash]) {
      pending.push({
        hash,
        text: entry?.text || "",
        category: entry?.category || "other",
      });
    }
  }

  if (pending.length === 0) {
    stats.chunksSkipped++;
    return;
  }

  const batches = buildBatches(pending, opts.batchSize, opts.maxChars);
  stats.chunksWorked++;

  let cursor = 0;
  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= batches.length) return;
      const batch = batches[i];

      let resolved = null;
      const maxBatchAttempts = 7;
      for (let attempt = 1; attempt <= maxBatchAttempts; attempt++) {
        try {
          resolved = await translateBatchResilient(batch, stats);
          break;
        } catch (error) {
          if (attempt === maxBatchAttempts) {
            if (!opts.fallbackToSource) throw error;
            stats.fallbackToSource += batch.length;
            resolved = batch.map((row) => ({ hash: row.hash, text: row.text }));
            break;
          }
          const waitMs = Math.min(2000 * Math.pow(2, attempt - 1), 45000);
          console.warn(
            `[${locale}] batch retry ${attempt}/${maxBatchAttempts} ` +
            `chunk=${chunkName} reason=${errorMessage(error).slice(0, 120)} wait=${waitMs}ms`
          );
          await sleep(waitMs);
        }
      }

      if (!resolved) {
        throw new Error("Batch resolved to empty result unexpectedly");
      }

      for (const row of resolved) {
        completed[row.hash] = row.text;
      }

      stats.batchesDone++;
      stats.translatedDone += resolved.length;
      const now = Date.now();

      if (stats.batchesDone % 1 === 0) {
        const elapsedSec = ((now - stats.startedAt) / 1000).toFixed(0);
        const pct = totalPending > 0 ? ((stats.translatedDone / totalPending) * 100).toFixed(2) : "100.00";
        const rate = stats.translatedDone / Math.max(1, ((now - stats.startedAt) / 1000));
        const etaSec = rate > 0 ? Math.max(0, Math.floor((totalPending - stats.translatedDone) / rate)) : 0;
        console.log(
          `[${locale}] ${pct}% | ${stats.translatedDone.toLocaleString()}/${totalPending.toLocaleString()} | ` +
          `batch ${stats.batchesDone.toLocaleString()} | chunk ${chunkName} | ` +
          `${elapsedSec}s elapsed | ~${etaSec}s ETA | ${memMB()}`
        );
      }
    }
  }

  const workers = [];
  for (let i = 0; i < opts.concurrency; i++) workers.push(worker());
  await Promise.all(workers);
}

async function countPending(chunkFiles, completed) {
  let pending = 0;
  for (const f of chunkFiles) {
    const raw = await fs.readFile(path.join(CHUNKS_DIR, f), "utf8");
    const chunk = JSON.parse(raw);
    for (const hash of Object.keys(chunk)) {
      if (!completed[hash]) pending++;
    }
  }
  return pending;
}

async function main() {
  if (!existsSync(CHUNKS_DIR)) {
    console.error(`Chunks directory not found: ${CHUNKS_DIR}`);
    process.exit(1);
  }

  await fs.mkdir(outDir, { recursive: true });
  const completed = await loadState();
  const chunkFiles = (await fs.readdir(CHUNKS_DIR)).filter((f) => f.endsWith(".json")).sort();

  console.log(`\n${"=".repeat(64)}`);
  console.log(`translate-fast-chunks.mjs | ${langName} (${locale})`);
  console.log(
    `concurrency=${opts.concurrency} batchSize=${opts.batchSize} maxChars=${opts.maxChars} ` +
    `checkpointEvery=${opts.checkpointEvery} retries=${opts.retries} fallback=${opts.fallbackToSource}`
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
    const chunkPath = path.join(CHUNKS_DIR, chunkName);
    await processChunk({
      chunkName: `${idx + 1}/${chunkFiles.length}`,
      chunkPath,
      completed,
      stats,
      totalPending,
    });

    if ((idx + 1) % 5 === 0 || idx + 1 === chunkFiles.length) {
      try {
        await saveState(completed, {
          translated: stats.translatedDone,
          batches: stats.batchesDone,
          chunksWorked: stats.chunksWorked,
          chunksSkipped: stats.chunksSkipped,
          fallbackToSource: stats.fallbackToSource,
          totalPending,
          chunk: `${idx + 1}/${chunkFiles.length}`,
        });
      } catch (error) {
        console.warn(`[${locale}] checkpoint save failed: ${error?.message || error}`);
      }
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
  console.log(`${locale.toUpperCase()} fast translation complete`);
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

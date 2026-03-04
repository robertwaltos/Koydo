// Helper script to write translate-simple.mjs to disk
// Run: node scripts/_write-translate-simple.mjs
// Then delete this file

const fs = require('fs');
const path = require('path');

const content = String.raw`#!/usr/bin/env node
/**
 * translate-simple.mjs - RAM-safe chunk-based curriculum translator.
 * NEVER loads manifest.json (183 MB) or key-to-hash.json (88 MB).
 * Loads ONE chunk file at a time (~126 KB each, 729 total).
 * Peak memory: ~200 MB
 */
import fs from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
try {
  for (const line of readFileSync(path.join(ROOT, ".env.local"), "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq < 0) continue;
    const k = t.slice(0, eq).trim(), v = t.slice(eq + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
} catch {}

const args = process.argv.slice(2);
let locale = null, DRY_RUN = false, SLEEP_MS = 2000, BATCH_SIZE = 40;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--locale" && args[i+1]) { locale = args[++i]; continue; }
  if (args[i] === "--dry-run") { DRY_RUN = true; continue; }
  if (args[i].startsWith("--sleep=")) { SLEEP_MS = parseInt(args[i].split("=")[1],10); continue; }
  if (args[i] === "--sleep" && args[i+1]) { SLEEP_MS = parseInt(args[++i],10); continue; }
  if (args[i].startsWith("--batch-size=")) { BATCH_SIZE = parseInt(args[i].split("=")[1],10); continue; }
  if (args[i] === "--batch-size" && args[i+1]) { BATCH_SIZE = parseInt(args[++i],10); continue; }
  if (!args[i].startsWith("--") && !locale) { locale = args[i]; continue; }
}
if (!locale) { console.error("Usage: node translate-simple.mjs <locale> [--dry-run] [--sleep N] [--batch-size N]"); process.exit(1); }

const API_KEY = process.env.OPENAI_MEDIA_API_KEY || process.env.OPENAI_API_KEY;
if (!API_KEY && !DRY_RUN) { console.error("No OPENAI_MEDIA_API_KEY or OPENAI_API_KEY"); process.exit(1); }

const LANGS = { es:"Spanish", zh:"Simplified Chinese", pl:"Polish", fr:"French", de:"German", ar:"Arabic", hi:"Hindi", ja:"Japanese", ko:"Korean", ru:"Russian", pt:"Portuguese", it:"Italian", tr:"Turkish", vi:"Vietnamese" };
const langName = LANGS[locale];
if (!langName) { console.error("Unknown locale: " + locale); process.exit(1); }

const DATA_DIR = path.join(ROOT, "data", "translations");
const CHUNKS_DIR = path.join(DATA_DIR, "chunks");
const OUT_DIR = path.join(ROOT, "public", "translations", locale);
const STATE_PATH = path.join(DATA_DIR, "state-" + locale + ".json");
const MODEL = "gpt-4o-mini";
const SAVE_EVERY = 3;

await fs.mkdir(DATA_DIR, { recursive: true });
await fs.mkdir(OUT_DIR, { recursive: true });

const sleepFn = ms => new Promise(r => setTimeout(r, ms));

function memMB() {
  const m = process.memoryUsage();
  return "RSS=" + (m.rss/1048576).toFixed(0) + "MB heap=" + (m.heapUsed/1048576).toFixed(0) + "/" + (m.heapTotal/1048576).toFixed(0) + "MB";
}

async function callAPI(messages, retries = 4) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const ctrl = new AbortController();
      const tid = setTimeout(() => ctrl.abort(), 120000);
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
        signal: ctrl.signal,
        body: JSON.stringify({ model: MODEL, messages, temperature: 0.2, max_tokens: 16000, response_format: { type: "json_object" } }),
      });
      clearTimeout(tid);
      if (res.status === 429) {
        const wait = 60000 * (attempt + 1);
        console.log("  Rate limited, waiting " + (wait/1000) + "s...");
        await sleepFn(wait); continue;
      }
      if (!res.ok) { const body = await res.text().catch(()=>""); throw new Error("HTTP " + res.status + ": " + body.slice(0,200)); }
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error("Empty API response");
      return JSON.parse(content);
    } catch (e) {
      if (attempt === retries - 1) throw e;
      const wait = 20000 * (attempt + 1) + Math.random() * 5000;
      console.log("  Retry " + (attempt+1) + "/" + retries + ": " + e.message.slice(0,80) + ", wait " + (wait/1000).toFixed(0) + "s");
      await sleepFn(wait);
    }
  }
}

async function loadState() {
  for (const p of [STATE_PATH, path.join(OUT_DIR, "_state.json")]) {
    try { const raw = await fs.readFile(p, "utf8"); const s = JSON.parse(raw); return s.completedHashes || {}; } catch {}
  }
  return {};
}

async function saveState(hashes, stats) {
  const payload = JSON.stringify({ locale, completedHashes: hashes, stats, savedAt: new Date().toISOString() });
  await Promise.all([fs.writeFile(STATE_PATH, payload), fs.writeFile(path.join(OUT_DIR, "_state.json"), payload)]);
}

async function translateBatch(items) {
  const sysContent = "You are a professional educational content translator. Translate all English text into " + langName + ".\nRules:\n- Preserve technical/scientific terminology accuracy\n- Keep mathematical notation, formulas, chemical symbols, and code unchanged\n- Maintain educational tone\n- Do not translate proper nouns unless they have established translations\n- Preserve markdown formatting\n- Return JSON: {\"translations\": [{\"idx\": 0, \"text\": \"translated text\"}, ...]}\n- Each idx must match input idx. Translate ALL items.";
  return callAPI([{ role: "system", content: sysContent }, { role: "user", content: JSON.stringify(items) }]);
}

async function main() {
  console.log("\n" + "=".repeat(60));
  console.log("  translate-simple.mjs - CHUNK-BASED - " + langName + " (" + locale + ")");
  console.log("  Sleep: " + SLEEP_MS + "ms | Batch: " + BATCH_SIZE + " | " + (DRY_RUN ? "DRY RUN" : "LIVE"));
  console.log("=".repeat(60));
  console.log("  " + memMB() + "\n");

  const completed = await loadState();
  const startCount = Object.keys(completed).length;
  console.log("Existing translations: " + startCount.toLocaleString());
  console.log("After state load: " + memMB() + "\n");

  if (!existsSync(CHUNKS_DIR)) { console.error("Chunks not found: " + CHUNKS_DIR); process.exit(1); }
  const chunkFiles = (await fs.readdir(CHUNKS_DIR)).filter(f => f.endsWith(".json")).sort();
  console.log("Found " + chunkFiles.length + " chunk files\n");

  let totalPending = 0;
  console.log("Scanning chunks for pending strings...");
  for (const cf of chunkFiles) {
    const chunk = JSON.parse(await fs.readFile(path.join(CHUNKS_DIR, cf), "utf8"));
    for (const hash of Object.keys(chunk)) { if (!completed[hash]) totalPending++; }
  }
  const totalBatches = Math.ceil(totalPending / BATCH_SIZE);
  const estMin = (totalBatches * (SLEEP_MS + 2000)) / 60000;
  console.log("Pending: " + totalPending.toLocaleString() + " | Batches: " + totalBatches.toLocaleString() + " | ~" + estMin.toFixed(0) + " min\n");

  if (DRY_RUN) { console.log("DRY RUN - exiting. " + memMB()); return; }
  if (totalPending === 0) { console.log("Nothing to translate!"); return; }

  let globalBatch = 0, totalTranslated = 0, totalErrors = 0, totalSkipped = 0, batchesSinceSave = 0;
  const t0 = Date.now();

  for (let ci = 0; ci < chunkFiles.length; ci++) {
    const cf = chunkFiles[ci];
    const chunk = JSON.parse(await fs.readFile(path.join(CHUNKS_DIR, cf), "utf8"));
    const pending = [];
    for (const [hash, entry] of Object.entries(chunk)) {
      if (!completed[hash]) pending.push({ hash, text: entry.text, category: entry.category || "other" });
    }
    if (pending.length === 0) { totalSkipped++; continue; }

    const chunkBatches = Math.ceil(pending.length / BATCH_SIZE);
    for (let b = 0; b < chunkBatches; b++) {
      globalBatch++;
      const slice = pending.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE);
      const items = slice.map((s, i) => ({ idx: i, text: s.text, category: s.category }));

      try {
        const result = await translateBatch(items);
        const translations = result?.translations || [];
        let batchDone = 0;
        for (const t of translations) {
          if (typeof t.idx === "number" && t.text && slice[t.idx]) { completed[slice[t.idx].hash] = t.text; batchDone++; }
        }
        totalTranslated += batchDone;
        if (batchDone < slice.length) totalErrors += (slice.length - batchDone);
      } catch (e) {
        console.error("  Batch " + globalBatch + " FAILED: " + e.message.slice(0, 120));
        totalErrors += slice.length;
      }

      batchesSinceSave++;
      if (batchesSinceSave >= SAVE_EVERY) {
        await saveState(completed, { translated: totalTranslated, errors: totalErrors, totalInState: Object.keys(completed).length, chunk: cf });
        batchesSinceSave = 0;
      }

      if (globalBatch % 10 === 0 || globalBatch === totalBatches) {
        const pct = ((globalBatch / totalBatches) * 100).toFixed(1);
        const elapsed = ((Date.now() - t0) / 60000).toFixed(1);
        const rate = globalBatch / ((Date.now() - t0) / 60000);
        const eta = rate > 0 ? ((totalBatches - globalBatch) / rate).toFixed(1) : "?";
        console.log("[" + pct + "%] batch " + globalBatch + "/" + totalBatches + " | chunk " + (ci+1) + "/" + chunkFiles.length + " | " + totalTranslated.toLocaleString() + " new | " + totalErrors + " err | " + elapsed + "m elapsed | ~" + eta + "m ETA | " + memMB());
      }

      if (globalBatch < totalBatches) await sleepFn(SLEEP_MS);
    }
  }

  await saveState(completed, { translated: totalTranslated, errors: totalErrors, totalInState: Object.keys(completed).length, completedAt: new Date().toISOString() });

  const finalCount = Object.keys(completed).length;
  const elapsed = ((Date.now() - t0) / 60000).toFixed(1);
  console.log("\n" + "=".repeat(60));
  console.log("  " + locale.toUpperCase() + " TRANSLATION COMPLETE");
  console.log("  New: " + totalTranslated.toLocaleString() + " | Errors: " + totalErrors);
  console.log("  Total: " + finalCount.toLocaleString() + " (was " + startCount.toLocaleString() + ")");
  console.log("  Skipped: " + totalSkipped + "/" + chunkFiles.length);
  console.log("  Time: " + elapsed + " min | " + memMB());
  console.log("=".repeat(60));
  console.log("\nRun output writer:");
  console.log("  node --max-old-space-size=4096 scripts/write-translation-output.mjs --locale " + locale + "\n");
}

main().catch(e => { console.error("FATAL:", e); process.exit(1); });
`;

const target = path.join(__dirname, 'translate-simple.mjs');
fs.writeFileSync(target, content, 'utf8');
console.log('Wrote', fs.statSync(target).size, 'bytes to', target);

#!/usr/bin/env node
/**
 * translate-curriculum-batch.mjs
 *
 * Multi-engine consensus translation pipeline for Koydo curriculum.
 * Uses dual-OpenAI (primary + secondary prompt) with Google Translate spot-check.
 * Consensus: if primary and secondary agree (>= 0.80 similarity), accept primary.
 *            if they disagree, run verification pass to pick/synthesize best.
 *
 * Usage:
 *   node --env-file=.env scripts/translate-curriculum-batch.mjs --locale es --apply
 *   node --env-file=.env scripts/translate-curriculum-batch.mjs --locale zh --apply --resume
 *   node --env-file=.env scripts/translate-curriculum-batch.mjs --locale all --dry-run
 *   node --env-file=.env scripts/translate-curriculum-batch.mjs --locale es --apply --limit 500
 */

import fs from "node:fs/promises";
import { readFileSync } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

// Load .env.local so standalone scripts pick up all keys (Next.js only auto-loads for dev/build)
const projectRoot = process.cwd();
try {
  const envLocal = readFileSync(path.join(projectRoot, ".env.local"), "utf8");
  for (const line of envLocal.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx < 0) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch { /* .env.local may not exist */ }
const translationsDir = path.join(projectRoot, "data", "translations");
const outputBaseDir = path.join(projectRoot, "public", "translations");

const LOCALE_NAMES = {
  es: "Spanish", zh: "Simplified Chinese", pl: "Polish",
  fr: "French", de: "German", ar: "Arabic", hi: "Hindi",
  ja: "Japanese", ko: "Korean", ru: "Russian",
  pt: "Portuguese", it: "Italian", tr: "Turkish", vi: "Vietnamese",
  th: "Thai", id: "Indonesian", uk: "Ukrainian",
};

const PRIORITY_LOCALES = ["es", "zh", "pl"];

/* ------------------------------------------------------------------ */
/*  CLI                                                                */
/* ------------------------------------------------------------------ */

function parseArgs(argv) {
  const opts = {
    locale: null,       // "es" | "zh" | "pl" | "all"
    apply: false,
    limit: Infinity,
    concurrency: 8,
    batchSize: 40,      // strings per OpenAI call (used as fallback)
    resume: true,
    verbose: false,
    spotCheckPercent: 5, // % of strings to also check with Google Translate
    model: "gpt-4o-mini",
    verifyModel: "gpt-4o-mini",
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--locale" && argv[i + 1]) opts.locale = argv[++i];
    else if (a === "--apply") opts.apply = true;
    else if (a === "--dry-run") opts.apply = false;
    else if (a === "--no-resume") opts.resume = false;
    else if (a === "--verbose") opts.verbose = true;
    else if (a === "--limit" && argv[i + 1]) opts.limit = Number(argv[++i]) || Infinity;
    else if (a === "--concurrency" && argv[i + 1]) opts.concurrency = Math.max(1, Math.min(10, Number(argv[++i]) || 5));
    else if (a === "--batch-size" && argv[i + 1]) opts.batchSize = Math.max(1, Math.min(50, Number(argv[++i]) || 20));
    else if (a === "--model" && argv[i + 1]) opts.model = argv[++i];
    else if (a === "--spot-check" && argv[i + 1]) opts.spotCheckPercent = Number(argv[++i]) || 5;
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));

/* ------------------------------------------------------------------ */
/*  OpenAI client                                                      */
/* ------------------------------------------------------------------ */

const OPENAI_KEY = process.env.OPENAI_MEDIA_API_KEY || process.env.OPENAI_API_KEY;
const GOOGLE_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;

if (!OPENAI_KEY) {
  console.error("Missing OPENAI_MEDIA_API_KEY or OPENAI_API_KEY");
  process.exit(1);
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function callOpenAI(messages, model, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 min timeout

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        signal: controller.signal,
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.2,
          max_tokens: 16000,
          response_format: { type: "json_object" },
        }),
      });

      clearTimeout(timeoutId);

      if (res.status === 429) {
        const wait = Math.min(60000 * Math.pow(2, attempt), 240000);
        console.warn(`  429 rate limit, waiting ${(wait / 1000).toFixed(0)}s...`);
        await sleep(wait);
        continue;
      }

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        throw new Error(`OpenAI ${res.status}: ${errText.slice(0, 200)}`);
      }

      const data = await res.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error("Empty response from OpenAI");

      return {
        parsed: JSON.parse(content),
        usage: data.usage || {},
      };
    } catch (e) {
      if (attempt === retries - 1) throw e;
      console.warn(`  Attempt ${attempt + 1} failed: ${e.message}, retrying...`);
      await sleep(5000 * (attempt + 1));
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Google Translate client                                            */
/* ------------------------------------------------------------------ */

async function googleTranslate(texts, targetLang) {
  if (!GOOGLE_KEY) return null;
  try {
    const res = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: texts,
          target: targetLang === "zh" ? "zh-CN" : targetLang,
          source: "en",
          format: "text",
        }),
      }
    );
    if (!res.ok) {
      console.warn(`  Google Translate ${res.status}`);
      return null;
    }
    const data = await res.json();
    return data.data?.translations?.map(t => t.translatedText) || null;
  } catch (e) {
    console.warn(`  Google Translate error: ${e.message}`);
    return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Levenshtein similarity                                             */
/* ------------------------------------------------------------------ */

function levenshteinSimilarity(a, b) {
  if (a === b) return 1.0;
  const la = a.length, lb = b.length;
  if (la === 0 || lb === 0) return 0;
  // For very long strings, sample first 500 chars for performance
  const sa = a.slice(0, 500);
  const sb = b.slice(0, 500);
  const sla = sa.length, slb = sb.length;

  const matrix = [];
  for (let i = 0; i <= sla; i++) {
    matrix[i] = [i];
    for (let j = 1; j <= slb; j++) {
      if (i === 0) { matrix[i][j] = j; continue; }
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (sa[i - 1] === sb[j - 1] ? 0 : 1)
      );
    }
  }
  const dist = matrix[sla][slb];
  return 1 - dist / Math.max(sla, slb);
}

/* ------------------------------------------------------------------ */
/*  Translation batch functions                                        */
/* ------------------------------------------------------------------ */

function buildPrimaryPrompt(locale, items) {
  const langName = LOCALE_NAMES[locale] || locale;
  const itemsJson = items.map((it, i) => ({
    idx: i,
    text: it.text,
    category: it.category,
  }));

  return [
    {
      role: "system",
      content: `You are a professional educational content translator. Translate all provided English text into ${langName}.

Rules:
- Preserve technical/scientific/medical/legal terminology accuracy using standard accepted translations
- Keep mathematical notation, formulas, chemical symbols, and code snippets unchanged
- Maintain educational tone
- Do not translate proper nouns unless they have established translations in ${langName}
- Preserve any markdown formatting
- Return valid JSON: {"translations": [{"idx": 0, "text": "translated text"}, ...]}
- Each item's idx must match the input idx
- Translate ALL items, do not skip any`,
    },
    {
      role: "user",
      content: JSON.stringify(itemsJson),
    },
  ];
}

function buildSecondaryPrompt(locale, items) {
  const langName = LOCALE_NAMES[locale] || locale;
  const itemsJson = items.map((it, i) => ({
    idx: i,
    src: it.text,
    cat: it.category,
  }));

  return [
    {
      role: "system",
      content: `You are a native ${langName} speaker reviewing educational content translations. Translate each English source text into natural, fluent ${langName}.

Key priorities:
- Natural phrasing that sounds native, not machine-translated
- Domain-appropriate vocabulary (medical terms use standard ${langName} medical terminology, etc.)
- Keep formulas, code, and proper nouns in original form
- Return JSON: {"translations": [{"idx": 0, "text": "translated"}, ...]}`,
    },
    {
      role: "user",
      content: JSON.stringify(itemsJson),
    },
  ];
}

function buildVerificationPrompt(locale, original, translationA, translationB) {
  const langName = LOCALE_NAMES[locale] || locale;
  return [
    {
      role: "system",
      content: `You are a translation quality reviewer for ${langName} educational content.
You will see an English original and two candidate translations. Pick the better one or synthesize a corrected version.
Return JSON: {"result": "best translation text here", "choice": "a"|"b"|"merged", "reason": "brief explanation"}`,
    },
    {
      role: "user",
      content: JSON.stringify({ original, translation_a: translationA, translation_b: translationB }),
    },
  ];
}

/* ------------------------------------------------------------------ */
/*  State management                                                   */
/* ------------------------------------------------------------------ */

async function loadState(locale) {
  const statePath = path.join(translationsDir, `state-${locale}.json`);
  try {
    const raw = await fs.readFile(statePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return { locale, completedHashes: {}, stats: { total: 0, high: 0, verified: 0, errors: 0, inputTokens: 0, outputTokens: 0 } };
  }
}

async function saveState(locale, state) {
  const statePath = path.join(translationsDir, `state-${locale}.json`);
  await fs.writeFile(statePath, JSON.stringify(state));
}

/* ------------------------------------------------------------------ */
/*  Tiered translation categories                                      */
/* ------------------------------------------------------------------ */

const CONSENSUS_CATEGORIES = new Set([
  "chunk_content", "chunk_title", "question_text", "explanation",
  "flashcard_front", "flashcard_back", "learning_aid", "objective",
]);

function needsConsensus(category, charCount) {
  // Full consensus for important educational content
  if (CONSENSUS_CATEGORIES.has(category)) return true;
  // Also consensus for long strings regardless of category
  if (charCount > 200) return true;
  return false;
}

/* ------------------------------------------------------------------ */
/*  Core translation loop — single-pass (fast tier)                    */
/* ------------------------------------------------------------------ */

async function translateBatchSinglePass(locale, items, state) {
  const primaryMsgs = buildPrimaryPrompt(locale, items);
  const resultA = await callOpenAI(primaryMsgs, opts.model);
  const translationsA = resultA.parsed?.translations || [];
  state.stats.inputTokens += resultA.usage?.prompt_tokens || 0;
  state.stats.outputTokens += resultA.usage?.completion_tokens || 0;

  const results = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const tA = translationsA.find(t => t.idx === i)?.text || "";
    if (!tA) {
      results.push({ hash: item.hash, final: item.text, confidence: "failed" });
      state.stats.errors++;
    } else {
      results.push({ hash: item.hash, final: tA, confidence: "single_pass" });
      state.stats.high++;
      state.stats.total++;
    }
  }
  return results;
}

/* ------------------------------------------------------------------ */
/*  Core translation loop — consensus (quality tier)                   */
/* ------------------------------------------------------------------ */

async function translateBatchConsensus(locale, items, state) {
  // Run Engine A and Engine B in PARALLEL
  const [resultA, resultB] = await Promise.all([
    callOpenAI(buildPrimaryPrompt(locale, items), opts.model),
    callOpenAI(buildSecondaryPrompt(locale, items), opts.model),
  ]);

  const translationsA = resultA.parsed?.translations || [];
  const translationsB = resultB.parsed?.translations || [];
  state.stats.inputTokens += (resultA.usage?.prompt_tokens || 0) + (resultB.usage?.prompt_tokens || 0);
  state.stats.outputTokens += (resultA.usage?.completion_tokens || 0) + (resultB.usage?.completion_tokens || 0);

  const results = [];
  const needsVerification = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const tA = translationsA.find(t => t.idx === i)?.text || "";
    const tB = translationsB.find(t => t.idx === i)?.text || "";

    if (!tA && !tB) {
      results.push({ hash: item.hash, final: item.text, confidence: "failed" });
      state.stats.errors++;
      continue;
    }

    if (!tA || !tB) {
      results.push({ hash: item.hash, final: tA || tB, confidence: "single" });
      state.stats.total++;
      continue;
    }

    const sim = levenshteinSimilarity(tA, tB);

    if (sim >= 0.80) {
      results.push({ hash: item.hash, final: tA, confidence: "high", similarity: sim });
      state.stats.high++;
      state.stats.total++;
    } else {
      // Queue for batch verification
      needsVerification.push({ idx: results.length, item, tA, tB, sim });
      results.push(null); // placeholder
    }
  }

  // Batch verification for disagreements
  if (needsVerification.length > 0) {
    for (const v of needsVerification) {
      try {
        const verifyMsgs = buildVerificationPrompt(locale, v.item.text, v.tA, v.tB);
        const resultC = await callOpenAI(verifyMsgs, opts.verifyModel);
        state.stats.inputTokens += resultC.usage?.prompt_tokens || 0;
        state.stats.outputTokens += resultC.usage?.completion_tokens || 0;
        const verified = resultC.parsed?.result || v.tA;
        results[v.idx] = { hash: v.item.hash, final: verified, confidence: "verified", similarity: v.sim };
        state.stats.verified++;
        state.stats.total++;
      } catch {
        results[v.idx] = { hash: v.item.hash, final: v.tA, confidence: "fallback", similarity: v.sim };
        state.stats.total++;
      }
    }
  }

  return results.filter(Boolean);
}

/* ------------------------------------------------------------------ */
/*  Output: per-module JSON files                                      */
/* ------------------------------------------------------------------ */

async function writeModuleTranslations(locale, keyToHash, hashTranslations) {
  const localeDir = path.join(outputBaseDir, locale);
  await fs.mkdir(localeDir, { recursive: true });

  // Group keys by module
  const moduleKeys = {};
  for (const [key, hash] of Object.entries(keyToHash)) {
    const moduleId = key.split(":")[0];
    if (!moduleKeys[moduleId]) moduleKeys[moduleId] = {};
    const fieldPath = key.slice(key.indexOf(":") + 1); // "lessonId:field.path"
    const translation = hashTranslations[hash];
    if (translation) {
      moduleKeys[moduleId][fieldPath] = translation;
    }
  }

  let filesWritten = 0;
  const manifest = { locale, generatedAt: new Date().toISOString(), modules: {} };

  for (const [moduleId, fields] of Object.entries(moduleKeys)) {
    const fieldCount = Object.keys(fields).length;
    if (fieldCount === 0) continue;

    const moduleFile = {
      locale,
      moduleId,
      translatedAt: new Date().toISOString(),
      engineUsed: "consensus-v1",
      fieldCount,
      fields,
    };

    const filePath = path.join(localeDir, `${moduleId}.json`);
    await fs.writeFile(filePath, JSON.stringify(moduleFile));
    filesWritten++;
    manifest.modules[moduleId] = { fields: fieldCount };
  }

  // Write manifest
  const manifestPath = path.join(localeDir, "_manifest.json");
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  return filesWritten;
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

async function runLocale(locale) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`Translating to: ${LOCALE_NAMES[locale] || locale} (${locale})`);
  console.log(`${"=".repeat(60)}`);

  // Load manifest
  const manifestPath = path.join(translationsDir, "manifest.json");
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const keyToHashPath = path.join(translationsDir, "key-to-hash.json");
  const keyToHash = JSON.parse(await fs.readFile(keyToHashPath, "utf8"));

  // Load state for resume
  const state = opts.resume ? await loadState(locale) : { locale, completedHashes: {}, stats: { total: 0, high: 0, verified: 0, errors: 0, inputTokens: 0, outputTokens: 0 } };

  // Filter out already-translated hashes
  const allHashes = Object.keys(manifest.strings);
  const pending = allHashes.filter(h => !state.completedHashes[h]);
  const toTranslate = pending.slice(0, opts.limit);

  console.log(`Total unique strings: ${allHashes.length.toLocaleString()}`);
  console.log(`Already translated:   ${(allHashes.length - pending.length).toLocaleString()}`);
  console.log(`Pending:              ${pending.length.toLocaleString()}`);
  console.log(`Will translate:       ${toTranslate.length.toLocaleString()}`);

  if (toTranslate.length === 0) {
    console.log("Nothing to translate!");
    return;
  }

  // Separate into tiers
  const consensusHashes = [];
  const singlePassHashes = [];
  for (const hash of toTranslate) {
    const entry = manifest.strings[hash];
    if (needsConsensus(entry.category, entry.charCount)) {
      consensusHashes.push(hash);
    } else {
      singlePassHashes.push(hash);
    }
  }

  console.log(`  Consensus tier:    ${consensusHashes.length.toLocaleString()} strings (dual-engine + verification)`);
  console.log(`  Single-pass tier:  ${singlePassHashes.length.toLocaleString()} strings (fast, 1 engine)`);

  if (!opts.apply) {
    console.log("\n[DRY RUN] Would translate the above. Pass --apply to execute.");
    return;
  }

  // Build batches — larger for single-pass, smaller for consensus
  const SINGLE_BATCH_SIZE = 80;
  const CONSENSUS_BATCH_SIZE = 40;

  const singleBatches = [];
  for (let i = 0; i < singlePassHashes.length; i += SINGLE_BATCH_SIZE) {
    singleBatches.push(singlePassHashes.slice(i, i + SINGLE_BATCH_SIZE).map(hash => ({
      hash, text: manifest.strings[hash].text, category: manifest.strings[hash].category,
    })));
  }
  const consensusBatches = [];
  for (let i = 0; i < consensusHashes.length; i += CONSENSUS_BATCH_SIZE) {
    consensusBatches.push(consensusHashes.slice(i, i + CONSENSUS_BATCH_SIZE).map(hash => ({
      hash, text: manifest.strings[hash].text, category: manifest.strings[hash].category,
    })));
  }

  const totalBatches = singleBatches.length + consensusBatches.length;
  console.log(`Total batches: ${totalBatches} (${singleBatches.length} single@${SINGLE_BATCH_SIZE}, ${consensusBatches.length} consensus@${CONSENSUS_BATCH_SIZE})`);
  console.log(`Concurrency: ${opts.concurrency}`);

  const hashTranslations = { ...state.completedHashes };
  let batchesDone = 0;
  const startTime = Date.now();

  // Queue-based concurrency control (avoids spinning thousands of polling promises)
  async function runQueue(batches, processor, phaseLabel, batchIdxOffset = 0) {
    let nextIdx = 0;

    async function worker(workerId) {
      while (nextIdx < batches.length) {
        const idx = nextIdx++;
        const batch = batches[idx];
        const batchIdx = idx + batchIdxOffset;

        try {
          const results = await processor(locale, batch, state);

          for (const r of results) {
            hashTranslations[r.hash] = r.final;
            state.completedHashes[r.hash] = r.final;
          }

          batchesDone++;
          const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
          const pct = ((batchesDone / totalBatches) * 100).toFixed(1);
          const rate = batchesDone / ((Date.now() - startTime) / 60000);
          const eta = rate > 0 ? (((totalBatches - batchesDone) / rate) * 60).toFixed(0) : "?";

          // Periodic checkpoint every 20 batches
          if (batchesDone % 20 === 0 || batchesDone === totalBatches) {
            await saveState(locale, state);
          }

          if (batchesDone % 10 === 0 || batchesDone === totalBatches) {
            const highPct = state.stats.total > 0 ? ((state.stats.high / state.stats.total) * 100).toFixed(1) : "0";
            console.log(
              `  [${pct}%] Batch ${batchesDone}/${totalBatches} | ` +
              `${state.stats.total.toLocaleString()} done | ${highPct}% high-conf | ` +
              `${state.stats.verified} verified | ${state.stats.errors} err | ` +
              `${elapsed}s elapsed | ~${eta}s ETA`
            );
          }
        } catch (e) {
          console.error(`  Batch ${batchIdx} FAILED: ${e.message}`);
          state.stats.errors += batch.length;
        }
      }
    }

    // Launch N workers that pull from the queue
    const workers = [];
    for (let i = 0; i < opts.concurrency; i++) {
      workers.push(worker(i));
    }
    await Promise.all(workers);
  }

  // Phase 1: Single-pass batches (fast tier first)
  if (singleBatches.length > 0) {
    console.log(`\nPhase 1: Single-pass tier (${singleBatches.length} batches)...`);
    await runQueue(singleBatches, translateBatchSinglePass, "Phase 1");
    await saveState(locale, state);
    console.log(`  Phase 1 complete: ${singlePassHashes.length.toLocaleString()} strings translated`);
  }

  // Phase 2: Consensus batches (quality tier)
  if (consensusBatches.length > 0) {
    console.log(`\nPhase 2: Consensus tier (${consensusBatches.length} batches)...`);
    await runQueue(consensusBatches, translateBatchConsensus, "Phase 2", singleBatches.length);
  }

  // Final checkpoint
  await saveState(locale, state);

  // Google Translate spot-check (random sample)
  if (GOOGLE_KEY && opts.spotCheckPercent > 0) {
    const sampleSize = Math.ceil(toTranslate.length * (opts.spotCheckPercent / 100));
    const sampleHashes = toTranslate.sort(() => Math.random() - 0.5).slice(0, Math.min(sampleSize, 200));
    const sampleTexts = sampleHashes.map(h => manifest.strings[h].text);

    console.log(`\nRunning Google Translate spot-check on ${sampleHashes.length} strings...`);
    // Batch in groups of 100
    let agreements = 0;
    for (let i = 0; i < sampleTexts.length; i += 100) {
      const chunk = sampleTexts.slice(i, i + 100);
      const chunkHashes = sampleHashes.slice(i, i + 100);
      const googleResults = await googleTranslate(chunk, locale);
      if (googleResults) {
        for (let j = 0; j < googleResults.length; j++) {
          const ourTranslation = hashTranslations[chunkHashes[j]] || "";
          const sim = levenshteinSimilarity(ourTranslation, googleResults[j]);
          if (sim >= 0.70) agreements++;
        }
      }
    }
    const agreementRate = sampleHashes.length > 0 ? ((agreements / sampleHashes.length) * 100).toFixed(1) : "N/A";
    console.log(`  Google agreement rate: ${agreementRate}% (${agreements}/${sampleHashes.length})`);
  }

  // Write per-module JSON files
  console.log("\nWriting per-module translation files...");
  const filesWritten = await writeModuleTranslations(locale, keyToHash, hashTranslations);
  console.log(`Wrote ${filesWritten} module translation files to public/translations/${locale}/`);

  // Summary
  const costIn = (state.stats.inputTokens / 1e6) * 0.15;
  const costOut = (state.stats.outputTokens / 1e6) * 0.60;
  console.log(`\n=== ${locale} Translation Complete ===`);
  console.log(`Total translated:  ${state.stats.total.toLocaleString()}`);
  console.log(`High confidence:   ${state.stats.high.toLocaleString()}`);
  console.log(`Verified (3-pass): ${state.stats.verified.toLocaleString()}`);
  console.log(`Errors:            ${state.stats.errors.toLocaleString()}`);
  console.log(`API tokens:        ${state.stats.inputTokens.toLocaleString()} in / ${state.stats.outputTokens.toLocaleString()} out`);
  console.log(`Estimated cost:    $${(costIn + costOut).toFixed(2)}`);
}

async function main() {
  if (!opts.locale) {
    console.error("Usage: --locale es|zh|pl|all");
    process.exit(1);
  }

  // Verify manifest exists
  const manifestPath = path.join(translationsDir, "manifest.json");
  try {
    await fs.access(manifestPath);
  } catch {
    console.error("Manifest not found. Run extract-translatable-content.mjs first.");
    process.exit(1);
  }

  const locales = opts.locale === "all" ? PRIORITY_LOCALES : [opts.locale];

  for (const locale of locales) {
    if (!LOCALE_NAMES[locale]) {
      console.error(`Unknown locale: ${locale}. Available: ${Object.keys(LOCALE_NAMES).join(", ")}`);
      continue;
    }
    await runLocale(locale);
  }

  console.log("\nDone!");
}

main().catch(e => { console.error(e); process.exit(1); });

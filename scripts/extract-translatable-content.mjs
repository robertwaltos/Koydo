#!/usr/bin/env node
/**
 * extract-translatable-content.mjs
 *
 * Extracts every translatable string field from all 812+ curriculum modules.
 * Deduplicates identical strings via SHA-256.
 * Outputs a manifest for the translation pipeline.
 *
 * Usage:
 *   node scripts/extract-translatable-content.mjs [--verbose] [--limit N] [--module <id>]
 */

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");
const outputDir = path.join(projectRoot, "data", "translations");

/* ------------------------------------------------------------------ */
/*  CLI                                                                */
/* ------------------------------------------------------------------ */

function parseArgs(argv) {
  const opts = { verbose: false, limit: Infinity, moduleFilter: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--verbose") opts.verbose = true;
    else if (a === "--limit" && argv[i + 1]) { opts.limit = Number(argv[++i]) || Infinity; }
    else if (a === "--module" && argv[i + 1]) { opts.moduleFilter = argv[++i]; }
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));

/* ------------------------------------------------------------------ */
/*  Catalog loader (vm.Script pattern from enrich-curriculum-chunks)   */
/* ------------------------------------------------------------------ */

async function collectTsFiles(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collectTsFiles(full, base)));
    else if (entry.isFile() && entry.name.endsWith(".ts") && !entry.name.includes(".example."))
      files.push(path.relative(base, full));
  }
  return files;
}

async function readCatalogEntries() {
  const relPaths = (await collectTsFiles(catalogDir)).sort();
  const parsed = [];
  for (const relPath of relPaths) {
    const filePath = path.join(catalogDir, relPath);
    const source = await fs.readFile(filePath, "utf8");
    const match = source.match(/export const\s+([A-Za-z0-9_]+)\s*:\s*LearningModule\s*=/);
    if (!match) continue;
    const exportName = match[1];
    const transformed = source
      .replace(/^import\s+type\s+\{[^}]+\}\s+from\s+"[^"]+";\s*$/gm, "")
      .replace(/\s+as\s+const\b/g, "")
      .replace(new RegExp(`export const\\s+${exportName}\\s*:\\s*LearningModule\\s*=`, "m"), `const ${exportName} =`)
      .concat(`\nmodule.exports = ${exportName};\n`);
    try {
      const ctx = vm.createContext({ module: { exports: {} }, exports: {} });
      new vm.Script(transformed, { filename: relPath }).runInContext(ctx);
      const payload = ctx.module.exports;
      if (!payload || typeof payload !== "object") continue;
      parsed.push({ relPath, filePath, exportName, payload });
    } catch (e) {
      console.warn(`⚠ Failed to parse ${relPath}: ${e.message}`);
    }
  }
  return parsed;
}

/* ------------------------------------------------------------------ */
/*  String extraction walker                                           */
/* ------------------------------------------------------------------ */

function sha256(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function categorize(fieldPath) {
  if (/^title$|^description$|\.title$/.test(fieldPath)) return "title";
  if (/learningObjectives|objectives/.test(fieldPath)) return "objective";
  if (/chunks\.\d+\.content/.test(fieldPath)) return "chunk_content";
  if (/chunks\.\d+\.title/.test(fieldPath)) return "chunk_title";
  if (/questions\.\d+\.text/.test(fieldPath)) return "question_text";
  if (/questions\.\d+\.explanation/.test(fieldPath)) return "explanation";
  if (/questions\.\d+\.hint/.test(fieldPath)) return "hint";
  if (/questions\.\d+\.options\.\d+\.text/.test(fieldPath)) return "option_text";
  if (/flashcards\.\d+\.front/.test(fieldPath)) return "flashcard_front";
  if (/flashcards\.\d+\.back/.test(fieldPath)) return "flashcard_back";
  if (/flashcards\.\d+\.hint/.test(fieldPath)) return "hint";
  if (/interactiveActivities/.test(fieldPath)) return "activity";
  if (/learningAids/.test(fieldPath)) return "learning_aid";
  if (/imageAlt/.test(fieldPath)) return "alt_text";
  if (/gradeBand|tags/.test(fieldPath)) return "metadata";
  return "other";
}

/**
 * Walk a module and yield { key, text, category } for every translatable string.
 */
function* extractStrings(moduleId, mod) {
  // Module-level
  if (mod.title) yield { key: `${moduleId}:_:title`, text: mod.title };
  if (mod.description) yield { key: `${moduleId}:_:description`, text: mod.description };
  if (mod.gradeBand) yield { key: `${moduleId}:_:gradeBand`, text: mod.gradeBand };
  if (Array.isArray(mod.learningObjectives)) {
    for (let i = 0; i < mod.learningObjectives.length; i++) {
      if (mod.learningObjectives[i]) yield { key: `${moduleId}:_:learningObjectives.${i}`, text: mod.learningObjectives[i] };
    }
  }
  if (Array.isArray(mod.tags)) {
    for (let i = 0; i < mod.tags.length; i++) {
      if (mod.tags[i]) yield { key: `${moduleId}:_:tags.${i}`, text: mod.tags[i] };
    }
  }

  // Lessons
  if (!Array.isArray(mod.lessons)) return;
  for (let li = 0; li < mod.lessons.length; li++) {
    const lesson = mod.lessons[li];
    const lid = lesson.id || `l${li}`;
    if (lesson.title) yield { key: `${moduleId}:${lid}:title`, text: lesson.title };
    if (Array.isArray(lesson.objectives)) {
      for (let oi = 0; oi < lesson.objectives.length; oi++) {
        if (lesson.objectives[oi]) yield { key: `${moduleId}:${lid}:objectives.${oi}`, text: lesson.objectives[oi] };
      }
    }

    // Chunks
    if (Array.isArray(lesson.chunks)) {
      for (let ci = 0; ci < lesson.chunks.length; ci++) {
        const chunk = lesson.chunks[ci];
        if (chunk.title) yield { key: `${moduleId}:${lid}:chunks.${ci}.title`, text: chunk.title };
        if (chunk.content) yield { key: `${moduleId}:${lid}:chunks.${ci}.content`, text: chunk.content };
      }
    }

    // Questions
    if (Array.isArray(lesson.questions)) {
      for (let qi = 0; qi < lesson.questions.length; qi++) {
        const q = lesson.questions[qi];
        if (q.text) yield { key: `${moduleId}:${lid}:questions.${qi}.text`, text: q.text };
        if (q.hint) yield { key: `${moduleId}:${lid}:questions.${qi}.hint`, text: q.hint };
        if (q.explanation) yield { key: `${moduleId}:${lid}:questions.${qi}.explanation`, text: q.explanation };
        if (q.imageAlt) yield { key: `${moduleId}:${lid}:questions.${qi}.imageAlt`, text: q.imageAlt };
        if (Array.isArray(q.options)) {
          for (let opi = 0; opi < q.options.length; opi++) {
            if (q.options[opi].text) yield { key: `${moduleId}:${lid}:questions.${qi}.options.${opi}.text`, text: q.options[opi].text };
            if (q.options[opi].imageAlt) yield { key: `${moduleId}:${lid}:questions.${qi}.options.${opi}.imageAlt`, text: q.options[opi].imageAlt };
          }
        }
      }
    }

    // Flashcards
    if (Array.isArray(lesson.flashcards)) {
      for (let fi = 0; fi < lesson.flashcards.length; fi++) {
        const fc = lesson.flashcards[fi];
        if (fc.front) yield { key: `${moduleId}:${lid}:flashcards.${fi}.front`, text: fc.front };
        if (fc.back) yield { key: `${moduleId}:${lid}:flashcards.${fi}.back`, text: fc.back };
        if (fc.hint) yield { key: `${moduleId}:${lid}:flashcards.${fi}.hint`, text: fc.hint };
        if (fc.imageAlt) yield { key: `${moduleId}:${lid}:flashcards.${fi}.imageAlt`, text: fc.imageAlt };
      }
    }

    // Interactive Activities
    if (Array.isArray(lesson.interactiveActivities)) {
      for (let ai = 0; ai < lesson.interactiveActivities.length; ai++) {
        const act = lesson.interactiveActivities[ai];
        if (act.title) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.title`, text: act.title };
        if (act.description) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.description`, text: act.description };
        if (act.prompt) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.prompt`, text: act.prompt };
        if (Array.isArray(act.instructions)) {
          for (let ii = 0; ii < act.instructions.length; ii++) {
            if (act.instructions[ii]) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.instructions.${ii}`, text: act.instructions[ii] };
          }
        }
        if (Array.isArray(act.udlEngagement)) {
          for (let ui = 0; ui < act.udlEngagement.length; ui++) {
            if (act.udlEngagement[ui]) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.udlEngagement.${ui}`, text: act.udlEngagement[ui] };
          }
        }
        if (Array.isArray(act.buckets)) {
          for (let bi = 0; bi < act.buckets.length; bi++) {
            if (act.buckets[bi]) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.buckets.${bi}`, text: act.buckets[bi] };
          }
        }
        if (Array.isArray(act.zones)) {
          for (let zi = 0; zi < act.zones.length; zi++) {
            if (act.zones[zi]) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.zones.${zi}`, text: act.zones[zi] };
          }
        }
        if (Array.isArray(act.items)) {
          for (let ii = 0; ii < act.items.length; ii++) {
            const item = act.items[ii];
            const txt = typeof item === "string" ? item : item?.text;
            if (txt) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.items.${ii}`, text: txt };
          }
        }
        if (Array.isArray(act.pairs)) {
          for (let pi = 0; pi < act.pairs.length; pi++) {
            if (act.pairs[pi].left) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.pairs.${pi}.left`, text: act.pairs[pi].left };
            if (act.pairs[pi].right) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.pairs.${pi}.right`, text: act.pairs[pi].right };
          }
        }
      }
    }

    // Learning Aids
    if (Array.isArray(lesson.learningAids)) {
      for (let lai = 0; lai < lesson.learningAids.length; lai++) {
        const aid = lesson.learningAids[lai];
        if (aid.title) yield { key: `${moduleId}:${lid}:learningAids.${lai}.title`, text: aid.title };
        if (aid.content) yield { key: `${moduleId}:${lid}:learningAids.${lai}.content`, text: aid.content };
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

async function main() {
  console.log("Loading catalog entries...");
  let entries = await readCatalogEntries();
  if (opts.moduleFilter) {
    entries = entries.filter(e => e.payload.id?.includes(opts.moduleFilter));
  }
  if (opts.limit < entries.length) entries = entries.slice(0, opts.limit);
  console.log(`Loaded ${entries.length} modules`);

  // Dedup structures
  /** @type {Map<string, { text: string, charCount: number, keys: string[], category: string }>} */
  const hashMap = new Map();
  /** @type {Map<string, string>} */
  const keyToHash = new Map();

  let totalStrings = 0;
  const perModule = {};

  for (const entry of entries) {
    const moduleId = entry.payload.id || entry.exportName;
    let moduleCount = 0;

    for (const { key, text } of extractStrings(moduleId, entry.payload)) {
      if (!text || typeof text !== "string" || text.trim().length === 0) continue;
      totalStrings++;
      moduleCount++;

      const hash = sha256(text);
      keyToHash.set(key, hash);

      const existing = hashMap.get(hash);
      if (existing) {
        existing.keys.push(key);
      } else {
        const cat = categorize(key);
        hashMap.set(hash, {
          text,
          charCount: text.length,
          keys: [key],
          category: cat,
        });
      }
    }

    perModule[moduleId] = moduleCount;
    if (opts.verbose) console.log(`  ${moduleId}: ${moduleCount} strings`);
  }

  const uniqueStrings = hashMap.size;
  const totalChars = [...hashMap.values()].reduce((s, v) => s + v.charCount, 0);
  const dedupSaved = totalStrings - uniqueStrings;

  // Category breakdown
  const catCounts = {};
  for (const v of hashMap.values()) {
    catCounts[v.category] = (catCounts[v.category] || 0) + 1;
  }

  console.log(`\n=== Extraction Summary ===`);
  console.log(`Modules processed: ${entries.length}`);
  console.log(`Total string refs:  ${totalStrings.toLocaleString()}`);
  console.log(`Unique strings:     ${uniqueStrings.toLocaleString()}`);
  console.log(`Dedup saved:        ${dedupSaved.toLocaleString()} (${((dedupSaved / totalStrings) * 100).toFixed(1)}%)`);
  console.log(`Total characters:   ${totalChars.toLocaleString()}`);
  console.log(`\nCategory breakdown:`);
  for (const [cat, count] of Object.entries(catCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${cat}: ${count.toLocaleString()}`);
  }

  // Estimated cost per language
  const avgTokensPerChar = 0.35;
  const inputTokens = totalChars * avgTokensPerChar;
  const outputTokens = inputTokens * 1.2; // translations slightly longer
  const costA = (inputTokens / 1e6) * 0.15 + (outputTokens / 1e6) * 0.60; // GPT-4o-mini
  const costB = costA; // second OpenAI pass same cost
  const costC = costA * 0.25; // verification only 20-25%
  console.log(`\n=== Cost Estimate (per language) ===`);
  console.log(`Engine A (OpenAI primary):    $${costA.toFixed(2)}`);
  console.log(`Engine B (OpenAI secondary):  $${costB.toFixed(2)}`);
  console.log(`Engine C (verification ~25%): $${costC.toFixed(2)}`);
  console.log(`Total estimated per language: $${(costA + costB + costC).toFixed(2)}`);
  console.log(`Total for 3 priority langs:   $${((costA + costB + costC) * 3).toFixed(2)}`);

  // Write outputs
  await fs.mkdir(outputDir, { recursive: true });

  // Manifest: convert Map to plain object for JSON
  const stringsObj = {};
  for (const [hash, val] of hashMap) {
    stringsObj[hash] = val;
  }

  const manifest = {
    version: 1,
    extractedAt: new Date().toISOString(),
    modulesProcessed: entries.length,
    totalStrings,
    uniqueStrings,
    dedupSaved,
    totalCharacters: totalChars,
    categoryBreakdown: catCounts,
    strings: stringsObj,
  };

  const manifestPath = path.join(outputDir, "manifest.json");
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${manifestPath}`);

  // Key-to-hash map
  const keyHashObj = Object.fromEntries(keyToHash);
  const keyHashPath = path.join(outputDir, "key-to-hash.json");
  await fs.writeFile(keyHashPath, JSON.stringify(keyHashObj));
  console.log(`Key-to-hash map written to ${keyHashPath} (${keyToHash.size.toLocaleString()} entries)`);

  // Per-module stats
  const statsPath = path.join(outputDir, "per-module-stats.json");
  await fs.writeFile(statsPath, JSON.stringify(perModule, null, 2));
  console.log(`Per-module stats written to ${statsPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });

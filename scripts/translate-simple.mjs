#!/usr/bin/env node
/**
 * translate-simple.mjs v3 — RAM-safe chunk-based translator WITH quality verification.
 * NEVER loads manifest.json (183 MB) or key-to-hash.json (88 MB).
 * Loads ONE chunk file at a time (~126 KB each, 729 total).
 * Every batch verified by a second "reviewer" prompt (quality gate).
 * State saved after EVERY batch. Peak memory: ~200 MB.
 */
import fs from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

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
let locale = null;
let DRY_RUN = false;
let SLEEP_MS = 2000;
let BATCH_SIZE = 20;
let MODEL = "gemini-2.5-flash";
let moduleFilter = null;
let VERIFY_ONLY = false;
let VERIFY_WITH_AI = false;
let VERIFY_WRITE_FIXES = false;
let VERIFY_LIMIT = 0;
let VERIFY_REPORT_PATH = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--locale" && args[i+1]) { locale = args[++i]; continue; }
  if (args[i] === "--dry-run") { DRY_RUN = true; continue; }
  if (args[i] === "--model" && args[i+1]) { MODEL = args[++i]; continue; }
  if (args[i] === "--module-id" && args[i+1]) { moduleFilter = args[++i]; continue; }
  if (args[i] === "--verify-only") { VERIFY_ONLY = true; continue; }
  if (args[i] === "--verify-with-ai") { VERIFY_WITH_AI = true; continue; }
  if (args[i] === "--verify-write-fixes") { VERIFY_WRITE_FIXES = true; continue; }
  if (args[i] === "--verify-limit" && args[i+1]) { VERIFY_LIMIT = parseInt(args[++i], 10) || 0; continue; }
  if (args[i].startsWith("--verify-limit=")) { VERIFY_LIMIT = parseInt(args[i].split("=")[1], 10) || 0; continue; }
  if (args[i] === "--verify-report-path" && args[i+1]) { VERIFY_REPORT_PATH = args[++i]; continue; }
  if (args[i].startsWith("--sleep=")) { SLEEP_MS = parseInt(args[i].split("=")[1],10); continue; }
  if (args[i] === "--sleep" && args[i+1]) { SLEEP_MS = parseInt(args[++i],10); continue; }
  if (args[i].startsWith("--batch-size=")) { BATCH_SIZE = parseInt(args[i].split("=")[1],10); continue; }
  if (args[i] === "--batch-size" && args[i+1]) { BATCH_SIZE = parseInt(args[++i],10); continue; }
  if (!args[i].startsWith("--") && !locale) { locale = args[i]; continue; }
}
if (!locale) {
  console.error(
    "Usage: node translate-simple.mjs <locale> [--dry-run] [--model M] [--sleep N] [--batch-size N] [--verify-only [--verify-with-ai] [--verify-write-fixes]]",
  );
  process.exit(1);
}

const API_KEY = process.env.GOOGLE_API_KEY;
if (!VERIFY_ONLY && !API_KEY && !DRY_RUN) {
  console.error("No GOOGLE_API_KEY found in env");
  process.exit(1);
}
if (VERIFY_ONLY && VERIFY_WITH_AI && !API_KEY && !DRY_RUN) {
  console.error("No GOOGLE_API_KEY found in env (required for --verify-with-ai)");
  process.exit(1);
}

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
  vi: "Tiếng Việt",
  th: "Thai",
  id: "Indonesian",
  uk: "Ukrainian",
  bn: "Bengali",
  ur: "Urdu"
};
const langName = LANGS[locale];
if (!langName) { console.error("Unknown locale: " + locale); process.exit(1); }

const DATA_DIR = path.join(ROOT, "data", "translations");
const CHUNKS_DIR = path.join(DATA_DIR, "chunks");
const OUT_DIR = path.join(ROOT, "public", "translations", locale);
const STATE_PATH = path.join(DATA_DIR, "state-" + locale + ".json");
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const MAX_CONSECUTIVE_ERRORS = 5;

const sleepFn = ms => new Promise(r => setTimeout(r, ms));

function memMB() {
  const m = process.memoryUsage();
  return "RSS=" + (m.rss/1048576).toFixed(0) + "MB heap=" + (m.heapUsed/1048576).toFixed(0) + "/" + (m.heapTotal/1048576).toFixed(0) + "MB";
}

async function callAPI(messages, schema, retries = 4) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const ctrl = new AbortController();
      const tid = setTimeout(() => ctrl.abort(), 120000);
      
      const systemInstruction = messages.find(m => m.role === "system")?.content || "";
      const userMessage = messages.find(m => m.role === "user")?.content || "";

      const url = `${GEMINI_BASE_URL}/models/${MODEL}:generateContent?key=${API_KEY}`;
      
      const body = {
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [
          { role: "user", parts: [{ text: userMessage }] }
        ],
        generationConfig: {
          response_mime_type: "application/json",
          response_schema: schema,
          temperature: 0.2
        }
      };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: ctrl.signal,
        body: JSON.stringify(body),
      });

      clearTimeout(tid);
      if (res.status === 429) {
        const wait = 60000 * (attempt + 1);
        console.log("  Rate limited, waiting " + (wait/1000) + "s...");
        await sleepFn(wait); continue;
      }
      if (!res.ok) { const body = await res.text().catch(()=>""); throw new Error("HTTP " + res.status + ": " + body.slice(0,200)); }
      const data = await res.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
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
  await fs.mkdir(path.dirname(STATE_PATH), { recursive: true }).catch(() => {});
  await fs.mkdir(OUT_DIR, { recursive: true }).catch(() => {});
  await Promise.all([fs.writeFile(STATE_PATH, payload), fs.writeFile(path.join(OUT_DIR, "_state.json"), payload)]);
}

async function translateBatch(items) {
  const sysContent = "You are a professional educational content translator. Translate all English text into " + langName + ".\nRules:\n- Preserve technical/scientific terminology accuracy\n- Keep mathematical notation, formulas, chemical symbols, and code unchanged\n- Maintain educational tone\n- Do not translate proper nouns unless they have established translations\n- Preserve markdown formatting\n- Return JSON: {\"translations\": [{\"idx\": 0, \"text\": \"translated text\"}, ...]}\n- Each idx must match input idx. Translate ALL items.";
  
  const schema = {
    type: "object",
    properties: {
      translations: {
        type: "array",
        items: {
          type: "object",
          properties: {
            idx: { type: "integer" },
            text: { type: "string" }
          },
          required: ["idx", "text"]
        }
      }
    },
    required: ["translations"]
  };

  return callAPI([{ role: "system", content: sysContent }, { role: "user", content: JSON.stringify(items) }], schema);
}

async function verifyBatch(items, translations) {
  const paired = items.map((item, i) => ({
    idx: item.idx,
    original: item.text,
    translation: translations[i] || "[MISSING]",
    category: item.category,
  }));
  const sysContent = "You are a senior bilingual editor reviewing English-to-" + langName + " translations of educational content.\nFor each item, check:\n1. ACCURACY — does the translation faithfully convey the same meaning?\n2. FLUENCY — is it natural and grammatically correct in " + langName + "?\n3. TERMINOLOGY — are technical/educational terms correctly translated?\n4. PRESERVATION — are markdown, formulas, code, HTML tags intact?\n\nReturn JSON: {\"reviews\": [{\"idx\": 0, \"ok\": true}, ...]}\nFor items with REAL problems: {\"idx\": N, \"ok\": false, \"fix\": \"corrected translation\", \"reason\": \"brief reason\"}\nIMPORTANT: Only flag genuine errors. Minor style differences are acceptable.";
  
  const schema = {
    type: "object",
    properties: {
      reviews: {
        type: "array",
        items: {
          type: "object",
          properties: {
            idx: { type: "integer" },
            ok: { type: "boolean" },
            fix: { type: "string" },
            reason: { type: "string" }
          },
          required: ["idx", "ok"]
        }
      }
    },
    required: ["reviews"]
  };

  return callAPI([{ role: "system", content: sysContent }, { role: "user", content: JSON.stringify(paired) }], schema);
}

const NON_LATIN_LOCALES = new Set(["ar", "bn", "hi", "ja", "ko", "ru", "th", "uk", "ur", "zh"]);
const PEDAGOGY_TERMS = [
  "Reasoning Match",
  "Mastery Sprint",
  "Checkpoint",
  "Guided Practice",
  "Verification Quiz",
  "Context recap",
  "Why this matters",
  "Step-by-step approach",
];

const PLACEHOLDER_RE = /{{\s*[\w.-]+\s*}}/g;
const LATEX_RE = /\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$(?:\\.|[^$\\\n])+\$|\\\((?:\\.|[^\\])+\\\)/g;
const CODE_FENCE_RE = /```[\s\S]*?```/g;
const INLINE_CODE_RE = /`[^`\n]+`/g;
const HTML_TAG_RE = /<\/?[a-zA-Z][^>]*>/g;
const HEADING_RE = /^#{1,6}\s+/gm;
const BULLET_RE = /^\s*[-*+]\s+/gm;
const NUMBERED_RE = /^\s*\d+\.\s+/gm;
const MD_LINK_RE = /\[[^\]\n]*\]\(([^)]+)\)/g;

function countMatches(regex, text) {
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function extractMatches(regex, text) {
  const globalFlags = regex.flags.includes("g") ? regex.flags : `${regex.flags}g`;
  const re = new RegExp(regex.source, globalFlags);
  const out = [];
  let match;
  while ((match = re.exec(text)) !== null) {
    out.push(match[0]);
    if (match.index === re.lastIndex) re.lastIndex += 1;
  }
  return out;
}

function extractMarkdownUrls(text) {
  const urls = [];
  const re = new RegExp(MD_LINK_RE.source, "g");
  let match;
  while ((match = re.exec(text)) !== null) {
    urls.push((match[1] || "").trim());
    if (match.index === re.lastIndex) re.lastIndex += 1;
  }
  return urls;
}

function incrementCounter(counter, key, amount = 1) {
  counter[key] = (counter[key] || 0) + amount;
}

function formatIssue(type, detail) {
  return { type, detail };
}

function evaluateFormatIssues(source, target) {
  const issues = [];

  const sourcePlaceholders = extractMatches(PLACEHOLDER_RE, source);
  if (sourcePlaceholders.length > 0) {
    for (const token of sourcePlaceholders) {
      if (!target.includes(token)) {
        issues.push(formatIssue("missing_placeholder_token", token));
      }
    }
  }

  const sourceLatex = extractMatches(LATEX_RE, source);
  if (sourceLatex.length > 0) {
    for (const token of sourceLatex) {
      if (!target.includes(token)) {
        issues.push(formatIssue("missing_latex_token", token.slice(0, 100)));
      }
    }
  }

  const sourceCodeFences = extractMatches(CODE_FENCE_RE, source);
  if (sourceCodeFences.length > 0) {
    for (const token of sourceCodeFences) {
      if (!target.includes(token)) {
        issues.push(formatIssue("missing_code_fence_block", token.slice(0, 80)));
      }
    }
  }

  const sourceInlineCode = extractMatches(INLINE_CODE_RE, source);
  if (sourceInlineCode.length > 0) {
    for (const token of sourceInlineCode) {
      if (!target.includes(token)) {
        issues.push(formatIssue("missing_inline_code_token", token));
      }
    }
  }

  const sourceTags = extractMatches(HTML_TAG_RE, source);
  if (sourceTags.length > 0) {
    for (const token of sourceTags) {
      if (!target.includes(token)) {
        issues.push(formatIssue("missing_html_tag", token));
      }
    }
  }

  const sourceLinks = extractMarkdownUrls(source);
  if (sourceLinks.length > 0) {
    const targetLinks = extractMarkdownUrls(target);
    if (targetLinks.length !== sourceLinks.length) {
      issues.push(
        formatIssue("markdown_link_count_mismatch", `source=${sourceLinks.length} target=${targetLinks.length}`),
      );
    }
    const targetLinkSet = new Set(targetLinks);
    for (const url of sourceLinks) {
      if (!targetLinkSet.has(url)) {
        issues.push(formatIssue("missing_markdown_link_url", url));
      }
    }
  }

  const sourceHeadingCount = countMatches(HEADING_RE, source);
  const targetHeadingCount = countMatches(HEADING_RE, target);
  if (sourceHeadingCount !== targetHeadingCount) {
    issues.push(
      formatIssue("heading_count_mismatch", `source=${sourceHeadingCount} target=${targetHeadingCount}`),
    );
  }

  const sourceBulletCount = countMatches(BULLET_RE, source);
  const targetBulletCount = countMatches(BULLET_RE, target);
  if (sourceBulletCount !== targetBulletCount) {
    issues.push(
      formatIssue("bullet_count_mismatch", `source=${sourceBulletCount} target=${targetBulletCount}`),
    );
  }

  const sourceNumberedCount = countMatches(NUMBERED_RE, source);
  const targetNumberedCount = countMatches(NUMBERED_RE, target);
  if (sourceNumberedCount !== targetNumberedCount) {
    issues.push(
      formatIssue("numbered_list_count_mismatch", `source=${sourceNumberedCount} target=${targetNumberedCount}`),
    );
  }

  return issues;
}

function evaluateLanguageIssues(source, target) {
  const issues = [];
  const normalizedSource = source.trim();
  const normalizedTarget = target.trim();

  if (
    normalizedSource.length >= 16 &&
    normalizedTarget.length >= 16 &&
    normalizedSource === normalizedTarget
  ) {
    issues.push(formatIssue("translation_identical_to_source", normalizedSource.slice(0, 120)));
  }

  if (NON_LATIN_LOCALES.has(locale)) {
    const words = normalizedTarget.match(/[A-Za-z]{3,}/g) || [];
    const totalWords = normalizedTarget.match(/\S+/g)?.length || 0;
    const ratio = totalWords > 0 ? words.length / totalWords : 0;
    if (totalWords >= 8 && ratio >= 0.55) {
      issues.push(formatIssue("high_latin_word_leakage", `latin_ratio=${ratio.toFixed(2)}`));
    }
  }

  for (const term of PEDAGOGY_TERMS) {
    const sourceHas = source.toLowerCase().includes(term.toLowerCase());
    const targetHas = target.toLowerCase().includes(term.toLowerCase());
    if (sourceHas && targetHas) {
      issues.push(formatIssue("pedagogy_term_untranslated", term));
    }
  }

  return issues;
}

function buildVerificationMarkdown(report) {
  const lines = [];
  lines.push(`# Translation Verification Report (${report.locale})`);
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Mode: ${report.mode}`);
  lines.push(`Compared hashes: ${report.stats.comparedHashes.toLocaleString()}`);
  lines.push(`Missing translations: ${report.stats.missingTranslations.toLocaleString()}`);
  lines.push(`Orphan translations: ${report.stats.orphanTranslations.toLocaleString()}`);
  lines.push("");
  lines.push("## Recurring Systemic Errors");
  lines.push("");

  if (report.recurringIssues.length === 0) {
    lines.push("- none detected");
  } else {
    for (const issue of report.recurringIssues) {
      lines.push(`- ${issue.type}: ${issue.count}`);
    }
  }

  lines.push("");
  lines.push("## AI Verification");
  lines.push("");
  lines.push(`- enabled: ${report.ai.enabled}`);
  lines.push(`- reviewed: ${report.ai.reviewed}`);
  lines.push(`- flagged: ${report.ai.flagged}`);
  lines.push(`- fixed: ${report.ai.fixed}`);
  lines.push(`- errors: ${report.ai.errors}`);
  lines.push("");
  lines.push("## Sample Issues");
  lines.push("");

  if (report.sampleIssues.length === 0) {
    lines.push("- none");
  } else {
    for (const sample of report.sampleIssues.slice(0, 50)) {
      lines.push(
        `- ${sample.type} | hash=${sample.hash} | category=${sample.category} | detail=${sample.detail}`,
      );
    }
  }

  lines.push("");
  return lines.join("\n");
}

async function runVerifyOnly() {
  console.log("\n" + "=".repeat(60));
  console.log(`  translate-simple.mjs VERIFY-ONLY - ${langName} (${locale})`);
  console.log(`  model=${MODEL} | batch=${BATCH_SIZE} | ai=${VERIFY_WITH_AI ? "on" : "off"} | applyFixes=${VERIFY_WRITE_FIXES ? "on" : "off"}`);
  console.log("=".repeat(60) + "\n");

  const completed = await loadState();
  const completedHashes = Object.keys(completed);
  const completedCount = completedHashes.length;

  let moduleHashes = null;
  if (moduleFilter) {
    try {
      const keyHashRaw = readFileSync(path.join(DATA_DIR, "key-to-hash.json"), "utf8");
      const keyHash = JSON.parse(keyHashRaw);
      moduleHashes = new Set();
      const prefix = `${moduleFilter}:`;
      for (const [key, hash] of Object.entries(keyHash)) {
        if (key.startsWith(prefix)) moduleHashes.add(hash);
      }
      console.log(`Module filter ${moduleFilter}: ${moduleHashes.size} hashes`);
    } catch (e) {
      console.warn(`Could not load key-to-hash.json for module filtering: ${e.message}`);
    }
  }

  if (!existsSync(CHUNKS_DIR)) {
    console.error("Chunks not found: " + CHUNKS_DIR);
    process.exit(1);
  }

  const chunkFiles = (await fs.readdir(CHUNKS_DIR)).filter((f) => f.endsWith(".json")).sort();
  const sourceHashSet = new Set();
  const issueCounts = {};
  const categoryIssueCounts = {};
  const sampleIssues = [];

  let comparedHashes = 0;
  let missingTranslations = 0;
  let stopEarly = false;

  const aiStats = { enabled: VERIFY_WITH_AI && !DRY_RUN, reviewed: 0, flagged: 0, fixed: 0, errors: 0 };
  let aiBatch = [];

  async function flushAiBatch() {
    if (!aiStats.enabled || aiBatch.length === 0) return;
    const items = aiBatch.map((entry, idx) => ({
      idx,
      text: entry.source,
      category: entry.category,
    }));
    const translations = aiBatch.map((entry) => entry.translation);

    try {
      const review = await verifyBatch(items, translations);
      const reviews = review?.reviews || [];
      aiStats.reviewed += aiBatch.length;

      for (const r of reviews) {
        if (typeof r?.idx !== "number") continue;
        const base = aiBatch[r.idx];
        if (!base) continue;
        if (r.ok === false) {
          aiStats.flagged += 1;
          incrementCounter(issueCounts, "ai_review_flagged");
          incrementCounter(categoryIssueCounts, `${base.category}::ai_review_flagged`);
          if (sampleIssues.length < 200) {
            sampleIssues.push({
              hash: base.hash,
              category: base.category,
              type: "ai_review_flagged",
              detail: (r.reason || "flagged without reason").slice(0, 200),
            });
          }
          if (VERIFY_WRITE_FIXES && r.fix && !DRY_RUN) {
            completed[base.hash] = r.fix;
            aiStats.fixed += 1;
          }
        }
      }
    } catch (err) {
      aiStats.errors += 1;
      console.warn("  AI verify batch failed:", err.message.slice(0, 120));
    }

    aiBatch = [];
    await sleepFn(SLEEP_MS);
  }

  for (const cf of chunkFiles) {
    const chunkContent = await fs.readFile(path.join(CHUNKS_DIR, cf), "utf8");
    const chunk = JSON.parse(chunkContent);

    for (const [hash, entry] of Object.entries(chunk)) {
      sourceHashSet.add(hash);
      if (moduleHashes && !moduleHashes.has(hash)) continue;

      const source = String(entry?.text ?? "");
      const category = String(entry?.category ?? "other");
      const translation = completed[hash];

      if (!translation) {
        missingTranslations += 1;
        continue;
      }

      comparedHashes += 1;
      const target = String(translation);
      const issues = [
        ...evaluateFormatIssues(source, target),
        ...evaluateLanguageIssues(source, target),
      ];

      for (const issue of issues) {
        incrementCounter(issueCounts, issue.type);
        incrementCounter(categoryIssueCounts, `${category}::${issue.type}`);
        if (sampleIssues.length < 200) {
          sampleIssues.push({
            hash,
            category,
            type: issue.type,
            detail: String(issue.detail || "").slice(0, 200),
          });
        }
      }

      if (aiStats.enabled) {
        aiBatch.push({ hash, source, translation: target, category });
        if (aiBatch.length >= BATCH_SIZE) {
          await flushAiBatch();
        }
      }

      if (VERIFY_LIMIT > 0 && comparedHashes >= VERIFY_LIMIT) {
        stopEarly = true;
        break;
      }
    }

    if (stopEarly) break;
  }

  await flushAiBatch();

  const orphanTranslations = completedHashes.filter((hash) => !sourceHashSet.has(hash)).length;

  if (VERIFY_WRITE_FIXES && aiStats.fixed > 0 && !DRY_RUN) {
    await saveState(completed, {
      verifyOnly: true,
      aiReviewed: aiStats.reviewed,
      aiFlagged: aiStats.flagged,
      aiFixed: aiStats.fixed,
      verifiedAt: new Date().toISOString(),
    });
  }

  const recurringIssues = Object.entries(issueCounts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 30);

  const report = {
    generatedAt: new Date().toISOString(),
    locale,
    mode: "verify_only",
    options: {
      verifyWithAi: aiStats.enabled,
      verifyWriteFixes: VERIFY_WRITE_FIXES,
      verifyLimit: VERIFY_LIMIT,
      batchSize: BATCH_SIZE,
      moduleFilter,
      dryRun: DRY_RUN,
    },
    stats: {
      sourceHashes: sourceHashSet.size,
      completedHashes: completedCount,
      comparedHashes,
      missingTranslations,
      orphanTranslations,
    },
    recurringIssues,
    categoryIssueCounts,
    ai: aiStats,
    sampleIssues,
  };

  const reportJsonPath = VERIFY_REPORT_PATH
    ? path.resolve(ROOT, VERIFY_REPORT_PATH)
    : path.join(OUT_DIR, "_verification-report.json");
  const reportMdPath = reportJsonPath.endsWith(".json")
    ? reportJsonPath.replace(/\.json$/i, ".md")
    : `${reportJsonPath}.md`;

  await fs.mkdir(path.dirname(reportJsonPath), { recursive: true });
  await fs.writeFile(reportJsonPath, JSON.stringify(report, null, 2));
  await fs.writeFile(reportMdPath, buildVerificationMarkdown(report));

  console.log("Verification complete.");
  console.log(`Compared hashes: ${comparedHashes.toLocaleString()}`);
  console.log(`Missing translations: ${missingTranslations.toLocaleString()}`);
  console.log(`Orphan translations: ${orphanTranslations.toLocaleString()}`);
  if (recurringIssues.length > 0) {
    console.log("Top systemic issues:");
    for (const issue of recurringIssues.slice(0, 10)) {
      console.log(`  - ${issue.type}: ${issue.count}`);
    }
  } else {
    console.log("No systemic issues detected.");
  }
  console.log(`Report JSON: ${reportJsonPath}`);
  console.log(`Report MD:   ${reportMdPath}\n`);
}

async function main() {
  if (VERIFY_ONLY) {
    await runVerifyOnly();
    return;
  }

  console.log("\n" + "=".repeat(60));
  console.log("  translate-simple.mjs - CHUNK-BASED - " + langName + " (" + locale + ")");
  console.log("  Model: " + MODEL + " | Sleep: " + SLEEP_MS + "ms | Batch: " + BATCH_SIZE + " | " + (DRY_RUN ? "DRY RUN" : "LIVE"));
  console.log("=".repeat(60));
  console.log("  " + memMB() + "\n");

  const completed = await loadState();
  const startCount = Object.keys(completed).length;
  console.log("Existing translations: " + startCount.toLocaleString());
  console.log("After state load: " + memMB() + "\n");

  let moduleHashes = null;
  if (moduleFilter) {
    console.log(`Filtering for module: ${moduleFilter}`);
    try {
      const keyHashRaw = readFileSync(path.join(DATA_DIR, "key-to-hash.json"), "utf8");
      const keyHash = JSON.parse(keyHashRaw);
      moduleHashes = new Set();
      const prefix = `${moduleFilter}:`;
      for (const [key, hash] of Object.entries(keyHash)) {
        if (key.startsWith(prefix)) moduleHashes.add(hash);
      }
      console.log(`Found ${moduleHashes.size} unique hashes for module ${moduleFilter}`);
    } catch (e) {
      console.warn(`Could not load key-to-hash.json for filtering: ${e.message}`);
    }
  }

  if (!existsSync(CHUNKS_DIR)) { console.error("Chunks not found: " + CHUNKS_DIR); process.exit(1); }
  const chunkFiles = (await fs.readdir(CHUNKS_DIR)).filter(f => f.endsWith(".json")).sort();
  console.log("Found " + chunkFiles.length + " chunk files\n");

  let totalPending = 0;
  console.log("Scanning chunks for pending strings...");
  for (const cf of chunkFiles) {
    const chunkContent = await fs.readFile(path.join(CHUNKS_DIR, cf), "utf8");
    const chunk = JSON.parse(chunkContent);
    for (const hash of Object.keys(chunk)) { if (!completed[hash]) totalPending++; }
  }
  const totalBatches = Math.ceil(totalPending / BATCH_SIZE);
  const estMin = (totalBatches * (SLEEP_MS + 2000)) / 60000;
  console.log("Pending: " + totalPending.toLocaleString() + " | Batches: " + totalBatches.toLocaleString() + " | ~" + estMin.toFixed(0) + " min\n");

  if (DRY_RUN) { console.log("DRY RUN - exiting. " + memMB()); return; }
  if (totalPending === 0) { console.log("Nothing to translate!"); return; }

  let globalBatch = 0, totalTranslated = 0, totalErrors = 0, totalSkipped = 0, totalVerified = 0, totalFixed = 0, consecutiveErrors = 0;
  const t0 = Date.now();

  for (let ci = 0; ci < chunkFiles.length; ci++) {
    const cf = chunkFiles[ci];
    const chunkContent = await fs.readFile(path.join(CHUNKS_DIR, cf), "utf8");
    const chunk = JSON.parse(chunkContent);
    const pending = [];
    for (const [hash, entry] of Object.entries(chunk)) {
      if (completed[hash]) continue;
      if (moduleHashes && !moduleHashes.has(hash)) continue;
      pending.push({ hash, text: entry.text, category: entry.category || "other" });
    }
    if (pending.length === 0) { totalSkipped++; continue; }

    const chunkBatches = Math.ceil(pending.length / BATCH_SIZE);
    for (let b = 0; b < chunkBatches; b++) {
      globalBatch++;
      const slice = pending.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE);
      const items = slice.map((s, i) => ({ idx: i, text: s.text, category: s.category }));

      try {
        // Step 1: Translate
        const result = await translateBatch(items);
        const rawTranslations = result?.translations || [];
        const tMap = {};
        for (const t of rawTranslations) {
          if (typeof t.idx === "number" && t.text != null) tMap[t.idx] = t.text;
        }

        await sleepFn(SLEEP_MS);

        // Step 2: Verify with reviewer prompt
        if (Object.keys(tMap).length > 0) {
          try {
            const orderedTexts = items.map((_, i) => tMap[i] || "[MISSING]");
            const review = await verifyBatch(items, orderedTexts);
            const reviews = review?.reviews || [];
            for (const r of reviews) {
              if (typeof r.idx !== "number") continue;
              if (r.ok === false && r.fix) { tMap[r.idx] = r.fix; totalFixed++; }
              if (r.ok) totalVerified++;
            }
          } catch (verifyErr) {
            console.log("  Verify failed (keeping translations): " + verifyErr.message.slice(0, 60));
          }
          await sleepFn(SLEEP_MS);
        }

        // Step 3: Save to state
        let batchDone = 0;
        for (const [idxStr, text] of Object.entries(tMap)) {
          const idx = parseInt(idxStr, 10);
          if (slice[idx] && text && text !== "[MISSING]") { completed[slice[idx].hash] = text; batchDone++; }
        }
        totalTranslated += batchDone;
        if (batchDone < slice.length) totalErrors += (slice.length - batchDone);
        consecutiveErrors = 0;
      } catch (e) {
        console.error("  Batch " + globalBatch + " FAILED: " + e.message.slice(0, 120));
        totalErrors += slice.length;
        consecutiveErrors++;
        if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
          console.error(MAX_CONSECUTIVE_ERRORS + " consecutive failures — saving state and stopping.");
          await saveState(completed, { translated: totalTranslated, verified: totalVerified, fixed: totalFixed, errors: totalErrors, totalInState: Object.keys(completed).length });
          process.exit(1);
        }
      }

      // Save after EVERY batch — never lose more than 1 batch on crash
      await saveState(completed, { translated: totalTranslated, verified: totalVerified, fixed: totalFixed, errors: totalErrors, totalInState: Object.keys(completed).length, chunk: cf });

      if (globalBatch % 10 === 0 || globalBatch === totalBatches) {
        const pct = ((globalBatch / totalBatches) * 100).toFixed(1);
        const elapsed = ((Date.now() - t0) / 60000).toFixed(1);
        const rate = globalBatch / ((Date.now() - t0) / 60000);
        const eta = rate > 0 ? ((totalBatches - globalBatch) / rate).toFixed(1) : "?";
        console.log("[" + pct + "%] batch " + globalBatch + "/" + totalBatches + " | +" + totalTranslated.toLocaleString() + " verified=" + totalVerified + " fixed=" + totalFixed + " err=" + totalErrors + " | " + elapsed + "m elapsed ~" + eta + "m ETA | " + memMB());
      }

      if (globalBatch < totalBatches) await sleepFn(SLEEP_MS);
    }
  }

  await saveState(completed, { translated: totalTranslated, verified: totalVerified, fixed: totalFixed, errors: totalErrors, totalInState: Object.keys(completed).length, completedAt: new Date().toISOString() });

  const finalCount = Object.keys(completed).length;
  const elapsed = ((Date.now() - t0) / 60000).toFixed(1);
  console.log("\n" + "=".repeat(60));
  console.log("  " + locale.toUpperCase() + " TRANSLATION COMPLETE");
  console.log("  New: " + totalTranslated.toLocaleString() + " | Verified: " + totalVerified + " | Fixed: " + totalFixed + " | Errors: " + totalErrors);
  console.log("  Total: " + finalCount.toLocaleString() + " (was " + startCount.toLocaleString() + ")");
  console.log("  Skipped: " + totalSkipped + "/" + chunkFiles.length);
  console.log("  Time: " + elapsed + " min | " + memMB());
  console.log("=".repeat(60));
  console.log("\nRun output writer:");
  console.log("  node --max-old-space-size=4096 scripts/write-translation-output.mjs --locale " + locale + "\n");
}

main().catch(e => { console.error("FATAL:", e); process.exit(1); });

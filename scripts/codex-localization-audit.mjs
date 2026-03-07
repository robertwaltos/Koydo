#!/usr/bin/env node
/**
 * codex-localization-audit.mjs
 *
 * Final module + locale localization audit with chain-of-custody checks.
 */

import fs from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const ROOT = process.cwd();
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_MODEL = "gemini-2.5-pro";

function loadEnvFile(fileName) {
  const filePath = path.join(ROOT, fileName);
  try {
    const raw = readFileSync(filePath, "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq < 0) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // Optional file.
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

function parseArgs(argv) {
  const opts = {
    locale: "",
    moduleId: "",
    verifyWithAi: false,
    applyFixes: false,
    aiLimit: 0,
    batchSize: 40,
    reportPath: "",
    dryRun: false,
    model: DEFAULT_MODEL,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--locale=")) {
      opts.locale = String(arg.split("=")[1] || "").trim();
      continue;
    }
    if (arg.startsWith("--module-id=")) {
      opts.moduleId = String(arg.split("=")[1] || "").trim();
      continue;
    }
    if (arg === "--locale" && argv[i + 1]) {
      opts.locale = String(argv[++i]).trim();
      continue;
    }
    if (arg === "--module-id" && argv[i + 1]) {
      opts.moduleId = String(argv[++i]).trim();
      continue;
    }
    if (arg === "--verify-with-ai") {
      opts.verifyWithAi = true;
      continue;
    }
    if (arg === "--apply-fixes") {
      opts.applyFixes = true;
      continue;
    }
    if (arg === "--ai-limit" && argv[i + 1]) {
      opts.aiLimit = Math.max(0, Number(argv[++i]) || 0);
      continue;
    }
    if (arg.startsWith("--ai-limit=")) {
      opts.aiLimit = Math.max(0, Number(arg.split("=")[1]) || 0);
      continue;
    }
    if (arg === "--batch-size" && argv[i + 1]) {
      opts.batchSize = Math.max(1, Number(argv[++i]) || 40);
      continue;
    }
    if (arg.startsWith("--batch-size=")) {
      opts.batchSize = Math.max(1, Number(arg.split("=")[1]) || 40);
      continue;
    }
    if (arg === "--report-path" && argv[i + 1]) {
      opts.reportPath = String(argv[++i]).trim();
      continue;
    }
    if (arg === "--dry-run") {
      opts.dryRun = true;
      continue;
    }
    if (arg === "--model" && argv[i + 1]) {
      opts.model = String(argv[++i]).trim() || DEFAULT_MODEL;
      continue;
    }
    if (!arg.startsWith("--")) {
      if (!opts.locale) {
        opts.locale = String(arg).trim();
        continue;
      }
      if (!opts.moduleId) {
        opts.moduleId = String(arg).trim();
        continue;
      }
    }
  }

  return opts;
}

const opts = parseArgs(process.argv.slice(2));
if (!opts.locale || !opts.moduleId) {
  console.error(
    "Usage: node scripts/codex-localization-audit.mjs --locale <locale> --module-id <moduleId> [--verify-with-ai] [--apply-fixes] [--ai-limit N] [--batch-size N] [--report-path path] [--dry-run]",
  );
  process.exit(1);
}

const API_KEY = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || "";
if (opts.verifyWithAi && !API_KEY && !opts.dryRun) {
  console.error("Missing GOOGLE_API_KEY (required for --verify-with-ai)");
  process.exit(1);
}

const SOURCE_PATH = path.join(ROOT, "src", "lib", "modules", "catalog", `${opts.moduleId}.ts`);
const VISUALS_DIR = path.join(ROOT, "public", "generated-images", "refinery");
const TRANSLATION_PATH = path.join(ROOT, "public", "translations", opts.locale, `${opts.moduleId}.json`);
const STATE_PATH = path.join(ROOT, "data", "translations", `state-${opts.locale}.json`);
const DEFAULT_REPORT_PATH = path.join(
  ROOT,
  "public",
  "translations",
  opts.locale,
  `${opts.moduleId}.codex-audit.json`,
);
const REPORT_JSON_PATH = opts.reportPath ? path.resolve(ROOT, opts.reportPath) : DEFAULT_REPORT_PATH;
const REPORT_MD_PATH = REPORT_JSON_PATH.endsWith(".json")
  ? REPORT_JSON_PATH.replace(/\.json$/i, ".md")
  : `${REPORT_JSON_PATH}.md`;

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

function sha256(text) {
  return crypto.createHash("sha256").update(String(text ?? ""), "utf8").digest("hex");
}

function incrementCounter(counter, key, amount = 1) {
  counter[key] = (counter[key] || 0) + amount;
}

function formatIssue(type, detail) {
  return { type, detail };
}

function countMatches(regex, text) {
  const matches = String(text ?? "").match(regex);
  return matches ? matches.length : 0;
}

function extractMatches(regex, text) {
  const out = [];
  const flags = regex.flags.includes("g") ? regex.flags : `${regex.flags}g`;
  const re = new RegExp(regex.source, flags);
  const src = String(text ?? "");
  let match;
  while ((match = re.exec(src)) !== null) {
    out.push(match[0]);
    if (match.index === re.lastIndex) re.lastIndex += 1;
  }
  return out;
}

function extractMarkdownUrls(text) {
  const urls = [];
  const re = new RegExp(MD_LINK_RE.source, "g");
  const src = String(text ?? "");
  let match;
  while ((match = re.exec(src)) !== null) {
    urls.push((match[1] || "").trim());
    if (match.index === re.lastIndex) re.lastIndex += 1;
  }
  return urls;
}

function evaluateFormatIssues(source, target) {
  const issues = [];
  const src = String(source ?? "");
  const dst = String(target ?? "");

  for (const token of extractMatches(PLACEHOLDER_RE, src)) {
    if (!dst.includes(token)) issues.push(formatIssue("missing_placeholder_token", token));
  }
  for (const token of extractMatches(LATEX_RE, src)) {
    if (!dst.includes(token)) issues.push(formatIssue("missing_latex_token", token.slice(0, 120)));
  }
  for (const token of extractMatches(CODE_FENCE_RE, src)) {
    if (!dst.includes(token)) issues.push(formatIssue("missing_code_fence_block", token.slice(0, 120)));
  }
  for (const token of extractMatches(INLINE_CODE_RE, src)) {
    if (!dst.includes(token)) issues.push(formatIssue("missing_inline_code_token", token));
  }
  for (const token of extractMatches(HTML_TAG_RE, src)) {
    if (!dst.includes(token)) issues.push(formatIssue("missing_html_tag", token));
  }

  const sourceLinks = extractMarkdownUrls(src);
  if (sourceLinks.length > 0) {
    const targetLinks = extractMarkdownUrls(dst);
    if (targetLinks.length !== sourceLinks.length) {
      issues.push(
        formatIssue("markdown_link_count_mismatch", `source=${sourceLinks.length} target=${targetLinks.length}`),
      );
    }
    const targetSet = new Set(targetLinks);
    for (const url of sourceLinks) {
      if (!targetSet.has(url)) {
        issues.push(formatIssue("missing_markdown_link_url", url));
      }
    }
  }

  const headingA = countMatches(HEADING_RE, src);
  const headingB = countMatches(HEADING_RE, dst);
  if (headingA !== headingB) {
    issues.push(formatIssue("heading_count_mismatch", `source=${headingA} target=${headingB}`));
  }

  const bulletA = countMatches(BULLET_RE, src);
  const bulletB = countMatches(BULLET_RE, dst);
  if (bulletA !== bulletB) {
    issues.push(formatIssue("bullet_count_mismatch", `source=${bulletA} target=${bulletB}`));
  }

  const numberedA = countMatches(NUMBERED_RE, src);
  const numberedB = countMatches(NUMBERED_RE, dst);
  if (numberedA !== numberedB) {
    issues.push(formatIssue("numbered_list_count_mismatch", `source=${numberedA} target=${numberedB}`));
  }

  return issues;
}

function evaluateLanguageIssues(source, target, locale) {
  const issues = [];
  const src = String(source ?? "").trim();
  const dst = String(target ?? "").trim();

  if (!dst) {
    issues.push(formatIssue("empty_translation", "translation is empty"));
    return issues;
  }

  if (src.length >= 16 && dst.length >= 16 && src === dst) {
    issues.push(formatIssue("translation_identical_to_source", src.slice(0, 140)));
  }

  if (NON_LATIN_LOCALES.has(locale)) {
    const latinWords = dst.match(/[A-Za-z]{3,}/g) || [];
    const totalWords = dst.match(/\S+/g)?.length || 0;
    const ratio = totalWords > 0 ? latinWords.length / totalWords : 0;
    if (totalWords >= 8 && ratio >= 0.55) {
      issues.push(formatIssue("high_latin_word_leakage", `latin_ratio=${ratio.toFixed(2)}`));
    }
  }

  for (const term of PEDAGOGY_TERMS) {
    if (src.toLowerCase().includes(term.toLowerCase()) && dst.toLowerCase().includes(term.toLowerCase())) {
      issues.push(formatIssue("pedagogy_term_untranslated", term));
    }
  }

  return issues;
}

function categorize(fieldPath) {
  const pathOnly = String(fieldPath ?? "");
  if (/^_:title$|^_:description$|\.title$/.test(pathOnly)) return "title";
  if (/learningObjectives|objectives/.test(pathOnly)) return "objective";
  if (/chunks\.\d+\.content/.test(pathOnly)) return "chunk_content";
  if (/chunks\.\d+\.title/.test(pathOnly)) return "chunk_title";
  if (/questions\.\d+\.text/.test(pathOnly)) return "question_text";
  if (/questions\.\d+\.explanation/.test(pathOnly)) return "explanation";
  if (/questions\.\d+\.hint/.test(pathOnly)) return "hint";
  if (/questions\.\d+\.options\.\d+\.text/.test(pathOnly)) return "option_text";
  if (/flashcards\.\d+\.front/.test(pathOnly)) return "flashcard_front";
  if (/flashcards\.\d+\.back/.test(pathOnly)) return "flashcard_back";
  if (/interactiveActivities/.test(pathOnly)) return "activity";
  if (/learningAids/.test(pathOnly)) return "learning_aid";
  if (/imageAlt/.test(pathOnly)) return "alt_text";
  if (/gradeBand|tags/.test(pathOnly)) return "metadata";
  return "other";
}

function* extractModuleStrings(moduleId, mod) {
  if (mod.title) yield { key: `${moduleId}:_:title`, text: mod.title };
  if (mod.description) yield { key: `${moduleId}:_:description`, text: mod.description };
  if (mod.gradeBand) yield { key: `${moduleId}:_:gradeBand`, text: mod.gradeBand };

  if (Array.isArray(mod.learningObjectives)) {
    for (let i = 0; i < mod.learningObjectives.length; i++) {
      if (mod.learningObjectives[i]) {
        yield { key: `${moduleId}:_:learningObjectives.${i}`, text: mod.learningObjectives[i] };
      }
    }
  }

  if (Array.isArray(mod.tags)) {
    for (let i = 0; i < mod.tags.length; i++) {
      if (mod.tags[i]) yield { key: `${moduleId}:_:tags.${i}`, text: mod.tags[i] };
    }
  }

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

    if (Array.isArray(lesson.chunks)) {
      for (let ci = 0; ci < lesson.chunks.length; ci++) {
        const chunk = lesson.chunks[ci];
        if (chunk.title) yield { key: `${moduleId}:${lid}:chunks.${ci}.title`, text: chunk.title };
        if (chunk.content) yield { key: `${moduleId}:${lid}:chunks.${ci}.content`, text: chunk.content };
      }
    }

    if (Array.isArray(lesson.questions)) {
      for (let qi = 0; qi < lesson.questions.length; qi++) {
        const q = lesson.questions[qi];
        if (q.text) yield { key: `${moduleId}:${lid}:questions.${qi}.text`, text: q.text };
        if (q.hint) yield { key: `${moduleId}:${lid}:questions.${qi}.hint`, text: q.hint };
        if (q.explanation) yield { key: `${moduleId}:${lid}:questions.${qi}.explanation`, text: q.explanation };
        if (q.imageAlt) yield { key: `${moduleId}:${lid}:questions.${qi}.imageAlt`, text: q.imageAlt };
        if (Array.isArray(q.options)) {
          for (let oi = 0; oi < q.options.length; oi++) {
            const option = q.options[oi];
            if (option?.text) yield { key: `${moduleId}:${lid}:questions.${qi}.options.${oi}.text`, text: option.text };
            if (option?.imageAlt) {
              yield { key: `${moduleId}:${lid}:questions.${qi}.options.${oi}.imageAlt`, text: option.imageAlt };
            }
          }
        }
      }
    }

    if (Array.isArray(lesson.flashcards)) {
      for (let fi = 0; fi < lesson.flashcards.length; fi++) {
        const card = lesson.flashcards[fi];
        if (card.front) yield { key: `${moduleId}:${lid}:flashcards.${fi}.front`, text: card.front };
        if (card.back) yield { key: `${moduleId}:${lid}:flashcards.${fi}.back`, text: card.back };
        if (card.hint) yield { key: `${moduleId}:${lid}:flashcards.${fi}.hint`, text: card.hint };
        if (card.imageAlt) yield { key: `${moduleId}:${lid}:flashcards.${fi}.imageAlt`, text: card.imageAlt };
      }
    }

    if (Array.isArray(lesson.interactiveActivities)) {
      for (let ai = 0; ai < lesson.interactiveActivities.length; ai++) {
        const act = lesson.interactiveActivities[ai];
        if (act.title) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.title`, text: act.title };
        if (act.description) {
          yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.description`, text: act.description };
        }
        if (act.prompt) yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.prompt`, text: act.prompt };

        if (Array.isArray(act.instructions)) {
          for (let ii = 0; ii < act.instructions.length; ii++) {
            if (act.instructions[ii]) {
              yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.instructions.${ii}`, text: act.instructions[ii] };
            }
          }
        }
        if (Array.isArray(act.udlEngagement)) {
          for (let ui = 0; ui < act.udlEngagement.length; ui++) {
            if (act.udlEngagement[ui]) {
              yield {
                key: `${moduleId}:${lid}:interactiveActivities.${ai}.udlEngagement.${ui}`,
                text: act.udlEngagement[ui],
              };
            }
          }
        }
        if (Array.isArray(act.buckets)) {
          for (let bi = 0; bi < act.buckets.length; bi++) {
            if (act.buckets[bi]) {
              yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.buckets.${bi}`, text: act.buckets[bi] };
            }
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
            if (act.pairs[pi]?.left) {
              yield { key: `${moduleId}:${lid}:interactiveActivities.${ai}.pairs.${pi}.left`, text: act.pairs[pi].left };
            }
            if (act.pairs[pi]?.right) {
              yield {
                key: `${moduleId}:${lid}:interactiveActivities.${ai}.pairs.${pi}.right`,
                text: act.pairs[pi].right,
              };
            }
          }
        }
      }
    }

    if (Array.isArray(lesson.learningAids)) {
      for (let lai = 0; lai < lesson.learningAids.length; lai++) {
        const aid = lesson.learningAids[lai];
        if (aid.title) yield { key: `${moduleId}:${lid}:learningAids.${lai}.title`, text: aid.title };
        if (aid.content) yield { key: `${moduleId}:${lid}:learningAids.${lai}.content`, text: aid.content };
      }
    }
  }
}

function parseModuleFromTs(filePath, sourceText) {
  const match = sourceText.match(/export const\s+([A-Za-z0-9_]+)\s*(?::\s*LearningModule)?\s*=/m);
  if (!match) {
    throw new Error(`Could not find exported module constant in ${filePath}`);
  }
  const exportName = match[1];
  const transformed = sourceText
    .replace(/^import\s+[^;]+;\s*$/gm, "")
    .replace(/\s+as\s+const\b/g, "")
    .replace(
      new RegExp(`export\\s+const\\s+${exportName}\\s*(?::\\s*LearningModule)?\\s*=`, "m"),
      `const ${exportName} =`,
    )
    .concat(`\nmodule.exports = ${exportName};\n`);

  const ctx = vm.createContext({ module: { exports: {} }, exports: {} });
  new vm.Script(transformed, { filename: path.basename(filePath) }).runInContext(ctx, { timeout: 5000 });
  if (!ctx.module?.exports || typeof ctx.module.exports !== "object") {
    throw new Error(`Module export parse failed for ${filePath}`);
  }
  return ctx.module.exports;
}

const PLACEHOLDER_IMAGE_SHA256 = "4295dc4f8fa10769ba1b8c2edee58814d302ccb6bf91c08fb17044bea80cda5e";

function checkVisualChain(moduleId, mod) {
  const lessons = Array.isArray(mod?.lessons) ? mod.lessons : [];
  const visualChecks = [];
  for (let i = 0; i < lessons.length; i++) {
    const defaultId = `${moduleId}-l${String(i + 1).padStart(2, "0")}`;
    const lessonId =
      typeof lessons[i]?.id === "string" && lessons[i].id.trim().length > 0 ? lessons[i].id.trim() : defaultId;
    const candidates = [path.join(VISUALS_DIR, `${lessonId}.png`), path.join(VISUALS_DIR, `${defaultId}.png`)];
    const foundPath = candidates.find((candidate) => existsSync(candidate)) || "";
    
    let isPlaceholder = false;
    if (foundPath) {
      try {
        const imageBuffer = readFileSync(foundPath);
        const imageHash = crypto.createHash("sha256").update(imageBuffer).digest("hex");
        if (imageHash === PLACEHOLDER_IMAGE_SHA256) {
          isPlaceholder = true;
        }
      } catch {}
    }

    visualChecks.push({
      lessonId,
      exists: Boolean(foundPath),
      isPlaceholder,
      fileName: foundPath ? path.basename(foundPath) : path.basename(candidates[0]),
    });
  }

  const l01Exists =
    existsSync(path.join(VISUALS_DIR, `${moduleId}-l01.png`)) ||
    (visualChecks.length > 0 && visualChecks[0].exists === true);
  
  const missing = visualChecks.filter((entry) => !entry.exists).map((entry) => entry.lessonId);
  const placeholders = visualChecks.filter((entry) => entry.isPlaceholder).map((entry) => entry.lessonId);
  
  const ok = lessons.length > 0 && l01Exists && missing.length === 0 && placeholders.length === 0;
  
  return {
    ok,
    lessonCount: lessons.length,
    l01Exists,
    missingLessons: missing,
    placeholderLessons: placeholders,
    sampleChecks: visualChecks.slice(0, 12),
  };
}

function evaluateFieldSet(expectedEntries, fields, locale) {
  const issueCounts = {};
  const categoryIssueCounts = {};
  const sampleIssues = [];
  const issuesByField = {};
  const expectedFieldSet = new Set(expectedEntries.map((entry) => entry.fieldPath));
  const translatedFieldKeys = Object.keys(fields || {});

  const missingKeys = [];
  for (const entry of expectedEntries) {
    if (!Object.prototype.hasOwnProperty.call(fields, entry.fieldPath)) {
      missingKeys.push(entry.fieldPath);
    }
  }

  const extraKeys = translatedFieldKeys.filter((fieldPath) => !expectedFieldSet.has(fieldPath));
  for (const fieldPath of missingKeys) {
    incrementCounter(issueCounts, "missing_field_map_entry");
    const entry = expectedEntries.find((item) => item.fieldPath === fieldPath);
    const category = entry?.category || "other";
    incrementCounter(categoryIssueCounts, `${category}::missing_field_map_entry`);
    if (sampleIssues.length < 200) {
      sampleIssues.push({ fieldPath, category, type: "missing_field_map_entry", detail: fieldPath });
    }
  }
  for (const fieldPath of extraKeys) {
    incrementCounter(issueCounts, "orphan_field_map_entry");
    const category = categorize(fieldPath);
    incrementCounter(categoryIssueCounts, `${category}::orphan_field_map_entry`);
    if (sampleIssues.length < 200) {
      sampleIssues.push({ fieldPath, category, type: "orphan_field_map_entry", detail: fieldPath });
    }
  }

  let compared = 0;
  for (const entry of expectedEntries) {
    if (!Object.prototype.hasOwnProperty.call(fields, entry.fieldPath)) continue;
    const source = String(entry.text ?? "");
    const target = String(fields[entry.fieldPath] ?? "");
    compared += 1;
    const fieldIssues = [...evaluateFormatIssues(source, target), ...evaluateLanguageIssues(source, target, locale)];
    if (fieldIssues.length === 0) continue;

    issuesByField[entry.fieldPath] = fieldIssues.map((issue) => issue.type);
    for (const issue of fieldIssues) {
      incrementCounter(issueCounts, issue.type);
      incrementCounter(categoryIssueCounts, `${entry.category}::${issue.type}`);
      if (sampleIssues.length < 200) {
        sampleIssues.push({
          fieldPath: entry.fieldPath,
          category: entry.category,
          type: issue.type,
          detail: String(issue.detail || "").slice(0, 220),
        });
      }
    }
  }

  const recurringIssues = Object.entries(issueCounts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);

  return {
    compared,
    missingKeys,
    extraKeys,
    recurringIssues,
    issueCounts,
    categoryIssueCounts,
    sampleIssues,
    issuesByField,
    hasIssues: recurringIssues.length > 0,
  };
}

async function callGemini(systemInstruction, userMessage, schema, model, retries = 4) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const ctrl = new AbortController();
      const timeoutId = setTimeout(() => ctrl.abort(), 300000);
      const url = `${GEMINI_BASE_URL}/models/${model}:generateContent?key=${API_KEY}`;
      const body = {
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ role: "user", parts: [{ text: userMessage }] }],
        generationConfig: {
          response_mime_type: "application/json",
          response_schema: schema,
          temperature: 0.2,
        },
      };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: ctrl.signal,
        body: JSON.stringify(body),
      });
      clearTimeout(timeoutId);
      if (res.status === 429) {
        const waitMs = 60000 * (attempt + 1);
        await new Promise((resolve) => setTimeout(resolve, waitMs));
        continue;
      }
      if (!res.ok) {
        const errorBody = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status}: ${errorBody.slice(0, 220)}`);
      }
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("empty response");
      return JSON.parse(text);
    } catch (error) {
      if (attempt === retries - 1) throw error;
      const waitMs = 15000 * (attempt + 1);
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
  }
  return null;
}

async function runAiReview(entries, fields) {
  if (!opts.verifyWithAi) {
    return {
      enabled: false,
      mode: "disabled",
      targetCount: 0,
      reviewed: 0,
      flagged: 0,
      fixedApplied: 0,
      errors: 0,
      samples: [],
    };
  }

  const presentCandidates = entries.filter((entry) => Object.prototype.hasOwnProperty.call(fields, entry.fieldPath));
  const reviewCandidates = opts.aiLimit > 0 ? presentCandidates.slice(0, opts.aiLimit) : presentCandidates;

  if (reviewCandidates.length === 0) {
    return {
      enabled: true,
      mode: opts.aiLimit > 0 ? "sampled" : "full",
      targetCount: 0,
      reviewed: 0,
      flagged: 0,
      fixedApplied: 0,
      errors: 0,
      samples: [],
    };
  }

  const stats = {
    enabled: true,
    mode: opts.aiLimit > 0 ? "sampled" : "full",
    targetCount: reviewCandidates.length,
    reviewed: 0,
    flagged: 0,
    fixedApplied: 0,
    errors: 0,
    samples: [],
  };
  const expectedByField = new Map(reviewCandidates.map((entry) => [entry.fieldPath, entry]));

  for (let start = 0; start < reviewCandidates.length; start += opts.batchSize) {
    const batch = reviewCandidates.slice(start, start + opts.batchSize);
    const payload = batch.map((entry, idx) => ({
      idx,
      fieldPath: entry.fieldPath,
      category: entry.category,
      source: entry.text,
      translation: String(fields[entry.fieldPath] ?? ""),
    }));

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
              reason: { type: "string" },
              fix: { type: "string" },
              issueTypes: {
                type: "array",
                items: { type: "string" },
              },
            },
            required: ["idx", "ok"],
          },
        },
      },
      required: ["reviews"],
    };

    const systemInstruction = [
      "You are a World-Class Bilingual Educational Auditor.",
      "Your goal is to ensure 'Subscription-Grade' semantic and pedagogical accuracy.",
      "1) Semantic Accuracy: Does the translation convey the EXACT meaning and nuance of the English source?",
      "2) Pedagogy: Is the educational tone, vocabulary level, and metaphor quality preserved for the target age group?",
      "3) Cultural Nuance: Is the content culturally appropriate and idiomatic for the target locale?",
      "4) Technical Integrity: LaTeX, placeholders {{name}}, and Markdown MUST remain identical to source.",
      "Respond ONLY with JSON following the schema. Set ok=false for even subtle quality drops.",
      "Provide a perfect corrected version in the 'fix' field.",
    ].join("\n");

    try {
      const response = await callGemini(systemInstruction, JSON.stringify(payload), schema, opts.model);
      const reviews = Array.isArray(response?.reviews) ? response.reviews : [];
      stats.reviewed += batch.length;

      for (const review of reviews) {
        if (typeof review?.idx !== "number") continue;
        const row = batch[review.idx];
        if (!row) continue;
        if (review.ok === false) {
          stats.flagged += 1;
          if (stats.samples.length < 120) {
            stats.samples.push({
              fieldPath: row.fieldPath,
              category: row.category,
              reason: String(review.reason || "flagged").slice(0, 240),
            });
          }
          if (opts.applyFixes && !opts.dryRun && typeof review.fix === "string" && review.fix.trim().length > 0) {
            const fixText = review.fix.trim();
            const expected = expectedByField.get(row.fieldPath);
            if (!expected) continue;
            const safetyIssues = evaluateFormatIssues(expected.text, fixText).filter((issue) =>
              [
                "missing_placeholder_token",
                "missing_latex_token",
                "missing_code_fence_block",
                "missing_inline_code_token",
                "missing_html_tag",
                "missing_markdown_link_url",
                "markdown_link_count_mismatch",
              ].includes(issue.type),
            );
            if (safetyIssues.length === 0 && fields[row.fieldPath] !== fixText) {
              fields[row.fieldPath] = fixText;
              stats.fixedApplied += 1;
            }
          }
        }
      }
    } catch {
      stats.errors += 1;
    }
  }

  return stats;
}

async function readJsonMaybe(filePath) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeJson(filePath, payload) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(payload, null, 2));
}

function buildMarkdownReport(report) {
  const lines = [];
  const station4Label =
    report.summary.finalStatus === "blocked"
      ? "BLOCKED"
      : report.chain.station4.ok
        ? "PASS"
        : "FIXES_REQUIRED";
  lines.push(`# Codex Localization Audit (${report.locale} / ${report.moduleId})`);
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Chain of Custody");
  lines.push(`- Station 1 (English 1.1.0): ${report.chain.station1.ok ? "PASS" : "BLOCKED"}`);
  lines.push(`- Station 2 (Refinery visuals): ${report.chain.station2.ok ? "PASS" : "BLOCKED"}`);
  lines.push(`- Station 3 (Translation field map): ${report.chain.station3.ok ? "PASS" : "BLOCKED"}`);
  lines.push(`- Station 4 (Codex audit): ${station4Label}`);
  lines.push("");
  lines.push("## Summary");
  lines.push(`- Expected fields: ${report.summary.expectedFields}`);
  lines.push(`- Compared fields: ${report.summary.comparedFields}`);
  lines.push(`- Missing fields: ${report.summary.missingFields}`);
  lines.push(`- Extra fields: ${report.summary.extraFields}`);
  lines.push(`- Fixed entries: ${report.summary.fixedApplied}`);
  lines.push(`- Verified hashes added: ${report.summary.verifiedHashesAdded}`);
  lines.push(`- Final status: ${report.summary.finalStatus}`);
  lines.push("");
  lines.push("## AI Review");
  lines.push(`- Enabled: ${report.ai.enabled ? "yes" : "no"}`);
  lines.push(`- Mode: ${report.ai.mode || "disabled"}`);
  lines.push(`- Target fields: ${report.ai.targetCount || 0}`);
  lines.push(`- Reviewed fields: ${report.ai.reviewed || 0}`);
  lines.push(`- Flagged fields: ${report.ai.flagged || 0}`);
  lines.push(`- Fixes applied: ${report.ai.fixedApplied || 0}`);
  lines.push(`- Batch errors: ${report.ai.errors || 0}`);
  lines.push("");
  lines.push("## Systemic Patterns");
  if (report.summary.recurringIssues.length === 0) {
    lines.push("- none");
  } else {
    for (const issue of report.summary.recurringIssues.slice(0, 20)) {
      lines.push(`- ${issue.type}: ${issue.count}`);
    }
  }
  lines.push("");
  lines.push("## Sample Issues");
  if (report.summary.sampleIssues.length === 0) {
    lines.push("- none");
  } else {
    for (const sample of report.summary.sampleIssues.slice(0, 40)) {
      lines.push(
        `- ${sample.type} | field=${sample.fieldPath} | category=${sample.category} | detail=${String(sample.detail || "").slice(0, 180)}`,
      );
    }
  }
  lines.push("");
  return lines.join("\n");
}

async function main() {
  console.log(`\n[Codex Audit] module=${opts.moduleId} locale=${opts.locale}`);

  const report = {
    generatedAt: new Date().toISOString(),
    locale: opts.locale,
    moduleId: opts.moduleId,
    options: {
      verifyWithAi: opts.verifyWithAi,
      applyFixes: opts.applyFixes,
      aiLimit: opts.aiLimit,
      batchSize: opts.batchSize,
      dryRun: opts.dryRun,
      model: opts.model,
    },
    chain: {
      station1: { ok: false, detail: "" },
      station2: { ok: false, detail: "" },
      station3: { ok: false, detail: "" },
      station4: { ok: false, detail: "" },
    },
    summary: {
      expectedFields: 0,
      comparedFields: 0,
      missingFields: 0,
      extraFields: 0,
      fixedApplied: 0,
      verifiedHashesAdded: 0,
      finalStatus: "blocked",
      recurringIssues: [],
      sampleIssues: [],
    },
    ai: {},
    diagnostics: {},
  };

  if (!existsSync(SOURCE_PATH)) {
    report.chain.station1.detail = `Missing source module file: ${SOURCE_PATH}`;
    await writeJson(REPORT_JSON_PATH, report);
    await fs.writeFile(REPORT_MD_PATH, buildMarkdownReport(report));
    console.error(report.chain.station1.detail);
    process.exit(2);
  }

  const sourceText = await fs.readFile(SOURCE_PATH, "utf8");
  const versionOk = /["']version["']\s*:\s*["']1\.1\.0["']/.test(sourceText);
  let moduleObject = null;
  try {
    moduleObject = parseModuleFromTs(SOURCE_PATH, sourceText);
  } catch (error) {
    report.chain.station1.detail = `Could not parse source module: ${error.message}`;
    await writeJson(REPORT_JSON_PATH, report);
    await fs.writeFile(REPORT_MD_PATH, buildMarkdownReport(report));
    console.error(report.chain.station1.detail);
    process.exit(2);
  }

  report.chain.station1.ok = versionOk;
  report.chain.station1.detail = versionOk
    ? "Source module includes version 1.1.0"
    : "Source module version is not 1.1.0";

  const visualCheck = checkVisualChain(opts.moduleId, moduleObject);
  report.chain.station2.ok = visualCheck.ok;
  report.chain.station2.detail = visualCheck.ok
    ? `Found visuals for all ${visualCheck.lessonCount} lessons`
    : `Missing visuals for ${visualCheck.missingLessons.length} lessons`;
  report.diagnostics.visuals = visualCheck;

  const expectedEntries = [];
  for (const row of extractModuleStrings(opts.moduleId, moduleObject)) {
    expectedEntries.push({
      key: row.key,
      fieldPath: row.key.slice(row.key.indexOf(":") + 1),
      text: row.text,
      category: categorize(row.key.slice(row.key.indexOf(":") + 1)),
    });
  }
  report.summary.expectedFields = expectedEntries.length;

  const translationJson = await readJsonMaybe(TRANSLATION_PATH);
  const translationExists = Boolean(translationJson && typeof translationJson === "object");
  const fields = translationExists && translationJson.fields && typeof translationJson.fields === "object"
    ? { ...translationJson.fields }
    : {};

  const preFieldEval = evaluateFieldSet(expectedEntries, fields, opts.locale);
  report.summary.comparedFields = preFieldEval.compared;
  report.summary.missingFields = preFieldEval.missingKeys.length;
  report.summary.extraFields = preFieldEval.extraKeys.length;

  report.chain.station3.ok = translationExists && preFieldEval.missingKeys.length === 0;
  report.chain.station3.detail = !translationExists
    ? `Missing translation file: ${TRANSLATION_PATH}`
    : preFieldEval.missingKeys.length > 0
      ? `Translation file missing ${preFieldEval.missingKeys.length} expected fields`
      : "Translation file contains full expected field map";

  // Decouple text audit from visuals: Station 2 (Visuals) is no longer a hard blocker for Station 4 (Text Audit)
  const blocked = !report.chain.station1.ok || !report.chain.station3.ok;
  if (blocked) {
    report.chain.station4.ok = false;
    report.chain.station4.detail = "Blocked by chain-of-custody prerequisites";
    report.summary.finalStatus = "blocked";
    report.summary.recurringIssues = preFieldEval.recurringIssues.slice(0, 30);
    report.summary.sampleIssues = preFieldEval.sampleIssues.slice(0, 120);
    await writeJson(REPORT_JSON_PATH, report);
    await fs.mkdir(path.dirname(REPORT_MD_PATH), { recursive: true });
    await fs.writeFile(REPORT_MD_PATH, buildMarkdownReport(report));
    console.log(`Blocked by chain checks. Report: ${REPORT_JSON_PATH}`);
    process.exit(2);
  }

  let aiStats = { enabled: false, reviewed: 0, flagged: 0, fixedApplied: 0, errors: 0, samples: [] };
  if (opts.verifyWithAi) {
    aiStats = await runAiReview(expectedEntries, fields);
  }
  report.ai = aiStats;

  if (opts.applyFixes && aiStats.fixedApplied > 0 && !opts.dryRun) {
    const merged = {
      ...(translationJson || {}),
      locale: opts.locale,
      moduleId: opts.moduleId,
      translatedAt: new Date().toISOString(),
      engineUsed: `${translationJson?.engineUsed || "simple-v2"}+codex-audit`,
      fieldCount: Object.keys(fields).length,
      fields,
    };
    await writeJson(TRANSLATION_PATH, merged);
  }

  const postFieldEval = evaluateFieldSet(expectedEntries, fields, opts.locale);
  const recurringIssues = [...postFieldEval.recurringIssues];
  if (aiStats.flagged > 0) {
    recurringIssues.push({ type: "ai_semantic_issue", count: aiStats.flagged });
  }
  if (aiStats.errors > 0) {
    recurringIssues.push({ type: "ai_review_error", count: aiStats.errors });
  }
  recurringIssues.sort((a, b) => b.count - a.count);

  const sampleIssues = postFieldEval.sampleIssues.slice(0, 120);
  for (const sample of aiStats.samples || []) {
    if (sampleIssues.length >= 160) break;
    sampleIssues.push({
      fieldPath: sample.fieldPath,
      category: sample.category,
      type: "ai_semantic_issue",
      detail: String(sample.reason || "").slice(0, 220),
    });
  }

  report.summary.comparedFields = postFieldEval.compared;
  report.summary.missingFields = postFieldEval.missingKeys.length;
  report.summary.extraFields = postFieldEval.extraKeys.length;
  report.summary.fixedApplied = aiStats.fixedApplied;
  report.summary.recurringIssues = recurringIssues.slice(0, 40);
  report.summary.sampleIssues = sampleIssues;

  const perfect =
    postFieldEval.recurringIssues.length === 0 &&
    postFieldEval.missingKeys.length === 0 &&
    aiStats.flagged === 0 &&
    aiStats.errors === 0;
  report.chain.station4.ok = perfect;
  report.chain.station4.detail = perfect ? "No issues found in final audit" : "Issues detected in final audit";

  let verifiedHashesAdded = 0;
  let stateVerifiedTotal = 0;
  let stateFixedTotal = 0;
  if (!opts.dryRun) {
    const state = (await readJsonMaybe(STATE_PATH)) || { locale: opts.locale, completedHashes: {}, stats: {} };
    if (!state.completedHashes || typeof state.completedHashes !== "object") state.completedHashes = {};
    if (!state.verifiedHashes || typeof state.verifiedHashes !== "object") state.verifiedHashes = {};
    if (!state.stats || typeof state.stats !== "object") state.stats = {};

    if (perfect) {
      const stamp = new Date().toISOString();
      for (const entry of expectedEntries) {
        const hasField = Object.prototype.hasOwnProperty.call(fields, entry.fieldPath);
        if (!hasField) continue;
        const hash = sha256(entry.text);
        if (!Object.prototype.hasOwnProperty.call(state.verifiedHashes, hash)) {
          verifiedHashesAdded += 1;
        }
        state.verifiedHashes[hash] = stamp;
      }
    }

    state.stats.verified = Object.keys(state.verifiedHashes).length;
    state.stats.fixed = (Number(state.stats.fixed) || 0) + (aiStats.fixedApplied || 0);
    state.stats.lastCodexAudit = {
      moduleId: opts.moduleId,
      locale: opts.locale,
      auditedAt: new Date().toISOString(),
      perfect,
      fixedApplied: aiStats.fixedApplied || 0,
      verifiedHashesAdded,
    };
    state.savedAt = new Date().toISOString();
    await writeJson(STATE_PATH, state);
    stateVerifiedTotal = Number(state.stats.verified) || 0;
    stateFixedTotal = Number(state.stats.fixed) || 0;
  }

  report.summary.verifiedHashesAdded = verifiedHashesAdded;
  report.summary.finalStatus = perfect ? "verified" : "fixed_required";
  report.diagnostics.state = {
    statePath: STATE_PATH,
    dryRun: opts.dryRun,
    totalVerifiedHashes: stateVerifiedTotal,
    totalFixedCount: stateFixedTotal,
  };
  report.diagnostics.paths = {
    sourcePath: SOURCE_PATH,
    translationPath: TRANSLATION_PATH,
    visualsDir: VISUALS_DIR,
    statePath: STATE_PATH,
    reportJsonPath: REPORT_JSON_PATH,
    reportMdPath: REPORT_MD_PATH,
  };

  await writeJson(REPORT_JSON_PATH, report);
  await fs.mkdir(path.dirname(REPORT_MD_PATH), { recursive: true });
  await fs.writeFile(REPORT_MD_PATH, buildMarkdownReport(report));

  console.log(`Audit complete. Final status: ${report.summary.finalStatus}`);
  console.log(`Report JSON: ${REPORT_JSON_PATH}`);
  console.log(`Report MD:   ${REPORT_MD_PATH}`);

  process.exit(perfect ? 0 : 3);
}

main().catch((error) => {
  console.error("FATAL:", error.message);
  process.exit(1);
});

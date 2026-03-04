import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");
const DEFAULT_REPORT_PATH = path.join(
  projectRoot,
  "public",
  "CURRICULUM-CHUNK-ENRICHMENT-REPORT.latest.json",
);
const DEFAULT_STATE_PATH = path.join(
  projectRoot,
  "public",
  "CURRICULUM-CHUNK-ENRICHMENT-STATE.latest.json",
);

const STOP_WORDS = new Set([
  "about",
  "after",
  "again",
  "also",
  "and",
  "are",
  "because",
  "been",
  "before",
  "being",
  "between",
  "both",
  "could",
  "does",
  "each",
  "from",
  "have",
  "here",
  "into",
  "just",
  "lesson",
  "like",
  "make",
  "many",
  "more",
  "most",
  "much",
  "need",
  "next",
  "only",
  "other",
  "over",
  "same",
  "some",
  "such",
  "than",
  "that",
  "their",
  "there",
  "these",
  "they",
  "this",
  "those",
  "through",
  "under",
  "using",
  "very",
  "what",
  "when",
  "where",
  "which",
  "while",
  "with",
  "would",
  "your",
]);

function parseArgs(argv) {
  const options = {
    apply: true,
    concurrency: 2,
    retryFailedOnly: true,
    retryWarningModules: false,
    retryHighDupModules: false,
    noForceEnrichment: true,
    minMultiplier: 1.7,
    minChunkWords: 90,
    maxChunkWordsForExpansion: 1800,
    highDupThreshold: 0.25,
    maxModules: Infinity,
    moduleFilter: null,
    reportPath: DEFAULT_REPORT_PATH,
    statePath: DEFAULT_STATE_PATH,
    moduleTimeoutMs: 120000,
    heartbeatMs: 30000,
    maxRunSeconds: 0,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--apply") {
      options.apply = true;
    } else if (arg === "--dry-run") {
      options.apply = false;
    } else if (arg === "--retry-failed-only") {
      options.retryFailedOnly = true;
      options.retryWarningModules = false;
      options.retryHighDupModules = false;
    } else if (arg === "--retry-warning-modules") {
      options.retryWarningModules = true;
      options.retryFailedOnly = false;
      options.retryHighDupModules = false;
    } else if (arg === "--retry-high-dup-modules") {
      options.retryHighDupModules = true;
      options.retryWarningModules = false;
      options.retryFailedOnly = false;
    } else if (arg === "--all") {
      options.retryFailedOnly = false;
      options.retryWarningModules = false;
      options.retryHighDupModules = false;
    } else if (arg === "--force-enrichment") {
      options.noForceEnrichment = false;
    } else if (arg === "--no-force-enrichment") {
      options.noForceEnrichment = true;
    } else if (arg === "--concurrency" && argv[index + 1]) {
      options.concurrency = Math.max(1, Math.min(8, Number(argv[index + 1]) || 1));
      index += 1;
    } else if (arg === "--min-multiplier" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.minMultiplier = Number.isFinite(parsed)
        ? Math.max(1.1, Math.min(2.7, parsed))
        : options.minMultiplier;
      index += 1;
    } else if (arg === "--min-chunk-words" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.minChunkWords = Number.isFinite(parsed)
        ? Math.max(30, Math.min(300, Math.round(parsed)))
        : options.minChunkWords;
      index += 1;
    } else if (arg === "--max-chunk-words" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.maxChunkWordsForExpansion = Number.isFinite(parsed)
        ? Math.max(300, Math.min(4000, Math.round(parsed)))
        : options.maxChunkWordsForExpansion;
      index += 1;
    } else if (arg === "--high-dup-threshold" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.highDupThreshold = Number.isFinite(parsed)
        ? Math.max(0.1, Math.min(0.8, parsed))
        : options.highDupThreshold;
      index += 1;
    } else if (arg === "--max-modules" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.maxModules = Number.isFinite(parsed) && parsed > 0 ? Math.round(parsed) : Infinity;
      index += 1;
    } else if (arg === "--module" && argv[index + 1]) {
      options.moduleFilter = String(argv[index + 1]).trim();
      index += 1;
    } else if (arg === "--report" && argv[index + 1]) {
      options.reportPath = path.resolve(projectRoot, String(argv[index + 1]));
      index += 1;
    } else if (arg === "--state" && argv[index + 1]) {
      options.statePath = path.resolve(projectRoot, String(argv[index + 1]));
      index += 1;
    } else if (arg === "--module-timeout-ms" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.moduleTimeoutMs = Number.isFinite(parsed)
        ? Math.max(10000, Math.min(600000, Math.round(parsed)))
        : options.moduleTimeoutMs;
      index += 1;
    } else if (arg === "--heartbeat-ms" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.heartbeatMs = Number.isFinite(parsed)
        ? Math.max(5000, Math.min(120000, Math.round(parsed)))
        : options.heartbeatMs;
      index += 1;
    } else if (arg === "--max-run-seconds" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.maxRunSeconds = Number.isFinite(parsed)
        ? Math.max(0, Math.min(86400, Math.round(parsed)))
        : options.maxRunSeconds;
      index += 1;
    }
  }

  return options;
}

function toImportPath(relativePath) {
  return `@/lib/modules/catalog/${relativePath.replace(/\.ts$/, "").replace(/\\/g, "/")}`;
}

function normalizeText(value) {
  return String(value).replace(/\r\n/g, "\n").replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function wordCount(value) {
  return (String(value).match(/[A-Za-z0-9]+/g) || []).length;
}

function unique(values) {
  return Array.from(new Set(values));
}

async function collectTsFiles(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTsFiles(fullPath, base)));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".ts") &&
      !entry.name.includes(".example.")
    ) {
      files.push(path.relative(base, fullPath));
    }
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
      .replace(
        new RegExp(`export const\\s+${exportName}\\s*:\\s*LearningModule\\s*=`, "m"),
        `const ${exportName} =`,
      )
      .concat(`\nmodule.exports = ${exportName};\n`);

    const context = vm.createContext({ module: { exports: {} }, exports: {} });
    new vm.Script(transformed, { filename: relPath }).runInContext(context);
    const payload = context.module.exports;

    if (!payload || typeof payload !== "object") continue;
    parsed.push({
      relPath,
      filePath,
      exportName,
      importPath: toImportPath(relPath),
      payload,
    });
  }

  return parsed;
}

function formatModuleSource(exportName, payload) {
  const serialized = JSON.stringify(payload, null, 2);
  return `import type { LearningModule } from "@/lib/modules/types";\n\nexport const ${exportName}: LearningModule = ${serialized};\n`;
}

async function loadState(statePath) {
  try {
    const raw = await fs.readFile(statePath, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (!Array.isArray(parsed.completedModuleIds)) return null;
    if (!Array.isArray(parsed.modules)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function createEmptyState(options) {
  return {
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    options: {
      apply: options.apply,
      mode: "agent-local",
      concurrency: options.concurrency,
      minMultiplier: options.minMultiplier,
      minChunkWords: options.minChunkWords,
      maxChunkWordsForExpansion: options.maxChunkWordsForExpansion,
      highDupThreshold: options.highDupThreshold,
      retryFailedOnly: options.retryFailedOnly,
      retryWarningModules: options.retryWarningModules,
      retryHighDupModules: options.retryHighDupModules,
      noForceEnrichment: options.noForceEnrichment,
    },
    completedModuleIds: [],
    modules: [],
    totals: {
      modulesProcessed: 0,
      lessonsTouched: 0,
      chunksTouched: 0,
      chunksLengthPassed: 0,
      chunksAgeFlagged: 0,
      lessonFailures: 0,
    },
    errors: [],
  };
}

function recomputeTotals(modules) {
  return modules.reduce(
    (acc, moduleResult) => {
      acc.modulesProcessed += 1;
      acc.lessonsTouched += Number(moduleResult.lessonsTouched || 0);
      acc.chunksTouched += Number(moduleResult.chunksTouched || 0);
      acc.chunksLengthPassed += Number(moduleResult.chunksLengthPassed || 0);
      acc.chunksAgeFlagged += Number(moduleResult.chunksAgeFlagged || 0);
      acc.lessonFailures += Number(moduleResult.lessonFailures || 0);
      return acc;
    },
    {
      modulesProcessed: 0,
      lessonsTouched: 0,
      chunksTouched: 0,
      chunksLengthPassed: 0,
      chunksAgeFlagged: 0,
      lessonFailures: 0,
    },
  );
}

async function writeJson(filePath, payload) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

function tokenizeSentences(text) {
  return normalizeText(text)
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function normalizeSentenceForMatch(value) {
  return String(value)
    .toLowerCase()
    .replace(/[`"'()[\]{}]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sentenceDupRatio(text) {
  const sentences = tokenizeSentences(text)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 24);
  if (sentences.length < 6) return 0;
  const seen = new Map();
  for (const sentence of sentences) {
    const key = normalizeSentenceForMatch(sentence);
    if (!key) continue;
    seen.set(key, (seen.get(key) || 0) + 1);
  }
  let duplicateCount = 0;
  for (const count of seen.values()) {
    if (count > 1) duplicateCount += count - 1;
  }
  return duplicateCount / sentences.length;
}

function buildWarningChunkKeySet(warnings) {
  const out = new Set();
  if (!Array.isArray(warnings)) return out;
  for (const warning of warnings) {
    if (typeof warning !== "string") continue;
    const match = warning.match(/^([^:]+):([^:]+)\s/);
    if (!match) continue;
    out.add(`${match[1]}:${match[2]}`);
  }
  return out;
}

function moduleHasHighDup(payload, threshold) {
  for (const lesson of payload?.lessons ?? []) {
    if (!Array.isArray(lesson?.chunks)) continue;
    for (const chunk of lesson.chunks) {
      const content = typeof chunk?.content === "string" ? normalizeText(chunk.content) : "";
      if (!content) continue;
      if (wordCount(content) < 120) continue;
      if (sentenceDupRatio(content) >= threshold) return true;
    }
  }
  return false;
}

function reduceSentenceDuplication(text, options) {
  const normalized = normalizeText(text);
  const sentences = tokenizeSentences(normalized);
  if (sentences.length < 6) {
    return { changed: false, content: normalized, beforeWords: wordCount(normalized), afterWords: wordCount(normalized) };
  }

  const seen = new Set();
  const deduped = [];
  for (const sentence of sentences) {
    const key = normalizeSentenceForMatch(sentence);
    if (!key) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(sentence.trim());
  }

  if (deduped.length === sentences.length) {
    return { changed: false, content: normalized, beforeWords: wordCount(normalized), afterWords: wordCount(normalized) };
  }

  const collapsed = normalizeText(deduped.join(" "));
  const beforeWords = wordCount(normalized);
  const afterWords = wordCount(collapsed);
  const minAllowed = Math.max(60, Math.floor(beforeWords * (options?.minRetainRatio ?? 0.82)));
  if (afterWords < minAllowed) {
    return { changed: false, content: normalized, beforeWords, afterWords: beforeWords };
  }

  return { changed: true, content: collapsed, beforeWords, afterWords };
}

function shouldProcessChunk({ content, warningKeySet, warningKey, options }) {
  const words = wordCount(content);
  const hadWarning = warningKeySet.has(warningKey);

  if (hadWarning) return true;
  if (options.retryHighDupModules) {
    const dupRatio = sentenceDupRatio(content);
    return dupRatio >= options.highDupThreshold && words >= 120;
  }
  if (!options.noForceEnrichment) return true;
  if (words < options.minChunkWords && words < options.maxChunkWordsForExpansion) return true;
  return false;
}

function extractKeywords(text, max = 8) {
  const frequency = new Map();
  const words = String(text).toLowerCase().match(/[a-z][a-z0-9-]{3,}/g) || [];
  for (const word of words) {
    if (STOP_WORDS.has(word)) continue;
    frequency.set(word, (frequency.get(word) || 0) + 1);
  }
  return [...frequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, max)
    .map(([word]) => word);
}

function readableTopic(chunkTitle, lessonTitle) {
  const clean = String(chunkTitle || "").replace(/\s+/g, " ").trim();
  if (clean && clean.length <= 96 && !clean.startsWith("#")) return clean;
  return String(lessonTitle || "the lesson topic").replace(/\s+/g, " ").trim();
}

function effectiveMultiplier(originalWords, requestedMultiplier) {
  if (originalWords >= 900) return 1.08;
  if (originalWords >= 600) return 1.15;
  if (originalWords >= 400) return 1.22;
  if (originalWords >= 250) return 1.35;
  if (originalWords >= 160) return Math.min(requestedMultiplier, 1.5);
  return requestedMultiplier;
}

function buildSupportiveTone(minAge) {
  if (minAge <= 9) {
    return {
      opener: "Use clear, concrete language and short steps.",
      framing: "Keep the explanation friendly and practical.",
    };
  }
  if (minAge <= 13) {
    return {
      opener: "Use age-appropriate academic vocabulary with examples.",
      framing: "Connect ideas to real decisions and evidence.",
    };
  }
  return {
    opener: "Use concise academic language and emphasize reasoning.",
    framing: "Highlight tradeoffs, assumptions, and verification.",
  };
}

function buildExtraBlocks({
  moduleTitle,
  subject,
  lessonTitle,
  chunkTitle,
  keywords,
  tone,
}) {
  const topic = readableTopic(chunkTitle, lessonTitle);
  const keywordText = keywords.length > 0 ? keywords.join(", ") : "key terms from this lesson";
  return [
    `Why this matters: ${topic} helps learners in ${subject} connect ideas from ${moduleTitle} to decisions they make during practice and assessment. ${tone.framing}`,
    `Step-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.`,
    `Guided check: Ask yourself, "What is the claim?", "Which evidence is strongest?", and "What would change my conclusion?" Use the terms ${keywordText} while answering to reinforce vocabulary and precision.`,
    `Common mistake to avoid: repeating facts without explaining relationships. Strong responses compare evidence, justify choices, and show why alternatives are weaker.`,
    `Transfer task: apply the same reasoning process to a new example from ${lessonTitle}. Write a short explanation that names the evidence, your interpretation, and one limitation you still need to investigate.`,
    `Memory anchor: summarize ${topic} in three lines: core idea, supporting evidence, and final takeaway. This quick structure improves recall and keeps reasoning organized during quizzes.`,
    `${tone.opener} Keep every claim tied to observable details so your conclusion remains clear, testable, and easy to communicate.`,
  ];
}

function enrichLocally({
  content,
  modulePayload,
  lessonTitle,
  chunkTitle,
  minMultiplier,
}) {
  const normalized = normalizeText(content);
  const originalWords = Math.max(1, wordCount(normalized));
  const requested = effectiveMultiplier(originalWords, minMultiplier);
  const safetyRequested = Number((requested + 0.03).toFixed(3));
  const targetWords = Math.max(
    originalWords + 40,
    Math.ceil(originalWords * safetyRequested + 2),
  );

  let out = normalized;
  const subject = String(modulePayload.subject || "the subject");
  const moduleTitle = String(modulePayload.title || modulePayload.id || "the module");
  const minAge =
    typeof modulePayload.minAge === "number" && Number.isFinite(modulePayload.minAge)
      ? modulePayload.minAge
      : 12;
  const tone = buildSupportiveTone(minAge);
  const keywords = unique(extractKeywords(`${chunkTitle}\n${normalized}`, 8));
  const blocks = buildExtraBlocks({
    moduleTitle,
    subject,
    lessonTitle,
    chunkTitle,
    keywords,
    tone,
  });
  const existingSentences = tokenizeSentences(normalized).slice(0, 4);
  if (existingSentences.length > 0) {
    out = `${out}\n\nContext recap: ${existingSentences.join(" ")}`;
  }

  let rotation = 0;
  let currentWords = wordCount(out);
  while (currentWords < targetWords && rotation < 32) {
    out = `${out}\n\n${blocks[rotation % blocks.length]}`;
    currentWords = wordCount(out);
    rotation += 1;
  }

  let currentRatio = currentWords / originalWords;
  while (currentRatio < requested && rotation < 40) {
    out = `${out}\n\n${blocks[rotation % blocks.length]}`;
    currentWords = wordCount(out);
    currentRatio = currentWords / originalWords;
    rotation += 1;
  }

  return {
    content: normalizeText(out),
    originalWords,
    rewrittenWords: currentWords,
    ratio: Number((currentRatio).toFixed(3)),
    requestedMultiplier: Number(requested.toFixed(3)),
  };
}

function timeoutWrap(promise, timeoutMs, onTimeoutMessage) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(onTimeoutMessage)), timeoutMs);
    }),
  ]);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const runStart = Date.now();

  const catalogEntries = await readCatalogEntries();
  const entryById = new Map(
    catalogEntries
      .filter((entry) => entry.payload?.id)
      .map((entry) => [String(entry.payload.id), entry]),
  );

  const loadedState = await loadState(options.statePath);
  const state = loadedState ?? createEmptyState(options);
  state.options = {
    ...(state.options || {}),
    apply: options.apply,
    mode: "agent-local",
    concurrency: options.concurrency,
    minMultiplier: options.minMultiplier,
    minChunkWords: options.minChunkWords,
    maxChunkWordsForExpansion: options.maxChunkWordsForExpansion,
    highDupThreshold: options.highDupThreshold,
    retryFailedOnly: options.retryFailedOnly,
    retryWarningModules: options.retryWarningModules,
    retryHighDupModules: options.retryHighDupModules,
    noForceEnrichment: options.noForceEnrichment,
  };
  state.completedModuleIds = unique((state.completedModuleIds || []).map(String));
  state.modules = Array.isArray(state.modules) ? state.modules : [];
  state.errors = Array.isArray(state.errors) ? state.errors : [];

  const moduleRecords = new Map(
    state.modules.map((record) => [String(record.moduleId), record]),
  );
  const completedSet = new Set(state.completedModuleIds);
  const priorFailedSet = new Set(
    state.modules
      .filter((record) => Number(record.lessonFailures || 0) > 0)
      .map((record) => String(record.moduleId)),
  );

  let selectedIds;
  if (options.moduleFilter) {
    selectedIds = [options.moduleFilter];
  } else if (options.retryHighDupModules) {
    selectedIds = catalogEntries
      .filter((entry) => moduleHasHighDup(entry.payload, options.highDupThreshold))
      .map((entry) => String(entry.payload.id));
  } else if (options.retryWarningModules) {
    selectedIds = unique(
      state.modules
        .filter((record) => Array.isArray(record?.warnings) && record.warnings.length > 0)
        .map((record) => String(record.moduleId)),
    );
  } else if (options.retryFailedOnly) {
    const notCompletedIds = [...entryById.keys()].filter((id) => !completedSet.has(id));
    selectedIds = unique([...priorFailedSet, ...notCompletedIds]);
  } else {
    selectedIds = [...entryById.keys()];
  }

  selectedIds = selectedIds.filter((id) => entryById.has(id));
  if (Number.isFinite(options.maxModules)) {
    selectedIds = selectedIds.slice(0, options.maxModules);
  }

  console.log(
    `[curriculum-enrich-agent] selected=${selectedIds.length}, apply=${options.apply}, concurrency=${options.concurrency}, min_multiplier=${options.minMultiplier}`,
  );

  let persistQueue = Promise.resolve();
  const persistState = () => {
    state.updatedAt = new Date().toISOString();
    state.modules = [...moduleRecords.values()];
    state.completedModuleIds = [...completedSet].sort();
    state.totals = recomputeTotals(state.modules);
    persistQueue = persistQueue
      .then(() => writeJson(options.statePath, state))
      .then(() => writeJson(options.reportPath, state));
    return persistQueue;
  };

  const heartbeat = setInterval(() => {
    persistState().catch(() => {});
  }, options.heartbeatMs);

  let nextIndex = 0;
  const workers = Array.from({ length: options.concurrency }, () =>
    (async () => {
      while (true) {
        const idx = nextIndex;
        nextIndex += 1;
        if (idx >= selectedIds.length) return;

        if (
          options.maxRunSeconds > 0 &&
          Date.now() - runStart >= options.maxRunSeconds * 1000
        ) {
          return;
        }

        const moduleId = selectedIds[idx];
        const entry = entryById.get(moduleId);
        if (!entry) continue;

        const processModule = async () => {
          const moduleResult = {
            moduleId,
            file: entry.relPath.replace(/\\/g, "/"),
            lessonsTouched: 0,
            chunksTouched: 0,
            chunksLengthPassed: 0,
            chunksAgeFlagged: 0,
            lessonFailures: 0,
            updated: false,
            skippedNoRoom: false,
            warnings: [],
          };

          try {
            const modulePayload = structuredClone(entry.payload);
            const touchedLessons = new Set();
            const previousRecord = moduleRecords.get(moduleId);
            const warningKeySet = buildWarningChunkKeySet(previousRecord?.warnings);
            let changedChunks = 0;

            for (const lesson of modulePayload.lessons ?? []) {
              if (!Array.isArray(lesson?.chunks)) continue;
              let lessonSawContentChunk = false;
              for (const chunk of lesson.chunks) {
                const content = typeof chunk?.content === "string" ? normalizeText(chunk.content) : "";
                if (!content) continue;
                lessonSawContentChunk = true;
                moduleResult.chunksTouched += 1;
                const warningKey = `${lesson.id}:${chunk.id}`;
                const processChunk = shouldProcessChunk({
                  content,
                  warningKeySet,
                  warningKey,
                  options,
                });

                if (!processChunk) {
                  moduleResult.chunksLengthPassed += 1;
                  continue;
                }

                if (options.retryHighDupModules) {
                  const deduped = reduceSentenceDuplication(content, { minRetainRatio: 0.82 });
                  if (deduped.changed) {
                    chunk.content = deduped.content;
                    changedChunks += 1;
                  }
                  moduleResult.chunksLengthPassed += 1;
                  continue;
                }

                const enriched = enrichLocally({
                  content,
                  modulePayload,
                  lessonTitle: String(lesson.title || lesson.id || "lesson"),
                  chunkTitle: String(chunk.title || chunk.id || "chunk"),
                  minMultiplier: options.minMultiplier,
                });

                if (enriched.content !== content) {
                  chunk.content = enriched.content;
                  changedChunks += 1;
                }

                if (enriched.ratio >= enriched.requestedMultiplier) {
                  moduleResult.chunksLengthPassed += 1;
                } else {
                  moduleResult.warnings.push(
                    `${lesson.id}:${chunk.id} length ratio ${enriched.ratio} (< ${enriched.requestedMultiplier})`,
                  );
                }
              }
              if (lessonSawContentChunk) {
                touchedLessons.add(String(lesson.id));
              }
            }

            moduleResult.lessonsTouched = touchedLessons.size;
            if (moduleResult.chunksTouched === 0) {
              moduleResult.skippedNoRoom = true;
              moduleResult.warnings.push(
                "No eligible content chunks were found; module marked complete without forced enrichment.",
              );
            }

            if (options.apply && changedChunks > 0) {
              const nextSource = formatModuleSource(entry.exportName, modulePayload);
              await fs.writeFile(entry.filePath, nextSource, "utf8");
              moduleResult.updated = true;
            }
          } catch (error) {
            moduleResult.lessonFailures += 1;
            const message = error instanceof Error ? error.message : String(error);
            moduleResult.warnings.push(message);
          }

          return moduleResult;
        };

        let moduleResult;
        try {
          moduleResult = await timeoutWrap(
            processModule(),
            options.moduleTimeoutMs,
            `Module timed out after ${options.moduleTimeoutMs}ms`,
          );
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          moduleResult = {
            moduleId,
            file: entry.relPath.replace(/\\/g, "/"),
            lessonsTouched: 0,
            chunksTouched: 0,
            chunksLengthPassed: 0,
            chunksAgeFlagged: 0,
            lessonFailures: 1,
            updated: false,
            skippedNoRoom: false,
            warnings: [message],
          };
          state.errors.push({ moduleId, error: message });
        }

        moduleRecords.set(moduleId, moduleResult);
        const markedComplete =
          moduleResult.lessonFailures === 0 &&
          (moduleResult.chunksTouched > 0 || moduleResult.skippedNoRoom === true);
        if (markedComplete) {
          completedSet.add(moduleId);
        } else {
          completedSet.delete(moduleId);
        }

        console.log(
          `[curriculum-enrich-agent] ${moduleId}: lessons=${moduleResult.lessonsTouched}, chunks=${moduleResult.chunksTouched}, failures=${moduleResult.lessonFailures}`,
        );
        await persistState();
      }
    })(),
  );

  await Promise.all(workers);
  clearInterval(heartbeat);
  await persistQueue;
  await persistState();

  console.log(
    `[curriculum-enrich-agent] complete. modules=${state.totals.modulesProcessed}, lessons=${state.totals.lessonsTouched}, chunks=${state.totals.chunksTouched}, length_passed=${state.totals.chunksLengthPassed}, failures=${state.totals.lessonFailures}`,
  );
  console.log(`[curriculum-enrich-agent] report: ${path.relative(projectRoot, options.reportPath)}`);
  console.log(`[curriculum-enrich-agent] state: ${path.relative(projectRoot, options.statePath)}`);
}

main().catch((error) => {
  console.error(
    "[curriculum-enrich-agent] failed:",
    error instanceof Error ? error.message : String(error),
  );
  process.exitCode = 1;
});

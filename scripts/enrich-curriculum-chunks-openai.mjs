import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");

const DEFAULT_MODEL = process.env.OPENAI_FOLLOWUP_MODEL || "gpt-4o-mini";
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

function parseArgs(argv) {
  const options = {
    apply: false,
    model: DEFAULT_MODEL,
    concurrency: 3,
    batchSize: 12,
    maxModules: Infinity,
    moduleFilter: null,
    minMultiplier: 2.7,
    retries: 3,
    reportPath: DEFAULT_REPORT_PATH,
    statePath: DEFAULT_STATE_PATH,
    resume: true,
    temperature: 0.2,
    maxOutputTokens: 6000,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--apply") {
      options.apply = true;
    } else if (arg === "--dry-run") {
      options.apply = false;
    } else if (arg === "--no-resume") {
      options.resume = false;
    } else if (arg === "--model" && argv[index + 1]) {
      options.model = String(argv[index + 1]);
      index += 1;
    } else if (arg === "--concurrency" && argv[index + 1]) {
      options.concurrency = Math.max(1, Math.min(8, Number(argv[index + 1]) || 1));
      index += 1;
    } else if (arg === "--batch-size" && argv[index + 1]) {
      options.batchSize = Math.max(1, Math.min(30, Number(argv[index + 1]) || 1));
      index += 1;
    } else if (arg === "--max-modules" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.maxModules = Number.isFinite(parsed) && parsed > 0 ? Math.round(parsed) : Infinity;
      index += 1;
    } else if (arg === "--module" && argv[index + 1]) {
      options.moduleFilter = String(argv[index + 1]).trim();
      index += 1;
    } else if (arg === "--min-multiplier" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.minMultiplier = Number.isFinite(parsed) ? Math.max(2, Math.min(4, parsed)) : options.minMultiplier;
      index += 1;
    } else if (arg === "--retries" && argv[index + 1]) {
      const parsed = Number(argv[index + 1]);
      options.retries = Number.isFinite(parsed) ? Math.max(1, Math.min(6, Math.round(parsed))) : options.retries;
      index += 1;
    } else if (arg === "--report" && argv[index + 1]) {
      options.reportPath = path.resolve(projectRoot, String(argv[index + 1]));
      index += 1;
    } else if (arg === "--state" && argv[index + 1]) {
      options.statePath = path.resolve(projectRoot, String(argv[index + 1]));
      index += 1;
    }
  }

  return options;
}

function toImportPath(relativePath) {
  return `@/lib/modules/catalog/${relativePath.replace(/\.ts$/, "").replace(/\\/g, "/")}`;
}

function normalizeText(value) {
  return value.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function wordCount(value) {
  return (value.match(/[A-Za-z0-9]+/g) || []).length;
}

function keyOf(lessonId, chunkId) {
  return `${lessonId}::${chunkId}`;
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

function buildAgeContext(modulePayload) {
  const gradeBand =
    typeof modulePayload.gradeBand === "string" && modulePayload.gradeBand.trim()
      ? modulePayload.gradeBand.trim()
      : "unknown";
  const minAge =
    typeof modulePayload.minAge === "number" && Number.isFinite(modulePayload.minAge)
      ? modulePayload.minAge
      : null;
  const maxAge =
    typeof modulePayload.maxAge === "number" && Number.isFinite(modulePayload.maxAge)
      ? modulePayload.maxAge
      : null;

  return {
    gradeBand,
    minAge,
    maxAge,
    ageLabel:
      minAge !== null && maxAge !== null
        ? `${minAge}-${maxAge}`
        : minAge !== null
          ? `${minAge}+`
          : "unspecified",
  };
}

function buildBatchPromptPayload({ modulePayload, chunkRefs }) {
  const ageContext = buildAgeContext(modulePayload);

  return {
    task: "Age-appropriate curriculum chunk enrichment",
    requirements: {
      preserveLearningObjectives: true,
      safeForMinors: true,
      avoidSensitiveOrGraphicContent: true,
      keepFactsCorrectAndGrounded: true,
      increaseLengthTarget: "approximately 3x original words per chunk",
    },
    module: {
      id: modulePayload.id,
      title: modulePayload.title,
      subject: modulePayload.subject,
      gradeBand: ageContext.gradeBand,
      ageRange: ageContext.ageLabel,
    },
    chunks: chunkRefs.map((ref) => ({
      key: ref.key,
      lessonId: ref.lessonId,
      lessonTitle: ref.lessonTitle,
      lessonType: ref.lessonType,
      chunkId: ref.chunkId,
      chunkTitle: ref.title,
      chunkKind: ref.kind,
      originalWordCount: ref.originalWords,
      targetWordCount: Math.max(30, Math.round(ref.originalWords * 3)),
      originalContent: ref.content,
    })),
    responseSchema: {
      chunks: [
        {
          key: "string",
          content: "string",
          ageAppropriate: "boolean",
          safetyNotes: ["string"],
        },
      ],
      batchSafetySummary: "string",
    },
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractMessageContent(payload) {
  const content = payload?.choices?.[0]?.message?.content;
  return typeof content === "string" ? content : "";
}

async function callOpenAiJson({ apiKey, model, input, temperature, maxOutputTokens }) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature,
      max_tokens: maxOutputTokens,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are an educational content editor for minors. Rewrite lesson chunks to be age-appropriate and pedagogically richer while preserving core meaning. Return only valid JSON matching the requested schema.",
        },
        {
          role: "user",
          content: JSON.stringify(input),
        },
      ],
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail =
      payload?.error?.message || payload?.message || `OpenAI request failed (${response.status})`;
    throw new Error(detail);
  }

  const message = extractMessageContent(payload);
  if (!message) {
    throw new Error("OpenAI returned empty JSON content.");
  }

  return JSON.parse(message);
}

function validateBatchResponse(json, chunkRefs) {
  const received = Array.isArray(json?.chunks) ? json.chunks : [];
  if (received.length === 0) {
    throw new Error("Model response had no chunks.");
  }

  const byKey = new Map(
    received
      .filter((entry) => entry && typeof entry === "object")
      .map((entry) => [String(entry.key ?? ""), entry]),
  );

  return chunkRefs.map((ref, index) => {
    const preferred = byKey.get(ref.key);
    const fallback = received[index];
    const candidate = preferred ?? fallback;
    const content = normalizeText(String(candidate?.content ?? ""));
    const ageAppropriate = Boolean(candidate?.ageAppropriate);
    const safetyNotes = Array.isArray(candidate?.safetyNotes)
      ? candidate.safetyNotes
          .filter((note) => typeof note === "string")
          .map((note) => note.trim())
          .filter(Boolean)
      : [];

    return {
      key: ref.key,
      lessonId: ref.lessonId,
      chunkId: ref.chunkId,
      content,
      ageAppropriate,
      safetyNotes,
    };
  });
}

async function expandSingleChunk(params) {
  const {
    apiKey,
    model,
    modulePayload,
    chunkRef,
    currentContent,
    targetWordCount,
    retries,
    temperature,
    maxOutputTokens,
  } = params;

  const input = {
    task: "Expand enriched educational chunk to meet word-length target while preserving age safety",
    module: {
      id: modulePayload.id,
      title: modulePayload.title,
      subject: modulePayload.subject,
      gradeBand: modulePayload.gradeBand ?? "unknown",
      minAge: modulePayload.minAge ?? null,
      maxAge: modulePayload.maxAge ?? null,
    },
    lesson: {
      id: chunkRef.lessonId,
      title: chunkRef.lessonTitle,
      type: chunkRef.lessonType,
    },
    chunk: {
      key: chunkRef.key,
      id: chunkRef.chunkId,
      title: chunkRef.title,
      kind: chunkRef.kind ?? "concept",
      originalContent: chunkRef.content,
      currentContent,
      targetWordCount,
    },
    responseSchema: {
      content: "string",
      ageAppropriate: "boolean",
      safetyNotes: ["string"],
    },
  };

  let lastError = null;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const json = await callOpenAiJson({
        apiKey,
        model,
        input,
        temperature,
        maxOutputTokens: Math.max(900, Math.min(3600, maxOutputTokens)),
      });

      const content = normalizeText(String(json?.content ?? ""));
      return {
        content,
        ageAppropriate: Boolean(json?.ageAppropriate),
        safetyNotes: Array.isArray(json?.safetyNotes)
          ? json.safetyNotes
              .filter((note) => typeof note === "string")
              .map((note) => note.trim())
              .filter(Boolean)
          : [],
      };
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await sleep(400 * attempt);
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

async function enrichChunkBatch(params) {
  const {
    apiKey,
    model,
    modulePayload,
    chunkRefs,
    retries,
    temperature,
    maxOutputTokens,
    minMultiplier,
  } = params;

  const input = buildBatchPromptPayload({ modulePayload, chunkRefs });
  let lastError = null;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const json = await callOpenAiJson({
        apiKey,
        model,
        input,
        temperature,
        maxOutputTokens,
      });
      const validated = validateBatchResponse(json, chunkRefs);
      const normalized = validated.map((entry, index) => {
        const originalWords = Math.max(1, chunkRefs[index].originalWords);
        const rewrittenWords = wordCount(entry.content);
        const ratio = rewrittenWords / originalWords;
        return {
          ...entry,
          originalWords,
          rewrittenWords,
          ratio: Number(ratio.toFixed(3)),
          passedLength: ratio >= minMultiplier,
        };
      });

      for (let index = 0; index < normalized.length; index += 1) {
        const current = normalized[index];
        if (current.passedLength) continue;

        const chunkRef = chunkRefs[index];
        const targetWordCount = Math.max(30, Math.round(current.originalWords * 3));
        const expanded = await expandSingleChunk({
          apiKey,
          model,
          modulePayload,
          chunkRef,
          currentContent: current.content,
          targetWordCount,
          retries,
          temperature,
          maxOutputTokens,
        });

        const nextContent = normalizeText(expanded.content || current.content);
        const nextWords = wordCount(nextContent);
        const nextRatio = nextWords / current.originalWords;

        normalized[index] = {
          ...current,
          content: nextContent,
          ageAppropriate: current.ageAppropriate && expanded.ageAppropriate,
          safetyNotes: [...new Set([...current.safetyNotes, ...(expanded.safetyNotes ?? [])])],
          rewrittenWords: nextWords,
          ratio: Number(nextRatio.toFixed(3)),
          passedLength: nextRatio >= minMultiplier,
        };
      }

      return {
        chunks: normalized,
        batchSafetySummary:
          typeof json?.batchSafetySummary === "string" ? json.batchSafetySummary.trim() : "",
      };
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await sleep(500 * attempt);
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

function chunkArray(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
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

function createEmptyState(options) {
  return {
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    options: {
      apply: options.apply,
      model: options.model,
      concurrency: options.concurrency,
      batchSize: options.batchSize,
      minMultiplier: options.minMultiplier,
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

async function loadState(statePath) {
  try {
    const raw = await fs.readFile(statePath, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (!Array.isArray(parsed.completedModuleIds)) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function writeJson(filePath, payload) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const apiKey = process.env.OPENAI_MEDIA_API_KEY || process.env.OPENAI_API_KEY || "";
  if (!apiKey) {
    throw new Error("Missing OPENAI_MEDIA_API_KEY / OPENAI_API_KEY.");
  }

  const catalogEntries = await readCatalogEntries();
  const filteredEntries = catalogEntries.filter((entry) =>
    options.moduleFilter ? entry.payload?.id === options.moduleFilter : true,
  );
  const selectedEntries = filteredEntries.slice(
    0,
    Number.isFinite(options.maxModules) ? options.maxModules : filteredEntries.length,
  );

  const loadedState = options.resume ? await loadState(options.statePath) : null;
  const state = loadedState ?? createEmptyState(options);
  state.completedModuleIds = Array.from(new Set((state.completedModuleIds ?? []).map(String)));
  const completedIds = new Set(state.completedModuleIds);
  const failedIds = new Set(
    Array.isArray(state.modules)
      ? state.modules
          .filter((moduleResult) => Number(moduleResult?.lessonFailures || 0) > 0)
          .map((moduleResult) => String(moduleResult.moduleId))
      : [],
  );
  const queue = selectedEntries.filter((entry) => {
    const moduleId = String(entry.payload?.id ?? "");
    if (failedIds.has(moduleId)) return true;
    return !completedIds.has(moduleId);
  });

  console.log(
    `[curriculum-enrich] Modules selected: ${selectedEntries.length}, pending: ${queue.length}, apply: ${options.apply}, model: ${options.model}, batch=${options.batchSize}`,
  );

  let nextIndex = 0;
  let persistQueue = Promise.resolve();

  const persistState = () => {
    state.updatedAt = new Date().toISOString();
    persistQueue = persistQueue
      .then(() => writeJson(options.statePath, state))
      .then(() => writeJson(options.reportPath, state));
    return persistQueue;
  };

  const workers = Array.from({ length: options.concurrency }, () =>
    (async () => {
      while (true) {
        const idx = nextIndex;
        nextIndex += 1;
        if (idx >= queue.length) return;

        const entry = queue[idx];
        const moduleId = String(entry.payload?.id ?? entry.relPath);
        const moduleResult = {
          moduleId,
          file: entry.relPath.replace(/\\/g, "/"),
          lessonsTouched: 0,
          chunksTouched: 0,
          chunksLengthPassed: 0,
          chunksAgeFlagged: 0,
          lessonFailures: 0,
          updated: false,
          warnings: [],
        };

        try {
          const modulePayload = structuredClone(entry.payload);
          const chunkRefs = [];

          for (const lesson of modulePayload.lessons ?? []) {
            if (!Array.isArray(lesson.chunks)) continue;
            for (const chunk of lesson.chunks) {
              const content = typeof chunk?.content === "string" ? chunk.content.trim() : "";
              if (!content) continue;

              const lessonId = String(lesson.id);
              const chunkId = String(chunk.id);
              chunkRefs.push({
                key: keyOf(lessonId, chunkId),
                lessonId,
                lessonTitle: String(lesson.title ?? lessonId),
                lessonType: String(lesson.type ?? "lesson"),
                chunkId,
                title: String(chunk.title ?? chunkId),
                kind: String(chunk.kind ?? "concept"),
                content,
                originalWords: Math.max(1, wordCount(content)),
                chunkRef: chunk,
              });
            }
          }

          if (chunkRefs.length > 0) {
            const lessonTouchSet = new Set();
            const batches = chunkArray(chunkRefs, options.batchSize);

            for (const batch of batches) {
              try {
                const enriched = await enrichChunkBatch({
                  apiKey,
                  model: options.model,
                  modulePayload,
                  chunkRefs: batch,
                  retries: options.retries,
                  temperature: options.temperature,
                  maxOutputTokens: options.maxOutputTokens,
                  minMultiplier: options.minMultiplier,
                });

                for (const item of enriched.chunks) {
                  const ref = batch.find((entryRef) => entryRef.key === item.key);
                  if (!ref) continue;

                  ref.chunkRef.content = item.content || ref.chunkRef.content;
                  lessonTouchSet.add(ref.lessonId);
                  moduleResult.chunksTouched += 1;
                  if (item.passedLength) {
                    moduleResult.chunksLengthPassed += 1;
                  } else {
                    moduleResult.warnings.push(
                      `${ref.lessonId}:${ref.chunkId} length ratio ${item.ratio} (< ${options.minMultiplier})`,
                    );
                  }
                  if (!item.ageAppropriate) {
                    moduleResult.chunksAgeFlagged += 1;
                  }
                }
              } catch (error) {
                const failedLessons = new Set(batch.map((entryRef) => entryRef.lessonId));
                moduleResult.lessonFailures += failedLessons.size;
                moduleResult.warnings.push(
                  `Batch failed (${batch[0]?.lessonId ?? "unknown"}...): ${
                    error instanceof Error ? error.message : String(error)
                  }`,
                );
              }
            }

            moduleResult.lessonsTouched = lessonTouchSet.size;
          }

          if (options.apply && moduleResult.chunksTouched > 0) {
            const nextSource = formatModuleSource(entry.exportName, modulePayload);
            await fs.writeFile(entry.filePath, nextSource, "utf8");
            moduleResult.updated = true;
          }
        } catch (error) {
          moduleResult.lessonFailures += 1;
          moduleResult.warnings.push(
            error instanceof Error ? error.message : String(error),
          );
          state.errors.push({
            moduleId,
            error: error instanceof Error ? error.message : String(error),
          });
        }

        const existingIdx = Array.isArray(state.modules)
          ? state.modules.findIndex((item) => String(item?.moduleId) === moduleId)
          : -1;
        if (existingIdx >= 0) {
          state.modules[existingIdx] = moduleResult;
        } else {
          state.modules.push(moduleResult);
        }

        if (moduleResult.lessonFailures > 0) {
          if (completedIds.has(moduleId)) {
            completedIds.delete(moduleId);
            state.completedModuleIds = state.completedModuleIds.filter((id) => id !== moduleId);
          }
        } else if (!completedIds.has(moduleId)) {
          completedIds.add(moduleId);
          state.completedModuleIds.push(moduleId);
        }

        state.totals = recomputeTotals(state.modules);

        console.log(
          `[curriculum-enrich] ${moduleId}: lessons=${moduleResult.lessonsTouched}, chunks=${moduleResult.chunksTouched}, failures=${moduleResult.lessonFailures}`,
        );
        await persistState();
      }
    })(),
  );

  await Promise.all(workers);
  await persistQueue;
  await writeJson(options.reportPath, state);

  console.log(
    `[curriculum-enrich] complete. modules=${state.totals.modulesProcessed}, lessons=${state.totals.lessonsTouched}, chunks=${state.totals.chunksTouched}, length_passed=${state.totals.chunksLengthPassed}, failures=${state.totals.lessonFailures}`,
  );
  console.log(`[curriculum-enrich] report: ${path.relative(projectRoot, options.reportPath)}`);
  console.log(`[curriculum-enrich] state: ${path.relative(projectRoot, options.statePath)}`);
}

main().catch((error) => {
  console.error("[curriculum-enrich] failed:", error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});


import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";

const projectRoot = process.cwd();
const catalogDir = path.resolve("src/lib/modules/catalog");
const defaultSourcePath = path.resolve("..", "External_AI_Agents", "curriculum_sample_data.json");
const defaultSourceDir = path.resolve("..", "External_AI_Agents");
const outReportJson = path.resolve("public/EXTERNAL-CURRICULUM-IMPORT-REPORT.json");
const outReportMd = path.resolve("public/EXTERNAL-CURRICULUM-IMPORT-REPORT.md");

function parseArgs(argv) {
  const options = {
    source: defaultSourcePath,
    sourceDir: "",
    apply: false,
    overwrite: false,
    limit: 0,
    mergeIntoExisting: true,
    createExternalWhenNoMatch: true,
    syncRegistry: true,
    mergeThreshold: 75,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--source") options.source = path.resolve(String(argv[index + 1] ?? defaultSourcePath));
    else if (arg === "--source-dir") options.sourceDir = path.resolve(String(argv[index + 1] ?? defaultSourceDir));
    else if (arg === "--apply") options.apply = true;
    else if (arg === "--overwrite") options.overwrite = true;
    else if (arg === "--limit") options.limit = Math.max(0, Number(argv[index + 1] ?? 0));
    else if (arg === "--merge-into-existing") options.mergeIntoExisting = true;
    else if (arg === "--no-merge-into-existing") options.mergeIntoExisting = false;
    else if (arg === "--create-external-when-no-match") options.createExternalWhenNoMatch = true;
    else if (arg === "--no-create-external-when-no-match") options.createExternalWhenNoMatch = false;
    else if (arg === "--sync-registry") options.syncRegistry = true;
    else if (arg === "--no-sync-registry") options.syncRegistry = false;
    else if (arg === "--merge-threshold") options.mergeThreshold = Math.max(0, Math.min(100, Number(argv[index + 1] ?? 75)));
  }

  return options;
}

function slugify(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toConstName(moduleId) {
  return `${moduleId.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("")}Module`;
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeStringToken(value) {
  return slugify(value).replace(/-/g, "");
}

function pickLocalizedText(value, locale = "en") {
  if (!value) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "object") {
    if (typeof value[locale] === "string") return value[locale].trim();
    for (const entry of Object.values(value)) {
      if (typeof entry === "string" && entry.trim()) return entry.trim();
    }
  }
  return "";
}

function toLocalizedObject(value) {
  if (!value || typeof value !== "object") return undefined;
  const localized = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "string" && entry.trim()) localized[key] = entry.trim();
  }
  return Object.keys(localized).length > 0 ? localized : undefined;
}

function normalizeSubject(value) {
  const token = slugify(value);
  const parts = token.split("-").filter(Boolean);
  if (!token) return "general";
  if (token.includes("language-arts") || token.includes("reading") || parts.includes("ela")) return "language-arts";
  if (token.includes("social-studies") || token.includes("history")) return "social-studies";
  if (token.includes("exam")) return "exam-prep";
  return token;
}

function inferGradeBandFromModule(moduleEntry) {
  if (typeof moduleEntry?.gradeBand === "string" && moduleEntry.gradeBand.trim()) return moduleEntry.gradeBand.trim();
  const minAge = typeof moduleEntry?.minAge === "number" ? moduleEntry.minAge : null;
  const maxAge = typeof moduleEntry?.maxAge === "number" ? moduleEntry.maxAge : null;
  if (minAge !== null && minAge <= 5) return "preK";
  if (minAge !== null && maxAge !== null && minAge >= 5 && maxAge <= 8) return "K-2";
  if (minAge !== null && maxAge !== null && minAge >= 8 && maxAge <= 11) return "3-5";
  if (minAge !== null && maxAge !== null && minAge >= 11 && maxAge <= 14) return "6-8";
  if (minAge !== null && maxAge !== null && minAge >= 14 && maxAge <= 16) return "9-10";
  if (minAge !== null && minAge >= 16) return "11-12";
  return "mixed";
}

function normalizeGradeBand(value) {
  const token = normalizeStringToken(value);
  if (!token) return "mixed";
  if (token.startsWith("prek") || token === "prekindergarten") return "prek";
  if (token === "k2" || token === "kto2") return "k2";
  if (token === "35" || token === "3to5") return "35";
  if (token === "68" || token === "6to8") return "68";
  if (token === "910" || token === "9to10") return "910";
  if (token === "1112" || token === "11to12") return "1112";
  return token;
}

function hasAgeOverlap(firstModule, secondModule) {
  const firstMin = typeof firstModule?.minAge === "number" ? firstModule.minAge : null;
  const firstMax = typeof firstModule?.maxAge === "number" ? firstModule.maxAge : null;
  const secondMin = typeof secondModule?.minAge === "number" ? secondModule.minAge : null;
  const secondMax = typeof secondModule?.maxAge === "number" ? secondModule.maxAge : null;
  if (firstMin === null || firstMax === null || secondMin === null || secondMax === null) return false;
  return firstMin <= secondMax && secondMin <= firstMax;
}

function mergeUniqueStrings(...values) {
  const merged = new Set();
  for (const value of values.flat()) {
    if (typeof value === "string" && value.trim()) merged.add(value.trim());
  }
  return Array.from(merged);
}

function isExternalModule(moduleEntry) {
  const tags = Array.isArray(moduleEntry?.tags) ? moduleEntry.tags.map((tag) => String(tag).toLowerCase()) : [];
  if (tags.includes("external-ai") || tags.includes("curriculum-import")) return true;
  const versionValue = String(moduleEntry?.moduleVersion ?? moduleEntry?.version ?? "").toLowerCase();
  if (versionValue.startsWith("external")) return true;
  const moduleId = String(moduleEntry?.id ?? "").toLowerCase();
  return moduleId.endsWith("-external") || moduleId.includes("-external-");
}

const supportedSourceExtensions = new Set([".json", ".jsx", ".js", ".ts", ".tsx"]);

function listCurriculumFilesRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) files.push(...listCurriculumFilesRecursive(fullPath));
    else if (entry.isFile() && supportedSourceExtensions.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
  }
  return files;
}

function discoverSources(options) {
  const files = new Set();
  if (options.source && fs.existsSync(options.source)) files.add(path.resolve(options.source));
  if (options.sourceDir && fs.existsSync(options.sourceDir)) {
    for (const filePath of listCurriculumFilesRecursive(options.sourceDir)) files.add(path.resolve(filePath));
  }
  const sorted = Array.from(files).sort();
  const deduped = [];
  const seenFingerprints = new Set();

  for (const filePath of sorted) {
    const extension = path.extname(filePath).toLowerCase();
    try {
      const content = fs.readFileSync(filePath);
      const hash = createHash("sha1").update(content).digest("hex");
      const fingerprint = `${extension}:${hash}`;
      if (seenFingerprints.has(fingerprint)) continue;
      seenFingerprints.add(fingerprint);
    } catch {
      // Keep unreadable files in the list so caller can surface parse status.
    }
    deduped.push(filePath);
  }

  return deduped;
}

function parseAgeRangeText(value) {
  const text = String(value ?? "");
  const matches = text.match(/(\d+)\s*[–-]\s*(\d+)/);
  if (!matches) return { min: undefined, max: undefined };
  const min = Number(matches[1]);
  const max = Number(matches[2]);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return { min: undefined, max: undefined };
  return { min, max };
}

function extractObjectLiteralForConst(sourceText, constName) {
  const constPattern = new RegExp(`\\bconst\\s+${constName}\\s*=\\s*`, "m");
  const match = constPattern.exec(sourceText);
  if (!match) return null;

  const start = sourceText.indexOf("{", match.index + match[0].length);
  if (start < 0) return null;

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escapeNext = false;

  for (let index = start; index < sourceText.length; index += 1) {
    const char = sourceText[index];
    const next = sourceText[index + 1];

    if (inLineComment) {
      if (char === "\n") inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && next === "/") {
        inBlockComment = false;
        index += 1;
      }
      continue;
    }

    if (inSingle) {
      if (!escapeNext && char === "'") inSingle = false;
      escapeNext = !escapeNext && char === "\\";
      continue;
    }

    if (inDouble) {
      if (!escapeNext && char === "\"") inDouble = false;
      escapeNext = !escapeNext && char === "\\";
      continue;
    }

    if (inTemplate) {
      if (!escapeNext && char === "`") inTemplate = false;
      escapeNext = !escapeNext && char === "\\";
      continue;
    }

    if (char === "/" && next === "/") {
      inLineComment = true;
      index += 1;
      continue;
    }

    if (char === "/" && next === "*") {
      inBlockComment = true;
      index += 1;
      continue;
    }

    if (char === "'") {
      inSingle = true;
      escapeNext = false;
      continue;
    }
    if (char === "\"") {
      inDouble = true;
      escapeNext = false;
      continue;
    }
    if (char === "`") {
      inTemplate = true;
      escapeNext = false;
      continue;
    }

    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return sourceText.slice(start, index + 1);
      }
    }
  }

  return null;
}

function evaluateObjectLiteral(objectLiteral, filePath, constName) {
  const context = vm.createContext({ module: { exports: {} }, exports: {} });
  const script = `module.exports = ${objectLiteral};`;
  new vm.Script(script, { filename: `${filePath}#${constName}` }).runInContext(context);
  return context.module.exports;
}

function buildPayloadFromLessonPlatformCurriculum(curriculum) {
  if (!curriculum || typeof curriculum !== "object") return null;
  const subjectRows = Array.isArray(curriculum.subjects) ? curriculum.subjects : [];
  const gradeBandRows = Array.isArray(curriculum.gradeBands) ? curriculum.gradeBands : [];
  const lessonTree = curriculum.lessons && typeof curriculum.lessons === "object" ? curriculum.lessons : {};

  if (subjectRows.length === 0 || gradeBandRows.length === 0 || Object.keys(lessonTree).length === 0) return null;

  const subjects = subjectRows
    .filter((entry) => typeof entry?.id === "string" && entry.id.trim())
    .map((entry) => ({
      id: entry.id.trim(),
      name: { en: String(entry.name ?? entry.id).trim() },
    }));

  const gradeBands = gradeBandRows
    .filter((entry) => typeof entry?.id === "string" && entry.id.trim())
    .map((entry) => {
      const gradeId = entry.id.trim();
      const ageRange = parseAgeRangeText(entry.ages ?? entry.ageRange ?? "");
      return {
        id: gradeId,
        name: { en: String(entry.label ?? gradeId).trim() },
        age_range: {
          min: ageRange.min,
          max: ageRange.max,
        },
        pacing: {
          session_minutes: { min: 10, max: 20 },
        },
      };
    });

  const units = [];
  let unitOrder = 1;

  for (const subjectEntry of subjects) {
    const subjectLessons = lessonTree?.[subjectEntry.id];
    if (!subjectLessons || typeof subjectLessons !== "object") continue;

    for (const [gradeBandId, gradeBandContent] of Object.entries(subjectLessons)) {
      const lessons = Array.isArray(gradeBandContent?.lessons) ? gradeBandContent.lessons : [];
      if (lessons.length === 0) continue;

      const gradeBand = gradeBands.find((entry) => entry.id === gradeBandId);
      const gradeLabel = gradeBand?.name?.en ?? gradeBandId;
      const unitId = `${subjectEntry.id}-${slugify(gradeBandId)}-u1`;
      const unitTitle = String(gradeBandContent?.unitTitle ?? `${subjectEntry.name.en} ${gradeLabel}`).trim();
      const convertedLessons = lessons.map((lessonEntry, lessonIndex) => {
        const lessonSourceId = lessonEntry?.id ?? lessonEntry?.lesson_id ?? lessonEntry?.lessonId ?? lessonIndex + 1;
        const lessonTitle = String(lessonEntry?.title ?? `Lesson ${lessonIndex + 1}`).trim();
        const chunkRows = Array.isArray(lessonEntry?.chunks) ? lessonEntry.chunks : [];
        const flashcardRows = Array.isArray(lessonEntry?.flashcards) ? lessonEntry.flashcards : [];
        const quizRows = Array.isArray(lessonEntry?.quiz) ? lessonEntry.quiz : [];
        const dragdrop = lessonEntry?.dragdrop ?? lessonEntry?.dragDrop ?? null;

        return {
          lesson_id: `${unitId}-${slugify(String(lessonSourceId) || `l${lessonIndex + 1}`)}`,
          concept: { en: lessonTitle },
          title: { en: lessonTitle },
          order: lessonIndex + 1,
          chunks: chunkRows,
          flashcards: flashcardRows,
          quiz: quizRows,
          dragdrop,
          video_prompt: lessonEntry?.videoPrompt ?? lessonEntry?.video_prompt ?? "",
          animation_prompt: lessonEntry?.animPrompt ?? lessonEntry?.animation_prompt ?? "",
          image_prompt: lessonEntry?.imagePrompt ?? lessonEntry?.image_prompt ?? "",
        };
      });

      units.push({
        unit_id: unitId,
        subject_id: subjectEntry.id,
        grade_band_id: gradeBandId,
        source_format: "jsx_curriculum_object",
        title: { en: unitTitle },
        description: { en: `${subjectEntry.name.en} unit for ${gradeLabel} imported from external JSX curriculum.` },
        unit_order: unitOrder,
        lessons: convertedLessons,
      });
      unitOrder += 1;
    }
  }

  if (units.length === 0) return null;

  return {
    metadata: {
      source_format: "jsx_curriculum_object",
      supported_locales: ["en", "es"],
    },
    subjects,
    grade_bands: gradeBands,
    curriculum_units: units,
  };
}

function parsePayloadFromSourceFile(sourceFile) {
  const extension = path.extname(sourceFile).toLowerCase();
  const raw = fs.readFileSync(sourceFile, "utf8");

  if (extension === ".json") {
    try {
      return { payload: JSON.parse(raw), status: "processed_json" };
    } catch {
      return { payload: null, status: "invalid_json" };
    }
  }

  if (extension === ".jsx" || extension === ".js" || extension === ".ts" || extension === ".tsx") {
    const curriculumLiteral = extractObjectLiteralForConst(raw, "CURRICULUM");
    if (!curriculumLiteral) return { payload: null, status: "no_supported_const" };
    try {
      const curriculumObject = evaluateObjectLiteral(curriculumLiteral, sourceFile, "CURRICULUM");
      const payload = buildPayloadFromLessonPlatformCurriculum(curriculumObject);
      if (!payload) return { payload: null, status: "unsupported_curriculum_shape" };
      return { payload, status: "processed_jsx_curriculum" };
    } catch {
      return { payload: null, status: "invalid_jsx_curriculum" };
    }
  }

  return { payload: null, status: "unsupported_extension" };
}

function extractUnits(payload) {
  if (Array.isArray(payload?.curriculum_units)) return payload.curriculum_units;
  if (Array.isArray(payload?.curriculumUnits)) return payload.curriculumUnits;
  if (Array.isArray(payload?.units)) return payload.units;
  if (Array.isArray(payload)) return payload;
  if (payload && typeof payload === "object" && typeof payload.unit_id === "string") return [payload];
  return [];
}

function extractSubjects(payload) {
  if (Array.isArray(payload?.subjects)) return payload.subjects;
  if (Array.isArray(payload?.subject_catalog)) return payload.subject_catalog;
  if (Array.isArray(payload?.subjectCatalog)) return payload.subjectCatalog;
  return [];
}

function extractGradeBands(payload) {
  if (Array.isArray(payload?.grade_bands)) return payload.grade_bands;
  if (Array.isArray(payload?.gradeBands)) return payload.gradeBands;
  return [];
}

function extractLocales(payload) {
  const metadata = payload?.metadata && typeof payload.metadata === "object" ? payload.metadata : {};
  const locales = Array.isArray(metadata?.supported_locales)
    ? metadata.supported_locales
    : Array.isArray(metadata?.supportedLocales)
      ? metadata.supportedLocales
      : [];
  const filtered = locales.filter((value) => typeof value === "string");
  return filtered.length > 0 ? filtered : ["en", "es"];
}
function readCatalogModules() {
  if (!fs.existsSync(catalogDir)) return [];
  const files = fs.readdirSync(catalogDir).filter((name) => name.endsWith(".ts")).filter((name) => !name.endsWith(".example.ts")).sort();
  const modules = [];
  for (const fileName of files) {
    const filePath = path.join(catalogDir, fileName);
    const source = fs.readFileSync(filePath, "utf8");
    const exportMatch = source.match(/export const\s+([A-Za-z0-9_]+)\s*:\s*LearningModule\s*=/);
    if (!exportMatch) continue;
    const exportName = exportMatch[1];
    const transformed = source
      .replace(/^import\s+type\s+\{[^}]+\}\s+from\s+"[^"]+";\s*$/gm, "")
      .replace(new RegExp(`export const\\s+${exportName}\\s*:\\s*LearningModule\\s*=`, "m"), `const ${exportName} =`)
      .concat(`\nmodule.exports = ${exportName};\n`);
    const context = vm.createContext({ module: { exports: {} }, exports: {} });
    new vm.Script(transformed, { filename: filePath }).runInContext(context);
    if (context.module.exports?.id) {
      modules.push({
        fileName,
        filePath,
        exportName,
        module: context.module.exports,
        isExternal: isExternalModule(context.module.exports),
      });
    }
  }
  return modules;
}

function resolveModuleId(unitId, existingIds, existingBySourceUnitId) {
  const canonicalUnitId = canonicalizeSourceUnitId(unitId);
  if (existingBySourceUnitId.has(canonicalUnitId)) return existingBySourceUnitId.get(canonicalUnitId);
  if (existingBySourceUnitId.has(unitId)) return existingBySourceUnitId.get(unitId);
  const base = `${slugify(canonicalUnitId)}-external`;
  let moduleId = base;
  let suffix = 2;
  while (existingIds.has(moduleId)) {
    moduleId = `${base}-v${suffix}`;
    suffix += 1;
  }
  existingBySourceUnitId.set(canonicalUnitId, moduleId);
  if (unitId && unitId !== canonicalUnitId) existingBySourceUnitId.set(unitId, moduleId);
  existingIds.add(moduleId);
  return moduleId;
}

function pickBySequence(values, sequence, fallback) {
  if (!Array.isArray(values) || values.length === 0) return fallback;
  const index = Math.max(0, (Number(sequence) || 1) - 1) % values.length;
  return values[index] ?? fallback;
}

function subjectProfileForLesson(subjectLabel) {
  const subjectKey = normalizeSubject(subjectLabel);

  if (subjectKey.includes("math")) {
    return {
      focusTerms: ["number sense", "equation setup", "fraction reasoning", "multi-step strategy", "error-check routines"],
      contextFrames: [
        "Model the problem with a visual or equation before solving.",
        "Name the operation and explain why it fits.",
        "Check units, signs, and reasonableness before finalizing.",
      ],
      practiceFrames: [
        "Solve one guided item, then one independent item with the same pattern.",
        "Use a short checklist: plan, solve, verify.",
        "Compare two strategies and choose the more reliable one.",
      ],
      summaryDistractors: [
        "A claim that ignores the calculation steps.",
        "A shortcut with no evidence of verification.",
        "An explanation that mixes unrelated math rules.",
      ],
      applicationDistractors: [
        "Apply the right numbers but the wrong operation.",
        "Skip the setup and guess from answer size.",
        "Use a method from a different problem type.",
      ],
    };
  }

  if (subjectKey.includes("language-arts") || subjectKey.includes("reading")) {
    return {
      focusTerms: ["close reading", "vocabulary in context", "sentence revision", "paragraph structure", "evidence-based response"],
      contextFrames: [
        "Read the prompt, then highlight key words and evidence lines.",
        "Use one clear claim and support it with text-based details.",
        "Revise for clarity, grammar, and transition flow.",
      ],
      practiceFrames: [
        "Annotate one short passage and summarize the main idea.",
        "Rewrite one sentence to improve precision and tone.",
        "Build a short paragraph with claim, evidence, and explanation.",
      ],
      summaryDistractors: [
        "A statement with no text evidence.",
        "A summary that adds ideas not in the lesson.",
        "A response that repeats words but misses meaning.",
      ],
      applicationDistractors: [
        "Quote text without explaining relevance.",
        "Use opinion only with no supporting detail.",
        "Change the topic instead of answering the prompt.",
      ],
    };
  }

  if (subjectKey.includes("science")) {
    return {
      focusTerms: ["observation skills", "hypothesis testing", "variable control", "evidence interpretation", "scientific explanation"],
      contextFrames: [
        "Start with an observation and a testable question.",
        "Change one variable at a time to keep results clear.",
        "Use evidence from results to support the conclusion.",
      ],
      practiceFrames: [
        "Run a mini investigation and record outcomes in a table.",
        "Identify independent, dependent, and control variables.",
        "Explain one result using evidence and science vocabulary.",
      ],
      summaryDistractors: [
        "A conclusion without evidence.",
        "A result that changes multiple variables at once.",
        "A claim that ignores the observed data.",
      ],
      applicationDistractors: [
        "Select a conclusion before reviewing results.",
        "Use unrelated facts that do not match the experiment.",
        "Treat one observation as proof without retesting.",
      ],
    };
  }

  if (subjectKey.includes("social-studies") || subjectKey.includes("history")) {
    return {
      focusTerms: ["source interpretation", "cause and effect", "civic reasoning", "timeline logic", "historical evidence"],
      contextFrames: [
        "Identify who created the source and why.",
        "Connect events through clear cause-and-effect statements.",
        "Support claims with evidence from primary or secondary sources.",
      ],
      practiceFrames: [
        "Place events on a timeline and explain one turning point.",
        "Compare two sources and note one bias or perspective.",
        "Write a short response using claim and source evidence.",
      ],
      summaryDistractors: [
        "A statement with no source support.",
        "A timeline that confuses event order.",
        "A claim that ignores context and perspective.",
      ],
      applicationDistractors: [
        "Use modern assumptions instead of historical evidence.",
        "Cite facts that are unrelated to the question.",
        "Select a source but do not explain its significance.",
      ],
    };
  }

  return {
    focusTerms: ["core concept", "guided practice", "application strategy", "review routine", "progress check"],
    contextFrames: [
      "Identify the main idea and one supporting detail.",
      "Practice the idea with one worked example.",
      "Check understanding and plan a next step.",
    ],
    practiceFrames: [
      "Try a guided example, then an independent attempt.",
      "Use a simple checklist before final answers.",
      "Reflect on one strength and one improvement target.",
    ],
    summaryDistractors: [
      "A statement unrelated to the lesson concept.",
      "A definition from a different subject area.",
      "A random guess with no supporting reasoning.",
    ],
    applicationDistractors: [
      "An answer that does not use lesson evidence.",
      "A statement unrelated to the question prompt.",
      "A contradiction of the taught concept.",
    ],
  };
}

function buildQuizQuestions(moduleId, lessonId, lessonTitle, objectives, subjectLabel = "", sequence = 1) {
  const firstObjective = objectives[0] || `Identify the central concept in ${lessonTitle}.`;
  const secondObjective = objectives[1] || `Apply ${lessonTitle} in a simple example.`;
  const profile = subjectProfileForLesson(subjectLabel);
  const skillPrefix = `${moduleId}-skill-${slugify(lessonTitle) || "core"}`;
  const summaryDistractors = profile.summaryDistractors ?? [];
  const applicationDistractors = profile.applicationDistractors ?? [];
  const reviewPositive = pickBySequence(
    profile.practiceFrames,
    sequence,
    "It strengthens memory and identifies gaps for remediation.",
  );
  return [
    {
      id: `${lessonId}-q1`,
      text: `Which option best summarizes ${lessonTitle}?`,
      skillId: `${skillPrefix}-summary`,
      options: [
        { id: "a", text: firstObjective },
        { id: "b", text: summaryDistractors[0] || "A statement unrelated to the lesson concept." },
        { id: "c", text: summaryDistractors[1] || "A definition from a different subject area." },
        { id: "d", text: summaryDistractors[2] || "A random guess with no supporting reasoning." },
      ],
      correctOptionId: "a",
    },
    {
      id: `${lessonId}-q2`,
      text: `Which response shows correct application of ${lessonTitle}?`,
      skillId: `${skillPrefix}-apply`,
      options: [
        { id: "a", text: secondObjective },
        { id: "b", text: applicationDistractors[0] || "An answer that does not use lesson evidence." },
        { id: "c", text: applicationDistractors[1] || "A statement unrelated to the question prompt." },
        { id: "d", text: applicationDistractors[2] || "A contradiction of the taught concept." },
      ],
      correctOptionId: "a",
    },
    {
      id: `${lessonId}-q3`,
      text: `Why is review important after learning ${lessonTitle}?`,
      skillId: `${skillPrefix}-review`,
      options: [
        { id: "a", text: reviewPositive },
        { id: "b", text: "It replaces understanding with guessing." },
        { id: "c", text: "It removes the need for future practice." },
        { id: "d", text: "It makes progress tracking impossible." },
      ],
      correctOptionId: "a",
    },
  ];
}

function buildFallbackAid(lessonId, lessonTitle, lessonType) {
  if (lessonType === "video") return { id: `${lessonId}-aid-animation`, type: "animation", title: "Guided Animation", content: `Animated concept support for ${lessonTitle}.` };
  if (lessonType === "quiz") return { id: `${lessonId}-aid-mnemonic`, type: "mnemonic", title: "Memory Prompt", content: `Review key concepts for ${lessonTitle}.` };
  return { id: `${lessonId}-aid-practice`, type: "practice", title: "Guided Practice", content: `Practice reflection and application for ${lessonTitle}.` };
}

function buildGeneratedInteractiveActivities(lessonId, lessonTitle, lessonType, objectives, subjectLabel = "", sequence = 1) {
  const profile = subjectProfileForLesson(subjectLabel);
  const practicePrompt = pickBySequence(profile.practiceFrames, sequence, `Try one worked example for ${lessonTitle}.`);
  if (lessonType === "interactive") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "drag_and_drop",
        title: `${lessonTitle} Learning Flow`,
        description: "Sort each action into Plan, Practice, or Reflect.",
        estimatedMinutes: 8,
        difficultyLevel: "easy",
        instructions: ["Read each action.", "Choose where it belongs.", "Use the result as your practice plan."],
        data: {
          targets: [
            { id: "plan", label: "Plan" },
            { id: "practice", label: "Practice" },
            { id: "reflect", label: "Reflect" },
          ],
          draggables: [
            {
              id: "d1",
              label: `Set a goal for ${objectives[0] || lessonTitle}.`,
              correctTargetId: "plan",
            },
            {
              id: "d2",
              label: practicePrompt || `Try one worked example for ${objectives[1] || lessonTitle}.`,
              correctTargetId: "practice",
            },
            {
              id: "d3",
              label: "Write one thing to improve before the next attempt.",
              correctTargetId: "reflect",
            },
          ],
        },
      },
    ];
  }

  if (lessonType === "quiz") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "matching_pairs",
        title: `${lessonTitle} Error Match`,
        description: "Match each learning signal to the strongest correction action.",
        estimatedMinutes: 7,
        difficultyLevel: "medium",
        instructions: ["Read each signal.", "Pick the best response.", "Use matches for your next quiz retry."],
        data: {
          left: [
            { id: "l1", label: `I still mix up ${objectives[0] || "the core concept"}.` },
            { id: "l2", label: "I rush and miss key details in the prompt." },
            { id: "l3", label: `I understand ${lessonTitle} in notes but not in timed checks.` },
          ],
          right: [
            { id: "r1", label: "Review one clear example and explain it aloud." },
            { id: "r2", label: "Use a short checklist before final answer selection." },
            { id: "r3", label: "Run a short re-check under the same time constraints." },
          ],
          pairs: [
            { leftId: "l1", rightId: "r1" },
            { leftId: "l2", rightId: "r2" },
            { leftId: "l3", rightId: "r3" },
          ],
        },
      },
    ];
  }

  return undefined;
}

function buildGeneratedQuizBlueprint(lessonType, questionCount = 3, timeLimitMinutes = 10) {
  if (lessonType !== "quiz") return undefined;
  const safeQuestionCount = Number.isFinite(questionCount) ? Math.max(1, Math.min(30, Math.round(questionCount))) : 3;
  const safeTimeLimit = Number.isFinite(timeLimitMinutes) ? Math.max(5, Math.min(90, Math.round(timeLimitMinutes))) : 10;
  return {
    frequency: "lesson_assessment",
    questionsPerCheck: safeQuestionCount,
    totalQuestions: safeQuestionCount,
    timeLimitMinutes: safeTimeLimit,
    questionTypes: [{ type: "mcq_single", count: safeQuestionCount, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
    difficultyDistribution: {
      easy: Math.max(1, Math.round(safeQuestionCount * 0.3)),
      medium: Math.max(1, Math.round(safeQuestionCount * 0.5)),
      hard: Math.max(0, safeQuestionCount - Math.round(safeQuestionCount * 0.3) - Math.round(safeQuestionCount * 0.5)),
    },
    feedbackMode: "after_submit",
    adaptive: false,
    masteryThreshold: 0.7,
  };
}

function toOptionId(index) {
  if (index >= 0 && index < 26) return String.fromCharCode(97 + index);
  return `opt${index + 1}`;
}

function mapExternalQuizQuestions(lessonInput, moduleId, lessonId, lessonTitle, objectives, subjectLabel = "", sequence = 1) {
  const quizRows = Array.isArray(lessonInput?.quiz)
    ? lessonInput.quiz
    : Array.isArray(lessonInput?.questions)
      ? lessonInput.questions
      : [];
  if (quizRows.length === 0) return buildQuizQuestions(moduleId, lessonId, lessonTitle, objectives, subjectLabel, sequence);

  const skillPrefix = `${moduleId}-skill-${slugify(lessonTitle) || "core"}`;
  const mapped = [];

  for (let index = 0; index < quizRows.length; index += 1) {
    const row = quizRows[index];
    const questionText = String(row?.q ?? row?.text ?? "").trim();
    const rawOptions = Array.isArray(row?.options)
      ? row.options
      : Array.isArray(row?.opts)
        ? row.opts
        : [];
    const optionTexts = rawOptions
      .map((entry) => (typeof entry === "string" ? entry : String(entry?.text ?? "").trim()))
      .map((entry) => entry.trim())
      .filter(Boolean);
    if (!questionText || optionTexts.length < 2) continue;

    const options = optionTexts.map((text, optionIndex) => ({
      id: toOptionId(optionIndex),
      text,
    }));

    const numericAnswer = Number(row?.answer);
    const stringAnswerId = typeof row?.correctOptionId === "string" ? row.correctOptionId.trim() : "";
    const correctOptionId =
      stringAnswerId && options.some((option) => option.id === stringAnswerId)
        ? stringAnswerId
        : Number.isFinite(numericAnswer) && numericAnswer >= 0 && numericAnswer < options.length
          ? options[numericAnswer].id
          : options[0].id;

    mapped.push({
      id: `${lessonId}-q${index + 1}`,
      text: questionText,
      skillId: `${skillPrefix}-${slugify(String(row?.bloom ?? row?.skill ?? row?.topic ?? index + 1)) || `q${index + 1}`}`,
      options,
      correctOptionId,
      hint: typeof row?.hint === "string" && row.hint.trim() ? row.hint.trim() : undefined,
      explanation: typeof row?.explain === "string" && row.explain.trim()
        ? row.explain.trim()
        : typeof row?.explanation === "string" && row.explanation.trim()
          ? row.explanation.trim()
          : undefined,
    });
  }

  if (mapped.length >= 3) return mapped;
  return buildQuizQuestions(moduleId, lessonId, lessonTitle, objectives, subjectLabel, sequence);
}

function mapExternalFlashcards(lessonInput, lessonId, lessonTitle, objectives) {
  const rows = Array.isArray(lessonInput?.flashcards) ? lessonInput.flashcards : [];
  if (rows.length === 0) {
    return [
      { id: `${lessonId}-card-1`, front: `What is the main idea of ${lessonTitle}?`, back: objectives[0] || `Understand the key idea in ${lessonTitle}.` },
      { id: `${lessonId}-card-2`, front: `How can you apply ${lessonTitle}?`, back: `Use ${lessonTitle} in a short example and explain why your answer works.` },
    ];
  }

  const cards = [];
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const front = String(row?.front ?? row?.question ?? "").trim();
    const back = String(row?.back ?? row?.answer ?? "").trim();
    if (!front || !back) continue;
    cards.push({
      id: `${lessonId}-card-${index + 1}`,
      front,
      back,
      hint: typeof row?.hint === "string" && row.hint.trim() ? row.hint.trim() : undefined,
    });
  }

  return cards.length > 0
    ? cards
    : [
        { id: `${lessonId}-card-1`, front: `What is the main idea of ${lessonTitle}?`, back: objectives[0] || `Understand the key idea in ${lessonTitle}.` },
        { id: `${lessonId}-card-2`, front: `How can you apply ${lessonTitle}?`, back: `Use ${lessonTitle} in a short example and explain why your answer works.` },
      ];
}

function mapExternalChunks(lessonInput, lessonId, lessonTitle) {
  const rows = Array.isArray(lessonInput?.chunks) ? lessonInput.chunks : [];
  if (rows.length === 0) {
    return [
      { id: `${lessonId}-chunk-intro`, title: `${lessonTitle} Overview`, content: `Learn the core idea of ${lessonTitle}.`, kind: "concept" },
      { id: `${lessonId}-chunk-recap`, title: "Quick Recap", content: `Summarize ${lessonTitle} in your own words and connect it to one example.`, kind: "recap" },
    ];
  }

  const chunks = [];
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const title = String(row?.heading ?? row?.title ?? `Section ${index + 1}`).trim();
    const content = String(row?.content ?? row?.text ?? "").trim();
    if (!title || !content) continue;
    chunks.push({
      id: `${lessonId}-chunk-${index + 1}`,
      title,
      content,
      kind: typeof row?.event === "string" && row.event.trim() ? slugify(row.event).replace(/-/g, "_") : undefined,
    });
  }

  return chunks.length > 0
    ? chunks
    : [
        { id: `${lessonId}-chunk-intro`, title: `${lessonTitle} Overview`, content: `Learn the core idea of ${lessonTitle}.`, kind: "concept" },
        { id: `${lessonId}-chunk-recap`, title: "Quick Recap", content: `Summarize ${lessonTitle} in your own words and connect it to one example.`, kind: "recap" },
      ];
}

function buildInteractiveActivitiesFromDragDrop(lessonInput, lessonId, lessonTitle) {
  const dragDrop = lessonInput?.dragdrop ?? lessonInput?.dragDrop;
  const items = Array.isArray(dragDrop?.items) ? dragDrop.items : [];
  if (items.length === 0) return undefined;

  const targetIds = new Map();
  const targets = [];
  const draggables = [];

  for (let index = 0; index < items.length; index += 1) {
    const row = items[index];
    const label = String(row?.text ?? row?.label ?? "").trim();
    const answer = String(row?.answer ?? row?.bucket ?? "").trim();
    if (!label || !answer) continue;

    const answerKey = slugify(answer) || `bucket-${targets.length + 1}`;
    if (!targetIds.has(answerKey)) {
      targetIds.set(answerKey, `t${targetIds.size + 1}`);
      targets.push({ id: targetIds.get(answerKey), label: answer });
    }

    draggables.push({
      id: `d${index + 1}`,
      label,
      correctTargetId: targetIds.get(answerKey),
    });
  }

  if (targets.length === 0 || draggables.length === 0) return undefined;

  return [
    {
      id: `${lessonId}-ia1`,
      type: "drag_and_drop",
      title: String(dragDrop?.title ?? `${lessonTitle} Sort`).trim(),
      description: "Sort each item into the correct category.",
      estimatedMinutes: Math.max(6, Math.min(12, Math.round(draggables.length * 1.2))),
      difficultyLevel: "easy",
      instructions: ["Read each card.", "Drag it to the best category.", "Check all placements before submit."],
      data: {
        targets,
        draggables,
      },
    },
  ];
}

function deriveObjectivesFromLessonInput(lessonInput) {
  const explicitObjectives = Array.isArray(lessonInput?.objectives)
    ? lessonInput.objectives
    : Array.isArray(lessonInput?.learningObjectives)
      ? lessonInput.learningObjectives
      : [];

  const fromObjectives = explicitObjectives
    .map((entry) => (typeof entry === "string" ? entry : pickLocalizedText(entry?.text ?? entry)))
    .filter((value) => value.length > 0);

  const chunkRows = Array.isArray(lessonInput?.chunks) ? lessonInput.chunks : [];
  const chunkObjectives = chunkRows
    .map((chunk) => String(chunk?.heading ?? chunk?.title ?? "").trim())
    .filter(Boolean)
    .slice(0, 3)
    .map((heading) => `Explain ${heading}.`);

  return mergeUniqueStrings(fromObjectives, chunkObjectives);
}

function resolveSourceUnitId(unit) {
  const explicitId = unit?.unit_id ?? unit?.unitId ?? unit?.id;
  if (typeof explicitId === "string" && explicitId.trim()) return explicitId.trim();
  const titleLike = pickLocalizedText(unit?.title) || pickLocalizedText(unit?.name);
  const fromTitle = slugify(titleLike);
  if (fromTitle) return fromTitle;
  return "external-unit";
}

function canonicalizeSourceUnitId(value) {
  const normalized = slugify(value);
  return normalized || "external-unit";
}

function registerModuleEntry(index, entry) {
  index.byId.set(entry.module.id, entry);

  const sourceUnitId = entry?.module?.metadata?.sourceUnitId;
  if (typeof sourceUnitId === "string" && sourceUnitId.trim()) {
    const rawSourceUnitId = sourceUnitId.trim();
    index.bySourceUnitId.set(rawSourceUnitId, entry.module.id);
    index.bySourceUnitId.set(canonicalizeSourceUnitId(rawSourceUnitId), entry.module.id);
  }

  const subjectKey = normalizeSubject(entry.module.subject);
  const gradeKey = normalizeGradeBand(inferGradeBandFromModule(entry.module));
  const subjectGradeKey = `${subjectKey}|${gradeKey}`;

  if (!index.bySubjectGrade.has(subjectGradeKey)) index.bySubjectGrade.set(subjectGradeKey, []);
  index.bySubjectGrade.get(subjectGradeKey).push(entry);

  if (!index.bySubject.has(subjectKey)) index.bySubject.set(subjectKey, []);
  index.bySubject.get(subjectKey).push(entry);
}

function buildModuleIndex(modules) {
  const index = {
    byId: new Map(),
    bySourceUnitId: new Map(),
    bySubjectGrade: new Map(),
    bySubject: new Map(),
  };

  for (const moduleEntry of modules) registerModuleEntry(index, moduleEntry);
  return index;
}

function chooseBestMergeTarget(candidates, sourceModule) {
  if (!Array.isArray(candidates) || candidates.length === 0) {
    return { target: null, score: null, considered: 0 };
  }

  const sourceGrade = normalizeGradeBand(inferGradeBandFromModule(sourceModule));
  const sourceSubject = normalizeSubject(sourceModule.subject);

  const ranked = candidates
    .map((entry) => {
      let score = 0;
      if (!entry.isExternal) score += 30;

      const targetGrade = normalizeGradeBand(inferGradeBandFromModule(entry.module));
      const targetSubject = normalizeSubject(entry?.module?.subject);
      const ageComparable =
        typeof entry?.module?.minAge === "number" &&
        typeof entry?.module?.maxAge === "number" &&
        typeof sourceModule?.minAge === "number" &&
        typeof sourceModule?.maxAge === "number";
      const ageOverlap = hasAgeOverlap(entry.module, sourceModule);

      if (targetSubject === sourceSubject) score += 35;
      if (targetGrade === sourceGrade) score += 20;
      else score -= 15;
      if (ageOverlap) score += 10;
      else if (ageComparable) score -= 10;

      const lessonCount = Array.isArray(entry?.module?.lessons) ? entry.module.lessons.length : 0;
      score += Math.min(5, Math.round(lessonCount / 10));

      const targetTitle = String(entry?.module?.title ?? "").toLowerCase();
      const sourceTitle = String(sourceModule?.title ?? "").toLowerCase();
      if (sourceTitle && targetTitle && sourceTitle === targetTitle) score += 10;

      return { entry, score };
    })
    .sort((left, right) => {
      const delta = right.score - left.score;
      if (delta !== 0) return delta;
      return String(left.entry.module.id).localeCompare(String(right.entry.module.id));
    });

  return {
    target: ranked[0]?.entry ?? null,
    score: typeof ranked[0]?.score === "number" ? ranked[0].score : null,
    considered: ranked.length,
  };
}

function findMergeTarget(moduleObject, moduleIndex) {
  const sourceUnitId = moduleObject?.metadata?.sourceUnitId;
  if (typeof sourceUnitId === "string" && sourceUnitId.trim()) {
    const normalizedUnitId = canonicalizeSourceUnitId(sourceUnitId.trim());
    const exactModuleId =
      moduleIndex.bySourceUnitId.get(normalizedUnitId) ?? moduleIndex.bySourceUnitId.get(sourceUnitId.trim());
    if (exactModuleId && moduleIndex.byId.has(exactModuleId)) {
      return { target: moduleIndex.byId.get(exactModuleId), strategy: "source_unit_match", score: 100, considered: 1 };
    }
  }

  const subjectKey = normalizeSubject(moduleObject.subject);
  const gradeKey = normalizeGradeBand(inferGradeBandFromModule(moduleObject));
  const subjectGradeKey = `${subjectKey}|${gradeKey}`;

  const subjectGradeCandidates = moduleIndex.bySubjectGrade.get(subjectGradeKey) ?? [];
  const subjectGradeTarget = chooseBestMergeTarget(subjectGradeCandidates, moduleObject);
  if (subjectGradeTarget.target) {
    return { target: subjectGradeTarget.target, strategy: "subject_grade_match", score: subjectGradeTarget.score, considered: subjectGradeTarget.considered };
  }

  const subjectCandidates = moduleIndex.bySubject.get(subjectKey) ?? [];
  const subjectTarget = chooseBestMergeTarget(subjectCandidates, moduleObject);
  if (subjectTarget.target) {
    return { target: subjectTarget.target, strategy: "subject_fallback", score: subjectTarget.score, considered: subjectTarget.considered };
  }

  return { target: null, strategy: "no_match", score: null, considered: 0 };
}

function makeUniqueId(baseId, usedIds, fallbackPrefix) {
  const seed = slugify(baseId) || slugify(fallbackPrefix) || "item";
  let candidate = seed;
  let suffix = 2;
  while (usedIds.has(candidate)) {
    candidate = `${seed}-v${suffix}`;
    suffix += 1;
  }
  usedIds.add(candidate);
  return candidate;
}
function maybeReplacePrefix(value, oldPrefix, newPrefix, fallbackFactory) {
  if (typeof value === "string" && value.trim()) {
    if (value.startsWith(oldPrefix)) return `${newPrefix}${value.slice(oldPrefix.length)}`;
    return value;
  }
  return fallbackFactory();
}

function rebaseLessonIdentifiers(lesson, sourceModuleId, targetModuleId, newLessonId) {
  const clonedLesson = cloneJson(lesson ?? {});
  const oldLessonId = String(clonedLesson.id ?? "");
  clonedLesson.id = newLessonId;

  if (Array.isArray(clonedLesson.questions)) {
    clonedLesson.questions = clonedLesson.questions.map((question, index) => {
      const clonedQuestion = cloneJson(question ?? {});
      clonedQuestion.id = maybeReplacePrefix(
        clonedQuestion.id,
        oldLessonId,
        newLessonId,
        () => `${newLessonId}-q${index + 1}`,
      );
      if (typeof clonedQuestion.skillId === "string" && clonedQuestion.skillId.startsWith(sourceModuleId)) {
        clonedQuestion.skillId = `${targetModuleId}${clonedQuestion.skillId.slice(sourceModuleId.length)}`;
      }
      return clonedQuestion;
    });
  }

  const rebaseCollection = (collection, suffix) =>
    Array.isArray(collection)
      ? collection.map((item, index) => {
          const clonedItem = cloneJson(item ?? {});
          clonedItem.id = maybeReplacePrefix(
            clonedItem.id,
            oldLessonId,
            newLessonId,
            () => `${newLessonId}-${suffix}-${index + 1}`,
          );
          return clonedItem;
        })
      : collection;

  clonedLesson.learningAids = rebaseCollection(clonedLesson.learningAids, "aid");
  clonedLesson.chunks = rebaseCollection(clonedLesson.chunks, "chunk");
  clonedLesson.flashcards = rebaseCollection(clonedLesson.flashcards, "card");
  clonedLesson.interactiveActivities = rebaseCollection(clonedLesson.interactiveActivities, "activity");

  const existingExternal = clonedLesson?.external && typeof clonedLesson.external === "object" ? clonedLesson.external : {};
  clonedLesson.external = {
    ...existingExternal,
    sourceModuleId,
    mergedIntoModuleId: targetModuleId,
  };

  const metadata = clonedLesson?.metadata && typeof clonedLesson.metadata === "object" ? clonedLesson.metadata : {};
  clonedLesson.metadata = {
    ...metadata,
    externalSourceModuleId: sourceModuleId,
    mergedIntoModuleId: targetModuleId,
  };

  return clonedLesson;
}

function mergeStandardsMappings(targetMappings, sourceMappings) {
  const merged = [];
  const seen = new Set();

  for (const entry of [...(Array.isArray(targetMappings) ? targetMappings : []), ...(Array.isArray(sourceMappings) ? sourceMappings : [])]) {
    if (!entry || typeof entry !== "object") continue;
    const frameworkId = typeof entry.frameworkId === "string" ? entry.frameworkId : "";
    const code = typeof entry.code === "string" ? entry.code : "";
    if (!frameworkId || !code) continue;

    const key = `${frameworkId}::${code}`;
    if (seen.has(key)) continue;
    seen.add(key);

    merged.push({
      frameworkId,
      code,
      description: typeof entry.description === "string" ? entry.description : undefined,
      url: typeof entry.url === "string" ? entry.url : undefined,
    });
  }

  return merged.length > 0 ? merged : undefined;
}

function mergeModuleContent(targetModule, sourceModule) {
  const merged = cloneJson(targetModule);
  const mergeMeta = { lessonsAdded: 0, lessonsSkipped: 0 };

  const targetLessons = Array.isArray(merged.lessons) ? [...merged.lessons] : [];
  const targetLessonIds = new Set(targetLessons.map((lesson) => String(lesson?.id ?? "")));

  const seenSourceLessonIds = new Set(
    targetLessons
      .map((lesson) => {
        const sourceLessonId = lesson?.external?.sourceLessonId;
        return typeof sourceLessonId === "string" ? sourceLessonId : "";
      })
      .filter((value) => value.length > 0),
  );

  const seenTitles = new Set(
    targetLessons
      .map((lesson) => (typeof lesson?.title === "string" ? lesson.title.trim().toLowerCase() : ""))
      .filter((value) => value.length > 0),
  );

  const incomingLessons = Array.isArray(sourceModule.lessons) ? sourceModule.lessons : [];
  for (const lesson of incomingLessons) {
    const sourceLessonId = typeof lesson?.external?.sourceLessonId === "string" ? lesson.external.sourceLessonId : "";
    const normalizedTitle = typeof lesson?.title === "string" ? lesson.title.trim().toLowerCase() : "";

    if ((sourceLessonId && seenSourceLessonIds.has(sourceLessonId)) || (normalizedTitle && seenTitles.has(normalizedTitle))) {
      mergeMeta.lessonsSkipped += 1;
      continue;
    }

    const sourceLessonSeed = sourceLessonId || lesson?.id || lesson?.title || "lesson";
    const lessonIdPrefix = `${merged.id}-${sourceLessonSeed}`;
    const newLessonId = makeUniqueId(lessonIdPrefix, targetLessonIds, `${merged.id}-lesson`);
    const rebasedLesson = rebaseLessonIdentifiers(lesson, sourceModule.id, merged.id, newLessonId);

    targetLessons.push(rebasedLesson);
    mergeMeta.lessonsAdded += 1;
    if (sourceLessonId) seenSourceLessonIds.add(sourceLessonId);
    if (normalizedTitle) seenTitles.add(normalizedTitle);
  }

  merged.lessons = targetLessons;
  merged.learningObjectives = mergeUniqueStrings(merged.learningObjectives, sourceModule.learningObjectives);
  merged.localeSupport = mergeUniqueStrings(merged.localeSupport, sourceModule.localeSupport);
  merged.tags = mergeUniqueStrings(merged.tags, sourceModule.tags, ["external-ai-merged"]);
  merged.standardsMappings = mergeStandardsMappings(merged.standardsMappings, sourceModule.standardsMappings);

  const mergedMetadata = merged?.metadata && typeof merged.metadata === "object" ? merged.metadata : {};
  const existingMergeUnits = Array.isArray(mergedMetadata.externalMergedUnitIds) ? mergedMetadata.externalMergedUnitIds : [];
  const sourceUnitId = typeof sourceModule?.metadata?.sourceUnitId === "string" ? sourceModule.metadata.sourceUnitId : "";

  merged.metadata = {
    ...mergedMetadata,
    externalMergeLastAt: new Date().toISOString(),
    externalMergedUnitIds: mergeUniqueStrings(existingMergeUnits, sourceUnitId ? [sourceUnitId] : []),
    externalMergeSourceFiles: mergeUniqueStrings(
      Array.isArray(mergedMetadata.externalMergeSourceFiles) ? mergedMetadata.externalMergeSourceFiles : [],
      typeof sourceModule?.metadata?.source === "string" ? [sourceModule.metadata.source] : [],
    ),
  };

  const mergedExternal = merged?.external && typeof merged.external === "object" ? merged.external : {};
  const existingSourceUnits = Array.isArray(mergedExternal.mergedSourceUnitIds) ? mergedExternal.mergedSourceUnitIds : [];

  merged.external = {
    ...mergedExternal,
    mergedSourceUnitIds: mergeUniqueStrings(existingSourceUnits, sourceUnitId ? [sourceUnitId] : []),
    externalMergeLastAt: new Date().toISOString(),
  };

  return { module: merged, mergeMeta };
}

function ensureModuleLessonTypeCoverage({ lessons, moduleId, moduleTitle, subjectLabel, gradeBand }) {
  const requiredTypes = ["video", "interactive", "quiz"];
  const existingLessonIds = new Set(lessons.map((lesson) => lesson.id));
  const existingTypes = new Set(lessons.map((lesson) => lesson.type));
  const nextLessons = [...lessons];

  for (const lessonType of requiredTypes) {
    if (existingTypes.has(lessonType)) continue;

    const lessonId = makeUniqueId(`${moduleId}-supp-${lessonType}`, existingLessonIds, `${moduleId}-${lessonType}`);
    existingLessonIds.add(lessonId);
    const lessonTitle = `${moduleTitle} Supplemental ${lessonType === "quiz" ? "Check" : lessonType === "interactive" ? "Practice" : "Overview"}`;
    const objectives = [
      `Build baseline confidence in ${moduleTitle}.`,
      `Apply one core ${subjectLabel} strategy for ${gradeBand}.`,
    ];

    nextLessons.push({
      id: lessonId,
      title: lessonTitle,
      type: lessonType,
      duration: lessonType === "quiz" ? 10 : 8,
      questions: lessonType === "quiz" ? buildQuizQuestions(moduleId, lessonId, lessonTitle, objectives, subjectLabel, nextLessons.length + 1) : undefined,
      interactiveActivities: buildGeneratedInteractiveActivities(lessonId, lessonTitle, lessonType, objectives, subjectLabel, nextLessons.length + 1),
      quizBlueprint: buildGeneratedQuizBlueprint(lessonType, 3, 10),
      learningAids: [buildFallbackAid(lessonId, lessonTitle, lessonType)],
      metadata: lessonType === "interactive"
        ? { prompts: objectives }
        : { generatedSupplement: true },
      objectives,
      chunks: [
        { id: `${lessonId}-chunk-intro`, title: `${lessonTitle} Overview`, content: `Reinforce core ${subjectLabel} concepts in ${moduleTitle}.`, kind: "concept" },
        { id: `${lessonId}-chunk-recap`, title: "Quick Recap", content: "Summarize one key idea and plan one next step.", kind: "recap" },
      ],
      flashcards: [
        { id: `${lessonId}-card-1`, front: `What is one key idea in ${moduleTitle}?`, back: objectives[0] },
        { id: `${lessonId}-card-2`, front: `How can you practice this idea?`, back: objectives[1] },
      ],
      prompts: {
        seedanceVideo: `Create a child-safe educational lesson video about \"${lessonTitle}\" in \"${subjectLabel}\" for grade band \"${gradeBand}\".`,
        seedanceAnimation: `Create an 8-12 second looping concept animation for \"${lessonTitle}\" (${subjectLabel}, grade band ${gradeBand}).`,
        lessonImage: `Create a clean educational illustration for \"${lessonTitle}\" in ${subjectLabel}.`,
        researchAgent: `Produce standards-aligned lesson expansion notes for \"${lessonTitle}\" (${subjectLabel}, grade band ${gradeBand}).`,
      },
      external: {
        sourceLessonId: lessonId,
        order: nextLessons.length + 1,
        generatedSupplement: true,
      },
    });

    existingTypes.add(lessonType);
  }

  return nextLessons;
}

function toTitleCaseWords(value) {
  return String(value ?? "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function objectivePoolFromLessons(lessons, moduleTitle, subjectLabel) {
  const pool = new Set();
  for (const lesson of lessons) {
    const objectives = Array.isArray(lesson?.objectives) ? lesson.objectives : [];
    for (const objective of objectives) {
      const text = String(objective ?? "").trim();
      if (text.length > 0) pool.add(text);
    }
  }

  if (pool.size === 0) {
    pool.add(`Understand one core idea from ${moduleTitle}.`);
    pool.add(`Apply a ${subjectLabel} example from the lesson.`);
    pool.add("Explain one thing you learned to a caregiver.");
  }

  return Array.from(pool);
}

function cleanObjectiveLabel(value, fallback) {
  const text = String(value ?? fallback ?? "")
    .replace(/\.$/, "")
    .trim();
  return text.length > 0 ? text : fallback;
}

function lessonTypeForIndex(index) {
  const order = ["video", "interactive", "quiz"];
  return order[index % order.length];
}

function buildSupplementLesson({
  moduleId,
  moduleTitle,
  subjectLabel,
  gradeBand,
  sequence,
  lessonType,
  objectiveSeed,
  existingLessonIds,
}) {
  const lessonId = makeUniqueId(
    `${moduleId}-supp-seq-${String(sequence).padStart(2, "0")}`,
    existingLessonIds,
    `${moduleId}-supp-${lessonType}`,
  );
  const profile = subjectProfileForLesson(subjectLabel);
  const objectiveLabel = cleanObjectiveLabel(objectiveSeed, `${subjectLabel} core concept`);
  const focusTerm = cleanObjectiveLabel(
    pickBySequence(profile.focusTerms, sequence, objectiveLabel),
    objectiveLabel,
  );
  const lessonModeLabel =
    lessonType === "video"
      ? "Concept Walkthrough"
      : lessonType === "interactive"
        ? "Guided Practice Lab"
        : "Checkpoint Quiz";
  const lessonTitle = `${moduleTitle} ${lessonModeLabel} ${sequence}: ${toTitleCaseWords(focusTerm)}`;
  const objectives = [
    `Explain ${focusTerm} using age-appropriate vocabulary.`,
    `Apply ${focusTerm} in one guided ${subjectLabel} task.`,
    "Identify one correction step for the next attempt.",
  ];
  const contextFrame = pickBySequence(
    profile.contextFrames,
    sequence,
    `Learn the key idea behind ${focusTerm} through a simple ${subjectLabel} example.`,
  );
  const practiceFrame = pickBySequence(
    profile.practiceFrames,
    sequence,
    `Practice ${focusTerm} with one short step-by-step activity.`,
  );
  const recapFrame = `Review ${focusTerm}, then set one clear improvement target.`;

  return {
    id: lessonId,
    title: lessonTitle,
    type: lessonType,
    duration: lessonType === "quiz" ? 10 : 8,
    questions: lessonType === "quiz" ? buildQuizQuestions(moduleId, lessonId, lessonTitle, objectives, subjectLabel, sequence) : undefined,
    interactiveActivities: buildGeneratedInteractiveActivities(lessonId, lessonTitle, lessonType, objectives, subjectLabel, sequence),
    quizBlueprint: buildGeneratedQuizBlueprint(lessonType, 3, Math.max(8, lessonType === "quiz" ? 10 : 8)),
    learningAids: [buildFallbackAid(lessonId, lessonTitle, lessonType)],
    metadata:
      lessonType === "interactive"
        ? { prompts: objectives, generatedSupplement: true }
        : { generatedSupplement: true },
    objectives,
    chunks: [
      {
        id: `${lessonId}-chunk-intro`,
        title: `${toTitleCaseWords(focusTerm)} Intro`,
        content: contextFrame,
        kind: "concept",
      },
      {
        id: `${lessonId}-chunk-practice`,
        title: "Guided Practice",
        content: practiceFrame,
        kind: "practice",
      },
      {
        id: `${lessonId}-chunk-check`,
        title: "Common Pitfall Check",
        content: `Watch for one common error while applying ${focusTerm}, then correct it with evidence.`,
        kind: "analysis",
      },
      {
        id: `${lessonId}-chunk-recap`,
        title: "Quick Recap",
        content: recapFrame,
        kind: "recap",
      },
    ],
    flashcards: [
      { id: `${lessonId}-card-1`, front: `What is ${focusTerm}?`, back: `It is a key ${subjectLabel} idea in ${moduleTitle}.` },
      { id: `${lessonId}-card-2`, front: `How can I practice ${focusTerm}?`, back: practiceFrame },
      { id: `${lessonId}-card-3`, front: "What should I review next?", back: recapFrame },
      { id: `${lessonId}-card-4`, front: "How do I avoid common mistakes?", back: "Use a short checklist before final answers and verify one step." },
    ],
    prompts: {
      seedanceVideo: `Create a child-safe educational lesson video about \"${lessonTitle}\" in \"${subjectLabel}\" for grade band \"${gradeBand}\".`,
      seedanceAnimation: `Create an 8-12 second looping concept animation for \"${lessonTitle}\" (${subjectLabel}, grade band ${gradeBand}).`,
      lessonImage: `Create a clean educational illustration for \"${lessonTitle}\" in ${subjectLabel}.`,
      researchAgent: `Produce standards-aligned lesson expansion notes for \"${lessonTitle}\" (${subjectLabel}, grade band ${gradeBand}).`,
    },
    external: {
      sourceLessonId: `${moduleId}-generated-cycle-${sequence}`,
      order: sequence,
      generatedSupplement: true,
    },
  };
}

function ensureMinimumLessonDepth({
  lessons,
  moduleId,
  moduleTitle,
  subjectLabel,
  gradeBand,
  minimumLessonCount = 6,
}) {
  if (!Array.isArray(lessons)) return lessons;
  const nextLessons = [...lessons];
  if (nextLessons.length >= minimumLessonCount) return nextLessons;

  const existingLessonIds = new Set(nextLessons.map((lesson) => lesson.id));
  const objectiveSeeds = objectivePoolFromLessons(nextLessons, moduleTitle, subjectLabel);

  let sequence = nextLessons.length + 1;
  while (nextLessons.length < minimumLessonCount) {
    const objectiveSeed = objectiveSeeds[(sequence - 1) % objectiveSeeds.length];
    const lessonType = lessonTypeForIndex(sequence - 1);

    nextLessons.push(
      buildSupplementLesson({
        moduleId,
        moduleTitle,
        subjectLabel,
        gradeBand,
        sequence,
        lessonType,
        objectiveSeed,
        existingLessonIds,
      }),
    );
    sequence += 1;
  }

  return nextLessons;
}

function convertUnitToModule({ unit, sourcePath, subjectMap, gradeBandMap, locales, existingIds, existingBySourceUnitId }) {
  const sourceUnitId = resolveSourceUnitId(unit);
  const sourceUnitIdCanonical = canonicalizeSourceUnitId(sourceUnitId);
  const subjectId = unit.subject_id ?? unit.subjectId ?? "";
  const gradeBandId = unit.grade_band_id ?? unit.gradeBandId ?? "mixed";
  const moduleId = resolveModuleId(sourceUnitId, existingIds, existingBySourceUnitId);
  const subjectLabel = subjectMap.get(subjectId) || "General Studies";
  const gradeBand = String(gradeBandId);
  const moduleTitle =
    pickLocalizedText(unit.title) ||
    pickLocalizedText(unit.name) ||
    sourceUnitId;
  const ages = gradeBandMap.get(gradeBand) || {};
  const lessonsInput = Array.isArray(unit.lessons)
    ? unit.lessons
    : Array.isArray(unit.lessonItems)
      ? unit.lessonItems
      : [];
  const lessonDuration = typeof ages.sessionMinutesAvg === "number" ? ages.sessionMinutesAvg : 12;

  const lessons = lessonsInput.map((lessonInput, index) => {
    const sourceLessonId = String(
      lessonInput.lesson_id ?? lessonInput.lessonId ?? lessonInput.id ?? `${moduleId}-l${String(index + 1).padStart(2, "0")}`,
    );
    const lessonId = slugify(sourceLessonId);
    const baseLessonTitle =
      pickLocalizedText(lessonInput.concept) ||
      pickLocalizedText(lessonInput.title) ||
      pickLocalizedText(lessonInput.name) ||
      `Lesson ${index + 1}`;
    const isJsxImportedUnit = String(unit?.source_format ?? unit?.sourceFormat ?? "").toLowerCase().includes("jsx");
    const isSeedSampleUnit = sourcePath.toLowerCase().includes("curriculum_sample_data.json");
    const lessonTitle = isJsxImportedUnit
      ? `${baseLessonTitle} (${String(gradeBand).toUpperCase()})`
      : isSeedSampleUnit
        ? `${baseLessonTitle} (External)`
        : baseLessonTitle;
    const explicitType =
      typeof lessonInput.type === "string" && lessonInput.type.trim()
        ? lessonInput.type.trim().toLowerCase()
        : "";
    const patternedType = index % 3 === 0 ? "video" : index % 3 === 1 ? "interactive" : "quiz";
    const lessonType = ["video", "interactive", "quiz"].includes(explicitType)
      ? explicitType
      : patternedType;
    const objectives = deriveObjectivesFromLessonInput(lessonInput);
    const standardsCodes = Array.isArray(lessonInput.objectives)
      ? lessonInput.objectives.flatMap((entry) => (Array.isArray(entry?.standards_codes) ? entry.standards_codes.filter((value) => typeof value === "string") : []))
      : [];
    const externalQuestions =
      lessonType === "quiz"
        ? mapExternalQuizQuestions(lessonInput, moduleId, lessonId, lessonTitle, objectives, subjectLabel, index + 1)
        : undefined;
    const externalFlashcards = mapExternalFlashcards(lessonInput, lessonId, lessonTitle, objectives);
    const externalChunks = mapExternalChunks(lessonInput, lessonId, lessonTitle);
    const providedDragDropActivities = buildInteractiveActivitiesFromDragDrop(lessonInput, lessonId, lessonTitle);
    const interactiveActivities =
      providedDragDropActivities ??
      buildGeneratedInteractiveActivities(lessonId, lessonTitle, lessonType, objectives, subjectLabel, index + 1);
    const providedVideoPrompt = pickLocalizedText(lessonInput.video_prompt ?? lessonInput.videoPrompt);
    const providedAnimationPrompt = pickLocalizedText(lessonInput.animation_prompt ?? lessonInput.animPrompt ?? lessonInput.animationPrompt);
    const providedImagePrompt = pickLocalizedText(lessonInput.image_prompt ?? lessonInput.imagePrompt);
    const providedResearchPrompt = pickLocalizedText(lessonInput.research_prompt ?? lessonInput.researchPrompt);
    const questionCount = Array.isArray(externalQuestions) ? externalQuestions.length : 0;
    const providedQuizBlueprint = lessonInput?.quizBlueprint && typeof lessonInput.quizBlueprint === "object"
      ? cloneJson(lessonInput.quizBlueprint)
      : undefined;
    const quizBlueprint = providedQuizBlueprint ?? buildGeneratedQuizBlueprint(
      lessonType,
      questionCount > 0 ? questionCount : 3,
      Math.max(8, Math.round(lessonDuration * 0.9)),
    );
    const metadata = {
      ...(lessonType === "interactive"
        ? {
            prompts:
              objectives.length > 0
                ? objectives.slice(0, 3)
                : [`Summarize ${lessonTitle} in your own words.`, `Apply ${lessonTitle} in one example.`, "Name one thing you want to review again."],
          }
        : {}),
      ...(lessonInput?.metadata && typeof lessonInput.metadata === "object" ? cloneJson(lessonInput.metadata) : {}),
    };
    const metadataValue = Object.keys(metadata).length > 0 ? metadata : undefined;

    return {
      id: lessonId,
      title: lessonTitle,
      type: lessonType,
      duration: lessonDuration,
      questions: lessonType === "quiz" ? externalQuestions : undefined,
      interactiveActivities,
      quizBlueprint,
      learningAids: [buildFallbackAid(lessonId, lessonTitle, lessonType)],
      metadata: metadataValue,
      objectives: objectives.length > 0 ? objectives : undefined,
      standardsCodes: standardsCodes.length > 0 ? standardsCodes : undefined,
      chunks: externalChunks,
      flashcards: externalFlashcards,
      prompts: {
        seedanceVideo: providedVideoPrompt || `Create a child-safe educational lesson video about \"${lessonTitle}\" in \"${subjectLabel}\" for grade band \"${gradeBand}\".`,
        seedanceAnimation: providedAnimationPrompt || `Create an 8-12 second looping concept animation for \"${lessonTitle}\" (${subjectLabel}, grade band ${gradeBand}).`,
        lessonImage: providedImagePrompt || `Create a clean educational illustration for \"${lessonTitle}\" in ${subjectLabel}.`,
        researchAgent: providedResearchPrompt || `Produce standards-aligned lesson expansion notes for \"${lessonTitle}\" (${subjectLabel}, grade band ${gradeBand}).`,
      },
      localized: {
        title: toLocalizedObject(lessonInput.concept) ?? toLocalizedObject(lessonInput.title),
        concept: toLocalizedObject(lessonInput.concept) ?? toLocalizedObject(lessonInput.title),
      },
      external: { sourceLessonId, order: lessonInput.order ?? lessonInput.lessonOrder ?? index + 1 },
    };
  });

  const normalizedLessons = ensureModuleLessonTypeCoverage({
    lessons,
    moduleId,
    moduleTitle,
    subjectLabel,
    gradeBand,
  });

  const enrichedLessons = ensureMinimumLessonDepth({
    lessons: normalizedLessons,
    moduleId,
    moduleTitle,
    subjectLabel,
    gradeBand,
    minimumLessonCount: 15,
  });

  const objectivePool = enrichedLessons.flatMap((lesson) => lesson.objectives ?? []);
  const uniqueObjectives = Array.from(new Set(objectivePool)).slice(0, 8);

  return {
    id: moduleId,
    title: moduleTitle,
    description:
      pickLocalizedText(unit.description) ||
      pickLocalizedText(unit.summary) ||
      `Imported curriculum unit ${sourceUnitId} for ${subjectLabel}.`,
    subject: subjectLabel,
    tags: ["external-ai", "curriculum-import", `grade-${slugify(gradeBand)}`],
    minAge: ages.minAge,
    maxAge: ages.maxAge,
    moduleVersion: "external-1.0.0",
    version: "external-1.0.0",
    difficultyBand: gradeBand.toLowerCase().includes("prek") ? "beginner" : gradeBand.includes("6-8") ? "intermediate" : "advanced",
    localeSupport: locales.slice(0, 12),
    thumbnail: "/placeholders/lesson-robot.svg",
    learningObjectives: uniqueObjectives.length > 0 ? uniqueObjectives : undefined,
    gradeBand,
    standardsMappings: Array.isArray(unit.standards_codes ?? unit.standardsCodes)
      ? (unit.standards_codes ?? unit.standardsCodes).filter((entry) => entry && typeof (entry.framework_id ?? entry.frameworkId) === "string" && typeof entry.code === "string").map((entry) => ({
          frameworkId: entry.framework_id ?? entry.frameworkId,
          code: entry.code,
          description: typeof entry.description === "string" ? entry.description : undefined,
          url: typeof entry.url === "string" ? entry.url : undefined,
        }))
      : undefined,
    metadata: {
      source: sourcePath,
      sourceUnitId,
      sourceUnitIdCanonical,
      importedAt: new Date().toISOString(),
    },
    external: {
      unitOrder: unit.unit_order ?? unit.unitOrder ?? null,
      estimatedHours: unit.estimated_hours ?? unit.estimatedHours ?? null,
      prerequisites: Array.isArray(unit.prerequisites) ? unit.prerequisites : [],
    },
    lessons: enrichedLessons,
  };
}

function buildModuleSource(moduleId, moduleObject) {
  return `import type { LearningModule } from \"@/lib/modules/types\";\n\nexport const ${toConstName(moduleId)}: LearningModule = ${JSON.stringify(moduleObject, null, 2)};\n`;
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# External Curriculum Import Report", "", `Generated: ${report.generatedAt}`, `Mode: ${report.mode}`, `Sources scanned: ${report.totals.sourcesScanned}`, "", "## Summary", "");
  lines.push(`- Units discovered: ${report.totals.unitsDiscovered}`);
  lines.push(`- Units processed: ${report.totals.unitsProcessed}`);
  lines.push(`- Modules generated: ${report.totals.modulesGenerated}`);
  lines.push(`- Files written: ${report.totals.filesWritten}`);
  lines.push(`- Files skipped: ${report.totals.filesSkipped}`);
  lines.push(`- Existing modules merged: ${report.totals.modulesMerged}`);
  lines.push(`- Lessons merged into existing modules: ${report.totals.lessonsMergedAdded}`);
  lines.push(`- Duplicate lessons skipped during merge: ${report.totals.lessonsMergedSkipped}`);
  lines.push(`- Low-confidence merge deferrals: ${report.totals.lowConfidenceDeferrals}`, "", "## Modules", "");

  if (report.modules.length === 0) {
    lines.push("- None");
  } else {
    for (const item of report.modules) {
      const mergeDetail =
        typeof item.lessonsAdded === "number"
          ? `; lessons +${item.lessonsAdded}, skipped ${item.lessonsSkipped ?? 0}`
          : "";
      const scoreDetail =
        typeof item.mergeScore === "number"
          ? `; score ${item.mergeScore}/${item.mergeThreshold ?? "n/a"}`
          : "";
      const targetDetail = item.targetModuleId && item.targetModuleId !== item.moduleId ? ` -> ${item.targetModuleId}` : "";
      lines.push(`- ${item.moduleId}${targetDetail} -> ${item.fileName} (${item.status}${mergeDetail}${scoreDetail})`);
    }
  }

  return lines.join("\n");
}

function runModulesSync() {
  const result = spawnSync(process.execPath, [path.resolve("scripts/sync-modules.mjs")], {
    cwd: projectRoot,
    stdio: "inherit",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error("Failed to run modules:sync after external curriculum import.");
  }
}
function main() {
  const options = parseArgs(process.argv.slice(2));
  const sourceFiles = discoverSources(options);
  if (sourceFiles.length === 0) throw new Error("No source curriculum files found.");

  const existingModules = readCatalogModules();
  const existingIds = new Set(existingModules.map((entry) => entry.module.id));
  const moduleIndex = buildModuleIndex(existingModules);

  const modules = [];
  const sources = [];
  let remainingLimit = options.limit;
  let discoveredUnits = 0;

  for (const sourceFile of sourceFiles) {
    const sourcePath = path.relative(projectRoot, sourceFile).replace(/\\/g, "/");
    const parsedSource = parsePayloadFromSourceFile(sourceFile);
    if (!parsedSource?.payload) {
      sources.push({ path: sourcePath, units: 0, status: parsedSource?.status ?? "unparsed_source" });
      continue;
    }

    const payload = parsedSource.payload;
    const units = extractUnits(payload);
    discoveredUnits += units.length;
    if (units.length === 0) {
      sources.push({ path: sourcePath, units: 0, status: parsedSource.status === "processed_json" ? "no_units" : `${parsedSource.status}_no_units` });
      continue;
    }

    const subjectRows = extractSubjects(payload).filter((entry) => typeof entry?.id === "string");
    const subjectMap = new Map(
      subjectRows.map((entry) => [entry.id, pickLocalizedText(entry.name) || entry.id]),
    );
    const gradeBandRows = extractGradeBands(payload).filter((entry) => typeof entry?.id === "string");
    const gradeBandMap = new Map(
      gradeBandRows.map((entry) => {
        const ageRange = entry?.age_range ?? entry?.ageRange ?? {};
        const pacing = entry?.pacing ?? {};
        const sessionMinutes = pacing?.session_minutes ?? pacing?.sessionMinutes ?? {};
        const minAge = typeof ageRange?.min === "number" ? ageRange.min : undefined;
        const maxAge = typeof ageRange?.max === "number" ? ageRange.max : undefined;
        const mins = typeof sessionMinutes?.min === "number" ? sessionMinutes.min : undefined;
        const maxs = typeof sessionMinutes?.max === "number" ? sessionMinutes.max : undefined;
        const sessionMinutesAvg =
          typeof mins === "number" && typeof maxs === "number"
            ? Math.round((mins + maxs) / 2)
            : undefined;
        return [entry.id, { minAge, maxAge, sessionMinutesAvg }];
      }),
    );
    const locales = extractLocales(payload);

    const selectedUnits = remainingLimit > 0 ? units.slice(0, remainingLimit) : units;
    for (const unit of selectedUnits) {
      const sourceUnitId = resolveSourceUnitId(unit);
      const sourceUnitIdCanonical = canonicalizeSourceUnitId(sourceUnitId);
      const moduleObject = convertUnitToModule({
        unit,
        sourcePath,
        subjectMap,
        gradeBandMap,
        locales,
        existingIds,
        existingBySourceUnitId: moduleIndex.bySourceUnitId,
      });

      const directMatchModuleId =
        moduleIndex.bySourceUnitId.get(sourceUnitIdCanonical) ?? moduleIndex.bySourceUnitId.get(sourceUnitId);
      const directMatchEntry = directMatchModuleId ? moduleIndex.byId.get(directMatchModuleId) : null;
      const mergeCandidate = options.mergeIntoExisting
        ? findMergeTarget(moduleObject, moduleIndex)
        : { target: null, strategy: "merge_disabled", score: null, considered: 0 };
      const targetEntry = directMatchEntry ?? mergeCandidate.target;
      const mergeScore = typeof mergeCandidate.score === "number" ? mergeCandidate.score : null;
      const mergePassesThreshold =
        mergeCandidate.strategy === "source_unit_match" ||
        (typeof mergeScore === "number" && mergeScore >= options.mergeThreshold);

      const shouldReplaceExternal = Boolean(
        directMatchEntry &&
          directMatchEntry.isExternal &&
          String(directMatchEntry.module.id) === String(moduleObject.id),
      );
      const shouldMergeIntoExisting =
        Boolean(targetEntry) &&
        !shouldReplaceExternal &&
        options.mergeIntoExisting &&
        mergePassesThreshold;
      const mergeDeferredLowConfidence =
        Boolean(targetEntry) &&
        !shouldReplaceExternal &&
        options.mergeIntoExisting &&
        !mergePassesThreshold;

      let reportModuleId = moduleObject.id;
      let targetModuleId = moduleObject.id;
      let fileName = `${moduleObject.id}.ts`;
      let filePath = path.join(catalogDir, fileName);
      let status = "planned";
      let lessonsAdded;
      let lessonsSkipped;
      let mergeStrategy = mergeCandidate.strategy;
      let mergeThreshold = options.mergeThreshold;

      if (shouldReplaceExternal && directMatchEntry) {
        reportModuleId = moduleObject.id;
        targetModuleId = directMatchEntry.module.id;
        fileName = directMatchEntry.fileName;
        filePath = directMatchEntry.filePath;
        mergeStrategy = "source_unit_external_replace";
        status = options.apply ? "updated_existing_external" : "planned_update_existing_external";

        if (options.apply) {
          fs.writeFileSync(filePath, buildModuleSource(moduleObject.id, moduleObject));
          directMatchEntry.module = moduleObject;
        }
      } else if (shouldMergeIntoExisting && targetEntry) {
        const merged = mergeModuleContent(targetEntry.module, moduleObject);
        reportModuleId = moduleObject.id;
        targetModuleId = targetEntry.module.id;
        fileName = targetEntry.fileName;
        filePath = targetEntry.filePath;
        lessonsAdded = merged.mergeMeta.lessonsAdded;
        lessonsSkipped = merged.mergeMeta.lessonsSkipped;
        status = options.apply ? "merged_existing" : "planned_merge_existing";

        if (options.apply) {
          fs.writeFileSync(filePath, buildModuleSource(targetEntry.module.id, merged.module));
          targetEntry.module = merged.module;
        }
      } else if (options.createExternalWhenNoMatch) {
        const exists = fs.existsSync(filePath);
        mergeStrategy = mergeDeferredLowConfidence
          ? `low_confidence_${mergeCandidate.strategy}`
          : "create_external";
        mergeThreshold = mergeDeferredLowConfidence ? options.mergeThreshold : mergeThreshold;
        if (options.apply) {
          if (options.overwrite || !exists) {
            fs.writeFileSync(filePath, buildModuleSource(moduleObject.id, moduleObject));
            if (mergeDeferredLowConfidence) {
              status = exists ? "overwritten_external_low_confidence" : "created_external_low_confidence";
            } else {
              status = exists ? "overwritten_external" : "created_external";
            }

            const newEntry = {
              fileName,
              filePath,
              exportName: toConstName(moduleObject.id),
              module: moduleObject,
              isExternal: true,
            };
            registerModuleEntry(moduleIndex, newEntry);
            existingIds.add(moduleObject.id);
          } else {
            status = "skipped_existing";
          }
        } else {
          if (mergeDeferredLowConfidence) {
            status = exists ? "planned_existing_external_low_confidence" : "planned_create_external_low_confidence";
          } else {
            status = exists ? "planned_existing_external" : "planned_create_external";
          }
        }
      } else {
        mergeStrategy = mergeDeferredLowConfidence
          ? `low_confidence_${mergeCandidate.strategy}`
          : "no_target";
        status = mergeDeferredLowConfidence ? "skipped_low_confidence" : "skipped_no_merge_target";
      }

      moduleIndex.bySourceUnitId.set(sourceUnitId, targetModuleId);
      moduleIndex.bySourceUnitId.set(sourceUnitIdCanonical, targetModuleId);

      modules.push({
        moduleId: reportModuleId,
        targetModuleId,
        unitId: sourceUnitId,
        fileName,
        sourcePath,
        filePath: path.relative(projectRoot, filePath).replace(/\\/g, "/"),
        lessonCount: shouldMergeIntoExisting && typeof lessonsAdded === "number" ? lessonsAdded : Array.isArray(moduleObject.lessons) ? moduleObject.lessons.length : 0,
        status,
        mergeStrategy,
        mergeScore,
        mergeThreshold,
        mergeCandidatesConsidered: mergeCandidate.considered,
        lessonsAdded,
        lessonsSkipped,
      });

      if (remainingLimit > 0) remainingLimit -= 1;
      if (remainingLimit === 0 && options.limit > 0) break;
    }

    sources.push({ path: sourcePath, units: units.length, status: parsedSource.status ?? "processed" });
    if (remainingLimit === 0 && options.limit > 0) break;
  }

  const report = {
    generatedAt: new Date().toISOString(),
    mode: options.apply ? "apply" : "dry-run",
    options: {
      source: path.relative(projectRoot, options.source).replace(/\\/g, "/"),
      sourceDir: options.sourceDir ? path.relative(projectRoot, options.sourceDir).replace(/\\/g, "/") : "",
      overwrite: options.overwrite,
      limit: options.limit,
      mergeIntoExisting: options.mergeIntoExisting,
      createExternalWhenNoMatch: options.createExternalWhenNoMatch,
      syncRegistry: options.syncRegistry,
      mergeThreshold: options.mergeThreshold,
    },
    totals: {
      sourcesScanned: sources.length,
      unitsDiscovered: discoveredUnits,
      unitsProcessed: modules.length,
      modulesGenerated: modules.length,
      filesWritten: modules.filter((entry) =>
        [
          "created_external",
          "overwritten_external",
          "created_external_low_confidence",
          "overwritten_external_low_confidence",
          "updated_existing_external",
          "merged_existing",
        ].includes(entry.status),
      ).length,
      filesSkipped: modules.filter((entry) => ["skipped_existing", "skipped_no_merge_target", "skipped_low_confidence"].includes(entry.status)).length,
      modulesMerged: modules.filter((entry) => ["merged_existing", "planned_merge_existing"].includes(entry.status)).length,
      lessonsMergedAdded: modules.reduce((total, entry) => total + (typeof entry.lessonsAdded === "number" ? entry.lessonsAdded : 0), 0),
      lessonsMergedSkipped: modules.reduce((total, entry) => total + (typeof entry.lessonsSkipped === "number" ? entry.lessonsSkipped : 0), 0),
      lowConfidenceDeferrals: modules.filter((entry) => String(entry.mergeStrategy ?? "").startsWith("low_confidence_")).length,
    },
    sources,
    modules,
  };

  fs.mkdirSync(path.dirname(outReportJson), { recursive: true });
  fs.writeFileSync(outReportJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outReportMd, toMarkdown(report));

  console.log(`Wrote ${outReportJson}`);
  console.log(`Wrote ${outReportMd}`);
  console.log(`Sources scanned: ${report.totals.sourcesScanned}`);
  console.log(`Units discovered: ${report.totals.unitsDiscovered}`);
  console.log(`Units processed: ${report.totals.unitsProcessed}`);
  console.log(`Files written: ${report.totals.filesWritten}`);
  console.log(`Files skipped: ${report.totals.filesSkipped}`);
  console.log(`Modules merged: ${report.totals.modulesMerged}`);
  console.log(`Lessons merged +${report.totals.lessonsMergedAdded}; skipped ${report.totals.lessonsMergedSkipped}`);
  console.log(`Low-confidence deferrals: ${report.totals.lowConfidenceDeferrals}`);

  if (options.apply && options.syncRegistry) {
    runModulesSync();
    console.log("Module registry sync complete.");
  }
}

main();

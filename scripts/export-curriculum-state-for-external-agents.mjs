import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const projectRoot = process.cwd();
const catalogDir = path.resolve("src/lib/modules/catalog");
const packageJsonPath = path.resolve("package.json");
const externalAgentsDir = path.resolve(projectRoot, "..", "External_AI_Agents");
const outputJsonPath = path.resolve("public/CURRICULUM-STATE-FOR-EXTERNAL-AGENTS.json");
const outputMdPath = path.resolve("public/CURRICULUM-STATE-FOR-EXTERNAL-AGENTS.md");

function readJsonSafe(filePath, fallback = null) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function loadModuleFromFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const exportMatch = source.match(/export const\s+([A-Za-z0-9_]+)\s*:\s*LearningModule\s*=/);
  if (!exportMatch) {
    throw new Error(`Cannot parse module export in ${filePath}`);
  }

  const exportName = exportMatch[1];
  const transformed = source
    .replace(/^import\s+type\s+\{[^}]+\}\s+from\s+"[^"]+";\s*$/gm, "")
    .replace(
      new RegExp(`export const\\s+${exportName}\\s*:\\s*LearningModule\\s*=`, "m"),
      `const ${exportName} =`,
    )
    .concat(`\nmodule.exports = ${exportName};\n`);

  const context = vm.createContext({ module: { exports: {} }, exports: {} });
  new vm.Script(transformed, { filename: filePath }).runInContext(context);
  return context.module.exports;
}

function loadCatalogModules() {
  if (!fs.existsSync(catalogDir)) return [];

  return fs
    .readdirSync(catalogDir)
    .filter((name) => name.endsWith(".ts"))
    .filter((name) => !name.endsWith(".example.ts"))
    .sort()
    .map((fileName) => {
      const filePath = path.join(catalogDir, fileName);
      const moduleData = loadModuleFromFile(filePath);
      return {
        fileName,
        module: moduleData,
      };
    });
}

function inferGradeBand(moduleEntry) {
  const moduleId = String(moduleEntry.id ?? "").toLowerCase();
  const tags = Array.isArray(moduleEntry.tags)
    ? moduleEntry.tags.map((tag) => String(tag).toLowerCase())
    : [];

  if (moduleId.includes("pre-k") || tags.includes("pre-k")) return "preK";
  if (typeof moduleEntry.minAge === "number" && moduleEntry.minAge <= 5) return "preK";
  if (typeof moduleEntry.maxAge === "number" && moduleEntry.maxAge <= 8) return "K2";
  if (typeof moduleEntry.minAge === "number" && moduleEntry.minAge >= 8 && moduleEntry.maxAge <= 11) return "3-5";
  if (typeof moduleEntry.minAge === "number" && moduleEntry.minAge >= 11 && moduleEntry.maxAge <= 14) return "6-8";
  if (typeof moduleEntry.minAge === "number" && moduleEntry.minAge >= 14 && moduleEntry.maxAge <= 16) return "9-10";
  if (typeof moduleEntry.minAge === "number" && moduleEntry.minAge >= 16) return "11-12";
  return "mixed";
}

function normalizeCurrentModules(rawModules) {
  return rawModules.map(({ fileName, module }) => {
    const lessons = Array.isArray(module.lessons) ? module.lessons : [];
    const lessonTypeBreakdown = lessons.reduce((acc, lesson) => {
      const key = String(lesson.type ?? "unknown");
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    }, {});

    return {
      fileName,
      id: module.id,
      title: module.title,
      description: module.description,
      subject: module.subject,
      gradeBandHint: inferGradeBand(module),
      minAge: module.minAge ?? null,
      maxAge: module.maxAge ?? null,
      tags: Array.isArray(module.tags) ? module.tags : [],
      localeSupport: Array.isArray(module.localeSupport) ? module.localeSupport : [],
      lessonCount: lessons.length,
      lessonTypeBreakdown,
      lessons,
    };
  });
}

function buildSummary(modules) {
  const bySubject = {};
  const byGradeBand = {};
  const byLessonType = {};
  let totalLessons = 0;

  for (const entry of modules) {
    bySubject[entry.subject] = (bySubject[entry.subject] ?? 0) + 1;
    byGradeBand[entry.gradeBandHint] = (byGradeBand[entry.gradeBandHint] ?? 0) + 1;
    totalLessons += entry.lessonCount;
    for (const [lessonType, count] of Object.entries(entry.lessonTypeBreakdown)) {
      byLessonType[lessonType] = (byLessonType[lessonType] ?? 0) + count;
    }
  }

  return {
    moduleCount: modules.length,
    lessonCount: totalLessons,
    bySubject,
    byGradeBand,
    byLessonType,
  };
}

function buildContributionContract() {
  return {
    format: "JSON",
    encoding: "UTF-8",
    topLevel: {
      version: "string",
      modules: "LearningModule[]",
      notes: "string[]",
    },
    learningModuleShape: {
      id: "string (kebab-case, unique)",
      title: "string",
      description: "string",
      subject: "string",
      tags: "string[]",
      minAge: "number",
      maxAge: "number",
      localeSupport: "string[]",
      lessons: "Lesson[] (minimum 10 recommended per module)",
    },
    lessonShape: {
      id: "string (module-id-lNN pattern recommended)",
      title: "string",
      type: "video | interactive | quiz",
      duration: "number (minutes)",
      metadata: "object (optional, must stay JSON-serializable)",
      learningAids: "LearningAid[] (optional)",
      questions: "Question[] required for type=quiz",
    },
    questionShape: {
      id: "string",
      text: "string",
      skillId: "string",
      options: "array of >=2 options",
      correctOptionId: "string matching option id",
      hint: "string (optional)",
      explanation: "string (optional)",
    },
    contentQualityExpectations: [
      "No placeholder options like 'Option A/B/C'.",
      "Age-appropriate language and culturally neutral examples.",
      "At least one learning aid per lesson when possible.",
      "Include en and es text variants where possible in metadata or companion fields.",
      "Include media prompts (video/animation/image) in lesson metadata when available.",
    ],
    techStackTargets: {
      frontend: "Next.js 16 App Router + React 19 + TypeScript",
      styling: "Tailwind CSS v4 + CSS variables",
      backend: "Supabase Postgres + Row Level Security + Next.js route handlers",
      analytics: "Mixpanel + internal progress/event APIs",
      mediaPipeline: "Seedance-style prompt packs + admin queue + background processors",
    },
  };
}

function buildExternalPrompts() {
  const curriculumExpansionPrompt = [
    "You are contributing curriculum content to an existing Next.js + TypeScript + Supabase app.",
    "Expand the provided curriculum state using the required JSON contract exactly.",
    "Deliver complete module payloads with realistic lesson content (not placeholders).",
    "Prioritize balanced coverage across all subjects and grade bands.",
    "For each lesson include actionable instructional content, quality quiz items, and media prompt metadata.",
    "Ensure multilingual readiness: include English and Spanish content variants where feasible.",
    "Return valid JSON only. Do not include markdown wrappers.",
  ].join(" ");

  const organicThemeResearchPrompt = [
    "Research modern educational UI themes where visual elements blend organically and transitions feel natural.",
    "Context: Existing app keeps current visual language, but needs a more flowing, living, non-rigid design system.",
    "Deliver:",
    "1) 8-12 concrete visual directions with rationale and references,",
    "2) typography, color, spacing, and motion tokens for each direction,",
    "3) accessibility implications (contrast, motion sensitivity, readability),",
    "4) implementation notes for Next.js + Tailwind CSS variable-driven theming,",
    "5) sample CSS variable palettes and component interaction patterns.",
    "Avoid dark-only or purple-heavy defaults. Keep recommendations production-implementable.",
  ].join(" ");

  return {
    curriculumExpansionPrompt,
    organicThemeResearchPrompt,
  };
}

function toMarkdown(handoff) {
  const lines = [];
  lines.push("# Curriculum State For External AI Agents");
  lines.push("");
  lines.push(`Generated: ${handoff.generatedAt}`);
  lines.push("");
  lines.push("## Current Snapshot");
  lines.push("");
  lines.push(`- Modules: ${handoff.current.summary.moduleCount}`);
  lines.push(`- Lessons: ${handoff.current.summary.lessonCount}`);
  lines.push("");
  lines.push("### Module Coverage By Subject");
  lines.push("");
  for (const [subject, count] of Object.entries(handoff.current.summary.bySubject)) {
    lines.push(`- ${subject}: ${count}`);
  }
  lines.push("");
  lines.push("### Module Coverage By Grade Band");
  lines.push("");
  for (const [gradeBand, count] of Object.entries(handoff.current.summary.byGradeBand)) {
    lines.push(`- ${gradeBand}: ${count}`);
  }
  lines.push("");
  lines.push("## External Source Merge Context");
  lines.push("");
  lines.push(`- External schema loaded: ${handoff.external.loaded.schema}`);
  lines.push(`- External sample loaded: ${handoff.external.loaded.sample}`);
  lines.push(`- External docs folder: ${handoff.external.path}`);
  lines.push("");
  lines.push("## Required Contribution Contract");
  lines.push("");
  lines.push("```json");
  lines.push(JSON.stringify(handoff.contributionContract, null, 2));
  lines.push("```");
  lines.push("");
  lines.push("## Prompt: Curriculum Expansion");
  lines.push("");
  lines.push("```text");
  lines.push(handoff.externalAgentPrompts.curriculumExpansionPrompt);
  lines.push("```");
  lines.push("");
  lines.push("## Prompt: Organic Theme Research");
  lines.push("");
  lines.push("```text");
  lines.push(handoff.externalAgentPrompts.organicThemeResearchPrompt);
  lines.push("```");
  lines.push("");
  lines.push("## Notes");
  lines.push("");
  lines.push("- Respond in strict JSON for curriculum payloads.");
  lines.push("- Keep data compatible with `src/lib/modules/schema.ts` validation.");
  lines.push("- Use lesson-level realism and avoid placeholders.");
  lines.push("- Prefer content that can run on low-bandwidth/offline-friendly pathways.");
  return lines.join("\n");
}

function main() {
  const packageJson = readJsonSafe(packageJsonPath, {});
  const rawModules = loadCatalogModules();
  const currentModules = normalizeCurrentModules(rawModules);
  const currentSummary = buildSummary(currentModules);

  const externalSchemaPath = path.join(externalAgentsDir, "curriculum_schema.json");
  const externalSamplePath = path.join(externalAgentsDir, "curriculum_sample_data.json");
  const externalSchema = readJsonSafe(externalSchemaPath, null);
  const externalSample = readJsonSafe(externalSamplePath, null);

  const handoff = {
    generatedAt: new Date().toISOString(),
    app: {
      name: packageJson.name ?? "eduforge-web",
      version: packageJson.version ?? "0.0.0",
      private: Boolean(packageJson.private),
      stack: {
        frontend: `Next.js ${packageJson.dependencies?.next ?? "16.x"} + React ${packageJson.dependencies?.react ?? "19.x"} + TypeScript`,
        backend: "Supabase Postgres + RLS + Next.js route handlers",
        styling: "Tailwind CSS v4 + CSS variables",
      },
    },
    current: {
      summary: currentSummary,
      modules: currentModules,
    },
    external: {
      path: path.relative(projectRoot, externalAgentsDir).replace(/\\/g, "/"),
      loaded: {
        schema: Boolean(externalSchema),
        sample: Boolean(externalSample),
      },
      schema: externalSchema,
      sample: externalSample,
    },
    mergeStrategy: {
      mode: "merge-with-existing",
      rules: [
        "Existing modules remain canonical runtime source until reviewed updates are merged.",
        "External contributions should target missing depth/coverage and replace placeholder content.",
        "New external modules should use stable IDs and explicit locale support.",
        "Each merge batch must pass curriculum validation and module sync checks.",
      ],
    },
    contributionContract: buildContributionContract(),
    externalAgentPrompts: buildExternalPrompts(),
  };

  fs.mkdirSync(path.dirname(outputJsonPath), { recursive: true });
  fs.writeFileSync(outputJsonPath, JSON.stringify(handoff, null, 2));
  fs.writeFileSync(outputMdPath, toMarkdown(handoff));

  console.log(`Wrote ${outputJsonPath}`);
  console.log(`Wrote ${outputMdPath}`);
}

main();

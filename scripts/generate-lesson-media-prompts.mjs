import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const catalogDir = path.resolve("src/lib/modules/catalog");
const outJson = path.resolve("public/LESSON-MEDIA-PROMPT-PACK.json");
const outMd = path.resolve("public/LESSON-MEDIA-PROMPT-PACK.md");
const PROMPT_PACK_SCHEMA_VERSION = "media-prompt-pack.v2";
const GENERATED_PROMPT_VERSION = "generated.v1";
const LESSON_PROMPT_FALLBACK_VERSION = "lesson.v1";

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

function buildSeedanceVideoPrompt(learningModule, lesson) {
  const objectives = (learningModule.learningObjectives ?? []).slice(0, 3);
  const animAid = (lesson.learningAids ?? []).find((a) => a.type === "animation");
  const imageAid = (lesson.learningAids ?? []).find((a) => a.type === "image");
  const aidContent = (animAid ?? imageAid)?.content ?? "";
  const moduleDesc = learningModule.description ?? "";
  const minAge = learningModule.minAge ?? 5;
  const maxAge = learningModule.maxAge ?? 18;
  const difficulty = learningModule.difficultyBand ?? "intermediate";
  const durationMins = lesson.duration ?? 10;
  const lessonType = lesson.type ?? "video";

  const parts = [
    `Subject: ${learningModule.subject}. Module: "${learningModule.title}". Lesson: "${lesson.title}".`,
  ];
  if (moduleDesc) parts.push(`Module context: ${moduleDesc}`);
  if (objectives.length > 0) parts.push(`Learning objectives: ${objectives.join("; ")}.`);
  if (aidContent) parts.push(`Visual anchor: ${aidContent}`);
  parts.push(
    `Target age ${minAge}-${maxAge} (${difficulty} level). Lesson type: ${lessonType}. Estimated ${durationMins} minutes.`,
    "Create a child-safe cinematic educational video that DIRECTLY demonstrates the core concept above.",
    "Structure: three acts — attention-grabbing hook tied to the concept, step-by-step concept demonstration with clear visuals, brief memorable recap.",
    "Visual style: photorealistic or bright illustrated; high readability; subject-accurate diagrams, objects, or environments; no generic classroom stock footage.",
    "Camera: gentle purposeful movement, medium framing, close-ups on the key concept object or process.",
    "Duration: 35-55 seconds. Aspect 16:9. 24fps.",
    "Safety: no violence, no fear-based scenes, no stereotypes, no copyrighted characters, appropriate for global K-12 classrooms.",
    "Accessibility: high-contrast objects, unhurried pace, clean uncluttered backgrounds.",
    "End frame: calm celebratory transition inviting the learner to continue.",
  );
  return parts.join(" ");
}

function buildSeedanceAnimationPrompt(learningModule, lesson) {
  const objectives = (learningModule.learningObjectives ?? []).slice(0, 2);
  const animAid = (lesson.learningAids ?? []).find((a) => a.type === "animation");
  const aidTitle = animAid?.title ?? "";
  const aidContent = animAid?.content ?? "";
  const minAge = learningModule.minAge ?? 5;
  const maxAge = learningModule.maxAge ?? 18;

  const parts = [
    `Short concept animation for ${learningModule.subject} — module "${learningModule.title}", lesson "${lesson.title}".`,
  ];
  if (objectives.length > 0) parts.push(`Core concept: ${objectives.join("; ")}.`);
  if (aidTitle) parts.push(`Animation brief: "${aidTitle}".`);
  if (aidContent) parts.push(aidContent);
  parts.push(
    `Target age ${minAge}-${maxAge}.`,
    "Length: 8-12 seconds, seamless loop.",
    "Palette: lively pastels, no dark backgrounds.",
    `Motion design: visually walk through the single key step or transformation in "${lesson.title}" using arrows, highlights, and soft easing — NO generic template loops.`,
    "No text overlays; visual metaphor must be self-explanatory for young learners.",
    "One neutral guiding shape directs the viewer's eye to the key moment.",
    "Classroom-safe: no logos, no copyrighted references, no sensitive content.",
  );
  return parts.join(" ");
}

function buildImagePrompt(learningModule, lesson) {
  const objectives = (learningModule.learningObjectives ?? []).slice(0, 2);
  const imageAid = (lesson.learningAids ?? []).find((a) => a.type === "image");
  const aidTitle = imageAid?.title ?? "";
  const aidContent = imageAid?.content ?? "";
  const minAge = learningModule.minAge ?? 5;
  const maxAge = learningModule.maxAge ?? 18;
  const difficulty = learningModule.difficultyBand ?? "intermediate";
  const moduleDesc = learningModule.description ?? "";

  const parts = [
    `Educational illustration for ${learningModule.subject} — module "${learningModule.title}", lesson "${lesson.title}".`,
  ];
  if (moduleDesc) parts.push(`Module context: ${moduleDesc}`);
  if (objectives.length > 0) parts.push(`Concepts to visually represent: ${objectives.join("; ")}.`);
  if (aidTitle) parts.push(`Image brief: "${aidTitle}".`);
  if (aidContent) parts.push(aidContent);
  parts.push(
    `Target age ${minAge}-${maxAge} (${difficulty}).`,
    "Style: clean digital illustration or photorealistic render; soft shapes; subject-accurate detail; high contrast; minimal clutter.",
    "Composition: one dominant concept visual directly related to the lesson topic, two supporting context details, neutral clean background.",
    "No text overlays, no logos, no copyrighted characters, no sensitive content. Aspect 3:2.",
  );
  return parts.join(" ");
}

function buildResearchAgentPrompt(learningModule, lesson) {
  const minAge = typeof learningModule.minAge === "number" ? learningModule.minAge : "unknown";
  const maxAge = typeof learningModule.maxAge === "number" ? learningModule.maxAge : "unknown";
  const lessonType = lesson.type ?? "unknown";

  return [
    "You are an education research and instructional design agent with web access.",
    `Create a production-ready lesson material brief for module "${learningModule.title}" (${learningModule.id}), lesson "${lesson.title}" (${lesson.id}).`,
    `Subject: ${learningModule.subject}. Target age range: ${minAge}-${maxAge}. Lesson type: ${lessonType}.`,
    "Deliver:",
    "1) standards-aligned objectives (US and one international framework),",
    "2) key misconceptions + remediation strategy,",
    "3) a 40-minute lesson flow with timing,",
    "4) 10 quiz questions with answer key and distractor rationale,",
    "5) teacher facilitation notes,",
    "6) accessibility and multilingual adaptation notes,",
    "7) 3 media storyboard ideas (video, animation, image) tailored for this lesson.",
    "Use current sources and cite references with links.",
  ].join(" ");
}

function readLessonPrompt(lesson, key) {
  const value = lesson?.prompts?.[key];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function readPromptMetaField(lesson, key, field) {
  const containers = [
    lesson?.promptMeta,
    lesson?.promptsMeta,
    lesson?.promptsMetadata,
    lesson?.metadata?.promptMeta,
    lesson?.metadata?.promptsMeta,
  ];

  for (const container of containers) {
    if (!container || typeof container !== "object") continue;
    const perKey = container[key];
    if (!perKey || typeof perKey !== "object") continue;
    const value = perKey[field];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }

  return null;
}

function buildPromptMetaEntry(lesson, key, source) {
  const explicitVersion = readPromptMetaField(lesson, key, "version");
  const explicitQaStatus = readPromptMetaField(lesson, key, "qaStatus");
  return {
    source,
    version:
      explicitVersion ??
      (source === "lesson" ? LESSON_PROMPT_FALLBACK_VERSION : GENERATED_PROMPT_VERSION),
    qaStatus: explicitQaStatus ?? (source === "lesson" ? "reviewed" : "needs_review"),
  };
}

function buildPromptPack() {
  const modules = loadCatalogModules();

  const moduleEntries = modules.map(({ fileName, module: learningModule }) => {
    const lessonEntries = (learningModule.lessons ?? []).map((lesson) => {
      const generatedPrompts = {
        seedanceVideo: buildSeedanceVideoPrompt(learningModule, lesson),
        seedanceAnimation: buildSeedanceAnimationPrompt(learningModule, lesson),
        lessonImage: buildImagePrompt(learningModule, lesson),
        researchAgent: buildResearchAgentPrompt(learningModule, lesson),
      };

      const promptSources = {
        seedanceVideo: "generated",
        seedanceAnimation: "generated",
        lessonImage: "generated",
        researchAgent: "generated",
      };

      const lessonSeedanceVideo = readLessonPrompt(lesson, "seedanceVideo");
      const lessonSeedanceAnimation = readLessonPrompt(lesson, "seedanceAnimation");
      const lessonImage = readLessonPrompt(lesson, "lessonImage");
      const lessonResearch = readLessonPrompt(lesson, "researchAgent");

      if (lessonSeedanceVideo) {
        generatedPrompts.seedanceVideo = lessonSeedanceVideo;
        promptSources.seedanceVideo = "lesson";
      }
      if (lessonSeedanceAnimation) {
        generatedPrompts.seedanceAnimation = lessonSeedanceAnimation;
        promptSources.seedanceAnimation = "lesson";
      }
      if (lessonImage) {
        generatedPrompts.lessonImage = lessonImage;
        promptSources.lessonImage = "lesson";
      }
      if (lessonResearch) {
        generatedPrompts.researchAgent = lessonResearch;
        promptSources.researchAgent = "lesson";
      }

      const promptMeta = {
        seedanceVideo: buildPromptMetaEntry(lesson, "seedanceVideo", promptSources.seedanceVideo),
        seedanceAnimation: buildPromptMetaEntry(lesson, "seedanceAnimation", promptSources.seedanceAnimation),
        lessonImage: buildPromptMetaEntry(lesson, "lessonImage", promptSources.lessonImage),
        researchAgent: buildPromptMetaEntry(lesson, "researchAgent", promptSources.researchAgent),
      };

      return {
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonType: lesson.type,
        durationMinutes: lesson.duration,
        prompts: generatedPrompts,
        promptSources,
        promptMeta,
      };
    });

    return {
      moduleId: learningModule.id,
      moduleTitle: learningModule.title,
      subject: learningModule.subject,
      minAge: learningModule.minAge ?? null,
      maxAge: learningModule.maxAge ?? null,
      fileName,
      lessonCount: lessonEntries.length,
      lessons: lessonEntries,
    };
  });

  const totalLessons = moduleEntries.reduce((sum, moduleEntry) => sum + moduleEntry.lessonCount, 0);
  const totalsByPromptSource = { lesson: 0, generated: 0 };
  const totalsByQaStatus = {};

  for (const moduleEntry of moduleEntries) {
    for (const lessonEntry of moduleEntry.lessons) {
      for (const source of Object.values(lessonEntry.promptSources)) {
        if (source === "lesson") {
          totalsByPromptSource.lesson += 1;
        } else {
          totalsByPromptSource.generated += 1;
        }
      }
      for (const metaEntry of Object.values(lessonEntry.promptMeta ?? {})) {
        const qaStatus = typeof metaEntry?.qaStatus === "string" ? metaEntry.qaStatus : "unknown";
        totalsByQaStatus[qaStatus] = (totalsByQaStatus[qaStatus] ?? 0) + 1;
      }
    }
  }

  return {
    schemaVersion: PROMPT_PACK_SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    sourceDir: path.relative(process.cwd(), catalogDir).replace(/\\/g, "/"),
    totals: {
      modules: moduleEntries.length,
      lessons: totalLessons,
      promptsFromLesson: totalsByPromptSource.lesson,
      promptsGenerated: totalsByPromptSource.generated,
      promptQaStatusCounts: totalsByQaStatus,
    },
    modules: moduleEntries,
  };
}

function toMarkdown(promptPack) {
  const lines = [];
  lines.push("# Lesson Media Prompt Pack");
  lines.push("");
  lines.push(`Schema: ${promptPack.schemaVersion ?? "unknown"}`);
  lines.push("");
  lines.push(`Generated: ${promptPack.generatedAt}`);
  lines.push("");
  lines.push(`Modules covered: ${promptPack.totals.modules}`);
  lines.push(`Lessons covered: ${promptPack.totals.lessons}`);
  lines.push(`Prompt fields from lesson data: ${promptPack.totals.promptsFromLesson ?? 0}`);
  lines.push(`Prompt fields generated by defaults: ${promptPack.totals.promptsGenerated ?? 0}`);
  lines.push(
    `Prompt QA counts: ${JSON.stringify(promptPack.totals.promptQaStatusCounts ?? {}, null, 0)}`,
  );
  lines.push("");
  lines.push("## Usage");
  lines.push("");
  lines.push("- Use `LESSON-MEDIA-PROMPT-PACK.json` for full prompt payloads per lesson.");
  lines.push("- Seedance prompts are ready for video/animation placeholders.");
  lines.push("- Research-agent prompts are designed for web-enabled AI tools to expand lesson materials.");
  lines.push("");
  lines.push("## Module Coverage");
  lines.push("");
  lines.push("| Module ID | Subject | Lesson Count | Age Range |");
  lines.push("| --- | --- | ---: | --- |");

  for (const moduleEntry of promptPack.modules) {
    const ageRange =
      moduleEntry.minAge !== null && moduleEntry.maxAge !== null
        ? `${moduleEntry.minAge}-${moduleEntry.maxAge}`
        : "n/a";
    lines.push(`| ${moduleEntry.moduleId} | ${moduleEntry.subject} | ${moduleEntry.lessonCount} | ${ageRange} |`);
  }

  lines.push("");
  lines.push("## Example Lesson Prompt Payloads");
  lines.push("");

  for (const moduleEntry of promptPack.modules.slice(0, 12)) {
    const lesson = moduleEntry.lessons[0];
    if (!lesson) continue;
    lines.push(`### ${moduleEntry.moduleTitle} -> ${lesson.lessonTitle}`);
    lines.push("");
    lines.push("```text");
    lines.push(`Seedance Video: ${lesson.prompts.seedanceVideo}`);
    lines.push("");
    lines.push(`Seedance Animation: ${lesson.prompts.seedanceAnimation}`);
    lines.push("");
    lines.push(`Research Agent: ${lesson.prompts.researchAgent}`);
    lines.push("```");
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const promptPack = buildPromptPack();
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(promptPack, null, 2));
  fs.writeFileSync(outMd, toMarkdown(promptPack));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
}

main();

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const catalogDir = path.resolve("src/lib/modules/catalog");
const outJson = path.resolve("public/LESSON-MEDIA-PROMPT-PACK.json");
const outMd = path.resolve("public/LESSON-MEDIA-PROMPT-PACK.md");

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
  return [
    `Create a child-safe educational lesson video for subject "${learningModule.subject}" and lesson "${lesson.title}".`,
    "Target audience: pre-K through grade 12 adaptable, inclusive global classroom representation.",
    "Visual style: bright pastel palette (red, yellow, blue, green, white), high readability, soft rounded shapes.",
    "Structure: 3 acts (hook, explained concept, recap) with simple visual storytelling and no on-screen brand logos.",
    "Camera: gentle motion, medium framing, occasional close-ups on key concept visuals.",
    "Duration: 35-55 seconds. Aspect: 16:9. FPS: 24.",
    "Safety constraints: no violence, no fear-based scenes, no stereotypes, no copyrighted characters.",
    "Accessibility constraints: high contrast objects, slower transitions, clean backgrounds, low visual clutter.",
    `Core concept focus: ${lesson.title}.`,
    "End frame: celebratory but calm transition inviting learner to continue to quiz/activity.",
  ].join(" ");
}

function buildSeedanceAnimationPrompt(learningModule, lesson) {
  return [
    `Generate a short concept animation for "${learningModule.subject}" lesson "${lesson.title}".`,
    "Length: 8-12 seconds, seamless loop.",
    "Palette: happy pastels only, no dark backgrounds.",
    "Motion design: one concept transforms step-by-step using arrows/highlights and soft easing.",
    "No text overlays required; visual metaphor must be understandable for young learners.",
    "Include one mascot-neutral guiding shape to direct attention.",
    "Output: classroom-safe, no logos, no copyrighted references, no sensitive content.",
  ].join(" ");
}

function buildImagePrompt(learningModule, lesson) {
  return [
    "Create a child-friendly educational illustration.",
    `Subject: ${learningModule.subject}. Lesson: ${lesson.title}.`,
    "Style: clean 2D digital illustration, soft shapes, high readability, low clutter.",
    "Composition: one central concept visual + two supporting details + neutral background.",
    "No text overlays, no logos, no copyrighted characters, no sensitive content.",
    "Aspect ratio: 3:2.",
  ].join(" ");
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

function buildPromptPack() {
  const modules = loadCatalogModules();

  const moduleEntries = modules.map(({ fileName, module: learningModule }) => {
    const lessonEntries = (learningModule.lessons ?? []).map((lesson) => ({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonType: lesson.type,
      durationMinutes: lesson.duration,
      prompts: {
        seedanceVideo: buildSeedanceVideoPrompt(learningModule, lesson),
        seedanceAnimation: buildSeedanceAnimationPrompt(learningModule, lesson),
        lessonImage: buildImagePrompt(learningModule, lesson),
        researchAgent: buildResearchAgentPrompt(learningModule, lesson),
      },
    }));

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

  return {
    generatedAt: new Date().toISOString(),
    sourceDir: path.relative(process.cwd(), catalogDir).replace(/\\/g, "/"),
    totals: {
      modules: moduleEntries.length,
      lessons: totalLessons,
    },
    modules: moduleEntries,
  };
}

function toMarkdown(promptPack) {
  const lines = [];
  lines.push("# Lesson Media Prompt Pack");
  lines.push("");
  lines.push(`Generated: ${promptPack.generatedAt}`);
  lines.push("");
  lines.push(`Modules covered: ${promptPack.totals.modules}`);
  lines.push(`Lessons covered: ${promptPack.totals.lessons}`);
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
  lines.push("|---|---|---:|---|");

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

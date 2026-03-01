import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const catalogDir = path.resolve("src/lib/modules/catalog");
const outJson = path.resolve("public/EXAM-AUTHORING-BACKLOG-REPORT.json");
const outMd = path.resolve("public/EXAM-AUTHORING-BACKLOG-REPORT.md");

const trackProfiles = [
  { key: "sat", label: "SAT", terms: ["sat", "reading and writing", "desmos", "adaptive"] },
  { key: "act", label: "ACT", terms: ["act", "science reasoning", "english", "composite"] },
  { key: "ap", label: "AP", terms: ["ap", "frq", "free response", "rubric"] },
  { key: "gcse", label: "GCSE", terms: ["gcse", "paper 1", "paper 2", "command words"] },
  { key: "a-level", label: "A-Level", terms: ["a-level", "synoptic", "extended response"] },
  { key: "ib", label: "IB", terms: ["ib", "tok", "internal assessment", "extended essay"] },
  { key: "jee-neet", label: "JEE/NEET", terms: ["jee", "neet", "ncert", "negative marking"] },
  { key: "cuet", label: "CUET", terms: ["cuet", "domain subject", "general test"] },
  { key: "gaokao", label: "Gaokao", terms: ["gaokao", "comprehensive"] },
  { key: "atar", label: "ATAR", terms: ["atar", "study design", "scaling"] },
  { key: "toefl", label: "TOEFL", terms: ["toefl", "integrated writing", "speaking task"] },
  { key: "ielts", label: "IELTS", terms: ["ielts", "task 1", "task 2", "band"] },
];

const genericPatterns = [
  /which approach best improves/i,
  /after a timed .* drill/i,
  /which weekly habit most improves consistency/i,
  /what is the strongest pacing strategy/i,
];

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
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
    .replace(/\s+as\s+const\b/g, "")
    .replace(new RegExp(`export const\\s+${exportName}\\s*:\\s*LearningModule\\s*=`, "m"), `const ${exportName} =`)
    .concat(`\nmodule.exports = ${exportName};\n`);
  const context = vm.createContext({ module: { exports: {} }, exports: {} });
  new vm.Script(transformed, { filename: filePath }).runInContext(context);
  return context.module.exports;
}

function loadExamModules() {
  if (!fs.existsSync(catalogDir)) return [];
  return fs
    .readdirSync(catalogDir)
    .filter((name) => name.endsWith(".ts"))
    .filter((name) => !name.endsWith(".example.ts"))
    .map((fileName) => {
      const moduleObject = loadModuleFromFile(path.join(catalogDir, fileName));
      return moduleObject;
    })
    .filter((moduleObject) => {
      const subject = normalizeText(moduleObject.subject);
      return subject === "exam prep" || String(moduleObject.id ?? "").includes("-prep-");
    });
}

function resolveTrackProfile(moduleObject) {
  const moduleId = normalizeText(moduleObject.id);
  const moduleTitle = normalizeText(moduleObject.title);
  return (
    trackProfiles.find((profile) => moduleId.startsWith(`${profile.key}-prep-`)) ??
    trackProfiles.find((profile) => moduleTitle.includes(profile.key)) ??
    { key: "other", label: "Other", terms: [] }
  );
}

function buildLessonBacklogItem(moduleObject, lesson, track) {
  const questions = Array.isArray(lesson.questions) ? lesson.questions : [];
  const normalizedQuestions = questions.map((question) => normalizeText(question.text));
  const uniqueQuestionRatio =
    normalizedQuestions.length > 0
      ? Number(((new Set(normalizedQuestions).size / normalizedQuestions.length) * 100).toFixed(2))
      : 0;
  const genericHits = normalizedQuestions.reduce((count, text) => {
    if (genericPatterns.some((pattern) => pattern.test(text))) return count + 1;
    return count;
  }, 0);
  const trackTermHits = normalizedQuestions.reduce((count, text) => {
    if (track.terms.some((term) => text.includes(normalizeText(term)))) return count + 1;
    return count;
  }, 0);
  const trackMentionRate =
    normalizedQuestions.length > 0
      ? Number(((trackTermHits / normalizedQuestions.length) * 100).toFixed(2))
      : 0;

  const interactiveTypes = Array.isArray(lesson.interactiveActivities)
    ? Array.from(
        new Set(
          lesson.interactiveActivities
            .map((activity) => normalizeText(activity?.type))
            .filter((value) => value.length > 0),
        ),
      )
    : [];

  const hasExamDrillTag =
    typeof lesson.metadata?.examDrill === "string" && lesson.metadata.examDrill.length > 0;
  const timedMinutes =
    typeof lesson.quizBlueprint?.timeLimitMinutes === "number"
      ? lesson.quizBlueprint.timeLimitMinutes
      : null;

  const riskScore = clamp(
    Math.round(
      genericHits * 12 +
        (100 - uniqueQuestionRatio) * 0.25 +
        (100 - trackMentionRate) * 0.25 +
        (interactiveTypes.length === 0 ? 10 : 0) +
        (!hasExamDrillTag ? 6 : 0) +
        (!timedMinutes ? 6 : 0),
    ),
    0,
    100,
  );
  const priority = riskScore >= 65 ? "high" : riskScore >= 40 ? "medium" : "low";

  const rewriteActions = [
    "Rewrite all quiz stems to be track-specific and scenario-based.",
    "Replace generic strategy wording with concrete section/task contexts.",
    "Ensure distractors reflect realistic student misconceptions for this exam.",
  ];
  if (interactiveTypes.length === 0) {
    rewriteActions.push("Add at least one typed interactive remediation activity linked to top missed skills.");
  }
  if (!hasExamDrillTag) {
    rewriteActions.push("Add `metadata.examDrill` tag and align timer to section pacing intent.");
  }
  if (!timedMinutes) {
    rewriteActions.push("Set `quizBlueprint.timeLimitMinutes` using realistic section pacing.");
  }

  return {
    moduleId: moduleObject.id,
    moduleTitle: moduleObject.title,
    track: track.label,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    questionCount: questions.length,
    uniqueQuestionRatio,
    trackMentionRate,
    genericPhraseHits: genericHits,
    interactiveTypes,
    hasExamDrillTag,
    timedMinutes,
    riskScore,
    priority,
    rewriteActions,
  };
}

function buildReport(modules) {
  const lessonBacklog = [];

  for (const moduleObject of modules) {
    const track = resolveTrackProfile(moduleObject);
    const lessons = Array.isArray(moduleObject.lessons) ? moduleObject.lessons : [];
    for (const lesson of lessons) {
      if (lesson.type !== "quiz") continue;
      lessonBacklog.push(buildLessonBacklogItem(moduleObject, lesson, track));
    }
  }

  lessonBacklog.sort((left, right) => right.riskScore - left.riskScore);

  const totals = {
    quizLessons: lessonBacklog.length,
    highPriority: lessonBacklog.filter((item) => item.priority === "high").length,
    mediumPriority: lessonBacklog.filter((item) => item.priority === "medium").length,
    lowPriority: lessonBacklog.filter((item) => item.priority === "low").length,
    averageRiskScore:
      lessonBacklog.length > 0
        ? Number(
            (
              lessonBacklog.reduce((sum, item) => sum + item.riskScore, 0) / lessonBacklog.length
            ).toFixed(2),
          )
        : 0,
  };

  const promptTemplate = [
    "You are contributing production-ready exam-prep lesson content for our Next.js + TypeScript learning platform.",
    "Output only JSON using this structure:",
    "{ moduleId, lessonId, rewrittenQuestions: [{ id, text, skillId, options:[{id,text}], correctOptionId, hint?, explanation? }], interactiveActivities:[...], quizBlueprint:{...}, notes }",
    "Requirements:",
    "- Keep existing lessonId and question IDs stable where possible.",
    "- Make stems and distractors exam-track specific (no generic wording).",
    "- Include one timed-drill rationale tied to section pacing.",
    "- Include one remediation interactive activity mapped to top missed skill.",
    "- Keep content child-safe and culturally neutral.",
  ].join("\n");

  return {
    generatedAt: new Date().toISOString(),
    genericPatternSources: genericPatterns.map((pattern) => pattern.source),
    totals,
    promptTemplate,
    lessons: lessonBacklog,
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Exam Authoring Backlog Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push(`Quiz lessons in backlog: ${report.totals.quizLessons}`);
  lines.push(`High priority: ${report.totals.highPriority}`);
  lines.push(`Medium priority: ${report.totals.mediumPriority}`);
  lines.push(`Low priority: ${report.totals.lowPriority}`);
  lines.push(`Average risk score: ${report.totals.averageRiskScore}`);
  lines.push("");
  lines.push("## Lesson Queue");
  lines.push("");
  lines.push("| Priority | Track | Module | Lesson | Questions | Generic Hits | Unique % | Track Mention % | Risk |");
  lines.push("| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |");
  for (const row of report.lessons) {
    lines.push(
      `| ${String(row.priority).toUpperCase()} | ${row.track} | ${row.moduleId} | ${row.lessonId} | ${row.questionCount} | ${row.genericPhraseHits} | ${row.uniqueQuestionRatio} | ${row.trackMentionRate} | ${row.riskScore} |`,
    );
  }
  lines.push("");
  lines.push("## External Agent Prompt Template");
  lines.push("");
  lines.push("```text");
  lines.push(report.promptTemplate);
  lines.push("```");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const modules = loadExamModules();
  const report = buildReport(modules);
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMd, toMarkdown(report));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
  console.log(`Quiz lessons queued: ${report.totals.quizLessons}`);
  console.log(`High priority: ${report.totals.highPriority}`);
}

main();

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const catalogDir = path.resolve("src/lib/modules/catalog");
const outJson = path.resolve("public/EXAM-PREP-CONTENT-QUALITY-REPORT.json");
const outMd = path.resolve("public/EXAM-PREP-CONTENT-QUALITY-REPORT.md");

const targetTracks = [
  { key: "sat", label: "SAT", terms: ["sat", "reading and writing", "digital sat"] },
  { key: "act", label: "ACT", terms: ["act", "science reasoning", "english section"] },
  { key: "ap", label: "AP", terms: ["ap", "free response", "mcq", "rubric"] },
  { key: "toefl", label: "TOEFL", terms: ["toefl", "integrated writing", "speaking task"] },
  { key: "ielts", label: "IELTS", terms: ["ielts", "band", "task 1", "task 2"] },
  { key: "gcse", label: "GCSE", terms: ["gcse", "paper 1", "paper 2", "command words"] },
  { key: "a-level", label: "A-Level", terms: ["a-level", "synoptic", "extended response"] },
  { key: "ib", label: "IB", terms: ["ib", "tok", "internal assessment", "extended essay"] },
  { key: "jee-neet", label: "JEE/NEET", terms: ["jee", "neet", "negative marking", "ncert"] },
  { key: "cuet", label: "CUET", terms: ["cuet", "domain subject", "general test"] },
  { key: "gaokao", label: "Gaokao", terms: ["gaokao", "comprehensive paper"] },
  { key: "atar", label: "ATAR", terms: ["atar", "study design", "scaling"] },
];

const genericQuestionPatterns = [
  /which strategy best improves/i,
  /what should you do after a timed drill/i,
  /which habit most improves exam consistency/i,
  /what is the best time-management approach/i,
];

const genericInteractivePatterns = [
  /strategy match/i,
  /tactic placement/i,
  /animated walkthrough/i,
  /concept snapshot/i,
  /place each tactic into plan, execute, or reflect/i,
];

function slugify(input) {
  return String(input ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveTrackKey(moduleId, title) {
  const haystack = `${moduleId} ${title}`.toLowerCase();
  if (haystack.includes("toefl")) return "toefl";
  if (haystack.includes("ielts")) return "ielts";
  if (haystack.includes(" ib ") || haystack.includes("ib-")) return "ib";
  if (haystack.includes("jee-neet")) return "jee-neet";
  if (haystack.includes("cuet")) return "cuet";
  if (haystack.includes("atar")) return "atar";
  if (haystack.includes("a-level") || haystack.includes("alevel")) return "a-level";
  if (haystack.includes("gaokao")) return "gaokao";
  if (haystack.includes("gcse")) return "gcse";
  if (haystack.includes("sat")) return "sat";
  if (haystack.includes("act")) return "act";
  if (haystack.includes("ap")) return "ap";
  return null;
}

function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
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

function loadCatalogModules() {
  if (!fs.existsSync(catalogDir)) return [];

  return fs
    .readdirSync(catalogDir)
    .filter((name) => name.endsWith(".ts"))
    .filter((name) => !name.endsWith(".example.ts"))
    .sort()
    .map((fileName) => {
      const filePath = path.join(catalogDir, fileName);
      return {
        fileName,
        module: loadModuleFromFile(filePath),
      };
    });
}

function buildReport(catalogModules) {
  const rows = catalogModules
    .map((entry) => entry.module)
    .filter((moduleEntry) => {
      const subjectSlug = slugify(moduleEntry.subject);
      return subjectSlug === "exam-prep" || String(moduleEntry.id ?? "").includes("-prep-");
    })
    .map((moduleEntry) => {
      const trackKey = resolveTrackKey(moduleEntry.id, moduleEntry.title);
      const trackTarget = targetTracks.find((entry) => entry.key === trackKey) ?? null;
      const lessons = Array.isArray(moduleEntry.lessons) ? moduleEntry.lessons : [];
      const quizLessons = lessons.filter((lesson) => lesson.type === "quiz");
      const questionRows = quizLessons.flatMap((lesson) =>
        Array.isArray(lesson.questions) ? lesson.questions : [],
      );
      const questionTexts = questionRows.map((question) => normalizeText(question.text));
      const uniqueQuestionTexts = new Set(questionTexts);
      const totalQuestions = questionTexts.length;
      const uniqueQuestionRatio =
        totalQuestions > 0
          ? Number(((uniqueQuestionTexts.size / totalQuestions) * 100).toFixed(2))
          : 0;

      const genericPhraseHits = questionTexts.reduce((count, text) => {
        if (genericQuestionPatterns.some((pattern) => pattern.test(text))) return count + 1;
        return count;
      }, 0);

      const trackTerms = trackTarget?.terms ?? [];
      const trackMentionHits = questionTexts.reduce((count, text) => {
        if (trackTerms.some((term) => text.includes(normalizeText(term)))) return count + 1;
        return count;
      }, 0);
      const trackMentionRate =
        totalQuestions > 0
          ? Number(((trackMentionHits / totalQuestions) * 100).toFixed(2))
          : 0;

      const interactiveTypes = new Set(
        lessons.flatMap((lesson) =>
          Array.isArray(lesson.interactiveActivities)
            ? lesson.interactiveActivities
                .map((activity) => normalizeText(activity?.type))
                .filter(Boolean)
            : [],
        ),
      );
      const structuredInteractiveQuizCount = quizLessons.filter(
        (lesson) => Array.isArray(lesson.interactiveActivities) && lesson.interactiveActivities.length > 0,
      ).length;

      const interactiveTexts = lessons.flatMap((lesson) => {
        const activities = Array.isArray(lesson.interactiveActivities) ? lesson.interactiveActivities : [];
        return activities.flatMap((activity) => {
          const title = normalizeText(activity?.title);
          const description = normalizeText(activity?.description);
          const instructions = Array.isArray(activity?.instructions)
            ? activity.instructions.map((line) => normalizeText(line))
            : [];
          return [title, description, ...instructions].filter(Boolean);
        });
      });
      const genericInteractiveHits = interactiveTexts.reduce((count, text) => {
        if (genericInteractivePatterns.some((pattern) => pattern.test(text))) return count + 1;
        return count;
      }, 0);
      const interactiveSpecificityRate =
        interactiveTexts.length > 0
          ? Number((((interactiveTexts.length - genericInteractiveHits) / interactiveTexts.length) * 100).toFixed(2))
          : 100;

      const quizWithInteractiveRate =
        quizLessons.length > 0
          ? Number(((structuredInteractiveQuizCount / quizLessons.length) * 100).toFixed(2))
          : 0;

      const qualityScoreRaw =
        uniqueQuestionRatio * 0.35 +
        trackMentionRate * 0.3 +
        quizWithInteractiveRate * 0.2 +
        interactiveSpecificityRate * 0.15 -
        genericPhraseHits * 8 -
        genericInteractiveHits * 4;
      const qualityScore = Number(clamp(Math.round(qualityScoreRaw), 0, 100));

      let priority = "low";
      if (qualityScore < 50 || genericPhraseHits > 4 || interactiveSpecificityRate < 75) priority = "high";
      else if (qualityScore < 70 || genericPhraseHits > 1 || interactiveSpecificityRate < 88) priority = "medium";

      return {
        moduleId: String(moduleEntry.id ?? "unknown"),
        title: String(moduleEntry.title ?? "Untitled"),
        track: trackTarget?.label ?? "Other",
        trackKey,
        quizLessons: quizLessons.length,
        totalQuestions,
        uniqueQuestionRatio,
        trackMentionRate,
        quizWithInteractiveRate,
        interactiveSpecificityRate,
        interactiveTypeCount: interactiveTypes.size,
        genericPhraseHits,
        genericInteractiveHits,
        qualityScore,
        priority,
      };
    })
    .sort((left, right) => right.qualityScore - left.qualityScore);

  const totals = {
    modules: rows.length,
    totalQuestions: rows.reduce((acc, row) => acc + row.totalQuestions, 0),
    totalQuizLessons: rows.reduce((acc, row) => acc + row.quizLessons, 0),
    averageQualityScore:
      rows.length > 0
        ? Number(
            (
              rows.reduce((acc, row) => acc + row.qualityScore, 0) / rows.length
            ).toFixed(2),
          )
        : 0,
    averageUniqueQuestionRatio:
      rows.length > 0
        ? Number(
            (
              rows.reduce((acc, row) => acc + row.uniqueQuestionRatio, 0) / rows.length
            ).toFixed(2),
          )
        : 0,
    averageTrackMentionRate:
      rows.length > 0
        ? Number(
            (
              rows.reduce((acc, row) => acc + row.trackMentionRate, 0) / rows.length
            ).toFixed(2),
          )
        : 0,
    averageInteractiveSpecificityRate:
      rows.length > 0
        ? Number(
            (
              rows.reduce((acc, row) => acc + row.interactiveSpecificityRate, 0) / rows.length
            ).toFixed(2),
          )
        : 0,
    genericPhraseHits: rows.reduce((acc, row) => acc + row.genericPhraseHits, 0),
    genericInteractiveHits: rows.reduce((acc, row) => acc + row.genericInteractiveHits, 0),
    highPriorityModules: rows.filter((row) => row.priority === "high").length,
    mediumPriorityModules: rows.filter((row) => row.priority === "medium").length,
  };

  return {
    generatedAt: new Date().toISOString(),
    genericPhrasePatterns: genericQuestionPatterns.map((pattern) => pattern.source),
    genericInteractivePatterns: genericInteractivePatterns.map((pattern) => pattern.source),
    totals,
    modules: rows,
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Exam Prep Content Quality Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push(`Modules: ${report.totals.modules}`);
  lines.push(`Quiz lessons: ${report.totals.totalQuizLessons}`);
  lines.push(`Quiz questions: ${report.totals.totalQuestions}`);
  lines.push(`Average quality score: ${report.totals.averageQualityScore}`);
  lines.push(`Average unique question ratio: ${report.totals.averageUniqueQuestionRatio}%`);
  lines.push(`Average track mention rate: ${report.totals.averageTrackMentionRate}%`);
  lines.push(`Average interactive specificity rate: ${report.totals.averageInteractiveSpecificityRate}%`);
  lines.push(`Generic phrase hits: ${report.totals.genericPhraseHits}`);
  lines.push(`Generic interactive hits: ${report.totals.genericInteractiveHits}`);
  lines.push(`High-priority modules: ${report.totals.highPriorityModules}`);
  lines.push(`Medium-priority modules: ${report.totals.mediumPriorityModules}`);
  lines.push("");
  lines.push("## Modules");
  lines.push("");
  lines.push("| Track | Module | Quiz Lessons | Questions | Unique % | Track Mention % | Quiz+Interactive % | Interactive Specificity % | Generic Q Hits | Generic IA Hits | Score | Priority |");
  lines.push("| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |");
  for (const row of report.modules) {
    lines.push(
      `| ${row.track} | ${row.title} | ${row.quizLessons} | ${row.totalQuestions} | ${row.uniqueQuestionRatio} | ${row.trackMentionRate} | ${row.quizWithInteractiveRate} | ${row.interactiveSpecificityRate} | ${row.genericPhraseHits} | ${row.genericInteractiveHits} | ${row.qualityScore} | ${String(row.priority).toUpperCase()} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const catalogModules = loadCatalogModules();
  const report = buildReport(catalogModules);
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMd, toMarkdown(report));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
}

main();

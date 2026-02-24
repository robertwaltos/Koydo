import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const qualityPath = path.resolve("public/CURRICULUM-QUALITY-REPORT.json");
const catalogDir = path.resolve("src/lib/modules/catalog");
const outJson = path.resolve("public/EXAM-PREP-COVERAGE-REPORT.json");
const outMd = path.resolve("public/EXAM-PREP-COVERAGE-REPORT.md");

const targetTracks = [
  { key: "sat", label: "SAT", region: "US" },
  { key: "act", label: "ACT", region: "US" },
  { key: "ap", label: "AP", region: "US" },
  { key: "toefl", label: "TOEFL", region: "Global" },
  { key: "ielts", label: "IELTS", region: "Global" },
  { key: "gcse", label: "GCSE", region: "UK" },
  { key: "a-level", label: "A-Level", region: "UK" },
  { key: "ib", label: "IB Diploma", region: "Global" },
  { key: "jee-neet", label: "JEE/NEET", region: "India" },
  { key: "cuet", label: "CUET", region: "India" },
  { key: "gaokao", label: "Gaokao", region: "China" },
  { key: "atar", label: "ATAR", region: "Australia" },
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

function loadModuleFromFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const exportMatch = source.match(/export const\s+([A-Za-z0-9_]+)\s*:\s*LearningModule\s*=/);
  if (!exportMatch) {
    throw new Error(`Cannot parse module export in ${filePath}`);
  }

  const exportName = exportMatch[1];
  const transformed = source
    .replace(/^import\s+type\s+\{[^}]+\}\s+from\s+"[^"]+";\s*$/gm, "")
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

function loadQualityModules() {
  if (!fs.existsSync(qualityPath)) {
    throw new Error(
      "Missing public/CURRICULUM-QUALITY-REPORT.json. Run `npm run curriculum:quality` first.",
    );
  }

  const report = JSON.parse(fs.readFileSync(qualityPath, "utf8"));
  const modules = Array.isArray(report.modules) ? report.modules : [];
  return {
    generatedAt: report.generatedAt ?? null,
    modules,
  };
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function buildReport(quality, catalogModules) {
  const qualityByModuleId = new Map(
    quality.modules.map((moduleEntry) => [
      String(moduleEntry.moduleId ?? ""),
      {
        score: toNumber(moduleEntry.score, 0),
        priority: String(moduleEntry.priority ?? "unknown"),
      },
    ]),
  );

  const examPrepModules = catalogModules
    .map((entry) => entry.module)
    .filter((moduleEntry) => {
      const subjectSlug = slugify(moduleEntry.subject);
      return subjectSlug === "exam-prep" || String(moduleEntry.id ?? "").includes("-prep-");
    })
    .map((moduleEntry) => {
      const trackKey = resolveTrackKey(moduleEntry.id, moduleEntry.title);
      const trackTarget = targetTracks.find((entry) => entry.key === trackKey);
      const lessons = Array.isArray(moduleEntry.lessons) ? moduleEntry.lessons : [];

      const timedQuizLessons = lessons.filter(
        (lesson) =>
          lesson.type === "quiz" &&
          typeof lesson.quizBlueprint?.timeLimitMinutes === "number" &&
          lesson.quizBlueprint.timeLimitMinutes > 0,
      ).length;
      const structuredInteractiveLessons = lessons.filter(
        (lesson) => Array.isArray(lesson.interactiveActivities) && lesson.interactiveActivities.length > 0,
      ).length;
      const fullMockLessons = lessons.filter(
        (lesson) =>
          lesson.metadata?.examDrill === "full_mock" ||
          (typeof lesson.quizBlueprint?.timeLimitMinutes === "number" &&
            lesson.quizBlueprint.timeLimitMinutes >= 18),
      ).length;
      const hasModuleQuizBlueprint = Boolean(moduleEntry.quizBlueprint);
      const qualityMeta = qualityByModuleId.get(String(moduleEntry.id ?? "")) ?? {
        score: 0,
        priority: "unknown",
      };

      return {
        track: trackTarget?.label ?? "Other",
        trackKey: trackTarget?.key ?? null,
        region: trackTarget?.region ?? "Global",
        moduleId: String(moduleEntry.id ?? "unknown"),
        title: String(moduleEntry.title ?? "Untitled module"),
        lessonCount: lessons.length,
        timedQuizLessons,
        structuredInteractiveLessons,
        fullMockLessons,
        hasModuleQuizBlueprint,
        score: qualityMeta.score,
        priority: qualityMeta.priority,
      };
    })
    .sort((a, b) => a.track.localeCompare(b.track) || a.moduleId.localeCompare(b.moduleId));

  const availableTrackKeys = new Set(
    examPrepModules
      .map((row) => row.trackKey)
      .filter((key) => typeof key === "string" && key.length > 0),
  );
  const missingTracks = targetTracks
    .filter((track) => !availableTrackKeys.has(track.key))
    .map((track) => track.label);

  const targetTrackCount = targetTracks.length;
  const availableTrackCount = targetTrackCount - missingTracks.length;
  const completionPercent =
    targetTrackCount > 0 ? Number(((availableTrackCount / targetTrackCount) * 100).toFixed(2)) : 0;
  const totalLessons = examPrepModules.reduce((acc, row) => acc + row.lessonCount, 0);
  const timedLessonTotal = examPrepModules.reduce((acc, row) => acc + row.timedQuizLessons, 0);
  const structuredLessonTotal = examPrepModules.reduce(
    (acc, row) => acc + row.structuredInteractiveLessons,
    0,
  );
  const fullMockLessonTotal = examPrepModules.reduce((acc, row) => acc + row.fullMockLessons, 0);
  const modulesWithBlueprint = examPrepModules.filter((row) => row.hasModuleQuizBlueprint).length;
  const averageScore =
    examPrepModules.length > 0
      ? Number(
          (
            examPrepModules.reduce((acc, row) => acc + row.score, 0) /
            examPrepModules.length
          ).toFixed(2),
        )
      : 0;

  return {
    generatedAt: new Date().toISOString(),
    sourceReportGeneratedAt: quality.generatedAt,
    totals: {
      targetTrackCount,
      availableTrackCount,
      completionPercent,
      totalModules: examPrepModules.length,
      totalLessons,
      timedLessonTotal,
      structuredLessonTotal,
      fullMockLessonTotal,
      modulesWithBlueprint,
      averageScore,
    },
    readiness: {
      timedCoveragePercent:
        examPrepModules.length > 0
          ? Number(
              (
                (examPrepModules.filter((row) => row.timedQuizLessons > 0).length / examPrepModules.length) *
                100
              ).toFixed(2),
            )
          : 0,
      structuredCoveragePercent:
        examPrepModules.length > 0
          ? Number(
              (
                (examPrepModules.filter((row) => row.structuredInteractiveLessons > 0).length /
                  examPrepModules.length) *
                100
              ).toFixed(2),
            )
          : 0,
      blueprintCoveragePercent:
        examPrepModules.length > 0
          ? Number(((modulesWithBlueprint / examPrepModules.length) * 100).toFixed(2))
          : 0,
    },
    missingTracks,
    tracks: examPrepModules,
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Exam Prep Coverage Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  if (report.sourceReportGeneratedAt) {
    lines.push(`Quality report source generated: ${report.sourceReportGeneratedAt}`);
  }
  lines.push("");
  lines.push(`Target tracks: ${report.totals.targetTrackCount}`);
  lines.push(`Available tracks: ${report.totals.availableTrackCount}`);
  lines.push(`Coverage completion: ${report.totals.completionPercent}%`);
  lines.push(`Exam prep modules: ${report.totals.totalModules}`);
  lines.push(`Exam prep lessons: ${report.totals.totalLessons}`);
  lines.push(`Timed quiz lessons: ${report.totals.timedLessonTotal}`);
  lines.push(`Structured interactive lessons: ${report.totals.structuredLessonTotal}`);
  lines.push(`Full mock lessons: ${report.totals.fullMockLessonTotal}`);
  lines.push(`Modules with module-level quiz blueprint: ${report.totals.modulesWithBlueprint}`);
  lines.push(`Average exam module score: ${report.totals.averageScore}`);
  lines.push("");
  lines.push(`Timed coverage: ${report.readiness.timedCoveragePercent}%`);
  lines.push(`Structured activity coverage: ${report.readiness.structuredCoveragePercent}%`);
  lines.push(`Quiz blueprint coverage: ${report.readiness.blueprintCoveragePercent}%`);
  lines.push("");
  lines.push(
    `Missing tracks: ${
      report.missingTracks.length > 0 ? report.missingTracks.join(", ") : "None"
    }`,
  );
  lines.push("");
  lines.push("## Exam Prep Modules");
  lines.push("");
  lines.push("| Track | Region | Module | Lessons | Timed | Structured | Full Mock | Blueprint | Score | Priority |");
  lines.push("| --- | --- | --- | ---: | ---: | ---: | ---: | --- | ---: | --- |");
  for (const row of report.tracks) {
    lines.push(
      `| ${row.track} | ${row.region} | ${row.title} | ${row.lessonCount} | ${row.timedQuizLessons} | ${row.structuredInteractiveLessons} | ${row.fullMockLessons} | ${row.hasModuleQuizBlueprint ? "Yes" : "No"} | ${row.score} | ${String(row.priority).toUpperCase()} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const quality = loadQualityModules();
  const catalogModules = loadCatalogModules();
  const report = buildReport(quality, catalogModules);
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMd, toMarkdown(report));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
}

main();

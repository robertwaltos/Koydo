import fs from "node:fs";
import path from "node:path";

const catalogDir = path.resolve("src/lib/modules/catalog");
const lessonsDir = path.resolve("src/lib/data/lessons");
const outDir = path.resolve("public");
const outMarkdown = path.join(outDir, "CURRICULUM-COVERAGE-REPORT.md");
const outJson = path.join(outDir, "CURRICULUM-COVERAGE-REPORT.json");

const subjectAliases = {
  math: "basic-math",
  reading: "language-arts",
  science: "general-science",
  "history-worldwide": "world-history",
};

function slugify(input) {
  return String(input ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeSubject(input) {
  const slug = slugify(input);
  if (!slug) return "unknown";
  return subjectAliases[slug] ?? slug;
}

function inferGradeBand(minAge, maxAge) {
  if (Number.isFinite(minAge)) {
    if (minAge <= 5) return "pre-k";
    if (minAge <= 10) return "elementary";
    if (minAge <= 13) return "middle-school";
    return "high-school";
  }

  if (Number.isFinite(maxAge)) {
    if (maxAge <= 5) return "pre-k";
    if (maxAge <= 10) return "elementary";
    if (maxAge <= 13) return "middle-school";
    return "high-school";
  }

  return "unknown";
}

function inferCoveredGradeBands(minAge, maxAge) {
  const bands = [
    { id: "pre-k", min: 3, max: 5 },
    { id: "elementary", min: 6, max: 10 },
    { id: "middle-school", min: 11, max: 13 },
    { id: "high-school", min: 14, max: 18 },
  ];

  if (!Number.isFinite(minAge) && !Number.isFinite(maxAge)) {
    return ["unknown"];
  }

  const normalizedMin = Number.isFinite(minAge) ? minAge : Number.NEGATIVE_INFINITY;
  const normalizedMax = Number.isFinite(maxAge) ? maxAge : Number.POSITIVE_INFINITY;

  if (normalizedMin > normalizedMax) {
    return [inferGradeBand(minAge, maxAge)];
  }

  const covered = bands
    .filter((band) => normalizedMax >= band.min && normalizedMin <= band.max)
    .map((band) => band.id);

  if (covered.length === 0) {
    return [inferGradeBand(minAge, maxAge)];
  }

  return covered;
}

function firstMatch(text, regex, fallback = null) {
  const match = text.match(regex);
  return match?.[1] ?? fallback;
}

function extractLessonTypeCounts(text) {
  const counts = {
    video: 0,
    interactive: 0,
    quiz: 0,
  };

  const matches = text.matchAll(
    /\{\s*id:\s*"([^"]+)"[\s\S]{0,280}?title:\s*"([^"]+)"[\s\S]{0,180}?type:\s*"([^"]+)"/g,
  );

  for (const match of matches) {
    const candidateType = match[3];
    if (candidateType === "video" || candidateType === "interactive" || candidateType === "quiz") {
      counts[candidateType] += 1;
    }
  }

  return counts;
}

function readCatalogFiles() {
  if (!fs.existsSync(catalogDir)) return [];
  return fs
    .readdirSync(catalogDir)
    .filter((name) => name.endsWith(".ts"))
    .filter((name) => !name.endsWith(".example.ts"))
    .map((name) => ({
      fileName: name,
      fullPath: path.join(catalogDir, name),
    }));
}

function parseCatalogModule(file) {
  const raw = fs.readFileSync(file.fullPath, "utf8");
  const lessonTypeCounts = extractLessonTypeCounts(raw);
  const lessonCount = lessonTypeCounts.video + lessonTypeCounts.interactive + lessonTypeCounts.quiz;
  const subjectRaw = firstMatch(raw, /\bsubject:\s*"([^"]+)"/, "unknown");
  const minAgeRaw = firstMatch(raw, /\bminAge:\s*(\d+)/);
  const maxAgeRaw = firstMatch(raw, /\bmaxAge:\s*(\d+)/);
  const minAge = minAgeRaw === null ? null : Number(minAgeRaw);
  const maxAge = maxAgeRaw === null ? null : Number(maxAgeRaw);

  return {
    source: "module-catalog",
    fileName: file.fileName,
    moduleId: firstMatch(raw, /\bid:\s*"([^"]+)"/, file.fileName.replace(/\.ts$/i, "")),
    moduleTitle: firstMatch(raw, /\btitle:\s*"([^"]+)"/, "Untitled module"),
    subject: normalizeSubject(subjectRaw),
    subjectRaw,
    gradeBand: inferGradeBand(minAge, maxAge),
    coveredGradeBands: inferCoveredGradeBands(minAge, maxAge),
    minAge,
    maxAge,
    lessonCount,
    lessonTypeCounts,
  };
}

function readLessonFiles() {
  if (!fs.existsSync(lessonsDir)) return [];
  return fs
    .readdirSync(lessonsDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => ({
      fileName: name,
      fullPath: path.join(lessonsDir, name),
    }));
}

function parseFromFilename(fileName) {
  const base = fileName.replace(/\.json$/i, "");
  const parts = base.split("-");
  if (parts.length < 3) {
    return { gradeBand: "unknown", subject: "unknown", lessonSlug: base };
  }

  let gradeBand = parts[0];
  let subjectStartIndex = 1;
  if (parts[0] === "pre" && parts[1] === "k") {
    gradeBand = "pre-k";
    subjectStartIndex = 2;
  }

  const subject = parts[subjectStartIndex] ?? "unknown";
  const lessonSlug = parts.slice(subjectStartIndex + 1).join("-");
  return { gradeBand, subject, lessonSlug };
}

function titleCase(input) {
  return input
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function generateCoverage() {
  const moduleFiles = readCatalogFiles();
  const catalogRows = moduleFiles.map(parseCatalogModule);
  const usingCatalog = catalogRows.length > 0;
  const rows = [];
  const coverage = new Map();

  if (usingCatalog) {
    for (const row of catalogRows) {
      const gradeBands = Array.isArray(row.coveredGradeBands) && row.coveredGradeBands.length > 0
        ? row.coveredGradeBands
        : [row.gradeBand];
      for (const gradeBand of gradeBands) {
        const key = `${gradeBand}::${row.subject}`;
        const current = coverage.get(key) ?? {
          gradeBand,
          subject: row.subject,
          count: 0,
          files: [],
        };
        current.count += row.lessonCount;
        current.files.push(row.fileName);
        coverage.set(key, current);
      }
      rows.push(row);
    }
  } else {
    const files = readLessonFiles();
    for (const file of files) {
      const parsed = parseFromFilename(file.fileName);
      const key = `${parsed.gradeBand}::${parsed.subject}`;
      const current = coverage.get(key) ?? {
        gradeBand: parsed.gradeBand,
        subject: parsed.subject,
        count: 0,
        files: [],
      };
      current.count += 1;
      current.files.push(file.fileName);
      coverage.set(key, current);

      rows.push({
        source: "legacy-lesson-json",
        fileName: file.fileName,
        gradeBand: parsed.gradeBand,
        subject: parsed.subject,
        lessonSlug: parsed.lessonSlug,
        lessonCount: 1,
      });
    }
  }

  const gradeBandSummaryMap = new Map();
  const subjectSummaryMap = new Map();
  for (const item of coverage.values()) {
    gradeBandSummaryMap.set(item.gradeBand, (gradeBandSummaryMap.get(item.gradeBand) ?? 0) + item.count);
    subjectSummaryMap.set(item.subject, (subjectSummaryMap.get(item.subject) ?? 0) + item.count);
  }

  const gradeBandSummary = Array.from(gradeBandSummaryMap.entries())
    .map(([gradeBand, count]) => ({ gradeBand, count }))
    .sort((a, b) => a.gradeBand.localeCompare(b.gradeBand));

  const subjectSummary = Array.from(subjectSummaryMap.entries())
    .map(([subject, count]) => ({ subject, count }))
    .sort((a, b) => a.subject.localeCompare(b.subject));

  const totalLessons = usingCatalog
    ? rows.reduce((acc, row) => acc + Number(row.lessonCount ?? 0), 0)
    : rows.length;

  const summary = Array.from(coverage.values()).sort((a, b) => {
    if (a.gradeBand !== b.gradeBand) return a.gradeBand.localeCompare(b.gradeBand);
    return a.subject.localeCompare(b.subject);
  });

  return {
    generatedAt: new Date().toISOString(),
    source: usingCatalog ? "module-catalog" : "legacy-lesson-json",
    totalLessons,
    totalModules: usingCatalog ? rows.length : 0,
    gradeBandSummary,
    subjectSummary,
    gradeSubjectSummary: summary,
    lessons: rows.sort((a, b) => String(a.fileName ?? "").localeCompare(String(b.fileName ?? ""))),
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Curriculum Coverage Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push(`Source: ${report.source}`);
  lines.push(`Total lessons: ${report.totalLessons}`);
  if (report.totalModules) {
    lines.push(`Total modules: ${report.totalModules}`);
  }
  lines.push("");
  lines.push("## Grade x Subject Coverage");
  lines.push("");
  lines.push("| Grade Band | Subject | Lesson Count |");
  lines.push("|---|---|---:|");
  for (const item of report.gradeSubjectSummary) {
    lines.push(
      `| ${titleCase(item.gradeBand)} | ${titleCase(item.subject)} | ${item.count} |`,
    );
  }
  lines.push("");
  lines.push("## Grade Band Totals");
  lines.push("");
  lines.push("| Grade Band | Lesson Count |");
  lines.push("|---|---:|");
  for (const item of report.gradeBandSummary) {
    lines.push(`| ${titleCase(item.gradeBand)} | ${item.count} |`);
  }
  lines.push("");
  lines.push("## Subject Totals");
  lines.push("");
  lines.push("| Subject | Lesson Count |");
  lines.push("|---|---:|");
  for (const item of report.subjectSummary) {
    lines.push(`| ${titleCase(item.subject)} | ${item.count} |`);
  }
  lines.push("");
  lines.push("## Next Expansion Targets");
  lines.push("");
  lines.push("- Add at least 10 lessons for each subject per grade band.");
  lines.push("- Prioritize coverage gaps for middle-school and high-school pathways.");
  lines.push("- Add SAT/ACT and international exam tracks as separate module families.");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const report = generateCoverage();
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMarkdown, toMarkdown(report));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMarkdown}`);
}

main();

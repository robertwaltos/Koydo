import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");
const outJson = path.join(projectRoot, "public", "MEDIA-READINESS-REPORT.json");
const outMd = path.join(projectRoot, "public", "MEDIA-READINESS-REPORT.md");

function readCatalogFiles() {
  if (!fs.existsSync(catalogDir)) return [];
  return fs
    .readdirSync(catalogDir)
    .filter((file) => file.endsWith(".ts") && file !== "module-template.example.ts")
    .map((file) => ({
      file,
      fullPath: path.join(catalogDir, file),
      content: fs.readFileSync(path.join(catalogDir, file), "utf8"),
    }));
}

function moduleIdFromFile(file) {
  return file.replace(/\.ts$/i, "");
}

function countMatches(content, regex) {
  return (content.match(regex) || []).length;
}

function buildReport() {
  const files = readCatalogFiles();
  const modules = files.map(({ file, content }) => {
    const placeholderRefs = countMatches(content, /\/placeholders\//g);
    const learningAidRefs = countMatches(content, /learningAids:/g);
    const videoLessons = countMatches(content, /type:\s*"video"/g);
    const interactiveLessons = countMatches(content, /type:\s*"interactive"/g);
    const quizLessons = countMatches(content, /type:\s*"quiz"/g);
    const totalLessons = videoLessons + interactiveLessons + quizLessons;

    return {
      moduleId: moduleIdFromFile(file),
      totalLessons,
      videoLessons,
      interactiveLessons,
      quizLessons,
      learningAidRefs,
      placeholderRefs,
      readinessScore: totalLessons > 0 ? Math.max(0, 100 - placeholderRefs * 5) : 0,
    };
  });

  modules.sort((a, b) => a.readinessScore - b.readinessScore || a.moduleId.localeCompare(b.moduleId));
  return {
    generatedAt: new Date().toISOString(),
    totals: {
      moduleCount: modules.length,
      placeholderRefs: modules.reduce((acc, item) => acc + item.placeholderRefs, 0),
      learningAidRefs: modules.reduce((acc, item) => acc + item.learningAidRefs, 0),
    },
    modules,
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Media Readiness Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push(`Modules scanned: ${report.totals.moduleCount}`);
  lines.push(`Placeholder references: ${report.totals.placeholderRefs}`);
  lines.push(`Learning aid references: ${report.totals.learningAidRefs}`);
  lines.push("");
  lines.push("| Module | Lessons | Placeholders | Readiness Score |");
  lines.push("| --- | ---: | ---: | ---: |");
  for (const moduleRow of report.modules) {
    lines.push(
      `| ${moduleRow.moduleId} | ${moduleRow.totalLessons} | ${moduleRow.placeholderRefs} | ${moduleRow.readinessScore} |`,
    );
  }
  lines.push("");
  lines.push("## Usage");
  lines.push("");
  lines.push("- Prioritize modules with the lowest readiness scores.");
  lines.push("- Replace placeholder references with generated production assets.");
  lines.push("- Track final output URLs in `media_generation_jobs` for auditability.");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const report = buildReport();
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(outMd, toMarkdown(report), "utf8");
  console.log(`Wrote ${path.relative(projectRoot, outJson)}`);
  console.log(`Wrote ${path.relative(projectRoot, outMd)}`);
}

main();

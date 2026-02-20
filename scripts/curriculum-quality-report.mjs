import fs from "node:fs";
import path from "node:path";

const catalogDir = path.resolve("src/lib/modules/catalog");
const outJson = path.resolve("public/CURRICULUM-QUALITY-REPORT.json");
const outMd = path.resolve("public/CURRICULUM-QUALITY-REPORT.md");

const lessonTypes = new Set(["video", "interactive", "quiz"]);
const placeholderOptionText = "A principle supported by lesson evidence";
const genericReflectionText = "Identify one core idea from this lesson.";

function readCatalogFiles() {
  if (!fs.existsSync(catalogDir)) return [];
  return fs
    .readdirSync(catalogDir)
    .filter((name) => name.endsWith(".ts"))
    .filter((name) => !name.endsWith(".example.ts"))
    .sort()
    .map((name) => path.join(catalogDir, name));
}

function firstMatch(text, regex, fallback = "unknown") {
  const match = text.match(regex);
  return match?.[1] ?? fallback;
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
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
    if (!lessonTypes.has(candidateType)) continue;
    counts[candidateType] += 1;
  }

  return counts;
}

function buildIssues({
  lessonCount,
  lessonTypeCounts,
  questionCount,
  learningAidBlocks,
  placeholderOptionCount,
  genericReflectionCount,
  averageQuestionsPerQuiz,
}) {
  const issues = [];

  if (lessonCount < 6) {
    issues.push(`Low lesson volume (${lessonCount}) for a full module.`);
  }
  if (lessonTypeCounts.quiz === 0) {
    issues.push("No quiz lessons found.");
  }
  if (lessonTypeCounts.interactive === 0) {
    issues.push("No interactive lessons found.");
  }
  if (lessonTypeCounts.video === 0) {
    issues.push("No video lessons found.");
  }
  if (questionCount === 0) {
    issues.push("No quiz questions found.");
  }
  if (lessonTypeCounts.quiz > 0 && averageQuestionsPerQuiz < 3) {
    issues.push(`Low quiz depth (${averageQuestionsPerQuiz.toFixed(1)} questions per quiz lesson).`);
  }
  if (learningAidBlocks < Math.max(1, Math.floor(lessonCount / 2))) {
    issues.push("Limited learning aid coverage across lessons.");
  }
  if (placeholderOptionCount > 0) {
    issues.push(`Contains ${placeholderOptionCount} placeholder quiz option(s).`);
  }
  if (genericReflectionCount > 0) {
    issues.push(`Contains ${genericReflectionCount} generic reflection prompt(s).`);
  }

  return issues;
}

function scoreModule({
  lessonCount,
  lessonTypeCounts,
  questionCount,
  learningAidBlocks,
  placeholderOptionCount,
  genericReflectionCount,
  averageQuestionsPerQuiz,
}) {
  let score = 100;

  if (lessonCount < 6) score -= 20;
  if (lessonTypeCounts.quiz === 0) score -= 20;
  if (lessonTypeCounts.interactive === 0) score -= 10;
  if (lessonTypeCounts.video === 0) score -= 10;
  if (questionCount === 0) score -= 20;
  if (lessonTypeCounts.quiz > 0 && averageQuestionsPerQuiz < 3) score -= 10;
  if (learningAidBlocks < Math.max(1, Math.floor(lessonCount / 2))) score -= 10;
  score -= Math.min(30, placeholderOptionCount * 3);
  score -= Math.min(20, genericReflectionCount * 3);

  return Math.max(0, Math.round(score));
}

function priorityFromScore(score, issues) {
  const hasPlaceholderIssue = issues.some((issue) => issue.includes("placeholder"));
  if (score < 70 || hasPlaceholderIssue) return "high";
  if (score < 85) return "medium";
  return "low";
}

function recommendActions(issues) {
  const actions = [];

  if (issues.some((issue) => issue.includes("placeholder"))) {
    actions.push("Replace placeholder quiz options with concept-specific distractors and evidence-backed correct answers.");
  }
  if (issues.some((issue) => issue.includes("generic reflection"))) {
    actions.push("Replace generic reflection prompts with lesson-specific prompts tied to concrete outcomes.");
  }
  if (issues.some((issue) => issue.includes("No interactive lessons"))) {
    actions.push("Add at least one interactive lesson with guided prompts or simulation flow.");
  }
  if (issues.some((issue) => issue.includes("No video lessons"))) {
    actions.push("Add at least one short video lesson with storyboard-backed visuals.");
  }
  if (issues.some((issue) => issue.includes("Low quiz depth"))) {
    actions.push("Increase each quiz lesson to at least 3-5 high-quality questions.");
  }
  if (issues.some((issue) => issue.includes("Limited learning aid"))) {
    actions.push("Add learning aids (image, animation, mnemonic, practice) to improve concept retention.");
  }
  if (actions.length === 0) {
    actions.push("Maintain current quality and continue periodic review for factual depth and age alignment.");
  }

  return actions;
}

function analyzeModuleFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const relativeFile = path.relative(process.cwd(), filePath).replace(/\\/g, "/");

  const moduleId = firstMatch(raw, /\bid:\s*"([^"]+)"/, path.basename(filePath, ".ts"));
  const moduleTitle = firstMatch(raw, /\btitle:\s*"([^"]+)"/, moduleId);
  const subject = firstMatch(raw, /\bsubject:\s*"([^"]+)"/, "Unknown");

  const lessonTypeCounts = extractLessonTypeCounts(raw);
  const lessonCount = lessonTypeCounts.video + lessonTypeCounts.interactive + lessonTypeCounts.quiz;
  const questionCount = countMatches(raw, /\bcorrectOptionId:\s*"/g);
  const learningAidBlocks = countMatches(raw, /\blearningAids:\s*\[/g);
  const placeholderOptionCount = countMatches(
    raw,
    new RegExp(placeholderOptionText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
  );
  const genericReflectionCount = countMatches(
    raw,
    new RegExp(genericReflectionText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
  );
  const averageQuestionsPerQuiz = lessonTypeCounts.quiz > 0 ? questionCount / lessonTypeCounts.quiz : 0;

  const issues = buildIssues({
    lessonCount,
    lessonTypeCounts,
    questionCount,
    learningAidBlocks,
    placeholderOptionCount,
    genericReflectionCount,
    averageQuestionsPerQuiz,
  });

  const score = scoreModule({
    lessonCount,
    lessonTypeCounts,
    questionCount,
    learningAidBlocks,
    placeholderOptionCount,
    genericReflectionCount,
    averageQuestionsPerQuiz,
  });

  const priority = priorityFromScore(score, issues);
  const recommendedActions = recommendActions(issues);

  return {
    moduleId,
    title: moduleTitle,
    subject,
    file: relativeFile,
    lessonCount,
    lessonTypeCounts,
    questionCount,
    learningAidBlocks,
    placeholderOptionCount,
    genericReflectionCount,
    averageQuestionsPerQuiz: Number(averageQuestionsPerQuiz.toFixed(2)),
    score,
    priority,
    issues,
    recommendedActions,
  };
}

function summarize(modules) {
  const totals = {
    modules: modules.length,
    lessons: 0,
    quizLessons: 0,
    interactiveLessons: 0,
    videoLessons: 0,
    questions: 0,
    learningAidBlocks: 0,
    placeholderOptionCount: 0,
    genericReflectionCount: 0,
    averageScore: 0,
    highPriorityModules: 0,
    mediumPriorityModules: 0,
    lowPriorityModules: 0,
  };

  for (const moduleEntry of modules) {
    totals.lessons += moduleEntry.lessonCount;
    totals.quizLessons += moduleEntry.lessonTypeCounts.quiz;
    totals.interactiveLessons += moduleEntry.lessonTypeCounts.interactive;
    totals.videoLessons += moduleEntry.lessonTypeCounts.video;
    totals.questions += moduleEntry.questionCount;
    totals.learningAidBlocks += moduleEntry.learningAidBlocks;
    totals.placeholderOptionCount += moduleEntry.placeholderOptionCount;
    totals.genericReflectionCount += moduleEntry.genericReflectionCount;
    if (moduleEntry.priority === "high") totals.highPriorityModules += 1;
    if (moduleEntry.priority === "medium") totals.mediumPriorityModules += 1;
    if (moduleEntry.priority === "low") totals.lowPriorityModules += 1;
    totals.averageScore += moduleEntry.score;
  }

  totals.averageScore = totals.modules > 0 ? Number((totals.averageScore / totals.modules).toFixed(2)) : 0;
  return totals;
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Curriculum Quality Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Modules analyzed: ${report.totals.modules}`);
  lines.push(`- Lessons analyzed: ${report.totals.lessons}`);
  lines.push(`- Average quality score: ${report.totals.averageScore}`);
  lines.push(`- High priority modules: ${report.totals.highPriorityModules}`);
  lines.push(`- Medium priority modules: ${report.totals.mediumPriorityModules}`);
  lines.push(`- Low priority modules: ${report.totals.lowPriorityModules}`);
  lines.push(`- Placeholder options found: ${report.totals.placeholderOptionCount}`);
  lines.push(`- Generic reflection prompts found: ${report.totals.genericReflectionCount}`);
  lines.push("");
  lines.push("## Priority Modules");
  lines.push("");
  lines.push("| Priority | Score | Module | Subject | Lessons | Questions | Issues |");
  lines.push("|---|---:|---|---|---:|---:|---|");
  for (const moduleEntry of report.topPriorityModules) {
    lines.push(
      `| ${moduleEntry.priority.toUpperCase()} | ${moduleEntry.score} | ${moduleEntry.title} | ${moduleEntry.subject} | ${moduleEntry.lessonCount} | ${moduleEntry.questionCount} | ${moduleEntry.issues.join("; ")} |`,
    );
  }
  lines.push("");
  lines.push("## Suggested Actions");
  lines.push("");
  for (const moduleEntry of report.topPriorityModules.slice(0, 20)) {
    lines.push(`### ${moduleEntry.title} (${moduleEntry.priority.toUpperCase()}, score ${moduleEntry.score})`);
    for (const action of moduleEntry.recommendedActions) {
      lines.push(`- ${action}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const moduleFiles = readCatalogFiles();
  const modules = moduleFiles.map(analyzeModuleFile);
  const sortedByPriority = [...modules].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const p = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (p !== 0) return p;
    return a.score - b.score || a.moduleId.localeCompare(b.moduleId);
  });

  const report = {
    generatedAt: new Date().toISOString(),
    sourceDir: path.relative(process.cwd(), catalogDir).replace(/\\/g, "/"),
    totals: summarize(modules),
    topPriorityModules: sortedByPriority.slice(0, 30),
    modules: sortedByPriority,
  };

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMd, toMarkdown(report));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
}

main();

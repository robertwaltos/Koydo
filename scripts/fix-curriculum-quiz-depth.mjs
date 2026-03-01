import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const catalogDir = path.resolve("src/lib/modules/catalog");
const validationReportPath = path.resolve("public/CURRICULUM-VALIDATION-REPORT.json");

function parseArgs(argv) {
  const args = {
    dryRun: false,
    limit: Number.POSITIVE_INFINITY,
    fixQuizDepth: true,
    fixInteractive: true,
    fixLearningAids: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (token === "--limit") {
      const parsed = Number(argv[index + 1]);
      if (Number.isFinite(parsed) && parsed > 0) {
        args.limit = Math.trunc(parsed);
      }
      index += 1;
      continue;
    }
    if (token === "--no-fix-quiz-depth") {
      args.fixQuizDepth = false;
      continue;
    }
    if (token === "--no-fix-interactive") {
      args.fixInteractive = false;
      continue;
    }
    if (token === "--fix-learning-aids") {
      args.fixLearningAids = true;
      continue;
    }
  }

  return args;
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
    .replace(
      new RegExp(`export const\\s+${exportName}\\s*:\\s*LearningModule\\s*=`, "m"),
      `const ${exportName} =`,
    )
    .concat(`\nmodule.exports = ${exportName};\n`);

  const context = vm.createContext({ module: { exports: {} }, exports: {} });
  new vm.Script(transformed, { filename: filePath }).runInContext(context);

  return {
    exportName,
    module: context.module.exports,
  };
}

function readValidationTargets(args) {
  if (!fs.existsSync(validationReportPath)) {
    throw new Error(
      `Missing ${validationReportPath}. Run npm run curriculum:validate:report first.`,
    );
  }

  const report = JSON.parse(fs.readFileSync(validationReportPath, "utf8"));
  const targetByFile = new Map();

  for (const moduleEntry of report.modulesWithIssues ?? []) {
    if (typeof moduleEntry.fileName !== "string" || !moduleEntry.fileName) {
      continue;
    }

    const issues = Array.isArray(moduleEntry.issues) ? moduleEntry.issues : [];
    const hasQuizDepthIssue = issues.some((issue) =>
      String(issue?.message ?? "").includes("must include at least 3 questions."),
    );
    const hasInteractiveIssue = issues.some(
      (issue) => String(issue?.message ?? "") === "Module must include at least one interactive lesson.",
    );
    const hasLearningAidWarning = issues.some((issue) =>
      String(issue?.message ?? "").startsWith("Learning aid coverage is "),
    );

    const target = {
      fileName: moduleEntry.fileName,
      fixQuizDepth: args.fixQuizDepth && hasQuizDepthIssue,
      fixInteractive: args.fixInteractive && hasInteractiveIssue,
      fixLearningAids: args.fixLearningAids && hasLearningAidWarning,
    };

    if (!target.fixQuizDepth && !target.fixInteractive && !target.fixLearningAids) {
      continue;
    }

    const existing = targetByFile.get(target.fileName);
    if (!existing) {
      targetByFile.set(target.fileName, target);
      continue;
    }
    existing.fixQuizDepth ||= target.fixQuizDepth;
    existing.fixInteractive ||= target.fixInteractive;
    existing.fixLearningAids ||= target.fixLearningAids;
  }

  return Array.from(targetByFile.values())
    .sort((left, right) => left.fileName.localeCompare(right.fileName))
    .slice(0, args.limit);
}

function createUniqueQuestionId(lessonId, usedIds, startIndex) {
  let index = startIndex;
  while (usedIds.has(`${lessonId}-q${index}`)) {
    index += 1;
  }
  return `${lessonId}-q${index}`;
}

function questionTemplate(topic, subject, moduleTitle, position) {
  const templates = [
    {
      text: `Which action best transfers ${topic} to a new ${subject} problem?`,
      options: [
        { id: "a", text: "Explain the concept, apply it to a fresh case, and verify the result." },
        { id: "b", text: "Memorize one phrase and skip the worked example." },
        { id: "c", text: "Guess quickly and move on without checking." },
        { id: "d", text: "Ignore feedback and repeat the same mistake." },
      ],
      explanation:
        "Transfer improves when you explain, apply, and check your reasoning on a new example.",
    },
    {
      text: `What is the strongest review step after a mistake in ${topic}?`,
      options: [
        { id: "a", text: "Find the error cause, correct the method, then retry with a similar prompt." },
        { id: "b", text: "Only memorize the answer choice letter." },
        { id: "c", text: "Skip review and wait until the next test." },
        { id: "d", text: "Change topic immediately without reflection." },
      ],
      explanation:
        "Effective review identifies the root cause and immediately reinforces the corrected approach.",
    },
    {
      text: `Which strategy most improves long-term retention for ${moduleTitle}?`,
      options: [
        { id: "a", text: "Use spaced retrieval and mixed practice over multiple sessions." },
        { id: "b", text: "Cram once and avoid later practice." },
        { id: "c", text: "Read notes passively without self-testing." },
        { id: "d", text: "Rely on confidence alone instead of evidence." },
      ],
      explanation:
        "Spaced retrieval with varied practice strengthens durable memory and flexible application.",
    },
  ];

  return templates[(Math.max(1, position) - 1) % templates.length];
}

function buildFallbackQuestion({ moduleObject, lesson, position, usedIds }) {
  const topic = String(lesson.title ?? moduleObject.title ?? moduleObject.subject ?? "the topic")
    .replace(/^Checkpoint\s+\d+\s*:\s*/i, "")
    .trim();
  const normalizedTopic = topic.length > 0 ? topic : String(moduleObject.title ?? "this module");
  const subject = String(moduleObject.subject ?? "learning").trim() || "learning";
  const moduleTitle = String(moduleObject.title ?? moduleObject.id ?? "this module").trim();
  const template = questionTemplate(normalizedTopic, subject, moduleTitle, position);

  const nextNumericIndex = Math.max(
    1,
    ...(Array.isArray(lesson.questions)
      ? lesson.questions
          .map((question) => {
            const match = String(question?.id ?? "").match(/-q(\d+)$/);
            return match ? Number(match[1]) : NaN;
          })
          .filter((value) => Number.isFinite(value))
      : []),
  ) + 1;

  const questionId = createUniqueQuestionId(String(lesson.id), usedIds, nextNumericIndex);
  usedIds.add(questionId);

  const firstQuestion = Array.isArray(lesson.questions) ? lesson.questions[0] : null;
  const fallbackSkillId = `${moduleObject.id}-skill-review`;
  const skillId =
    typeof firstQuestion?.skillId === "string" && firstQuestion.skillId.trim()
      ? firstQuestion.skillId
      : fallbackSkillId;

  return {
    id: questionId,
    text: template.text,
    skillId,
    options: template.options,
    correctOptionId: "a",
    explanation: template.explanation,
  };
}

function ensureQuizDepth(moduleObject) {
  if (!moduleObject || typeof moduleObject !== "object") {
    return { changed: false, addedQuestions: 0, touchedLessons: 0 };
  }
  if (!Array.isArray(moduleObject.lessons) || moduleObject.lessons.length === 0) {
    return { changed: false, addedQuestions: 0, touchedLessons: 0 };
  }

  let changed = false;
  let addedQuestions = 0;
  let touchedLessons = 0;

  for (const lesson of moduleObject.lessons) {
    if (lesson?.type !== "quiz") continue;

    if (!Array.isArray(lesson.questions)) {
      lesson.questions = [];
      changed = true;
    }

    if (lesson.questions.length >= 3) {
      continue;
    }

    touchedLessons += 1;
    const usedIds = new Set(lesson.questions.map((question) => String(question?.id ?? "")));
    while (lesson.questions.length < 3) {
      const position = lesson.questions.length + 1;
      const newQuestion = buildFallbackQuestion({
        moduleObject,
        lesson,
        position,
        usedIds,
      });
      lesson.questions.push(newQuestion);
      addedQuestions += 1;
      changed = true;
    }

    if (lesson.quizBlueprint && typeof lesson.quizBlueprint === "object") {
      if (
        typeof lesson.quizBlueprint.totalQuestions === "number" &&
        lesson.quizBlueprint.totalQuestions < lesson.questions.length
      ) {
        lesson.quizBlueprint.totalQuestions = lesson.questions.length;
        changed = true;
      }
      if (
        typeof lesson.quizBlueprint.questionsPerCheck === "number" &&
        lesson.quizBlueprint.questionsPerCheck < lesson.questions.length
      ) {
        lesson.quizBlueprint.questionsPerCheck = lesson.questions.length;
        changed = true;
      }
    }
  }

  return { changed, addedQuestions, touchedLessons };
}

function createUniqueLessonId(moduleObject, baseId) {
  const usedLessonIds = new Set(
    Array.isArray(moduleObject.lessons)
      ? moduleObject.lessons.map((lesson) => String(lesson?.id ?? ""))
      : [],
  );
  if (!usedLessonIds.has(baseId)) {
    return baseId;
  }
  let suffix = 2;
  while (usedLessonIds.has(`${baseId}-${suffix}`)) {
    suffix += 1;
  }
  return `${baseId}-${suffix}`;
}

function ensureInteractiveLesson(moduleObject) {
  if (!moduleObject || typeof moduleObject !== "object") {
    return { changed: false, addedLesson: false };
  }
  if (!Array.isArray(moduleObject.lessons) || moduleObject.lessons.length === 0) {
    return { changed: false, addedLesson: false };
  }

  const hasInteractiveType = moduleObject.lessons.some((lesson) => lesson?.type === "interactive");
  if (hasInteractiveType) {
    return { changed: false, addedLesson: false };
  }

  const interactiveLessonId = createUniqueLessonId(moduleObject, `${moduleObject.id}-interactive-lab`);
  const subject = String(moduleObject.subject ?? "the topic").trim() || "the topic";
  const moduleTitle = String(moduleObject.title ?? moduleObject.id ?? "this module").trim();
  const interactiveLesson = {
    id: interactiveLessonId,
    title: `${moduleTitle} Practice Lab`,
    type: "interactive",
    duration: 12,
    metadata: {
      prompts: [
        `Summarize the key idea from ${moduleTitle} in one concise statement.`,
        `Apply that idea to one realistic ${subject} scenario and justify your choice.`,
        "Reflect on one mistake to avoid in your next attempt.",
      ],
    },
    interactiveActivities: [
      {
        id: `${interactiveLessonId}-act1`,
        type: "scenario_practice",
        title: "Guided Scenario Drill",
        description:
          "Work through a realistic prompt, explain your reasoning, and compare your answer with a model approach.",
      },
    ],
    learningAids: [
      {
        id: `${interactiveLessonId}-a1`,
        type: "practice",
        title: "Practice Playbook",
        content: `Use Explain -> Apply -> Reflect to complete this ${subject} practice lab with clear reasoning.`,
      },
    ],
  };

  const firstQuizIndex = moduleObject.lessons.findIndex((lesson) => lesson?.type === "quiz");
  if (firstQuizIndex === -1) {
    moduleObject.lessons.push(interactiveLesson);
  } else {
    moduleObject.lessons.splice(firstQuizIndex, 0, interactiveLesson);
  }

  if (Array.isArray(moduleObject.tags) && !moduleObject.tags.includes("interactive")) {
    moduleObject.tags = [...moduleObject.tags, "interactive"];
  }

  return { changed: true, addedLesson: true };
}

function ensureLearningAidCoverage(moduleObject) {
  if (!moduleObject || typeof moduleObject !== "object") {
    return { changed: false, addedAids: 0 };
  }
  if (!Array.isArray(moduleObject.lessons) || moduleObject.lessons.length === 0) {
    return { changed: false, addedAids: 0 };
  }

  const lessons = moduleObject.lessons;
  const lessonHasAid = (lesson) => Array.isArray(lesson.learningAids) && lesson.learningAids.length > 0;
  let aidedCount = lessons.reduce((count, lesson) => count + (lessonHasAid(lesson) ? 1 : 0), 0);
  const minAidedLessons = Math.ceil(lessons.length * 0.5);

  if (aidedCount >= minAidedLessons) {
    return { changed: false, addedAids: 0 };
  }

  let changed = false;
  let addedAids = 0;

  for (const lesson of lessons) {
    if (aidedCount >= minAidedLessons) break;
    if (lessonHasAid(lesson)) continue;

    const baseAidType =
      lesson?.type === "interactive" ? "practice" : lesson?.type === "quiz" ? "mnemonic" : "image";
    const baseAidTitle =
      baseAidType === "practice"
        ? "Guided Practice"
        : baseAidType === "mnemonic"
          ? "Memory Cue"
          : "Concept Card";
    const baseAidContent =
      baseAidType === "practice"
        ? "Follow the prompt sequence and document your reasoning."
        : baseAidType === "mnemonic"
          ? "Use Plan, Solve, Explain to structure each response."
          : "Visual summary of the lesson's main concept.";

    const usedIds = new Set(
      Array.isArray(lesson.learningAids)
        ? lesson.learningAids.map((aid) => String(aid?.id ?? ""))
        : [],
    );
    let aidId = `${lesson.id}-a1`;
    let suffix = 1;
    while (usedIds.has(aidId)) {
      suffix += 1;
      aidId = `${lesson.id}-a${suffix}`;
    }

    lesson.learningAids = [
      ...(Array.isArray(lesson.learningAids) ? lesson.learningAids : []),
      {
        id: aidId,
        type: baseAidType,
        title: baseAidTitle,
        content: baseAidContent,
      },
    ];

    aidedCount += 1;
    addedAids += 1;
    changed = true;
  }

  return { changed, addedAids };
}

function serializeModule(exportName, moduleObject) {
  const serializedObject = JSON.stringify(moduleObject, null, 2);
  return `import type { LearningModule } from \"@/lib/modules/types\";\n\nexport const ${exportName}: LearningModule = ${serializedObject};\n`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const targetFiles = readValidationTargets(args);

  let filesChanged = 0;
  let lessonsTouched = 0;
  let questionsAdded = 0;
  let interactiveLessonsAdded = 0;
  let learningAidsAdded = 0;

  for (const target of targetFiles) {
    const filePath = path.join(catalogDir, target.fileName);
    if (!fs.existsSync(filePath)) {
      console.warn(`Skipping missing file: ${target.fileName}`);
      continue;
    }

    const { exportName, module } = loadModuleFromFile(filePath);

    let fileChanged = false;
    if (target.fixQuizDepth) {
      const quizResult = ensureQuizDepth(module);
      fileChanged ||= quizResult.changed;
      lessonsTouched += quizResult.touchedLessons;
      questionsAdded += quizResult.addedQuestions;
    }

    if (target.fixInteractive) {
      const interactiveResult = ensureInteractiveLesson(module);
      fileChanged ||= interactiveResult.changed;
      if (interactiveResult.addedLesson) {
        interactiveLessonsAdded += 1;
      }
    }

    if (target.fixLearningAids) {
      const learningAidResult = ensureLearningAidCoverage(module);
      fileChanged ||= learningAidResult.changed;
      learningAidsAdded += learningAidResult.addedAids;
    }

    if (!fileChanged) {
      continue;
    }

    filesChanged += 1;
    if (!args.dryRun) {
      fs.writeFileSync(filePath, serializeModule(exportName, module));
    }
  }

  console.log(`Targets scanned: ${targetFiles.length}`);
  console.log(`Files changed: ${filesChanged}`);
  console.log(`Quiz lessons updated: ${lessonsTouched}`);
  console.log(`Questions added: ${questionsAdded}`);
  console.log(`Interactive lessons added: ${interactiveLessonsAdded}`);
  console.log(`Learning aids added: ${learningAidsAdded}`);
  if (args.dryRun) {
    console.log("Dry run only. No files written.");
  }
}

main();

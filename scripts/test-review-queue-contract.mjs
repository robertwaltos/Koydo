import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const REVIEW_QUEUE_PATH = path.resolve(
  ROOT,
  "src/lib/mastery/review-queue.ts",
);

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function resolveTsModule(specifier, fromDirectory) {
  const resolveWithExtensions = (basePath) => {
    const candidates = [
      basePath,
      `${basePath}.ts`,
      `${basePath}.tsx`,
      path.join(basePath, "index.ts"),
      path.join(basePath, "index.tsx"),
    ];
    return candidates.find((candidate) => fs.existsSync(candidate)) ?? null;
  };

  if (specifier.startsWith("@/")) {
    const aliasPath = path.resolve(ROOT, "src", specifier.slice(2));
    const resolvedAlias = resolveWithExtensions(aliasPath);
    if (!resolvedAlias) {
      throw new Error(`Unable to resolve aliased import "${specifier}" from "${fromDirectory}".`);
    }
    return resolvedAlias;
  }

  if (specifier.startsWith("./") || specifier.startsWith("../")) {
    const relativePath = path.resolve(fromDirectory, specifier);
    const resolvedRelative = resolveWithExtensions(relativePath);
    if (!resolvedRelative) {
      throw new Error(`Unable to resolve relative import "${specifier}" from "${fromDirectory}".`);
    }
    return resolvedRelative;
  }

  throw new Error(`Unexpected runtime dependency "${specifier}" while loading contract module.`);
}

function loadTranspiledTsModule(filePath, cache = new Map()) {
  const normalizedPath = path.resolve(filePath);
  if (cache.has(normalizedPath)) {
    return cache.get(normalizedPath).exports;
  }

  const source = readRequiredFile(normalizedPath);
  const transpiled = typescript.transpileModule(source, {
    compilerOptions: {
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2020,
      esModuleInterop: true,
      importsNotUsedAsValues: typescript.ImportsNotUsedAsValues.Remove,
    },
    fileName: normalizedPath,
  }).outputText;

  const cjsModule = { exports: {} };
  cache.set(normalizedPath, cjsModule);

  const wrapped = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    transpiled,
  );

  wrapped(
    cjsModule.exports,
    (specifier) => {
      const resolvedPath = resolveTsModule(specifier, path.dirname(normalizedPath));
      return loadTranspiledTsModule(resolvedPath, cache);
    },
    cjsModule,
    normalizedPath,
    path.dirname(normalizedPath),
  );

  return cjsModule.exports;
}

function main() {
  const reviewQueueModule = loadTranspiledTsModule(REVIEW_QUEUE_PATH);
  const buildDailyReviewQueue = reviewQueueModule.buildDailyReviewQueue;

  if (typeof buildDailyReviewQueue !== "function") {
    throw new Error("Expected buildDailyReviewQueue export.");
  }

  const learningModules = [
    {
      id: "math-prereq",
      title: "Math Prerequisites",
      description: "Contract fixture",
      subject: "Math",
      lessons: [
        {
          id: "lesson-prereq",
          title: "Prerequisite Skill Lesson",
          type: "quiz",
          duration: 10,
          questions: [],
        },
        {
          id: "lesson-dependent",
          title: "Dependent Skill Lesson",
          type: "quiz",
          duration: 10,
          questions: [],
        },
      ],
    },
  ];

  const skillGraph = {
    generatedAt: "2026-03-03T00:00:00.000Z",
    moduleCount: 1,
    lessonCount: 2,
    skillCount: 2,
    edgeCount: 1,
    coverage: {
      totalModules: 1,
      modulesWithAnySkills: 1,
      modulesWithExplicitSkills: 1,
      lessonsWithAnySkills: 2,
      lessonsWithExplicitSkills: 2,
      moduleExplicitSkillCoveragePercent: 100,
    },
    nodes: [
      {
        id: "skill.prereq",
        label: "Prerequisite Skill",
        moduleId: "math-prereq",
        moduleTitle: "Math Prerequisites",
        subject: "Math",
        lessonIds: ["lesson-prereq"],
        questionCount: 0,
        isFallback: false,
        prerequisiteSkillIds: [],
      },
      {
        id: "skill.dependent",
        label: "Dependent Skill",
        moduleId: "math-prereq",
        moduleTitle: "Math Prerequisites",
        subject: "Math",
        lessonIds: ["lesson-dependent"],
        questionCount: 0,
        isFallback: false,
        prerequisiteSkillIds: ["skill.prereq"],
      },
    ],
    edges: [
      {
        fromSkillId: "skill.prereq",
        toSkillId: "skill.dependent",
        kind: "explicit_prerequisite",
        moduleId: "math-prereq",
        lessonId: "lesson-dependent",
      },
    ],
    modules: [
      {
        moduleId: "math-prereq",
        moduleTitle: "Math Prerequisites",
        subject: "Math",
        skillIds: ["skill.prereq", "skill.dependent"],
        lessonIds: ["lesson-prereq", "lesson-dependent"],
        explicitSkillCount: 2,
        fallbackSkillCount: 0,
      },
    ],
  };

  const nowMs = Date.parse("2026-03-03T12:00:00.000Z");
  const progressRows = [
    {
      lesson_id: "lesson-dependent",
      next_review_at: "2026-02-27T12:00:00.000Z",
      last_reviewed_at: "2026-02-20T12:00:00.000Z",
      repetitions: 1,
      interval: 1,
      easiness_factor: 2.1,
    },
    {
      lesson_id: "lesson-prereq",
      next_review_at: "2026-03-02T12:00:00.000Z",
      last_reviewed_at: "2026-03-01T12:00:00.000Z",
      repetitions: 3,
      interval: 2,
      easiness_factor: 2.4,
    },
    {
      lesson_id: "lesson-prereq",
      next_review_at: "2026-03-05T12:00:00.000Z",
      last_reviewed_at: "2026-03-03T10:00:00.000Z",
      repetitions: 4,
      interval: 3,
      easiness_factor: 2.5,
    },
  ];

  const masteryRows = [
    {
      skill_id: "skill.prereq",
      mastery_level: 0.42,
    },
    {
      skill_id: "skill.dependent",
      mastery_level: 0.57,
    },
  ];

  const includeBlockedResult = buildDailyReviewQueue({
    learningModules,
    skillGraph,
    progressRows,
    masteryRows,
    includeBlocked: true,
    maxItems: 10,
    nowMs,
  });

  assert.equal(includeBlockedResult.summary.dueLessonCount, 2);
  assert.equal(includeBlockedResult.queue.length, 2);
  assert.equal(includeBlockedResult.summary.blockedLessonCount, 1);
  assert.equal(includeBlockedResult.queue[0]?.lessonId, "lesson-prereq");
  assert.equal(includeBlockedResult.queue[1]?.lessonId, "lesson-dependent");
  assert.equal(includeBlockedResult.queue[1]?.blockedByPrerequisites, true);
  assert.deepEqual(includeBlockedResult.queue[1]?.missingPrerequisiteSkillIds, ["skill.prereq"]);
  assert.ok((includeBlockedResult.queue[1]?.decayPercent ?? 0) > 0);
  assert.ok((includeBlockedResult.queue[1]?.decayedConfidence ?? 0) < (includeBlockedResult.queue[1]?.rawConfidence ?? 0));
  console.log("PASS: due queue is generated and prerequisite ordering is enforced.");
  console.log("PASS: overdue lessons re-enter queue with decayed confidence.");

  const withoutBlockedResult = buildDailyReviewQueue({
    learningModules,
    skillGraph,
    progressRows,
    masteryRows,
    includeBlocked: false,
    maxItems: 10,
    nowMs,
  });

  assert.equal(withoutBlockedResult.queue.length, 1);
  assert.equal(withoutBlockedResult.queue[0]?.lessonId, "lesson-prereq");
  assert.equal(withoutBlockedResult.summary.blockedLessonCount, 0);
  assert.equal(withoutBlockedResult.summary.dueLessonCount, 2);
  console.log("PASS: blocked lessons can be excluded while preserving due count visibility.");

  console.log("PASS: review queue contract.");
}

main();

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const CHECKPOINT_MODULE_PATH = path.resolve(
  ROOT,
  "src/lib/audiobooks/checkpoint-quiz.ts",
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
  const checkpointModule = loadTranspiledTsModule(CHECKPOINT_MODULE_PATH);

  const shouldRenderAudiobookCheckpointQuiz = checkpointModule.shouldRenderAudiobookCheckpointQuiz;
  const buildAudiobookCheckpointQuestions = checkpointModule.buildAudiobookCheckpointQuestions;
  const gradeAudiobookCheckpointQuiz = checkpointModule.gradeAudiobookCheckpointQuiz;
  const buildAudiobookCheckpointLessonId = checkpointModule.buildAudiobookCheckpointLessonId;
  const buildAudiobookComprehensionSkillId = checkpointModule.buildAudiobookComprehensionSkillId;
  const buildAudiobookResumeStorageKey = checkpointModule.buildAudiobookResumeStorageKey;
  const buildAudiobookCheckpointStorageKey = checkpointModule.buildAudiobookCheckpointStorageKey;

  if (typeof shouldRenderAudiobookCheckpointQuiz !== "function") {
    throw new Error("Expected shouldRenderAudiobookCheckpointQuiz export.");
  }
  if (typeof buildAudiobookCheckpointQuestions !== "function") {
    throw new Error("Expected buildAudiobookCheckpointQuestions export.");
  }
  if (typeof gradeAudiobookCheckpointQuiz !== "function") {
    throw new Error("Expected gradeAudiobookCheckpointQuiz export.");
  }

  assert.equal(shouldRenderAudiobookCheckpointQuiz(2, 2), true);
  assert.equal(shouldRenderAudiobookCheckpointQuiz(3, 2), false);
  assert.equal(shouldRenderAudiobookCheckpointQuiz(6, 3), true);
  console.log("PASS: checkpoint interval gating is deterministic.");

  const questions = buildAudiobookCheckpointQuestions({
    bookSlug: "Alice-In-Wonderland",
    chapterNumber: 2,
    chapterTitle: "The Pool of Tears",
    chapterText: [
      "Alice followed the curious White Rabbit down the corridor and paused beside a tiny locked door.",
      "The hallway glittered with bright lamps, and a small golden key rested on a glass table.",
      "After tasting a new cake, she grew tall enough to reach the key, but forgot the door again.",
      "She took a careful breath, retraced her steps, and planned a slower attempt.",
    ].join(" "),
    questionCount: 3,
  });

  assert.equal(questions.length, 3);
  assert.ok(questions.every((question) => Array.isArray(question.options) && question.options.length === 4));
  assert.ok(questions.every((question) => typeof question.correctOptionId === "string" && question.correctOptionId.length > 0));
  assert.ok(questions.every((question) => question.options.some((option) => option.id === question.correctOptionId)));
  assert.ok(questions.every((question) => typeof question.skillId === "string" && question.skillId.includes("audiobook.comprehension")));
  console.log("PASS: quiz generation returns valid graded questions.");

  const allCorrectAnswers = Object.fromEntries(
    questions.map((question) => [question.id, question.correctOptionId]),
  );
  const perfectScore = gradeAudiobookCheckpointQuiz({
    questions,
    answersByQuestionId: allCorrectAnswers,
  });
  assert.equal(perfectScore.correctCount, 3);
  assert.equal(perfectScore.scorePercentage, 1);

  const oneWrongAnswers = { ...allCorrectAnswers };
  const firstQuestion = questions[0];
  const wrongOption = firstQuestion.options.find((option) => option.id !== firstQuestion.correctOptionId);
  if (!wrongOption) {
    throw new Error("Expected at least one wrong option.");
  }
  oneWrongAnswers[firstQuestion.id] = wrongOption.id;
  const mixedScore = gradeAudiobookCheckpointQuiz({
    questions,
    answersByQuestionId: oneWrongAnswers,
  });
  assert.equal(mixedScore.correctCount, 2);
  assert.equal(mixedScore.incorrectCount, 1);
  assert.equal(mixedScore.wrongQuestionIds.length, 1);
  console.log("PASS: quiz grading maps correct and incorrect answers consistently.");

  assert.equal(
    buildAudiobookCheckpointLessonId("Alice-In-Wonderland", 2),
    "audiobook:alice-in-wonderland:chapter:2:checkpoint",
  );
  assert.equal(
    buildAudiobookComprehensionSkillId("Alice-In-Wonderland"),
    "audiobook.comprehension.alice-in-wonderland",
  );
  assert.equal(
    buildAudiobookResumeStorageKey("Alice-In-Wonderland"),
    "koydo.audiobook.resume.v1:alice-in-wonderland",
  );
  assert.equal(
    buildAudiobookCheckpointStorageKey("Alice-In-Wonderland"),
    "koydo.audiobook.checkpoints.v1:alice-in-wonderland",
  );
  console.log("PASS: lesson/skill/storage key contracts are stable.");

  console.log("PASS: audiobook checkpoint contract.");
}

main();

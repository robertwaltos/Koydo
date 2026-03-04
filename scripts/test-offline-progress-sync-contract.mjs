import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/offline/progress-sync.ts");

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function loadTranspiledTsModule(filePath) {
  const source = readRequiredFile(filePath);
  const transpiled = typescript.transpileModule(source, {
    compilerOptions: {
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2020,
      esModuleInterop: true,
      importsNotUsedAsValues: typescript.ImportsNotUsedAsValues.Remove,
    },
    fileName: filePath,
  }).outputText;

  const cjsModule = { exports: {} };
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
      throw new Error(`Unexpected runtime dependency "${specifier}".`);
    },
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

function baseRecord(overrides = {}) {
  return {
    recordId: "record-default",
    lessonId: "lesson-default",
    scorePercentage: 0.5,
    completedAt: "2026-03-03T10:00:00.000Z",
    totalQuestions: 10,
    source: "quiz",
    createdAt: "2026-03-03T10:00:00.000Z",
    ...overrides,
  };
}

async function main() {
  const mod = loadTranspiledTsModule(MODULE_PATH);
  const resolveOfflineProgressConflicts = mod.resolveOfflineProgressConflicts;
  const normalizeOfflineProgressRecord = mod.normalizeOfflineProgressRecord;

  assert.equal(typeof resolveOfflineProgressConflicts, "function");
  assert.equal(typeof normalizeOfflineProgressRecord, "function");
  console.log("PASS: offline progress sync exports contract");

  const normalized = normalizeOfflineProgressRecord(
    baseRecord({
      scorePercentage: 1.4,
      totalQuestions: -4,
      lessonId: " lesson-a ",
    }),
  );
  assert.equal(normalized.scorePercentage, 1);
  assert.equal(normalized.totalQuestions, 1);
  assert.equal(normalized.lessonId, "lesson-a");
  console.log("PASS: normalization clamps score + totalQuestions + lessonId");

  const records = [
    baseRecord({
      recordId: "a-old-low",
      lessonId: "lesson-a",
      scorePercentage: 0.5,
      completedAt: "2026-03-03T08:00:00.000Z",
      totalQuestions: 10,
    }),
    baseRecord({
      recordId: "a-new-mid",
      lessonId: "lesson-a",
      scorePercentage: 0.6,
      completedAt: "2026-03-03T09:00:00.000Z",
      totalQuestions: 10,
    }),
    baseRecord({
      recordId: "a-new-high",
      lessonId: "lesson-a",
      scorePercentage: 0.9,
      completedAt: "2026-03-03T09:00:00.000Z",
      totalQuestions: 12,
    }),
    baseRecord({
      recordId: "b-late",
      lessonId: "lesson-b",
      scorePercentage: 0.7,
      completedAt: "2026-03-03T10:30:00.000Z",
      totalQuestions: 9,
    }),
    baseRecord({
      recordId: "b-early",
      lessonId: "lesson-b",
      scorePercentage: 0.95,
      completedAt: "2026-03-03T07:30:00.000Z",
      totalQuestions: 9,
    }),
  ];

  const resolution = resolveOfflineProgressConflicts(records);
  assert.equal(resolution.resolved.length, 2);

  const lessonA = resolution.resolved.find((item) => item.lessonId === "lesson-a");
  const lessonB = resolution.resolved.find((item) => item.lessonId === "lesson-b");

  assert.ok(lessonA);
  assert.ok(lessonB);
  assert.equal(lessonA.winner.recordId, "a-new-high");
  assert.deepEqual(lessonA.mergedRecordIds, ["a-new-high", "a-new-mid", "a-old-low"]);
  assert.equal(lessonB.winner.recordId, "b-late");
  assert.deepEqual(lessonB.mergedRecordIds, ["b-early", "b-late"]);
  assert.deepEqual(resolution.droppedRecordIds, ["a-new-mid", "a-old-low", "b-early"]);
  console.log("PASS: deterministic conflict resolution for offline progress queue");

  // Final ordering must be deterministic by completion time then record ID.
  assert.equal(resolution.resolved[0].lessonId, "lesson-a");
  assert.equal(resolution.resolved[1].lessonId, "lesson-b");
  console.log("PASS: deterministic resolved ordering");

  console.log("PASS: offline progress sync contract.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


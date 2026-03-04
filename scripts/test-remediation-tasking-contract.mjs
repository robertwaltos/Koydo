import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const REMEDIATION_PATH = path.resolve(
  ROOT,
  "src/lib/exam/remediation-tasking.ts",
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
  const remediationTaskingModule = loadTranspiledTsModule(REMEDIATION_PATH);
  const buildRemediationTasksFromErrors = remediationTaskingModule.buildRemediationTasksFromErrors;
  const buildSkillCreditMap = remediationTaskingModule.buildSkillCreditMap;

  if (typeof buildRemediationTasksFromErrors !== "function") {
    throw new Error("Expected buildRemediationTasksFromErrors export.");
  }
  if (typeof buildSkillCreditMap !== "function") {
    throw new Error("Expected buildSkillCreditMap export.");
  }

  const rows = [
    {
      id: "8ceca7ec-b05d-4f7f-8d20-1a7031788610",
      module_id: "math-algebra-101",
      lesson_id: "linear-equations-201",
      question_id: "q-1",
      skill_id: "algebra.linear-equations",
      error_type: "concept_gap",
      question_text: "Solve 2x + 3 = 11",
      notes: null,
      metadata: { chunkId: "chunk-intro", chunkIndex: 2 },
      resolved: false,
      resolved_at: null,
      created_at: "2026-03-02T10:00:00.000Z",
      updated_at: "2026-03-02T10:00:00.000Z",
    },
    {
      id: "d1bb32ee-f07c-43a6-b5b7-4e53fac958bb",
      module_id: "math-algebra-101",
      lesson_id: "linear-equations-201",
      question_id: "q-2",
      skill_id: "algebra.linear-equations",
      error_type: "incorrect_answer",
      question_text: "Solve x - 4 = 10",
      notes: "Rushed answer",
      metadata: { chunkId: "chunk-practice", chunkIndex: 4 },
      resolved: false,
      resolved_at: null,
      created_at: "2026-03-02T09:00:00.000Z",
      updated_at: "2026-03-02T09:00:00.000Z",
    },
    {
      id: "1e41f9e4-0ec5-40a6-b82f-fda67265fce6",
      module_id: "math-algebra-101",
      lesson_id: "linear-equations-201",
      question_id: "q-3",
      skill_id: "algebra.fractions",
      error_type: "careless_mistake",
      question_text: "Simplify 6/8",
      notes: null,
      metadata: { chunkId: "chunk-recap", chunkIndex: 6 },
      resolved: true,
      resolved_at: "2026-03-02T11:00:00.000Z",
      created_at: "2026-03-02T08:30:00.000Z",
      updated_at: "2026-03-02T11:00:00.000Z",
    },
  ];

  const openTasksOnly = buildRemediationTasksFromErrors(rows, {
    includeCompleted: false,
    maxItems: 25,
  });

  assert.equal(openTasksOnly.summary.totalCount, 2);
  assert.equal(openTasksOnly.summary.openCount, 2);
  assert.equal(openTasksOnly.summary.completedCount, 0);
  assert.equal(openTasksOnly.tasks[0]?.taskId, "8ceca7ec-b05d-4f7f-8d20-1a7031788610");
  assert.equal(openTasksOnly.tasks[0]?.priority, "high");
  assert.equal(openTasksOnly.tasks[0]?.sourceChunkId, "chunk-intro");
  assert.equal(openTasksOnly.tasks[0]?.sourceChunkIndex, 2);
  assert.equal(openTasksOnly.tasks[1]?.sourceChunkId, "chunk-practice");
  assert.equal(openTasksOnly.summary.byPriority.high, 1);
  assert.equal(openTasksOnly.summary.byPriority.medium, 1);
  assert.equal(openTasksOnly.summary.byErrorType[0]?.errorType, "concept_gap");
  console.log("PASS: unresolved wrong-answer rows are converted into remediation tasks.");
  console.log("PASS: remediation tasks retain source lesson/chunk linkage.");

  const withCompleted = buildRemediationTasksFromErrors(rows, {
    includeCompleted: true,
    maxItems: 25,
  });

  assert.equal(withCompleted.summary.totalCount, 3);
  assert.equal(withCompleted.summary.completedCount, 1);
  assert.equal(withCompleted.tasks[2]?.status, "completed");
  assert.equal(withCompleted.tasks[2]?.taskId, "1e41f9e4-0ec5-40a6-b82f-fda67265fce6");
  console.log("PASS: completed remediation items remain traceable when requested.");

  const credits = buildSkillCreditMap(rows);
  assert.equal(credits.get("algebra.linear-equations"), 2);
  assert.equal(credits.has("algebra.fractions"), false);
  console.log("PASS: mastery credit map includes unresolved skills only.");

  console.log("PASS: remediation tasking contract.");
}

main();

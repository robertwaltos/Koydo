import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/forge/storyforge/phase1-cinema.ts");

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

function main() {
  const mod = loadTranspiledTsModule(MODULE_PATH);
  const getStoryForgePhase1Titles = mod.getStoryForgePhase1Titles;
  const getStoryForgeRightsCatalog = mod.getStoryForgeRightsCatalog;
  const buildStoryForgePhase1Portfolio = mod.buildStoryForgePhase1Portfolio;
  const buildStoryForgeAcceptanceSnapshot = mod.buildStoryForgeAcceptanceSnapshot;
  const buildStoryForgeComprehensionSkillId = mod.buildStoryForgeComprehensionSkillId;
  const buildStoryForgeCheckpointLessonId = mod.buildStoryForgeCheckpointLessonId;

  assert.equal(typeof getStoryForgePhase1Titles, "function");
  assert.equal(typeof getStoryForgeRightsCatalog, "function");
  assert.equal(typeof buildStoryForgePhase1Portfolio, "function");
  assert.equal(typeof buildStoryForgeAcceptanceSnapshot, "function");
  assert.equal(typeof buildStoryForgeComprehensionSkillId, "function");
  assert.equal(typeof buildStoryForgeCheckpointLessonId, "function");
  console.log("PASS: storyforge cinema contract exports");

  const titles = getStoryForgePhase1Titles();
  assert.equal(Array.isArray(titles), true);
  assert.equal(titles.length, 5);
  console.log("PASS: phase 1 StoryForge title set contains five canonical titles");

  const rightsCatalog = getStoryForgeRightsCatalog();
  for (const title of titles) {
    const rights = rightsCatalog[title.canonicalSlug];
    assert.ok(rights);
    assert.equal(rights.rightsStatus, "public_domain_verified");
  }
  console.log("PASS: all phase 1 titles have verified public-domain rights records");

  const portfolio = buildStoryForgePhase1Portfolio({
    targetTiers: ["tier1", "tier3"],
  });
  assert.equal(portfolio.length, 5);

  for (const film of portfolio) {
    assert.equal(film.productionStatus, "ready");
    assert.ok(film.totalSceneCount > 0);
    assert.ok(film.totalEstimatedDurationSec > 0);
    assert.ok(film.checkpointQuizzes.length > 0);
    assert.ok(film.tierDeliverables.some((tier) => tier.tier === "tier1"));
    assert.ok(film.tierDeliverables.some((tier) => tier.tier === "tier3"));
    assert.ok(film.pipelineSteps.length >= 8);
    assert.ok(film.pipelineSteps.every((step) => step.status === "ready"));

    for (const quiz of film.checkpointQuizzes) {
      assert.equal(quiz.questions.length, 3);
      assert.equal(quiz.masteryFeed.answersEndpoint, "/api/answers");
      assert.equal(quiz.masteryFeed.progressEndpoint, "/api/progress");
      assert.ok(quiz.skillId.startsWith("storyforge.comprehension."));
      assert.ok(quiz.lessonId.startsWith("storyforge:"));
    }
  }
  console.log("PASS: end-to-end film packages include scenes, checkpoints, and mastery feed contracts");

  const snapshot = buildStoryForgeAcceptanceSnapshot(portfolio);
  assert.equal(snapshot.phase1TitleCount, 5);
  assert.equal(snapshot.producedEndToEndCount, 5);
  assert.equal(snapshot.rightsVerifiedCount, 5);
  assert.equal(snapshot.supportsTier1, true);
  assert.equal(snapshot.supportsTier3, true);
  assert.ok(snapshot.checkpointQuizCount >= 5);
  assert.equal(snapshot.masteryFeedReadyCount, snapshot.checkpointQuizCount);
  console.log("PASS: acceptance snapshot satisfies E-16 criteria contract");

  assert.equal(
    buildStoryForgeComprehensionSkillId("Alice In Wonderland"),
    "storyforge.comprehension.alice-in-wonderland",
  );
  assert.equal(
    buildStoryForgeCheckpointLessonId("wizard-of-oz", 2, 3),
    "storyforge:wizard-of-oz:chapter:2:scene:4:checkpoint",
  );
  console.log("PASS: mastery skill and checkpoint lesson IDs are deterministic");

  console.log("PASS: storyforge cinema contract.");
}

main();

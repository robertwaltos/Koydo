import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/creator/pipeline.ts");

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
  const moderateCreatorText = mod.moderateCreatorText;
  const buildRubricScoreFromBreakdown = mod.buildRubricScoreFromBreakdown;
  const isValidSubmissionTransition = mod.isValidSubmissionTransition;
  const canPublishSubmission = mod.canPublishSubmission;
  const normalizeProvenanceMetadata = mod.normalizeProvenanceMetadata;
  const normalizeRightsMetadata = mod.normalizeRightsMetadata;
  const MINIMUM_PUBLISH_RUBRIC_SCORE = mod.MINIMUM_PUBLISH_RUBRIC_SCORE;

  assert.equal(typeof moderateCreatorText, "function");
  assert.equal(typeof buildRubricScoreFromBreakdown, "function");
  assert.equal(typeof isValidSubmissionTransition, "function");
  assert.equal(typeof canPublishSubmission, "function");
  assert.equal(typeof normalizeProvenanceMetadata, "function");
  assert.equal(typeof normalizeRightsMetadata, "function");
  assert.equal(typeof MINIMUM_PUBLISH_RUBRIC_SCORE, "number");
  console.log("PASS: creator pipeline contract exports");

  const safeTitle = moderateCreatorText("Algebra Story Pack", { maxLength: 140 });
  const unsafeTitle = moderateCreatorText("Visit https://bad.example for details", { maxLength: 140 });
  assert.equal(safeTitle.ok, true);
  assert.equal(unsafeTitle.ok, false);
  console.log("PASS: creator moderation guard blocks unsafe links");

  const rubricScore = buildRubricScoreFromBreakdown({
    instructionalQuality: 4.5,
    factualAccuracy: 4.0,
    originality: 4.0,
    safetyCompliance: 4.5,
  });
  assert.equal(rubricScore, 85);
  console.log("PASS: rubric score derivation from structured review");

  assert.equal(isValidSubmissionTransition("draft", "in_review"), true);
  assert.equal(isValidSubmissionTransition("in_review", "approved"), true);
  assert.equal(isValidSubmissionTransition("approved", "published"), true);
  assert.equal(isValidSubmissionTransition("published", "draft"), false);
  console.log("PASS: draft -> review -> publish transition contract");

  const provenance = normalizeProvenanceMetadata({
    sourceType: "licensed",
    sourceUri: "https://content.example/license?id=42",
    sourceLicense: "CC BY 4.0",
    sourceAttribution: "Koydo Creator Team",
  });
  const rights = normalizeRightsMetadata({
    rightsOwner: "Koydo Labs",
    rightsBasis: "licensed",
    rightsVerified: true,
    evidenceRef: "contract-2026-03-03",
  });

  assert.equal(provenance.sourceType, "licensed");
  assert.equal(rights.rightsOwner, "Koydo Labs");
  assert.equal(rights.rightsVerified, true);
  console.log("PASS: provenance + rights metadata normalization contract");

  const publishBlockedByRubric = canPublishSubmission({
    status: "approved",
    rubricScore: MINIMUM_PUBLISH_RUBRIC_SCORE - 1,
    rights,
  });
  assert.equal(publishBlockedByRubric.ok, false);

  const publishBlockedByRights = canPublishSubmission({
    status: "approved",
    rubricScore,
    rights: {
      ...rights,
      rightsVerified: false,
    },
  });
  assert.equal(publishBlockedByRights.ok, false);

  const publishAllowed = canPublishSubmission({
    status: "approved",
    rubricScore,
    rights,
  });
  assert.equal(publishAllowed.ok, true);
  console.log("PASS: publish gate requires rubric threshold + verified rights");

  console.log("PASS: creator pipeline contract.");
}

main();
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/social/cohort-challenges.ts");

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
  const moderateUserGeneratedText = mod.moderateUserGeneratedText;
  const isValidChallengeLifecycleTransition = mod.isValidChallengeLifecycleTransition;
  const validateChallengeEventPayload = mod.validateChallengeEventPayload;
  const applyValidatedEventToLeaderboard = mod.applyValidatedEventToLeaderboard;
  const rankChallengeLeaderboard = mod.rankChallengeLeaderboard;
  const buildChallengeAccountabilityNudge = mod.buildChallengeAccountabilityNudge;

  assert.equal(typeof moderateUserGeneratedText, "function");
  assert.equal(typeof isValidChallengeLifecycleTransition, "function");
  assert.equal(typeof validateChallengeEventPayload, "function");
  assert.equal(typeof applyValidatedEventToLeaderboard, "function");
  assert.equal(typeof rankChallengeLeaderboard, "function");
  assert.equal(typeof buildChallengeAccountabilityNudge, "function");
  console.log("PASS: social cohort challenge contract exports");

  const safeText = moderateUserGeneratedText("Algebra Circle A", { maxLength: 80 });
  const unsafeText = moderateUserGeneratedText("Join us at https://example.com", { maxLength: 80 });
  const unsafeContact = moderateUserGeneratedText("Call me at 555-555-1212", { maxLength: 80 });

  assert.equal(safeText.ok, true);
  assert.equal(unsafeText.ok, false);
  assert.equal(unsafeContact.ok, false);
  console.log("PASS: social moderation blocks links/contact info");

  assert.equal(isValidChallengeLifecycleTransition("draft", "active"), true);
  assert.equal(isValidChallengeLifecycleTransition("active", "completed"), true);
  assert.equal(isValidChallengeLifecycleTransition("active", "draft"), false);
  console.log("PASS: challenge lifecycle transition guard");

  const rejectedEvent = validateChallengeEventPayload({
    source: "lesson_quiz",
    sourceEventId: "lesson:weak:1",
    scorePercentage: 0.32,
    totalQuestions: 12,
  });

  const acceptedEventA = validateChallengeEventPayload({
    source: "lesson_quiz",
    sourceEventId: "lesson:algebra:attempt-1",
    scorePercentage: 0.88,
    totalQuestions: 16,
    completedAt: "2026-03-03T10:00:00.000Z",
  });

  const acceptedEventB = validateChallengeEventPayload({
    source: "assignment",
    sourceEventId: "assign:algebra:submission-4",
    scorePercentage: 0.91,
    totalQuestions: 20,
    completedAt: "2026-03-03T10:05:00.000Z",
  });

  assert.equal(rejectedEvent.ok, false);
  assert.equal(acceptedEventA.ok, true);
  assert.equal(acceptedEventB.ok, true);
  console.log("PASS: leaderboard accepts validated events only");

  const rowA1 = applyValidatedEventToLeaderboard(
    null,
    acceptedEventA.event,
    "user-a",
  );
  const rowA2 = applyValidatedEventToLeaderboard(
    rowA1,
    acceptedEventB.event,
    "user-a",
  );

  const acceptedEventC = validateChallengeEventPayload({
    source: "daily_challenge",
    sourceEventId: "daily:2026-03-03",
    scorePercentage: 0.87,
    totalQuestions: 10,
    completedAt: "2026-03-03T10:03:00.000Z",
  });
  assert.equal(acceptedEventC.ok, true);

  const rowB = applyValidatedEventToLeaderboard(
    null,
    acceptedEventC.event,
    "user-b",
  );

  const ranked = rankChallengeLeaderboard([rowB, rowA2]);
  assert.equal(ranked.length, 2);
  assert.equal(ranked[0].userId, "user-a");
  assert.ok(ranked[0].totalPoints > ranked[1].totalPoints);
  assert.equal(ranked[0].validatedEventCount, 2);
  assert.equal(ranked[1].validatedEventCount, 1);
  console.log("PASS: leaderboard rankings update deterministically from validated events");

  const nudge = buildChallengeAccountabilityNudge({
    rank: ranked[0].rank,
    participantCount: ranked.length,
    pointsAwarded: acceptedEventB.event.pointsAwarded,
  });
  assert.equal(typeof nudge, "string");
  assert.ok(nudge.length > 10);
  console.log("PASS: accountability nudge text contract");

  console.log("PASS: social cohorts + challenges contract.");
}

main();
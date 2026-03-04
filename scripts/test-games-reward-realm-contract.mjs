import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const REWARD_REALM_MODULE_PATH = path.resolve(ROOT, "src/lib/games/reward-realm.ts");
const GAMES_STATE_ROUTE_PATH = path.resolve(ROOT, "src/app/api/games/state/route.ts");
const GAMES_HUB_PAGE_PATH = path.resolve(ROOT, "src/app/games/page.tsx");
const GAME_PLAYER_PAGE_PATH = path.resolve(ROOT, "src/app/games/[gameId]/page.tsx");

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function loadTranspiledTsModule(filePath, runtimeRequire) {
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
    runtimeRequire,
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

const MOCK_GAME_REGISTRY = {
  "core-alpha": { id: "core-alpha", track: "Educational Core" },
  "core-beta": { id: "core-beta", track: "Educational Core" },
  "core-gamma": { id: "core-gamma", track: "Educational Core" },
  "core-delta": { id: "core-delta", track: "Educational Core" },
  "reward-001": { id: "reward-001", track: "Reward Realm" },
};

function buildPointsEvent({
  gameId,
  stars,
  source = "mini_game",
  includeCustomGameId = true,
}) {
  return {
    metadata: {
      source,
      ...(includeCustomGameId ? { customGameId: gameId } : {}),
      result: {
        gameType: gameId,
        stars,
      },
    },
  };
}

function assertSourceContains(sourcePath, matcher, message) {
  const source = readRequiredFile(sourcePath);
  const ok = typeof matcher === "string" ? source.includes(matcher) : matcher.test(source);
  assert.ok(ok, message);
}

function main() {
  const rewardRealmModule = loadTranspiledTsModule(
    REWARD_REALM_MODULE_PATH,
    (specifier) => {
      if (specifier === "@/lib/games/catalog") {
        return {
          getRegisteredGame: (gameId) => MOCK_GAME_REGISTRY[gameId] ?? null,
        };
      }
      throw new Error(`Unexpected runtime dependency "${specifier}".`);
    },
  );

  const computeRewardRealmMasteryFromEvents =
    rewardRealmModule.computeRewardRealmMasteryFromEvents;
  const REWARD_REALM_UNLOCK_POLICY = rewardRealmModule.REWARD_REALM_UNLOCK_POLICY;

  assert.equal(typeof computeRewardRealmMasteryFromEvents, "function");
  assert.equal(typeof REWARD_REALM_UNLOCK_POLICY, "object");
  assert.equal(REWARD_REALM_UNLOCK_POLICY.minEducationalRuns, 12);
  assert.equal(REWARD_REALM_UNLOCK_POLICY.minDistinctEducationalGames, 4);
  assert.equal(REWARD_REALM_UNLOCK_POLICY.minPerfectEducationalRuns, 3);
  assert.equal(REWARD_REALM_UNLOCK_POLICY.minAverageEducationalStars, 2.2);
  console.log("PASS: reward realm mastery exports and policy thresholds");

  const lockedEvents = [
    ...[
      ["core-alpha", 3],
      ["core-beta", 3],
      ["core-gamma", 2],
      ["core-alpha", 2],
      ["core-beta", 2],
      ["core-gamma", 2],
      ["core-alpha", 2],
      ["core-beta", 2],
      ["core-gamma", 2],
      ["core-alpha", 2],
      ["core-beta", 2],
    ].map(([gameId, stars]) => buildPointsEvent({ gameId, stars })),
    buildPointsEvent({ gameId: "reward-001", stars: 3 }),
    buildPointsEvent({ gameId: "missing-game-id", stars: 3 }),
  ];
  const lockedSnapshot = computeRewardRealmMasteryFromEvents(lockedEvents);
  assert.equal(lockedSnapshot.unlocked, false);
  assert.equal(lockedSnapshot.progress.educationalRuns, 11);
  assert.equal(lockedSnapshot.progress.distinctEducationalGames, 3);
  assert.equal(lockedSnapshot.progress.perfectEducationalRuns, 2);
  assert.equal(lockedSnapshot.progress.averageEducationalStars, 2.18);
  assert.equal(lockedSnapshot.completed.educationalRuns, false);
  assert.equal(lockedSnapshot.completed.distinctEducationalGames, false);
  assert.equal(lockedSnapshot.completed.perfectEducationalRuns, false);
  assert.equal(lockedSnapshot.completed.averageEducationalStars, false);
  console.log("PASS: locked snapshot when educational mastery is below threshold");

  const unlockedSeed = [
    ["core-alpha", 3, "daily_challenge", false],
    ["core-beta", 3, "mini_game", true],
    ["core-gamma", 3, "mini_game", true],
    ["core-delta", 2, "mini_game", true],
    ["core-alpha", 2, "mini_game", true],
    ["core-beta", 2, "mini_game", true],
    ["core-gamma", 2, "mini_game", true],
    ["core-delta", 2, "mini_game", true],
    ["core-alpha", 2, "mini_game", true],
    ["core-beta", 2, "mini_game", true],
    ["core-gamma", 2, "mini_game", true],
    ["core-delta", 2, "mini_game", true],
  ];
  const unlockedEvents = unlockedSeed.map(([gameId, stars, source, includeCustomGameId]) =>
    buildPointsEvent({
      gameId,
      stars,
      source,
      includeCustomGameId,
    }),
  );
  unlockedEvents.push(buildPointsEvent({ gameId: "reward-001", stars: 3 }));

  const unlockedSnapshot = computeRewardRealmMasteryFromEvents(unlockedEvents);
  assert.equal(unlockedSnapshot.unlocked, true);
  assert.equal(unlockedSnapshot.progress.educationalRuns, 12);
  assert.equal(unlockedSnapshot.progress.distinctEducationalGames, 4);
  assert.equal(unlockedSnapshot.progress.perfectEducationalRuns, 3);
  assert.equal(unlockedSnapshot.progress.averageEducationalStars, 2.25);
  assert.equal(unlockedSnapshot.completed.educationalRuns, true);
  assert.equal(unlockedSnapshot.completed.distinctEducationalGames, true);
  assert.equal(unlockedSnapshot.completed.perfectEducationalRuns, true);
  assert.equal(unlockedSnapshot.completed.averageEducationalStars, true);
  console.log("PASS: unlock snapshot when all educational mastery thresholds are met");

  assertSourceContains(
    GAMES_STATE_ROUTE_PATH,
    /registeredGame\?\.track\s*===\s*"Reward Realm"/,
    "Expected /api/games/state to branch on Reward Realm track.",
  );
  assertSourceContains(
    GAMES_STATE_ROUTE_PATH,
    /requiresEducationalMastery:\s*true/,
    "Expected /api/games/state to return requiresEducationalMastery when locked.",
  );
  assertSourceContains(
    GAMES_STATE_ROUTE_PATH,
    "Reward Realm is locked. Complete educational mastery milestones first.",
    "Expected /api/games/state locked error message contract.",
  );
  assertSourceContains(
    GAMES_STATE_ROUTE_PATH,
    /score:\s*z\.number\(\)\.int\(\)\.min\(0\)\.max\(MAX_GAME_SCORE\)/,
    "Expected /api/games/state to cap incoming score payloads.",
  );
  assertSourceContains(
    GAMES_STATE_ROUTE_PATH,
    /maxScore:\s*z\.number\(\)\.int\(\)\.min\(1\)\.max\(MAX_GAME_SCORE\)/,
    "Expected /api/games/state to cap incoming maxScore payloads.",
  );
  assertSourceContains(
    GAMES_STATE_ROUTE_PATH,
    /customGameId:[\s\S]*?refine\(isValidGameId,\s*"Invalid custom game ID"\)/,
    "Expected /api/games/state to validate customGameId against game ID policy.",
  );
  assertSourceContains(
    GAMES_STATE_ROUTE_PATH,
    "Score cannot exceed maxScore.",
    "Expected /api/games/state to reject score payloads that exceed maxScore.",
  );
  console.log("PASS: API route enforces Reward Realm mastery contract");

  assertSourceContains(
    GAMES_HUB_PAGE_PATH,
    "/api/games/reward-realm/status",
    "Expected games hub to fetch Reward Realm status.",
  );
  assertSourceContains(
    GAMES_HUB_PAGE_PATH,
    "Reward Realm Gate",
    "Expected games hub Reward Realm gate panel.",
  );
  assertSourceContains(
    GAMES_HUB_PAGE_PATH,
    "Reward Locked",
    "Expected games hub lock badge for Reward Realm entries.",
  );
  console.log("PASS: games hub includes Reward Realm lock UX contract");

  assertSourceContains(
    GAME_PLAYER_PAGE_PATH,
    "/api/games/reward-realm/status",
    "Expected game player page to fetch Reward Realm status.",
  );
  assertSourceContains(
    GAME_PLAYER_PAGE_PATH,
    "const rewardRealmLocked = useMemo",
    "Expected game player reward lock memo contract.",
  );
  assertSourceContains(
    GAME_PLAYER_PAGE_PATH,
    "Reward Realm Locked",
    "Expected game player lock screen heading for Reward Realm.",
  );
  console.log("PASS: game player includes Reward Realm lock UX contract");

  console.log("PASS: reward realm contract.");
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}

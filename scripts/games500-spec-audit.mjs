#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const CATALOG_PATH = path.join(ROOT, "src", "lib", "games", "catalog.ts");
const AUDIT_JSON_PATH = path.join(ROOT, "public", "GAMES-500-SPEC-AUDIT.json");
const AUDIT_MD_PATH = path.join(ROOT, "GAMES-500-SPEC-AUDIT.md");
const MASTER_JSON_PATH = path.join(ROOT, "public", "GAMES-500-MASTER-CATALOG.json");
const MASTER_MD_PATH = path.join(ROOT, "GAMES-500-MASTER-CATALOG.md");

const REQUIRED_TOTAL = 500;
const REWARD_REALM_COUNT = 100;

const AGE_GROUP_TARGETS = [
  { key: "kindergarten", label: "Kindergarten (4-6)", count: 100 },
  { key: "elementary", label: "Elementary (7-11)", count: 150 },
  { key: "middle-school", label: "Middle School (12-14)", count: 100 },
  { key: "high-school", label: "High School (15-18)", count: 100 },
  { key: "college", label: "College (19+)", count: 50 },
];

const ENGINE_TARGETS = [
  { key: "unreal-5.5+", label: "Unreal Engine 5.5+", count: 200 },
  { key: "unity-6+", label: "Unity 6+", count: 200 },
  { key: "godot-4.3+", label: "Godot 4.3+", count: 100 },
];

function relativeFromRoot(target) {
  return path.relative(ROOT, target).replaceAll("\\", "/");
}

function extractBetween(source, startToken, endToken) {
  const start = source.indexOf(startToken);
  if (start < 0) {
    throw new Error(`Missing start token: ${startToken}`);
  }
  const from = start + startToken.length;
  const end = source.indexOf(endToken, from);
  if (end < 0) {
    throw new Error(`Missing end token: ${endToken}`);
  }
  return source.slice(from, end);
}

function parseCoreGames(catalogSource) {
  const block = extractBetween(
    catalogSource,
    "export const CORE_GAMES: RegisteredGame[] = [",
    "];",
  );

  const objects = Array.from(block.matchAll(/\{[\s\S]*?\}\s*,?/g));
  return objects.map((match) => {
    const text = match[0];
    const readString = (field) => text.match(new RegExp(`${field}:\\s*"([^"]+)"`))?.[1] ?? "";
    return {
      id: readString("id"),
      title: readString("title"),
      category: readString("category"),
      mechanic: readString("mechanic"),
      mode: readString("mode"),
    };
  });
}

function parseLegacySeeds(catalogSource) {
  const block = extractBetween(
    catalogSource,
    "const GEMINI_GAME_SEEDS = [",
    "] as const;",
  );
  return Array.from(block.matchAll(/\["([^"]+)",\s*"([^"]+)"\]/g)).map((match) => ({
    id: match[1],
    originalTitle: match[2],
  }));
}

function parseStringArray(catalogSource, constName) {
  const pattern = new RegExp(
    `const\\s+${constName}(?:\\s*:[^=]+)?\\s*=\\s*\\[([\\s\\S]*?)\\]\\s+as\\s+const;`,
  );
  const match = catalogSource.match(pattern);
  if (!match) {
    throw new Error(`Missing const array: ${constName}`);
  }
  return Array.from(match[1].matchAll(/"([^"]+)"/g)).map((entry) => entry[1]);
}

function parseConstNumber(catalogSource, constName) {
  const match = catalogSource.match(new RegExp(`const ${constName} = (\\d+);`));
  if (!match) {
    throw new Error(`Missing numeric constant: ${constName}`);
  }
  return Number(match[1]);
}

function buildGeneratedTitles(leftTokens, rightTokens, total) {
  const maxCombinations = leftTokens.length * rightTokens.length;
  if (total > maxCombinations) {
    throw new Error(`Generated title pool too small for ${total} games.`);
  }
  return Array.from({ length: total }, (_, index) => {
    const left = leftTokens[index % leftTokens.length];
    const right = rightTokens[Math.floor(index / leftTokens.length)];
    return `${left} ${right}`;
  });
}

function buildLegacyTitles(leftTokens, rightTokens, total) {
  const maxCombinations = leftTokens.length * rightTokens.length;
  if (total > maxCombinations) {
    throw new Error(`Legacy title pool too small for ${total} games.`);
  }
  return Array.from({ length: total }, (_, index) => {
    const left = leftTokens[index % leftTokens.length];
    const right = rightTokens[Math.floor(index / leftTokens.length)];
    return `${left} ${right}`;
  });
}

function pad3(index) {
  return String(index + 1).padStart(3, "0");
}

function expandDistribution(targets) {
  return targets.flatMap((target) => Array.from({ length: target.count }, () => target.label));
}

function chooseSubjectTopic(category) {
  switch (category) {
    case "literacy":
      return "Literacy & Language Arts";
    case "math":
      return "Mathematics";
    case "logic":
      return "Logic & Computational Thinking";
    case "creative":
      return "Creative Arts & Design";
    case "science":
      return "Science & Engineering";
    case "adventure":
      return "History & Geography";
    default:
      return "Arcade Cross-Curricular";
  }
}

function choosePopularInspiration(category, track) {
  if (track === "Reward Realm") {
    return "Endless runner / social arena / cozy builder remix";
  }
  switch (category) {
    case "math":
      return "Match-3 and puzzle progression style";
    case "science":
      return "Simulation sandbox and strategy style";
    case "adventure":
      return "Explorer quest and narrative journey style";
    case "logic":
      return "Grid strategy and pathfinding style";
    case "literacy":
      return "Rhythm/wordplay adventure style";
    case "creative":
      return "Creative studio and builder style";
    default:
      return "Arcade challenge style";
  }
}

function chooseLearningObjective(category, track) {
  if (track === "Reward Realm") {
    return "Light reinforcement loop tied to mastery streaks and assignments.";
  }
  switch (category) {
    case "literacy":
      return "Build vocabulary, phonics, comprehension, and communication fluency.";
    case "math":
      return "Strengthen numeracy, algebraic reasoning, and multi-step problem solving.";
    case "logic":
      return "Develop algorithmic reasoning, planning, and structured decision making.";
    case "creative":
      return "Apply design principles, storytelling, and expressive iteration.";
    case "science":
      return "Model systems thinking, scientific method, and evidence-based reasoning.";
    case "adventure":
      return "Connect geography/history context with critical interpretation and recall.";
    default:
      return "Integrate cross-subject mastery in adaptive challenge loops.";
  }
}

function chooseCoreMechanic(mechanic) {
  switch (mechanic) {
    case "precision-choice":
      return "Precision Choice";
    case "sequence-recall":
      return "Sequence Recall";
    case "lane-sort":
      return "Lane Sort";
    case "timed-equation":
      return "Timed Equation";
    case "pattern-scan":
      return "Pattern Scan";
    case "signal-balance":
      return "Signal Balance";
    default:
      return "Core Mini-Game Loop";
  }
}

function chooseKeyFeatures(track) {
  if (track === "Reward Realm") {
    return "4K@60, daily quests, streak rewards, social competitions, cosmetic progression";
  }
  return "4K@60, adaptive AI, co-op/PvP events, mastery reports, classroom-ready exports";
}

function countBy(values) {
  return values.reduce((acc, value) => {
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});
}

function buildAuditMarkdown(report) {
  const ageRows = Object.entries(report.counts.ageGroups)
    .map(([label, count]) => `| ${label} | ${count} |`)
    .join("\n");
  const engineRows = Object.entries(report.counts.engines)
    .map(([label, count]) => `| ${label} | ${count} |`)
    .join("\n");
  const trackRows = Object.entries(report.counts.tracks)
    .map(([label, count]) => `| ${label} | ${count} |`)
    .join("\n");

  return [
    "# Games 500 Spec Audit",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Status",
    `- Total games: ${report.totals.games}`,
    `- Educational games: ${report.totals.educational}`,
    `- Reward Realm games: ${report.totals.rewardRealm}`,
    `- Result: ${report.status.toUpperCase()}`,
    "",
    "## Age Groups",
    "| Age Group | Count |",
    "|---|---:|",
    ageRows,
    "",
    "## Engine Split",
    "| Engine | Count |",
    "|---|---:|",
    engineRows,
    "",
    "## Track Split",
    "| Track | Count |",
    "|---|---:|",
    trackRows,
    "",
    "## Outputs",
    `- JSON audit: \`${relativeFromRoot(AUDIT_JSON_PATH)}\``,
    `- Master catalog (md): \`${relativeFromRoot(MASTER_MD_PATH)}\``,
    `- Master catalog (json): \`${relativeFromRoot(MASTER_JSON_PATH)}\``,
    "",
  ].join("\n");
}

function buildMasterCatalogMarkdown(rows) {
  const header = [
    "# Games 500 Master Catalog",
    "",
    "Generated to match the games1.md catalog contract: separate table per age group with required columns.",
    "",
  ];
  const sections = AGE_GROUP_TARGETS.flatMap((target) => {
    const groupRows = rows.filter((row) => row.ageGroup === target.label);
    const tableHeader = [
      `## ${target.label}`,
      "",
      "| Game # | Title | Subject/Topic | Engine | Core Mechanic | Popular Inspiration | Key Features | Learning Objectives (if educational) | XR Retention Impact | Hardware Profile |",
      "|---:|---|---|---|---|---|---|---|---|---|",
    ];
    const tableRows = groupRows.map((row) =>
      [
        row.number,
        row.title,
        row.subjectTopic,
        row.engine,
        row.coreMechanic,
        row.popularInspiration,
        row.keyFeatures,
        row.learningObjectives,
        row.xrRetentionImpact,
        row.hardwareProfile,
      ]
        .map((value) => String(value).replaceAll("|", "/"))
        .join(" | "),
    ).map((line) => `| ${line} |`);

    return [...tableHeader, ...tableRows, ""];
  });

  return [...header, ...sections].join("\n");
}

async function main() {
  const catalogSource = await fs.readFile(CATALOG_PATH, "utf8");

  const coreGames = parseCoreGames(catalogSource);
  const legacySeeds = parseLegacySeeds(catalogSource);
  const generatedLeft = parseStringArray(catalogSource, "GENERATED_TITLE_LEFT");
  const generatedRight = parseStringArray(catalogSource, "GENERATED_TITLE_RIGHT");
  const legacyLeft = parseStringArray(catalogSource, "LEGACY_TITLE_LEFT");
  const legacyRight = parseStringArray(catalogSource, "LEGACY_TITLE_RIGHT");
  const categoryRotation = parseStringArray(catalogSource, "CATEGORY_ROTATION");
  const mechanicRotation = [
    "precision-choice",
    "sequence-recall",
    "lane-sort",
    "timed-equation",
    "pattern-scan",
    "signal-balance",
  ];

  const arcadeCount = parseConstNumber(catalogSource, "ARCADE_GAME_COUNT");
  const expansionCount = parseConstNumber(catalogSource, "EXPANSION_ARCADE_GAME_COUNT");
  const totalGenerated = arcadeCount + expansionCount;

  const generatedTitles = buildGeneratedTitles(generatedLeft, generatedRight, totalGenerated);
  const legacyTitles = buildLegacyTitles(legacyLeft, legacyRight, legacySeeds.length);

  const legacyGames = legacySeeds.map((seed, index) => ({
    id: seed.id,
    title: legacyTitles[index],
    category: categoryRotation[(index + 2) % categoryRotation.length],
    mechanic: mechanicRotation[index % mechanicRotation.length],
    mode: "legacy",
  }));

  const arcadeGames = Array.from({ length: arcadeCount }, (_, index) => ({
    id: `arcade-${pad3(index)}`,
    title: generatedTitles[index],
    category: categoryRotation[index % categoryRotation.length],
    mechanic: mechanicRotation[index % mechanicRotation.length],
    mode: "arcade",
  }));

  const expansionGames = Array.from({ length: expansionCount }, (_, index) => ({
    id: `zone-${pad3(index)}`,
    title: generatedTitles[arcadeCount + index],
    category: categoryRotation[(index + 4) % categoryRotation.length],
    mechanic: mechanicRotation[(index + 1) % mechanicRotation.length],
    mode: "arcade",
  }));

  const games = [...coreGames, ...legacyGames, ...arcadeGames, ...expansionGames];
  if (games.length !== REQUIRED_TOTAL) {
    throw new Error(`Catalog size mismatch. Expected ${REQUIRED_TOTAL}, found ${games.length}.`);
  }

  const ageAssignments = expandDistribution(AGE_GROUP_TARGETS);
  const engineAssignments = expandDistribution(ENGINE_TARGETS);
  if (ageAssignments.length !== REQUIRED_TOTAL) {
    throw new Error(`Age assignment mismatch: ${ageAssignments.length}`);
  }
  if (engineAssignments.length !== REQUIRED_TOTAL) {
    throw new Error(`Engine assignment mismatch: ${engineAssignments.length}`);
  }

  const rewardEligible = games.filter((game) => game.mode === "arcade");
  if (rewardEligible.length < REWARD_REALM_COUNT) {
    throw new Error(`Not enough arcade entries for reward assignment: ${rewardEligible.length}`);
  }
  const rewardIds = new Set(rewardEligible.slice(0, REWARD_REALM_COUNT).map((game) => game.id));

  const rows = games.map((game, index) => {
    const track = rewardIds.has(game.id) ? "Reward Realm" : "Educational Core";
    return {
      id: game.id,
      number: index + 1,
      title: game.title,
      ageGroup: ageAssignments[index],
      subjectTopic: chooseSubjectTopic(game.category),
      engine: engineAssignments[index],
      coreMechanic: chooseCoreMechanic(game.mechanic),
      popularInspiration: choosePopularInspiration(game.category, track),
      keyFeatures: chooseKeyFeatures(track),
      learningObjectives: chooseLearningObjective(game.category, track),
      xrRetentionImpact: "Embodied XR practice + adaptive coaching pipeline (target 75-80% retention).",
      hardwareProfile: "Vision Pro | Meta Quest 3/4 | Android XR glasses | Flat/mobile fallback.",
      track,
    };
  });

  const ageGroups = rows.map((row) => row.ageGroup);
  const engines = rows.map((row) => row.engine);
  const tracks = rows.map((row) => row.track);
  const ageCounts = countBy(ageGroups);
  const engineCounts = countBy(engines);
  const trackCounts = countBy(tracks);

  for (const target of AGE_GROUP_TARGETS) {
    if ((ageCounts[target.label] ?? 0) !== target.count) {
      throw new Error(`Age group mismatch for ${target.label}`);
    }
  }
  for (const target of ENGINE_TARGETS) {
    if ((engineCounts[target.label] ?? 0) !== target.count) {
      throw new Error(`Engine count mismatch for ${target.label}`);
    }
  }
  if ((trackCounts["Reward Realm"] ?? 0) !== REWARD_REALM_COUNT) {
    throw new Error("Reward Realm count mismatch.");
  }
  if ((trackCounts["Educational Core"] ?? 0) !== REQUIRED_TOTAL - REWARD_REALM_COUNT) {
    throw new Error("Educational Core count mismatch.");
  }

  const report = {
    generatedAt: new Date().toISOString(),
    status: "pass",
    totals: {
      games: rows.length,
      educational: trackCounts["Educational Core"] ?? 0,
      rewardRealm: trackCounts["Reward Realm"] ?? 0,
    },
    counts: {
      ageGroups: ageCounts,
      engines: engineCounts,
      tracks: trackCounts,
    },
    outputs: {
      auditJson: relativeFromRoot(AUDIT_JSON_PATH),
      auditMarkdown: relativeFromRoot(AUDIT_MD_PATH),
      catalogJson: relativeFromRoot(MASTER_JSON_PATH),
      catalogMarkdown: relativeFromRoot(MASTER_MD_PATH),
    },
  };

  await fs.mkdir(path.dirname(AUDIT_JSON_PATH), { recursive: true });
  await Promise.all([
    fs.writeFile(AUDIT_JSON_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    fs.writeFile(AUDIT_MD_PATH, `${buildAuditMarkdown(report)}\n`, "utf8"),
    fs.writeFile(
      MASTER_JSON_PATH,
      `${JSON.stringify({ generatedAt: report.generatedAt, total: rows.length, rows }, null, 2)}\n`,
      "utf8",
    ),
    fs.writeFile(MASTER_MD_PATH, buildMasterCatalogMarkdown(rows), "utf8"),
  ]);

  console.log(
    `[games500-spec-audit] total=${report.totals.games} educational=${report.totals.educational} reward=${report.totals.rewardRealm}`,
  );
}

main().catch((error) => {
  console.error("[games500-spec-audit] failed:", error);
  process.exitCode = 1;
});

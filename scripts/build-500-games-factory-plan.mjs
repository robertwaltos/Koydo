#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const CATALOG_PATH = path.join(ROOT, "src", "lib", "games", "catalog.ts");
const OPEN_SOURCE_REPORT_PATH = path.join(ROOT, "public", "OPEN-SOURCE-GAME-RESEARCH.json");
const OUTPUT_DIR = path.join(ROOT, "public", "games-factory");
const BATCH_DIR = path.join(OUTPUT_DIR, "batches");
const MANIFEST_PATH = path.join(ROOT, "public", "GAMES-500-PIPELINE-MANIFEST.json");
const REPORT_JSON_PATH = path.join(ROOT, "public", "GAMES-500-PIPELINE-REPORT.json");
const REPORT_MD_PATH = path.join(ROOT, "GAMES-500-PIPELINE-REPORT.md");
const REQUIRED_TOTAL_GAMES = 500;

const BANNED_STYLE_TERMS = /\b(ultra|max|super|xuper|supremacy)\b/i;
const REQUIRED_THEME_TAGS = [
  "dora-style",
  "carmen-style",
  "bridge-physics",
  "geometry",
  "tetris-style",
  "pacman-style",
  "chemistry",
  "plain-fun",
];

const EXPERIENCE_TRACKS = [
  {
    key: "story-explorer",
    label: "Story Explorer",
    subject: "geography",
    tags: ["dora-style", "exploration", "educational"],
    sourceRepo: null,
    integrationTrack: "internal-experience-template",
  },
  {
    key: "world-detective",
    label: "World Detective",
    subject: "geography",
    tags: ["carmen-style", "map-clues", "educational"],
    sourceRepo: "openstreetguesser",
    integrationTrack: "adapt-with-safe-map-mode",
  },
  {
    key: "bridge-lab",
    label: "Bridge Lab",
    subject: "physics",
    tags: ["bridge-physics", "structures", "simulation"],
    sourceRepo: null,
    integrationTrack: "internal-physics-sandbox",
  },
  {
    key: "geometry-gym",
    label: "Geometry Gym",
    subject: "geometry",
    tags: ["geometry", "shape-reasoning", "educational"],
    sourceRepo: null,
    integrationTrack: "internal-logic-kit",
  },
  {
    key: "stack-lab",
    label: "Stack Lab",
    subject: "logic",
    tags: ["tetris-style", "spatial-reasoning", "educational"],
    sourceRepo: "javascript-tetris",
    integrationTrack: "port-core-mechanic",
  },
  {
    key: "maze-chase",
    label: "Maze Chase",
    subject: "logic",
    tags: ["pacman-style", "timing", "fun"],
    sourceRepo: null,
    integrationTrack: "internal-maze-runtime",
  },
  {
    key: "chem-lab",
    label: "Chem Lab",
    subject: "chemistry",
    tags: ["chemistry", "reaction-model", "educational"],
    sourceRepo: null,
    integrationTrack: "internal-science-sim",
  },
  {
    key: "math-lab",
    label: "Math Lab",
    subject: "math",
    tags: ["math", "adaptive-difficulty", "educational"],
    sourceRepo: "2048",
    integrationTrack: "port-core-mechanic",
  },
  {
    key: "word-quest",
    label: "Word Quest",
    subject: "literacy",
    tags: ["language", "spelling", "educational"],
    sourceRepo: null,
    integrationTrack: "internal-literacy-runtime",
  },
  {
    key: "history-quest",
    label: "History Quest",
    subject: "history",
    tags: ["history", "timeline", "educational"],
    sourceRepo: null,
    integrationTrack: "internal-story-runtime",
  },
  {
    key: "bio-lab",
    label: "Bio Lab",
    subject: "biology",
    tags: ["science", "systems", "educational"],
    sourceRepo: null,
    integrationTrack: "internal-science-sim",
  },
  {
    key: "creative-studio",
    label: "Creative Studio",
    subject: "arts",
    tags: ["creative", "music", "fun"],
    sourceRepo: null,
    integrationTrack: "internal-creative-suite",
  },
  {
    key: "subject-mastery",
    label: "Subject Mastery",
    subject: "cross-subject",
    tags: ["educational", "assessment", "adaptive-difficulty"],
    sourceRepo: null,
    integrationTrack: "internal-quiz-factory",
  },
  {
    key: "pure-fun",
    label: "Pure Fun",
    subject: "fun",
    tags: ["plain-fun", "arcade", "reward-loop"],
    sourceRepo: null,
    integrationTrack: "internal-fun-loop",
  },
];

const CATEGORY_TRACK_ROTATION = {
  literacy: ["word-quest", "story-explorer", "subject-mastery", "pure-fun"],
  math: ["math-lab", "geometry-gym", "stack-lab", "subject-mastery"],
  logic: ["stack-lab", "maze-chase", "geometry-gym", "subject-mastery"],
  creative: ["creative-studio", "story-explorer", "pure-fun", "subject-mastery"],
  science: ["bridge-lab", "chem-lab", "bio-lab", "subject-mastery"],
  adventure: ["world-detective", "story-explorer", "history-quest", "pure-fun"],
  arcade: ["pure-fun", "maze-chase", "stack-lab", "world-detective"],
};

function relativeFromRoot(target) {
  return path.relative(ROOT, target).replaceAll("\\", "/");
}

function parseArgs(argv) {
  const options = {
    batchSize: 12,
    pauseMs: 120,
    resumeBatch: 1,
    maxBatches: null,
    dryRun: false,
  };

  const readNumberArg = (arg, index) => {
    const equalIndex = arg.indexOf("=");
    if (equalIndex >= 0) {
      return { value: Number(arg.slice(equalIndex + 1).trim()), consumed: false };
    }
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      return { value: Number.NaN, consumed: false };
    }
    return { value: Number(next), consumed: true };
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--batch-size" || arg.startsWith("--batch-size=")) {
      const parsed = readNumberArg(arg, i);
      if (Number.isFinite(parsed.value) && parsed.value > 0) {
        options.batchSize = Math.max(1, Math.floor(parsed.value));
      }
      if (parsed.consumed) i += 1;
      continue;
    }
    if (arg === "--pause-ms" || arg.startsWith("--pause-ms=")) {
      const parsed = readNumberArg(arg, i);
      if (Number.isFinite(parsed.value) && parsed.value >= 0) {
        options.pauseMs = Math.max(0, Math.floor(parsed.value));
      }
      if (parsed.consumed) i += 1;
      continue;
    }
    if (arg === "--resume-batch" || arg.startsWith("--resume-batch=")) {
      const parsed = readNumberArg(arg, i);
      if (Number.isFinite(parsed.value) && parsed.value > 0) {
        options.resumeBatch = Math.max(1, Math.floor(parsed.value));
      }
      if (parsed.consumed) i += 1;
      continue;
    }
    if (arg === "--max-batches" || arg.startsWith("--max-batches=")) {
      const parsed = readNumberArg(arg, i);
      if (Number.isFinite(parsed.value) && parsed.value > 0) {
        options.maxBatches = Math.max(1, Math.floor(parsed.value));
      }
      if (parsed.consumed) i += 1;
    }
  }

  return options;
}

function extractBetween(source, startToken, endToken) {
  const start = source.indexOf(startToken);
  if (start < 0) throw new Error(`Missing token: ${startToken}`);
  const from = start + startToken.length;
  const end = source.indexOf(endToken, from);
  if (end < 0) throw new Error(`Missing token: ${endToken}`);
  return source.slice(from, end);
}

function extractConstArrayBlock(source, constName) {
  const pattern = new RegExp(
    `const\\s+${constName}(?:\\s*:[^=]+)?\\s*=\\s*\\[([\\s\\S]*?)\\]\\s+as\\s+const;`,
  );
  const match = source.match(pattern);
  if (!match) throw new Error(`Missing const array: ${constName}`);
  return match[1];
}

function parseStringArray(source, constName) {
  const block = extractConstArrayBlock(source, constName);
  return Array.from(block.matchAll(/"([^"]+)"/g)).map((entry) => entry[1]);
}

function parseTupleArray(source, constName) {
  const block = extractConstArrayBlock(source, constName);
  return Array.from(block.matchAll(/\["([^"]+)",\s*"([^"]+)"\]/g)).map((entry) => [entry[1], entry[2]]);
}

function parseConstNumber(source, constName) {
  const match = source.match(new RegExp(`const ${constName} = (\\d+);`));
  if (!match) throw new Error(`Missing numeric constant: ${constName}`);
  return Number(match[1]);
}

function parseCoreGames(source) {
  const block = extractBetween(source, "export const CORE_GAMES: RegisteredGame[] = [", "];");
  const objects = Array.from(block.matchAll(/\{[\s\S]*?\}\s*,?/g));

  return objects.map((entry) => {
    const objectText = entry[0];
    const readString = (field) => objectText.match(new RegExp(`${field}:\\s*"([^"]+)"`))?.[1] ?? "";
    const readNumber = (field) => Number(objectText.match(new RegExp(`${field}:\\s*(\\d+)`))?.[1] ?? 0);
    return {
      id: readString("id"),
      title: readString("title"),
      description: readString("description"),
      category: readString("category"),
      mode: readString("mode"),
      graphicsTier: readString("graphicsTier"),
      ageMin: readNumber("ageMin"),
      ageMax: readNumber("ageMax"),
    };
  });
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

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ageBandFor(game) {
  if (game.ageMin >= 4 && game.ageMax <= 6) return "kindergarten";
  if (game.ageMin >= 7 && game.ageMax <= 11) return "elementary";
  if (game.ageMin >= 12 && game.ageMax <= 14) return "middle-school";
  if (game.ageMin >= 15 && game.ageMax <= 18) return "high-school";
  if (game.ageMin >= 19) return "college";
  return "unclassified";
}

const AGE_SEGMENTS = {
  kindergarten: [4, 6],
  elementary: [7, 11],
  "middle-school": [12, 14],
  "high-school": [15, 18],
  college: [19, 99],
};

const REQUIRED_AGE_COUNTS = {
  kindergarten: 100,
  elementary: 150,
  "middle-school": 100,
  "high-school": 100,
  college: 50,
};

const AGE_PROFILE_ORDER = [
  { segment: "kindergarten", count: 100 },
  { segment: "elementary", count: 150 },
  { segment: "middle-school", count: 100 },
  { segment: "high-school", count: 100 },
  { segment: "college", count: 50 },
];

function resolveAgeProfile(catalogIndex) {
  let cursor = 0;
  for (const target of AGE_PROFILE_ORDER) {
    const upperBoundExclusive = cursor + target.count;
    if (catalogIndex < upperBoundExclusive) {
      const [ageMin, ageMax] = AGE_SEGMENTS[target.segment];
      return {
        ageBand: target.segment,
        ageMin,
        ageMax,
      };
    }
    cursor = upperBoundExclusive;
  }

  throw new Error(`Missing age profile for catalog index ${catalogIndex}`);
}

function chooseTrack(game, index) {
  const rotation = CATEGORY_TRACK_ROTATION[game.category] ?? CATEGORY_TRACK_ROTATION.arcade;
  const key = rotation[index % rotation.length];
  return EXPERIENCE_TRACKS.find((track) => track.key === key) ?? EXPERIENCE_TRACKS[index % EXPERIENCE_TRACKS.length];
}

async function readOpenSourceRepos() {
  try {
    const raw = await fs.readFile(OPEN_SOURCE_REPORT_PATH, "utf8");
    const parsed = JSON.parse(raw);
    const repos = Array.isArray(parsed.repos) ? parsed.repos : [];
    return repos;
  } catch {
    return [];
  }
}

function buildMarkdownSummary(report) {
  const subjectRows = Object.entries(report.coverage.subjects)
    .map(([subject, count]) => `| ${subject} | ${count} |`)
    .join("\n");

  const tagRows = Object.entries(report.coverage.themeTags)
    .map(([tag, count]) => `| ${tag} | ${count} |`)
    .join("\n");

  return [
    "# Games 500 Pipeline Report",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Resource Policy",
    `- Batch size: ${report.resourcePolicy.batchSize}`,
    `- Pause between batches: ${report.resourcePolicy.pauseMs} ms`,
    `- Process model: sequential`,
    "",
    "## Totals",
    `- Games planned: ${report.totals.games}`,
    `- Total batches: ${report.totals.totalBatches}`,
    `- Executed this run: ${report.totals.executedBatches}`,
    "",
    "## Coverage",
    `- Age bands (strict counts): ${JSON.stringify(report.coverage.ageBands)}`,
    "",
    "| Subject Track | Games |",
    "|---|---:|",
    subjectRows || "| none | 0 |",
    "",
    "| Required Theme Tag | Games |",
    "|---|---:|",
    tagRows || "| none | 0 |",
    "",
    "## Open Source Integrations",
    `- Audited repos available: ${report.openSource.repoCount}`,
    `- Integrated with attribution: ${report.openSource.integratedRepoCount}`,
    "",
    "## Output Paths",
    `- Manifest: \`${report.outputs.manifest}\``,
    `- Batch directory: \`${report.outputs.batchDirectory}\``,
    `- JSON report: \`${report.outputs.reportJson}\``,
    "",
  ].join("\n");
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const catalogSource = await fs.readFile(CATALOG_PATH, "utf8");
  const openSourceRepos = await readOpenSourceRepos();
  const openSourceMap = new Map(openSourceRepos.map((repo) => [repo.name, repo]));

  const coreGames = parseCoreGames(catalogSource);
  const legacySeeds = parseTupleArray(catalogSource, "GEMINI_GAME_SEEDS");
  const categoryRotation = parseStringArray(catalogSource, "CATEGORY_ROTATION");
  const titleLeft = parseStringArray(catalogSource, "GENERATED_TITLE_LEFT");
  const titleRight = parseStringArray(catalogSource, "GENERATED_TITLE_RIGHT");
  const legacyTitleLeft = parseStringArray(catalogSource, "LEGACY_TITLE_LEFT");
  const legacyTitleRight = parseStringArray(catalogSource, "LEGACY_TITLE_RIGHT");

  const arcadeCount = parseConstNumber(catalogSource, "ARCADE_GAME_COUNT");
  const expansionCount = parseConstNumber(catalogSource, "EXPANSION_ARCADE_GAME_COUNT");
  const totalGeneratedCount = arcadeCount + expansionCount;
  const generatedTitles = buildGeneratedTitles(titleLeft, titleRight, totalGeneratedCount);
  const legacyTitles = buildLegacyTitles(legacyTitleLeft, legacyTitleRight, legacySeeds.length);

  const resolvedCoreGames = coreGames.map((game, index) => {
    const ageProfile = resolveAgeProfile(index);
    return {
      ...game,
      ageMin: ageProfile.ageMin,
      ageMax: ageProfile.ageMax,
    };
  });

  const legacyCatalogOffset = resolvedCoreGames.length;
  const arcadeCatalogOffset = legacyCatalogOffset + legacySeeds.length;
  const expansionCatalogOffset = arcadeCatalogOffset + arcadeCount;

  const legacyGames = legacySeeds.map(([id], index) => {
    const ageProfile = resolveAgeProfile(legacyCatalogOffset + index);
    return {
      id,
      title: legacyTitles[index],
      description: "Play Learn Grow",
      category: categoryRotation[(index + 2) % categoryRotation.length],
      mode: "legacy",
      graphicsTier: "4k-ready",
      ageMin: ageProfile.ageMin,
      ageMax: ageProfile.ageMax,
    };
  });

  const arcadeGames = Array.from({ length: arcadeCount }, (_, index) => {
    const ageProfile = resolveAgeProfile(arcadeCatalogOffset + index);
    return {
      id: `arcade-${pad3(index)}`,
      title: generatedTitles[index],
      description: "Build Explore Learn",
      category: categoryRotation[index % categoryRotation.length],
      mode: "arcade",
      graphicsTier: "4k-ready",
      ageMin: ageProfile.ageMin,
      ageMax: ageProfile.ageMax,
    };
  });

  const expansionGames = Array.from({ length: expansionCount }, (_, index) => {
    const ageProfile = resolveAgeProfile(expansionCatalogOffset + index);
    return {
      id: `zone-${pad3(index)}`,
      title: generatedTitles[arcadeCount + index],
      description: "Discover Create Grow",
      category: categoryRotation[(index + 4) % categoryRotation.length],
      mode: "arcade",
      graphicsTier: "4k-ready",
      ageMin: ageProfile.ageMin,
      ageMax: ageProfile.ageMax,
    };
  });

  const allGames = [...resolvedCoreGames, ...legacyGames, ...arcadeGames, ...expansionGames];
  if (allGames.length !== REQUIRED_TOTAL_GAMES) {
    throw new Error(`Expected ${REQUIRED_TOTAL_GAMES} games, found ${allGames.length}.`);
  }

  const blueprints = allGames.map((game, index) => {
    const track = chooseTrack(game, index);
    const sourceRepo = track.sourceRepo ? openSourceMap.get(track.sourceRepo) ?? null : null;
    const shortName = game.title.split(/\s+/).slice(0, 2).join(" ");
    return {
      id: game.id,
      title: game.title,
      shortName,
      description: game.description,
      mode: game.mode,
      category: game.category,
      ageMin: game.ageMin,
      ageMax: game.ageMax,
      ageBand: ageBandFor(game),
      graphicsTier: game.graphicsTier,
      track: {
        key: track.key,
        label: track.label,
        subject: track.subject,
        tags: track.tags,
      },
      gameplay: {
        levelModel: "infinite",
        progressionMode: "adaptive-and-endless",
        immersionStyle: "cinematic-4k",
      },
      performance: {
        targetFps: 60,
        frameBudgetMs: 16.67,
        maxInputLatencyMs: 45,
        antiLagStrategy: "sequential-batching+rAF+object-pooling",
      },
      engine: {
        runtimeProfile: game.mode === "core" ? "core-engine" : "immersive-arcade-engine",
        webgpuReady: true,
        webxrReady: true,
        visionGlassesReady: true,
        metaGlassesReady: true,
        inputAbstraction: ["touch", "keyboard", "gamepad", "gesture", "xr-controller"],
      },
      attribution: {
        required: Boolean(track.sourceRepo),
        sourceRepoName: track.sourceRepo,
        integrationTrack: track.integrationTrack,
        license: sourceRepo?.license ?? null,
        remote: sourceRepo?.remote ?? null,
        commit: sourceRepo?.commit ?? null,
      },
    };
  });

  const seenIds = new Set();
  const seenTitles = new Set();
  const ageBands = {
    kindergarten: 0,
    elementary: 0,
    "middle-school": 0,
    "high-school": 0,
    college: 0,
    unclassified: 0,
  };
  const subjectCoverage = {};
  const themeTagCoverage = {};

  for (const game of blueprints) {
    if (seenIds.has(game.id)) throw new Error(`Duplicate id: ${game.id}`);
    seenIds.add(game.id);

    const normalizedTitle = game.title.trim().toLowerCase();
    if (seenTitles.has(normalizedTitle)) throw new Error(`Duplicate title: ${game.title}`);
    seenTitles.add(normalizedTitle);

    if (BANNED_STYLE_TERMS.test(game.id) || BANNED_STYLE_TERMS.test(game.title) || BANNED_STYLE_TERMS.test(game.shortName)) {
      throw new Error(`Blocked naming style found: ${game.id} / ${game.title}`);
    }
    if (game.graphicsTier !== "4k-ready") {
      throw new Error(`Graphics tier contract failed for ${game.id}.`);
    }
    if (game.gameplay.levelModel !== "infinite") {
      throw new Error(`Infinite-level contract failed for ${game.id}.`);
    }
    if (!game.engine.webxrReady || !game.engine.visionGlassesReady || !game.engine.metaGlassesReady) {
      throw new Error(`XR readiness contract failed for ${game.id}.`);
    }

    let matchedAgeBand = false;
    for (const [segment, [minAge, maxAge]] of Object.entries(AGE_SEGMENTS)) {
      if (game.ageMin <= maxAge && game.ageMax >= minAge) {
        ageBands[segment] += 1;
        matchedAgeBand = true;
        break;
      }
    }
    if (!matchedAgeBand) {
      ageBands.unclassified += 1;
    }
    subjectCoverage[game.track.subject] = (subjectCoverage[game.track.subject] ?? 0) + 1;
    for (const tag of game.track.tags) {
      themeTagCoverage[tag] = (themeTagCoverage[tag] ?? 0) + 1;
    }
  }

  for (const tag of REQUIRED_THEME_TAGS) {
    if (!themeTagCoverage[tag]) {
      throw new Error(`Required theme tag missing from catalog coverage: ${tag}`);
    }
  }
  if (ageBands.unclassified > 0) {
    throw new Error(`Unclassified age bands detected: ${JSON.stringify(ageBands)}`);
  }
  for (const [segment, expected] of Object.entries(REQUIRED_AGE_COUNTS)) {
    if ((ageBands[segment] ?? 0) !== expected) {
      throw new Error(
        `Age coverage contract failed for ${segment}: expected ${expected}, found ${ageBands[segment] ?? 0}`,
      );
    }
  }
  if (!ageBands.kindergarten || !ageBands.elementary || !ageBands["middle-school"] || !ageBands["high-school"] || !ageBands.college) {
    throw new Error(`Age coverage contract failed: ${JSON.stringify(ageBands)}`);
  }

  const batches = chunk(blueprints, options.batchSize).map((games, index) => ({
    batchId: `batch-${String(index + 1).padStart(3, "0")}`,
    batchNumber: index + 1,
    games,
  }));

  const resumeIndex = Math.max(0, options.resumeBatch - 1);
  const tailBatches = batches.slice(resumeIndex);
  const executableBatches = options.maxBatches
    ? tailBatches.slice(0, options.maxBatches)
    : tailBatches;

  const executedBatchFiles = [];
  if (!options.dryRun) {
    await fs.mkdir(BATCH_DIR, { recursive: true });
  }

  for (let index = 0; index < executableBatches.length; index += 1) {
    const batch = executableBatches[index];
    const payload = {
      generatedAt: new Date().toISOString(),
      batchId: batch.batchId,
      batchNumber: batch.batchNumber,
      totalBatches: batches.length,
      throttle: {
        pauseMs: options.pauseMs,
        sequential: true,
      },
      games: batch.games,
    };
    const batchPath = path.join(BATCH_DIR, `${batch.batchId}.json`);
    executedBatchFiles.push(relativeFromRoot(batchPath));
    if (!options.dryRun) {
      await fs.writeFile(batchPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    }
    if (options.pauseMs > 0 && index < executableBatches.length - 1) {
      await sleep(options.pauseMs);
    }
  }

  const integratedWithAttribution = blueprints.filter((game) => game.attribution.required).length;

  const report = {
    generatedAt: new Date().toISOString(),
    pipelineVersion: "games-500-factory-v1",
    resourcePolicy: {
      batchSize: options.batchSize,
      pauseMs: options.pauseMs,
      resumeBatch: options.resumeBatch,
      maxBatches: options.maxBatches,
      dryRun: options.dryRun,
    },
    totals: {
      games: blueprints.length,
      totalBatches: batches.length,
      executedBatches: executableBatches.length,
    },
    coverage: {
      ageBands,
      subjects: subjectCoverage,
      themeTags: themeTagCoverage,
    },
    openSource: {
      repoCount: openSourceRepos.length,
      integratedRepoCount: integratedWithAttribution,
      repos: openSourceRepos.map((repo) => ({
        name: repo.name,
        license: repo.license,
        remote: repo.remote,
        commit: repo.commit,
      })),
    },
    outputs: {
      manifest: relativeFromRoot(MANIFEST_PATH),
      batchDirectory: relativeFromRoot(BATCH_DIR),
      batchFiles: executedBatchFiles,
      reportJson: relativeFromRoot(REPORT_JSON_PATH),
      reportMarkdown: relativeFromRoot(REPORT_MD_PATH),
    },
    sampleGames: blueprints.slice(0, 20).map((game) => ({
      id: game.id,
      title: game.title,
      shortName: game.shortName,
      track: game.track.label,
      subject: game.track.subject,
    })),
  };

  const manifest = {
    generatedAt: report.generatedAt,
    pipelineVersion: report.pipelineVersion,
    constraints: {
      bannedStyleTerms: BANNED_STYLE_TERMS.source,
      mandatoryGraphicsTier: "4k-ready",
      mandatoryLevelModel: "infinite",
      mandatoryXrReadiness: true,
      mandatorySmoothGameplay: {
        targetFps: 60,
        maxInputLatencyMs: 45,
      },
    },
    resourcePolicy: report.resourcePolicy,
    totals: report.totals,
    coverage: report.coverage,
    games: blueprints,
  };

  if (!options.dryRun) {
    await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
    await Promise.all([
      fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8"),
      fs.writeFile(REPORT_JSON_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
      fs.writeFile(REPORT_MD_PATH, `${buildMarkdownSummary(report)}\n`, "utf8"),
    ]);
  }

  console.log(
    `[games-500-factory-plan] games=${report.totals.games} totalBatches=${report.totals.totalBatches} executedBatches=${report.totals.executedBatches} dryRun=${options.dryRun}`,
  );
}

main().catch((error) => {
  console.error("[games-500-factory-plan] failed:", error);
  process.exitCode = 1;
});

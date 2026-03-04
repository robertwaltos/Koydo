#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import typescript from "typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const CATALOG_PATH = path.join(ROOT, "src", "lib", "games", "catalog.ts");
const GAME_PLAYER_PATH = path.join(ROOT, "src", "app", "games", "[gameId]", "page.tsx");
const TEMPLATE_PATH = path.join(ROOT, "src", "components", "games", "immersive-arcade-template.tsx");
const REPORT_JSON_PATH = path.join(ROOT, "public", "GAMES-500-PLAYABILITY-AUDIT.json");
const REPORT_MD_PATH = path.join(ROOT, "GAMES-500-PLAYABILITY-AUDIT.md");
const EXPECTED_NON_CORE_MECHANICS = [
  "precision-choice",
  "sequence-recall",
  "lane-sort",
  "timed-equation",
  "pattern-scan",
  "signal-balance",
];

function relativeFromRoot(targetPath) {
  return path.relative(ROOT, targetPath).replaceAll("\\", "/");
}

function readRequiredFile(filePath) {
  return fs.readFile(filePath, "utf8");
}

function loadTranspiledTsModule(filePath, runtimeRequire) {
  return readRequiredFile(filePath).then((source) => {
    const transpiled = typescript.transpileModule(source, {
      compilerOptions: {
        module: typescript.ModuleKind.CommonJS,
        target: typescript.ScriptTarget.ES2020,
        esModuleInterop: true,
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
    wrapped(cjsModule.exports, runtimeRequire, cjsModule, filePath, path.dirname(filePath));
    return cjsModule.exports;
  });
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

function parseMapBlock(source, declarationPrefix) {
  const block = extractBetween(source, declarationPrefix, "};");
  const out = new Map();
  const entries = Array.from(
    block.matchAll(/^\s*(?:"([^"]+)"|([a-zA-Z0-9_-]+)):\s*Games\.([A-Za-z0-9_]+)/gm),
  );
  for (const entry of entries) {
    const id = entry[1] ?? entry[2];
    const component = entry[3];
    if (!id || !component) continue;
    out.set(id, component);
  }
  return out;
}

function parseTemplateMechanics(templateSource) {
  const mechanics = new Set();
  const patterns = [/mechanic:\s*"([^"]+)"/g, /mechanic\s*===\s*"([^"]+)"/g];

  for (const pattern of patterns) {
    const matches = Array.from(templateSource.matchAll(pattern));
    for (const match of matches) {
      const mechanic = match?.[1];
      if (mechanic) mechanics.add(mechanic);
    }
  }

  return mechanics;
}

function incrementCount(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}

function renderSummaryMarkdown(report) {
  const unresolvedRows = report.issues.unresolved
    .slice(0, 80)
    .map((entry) => `| ${entry.id} | ${entry.mode} | ${entry.reason} |`)
    .join("\n");
  const collisionRows = report.issues.arcadeCollisionIds
    .slice(0, 80)
    .map((entry) => `| ${entry.id} | ${entry.mode} | ${entry.componentType} |`)
    .join("\n");
  const mechanicRows = Object.entries(report.distribution.byMechanic)
    .map(([mechanic, count]) => `| ${mechanic} | ${count} |`)
    .join("\n");
  const rewardRows = Object.entries(report.distribution.rewardRealmByMechanic)
    .map(([mechanic, count]) => `| ${mechanic} | ${count} |`)
    .join("\n");
  const coverageIssueRows = report.issues.coverage
    .slice(0, 40)
    .map((entry) => `- ${entry}`)
    .join("\n");

  return [
    "# Games 500 Playability Audit",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Status",
    `- Result: ${report.status.toUpperCase()}`,
    `- Catalog total: ${report.totals.catalogTotal}`,
    `- Playable routes: ${report.totals.playableRoutes}`,
    `- Unresolved routes: ${report.totals.unresolvedRoutes}`,
    "",
    "## Runtime Coverage",
    `- Core routes validated: ${report.coverage.coreValidated}`,
    `- Legacy routes validated: ${report.coverage.legacyValidated}`,
    `- Arcade template routes validated: ${report.coverage.arcadeTemplateValidated}`,
    "",
    "## Mechanic Distribution",
    "| Mechanic | Games |",
    "|---|---:|",
    mechanicRows || "| none | 0 |",
    "",
    "### Reward Realm Mechanic Distribution",
    "| Mechanic | Games |",
    "|---|---:|",
    rewardRows || "| none | 0 |",
    "",
    "## Template Capability",
    `- Template mechanics discovered: ${report.template.mechanics.join(", ") || "(none)"}`,
    `- Template fallback path present: ${report.template.hasFallback}`,
    "",
    "## Issues",
    `- Unresolved routes: ${report.issues.unresolved.length}`,
    `- Arcade IDs colliding with direct component maps: ${report.issues.arcadeCollisionIds.length}`,
    `- Coverage issues: ${report.issues.coverage.length}`,
    "",
    "### Coverage Issue Samples",
    coverageIssueRows || "- none",
    "",
    "### Unresolved Route Samples",
    "| gameId | mode | reason |",
    "|---|---|---|",
    unresolvedRows || "| none | - | - |",
    "",
    "### Arcade Map Collision Samples",
    "| gameId | mode | componentType |",
    "|---|---|---|",
    collisionRows || "| none | - | - |",
    "",
    "## Outputs",
    `- JSON: \`${relativeFromRoot(REPORT_JSON_PATH)}\``,
    `- Markdown: \`${relativeFromRoot(REPORT_MD_PATH)}\``,
    "",
  ].join("\n");
}

async function main() {
  const noFail = process.argv.includes("--no-fail");
  const [gamePlayerSource, templateSource] = await Promise.all([
    readRequiredFile(GAME_PLAYER_PATH),
    readRequiredFile(TEMPLATE_PATH),
  ]);

  const coreComponents = parseMapBlock(
    gamePlayerSource,
    "const CORE_COMPONENTS: Record<GameType, (props: CoreGameComponentProps) => React.JSX.Element> = {",
  );
  const legacyComponents = parseMapBlock(
    gamePlayerSource,
    "const LEGACY_COMPONENTS: Record<string, () => React.JSX.Element> = {",
  );

  const templateMechanics = parseTemplateMechanics(templateSource);
  const templateImported = gamePlayerSource.includes('from "@/components/games/immersive-arcade-template"');
  const templateRendered = gamePlayerSource.includes("<ImmersiveArcadeTemplate");
  const templateHasFallback = gamePlayerSource.includes(") : (") && templateSource.includes("return buildPrecisionRound");

  const assetsProxy = new Proxy({}, { get: (_, property) => `/assets/${String(property)}` });
  const catalogModule = await loadTranspiledTsModule(CATALOG_PATH, (specifier) => {
    if (specifier === "@/lib/config/assets") {
      return { ASSETS: assetsProxy };
    }
    throw new Error(`Unsupported import while loading catalog module: ${specifier}`);
  });

  const games = Array.isArray(catalogModule.GAME_CATALOG) ? catalogModule.GAME_CATALOG : null;
  if (!games) {
    throw new Error("Unable to load GAME_CATALOG from src/lib/games/catalog.ts");
  }

  const unresolved = [];
  const arcadeCollisionIds = [];
  const coverageIssues = [];

  let playableRoutes = 0;
  let coreValidated = 0;
  let legacyValidated = 0;
  let arcadeTemplateValidated = 0;
  const mechanicCounts = new Map();
  const rewardRealmMechanicCounts = new Map();

  for (const game of games) {
    if (!game || typeof game.id !== "string" || typeof game.mode !== "string") {
      unresolved.push({
        id: String(game?.id ?? "unknown"),
        mode: String(game?.mode ?? "unknown"),
        reason: "Invalid catalog object shape.",
      });
      continue;
    }

    if (game.mode === "core") {
      if (!coreComponents.has(game.id)) {
        unresolved.push({
          id: game.id,
          mode: game.mode,
          reason: "Missing core component mapping.",
        });
        continue;
      }
      if (game.mechanic !== "core") {
        coverageIssues.push(`Core game ${game.id} must use mechanic "core", found "${String(game.mechanic)}".`);
      }
      incrementCount(mechanicCounts, String(game.mechanic));
      coreValidated += 1;
      playableRoutes += 1;
      continue;
    }

    if (game.mode === "legacy") {
      if (!legacyComponents.has(game.id)) {
        unresolved.push({
          id: game.id,
          mode: game.mode,
          reason: "Missing legacy component mapping.",
        });
        continue;
      }
      if (game.mechanic === "core") {
        coverageIssues.push(`Legacy game ${game.id} must not use mechanic "core".`);
      }
      incrementCount(mechanicCounts, String(game.mechanic));
      if (game.track === "Reward Realm") {
        incrementCount(rewardRealmMechanicCounts, String(game.mechanic));
      }
      legacyValidated += 1;
      playableRoutes += 1;
      continue;
    }

    if (game.mode === "arcade") {
      if (!templateImported || !templateRendered) {
        unresolved.push({
          id: game.id,
          mode: game.mode,
          reason: "Arcade template import/render path missing in game player route.",
        });
        continue;
      }

      if (coreComponents.has(game.id)) {
        arcadeCollisionIds.push({
          id: game.id,
          mode: game.mode,
          componentType: "core-map",
        });
      }
      if (legacyComponents.has(game.id)) {
        arcadeCollisionIds.push({
          id: game.id,
          mode: game.mode,
          componentType: "legacy-map",
        });
      }

      const mechanic = typeof game.mechanic === "string" ? game.mechanic : "";
      if (mechanic && mechanic !== "core" && !templateMechanics.has(mechanic) && !templateHasFallback) {
        unresolved.push({
          id: game.id,
          mode: game.mode,
          reason: `Arcade mechanic '${mechanic}' not supported by template and no fallback detected.`,
        });
        continue;
      }
      if (mechanic === "core") {
        coverageIssues.push(`Arcade game ${game.id} must not use mechanic "core".`);
      }

      incrementCount(mechanicCounts, mechanic);
      if (game.track === "Reward Realm") {
        incrementCount(rewardRealmMechanicCounts, mechanic);
      }
      arcadeTemplateValidated += 1;
      playableRoutes += 1;
      continue;
    }

    unresolved.push({
      id: game.id,
      mode: game.mode,
      reason: "Unknown mode value.",
    });
  }

  const byMechanic = Object.fromEntries(Array.from(mechanicCounts.entries()).sort((a, b) => a[0].localeCompare(b[0])));
  const rewardRealmByMechanic = Object.fromEntries(
    Array.from(rewardRealmMechanicCounts.entries()).sort((a, b) => a[0].localeCompare(b[0])),
  );
  const missingExpectedMechanics = EXPECTED_NON_CORE_MECHANICS.filter(
    (mechanic) => (mechanicCounts.get(mechanic) ?? 0) === 0,
  );
  const missingTemplateMechanics = Array.from(templateMechanics)
    .filter((mechanic) => (mechanicCounts.get(mechanic) ?? 0) === 0)
    .sort();
  const rewardRealmUniqueMechanics = Array.from(rewardRealmMechanicCounts.keys()).filter((mechanic) => mechanic !== "core");
  if (missingExpectedMechanics.length > 0) {
    coverageIssues.push(`Missing expected mechanics in catalog runtime: ${missingExpectedMechanics.join(", ")}.`);
  }
  if (missingTemplateMechanics.length > 0) {
    coverageIssues.push(`Template mechanics discovered but not used by any game: ${missingTemplateMechanics.join(", ")}.`);
  }
  if (rewardRealmUniqueMechanics.length < 3) {
    coverageIssues.push(
      `Reward Realm mechanic diversity too low: expected >= 3 mechanics, found ${rewardRealmUniqueMechanics.length}.`,
    );
  }

  const report = {
    generatedAt: new Date().toISOString(),
    status: unresolved.length === 0 && coverageIssues.length === 0 ? "pass" : "fail",
    totals: {
      catalogTotal: games.length,
      playableRoutes,
      unresolvedRoutes: unresolved.length,
    },
    coverage: {
      coreValidated,
      legacyValidated,
      arcadeTemplateValidated,
    },
    template: {
      importedInPlayerRoute: templateImported,
      renderedInPlayerRoute: templateRendered,
      hasFallback: templateHasFallback,
      mechanics: Array.from(templateMechanics).sort(),
    },
    distribution: {
      byMechanic,
      rewardRealmByMechanic,
      rewardRealmUniqueMechanics: rewardRealmUniqueMechanics.sort(),
    },
    issues: {
      unresolved,
      arcadeCollisionIds,
      coverage: coverageIssues,
    },
    outputs: {
      json: relativeFromRoot(REPORT_JSON_PATH),
      markdown: relativeFromRoot(REPORT_MD_PATH),
    },
  };

  await fs.mkdir(path.dirname(REPORT_JSON_PATH), { recursive: true });
  await Promise.all([
    fs.writeFile(REPORT_JSON_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    fs.writeFile(REPORT_MD_PATH, `${renderSummaryMarkdown(report)}\n`, "utf8"),
  ]);

  console.log(
    `[games500-playability-audit] total=${report.totals.catalogTotal} playable=${report.totals.playableRoutes} unresolved=${report.totals.unresolvedRoutes}`,
  );

  if (report.status !== "pass" && !noFail) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[games500-playability-audit] failed:", error);
  process.exitCode = 1;
});

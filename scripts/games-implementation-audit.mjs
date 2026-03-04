#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const CATALOG_PATH = path.join(ROOT, "src/lib/games/catalog.ts");
const GAME_PAGE_PATH = path.join(ROOT, "src/app/games/[gameId]/page.tsx");
const INDEX_PATH = path.join(ROOT, "src/components/games/index.ts");
const COMPONENTS_DIR = path.join(ROOT, "src/components/games");
const MASTER_CATALOG_PATH = path.join(ROOT, "public", "GAMES-500-MASTER-CATALOG.json");

const MD_OUT_PATH = path.join(ROOT, "GAMES-IMPLEMENTATION-TRUTH-REPORT.md");
const JSON_OUT_PATH = path.join(ROOT, "public/GAMES-IMPLEMENTATION-TRUTH-REPORT.json");

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
  return objects
    .map((match) => {
      const objectText = match[0];
      const id = objectText.match(/id:\s*"([^"]+)"/)?.[1] ?? null;
      const title = objectText.match(/title:\s*"([^"]+)"/)?.[1] ?? null;
      if (!id || !title) {
        return null;
      }
      return { id, title };
    })
    .filter(Boolean);
}

function parseLegacySeeds(catalogSource) {
  const block = extractBetween(
    catalogSource,
    "const GEMINI_GAME_SEEDS = [",
    "] as const;",
  );
  return Array.from(block.matchAll(/\["([^"]+)",\s*"([^"]+)"\]/g)).map((match) => ({
    id: match[1],
    title: match[2],
  }));
}

function parseGeneratedCount(catalogSource, symbolName) {
  const expression = new RegExp(
    `export const ${symbolName}: RegisteredGame\\[\\]\\s*=\\s*Array\\.from\\(\\s*\\{\\s*length:\\s*([A-Z0-9_]+|\\d+)\\s*\\}`,
  );
  const countToken = catalogSource.match(expression)?.[1];
  if (!countToken) {
    throw new Error(`Unable to parse generated count for ${symbolName}`);
  }
  if (/^\d+$/u.test(countToken)) {
    return Number(countToken);
  }

  const constantExpression = new RegExp(`const ${countToken} = (\\d+);`);
  const constantValue = catalogSource.match(constantExpression)?.[1];
  if (!constantValue) {
    throw new Error(`Unable to resolve generated count constant ${countToken} for ${symbolName}`);
  }
  return Number(constantValue);
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

function parseMapBlockWithFallback(source, declarationPrefixes) {
  for (const declarationPrefix of declarationPrefixes) {
    if (!source.includes(declarationPrefix)) continue;
    return parseMapBlock(source, declarationPrefix);
  }
  throw new Error(`Missing start token: ${declarationPrefixes[0]}`);
}

function parseComponentFileMap(indexSource) {
  const out = new Map();
  const defaultExports = Array.from(
    indexSource.matchAll(/export \{ default as ([A-Za-z0-9_]+) \} from "\.\/([^"]+)";/g),
  );
  for (const entry of defaultExports) {
    out.set(entry[1], entry[2]);
  }

  const namedExports = Array.from(
    indexSource.matchAll(/export \{ (?!default as )([A-Za-z0-9_]+) \} from "\.\/([^"]+)";/g),
  );
  for (const entry of namedExports) {
    out.set(entry[1], entry[2]);
  }

  return out;
}

async function parseAliases() {
  const entries = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".tsx"))
    .map((entry) => entry.name);
  const aliasMap = new Map();

  for (const file of files) {
    const fullPath = path.join(COMPONENTS_DIR, file);
    const content = await fs.readFile(fullPath, "utf8");
    const aliasTarget = content.match(/export\s+\{\s*default\s*\}\s+from\s+"\.\/([^"]+)";/)?.[1];
    if (!aliasTarget) continue;
    aliasMap.set(file.replace(/\.tsx$/u, ""), aliasTarget);
  }

  return aliasMap;
}

function resolveAlias(fileBase, aliasMap) {
  const chain = [fileBase];
  const seen = new Set([fileBase]);
  let current = fileBase;

  while (aliasMap.has(current)) {
    const next = aliasMap.get(current);
    if (!next || seen.has(next)) break;
    chain.push(next);
    seen.add(next);
    current = next;
  }

  return {
    file: current,
    chain,
  };
}

function generatePrefixedIds(prefix, count) {
  return Array.from({ length: count }, (_, index) => `${prefix}-${String(index + 1).padStart(3, "0")}`);
}

async function parseMasterCatalogIds() {
  try {
    const source = await fs.readFile(MASTER_CATALOG_PATH, "utf8");
    const parsed = JSON.parse(source);
    const rows = Array.isArray(parsed?.rows) ? parsed.rows : [];
    return rows
      .map((row) => (row && typeof row.id === "string" ? row.id : null))
      .filter(Boolean);
  } catch {
    return [];
  }
}

function buildMarkdown(report) {
  const missingCore = report.coverage.missingCoreMappings;
  const missingLegacy = report.coverage.missingLegacyMappings;
  const aliasRows = report.aliasExamples
    .map(
      (item) =>
        `| ${item.gameId} | ${item.component} | \`${item.entryFile}.tsx\` | \`${item.resolvedFile}.tsx\` |`,
    )
    .join("\n");

  return [
    "# Games Implementation Truth Report",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Verified Snapshot",
    `- Catalog entries: ${report.catalog.total} (core=${report.catalog.core}, legacy=${report.catalog.legacy}, arcade=${report.catalog.arcade}, expansion=${report.catalog.expansion}).`,
    `- Runtime routes: core=${report.runtime.coreRouted}, mapped-components=${report.runtime.mappedComponentRouted}, template-routed=${report.runtime.templateRouted}.`,
    `- Unique runtime implementation files behind all ${report.catalog.total} routes: ${report.runtime.uniqueRuntimeImplementationFiles}.`,
    `- Mapped-component routes that are alias wrappers: ${report.runtime.mappedAliasRoutes}.`,
    "",
    "## Coverage Checks",
    `- Core IDs missing a mapped component: ${missingCore.length}.`,
    `- Legacy IDs missing a mapped component: ${missingLegacy.length}.`,
    `- Catalog IDs mapped to component names missing index exports: ${report.coverage.missingMappedComponentFiles.length}.`,
    `- Arcade/Expansion IDs are template-routed by design: ${report.runtime.templateRouted}.`,
    "",
    "## Alias Samples",
    "| gameId | routed component | entry file | resolved implementation |",
    "|---|---|---|---|",
    aliasRows || "| none | none | none | none |",
    "",
    "## Interpretation",
    `- The ${report.catalog.total} catalog entries are real routes, but most are not unique engines.`,
    "- A large portion of IDs route through shared implementations (mapped components + one arcade template).",
    "- This report is generated from code and can be re-run to validate future claims.",
    "",
    "## Output Files",
    `- Markdown: \`${path.relative(ROOT, MD_OUT_PATH)}\``,
    `- JSON: \`${path.relative(ROOT, JSON_OUT_PATH)}\``,
    "",
  ].join("\n");
}

async function main() {
  const failOnMissing = process.argv.includes("--fail-on-missing");
  const [catalogSource, gamePageSource, indexSource, aliasMap] = await Promise.all([
    fs.readFile(CATALOG_PATH, "utf8"),
    fs.readFile(GAME_PAGE_PATH, "utf8"),
    fs.readFile(INDEX_PATH, "utf8"),
    parseAliases(),
  ]);

  const coreGames = parseCoreGames(catalogSource);
  const legacyGames = parseLegacySeeds(catalogSource);
  const arcadeCount = parseGeneratedCount(catalogSource, "ARCADE_GAMES");
  const expansionCount = parseGeneratedCount(catalogSource, "EXPANSION_ARCADE_GAMES");

  const coreComponentMap = parseMapBlockWithFallback(
    gamePageSource,
    [
      "const CORE_COMPONENTS: Record<GameType, (props: CoreGameComponentProps) => React.JSX.Element> = {",
      "const CORE_COMPONENTS: Record<GameType, React.ComponentType<CoreGameComponentProps>> = {",
      "const CORE_COMPONENTS: Record<GameType, React.ComponentType<any>> = {",
    ],
  );
  const legacyComponentMap = parseMapBlockWithFallback(
    gamePageSource,
    [
      "const LEGACY_COMPONENTS: Record<string, () => React.JSX.Element> = {",
      "const LEGACY_COMPONENTS: Record<string, React.ComponentType<any>> = {",
      "const LEGACY_COMPONENTS: Record<string, React.ComponentType> = {",
    ],
  );
  const componentFileMap = parseComponentFileMap(indexSource);
  const masterCatalogIds = await parseMasterCatalogIds();
  const fallbackCatalogIds = [
    ...coreGames.map((game) => game.id),
    ...legacyGames.map((game) => game.id),
    ...generatePrefixedIds("arcade", arcadeCount),
    ...generatePrefixedIds("zone", expansionCount),
  ];
  const allCatalogIds = masterCatalogIds.length > 0 ? masterCatalogIds : fallbackCatalogIds;

  const missingCoreMappings = [];
  const missingLegacyMappings = [];
  const missingMappedComponentFileSet = new Set();
  const coreResolvedFiles = new Set();
  const mappedResolvedFiles = new Set();

  for (const game of coreGames) {
    const component = coreComponentMap.get(game.id);
    if (!component) {
      missingCoreMappings.push(game.id);
      continue;
    }
    const file = componentFileMap.get(component);
    if (!file) {
      missingCoreMappings.push(game.id);
      continue;
    }
    const resolved = resolveAlias(file, aliasMap);
    coreResolvedFiles.add(resolved.file);
  }

  for (const game of legacyGames) {
    const component = legacyComponentMap.get(game.id);
    if (!component) {
      missingLegacyMappings.push(game.id);
      continue;
    }
    const file = componentFileMap.get(component);
    if (!file) {
      missingLegacyMappings.push(game.id);
      continue;
    }
    const resolved = resolveAlias(file, aliasMap);
    mappedResolvedFiles.add(resolved.file);
  }

  const mappedRouteRecords = [];
  let coreRouted = 0;
  let mappedComponentRouted = 0;
  let templateRouted = 0;

  for (const gameId of allCatalogIds) {
    const coreComponent = coreComponentMap.get(gameId);
    if (coreComponent) {
      coreRouted += 1;
      const file = componentFileMap.get(coreComponent);
      if (!file) {
        missingMappedComponentFileSet.add(gameId);
        continue;
      }
      const resolved = resolveAlias(file, aliasMap);
      coreResolvedFiles.add(resolved.file);
      continue;
    }

    const mappedComponent = legacyComponentMap.get(gameId);
    if (mappedComponent) {
      mappedComponentRouted += 1;
      const file = componentFileMap.get(mappedComponent);
      if (!file) {
        missingMappedComponentFileSet.add(gameId);
        continue;
      }
      const resolved = resolveAlias(file, aliasMap);
      mappedResolvedFiles.add(resolved.file);
      mappedRouteRecords.push({
        gameId,
        component: mappedComponent,
        entryFile: file,
        resolvedFile: resolved.file,
        aliasDepth: resolved.chain.length - 1,
        chain: resolved.chain,
      });
      continue;
    }

    templateRouted += 1;
  }

  const mappedAliasRoutes = mappedRouteRecords.filter((record) => record.aliasDepth > 0);
  const runtimeImplementationUnion = new Set([
    ...coreResolvedFiles,
    ...mappedResolvedFiles,
  ]);
  if (templateRouted > 0) {
    runtimeImplementationUnion.add("immersive-arcade-template");
  }
  const missingMappedComponentFiles = Array.from(missingMappedComponentFileSet).sort();

  const report = {
    generatedAt: new Date().toISOString(),
    catalog: {
      core: coreGames.length,
      legacy: legacyGames.length,
      arcade: arcadeCount,
      expansion: expansionCount,
      total: allCatalogIds.length,
      source: masterCatalogIds.length > 0 ? "public/GAMES-500-MASTER-CATALOG.json" : "catalog-derived-fallback",
      generatedIds: {
        arcade: generatePrefixedIds("arcade", arcadeCount),
        expansion: generatePrefixedIds("zone", expansionCount),
      },
    },
    runtime: {
      coreRouted,
      legacyRouted: mappedComponentRouted,
      mappedComponentRouted,
      templateRouted,
      legacyAliasRoutes: mappedAliasRoutes.length,
      mappedAliasRoutes: mappedAliasRoutes.length,
      uniqueRuntimeImplementationFiles: runtimeImplementationUnion.size,
      coreResolvedFiles: Array.from(coreResolvedFiles).sort(),
      legacyResolvedFiles: Array.from(mappedResolvedFiles).sort(),
      mappedResolvedFiles: Array.from(mappedResolvedFiles).sort(),
      templateFile: "immersive-arcade-template",
    },
    coverage: {
      missingCoreMappings,
      missingLegacyMappings,
      missingMappedComponentFiles,
      missingCount: missingCoreMappings.length + missingLegacyMappings.length + missingMappedComponentFiles.length,
    },
    aliasExamples: mappedAliasRoutes
      .slice(0, 20)
      .map(({ gameId, component, entryFile, resolvedFile }) => ({
        gameId,
        component,
        entryFile,
        resolvedFile,
      })),
    legacyRoutes: mappedRouteRecords,
  };

  await fs.mkdir(path.dirname(JSON_OUT_PATH), { recursive: true });
  await Promise.all([
    fs.writeFile(JSON_OUT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    fs.writeFile(MD_OUT_PATH, `${buildMarkdown(report)}\n`, "utf8"),
  ]);

  const summary = [
    `catalog=${report.catalog.total}`,
    `uniqueRuntimeImplementations=${report.runtime.uniqueRuntimeImplementationFiles}`,
    `mappedAliasRoutes=${report.runtime.mappedAliasRoutes}`,
    `missingMappings=${report.coverage.missingCount}`,
  ].join(" ");
  console.log(`[games-implementation-audit] ${summary}`);

  if (failOnMissing && report.coverage.missingCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[games-implementation-audit] failed:", error);
  process.exitCode = 1;
});

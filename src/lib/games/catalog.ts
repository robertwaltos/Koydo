import type { GameType } from "./types";
import { ASSETS } from "@/lib/config/assets";

export type GameCategory =
  | "literacy"
  | "math"
  | "logic"
  | "creative"
  | "science"
  | "adventure"
  | "arcade";

export type GameEngine = "Unreal Engine 5.5+" | "Unity 6+" | "Godot 4.3+";
export type GameAgeGroup =
  | "Kindergarten (4-6)"
  | "Elementary (7-11)"
  | "Middle School (12-14)"
  | "High School (15-18)"
  | "College (19+)";
export type GameTrack = "Educational Core" | "Reward Realm";

export type RegisteredGame = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  ageMin: number;
  ageMax: number;
  ageGroup: GameAgeGroup;
  engine: GameEngine;
  track: GameTrack;
  category: GameCategory;
  mode: "core" | "arcade" | "legacy";
  safeForChildren: boolean;
  ageLockRecommended: boolean;
  educationalWeight: number;
  graphicsTier: "4k-ready";
  mechanic:
    | "core"
    | "precision-choice"
    | "sequence-recall"
    | "lane-sort"
    | "timed-equation"
    | "pattern-scan"
    | "signal-balance";
  backdropImage: string;
  backdropVideo?: string | null;
};

export const CORE_GAMES: RegisteredGame[] = [
  {
    id: "letter-catcher",
    title: "Letter Catcher",
    description: "Letters In Motion",
    icon: "🔤",
    color: "from-sky-400 to-blue-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "literacy",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 95,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.heroHome,
    backdropVideo: null,
  },
  {
    id: "word-builder",
    title: "Word Builder",
    description: "Build New Words",
    icon: "📝",
    color: "from-emerald-400 to-teal-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "literacy",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 95,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.heroHome,
    backdropVideo: null,
  },
  {
    id: "number-crunch",
    title: "Number Crunch",
    description: "Math Speed Sprint",
    icon: "🧮",
    color: "from-amber-400 to-orange-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "math",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 95,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.bgBottom,
    backdropVideo: null,
  },
  {
    id: "pattern-train",
    title: "Pattern Train",
    description: "Pattern Logic Ride",
    icon: "🚂",
    color: "from-violet-400 to-purple-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "logic",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 90,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.bgAuth,
    backdropVideo: null,
  },
  {
    id: "story-sequencer",
    title: "Story Sequencer",
    description: "Story Order Quest",
    icon: "📖",
    color: "from-rose-400 to-pink-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "literacy",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 90,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.heroSignIn,
    backdropVideo: null,
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "Memory Match Cards",
    icon: "🃏",
    color: "from-cyan-400 to-sky-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "logic",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 85,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.bgBottom,
    backdropVideo: null,
  },
  {
    id: "color-mixer",
    title: "Color Mixer",
    description: "Mix Bright Colors",
    icon: "🎨",
    color: "from-fuchsia-400 to-pink-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "creative",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 80,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.bgAuth,
    backdropVideo: null,
  },
  {
    id: "shape-safari",
    title: "Shape Safari",
    description: "Shape Hunt Safari",
    icon: "🔷",
    color: "from-lime-400 to-green-500",
    ageMin: 4,
    ageMax: 6,
    ageGroup: "Kindergarten (4-6)",
    engine: "Unreal Engine 5.5+",
    track: "Educational Core",
    category: "math",
    mode: "core",
    safeForChildren: true,
    ageLockRecommended: false,
    educationalWeight: 85,
    graphicsTier: "4k-ready",
    mechanic: "core",
    backdropImage: ASSETS.heroHome,
    backdropVideo: null,
  },
];

const ARCADE_GAME_COUNT = 200;
const EXPANSION_ARCADE_GAME_COUNT = 235;
const TOTAL_GENERATED_GAME_COUNT = ARCADE_GAME_COUNT + EXPANSION_ARCADE_GAME_COUNT;

const GENERATED_TITLE_LEFT = [
  "Sky",
  "River",
  "Echo",
  "Luna",
  "Nova",
  "Terra",
  "Comet",
  "Aurora",
  "Orbit",
  "Pixel",
  "Clover",
  "Harbor",
  "Meadow",
  "Dawn",
  "Summit",
  "Prism",
  "Marble",
  "Willow",
  "Maple",
  "Coral",
  "Breeze",
  "Sprout",
  "Pebble",
  "Nimbus",
  "Flare",
] as const;

const GENERATED_TITLE_RIGHT = [
  "Voyage",
  "Quest",
  "Sprint",
  "Lab",
  "Trail",
  "Circuit",
  "Garden",
  "Studio",
  "Arcade",
  "Rally",
  "Arena",
  "Chronicle",
  "Frontier",
  "Odyssey",
  "Summit",
  "Expedition",
  "Mission",
  "Path",
] as const;

const SHORT_DESCRIPTION_ROTATION = [
  "Play Learn Grow",
  "Think Move Learn",
  "Solve Share Smile",
  "Build Explore Learn",
  "Focus Practice Win",
  "Team Up Learn",
  "Discover Create Grow",
] as const;

const BANNED_TITLE_TERMS = /\b(ultra|max|super|xuper|supremacy)\b/i;
const BANNED_ID_TERMS = /\b(ultra|max|super|xuper|supremacy)\b/i;

const GEMINI_GAME_SEEDS = [
  ["neural", "Neural Navigator"],
  ["fraction", "Fraction Forge"],
  ["vocabulary", "Vocabulary Voyager"],
  ["artistic", "Artistic Algorithms"],
  ["ethical", "Ethical Engine"],
  ["synthesis", "Synthesis Sphere"],
  ["velocity", "Velocity Vector"],
  ["logic", "Logical Link"],
  ["canvas", "Cosmic Canvas"],
  ["chronicle", "Chronicle Case"],
  ["syntax", "Syntax Serpent"],
  ["genetic", "Genetic Garden"],
  ["quantum", "Quantum Quest"],
  ["market", "Market Maker"],
  ["orbit", "Orbit Operator"],
  ["cipher", "Cipher City"],
  ["biome", "Biome Builder"],
  ["rhythm", "Rhythm Rules"],
  ["tectonic", "Tectonic Trek"],
  ["flora", "Flora Fusion"],
  ["bot", "Bot Builder"],
  ["eco", "Eco Engineer"],
  ["aero", "Aero Architect"],
  ["histo", "Histo Hunt"],
  ["nano", "Nano Navigator"],
  ["quantum-quirk", "Quantum Quirk"],
  ["star-steer", "Star Steer"],
  ["logic-labyrinth", "Logic Labyrinth"],
  ["bio-blast", "Bio Blast"],
  ["ethos-engine", "Ethos Engine"],
  ["echo-expedition", "Echo's Expedition"],
  ["terra-trek", "Terra's Trek"],
  ["spark-quest", "Spark's Spark-Quest"],
  ["pixel-path", "Pixel's Path"],
  ["luna-legend", "Luna's Legend"],
  ["circuit-crusader", "Circuit Crusader"],
  ["gravity-goliath", "Gravity Goliath"],
  ["protein-painter", "Protein Painter"],
  ["linguist-lookout", "Linguist Lookout"],
  ["fusion-founder", "Fusion Founder"],
  ["stellar-state", "Stellar State"],
  ["neural-net", "Neural Net"],
  ["climate-commander", "Climate Commander"],
  ["history-hacker", "History Hacker"],
  ["nano-nexus", "Nano Nexus"],
  ["mars-colony", "Mars Colony"],
  ["quantum-cascade", "Quantum Cascade"],
  ["synthetic-architect", "Synthetic Architect"],
  ["global-harmony", "Global Harmony"],
  ["evolution-prime", "Evolution Prime"],
  ["word-woods", "Word Woods"],
  ["story-smith", "Story Smith"],
  ["alphabet-airship", "Alphabet Airship"],
  ["sentence-safari", "Sentence Safari"],
  ["rhyme-river", "Rhyme River"],
  ["count-constellations", "Count Constellations"],
  ["fraction-factory", "Fraction Factory"],
] as const;

const LEGACY_TITLE_LEFT = [
  "Atlas",
  "Beacon",
  "Cedar",
  "Delta",
  "Ember",
  "Fable",
  "Grove",
  "Ivory",
  "Jade",
  "Kindle",
  "Lantern",
  "Meridian",
  "Noble",
  "Onyx",
  "Pioneer",
  "Quill",
  "Raven",
  "Solace",
  "Timber",
] as const;

const LEGACY_TITLE_RIGHT = ["Journey", "Studio", "Rally"] as const;

function buildGeneratedTitles(total: number): string[] {
  const maxCombinations = GENERATED_TITLE_LEFT.length * GENERATED_TITLE_RIGHT.length;
  if (total > maxCombinations) {
    throw new Error(`Generated game title pool too small: need ${total}, have ${maxCombinations}`);
  }

  return Array.from({ length: total }, (_, index) => {
    const left = GENERATED_TITLE_LEFT[index % GENERATED_TITLE_LEFT.length]!;
    const right = GENERATED_TITLE_RIGHT[Math.floor(index / GENERATED_TITLE_LEFT.length)]!;
    return `${left} ${right}`;
  });
}

const GENERATED_GAME_TITLES = buildGeneratedTitles(TOTAL_GENERATED_GAME_COUNT);

function buildLegacyTitles(total: number): string[] {
  const maxCombinations = LEGACY_TITLE_LEFT.length * LEGACY_TITLE_RIGHT.length;
  if (total > maxCombinations) {
    throw new Error(`Legacy game title pool too small: need ${total}, have ${maxCombinations}`);
  }

  return Array.from({ length: total }, (_, index) => {
    const left = LEGACY_TITLE_LEFT[index % LEGACY_TITLE_LEFT.length]!;
    const right = LEGACY_TITLE_RIGHT[Math.floor(index / LEGACY_TITLE_LEFT.length)]!;
    return `${left} ${right}`;
  });
}

const LEGACY_GAME_TITLES = buildLegacyTitles(GEMINI_GAME_SEEDS.length);

const CATEGORY_ROTATION: GameCategory[] = [
  "arcade",
  "adventure",
  "logic",
  "creative",
  "science",
  "math",
  "literacy",
];

const ICON_ROTATION = ["🚀", "🌌", "🛸", "⚡", "🎮", "🧠", "🧩", "🎨", "🌠", "🏁"] as const;
const COLOR_ROTATION = [
  "from-indigo-500 to-cyan-500",
  "from-emerald-500 to-lime-500",
  "from-orange-500 to-rose-500",
  "from-fuchsia-500 to-violet-500",
  "from-sky-500 to-blue-600",
] as const;
const MECHANIC_ROTATION: Array<RegisteredGame["mechanic"]> = [
  "precision-choice",
  "sequence-recall",
  "lane-sort",
  "timed-equation",
  "pattern-scan",
  "signal-balance",
];
const BACKDROP_ROTATION = [
  ASSETS.heroHome,
  ASSETS.bgBottom,
  ASSETS.bgAuth,
  ASSETS.heroSignIn,
] as const;

const REWARD_REALM_GAME_COUNT = 100;

const AGE_DISTRIBUTION_TARGETS: Array<{
  ageGroup: GameAgeGroup;
  count: number;
  ageMin: number;
  ageMax: number;
}> = [
  { ageGroup: "Kindergarten (4-6)", count: 100, ageMin: 4, ageMax: 6 },
  { ageGroup: "Elementary (7-11)", count: 150, ageMin: 7, ageMax: 11 },
  { ageGroup: "Middle School (12-14)", count: 100, ageMin: 12, ageMax: 14 },
  { ageGroup: "High School (15-18)", count: 100, ageMin: 15, ageMax: 18 },
  { ageGroup: "College (19+)", count: 50, ageMin: 19, ageMax: 22 },
];

const ENGINE_DISTRIBUTION_TARGETS: Array<{ engine: GameEngine; count: number }> = [
  { engine: "Unreal Engine 5.5+", count: 200 },
  { engine: "Unity 6+", count: 200 },
  { engine: "Godot 4.3+", count: 100 },
];

const LEGACY_GAME_COUNT = GEMINI_GAME_SEEDS.length;
const LEGACY_CATALOG_OFFSET = CORE_GAMES.length;
const ARCADE_CATALOG_OFFSET = LEGACY_CATALOG_OFFSET + LEGACY_GAME_COUNT;
const EXPANSION_CATALOG_OFFSET = ARCADE_CATALOG_OFFSET + ARCADE_GAME_COUNT;
const EXPECTED_TOTAL_GAME_COUNT = 500;
const COMPUTED_TOTAL_GAME_COUNT =
  CORE_GAMES.length + LEGACY_GAME_COUNT + ARCADE_GAME_COUNT + EXPANSION_ARCADE_GAME_COUNT;

if (COMPUTED_TOTAL_GAME_COUNT !== EXPECTED_TOTAL_GAME_COUNT) {
  throw new Error(
    `Catalog total mismatch. Expected ${EXPECTED_TOTAL_GAME_COUNT}, found ${COMPUTED_TOTAL_GAME_COUNT}.`,
  );
}

function resolveAgeProfile(catalogIndex: number): Pick<RegisteredGame, "ageMin" | "ageMax" | "ageGroup"> {
  let cursor = 0;
  for (const target of AGE_DISTRIBUTION_TARGETS) {
    const upperBoundExclusive = cursor + target.count;
    if (catalogIndex < upperBoundExclusive) {
      return {
        ageMin: target.ageMin,
        ageMax: target.ageMax,
        ageGroup: target.ageGroup,
      };
    }
    cursor = upperBoundExclusive;
  }

  throw new Error(`Age profile missing for catalog index ${catalogIndex}`);
}

function resolveEngine(catalogIndex: number): GameEngine {
  let cursor = 0;
  for (const target of ENGINE_DISTRIBUTION_TARGETS) {
    const upperBoundExclusive = cursor + target.count;
    if (catalogIndex < upperBoundExclusive) {
      return target.engine;
    }
    cursor = upperBoundExclusive;
  }

  throw new Error(`Engine profile missing for catalog index ${catalogIndex}`);
}

function resolveTrack(mode: RegisteredGame["mode"], generatedArcadeIndex: number): GameTrack {
  if (mode !== "arcade") {
    return "Educational Core";
  }
  return generatedArcadeIndex < REWARD_REALM_GAME_COUNT
    ? "Reward Realm"
    : "Educational Core";
}

function buildLegacyGame(index: number, seed: (typeof GEMINI_GAME_SEEDS)[number]): RegisteredGame {
  const [id] = seed;
  const title = LEGACY_GAME_TITLES[index]!;
  const category = CATEGORY_ROTATION[(index + 2) % CATEGORY_ROTATION.length]!;
  const icon = ICON_ROTATION[(index + 3) % ICON_ROTATION.length]!;
  const color = COLOR_ROTATION[(index + 1) % COLOR_ROTATION.length]!;
  const catalogIndex = LEGACY_CATALOG_OFFSET + index;
  const ageProfile = resolveAgeProfile(catalogIndex);
  const engine = resolveEngine(catalogIndex);
  return {
    id,
    title,
    description: SHORT_DESCRIPTION_ROTATION[index % SHORT_DESCRIPTION_ROTATION.length]!,
    icon,
    color,
    ageMin: ageProfile.ageMin,
    ageMax: ageProfile.ageMax,
    ageGroup: ageProfile.ageGroup,
    engine,
    track: "Educational Core",
    category,
    mode: "legacy",
    safeForChildren: true,
    ageLockRecommended: ageProfile.ageMin >= 13,
    educationalWeight: Math.max(30, 82 - ((index * 5) % 45)),
    graphicsTier: "4k-ready",
    mechanic: MECHANIC_ROTATION[index % MECHANIC_ROTATION.length]!,
    backdropImage: BACKDROP_ROTATION[index % BACKDROP_ROTATION.length]!,
    backdropVideo: index % 5 === 0 ? "/logo-animated.mp4" : null,
  };
}

function buildArcadeGame(index: number): RegisteredGame {
  const id = `arcade-${String(index + 1).padStart(3, "0")}`;
  const category = CATEGORY_ROTATION[index % CATEGORY_ROTATION.length];
  const icon = ICON_ROTATION[index % ICON_ROTATION.length];
  const color = COLOR_ROTATION[index % COLOR_ROTATION.length];
  const catalogIndex = ARCADE_CATALOG_OFFSET + index;
  const ageProfile = resolveAgeProfile(catalogIndex);
  const engine = resolveEngine(catalogIndex);
  const track = resolveTrack("arcade", index);
  const educationalWeight = track === "Reward Realm"
    ? Math.max(25, 45 - ((index * 3) % 20))
    : Math.max(45, 85 - ((index * 7) % 35));
  const mechanic = MECHANIC_ROTATION[index % MECHANIC_ROTATION.length];
  const backdropImage = BACKDROP_ROTATION[index % BACKDROP_ROTATION.length];
  const backdropVideo = index % 4 === 0 ? "/logo-animated.mp4" : null;

  return {
    id,
    title: GENERATED_GAME_TITLES[index]!,
    description: SHORT_DESCRIPTION_ROTATION[(index + 1) % SHORT_DESCRIPTION_ROTATION.length]!,
    icon,
    color,
    ageMin: ageProfile.ageMin,
    ageMax: ageProfile.ageMax,
    ageGroup: ageProfile.ageGroup,
    engine,
    track,
    category,
    mode: "arcade",
    safeForChildren: true,
    ageLockRecommended: ageProfile.ageMin >= 13,
    educationalWeight,
    graphicsTier: "4k-ready",
    mechanic,
    backdropImage,
    backdropVideo,
  };
}

function buildExpansionArcadeGame(index: number): RegisteredGame {
  const id = `zone-${String(index + 1).padStart(3, "0")}`;
  const category = CATEGORY_ROTATION[(index + 4) % CATEGORY_ROTATION.length]!;
  const icon = ICON_ROTATION[(index + 5) % ICON_ROTATION.length]!;
  const color = COLOR_ROTATION[(index + 2) % COLOR_ROTATION.length]!;
  const generatedArcadeIndex = ARCADE_GAME_COUNT + index;
  const catalogIndex = EXPANSION_CATALOG_OFFSET + index;
  const ageProfile = resolveAgeProfile(catalogIndex);
  const engine = resolveEngine(catalogIndex);
  const track = resolveTrack("arcade", generatedArcadeIndex);
  const educationalWeight = track === "Reward Realm"
    ? Math.max(25, 45 - ((index * 3) % 20))
    : Math.max(40, 80 - ((index * 9) % 40));
  return {
    id,
    title: GENERATED_GAME_TITLES[generatedArcadeIndex]!,
    description: SHORT_DESCRIPTION_ROTATION[(index + 3) % SHORT_DESCRIPTION_ROTATION.length]!,
    icon,
    color,
    ageMin: ageProfile.ageMin,
    ageMax: ageProfile.ageMax,
    ageGroup: ageProfile.ageGroup,
    engine,
    track,
    category,
    mode: "arcade",
    safeForChildren: true,
    ageLockRecommended: ageProfile.ageMin >= 13,
    educationalWeight,
    graphicsTier: "4k-ready",
    mechanic: MECHANIC_ROTATION[(index + 1) % MECHANIC_ROTATION.length]!,
    backdropImage: BACKDROP_ROTATION[(index + 1) % BACKDROP_ROTATION.length]!,
    backdropVideo: index % 3 === 0 ? "/logo-animated.mp4" : null,
  };
}

export const LEGACY_GAMES: RegisteredGame[] = GEMINI_GAME_SEEDS.map((seed, index) =>
  buildLegacyGame(index, seed),
);

export const ARCADE_GAMES: RegisteredGame[] = Array.from({ length: ARCADE_GAME_COUNT }, (_, index) =>
  buildArcadeGame(index),
);

export const EXPANSION_ARCADE_GAMES: RegisteredGame[] = Array.from(
  { length: EXPANSION_ARCADE_GAME_COUNT },
  (_, index) => buildExpansionArcadeGame(index),
);

export const GAME_CATALOG: RegisteredGame[] = [
  ...CORE_GAMES,
  ...LEGACY_GAMES,
  ...ARCADE_GAMES,
  ...EXPANSION_ARCADE_GAMES,
];

function validateCatalog(games: RegisteredGame[]): void {
  const idSet = new Set<string>();
  const titleSet = new Set<string>();
  const ageGroupCounts = new Map<GameAgeGroup, number>();
  const engineCounts = new Map<GameEngine, number>();
  const trackCounts = new Map<GameTrack, number>();

  const incrementCount = <T extends string>(map: Map<T, number>, key: T) => {
    map.set(key, (map.get(key) ?? 0) + 1);
  };

  if (games.length !== EXPECTED_TOTAL_GAME_COUNT) {
    throw new Error(`Catalog must contain ${EXPECTED_TOTAL_GAME_COUNT} games, found ${games.length}.`);
  }

  for (const game of games) {
    if (idSet.has(game.id)) {
      throw new Error(`Duplicate game id detected: ${game.id}`);
    }
    idSet.add(game.id);
    if (BANNED_ID_TERMS.test(game.id)) {
      throw new Error(`Blocked id style detected for ${game.id}`);
    }

    const normalizedTitle = game.title.trim().toLowerCase();
    if (titleSet.has(normalizedTitle)) {
      throw new Error(`Duplicate game title detected: ${game.title}`);
    }
    titleSet.add(normalizedTitle);

    if (BANNED_TITLE_TERMS.test(game.title)) {
      throw new Error(`Blocked title style detected for ${game.id}: ${game.title}`);
    }

    const descriptionWordCount = game.description.trim().split(/\s+/).filter(Boolean).length;
    if (descriptionWordCount < 2 || descriptionWordCount > 3) {
      throw new Error(
        `Description length contract violated for ${game.id}: "${game.description}" (${descriptionWordCount} words)`,
      );
    }

    if (!game.safeForChildren) {
      throw new Error(`Unsafe game flag detected for ${game.id}`);
    }

    incrementCount(ageGroupCounts, game.ageGroup);
    incrementCount(engineCounts, game.engine);
    incrementCount(trackCounts, game.track);
  }

  for (const target of AGE_DISTRIBUTION_TARGETS) {
    const count = ageGroupCounts.get(target.ageGroup) ?? 0;
    if (count !== target.count) {
      throw new Error(`Age-group contract violated for ${target.ageGroup}: expected ${target.count}, found ${count}`);
    }
  }

  for (const target of ENGINE_DISTRIBUTION_TARGETS) {
    const count = engineCounts.get(target.engine) ?? 0;
    if (count !== target.count) {
      throw new Error(`Engine contract violated for ${target.engine}: expected ${target.count}, found ${count}`);
    }
  }

  const rewardCount = trackCounts.get("Reward Realm") ?? 0;
  if (rewardCount !== REWARD_REALM_GAME_COUNT) {
    throw new Error(
      `Reward Realm contract violated: expected ${REWARD_REALM_GAME_COUNT}, found ${rewardCount}`,
    );
  }

  const educationalCount = trackCounts.get("Educational Core") ?? 0;
  if (educationalCount !== EXPECTED_TOTAL_GAME_COUNT - REWARD_REALM_GAME_COUNT) {
    throw new Error(
      `Educational Core contract violated: expected ${EXPECTED_TOTAL_GAME_COUNT - REWARD_REALM_GAME_COUNT}, found ${educationalCount}`,
    );
  }
}

validateCatalog(GAME_CATALOG);

const gameMap = new Map(GAME_CATALOG.map((game) => [game.id, game]));

export function getRegisteredGame(gameId: string): RegisteredGame | null {
  return gameMap.get(gameId) ?? null;
}

export function isCoreGameType(gameId: string): gameId is GameType {
  return CORE_GAMES.some((game) => game.id === gameId);
}

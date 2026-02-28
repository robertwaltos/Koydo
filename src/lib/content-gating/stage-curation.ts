/**
 * Free-tier content curation — maps education stages to module sets.
 *
 * Each stage gets 7-10 hand-picked modules for the free tier.
 * Priority was given to:
 * 1. Depth-passed modules (v2.0.0) — real educational content, varied quizzes
 * 2. External curriculum imports — grade-appropriate real content
 * 3. Core 101-level modules — broadest subject coverage
 *
 * Everything not listed as free is premium (requires subscription).
 */

export type StageCuration = {
  stageId: string;
  free: string[];
};

/**
 * Curated free-tier module IDs per education stage.
 *
 * Depth-passed modules marked with ✦ in comments.
 */
const stageCurations: StageCuration[] = [
  {
    stageId: "pre-k",
    free: [
      "pre-k-basic-math-101",            // counting, shapes, colors
      "pre-k-language-arts-101",          // letter recognition, phonics
      "pre-k-general-science-101",        // sensory exploration
      "pre-k-arts-101",                   // creative expression
      "pre-k-biology-101",               // animals and plants
      "pre-k-geography-101",             // maps and places
      "basic-math-prek-u1-external",     // external curriculum (math)
      "gen-science-prek-u1-external",    // external curriculum (science)
      "lang-arts-prek-u1-external",      // external curriculum (language)
    ],
  },
  {
    stageId: "early-elem",
    free: [
      "basic-math-101",                  // ✦ depth-passed — addition, subtraction, place value
      "reading-101",                      // reading fundamentals
      "arts-101",                         // creative arts
      "general-science-101",              // nature and discovery
      "gardening-101",                    // hands-on nature
      "basic-math-k2-u1-external",       // external curriculum (math K-2)
      "gen-science-k2-u1-external",      // external curriculum (science K-2)
      "lang-arts-k2-u1-external",        // external curriculum (language K-2)
    ],
  },
  {
    stageId: "upper-elem",
    free: [
      "biology-101",                      // ✦ depth-passed — cells, ecosystems
      "language-arts-101",                // ✦ depth-passed — grammar, writing
      "chemistry-101",                    // ✦ depth-passed — matter, reactions
      "astronomy-101",                    // solar system, stars
      "geography-101",                    // continents, maps
      "basic-math-35-u1-external",       // external curriculum (math 3-5)
      "gen-science-35-u1-external",      // external curriculum (science 3-5)
      "lang-arts-35-u1-external",        // external curriculum (language 3-5)
      "music-theory-101",                 // ✦ depth-passed — staff, notes, rhythm, scales
    ],
  },
  {
    stageId: "middle",
    free: [
      "physics-101",                      // ✦ depth-passed — forces, motion, energy
      "social-studies-us-101",            // ✦ depth-passed — US history & civics
      "coding-101",                       // intro to programming
      "world-history-101",               // ancient civilizations → modern era
      "math-101",                         // pre-algebra bridge
      "basic-math-68-u1-external",       // external curriculum (math 6-8)
      "gen-science-68-u1-external",      // external curriculum (science 6-8)
      "lang-arts-68-u1-external",        // external curriculum (language 6-8)
    ],
  },
  {
    stageId: "high",
    free: [
      "advanced-math-201",               // ✦ depth-passed — algebra II, trig
      "biology-201",                     // ✦ depth-passed
      "language-arts-201",               // ✦ depth-passed
      "social-studies-us-201",           // ✦ depth-passed
      "ap-prep-101",                      // AP exam preparation
      "sat-prep-101",                     // SAT prep
      "financial-literacy-101",           // personal finance
      "basic-math-910-u1-external",      // external curriculum (math 9-10)
      "gen-science-910-u1-external",     // external curriculum (science 9-10)
      "lang-arts-910-u1-external",       // external curriculum (language 9-10)
    ],
  },
  {
    stageId: "college",
    free: [
      "accounting-finance-101",           // intro accounting
      "project-management-101",           // project management fundamentals
      "cybersecurity-101",                // security basics
      "ai-machine-learning-101",          // AI/ML introduction
      "economics-101",                    // ✦ depth-passed
      "basic-math-1112-u1-external",     // external curriculum (math 11-12)
      "gen-science-1112-u1-external",    // external curriculum (science 11-12)
      "lang-arts-1112-u1-external",      // external curriculum (language 11-12)
      // ✦ epub-derived v2.0.0 — rich college/MBA content
      "dear-mr-buffett-what-an-investor-learns-1-269-mile",  // ✦ finance & investing (Tavakoli/Buffett)
      "business-analysis-for-dummies-kupe-kupersmith",       // ✦ BA fundamentals (BABOK, CBAP)
      "it-s-the-customer-stupid-michael-a-aun",              // ✦ customer strategy & retention
      "drive-the-surprising-truth-about-what-motivates-us",  // ✦ motivation science (Pink — autonomy/mastery/purpose)
      "how-to-talk-to-anyone-leil-lowndes",                  // ✦ communication & interpersonal skills
    ],
  },
];

/* ─── Public API ──────────────────────────────────────────────── */

/** All curated stage→module mappings. */
export function getAllStageCurations(): StageCuration[] {
  return stageCurations;
}

/** Free module IDs for one stage. */
export function getFreeTierModuleIds(stageId: string): string[] {
  return stageCurations.find((c) => c.stageId === stageId)?.free ?? [];
}

/** Every free module ID across all stages (de-duped). */
export function getAllFreeTierModuleIds(): string[] {
  const ids = new Set<string>();
  for (const curation of stageCurations) {
    for (const id of curation.free) {
      ids.add(id);
    }
  }
  return [...ids];
}

/** Check if a module is in the free tier for any stage. */
export function isModuleFree(moduleId: string): boolean {
  return stageCurations.some((c) => c.free.includes(moduleId));
}

/**
 * Auto-map a module to education stages using its age range.
 * Falls back to this when a module isn't explicitly curated.
 */
export function inferStagesForModule(minAge?: number, maxAge?: number): string[] {
  if (minAge == null && maxAge == null) return [];

  const min = minAge ?? 0;
  const max = maxAge ?? 99;

  const stageRanges: [string, number, number][] = [
    ["pre-k", 3, 5],
    ["early-elem", 5, 8],
    ["upper-elem", 8, 11],
    ["middle", 11, 14],
    ["high", 14, 18],
    ["college", 18, 99],
  ];

  return stageRanges
    .filter(([, lo, hi]) => min < hi && max > lo)
    .map(([id]) => id);
}

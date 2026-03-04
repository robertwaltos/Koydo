/* -------------------------------------------------------------------------- */
/*  Koydo Game Engine — Shared Type Definitions                              */
/* -------------------------------------------------------------------------- */

/** Difficulty levels available to all games. */
export type Difficulty = "easy" | "medium" | "hard";

/** Star rating per game completion. */
export type Stars = 0 | 1 | 2 | 3;

/** Age bracket descriptor. */
export type AgeBracket = { min: number; max: number };

/** Educational category for filtering. */
export type EduCategory =
  | "literacy"
  | "math"
  | "logic"
  | "science"
  | "geography"
  | "creative"
  | "physics"
  | "chemistry"
  | "history"
  | "music"
  | "coding"
  | "language";

/** Game mechanic families — each corresponds to one game engine. */
export type MechanicFamily =
  | "match-three"        // Candy Crush style
  | "falling-catch"      // Tetris/Letter-Catcher style
  | "word-search"        // Find words in grid
  | "crossword"          // Fill crossword
  | "jigsaw"             // Puzzle pieces
  | "quiz-race"          // Timed quiz
  | "memory-flip"        // Card flip matching
  | "sequence-recall"    // Simon Says style
  | "drag-sort"          // Sort items into categories
  | "builder"            // Bridge/structure building (physics)
  | "platformer"         // Side-scrolling collection
  | "maze-runner"        // Navigate a maze
  | "map-explorer"       // Carmen Sandiego / Dora style
  | "element-lab"        // Chemistry combinations
  | "pattern-complete"   // Complete the pattern
  | "math-pop"           // Pop bubbles with answers
  | "typing-race"        // Speed typing
  | "rhythm-tap"         // Rhythm game
  | "slide-puzzle"       // 15-puzzle / sliding blocks
  | "tower-stack"        // Stack blocks perfectly
  | "connect-dots"       // Connect numbered dots
  | "color-fill"         // Color regions correctly
  | "balance-scale"      // Balance equations
  | "timeline"           // Order events chronologically
  | "coding-blocks"      // Visual programming blocks
  | "infinite-runner";   // Endless runner with obstacles

/** Result of a completed game round. */
export type GameRoundResult = {
  score: number;
  maxScore: number;
  stars: Stars;
  timeMs: number;
  level: number;
  difficulty: Difficulty;
};

/** Unified game definition used by the catalog. */
export type GameDefinition = {
  /** Unique slug ID — primary key (e.g., "candy-calc-001"). */
  id: string;
  /** Display title. */
  title: string;
  /** Short description (1-2 sentences). */
  description: string;
  /** Emoji icon for the game. */
  icon: string;
  /** Gradient CSS class for card display. */
  gradient: string;
  /** Educational category. */
  category: EduCategory;
  /** Game mechanic family (determines which engine renders it). */
  mechanic: MechanicFamily;
  /** Target age range. */
  ages: AgeBracket;
  /** Educational weight (0-100). */
  eduWeight: number;
  /** Whether age-lock is enforced (guardian phrase needed). */
  ageLock: boolean;
  /** Child-safe flag (always true for Koydo). */
  safeForChildren: true;
  /** Number of levels (0 = infinite/procedural). */
  levels: number;
  /** Theme-specific configuration passed to the engine. */
  themeConfig: GameThemeConfig;
};

/** Theme configuration that customizes a game engine for a specific game. */
export type GameThemeConfig = {
  /** Subject area for content generation. */
  subject: string;
  /** Visual theme palette. */
  palette: readonly string[];
  /** Mascot friend ID to appear alongside the game. */
  mascotId: string;
  /** Content items for the game (type-specific). */
  contentKey?: string;
  /** Custom rules or modifiers. */
  modifiers?: Record<string, string | number | boolean>;
};

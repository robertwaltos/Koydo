/* -------------------------------------------------------------------------- */
/*  Koydo Game Resolver                                                      */
/*  Maps a GameDefinition's mechanic → the correct engine React component     */
/* -------------------------------------------------------------------------- */
"use client";

import type { ComponentType } from "react";
import type { MechanicFamily, GameDefinition, Difficulty, GameRoundResult } from "./types";

/* ── Lazy-load each engine (code-split per mechanic) ─────────────────── */
import { MatchThreeEngine } from "./engines/match-three";
import { QuizRaceEngine } from "./engines/quiz-race";
import { FallingCatchEngine } from "./engines/falling-catch";
import { WordSearchEngine } from "./engines/word-search";
import { MemoryFlipEngine } from "./engines/memory-flip";
import { DragSortEngine } from "./engines/drag-sort";
import { PlatformerEngine } from "./engines/platformer";
import { MazeRunnerEngine } from "./engines/maze-runner";
import { MapExplorerEngine } from "./engines/map-explorer";
import { ElementLabEngine } from "./engines/element-lab";
import { BuilderEngine } from "./engines/builder";
import { PatternCompleteEngine } from "./engines/pattern-complete";
import { MathPopEngine } from "./engines/math-pop";
import { TypingRaceEngine } from "./engines/typing-race";
import { SequenceRecallEngine } from "./engines/sequence-recall";
import { SlidePuzzleEngine } from "./engines/slide-puzzle";
import { TowerStackEngine } from "./engines/tower-stack";
import { BalanceScaleEngine } from "./engines/balance-scale";
import { TimelineEngine } from "./engines/timeline";
import { CodingBlocksEngine } from "./engines/coding-blocks";
import { CrosswordEngine } from "./engines/crossword";
import { JigsawEngine } from "./engines/jigsaw";
import { ConnectDotsEngine } from "./engines/connect-dots";
import { ColorFillEngine } from "./engines/color-fill";
import { InfiniteRunnerEngine } from "./engines/infinite-runner";
import { RhythmTapEngine } from "./engines/rhythm-tap";

/* ── Shared engine props interface ──────────────────────────────────── */
export interface EngineProps {
  /** The game definition (title, theme, config, etc.) */
  game: GameDefinition;
  /** Current difficulty from difficulty selector */
  difficulty: Difficulty;
  /** Current level (0 = infinite/random) */
  level: number;
  /** Called when a round finishes */
  onComplete: (result: GameRoundResult) => void;
  /** Called when player exits the game */
  onExit: () => void;
}

/* ── Mechanic → Engine mapping ──────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ENGINE_MAP: Record<MechanicFamily, ComponentType<any>> = {
  "match-three": MatchThreeEngine,
  "quiz-race": QuizRaceEngine,
  "falling-catch": FallingCatchEngine,
  "word-search": WordSearchEngine,
  "memory-flip": MemoryFlipEngine,
  "drag-sort": DragSortEngine,
  platformer: PlatformerEngine,
  "maze-runner": MazeRunnerEngine,
  "map-explorer": MapExplorerEngine,
  "element-lab": ElementLabEngine,
  builder: BuilderEngine,
  "pattern-complete": PatternCompleteEngine,
  "math-pop": MathPopEngine,
  "typing-race": TypingRaceEngine,
  "sequence-recall": SequenceRecallEngine,
  "slide-puzzle": SlidePuzzleEngine,
  "tower-stack": TowerStackEngine,
  "balance-scale": BalanceScaleEngine,
  timeline: TimelineEngine,
  "coding-blocks": CodingBlocksEngine,
  crossword: CrosswordEngine,
  jigsaw: JigsawEngine,
  "connect-dots": ConnectDotsEngine,
  "color-fill": ColorFillEngine,
  "infinite-runner": InfiniteRunnerEngine,
  "rhythm-tap": RhythmTapEngine,
};

/**
 * Resolve a GameDefinition to its engine component.
 * Returns undefined if the mechanic is unknown.
 */
export function resolveEngine(
  mechanic: MechanicFamily,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ComponentType<any> | undefined {
  return ENGINE_MAP[mechanic];
}

/**
 * Check whether an engine exists for a given mechanic.
 */
export function hasEngine(mechanic: MechanicFamily): boolean {
  return mechanic in ENGINE_MAP;
}

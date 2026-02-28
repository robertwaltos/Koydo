export const GAME_TYPES = [
  "letter-catcher",
  "word-builder",
  "number-crunch",
  "pattern-train",
  "story-sequencer",
  "memory-match",
  "color-mixer",
  "shape-safari",
] as const;

export type GameType = (typeof GAME_TYPES)[number];

export const GAME_DIFFICULTIES = ["easy", "medium", "hard"] as const;

export type GameDifficulty = (typeof GAME_DIFFICULTIES)[number];

export type GameStars = 0 | 1 | 2 | 3;

export type GameResult = {
  gameType: GameType;
  score: number;
  maxScore: number;
  stars: GameStars;
  timeMs: number;
  difficulty: GameDifficulty;
};

export type GamePlay = GameResult & {
  id: string;
  createdAt: string;
  pointsAwarded: number;
  normalized: number;
};

export type Triple<T> = [T, T, T];

export type GameContentBank<T> = {
  key: string;
  items: readonly T[];
};

export type LetterItem = {
  id: string;
  letter: string;
  sound: string;
  word: string;
  emoji: string;
  case: "upper" | "lower";
};

export type CvcWord = {
  id: string;
  word: string;
  family: string;
  imageDescription: string;
  emojiHint: string;
};

export type MathProblem = {
  id: string;
  equation: string;
  answer: number;
  wrongOptions: Triple<number>;
  difficulty: GameDifficulty;
  operation: "addition" | "subtraction";
};

export type PatternItem = {
  id: string;
  sequence: [string, string, string, string, string, string];
  missingPosition: number;
  correctAnswer: string;
  wrongOptions: Triple<string>;
  difficulty: GameDifficulty;
};

export type StoryStep = {
  order: 1 | 2 | 3 | 4;
  text: string;
  emoji: string;
  imageDescription: string;
};

export type StoryScene = {
  id: string;
  title: string;
  scenes: [StoryStep, StoryStep, StoryStep, StoryStep];
};

export type ShapeItem = {
  id: string;
  name: string;
  sides: number;
  description: string;
  realWorldExample: string;
  svgPath: string;
  difficulty: GameDifficulty;
};

export type ColorMix = {
  id: string;
  color1: string;
  color2: string;
  result: string;
  funFact: string;
  rule: "mix" | "tint" | "shade";
};

export type MemoryPair = {
  id: string;
  front: string;
  match: string;
  category: "animals" | "letters" | "numbers" | "shapes" | "colors";
};

export function isGameType(value: string): value is GameType {
  return (GAME_TYPES as readonly string[]).includes(value);
}

export function isGameDifficulty(value: string): value is GameDifficulty {
  return (GAME_DIFFICULTIES as readonly string[]).includes(value);
}

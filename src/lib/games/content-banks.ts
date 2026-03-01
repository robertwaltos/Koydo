import rawContent from "./grok-content-raw.json";
import type {
  ColorMix,
  CvcWord,
  GameContentBank,
  GameDifficulty,
  LetterItem,
  MathProblem,
  MemoryPair,
  PatternItem,
  ShapeItem,
  StoryScene,
  StoryStep,
  Triple,
} from "./types";

type RawLetter = {
  letter?: string;
  lowercase?: string;
  sound?: string;
  word?: string;
  emoji?: string;
};

type RawCvcWord = {
  word?: string;
  family?: string;
  image?: string;
};

type RawMathProblem = {
  equation?: string;
  answer?: number;
  wrong?: number[];
  difficulty?: string;
  type?: string;
};

type RawPattern = {
  sequence?: unknown[];
  answer?: unknown;
  wrong?: unknown[];
  difficulty?: string;
};

type RawStoryStep = {
  order?: number;
  text?: string;
  emoji?: string;
};

type RawStoryScene = {
  id?: string;
  title?: string;
  scenes?: RawStoryStep[];
};

type RawShape = {
  name?: string;
  sides?: number;
  description?: string;
  realWorld?: string;
  difficulty?: string;
};

type RawColorMix = {
  color1?: string;
  color2?: string;
  result?: string;
  funFact?: string;
};

type RawMemoryPair = {
  front?: string;
  match?: string;
  category?: string;
};

type RawContent = {
  letter_bank?: RawLetter[];
  cvc_word_bank?: RawCvcWord[];
  math_problem_bank?: RawMathProblem[];
  pattern_bank?: RawPattern[];
  story_scene_bank?: RawStoryScene[];
  shape_bank?: RawShape[];
  color_mixing_bank?: RawColorMix[];
  memory_match_pairs?: RawMemoryPair[];
};

const raw = rawContent as RawContent;

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toStringValue(value: unknown, fallback: string): string {
  if (typeof value === "string" && value.trim().length > 0) return value.trim();
  return fallback;
}

function toInt(value: unknown, fallback: number): number {
  if (typeof value === "number" && Number.isFinite(value)) return Math.round(value);
  return fallback;
}

function toDifficulty(value: unknown, fallback: GameDifficulty = "easy"): GameDifficulty {
  if (value === "easy" || value === "medium" || value === "hard") return value;
  return fallback;
}

function toMathOperation(value: unknown): "addition" | "subtraction" {
  return value === "subtraction" ? "subtraction" : "addition";
}

function toTripleNumbers(values: unknown, answer: number): Triple<number> {
  const source = Array.isArray(values)
    ? values.filter((item): item is number => typeof item === "number" && Number.isFinite(item))
    : [];
  const unique = Array.from(new Set(source.map((item) => Math.round(item)).filter((item) => item !== answer)));
  while (unique.length < 3) {
    unique.push(answer + unique.length + 1);
  }
  return [unique[0], unique[1], unique[2]];
}

function toTripleStrings(values: unknown, answer: string): Triple<string> {
  const source = Array.isArray(values)
    ? values
        .map((item) => {
          if (typeof item === "number" && Number.isFinite(item)) return String(item);
          return item;
        })
        .filter((item): item is string => typeof item === "string" && item.trim().length > 0)
        .map((item) => item.trim())
    : [];
  const unique = Array.from(new Set(source.filter((item) => item !== answer)));
  while (unique.length < 3) {
    unique.push(`${answer}-${unique.length + 1}`);
  }
  return [unique[0], unique[1], unique[2]];
}

function toPatternToken(value: unknown, fallback: string): string {
  if (typeof value === "string" && value.trim().length > 0) return value.trim();
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return fallback;
}

function inferEmojiHint(word: string, imageDescription: string): string {
  const normalized = `${word} ${imageDescription}`.toLowerCase();
  const hintMap: Array<{ pattern: RegExp; emoji: string }> = [
    { pattern: /(cat|kitten)/, emoji: "🐱" },
    { pattern: /(dog|puppy)/, emoji: "🐶" },
    { pattern: /(pig)/, emoji: "🐷" },
    { pattern: /(hen|bird|chick)/, emoji: "🐔" },
    { pattern: /(fish)/, emoji: "🐟" },
    { pattern: /(sun)/, emoji: "☀️" },
    { pattern: /(moon)/, emoji: "🌙" },
    { pattern: /(hat|cap)/, emoji: "🎩" },
    { pattern: /(jam|berry)/, emoji: "🍓" },
    { pattern: /(van|car|bus)/, emoji: "🚐" },
    { pattern: /(book)/, emoji: "📘" },
    { pattern: /(toy)/, emoji: "🧸" },
  ];

  for (const entry of hintMap) {
    if (entry.pattern.test(normalized)) return entry.emoji;
  }

  return "🔤";
}

function shapeSvgPath(shapeName: string): string {
  const key = slugify(shapeName);
  const paths: Record<string, string> = {
    circle: "M50,10 A40,40 0 1,0 50,90 A40,40 0 1,0 50,10",
    square: "M10 10 H90 V90 H10 Z",
    triangle: "M50 10 L90 90 L10 90 Z",
    rectangle: "M10 20 H90 V80 H10 Z",
    oval: "M50 10 C75 10 90 30 90 50 C90 70 75 90 50 90 C25 90 10 70 10 50 C10 30 25 10 50 10",
    pentagon: "M50 10 L88 38 L73 86 L27 86 L12 38 Z",
    hexagon: "M30 10 H70 L90 50 L70 90 H30 L10 50 Z",
    octagon: "M30 10 H70 L90 30 V70 L70 90 H30 L10 70 V30 Z",
    star: "M50 8 L61 36 L91 36 L66 54 L75 84 L50 66 L25 84 L34 54 L9 36 L39 36 Z",
    heart: "M50 88 C20 65 8 48 8 30 C8 18 18 10 30 10 C39 10 46 14 50 21 C54 14 61 10 70 10 C82 10 92 18 92 30 C92 48 80 65 50 88 Z",
    diamond: "M50 8 L92 50 L50 92 L8 50 Z",
    crescent: "M65 10 C35 10 15 30 15 50 C15 70 35 90 65 90 C45 78 35 64 35 50 C35 36 45 22 65 10 Z",
    trapezoid: "M20 20 H80 L92 80 H8 Z",
    semicircle: "M10 70 A40 40 0 0 1 90 70 Z",
    parallelogram: "M25 15 H85 L75 85 H15 Z",
  };
  return paths[key] ?? paths.circle;
}

function colorMixRule(color2: string): "mix" | "tint" | "shade" {
  const normalized = color2.toLowerCase();
  if (normalized === "white") return "tint";
  if (normalized === "black") return "shade";
  return "mix";
}

const LETTER_ITEMS: LetterItem[] = (raw.letter_bank ?? []).flatMap((entry, index) => {
  const upper = toStringValue(entry.letter, String.fromCharCode(65 + (index % 26)));
  const lower = toStringValue(entry.lowercase, upper.toLowerCase());
  const sound = toStringValue(entry.sound, "/?/");
  const word = toStringValue(entry.word, "word");
  const emoji = toStringValue(entry.emoji, "🔤");

  return [
    {
      id: `letter-${slugify(upper)}-upper`,
      letter: upper,
      sound,
      word,
      emoji,
      case: "upper",
    },
    {
      id: `letter-${slugify(lower)}-lower`,
      letter: lower,
      sound,
      word,
      emoji,
      case: "lower",
    },
  ];
});

const CVC_WORD_ITEMS: CvcWord[] = (raw.cvc_word_bank ?? []).map((entry, index) => {
  const word = toStringValue(entry.word, `word-${index + 1}`);
  const imageDescription = toStringValue(entry.image, "Simple educational illustration");
  return {
    id: `cvc-${slugify(word)}`,
    word,
    family: toStringValue(entry.family, "-at"),
    imageDescription,
    emojiHint: inferEmojiHint(word, imageDescription),
  };
});

const MATH_PROBLEM_ITEMS: MathProblem[] = [];
const seenMathIds = new Set<string>();

for (const [index, entry] of (raw.math_problem_bank ?? []).entries()) {
  const equation = toStringValue(entry.equation, `${index + 1} + 1`);
  const operation = toMathOperation(entry.type);
  const answer = toInt(entry.answer, 0);
  const equationSlug = slugify(equation.replace(/\s+/g, ""));
  const id = `math-${operation === "addition" ? "add" : "sub"}-${equationSlug}`;
  if (seenMathIds.has(id)) continue;

  seenMathIds.add(id);
  MATH_PROBLEM_ITEMS.push({
    id,
    equation,
    answer,
    wrongOptions: toTripleNumbers(entry.wrong, answer),
    difficulty: toDifficulty(entry.difficulty),
    operation,
  });
}

const PATTERN_ITEMS: PatternItem[] = (raw.pattern_bank ?? []).map((entry, index) => {
  const source = Array.isArray(entry.sequence)
    ? entry.sequence.slice(0, 6).map((item) => toPatternToken(item, "?"))
    : [];
  while (source.length < 6) source.push("?");
  const sequence = [
    source[0] ?? "?",
    source[1] ?? "?",
    source[2] ?? "?",
    source[3] ?? "?",
    source[4] ?? "?",
    source[5] ?? "?",
  ] as [string, string, string, string, string, string];
  const correctAnswer = toPatternToken(entry.answer, "●");
  const missingIndex = sequence.indexOf("?");
  const missingPosition = missingIndex >= 0 ? missingIndex : sequence.length - 1;
  return {
    id: `pattern-${String(index + 1).padStart(3, "0")}`,
    sequence,
    missingPosition,
    correctAnswer,
    wrongOptions: toTripleStrings(entry.wrong, correctAnswer),
    difficulty: toDifficulty(entry.difficulty),
  };
});

const STORY_SCENE_ITEMS: StoryScene[] = (raw.story_scene_bank ?? []).map((entry, index) => {
  const title = toStringValue(entry.title, `Story ${index + 1}`);
  const id = toStringValue(entry.id, slugify(title));
  const sourceScenes = Array.isArray(entry.scenes) ? entry.scenes.slice(0, 4) : [];
  while (sourceScenes.length < 4) {
    sourceScenes.push({
      order: sourceScenes.length + 1,
      text: `Step ${sourceScenes.length + 1}`,
      emoji: "📖",
    });
  }

  const scenes = sourceScenes.map((scene, sceneIndex) => {
    const order = (sceneIndex + 1) as 1 | 2 | 3 | 4;
    const text = toStringValue(scene.text, `Step ${sceneIndex + 1}`);
    const emoji = toStringValue(scene.emoji, "📖");
    return {
      order,
      text,
      emoji,
      imageDescription: `${title}: ${text}`,
    } satisfies StoryStep;
  }) as [StoryStep, StoryStep, StoryStep, StoryStep];

  return { id, title, scenes };
});

const SHAPE_ITEMS: ShapeItem[] = (raw.shape_bank ?? []).map((entry, index) => {
  const name = toStringValue(entry.name, `shape-${index + 1}`);
  return {
    id: `shape-${slugify(name)}`,
    name,
    sides: Math.max(0, toInt(entry.sides, 0)),
    description: toStringValue(entry.description, "A simple geometric shape."),
    realWorldExample: toStringValue(entry.realWorld, "Everyday object"),
    svgPath: shapeSvgPath(name),
    difficulty: toDifficulty(entry.difficulty),
  };
});

const COLOR_MIX_ITEMS: ColorMix[] = (raw.color_mixing_bank ?? []).map((entry, index) => {
  const color1 = toStringValue(entry.color1, "red");
  const color2 = toStringValue(entry.color2, "blue");
  const result = toStringValue(entry.result, "purple");
  return {
    id: `mix-${slugify(color1)}-${slugify(color2)}-${index + 1}`,
    color1,
    color2,
    result,
    funFact: toStringValue(entry.funFact, "Color mixing creates new shades."),
    rule: colorMixRule(color2),
  };
});

const MEMORY_PAIR_ITEMS: MemoryPair[] = (raw.memory_match_pairs ?? []).map((entry, index) => {
  const rawCategory = toStringValue(entry.category, "animals").toLowerCase();
  const category =
    rawCategory === "animals"
    || rawCategory === "letters"
    || rawCategory === "numbers"
    || rawCategory === "shapes"
    || rawCategory === "colors"
      ? rawCategory
      : "animals";

  return {
    id: `memory-${category}-${index + 1}`,
    front: toStringValue(entry.front, "❓"),
    match: toStringValue(entry.match, "match"),
    category,
  };
});

export const LETTER_BANK: GameContentBank<LetterItem> = {
  key: "letter-bank",
  items: LETTER_ITEMS,
};

export const CVC_WORD_BANK: GameContentBank<CvcWord> = {
  key: "cvc-word-bank",
  items: CVC_WORD_ITEMS,
};

export const MATH_PROBLEM_BANK: GameContentBank<MathProblem> = {
  key: "math-problem-bank",
  items: MATH_PROBLEM_ITEMS,
};

export const PATTERN_BANK: GameContentBank<PatternItem> = {
  key: "pattern-bank",
  items: PATTERN_ITEMS,
};

export const STORY_SCENE_BANK: GameContentBank<StoryScene> = {
  key: "story-scene-bank",
  items: STORY_SCENE_ITEMS,
};

export const SHAPE_BANK: GameContentBank<ShapeItem> = {
  key: "shape-bank",
  items: SHAPE_ITEMS,
};

export const COLOR_MIXING_BANK: GameContentBank<ColorMix> = {
  key: "color-mixing-bank",
  items: COLOR_MIX_ITEMS,
};

export const MEMORY_MATCH_BANK: GameContentBank<MemoryPair> = {
  key: "memory-match-bank",
  items: MEMORY_PAIR_ITEMS,
};

// Backward-compatible aliases for in-progress component branches.
export const letterBank = LETTER_BANK.items;
export const cvcWordBank = CVC_WORD_BANK.items;
export const mathProblemBank = MATH_PROBLEM_BANK.items;
export const patternBank = PATTERN_BANK.items;
export const storySceneBank = STORY_SCENE_BANK.items;
export const shapeBank = SHAPE_BANK.items;
export const colorMixBank = COLOR_MIXING_BANK.items;
export const memoryPairBank = MEMORY_MATCH_BANK.items;

function isContentBank<T>(
  bankOrItems: GameContentBank<T> | readonly T[],
): bankOrItems is GameContentBank<T> {
  return !Array.isArray(bankOrItems);
}

export function getItemsByDifficulty<T extends { difficulty?: string }>(
  bankOrItems: GameContentBank<T> | readonly T[],
  difficulty: string,
): T[] {
  const items = isContentBank(bankOrItems) ? bankOrItems.items : bankOrItems;
  return items.filter((item: T) => item.difficulty === difficulty);
}

export function getRandomItems<T>(items: readonly T[], count: number): T[] {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j]!, clone[i]!];
  }
  return clone.slice(0, Math.max(0, Math.min(count, clone.length)));
}

export function getDailyChallengeSeed(): string {
  return new Date().toISOString().slice(0, 10);
}

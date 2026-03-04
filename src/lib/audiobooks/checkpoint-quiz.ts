const DEFAULT_CHECKPOINT_INTERVAL_CHAPTERS = 2;
const DEFAULT_CHECKPOINT_QUESTION_COUNT = 3;

const STOP_WORDS = new Set([
  "about",
  "after",
  "again",
  "against",
  "among",
  "because",
  "before",
  "being",
  "between",
  "could",
  "every",
  "first",
  "found",
  "great",
  "other",
  "their",
  "there",
  "these",
  "thing",
  "those",
  "through",
  "under",
  "where",
  "which",
  "while",
  "would",
  "without",
]);

export type AudiobookCheckpointQuestionOption = {
  id: string;
  text: string;
};

export type AudiobookCheckpointQuestion = {
  id: string;
  prompt: string;
  options: AudiobookCheckpointQuestionOption[];
  correctOptionId: string;
  correctAnswer: string;
  sourceSentence: string;
  maskedSentence: string;
  skillId: string;
};

export type GradeAudiobookCheckpointResult = {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  scorePercentage: number;
  wrongQuestionIds: string[];
};

export function buildAudiobookCheckpointLessonId(bookSlug: string, chapterNumber: number) {
  return `audiobook:${normalizeBookSlug(bookSlug)}:chapter:${Math.max(1, Math.trunc(chapterNumber))}:checkpoint`;
}

export function buildAudiobookComprehensionSkillId(bookSlug: string) {
  return `audiobook.comprehension.${normalizeBookSlug(bookSlug)}`;
}

export function buildAudiobookResumeStorageKey(bookSlug: string) {
  return `koydo.audiobook.resume.v1:${normalizeBookSlug(bookSlug)}`;
}

export function buildAudiobookCheckpointStorageKey(bookSlug: string) {
  return `koydo.audiobook.checkpoints.v1:${normalizeBookSlug(bookSlug)}`;
}

export function shouldRenderAudiobookCheckpointQuiz(
  chapterNumber: number,
  intervalChapters = DEFAULT_CHECKPOINT_INTERVAL_CHAPTERS,
) {
  const safeChapter = Math.max(1, Math.trunc(chapterNumber));
  const safeInterval = Math.max(1, Math.trunc(intervalChapters));
  return safeChapter % safeInterval === 0;
}

export function buildAudiobookCheckpointQuestions(input: {
  bookSlug: string;
  chapterNumber: number;
  chapterTitle: string;
  chapterText: string;
  questionCount?: number;
}): AudiobookCheckpointQuestion[] {
  const safeQuestionCount = Math.max(
    1,
    Math.min(5, Math.trunc(input.questionCount ?? DEFAULT_CHECKPOINT_QUESTION_COUNT)),
  );
  const safeChapterNumber = Math.max(1, Math.trunc(input.chapterNumber));
  const normalizedBookSlug = normalizeBookSlug(input.bookSlug);
  const skillId = buildAudiobookComprehensionSkillId(normalizedBookSlug);

  const sentences = splitIntoSentences(input.chapterText);
  const corpusWords = collectCorpusWords(sentences);
  const questions: AudiobookCheckpointQuestion[] = [];

  for (const sentence of sentences) {
    if (questions.length >= safeQuestionCount) {
      break;
    }

    const targetWord = pickTargetWord(sentence, `${normalizedBookSlug}:${safeChapterNumber}:${questions.length}`);
    if (!targetWord) continue;

    const maskedSentence = maskWordInSentence(sentence, targetWord);
    if (!maskedSentence || maskedSentence === sentence) continue;

    const distractors = pickDistractors(corpusWords, targetWord, {
      chapterNumber: safeChapterNumber,
      questionIndex: questions.length,
      seed: normalizedBookSlug,
    });
    const optionsBundle = buildOptions(targetWord, distractors, `${normalizedBookSlug}:${sentence}`);

    questions.push({
      id: `audiobook-checkpoint-q${questions.length + 1}`,
      prompt: `Fill in the blank from Chapter ${safeChapterNumber}.`,
      options: optionsBundle.options,
      correctOptionId: optionsBundle.correctOptionId,
      correctAnswer: targetWord,
      sourceSentence: sentence,
      maskedSentence,
      skillId,
    });
  }

  while (questions.length < safeQuestionCount) {
    const fallbackIndex = questions.length;
    const fallbackQuestion = buildFallbackQuestion({
      questionIndex: fallbackIndex,
      chapterNumber: safeChapterNumber,
      chapterTitle: input.chapterTitle,
      skillId,
    });
    questions.push({
      ...fallbackQuestion,
      id: `audiobook-checkpoint-q${questions.length + 1}`,
    });
  }

  return questions;
}

export function gradeAudiobookCheckpointQuiz(input: {
  questions: AudiobookCheckpointQuestion[];
  answersByQuestionId: Record<string, string>;
}): GradeAudiobookCheckpointResult {
  const totalQuestions = input.questions.length;
  let correctCount = 0;
  const wrongQuestionIds: string[] = [];

  for (const question of input.questions) {
    const selectedOptionId = input.answersByQuestionId[question.id];
    if (selectedOptionId === question.correctOptionId) {
      correctCount += 1;
      continue;
    }
    wrongQuestionIds.push(question.id);
  }

  const scorePercentage = totalQuestions > 0 ? correctCount / totalQuestions : 0;

  return {
    totalQuestions,
    correctCount,
    incorrectCount: totalQuestions - correctCount,
    scorePercentage,
    wrongQuestionIds,
  };
}

function normalizeBookSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stableHash(value: string) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function sortDeterministically(values: string[], seed: string) {
  return [...values].sort((left, right) => {
    const leftHash = stableHash(`${seed}:${left.toLowerCase()}`);
    const rightHash = stableHash(`${seed}:${right.toLowerCase()}`);
    return leftHash - rightHash || left.localeCompare(right);
  });
}

function splitIntoSentences(text: string) {
  const normalized = text
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized) return [] as string[];

  const chunks = normalized.match(/[^.!?]+[.!?]+/g) ?? [normalized];
  return chunks
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 40 && sentence.length <= 220);
}

function getSentenceWords(sentence: string) {
  const words = sentence.match(/[A-Za-z][A-Za-z'-]{3,}/g) ?? [];
  const uniqueWords: string[] = [];
  const seen = new Set<string>();
  for (const word of words) {
    const normalized = word.toLowerCase();
    if (STOP_WORDS.has(normalized)) continue;
    if (normalized.length < 4 || normalized.length > 16) continue;
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    uniqueWords.push(word);
  }
  return uniqueWords;
}

function collectCorpusWords(sentences: string[]) {
  const seen = new Set<string>();
  const words: string[] = [];
  for (const sentence of sentences) {
    for (const word of getSentenceWords(sentence)) {
      const normalized = word.toLowerCase();
      if (seen.has(normalized)) continue;
      seen.add(normalized);
      words.push(word);
    }
  }
  return words;
}

function pickTargetWord(sentence: string, seed: string) {
  const sentenceWords = getSentenceWords(sentence);
  if (sentenceWords.length === 0) return null;

  const sorted = sortDeterministically(sentenceWords, `${seed}:target`);
  return sorted[0] ?? null;
}

function maskWordInSentence(sentence: string, targetWord: string) {
  const regex = new RegExp(`\\b${escapeRegExp(targetWord)}\\b`, "i");
  if (!regex.test(sentence)) return null;
  return sentence.replace(regex, "_____");
}

function pickDistractors(
  corpusWords: string[],
  correctWord: string,
  input: { chapterNumber: number; questionIndex: number; seed: string },
) {
  const normalizedCorrect = correctWord.toLowerCase();
  const candidates = corpusWords.filter((word) => {
    const normalized = word.toLowerCase();
    if (normalized === normalizedCorrect) return false;
    return Math.abs(word.length - correctWord.length) <= 5;
  });

  const seed = `${input.seed}:${input.chapterNumber}:${input.questionIndex}:distractors`;
  const sorted = sortDeterministically(candidates, seed);
  const selected = sorted.slice(0, 3);
  return dedupeCaseInsensitive(selected);
}

function dedupeCaseInsensitive(values: string[]) {
  const seen = new Set<string>();
  const deduped: string[] = [];
  for (const value of values) {
    const normalized = value.toLowerCase();
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    deduped.push(value);
  }
  return deduped;
}

function buildOptions(correctAnswer: string, distractors: string[], seed: string) {
  const fillers = [
    "context",
    "evidence",
    "reflection",
    "summary",
    "chapter",
  ];

  const optionTexts = dedupeCaseInsensitive([correctAnswer, ...distractors]);
  for (const filler of fillers) {
    if (optionTexts.length >= 4) break;
    if (filler.toLowerCase() === correctAnswer.toLowerCase()) continue;
    optionTexts.push(filler);
  }

  const ordered = sortDeterministically(optionTexts.slice(0, 4), `${seed}:options`);
  const options = ordered.map((text, index) => ({
    id: String.fromCharCode(97 + index),
    text,
  }));

  let correctOptionId = options.find((option) => option.text.toLowerCase() === correctAnswer.toLowerCase())?.id;
  if (!correctOptionId) {
    const first = options[0];
    if (first) {
      first.text = correctAnswer;
      correctOptionId = first.id;
    } else {
      correctOptionId = "a";
    }
  }

  return {
    options,
    correctOptionId,
  };
}

function buildFallbackQuestion(input: {
  questionIndex: number;
  chapterNumber: number;
  chapterTitle: string;
  skillId: string;
}): Omit<AudiobookCheckpointQuestion, "id"> {
  if (input.questionIndex === 0) {
    return {
      prompt: "Which chapter checkpoint are you completing?",
      maskedSentence: "",
      sourceSentence: "",
      options: [
        { id: "a", text: String(Math.max(1, input.chapterNumber - 1)) },
        { id: "b", text: String(input.chapterNumber) },
        { id: "c", text: String(input.chapterNumber + 1) },
        { id: "d", text: String(input.chapterNumber + 2) },
      ],
      correctOptionId: "b",
      correctAnswer: String(input.chapterNumber),
      skillId: input.skillId,
    };
  }

  if (input.questionIndex === 1) {
    const chapterTitle = input.chapterTitle.trim() || `Chapter ${input.chapterNumber}`;
    return {
      prompt: "Which title matches the chapter you just heard?",
      maskedSentence: "",
      sourceSentence: "",
      options: [
        { id: "a", text: chapterTitle },
        { id: "b", text: "Introduction and Prologue" },
        { id: "c", text: "Appendix Notes" },
        { id: "d", text: "Author Biography" },
      ],
      correctOptionId: "a",
      correctAnswer: chapterTitle,
      skillId: input.skillId,
    };
  }

  return {
    prompt: "What is the best next step if part of the chapter was unclear?",
    maskedSentence: "",
    sourceSentence: "",
    options: [
      { id: "a", text: "Replay the key passage and review the chapter text." },
      { id: "b", text: "Skip ahead and avoid difficult sections." },
      { id: "c", text: "Guess details without checking context." },
      { id: "d", text: "Close the chapter and continue later without notes." },
    ],
    correctOptionId: "a",
    correctAnswer: "Replay the key passage and review the chapter text.",
    skillId: input.skillId,
  };
}

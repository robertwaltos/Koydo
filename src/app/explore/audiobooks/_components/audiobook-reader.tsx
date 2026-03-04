"use client";

/**
 * AudiobookReader — Full reader UI for a single book.
 *
 * Fetches chapter text from server-side cached ingestion
 * (`/api/audiobooks/chapter-text`), shows text for reading-along,
 * and controls the AudiobookPlayer.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { trackLearningEvent } from "@/lib/analytics/xapi-lite";
import {
  AUDIOBOOK_LANGUAGES,
  type AudiobookEntry,
  type AudiobookLanguage,
} from "@/lib/audiobooks/types";
import {
  buildAudiobookCheckpointLessonId,
  buildAudiobookCheckpointQuestions,
  buildAudiobookCheckpointStorageKey,
  buildAudiobookResumeStorageKey,
  gradeAudiobookCheckpointQuiz,
  shouldRenderAudiobookCheckpointQuiz,
  type AudiobookCheckpointQuestion,
} from "@/lib/audiobooks/checkpoint-quiz";
import { AudiobookPlayer } from "./audiobook-player";
import VoicePicker from "@/app/explore/_components/voice-picker";

const CHECKPOINT_INTERVAL_CHAPTERS = 2;

type StoredResumeState = {
  chapterNumber: number;
  language: AudiobookLanguage;
  playbackSeconds: number;
  updatedAt: string;
};

type StoredCheckpointState = Record<string, { scorePercentage: number; completedAt: string }>;

interface AudiobookReaderProps {
  book: AudiobookEntry;
}

function isAudiobookLanguage(value: string): value is AudiobookLanguage {
  return AUDIOBOOK_LANGUAGES.includes(value as AudiobookLanguage);
}

function clampPlaybackSeconds(value: unknown) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(24 * 60 * 60, value));
}

async function postJson(path: string, body: Record<string, unknown>) {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`${path} failed with status ${response.status}`);
  }
}

export function AudiobookReader({ book }: AudiobookReaderProps) {
  const [chapterNumber, setChapterNumber] = useState(1);
  const [language, setLanguage] = useState<AudiobookLanguage>("en");
  const [playbackSeconds, setPlaybackSeconds] = useState(0);
  const [chapterText, setChapterText] = useState<string>("");
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [textLoading, setTextLoading] = useState(true);
  const [textError, setTextError] = useState<string | null>(null);

  const [checkpointStateByLessonId, setCheckpointStateByLessonId] = useState<StoredCheckpointState>({});
  const [checkpointQuestions, setCheckpointQuestions] = useState<AudiobookCheckpointQuestion[]>([]);
  const [checkpointAnswers, setCheckpointAnswers] = useState<Record<string, string>>({});
  const [checkpointSubmitting, setCheckpointSubmitting] = useState(false);
  const [checkpointError, setCheckpointError] = useState<string | null>(null);
  const [checkpointResult, setCheckpointResult] = useState<{
    totalQuestions: number;
    correctCount: number;
    scorePercentage: number;
  } | null>(null);

  const resumeStorageKey = useMemo(() => buildAudiobookResumeStorageKey(book.slug), [book.slug]);
  const checkpointStorageKey = useMemo(
    () => buildAudiobookCheckpointStorageKey(book.slug),
    [book.slug],
  );
  const checkpointLessonId = useMemo(
    () => buildAudiobookCheckpointLessonId(book.slug, chapterNumber),
    [book.slug, chapterNumber],
  );
  const checkpointModuleId = useMemo(() => `audiobook-${book.slug}`, [book.slug]);

  const isCheckpointChapter = shouldRenderAudiobookCheckpointQuiz(
    chapterNumber,
    CHECKPOINT_INTERVAL_CHAPTERS,
  );
  const existingCheckpointState = checkpointStateByLessonId[checkpointLessonId] ?? null;
  const showCheckpointQuiz =
    isCheckpointChapter
    && !existingCheckpointState
    && !textLoading
    && !textError
    && checkpointQuestions.length > 0;

  /* ── Resume storage hydration ─────────────────────────────────── */

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(resumeStorageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<StoredResumeState>;
        if (
          typeof parsed.chapterNumber === "number"
          && Number.isFinite(parsed.chapterNumber)
          && parsed.chapterNumber >= 1
          && parsed.chapterNumber <= book.chapterCount
        ) {
          setChapterNumber(Math.trunc(parsed.chapterNumber));
        }
        if (typeof parsed.language === "string" && isAudiobookLanguage(parsed.language)) {
          setLanguage(parsed.language);
        }
        setPlaybackSeconds(clampPlaybackSeconds(parsed.playbackSeconds));
      }
    } catch {
      // Resume hydration is best effort.
    }

    try {
      const rawCheckpointState = window.localStorage.getItem(checkpointStorageKey);
      if (rawCheckpointState) {
        const parsed = JSON.parse(rawCheckpointState) as unknown;
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          setCheckpointStateByLessonId(parsed as StoredCheckpointState);
        }
      }
    } catch {
      // Checkpoint hydration is best effort.
    }
  }, [book.chapterCount, checkpointStorageKey, resumeStorageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const payload: StoredResumeState = {
      chapterNumber,
      language,
      playbackSeconds: Math.round(playbackSeconds),
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(resumeStorageKey, JSON.stringify(payload));
  }, [chapterNumber, language, playbackSeconds, resumeStorageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(checkpointStorageKey, JSON.stringify(checkpointStateByLessonId));
  }, [checkpointStateByLessonId, checkpointStorageKey]);

  /* ── Fetch chapter text from Supabase-backed API ───────────────── */

  const fetchChapterText = useCallback(async () => {
    setTextLoading(true);
    setTextError(null);
    setChapterText("");
    setChapterTitle("");
    setParagraphs([]);
    setCheckpointQuestions([]);
    setCheckpointAnswers({});
    setCheckpointError(null);
    setCheckpointResult(null);

    try {
      const query = new URLSearchParams({
        bookSlug: book.slug,
        chapterNumber: String(chapterNumber),
        language,
      });

      const response = await fetch(`/api/audiobooks/chapter-text?${query.toString()}`, {
        method: "GET",
      });

      if (response.status === 404) {
        setTextError(
          `Chapter ${chapterNumber} has not been pre-loaded yet. It will be available soon.`,
        );
        return;
      }

      if (!response.ok) {
        setTextError("Could not load chapter text. Try again later.");
        return;
      }

      const payload = (await response.json()) as {
        chapterText?: string;
        chapterTitle?: string;
        paragraphs?: string[];
        languageServed?: string;
      };

      const nextParagraphs =
        Array.isArray(payload.paragraphs) && payload.paragraphs.length > 0
          ? payload.paragraphs
          : typeof payload.chapterText === "string"
            ? payload.chapterText.trim().split("\n\n").filter(Boolean)
            : [];

      if (nextParagraphs.length === 0) {
        setTextError(`Chapter ${chapterNumber} text is unavailable.`);
        return;
      }

      const nextChapterTitle = payload.chapterTitle ?? `Chapter ${chapterNumber}`;
      const nextChapterText = nextParagraphs.join("\n\n");

      setParagraphs(nextParagraphs);
      setChapterText(nextChapterText);
      setChapterTitle(nextChapterTitle);

      if (
        shouldRenderAudiobookCheckpointQuiz(chapterNumber, CHECKPOINT_INTERVAL_CHAPTERS)
        && !checkpointStateByLessonId[checkpointLessonId]
      ) {
        const generatedQuestions = buildAudiobookCheckpointQuestions({
          bookSlug: book.slug,
          chapterNumber,
          chapterTitle: nextChapterTitle,
          chapterText: nextChapterText,
          questionCount: 3,
        });
        setCheckpointQuestions(generatedQuestions);
      }
    } catch {
      setTextError("Failed to load chapter text.");
    } finally {
      setTextLoading(false);
    }
  }, [
    book.slug,
    chapterNumber,
    language,
    checkpointLessonId,
    checkpointStateByLessonId,
  ]);

  useEffect(() => {
    fetchChapterText();
  }, [fetchChapterText]);

  /* ── Playback progress persistence ─────────────────────────────── */

  const handlePlaybackProgress = useCallback(
    (input: { currentTimeSeconds: number; durationSeconds: number; progress: number }) => {
      if (input.progress >= 0.995) {
        setPlaybackSeconds(0);
        return;
      }
      setPlaybackSeconds(Math.max(0, input.currentTimeSeconds));
    },
    [],
  );

  const handleChapterChange = useCallback((nextChapter: number) => {
    setChapterNumber(nextChapter);
    setPlaybackSeconds(0);
  }, []);

  const handleLanguageChange = useCallback((nextLanguage: AudiobookLanguage) => {
    setLanguage(nextLanguage);
    setPlaybackSeconds(0);
  }, []);

  /* ── Checkpoint quiz pipeline wiring ───────────────────────────── */

  const handleCheckpointAnswer = useCallback((questionId: string, optionId: string) => {
    setCheckpointAnswers((previous) => ({
      ...previous,
      [questionId]: optionId,
    }));
    setCheckpointError(null);
  }, []);

  const checkpointChapterTitle = chapterTitle || `Chapter ${chapterNumber}`;

  const handleSubmitCheckpointQuiz = useCallback(async () => {
    if (checkpointSubmitting || checkpointQuestions.length === 0) {
      return;
    }

    const unanswered = checkpointQuestions.find((question) => !checkpointAnswers[question.id]);
    if (unanswered) {
      setCheckpointError("Answer all checkpoint questions before submitting.");
      return;
    }

    setCheckpointSubmitting(true);
    setCheckpointError(null);

    try {
      const gradingResult = gradeAudiobookCheckpointQuiz({
        questions: checkpointQuestions,
        answersByQuestionId: checkpointAnswers,
      });

      const roundedScore = Number(gradingResult.scorePercentage.toFixed(3));
      setCheckpointResult({
        totalQuestions: gradingResult.totalQuestions,
        correctCount: gradingResult.correctCount,
        scorePercentage: roundedScore,
      });

      const checkpointEvents = checkpointQuestions.map(async (question) => {
        const selectedOptionId = checkpointAnswers[question.id];
        const isCorrect = selectedOptionId === question.correctOptionId;

        await Promise.allSettled([
          postJson("/api/answers", {
            skillId: question.skillId,
            isCorrect,
          }),
          trackLearningEvent({
            eventType: "quiz_answered",
            moduleId: checkpointModuleId,
            lessonId: checkpointLessonId,
            payload: {
              action: "audiobook_checkpoint_question",
              chapterNumber,
              language,
              questionId: question.id,
              selectedOptionId,
              correctOptionId: question.correctOptionId,
              isCorrect,
            },
          }),
        ]);

        if (!isCorrect) {
          await postJson("/api/exam/error-log", {
            moduleId: checkpointModuleId,
            lessonId: checkpointLessonId,
            questionId: `${question.id}:${chapterNumber}`,
            skillId: question.skillId,
            errorType: "incorrect_answer",
            selectedOptionId,
            correctOptionId: question.correctOptionId,
            questionText: question.maskedSentence || question.prompt,
            notes: "audiobook_checkpoint_quiz",
            metadata: {
              checkpoint: true,
              chapterNumber,
              chapterTitle: checkpointChapterTitle,
              language,
            },
          });
        }
      });

      await Promise.allSettled(checkpointEvents);

      await Promise.allSettled([
        postJson("/api/progress", {
          lessonId: checkpointLessonId,
          scorePercentage: roundedScore,
        }),
        trackLearningEvent({
          eventType: "lesson_completed",
          moduleId: checkpointModuleId,
          lessonId: checkpointLessonId,
          payload: {
            action: "audiobook_checkpoint_quiz_completed",
            chapterNumber,
            chapterTitle: checkpointChapterTitle,
            language,
            totalQuestions: gradingResult.totalQuestions,
            correctAnswers: gradingResult.correctCount,
            scorePercentage: roundedScore,
          },
        }),
      ]);

      setCheckpointStateByLessonId((previous) => ({
        ...previous,
        [checkpointLessonId]: {
          scorePercentage: roundedScore,
          completedAt: new Date().toISOString(),
        },
      }));
    } catch {
      setCheckpointError("Unable to submit checkpoint quiz right now. Please retry.");
    } finally {
      setCheckpointSubmitting(false);
    }
  }, [
    checkpointAnswers,
    checkpointLessonId,
    checkpointModuleId,
    checkpointQuestions,
    checkpointSubmitting,
    checkpointChapterTitle,
    chapterNumber,
    language,
  ]);

  /* ── Render ─────────────────────────────────────────────────────── */

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <Link
        href="/explore/audiobooks"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-sky-600 hover:underline dark:text-sky-400"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to Library
      </Link>

      <header className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-foreground/90 sm:text-3xl">
          {book.title}
        </h1>
        <p className="mt-1 text-neutral-500 dark:text-foreground/60">
          by {book.author}
          {book.yearPublished && ` (${book.yearPublished})`}
        </p>
      </header>

      <div className="mb-6">
        <VoicePicker />
      </div>

      <div className="mb-6 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-border dark:bg-surface sm:p-6">
        <AudiobookPlayer
          bookSlug={book.slug}
          chapterNumber={chapterNumber}
          chapterText={chapterText}
          language={language}
          totalChapters={book.chapterCount}
          resumeAtSeconds={playbackSeconds}
          onChapterChange={handleChapterChange}
          onLanguageChange={handleLanguageChange}
          onPlaybackProgress={handlePlaybackProgress}
        />
      </div>

      <section className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-border dark:bg-surface sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-foreground/80">
          {chapterTitle || `Chapter ${chapterNumber}`}
        </h2>

        {textLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
            <span className="ml-3 text-sm text-neutral-500">Loading chapter text...</span>
          </div>
        )}

        {textError && (
          <div className="py-12 text-center">
            <p className="mb-3 text-sm text-red-600 dark:text-red-400">{textError}</p>
            <button
              type="button"
              onClick={fetchChapterText}
              className="ui-focus-ring rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-sky-600 active:scale-95"
            >
              Retry
            </button>
          </div>
        )}

        {!textLoading && !textError && paragraphs.length > 0 && (
          <div className="prose prose-neutral max-w-none leading-relaxed dark:prose-invert prose-sm sm:prose-base">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </section>

      {showCheckpointQuiz && (
        <section className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40 sm:p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-sky-100">
              Checkpoint Quiz
            </h3>
            <p className="mt-1 text-sm text-sky-800/90 dark:text-sky-200/90">
              Chapter {chapterNumber} checkpoint (every {CHECKPOINT_INTERVAL_CHAPTERS} chapters).
            </p>
          </div>

          <div className="space-y-5">
            {checkpointQuestions.map((question, questionIndex) => (
              <article
                key={question.id}
                className="rounded-xl border border-sky-200 bg-white p-4 dark:border-sky-900 dark:bg-surface"
              >
                <p className="mb-2 text-sm font-semibold text-neutral-900 dark:text-foreground/90">
                  {questionIndex + 1}. {question.prompt}
                </p>
                {question.maskedSentence ? (
                  <p className="mb-3 text-sm text-neutral-600 dark:text-foreground/70">
                    {question.maskedSentence}
                  </p>
                ) : null}
                <div className="grid gap-2 sm:grid-cols-2">
                  {question.options.map((option) => {
                    const selected = checkpointAnswers[question.id] === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleCheckpointAnswer(question.id, option.id)}
                        className={`ui-focus-ring rounded-lg border px-3 py-2 text-left text-sm transition ${
                          selected
                            ? "border-sky-500 bg-sky-100 text-sky-900 dark:border-sky-400 dark:bg-sky-900/50 dark:text-sky-100"
                            : "border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 dark:border-border dark:bg-surface dark:text-foreground/80 dark:hover:bg-surface-muted"
                        }`}
                      >
                        {option.text}
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>

          {checkpointError ? (
            <p className="mt-4 text-sm text-red-700 dark:text-red-300" role="alert">
              {checkpointError}
            </p>
          ) : null}

          {checkpointResult ? (
            <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              Score: {checkpointResult.correctCount}/{checkpointResult.totalQuestions} (
              {Math.round(checkpointResult.scorePercentage * 100)}%)
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleSubmitCheckpointQuiz}
              disabled={checkpointSubmitting}
              className="ui-focus-ring rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {checkpointSubmitting ? "Submitting..." : "Submit Checkpoint Quiz"}
            </button>
          </div>
        </section>
      )}

      {existingCheckpointState ? (
        <section className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
            Checkpoint complete for Chapter {chapterNumber}:{" "}
            {Math.round(existingCheckpointState.scorePercentage * 100)}%.
          </p>
        </section>
      ) : null}
    </div>
  );
}

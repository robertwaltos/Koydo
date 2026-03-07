"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CdlButton from "./CdlButton";
import {
  CDL_QUESTION_BANK,
  CDL_SECTION_META,
  type CdlQuestion,
  type CdlTestSection,
} from "../questions/question-bank";

// ── Types ─────────────────────────────────────────────────────────────────────

type TestMode = "study" | "exam";

type AnswerRecord = {
  questionIndex: number;
  selectedIndex: number | null;
  correct: boolean;
  timeSpent: number; // seconds
};

type TestConfig = {
  title: string;
  questions: CdlQuestion[];
  timeLimitMinutes: number;
  passingScore: number; // percentage
  mode: TestMode;
};

type CdlTestSimulatorProps = {
  config: TestConfig;
  onExit: () => void;
  onComplete?: (score: number, passed: boolean, answers: AnswerRecord[]) => void;
};

// ── Question bank is imported from ../data/question-bank ──────────────────────
// 250+ questions across 8 sections: General Knowledge, Air Brakes,
// Combination Vehicles, Hazmat, Tanker, Doubles/Triples, Passenger, School Bus

/** Get questions for a specific section, or all General Knowledge if none specified */
function getQuestionsForSection(section?: CdlTestSection): CdlQuestion[] {
  if (section && CDL_QUESTION_BANK[section]) {
    return CDL_QUESTION_BANK[section];
  }
  return CDL_QUESTION_BANK["General Knowledge"];
}

/** Get section metadata (pass score, time limit, question count) */
function getSectionMeta(section: CdlTestSection) {
  return CDL_SECTION_META[section];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// ── Components ────────────────────────────────────────────────────────────────

function ModeSelector({ mode, onSelect }: { mode: TestMode; onSelect: (m: TestMode) => void }) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => onSelect("study")}
        className={[
          "flex-1 rounded-xl border p-4 text-left transition-all",
          mode === "study"
            ? "border-[#38a169] bg-[#38a169]/5 ring-2 ring-[#38a169]/20"
            : "border-[#e2e8f0] hover:border-[#38a169]/30",
        ].join(" ")}
      >
        <h3 className="text-sm font-bold text-[#1a202c] dark:text-[#e2e8f0]">Study Mode</h3>
        <p className="mt-1 text-xs text-[#4a5568] dark:text-[#a0aec0]">
          Immediate feedback after each question with detailed explanations.
        </p>
      </button>
      <button
        type="button"
        onClick={() => onSelect("exam")}
        className={[
          "flex-1 rounded-xl border p-4 text-left transition-all",
          mode === "exam"
            ? "border-[#1e3a5f] bg-[#1e3a5f]/5 ring-2 ring-[#1e3a5f]/20"
            : "border-[#e2e8f0] hover:border-[#1e3a5f]/30",
        ].join(" ")}
      >
        <h3 className="text-sm font-bold text-[#1a202c] dark:text-[#e2e8f0]">Exam Mode</h3>
        <p className="mt-1 text-xs text-[#4a5568] dark:text-[#a0aec0]">
          Timed test. No feedback until the end — just like the real CDL exam.
        </p>
      </button>
    </div>
  );
}

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedIndex,
  onSelect,
  showResult,
  mode,
}: {
  question: CdlQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  showResult: boolean;
  mode: TestMode;
}) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-5"
    >
      {/* Question header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#4a5568] dark:text-[#a0aec0]">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className="rounded-md bg-[#edf2f7] px-2 py-0.5 text-xs font-semibold text-[#4a5568] dark:bg-[#243447] dark:text-[#a0aec0]">
          {question.section}
        </span>
      </div>

      {/* Question text */}
      <h2 className="text-lg font-bold leading-relaxed text-[#1a202c] dark:text-[#e2e8f0]">
        {question.question}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-2.5">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = index === question.correctIndex;
          const showCorrectness = showResult && mode === "study";

          let borderColor = "border-[#e2e8f0] dark:border-[#2d3f55]";
          let bgColor = "bg-white dark:bg-[#1a2738]";

          if (showCorrectness && isCorrect) {
            borderColor = "border-[#38a169]";
            bgColor = "bg-[#38a169]/5";
          } else if (showCorrectness && isSelected && !isCorrect) {
            borderColor = "border-[#e53e3e]";
            bgColor = "bg-[#e53e3e]/5";
          } else if (isSelected && !showCorrectness) {
            borderColor = "border-[#1e3a5f] dark:border-[#63b3ed]";
            bgColor = "bg-[#1e3a5f]/5 dark:bg-[#63b3ed]/5";
          }

          return (
            <button
              key={`${question.id}-opt-${index}`}
              type="button"
              onClick={() => {
                if (!showResult) onSelect(index);
              }}
              disabled={showResult}
              className={[
                "flex items-start gap-3 rounded-xl border p-4 text-left transition-all",
                borderColor,
                bgColor,
                !showResult ? "hover:border-[#1e3a5f]/40 dark:hover:border-[#63b3ed]/40" : "",
                showResult ? "cursor-default" : "cursor-pointer",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  isSelected
                    ? "bg-[#1e3a5f] text-white dark:bg-[#63b3ed] dark:text-[#0f1923]"
                    : "bg-[#edf2f7] text-[#4a5568] dark:bg-[#243447] dark:text-[#a0aec0]",
                ].join(" ")}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="pt-0.5 text-sm text-[#1a202c] dark:text-[#e2e8f0]">{option}</span>
              {showCorrectness && isCorrect ? (
                <svg className="ml-auto shrink-0 text-[#38a169]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : null}
              {showCorrectness && isSelected && !isCorrect ? (
                <svg className="ml-auto shrink-0 text-[#e53e3e]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Explanation (study mode only) */}
      {showResult && mode === "study" ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="rounded-xl border border-[#4299e1]/20 bg-[#4299e1]/5 p-4 dark:border-[#63b3ed]/20"
        >
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1e3a5f] dark:text-[#63b3ed]">Explanation</h4>
          <p className="mt-2 text-sm leading-relaxed text-[#4a5568] dark:text-[#a0aec0]">
            {question.explanation}
          </p>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

function ResultsScreen({
  answers,
  questions,
  passingScore,
  onReview,
  onRetry,
  onExit,
}: {
  answers: AnswerRecord[];
  questions: CdlQuestion[];
  passingScore: number;
  onReview: () => void;
  onRetry: () => void;
  onExit: () => void;
}) {
  const correct = answers.filter((a) => a.correct).length;
  const total = questions.length;
  const score = Math.round((correct / total) * 100);
  const passed = score >= passingScore;
  const totalTime = answers.reduce((sum, a) => sum + a.timeSpent, 0);

  // Section breakdown
  const sections = new Map<string, { correct: number; total: number }>();
  for (let i = 0; i < answers.length; i++) {
    const section = questions[i].section;
    const entry = sections.get(section) ?? { correct: 0, total: 0 };
    entry.total++;
    if (answers[i].correct) entry.correct++;
    sections.set(section, entry);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6"
    >
      {/* Score */}
      <div className={[
        "flex flex-col items-center gap-2 rounded-2xl border-2 p-8",
        passed
          ? "border-[#38a169] bg-[#38a169]/5"
          : "border-[#e53e3e] bg-[#e53e3e]/5",
      ].join(" ")}>
        <span className={[
          "text-5xl font-black",
          passed ? "text-[#38a169]" : "text-[#e53e3e]",
        ].join(" ")}>
          {score}%
        </span>
        <span className="text-sm font-bold text-[#4a5568] dark:text-[#a0aec0]">
          {correct}/{total} correct
        </span>
        <span className={[
          "mt-1 rounded-full px-4 py-1 text-sm font-bold text-white",
          passed ? "bg-[#38a169]" : "bg-[#e53e3e]",
        ].join(" ")}>
          {passed ? "PASSED" : "NOT YET — Keep Studying"}
        </span>
        <span className="mt-1 text-xs text-[#4a5568] dark:text-[#a0aec0]">
          Time: {formatTime(totalTime)} | Passing: {passingScore}%
        </span>
      </div>

      {/* Section breakdown */}
      <div className="w-full max-w-md">
        <h3 className="mb-3 text-sm font-bold text-[#1a202c] dark:text-[#e2e8f0]">Section Breakdown</h3>
        <div className="flex flex-col gap-2">
          {Array.from(sections.entries()).map(([section, data]) => {
            const sectionPct = Math.round((data.correct / data.total) * 100);
            return (
              <div key={section} className="flex items-center justify-between rounded-lg bg-[#edf2f7] px-3 py-2 dark:bg-[#1a2738]">
                <span className="text-xs font-semibold text-[#4a5568] dark:text-[#a0aec0]">{section}</span>
                <span className={[
                  "text-xs font-bold",
                  sectionPct >= 80 ? "text-[#38a169]" : "text-[#e53e3e]",
                ].join(" ")}>
                  {data.correct}/{data.total} ({sectionPct}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <CdlButton tone="outline" size="sm" onClick={onReview}>Review Answers</CdlButton>
        <CdlButton tone="primary" size="sm" onClick={onRetry}>Try Again</CdlButton>
        <CdlButton tone="caution" size="sm" onClick={onExit}>Exit</CdlButton>
      </div>
    </motion.div>
  );
}

// ── Main Simulator ────────────────────────────────────────────────────────────

export default function CdlTestSimulator({ config, onExit, onComplete }: CdlTestSimulatorProps) {
  const [testMode, setTestMode] = useState<TestMode>(config.mode);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [finished, setFinished] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [timeRemaining, setTimeRemaining] = useState(config.timeLimitMinutes * 60);

  const questions = useMemo(() => {
    return config.questions.length > 0 ? shuffleArray(config.questions) : shuffleArray(getQuestionsForSection());
  }, [config.questions]);

  const currentQuestion = questions[currentIndex];

  const recordAnswer = useCallback(() => {
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
    const correct = selectedIndex === currentQuestion.correctIndex;
    const record: AnswerRecord = {
      questionIndex: currentIndex,
      selectedIndex,
      correct,
      timeSpent,
    };
    setAnswers((prev) => [...prev, record]);
    return record;
  }, [currentIndex, currentQuestion, questionStartTime, selectedIndex]);

  const handleSelect = useCallback((index: number) => {
    setSelectedIndex(index);

    if (testMode === "study") {
      setShowResult(true);
    }
  }, [testMode]);

  const handleNext = useCallback(() => {
    if (testMode === "exam" && selectedIndex !== null) {
      recordAnswer();
    }

    if (currentIndex >= questions.length - 1) {
      // Last question
      if (testMode === "study" && !showResult && selectedIndex !== null) {
        setShowResult(true);
        return;
      }
      setFinished(true);
      const finalAnswers = [...answers];
      if (testMode === "study" && selectedIndex !== null) {
        const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
        finalAnswers.push({
          questionIndex: currentIndex,
          selectedIndex,
          correct: selectedIndex === currentQuestion.correctIndex,
          timeSpent,
        });
      }
      const correct = finalAnswers.filter((a) => a.correct).length;
      const score = Math.round((correct / questions.length) * 100);
      onComplete?.(score, score >= config.passingScore, finalAnswers);
      return;
    }

    // Move to next question
    if (testMode === "study" && showResult) {
      recordAnswer();
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedIndex(null);
    setShowResult(false);
    setQuestionStartTime(Date.now());
  }, [answers, config.passingScore, currentIndex, currentQuestion, onComplete, questionStartTime, questions, recordAnswer, selectedIndex, showResult, testMode]);

  const handleStart = useCallback(() => {
    setStarted(true);
    setQuestionStartTime(Date.now());
    setTimeRemaining(config.timeLimitMinutes * 60);
  }, [config.timeLimitMinutes]);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setShowResult(false);
    setAnswers([]);
    setFinished(false);
    setReviewing(false);
    setStarted(false);
  }, []);

  // ── Render ──────────────────────────────────────────────────────────────────

  // Pre-test screen
  if (!started) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-6 p-6">
        <button
          type="button"
          onClick={onExit}
          className="self-start text-sm font-semibold text-[#4a5568] hover:text-[#1a202c] dark:text-[#a0aec0]"
        >
          &larr; Back to Dashboard
        </button>

        <div>
          <h1 className="text-2xl font-bold text-[#1a202c] dark:text-[#e2e8f0]">{config.title}</h1>
          <p className="mt-2 text-sm text-[#4a5568] dark:text-[#a0aec0]">
            {questions.length} questions &middot; {config.timeLimitMinutes} min &middot; {config.passingScore}% to pass
          </p>
        </div>

        <ModeSelector mode={testMode} onSelect={setTestMode} />

        <div className="rounded-xl border border-[#e2e8f0] bg-[#edf2f7] p-4 dark:border-[#2d3f55] dark:bg-[#1a2738]">
          <p className="text-xs leading-relaxed text-[#4a5568] dark:text-[#a0aec0]">
            {testMode === "study"
              ? "Study Mode: You will see the correct answer and a detailed explanation after each question. Great for learning new material."
              : "Exam Mode: No feedback until the end. Questions are timed. Results show after you submit the final question. Simulates the real CDL test at the DMV."}
          </p>
        </div>

        <CdlButton tone="primary" size="lg" className="w-full" onClick={handleStart}>
          Start {testMode === "study" ? "Study Session" : "Practice Exam"}
        </CdlButton>
      </div>
    );
  }

  // Results screen
  if (finished && !reviewing) {
    return (
      <div className="mx-auto max-w-2xl p-6">
        <ResultsScreen
          answers={answers}
          questions={questions}
          passingScore={config.passingScore}
          onReview={() => {
            setReviewing(true);
            setCurrentIndex(0);
          }}
          onRetry={handleRetry}
          onExit={onExit}
        />
      </div>
    );
  }

  // Review mode (after exam, step through with explanations)
  if (reviewing) {
    const reviewQuestion = questions[currentIndex];
    const reviewAnswer = answers[currentIndex];

    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-5 p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[#4a5568]">
            Reviewing {currentIndex + 1} of {questions.length}
          </span>
          <CdlButton tone="outline" size="sm" onClick={() => { setReviewing(false); setFinished(true); }}>
            Back to Results
          </CdlButton>
        </div>

        <h2 className="text-lg font-bold text-[#1a202c] dark:text-[#e2e8f0]">{reviewQuestion.question}</h2>

        <div className="flex flex-col gap-2">
          {reviewQuestion.options.map((opt, idx) => {
            const wasSelected = reviewAnswer?.selectedIndex === idx;
            const isCorrect = idx === reviewQuestion.correctIndex;
            let style = "border-[#e2e8f0] bg-white dark:border-[#2d3f55] dark:bg-[#1a2738]";
            if (isCorrect) style = "border-[#38a169] bg-[#38a169]/5";
            else if (wasSelected) style = "border-[#e53e3e] bg-[#e53e3e]/5";

            return (
              <div key={`review-${reviewQuestion.id}-${idx}`} className={`flex items-center gap-3 rounded-xl border p-3 ${style}`}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf2f7] text-xs font-bold text-[#4a5568] dark:bg-[#243447] dark:text-[#a0aec0]">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm text-[#1a202c] dark:text-[#e2e8f0]">{opt}</span>
                {isCorrect ? <span className="ml-auto text-xs font-bold text-[#38a169]">Correct</span> : null}
                {wasSelected && !isCorrect ? <span className="ml-auto text-xs font-bold text-[#e53e3e]">Your answer</span> : null}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-[#4299e1]/20 bg-[#4299e1]/5 p-4">
          <p className="text-sm leading-relaxed text-[#4a5568] dark:text-[#a0aec0]">{reviewQuestion.explanation}</p>
        </div>

        <div className="flex justify-between">
          <CdlButton
            tone="outline"
            size="sm"
            onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))}
            disabled={currentIndex === 0}
          >
            Previous
          </CdlButton>
          <CdlButton
            tone="primary"
            size="sm"
            onClick={() => {
              if (currentIndex >= questions.length - 1) {
                setReviewing(false);
                setFinished(true);
              } else {
                setCurrentIndex((p) => p + 1);
              }
            }}
          >
            {currentIndex >= questions.length - 1 ? "Back to Results" : "Next"}
          </CdlButton>
        </div>
      </div>
    );
  }

  // Active test
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 p-6">
      {/* Progress bar and timer */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#edf2f7] dark:bg-[#243447]">
            <motion.div
              className="h-full rounded-full bg-[#1e3a5f] dark:bg-[#63b3ed]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        {testMode === "exam" ? (
          <span className="text-sm font-bold tabular-nums text-[#4a5568] dark:text-[#a0aec0]">
            {formatTime(timeRemaining)}
          </span>
        ) : (
          <span className="rounded-md bg-[#38a169]/10 px-2 py-0.5 text-xs font-bold text-[#38a169]">
            Study
          </span>
        )}
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          showResult={showResult}
          mode={testMode}
        />
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between pt-2">
        <CdlButton tone="outline" size="sm" onClick={onExit}>
          Exit Test
        </CdlButton>
        <CdlButton
          tone="primary"
          size="sm"
          onClick={handleNext}
          disabled={selectedIndex === null}
        >
          {currentIndex >= questions.length - 1
            ? testMode === "study" && !showResult ? "Check Answer" : "Finish"
            : testMode === "study" && !showResult ? "Check Answer" : "Next"}
        </CdlButton>
      </div>
    </div>
  );
}

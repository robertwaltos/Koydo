"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProgressChip from "@/app/components/ui/progress-chip";
import SoftCard from "@/app/components/ui/soft-card";
import LanguageExamUnlockOptions from "@/app/components/language-exam-unlock-options";
import { BrowserAudioRecorder } from "@/lib/language-learning";

type LearnerOption = {
  id: string;
  displayName: string;
  gradeLevel: string | null;
};

type LanguageUsageEntitlement = {
  monthKey: string;
  planTier: string;
  planName: string;
  scoredAttemptsLimit: number;
  attemptCap: number;
  unlockAttemptsGranted: number;
  unlockAttemptsUsed: number;
  unlockAttemptsRemaining: number;
  scoredAttemptsUsed: number;
  scoredAttemptsRemaining: number;
  practiceAttemptsUsed: number;
  aiCostUsdThisMonth: number;
  mode: "graded" | "practice_only";
  reason: "eligible" | "plan_no_scored_access" | "quota_exceeded" | "budget_guardrail";
};

type TranslationResult = {
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  providerId: string;
  confidence: number;
  wasFallback: boolean;
};

type PronunciationGrade = {
  providerId: string;
  overallScore: number;
  gradeBand: "A" | "B" | "C" | "D" | "E";
  wasFallback: boolean;
  dimensions: {
    accuracy: number;
    fluency: number;
    completeness: number;
    confidence: number;
  };
  feedback: string[];
};

type PronunciationResponse = {
  grading: PronunciationGrade;
  gradingMode: "graded" | "practice_only";
  gradeRecorded: boolean;
  entitlement: (LanguageUsageEntitlement & { planName?: string }) | null;
  usageTracking: { tracked: boolean; reason?: string };
  persistence: { persisted: boolean; attemptId: string | null; reason?: string };
};

type SpeakingLabClientProps = {
  learners: LearnerOption[];
};

type FetchErrorPayload = {
  error?: string;
  message?: string;
};

const DEFAULT_TARGET_TEXT = "Hello, welcome to Koydo language lab.";
const DEFAULT_TRANSCRIPT_TEXT = "Hello, welcome to Koydo language lab.";

function describeEntitlementReason(reason: LanguageUsageEntitlement["reason"]) {
  switch (reason) {
    case "eligible":
      return "Scored feedback is active for this learner.";
    case "plan_no_scored_access":
      return "Practice-only plan. Upgrade to unlock scoring.";
    case "quota_exceeded":
      return "Monthly scored attempt limit reached. Practice mode remains available.";
    case "budget_guardrail":
      return "Scored mode paused by AI budget guardrail this month.";
    default:
      return "Usage status unavailable.";
  }
}

function formatScore(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "n/a";
  return `${Math.round(value)}%`;
}

function toneForEntitlement(
  entitlement: LanguageUsageEntitlement | null,
): "neutral" | "info" | "success" | "warning" {
  if (!entitlement) return "neutral";
  if (entitlement.mode === "graded") return "success";
  return "warning";
}

async function parseError(response: Response) {
  const payload = (await response.json().catch(() => ({}))) as FetchErrorPayload;
  return payload.message ?? payload.error ?? `Request failed (${response.status})`;
}

export default function SpeakingLabClient({ learners }: SpeakingLabClientProps) {
  const [selectedLearnerId, setSelectedLearnerId] = useState<string>(
    learners.length > 0 ? learners[0].id : "",
  );

  const [usageEntitlement, setUsageEntitlement] = useState<LanguageUsageEntitlement | null>(null);
  const [usageStatus, setUsageStatus] = useState<string>("Usage status has not been loaded yet.");
  const [usageBusy, setUsageBusy] = useState(false);

  const [sourceText, setSourceText] = useState("Hello, can we practice speaking today?");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [translationResult, setTranslationResult] = useState<TranslationResult | null>(null);
  const [translationBusy, setTranslationBusy] = useState(false);
  const [translationStatus, setTranslationStatus] = useState<string>("Ready.");

  const [targetText, setTargetText] = useState(DEFAULT_TARGET_TEXT);
  const [transcriptText, setTranscriptText] = useState(DEFAULT_TRANSCRIPT_TEXT);
  const [asrConfidence, setAsrConfidence] = useState(0.82);
  const [audioDurationMs, setAudioDurationMs] = useState<number | undefined>(undefined);
  const [audioClipUrl, setAudioClipUrl] = useState<string | null>(null);
  const [recordingStatus, setRecordingStatus] = useState<string>("Recorder idle.");
  const [isRecording, setIsRecording] = useState(false);

  const [gradeResult, setGradeResult] = useState<PronunciationResponse | null>(null);
  const [gradeBusy, setGradeBusy] = useState(false);
  const [gradeStatus, setGradeStatus] = useState<string>("Ready to grade.");

  const recorderRef = useRef<BrowserAudioRecorder | null>(null);

  const selectedLearner = useMemo(
    () => learners.find((entry) => entry.id === selectedLearnerId) ?? null,
    [learners, selectedLearnerId],
  );

  const usagePercent = useMemo(() => {
    if (!usageEntitlement || usageEntitlement.scoredAttemptsLimit <= 0) return 0;
    return Math.min(
      100,
      Math.round(
        (usageEntitlement.scoredAttemptsUsed / usageEntitlement.scoredAttemptsLimit) * 100,
      ),
    );
  }, [usageEntitlement]);

  const loadUsage = useCallback(async () => {
    setUsageBusy(true);
    setUsageStatus("Loading usage entitlement...");
    try {
      const query =
        selectedLearnerId.length > 0
          ? `?studentProfileId=${encodeURIComponent(selectedLearnerId)}`
          : "";
      const response = await fetch(`/api/language/usage${query}`, {
        method: "GET",
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(await parseError(response));
      }
      const payload = (await response.json()) as { entitlement?: LanguageUsageEntitlement };
      const entitlement = payload.entitlement ?? null;
      setUsageEntitlement(entitlement);
      setUsageStatus(
        entitlement
          ? `${entitlement.planName}: ${describeEntitlementReason(entitlement.reason)}`
          : "No entitlement data returned.",
      );
    } catch (error) {
      setUsageEntitlement(null);
      setUsageStatus(error instanceof Error ? error.message : "Failed to load usage entitlement.");
    } finally {
      setUsageBusy(false);
    }
  }, [selectedLearnerId]);

  const handleTranslate = useCallback(async () => {
    setTranslationBusy(true);
    setTranslationStatus("Translating...");
    setTranslationResult(null);
    try {
      const response = await fetch("/api/language/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: sourceText,
          sourceLanguage,
          targetLanguage,
          preferredProviderId: "auto",
        }),
      });
      if (!response.ok) {
        throw new Error(await parseError(response));
      }

      const payload = (await response.json()) as { translation?: TranslationResult };
      if (!payload.translation) {
        throw new Error("No translation payload returned.");
      }

      setTranslationResult(payload.translation);
      setTranslationStatus(
        `Translated via ${payload.translation.providerId} (confidence ${Math.round(payload.translation.confidence * 100)}%).`,
      );
    } catch (error) {
      setTranslationStatus(
        error instanceof Error ? error.message : "Translation failed unexpectedly.",
      );
    } finally {
      setTranslationBusy(false);
    }
  }, [sourceLanguage, sourceText, targetLanguage]);

  const ensureRecorder = () => {
    if (!recorderRef.current) {
      recorderRef.current = new BrowserAudioRecorder();
    }
    return recorderRef.current;
  };

  const handleStartRecording = useCallback(async () => {
    setRecordingStatus("Starting microphone capture...");
    try {
      const recorder = ensureRecorder();
      await recorder.start();
      setIsRecording(true);
      setRecordingStatus("Recording in progress...");
    } catch (error) {
      setIsRecording(false);
      setRecordingStatus(
        error instanceof Error ? error.message : "Failed to start recording.",
      );
    }
  }, []);

  const handleStopRecording = useCallback(async () => {
    setRecordingStatus("Stopping recording...");
    try {
      const recorder = ensureRecorder();
      const clip = await recorder.stop();
      setIsRecording(false);

      if (audioClipUrl) {
        URL.revokeObjectURL(audioClipUrl);
      }

      setAudioClipUrl(clip.url);
      setAudioDurationMs(clip.durationMs);
      setRecordingStatus(
        `Recorded ${Math.round(clip.durationMs / 100) / 10}s (${clip.mimeType}).`,
      );
    } catch (error) {
      setIsRecording(false);
      setRecordingStatus(
        error instanceof Error ? error.message : "Failed to stop recording.",
      );
    }
  }, [audioClipUrl]);

  const handleCancelRecording = useCallback(() => {
    const recorder = ensureRecorder();
    recorder.cancel();
    setIsRecording(false);
    setRecordingStatus("Recording canceled.");
  }, []);

  const handleGrade = useCallback(async () => {
    setGradeBusy(true);
    setGradeStatus("Submitting pronunciation attempt...");
    setGradeResult(null);
    try {
      const response = await fetch("/api/language/pronunciation/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetText,
          transcriptText,
          language: sourceLanguage,
          studentProfileId: selectedLearnerId || undefined,
          audioDurationMs,
          asrConfidence,
          preferredProviderId: "auto",
        }),
      });
      if (!response.ok) {
        throw new Error(await parseError(response));
      }
      const payload = (await response.json()) as PronunciationResponse;
      setGradeResult(payload);
      setGradeStatus(
        payload.gradingMode === "graded"
          ? `Scored attempt complete (${formatScore(payload.grading.overallScore)}).`
          : "Practice-only mode triggered by confidence or entitlement safety gate.",
      );

      await loadUsage();
    } catch (error) {
      setGradeStatus(
        error instanceof Error ? error.message : "Pronunciation grading failed unexpectedly.",
      );
    } finally {
      setGradeBusy(false);
    }
  }, [
    asrConfidence,
    audioDurationMs,
    loadUsage,
    selectedLearnerId,
    sourceLanguage,
    targetText,
    transcriptText,
  ]);

  useEffect(() => {
    void loadUsage();
  }, [loadUsage]);

  useEffect(() => {
    return () => {
      if (audioClipUrl) {
        URL.revokeObjectURL(audioClipUrl);
      }
      if (recorderRef.current) {
        recorderRef.current.cancel();
      }
    };
  }, [audioClipUrl]);

  return (
    <div className="grid gap-5">
      <SoftCard as="section" className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Learner Context</h2>
            <p className="text-sm text-zinc-600">
              Select who is practicing and refresh scored entitlement before each session.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void loadUsage()}
            disabled={usageBusy}
            className="ui-focus-ring rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 disabled:opacity-60"
          >
            {usageBusy ? "Loading..." : "Refresh Usage"}
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Active Learner
            <select
              value={selectedLearnerId}
              onChange={(event) => setSelectedLearnerId(event.target.value)}
              className="ui-focus-ring min-h-10 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            >
              {learners.length === 0 ? (
                <option value="">Account-level (no learner profile)</option>
              ) : null}
              {learners.map((learner) => (
                <option key={learner.id} value={learner.id}>
                  {learner.displayName}
                  {learner.gradeLevel ? ` (Grade ${learner.gradeLevel})` : ""}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-end">
            <ProgressChip
              label="Mode"
              value={usageEntitlement?.mode === "graded" ? "Scored" : "Practice"}
              tone={toneForEntitlement(usageEntitlement)}
            />
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-3">
          <p className="text-sm font-semibold text-zinc-900">
            {usageEntitlement ? usageEntitlement.planName : "No usage entitlement loaded"}
          </p>
          <p className="mt-1 text-xs text-zinc-600">{usageStatus}</p>

          {usageEntitlement ? (
            <>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-200">
                <div
                  className="h-full rounded-full bg-cyan-500 transition-all"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-zinc-600">
                Scored attempts: {usageEntitlement.scoredAttemptsUsed}/
                {usageEntitlement.scoredAttemptsLimit} (
                {usageEntitlement.scoredAttemptsRemaining} remaining)
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Base monthly cap: {usageEntitlement.attemptCap} • Unlock pool remaining:{" "}
                {usageEntitlement.unlockAttemptsRemaining}
              </p>
            </>
          ) : null}
        </div>

        <div className="mt-3">
          <LanguageExamUnlockOptions
            studentProfileId={selectedLearnerId || undefined}
            compact
            title="Need more scored attempts right now?"
            description="Unlock one-time exam packs and keep practicing in scored mode."
          />
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold text-zinc-900">Live Translation</h2>
        <p className="text-sm text-zinc-600">
          Translate prompts before speaking attempts to support multilingual practice.
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Source Language
            <input
              value={sourceLanguage}
              onChange={(event) => setSourceLanguage(event.target.value)}
              className="ui-focus-ring min-h-10 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium normal-case text-zinc-800"
              placeholder="en"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Target Language
            <input
              value={targetLanguage}
              onChange={(event) => setTargetLanguage(event.target.value)}
              className="ui-focus-ring min-h-10 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium normal-case text-zinc-800"
              placeholder="es"
            />
          </label>
        </div>

        <label className="mt-3 flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Source Text
          <textarea
            value={sourceText}
            onChange={(event) => setSourceText(event.target.value)}
            rows={4}
            className="ui-focus-ring rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800"
          />
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void handleTranslate()}
            disabled={translationBusy || sourceText.trim().length === 0}
            className="ui-focus-ring rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 hover:bg-cyan-100 disabled:opacity-60"
          >
            {translationBusy ? "Translating..." : "Translate"}
          </button>
          <button
            type="button"
            onClick={() => {
              if (!translationResult) return;
              setTargetText(translationResult.translatedText);
              setTranscriptText(translationResult.translatedText);
            }}
            disabled={!translationResult}
            className="ui-focus-ring rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 disabled:opacity-60"
          >
            Use As Target Phrase
          </button>
        </div>

        <p className="mt-2 text-xs text-zinc-600">{translationStatus}</p>

        {translationResult ? (
          <div className="mt-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Translated Text</p>
            <p className="mt-1 text-sm font-medium text-zinc-900">
              {translationResult.translatedText}
            </p>
            <p className="mt-2 text-xs text-zinc-600">
              Provider: {translationResult.providerId} | confidence{" "}
              {Math.round(translationResult.confidence * 100)}%
            </p>
          </div>
        ) : null}
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold text-zinc-900">Pronunciation Attempt</h2>
        <p className="text-sm text-zinc-600">
          Record audio for duration metadata, then submit target and transcript text for grading.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void handleStartRecording()}
            disabled={isRecording}
            className="ui-focus-ring rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 disabled:opacity-60"
          >
            Start Recording
          </button>
          <button
            type="button"
            onClick={() => void handleStopRecording()}
            disabled={!isRecording}
            className="ui-focus-ring rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700 hover:bg-amber-100 disabled:opacity-60"
          >
            Stop Recording
          </button>
          <button
            type="button"
            onClick={handleCancelRecording}
            disabled={!isRecording}
            className="ui-focus-ring rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 disabled:opacity-60"
          >
            Cancel
          </button>
        </div>

        <p className="mt-2 text-xs text-zinc-600">{recordingStatus}</p>
        {audioDurationMs ? (
          <p className="mt-1 text-xs text-zinc-600">
            Captured duration: {Math.round(audioDurationMs / 100) / 10}s
          </p>
        ) : null}
        {audioClipUrl ? (
          <audio className="mt-2 w-full" controls src={audioClipUrl} />
        ) : null}

        <label className="mt-3 flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Target Text
          <textarea
            value={targetText}
            onChange={(event) => setTargetText(event.target.value)}
            rows={3}
            className="ui-focus-ring rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800"
          />
        </label>

        <label className="mt-3 flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Transcript Text
          <textarea
            value={transcriptText}
            onChange={(event) => setTranscriptText(event.target.value)}
            rows={3}
            className="ui-focus-ring rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800"
          />
        </label>

        <label className="mt-3 flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          ASR Confidence ({asrConfidence.toFixed(2)})
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={asrConfidence}
            onChange={(event) => setAsrConfidence(Number(event.target.value))}
            className="accent-cyan-600"
          />
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void handleGrade()}
            disabled={
              gradeBusy || targetText.trim().length === 0 || transcriptText.trim().length === 0
            }
            className="ui-focus-ring rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 hover:bg-cyan-100 disabled:opacity-60"
          >
            {gradeBusy ? "Grading..." : "Grade Attempt"}
          </button>
          <button
            type="button"
            onClick={() => {
              setTargetText(DEFAULT_TARGET_TEXT);
              setTranscriptText(DEFAULT_TRANSCRIPT_TEXT);
              setAsrConfidence(0.82);
              setGradeResult(null);
              setGradeStatus("Reset to defaults.");
            }}
            className="ui-focus-ring rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Reset
          </button>
        </div>

        <p className="mt-2 text-xs text-zinc-600">{gradeStatus}</p>

        {gradeResult ? (
          <div className="mt-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-3">
            <div className="flex flex-wrap items-center gap-2">
              <ProgressChip
                label="Mode"
                value={gradeResult.gradingMode === "graded" ? "Scored" : "Practice"}
                tone={gradeResult.gradingMode === "graded" ? "success" : "warning"}
              />
              <ProgressChip
                label="Grade"
                value={gradeResult.grading.gradeBand}
                tone="info"
              />
              <ProgressChip
                label="Overall"
                value={formatScore(gradeResult.grading.overallScore)}
                tone="neutral"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-600">
              Provider: {gradeResult.grading.providerId} | persisted:{" "}
              {gradeResult.persistence.persisted ? "yes" : "no"} | usage tracked:{" "}
              {gradeResult.usageTracking.tracked ? "yes" : "no"}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <p className="rounded-xl border border-zinc-200 bg-white p-2 text-xs text-zinc-700">
                Accuracy: {formatScore(gradeResult.grading.dimensions.accuracy)}
              </p>
              <p className="rounded-xl border border-zinc-200 bg-white p-2 text-xs text-zinc-700">
                Fluency: {formatScore(gradeResult.grading.dimensions.fluency)}
              </p>
              <p className="rounded-xl border border-zinc-200 bg-white p-2 text-xs text-zinc-700">
                Completeness: {formatScore(gradeResult.grading.dimensions.completeness)}
              </p>
              <p className="rounded-xl border border-zinc-200 bg-white p-2 text-xs text-zinc-700">
                Confidence: {formatScore(gradeResult.grading.dimensions.confidence)}
              </p>
            </div>
            {gradeResult.grading.feedback.length > 0 ? (
              <ul className="mt-3 space-y-1 text-xs text-zinc-700">
                {gradeResult.grading.feedback.map((entry, index) => (
                  <li key={`${entry}-${index}`}>- {entry}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {!selectedLearner && learners.length > 0 ? (
          <p className="mt-3 text-xs text-amber-700">
            Pick a learner profile to ensure usage tracking maps to the right student.
          </p>
        ) : null}
      </SoftCard>
    </div>
  );
}

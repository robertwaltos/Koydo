"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProgressChip from "@/app/components/ui/progress-chip";
import SoftCard from "@/app/components/ui/soft-card";
import { toTestingExamPath } from "@/lib/routing/paths";
import type { TestingExamCatalogEntry } from "@/lib/testing/types";

type CatalogResponse = {
  exams: TestingExamCatalogEntry[];
};

const fallbackCoverByExamCode: Record<string, string> = {
  pmp: "/media/generated/job-00ab09cd-520a-4758-aeda-310ab17c4fd8.png",
  cissp: "/media/generated/job-020a0034-f38a-4857-9478-5e6916d8c357.png",
  "aws-saa": "/media/generated/job-0516cf1d-c761-47d0-a3e6-349651e193d8.png",
  "nclex-rn": "/media/generated/job-1107158e-4db3-46a9-a928-4e256501d702.png",
  "usmle-step-1": "/media/generated/job-1190aeb2-c9c6-4634-8b6a-85a4df7ce708.png",
};

function formatExamCode(value: string) {
  return value.replace(/-/g, " ").toUpperCase();
}

function blueprintDomainNames(blueprint: Record<string, unknown>) {
  const domains = blueprint.domains;
  if (!Array.isArray(domains)) return [];
  return domains
    .map((entry) => {
      if (!entry || typeof entry !== "object") return null;
      const value = entry as Record<string, unknown>;
      const name = value.name;
      return typeof name === "string" ? name : null;
    })
    .filter((entry): entry is string => Boolean(entry))
    .slice(0, 4);
}

function resolveCoverImage(exam: TestingExamCatalogEntry) {
  const mapped = fallbackCoverByExamCode[exam.examCode];
  if (mapped) {
    return mapped;
  }
  if (exam.coverImageUrl && exam.coverImageUrl.trim().length > 0) {
    return exam.coverImageUrl;
  }
  return null;
}

export default function TestingCatalogClient() {
  const searchParams = useSearchParams();
  const [exams, setExams] = useState<TestingExamCatalogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unlockingExamId, setUnlockingExamId] = useState<string | null>(null);
  const finalizedCheckoutSessionRef = useRef<string | null>(null);

  const loadExams = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/testing/exams?language=en", { cache: "no-store" });
      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setError(payload?.error ?? "Failed to load exam catalog.");
        setIsLoading(false);
        return;
      }

      const payload = (await response.json()) as CatalogResponse;
      setExams(Array.isArray(payload.exams) ? payload.exams : []);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Failed to load exam catalog.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadExams();
  }, [loadExams]);

  useEffect(() => {
    const checkoutState = searchParams.get("checkout");
    const examId = searchParams.get("examId");
    const checkoutSessionId = searchParams.get("session_id");

    if (checkoutState !== "success" || !examId || !checkoutSessionId) {
      return;
    }

    if (finalizedCheckoutSessionRef.current === checkoutSessionId) {
      return;
    }
    finalizedCheckoutSessionRef.current = checkoutSessionId;

    const finalizeUnlock = async () => {
      setUnlockingExamId(examId);
      setError(null);
      try {
        const response = await fetch(`/api/testing/exams/${encodeURIComponent(examId)}/unlock`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stripeCheckoutSessionId: checkoutSessionId }),
        });

        const payload = await response.json().catch(() => null);
        if (!response.ok) {
          setError(payload?.error ?? "Payment completed but unlock finalization failed.");
          return;
        }

        setExams((previous) =>
          previous.map((exam) =>
            exam.id === examId
              ? { ...exam, entitlementType: "full", hasFullAccess: true }
              : exam,
          ),
        );

        if (typeof window !== "undefined") {
          window.history.replaceState({}, "", "/testing");
        }
      } catch (finalizeError) {
        setError(
          finalizeError instanceof Error
            ? finalizeError.message
            : "Payment completed but unlock finalization failed.",
        );
      } finally {
        setUnlockingExamId(null);
      }
    };

    void finalizeUnlock();
  }, [searchParams]);

  const sortedExams = useMemo(
    () => [...exams].sort((left, right) => left.name.localeCompare(right.name)),
    [exams],
  );

  async function unlockExam(examId: string) {
    setUnlockingExamId(examId);
    setError(null);
    try {
      const response = await fetch(`/api/testing/exams/${encodeURIComponent(examId)}/checkout`, {
        method: "POST",
      });

      const payload = await response.json().catch(() => null);
      if (response.status === 409 && payload?.alreadyUnlocked) {
        setExams((previous) =>
          previous.map((exam) =>
            exam.id === examId
              ? { ...exam, entitlementType: "full", hasFullAccess: true }
              : exam,
          ),
        );
        return;
      }

      if (!response.ok) {
        setError(payload?.error ?? "Unlock failed.");
        return;
      }

      if (!payload?.checkoutUrl || typeof payload.checkoutUrl !== "string") {
        setError("Unlock checkout session could not be created.");
        return;
      }

      window.location.href = payload.checkoutUrl;
    } catch (unlockError) {
      setError(unlockError instanceof Error ? unlockError.message : "Unlock failed.");
    } finally {
      setUnlockingExamId(null);
    }
  }

  if (isLoading) {
    return (
      <SoftCard className="p-6">
        <p className="text-sm font-semibold text-zinc-700">Loading exam catalog...</p>
      </SoftCard>
    );
  }

  if (error) {
    return (
      <SoftCard className="border-red-200 bg-red-50 p-6">
        <p className="text-sm font-semibold text-red-800">{error}</p>
        <button
          type="button"
          onClick={() => {
            void loadExams();
          }}
          className="ui-focus-ring mt-3 inline-flex min-h-11 items-center rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-bold text-red-800 hover:bg-red-100"
        >
          Retry
        </button>
      </SoftCard>
    );
  }

  if (sortedExams.length === 0) {
    return (
      <SoftCard className="p-6">
        <p className="text-sm font-semibold text-zinc-700">
          No exams are active yet. Seed `testing_exams` in Supabase and refresh.
        </p>
      </SoftCard>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {sortedExams.map((exam) => {
        const coverImage = resolveCoverImage(exam);
        const domains = blueprintDomainNames(exam.blueprint);

        return (
          <SoftCard key={exam.id} as="article" interactive className="overflow-hidden p-0">
            <div
              className="relative h-40 w-full border-b border-zinc-200/70"
              style={{
                backgroundImage: coverImage
                  ? `linear-gradient(135deg, rgba(15,23,42,0.08), rgba(15,23,42,0.35)), url('${coverImage}')`
                  : "linear-gradient(135deg, #0ea5e9, #2563eb)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-zinc-800">
                {formatExamCode(exam.examCode)}
              </div>
              {exam.hasFullAccess ? (
                <div className="absolute right-3 top-3 rounded-full border border-emerald-200 bg-emerald-50/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-800">
                  Full
                </div>
              ) : (
                <div className="absolute right-3 top-3 rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-zinc-700">
                  Sample
                </div>
              )}
            </div>

            <div className="space-y-3 p-4">
              <div>
                <h2 className="text-lg font-extrabold tracking-tight text-zinc-900">
                  {exam.name}
                </h2>
                {exam.localizedName ? (
                  <p className="text-xs font-semibold text-zinc-600">{exam.localizedName}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-2">
                <ProgressChip label="Questions" value={exam.questionCount} tone="neutral" />
                <ProgressChip label="Minutes" value={exam.timingMinutes} tone="info" />
                <ProgressChip
                  label="Pass"
                  value={exam.passingScore ?? "N/A"}
                  tone={exam.passingScore ? "warning" : "neutral"}
                />
              </div>

              {domains.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {domains.map((domain) => (
                    <span
                      key={`${exam.id}-${domain}`}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-[11px] font-semibold text-zinc-700"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              ) : null}

              <p className="text-xs font-medium text-zinc-600">
                Includes a 10-question sample for all learners.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={toTestingExamPath(exam.id, "sample")}
                  className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-900 transition-colors hover:bg-sky-100"
                >
                  Try Sample
                </Link>

                {exam.hasFullAccess ? (
                  <Link
                    href={toTestingExamPath(exam.id, "full")}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 transition-colors hover:bg-emerald-100"
                  >
                    Start Full Exam
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      void unlockExam(exam.id);
                    }}
                    disabled={unlockingExamId === exam.id}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {unlockingExamId === exam.id ? "Unlocking..." : "Unlock Full ($1.95)"}
                  </button>
                )}
              </div>
            </div>
          </SoftCard>
        );
      })}
    </div>
  );
}

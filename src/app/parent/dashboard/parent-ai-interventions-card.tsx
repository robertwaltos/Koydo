"use client";

import { useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type InterventionSuggestion = {
  id: string;
  title: string;
  rationale: string;
  actions: string[];
  priority: "high" | "medium" | "low";
};

type InterventionResponse = {
  childDisplayName?: string | null;
  unresolvedErrorCount?: number;
  weakSkillCount?: number;
  suggestions?: InterventionSuggestion[];
  message?: string;
  error?: string;
};

function toneForPriority(priority: "high" | "medium" | "low") {
  if (priority === "high") return "warning";
  if (priority === "medium") return "info";
  return "success";
}

export default function ParentAiInterventionsCard() {
  const [suggestions, setSuggestions] = useState<InterventionSuggestion[]>([]);
  const [childDisplayName, setChildDisplayName] = useState<string | null>(null);
  const [unresolvedErrorCount, setUnresolvedErrorCount] = useState(0);
  const [weakSkillCount, setWeakSkillCount] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/parent/ai-interventions", {
          cache: "no-store",
        });
        const payload = (await response.json()) as InterventionResponse;
        if (!response.ok) {
          throw new Error(payload.error ?? "Failed to load interventions.");
        }

        setSuggestions(Array.isArray(payload.suggestions) ? payload.suggestions : []);
        setChildDisplayName(payload.childDisplayName ?? null);
        setUnresolvedErrorCount(Number(payload.unresolvedErrorCount ?? 0));
        setWeakSkillCount(Number(payload.weakSkillCount ?? 0));
        setMessage(payload.message ?? null);
      } catch (error) {
        const details = error instanceof Error ? error.message : "Failed to load interventions.";
        setMessage(details);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, []);

  return (
    <SoftCard as="section" className="border-violet-200 bg-violet-50 p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-violet-900">AI Intervention Suggestions</h2>
        {!isLoading ? (
          <div className="flex flex-wrap gap-2">
            <ProgressChip label="Open Errors" value={unresolvedErrorCount} tone={unresolvedErrorCount > 0 ? "warning" : "success"} />
            <ProgressChip label="Weak Skills" value={weakSkillCount} tone={weakSkillCount > 0 ? "warning" : "success"} />
          </div>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-zinc-700">
        {childDisplayName ? `Suggested actions for ${childDisplayName}.` : "Suggested parent coaching actions."}
      </p>

      {isLoading ? (
        <div className="mt-4 h-24 animate-pulse rounded-2xl border border-violet-200 bg-white" />
      ) : message ? (
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          {message}
        </p>
      ) : (
        <div className="mt-4 grid gap-3">
          {suggestions.map((suggestion) => (
            <SoftCard key={suggestion.id} className="border-violet-200 bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-zinc-900">{suggestion.title}</h3>
                <ProgressChip
                  label="Priority"
                  value={suggestion.priority}
                  tone={toneForPriority(suggestion.priority)}
                />
              </div>
              <p className="mt-2 text-sm text-zinc-700">{suggestion.rationale}</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                {suggestion.actions.map((action) => (
                  <li key={action}>• {action}</li>
                ))}
              </ul>
            </SoftCard>
          ))}
        </div>
      )}
    </SoftCard>
  );
}

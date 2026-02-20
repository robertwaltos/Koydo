"use client";

import { useState } from "react";

type MediaAssetType = "video" | "animation" | "image";

type PromptEntry = {
  label: string;
  assetType: MediaAssetType;
  provider: string;
  prompt: string;
};

type QueueResponse = {
  error?: string;
  duplicate?: boolean;
  job?: { id: string; status: string };
};

async function copyText(value: string) {
  if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
    throw new Error("Clipboard is not available in this browser.");
  }
  await navigator.clipboard.writeText(value);
}

export default function LessonMediaOps({
  moduleId,
  lessonId,
  videoPrompt,
  animationPrompt,
  imagePrompt,
}: {
  moduleId: string;
  lessonId: string;
  videoPrompt: string;
  animationPrompt: string;
  imagePrompt: string;
}) {
  const [status, setStatus] = useState("");
  const [workingAssetType, setWorkingAssetType] = useState<MediaAssetType | null>(null);

  const promptEntries: PromptEntry[] = [
    {
      label: "Video Prompt",
      assetType: "video",
      provider: "seedance",
      prompt: videoPrompt,
    },
    {
      label: "Animation Prompt",
      assetType: "animation",
      provider: "seedance",
      prompt: animationPrompt,
    },
    {
      label: "Image Prompt",
      assetType: "image",
      provider: "imagegen",
      prompt: imagePrompt,
    },
  ];

  const handleCopy = async (entry: PromptEntry) => {
    try {
      await copyText(entry.prompt);
      setStatus(`${entry.label} copied.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to copy prompt.");
    }
  };

  const handleQueue = async (entry: PromptEntry) => {
    setWorkingAssetType(entry.assetType);
    setStatus("");

    try {
      const response = await fetch("/api/admin/media/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleId,
          lessonId,
          assetType: entry.assetType,
          provider: entry.provider,
          prompt: entry.prompt,
          metadata: {
            source: "lesson-page",
            lessonPath: `/lessons/${lessonId}`,
          },
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as QueueResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to queue media job.");
      }

      if (payload.duplicate) {
        setStatus(`Existing ${entry.assetType} job already queued or completed (job ${payload.job?.id ?? "unknown"}).`);
        return;
      }

      setStatus(`Queued ${entry.assetType} media job ${payload.job?.id ?? ""}`.trim());
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to queue media job.");
    } finally {
      setWorkingAssetType(null);
    }
  };

  return (
    <div className="space-y-3">
      {promptEntries.map((entry) => (
        <article key={entry.assetType} className="rounded-xl border border-amber-200 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-zinc-900">{entry.label}</h3>
            <span className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] text-zinc-600">{entry.provider}</span>
          </div>
          <p className="mt-2 text-xs text-zinc-700">{entry.prompt}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void handleCopy(entry)}
              className="rounded-md border border-black/15 px-3 py-1 text-xs hover:bg-black/5"
            >
              Copy Prompt
            </button>
            <button
              type="button"
              disabled={workingAssetType === entry.assetType}
              onClick={() => void handleQueue(entry)}
              className="rounded-md bg-amber-600 px-3 py-1 text-xs font-medium text-white hover:bg-amber-500 disabled:opacity-70"
            >
              {workingAssetType === entry.assetType ? "Queueing..." : "Queue Media Job"}
            </button>
          </div>
        </article>
      ))}
      {status ? <p className="text-xs text-amber-900">{status}</p> : null}
      <p className="text-[11px] text-zinc-600">
        Queueing requires an authenticated admin account. Non-admin requests are rejected automatically.
      </p>
    </div>
  );
}

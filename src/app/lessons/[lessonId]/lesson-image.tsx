"use client";

import { useState, useEffect } from "react";

type GenerateImageResponse = {
  url?: string;
  queued?: boolean;
  error?: string;
};

const FALLBACK_IMAGE_URL = "/placeholders/lesson-robot.svg";
const POLL_INTERVAL_MS = 12000;
const MAX_POLL_ATTEMPTS = 10;

export default function LessonImage({
  prompt,
  moduleId,
  lessonId,
}: {
  prompt: string;
  moduleId: string;
  lessonId: string;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isQueued, setIsQueued] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    let timeoutId: number | undefined;

    const generateImage = async (attempt: number) => {
      try {
        setError(null);
        const response = await fetch("/api/images/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt, moduleId, lessonId }),
        });

        const data = (await response.json().catch(() => ({}))) as GenerateImageResponse;
        if (!response.ok) {
          throw new Error(data.error ?? "Failed to generate image.");
        }

        if (!isActive) {
          return;
        }

        const nextImageUrl = typeof data.url === "string" && data.url.length > 0 ? data.url : FALLBACK_IMAGE_URL;
        const queued = data.queued === true;
        setImageUrl(nextImageUrl);
        setIsQueued(queued);

        if (queued && attempt < MAX_POLL_ATTEMPTS) {
          timeoutId = window.setTimeout(() => {
            void generateImage(attempt + 1);
          }, POLL_INTERVAL_MS);
        }
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err.message : "An unknown error occurred.");
          setIsQueued(false);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    setIsLoading(true);
    setIsQueued(false);
    setImageUrl(null);
    void generateImage(0);

    return () => {
      isActive = false;
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [prompt, moduleId, lessonId]);

  if (isLoading) {
    return (
      <div className="aspect-video w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
    );
  }

  if (error) {
    return (
      <div className="aspect-video w-full flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/50">
        <p className="text-sm text-red-700 dark:text-red-300">
          Could not load image.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl ?? FALLBACK_IMAGE_URL}
          alt={prompt}
          className="h-full w-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      {isQueued ? (
        <p className="text-xs text-zinc-500">
          Generating final lesson image. This preview will auto-refresh when it is ready.
        </p>
      ) : null}
    </div>
  );
}

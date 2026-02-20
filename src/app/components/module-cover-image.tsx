"use client";

import { useEffect, useMemo, useState } from "react";

type ModuleCoverImageProps = {
  moduleId: string;
  moduleTitle: string;
  fallbackSrc?: string;
  className?: string;
};

type MediaResolveResponse = {
  resolved?: Record<string, string | null>;
  error?: string;
};

const DEFAULT_MODULE_COVER = "/placeholders/lesson-robot.svg";
const BATCH_SIZE = 30;

const coverCache = new Map<string, string>();
const pendingModuleIds = new Set<string>();
const waitersByModule = new Map<string, Array<(url: string | null) => void>>();
let flushTimer: ReturnType<typeof setTimeout> | null = null;

function resolveWaiters(moduleId: string, url: string | null) {
  const waiters = waitersByModule.get(moduleId) ?? [];
  waitersByModule.delete(moduleId);
  for (const waiter of waiters) {
    waiter(url);
  }
}

async function flushBatch() {
  flushTimer = null;
  const batch = Array.from(pendingModuleIds).slice(0, BATCH_SIZE);
  if (batch.length === 0) {
    return;
  }

  for (const moduleId of batch) {
    pendingModuleIds.delete(moduleId);
  }

  try {
    const params = new URLSearchParams({
      assetType: "image",
      moduleIds: batch.join(","),
    });
    const response = await fetch(`/api/media/resolve/batch?${params.toString()}`, {
      method: "GET",
      cache: "no-store",
    });

    const payload = (await response.json().catch(() => ({}))) as MediaResolveResponse;
    const resolved = response.ok && payload.resolved ? payload.resolved : {};

    for (const moduleId of batch) {
      const resolvedUrl = typeof resolved[moduleId] === "string" ? resolved[moduleId] : null;
      if (resolvedUrl) {
        coverCache.set(moduleId, resolvedUrl);
      }
      resolveWaiters(moduleId, resolvedUrl);
    }
  } catch {
    for (const moduleId of batch) {
      resolveWaiters(moduleId, null);
    }
  }

  if (pendingModuleIds.size > 0 && !flushTimer) {
    flushTimer = setTimeout(() => {
      void flushBatch();
    }, 0);
  }
}

function queueModuleResolve(moduleId: string) {
  const cached = coverCache.get(moduleId);
  if (cached) {
    return Promise.resolve<string | null>(cached);
  }

  return new Promise<string | null>((resolve) => {
    const waiters = waitersByModule.get(moduleId) ?? [];
    waiters.push(resolve);
    waitersByModule.set(moduleId, waiters);
    pendingModuleIds.add(moduleId);

    if (!flushTimer) {
      flushTimer = setTimeout(() => {
        void flushBatch();
      }, 0);
    }
  });
}

export default function ModuleCoverImage({
  moduleId,
  moduleTitle,
  fallbackSrc,
  className,
}: ModuleCoverImageProps) {
  const fallback = useMemo(() => fallbackSrc?.trim() || DEFAULT_MODULE_COVER, [fallbackSrc]);
  const [resolved, setResolved] = useState<{ moduleId: string; src: string } | null>(null);

  useEffect(() => {
    let isActive = true;

    const resolveModuleCover = async () => {
      const resolvedSrc = await queueModuleResolve(moduleId);
      if (isActive && resolvedSrc) {
        setResolved({ moduleId, src: resolvedSrc });
      }
    };

    void resolveModuleCover();

    return () => {
      isActive = false;
    };
  }, [moduleId]);

  const src = resolved?.moduleId === moduleId ? resolved.src : fallback;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${moduleTitle} module cover`}
      className={className ?? "h-40 w-full rounded-xl object-cover"}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

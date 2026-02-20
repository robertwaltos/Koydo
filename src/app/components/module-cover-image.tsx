"use client";

import { useEffect, useMemo, useState } from "react";

type ModuleCoverImageProps = {
  moduleId: string;
  moduleTitle: string;
  fallbackSrc?: string;
  className?: string;
};

type MediaResolveResponse = {
  found?: boolean;
  url?: string | null;
  error?: string;
};

const DEFAULT_MODULE_COVER = "/placeholders/lesson-robot.svg";

export default function ModuleCoverImage({
  moduleId,
  moduleTitle,
  fallbackSrc,
  className,
}: ModuleCoverImageProps) {
  const fallback = useMemo(() => fallbackSrc?.trim() || DEFAULT_MODULE_COVER, [fallbackSrc]);
  const [src, setSrc] = useState(fallback);

  useEffect(() => {
    let isActive = true;

    const resolveModuleCover = async () => {
      try {
        const params = new URLSearchParams({
          moduleId,
          assetType: "image",
        });
        const response = await fetch(`/api/media/resolve?${params.toString()}`, {
          method: "GET",
          cache: "no-store",
        });

        const payload = (await response.json().catch(() => ({}))) as MediaResolveResponse;
        if (!response.ok || !payload.found || !payload.url) {
          return;
        }

        if (isActive) {
          setSrc(payload.url);
        }
      } catch {
        // Keep fallback image on resolve failures.
      }
    };

    void resolveModuleCover();

    return () => {
      isActive = false;
    };
  }, [fallback, moduleId]);

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

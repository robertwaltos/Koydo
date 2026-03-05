"use client";

import { useFeature } from "@/lib/platform/use-feature";

type CaptionTrack = {
  src: string;
  srclang: string;
  label: string;
  default?: boolean;
};

/**
 * CaptionOverlay — Renders <track> elements for video captions.
 *
 * Usage: Place inside a <video> element as a child.
 *   <video>
 *     <CaptionOverlay tracks={[{ src: "/captions/en.vtt", srclang: "en", label: "English", default: true }]} />
 *   </video>
 *
 * Feature-gated: hidden when caption_renderer is disabled.
 */
export default function CaptionOverlay({ tracks }: { tracks: CaptionTrack[] }) {
  const { allowed } = useFeature("caption_renderer");

  if (!allowed || tracks.length === 0) return null;

  return (
    <>
      {tracks.map((t) => (
        <track
          key={t.srclang}
          kind="captions"
          src={t.src}
          srcLang={t.srclang}
          label={t.label}
          default={t.default}
        />
      ))}
    </>
  );
}

"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import type { WorldScene } from "@/lib/explorer/scenes";
import type { ExplorerTopic } from "@/lib/explorer/topics";
import { usePreReaderMode } from "./pre-reader-mode";

type SceneCardProps = {
  topic: ExplorerTopic;
  scene: WorldScene;
  /** Index used for staggered entrance animation delay */
  index: number;
  priority?: boolean;
};

export default function SceneCard({
  topic,
  scene,
  index,
  priority = false,
}: SceneCardProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -8;
    const tiltY = (x - 0.5) * 8;
    el.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
  }, []);

  const handlePointerLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="explore-scene-card explore-card-elevated group relative flex h-full min-h-[420px] flex-col items-center justify-end overflow-hidden rounded-3xl p-4 sm:min-h-[440px] sm:p-5"
      style={
        {
          background: scene.gradient,
          "--glow": scene.glowColor,
          animationDelay: `${index * 80}ms`,
          transition: "transform 200ms ease-out, box-shadow 300ms ease",
          willChange: "transform",
        } as React.CSSProperties
      }
    >
      {/* Glow ring behind the image — visible on hover/focus-within */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          boxShadow: `inset 0 0 80px ${scene.glowColor}33, 0 0 60px ${scene.glowColor}22`,
        }}
        aria-hidden="true"
      />

      {/* Badge floating top-right */}
      <span
        className="explore-float absolute right-3 top-3 text-2xl sm:text-3xl"
        aria-hidden="true"
        style={{ animationDelay: `${index * 120 + 200}ms` }}
      >
        {scene.badge}
      </span>

      {/* Main scene illustration — large and centered */}
      <Image
        src={topic.imageSrc}
        alt={topic.imageAlt}
        width={320}
        height={240}
        className="relative z-10 h-auto w-full max-w-[260px] rounded-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-105 sm:max-w-[300px]"
        priority={priority}
      />

      {/* Title + subtitle overlay at the bottom */}
      <div className="relative z-10 mt-3 flex w-full flex-1 flex-col items-center text-center">
        <h2
          className={`flex min-h-[2.6em] max-w-[12ch] items-center justify-center font-extrabold leading-[1.05] tracking-tight text-zinc-900 ${isPreReaderMode ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"}`}
        >
          {topic.title}
        </h2>
        {!isPreReaderMode ? (
          <p className="mt-1 flex min-h-[3.2rem] items-start justify-center text-sm text-zinc-700 sm:text-base">
            {topic.subtitle}
          </p>
        ) : (
          <p className="sr-only">{topic.subtitle}</p>
        )}
      </div>

      {/* Pulsing "tap me" indicator for pre-readers */}
      <div
        className="explore-pulse absolute bottom-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
        style={{ backgroundColor: scene.glowColor }}
        aria-hidden="true"
      />
    </article>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import type { EducationStage } from "@/lib/explorer/scenes";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import { useI18n } from "@/lib/i18n/provider";

type StageLinkCardProps = {
  stage: EducationStage;
  index: number;
  isRecommended?: boolean;
};

export default function StageLinkCard({ stage, index, isRecommended }: StageLinkCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const { locale, t } = useI18n();
  const label = locale === "es" ? stage.labelEs : stage.label;
  const description = locale === "es" ? stage.descriptionEs : stage.description;

  const prefersReducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -6;
    const tiltY = (x - 0.5) * 6;
    el.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
  }, [prefersReducedMotion]);

  const handlePointerLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  const destination = `/explore?stage=${stage.id}`;

  return (
    <Link
      href={destination}
      aria-label={t("stage_card_aria", {
        label,
        gradeRange: stage.gradeRange,
        ageRange: stage.ageRange,
      })}
      className="ui-focus-ring explore-scene-enter block rounded-3xl"
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={() => {
        trackExplorerInteraction({
          surface: "lobby",
          action: "world_selected",
          targetTopicId: stage.id,
          destination,
        });
      }}
    >
      <article
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="explore-scene-card explore-card-elevated group relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-3xl p-5 sm:min-h-[320px] sm:p-6"
        style={
          {
            background: stage.gradient,
            "--glow": stage.glowColor,
            transition: "transform 200ms ease-out, box-shadow 300ms ease",
          } as React.CSSProperties
        }
      >
        {isRecommended && (
            <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 ring-1 ring-inset ring-blue-500/20">
                {t("stage_card_recommended")}
            </span>
        )}
        {/* Glow ring on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          style={{
            boxShadow: `inset 0 0 60px ${stage.glowColor}25, 0 0 40px ${stage.glowColor}18`,
          }}
          aria-hidden="true"
        />

        {/* Badge */}
        <span
          className="explore-float relative text-5xl sm:text-6xl"
          aria-hidden="true"
          style={{ animationDelay: `${index * 120 + 200}ms` }}
        >
          {stage.badge}
        </span>

        {/* Label */}
        <span className="relative mt-3 rounded-full border border-zinc-200 bg-white/80 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-zinc-600 backdrop-blur-sm">
          {t("stage_card_position", { current: index + 1, total: 6 })}
        </span>
        <h2 className="relative mt-4 text-center text-xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-2xl">
          {label}
        </h2>

        {/* Description */}
        <p className="relative mt-1.5 max-w-[22ch] text-center text-sm text-zinc-700">
          {description}
        </p>

        {/* Grade + Age chips */}
        <div className="relative mt-3 flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-bold text-zinc-900 dark:text-foreground"
            style={{
              border: `1.5px solid ${stage.glowColor}`,
              background: `${stage.glowColor}22`,
            }}
          >
            {stage.gradeRange}
          </span>
          <span className="rounded-full border border-zinc-200 bg-white/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-700 backdrop-blur-sm border-border/65 dark:bg-slate-800/60 dark:text-foreground/80">
            {stage.ageRange}
          </span>
        </div>

        {/* Pulse indicator */}
        <div
          className="explore-pulse absolute bottom-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: stage.glowColor }}
          aria-hidden="true"
        />
      </article>
    </Link>
  );
}

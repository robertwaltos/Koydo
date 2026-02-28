"use client";

import React, { useState } from "react";
import { getLearningPathsForLearner, getStageLabel } from "@/lib/explorer/learning-paths";

interface WorldSelectorProps {
  onSelectWorld: (worldId: string, worldLabel: string) => void;
  selectedWorldId?: string;
  learner_age_years?: number | null;
  learnerGradeLevel?: string | null;
  allowedPathIds?: string[] | null;
  interestPathIds?: string[];
}

export function WorldSelector({
  onSelectWorld,
  selectedWorldId,
  learner_age_years,
  learnerGradeLevel,
  allowedPathIds,
  interestPathIds,
}: WorldSelectorProps) {
  const { stage, corePaths, additionalPaths } = getLearningPathsForLearner({
    age_years: learner_age_years,
    gradeLevel: learnerGradeLevel,
    interestPathIds,
  });

  const gradeNumber = (() => {
    if (!learnerGradeLevel) return null;
    const normalized = learnerGradeLevel.trim().toLowerCase();
    if (normalized === "k" || normalized === "kindergarten") return 0;
    const match = normalized.match(/\d{1,2}/);
    if (!match) return null;
    const numeric = Number(match[0]);
    return Number.isFinite(numeric) ? numeric : null;
  })();

  const imageFirstMode =
    (typeof learner_age_years === "number" && learner_age_years <= 5)
    || (gradeNumber !== null && gradeNumber <= 1);

  const allowedPathSet =
    Array.isArray(allowedPathIds) && allowedPathIds.length > 0 ? new Set(allowedPathIds) : null;
  const visibleCorePaths = allowedPathSet
    ? corePaths.filter((path) => allowedPathSet.has(path.id))
    : corePaths;
  const visibleAdditionalPaths = allowedPathSet
    ? additionalPaths.filter((path) => allowedPathSet.has(path.id))
    : additionalPaths;
  const visiblePaths = [...visibleCorePaths, ...visibleAdditionalPaths];
  const [hoveredWorld, setHoveredWorld] = useState<string | null>(null);

  const renderPathCard = (world: (typeof visiblePaths)[number]) => {
    const isSelected = selectedWorldId === world.id;
    const isHovered = hoveredWorld === world.id;

    return (
      <button
        key={world.id}
        onClick={() => onSelectWorld(world.id, world.label)}
        onMouseEnter={() => setHoveredWorld(world.id)}
        onMouseLeave={() => setHoveredWorld(null)}
        className={`
          relative group rounded-2xl p-5 transition-all duration-500 transform sm:p-6
          ${isSelected
    ? "scale-105 ring-4 ring-offset-4 z-10"
    : "hover:scale-105 hover:-translate-y-2 hover:shadow-2xl z-0 opacity-80 hover:opacity-100"}
        `}
        style={{
          background: world.gradient,
          boxShadow: isSelected || isHovered
            ? `0 20px 40px -10px ${world.glowColor}50, inset 0 0 0 1px ${world.borderColor}`
            : "none",
          borderColor: world.borderColor,
          "--tw-ring-color": world.glowColor,
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay rounded-2xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className={`
            mb-5 text-6xl transform transition-transform duration-500 filter drop-shadow-md sm:text-7xl
            ${isHovered ? "scale-125 rotate-6" : "scale-100"}
          `}>
            {world.badge}
          </div>

          <h3 className={`mb-2 max-w-[13ch] break-words text-center font-black leading-[1.08] tracking-tight text-stone-800 [text-wrap:balance] ${
            imageFirstMode ? "text-[clamp(1.05rem,2.4vw,1.4rem)]" : "min-h-[3.4rem] text-[clamp(1.25rem,2.7vw,1.85rem)]"
          }`}>
            {world.label}
          </h3>
        </div>

        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-white text-emerald-600 rounded-full p-1 shadow-md">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        {!imageFirstMode ? (
          <div className={`
            mt-3 rounded-lg bg-white/40 p-2 text-center text-xs font-medium text-stone-600/80
            transition-opacity duration-300
            ${isSelected || isHovered ? "opacity-100" : "opacity-0"}
          `}>
            {world.description}
          </div>
        ) : null}
      </button>
    );
  };

  const renderGrid = (paths: typeof visiblePaths, heading: string, subheading: string) => {
    if (paths.length === 0) return null;
    return (
      <section className="space-y-3">
        <div className="px-1">
          <h3 className="text-lg font-semibold text-stone-700">{heading}</h3>
          <p className="text-xs text-stone-500">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {paths.map((world) => renderPathCard(world))}
        </div>
      </section>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-stone-700 mb-6 text-center">
        Choose Your Next Learning Path
      </h2>
      <p className="mb-6 text-center text-sm text-stone-500">{getStageLabel(stage)}</p>
      
      {visiblePaths.length === 0 ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          No learning paths are currently enabled for this learner. Update allowed topics in Parent Settings.
        </div>
      ) : (
        <div className="space-y-8">
          {renderGrid(
            visibleCorePaths,
            "Core Curriculum",
            "Recommended next steps for this learner's age and level.",
          )}
          {renderGrid(
            visibleAdditionalPaths,
            "Additional Paths",
            "Optional interests and expansion tracks.",
          )}
        </div>
      )}
    </div>
  );
}

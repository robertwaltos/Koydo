"use client";

import { useMemo, useState } from "react";

type InteractiveActivityProps = {
  title: string;
  prompts: string[];
};

export default function InteractiveActivity({ title, prompts }: InteractiveActivityProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reflection, setReflection] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const currentPrompt = useMemo(() => prompts[currentIndex] ?? "Try the activity in your own words.", [prompts, currentIndex]);

  const onNextPrompt = () => {
    if (currentIndex >= prompts.length - 1) {
      setIsComplete(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Interactive Activity</p>
      <h3 className="mt-1 text-lg font-bold text-zinc-900">{title}</h3>
      <article className="mt-3 rounded-xl border border-amber-200 bg-white p-4">
        <p className="text-sm font-semibold text-zinc-800">{currentPrompt}</p>
      </article>

      <div className="mt-4 space-y-2">
        <label className="block text-sm font-medium text-zinc-700" htmlFor="reflection">
          Learner notes
        </label>
        <textarea
          id="reflection"
          rows={3}
          value={reflection}
          onChange={(event) => setReflection(event.target.value)}
          className="w-full rounded-md border border-amber-200 bg-white px-3 py-2 text-sm text-zinc-900"
          placeholder="Write what you discovered..."
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onNextPrompt}
          className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
        >
          {currentIndex >= prompts.length - 1 ? "Finish Activity" : "Next Prompt"}
        </button>
        <p className="text-xs text-zinc-600">
          Prompt {Math.min(currentIndex + 1, prompts.length)} / {prompts.length}
        </p>
      </div>

      {isComplete ? (
        <p className="mt-3 rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">
          Great work. You completed this activity.
        </p>
      ) : null}
    </section>
  );
}

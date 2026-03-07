"use client";

import type { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { BookOpenCheck, X } from "lucide-react";

import UniversityButton from "./UniversityButton";

export type FocusModeReaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  eyebrow?: string;
  metadata?: string;
  onExitFocus?: () => void;
  exitHref?: string;
  exitLabel?: string;
  children: ReactNode;
};

export default function FocusModeReader({
  title,
  eyebrow = "Focus Mode",
  metadata,
  onExitFocus,
  exitHref,
  exitLabel = "Exit",
  children,
  className = "",
  ...props
}: FocusModeReaderProps) {
  return (
    <section
      className={[
        "min-h-screen bg-[#f5f7fb] text-[#0f172a]",
        "dark:bg-[#0f172a] dark:text-[#e5edf8]",
        className,
      ].join(" ")}
      {...props}
    >
      <header className="sticky top-0 z-20 border-b border-[#d8e0ea] bg-[#f5f7fb]/90 backdrop-blur dark:border-[#2d3a50] dark:bg-[#0f172a]/90">
        <div className="mx-auto flex w-full max-w-[980px] items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#cbd8e8] bg-white text-[#1d3557] dark:border-[#2d3a50] dark:bg-[#111827] dark:text-[#9fb1c9]">
              <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#56687d] dark:text-[#9fb1c9]">
                {eyebrow}
              </p>
              <h1 className="text-[14px] font-semibold sm:text-[15px]">{title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {metadata ? (
              <p className="hidden text-[12px] text-[#56687d] dark:text-[#9fb1c9] sm:block">{metadata}</p>
            ) : null}
            {onExitFocus ? (
              <UniversityButton
                tone="ghost"
                size="sm"
                onClick={onExitFocus}
                aria-label="Exit focus mode"
                className="text-[#334155] dark:border-[#3a4b64] dark:text-[#c6d5e8] dark:hover:bg-[#18263a]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                {exitLabel}
              </UniversityButton>
            ) : exitHref ? (
              <Link
                href={exitHref}
                className="inline-flex min-h-8 items-center gap-1.5 rounded-[8px] border border-[#cdd7e5] px-3 text-[12px] font-medium text-[#334155] transition-colors hover:bg-[#f1f5f9] dark:border-[#3a4b64] dark:text-[#c6d5e8] dark:hover:bg-[#18263a]"
                aria-label="Exit focus mode"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                {exitLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </header>

      <main className="px-4 py-6 sm:px-6 sm:py-8">
        <article
          className={[
            "mx-auto w-full max-w-[760px] rounded-xl border border-[#d8e0ea] bg-white px-5 py-7 shadow-[0_1px_2px_rgba(2,6,23,0.08),0_4px_14px_rgba(2,6,23,0.06)]",
            "dark:border-[#2d3a50] dark:bg-[#111827]",
          ].join(" ")}
        >
          <div className="prose prose-slate max-w-none text-[17px] leading-[1.9] dark:prose-invert">
            <div className="font-[family-name:var(--font-reading-serif)]">{children}</div>
          </div>
        </article>
      </main>
    </section>
  );
}

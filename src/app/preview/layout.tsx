import Link from "next/link";
import type { ReactNode } from "react";

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Preview mode bar */}
      <div className="sticky top-0 z-50 flex items-center gap-4 border-b border-amber-200 bg-amber-50/90 px-4 py-2 backdrop-blur-sm dark:border-amber-800 dark:bg-amber-950/90">
        <Link
          href="/"
          className="text-sm font-medium text-amber-700 underline-offset-2 hover:underline dark:text-amber-300"
        >
          &larr; Back to Home
        </Link>
        <span className="rounded-full bg-amber-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-800 dark:text-amber-200">
          Preview Mode
        </span>
        <div className="flex gap-3 ml-auto">
          <Link href="/preview/landing" className="text-xs text-amber-600 hover:underline dark:text-amber-400">
            Landing
          </Link>
          <Link href="/preview/parent-dashboard" className="text-xs text-amber-600 hover:underline dark:text-amber-400">
            Dashboard
          </Link>
          <Link href="/preview/junior" className="text-xs text-amber-600 hover:underline dark:text-amber-400">
            Junior
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

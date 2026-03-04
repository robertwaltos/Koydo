"use client";

export default function ThemeToggle() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-zinc-600 dark:text-foreground/70">Theme</span>
      <span className="rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium">
        Light
      </span>
    </div>
  );
}

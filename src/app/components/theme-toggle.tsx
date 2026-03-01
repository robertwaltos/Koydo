"use client";

import { type ThemeMode, useTheme } from "@/lib/theme/provider";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-zinc-600 dark:text-foreground/70">Theme</span>
      <select
        value={themeMode}
        onChange={(event) => setThemeMode(event.target.value as ThemeMode)}
        className="ui-focus-ring rounded-full border border-border bg-surface px-3 py-1 text-sm"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}

"use client";

import { useTheme } from "@/lib/theme/provider";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-zinc-600 dark:text-zinc-300">Theme</span>
      <select
        value={themeMode}
        onChange={(event) => setThemeMode(event.target.value as "light" | "system")}
        className="rounded-md border border-black/15 bg-white px-2 py-1 text-sm dark:bg-zinc-900"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
      </select>
    </label>
  );
}

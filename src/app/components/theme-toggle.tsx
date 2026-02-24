"use client";

import { useTheme } from "@/lib/theme/provider";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-zinc-600">Theme</span>
      <select
        value={themeMode}
        onChange={(event) => setThemeMode(event.target.value as "light" | "system")}
        className="ui-focus-ring rounded-full border border-border bg-surface px-3 py-1 text-sm"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
      </select>
    </label>
  );
}

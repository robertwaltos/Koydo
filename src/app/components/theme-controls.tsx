"use client";

import { useEffect, useRef } from "react";
import { type ThemeMode, useTheme } from "@/lib/theme/provider";

export default function ThemeControls({ compact = false }: { compact?: boolean }) {
  const {
    themeMode,
    themePack,
    typographyDensity,
    setThemeMode,
    setTypographyDensity,
  } = useTheme();
  const didMount = useRef(false);
  const applyThemeMode = (value: ThemeMode) => {
    setThemeMode(value);
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    const controller = new AbortController();

    const persist = async () => {
      try {
        await fetch("/api/user/preferences", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            theme_mode: themeMode,
            theme_pack: themePack,
            motion_pref: "standard",
            contrast_pref: "standard",
          }),
          signal: controller.signal,
        });
      } catch {
        // Local preference still applies even if server sync fails.
      }
    };

    void persist();
    return () => controller.abort();
  }, [themeMode, themePack]);

  return (
    <div className="flex items-center gap-2 text-xs">
      <label className="flex items-center gap-1">
        <span className="text-foreground">Theme</span>
        <select
          value={themeMode}
          onChange={(event) => applyThemeMode(event.target.value as ThemeMode)}
          className="ui-focus-ring min-h-9 min-w-40 rounded-full border border-border bg-surface px-3 py-1 text-foreground shadow-sm"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      {!compact ? (
        <label className="flex items-center gap-1">
          <span className="text-foreground">Type</span>
          <select
            value={typographyDensity}
            onChange={(event) =>
              setTypographyDensity(
                event.target.value === "compact"
                  ? "compact"
                  : event.target.value === "spacious"
                    ? "spacious"
                    : "comfortable",
              )
            }
            className="ui-focus-ring min-h-9 rounded-full border border-border bg-surface px-3 py-1 text-foreground shadow-sm"
          >
            <option value="comfortable">Comfortable</option>
            <option value="compact">Compact</option>
            <option value="spacious">Spacious</option>
          </select>
        </label>
      ) : null}
    </div>
  );
}

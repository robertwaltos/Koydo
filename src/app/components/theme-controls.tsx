"use client";

import { useEffect, useRef } from "react";
import { type ThemePack, useTheme } from "@/lib/theme/provider";

export default function ThemeControls({ compact = false }: { compact?: boolean }) {
  const { themeMode, themePack, setThemeMode, setThemePack } = useTheme();
  const didMount = useRef(false);

  type ThemeSelectionValue =
    | "system"
    | "simple"
    | "sunrise"
    | "ocean"
    | "forest"
    | "candy"
    | "space";

  const currentSelection: ThemeSelectionValue = (() => {
    if (themeMode === "system") {
      return "system";
    }
    return themePack as ThemeSelectionValue;
  })();

  const applySelection = (value: ThemeSelectionValue) => {
    if (value === "system") {
      setThemePack("simple");
      setThemeMode("system");
      return;
    }

    setThemePack(value as ThemePack);
    setThemeMode("light");
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
          value={currentSelection}
          onChange={(event) => applySelection(event.target.value as ThemeSelectionValue)}
          className="ui-focus-ring min-h-9 min-w-40 rounded-full border border-border bg-surface px-3 py-1 text-foreground shadow-sm [color-scheme:light]"
        >
          <option value="system">System</option>
          {!compact ? (
            <>
              <option value="simple">Simple</option>
              <option value="sunrise">Sunrise</option>
              <option value="ocean">Ocean</option>
              <option value="forest">Forest</option>
              <option value="candy">Candy</option>
              <option value="space">Space</option>
            </>
          ) : null}
        </select>
      </label>
    </div>
  );
}

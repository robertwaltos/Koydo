"use client";

import { useEffect, useRef } from "react";
import { useTheme, type AgeGroupTheme } from "@/lib/theme/provider";

export default function ThemeControls({ compact = false }: { compact?: boolean }) {
  const {
    themePack,
    ageGroup,
    setAgeGroup,
    typographyDensity,
    setTypographyDensity,
  } = useTheme();
  const didMount = useRef(false);

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
            theme_mode: "light",
            theme_pack: themePack,
            age_group: ageGroup,
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
  }, [themePack, ageGroup]);

  return (
    <div className="flex flex-col items-center gap-2 text-xs w-full sm:flex-row sm:w-auto">
      <label className="flex items-center gap-1.5 w-full sm:w-auto">
        <span className="text-foreground sr-only">Age</span>
        <select
          value={ageGroup}
          onChange={(event) => setAgeGroup(event.target.value as AgeGroupTheme)}
          className="ui-focus-ring min-h-9 w-full rounded-full border border-border bg-surface px-3 py-1 text-foreground shadow-sm sm:w-auto"
        >
          <option value="standard">Standard Theme</option>
          <option value="tiny-explorer">Ages 1-5 (Tiny Explorer)</option>
          <option value="young-adventurer">Ages 6-11 (Young Adventurer)</option>
          <option value="teen-mode">Ages 12-17 (Teen Mode)</option>
          <option value="adult-pro">Ages 18+ (Adult Pro)</option>
        </select>
      </label>
      
      {!compact ? (
        <label className="flex items-center gap-1.5 w-full sm:w-auto">
          <span className="text-foreground sr-only">Type</span>
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
            className="ui-focus-ring min-h-9 w-full rounded-full border border-border bg-surface px-3 py-1 text-foreground shadow-sm sm:w-auto"
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

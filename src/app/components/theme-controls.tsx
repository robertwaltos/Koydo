"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme/provider";

export default function ThemeControls({ compact = false }: { compact?: boolean }) {
  const {
    themePack,
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
  }, [themePack]);

  return (
    <div className="flex items-center gap-2 text-xs">
      <div className="flex items-center gap-1">
        <span className="text-foreground">Theme</span>
        <span className="inline-flex min-h-9 min-w-24 items-center justify-center rounded-full border border-border bg-surface px-3 py-1 font-medium text-foreground shadow-sm">
          Light
        </span>
      </div>
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

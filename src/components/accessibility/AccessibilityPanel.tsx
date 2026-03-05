"use client";

import { useFeature } from "@/lib/platform/use-feature";
import { useAccessibility } from "@/lib/accessibility/accessibility-context";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

const FONT_SIZES = [
  { value: "normal" as const, label: "Normal" },
  { value: "large" as const, label: "Large" },
  { value: "x-large" as const, label: "Extra Large" },
];

export default function AccessibilityPanel() {
  const { allowed } = useFeature("accessibility_controls");
  const { settings, update, reset } = useAccessibility();

  if (!allowed) return null;

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Accessibility</h3>

      {/* Font size */}
      <div>
        <p className="mb-2 text-sm font-medium">Text Size</p>
        <div className="flex gap-2">
          {FONT_SIZES.map((fs) => (
            <SoftButton
              key={fs.value}
              variant={settings.fontSize === fs.value ? "accent" : "neutral"}
              onClick={() => update({ fontSize: fs.value })}
            >
              {fs.label}
            </SoftButton>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={settings.highContrast}
          onChange={(e) => update({ highContrast: e.target.checked })}
          className="h-4 w-4 rounded"
        />
        High Contrast Mode
      </label>

      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={settings.reducedMotion}
          onChange={(e) => update({ reducedMotion: e.target.checked })}
          className="h-4 w-4 rounded"
        />
        Reduced Motion
      </label>

      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={settings.dyslexiaFont}
          onChange={(e) => update({ dyslexiaFont: e.target.checked })}
          className="h-4 w-4 rounded"
        />
        Dyslexia-Friendly Font
      </label>

      <SoftButton variant="ghost" onClick={reset}>Reset to Defaults</SoftButton>
    </SoftCard>
  );
}

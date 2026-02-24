"use client";

type TabItem<T extends string> = {
  id: T;
  label: string;
  count?: number;
};

type SoftTabBarProps<T extends string> = {
  value: T;
  tabs: Array<TabItem<T>>;
  onChange: (next: T) => void;
  ariaLabel: string;
  className?: string;
};

function joinClasses(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function SoftTabBar<T extends string>({
  value,
  tabs,
  onChange,
  ariaLabel,
  className,
}: SoftTabBarProps<T>) {
  return (
    <nav
      aria-label={ariaLabel}
      className={joinClasses(
        "ui-soft-card flex items-center gap-2 overflow-x-auto p-2",
        className,
      )}
    >
      {tabs.map((tab) => {
        const selected = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={joinClasses(
              "ui-soft-tab-pill ui-focus-ring inline-flex min-h-11 items-center gap-2 border px-4 py-2 text-sm font-semibold whitespace-nowrap",
              selected
                ? "border-transparent bg-accent text-white"
                : "border-border bg-surface-muted text-foreground hover:bg-surface",
            )}
          >
            <span>{tab.label}</span>
            {typeof tab.count === "number" ? (
              <span className={joinClasses(
                "rounded-full px-2 py-0.5 text-xs font-bold",
                selected ? "bg-white/20 text-white" : "bg-white text-zinc-700",
              )}>
                {tab.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}


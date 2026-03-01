import type { ReactNode } from "react";
import ContextualBreadcrumbs, { type BreadcrumbItem } from "@/app/components/contextual-breadcrumbs";

type HeaderStat = {
  label: string;
  value: string | number;
};

function joinClassNames(...parts: Array<string | null | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  stats,
  actions,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  stats?: HeaderStat[];
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={joinClassNames("space-y-2", className)}>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <ContextualBreadcrumbs items={breadcrumbs} />
      ) : null}
      <div className="flex items-start justify-between gap-3">
        <div>
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{eyebrow}</p>
          ) : null}
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{title}</h1>
          {description ? <p className="mt-1 max-w-2xl text-sm text-zinc-600">{description}</p> : null}
          {stats && stats.length > 0 ? (
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              {stats.map((stat) => (
                <span key={stat.label}>
                  <span className="font-semibold text-zinc-700">{stat.value}</span>{" "}
                  <span>{stat.label}</span>
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
      {children}
    </header>
  );
}

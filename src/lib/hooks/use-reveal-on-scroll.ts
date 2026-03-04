"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a container and adds `.is-visible`
 * to each `.reveal-on-scroll` child when it enters the viewport.
 *
 * @param threshold   fraction of element visible to trigger (default 0.12)
 * @param rootMargin  observer root margin (default "0px 0px -40px 0px")
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = container.querySelectorAll<HTMLElement>(".reveal-on-scroll");

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

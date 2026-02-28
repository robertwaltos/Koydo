"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  /** Delay in ms before the animation triggers (for staggering siblings) */
  delay?: number;
  className?: string;
};

/**
 * Wraps children in an element that fades + slides up when scrolled into view.
 * Uses IntersectionObserver for performance. Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "reduced");

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    // Respect reduced motion by skipping observer and rendering in visible state.

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

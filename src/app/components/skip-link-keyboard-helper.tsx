"use client";

import { useEffect } from "react";

const SKIP_LINK_SELECTOR = 'a.app-skip-link[href="#app-main-content"]';

function shouldRouteFirstTabToSkipLink() {
  const activeElement = document.activeElement;
  if (!activeElement || activeElement === document.body || activeElement === document.documentElement) {
    return true;
  }
  if (!(activeElement instanceof HTMLElement)) return false;
  if (activeElement.isContentEditable) return false;
  const tag = activeElement.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select" || tag === "button") {
    return false;
  }
  return false;
}

export default function SkipLinkKeyboardHelper() {
  useEffect(() => {
    document.documentElement.setAttribute("data-skip-link-helper", "ready");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      if (!shouldRouteFirstTabToSkipLink()) {
        return;
      }

      const skipLink = document.querySelector<HTMLAnchorElement>(SKIP_LINK_SELECTOR);
      if (!skipLink) {
        return;
      }

      event.preventDefault();
      skipLink.focus();
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.documentElement.removeAttribute("data-skip-link-helper");
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, []);

  return null;
}

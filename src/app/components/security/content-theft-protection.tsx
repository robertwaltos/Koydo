"use client";

import { useEffect } from "react";

export default function ContentTheftProtection() {
  useEffect(() => {
    // 1. Prevent Right Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click on inputs and textareas so users can paste/spellcheck
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      e.preventDefault();
    };

    // 2. Prevent Keyboard Shortcuts for Copy, Print, and Inspect
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        // ctrl+c / cmd+c
        (e.ctrlKey || e.metaKey) && e.key === "c" ||
        // ctrl+p / cmd+p (Print)
        (e.ctrlKey || e.metaKey) && e.key === "p" ||
        // ctrl+s / cmd+s (Save Page)
        (e.ctrlKey || e.metaKey) && e.key === "s" ||
        // ctrl+u / cmd+u (View Source)
        (e.ctrlKey || e.metaKey) && e.key === "u" ||
        // F12 (View Source)
        e.key === "F12" ||
        // ctrl+shift+i / cmd+option+i (DevTools)
        (e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I" ||
        (e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "i"
      ) {
        // Exclude copy command if they are actively focused in a text input
        if (
          e.key === "c" && 
          (document.activeElement instanceof HTMLInputElement || 
           document.activeElement instanceof HTMLTextAreaElement)
        ) {
          return;
        }
        e.preventDefault();
      }
    };

    // 3. Prevent Dragging Images
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}

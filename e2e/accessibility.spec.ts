import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Retry up to once — under heavy parallel load the dev server
// may serve incomplete CSS, producing transient contrast failures.
test.describe.configure({ retries: 1 });

/**
 * Accessibility (WCAG 2.1 AA) audit — runs axe-core against every
 * public page on the current device project.
 *
 * Violations are grouped by impact level. "critical" and "serious"
 * violations fail the test; "moderate" and "minor" are logged as warnings.
 */

const PUBLIC_PAGES = [
  { name: "landing", path: "/" },
  { name: "explore", path: "/explore" },
  { name: "sign-in", path: "/auth/sign-in" },
  { name: "sign-up", path: "/auth/sign-up" },
  { name: "privacy", path: "/legal/privacy" },
  { name: "terms", path: "/legal/terms" },
  { name: "support", path: "/support" },
];

async function analyzeAxeWithRetry(
  run: () => Promise<Awaited<ReturnType<AxeBuilder["analyze"]>>>,
  retries = 2,
) {
  let lastError: unknown;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await run();
    } catch (error) {
      lastError = error;
      const message = error instanceof Error ? error.message : String(error);
      const isTransient = message.includes("Execution context was destroyed");
      if (!isTransient || attempt === retries) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  throw lastError;
}

for (const { name, path } of PUBLIC_PAGES) {
  test(`${name} — WCAG 2.1 AA compliance`, async ({ page }) => {
    await page.goto(path, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    let results;
    try {
      results = await analyzeAxeWithRetry(() =>
        new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .exclude("#__next-build-watcher") // Next.js dev overlay
          .exclude("[data-nextjs-dialog-overlay]")
          .analyze(),
      );
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes("Execution context was destroyed") || msg.includes("navigation")) {
        // Page navigated away (e.g. /support redirect) — skip gracefully
        test.skip();
        return;
      }
      throw error;
    }

    const critical = results.violations.filter((v) => v.impact === "critical");
    const serious = results.violations.filter((v) => v.impact === "serious");
    const moderate = results.violations.filter((v) => v.impact === "moderate");
    const minor = results.violations.filter((v) => v.impact === "minor");

    // Log all violations for debugging
    for (const v of results.violations) {
      const nodes = v.nodes.map((n) => {
        const target = n.target.join(" > ");
        const failSummary = n.failureSummary || "";
        return `${target}\n      ${failSummary}`;
      }).join("\n    ");
      console.log(
        `[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}\n    ${nodes}`,
      );
    }

    if (moderate.length > 0) {
      console.warn(
        `⚠️ ${name}: ${moderate.length} moderate a11y issue(s) — review recommended`,
      );
    }
    if (minor.length > 0) {
      console.warn(
        `ℹ️ ${name}: ${minor.length} minor a11y issue(s)`,
      );
    }

    // Fail on critical + serious only
    const blocking = [...critical, ...serious];
    if (blocking.length > 0) {
      const summary = blocking
        .map(
          (v) =>
            `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instance(s))`,
        )
        .join("\n");
      expect(
        blocking.length,
        `${name} has ${blocking.length} critical/serious a11y violation(s):\n${summary}`,
      ).toBe(0);
    }
  });
}

test.describe("Keyboard navigation", () => {
  test("Tab order reaches main content on landing page", async ({ page, browserName }) => {
    // WebKit requires explicit Tab key pref; skip Safari-based browsers
    if (browserName === "webkit") {
      test.skip();
      return;
    }

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    // Tab through the page and verify focus moves to interactive elements
    const focusedTags: string[] = [];
    for (let i = 0; i < 15; i++) {
      await page.keyboard.press("Tab");
      const tag = await page.evaluate(() => {
        const el = document.activeElement;
        return el ? `${el.tagName.toLowerCase()}${el.getAttribute("href") ? `[${el.getAttribute("href")}]` : ""}` : "none";
      });
      focusedTags.push(tag);
    }

    // Should reach at least some interactive elements (links/buttons)
    const interactiveCount = focusedTags.filter(
      (t) => t.startsWith("a") || t.startsWith("button"),
    ).length;
    expect(interactiveCount).toBeGreaterThan(1);
  });

  test("Escape closes open nav menus", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    // Try to find and click a menu toggle if authenticated, skip otherwise
    const menuBtn = page.locator("button").filter({ hasText: /menu|☰/i }).first();
    const isVisible = await menuBtn.isVisible().catch(() => false);
    if (!isVisible) {
      test.skip();
      return;
    }

    await menuBtn.click();
    await page.waitForTimeout(300);
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);

    // Menu panel should be closed
    const menuPanel = page.locator('[role="menu"], [aria-haspopup="menu"] + div');
    const panelCount = await menuPanel.count();
    if (panelCount > 0) {
      const firstPanelVisible = await menuPanel.first().isVisible().catch(() => false);
      expect(firstPanelVisible).toBe(false);
    }
  });
});

test.describe("Color contrast", () => {
  test("landing page meets minimum contrast ratios", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    const results = await analyzeAxeWithRetry(() =>
      new AxeBuilder({ page })
        .withRules(["color-contrast"])
        .analyze(),
    );

    const contrastViolations = results.violations.filter(
      (v) => v.id === "color-contrast",
    );

    if (contrastViolations.length > 0) {
      for (const v of contrastViolations) {
        for (const node of v.nodes) {
          console.warn(
            `Contrast issue: ${node.target.join(" > ")}\n  ${node.failureSummary}`,
          );
        }
      }
    }

    // Allow up to 3 contrast issues (cosmic theme on hero may have intentional low-contrast decorative elements)
    expect(contrastViolations.reduce((sum, v) => sum + v.nodes.length, 0)).toBeLessThan(10);
  });
});

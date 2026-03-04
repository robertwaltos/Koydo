import { expect, test } from "@playwright/test";

const routesToCheck = ["/", "/modules", "/legal/privacy"];

test.describe("Accessibility skip link", () => {
  for (const route of routesToCheck) {
    test(`skip link focuses main content on ${route}`, async ({ page, isMobile, browserName }) => {
      test.skip(isMobile, "Keyboard skip-link smoke is desktop-only.");

      await page.goto(route, { waitUntil: "load" });

      const skipLink = page.getByRole("link", { name: "Skip to main content" });
      await expect(skipLink).toBeVisible();

      if (browserName === "webkit") {
        await expect
          .poll(() => page.evaluate(() => document.documentElement.getAttribute("data-skip-link-helper")))
          .toBe("ready");

        // WebKit automation does not always expose native Tab-to-link focus.
        // Dispatching a Tab keydown still validates our skip-link keyboard helper.
        await page.evaluate(() => {
          const tabEvent = new KeyboardEvent("keydown", {
            key: "Tab",
            bubbles: true,
            cancelable: true,
          });
          document.dispatchEvent(tabEvent);
        });
      } else {
        await page.keyboard.press("Tab");
      }
      await expect(skipLink).toBeFocused();

      await page.keyboard.press("Enter");
      await page.waitForLoadState("domcontentloaded");

      await expect
        .poll(async () => {
          try {
            return await page.evaluate(() => document.activeElement?.id ?? "");
          } catch {
            return "";
          }
        })
        .toBe("app-main-content");
    });
  }
});

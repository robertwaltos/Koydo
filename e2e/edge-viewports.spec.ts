import { test, expect } from "@playwright/test";

/**
 * Edge-case viewport tests — Galaxy Fold (280px inner screen),
 * ultra-wide (2560px), and landscape phones.
 */

test.describe("Galaxy Fold (280px)", () => {
  test.skip(({ browserName }) => browserName === "firefox", "isMobile not supported in Firefox");
  test.use({
    viewport: { width: 280, height: 653 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });

  test("landing page renders without overflow", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);

    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(
      scrollWidth - clientWidth,
      `Overflow of ${scrollWidth - clientWidth}px on 280px viewport`,
    ).toBeLessThanOrEqual(2);
  });

  test("nav is usable at 280px", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);

    const header = page.locator("header").first();
    await expect(header).toBeVisible();

    // Logo should be visible
    const logo = page.locator('img[alt="Koydo logo"]');
    await expect(logo).toBeVisible();
  });

  test("explore page renders without overflow", async ({ page, context }) => {
    await context.clearCookies();
    await page.goto("/explore", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);

    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(scrollWidth - clientWidth).toBeLessThanOrEqual(2);
  });
});

test.describe("Ultra-wide (2560px)", () => {
  test.use({
    viewport: { width: 2560, height: 1440 },
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
  });

  test("landing page content is centered, not stretched", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);

    // Content should be constrained to max-w-7xl (1280px)
    const maxWidthContainer = page.locator(".max-w-7xl").first();
    const isVisible = await maxWidthContainer.isVisible().catch(() => false);
    if (isVisible) {
      const box = await maxWidthContainer.boundingBox();
      expect(box).toBeTruthy();
      if (box) {
        // Should not stretch to full 2560px
        expect(box.width).toBeLessThan(1400);
      }
    }
  });

  test("no horizontal overflow at 2560px", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(scrollWidth - clientWidth).toBeLessThanOrEqual(2);
  });
});

test.describe("Landscape phone (iPhone SE)", () => {
  test.skip(({ browserName }) => browserName === "firefox", "isMobile not supported in Firefox");
  test.use({
    viewport: { width: 667, height: 375 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  test("landing page renders in landscape without overflow", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(scrollWidth - clientWidth).toBeLessThanOrEqual(2);
  });

  test("explore cards are visible in landscape", async ({ page, context }) => {
    await context.clearCookies();
    await page.goto("/explore", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);

    const cards = page.locator("a[href*='stage=']");
    const firstCard = cards.first();
    await firstCard.waitFor({ state: "visible", timeout: 10_000 });
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe("Landscape tablet (Galaxy Tab)", () => {
  test.skip(({ browserName }) => browserName === "firefox", "isMobile not supported in Firefox");
  test.use({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  test("landing page no overflow in landscape tablet", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(scrollWidth - clientWidth).toBeLessThanOrEqual(2);
  });
});

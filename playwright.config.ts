import { defineConfig, devices } from "@playwright/test";

/**
 * Koydo — Multi-Device Visual Regression & E2E Config
 *
 * Runs every test across 12 device profiles covering phones, tablets,
 * laptops and desktops on Chromium, Firefox, and WebKit engines.
 *
 * Usage:
 *   npx playwright test                    # all devices
 *   npx playwright test --project="iPhone 15"
 *   npx playwright test --project="iPad Pro 12.9"
 *   npx playwright test --ui               # interactive mode
 *   npx playwright test --update-snapshots  # refresh baselines
 */

const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";

export default defineConfig({
  testDir: "./e2e",
  outputDir: "./e2e/test-results",
  timeout: 30_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
      animations: "disabled",
    },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ["html", { outputFolder: "./e2e/report", open: "never" }],
    ["list"],
  ],
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  /* ── Device Projects ───────────────────────────────────────── */
  projects: [
    // ── Phones ──────────────────────────────────────────────
    {
      name: "iPhone SE",
      use: { ...devices["iPhone SE"] },
    },
    {
      name: "iPhone 15",
      use: { ...devices["iPhone 15"] },
    },
    {
      name: "iPhone 15 Pro Max",
      use: { ...devices["iPhone 15 Pro Max"] },
    },
    {
      name: "Pixel 7",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "Galaxy S9+",
      use: { ...devices["Galaxy S9+"] },
    },

    // ── Tablets ─────────────────────────────────────────────
    {
      name: "iPad Mini",
      use: { ...devices["iPad Mini"] },
    },
    {
      name: "iPad Pro 11",
      use: { ...devices["iPad Pro 11"] },
    },
    {
      name: "iPad Pro 11 landscape",
      use: { ...devices["iPad Pro 11 landscape"] },
    },
    {
      name: "iPad Pro 12.9",
      use: {
        // Custom — Playwright doesn't ship a 12.9" preset
        viewport: { width: 1024, height: 1366 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        defaultBrowserType: "webkit",
      },
    },
    {
      name: "Galaxy Tab S8",
      use: {
        viewport: { width: 800, height: 1280 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        defaultBrowserType: "chromium",
      },
    },

    // ── Desktop / Laptop ────────────────────────────────────
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Desktop Firefox",
      use: {
        ...devices["Desktop Firefox"],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Desktop Safari",
      use: {
        ...devices["Desktop Safari"],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Laptop 1280",
      use: {
        viewport: { width: 1280, height: 720 },
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: "chromium",
      },
    },
  ],

  /* ── Dev Server ────────────────────────────────────────────── */
  webServer: {
    command: "npm run dev",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

import { describe, it, expect } from "vitest";
import {
  getTierFromAge,
  getAgeTierConfig,
  AGE_TIER_CONFIGS,
  type AgeTier,
} from "@/lib/safety/age-tier";

describe("Age Tier System", () => {
  describe("getTierFromAge", () => {
    it.each([
      [2, "little"],
      [3, "little"],
      [5, "little"],
      [6, "explorer"],
      [10, "explorer"],
      [11, "teen"],
      [12, "teen"],
      [16, "teen"],
      [17, "senior"],
      [18, "adult"],
      [25, "adult"],
      [65, "adult"],
    ] as [number, AgeTier][])("age %i maps to tier %s", (age, expected) => {
      expect(getTierFromAge(age)).toBe(expected);
    });

    it("defaults to little for ages below 3 (safety first)", () => {
      expect(getTierFromAge(0)).toBe("little");
      expect(getTierFromAge(1)).toBe("little");
      expect(getTierFromAge(-1)).toBe("little");
    });
  });

  describe("COPPA compliance — child tiers", () => {
    it("little tier (3-5) blocks freeform chat", () => {
      expect(AGE_TIER_CONFIGS.little.allowFreeformChat).toBe(false);
    });

    it("little tier (3-5) blocks external links", () => {
      expect(AGE_TIER_CONFIGS.little.allowExternalLinks).toBe(false);
    });

    it("little tier (3-5) blocks purchases", () => {
      expect(AGE_TIER_CONFIGS.little.allowPurchases).toBe(false);
    });

    it("little tier (3-5) has strictest content filter", () => {
      expect(AGE_TIER_CONFIGS.little.contentFilter).toBe(2);
    });

    it("explorer tier (6-10) blocks freeform chat", () => {
      expect(AGE_TIER_CONFIGS.explorer.allowFreeformChat).toBe(false);
    });

    it("explorer tier (6-10) blocks external links", () => {
      expect(AGE_TIER_CONFIGS.explorer.allowExternalLinks).toBe(false);
    });

    it("explorer tier (6-10) blocks purchases", () => {
      expect(AGE_TIER_CONFIGS.explorer.allowPurchases).toBe(false);
    });

    it("explorer tier (6-10) has strictest content filter", () => {
      expect(AGE_TIER_CONFIGS.explorer.contentFilter).toBe(2);
    });

    it("pre-teen tiers (under 11) block freeform chat at config level", () => {
      for (let age = 0; age <= 10; age++) {
        const config = getAgeTierConfig(age);
        expect(config.allowFreeformChat).toBe(false);
      }
    });

    // Note: ages 11-12 are in the "teen" tier which allows chat in base config,
    // but use-age-tier.ts overrides this with isCoppaChild: age < 13.
    // The COPPA override is tested in use-age-tier tests.

    it("pre-teen tiers (under 11) block external links at config level", () => {
      for (let age = 0; age <= 10; age++) {
        const config = getAgeTierConfig(age);
        expect(config.allowExternalLinks).toBe(false);
      }
    });
  });

  describe("teen and adult tiers", () => {
    it("teen tier allows freeform chat (11+)", () => {
      expect(AGE_TIER_CONFIGS.teen.allowFreeformChat).toBe(true);
    });

    it("adult tier has no content filter", () => {
      expect(AGE_TIER_CONFIGS.adult.contentFilter).toBe(0);
    });

    it("only senior and adult tiers allow purchases", () => {
      expect(AGE_TIER_CONFIGS.little.allowPurchases).toBe(false);
      expect(AGE_TIER_CONFIGS.explorer.allowPurchases).toBe(false);
      expect(AGE_TIER_CONFIGS.teen.allowPurchases).toBe(false);
      expect(AGE_TIER_CONFIGS.senior.allowPurchases).toBe(true);
      expect(AGE_TIER_CONFIGS.adult.allowPurchases).toBe(true);
    });
  });
});

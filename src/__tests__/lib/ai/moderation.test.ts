import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock external dependencies before importing the module
vi.mock("@/lib/supabase/admin", () => ({
  createSupabaseAdminClient: () => ({
    from: () => ({ insert: vi.fn().mockResolvedValue({ error: null }) }),
  }),
}));

vi.mock("@/lib/settings/resolve-limit", () => ({
  resolveSetting: vi.fn(),
}));

vi.mock("@/lib/admin/alerts", () => ({
  createAdminAlert: vi.fn().mockResolvedValue(undefined),
}));

import { moderateContent } from "@/lib/ai/moderation";
import { resolveSetting } from "@/lib/settings/resolve-limit";

const mockedResolveSetting = vi.mocked(resolveSetting);

describe("Content Moderation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("blocks content when provider is unknown (fail-closed)", async () => {
    mockedResolveSetting.mockResolvedValue("unknown_provider");

    const result = await moderateContent("test input", "user-123", "tutor");

    expect(result.flagged).toBe(true);
    expect(result.action).toBe("blocked");
    expect(result.provider).toBe("fail_closed");
  });

  it("allows content with noop provider", async () => {
    mockedResolveSetting.mockResolvedValue("noop");

    const result = await moderateContent("test input", "user-123", "tutor");

    expect(result.flagged).toBe(false);
    expect(result.action).toBe("none");
    expect(result.provider).toBe("noop");
  });

  it("blocks content when OpenAI API key is missing (fail-closed)", async () => {
    const originalKey = process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_API_KEY;

    mockedResolveSetting.mockResolvedValue("openai");

    const result = await moderateContent("test input", "user-123", "companion");

    expect(result.flagged).toBe(true);
    expect(result.action).toBe("blocked");
    expect(result.provider).toBe("fail_closed");

    // Restore
    if (originalKey) process.env.OPENAI_API_KEY = originalKey;
  });

  it("blocks content when OpenAI API returns error (fail-closed)", async () => {
    process.env.OPENAI_API_KEY = "test-key";
    mockedResolveSetting.mockResolvedValue("openai");

    // Mock fetch to simulate API error
    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    const result = await moderateContent("test input", "user-123", "chat");

    expect(result.flagged).toBe(true);
    expect(result.action).toBe("blocked");

    globalThis.fetch = originalFetch;
    delete process.env.OPENAI_API_KEY;
  });

  it("blocks content when OpenAI API is unreachable (fail-closed)", async () => {
    process.env.OPENAI_API_KEY = "test-key";
    mockedResolveSetting.mockResolvedValue("openai");

    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const result = await moderateContent("test input", "user-123", "chat");

    expect(result.flagged).toBe(true);
    expect(result.action).toBe("blocked");

    globalThis.fetch = originalFetch;
    delete process.env.OPENAI_API_KEY;
  });

  it("passes clean content through when OpenAI returns unflagged", async () => {
    process.env.OPENAI_API_KEY = "test-key";
    mockedResolveSetting.mockResolvedValue("openai");

    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [{ flagged: false, categories: {} }],
        }),
    });

    const result = await moderateContent("hello world", "user-123", "tutor");

    expect(result.flagged).toBe(false);
    expect(result.action).toBe("none");
    expect(result.provider).toBe("openai");

    globalThis.fetch = originalFetch;
    delete process.env.OPENAI_API_KEY;
  });

  it("blocks flagged content from OpenAI", async () => {
    process.env.OPENAI_API_KEY = "test-key";
    mockedResolveSetting.mockResolvedValue("openai");

    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [
            {
              flagged: true,
              categories: { violence: true, "sexual/minors": true },
            },
          ],
        }),
    });

    const result = await moderateContent("bad content", "user-123", "chat");

    expect(result.flagged).toBe(true);
    expect(result.action).toBe("blocked");
    expect(result.categories).toEqual({ violence: true, "sexual/minors": true });

    globalThis.fetch = originalFetch;
    delete process.env.OPENAI_API_KEY;
  });
});

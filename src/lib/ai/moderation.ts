/**
 * AI Content Moderation
 *
 * Provider-based moderation system with runtime-switchable providers.
 * Default: OpenAI Moderation API. Configurable via app_settings.
 *
 * Logs all moderation checks to `ai_moderation_log` for audit.
 */

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { resolveSetting } from "@/lib/settings/resolve-limit";
import { createAdminAlert } from "@/lib/admin/alerts";

// ── Types ────────────────────────────────────────────────────────────────────

export type ModerationResult = {
  flagged: boolean;
  categories: Record<string, boolean>;
  provider: string;
  action: "none" | "blocked" | "warned" | "flagged_for_review";
};

export interface ModerationProvider {
  name: string;
  moderate(text: string): Promise<ModerationResult>;
}

// ── OpenAI Moderation Provider ───────────────────────────────────────────────

class OpenAIModerationProvider implements ModerationProvider {
  name = "openai";
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async moderate(text: string): Promise<ModerationResult> {
    try {
      const response = await fetch("https://api.openai.com/v1/moderations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: text }),
      });

      if (!response.ok) {
        console.error("[moderation] OpenAI API error:", response.status);
        return { flagged: false, categories: {}, provider: this.name, action: "none" };
      }

      const data = await response.json() as {
        results: Array<{
          flagged: boolean;
          categories: Record<string, boolean>;
        }>;
      };

      const result = data.results?.[0];
      if (!result) {
        return { flagged: false, categories: {}, provider: this.name, action: "none" };
      }

      // For children's EdTech, we block on ANY flagged category
      const action = result.flagged ? "blocked" : "none";

      return {
        flagged: result.flagged,
        categories: result.categories,
        provider: this.name,
        action,
      };
    } catch (err) {
      console.error("[moderation] OpenAI moderation failed:", err);
      // Fail open — don't block on moderation service failure
      return { flagged: false, categories: {}, provider: this.name, action: "none" };
    }
  }
}

// ── No-op Provider (for development/testing) ─────────────────────────────────

class NoopModerationProvider implements ModerationProvider {
  name = "noop";

  async moderate(): Promise<ModerationResult> {
    return { flagged: false, categories: {}, provider: this.name, action: "none" };
  }
}

// ── Provider Registry ────────────────────────────────────────────────────────

function getProvider(providerName: string): ModerationProvider {
  switch (providerName) {
    case "openai": {
      const apiKey = process.env.OPENAI_API_KEY ?? "";
      if (!apiKey) {
        console.warn("[moderation] OPENAI_API_KEY not set, using noop provider");
        return new NoopModerationProvider();
      }
      return new OpenAIModerationProvider(apiKey);
    }
    case "noop":
      return new NoopModerationProvider();
    default:
      console.warn(`[moderation] Unknown provider "${providerName}", using noop`);
      return new NoopModerationProvider();
  }
}

// ── Main Entry Point ─────────────────────────────────────────────────────────

/**
 * Moderate user input text before processing.
 * Logs all checks to ai_moderation_log.
 * Creates admin alert on flagged content.
 *
 * @param text    - The user input to moderate
 * @param userId  - The user who sent the message
 * @param channel - The channel: 'companion', 'tutor', or 'chat'
 */
export async function moderateContent(
  text: string,
  userId: string,
  channel: "companion" | "tutor" | "chat",
): Promise<ModerationResult> {
  const providerName = await resolveSetting<string>("moderation_provider");
  const provider = getProvider(providerName);

  const result = await provider.moderate(text);

  // Log to audit table (fire-and-forget)
  try {
    const admin = createSupabaseAdminClient();
    await admin.from("ai_moderation_log").insert({
      user_id: userId,
      channel,
      input_text: text.slice(0, 2000), // cap stored text
      flagged: result.flagged,
      categories: result.categories,
      provider: result.provider,
      action_taken: result.action,
    });
  } catch (err) {
    console.error("[moderation] Failed to log moderation check:", err);
  }

  // Alert admins on flagged content
  if (result.flagged) {
    try {
      await createAdminAlert({
        severity: "warning",
        category: "ai_moderation_flag",
        message: `Content flagged in ${channel} channel for user ${userId}`,
        metadata: {
          userId,
          channel,
          categories: result.categories,
          action: result.action,
          textPreview: text.slice(0, 100),
        },
      });
    } catch {
      // Don't let alert failure block the response
    }
  }

  return result;
}

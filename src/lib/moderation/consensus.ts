import type { SupabaseClient } from "@supabase/supabase-js";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export type ModerationAction =
  | "allow"
  | "review"
  | "modify"
  | "rewrite"
  | "replace"
  | "remove"
  | "delete"
  | "unavailable";
type ConsensusAction = Exclude<ModerationAction, "unavailable">;

export type ModerationProvider = "grok" | "openai" | "claude" | "gemini";
export type ModerationVoteStatus = "completed" | "error" | "timeout" | "unavailable";

export type ModerationVote = {
  provider: ModerationProvider;
  modelName: string;
  status: ModerationVoteStatus;
  verdict: ModerationAction;
  confidence: number | null;
  rationale: string;
  rawPayload: Record<string, unknown>;
  latencyMs: number;
};

export type ModerationConsensusResult = {
  consensusAction: ConsensusAction;
  confidence: number;
  reason: string;
  votes: ModerationVote[];
  countsByAction: Record<string, number>;
  availableVotes: number;
  requiredVotes: number;
};

type ProviderConfig = {
  provider: ModerationProvider;
  modelName: string;
  endpoint: string | null;
  enabled: boolean;
};

function safeJsonParse(input: string) {
  try {
    return JSON.parse(input) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function clamp01(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

function normalizeAction(value: unknown): ModerationAction {
  const normalized = String(value ?? "").trim().toLowerCase();
  if (
    normalized === "allow"
    || normalized === "review"
    || normalized === "modify"
    || normalized === "rewrite"
    || normalized === "replace"
    || normalized === "remove"
    || normalized === "delete"
    || normalized === "unavailable"
  ) {
    return normalized;
  }
  return "review";
}

function normalizeConfidence(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? clamp01(parsed) : null;
}

function moderationPrompt({
  content,
  requestedAction,
}: {
  content: string;
  requestedAction?: string | null;
}) {
  return [
    "You are a strict policy moderation reviewer.",
    "Return only compact JSON: {\"verdict\":\"allow|review|modify|rewrite|replace|remove|delete\",\"confidence\":0..1,\"rationale\":\"...\"}.",
    "Use 'review' if uncertain.",
    requestedAction ? `Requested action hint: ${requestedAction}` : "No requested action hint.",
    "Content:",
    content.slice(0, 12000),
  ].join("\n");
}

async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit,
  timeoutMs: number,
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(input, {
      ...init,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeout);
  }
}

function providerConfigs(): ProviderConfig[] {
  return [
    {
      provider: "grok",
      modelName: serverEnv.GROK_REASONING_MODEL || serverEnv.GROK_MODEL,
      endpoint: "https://api.x.ai/v1/chat/completions",
      enabled: Boolean(serverEnv.GROK_API_KEY),
    },
    {
      provider: "openai",
      modelName: serverEnv.OPENAI_MODERATION_REVIEW_MODEL,
      endpoint: "https://api.openai.com/v1/responses",
      enabled: Boolean(serverEnv.OPENAI_API_KEY),
    },
    {
      provider: "claude",
      modelName: serverEnv.ANTHROPIC_MODEL,
      endpoint: "https://api.anthropic.com/v1/messages",
      enabled: Boolean(serverEnv.ANTHROPIC_API_KEY),
    },
    {
      provider: "gemini",
      modelName: serverEnv.GEMINI_MODEL,
      endpoint: serverEnv.GEMINI_API_KEY
        ? `https://generativelanguage.googleapis.com/v1beta/models/${serverEnv.GEMINI_MODEL}:generateContent?key=${serverEnv.GEMINI_API_KEY}`
        : null,
      enabled: Boolean(serverEnv.GEMINI_API_KEY),
    },
  ];
}

async function invokeGrok(prompt: string, timeoutMs: number): Promise<ModerationVote> {
  const startedAt = Date.now();
  if (!serverEnv.GROK_API_KEY) {
    return {
      provider: "grok",
      modelName: serverEnv.GROK_REASONING_MODEL || serverEnv.GROK_MODEL,
      status: "unavailable",
      verdict: "unavailable",
      confidence: null,
      rationale: "GROK_API_KEY is not configured.",
      rawPayload: {},
      latencyMs: 0,
    };
  }

  try {
    const response = await fetchWithTimeout(
      "https://api.x.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${serverEnv.GROK_API_KEY}`,
        },
        body: JSON.stringify({
          model: serverEnv.GROK_REASONING_MODEL || serverEnv.GROK_MODEL,
          temperature: 0.1,
          messages: [
            { role: "system", content: "Return JSON only." },
            { role: "user", content: prompt },
          ],
        }),
      },
      timeoutMs,
    );
    const payload = await response.json().catch(() => ({}));
    const responseText = String(payload?.choices?.[0]?.message?.content ?? "");
    const parsed = safeJsonParse(responseText);
    return {
      provider: "grok",
      modelName: serverEnv.GROK_REASONING_MODEL || serverEnv.GROK_MODEL,
      status: response.ok ? "completed" : "error",
      verdict: normalizeAction(parsed.verdict),
      confidence: normalizeConfidence(parsed.confidence),
      rationale: String(parsed.rationale ?? response.statusText ?? "No rationale."),
      rawPayload: safeJsonParse(JSON.stringify(payload)),
      latencyMs: Date.now() - startedAt,
    };
  } catch (error) {
    const timeout = error instanceof DOMException && error.name === "AbortError";
    return {
      provider: "grok",
      modelName: serverEnv.GROK_REASONING_MODEL || serverEnv.GROK_MODEL,
      status: timeout ? "timeout" : "error",
      verdict: timeout ? "review" : "unavailable",
      confidence: null,
      rationale: timeout ? "Request timed out." : (error instanceof Error ? error.message : "Unknown error."),
      rawPayload: {},
      latencyMs: Date.now() - startedAt,
    };
  }
}

async function invokeOpenAi(prompt: string, timeoutMs: number): Promise<ModerationVote> {
  const startedAt = Date.now();
  if (!serverEnv.OPENAI_API_KEY) {
    return {
      provider: "openai",
      modelName: serverEnv.OPENAI_MODERATION_REVIEW_MODEL,
      status: "unavailable",
      verdict: "unavailable",
      confidence: null,
      rationale: "OPENAI_API_KEY is not configured.",
      rawPayload: {},
      latencyMs: 0,
    };
  }

  try {
    const response = await fetchWithTimeout(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: serverEnv.OPENAI_MODERATION_REVIEW_MODEL,
          input: prompt,
          temperature: 0.1,
        }),
      },
      timeoutMs,
    );
    const payload = await response.json().catch(() => ({}));
    const outputText = String(payload?.output_text ?? payload?.output?.[0]?.content?.[0]?.text ?? "");
    const parsed = safeJsonParse(outputText);
    return {
      provider: "openai",
      modelName: serverEnv.OPENAI_MODERATION_REVIEW_MODEL,
      status: response.ok ? "completed" : "error",
      verdict: normalizeAction(parsed.verdict),
      confidence: normalizeConfidence(parsed.confidence),
      rationale: String(parsed.rationale ?? response.statusText ?? "No rationale."),
      rawPayload: safeJsonParse(JSON.stringify(payload)),
      latencyMs: Date.now() - startedAt,
    };
  } catch (error) {
    const timeout = error instanceof DOMException && error.name === "AbortError";
    return {
      provider: "openai",
      modelName: serverEnv.OPENAI_MODERATION_REVIEW_MODEL,
      status: timeout ? "timeout" : "error",
      verdict: timeout ? "review" : "unavailable",
      confidence: null,
      rationale: timeout ? "Request timed out." : (error instanceof Error ? error.message : "Unknown error."),
      rawPayload: {},
      latencyMs: Date.now() - startedAt,
    };
  }
}

async function invokeClaude(prompt: string, timeoutMs: number): Promise<ModerationVote> {
  const startedAt = Date.now();
  if (!serverEnv.ANTHROPIC_API_KEY) {
    return {
      provider: "claude",
      modelName: serverEnv.ANTHROPIC_MODEL,
      status: "unavailable",
      verdict: "unavailable",
      confidence: null,
      rationale: "ANTHROPIC_API_KEY is not configured.",
      rawPayload: {},
      latencyMs: 0,
    };
  }

  try {
    const response = await fetchWithTimeout(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": serverEnv.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: serverEnv.ANTHROPIC_MODEL,
          max_tokens: 300,
          temperature: 0.1,
          messages: [{ role: "user", content: prompt }],
        }),
      },
      timeoutMs,
    );
    const payload = await response.json().catch(() => ({}));
    const outputText = String(payload?.content?.[0]?.text ?? "");
    const parsed = safeJsonParse(outputText);
    return {
      provider: "claude",
      modelName: serverEnv.ANTHROPIC_MODEL,
      status: response.ok ? "completed" : "error",
      verdict: normalizeAction(parsed.verdict),
      confidence: normalizeConfidence(parsed.confidence),
      rationale: String(parsed.rationale ?? response.statusText ?? "No rationale."),
      rawPayload: safeJsonParse(JSON.stringify(payload)),
      latencyMs: Date.now() - startedAt,
    };
  } catch (error) {
    const timeout = error instanceof DOMException && error.name === "AbortError";
    return {
      provider: "claude",
      modelName: serverEnv.ANTHROPIC_MODEL,
      status: timeout ? "timeout" : "error",
      verdict: timeout ? "review" : "unavailable",
      confidence: null,
      rationale: timeout ? "Request timed out." : (error instanceof Error ? error.message : "Unknown error."),
      rawPayload: {},
      latencyMs: Date.now() - startedAt,
    };
  }
}

async function invokeGemini(prompt: string, timeoutMs: number): Promise<ModerationVote> {
  const startedAt = Date.now();
  if (!serverEnv.GEMINI_API_KEY) {
    return {
      provider: "gemini",
      modelName: serverEnv.GEMINI_MODEL,
      status: "unavailable",
      verdict: "unavailable",
      confidence: null,
      rationale: "GEMINI_API_KEY is not configured.",
      rawPayload: {},
      latencyMs: 0,
    };
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${serverEnv.GEMINI_MODEL}:generateContent?key=${serverEnv.GEMINI_API_KEY}`;
    const response = await fetchWithTimeout(
      endpoint,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 300,
          },
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
      timeoutMs,
    );
    const payload = await response.json().catch(() => ({}));
    const outputText = String(payload?.candidates?.[0]?.content?.parts?.[0]?.text ?? "");
    const parsed = safeJsonParse(outputText);
    return {
      provider: "gemini",
      modelName: serverEnv.GEMINI_MODEL,
      status: response.ok ? "completed" : "error",
      verdict: normalizeAction(parsed.verdict),
      confidence: normalizeConfidence(parsed.confidence),
      rationale: String(parsed.rationale ?? response.statusText ?? "No rationale."),
      rawPayload: safeJsonParse(JSON.stringify(payload)),
      latencyMs: Date.now() - startedAt,
    };
  } catch (error) {
    const timeout = error instanceof DOMException && error.name === "AbortError";
    return {
      provider: "gemini",
      modelName: serverEnv.GEMINI_MODEL,
      status: timeout ? "timeout" : "error",
      verdict: timeout ? "review" : "unavailable",
      confidence: null,
      rationale: timeout ? "Request timed out." : (error instanceof Error ? error.message : "Unknown error."),
      rawPayload: {},
      latencyMs: Date.now() - startedAt,
    };
  }
}

async function runProviderVote(provider: ModerationProvider, prompt: string, timeoutMs: number) {
  if (provider === "grok") return invokeGrok(prompt, timeoutMs);
  if (provider === "openai") return invokeOpenAi(prompt, timeoutMs);
  if (provider === "claude") return invokeClaude(prompt, timeoutMs);
  return invokeGemini(prompt, timeoutMs);
}

function buildConsensus(votes: ModerationVote[]): ModerationConsensusResult {
  const requiredVotes = Math.max(2, Math.min(4, Math.trunc(serverEnv.MODERATION_CONSENSUS_MIN_MODELS)));
  const threshold = clamp01(serverEnv.MODERATION_CONSENSUS_THRESHOLD);
  const available = votes.filter((vote) => vote.status === "completed" && vote.verdict !== "unavailable");
  const counts = new Map<ConsensusAction, number>();
  const confidenceByAction = new Map<ConsensusAction, number[]>();

  for (const vote of available) {
    const verdict = vote.verdict as ConsensusAction;
    const current = counts.get(verdict) ?? 0;
    counts.set(verdict, current + 1);
    const bucket = confidenceByAction.get(verdict) ?? [];
    if (typeof vote.confidence === "number") {
      bucket.push(vote.confidence);
    }
    confidenceByAction.set(verdict, bucket);
  }

  if (available.length < requiredVotes) {
    return {
      consensusAction: "review",
      confidence: 0,
      reason: `Insufficient model quorum (${available.length}/${requiredVotes}).`,
      votes,
      countsByAction: Object.fromEntries(Array.from(counts.entries()).map(([key, value]) => [key, value])),
      availableVotes: available.length,
      requiredVotes,
    };
  }

  const ranked = Array.from(counts.entries()).sort((left, right) => right[1] - left[1]);
  const [topEntry, secondEntry] = ranked;
  if (!topEntry) {
    return {
      consensusAction: "review",
      confidence: 0,
      reason: "No actionable votes returned.",
      votes,
      countsByAction: {},
      availableVotes: available.length,
      requiredVotes,
    };
  }
  const [topAction, topCount] = topEntry;
  const topRatio = topCount / available.length;
  const secondCount = secondEntry?.[1] ?? 0;
  const confidenceSamples = confidenceByAction.get(topAction) ?? [];
  const averageConfidence = confidenceSamples.length > 0
    ? confidenceSamples.reduce((sum, value) => sum + value, 0) / confidenceSamples.length
    : topRatio;

  const tie = secondCount === topCount;
  if (tie || topRatio < threshold) {
    return {
      consensusAction: "review",
      confidence: clamp01(averageConfidence),
      reason: tie
        ? "Consensus tie between top actions."
        : `Top action ratio ${topRatio.toFixed(3)} is below threshold ${threshold.toFixed(3)}.`,
      votes,
      countsByAction: Object.fromEntries(Array.from(counts.entries()).map(([key, value]) => [key, value])),
      availableVotes: available.length,
      requiredVotes,
    };
  }

  const resolvedAction: ConsensusAction = topAction;
  return {
    consensusAction: resolvedAction,
    confidence: clamp01(averageConfidence),
    reason: `Consensus reached: ${resolvedAction} with ${(topRatio * 100).toFixed(1)}% vote share.`,
    votes,
    countsByAction: Object.fromEntries(Array.from(counts.entries()).map(([key, value]) => [key, value])),
    availableVotes: available.length,
    requiredVotes,
  };
}

export async function runModerationConsensusReview({
  content,
  requestedAction,
}: {
  content: string;
  requestedAction?: string | null;
}) {
  const timeoutMs = Math.max(1000, Math.min(60000, Math.trunc(serverEnv.MODERATION_MODEL_TIMEOUT_MS)));
  const prompt = moderationPrompt({ content, requestedAction });
  const providerList = providerConfigs()
    .filter((provider) => provider.enabled || provider.provider === "openai" || provider.provider === "grok" || provider.provider === "claude" || provider.provider === "gemini")
    .map((provider) => provider.provider);

  const votes = await Promise.all(providerList.map((provider) => runProviderVote(provider, prompt, timeoutMs)));
  return buildConsensus(votes);
}

async function claimModerationJob(admin: SupabaseClient, jobId: string) {
  const nowIso = new Date().toISOString();
  const { data, error } = await admin
    .from("content_moderation_jobs")
    .update({
      status: "running",
      run_started_at: nowIso,
      error: null,
    })
    .eq("id", jobId)
    .eq("status", "queued")
    .select("id,content_text,requested_action,attempt_count,max_attempts,source_ref,account_scope_user_id")
    .maybeSingle<{
      id: string;
      content_text: string;
      requested_action: string | null;
      attempt_count: number;
      max_attempts: number;
      source_ref: string | null;
      account_scope_user_id: string | null;
    }>();
  if (error) throw new Error(error.message);
  return data ?? null;
}

export async function processModerationQueue(
  admin: SupabaseClient,
  options?: { limit?: number },
) {
  const limit = Math.max(1, Math.min(30, Math.trunc(options?.limit ?? 8)));
  const { data: queuedJobs, error } = await admin
    .from("content_moderation_jobs")
    .select("id")
    .eq("status", "queued")
    .order("created_at", { ascending: true })
    .limit(limit);
  if (error) throw new Error(error.message);

  let claimed = 0;
  let completed = 0;
  let failed = 0;
  let stalled = 0;

  for (const row of queuedJobs ?? []) {
    const job = await claimModerationJob(admin, row.id);
    if (!job) continue;
    claimed += 1;

    try {
      const nextAttemptCount = (job.attempt_count ?? 0) + 1;
      const result = await runModerationConsensusReview({
        content: String(job.content_text ?? ""),
        requestedAction: job.requested_action ?? null,
      });
      const { error: voteError } = await admin
        .from("content_moderation_votes")
        .upsert(
          result.votes.map((vote) => ({
            job_id: job.id,
            model_provider: vote.provider,
            model_name: vote.modelName,
            status: vote.status,
            verdict: vote.verdict,
            confidence: vote.confidence,
            rationale: vote.rationale,
            raw_payload: vote.rawPayload,
            latency_ms: vote.latencyMs,
          })),
          {
            onConflict: "job_id,model_provider",
          },
        );
      if (voteError) throw new Error(voteError.message);

      if (result.availableVotes < result.requiredVotes && nextAttemptCount < (job.max_attempts ?? 3)) {
        await admin
          .from("content_moderation_jobs")
          .update({
            status: "queued",
            attempt_count: nextAttemptCount,
            run_completed_at: new Date().toISOString(),
            consensus_action: "review",
            consensus_confidence: result.confidence,
            consensus_reason: result.reason,
            consensus_payload: {
              countsByAction: result.countsByAction,
              availableVotes: result.availableVotes,
              requiredVotes: result.requiredVotes,
            },
            error: "insufficient_model_quorum",
          })
          .eq("id", job.id)
          .eq("status", "running");
        stalled += 1;
        continue;
      }

      const finalStatus: "completed" | "stalled" = result.availableVotes >= result.requiredVotes
        ? "completed"
        : "stalled";
      const { error: actionError } = await admin
        .from("content_moderation_actions")
        .insert({
          job_id: job.id,
          action_type: result.consensusAction,
          status: "pending",
          target_ref: job.source_ref ?? null,
          metadata: {
            reason: result.reason,
            confidence: result.confidence,
            countsByAction: result.countsByAction,
          },
        });
      if (actionError) throw new Error(actionError.message);

      const { error: updateError } = await admin
        .from("content_moderation_jobs")
        .update({
          status: finalStatus,
          attempt_count: nextAttemptCount,
          consensus_action: result.consensusAction,
          consensus_confidence: result.confidence,
          consensus_reason: result.reason,
          consensus_payload: {
            countsByAction: result.countsByAction,
            availableVotes: result.availableVotes,
            requiredVotes: result.requiredVotes,
          },
          run_completed_at: new Date().toISOString(),
          error: finalStatus === "stalled" ? "insufficient_model_quorum" : null,
        })
        .eq("id", job.id)
        .eq("status", "running");
      if (updateError) throw new Error(updateError.message);

      if (finalStatus === "completed") {
        completed += 1;
      } else {
        stalled += 1;
      }
    } catch (runError) {
      failed += 1;
      console.error("Moderation queue job failed.", toSafeErrorRecord(runError));
      await admin
        .from("content_moderation_jobs")
        .update({
          status: "failed",
          attempt_count: (job.attempt_count ?? 0) + 1,
          run_completed_at: new Date().toISOString(),
          error: runError instanceof Error ? runError.message : "Unknown moderation job failure.",
        })
        .eq("id", job.id)
        .eq("status", "running");
    }
  }

  return {
    queued: (queuedJobs ?? []).length,
    claimed,
    completed,
    failed,
    stalled,
  };
}

export async function requeueStaleModerationJobs(admin: SupabaseClient, maxAgeMinutes = 60, limit = 100) {
  const staleCutoff = new Date(Date.now() - Math.max(5, Math.min(10080, maxAgeMinutes)) * 60 * 1000).toISOString();
  const safeLimit = Math.max(1, Math.min(500, Math.trunc(limit)));
  const { data: staleJobs, error } = await admin
    .from("content_moderation_jobs")
    .select("id,attempt_count,max_attempts")
    .eq("status", "running")
    .lt("run_started_at", staleCutoff)
    .order("run_started_at", { ascending: true })
    .limit(safeLimit);
  if (error) throw new Error(error.message);

  let requeued = 0;
  let failed = 0;
  for (const job of staleJobs ?? []) {
    const nextAttempt = Number(job.attempt_count ?? 0) + 1;
    const maxAttempts = Number(job.max_attempts ?? 3);
    const status = nextAttempt >= maxAttempts ? "stalled" : "queued";
    const { error: updateError } = await admin
      .from("content_moderation_jobs")
      .update({
        status,
        attempt_count: nextAttempt,
        run_completed_at: new Date().toISOString(),
        error: status === "queued"
          ? "requeued_after_stall_timeout"
          : "stalled_max_attempts_reached",
      })
      .eq("id", job.id)
      .eq("status", "running");
    if (updateError) {
      failed += 1;
    } else {
      requeued += 1;
    }
  }

  return {
    staleFound: (staleJobs ?? []).length,
    requeued,
    failedUpdates: failed,
  };
}

function normalizeConsensusAction(value: string): ConsensusAction {
  if (
    value === "allow"
    || value === "review"
    || value === "modify"
    || value === "rewrite"
    || value === "replace"
    || value === "remove"
    || value === "delete"
  ) {
    return value;
  }
  return "review";
}

function sanitizeForModerationRewrite(input: string) {
  return input
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    .replace(/\+?\d[\d\s().-]{7,}\d/g, "[redacted-phone]")
    .replace(/\b\d{3}[- ]?\d{2}[- ]?\d{4}\b/g, "[redacted-id]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 2000);
}

async function applySupportTicketModerationAction(
  admin: SupabaseClient,
  {
    actionType,
    ticketId,
    contentText,
    accountScopeUserId,
    reason,
    confidence,
  }: {
    actionType: ConsensusAction;
    ticketId: string;
    contentText: string;
    accountScopeUserId: string | null;
    reason: string | null;
    confidence: number | null;
  },
) {
  const nowIso = new Date().toISOString();
  const rewritten = sanitizeForModerationRewrite(contentText);

  const patch: Record<string, unknown> = {};
  if (actionType === "allow") {
    patch.ai_response_status = "sent";
    patch.first_response_at = nowIso;
  } else if (actionType === "review") {
    patch.ai_response_status = "escalated";
    patch.priority = "high";
    patch.ai_response_text = "Queued for manual moderation review.";
    patch.ai_response_generated_at = nowIso;
    patch.auto_response_model = "moderation_consensus_router_v1";
  } else if (actionType === "modify" || actionType === "rewrite" || actionType === "replace") {
    patch.description = rewritten.length > 0 ? rewritten : "Content rewritten by automated moderation pipeline.";
    patch.ai_response_status = "generated";
    patch.ai_response_text = "Content was automatically rewritten to satisfy moderation policy.";
    patch.ai_response_generated_at = nowIso;
    patch.auto_response_model = "moderation_consensus_rewrite_v1";
  } else {
    patch.description = "[Content removed by automated moderation]";
    patch.ai_response_status = "escalated";
    patch.priority = "high";
    patch.ai_response_text = "Content was automatically removed and escalated for manual review.";
    patch.ai_response_generated_at = nowIso;
    patch.auto_response_model = "moderation_consensus_remove_v1";
  }

  let query = admin
    .from("support_tickets")
    .update(patch)
    .eq("id", ticketId);

  if (accountScopeUserId) {
    query = query.eq("user_id", accountScopeUserId);
  }

  const { data, error } = await query
    .select("id")
    .maybeSingle<{ id: string }>();
  if (error) throw new Error(error.message);
  if (!data) {
    throw new Error("Target support ticket not found or scope mismatch.");
  }

  if (actionType === "review" || actionType === "remove" || actionType === "delete") {
    await admin.from("admin_alerts").insert({
      severity: actionType === "review" ? "warning" : "critical",
      category: "moderation_action_applied",
      message: `Moderation action ${actionType} applied to support ticket ${ticketId}.`,
      metadata: {
        ticketId,
        actionType,
        confidence,
        reason,
      },
    });
  }
}

export async function processModerationActionQueue(
  admin: SupabaseClient,
  options?: { limit?: number },
) {
  const limit = Math.max(1, Math.min(100, Math.trunc(options?.limit ?? 12)));
  const { data: pendingActions, error } = await admin
    .from("content_moderation_actions")
    .select(`
      id,
      job_id,
      action_type,
      status,
      target_ref,
      metadata,
      content_moderation_jobs (
        source_type,
        source_ref,
        account_scope_user_id,
        content_text,
        consensus_confidence,
        consensus_reason
      )
    `)
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(limit);
  if (error) throw new Error(error.message);

  type PendingActionRow = {
    id: string;
    job_id: string;
    action_type: string;
    status: string;
    target_ref: string | null;
    metadata: Record<string, unknown> | null;
    content_moderation_jobs: {
      source_type: string | null;
      source_ref: string | null;
      account_scope_user_id: string | null;
      content_text: string | null;
      consensus_confidence: number | null;
      consensus_reason: string | null;
    } | Array<{
      source_type: string | null;
      source_ref: string | null;
      account_scope_user_id: string | null;
      content_text: string | null;
      consensus_confidence: number | null;
      consensus_reason: string | null;
    }> | null;
  };

  let applied = 0;
  let skipped = 0;
  let failed = 0;

  for (const action of (pendingActions ?? []) as PendingActionRow[]) {
    const job = Array.isArray(action.content_moderation_jobs)
      ? (action.content_moderation_jobs[0] ?? null)
      : action.content_moderation_jobs;
    const sourceType = String(job?.source_type ?? "");
    const sourceRef = String(job?.source_ref ?? action.target_ref ?? "");
    const actionType = normalizeConsensusAction(action.action_type);
    const actionMetadata = action.metadata ?? {};

    try {
      if (sourceType !== "support_ticket") {
        const { error: skipError } = await admin
          .from("content_moderation_actions")
          .update({
            status: "skipped",
            applied_at: new Date().toISOString(),
            metadata: {
              ...actionMetadata,
              skipReason: `Unsupported source_type: ${sourceType || "unknown"}`,
            },
          })
          .eq("id", action.id)
          .eq("status", "pending");
        if (skipError) throw new Error(skipError.message);
        skipped += 1;
        continue;
      }

      if (!sourceRef) {
        throw new Error("Missing support ticket target reference.");
      }

      await applySupportTicketModerationAction(admin, {
        actionType,
        ticketId: sourceRef,
        contentText: String(job?.content_text ?? ""),
        accountScopeUserId: job?.account_scope_user_id ?? null,
        reason: job?.consensus_reason ?? null,
        confidence: job?.consensus_confidence ?? null,
      });

      const { error: appliedError } = await admin
        .from("content_moderation_actions")
        .update({
          status: "applied",
          applied_at: new Date().toISOString(),
          metadata: {
            ...actionMetadata,
            appliedSourceType: sourceType,
            appliedTargetRef: sourceRef,
          },
        })
        .eq("id", action.id)
        .eq("status", "pending");
      if (appliedError) throw new Error(appliedError.message);
      applied += 1;
    } catch (applyError) {
      failed += 1;
      await admin
        .from("content_moderation_actions")
        .update({
          status: "failed",
          metadata: {
            ...actionMetadata,
            applyError: applyError instanceof Error ? applyError.message : "Unknown moderation apply error.",
          },
        })
        .eq("id", action.id)
        .eq("status", "pending");
    }
  }

  return {
    pending: (pendingActions ?? []).length,
    applied,
    skipped,
    failed,
  };
}

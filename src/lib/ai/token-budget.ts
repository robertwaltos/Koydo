type TokenBudgetInput = {
  inputTokens: number;
  outputTokens: number;
};

type TokenUsageSnapshot = {
  spentUsd: number;
  monthlyBudgetUsd: number;
};

const GROK_INPUT_PER_MILLION_USD = 0.2;
const GROK_OUTPUT_PER_MILLION_USD = 0.5;

export const TOKEN_BUDGET_WARNING_RATIO = 0.8;

export function estimateGrokCallCostUsd({
  inputTokens,
  outputTokens,
}: TokenBudgetInput): number {
  const inputCost = (Math.max(0, inputTokens) / 1_000_000) * GROK_INPUT_PER_MILLION_USD;
  const outputCost = (Math.max(0, outputTokens) / 1_000_000) * GROK_OUTPUT_PER_MILLION_USD;

  return Number((inputCost + outputCost).toFixed(8));
}

export function checkAiBudget({
  spentUsd,
  monthlyBudgetUsd,
  inputTokens,
  outputTokens,
}: TokenUsageSnapshot & TokenBudgetInput) {
  const projectedCostUsd = estimateGrokCallCostUsd({ inputTokens, outputTokens });
  const nextTotalUsd = spentUsd + projectedCostUsd;
  const warningThresholdUsd = monthlyBudgetUsd * TOKEN_BUDGET_WARNING_RATIO;

  return {
    projectedCostUsd,
    nextTotalUsd,
    warningThresholdUsd,
    isWarning: nextTotalUsd >= warningThresholdUsd,
    isBlocked: nextTotalUsd > monthlyBudgetUsd,
  };
}

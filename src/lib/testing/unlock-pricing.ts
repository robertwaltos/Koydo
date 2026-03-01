export const TESTING_EXAM_UNLOCK_PRICE_CENTS = 195;
export const TESTING_EXAM_UNLOCK_CURRENCY = "USD";

export function centsToFixedCurrencyAmount(cents: number) {
  return Number((Math.max(0, cents) / 100).toFixed(2));
}

const DEFAULT_LOCALE = "en";

function normalizeLocale(locale: string) {
  return typeof locale === "string" && locale.length > 0 ? locale : DEFAULT_LOCALE;
}

export function formatDate(
  date: Date,
  locale: string,
  options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  },
): string {
  return new Intl.DateTimeFormat(normalizeLocale(locale), options).format(date);
}

export function formatNumber(
  value: number,
  locale: string,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(normalizeLocale(locale), options).format(value);
}

export function formatCurrency(
  amount: number,
  currency: string,
  locale: string,
): string {
  return new Intl.NumberFormat(normalizeLocale(locale), {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

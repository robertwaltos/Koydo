"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ── Currency metadata ────────────────────────────────────────── */
const CURRENCIES: { code: string; name: string; symbol: string; flag: string }[] = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  { code: "MXN", name: "Mexican Peso", symbol: "$", flag: "🇲🇽" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "🇰🇷" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", flag: "🇭🇰" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr", flag: "🇳🇴" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr", flag: "🇸🇪" },
  { code: "DKK", name: "Danish Krone", symbol: "kr", flag: "🇩🇰" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿" },
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "🇿🇦" },
  { code: "TRY", name: "Turkish Lira", symbol: "₺", flag: "🇹🇷" },
  { code: "PLN", name: "Polish Zloty", symbol: "zł", flag: "🇵🇱" },
  { code: "THB", name: "Thai Baht", symbol: "฿", flag: "🇹🇭" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", flag: "🇮🇩" },
  { code: "PHP", name: "Philippine Peso", symbol: "₱", flag: "🇵🇭" },
  { code: "CZK", name: "Czech Koruna", symbol: "Kč", flag: "🇨🇿" },
  { code: "ILS", name: "Israeli Shekel", symbol: "₪", flag: "🇮🇱" },
  { code: "CLP", name: "Chilean Peso", symbol: "$", flag: "🇨🇱" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪" },
  { code: "SAR", name: "Saudi Riyal", symbol: "﷼", flag: "🇸🇦" },
  { code: "EGP", name: "Egyptian Pound", symbol: "E£", flag: "🇪🇬" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh", flag: "🇰🇪" },
  { code: "COP", name: "Colombian Peso", symbol: "$", flag: "🇨🇴" },
  { code: "ARS", name: "Argentine Peso", symbol: "$", flag: "🇦🇷" },
  { code: "PEN", name: "Peruvian Sol", symbol: "S/", flag: "🇵🇪" },
  { code: "VND", name: "Vietnamese Dong", symbol: "₫", flag: "🇻🇳" },
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳", flag: "🇧🇩" },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨", flag: "🇵🇰" },
  { code: "UAH", name: "Ukrainian Hryvnia", symbol: "₴", flag: "🇺🇦" },
  { code: "RON", name: "Romanian Leu", symbol: "lei", flag: "🇷🇴" },
  { code: "HUF", name: "Hungarian Forint", symbol: "Ft", flag: "🇭🇺" },
  { code: "BGN", name: "Bulgarian Lev", symbol: "лв", flag: "🇧🇬" },
  { code: "MAD", name: "Moroccan Dirham", symbol: "MAD", flag: "🇲🇦" },
  { code: "TWD", name: "Taiwan Dollar", symbol: "NT$", flag: "🇹🇼" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", flag: "🇲🇾" },
  { code: "RUB", name: "Russian Ruble", symbol: "₽", flag: "🇷🇺" },
];

const CURRENCY_MAP = Object.fromEntries(CURRENCIES.map((c) => [c.code, c]));

type Rates = Record<string, number>;

/* ── Format helpers ────────────────────────────────────────────── */
function formatNumber(n: number): string {
  if (Math.abs(n) >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (Math.abs(n) >= 0.01) return n.toFixed(4);
  return n.toFixed(6);
}

/* ── CurrencyPicker ─────────────────────────────────────────── */
function CurrencyPicker({
  selected,
  onSelect,
  open,
  onToggle,
  label,
}: {
  selected: string;
  onSelect: (code: string) => void;
  open: boolean;
  onToggle: () => void;
  label: string;
}) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const cur = CURRENCY_MAP[selected];

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const filtered = CURRENCIES.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative">
      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
        {label}
      </p>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.1]"
      >
        <span className="text-2xl">{cur.flag}</span>
        <div className="flex-1 text-left">
          <p className="text-sm font-bold text-white">{cur.code}</p>
          <p className="text-xs text-white/50">{cur.name}</p>
        </div>
        <svg
          className={`size-4 text-white/40 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full z-50 mt-2 max-h-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-2xl"
          >
            <div className="border-b border-white/5 px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search currency..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-white/30 outline-none"
              />
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "14rem" }}>
              {filtered.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    onSelect(c.code);
                    setSearch("");
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/[0.06] ${
                    c.code === selected ? "bg-white/[0.08]" : ""
                  }`}
                >
                  <span className="text-lg">{c.flag}</span>
                  <span className="text-sm font-medium text-white">{c.code}</span>
                  <span className="flex-1 text-xs text-white/40">{c.name}</span>
                  <span className="text-xs text-white/25">{c.symbol}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-xs text-white/30">
                  No currencies match &quot;{search}&quot;
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Page Component ───────────────────────────────────── */
export default function CurrencyConverterPage() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("1");
  const [rates, setRates] = useState<Rates | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openPicker, setOpenPicker] = useState<"from" | "to" | null>(null);

  /* Fetch live rates (USD base) */
  const fetchRates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://open.er-api.com/v6/latest/USD",
      );
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = (await res.json()) as {
        result: string;
        rates: Rates;
        time_last_update_utc: string;
      };
      if (data.result !== "success") throw new Error("Rate API returned error");
      setRates(data.rates);
      setLastUpdated(data.time_last_update_utc);
    } catch {
      setError("Unable to fetch live rates. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchRates();
  }, [fetchRates]);

  /* Convert */
  const numericAmount = parseFloat(amount) || 0;
  let convertedAmount = 0;
  let rate = 0;
  let inverseRate = 0;

  if (rates && rates[fromCurrency] && rates[toCurrency]) {
    rate = rates[toCurrency] / rates[fromCurrency];
    inverseRate = rates[fromCurrency] / rates[toCurrency];
    convertedAmount = numericAmount * rate;
  }

  const fromCur = CURRENCY_MAP[fromCurrency];
  const toCur = CURRENCY_MAP[toCurrency];

  /* Swap currencies */
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  /* Popular conversion pairs for quick access */
  const POPULAR_PAIRS = [
    ["USD", "EUR"],
    ["USD", "GBP"],
    ["EUR", "GBP"],
    ["USD", "JPY"],
    ["USD", "CAD"],
    ["GBP", "EUR"],
    ["USD", "INR"],
    ["USD", "CNY"],
  ];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden px-4 py-8 sm:justify-center sm:py-0">
      {/* ── Animated background ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
        <div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[80px]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />
      </div>

      {/* ── Back link ── */}
      <div className="mb-6 w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-white/30 transition-colors hover:text-white/60"
        >
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Koydo
        </Link>
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur">
            <span className="text-sm">💱</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Live Exchange Rates
            </span>
          </div>
          <h1
            className="text-3xl font-black tracking-tight text-white"
            style={{ fontFamily: "var(--font-display-sans)" }}
          >
            Currency Converter
          </h1>
          <p className="mt-1 text-sm text-white/40">
            Free, real-time rates for 45+ currencies
          </p>
        </div>

        {/* Converter card */}
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
          {/* Amount input */}
          <div className="mb-5">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Amount
            </p>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl focus-within:border-indigo-400/40">
              <span className="text-lg text-white/60">{fromCur.symbol}</span>
              <input
                type="text"
                inputMode="decimal"
                value={amount}
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9.]/g, "");
                  if (v.split(".").length <= 2) setAmount(v);
                }}
                className="flex-1 bg-transparent text-2xl font-bold text-white outline-none placeholder-white/20"
                placeholder="0.00"
                aria-label="Amount to convert"
              />
            </div>
          </div>

          {/* From → To */}
          <div className="relative mb-5 grid grid-cols-[1fr_auto_1fr] items-end gap-3">
            <CurrencyPicker
              selected={fromCurrency}
              onSelect={(c) => { setFromCurrency(c); setOpenPicker(null); }}
              open={openPicker === "from"}
              onToggle={() => setOpenPicker(openPicker === "from" ? null : "from")}
              label="From"
            />
            <button
              type="button"
              onClick={swapCurrencies}
              className="mb-1 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/50 backdrop-blur transition-all hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white active:scale-95"
              aria-label="Swap currencies"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
            <CurrencyPicker
              selected={toCurrency}
              onSelect={(c) => { setToCurrency(c); setOpenPicker(null); }}
              open={openPicker === "to"}
              onToggle={() => setOpenPicker(openPicker === "to" ? null : "to")}
              label="To"
            />
          </div>

          {/* Result */}
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] py-8"
              >
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-300/30 border-t-indigo-400" />
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-red-500/20 bg-red-500/5 px-4 py-6 text-center"
              >
                <p className="text-sm text-red-300">{error}</p>
                <button
                  type="button"
                  onClick={() => void fetchRates()}
                  className="mt-3 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-1.5 text-xs font-semibold text-red-300 transition hover:bg-red-400/20"
                >
                  Retry
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={`${fromCurrency}-${toCurrency}-${amount}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.06] px-5 py-5"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white sm:text-4xl">
                    {toCur.symbol}{formatNumber(convertedAmount)}
                  </span>
                  <span className="text-sm font-medium text-white/40">{toCurrency}</span>
                </div>
                <p className="mt-2 text-xs text-white/30">
                  {fromCur.flag} 1 {fromCurrency} = {toCur.flag} {formatNumber(rate)} {toCurrency}
                </p>
                <p className="text-xs text-white/30">
                  {toCur.flag} 1 {toCurrency} = {fromCur.flag} {formatNumber(inverseRate)} {fromCurrency}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Last updated */}
          {lastUpdated && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[10px] text-white/20">
                Updated: {new Date(lastUpdated).toLocaleString()}
              </p>
              <button
                type="button"
                onClick={() => void fetchRates()}
                className="text-[10px] font-medium text-indigo-400/60 transition hover:text-indigo-300"
              >
                Refresh
              </button>
            </div>
          )}
        </div>

        {/* Popular pairs */}
        <div className="mt-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
            Popular conversions
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {POPULAR_PAIRS.map(([from, to]) => {
              const r =
                rates && rates[from] && rates[to]
                  ? rates[to] / rates[from]
                  : null;
              const f = CURRENCY_MAP[from];
              const t = CURRENCY_MAP[to];
              return (
                <button
                  key={`${from}-${to}`}
                  type="button"
                  onClick={() => {
                    setFromCurrency(from);
                    setToCurrency(to);
                    setAmount("1");
                  }}
                  className="group flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-left transition-all hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <span className="text-xs font-medium text-white/60 group-hover:text-white/80">
                    {f.flag} {from} → {t.flag} {to}
                  </span>
                  <span className="mt-0.5 text-[11px] font-bold text-indigo-300/70">
                    {r ? formatNumber(r) : "—"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-white/15">
            Rates from ExchangeRate-API (open access). Not financial advice.
          </p>
          <p className="mt-1 text-[10px] text-white/15">
            Part of the Koydo Financial Literacy toolkit.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

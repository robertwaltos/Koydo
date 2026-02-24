"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function AgeGatePage() {
  const currentYear = new Date().getFullYear();
  const [birthYear, setBirthYear] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const years = useMemo(
    () => Array.from({ length: 18 }, (_, index) => `${currentYear - (index + 4)}`),
    [currentYear],
  );

  const onContinue = async () => {
    const selectedYear = Number(birthYear);
    if (!selectedYear) {
      setStatus("Please select a birth year.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/compliance/age-gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ birthYear: selectedYear }),
      });

      const payload = (await response.json()) as {
        age?: number;
        nextRoute?: string;
        error?: string;
      };

      if (!response.ok || !payload.nextRoute) {
        setStatus(payload.error ?? "Unable to save age-gate response.");
        return;
      }

      const resolvedAge = payload.age ?? currentYear - selectedYear;
      const route =
        payload.nextRoute === "/auth/parent-consent"
          ? `${payload.nextRoute}?childAge=${resolvedAge}`
          : payload.nextRoute;

      router.push(route);
    } catch {
      setStatus("Unable to continue. Try again.");
    } finally {
      setIsSubmitting(false);
    }

  };

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Age Gate</h1>
      <p className="mt-3 text-sm text-zinc-600">
        To comply with child privacy laws, we need age confirmation before account activation.
      </p>

      <div className="mt-6 space-y-3">
        <label htmlFor="birthYear" className="block text-sm font-medium">
          Birth year
        </label>
        <select
          id="birthYear"
          className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
          value={birthYear}
          onChange={(event) => setBirthYear(event.target.value)}
        >
          <option value="">Select year</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={onContinue}
          disabled={isSubmitting}
          className="ui-soft-button ui-focus-ring rounded-md bg-accent px-4 py-2 text-sm text-white disabled:opacity-70"
        >
          {isSubmitting ? "Saving..." : "Continue"}
        </button>

        {status ? <p className="text-sm text-zinc-600">{status}</p> : null}
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setStatus(error.message);
        return;
      }

      setStatus("Signed in successfully.");
      router.push("/dashboard");
      router.refresh();
    } catch {
      setStatus("Unable to sign in. Check environment configuration and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 py-12">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">Use your EduForge account to continue.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-foreground px-4 py-2 text-sm text-background disabled:opacity-70"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>

        {status ? <p className="text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}
      </form>

      <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300">
        No account yet? <Link href="/auth/sign-up" className="underline">Create one</Link>
      </p>
    </main>
  );
}

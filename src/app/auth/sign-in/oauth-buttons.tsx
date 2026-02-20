"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { Provider } from "@supabase/supabase-js";

export default function OAuthButtons({ intent = "in" }: { intent?: "in" | "up" }) {
  const supabase = createSupabaseBrowserClient();
  const actionText = intent === "up" ? "Sign Up" : "Sign In";

  const handleOAuthSignIn = async (provider: Provider) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="mt-6 space-y-3">
      <button
        onClick={() => handleOAuthSignIn("google")}
        className="flex w-full items-center justify-center gap-3 rounded-md border border-black/15 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
      >
        {/* In a real app, you'd use an SVG icon */}
        <span className="h-5 w-5">[G]</span>
        {actionText} with Google
      </button>
      <button
        onClick={() => handleOAuthSignIn("facebook")}
        className="flex w-full items-center justify-center gap-3 rounded-md border border-black/15 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
      >
        {/* In a real app, you'd use an SVG icon */}
        <span className="h-5 w-5">[F]</span>
        {actionText} with Facebook
      </button>
      <button
        onClick={() => handleOAuthSignIn("apple")}
        className="flex w-full items-center justify-center gap-3 rounded-md border border-black/15 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
      >
        <span className="h-5 w-5">[A]</span>
        {actionText} with Apple
      </button>
      <button
        onClick={() => handleOAuthSignIn("twitter")}
        className="flex w-full items-center justify-center gap-3 rounded-md border border-black/15 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
      >
        {/* Supabase uses the "twitter" provider ID for X */}
        <span className="h-5 w-5">[X]</span>
        {actionText} with X
      </button>
    </div>
  );
}

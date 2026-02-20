import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function normalizeNextPath(nextParam: string | null) {
  if (!nextParam || !nextParam.startsWith("/")) {
    return "/dashboard";
  }

  return nextParam;
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const nextPath = normalizeNextPath(requestUrl.searchParams.get("next"));

  if (code) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      const errorUrl = new URL("/auth/sign-in", requestUrl.origin);
      errorUrl.searchParams.set("error", error.message);
      return NextResponse.redirect(errorUrl);
    }
  }

  return NextResponse.redirect(new URL(nextPath, requestUrl.origin));
}

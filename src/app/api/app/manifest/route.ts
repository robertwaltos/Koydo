import { NextRequest, NextResponse } from "next/server";
import { fetchManifest, getAppId } from "@/lib/platform/app-manifest";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

function normalizeRequestedAppId(raw: string | null): string {
  if (!raw) return getAppId();
  const trimmed = raw.trim();
  if (!/^[a-z0-9_]+$/i.test(trimmed)) {
    return getAppId();
  }
  return trimmed;
}

export async function GET(request: NextRequest) {
  try {
    const appId = normalizeRequestedAppId(request.nextUrl.searchParams.get("appId"));
    const manifest = await fetchManifest(appId);

    return NextResponse.json(
      { manifest },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to resolve app manifest", details: toSafeErrorRecord(error) },
      { status: 500 },
    );
  }
}

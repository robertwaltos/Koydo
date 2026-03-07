import { NextResponse } from "next/server";
import { resolveVoyagerAccessForServerRequest } from "@/lib/experience/voyager-access";

export async function GET() {
  const access = await resolveVoyagerAccessForServerRequest();
  return NextResponse.json({ access });
}

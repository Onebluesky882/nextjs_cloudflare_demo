import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { cf } = getCloudflareContext();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("X-User-Country", cf?.country || "unknown");

  return requestHeaders;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};

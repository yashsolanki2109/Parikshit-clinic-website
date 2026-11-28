import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto");
  const url = request.nextUrl.clone();

  // 301 Redirect www to non-www and http to https
  const isWww = host.startsWith("www.");
  const isHttp = proto === "http";

  if (isWww || isHttp) {
    const cleanHost = host.replace(/^www\./, "");
    return NextResponse.redirect(
      `https://${cleanHost}${url.pathname}${url.search}`,
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files:
     * - _next/static (static chunks)
     * - _next/image (image optimization)
     * - public files (images, icons)
     */
    "/((?!_next/static|_next/image|.*\\.(?:jpg|jpeg|gif|png|webp|svg|ico|txt|xml)).*)",
  ],
};

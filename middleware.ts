import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // If MAINTENANCE_MODE is explicitly set to "false", allow all traffic
  if (process.env.MAINTENANCE_MODE === "false") {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;

  // Exclude maintenance page, unlock API, chat/contact APIs, and static assets from redirection
  const isExcluded =
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/api/contact") ||
    pathname.startsWith("/api/chat") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    /\.(svg|png|jpg|jpeg|webp|avif|mp4|ico|css|js|json|txt|xml)$/i.test(pathname);

  if (isExcluded) {
    return NextResponse.next();
  }

  // Check if user has the bypass access cookie
  const accessToken = req.cookies.get("skylight_access_token")?.value;

  if (accessToken === "granted") {
    return NextResponse.next();
  }

  // Otherwise, redirect public visitors to the beautiful maintenance/coming soon page
  return NextResponse.redirect(new URL("/maintenance", req.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

import { NextResponse } from "next/server";

export function proxy() {
  // Maintenance mode disabled — allow all traffic to site
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

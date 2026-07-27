import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const validPassword = process.env.BYPASS_PASSWORD || "skylight2026";

    if (password === validPassword) {
      const response = NextResponse.json({ success: true });
      // Set access token cookie valid for 30 days
      response.cookies.set({
        name: "skylight_access_token",
        value: "granted",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      return response;
    }

    return NextResponse.json({ error: "Incorrect access password" }, { status: 401 });
  } catch (err) {
    console.error("Unlock API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

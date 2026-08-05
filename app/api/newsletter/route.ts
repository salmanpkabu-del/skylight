import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    if (!process.env.ADMIN_EMAIL || !process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD
        || process.env.GMAIL_USER.includes("placeholder")) {
      console.log("[Newsletter Form]", { email });
      return NextResponse.json({ success: true });
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"Skylight Newsletter" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📬 New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 8px;">
          <div style="background: #A6EE42; padding: 20px 24px; margin: -32px -32px 28px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #000; font-size: 20px; font-weight: 700; margin: 0;">📬 New Newsletter Subscriber</h1>
          </div>
          <p style="font-size: 16px;">A new user has subscribed to the Skylight Travel newsletter:</p>
          <div style="padding: 16px; background: #141414; border-radius: 6px; border-left: 3px solid #A6EE42; margin-top: 16px;">
            <p style="color: #A6EE42; margin: 0; font-size: 18px; font-weight: bold;">${email}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #555; text-align: center;">Received: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} UAE Time</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter form error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

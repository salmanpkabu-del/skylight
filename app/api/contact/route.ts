import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, destination, message } = body;

    if (!process.env.ADMIN_EMAIL || !process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD
        || process.env.GMAIL_USER.includes("placeholder")) {
      console.log("[Contact Form]", { name, phone, email, destination });
      return NextResponse.json({ success: true });
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });

    const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
    const emailLink = email ? `mailto:${email}` : null;

    await transporter.sendMail({
      from: `"Skylight Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📩 New Enquiry — ${name} — ${destination || "General"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 8px;">
          <div style="background: #A6EE42; padding: 20px 24px; margin: -32px -32px 28px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #000; font-size: 20px; font-weight: 700; margin: 0;">📩 New Enquiry — Skylight Travel</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Name</td><td style="color: #fff; font-weight: 600;">${name}</td></tr>
            <tr style="border-top: 1px solid #222;"><td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Phone / WhatsApp</td><td style="color: #A6EE42; font-weight: 600;"><a href="${waLink}" style="color: #A6EE42; text-decoration: none;">${phone}</a></td></tr>
            <tr style="border-top: 1px solid #222;"><td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Email</td><td style="color: #fff;">${emailLink ? `<a href="${emailLink}" style="color: #fff; text-decoration: underline;">${email}</a>` : "—"}</td></tr>
            <tr style="border-top: 1px solid #222;"><td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Destination</td><td style="color: #fff;">${destination || "—"}</td></tr>
          </table>

          <!-- Quick Action Buttons -->
          <div style="margin-top: 24px; text-align: center;">
            <a href="${waLink}" style="display: inline-block; background: #A6EE42; color: #000; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 6px; text-decoration: none; margin: 4px; letter-spacing: 0.5px;">
              💬 Message on WhatsApp
            </a>
            ${emailLink ? `<a href="${emailLink}" style="display: inline-block; background: #222; color: #fff; font-weight: 600; font-size: 14px; padding: 14px 24px; border-radius: 6px; text-decoration: none; margin: 4px; border: 1px solid #444;">📧 Reply via Email</a>` : ""}
          </div>

          <div style="margin-top: 24px; padding: 16px; background: #141414; border-radius: 6px; border-left: 3px solid #A6EE42;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; margin: 0 0 8px;">Message</p>
            <p style="color: #ccc; margin: 0; line-height: 1.6;">${message || "—"}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #555; text-align: center;">Received: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} UAE Time</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

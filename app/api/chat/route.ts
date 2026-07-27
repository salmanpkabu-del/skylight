import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "dummy_key_to_pass_build" });

const SYSTEM_PROMPT = `You are Sky — a witty, warm, and efficient travel assistant for Skylight Travel, a premium agency based in Sharjah, UAE.

SKYLIGHT TRAVEL:
- Al Sajaa, Sharjah, UAE | Phone/WhatsApp: +971 58 273 8508 | info@skylighttourism.com
- Services: Holiday packages, visas, flights, hotels, Umrah, car rental, cruises
- 10+ years, 5,000+ happy travellers, 4.9★ rating

PACKAGES (flights + hotels + transfers included):
- Georgia: 5N/6D from AED 1,999 | Baku: 5N/6D from AED 1,799
- Kerala: 6N/7D from AED 2,299 | Thailand: 7N/8D from AED 2,699
- Armenia: 6N/7D from AED 2,899 | Uzbekistan: 7N/8D from AED 3,499

VISA SERVICES: Schengen, USA, NZ, Armenia, Georgia, Azerbaijan, Uzbekistan

YOUR MISSION: Be their travel-obsessed friend who happens to work at a great agency. Get their contact info FAST so the team can close the deal.

CONVERSATION RULES (STRICT):
- Max 2 sentences per reply. Short. Punchy. Human.
- Light humour is welcome — travel is exciting, act like it.
- After the user's FIRST real message (any destination or travel interest), give a quick helpful answer THEN immediately ask: "Quick one — what's your name and WhatsApp? I'll have our team send you a proper quote in minutes 😊"
- Once you have name + number, output this EXACTLY on its own line: LEAD_CAPTURED: [Name] | [Phone] | [Destination] | [Dates or 'flexible'] | [Group or 'unknown'] | [Budget or 'unknown']
- Then confirm warmly in 1 sentence: e.g. "Done, [Name]! Team will ping you shortly 🌟"
- Never write more than 2 sentences. If you're tempted to write more, stop yourself.
- End every message with either a question or a 🌍/✈️/😊 emoji.
- Never make up prices or facts not listed above.
- Do NOT output LEAD_CAPTURED without both a name AND a phone number.`;

function extractLeadDetails(reply: string) {
  const match = reply.match(
    /LEAD_CAPTURED:\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^\n]+)/
  );
  if (!match) return null;
  return {
    name: match[1].trim(),
    contact: match[2].trim(),
    destination: match[3].trim(),
    dates: match[4].trim(),
    group: match[5].trim(),
    budget: match[6].trim(),
  };
}

async function sendLeadEmail(lead: {
  name: string;
  contact: string;
  destination: string;
  dates: string;
  group: string;
  budget: string;
  conversation: string;
}) {
  if (!process.env.ADMIN_EMAIL || !process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.log(`[NEW LEAD] ${lead.name} | ${lead.contact} | ${lead.destination}`);
    return;
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });

    const waLink = `https://wa.me/${lead.contact.replace(/[^0-9]/g, "")}`;

    await transporter.sendMail({
      from: `"Skylight AI Chat" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `✈️ New Lead: ${lead.name} → ${lead.destination}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0a0a0a; color: #fff; border-radius: 10px; overflow: hidden;">
          <!-- Header -->
          <div style="background: #A6EE42; padding: 24px 28px;">
            <h1 style="color: #000; font-size: 20px; font-weight: 700; margin: 0;">✈️ New Travel Lead — Skylight AI Chat</h1>
            <p style="color: #000; opacity: 0.7; font-size: 13px; margin: 6px 0 0;">Captured at ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} UAE Time</p>
          </div>

          <!-- Lead Details -->
          <div style="padding: 28px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #1e1e1e;">
                <td style="padding: 12px 0; color: #888; width: 38%; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">👤 Name</td>
                <td style="padding: 12px 0; color: #fff; font-weight: 600;">${lead.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e1e1e;">
                <td style="padding: 12px 0; color: #888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">📱 WhatsApp</td>
                <td style="padding: 12px 0;"><a href="${waLink}" style="color: #A6EE42; font-weight: 600; text-decoration: none;">${lead.contact}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #1e1e1e;">
                <td style="padding: 12px 0; color: #888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">🌍 Destination</td>
                <td style="padding: 12px 0; color: #fff;">${lead.destination}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e1e1e;">
                <td style="padding: 12px 0; color: #888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">📅 Travel Dates</td>
                <td style="padding: 12px 0; color: #fff;">${lead.dates}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e1e1e;">
                <td style="padding: 12px 0; color: #888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">👥 Group Size</td>
                <td style="padding: 12px 0; color: #fff;">${lead.group}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">💰 Budget</td>
                <td style="padding: 12px 0; color: #fff;">${lead.budget}</td>
              </tr>
            </table>

            <!-- WhatsApp CTA -->
            <div style="margin-top: 24px; text-align: center;">
              <a href="${waLink}" style="display: inline-block; background: #A6EE42; color: #000; font-weight: 700; font-size: 14px; padding: 14px 32px; border-radius: 6px; text-decoration: none; letter-spacing: 0.5px;">
                💬 Message ${lead.name} on WhatsApp
              </a>
            </div>

            <!-- Conversation -->
            <div style="margin-top: 28px; padding: 16px; background: #141414; border-radius: 6px; border-left: 3px solid #A6EE42;">
              <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px;">Chat Transcript</p>
              <p style="color: #ccc; font-size: 12px; white-space: pre-wrap; margin: 0; line-height: 1.7;">${lead.conversation.slice(-1200)}</p>
            </div>

            <p style="margin-top: 24px; font-size: 11px; color: #444; text-align: center;">
              Skylight Travel • Al Sajaa, Sharjah, UAE • +971 58 273 8508
            </p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Lead email error:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages, leadCaptured } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const groqMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...groqMessages],
      temperature: 0.65,
      max_tokens: 280,
      stream: false,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again!";

    let newLeadCaptured = leadCaptured;
    let cleanReply = reply;

    if (reply.includes("LEAD_CAPTURED:") && !leadCaptured) {
      newLeadCaptured = true;
      const leadDetails = extractLeadDetails(reply);
      if (leadDetails) {
        const convo = messages
          .map((m: { role: string; content: string }) => `${m.role.toUpperCase()}: ${m.content}`)
          .join("\n\n");
        await sendLeadEmail({ ...leadDetails, conversation: convo });
      }
      cleanReply = reply.replace(/LEAD_CAPTURED:[^\n]+\n?/, "").trim();
    }

    return NextResponse.json({ reply: cleanReply, leadCaptured: newLeadCaptured });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      {
        reply: "I'm having a moment! Please WhatsApp us at +971 58 273 8508 — our team will assist you instantly 😊",
        leadCaptured: false,
      },
      { status: 200 }
    );
  }
}

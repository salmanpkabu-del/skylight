"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, User } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Marhaba! 🌟 I'm Sky, your personal travel concierge at Skylight.\n\nDreaming of a holiday? I can help you explore packages, check visa requirements, get pricing, or plan a custom trip in seconds.\n\nWhere would you like to go?",
};

const SUGGESTIONS = [
  "Show me holiday packages ✈️",
  "I need visa help 📄",
  "Plan a custom trip 🗺️",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendText = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, leadCaptured }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      if (data.leadCaptured) setLeadCaptured(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Apologies, connection issue. Please WhatsApp us directly at **+971 58 273 8508** and we will reply within minutes!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Compact Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-brand-dark border border-brand-green/50 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(166,238,66,0.3)] hover:border-brand-green transition-all duration-300 group ${
          open ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
        }`}
        aria-label="Open AI travel concierge"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border border-brand-green/30 animate-ping opacity-60" />
        <img src="/icon.svg" alt="Sky" className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[380px] max-w-[calc(100vw-24px)] flex flex-col bg-[#050e09]/98 backdrop-blur-2xl border border-white/12 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-6 pointer-events-none"
        }`}
        style={{ height: "520px", maxHeight: "calc(100vh - 90px)" }}
        role="dialog"
        aria-label="Sky AI Travel Concierge"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 rounded-t-2xl flex-shrink-0 bg-gradient-to-r from-brand-dark/80 to-transparent">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-lg bg-brand-green/15 border border-brand-green/30 flex items-center justify-center flex-shrink-0">
              <img src="/icon.svg" alt="Sky" className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-green rounded-full" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-none">Sky Concierge</p>
              <p className="text-[10px] text-white/40 mt-0.5">Skylight AI • Instant answers</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
            aria-label="Close chat"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scroll-smooth">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} chat-bubble-in`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                  msg.role === "assistant"
                    ? "bg-brand-green/20 border border-brand-green/30 p-1"
                    : "bg-white/10 text-white"
                }`}
              >
                {msg.role === "assistant" ? <img src="/icon.svg" alt="Sky" className="w-full h-full" /> : <User className="w-3 h-3" />}
              </div>
              <div
                className={`max-w-[82%] px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
                  msg.role === "assistant"
                    ? "bg-white/[0.05] text-white/85 border border-white/8 rounded-2xl rounded-tl-sm"
                    : "bg-brand-green text-black font-medium rounded-2xl rounded-tr-sm shadow-[0_2px_12px_rgba(166,238,66,0.2)]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-lg bg-brand-green/20 border border-brand-green/30 flex items-center justify-center flex-shrink-0 p-1">
                <img src="/icon.svg" alt="Sky" className="w-full h-full" />
              </div>
              <div className="px-3.5 py-2.5 bg-white/[0.05] border border-white/8 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "140ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "280ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestion Chips — wrapping grid, no scroll */}
        {messages.length <= 2 && (
          <div className="px-4 pt-2.5 pb-1.5 flex flex-wrap gap-1.5 border-t border-white/5 flex-shrink-0">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendText(s)}
                className="text-[11px] bg-white/5 hover:bg-brand-green/15 hover:border-brand-green/40 border border-white/10 text-white/60 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200"
              >
                {s}
              </button>
            ))}
          </div>
        )}



        {/* Input */}
        <div className="px-3 py-3 border-t border-white/8 rounded-b-2xl flex items-center gap-2 flex-shrink-0 bg-[#030a06]/60">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendText(input);
              }
            }}
            placeholder="Ask about trips, visas, pricing..."
            className="flex-1 bg-white/[0.04] text-white text-[13px] px-4 py-2.5 rounded-xl border border-white/8 focus:border-brand-green/50 focus:outline-none placeholder-white/20 transition-all"
            disabled={loading}
          />
          <button
            onClick={() => sendText(input)}
            disabled={loading || !input.trim()}
            className="w-9 h-9 bg-brand-green rounded-xl flex items-center justify-center hover:bg-brand-green/80 active:scale-95 transition-all disabled:opacity-25 flex-shrink-0"
            aria-label="Send message"
          >
            <Send className="w-3.5 h-3.5 text-black" />
          </button>
        </div>
      </div>
    </>
  );
}

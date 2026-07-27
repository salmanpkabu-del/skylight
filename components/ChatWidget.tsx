"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";
import { X, Send, User, RotateCcw, MessageSquare } from "lucide-react";

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

// Helper to format simple markdown (bold, italic, links, line breaks) safely
function renderFormattedMessage(text: string) {
  const lines = text.split("\n");

  return lines.map((line, i) => {
    const parts: React.ReactNode[] = [];
    let keyIdx = 0;

    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
    let match;
    let lastIdx = 0;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIdx) {
        parts.push(line.substring(lastIdx, match.index));
      }
      const raw = match[0];
      if (raw.startsWith("**") && raw.endsWith("**")) {
        parts.push(
          <strong key={keyIdx++} className="font-semibold text-white">
            {raw.slice(2, -2)}
          </strong>
        );
      } else if (raw.startsWith("*") && raw.endsWith("*")) {
        parts.push(
          <em key={keyIdx++} className="italic">
            {raw.slice(1, -1)}
          </em>
        );
      } else if (raw.startsWith("[")) {
        const linkMatch = raw.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          parts.push(
            <a
              key={keyIdx++}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green underline hover:opacity-80 transition-opacity"
            >
              {linkMatch[1]}
            </a>
          );
        } else {
          parts.push(raw);
        }
      }
      lastIdx = regex.lastIndex;
    }

    if (lastIdx < line.length) {
      parts.push(line.substring(lastIdx));
    }

    return (
      <span key={i} className="block min-h-[1.1rem]">
        {parts.length > 0 ? parts : line}
      </span>
    );
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Restore session from sessionStorage on mount
  useEffect(() => {
    try {
      const savedMsgs = sessionStorage.getItem("skylight_chat_history");
      const savedLead = sessionStorage.getItem("skylight_chat_lead");
      if (savedMsgs) {
        const parsed = JSON.parse(savedMsgs);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
      if (savedLead === "true") {
        setLeadCaptured(true);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save to sessionStorage when messages or leadCaptured change
  useEffect(() => {
    try {
      if (messages.length > 1) {
        sessionStorage.setItem("skylight_chat_history", JSON.stringify(messages));
      }
      if (leadCaptured) {
        sessionStorage.setItem("skylight_chat_lead", "true");
      }
    } catch {
      // Ignore storage errors
    }
  }, [messages, leadCaptured]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open && !loading) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [open, loading]);

  const resetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setLeadCaptured(false);
    try {
      sessionStorage.removeItem("skylight_chat_history");
      sessionStorage.removeItem("skylight_chat_lead");
    } catch {
      // Ignore
    }
  };

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
        style={{ height: "530px", maxHeight: "calc(100vh - 90px)" }}
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
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-white leading-none">Sky Concierge</p>
                {leadCaptured && (
                  <span className="text-[9px] bg-brand-green/20 text-brand-green border border-brand-green/30 px-1.5 py-0.5 rounded-full font-medium">
                    Captured ✓
                  </span>
                )}
              </div>
              <p className="text-[10px] text-white/40 mt-0.5">Skylight AI • Instant answers</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick WhatsApp button in header */}
            <a
              href="https://wa.me/971582738508?text=Hi%20Skylight%20Travel,%20I'd%20like%20to%20inquire%20about%20a%20trip!"
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 px-2.5 rounded-full bg-brand-green/10 hover:bg-brand-green/20 border border-brand-green/30 text-brand-green text-xs flex items-center gap-1 transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="text-[11px] font-medium hidden sm:inline">WhatsApp</span>
            </a>

            {/* Clear Chat option */}
            {messages.length > 2 && (
              <button
                onClick={resetChat}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
                title="Restart conversation"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
              aria-label="Close chat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
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
                {msg.role === "assistant" ? (
                  <img src="/icon.svg" alt="Sky" className="w-full h-full" />
                ) : (
                  <User className="w-3 h-3" />
                )}
              </div>
              <div
                className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.role === "assistant"
                    ? "bg-white/[0.05] text-white/90 border border-white/8 rounded-2xl rounded-tl-sm"
                    : "bg-brand-green text-black font-medium rounded-2xl rounded-tr-sm shadow-[0_2px_12px_rgba(166,238,66,0.2)]"
                }`}
              >
                {msg.role === "assistant" ? renderFormattedMessage(msg.content) : msg.content}
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

        {/* Suggestion Chips — wrapping grid */}
        {messages.length <= 2 && (
          <div className="px-4 pt-2.5 pb-1.5 flex flex-wrap gap-1.5 border-t border-white/5 flex-shrink-0">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendText(s)}
                className="text-[11px] bg-white/5 hover:bg-brand-green/15 hover:border-brand-green/40 border border-white/10 text-white/70 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200"
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

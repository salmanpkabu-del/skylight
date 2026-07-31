"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Lock, ArrowRight, CheckCircle2, AlertCircle, MessageCircle, Phone, Mail, MapPin, Sparkles, Loader2 } from "lucide-react";

export default function MaintenancePage() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setTimeout(() => {
          window.location.href = "/";
        }, 600);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Incorrect access password");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#030a06] text-white relative overflow-hidden flex flex-col justify-between selection:bg-brand-green selection:text-black">
      {/* Glowing background ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 max-w-6xl w-full mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center">
            <img src="/icon.svg" alt="Skylight Logo" className="w-6 h-6" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white block leading-none">Skylight Travel</span>
            <span className="text-[10px] tracking-widest uppercase text-brand-green font-semibold mt-1 block">Sharjah, UAE</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-amber-400 absolute" />
          <span className="font-medium ml-1 hidden sm:inline">Portal Updating • Launching Soon</span>
          <span className="font-medium ml-1 sm:hidden">Updating</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col items-center text-center my-auto">
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-semibold tracking-wider uppercase mb-8 shadow-[0_0_25px_rgba(166,238,66,0.15)] animate-bounce" style={{ animationDuration: "3s" }}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Travel Experience</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15] mb-6">
          Something Extraordinary is <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-green to-brand-green">Taking Flight.</span>
        </h1>

        <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-12">
          We are polishing Sharjah&apos;s premier digital travel portal. Our holiday packages, instant visa assistance, and AI travel concierge will be live shortly. 
          <strong className="text-white block mt-2">In the meantime, our travel experts are available 24/7 to book your trips!</strong>
        </p>

        {/* Quick Action Cards for Customers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-16">
          {/* WhatsApp */}
          <a
            href="https://wa.me/971582738508"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#25D366]/10 border border-[#25D366]/30 p-5 rounded-2xl hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366] text-black flex items-center justify-center mb-3 group-hover:bg-black group-hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-black transition-colors">Chat on WhatsApp</h3>
            <p className="text-[11px] text-[#25D366] group-hover:text-black/80 font-semibold mt-1">+971 58 273 8508</p>
            <span className="text-[10px] text-white/50 group-hover:text-black/70 mt-1">&lt; 5 min response</span>
          </a>

          {/* Call */}
          <a
            href="tel:+971582738508"
            className="group bg-white/5 border border-white/15 p-5 rounded-2xl hover:bg-brand-green hover:border-brand-green transition-all duration-300 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center mb-3 group-hover:bg-black group-hover:text-brand-green transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-black transition-colors">Call Travel Desk</h3>
            <p className="text-[11px] text-brand-green group-hover:text-black/80 font-semibold mt-1">+971 58 273 8508</p>
            <span className="text-[10px] text-white/50 group-hover:text-black/70 mt-1">Sun–Fri 9am–9pm</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@skylighttourism.com"
            className="group bg-white/5 border border-white/15 p-5 rounded-2xl hover:bg-brand-green hover:border-brand-green transition-all duration-300 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center mb-3 group-hover:bg-black group-hover:text-brand-green transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-black transition-colors">Email Support</h3>
            <p className="text-[11px] text-brand-green group-hover:text-black/80 font-semibold mt-1">info@skylighttourism.com</p>
            <span className="text-[10px] text-white/50 group-hover:text-black/70 mt-1">Official Inquiries</span>
          </a>
        </div>

        {/* Owner & Developer Access Card */}
        <div className="w-full max-w-md bg-white/[0.03] backdrop-blur-xl border border-white/12 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-60" />

          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-4 h-4 text-brand-green" />
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">Owner & Developer Access</h2>
          </div>

          <form onSubmit={handleUnlock} className="space-y-3">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter bypass password (default: skylight2026)"
                disabled={status === "loading" || status === "success"}
                className={`w-full bg-black/60 text-white text-sm px-4 py-3 rounded-xl border focus:outline-none transition-all pr-10 ${
                  status === "error"
                    ? "border-red-500/80 focus:border-red-500 bg-red-950/20"
                    : status === "success"
                    ? "border-brand-green focus:border-brand-green bg-brand-green/10"
                    : "border-white/15 focus:border-brand-green/60"
                }`}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                {status === "loading" && <Loader2 className="w-4 h-4 animate-spin text-brand-green" />}
                {status === "success" && <CheckCircle2 className="w-4 h-4 text-brand-green" />}
                {status === "error" && <AlertCircle className="w-4 h-4 text-red-500" />}
              </div>
            </div>

            {status === "error" && (
              <p className="text-xs text-red-400 font-medium text-left flex items-center gap-1.5 animate-pulse">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errorMessage}
              </p>
            )}

            {status === "success" && (
              <p className="text-xs text-brand-green font-semibold text-left flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                Access granted! Redirecting to live preview...
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || status === "success" || !password.trim()}
              className="w-full bg-brand-green text-black font-bold text-sm py-3 px-4 rounded-xl hover:bg-brand-green/80 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:pointer-events-none shadow-[0_0_20px_rgba(166,238,66,0.25)]"
            >
              <span>Unlock Preview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-[11px] text-white/40 mt-3 text-center">
            Bypasses maintenance mode for 30 days on this device.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl w-full mx-auto px-6 py-6 text-center border-t border-white/10 text-xs text-white/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-brand-green" />
          <span>Sharjah, United Arab Emirates</span>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Skylight Travel & Tourism LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

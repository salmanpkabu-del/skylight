"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
      <div className="bg-[#01251d]/95 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl p-2 flex items-center gap-2">
        <a
          href="https://wa.me/971582738508?text=Hi%20Skylight!%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-black py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href="tel:+971582738508"
          className="bg-white/10 text-white border border-white/15 p-3 rounded-xl flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all"
          aria-label="Call Skylight Travel"
        >
          <Phone className="w-4 h-4 text-brand-green" />
        </a>
      </div>
    </div>
  );
}

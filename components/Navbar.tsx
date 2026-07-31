"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, Mail, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t, isAr } = useLanguage();
  const [time, setTime] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: t.nav.packages, href: "/packages" },
    { label: t.nav.visas, href: "/visas" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const tick = () => {
      const tStr = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Dubai",
        hour12: false,
      }).format(new Date());
      setTime(`${isAr ? "الإمارات" : "UAE"} ${tStr}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [isAr]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#01251d]/90 backdrop-blur-md border-b border-white/10" 
            : "bg-gradient-to-b from-black/75 via-black/30 to-transparent"
        }`}
      >
        <div className={`w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 transition-all duration-300 flex items-center justify-between ${
          scrolled ? "py-2.5 sm:py-3" : "pt-6 pb-3 sm:pt-7 sm:pb-3.5 lg:pt-8 lg:pb-4"
        }`}>
          {/* LEFT — nav links desktop */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1.5"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-transparent text-xs leading-4 tracking-[-0.12px] font-semibold uppercase text-white/85 hover:text-brand-green hover:bg-brand-green/10 hover:border-brand-green/25 hover:shadow-[0_0_20px_rgba(166,238,66,0.15)] transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CENTER — logo */}
          <Link href="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-[60]">
            <Image
              src="/skylight.svg"
              alt="Skylight Travel"
              width={220}
              height={58}
              className={`w-auto object-contain transition-all ${
                scrolled ? "h-8 sm:h-9 lg:h-9.5" : "h-10 sm:h-11 lg:h-12"
              }`}
              priority
            />
          </Link>

          {/* RIGHT — email + clock + language switcher desktop */}
          <div className="hidden lg:flex items-center gap-5 text-right">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-brand-green hover:text-black border border-white/20 text-xs font-bold uppercase transition-all duration-300 cursor-pointer"
              title={isAr ? "Switch to English" : "التحويل إلى العربية"}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? "EN" : "عربي"}</span>
            </button>

            <a
              href="mailto:info@skylighttourism.com"
              className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-white/80 hover:text-brand-green transition-colors duration-300 drop-shadow-sm"
            >
              info@skylighttourism.com
            </a>
            <span
              className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-white/60 tabular-nums drop-shadow-sm"
              aria-live="polite"
              aria-label={`Current UAE time: ${time}`}
            >
              {time}
            </span>
          </div>

          {/* MOBILE/TABLET controls (Language toggle + Hamburger) */}
          <div className="flex lg:hidden items-center gap-2 z-[60]">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-brand-green hover:text-black border border-white/20 text-xs font-bold uppercase transition-all duration-300 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? "EN" : "عربي"}</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 text-white bg-white/5 rounded-full backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10 cursor-pointer"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* FULL SCREEN OVERLAY MENU FOR TAB/MOBILE */}
        <div
          className={`fixed inset-0 h-[100dvh] w-screen z-50 flex flex-col bg-[#012119]/98 backdrop-blur-xl transition-all duration-500 ease-[var(--ease-spring)] lg:hidden ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileOpen}
        >
          {/* Top spacing for logo and close button */}
          <div className="h-[88px] sm:h-[96px] lg:h-[104px] w-full shrink-0 border-b border-white/10" />

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto w-full max-w-[1340px] mx-auto px-5 sm:px-8 py-8 sm:py-12 flex flex-col justify-between gap-12">
            
            {/* Primary Navigation Links */}
            <nav className="flex flex-col gap-6 sm:gap-8 mt-4">
              {navItems.map((item, i) => (
                <div 
                  key={item.label}
                  className="overflow-hidden"
                >
                  <div 
                    className={`transform transition-transform duration-700 ease-[var(--ease-spring)] ${
                      mobileOpen ? "translate-y-0" : "translate-y-[120%]"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 100}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-baseline group"
                    >
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white group-hover:text-brand-green transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </nav>

            {/* Informative Footer */}
            <div 
              className={`flex flex-col gap-8 transform transition-all duration-700 delay-500 ease-[var(--ease-spring)] ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="h-px w-full bg-white/10" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white/70">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">Get in touch</h3>
                  <a href="mailto:info@skylighttourism.com" className="flex items-center gap-3 hover:text-brand-green transition-colors w-fit">
                    <Mail size={18} />
                    <span className="text-sm sm:text-base">info@skylighttourism.com</span>
                  </a>
                  <a href="tel:+971582738508" className="flex items-center gap-3 hover:text-brand-green transition-colors w-fit">
                    <Phone size={18} />
                    <span className="text-sm sm:text-base">+971 58 273 8508</span>
                  </a>
                  <div className="flex items-center gap-3 mt-1">
                    <MapPin size={18} className="shrink-0 text-brand-green" />
                    <span className="text-sm sm:text-base leading-snug max-w-[200px]">Sharjah, United Arab Emirates</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:items-end justify-between gap-8 sm:gap-4">
                  <div className="flex flex-col gap-4 sm:items-end">
                     <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">Local Time</h3>
                     <span className="text-2xl sm:text-3xl font-light text-white tabular-nums tracking-tight">{time}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors" aria-label="Instagram">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors" aria-label="Facebook">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

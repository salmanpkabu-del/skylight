"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail, ArrowRight, ArrowLeft, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import JellycutLogo from "@/components/JellycutLogo";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const { t, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const quickLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.packages, href: "/packages" },
    { label: t.nav.visas, href: "/visas" },
    { label: t.nav.contact, href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  const serviceLinks = [
    { label: `${t.nav.packages} — Uzbekistan`, href: "/package/unforgettable-uzbekistan" },
    { label: `${t.nav.packages} — Armenia`, href: "/package/armenia-revealed" },
    { label: `${t.nav.packages} — Thailand`, href: "/package/thailand-escape" },
    { label: `${t.nav.visas} — Schengen`, href: "/visas/schengen" },
    { label: `${t.nav.visas} — USA B1/B2`, href: "/visas/usa" },
    { label: `${t.nav.visas} — Japan`, href: "/visas/japan" },
  ];

  const socials = [
    { icon: <InstagramIcon className="w-4 h-4" />, href: "https://www.instagram.com/skylight_tourism/", label: "Instagram" },
    { icon: <FacebookIcon className="w-4 h-4" />, href: "https://www.facebook.com/people/Sky-Light-Tourism/61562084041070/", label: "Facebook" },
    { icon: <LinkedinIcon className="w-4 h-4" />, href: "https://www.linkedin.com/company/skylighttourism/", label: "LinkedIn" },
    { icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/971582738508", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-[#011c15] relative overflow-hidden text-white pt-24 lg:pt-32 border-t border-white/10">
      
      {/* Huge Background Typography - SKYLIGHT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex items-end justify-center opacity-[0.025] z-0 mix-blend-overlay">
        <span className="text-[26vw] font-bold leading-[0.75] tracking-tighter text-white whitespace-nowrap translate-y-[22%]">SKYLIGHT</span>
      </div>

      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md-tablet:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-32">
          
          {/* Brand Col - spans 4 */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8 md-tablet:col-span-2">
            <Link href="/" className="mb-8 block">
              <Image
                src="/skylight.svg"
                alt="Skylight Travel"
                width={200}
                height={50}
                className="h-10 sm:h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-white/50 mb-10 max-w-sm">
              {t.footer.desc}
            </p>
            
            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="w-full max-w-sm relative group">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-green/80 mb-4">
                {status === "success" ? "Subscribed! 🎉" : t.footer.newsletter}
              </p>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                  required
                />
                <button 
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  aria-label="Subscribe"
                  className="absolute right-2 rtl:right-auto rtl:left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-green text-brand-black flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer disabled:opacity-50 disabled:hover:scale-100"
                >
                  {status === "loading" ? (
                    <div className="w-4 h-4 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 ml-[-2px] rtl:ml-0 rtl:mr-[-2px]" />
                  )}
                </button>
              </div>
              {status === "error" && (
                <p className="text-[10px] text-red-400 mt-2 absolute">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
          
          {/* Quick Links - spans 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
              {t.footer.explore}
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[15px] text-white/50 hover:text-white transition-colors w-fit"
                  >
                    <span className="w-0 overflow-hidden opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 ease-[var(--ease-spring)] flex items-center text-brand-green">
                      <ArrowIcon className="w-3 h-3" />
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - spans 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
              {t.footer.services}
            </h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[15px] text-white/50 hover:text-white transition-colors w-fit"
                  >
                    <span className="w-0 overflow-hidden opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 ease-[var(--ease-spring)] flex items-center text-brand-green">
                      <ArrowIcon className="w-3 h-3" />
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - spans 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
              {t.footer.getInTouch}
            </h4>
            <div className="flex flex-col gap-6">
              <a
                href="https://maps.app.goo.gl/JYWYAQ1FbXEcoKNQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-brand-black transition-all duration-300 mt-[-4px]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[14px] leading-relaxed max-w-[180px]">Sharjah<br/>United Arab Emirates</span>
              </a>
              
              <a
                href="tel:+971582738508"
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-brand-black transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-medium">+971 58 273 8508</span>
              </a>

              <a
                href="mailto:info@skylighttourism.com"
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-brand-black transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-medium">info@skylighttourism.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-white/40">
          <p className="text-center md:text-start w-full md:w-auto">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>

          {/* Jellycut Agency Badge with Magical Hover Interaction */}
          <a
            href="https://www.jellycutstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Created and cared by Jellycut Studio"
            className="group/jelly relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-brand-green/50 transition-all duration-500 shadow-sm hover:shadow-[0_0_24px_rgba(166,238,66,0.3)] backdrop-blur-sm overflow-hidden"
          >
            {/* Aurora Glow Aura */}
            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-brand-green/0 via-brand-green/20 to-emerald-400/0 opacity-0 group-hover/jelly:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none" />

            {/* Shimmer Light Beam Effect */}
            <div className="absolute inset-0 -translate-x-[150%] group-hover/jelly:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />

            {/* Text */}
            <span className="text-[12px] font-medium tracking-wide text-white/50 group-hover/jelly:text-white/90 transition-colors duration-300 relative z-10">
              {t.footer.createdAndCaredBy}
            </span>

            {/* Logo */}
            <div className="relative z-10 flex items-center pl-0.5">
              <JellycutLogo className="h-3.5 w-auto text-white/70 group-hover/jelly:text-brand-green group-hover/jelly:scale-105 transition-all duration-300 filter group-hover/jelly:drop-shadow-[0_0_8px_rgba(166,238,66,0.6)]" />
            </div>
          </a>

          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-green hover:border-brand-green/40 hover:bg-brand-green/10 transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

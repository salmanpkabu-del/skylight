"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, MessageCircle, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactContent() {
  const { t, isAr } = useLanguage();
  const c = t.contactPage;
  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  return (
    <>
      <Navbar />

      {/* Hero Section — Dark Luxury Theme */}
      <section className="relative bg-[#012119] pt-36 sm:pt-40 pb-16 overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Subtle Dot Pattern Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-0" 
          style={{ 
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)", 
            backgroundSize: "16px 16px" 
          }} 
        />

        <div className="relative z-10 w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Breadcrumb Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all mb-8"
          >
            <ArrowIcon className="w-3.5 h-3.5" /> {t.common.backToHome}
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> {c.heroTag}
            </div>

            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] font-semibold text-white mb-6">
              {c.heroTitleMain} <br />
              <span className="text-gradient">{c.heroTitleAccent}</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-8 max-w-xl">
              {c.heroDesc}
            </p>

            {/* Quick Response Guarantees */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> {c.badgeWhatsApp}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-green" /> {c.badgeEmail}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> {c.badgeNoHidden}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="bg-brand-section py-16 lg:py-24 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <ContactForm />
        </div>
      </section>

      {/* Contact FAQ Accordion Section */}
      <section className="bg-[#012119] py-20 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">{c.faqTag}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {c.faqTitle}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {c.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-brand-card/80 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/40 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none font-semibold text-white text-base sm:text-lg">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    {faq.q}
                  </span>
                  <span className="text-brand-green group-open:rotate-180 transition-transform text-xl ml-4 rtl:ml-0 rtl:mr-4">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-white/70 border-t border-white/5">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

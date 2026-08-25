"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, ArrowRight, ShieldCheck, Clock, FileText, CheckCircle2, MessageCircle, HelpCircle, Zap } from "lucide-react";
import { visas } from "@/lib/visas-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function VisasContent() {
  const { t, isAr } = useLanguage();
  const v = t.visasPage;
  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  return (
    <>
      <Navbar />

      {/* Hero Section — Dark Luxury Theme */}
      <section className="relative bg-[#012119] pt-36 sm:pt-40 pb-16 overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />
        
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
              <Sparkles className="w-3.5 h-3.5" /> {v.heroTag}
            </div>

            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] font-semibold text-white mb-6">
              {v.heroTitleMain} <br />
              <span className="text-gradient">{v.heroTitleAccent}</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-8 max-w-xl">
              {v.heroDesc}
            </p>

            {/* Quick Response Guarantees */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> {v.badgeApproval}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-green" /> {v.badgeExpress}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <FileText className="w-4 h-4 text-brand-green" /> {v.badgeVFS}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 4 Step Process Banner */}
      <section className="bg-[#01251d] py-12 border-y border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {v.steps.map((step) => (
              <div key={step.num} className="bg-brand-card/90 border border-white/10 p-6 rounded-2xl relative group">
                <span className="text-2xl font-mono font-bold text-brand-green/40 group-hover:text-brand-green transition-colors block mb-2">
                  {step.num}
                </span>
                <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Answer-First (TL;DR) Summary Banner for AEO */}
      <section className="bg-brand-section py-12 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-brand-green/15 via-brand-green/5 to-transparent border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-green p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-brand-green text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <Zap className="w-4 h-4 fill-brand-green" /> {isAr ? "إجابة سريعة للمقيمين في الإمارات" : "Quick Answer (TL;DR) for UAE Residents"}
            </div>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              {isAr ? (
                <>
                  تقدم سكاي لايت للسفريات في الشارقة خدمات استخراج تأشيرات متكاملة للمقيمين في الإمارات لأكثر من 100 وجهة. سواء كنت ترغب في <strong>تأشيرة إلكترونية سريعة (أوزبكستان، أذربيجان، تايلاند)</strong>، أو استشارات للسفر بدون تأشيرة <strong>(جورجيا، أرمينيا)</strong>، أو تجهيز مواعيد السفارات والمستندات للتأشيرات اللاصقة <strong>(شنغن، أمريكا، بريطانيا)</strong>، يحقق خبراؤنا <strong>نسبة قبول 99.4%</strong> بدون أي رسوم خفية.
                </>
              ) : (
                <>
                  Skylight Travel Sharjah provides complete visa assistance for UAE residents traveling to over 100 destinations. Whether you require an express <strong>e-Visa (Uzbekistan, Azerbaijan, Thailand)</strong>, visa-free travel guidance <strong>(Georgia, Armenia, Albania)</strong>, or full consular appointment and document preparation for sticker visas <strong>(Schengen, USA, UK)</strong>, our specialists maintain a <strong>99.4% approval rate</strong> with zero hidden fees.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Visa Cards Grid Section */}
      <section className="bg-brand-section py-16 lg:py-24 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">{t.visas.tag}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {isAr ? "اختر وجهتك القادمة" : "Select Your Destination"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visas.map((visa) => (
              <div
                key={visa.id}
                className="flex flex-col justify-between p-7 bg-brand-card/90 border border-white/10 rounded-2xl hover:border-brand-green/40 hover:shadow-[0_0_30px_rgba(166,238,66,0.15)] transition-all duration-300 group"
              >
                <Link href={`/visas/${visa.id}`} className="block space-y-5 focus:outline-none">
                  {/* Header: Flag + Tag */}
                  <div className="flex items-center justify-between">
                    <Image
                      src={`https://flagcdn.com/w80/${visa.code}.png`}
                      alt={`${visa.country} flag`}
                      width={40}
                      height={28}
                      className="w-10 h-7 object-cover rounded shadow-sm border border-white/10"
                    />
                    <span className={`text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full ${
                      visa.processingTime.includes("Free") || visa.processingTime.includes("Arrival")
                        ? "bg-brand-green text-black shadow-[0_0_15px_rgba(166,238,66,0.25)]"
                        : "bg-white/10 text-white/80 border border-white/10"
                    }`}>
                      {visa.processingTime.includes("Free") || visa.processingTime.includes("Arrival") ? t.visas.visaFree : visa.processingTime}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-brand-green transition-colors flex items-center justify-between">
                      <span>{visa.country}</span>
                      <span className="text-xs text-brand-green opacity-0 group-hover:opacity-100 transition-opacity font-normal">
                        {isAr ? "← تفاصيل" : "View →"}
                      </span>
                    </h3>
                    <p className="text-xs text-white/50 font-light mt-0.5">{visa.type}</p>
                  </div>

                  <p className="text-xs leading-relaxed text-white/65 font-light">
                    {visa.description}
                  </p>

                  {/* Requirements */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                      {isAr ? "المتطلبات الأساسية" : "Requirements"}
                    </p>
                    <ul className="space-y-1.5">
                      {visa.requirements.slice(0, 3).map((r) => (
                        <li key={r} className="flex items-center gap-2 text-xs text-white/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>

                {/* Footer: Price + WhatsApp CTA */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-white/40 tracking-wider uppercase">{t.common.startingFrom}</p>
                    <p className="text-lg font-bold text-brand-green">{visa.price}</p>
                  </div>
                  <a
                    href={`https://wa.me/971582738508?text=Hi!%20I%20need%20assistance%20with%20${encodeURIComponent(visa.country)}%20visa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green border border-brand-green/20 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-brand-green hover:text-black transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> {t.visas.apply}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[#012119] py-20 lg:py-24 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">{v.faqTag}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {v.faqTitle}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {v.faqs.map((faq, i) => (
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

      <CTABanner />
      <Footer />
    </>
  );
}

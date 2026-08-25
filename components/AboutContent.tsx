"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Check, Users, Award, MapPin, Phone, MessageCircle, 
  ShieldCheck, Sparkles, Clock, ArrowLeft, ArrowRight, HeartHandshake
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
  const { t, isAr } = useLanguage();
  const a = t.aboutPage;
  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  const featureIcons = [
    <Check key="0" className="w-6 h-6" />,
    <Users key="1" className="w-6 h-6" />,
    <ShieldCheck key="2" className="w-6 h-6" />,
    <Award key="3" className="w-6 h-6" />,
    <MessageCircle key="4" className="w-6 h-6" />,
    <HeartHandshake key="5" className="w-6 h-6" />,
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section — Dark Luxury Theme with Ambient Glow */}
      <section className="relative bg-[#012119] pt-36 sm:pt-40 pb-20 overflow-hidden">
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

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> {a.heroTag}
            </div>

            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] font-semibold text-white mb-6">
              {a.heroTitleMain} <br className="hidden sm:inline" />
              <span className="text-gradient">{a.heroTitleAccent}</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-10 max-w-2xl">
              {a.heroDesc}
            </p>

            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> {a.badgeLicensed}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-green" /> {a.badgeExperience}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-brand-green" /> {a.badgeHQ}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Glow Banner */}
      <section className="bg-[#01251d] py-10 border-y border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {a.stats.map((s) => (
              <div 
                key={s.label}
                className="bg-brand-card/90 border border-white/10 p-6 sm:p-7 rounded-2xl hover:border-brand-green/40 hover:shadow-[0_0_25px_rgba(166,238,66,0.15)] transition-all duration-300 group"
              >
                <p className="text-3xl sm:text-4xl font-bold text-brand-green tracking-tight mb-1 group-hover:scale-105 transition-transform">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-white">{s.label}</p>
                <p className="text-xs text-white/50 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story & Journey ─────────────────────────────── */}
      <section className="bg-brand-section py-28 lg:py-36 relative overflow-hidden">
        {/* Soft ambient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(166,238,66,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* ── Eyebrow ── */}
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-brand-green" />
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-brand-green">{a.storyEyebrow}</span>
            <div className="h-px w-8 bg-brand-green" />
          </div>

          {/* ── Bento Grid: photo left, full-height content right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-stretch">
            {/* ── LEFT: Photo Card — full height ── */}
            <div className="lg:col-span-5">
              <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden group"
                style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                <Image
                  src="/images/about-hq.png"
                  alt="Skylight Travel — Family travel consultation in Sharjah UAE"
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms] ease-out"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg, rgba(1,33,25,0.15) 0%, rgba(1,33,25,0.65) 55%, rgba(1,33,25,0.97) 100%)" }} />

                {/* Est. badge */}
                <div className={`absolute top-5 ${isAr ? "right-5" : "left-5"} px-3 py-1.5 rounded-xl text-[11px] font-black tracking-widest uppercase`}
                  style={{ background: "rgba(166,238,66,0.15)", border: "1px solid rgba(166,238,66,0.3)", color: "#a6ee42" }}>
                  {a.photoEst}
                </div>

                {/* Bottom: stats + HQ pill */}
                <div className="absolute bottom-0 left-0 right-0 p-7 space-y-4">
                  <div className="flex items-center gap-3">
                    {[
                      { v: "5,000+", l: a.photoServed }, 
                      { v: "4.9★", l: a.photoRating }, 
                      { v: "6+", l: a.photoYears }
                    ].map((s, i) => (
                      <div key={i} className="flex-1 text-center">
                        <p className="text-brand-green font-black text-xl leading-none">{s.v}</p>
                        <p className="text-white/40 text-[9px] font-medium tracking-wide mt-1.5 uppercase">{s.l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl"
                    style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[13px] font-semibold leading-none">{a.photoHqTitle}</p>
                      <p className="text-white/40 text-[11px] mt-1">{a.photoHqSub}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                      <span className="text-brand-green text-[9px] font-black tracking-widest uppercase">{a.photoOpen}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Full-height flex column — headline top, milestones bottom ── */}
            <div className={`lg:col-span-7 flex flex-col justify-between gap-10 ${isAr ? "lg:pr-6" : "lg:pl-6"}`}>
              {/* TOP: Headline + Story narrative */}
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white tracking-tight leading-[1.05] mb-8">
                  {a.storyTitleMain}
                  <span style={{ background: "linear-gradient(135deg, #a6ee42 0%, #7ed600 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {a.storyTitleAccent}
                  </span>
                </h2>
                <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.9] text-white/55 font-light max-w-xl">
                  <p>{a.storyP1Rest}</p>
                  <p>{a.storyP2Rest}</p>
                </div>
              </div>

              {/* BOTTOM: Milestone cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {a.milestones.map((m, i) => (
                  <div key={m.year} className="group relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* Top accent bar */}
                    <div className="h-[3px] w-full transition-all duration-300"
                      style={{
                        background: i === a.milestones.length - 1
                          ? "linear-gradient(to right, #a6ee42, #6dcb00)"
                          : "rgba(166,238,66,0.2)",
                      }}
                    />

                    <div className="p-5">
                      {/* Year + Latest badge row */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-black tracking-[0.2em] text-brand-green uppercase">{m.year}</span>
                        {i === a.milestones.length - 1 && (
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(166,238,66,0.1)", border: "1px solid rgba(166,238,66,0.2)" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                            <span className="text-[8px] font-black text-brand-green tracking-widest uppercase">{a.latestBadge}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-[13px] font-bold text-white leading-snug mb-2">{m.title}</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed font-light">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart — 6 Feature Cards */}
      <section className="bg-[#012119] py-20 lg:py-28 relative">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">{a.whyChooseTag}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              {a.whyChooseTitle}
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light mt-3">
              {a.whyChooseSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.features.map((f, i) => (
              <div 
                key={f.title} 
                className="p-8 rounded-2xl bg-brand-card/80 border border-white/10 hover:border-brand-green/40 hover:bg-brand-card transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-black transition-colors duration-300">
                  {featureIcons[i] || <Check className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2.5 group-hover:text-brand-green transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65 font-light">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="bg-brand-section py-16 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-brand-card/90 border border-white/15 p-8 sm:p-10 rounded-3xl backdrop-blur-md">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-green block mb-1">
                {a.contactTag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                {a.contactTitle}
              </h3>
              <p className="text-white/60 text-sm font-light mt-2 max-w-xl">
                {a.contactDesc}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/971582738508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-black px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black" /> {a.btnWhatsApp}
              </a>
              <a
                href="tel:+971582738508"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2.5 bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase hover:bg-white/20 transition-all border border-white/10"
              >
                <Phone className="w-4 h-4 text-brand-green" /> {a.btnCall}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}

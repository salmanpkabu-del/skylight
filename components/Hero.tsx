"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import { packages } from "@/lib/packages-data";

const stats = [
  { num: "5,000+", label: "UAE Travellers" },
  { num: "50+", label: "Destinations" },
  { num: "4.9★", label: "Rating" },
  { num: "10+", label: "Years of Trust" },
];

export default function Hero() {
  const [revealed, setRevealed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const tr = (delay: number) => ({
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(18px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
    transitionDelay: `${delay}ms`,
  });

  return (
    <main className="relative w-full h-screen min-h-[640px] bg-brand-dark overflow-hidden">
      <Navbar />

      {/* ── Video ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          ref={videoRef}
          src="/herobg.mp4"
          poster="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1400&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
        />
        {/* Centre-out vignette so video reads everywhere */}
        <div className="absolute inset-0 bg-[#012119]/55" />
        {/* Top: navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#012119]/70 via-transparent to-transparent" />
        {/* Bottom: stats strip */}
        <div className="absolute bottom-0 left-0 right-0 h-[52%] bg-gradient-to-t from-[#012119] via-[#012119]/65 to-transparent" />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-[2] h-full flex flex-col items-center text-center w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-0">

        {/* ── Main block — centred + vertically centred ─── */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">

          {/* Eyebrow */}
          <div className="flex items-center gap-3" style={tr(0)}>
            <div className="h-px w-6 bg-brand-green flex-shrink-0" />
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-brand-green">
              Sharjah&apos;s Most Trusted Travel Agency
            </span>
            <div className="h-px w-6 bg-brand-green flex-shrink-0" />
          </div>

          {/* Headline */}
          <div style={tr(100)}>
            <h1
              className="font-semibold text-white leading-[0.88] tracking-[-0.05em]"
              style={{ fontSize: "clamp(56px, 8.5vw, 112px)" }}
            >
              The World
            </h1>
            <p
              className="leading-[0.88] tracking-[-0.03em] text-brand-green"
              style={{
                fontSize: "clamp(56px, 8.5vw, 112px)",
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              Awaits.
            </p>
          </div>

          {/* Description */}
          <p
            className="text-[15px] sm:text-[16px] leading-[1.8] text-white/55 max-w-[580px]"
            style={tr(200)}
          >
            Crafting premium holidays and securing seamless visas with genuine care.<br className="hidden sm:block" />
            Trusted by over 5,000 UAE families since 2014.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3" style={tr(300)}>
            <Link
              href="/packages"
              className="btn-green px-8 py-[14px] text-[11px] font-semibold tracking-[0.1em] uppercase"
            >
              <span className="flex items-center gap-2.5">
                Explore Packages
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <a
              href="https://wa.me/971582738508?text=Hi%20Skylight!%20I%27d%20like%20to%20plan%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-[14px] border border-white/20 text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:border-brand-green hover:text-brand-green transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── Bottom strip ────────────────────────────────── */}
        <div className="w-full" style={tr(450)}>

          {/* Destination chips */}
          <div className="hidden sm:flex items-center justify-center flex-wrap gap-2 mb-7">
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/25 mr-1">
              Popular →
            </span>
            {packages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/package/${pkg.slug}`}
                className="text-[10px] font-semibold tracking-[0.08em] uppercase text-white/45 border border-white/10 px-3.5 py-1 rounded-full hover:border-brand-green/60 hover:text-brand-green transition-all duration-300"
              >
                {pkg.country}
              </Link>
            ))}
          </div>

          {/* Stats bar */}
          <div className="flex border-t border-white/10 divide-x divide-white/10 mobile-max:grid mobile-max:grid-cols-2 mobile-max:divide-x-0">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 flex flex-col items-center py-5 mobile-max:border-b mobile-max:border-white/10 mobile-max:last:border-b-0">
                <p className="text-[28px] sm:text-[32px] font-semibold text-white leading-none tracking-[-0.02em]">
                  {s.num}
                </p>
                <p className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/35 mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

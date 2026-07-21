"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Globe, CheckCircle2, Shield, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    label: "Expert Planning",
    desc: "Every itinerary is hand-crafted by UAE-based specialists who know your destination inside out. No templates, no guesswork.",
  },
  {
    icon: CheckCircle2,
    label: "Personalised Trips",
    desc: "Whether it's a family holiday, couple getaway, or solo adventure, we tailor every detail around your budget and travel style.",
  },
  {
    icon: Shield,
    label: "End-to-End Care",
    desc: "From your first enquiry to the moment you land home, our team is available on WhatsApp 7 days a week for real-time support.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const trigger = (el: Element) => (el as HTMLElement).classList.add("revealed");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) trigger(e.target); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    const timeout = setTimeout(() => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) trigger(el);
      });
    }, 100);
    return () => { obs.disconnect(); clearTimeout(timeout); };
  }, []);

  return (
    <section id="about" ref={ref} className="bg-white overflow-hidden py-24 lg:py-32">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-16 lg:gap-20">
        
        {/* ── 1. Editorial Header ─────────────────────────── */}
        <div className="reveal flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-brand-green mb-6">
            About Skylight
          </span>
          <h2 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-2px] sm:tracking-[-3px] font-semibold text-brand-dark">
            Where Every Journey <br className="hidden sm:block" />
            Begins with{" "}
            <span
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                color: "#013025",
              }}
            >
              Trust.
            </span>
          </h2>
        </div>

        {/* ── 2. Bento Grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Story Card */}
          <div className="reveal lg:col-span-8 bg-[#fafaf9] rounded-[32px] p-10 sm:p-14 flex flex-col justify-between border border-brand-dark/[0.03]">
            <div className="space-y-6 text-[18px] sm:text-[22px] leading-[1.6] text-brand-dark/80 font-medium">
              <p>
                Founded in 2014 in Al Sajaa, Sharjah, Skylight Travel was built on a single belief: <span className="text-brand-dark">every family deserves to experience the world without the stress of planning it alone.</span>
              </p>
              <p className="text-[16px] sm:text-[18px] leading-[1.8] text-brand-dark/60">
                Over a decade later, we&apos;ve helped more than 5,000 UAE families discover extraordinary destinations, from the Silk Road cities of Uzbekistan to the beaches of Thailand. We do this with complete transparency, fair pricing, and a team that genuinely cares.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-brand-dark/10">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.15em] uppercase text-brand-dark hover:text-brand-green transition-colors w-fit group"
              >
                Read Our Full Story
                <span className="w-8 h-8 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-green transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Side Stat Card (Years) */}
          <div className="reveal lg:col-span-4 bg-brand-dark rounded-[32px] p-10 sm:p-14 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <p className="text-[100px] sm:text-[130px] leading-none tracking-tighter font-bold text-white mb-2 relative z-10"
               style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
              10<span className="text-brand-green">+</span>
            </p>
            <p className="text-[12px] sm:text-[14px] font-semibold tracking-[0.2em] uppercase text-white/60 relative z-10">
              Years Serving<br/>UAE Families
            </p>
          </div>

          {/* Bottom Stat Cards */}
          <div className="reveal lg:col-span-4 bg-[#fafaf9] rounded-[32px] p-10 flex flex-col justify-center items-center text-center border border-brand-dark/[0.03] hover:border-brand-dark/10 transition-colors">
            <p className="text-[54px] font-bold text-brand-dark leading-none tracking-tight mb-3">5,000+</p>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-dark/40">Happy Travellers</p>
          </div>
          
          <div className="reveal lg:col-span-4 bg-[#fafaf9] rounded-[32px] p-10 flex flex-col justify-center items-center text-center border border-brand-dark/[0.03] hover:border-brand-dark/10 transition-colors">
            <p className="text-[54px] font-bold text-brand-dark leading-none tracking-tight mb-3">50+</p>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-dark/40">Global Destinations</p>
          </div>
          
          <div className="reveal lg:col-span-4 bg-[#fafaf9] rounded-[32px] p-10 flex flex-col justify-center items-center text-center border border-brand-dark/[0.03] hover:border-brand-dark/10 transition-colors">
            <p className="text-[54px] font-bold text-brand-dark leading-none tracking-tight mb-3">4.9★</p>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-dark/40">Average Rating</p>
          </div>
        </div>

        {/* ── 3. Minimal Pillars ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
          {pillars.map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className="reveal flex flex-col gap-4 group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-dark transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-brand-dark mb-2">{label}</h3>
                <p className="text-[15px] leading-[1.7] text-brand-dark/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
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
    <section id="about" ref={ref} className="bg-white overflow-hidden">

      {/* ── Top split: image + story ─────────────────────── */}
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-2 gap-16 lg:gap-24 items-center mobile-max:grid-cols-1 mobile-max:gap-10">

          {/* Left — image */}
          <div className="reveal-left relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-brand-dark/5">
              <Image
                src="/about-premium.png"
                alt="Premium travel concierge desk"
                fill
                className="object-cover"
              />
              {/* Inner white glow / edge fade overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_80px_30px_#ffffff]" />

              {/* Floating trust badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-6 py-5 rounded-2xl shadow-xl max-w-[190px]">
                <p className="text-[28px] font-semibold text-brand-dark leading-none tracking-tight">10+</p>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-dark/50 mt-2">Years Serving UAE Families</p>
              </div>
            </div>
          </div>

          {/* Right — story */}
          <div className="reveal flex flex-col gap-8">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-dark/35">
                About Skylight
              </span>
            </div>

            <h2
              className="text-[46px] leading-[1.04] tracking-[-2px] font-semibold text-brand-dark mobile-max:text-[32px] mobile-max:tracking-[-1.5px]"
            >
              Where Every Journey<br />
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

            <div className="space-y-4 text-[15px] leading-[1.8] text-brand-dark/60 max-w-md">
              <p>
                Founded in 2014 in Al Sajaa, Sharjah, Skylight Travel was built on a single belief: every family deserves to experience the world without the stress of planning it alone.
              </p>
              <p>
                Over a decade later, we&apos;ve helped more than 5,000 UAE families discover extraordinary destinations, from the Silk Road cities of Uzbekistan to the beaches of Thailand. We do this with complete transparency, fair pricing, and a team that genuinely cares.
              </p>
            </div>

            {/* Mini stats row */}
            <div className="flex gap-8 border-t border-brand-dark/8 pt-7">
              {[
                { n: "5,000+", l: "Happy Travellers" },
                { n: "50+", l: "Destinations" },
                { n: "4.9★", l: "Average Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-[26px] font-semibold text-brand-dark leading-none tracking-tight">{s.n}</p>
                  <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-brand-dark/35 mt-1.5">{s.l}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-brand-dark hover:text-brand-dark/60 transition-colors w-fit group"
            >
              Our Full Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom: pillar cards ─────────────────────────── */}
      <div className="border-t border-brand-dark/8 bg-[#fafaf9]">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="reveal grid grid-cols-3 divide-x divide-brand-dark/8 mobile-max:grid-cols-1 mobile-max:divide-x-0 mobile-max:divide-y">
            {pillars.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex flex-col gap-5 px-10 py-12 mobile-max:px-5 mobile-max:py-8 hover:bg-brand-green/[0.03] transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl border border-brand-dark/10 flex items-center justify-center text-brand-dark group-hover:border-brand-dark/30 group-hover:bg-brand-dark group-hover:text-brand-green transition-all duration-300">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-brand-dark mb-2">{label}</p>
                  <p className="text-[13px] leading-[1.75] text-brand-dark/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

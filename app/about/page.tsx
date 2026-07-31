import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, Users, Award, MapPin, Phone, MessageCircle, 
  ShieldCheck, Sparkles, Clock, ArrowLeft, HeartHandshake
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Skylight Travel | Trusted Travel Agency in Sharjah, UAE",
  description:
    "Learn about Skylight Travel — Sharjah's trusted travel agency with 5,000+ happy UAE families. Your journey, our passion.",
  alternates: { canonical: "https://www.skylighttourism.com/about" },
  openGraph: {
    title: "About Skylight Travel | Trusted Travel Agency in Sharjah, UAE",
    description: "Sharjah's trusted travel agency with 6+ years experience and 5,000+ happy UAE families.",
    url: "https://www.skylighttourism.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Skylight Travel Sharjah UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Skylight Travel | Sharjah UAE",
    description: "Sharjah's trusted travel agency with 6+ years experience.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Skylight Travel UAE",
  description: "Sharjah's premier travel agency with 6+ years of experience and 5,000+ happy UAE families served.",
  publisher: {
    "@type": "TravelAgency",
    name: "Skylight Travel",
    url: "https://www.skylighttourism.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skylighttourism.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.skylighttourism.com/about" },
  ],
};

export default function AboutPage() {
  const stats = [
    { value: "5,000+", label: "UAE Families Served", sub: "Trusted since 2020" },
    { value: "50+", label: "Global Destinations", sub: "Worldwide holiday packages" },
    { value: "99.4%", label: "Visa Approval Rate", sub: "Schengen, Japan, UK & more" },
    { value: "4.9★", label: "Google Rating", sub: "Over 800+ 5-star reviews" },
  ];

  const milestones = [
    { year: "2020", title: "Founded as Highsky Travels", desc: "Started in Sharjah as Highsky Travels with a clear mission to simplify visa processing & holiday planning for UAE residents." },
    { year: "2024", title: "5,000+ Families Milestone", desc: "Celebrated serving over 5,000 UAE families with personalized 1-on-1 WhatsApp & walk-in service." },
    { year: "2026", title: "Rebranded to Skylight Travel", desc: "Officially rebranded to Skylight Travel, introducing enhanced digital services and premium custom holiday experiences." },
  ];

  const features = [
    { 
      icon: <Check className="w-6 h-6" />, 
      title: "Transparent Pricing", 
      desc: "No hidden fees or unexpected surcharges. Every quote is itemized, detailed, and clear before you pay." 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Dedicated Consultant", 
      desc: "A real human travel expert — reachable via WhatsApp, phone, or office walk-in — handles your trip from start to finish." 
    },
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      title: "99.4% Visa Success", 
      desc: "Deep expertise in Schengen, Japan, US, UK, and Silk Road visas with meticulous document review." 
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "UAE-Certified Experts", 
      desc: "Fully licensed by UAE Tourism Authorities with 6+ years of local experience." 
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      title: "24/7 On-Trip Assistance", 
      desc: "Our UAE team is available on WhatsApp throughout your journey for flight changes or emergency support." 
    },
    { 
      icon: <HeartHandshake className="w-6 h-6" />, 
      title: "Best Price Promise", 
      desc: "We match or beat any comparable travel quote while delivering 4-star handpicked hotel stays." 
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> About Skylight Travel
            </div>

            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] font-semibold text-white mb-6">
              Crafting Unforgettable <br className="hidden sm:inline" />
              <span className="text-gradient">Journeys Since 2020</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-10 max-w-2xl">
              Sharjah&apos;s trusted travel & tourism company — headquartered in Sharjah, UAE. Committed to delivering seamless holiday packages and hassle-free visas with genuine care.
            </p>

            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> UAE Licensed Agency
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-green" /> 6+ Years Experience
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-brand-green" /> Sharjah HQ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Glow Banner */}
      <section className="bg-[#01251d] py-10 border-y border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s) => (
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
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-brand-green">Our Story</span>
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
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-xl text-[11px] font-black tracking-widest uppercase"
                  style={{ background: "rgba(166,238,66,0.15)", border: "1px solid rgba(166,238,66,0.3)", color: "#a6ee42" }}>
                  Est. 2020
                </div>

                {/* Bottom: stats + HQ pill */}
                <div className="absolute bottom-0 left-0 right-0 p-7 space-y-4">
                  <div className="flex items-center gap-3">
                    {[{ v: "5,000+", l: "Families Served" }, { v: "4.9★", l: "Google Rating" }, { v: "6+", l: "Years Active" }].map((s, i) => (
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
                      <p className="text-white text-[13px] font-semibold leading-none">Skylight Travel HQ</p>
                      <p className="text-white/40 text-[11px] mt-1">Sharjah, United Arab Emirates</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                      <span className="text-brand-green text-[9px] font-black tracking-widest uppercase">Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Full-height flex column — headline top, milestones bottom ── */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-10 lg:pl-6">

              {/* TOP: Headline + Story narrative */}
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white tracking-tight leading-[1.05] mb-8">
                  Built on Trust,{" "}
                  <span style={{ background: "linear-gradient(135deg, #a6ee42 0%, #7ed600 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Care &amp; Dedication
                  </span>
                </h2>
                <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.9] text-white/55 font-light max-w-xl">
                  <p>
                    In <span className="text-white font-semibold">2020</span>, a small team in Sharjah started{" "}
                    <span className="text-brand-green font-semibold">Highsky Travels</span> with a simple belief — every UAE family deserves to see the world without the stress of planning it alone.
                  </p>
                  <p>
                    Six years on, in <span className="text-white font-semibold">2026</span> we rebranded to{" "}
                    <span className="text-brand-green font-semibold">Skylight Travel</span>, bringing a fresh digital experience to over 5,000 families who trust us with their most precious moments.
                  </p>
                </div>
              </div>

              {/* BOTTOM: Milestone cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {milestones.map((m, i) => (
                  <div key={m.year} className="group relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* Top accent bar — full green for latest, dim for others */}
                    <div className="h-[3px] w-full transition-all duration-300"
                      style={{
                        background: i === milestones.length - 1
                          ? "linear-gradient(to right, #a6ee42, #6dcb00)"
                          : "rgba(166,238,66,0.2)",
                      }}
                    />

                    <div className="p-5">
                      {/* Year + Latest badge row */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-black tracking-[0.2em] text-brand-green uppercase">{m.year}</span>
                        {i === milestones.length - 1 && (
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(166,238,66,0.1)", border: "1px solid rgba(166,238,66,0.2)" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                            <span className="text-[8px] font-black text-brand-green tracking-widest uppercase">Latest</span>
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
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              What Sets Skylight Apart
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light mt-3">
              We treat your holiday as if it were our own family&apos;s trip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div 
                key={f.title} 
                className="p-8 rounded-2xl bg-brand-card/80 border border-white/10 hover:border-brand-green/40 hover:bg-brand-card transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-black transition-colors duration-300">
                  {f.icon}
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
                Personalized Service
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Speak to a Skylight Travel Specialist Today
              </h3>
              <p className="text-white/60 text-sm font-light mt-2 max-w-xl">
                Whether you need a quick visa assessment or want us to craft a custom 7-day itinerary, our UAE team is standing by.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/971582738508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-black px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black" /> Chat on WhatsApp
              </a>
              <a
                href="tel:+971582738508"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2.5 bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase hover:bg-white/20 transition-all border border-white/10"
              >
                <Phone className="w-4 h-4 text-brand-green" /> Call Us Now
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

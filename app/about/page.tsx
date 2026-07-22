import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, Users, Award, MapPin, Phone, MessageCircle, 
  ShieldCheck, Sparkles, Clock, Globe, ArrowLeft, Star, HeartHandshake
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Skylight Travel | Trusted Travel Agency in Sharjah, UAE",
  description:
    "Learn about Skylight Travel — Sharjah's trusted travel agency with 10+ years experience, 5,000+ happy UAE families, and dedicated consultants in Al Sajaa. Your journey, our passion.",
  alternates: { canonical: "https://skylighttravel.ae/about" },
};

export default function AboutPage() {
  const stats = [
    { value: "5,000+", label: "UAE Families Served", sub: "Trusted since 2014" },
    { value: "50+", label: "Global Destinations", sub: "Worldwide holiday packages" },
    { value: "99.4%", label: "Visa Approval Rate", sub: "Schengen, Japan, UK & more" },
    { value: "4.9★", label: "Google Rating", sub: "Over 800+ 5-star reviews" },
  ];

  const milestones = [
    { year: "2014", title: "Founded in Sharjah", desc: "Started in Al Sajaa, Sharjah with a clear mission to simplify visa processing & holiday planning for UAE residents." },
    { year: "2018", title: "Expanded Destinations", desc: "Launched curated packages across Uzbekistan, Armenia, Georgia, Thailand, and Azerbaijan." },
    { year: "2024", title: "5,000+ Families Milestone", desc: "Celebrated serving over 5,000 UAE families with personalized 1-on-1 WhatsApp & walk-in service." },
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
      desc: "Fully licensed by UAE Tourism Authorities with 10+ years of local experience." 
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
              <span className="text-gradient">Journeys Since 2014</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-10 max-w-2xl">
              Sharjah&apos;s trusted travel & tourism company — headquartered in Al Sajaa, UAE. Committed to delivering seamless holiday packages and hassle-free visas with genuine care.
            </p>

            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> UAE Licensed Agency
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-green" /> 10+ Years Experience
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-brand-green" /> Al Sajaa, Sharjah HQ
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

      {/* Our Story & Milestone Journey (Dark Theme) */}
      <section className="bg-brand-section py-20 lg:py-28 relative overflow-hidden">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">Our Legacy</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                Built on Trust, Care & Dedication
              </h2>
              
              <div className="space-y-4 text-base leading-relaxed text-white/70 font-light mb-10">
                <p>
                  Skylight Travel was founded in 2014 with a simple promise: to eliminate the confusion and stress of international travel for every resident living in the United Arab Emirates.
                </p>
                <p>
                  From our headquarters in Al Sajaa, Sharjah, we have grown from a local ticket office into a full-service travel company — managing custom holiday itineraries, express visa approvals, 4-star hotel stays, and flight bookings for over 5,000 families every year.
                </p>
              </div>

              {/* Milestones Timeline */}
              <div className="space-y-6 border-l-2 border-brand-green/20 pl-6 sm:pl-8 ml-2">
                {milestones.map((m) => (
                  <div key={m.year} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-green text-brand-green font-mono text-[10px] flex items-center justify-center group-hover:bg-brand-green group-hover:text-black transition-colors">
                      •
                    </div>
                    <span className="text-xs font-bold text-brand-green tracking-widest uppercase">{m.year}</span>
                    <h3 className="text-lg font-semibold text-white mt-0.5">{m.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light mt-1 max-w-xl">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Photo Card Showcase (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-brand-card group">
                <div className="relative h-[380px] sm:h-[460px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80"
                    alt="Skylight Travel HQ in Sharjah UAE"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012119] via-[#012119]/40 to-transparent" />
                  
                  {/* Glass Info Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Skylight Travel Headquarters</p>
                        <p className="text-white/60 text-xs mt-0.5">Al Sajaa, Sharjah, United Arab Emirates</p>
                        <p className="text-[11px] text-brand-green font-mono mt-2 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" /> Open 6 Days a Week (Walk-ins Welcome)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

import type { Metadata } from "next";
import Image from "next/image";
import { Check, Users, Award, MapPin, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Skylight Travel | Trusted Travel Agency in Sharjah, UAE",
  description:
    "Learn about Skylight Travel — Sharjah's trusted travel agency with 10+ years experience, 5,000+ happy travellers, and a dedicated team in Al Sajaa. Your journey, our passion.",
  alternates: { canonical: "https://skylighttravel.ae/about" },
};


export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark pt-40 pb-20 mobile-max:pt-32 mobile-max:pb-14">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-4">About Us</p>
          <h1 className="text-[64px] leading-[1.0] tracking-[-3px] font-semibold text-white mb-6
            md-tablet:text-[46px] mobile-max:text-[36px]">
            Where Every Journey<br />Begins with Trust
          </h1>
          <p className="text-base leading-7 text-white/60 max-w-2xl">
            Skylight Travel is Sharjah&apos;s premier travel and tourism company — headquartered in Al Sajaa, UAE, committed to delivering seamless, unforgettable travel experiences since 2014.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 mobile-max:py-14">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-20 items-center mobile-max:grid-cols-1 mobile-max:gap-10">
            <div>
              <h2 className="text-[44px] tracking-[-2px] font-semibold text-brand-dark mb-6 mobile-max:text-3xl">
                Our Story
              </h2>
              <div className="space-y-5 text-base leading-7 text-brand-dark/65">
                <p>
                  Skylight Travel was founded with a clear mission: to make world-class travel accessible to every family, professional, and adventurer living in the UAE. We started small, helping residents of Sharjah navigate the complexities of international travel — and never looked back.
                </p>
                <p>
                  Today, we serve thousands of UAE travellers every year — from first-time visitors to Uzbekistan&apos;s Silk Road cities, to families enjoying Kerala&apos;s tranquil backwaters, and business travellers needing swift visa processing for Europe and the Americas.
                </p>
                <p>
                  As a one-stop travel solution, we handle everything: custom holiday packages, visa applications, flight bookings, hotel reservations, Umrah & Hajj packages, car rentals, and cruise bookings — all under one roof, with a team you can actually call.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { n: "5,000+", l: "Happy Travellers" },
                  { n: "50+", l: "Destinations" },
                  { n: "10+", l: "Years Experience" },
                  { n: "4.9★", l: "Google Rating" },
                ].map((s) => (
                  <div key={s.l} className="bg-brand-dark p-5">
                    <p className="text-3xl font-semibold text-brand-green">{s.n}</p>
                    <p className="text-xs tracking-widest uppercase text-white/40 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[520px] mobile-max:h-[300px] bg-brand-dark overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80"
                alt="Skylight Travel team in Sharjah UAE office"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">Skylight Travel HQ</p>
                    <p className="text-white/50 text-xs">Al Sajaa, Sharjah, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-section py-24 mobile-max:py-14">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-[44px] tracking-[-2px] font-semibold text-white mb-12 mobile-max:text-3xl">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-3 gap-6 mobile-max:grid-cols-1 md-tablet:grid-cols-2">
            {[
              { icon: <Check className="w-6 h-6" />, title: "Transparent Pricing", desc: "No hidden fees. Every quote is detailed, itemised, and final." },
              { icon: <Users className="w-6 h-6" />, title: "Personal Consultants", desc: "A real human — reachable via WhatsApp, phone, or walk-in — handles your trip from start to finish." },
              { icon: <Award className="w-6 h-6" />, title: "UAE-Certified Experts", desc: "Our team holds UAE Travel Agency licences and destination specialist certifications." },
              { icon: <MapPin className="w-6 h-6" />, title: "Local & Global Reach", desc: "Rooted in Sharjah, connected to 50+ destinations worldwide." },
              { icon: <MessageCircle className="w-6 h-6" />, title: "24/7 Support on Trips", desc: "Our UAE team is available throughout your journey via WhatsApp." },
              { icon: <Phone className="w-6 h-6" />, title: "Best Price Promise", desc: "We match or beat any comparable quote — guaranteed." },
            ].map((v, i) => (
              <div key={i} className="p-7 bg-brand-card border border-white/10 hover:border-brand-green/40 transition-colors group">
                <div className="text-brand-green mb-4">{v.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm leading-6 text-white/50">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}

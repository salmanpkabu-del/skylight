import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, MessageCircle, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Skylight Travel | Travel Agency in Al Sajaa, Sharjah",
  description:
    "Contact Skylight Travel in Al Sajaa, Sharjah, UAE. Speak with our travel consultants via WhatsApp +971 58 273 8508, call, or email info@skylighttravels.com.",
  alternates: { canonical: "https://skylighttravel.ae/contact" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Skylight Travel",
  description: "Get in touch with Skylight Travel consultants in Sharjah, UAE.",
  mainEntity: {
    "@type": "TravelAgency",
    name: "Skylight Travel",
    telephone: "+971582738508",
    email: "info@skylighttravels.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Sajaa",
      addressLocality: "Sharjah",
      addressCountry: "AE",
    },
  },
};

const contactFaqs = [
  { 
    q: "Do I need an appointment to visit your Sharjah office?", 
    a: "No appointment needed! Walk-ins are always welcome Sunday to Friday, 9:00 AM – 9:00 PM at our Al Sajaa, Sharjah office." 
  },
  { 
    q: "How quickly will I receive my custom travel quote?", 
    a: "Our consultants respond within 2 to 5 minutes on WhatsApp and within 2 hours for email inquiries with detailed itemized options." 
  },
  { 
    q: "Can you assist with urgent visa processing?", 
    a: "Yes! We specialize in express e-visa applications for Uzbekistan, Azerbaijan, Armenia, Schengen, UK, Japan, and US visa appointments." 
  },
  { 
    q: "What payment methods do you accept?", 
    a: "We accept credit/debit cards, online bank transfers, and cash payments at our Sharjah office." 
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
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
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Contact Skylight Travel
            </div>

            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] font-semibold text-white mb-6">
              Plan Your Next <br />
              <span className="text-gradient">Adventure Today</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-8 max-w-xl">
              Speak directly to our UAE-based travel consultants — personalized advice, transparent quotes, zero obligation.
            </p>

            {/* Quick Response Guarantees */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> &lt; 5 Min WhatsApp Response
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-green" /> &lt; 2 Hour Email Response
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> Zero Hidden Fees
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
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Got Questions?</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {contactFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-brand-card/80 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/40 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none font-semibold text-white text-base sm:text-lg">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    {faq.q}
                  </span>
                  <span className="text-brand-green group-open:rotate-180 transition-transform text-xl ml-4">
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

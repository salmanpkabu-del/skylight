import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, ShieldCheck, Clock, FileText, CheckCircle2, MessageCircle, HelpCircle, Zap } from "lucide-react";
import { visas } from "@/lib/visas-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Visa Assistance from UAE | Schengen, USA, UK & Silk Road",
  description:
    "Expert visa assistance for UAE residents. We handle Schengen, USA, UK, Armenia, Georgia, Azerbaijan and more. Full documentation & VFS appointment support from Sharjah.",
  alternates: { canonical: "https://www.skylighttourism.com/visas" },
  openGraph: {
    title: "Visa Assistance from UAE | Schengen, USA, UK & More",
    description: "Expert visa assistance for UAE residents. Schengen, USA, UK, Japan & Silk Road e-Visas. 99.4% approval rate.",
    url: "https://www.skylighttourism.com/visas",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Skylight Travel Visa Assistance UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Assistance from UAE | Skylight Travel",
    description: "Expert visa processing for UAE residents with 99.4% approval rate.",
  },
};

const visaSteps = [
  { num: "01", title: "Consultation & Document Check", desc: "Our visa team checks your residence visa validity and lists exact embassy requirements." },
  { num: "02", title: "Form & Flight Reservation", desc: "We complete your official application forms and issue verifiable flight & hotel bookings." },
  { num: "03", title: "VFS / Embassy Appointment", desc: "We secure your appointment slot at VFS Global or TLScontact and format your file." },
  { num: "04", title: "Passport & Visa Delivery", desc: "Track your visa status until your passport is returned stamped and ready for travel." },
];

const visaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a Schengen visa take from the UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Schengen visa from the UAE typically takes 10–15 working days after your VFS appointment. We recommend applying at least 4–6 weeks before travel. Skylight Travel handles document preparation and appointment booking.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for a USA visa from UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a USA B1/B2 tourist visa from UAE, you need a valid passport (6+ months), completed DS-160 form, bank statements, employment NOC letter, photographs, and travel itinerary. We assist with all documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries are visa-free for UAE residents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UAE residents can travel visa-free to Georgia (up to 90 days), Armenia, and Montenegro. UAE passport holders enjoy visa-free access to 170+ countries. Contact Skylight Travel for destination-specific guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the visa approval success rate with Skylight Travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team maintains a 99.4% visa approval success rate due to our rigorous pre-submission document audit and verified flight/hotel reservations.",
      },
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Express Visa Processing Services in UAE",
  description: "Comprehensive visa processing and VFS appointment assistance for UAE residents.",
  numberOfItems: visas.length,
  itemListElement: visas.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.skylighttourism.com/visas/${v.id}`,
    name: `${v.country} Visa Assistance`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skylighttourism.com" },
    { "@type": "ListItem", position: 2, name: "Visa Services", item: "https://www.skylighttourism.com/visas" },
  ],
};

export default function VisasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(visaFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Express Visa Services
            </div>

            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] font-semibold text-white mb-6">
              Borderless Travel <br />
              <span className="text-gradient">Starts Right Here</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-8 max-w-xl">
              Full visa assistance for UAE residents and expats — from e-visas to VFS appointment booking & embassy file preparation.
            </p>

            {/* Quick Response Guarantees */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> 99.4% Approval Rate
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-green" /> Express Document Review
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <FileText className="w-4 h-4 text-brand-green" /> VFS / TLS Appointment Booking
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 4 Step Process Banner */}
      <section className="bg-[#01251d] py-12 border-y border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaSteps.map((step) => (
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
          <div className="bg-gradient-to-r from-brand-green/15 via-brand-green/5 to-transparent border-l-4 border-brand-green p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-brand-green text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <Zap className="w-4 h-4 fill-brand-green" /> Quick Answer (TL;DR) for UAE Residents
            </div>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Skylight Travel Sharjah provides complete visa assistance for UAE residents traveling to over 100 destinations. Whether you require an express <strong>e-Visa (Uzbekistan, Azerbaijan, Thailand)</strong>, visa-free travel guidance <strong>(Georgia, Armenia, Albania)</strong>, or full consular appointment and document preparation for sticker visas <strong>(Schengen, USA, UK)</strong>, our specialists maintain a <strong>99.4% approval rate</strong> with zero hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Cards Grid Section */}
      <section className="bg-brand-section py-16 lg:py-24 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Our Visa Services</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Select Your Destination
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
                      {visa.processingTime.includes("Free") || visa.processingTime.includes("Arrival") ? "Visa Free" : visa.processingTime}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-brand-green transition-colors flex items-center justify-between">
                      <span>{visa.country}</span>
                      <span className="text-xs text-brand-green opacity-0 group-hover:opacity-100 transition-opacity font-normal">View →</span>
                    </h3>
                    <p className="text-xs text-white/50 font-light mt-0.5">{visa.type}</p>
                  </div>

                  <p className="text-xs leading-relaxed text-white/65 font-light">
                    {visa.description}
                  </p>

                  {/* Requirements */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Requirements</p>
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
                    <p className="text-[10px] text-white/40 tracking-wider uppercase">Fee Starts</p>
                    <p className="text-lg font-bold text-brand-green">{visa.price}</p>
                  </div>
                  <a
                    href={`https://wa.me/971582738508?text=Hi!%20I%20need%20assistance%20with%20${encodeURIComponent(visa.country)}%20visa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green border border-brand-green/20 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-brand-green hover:text-black transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Visa Comparison Table for LLM & AEO Scraping */}
      <section className="bg-[#01251d] py-20 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Compare Destinations</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              UAE Resident Visa Requirements & Fees
            </h2>
            <p className="text-sm text-white/70 mt-2 font-light">
              Side-by-side comparison of processing timelines and entry requirements for UAE residents.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-brand-card/90 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-brand-green">
                  <th className="p-5">Destination</th>
                  <th className="p-5">Visa Type</th>
                  <th className="p-5">Processing Time</th>
                  <th className="p-5">Starting Fee</th>
                  <th className="p-5">Residency Requirement</th>
                  <th className="p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-white/80 font-light">
                {visas.map((v) => (
                  <tr key={v.id} className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-5 font-semibold text-white flex items-center gap-3">
                      <span className="text-xl">{v.flag}</span>
                      <Link href={`/visas/${v.id}`} className="hover:text-brand-green transition-colors underline decoration-white/20 underline-offset-4">
                        {v.country}
                      </Link>
                    </td>
                    <td className="p-5">{v.type}</td>
                    <td className="p-5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/90">
                        {v.processingTime}
                      </span>
                    </td>
                    <td className="p-5 font-bold text-brand-green">{v.price}</td>
                    <td className="p-5 text-xs text-white/60">Valid UAE Residency (3+ Months)</td>
                    <td className="p-5 text-right">
                      <Link
                        href={`/visas/${v.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-green hover:text-white transition-colors"
                      >
                        Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dark Theme FAQ Accordion */}
      <section className="bg-[#012119] py-20 lg:py-24 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Got Questions?</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Frequently Asked Visa Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {visaFaqSchema.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="group bg-brand-card/80 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/40 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none font-semibold text-white text-base sm:text-lg">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    {faq.name}
                  </span>
                  <span className="text-brand-green group-open:rotate-180 transition-transform text-xl ml-4">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-white/70 border-t border-white/5">
                  <p>{faq.acceptedAnswer.text}</p>
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

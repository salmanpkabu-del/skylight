import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Star, Users, ArrowRight, Sparkles, ArrowLeft, CheckCircle2, MessageCircle, HelpCircle } from "lucide-react";
import { packages } from "@/lib/packages-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Holiday Packages from UAE 2025 | Uzbekistan, Thailand, Georgia & More",
  description:
    "Book custom holiday packages from UAE with Skylight Travel. Explore Uzbekistan, Armenia, Thailand, Georgia, Azerbaijan, Kerala & more. Packages from AED 1,699/person.",
  alternates: { canonical: "https://skylighttravel.ae/packages" },
  openGraph: {
    title: "Holiday Packages from UAE 2025 | Skylight Travel",
    description: "Custom holiday packages from Sharjah & Dubai. Uzbekistan, Thailand, Georgia and more from AED 1,699.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do holiday packages from UAE cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holiday packages from UAE start from AED 1,699 per person for 4-night trips to Uzbekistan or Azerbaijan. Packages to Thailand, Georgia, and Armenia start from AED 1,999–2,899 per person including flights, hotels, and guided tours.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in Skylight Travel packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skylight Travel packages typically include return flights from UAE, 4-star hotel accommodation, daily breakfast, all airport transfers, guided city tours, and travel insurance. Visa assistance is also provided.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise a holiday package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All Skylight Travel packages can be fully customised for your travel dates, budget, group size, and preferred hotels. Contact our team via WhatsApp or phone for a personalised quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are visa fees included in the package price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For visa-free destinations (such as Georgia and Armenia for UAE residents), no visa fees apply. For e-visa destinations like Uzbekistan or Azerbaijan, full visa assistance and processing are included.",
      },
    },
  ],
};

export default function PackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <Sparkles className="w-3.5 h-3.5" /> Holiday Packages 2025
            </div>

            <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] font-semibold text-white mb-6">
              Curated Holiday Escapes <br />
              <span className="text-gradient">From the UAE</span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 leading-relaxed font-light mb-8 max-w-xl">
              All-inclusive travel packages crafted by UAE specialists — flights, 4-star hotels, guided tours, and complete visa assistance included.
            </p>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> Packages from AED 1,699
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> Flight + 4★ Hotel Included
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> 24/7 WhatsApp Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Cards Grid Section */}
      <section className="bg-brand-section py-20 lg:py-28 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/package/${pkg.slug}`}
                className="group flex flex-col bg-brand-card/90 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/40 hover:shadow-[0_0_30px_rgba(166,238,66,0.15)] transition-all duration-300"
              >
                {/* Package Cover Image Box */}
                <div className="relative h-60 w-full overflow-hidden bg-[#012119]">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} holiday package from UAE`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-brand-green text-black text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow-[0_0_15px_rgba(166,238,66,0.3)]">
                    {pkg.badge}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {pkg.country}
                    </span>
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-brand-green font-mono">
                      {pkg.destination}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-brand-green transition-colors">
                      {pkg.name}
                    </h2>
                    <p className="text-xs text-white/60 font-light mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Quick Info Pills */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 pt-1">
                    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-brand-green" /> {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-brand-green" /> {pkg.groupSize} pax
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 fill-brand-green text-brand-green" /> {pkg.rating} ({pkg.reviewCount})
                    </span>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div>
                      <p className="text-[10px] text-white/40 tracking-wider uppercase">Starting From</p>
                      <p className="text-2xl font-bold text-white tracking-tight">
                        {pkg.currency} {pkg.price.toLocaleString()}
                        <span className="text-xs font-normal text-white/50"> /person</span>
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-brand-green group-hover:text-black flex items-center justify-center text-brand-green transition-all duration-300">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Theme FAQ Accordion */}
      <section className="bg-[#012119] py-20 lg:py-24 border-t border-white/10">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Got Questions?</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
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

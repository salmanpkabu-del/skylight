import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Star, Users, ArrowRight } from "lucide-react";
import { packages } from "@/lib/packages-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Holiday Packages from UAE 2025 | Uzbekistan, Thailand, Georgia & More",
  description:
    "Book custom holiday packages from UAE with Skylight Travel. Explore Uzbekistan, Armenia, Thailand, Georgia, Azerbaijan, Kerala & more. Packages from AED 1,799/person.",
  alternates: { canonical: "https://skylighttravel.ae/packages" },
  openGraph: {
    title: "Holiday Packages from UAE 2025 | Skylight Travel",
    description: "Custom holiday packages from Sharjah & Dubai. Uzbekistan, Thailand, Georgia and more from AED 1,799.",
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
        text: "Holiday packages from UAE start from AED 1,799 per person for 5-night trips to Azerbaijan or Georgia. Packages to Thailand and Uzbekistan start from AED 2,699–3,499 per person including flights, hotels, and guided tours.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in Skylight Travel packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skylight Travel packages typically include return flights from UAE, hotel accommodation, daily breakfast, all airport transfers, guided city tours, and travel insurance. Visa assistance is also provided.",
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
  ],
};

export default function PackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      {/* Hero */}
      <section className="bg-brand-dark pt-40 pb-20 mobile-max:pt-32 mobile-max:pb-14">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-4">
            Holiday Packages
          </p>
          <h1 className="text-[64px] leading-[1.0] tracking-[-3px] font-semibold text-white mb-6
            md-tablet:text-[46px] mobile-max:text-[36px] mobile-max:tracking-[-1.5px]">
            Unforgettable Trips<br />from the UAE
          </h1>
          <p className="text-base leading-7 text-white/60 max-w-xl">
            Custom holiday packages crafted by UAE travel experts — flights, hotels, guided tours, and visa assistance all included.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="bg-brand-section py-20 mobile-max:py-12">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-5 md-tablet:grid-cols-2 mobile-max:grid-cols-1">
            {packages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/package/${pkg.slug}`}
                className="group flex flex-col bg-brand-card border border-white/10 overflow-hidden hover:border-brand-green/40 transition-colors duration-300"
              >
                <div className="pkg-img-wrap relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} holiday package from UAE`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-brand-green text-black text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1">
                    {pkg.badge}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-brand-green/70 mb-1.5">{pkg.country}</p>
                    <h2 className="text-xl font-semibold text-white">{pkg.name}</h2>
                    <p className="text-sm text-white/50 mt-1">{pkg.tagline}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{pkg.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{pkg.groupSize} pax</span>
                    <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-brand-green text-brand-green" />{pkg.rating} ({pkg.reviewCount})</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div>
                      <p className="text-[10px] text-white/30 tracking-wider uppercase">From</p>
                      <p className="text-2xl font-semibold text-white">{pkg.currency} {pkg.price.toLocaleString()}<span className="text-sm font-normal text-white/40"> /person</span></p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-green group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="bg-white py-20 mobile-max:py-12">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-[40px] tracking-[-2px] font-semibold text-brand-dark mb-10 mobile-max:text-3xl text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border-b border-brand-dark/10 pb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{faq.name}</h3>
                <p className="text-base leading-7 text-brand-dark/60">{faq.acceptedAnswer.text}</p>
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

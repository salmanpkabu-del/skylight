import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { visas } from "@/lib/visas-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Visa Assistance from UAE | Schengen, USA, NZ & More",
  description:
    "Expert visa assistance for UAE residents. We handle Schengen, USA, New Zealand, Armenia, Georgia, Azerbaijan and more. Full documentation support from Sharjah.",
  alternates: { canonical: "https://skylighttravel.ae/visas" },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for a Visa from UAE with Skylight Travel",
  description: "Step-by-step process for UAE residents to secure international tourist visas.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Consultation & Document Review",
      text: "Share your destination and travel dates. Our visa team checks your residence visa validity and lists exact document requirements.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Form Filling & Itinerary Reservation",
      text: "We fill out your official embassy forms and issue verifiable flight and hotel reservations.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Appointment & Submission",
      text: "We secure your appointment at VFS Global or TLScontact and prepare your biometrics file.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Visa Delivery & Travel Preparation",
      text: "Track your visa status in real-time until your passport is returned with the stamped visa.",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://skylighttravel.ae" },
    { "@type": "ListItem", position: 2, name: "Visas", item: "https://skylighttravel.ae/visas" },
  ],
};

const visaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does Schengen visa take from UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Schengen visa from the UAE typically takes 10–15 working days. We recommend applying at least 4–6 weeks before travel. Skylight Travel handles the complete VFS Global submission process.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for a USA visa from UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a USA B1/B2 tourist visa from UAE, you need a valid passport (6+ months), completed DS-160 form, bank statements, employment letter, photographs, and a travel itinerary. We assist with all documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries are visa-free for UAE residents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UAE residents can travel visa-free to Georgia (up to 1 year), Armenia, Albania, and many more destinations. UAE passport holders enjoy visa-free access to 170+ countries. Contact Skylight Travel for destination-specific guidance.",
      },
    },
  ],
};

export default function VisasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(visaFaqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark pt-40 pb-20 mobile-max:pt-32 mobile-max:pb-14">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-4">Visa Services</p>
          <h1 className="text-[64px] leading-[1.0] tracking-[-3px] font-semibold text-white mb-6
            md-tablet:text-[46px] mobile-max:text-[36px] mobile-max:tracking-[-1.5px]">
            Borderless Travel<br />Starts Here
          </h1>
          <p className="text-base leading-7 text-white/60 max-w-xl">
            Full visa assistance for UAE residents and expats — from e-visa applications to embassy interviews, we handle every step.
          </p>
        </div>
      </section>

      {/* Visa Cards */}
      <section className="bg-brand-section py-20 mobile-max:py-12">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-4 gap-5 md-tablet:grid-cols-2 mobile-max:grid-cols-1">
            {visas.map((visa) => (
              <div
                key={visa.id}
                className="flex flex-col gap-5 p-7 bg-brand-card border border-white/10 hover:border-brand-green/40 transition-colors duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl">{visa.flag}</span>
                  <span className={`text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 ${
                    visa.processingTime.includes("Free") || visa.processingTime.includes("Arrival")
                      ? "bg-brand-green text-black"
                      : "bg-white/10 text-white/70"
                  }`}>
                    {visa.processingTime.includes("Free") || visa.processingTime.includes("Arrival") ? "Visa Free" : visa.processingTime}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">{visa.country}</h2>
                  <p className="text-sm text-white/50 mt-0.5">{visa.type}</p>
                </div>
                <p className="text-sm leading-6 text-white/55">{visa.description}</p>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Requirements</p>
                  <ul className="space-y-1.5">
                    {visa.requirements.slice(0, 3).map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-white/50">
                        <Check className="w-3 h-3 text-brand-green flex-shrink-0" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xl font-semibold text-brand-green">{visa.price}</span>
                  <a
                    href={`https://wa.me/971582738508?text=Hi!%20I%20need%20help%20with%20${encodeURIComponent(visa.country)}%20visa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/40 hover:text-brand-green transition-colors group-hover:text-brand-green"
                  >
                    Get Help <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 mobile-max:py-12">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-[40px] tracking-[-2px] font-semibold text-brand-dark mb-10 mobile-max:text-3xl">Visa FAQs</h2>
          <div className="space-y-6 max-w-3xl">
            {visaFaqSchema.mainEntity.map((faq, i) => (
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, CheckCircle2, Clock, ShieldCheck, FileText, 
  MessageCircle, HelpCircle, Zap 
} from "lucide-react";
import { visas } from "@/lib/visas-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return visas.map((v) => ({ slug: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const visa = visas.find((v) => v.id === slug);
  if (!visa) return { title: "Visa Not Found" };

  return {
    title: `${visa.country} Visa Assistance from UAE | ${visa.type} — AED ${visa.price}`,
    description: `Get your ${visa.country} ${visa.type} from Dubai or Sharjah, UAE. Processing time: ${visa.processingTime}. Full VFS & embassy document preparation by Skylight Travel.`,
    alternates: { canonical: `https://www.skylighttourism.com/visas/${visa.id}` },
    openGraph: {
      title: `${visa.country} Visa Assistance from UAE | Skylight Travel`,
      description: `Fast & reliable ${visa.country} visa assistance for UAE residents. 99.4% approval rate. Apply today via WhatsApp!`,
      type: "website",
      url: `https://www.skylighttourism.com/visas/${visa.id}`,
    },
  };
}

export default async function VisaDetailPage({ params }: Props) {
  const { slug } = await params;
  const visa = visas.find((v) => v.id === slug);
  if (!visa) notFound();

  // JSON-LD Schemas for AEO & SEO Dominance
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${visa.country} ${visa.type} Assistance from UAE`,
    description: visa.description,
    image: `https://flagcdn.com/w320/${visa.code}.png`,
    brand: { "@type": "Brand", name: "Skylight Travel" },
    offers: {
      "@type": "Offer",
      price: visa.price.replace(/[^0-9]/g, "") || "0",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      seller: { "@type": "TravelAgency", name: "Skylight Travel" },
    },
  };

  const howToJsonLd = visa.steps ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Apply for a ${visa.country} Visa from UAE`,
    description: `Step-by-step application guide for UAE residents applying for the ${visa.country} ${visa.type}.`,
    step: visa.steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.desc,
    })),
  } : null;

  const faqJsonLd = visa.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visa.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skylighttourism.com" },
      { "@type": "ListItem", position: 2, name: "Visa Services", item: "https://www.skylighttourism.com/visas" },
      { "@type": "ListItem", position: 3, name: `${visa.country} Visa`, item: `https://www.skylighttourism.com/visas/${visa.id}` },
    ],
  };

  const whatsappUrl = `https://wa.me/971582738508?text=${encodeURIComponent(`Hi Skylight! I need assistance with applying for the ${visa.country} (${visa.type}) from UAE.`)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      {howToJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />}
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#012119] pt-36 sm:pt-40 pb-16 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-0" 
          style={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)", backgroundSize: "16px 16px" }} 
        />

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <Link 
            href="/visas" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Visa Services
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 bg-brand-card/80 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-md">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <Image
                  src={`https://flagcdn.com/w160/${visa.code}.png`}
                  alt={`${visa.country} flag`}
                  width={56}
                  height={40}
                  className="w-14 h-10 object-cover rounded-lg shadow-md border border-white/15"
                />
                <span className="px-3.5 py-1 rounded-full bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-bold tracking-widest uppercase">
                  {visa.type}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold tracking-wider">
                  ⏱️ {visa.processingTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {visa.country} <span className="text-gradient">Visa Assistance</span>
              </h1>

              <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
                {visa.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-white/80 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-green" /> 99.4% Approval Record</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-green" /> Express Document Check</span>
                <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-brand-green" /> Embassy File Ready</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-4 border-t md:border-t-0 pt-6 md:pt-0 border-white/10 flex-shrink-0">
              <div>
                <p className="text-xs text-white/50 tracking-wider uppercase">Service Fee Starts From</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-brand-green">{visa.price}</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-black px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(166,238,66,0.3)]"
              >
                <MessageCircle className="w-5 h-5" /> Apply via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First (TL;DR) Callout Box for AEO */}
      <section className="bg-brand-section py-12 border-b border-white/10">
        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-brand-green/15 via-brand-green/5 to-transparent border-l-4 border-brand-green p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-brand-green text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <Zap className="w-4 h-4 fill-brand-green" /> Quick Answer (TL;DR) for UAE Residents
            </div>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              To apply for a <strong>{visa.country} ({visa.type})</strong> from the UAE, residents must submit valid identification, supporting financial documents, and verifiable travel itineraries. With Skylight Travel Sharjah, your processing timeline is approximately <strong>{visa.processingTime}</strong> with fees starting at <strong>{visa.price}</strong>. Our specialists audit your residence visa validity, organize your embassy binder, and secure your appointment slot for maximum approval success.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Requirements Checklist Grid */}
      <section className="bg-[#01251d] py-16 sm:py-20 border-b border-white/10">
        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Document Checklist</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              What You Need to Apply
            </h2>
            <p className="text-sm text-white/60 mt-1 font-light">We verify and format all documents to meet exact consular standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visa.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3.5 p-5 bg-brand-card/90 border border-white/10 rounded-2xl hover:border-brand-green/30 transition-all">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-white">{req}</h3>
                  <p className="text-xs text-white/50 mt-1 font-light">Verified by our Sharjah visa processing team prior to submission.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Application Guide */}
      {visa.steps && (
        <section className="bg-brand-section py-20 border-b border-white/10">
          <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Application Workflow</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                How We Process Your {visa.country} Visa
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visa.steps.map((step, idx) => (
                <div key={idx} className="bg-brand-card/80 border border-white/10 p-6 rounded-2xl relative group hover:border-brand-green/40 transition-all">
                  <span className="text-3xl font-mono font-bold text-brand-green/30 group-hover:text-brand-green transition-colors block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/65 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {visa.faqs && visa.faqs.length > 0 && (
        <section className="bg-[#012119] py-20 border-b border-white/10">
          <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-2">Common Questions</p>
              <h2 className="text-3xl font-semibold text-white">
                Frequently Asked Questions about {visa.country} Visas
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {visa.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-brand-card/80 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/40 transition-all">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none font-semibold text-white text-base">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                      {faq.q}
                    </span>
                    <span className="text-brand-green group-open:rotate-180 transition-transform text-xl ml-4">↓</span>
                  </summary>
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-white/70 border-t border-white/5">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conversion Banner */}
      <section className="bg-brand-dark py-16">
        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-brand-green/20 via-brand-card to-brand-green/10 border border-brand-green/30 p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
            <div>
              <span className="px-3 py-1 rounded-full bg-brand-green text-black text-[10px] font-bold uppercase tracking-widest">
                Fast-Track Application
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Ready to Apply for Your {visa.country} Visa?
              </h3>
              <p className="text-sm text-white/70 mt-1 font-light max-w-md">
                Skip the paperwork stress. Let Sharjah&apos;s visa experts prepare your complete file today.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green text-black px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all flex-shrink-0 shadow-[0_0_25px_rgba(166,238,66,0.4)]"
            >
              <MessageCircle className="w-5 h-5" /> Start via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}

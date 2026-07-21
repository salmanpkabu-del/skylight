import type { Metadata } from "next";
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

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark pt-40 pb-20 mobile-max:pt-32 mobile-max:pb-14">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-4">Get in Touch</p>
          <h1 className="text-[64px] leading-[1.0] tracking-[-3px] font-semibold text-white mb-6 md-tablet:text-[46px] mobile-max:text-[36px]">
            Plan Your Perfect<br />Trip Today
          </h1>
          <p className="text-base leading-7 text-white/60 max-w-lg">
            Speak to our UAE-based travel consultants — personalised advice, transparent quotes, zero pressure.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-brand-section py-20 mobile-max:py-12">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

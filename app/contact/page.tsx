import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Skylight Travel | Travel Agency in Sharjah",
  description:
    "Contact Skylight Travel in Sharjah, UAE. Speak with our travel consultants via WhatsApp +971 58 273 8508 or +971 55 139 0986, call, or email info@skylighttourism.com.",
  alternates: { canonical: "https://www.skylighttourism.com/contact" },
  openGraph: {
    title: "Contact Skylight Travel | Sharjah UAE",
    description: "Speak with our travel consultants in Sharjah via WhatsApp, phone, or email.",
    url: "https://www.skylighttourism.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Skylight Travel Sharjah UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Skylight Travel | Sharjah UAE",
    description: "Speak with our travel consultants in Sharjah via WhatsApp or phone.",
  },
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
    email: "info@skylighttourism.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sharjah",
      addressLocality: "Sharjah",
      addressCountry: "AE",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skylighttourism.com" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://www.skylighttourism.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactContent />
    </>
  );
}

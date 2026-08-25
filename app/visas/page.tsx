import type { Metadata } from "next";
import { visas } from "@/lib/visas-data";
import VisasContent from "@/components/VisasContent";

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
      <VisasContent />
    </>
  );
}

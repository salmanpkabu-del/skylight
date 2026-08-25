import type { Metadata } from "next";
import { packages } from "@/lib/packages-data";
import PackagesContent from "@/components/PackagesContent";

export const metadata: Metadata = {
  title: "Holiday Packages from UAE 2025 | Uzbekistan, Thailand, Georgia & More",
  description:
    "Book custom holiday packages from UAE with Skylight Travel. Explore Uzbekistan, Armenia, Thailand, Georgia, Azerbaijan, Kerala & more. Packages from AED 1,699/person.",
  alternates: { canonical: "https://www.skylighttourism.com/packages" },
  openGraph: {
    title: "Holiday Packages from UAE 2025 | Skylight Travel",
    description: "Custom holiday packages from Sharjah & Dubai. Uzbekistan, Thailand, Georgia and more from AED 1,699.",
    url: "https://www.skylighttourism.com/packages",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Skylight Travel Holiday Packages UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Packages from UAE 2025 | Skylight Travel",
    description: "Custom holiday packages from Sharjah & Dubai from AED 1,699/person.",
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

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Custom Holiday Packages from UAE",
  description: "Curated holiday packages from Sharjah & Dubai including flights, hotels, and tours.",
  numberOfItems: packages.length,
  itemListElement: packages.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.skylighttourism.com/package/${p.slug}`,
    name: `${p.name} Package`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skylighttourism.com" },
    { "@type": "ListItem", position: 2, name: "Holiday Packages", item: "https://www.skylighttourism.com/packages" },
  ],
};

export default function PackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PackagesContent />
    </>
  );
}

import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Skylight Travel | Trusted Travel Agency in Sharjah, UAE",
  description:
    "Learn about Skylight Travel — Sharjah's trusted travel agency with 5,000+ happy UAE families. Your journey, our passion.",
  alternates: { canonical: "https://www.skylighttourism.com/about" },
  openGraph: {
    title: "About Skylight Travel | Trusted Travel Agency in Sharjah, UAE",
    description: "Sharjah's trusted travel agency with 6+ years experience and 5,000+ happy UAE families.",
    url: "https://www.skylighttourism.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Skylight Travel Sharjah UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Skylight Travel | Sharjah UAE",
    description: "Sharjah's trusted travel agency with 6+ years experience.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Skylight Travel UAE",
  description: "Sharjah's premier travel agency with 6+ years of experience and 5,000+ happy UAE families served.",
  publisher: {
    "@type": "TravelAgency",
    name: "Skylight Travel",
    url: "https://www.skylighttourism.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skylighttourism.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.skylighttourism.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AboutContent />
    </>
  );
}

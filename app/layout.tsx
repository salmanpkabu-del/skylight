import type { Metadata } from "next";
import { Figtree, Tajawal } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"));

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
  preload: true,
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skylighttourism.com"),
  title: {
    default: "Skylight Travel — Best Travel Agency in Sharjah & UAE | Holiday Packages, Visas",
    template: "%s | Skylight Travel UAE",
  },
  description:
    "Skylight Travel is Sharjah's premier travel agency offering custom holiday packages, visa assistance, flight bookings, and Umrah packages. Trusted by 5,000+ UAE travellers. Based in Sharjah.",
  keywords: [
    "travel agency UAE",
    "travel agency Sharjah",
    "holiday packages from UAE",
    "visa assistance Dubai",
    "holiday packages from Dubai",
    "Uzbekistan tour package UAE",
    "Thailand tour package Dubai",
    "Georgia travel package",
    "Umrah packages UAE",
    "cheap holiday packages UAE",
    "Skylight Travel",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.skylighttourism.com",
    siteName: "Skylight Travel",
    title: "Skylight Travel — Best Travel Agency in Sharjah & UAE",
    description:
      "Custom holiday packages, visa assistance & flight bookings from UAE. 5,000+ happy travellers. Based in Sharjah.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skylight Travel UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skylight Travel — Best Travel Agency in Sharjah & UAE",
    description: "Custom holiday packages & visa assistance from UAE. 5,000+ happy travellers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://www.skylighttourism.com",
  },
  verification: {
    google: "your-google-site-verification-token",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://www.skylighttourism.com/#organization",
      name: "Skylight Travel",
      url: "https://www.skylighttourism.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.skylighttourism.com/skylight.svg",
      },
      description:
        "Skylight Travel is Sharjah's premier travel agency offering holiday packages, visa assistance, flight bookings, and more.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sharjah",
        addressLocality: "Sharjah",
        addressCountry: "AE",
      },
      telephone: "+971582738508",
      email: "info@skylighttourism.com",
      sameAs: [
        "https://www.instagram.com/skylight_tourism/",
        "https://www.facebook.com/people/Sky-Light-Tourism/61562084041070/",
        "https://www.linkedin.com/company/skylighttourism/"
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "312",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.skylighttourism.com/#website",
      url: "https://www.skylighttourism.com",
      name: "Skylight Travel",
      publisher: { "@id": "https://www.skylighttourism.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://www.skylighttourism.com/packages?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-AE",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.skylighttourism.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Skylight Travel considered the best travel agency in Sharjah?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Skylight Travel provides personalized holiday packages, transparent pricing with no hidden charges, complete Schengen & international visa guidance, and 24/7 dedicated WhatsApp support for UAE travelers.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations can I travel to without a pre-arranged visa from the UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UAE residents with valid residency can travel visa-free or get visa-on-arrival to destinations like Georgia, Armenia, Azerbaijan, Montenegro, and Serbia. We handle all travel requirements for these regions.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${figtree.variable} ${tajawal.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" crossOrigin="anonymous" />
        <meta name="geo.region" content="AE-SH" />
        <meta name="geo.placename" content="Sharjah, United Arab Emirates" />
        <meta name="geo.position" content="25.3573;55.4033" />
        <meta name="ICBM" content="25.3573, 55.4033" />

      </head>
      <body className="font-figtree bg-brand-dark text-white antialiased">
        <LanguageProvider>
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}

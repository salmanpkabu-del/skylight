import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, Users, Check, X, ChevronDown, ArrowLeft, MessageCircle } from "lucide-react";
import { packages, getPackageBySlug } from "@/lib/packages-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Package Not Found" };
  return {
    title: `${pkg.name} — ${pkg.duration} from AED ${pkg.price.toLocaleString()}`,
    description: `Book the ${pkg.name} holiday package from UAE. ${pkg.duration}, ${pkg.highlights.join(", ")}. From ${pkg.currency} ${pkg.price.toLocaleString()}/person.`,
    alternates: { canonical: `https://skylighttravel.ae/package/${slug}` },
  };
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.tagline,
    image: pkg.image,
    touristType: "leisure",
    itinerary: pkg.itinerary.map((d) => ({
      "@type": "TouristAttraction",
      name: d.title,
      description: d.description,
    })),
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      seller: { "@type": "TravelAgency", name: "Skylight Travel" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: pkg.rating,
      reviewCount: pkg.reviewCount,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://skylighttravel.ae" },
      { "@type": "ListItem", position: 2, name: "Packages", item: "https://skylighttravel.ae/packages" },
      { "@type": "ListItem", position: 3, name: pkg.name, item: `https://skylighttravel.ae/package/${pkg.slug}` },
    ],
  };

  // const otherPackages = packages.filter((p) => p.slug !== pkg.slug).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[400px] bg-brand-dark overflow-hidden">
        <Image src={pkg.image} alt={pkg.name} fill className="object-cover opacity-60" priority quality={90} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012119] via-[#012119]/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-end w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 pt-36">
          <Link href="/packages" className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-6 w-fit">
            <ArrowLeft className="w-4 h-4" /> All Packages
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-brand-green text-black text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1">{pkg.badge}</span>
            <span className="text-white/50 text-sm">{pkg.country}</span>
          </div>
          <h1 className="text-[60px] leading-[1.05] tracking-[-2.5px] font-semibold text-white mb-3
            md-tablet:text-[44px] mobile-max:text-[34px]">
            {pkg.name}
          </h1>
          <p className="text-lg text-white/70">{pkg.tagline}</p>
          <div className="flex flex-wrap gap-6 mt-5 text-sm text-white/60">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-green" />{pkg.duration}</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-green" />Group: {pkg.groupSize}</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-brand-green text-brand-green" />{pkg.rating} ({pkg.reviewCount} reviews)</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-section py-20 mobile-max:py-12">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-12 md-tablet:grid-cols-1 mobile-max:grid-cols-1">
            {/* Main content */}
            <div className="col-span-2 space-y-14">
              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Trip Highlights</h2>
                <div className="flex flex-wrap gap-3">
                  {pkg.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm px-4 py-2">
                      <Check className="w-3.5 h-3.5" />{h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <details key={day.day} className="group border border-white/5 hover:border-brand-green/30 transition-colors" open={day.day === 1}>
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 bg-brand-green text-black text-sm font-bold flex items-center justify-center flex-shrink-0">
                            {day.day}
                          </span>
                          <span className="font-semibold text-white">{day.title}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-white/40 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 ml-12">
                        <p className="text-sm leading-6 text-white/60">{day.description}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Inclusions / Exclusions */}
              <div className="grid grid-cols-2 gap-8 mobile-max:grid-cols-1">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-green" /> What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-400" /> Not Included
                  </h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                        <X className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              {pkg.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">FAQs</h2>
                  <div className="space-y-4">
                    {pkg.faqs.map((faq, i) => (
                      <div key={i} className="border border-white/5 p-5">
                        <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                        <p className="text-sm leading-6 text-white/60">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar — Booking */}
            <div className="space-y-4">
              <div className="bg-white text-brand-dark p-7 sticky top-24">
                <div className="mb-5">
                  <p className="text-xs tracking-widest uppercase text-brand-dark/40 mb-1">Starting from</p>
                  <p className="text-4xl font-semibold tracking-tight">{pkg.currency} {pkg.price.toLocaleString()}</p>
                  <p className="text-sm text-brand-dark/50 mt-1">per person • {pkg.duration}</p>
                </div>
                <a
                  href={`https://wa.me/971582738508?text=Hi%20Skylight!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-brand-green text-black py-4 font-semibold text-sm tracking-wider uppercase mb-3 hover:bg-brand-dark hover:text-brand-green transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" /> Book via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full border border-brand-dark py-4 font-semibold text-sm tracking-wider uppercase hover:bg-brand-dark hover:text-white transition-all duration-300"
                >
                  Request a Quote
                </Link>
                <div className="mt-6 space-y-2 text-xs text-brand-dark/50">
                  <p>✓ Free cancellation within 48hrs</p>
                  <p>✓ Best price guarantee</p>
                  <p>✓ UAE-based support team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

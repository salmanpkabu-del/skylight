import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Clock, Star, Users, Check, X, ChevronDown, ArrowLeft, 
  MessageCircle, Sparkles, ShieldCheck, MapPin, Zap, ArrowRight 
} from "lucide-react";
import { packages, getPackageBySlug } from "@/lib/packages-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

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

  const otherPackages = packages.filter((p) => p.slug !== pkg.slug).slice(0, 2);

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      {/* Hero Section — Full-Bleed High-Res Cover Banner */}
      <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] bg-[#012119] pt-32 pb-12 overflow-hidden flex items-end">
        {/* Full Cover Image — Sharp & High Resolution */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={pkg.image} 
            alt={pkg.name} 
            fill 
            className="object-cover object-center brightness-[0.88] contrast-[1.02]" 
            priority 
            quality={100} 
            sizes="100vw" 
          />
          {/* Subtle bottom gradient overlay ONLY at bottom edge to blend into body content */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#012119] via-[#012119]/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Back Link & Breadcrumb */}
          <Link 
            href="/packages" 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/80 text-xs font-semibold uppercase tracking-wider hover:bg-black/60 hover:text-white transition-all mb-6 border border-white/15"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Holiday Packages
          </Link>

          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span className="bg-brand-green text-black text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow-[0_0_15px_rgba(166,238,66,0.3)]">
                {pkg.badge}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/90 font-medium px-3.5 py-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-brand-green" /> {pkg.country} ({pkg.destination})
              </span>
            </div>

            {/* Title & Tagline */}
            <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.02] tracking-[-2px] font-semibold text-white mb-3 drop-shadow-md">
              {pkg.name}
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-6 max-w-2xl drop-shadow">
              {pkg.tagline}
            </p>

            {/* Key Quick Info Pills */}
            <div className="flex flex-wrap gap-3 text-xs font-medium text-white/90">
              <div className="flex items-center gap-2 bg-black/40 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl">
                <Clock className="w-4 h-4 text-brand-green" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl">
                <Users className="w-4 h-4 text-brand-green" />
                <span>Group Size: {pkg.groupSize}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl">
                <Star className="w-4 h-4 fill-brand-green text-brand-green" />
                <span>{pkg.rating} <span className="text-white/50">({pkg.reviewCount} reviews)</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Booking Sidebar */}
      <section className="bg-brand-section py-16 lg:py-24">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-14">
              
              {/* Photo Gallery Preview */}
              {pkg.gallery && pkg.gallery.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-brand-green" /> Destination Preview
                  </h2>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 rounded-2xl overflow-hidden">
                    {pkg.gallery.slice(0, 3).map((imgUrl, i) => (
                      <div key={i} className="relative h-44 sm:h-52 rounded-xl overflow-hidden group border border-white/10">
                        <Image 
                          src={imgUrl} 
                          alt={`${pkg.name} photo ${i + 1}`} 
                          fill 
                          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-[var(--ease-spring)]" 
                          sizes="(max-width: 768px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trip Highlights */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-brand-green" /> Trip Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pkg.highlights.map((h) => (
                    <div 
                      key={h} 
                      className="flex items-center gap-3.5 bg-brand-card/90 border border-white/10 hover:border-brand-green/30 text-white text-sm font-medium p-4 rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-black transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Itinerary with Timeline */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-1">Detailed Schedule</p>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">Day-by-Day Itinerary</h2>
                  </div>
                  <span className="text-xs text-white/50 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                    {pkg.itinerary.length} Days Plan
                  </span>
                </div>

                <div className="space-y-0">
                  {pkg.itinerary.map((day, idx) => (
                    <div key={day.day} className="flex gap-5 sm:gap-6">
                      {/* Left: Number + Connector Line */}
                      <div className="flex flex-col items-center flex-shrink-0 w-10">
                        <div className="w-10 h-10 rounded-full bg-brand-green text-black font-bold text-sm flex items-center justify-center shadow-[0_0_15px_rgba(166,238,66,0.3)] z-10 flex-shrink-0">
                          {day.day}
                        </div>
                        {idx < pkg.itinerary.length - 1 && (
                          <div className="w-px flex-1 bg-brand-green/20 my-2" />
                        )}
                      </div>

                      {/* Right: Card */}
                      <div className={`flex-1 ${idx < pkg.itinerary.length - 1 ? "pb-5" : ""}`}>
                        <details
                          className="group bg-brand-card/80 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/40 transition-all duration-300"
                          open={day.day === 1}
                        >
                          <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none">
                            <div>
                              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-green block mb-1">
                                Day 0{day.day}
                              </span>
                              <h3 className="font-semibold text-white text-base sm:text-lg leading-snug">
                                {day.title}
                              </h3>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-brand-green/10 flex items-center justify-center text-white/60 group-hover:text-brand-green transition-all flex-shrink-0 ml-4">
                              <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" />
                            </div>
                          </summary>
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm leading-relaxed text-white/70 border-t border-white/5">
                            <p>{day.description}</p>
                          </div>
                        </details>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Package Breakdown</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="bg-brand-card/80 border border-white/10 rounded-2xl p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="w-9 h-9 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center">
                        <Check className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">What&apos;s Included</h3>
                    </div>
                    <ul className="space-y-3.5">
                      {pkg.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/80 leading-snug">
                          <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="bg-brand-card/80 border border-white/10 rounded-2xl p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="w-9 h-9 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center">
                        <X className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Not Included</h3>
                    </div>
                    <ul className="space-y-3.5">
                      {pkg.exclusions.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/60 leading-snug">
                          <X className="w-4 h-4 text-red-400/80 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              {pkg.faqs && pkg.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Package FAQs</h2>
                  <div className="space-y-4">
                    {pkg.faqs.map((faq, i) => (
                      <div key={i} className="bg-brand-card/60 border border-white/10 rounded-xl p-6">
                        <h3 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                          <span className="text-brand-green font-bold">Q.</span> {faq.q}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/70 pl-6">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sticky Sidebar Booking Card */}
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-brand-card border border-white/15 rounded-3xl p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                
                {/* Decorative glow background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 block mb-1">
                      Starting Price
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        {pkg.currency} {pkg.price.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs text-white/50 block mt-1">per person • {pkg.duration}</span>
                  </div>
                  <span className="text-xs font-semibold text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1.5 rounded-full">
                    Instant Quote
                  </span>
                </div>

                {/* Primary Actions */}
                <div className="space-y-3 mb-6">
                  <a
                    href={`https://wa.me/971582738508?text=Hi%20Skylight!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full bg-brand-green text-black py-4 rounded-xl font-bold text-xs tracking-[0.1em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(166,238,66,0.25)]"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" /> Book via WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/15 text-white py-3.5 rounded-xl font-semibold text-xs tracking-[0.1em] uppercase hover:bg-white/10 hover:border-brand-green/40 transition-all duration-300"
                  >
                    Request Custom Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Instant Response Badge */}
                <div className="flex items-center gap-2 text-xs text-brand-green bg-brand-green/10 border border-brand-green/15 px-4 py-2.5 rounded-xl mb-6">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  <span>Avg response time: <strong>under 5 minutes</strong></span>
                </div>

                {/* Guarantees List */}
                <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-white/70">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>Free cancellation assistance within 48 hrs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>Best price match guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>24/7 Dedicated UAE travel consultant</span>
                  </div>
                </div>

              </div>

              {/* Need Help Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-xs uppercase tracking-widest text-brand-green font-semibold mb-2">Need a custom plan?</p>
                <p className="text-sm text-white/80 leading-relaxed mb-4">We customize itineraries for families, groups, and honeymooners.</p>
                <a
                  href="tel:+971582738508"
                  className="text-xs font-semibold uppercase tracking-wider text-white underline hover:text-brand-green transition-colors"
                >
                  Call +971 58 273 8508
                </a>
              </div>
            </div>

          </div>

          {/* Related Packages Carousel / Grid */}
          {otherPackages.length > 0 && (
            <div className="mt-24 pt-16 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green mb-1">More Destinations</p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white">You May Also Like</h2>
                </div>
                <Link href="/packages" className="text-xs font-semibold uppercase tracking-wider text-brand-green hover:underline flex items-center gap-1">
                  View All Packages <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPackages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/package/${p.slug}`}
                    className="group flex flex-col sm:flex-row bg-brand-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/40 transition-all duration-300"
                  >
                    <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-brand-green mb-1 block">{p.country}</span>
                        <h3 className="text-lg font-semibold text-white group-hover:text-brand-green transition-colors mb-1">{p.name}</h3>
                        <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">{p.tagline}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-white/50">{p.duration}</span>
                        <span className="text-sm font-bold text-brand-green">{p.currency} {p.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, MessageCircle, Clock } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Skylight Travel Journal`,
    description: post.excerpt,
    alternates: { canonical: `https://skylighttravel.ae/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "TravelAgency",
      name: "Skylight Travel",
      logo: {
        "@type": "ImageObject",
        url: "https://skylighttravel.ae/skylight.svg",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://skylighttravel.ae" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://skylighttravel.ae/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://skylighttravel.ae/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={post.image} alt={post.title} fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012119] via-[#012119]/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-5 sm:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-green text-black text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1">
              {post.category}
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-[48px] leading-[1.1] tracking-[-2px] font-semibold text-white mb-6 md-tablet:text-[38px] mobile-max:text-[30px]">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-green" /> {post.author.name}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-green" /> {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white text-brand-dark py-16 sm:py-24">
        <div className="w-full max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-brand-dark/80">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h2 key={index} className="text-2xl sm:text-3xl font-semibold text-brand-dark pt-6 pb-2 tracking-tight">
                    {paragraph.replace("### ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n- ");
                return (
                  <ul key={index} className="space-y-2 py-2 pl-4 list-disc marker:text-brand-dark/40">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Article FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14 pt-10 border-t border-brand-dark/10">
              <h3 className="text-2xl font-semibold text-brand-dark mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="bg-brand-dark/5 p-6 rounded-xl">
                    <p className="font-semibold text-brand-dark text-base mb-2">{faq.q}</p>
                    <p className="text-sm leading-6 text-brand-dark/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Floating CTA */}
          <div className="mt-14 p-8 bg-brand-dark text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-1">Need Personalised Advice?</p>
              <p className="text-white text-lg font-semibold">Speak directly with our Sharjah travel consultants.</p>
            </div>
            <a
              href="https://wa.me/971582738508?text=Hi%20Skylight!%20I%20read%20your%20article%20and%20need%20travel%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-green text-black px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-white transition-colors flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}

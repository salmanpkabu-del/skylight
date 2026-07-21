import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, User } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Travel Blog & Guides | Skylight Travel UAE",
  description:
    "Explore travel tips, visa application guides, and destination insights for UAE travellers. Written by Skylight Travel experts in Sharjah.",
  alternates: { canonical: "https://skylighttravel.ae/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark pt-40 pb-20 mobile-max:pt-32 mobile-max:pb-14">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-4">
            Skylight Travel Journal
          </p>
          <h1 className="text-[64px] leading-[1.0] tracking-[-3px] font-semibold text-white mb-6 md-tablet:text-[46px] mobile-max:text-[36px]">
            Insider Guides &<br />Travel Inspiration
          </h1>
          <p className="text-base leading-7 text-white/60 max-w-xl">
            Expert travel advice, Schengen visa walkthroughs, and curated destination guides crafted specifically for UAE residents and families.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="bg-brand-section py-20 mobile-max:py-12">
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-6 md-tablet:grid-cols-2 mobile-max:grid-cols-1">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-brand-card border border-white/10 overflow-hidden hover:border-brand-green/40 transition-colors duration-300"
              >
                <div className="pkg-img-wrap relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-green text-black text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1">
                    {post.category}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-green" /> {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white group-hover:text-brand-green transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-6 text-white/60">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-white/40 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-green" /> {post.author.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}

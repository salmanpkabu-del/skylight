"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "best-holiday-packages-uae-2025",
    title: "Top 7 Affordable Holiday Packages from UAE in 2025",
    excerpt: "From exotic Silk Road destinations to tropical beaches, these UAE-departure packages offer incredible value without compromising on experience.",
    category: "Travel Tips",
    date: "July 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
  {
    slug: "schengen-visa-guide-uae-residents",
    title: "Complete Schengen Visa Guide for UAE Residents 2025",
    excerpt: "Everything you need to know about applying for a Schengen visa from the UAE, including documents, timelines, appointment booking, and success tips.",
    category: "Visa Guide",
    date: "June 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
  },
  {
    slug: "best-travel-agency-sharjah",
    title: "Why Skylight is Sharjah's Most Trusted Travel Agency",
    excerpt: "With 5,000+ happy travellers, 10+ years of experience, and a dedicated team in Al Sajaa, discover why UAE residents choose Skylight Travel.",
    category: "About Skylight",
    date: "June 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80",
  },
];

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("revealed"); }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" ref={ref} className="bg-[#012119] py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 mobile-max:mb-10">
          <div className="reveal-left">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-3">
              Travel Blog
            </p>
            <h2 className="text-[56px] leading-[1.05] tracking-[-2.5px] font-semibold text-white
              md-tablet:text-[40px] mobile-max:text-[32px] mobile-max:tracking-[-1.5px]">
              Insider Guide<br />to the World
            </h2>
          </div>
          <Link
            href="/blog"
            className="reveal self-start md:self-end flex items-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase text-white/60 hover:text-white transition-colors group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-3 gap-6 md-tablet:grid-cols-2 mobile-max:grid-cols-1">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="reveal group flex flex-col border border-brand-dark/10 overflow-hidden hover:border-brand-green transition-colors duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="pkg-img-wrap relative h-52 overflow-hidden bg-brand-dark/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase bg-brand-green text-black px-2.5 py-1">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-brand-dark/40">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark leading-snug group-hover:text-brand-dark/70 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm leading-6 text-brand-dark/55">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-brand-dark/40 group-hover:text-brand-dark transition-colors">
                  Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

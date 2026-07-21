"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Star, Users, ArrowRight } from "lucide-react";
import { packages } from "@/lib/packages-data";

export default function Packages() {
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
    <section id="packages" ref={ref} className="bg-brand-section py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 mobile-max:mb-10">
          <div className="reveal-left">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-3">
              Holiday Packages
            </p>
            <h2 className="text-[56px] leading-[1.05] tracking-[-2.5px] font-semibold text-white
              md-tablet:text-[40px] mobile-max:text-[32px] mobile-max:tracking-[-1.5px]">
              Your Dream<br />Holidays Await
            </h2>
          </div>
          <Link
            href="/packages"
            className="reveal self-start md:self-end flex items-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase text-white/60 hover:text-brand-green transition-colors group"
          >
            Explore All Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-3 gap-5 md-tablet:grid-cols-2 mobile-max:grid-cols-1">
          {packages.map((pkg, i) => (
            <Link
              key={pkg.slug}
              href={`/package/${pkg.slug}`}
              className="reveal card-hover group flex flex-col bg-brand-card border border-white/10 overflow-hidden"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Image */}
              <div className="pkg-img-wrap relative h-56 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} holiday package from UAE`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-brand-green text-black text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1">
                  {pkg.badge}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-brand-green/70 mb-1.5">{pkg.country}</p>
                    <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                    <p className="text-sm text-white/50 mt-1">{pkg.tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.highlights.slice(0, 2).map((h) => (
                      <span key={h} className="text-[10px] bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> {pkg.groupSize} pax
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-brand-green text-brand-green" /> {pkg.rating}
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="text-[10px] bg-white/5 text-white/50 px-2.5 py-1 border border-white/5">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-white/30 tracking-wider uppercase">Starting from</p>
                    <p className="text-2xl font-semibold text-white">
                      {pkg.currency} {pkg.price.toLocaleString()}
                      <span className="text-sm font-normal text-white/40"> /person</span>
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-brand-green group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal flex justify-center mt-14">
          <Link
            href="/packages"
            className="btn-green px-10 py-4 text-sm font-semibold tracking-[0.1em] uppercase rounded-full shadow-lg"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

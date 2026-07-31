"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { visas } from "@/lib/visas-data";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Visas() {
  const { t, isAr } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const allVisas = [...visas, ...visas]; // duplicate for seamless loop

  return (
    <section id="visas" className="bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-dark/40 mb-3">
              {t.visas.tag}
            </p>
            <h2 className="text-[56px] leading-[1.05] tracking-[-2.5px] font-semibold text-brand-dark
              md-tablet:text-[40px] mobile-max:text-[32px] mobile-max:tracking-[-1.5px]">
              {t.visas.titleMain}<br />{t.visas.titleAccent}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-brand-dark/60 font-medium">
            {t.visas.desc}
          </p>
        </div>
      </div>

      {/* Infinite scroll slider */}
      <div className="visa-slider relative overflow-hidden">
        <div
          ref={trackRef}
          className="visa-track flex gap-5 animate-scrollLeft"
          style={{ width: "max-content" }}
        >
          {allVisas.map((visa, i) => (
            <Link
              key={`${visa.id}-${i}`}
              href={`/visas/${visa.id}`}
              className="flex-shrink-0 w-[280px] bg-brand-dark text-white p-7 flex flex-col gap-4 card-hover cursor-pointer block group focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <Image
                  src={`https://flagcdn.com/w80/${visa.code}.png`}
                  alt={`${visa.country} flag`}
                  width={40}
                  height={28}
                  className="w-10 h-7 object-cover rounded shadow-sm"
                />
                <span
                  className={`text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 ${
                    visa.processingTime.includes("Free") || visa.processingTime.includes("Arrival")
                      ? "bg-brand-green text-black"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {visa.processingTime.includes("Free") || visa.processingTime.includes("Arrival")
                    ? "Visa Free"
                    : visa.processingTime}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-brand-green transition-colors flex items-center justify-between">
                  <span>{visa.country}</span>
                  <span className="text-xs text-brand-green opacity-0 group-hover:opacity-100 transition-opacity font-normal">View →</span>
                </h3>
                <p className="text-sm text-white/50 mt-0.5">{visa.type}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <Clock className="w-3.5 h-3.5" />
                <span>{visa.processingTime}</span>
              </div>
              <p className="text-sm text-white/60 leading-6">{visa.description}</p>
              <div className="text-brand-green text-xl font-semibold mt-auto flex items-center justify-between">
                <span>{visa.price}</span>
                <span className="text-xs text-white/60 font-normal uppercase tracking-wider group-hover:text-white transition-colors">Apply</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-8 sm:w-16 md:w-24 lg:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-8 sm:w-16 md:w-24 lg:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* CTA */}
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 mt-12">
        <Link
          href="/visas"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase text-brand-dark border-b-2 border-brand-green pb-0.5 hover:text-brand-dark/60 transition-colors group"
        >
          All Visa Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

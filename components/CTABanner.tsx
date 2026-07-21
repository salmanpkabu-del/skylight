"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-brand-dark py-20 sm:py-24 lg:py-32 overflow-hidden relative">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(#A6EE42 1px, transparent 1px), linear-gradient(90deg, #A6EE42 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-4">
            Ready to Travel?
          </p>
          <h2 className="text-[52px] leading-[1.05] tracking-[-2.5px] font-semibold text-white
            md-tablet:text-[38px] mobile-max:text-[30px] mobile-max:tracking-[-1.5px]">
            Your Next Adventure<br />Starts Here
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60 max-w-md">
            Speak to a Skylight travel consultant today for personalised planning, transparent pricing, and zero commitment.
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-shrink-0">
          <Link
            href="/contact"
            className="btn-green px-10 py-4 text-sm font-semibold tracking-[0.1em] uppercase text-center"
          >
            Plan My Trip
          </Link>
          <a
            href="https://wa.me/971582738508?text=Hi%20Skylight!%20I%27d%20like%20to%20plan%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-10 py-4 border border-white/20 text-white text-sm font-semibold tracking-[0.1em] uppercase hover:border-white/50 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a
            href="tel:+971582738508"
            className="flex items-center justify-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            +971 58 273 8508
          </a>
        </div>
      </div>
    </section>
  );
}

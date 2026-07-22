"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Plane, Hotel, MapPin, FileText, Moon, Car, Ship, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Plane className="w-7 h-7" />,
    title: "Flight Bookings",
    desc: "Best-price flights on all major airlines, including economy, business, and first class.",
    href: "/contact",
  },
  {
    icon: <Hotel className="w-7 h-7" />,
    title: "Hotel Reservations",
    desc: "Hand-picked hotels across 50+ destinations, from boutique stays to 5-star resorts.",
    href: "/contact",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Holiday Tour Packages",
    desc: "Custom and ready-made packages with flights, hotels, transfers, and guided tours.",
    href: "/packages",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Visa Assistance",
    desc: "Full documentation, embassy submissions, and appointment scheduling.",
    href: "/visas",
  },
  {
    icon: <Moon className="w-7 h-7" />,
    title: "Umrah & Hajj Packages",
    desc: "Carefully planned packages with accommodation in Makkah and Madinah.",
    href: "/contact",
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: "Car Rental Services",
    desc: "Reliable rental cars at your destination, from budget compacts to premium SUVs.",
    href: "/contact",
  },
  {
    icon: <Ship className="w-7 h-7" />,
    title: "Cruise Bookings",
    desc: "Mediterranean, Arabian Gulf, and world cruise packages at competitive prices.",
    href: "/contact",
  },
];

export default function Services() {
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
    <section id="services" ref={ref} className="bg-brand-section py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-white/10">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-14">
        
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-brand-green mb-3 block">
              Our Services
            </span>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-2px] font-semibold text-white">
              Everything You Need <br className="hidden sm:block" />
              For The Perfect Trip
            </h2>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-4 gap-5 md-tablet:grid-cols-2 mobile-max:grid-cols-1">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="reveal group flex flex-col gap-4 p-7 border border-brand-dark/10 hover:border-brand-green hover:bg-brand-dark hover:text-white transition-all duration-300"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="text-brand-dark group-hover:text-brand-green transition-colors duration-300">
                {s.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-dark group-hover:text-white transition-colors mb-1.5">
                  {s.title}
                </h3>
                <p className="text-sm leading-6 text-brand-dark/55 group-hover:text-white/60 transition-colors">
                  {s.desc}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Get Started <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
          {/* Filler CTA card — fills the 8th grid cell perfectly */}
          <div className="reveal group flex flex-col justify-between p-7 bg-brand-dark text-white" style={{ animationDelay: "0.49s" }}>
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-3">Custom Request</p>
              <p className="text-lg font-semibold leading-tight text-white">Need something specific?</p>
              <p className="text-sm text-white/50 mt-2 leading-6">We build custom travel plans for groups, businesses, and special occasions.</p>
            </div>
            <Link
              href="/contact"
              className="btn-fill self-start mt-5 px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

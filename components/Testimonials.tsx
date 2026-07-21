"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Al Mansouri",
    location: "Dubai, UAE",
    trip: "Georgia Discovery",
    rating: 5,
    avatar: "A",
    text: "Skylight handled every detail flawlessly. From the visa process to hotel transfers in Tbilisi, everything was perfect. The Kazbegi mountain trip was absolutely breathtaking. I've never felt so well taken care of by a travel agency.",
  },
  {
    name: "Mohammed Raza",
    location: "Sharjah, UAE",
    trip: "Thailand Escape",
    rating: 5,
    avatar: "M",
    text: "Best price I found after checking with 5 agencies. The Thailand package was perfectly organised, and the Phi Phi Islands exceeded all expectations. The Skylight team was reachable on WhatsApp throughout the trip.",
  },
  {
    name: "Sara Nair",
    location: "Abu Dhabi, UAE",
    trip: "Uzbekistan Odyssey",
    rating: 5,
    avatar: "S",
    text: "Uzbekistan was a hidden gem I never thought I'd visit, and Skylight made it unforgettable. Registan Square at sunset was otherworldly. Every hotel and guide was top quality. Highly recommend!",
  },
  {
    name: "Omar Khalid",
    location: "Dubai, UAE",
    trip: "Schengen Visa",
    rating: 5,
    avatar: "O",
    text: "Got my Schengen visa approved in just 10 days. The team helped me with every document, tracked my application, and even helped me prepare for the embassy appointment. Smooth and stress-free.",
  },
  {
    name: "Fatima Sheikh",
    location: "Ajman, UAE",
    trip: "Kerala Backwaters",
    rating: 5,
    avatar: "F",
    text: "The Kerala houseboat experience was the most relaxing thing I've ever done. Skylight organised everything including the Munnar tea estate visit. My whole family loved every moment of this trip.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((a) => (a + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 200);
  };

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animating]);

  const t = testimonials[active];

  return (
    <section id="testimonials" ref={ref} className="bg-brand-section py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 mobile-max:mb-10">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-3">
              Testimonials
            </p>
            <h2 className="text-[56px] leading-[1.05] tracking-[-2.5px] font-semibold text-white
              md-tablet:text-[40px] mobile-max:text-[32px] mobile-max:tracking-[-1.5px]">
              Real Stories from<br />Real Travellers
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green hover:text-black transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green hover:text-black transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main testimonial */}
        <div
          className={`transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}
        >
          <div className="grid grid-cols-2 gap-16 items-center mobile-max:grid-cols-1 mobile-max:gap-8">
            {/* Quote */}
            <div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-green text-brand-green" />
                ))}
              </div>
              <blockquote className="text-2xl leading-relaxed font-medium text-white mobile-max:text-lg">
                &quot;{t.text}&quot;
              </blockquote>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 bg-brand-green text-black font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/40">{t.location} • {t.trip}</p>
                </div>
              </div>
            </div>

            {/* Navigation dots + mini testimonials */}
            <div className="flex flex-col gap-3">
              {testimonials.map((tt, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 p-4 text-left transition-all duration-300 ${
                    i === active
                      ? "bg-brand-green/10 border border-brand-green/30"
                      : "border border-white/5 hover:border-white/15"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex-shrink-0 flex items-center justify-center text-sm font-bold ${
                      i === active ? "bg-brand-green text-black" : "bg-white/10 text-white/40"
                    }`}
                  >
                    {tt.avatar}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${i === active ? "text-white" : "text-white/40"}`}>
                      {tt.name}
                    </p>
                    <p className="text-xs text-white/30">{tt.trip}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

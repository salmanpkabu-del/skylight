"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const homepageFaqs = [
  {
    q: "Why is Skylight Travel considered the best travel agency in Sharjah?",
    a: "Skylight Travel provides personalized holiday packages, transparent pricing with no hidden charges, complete Schengen & international visa guidance, and 24/7 dedicated WhatsApp support for UAE travelers.",
  },
  {
    q: "What destinations can I travel to without a pre-arranged visa from the UAE?",
    a: "UAE residents with valid residency can travel visa-free or get visa-on-arrival to destinations like Georgia, Armenia, Azerbaijan, Montenegro, and Serbia. We handle all travel requirements for these regions.",
  },
  {
    q: "How far in advance should I book my holiday package?",
    a: "We recommend booking at least 3 to 4 weeks in advance for regular holidays, and 6 to 8 weeks prior for peak seasons (Eid holidays, Summer vacations, and New Year) or destinations requiring embassy visa appointments.",
  },
  {
    q: "Are flight tickets and hotel transfers included in Skylight holiday packages?",
    a: "Yes! All standard Skylight holiday packages include return flights from UAE airports (Dubai, Sharjah, Abu Dhabi), hotel stays with breakfast, airport transfers, and guided city sightseeing.",
  },
  {
    q: "Can Skylight assist with Schengen or USA visa appointments from UAE?",
    a: "Absolutely. Our visa operations team assists with document verification, application forms, verified travel itineraries, hotel bookings, and securing VFS Global / embassy appointment slots.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-dark/40 mb-3">
            Got Questions?
          </p>
          <h2 className="text-[52px] leading-[1.05] tracking-[-2.5px] font-semibold text-brand-dark md-tablet:text-[38px] mobile-max:text-[30px] mobile-max:tracking-[-1.5px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {homepageFaqs.map((faq, i) => (
            <div
              key={i}
              className="border border-brand-dark/10 rounded-xl overflow-hidden transition-colors duration-200"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-brand-dark/[0.02] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-lg font-semibold text-brand-dark pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-dark/50 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-brand-dark" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-1 text-brand-dark/70 text-base leading-relaxed border-t border-brand-dark/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

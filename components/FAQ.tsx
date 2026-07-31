"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-dark/40 mb-3">
            {t.faq.tag}
          </p>
          <h2 className="text-[52px] leading-[1.05] tracking-[-2.5px] font-semibold text-brand-dark md-tablet:text-[38px] mobile-max:text-[30px] mobile-max:tracking-[-1.5px]">
            {t.faq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((faq, i) => (
            <div
              key={i}
              className="border border-brand-dark/10 rounded-xl overflow-hidden transition-colors duration-200"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left rtl:text-right bg-white hover:bg-brand-dark/[0.02] transition-colors cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className="text-lg font-semibold text-brand-dark pr-4 rtl:pr-0 rtl:pl-4">{faq.q}</span>
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

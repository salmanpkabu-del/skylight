"use client";

import { useEffect, useRef } from "react";
import { Target, FileCheck, Handshake, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [
  <Target className="w-8 h-8" key="target" />,
  <FileCheck className="w-8 h-8" key="filecheck" />,
  <Handshake className="w-8 h-8" key="handshake" />,
  <BadgeCheck className="w-8 h-8" key="badge" />,
];

export default function WhyChoose() {
  const { t } = useLanguage();
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
    <section id="why" ref={ref} className="bg-brand-section py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="reveal-left mb-16 mobile-max:mb-10">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-green/70 mb-3">
            {t.why.tag}
          </p>
          <h2 className="text-[56px] leading-[1.05] tracking-[-2.5px] font-semibold text-white
            md-tablet:text-[40px] mobile-max:text-[32px] mobile-max:tracking-[-1.5px]">
            {t.why.titleMain}<br />{t.why.titleAccent}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5 md-tablet:grid-cols-2 mobile-max:grid-cols-1">
          {t.why.cards.map((card, i) => (
            <div
              key={i}
              className="reveal bg-brand-card border border-white/10 p-8 flex flex-col gap-6 group hover:bg-brand-green/5 hover:border-brand-green/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-brand-green group-hover:scale-110 transition-transform duration-300 w-fit">
                {icons[i]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{card.title}</h3>
                <p className="text-sm leading-6 text-white/50">{card.desc}</p>
              </div>
              <div className="mt-auto w-8 h-[2px] bg-brand-green/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

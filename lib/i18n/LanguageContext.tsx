"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionary, Language, TranslationDict } from "./dictionary";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDict;
  dir: "ltr" | "rtl";
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("skylight_lang") as Language;
      if (savedLang === "en" || savedLang === "ar") {
        setLangState(savedLang);
      }
    } catch {
      // Fallback to default
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("skylight_lang", newLang);
      document.cookie = `skylight_lang=${newLang}; path=/; max-age=31536000`;
    } catch {
      // Ignore storage errors
    }
  };

  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const t = dictionary[lang];

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    if (isAr) {
      document.documentElement.classList.add("lang-ar");
    } else {
      document.documentElement.classList.remove("lang-ar");
    }
  }, [lang, dir, isAr]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir, isAr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

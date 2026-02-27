"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/i18n/translations";

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "pt" : "en"));
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error(
            "useLanguage deve ser usado dentro de um LanguageProvider",
        );
    }
    return context;
}

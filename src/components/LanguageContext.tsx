"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ID" | "EN";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    lang: <T>(id: T, en: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("ID");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
    };

    const lang = <T,>(id: T, en: T): T => {
        return language === "ID" ? id : en;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, lang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

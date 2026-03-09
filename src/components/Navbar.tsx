"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const { language, toggleLanguage, lang } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="text-xl md:text-2xl font-bold tracking-widest text-brand-white">
                            SOLIDUS
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <Link href="#about" className="hover:text-white transition-colors">
                            {lang("Tentang Kami", "About Us")}
                        </Link>
                        <Link href="#portfolio" className="hover:text-white transition-colors">
                            {lang("Portofolio", "Portfolio")}
                        </Link>
                        <Link href="#team" className="hover:text-white transition-colors">
                            {lang("Tim Kami", "Our Team")}
                        </Link>
                        <Link href="#careers" className="hover:text-white transition-colors">
                            {lang("Karir", "Careers")}
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Floating Language Toggle */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-darkblue border border-white/20 text-white font-bold shadow-[0_0_15px_rgba(2,28,54,0.6)] hover:scale-105 hover:bg-brand-darkgreen transition-all"
                >
                    {language}
                </button>
            </div>
        </>
    );
}

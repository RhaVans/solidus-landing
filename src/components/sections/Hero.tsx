"use client";

import { useLanguage } from "../LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
    const { lang } = useLanguage();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                {/* Parallax Background */}
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-darkblue/40 to-brand-black z-10 pointer-events-none" />

                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    {/* Fallback image if video fails or is missing */}
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Hero Background Fallback" className="w-full h-full object-cover" />
                </video>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: -50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        <Image src="/SOLIDUS LOGO.png" alt="Solidus Logo" fill className="object-contain invert brightness-0" priority />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-widest mb-6 drop-shadow-[0_0_20px_rgba(2,28,54,1)]"
                >
                    SOLIDUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">GROUP</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    {lang(
                        '"Stewardship bukanlah sebuah strategi. Ini adalah identitas." — Membina sumber nilai yang bertahan lama melintasi generasi.',
                        '"Stewardship is not a strategy. It is an identity." — Nurturing enduring sources of value across generations.'
                    )}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#about" className="px-8 py-4 bg-white text-brand-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        {lang("Jelajahi Kami", "Discover Us")}
                    </a>
                    <a href="#portfolio" className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                        {lang("Lihat Portofolio", "View Portfolio")}
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

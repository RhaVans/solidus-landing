"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

export default function AboutSection() {
    const { lang } = useLanguage();

    return (
        <section id="about" className="py-24 md:py-32 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
                            {lang("Tentang Kami", "About Us")}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            {lang(
                                "Keandalan, Kemurnian, dan Keteguhan.",
                                "Reliability, Purity, and Permanence."
                            )}
                        </h3>
                        <div className="space-y-6 text-gray-400 leading-relaxed">
                            <p>
                                {lang(
                                    "SOLIDUS Group, L.P. adalah entitas holding investasi (Private Equity/Family Office) yang dikapitalisasi 100% secara mandiri. Nama 'Solidus' mengambil inspirasi dari koin emas Kekaisaran Romawi yang melambangkan keandalan abadi.",
                                    "SOLIDUS Group, L.P. is a 100% self-capitalized holding entity (Private Equity/Family Office). The name 'Solidus' draws inspiration from the gold coin of the Roman Empire, symbolizing enduring reliability."
                                )}
                            </p>
                            <p>
                                {lang(
                                    "Kami memfokuskan investasi dengan pendekatan 'permanence', portofolio asimetris dengan keyakinan tinggi, dan melestarikan kekayaan lintas generasi, tanpa terikat oleh siklus pasar jangka pendek.",
                                    "We focus our investments with a 'permanence' approach, asymmetric portfolios with high conviction, and preserving cross-generational wealth, unconstrained by short-term market cycles."
                                )}
                            </p>
                        </div>

                        <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">15+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">{lang("Tahun Pengalaman", "Years of Experience")}</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">Global</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">{lang("Jaringan Operasi", "Operating Network")}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-2xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkblue/40 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-700" />
                        <img
                            src="/about-bloomberg.png"
                            alt="Financial Professional using Bloomberg Terminal"
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

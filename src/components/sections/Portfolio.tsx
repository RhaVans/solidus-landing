"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioSection() {
    const { lang } = useLanguage();

    return (
        <section id="portfolio" className="py-32 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4"
                    >
                        {lang("Portofolio Investasi", "Investment Portfolio")}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white"
                    >
                        {lang("Menggerakkan Masa Depan", "Driving The Future")}
                    </motion.h3>
                </div>

                {/* Three Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">

                    {/* Pillar 1: Nova Ltd. */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="group relative w-full h-[400px] lg:h-full rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-brand-darkblue/40 z-10 group-hover:bg-brand-black/20 transition-colors duration-700" />
                        <Image src="/NOVA SUB COMPANY LOGO .png" alt="Nova Ltd" fill className="object-contain p-20 scale-100 group-hover:scale-95 group-hover:opacity-10 transition-all duration-1000 ease-out" />

                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="inline-block px-3 py-1 mb-3 border border-indigo-500/50 rounded-full text-[10px] uppercase tracking-widest text-indigo-300">
                                    {lang("Anak Perusahaan", "Subsidiary")}
                                </span>
                                <h4 className="text-3xl font-black text-white mb-2">NOVA LTD.</h4>
                                <p className="text-sm text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {lang(
                                        "Pengembangan Game AAA berfokus pada cerita berkualitas tinggi (High Quality Story-Driven) dan perangkat lunak di Indonesia.",
                                        "AAA Game development focused on high-quality storytelling and software in Indonesia."
                                    )}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pillar 2: Digital Assets */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative w-full h-[400px] lg:h-full rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-brand-black z-10 group-hover:bg-brand-black/40 transition-colors duration-700 border border-white/5" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" />

                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="inline-block px-3 py-1 mb-3 border border-orange-500/50 rounded-full text-[10px] uppercase tracking-widest text-orange-300">
                                    {lang("Aset Strategis", "Strategic Asset")}
                                </span>
                                <h4 className="text-3xl font-black text-white mb-2">
                                    {lang("Aset Digital", "Digital Assets")}
                                </h4>
                                <p className="text-sm text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {lang(
                                        "Akumulasi Bitcoin jangka panjang (Cold-Storage) sebagai cadangan aset strategis dan penyimpan nilai asimetris generasi.",
                                        "Long-term Bitcoin accumulation (Cold-Storage) serving as a strategic reserve asset and asymmetric generational store of value."
                                    )}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pillar 3: Fixed Income */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative w-full h-[400px] lg:h-full rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-brand-darkgreen/40 z-10 group-hover:bg-brand-black/20 transition-colors duration-700" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" />

                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="inline-block px-3 py-1 mb-3 border border-green-500/50 rounded-full text-[10px] uppercase tracking-widest text-green-300">
                                    {lang("Pendapatan Tetap", "Fixed Income")}
                                </span>
                                <h4 className="text-3xl font-black text-white mb-2">Fixed Income & ETF</h4>
                                <p className="text-sm text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {lang(
                                        "Obligasi negara, korporasi investment-grade, dan ETF terdiversifikasi sebagai fondasi likuiditas dan penahan volatilitas portofolio.",
                                        "Sovereign bonds, investment-grade corporates, and diversified ETFs acting as liquidity foundation and portfolio volatility buffer."
                                    )}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

export default function VisiMisiSection() {
    const { lang } = useLanguage();

    return (
        <section className="py-24 bg-brand-darkgreen/10 relative border-y border-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                {/* Visi */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-brand-black/50 p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
                        {lang("Visi Kami", "Our Vision")}
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-gray-500 to-transparent" />
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg font-medium italic">
                        "Nothing is Impossible."
                    </p>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        {lang(
                            "Menjaga dan melipatgandakan kekayaan abadi yang diwariskan selamanya melintasi batas siklus generasi.",
                            "To preserve and compound enduring wealth intended to last forever across generational cycles."
                        )}
                    </p>
                </motion.div>

                {/* Misi */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-brand-black/50 p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
                        {lang("Misi Kami", "Our Mission")}
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-gray-500 to-transparent" />
                    </h2>
                    <ul className="space-y-4 text-gray-300 leading-relaxed text-lg list-disc pl-5">
                        <li>
                            {lang(
                                "Mengidentifikasi dan membina sumber nilai (value) yang kokoh dalam jangka panjang.",
                                "Identify and nurture enduring sources of value over the long term."
                            )}
                        </li>
                        <li>
                            {lang(
                                "Mempertahankan keyakinan tinggi (Conviction) pada aset digital strategis dan investasi teknologi tahap awal.",
                                "Maintain high conviction in strategic digital assets and early-stage technology investments."
                            )}
                        </li>
                        <li>
                            {lang(
                                "Fokus beroperasi menghasilkan profil risiko-imbalan yang asimetris.",
                                "Operate with a focus on generating highly asymmetric risk-reward profiles."
                            )}
                        </li>
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}

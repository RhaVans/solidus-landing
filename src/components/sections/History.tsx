"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

const timelineData = [
    {
        year: "01",
        title: { id: "Permanence", en: "Permanence" },
        desc: { id: "Mindset perpetual abadi, tidak terpengaruh oleh siklus dana atau jendela pasar jangka pendek.", en: "A perpetual mindset, uninfluenced by fund cycles or short-term market windows." }
    },
    {
        year: "02",
        title: { id: "Conviction", en: "Conviction" },
        desc: { id: "Sizing portofolio yang terkonsentrasi pada posisi dengan keyakinan (conviction) tinggi.", en: "Concentrated portfolio sizing on positions with high conviction." }
    },
    {
        year: "03",
        title: { id: "Asymmetry", en: "Asymmetry" },
        desc: { id: "Mencari profil risk-reward asimetris, terutama di teknologi tahap awal dan aset digital yang langka.", en: "Seeking asymmetric risk-reward profiles, especially in early-stage tech and scarce digital assets." }
    },
    {
        year: "04",
        title: { id: "Legacy", en: "Legacy" },
        desc: { id: "Setiap keputusan investasi dan operasi dinilai berdasarkan dampak generasional.", en: "Every investment and operational decision is evaluated based on its generational impact." }
    }
];

export default function HistorySection() {
    const { lang } = useLanguage();

    return (
        <section className="py-24 bg-transparent relative">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
                        {lang("Filosofi Kami", "Our Philosophy")}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">
                        {lang("Strategi Investasi", "Investment Strategy")}
                    </h3>
                </div>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-0 sm:ml-0 pl-6 md:border-none">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="mb-12 relative md:flex justify-between items-center w-full"
                        >
                            {/* Desktop Timeline Center Line Indicator */}
                            <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:w-4 md:h-4 md:bg-white md:rounded-full md:-mt-2 shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10" />
                            <div className="hidden md:block md:absolute top-0 bottom-[-3rem] left-1/2 w-px bg-white/20 -mt-2 -mb-12" />

                            {/* Mobile Timeline Indicator */}
                            <div className="absolute -left-[31px] md:hidden w-3 h-3 bg-white rounded-full mt-1.5 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                            {/* Content */}
                            <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12 text-left"}`}>
                                <span className="text-white font-black text-5xl mb-2 block">
                                    {item.year}
                                </span>
                                <h4 className="text-xl font-bold text-white mb-2">{lang(item.title.id, item.title.en)}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {lang(item.desc.id, item.desc.en)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

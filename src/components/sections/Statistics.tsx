"use client";

import { useLanguage } from "../LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!inView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Ease Out Expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeProgress * (to - from) + from));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [inView, from, to, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatisticsSection() {
    const { lang } = useLanguage();

    return (
        <section className="py-20 bg-transparent border-y border-white/5 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-darkblue/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                            <Counter to={100} suffix="%" />
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">{lang("Kapitalisasi Mandiri", "Self-Capitalized")}</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                            <Counter to={3} />
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">{lang("Pilar Strategis", "Strategic Pillars")}</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                            <Counter to={0} suffix="%" />
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">{lang("Modal Pihak Ketiga", "Third-Party Capital")}</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                            <span ref={null}>∞</span>
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">{lang("Fokus Generasional", "Generational Focus")}</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

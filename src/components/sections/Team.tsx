"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

const teamData = [
    { img: "/Rhameyza Faiqo Susanto.jpg", name: "Rhameyza F.S.", role: "Founder, Executive Chairman & CEO" },
    { img: "/Bangkit Bayu Alfaris.jpg", name: "Bangkit Bayu Alfaris B.S., Msc., Ph.D", role: "Co-founder, CTO of Solidus & CEO of NOVA" }
];

export default function TeamSection() {
    const { lang } = useLanguage();

    return (
        <section id="team" className="py-24 bg-brand-darkgreen/10 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
                        {lang("Jajaran Direksi", "Board of Directors")}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        {lang("Tim Dibalik Visi", "The Team Behind The Vision")}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {teamData.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-4 relative">
                                <div className="absolute inset-0 bg-brand-darkblue/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white tracking-wide">{member.name}</h4>
                                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

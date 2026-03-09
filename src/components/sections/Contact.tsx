"use client";

import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CareersSection() {
    const { lang } = useLanguage();
    const [expandedJob, setExpandedJob] = useState<number | null>(null);

    const jobs = [
        {
            id: 1,
            title: "Software Engineer",
            salary: "Rp 30.000.000 - Rp 50.000.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Merancang, mengembangkan, dan memelihara infrastruktur trading dan platform internal. Mengoptimalkan latensi tingkat mikrodetik.",
                "Design, develop, and maintain trading infrastructure and internal platforms. Optimize for microsecond-level latency."
            ),
            qualifications: lang(
                "Mahir dalam C++, Rust, atau Go. Pemahaman mendalam tentang struktur data, algoritma, dan arsitektur sistem terdistribusi.",
                "Proficient in C++, Rust, or Go. Deep understanding of data structures, algorithms, and distributed system architectures."
            )
        },
        {
            id: 2,
            title: "Financial Analyst",
            salary: "Rp 25.000.000 - Rp 35.000.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Melakukan pemodelan keuangan yang kompleks, valuasi aset, dan memberikan rekomendasi investasi berdasarkan analisis fundamental.",
                "Perform complex financial modeling, asset valuation, and provide investment recommendations based on fundamental analysis."
            ),
            qualifications: lang(
                "Sertifikasi CFA (minimal level 2). Ahli dalam pemodelan Excel, valuasi DCF, dan pemahaman mendalam tentang makroekonomi.",
                "CFA certification (minimum level 2). Expert in Excel modeling, DCF valuation, and deep understanding of macroeconomics."
            )
        },
        {
            id: 3,
            title: "Quantitative Analyst (Entry Level Quant)",
            salary: "Rp 37.500.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Membantu tim riset dalam mengumpulkan, membersihkan, dan menganalisis dataset besar. Melakukan backtesting dasar untuk ide-ide trading.",
                "Assist the research team in collecting, cleaning, and analyzing large datasets. Perform basic backtesting for trading ideas."
            ),
            qualifications: lang(
                "Lulusan baru berprestasi di bidang Matematika, Fisika, atau Ilmu Komputer. Ahli dalam Python/R dan dasar-dasar statistik.",
                "Outstanding recent graduate in Mathematics, Physics, or Computer Science. Expert in Python/R and statistical fundamentals."
            )
        },
        {
            id: 4,
            title: "Quantitative Researcher (Mid Level Quant)",
            salary: "Rp 62.500.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Mengembangkan model prediktif alpha independen. Mengaplikasikan machine learning dan model matematis tingkat lanjut pada market data.",
                "Develop independent predictive alpha models. Apply machine learning and advanced mathematical models to market data."
            ),
            qualifications: lang(
                "S2/S3 di bidang kuantitatif. Pengalaman 2-4 tahun dalam mengembangkan strategi trading algoritmik yang sukses.",
                "Master's/PhD in a quantitative field. 2-4 years of experience in developing successful algorithmic trading strategies."
            )
        },
        {
            id: 5,
            title: "Senior Quantitative Researcher",
            salary: "Rp 100.000.000+ / " + lang("bulan", "month"),
            responsibilities: lang(
                "Memimpin siklus penuh penelitian hingga eksekusi strategi trading frekuensi tinggi (HFT) atau menengah. Mengawasi analis junior.",
                "Lead the full research cycle through to execution of high-frequency (HFT) or mid-frequency trading strategies. Supervise junior analysts."
            ),
            qualifications: lang(
                "Track record terbukti menghasilkan PnL positif di institusi tier-1. Keahlian mendalam dalam market mikrostuktur.",
                "Proven track record of generating positive PnL at a tier-1 institution. Deep expertise in market microstructure."
            )
        },
        {
            id: 6,
            title: "Head of Quantitative Research",
            salary: "Rp 187.500.000+ / " + lang("bulan", "month") + " & Share Profit",
            responsibilities: lang(
                "Menentukan arah strategis untuk seluruh departemen kuantitatif. Mengalokasikan kapasitas risiko dan menyetujui peluncuran model baru.",
                "Determine the strategic direction for the entire quantitative department. Allocate risk capacity and approve the launch of new models."
            ),
            qualifications: lang(
                "10+ tahun pengalaman mumpuni dengan wawasan tajam tentang pasar global dan kepemimpinan strategis.",
                "10+ years of solid experience with sharp insights into global markets and strategic leadership."
            )
        },
        {
            id: 7,
            title: "Office Boy",
            salary: "Rp 10.000.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Menjaga kebersihan, kerapian, dan ketersediaan fasilitas pantry di kantor standar internasional kami.",
                "Maintain the cleanliness, tidiness, and availability of pantry facilities in our international standard office."
            ),
            qualifications: lang(
                "Rajin, jujur, berpenampilan rapi, teliti, dan memiliki inisiatif tinggi tanpa perlu disuruh.",
                "Diligent, honest, neat appearance, meticulous, and highly proactive without needing to be told."
            )
        },
        {
            id: 8,
            title: "Assistant CEO",
            salary: "Rp 40.000.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Mengelola jadwal CEO secara komprehensif, menjadi perantara komunikasi dengan pihak eksternal/internal, dan menyusun laporan eksekutif.",
                "Comprehensively manage the CEO's schedule, act as a communication intermediary with external/internal parties, and compile executive reports."
            ),
            qualifications: lang(
                "Lulusan S1 bisnis/manajemen dari institusi terkemuka. Kemampuan komunikasi dwibahasa (Inggris & Indonesia) tingkat native.",
                "Bachelor's degree in business/management from a top institution. Native-level bilingual communication skills (English & Indonesian)."
            )
        },
        {
            id: 9,
            title: lang("Secretary of Chairman (Female Only)", "Secretary of Chairman (Female Only)"),
            salary: "Rp 30.000.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Menangani semua kebutuhan korporat dan administratif personal untuk Chairman dengan tingkat kerahasiaan absolut.",
                "Handle all corporate and personal administrative needs for the Chairman with absolute confidentiality."
            ),
            qualifications: lang(
                "Profesional, adaptif, efisien. Pengalaman melayani eksekutif tingkat atas. (Hanya untuk pelamar wanita sesuai kebijakan internal).",
                "Professional, adaptive, efficient. Experience serving top-level executives. (Female applicants only per internal policy)."
            )
        }
    ];

    const benefits = [
        lang("Kompensasi yang sangat menarik (Gaji 100% di atas rata-rata untuk selain Quant/Analyst, dan 25% di atas rata-rata untuk Quant/Analyst)", "Extremely attractive compensation (100% above average for non-Quant/Analyst, 25% above average for Quant/Analyst)"),
        "Incentive compensation plan",
        lang("Asuransi medis, gigi, dan mata untuk karyawan dan tanggungan", "Medical, dental, and vision insurance for employees and their dependents"),
        lang("Asuransi jiwa dan cacat", "Life and disability insurance"),
        lang("Rekening pengeluaran fleksibel untuk perawatan tanggungan dan kesehatan", "Dependent care and health care flexible spending accounts"),
        lang("Peluang investasi di reksa dana Renaissance (tergantung kualifikasi)", "Investment opportunity in Renaissance funds, subject to investor qualifications"),
        lang("Program pensiun", "Retirement program"),
        lang("Program pencocokan sumbangan amal", "Charitable gift matching program"),
        lang("Program bantuan adopsi", "Adoption assistance program"),
        lang("Program bantuan pendidikan", "Educational assistance program"),
        lang("Makanan, camilan, dan minuman gratis di kantor", "Complimentary (on-site) meals, snacks, and beverages"),
    ];

    const toggleJob = (id: number) => {
        setExpandedJob(expandedJob === id ? null : id);
    };

    return (
        <section id="careers" className="py-24 bg-transparent border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4"
                    >
                        {lang("Karir", "Careers")}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black text-white leading-tight"
                    >
                        {lang("Bergabunglah Bersama Kami", "Join Our Team")}
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Roles Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                                {lang("Posisi Tersedia", "Available Positions")}
                            </h4>
                            <div className="space-y-3">
                                {jobs.map((job) => (
                                    <div key={job.id} className="border border-white/10 rounded-xl overflow-hidden bg-brand-darkblue/10 backdrop-blur-sm">
                                        <button
                                            onClick={() => toggleJob(job.id)}
                                            className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-200">{job.title}</span>
                                            <span className={`text-xl text-gray-400 transition-transform duration-300 ${expandedJob === job.id ? "rotate-45" : ""}`}>
                                                +
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {expandedJob === job.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-5 pt-0 text-sm text-gray-400 space-y-4 border-t border-white/5 mt-2">
                                                        <div>
                                                            <strong className="text-green-400 block mb-1">
                                                                {lang("Estimasi Kompensasi:", "Estimated Compensation:")}
                                                            </strong>
                                                            {job.salary}
                                                        </div>
                                                        <div>
                                                            <strong className="text-white block mb-1">
                                                                {lang("Tanggung Jawab:", "Responsibilities:")}
                                                            </strong>
                                                            {job.responsibilities}
                                                        </div>
                                                        <div>
                                                            <strong className="text-white block mb-1">
                                                                {lang("Kualifikasi:", "Qualifications:")}
                                                            </strong>
                                                            {job.qualifications}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-brand-black/40 p-6 rounded-2xl border border-white/5">
                            <h4 className="text-lg font-bold text-white mb-4">
                                {lang("Catatan Kualifikasi:", "Qualification Note:")}
                            </h4>
                            <div className="space-y-3 text-gray-400 leading-relaxed text-sm">
                                <p>
                                    <strong className="text-white">Fresh Graduate:</strong> {lang(
                                        "Jika tidak lulus dari universitas berprestise, Anda wajib menunjukkan skill yang luar biasa dan portofolio yang membuktikannya. Lulusan Ivy League sekalipun tetap harus menunjukkan kemampuan yang setara.",
                                        "If not from a prestigious university, you must demonstrate outstanding skills backed by a solid portfolio. Even Ivy League graduates must prove skills matching their prestige."
                                    )}
                                </p>
                                <p>
                                    <strong className="text-white">{lang("Soft-Skill Wajib:", "Mandatory Soft-Skills:")}</strong> {lang(
                                        "Selalu siap bekerja dalam tim (remote/on-site), memiliki hasrat untuk terus belajar, dan tidak segan mengajarkan apapun kepada siapapun—bahkan kepada Chairman sekalipun!",
                                        "Always ready to work in a team (remote/on-site), possess a desire to continuously learn, and be willing to teach anyone—even the Chairman himself!"
                                    )}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-brand-darkblue/20 p-8 md:p-10 rounded-3xl border border-white/10 h-fit sticky top-28"
                    >
                        <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">✦</span>
                            {lang("Benefit & Kompensasi", "Benefits & Compensation")}
                        </h4>
                        <ul className="space-y-4">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="text-green-400 mt-0.5 text-lg leading-none">✓</span>
                                    <span className="leading-relaxed">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

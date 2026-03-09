"use client";

import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CareersSection() {
    const { lang } = useLanguage();
    // Use string IDs to differentiate between the two lists if needed, or just ensure uniqueness
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const seniorJobs = [
        {
            id: "s0",
            title: "Senior Software Engineer",
            salary: "Rp 100.000.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Memimpin arsitektur dan pengembangan sistem trading berskala besar. Melakukan code review, mentoring engineer junior, dan memastikan kualitas kode tetap tinggi.",
                "Lead the architecture and development of large-scale trading systems. Conduct code reviews, mentor junior engineers, and ensure high code quality standards."
            ),
            qualifications: lang(
                "5+ tahun pengalaman profesional. Ahli dalam C++, Rust, atau Go dengan pemahaman mendalam tentang low-latency systems dan distributed computing.",
                "5+ years of professional experience. Expert in C++, Rust, or Go with deep understanding of low-latency systems and distributed computing."
            )
        },
        {
            id: "s1",
            title: "Senior Quantitative Researcher",
            salary: "Rp 250.000.000+ / " + lang("bulan", "month"),
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
            id: "s2",
            title: "Head of Quantitative Research",
            salary: "Rp 500.000.000+ / " + lang("bulan", "month") + " & Share Profit",
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
            id: "s3",
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
            id: "s4",
            title: lang("Secretary of Chairman (Female Only)", "Secretary of Chairman (Female Only)"),
            salary: "Rp 60.000.000 / " + lang("bulan", "month"),
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

    const freshGradJobs = [
        {
            id: "f1",
            title: "Software Engineer",
            salary: "Rp 50.000.000 - Rp 70.000.000 / " + lang("bulan", "month"),
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
            id: "f2",
            title: "Financial Analyst",
            salary: "Rp 50.000.000 - Rp 70.000.000 / " + lang("bulan", "month"),
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
            id: "f3",
            title: "Quantitative Analyst (Entry Level Quant)",
            salary: "Rp 100.000.000 / " + lang("bulan", "month"),
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
            id: "f4",
            title: "Quantitative Researcher (Mid Level Quant)",
            salary: "Rp 150.000.000 / " + lang("bulan", "month"),
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
            id: "f5",
            title: "Office Boy",
            salary: "Rp 25.000.000 / " + lang("bulan", "month"),
            responsibilities: lang(
                "Menjaga kebersihan, kerapian, dan ketersediaan fasilitas pantry di kantor standar internasional kami.",
                "Maintain the cleanliness, tidiness, and availability of pantry facilities in our international standard office."
            ),
            qualifications: lang(
                "Rajin, jujur, berpenampilan rapi, teliti, dan memiliki inisiatif tinggi tanpa perlu disuruh.",
                "Diligent, honest, neat appearance, meticulous, and highly proactive without needing to be told."
            )
        }
    ];

    const benefits = [
        lang("Kompensasi yang sangat menarik (Gaji 100% di atas rata-rata untuk selain Quant/Analyst, dan 25% di atas rata-rata untuk Quant/Analyst)", "Extremely attractive compensation (100% above average for non-Quant/Analyst, 25% above average for Quant/Analyst)"),
        "Incentive compensation plan",
        lang("Asuransi medis, gigi, dan mata untuk karyawan dan tanggungan", "Medical, dental, and vision insurance for employees and their dependents"),
        lang("Asuransi jiwa dan cacat", "Life and disability insurance"),
        lang("Rekening pengeluaran fleksibel untuk perawatan tanggungan dan kesehatan", "Dependent care and health care flexible spending accounts"),
        lang("Program pensiun", "Retirement program"),
        lang("Program pencocokan sumbangan amal", "Charitable gift matching program"),
        lang("Program bantuan adopsi", "Adoption assistance program"),
        lang("Program bantuan pendidikan", "Educational assistance program"),
        lang("Makanan, camilan, dan minuman gratis di kantor", "Complimentary (on-site) meals, snacks, and beverages"),
    ];

    const toggleJob = (id: string) => {
        setExpandedJob(expandedJob === id ? null : id);
    };

    const renderJobList = (jobList: typeof seniorJobs) => (
        <div className="space-y-3">
            {jobList.map((job) => (
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
                                    <div className="pt-4 mt-4 border-t border-white/10">
                                        <a href="mailto:careers@solidusgroup.id" className="inline-block bg-white text-brand-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors w-full text-center">
                                            {lang("Lamar Posisi Ini", "Apply for this Position")}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );

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
                    {/* Left Column: Roles Accordions */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        {/* Senior Roles Category */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                                <span className="text-brand-gold">❖</span> {lang("Posisi Senior & Eksekutif", "Senior & Executive Positions")}
                            </h4>
                            {renderJobList(seniorJobs)}
                        </div>

                        {/* Fresh Grad & General Roles Category */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                                <span className="text-green-400">❖</span> {lang("Posisi Fresh Graduate & Umum", "Fresh Graduate & General Positions")}
                            </h4>
                            {renderJobList(freshGradJobs)}
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

                    {/* Right Column: Benefits & Apply Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 h-fit sticky top-28"
                    >
                        <div className="bg-brand-darkblue/20 p-8 md:p-10 rounded-3xl border border-white/10">
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
                        </div>

                        {/* New General Apply Section as requested by user's screenshot box context */}
                        <div className="bg-white/5 p-8 border border-white/10 rounded-3xl">
                            <h4 className="text-xl font-bold text-white mb-4">
                                {lang("Cara Melamar", "How to Apply")}
                            </h4>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {lang(
                                    "Siapkan CV terbaru, portofolio yang relevan, dan cover letter yang menjelaskan mengapa Anda cocok bergabung dengan Solidus Group.",
                                    "Prepare your latest CV, relevant portfolio, and a cover letter explaining why you are the perfect fit for Solidus Group."
                                )}
                            </p>
                            <a
                                href="mailto:careers@solidusgroup.id"
                                className="inline-flex items-center justify-center w-full bg-white text-brand-black px-6 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                            >
                                {lang("Kirim Lamaran via Email", "Send Application via Email")}
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

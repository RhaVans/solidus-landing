"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const { lang } = useLanguage();
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <section id="contact" className="py-24 bg-transparent border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
                        {lang("Hubungi Kami", "Contact Us")}
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                        {lang(
                            "Mari Bangun Ekosistem Masa Depan Bersama.",
                            "Let's Build The Future Ecosystem Together."
                        )}
                    </h3>
                    <p className="text-gray-400 max-w-md leading-relaxed mb-8">
                        {lang(
                            "Apakah Anda pelopor teknologi, kreator visioner, atau investor strategis? Temukan bagaimana kita dapat berkolaborasi.",
                            "Whether you're a tech pioneer, visionary creator, or strategic investor. Discover how we can synergize."
                        )}
                    </p>
                    <div className="space-y-4 text-gray-300">
                        <p className="flex items-center gap-4">
                            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">@</span>
                            contact@solidusgroup.com
                        </p>
                        <p className="flex items-center gap-4">
                            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">#</span>
                            +62 123 4567 890
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-brand-darkblue/20 p-8 md:p-12 rounded-3xl border border-white/10"
                >
                    {status === "success" ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-4xl border border-green-500/50 mb-4">
                                ✓
                            </div>
                            <h4 className="text-2xl font-bold text-white">
                                {lang("Pesan Terkirim!", "Message Sent!")}
                            </h4>
                            <p className="text-gray-400">
                                {lang("Terima kasih telah menghubungi Solidus Group. Tim kami akan segera merespons.", "Thank you for reaching out to Solidus Group. Our team will get back to you shortly.")}
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/20"
                            >
                                {lang("Kirim Pesan Lainnya", "Send Another Message")}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">{lang("Nama", "Name")}</label>
                                    <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">{lang("Perusahaan", "Company")}</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">{lang("Pesan", "Message")}</label>
                                <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none" />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-4 bg-white text-brand-black font-bold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
                            >
                                {status === "submitting" ? lang("Mengirim...", "Sending...") : lang("Kirim Pesan", "Send Message")}
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>
        </section>
    );
}

"use client";

import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export default function Footer() {
    const { lang } = useLanguage();

    return (
        <footer className="bg-transparent border-t border-white/10 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-8 h-8">
                                <Image src="/SOLIDUS LOGO.png" alt="Solidus Logo" fill className="object-contain invert brightness-0" />
                            </div>
                            <span className="text-2xl font-bold tracking-widest text-white">SOLIDUS</span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            {lang(
                                "Membangun masa depan melalui inovasi teknologi dan karya hiburan kelas dunia.",
                                "Building the future through technological innovation and world-class entertainment."
                            )}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Links</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="#team" className="hover:text-white transition-colors">Board of Directors</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>contact@solidusgroup.com</li>
                            <li>+62 123 4567 890</li>
                            <li>Jakarta, Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Solidus Group, L.P. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

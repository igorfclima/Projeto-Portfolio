"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export function Navbar() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? "backdrop-blur-md border-b border-white/1 py-4"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold text-accent tracking-wide transition-colors"
                >
                    Igor
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link
                        href="#home"
                        className="hover:text-accent transition-colors"
                    >
                        {t.navbar.home}
                    </Link>
                    <Link
                        href="#about"
                        className="hover:text-accent transition-colors"
                    >
                        {t.navbar.about}
                    </Link>
                    <Link
                        href="#experience"
                        className="hover:text-accent transition-colors"
                    >
                        {t.navbar.experience}
                    </Link>
                    <Link
                        href="#projects"
                        className="hover:text-accent transition-colors"
                    >
                        {t.navbar.projects}
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-accent transition-colors"
                    >
                        {t.navbar.contact}
                    </Link>
                </nav>
            </div>
        </header>
    );
}

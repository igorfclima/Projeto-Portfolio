"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import styles from "./hero.module.css";
import { BGPattern } from "../ui/bg-pattern";

export function Hero() {
    const { language, toggleLanguage, t } = useLanguage();
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden"
        >
            <div className="max-w-6xl text-center space-y-8 z-10">
                <div
                    className={`${styles.pontasEsfumacadas} absolute inset-0 -z-10`}
                >
                    <BGPattern variant="grid" mask="fade-center" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="uppercase font-bold text-muted text-sm tracking-widest">
                        {t.hero.based}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-white mb-4">
                        {t.hero.titleLine1}{" "}
                        <span className="text-accent">{t.hero.titleLine2}</span>{" "}
                        {t.hero.titleLine3}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        {t.hero.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-md hover:border-accent border border-transparent hover:text-accent transition-all duration-300 w-full sm:w-auto justify-center group"
                    >
                        {t.hero.btnProjects}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 px-8 py-3 bg-transparent text-white font-semibold rounded-md  transition-all duration-300 w-full sm:w-auto justify-center border border-transparent hover:border-accent hover:text-accent"
                    >
                        <Download className="w-6 h-6 text-accent" />
                        <p>{t.hero.btnContact}</p>
                    </Link>
                    <div
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-8 py-3 bg-transparent text-white font-semibold rounded-md  transition-all duration-300 w-full sm:w-auto justify-center border border-transparent hover:border-accent hover:text-accent cursor-pointer"
                    >
                        <p>{t.hero.btnLanguage}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

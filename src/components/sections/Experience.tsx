"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { experiences } from "@/constants/experiences";

export function Experience() {
    const { t } = useLanguage();
    return (
        <section id="experience" className="py-20 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-text-main tracking-wide mb-16"
                >
                    {t.experience.title}
                </motion.h2>

                <div className="relative">
                    <div className="absolute left-3.75 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const isLeft = exp.align === "left";

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                    }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                                        isLeft ? "md:flex-row-reverse" : ""
                                    }`}
                                >
                                    <div className="absolute left-2.75 md:left-1/2 md:-translate-x-1/2 top-1 md:top-1/2 md:-translate-y-1/2 w-2.25 h-2.25 rounded-full bg-accent ring-4 ring-background z-10" />

                                    <div className="hidden md:block w-1/2" />

                                    <div
                                        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                                            isLeft
                                                ? "md:pr-12 md:text-right"
                                                : "md:pl-12 md:text-left"
                                        }`}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-semibold text-muted">
                                                {exp.period}
                                            </span>
                                            <h3 className="text-xl font-bold text-text-main">
                                                {exp.role}
                                            </h3>
                                            <span className="text-base text-muted mb-3 block">
                                                {exp.company}
                                            </span>
                                            <p className="text-sm text-muted leading-relaxed max-w-md md:max-w-none inline-block">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

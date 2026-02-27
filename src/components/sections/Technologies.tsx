"use client";

import { motion } from "framer-motion";

import { techStack } from "@/constants/techCardItems";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Technologies() {
    return (
        <section
            id="technologies"
            className="py-20 px-6 md:px-12 bg-background"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text-main tracking-wide mb-4"
                    >
                        Current technologies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted text-base md:text-lg max-w-3xl"
                    >
                        I'm proficient in a range of modern technologies that
                        empower me to build highly functional solutions. These
                        are some of my main technologies.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {techStack.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-card-skills border border-border transition-colors duration-300"
                        >
                            <div
                                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${tech.color}15` }}
                            >
                                <tech.icon
                                    className="w-6 h-6"
                                    style={{ color: tech.color }}
                                />
                            </div>

                            <div className="flex flex-col overflow-hidden">
                                <span className="text-base font-semibold text-text-main truncate">
                                    {tech.name}
                                </span>
                                <span className="text-sm text-muted truncate">
                                    {tech.desc}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

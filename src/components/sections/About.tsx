"use client";

import { FaReact, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-wide mb-8">
                    About Me
                </h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <p className="text-muted leading-relaxed text-lg">
                        I'm a passionate web developer with a love for building
                        elegant, user-friendly applications. With expertise in
                        modern frontend and backend technologies, I bring ideas
                        to life through clean code and thoughtful design.
                    </p>
                    <p className="text-muted leading-relaxed text-lg">
                        When I'm not coding, you'll find me exploring new
                        technologies, contributing to open-source, or enjoying a
                        good cup of coffee.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-10"
                >
                    <div className="p-4 rounded-2xl border border-border bg-card-about flex items-center gap-6 transition-colors group">
                        <div className="p-2 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                            <FaReact className="w-10 h-10 text-accent" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg tracking-wide">
                                Modern Technologies
                            </h3>
                            <p className="text-muted text-sm mt-1">
                                React.Js, Tailwind, Next.Js
                            </p>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-border bg-card-about flex items-center gap-6 transition-colors group">
                        <div className="p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                            <FaPython className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h3 className="text-text-main font-semibold text-lg tracking-wide">
                                Back-end Solutions
                            </h3>
                            <p className="text-white text-sm mt-1">
                                Spring-boot, .Net, Django.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

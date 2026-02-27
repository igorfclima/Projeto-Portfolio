"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export function Projects() {
    const { t } = useLanguage();
    return (
        <section id="projects" className="py-20 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text-main tracking-wide"
                    >
                        {t.projects.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="#all-projects"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted hover:text-text-main hover:border-text-main/50 transition-colors"
                        >
                            {t.projects.button}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col p-5 rounded-2xl bg-card-skills border border-border hover:border-border/80 transition-colors group"
                        >
                            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-6 bg-card-skills">
                                {/* imagem q eu n peguei ainda*/}
                                <img
                                    src={project.image}
                                    alt={`Mockup do projeto ${project.title}`}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) =>
                                        (e.currentTarget.style.display = "none")
                                    }
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-text-main mb-4">
                                {project.title}
                            </h3>
                            <div className="flex justify-between items-end flex-1 mt-auto gap-4">
                                <div className="flex flex-wrap gap-2 max-w-[85%]">
                                    {project.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-md border border-border text-xs text-muted"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="p-3 bg-accent rounded-xl text-white hover:bg-accent/80 transition-colors shrink-0  duration-300"
                                >
                                    {/*n peguei o link do repo*/}
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

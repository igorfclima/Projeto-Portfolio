"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function Contact() {
    const { t } = useLanguage();
    return (
        <section
            id="contact"
            className="py-6 px-6 md:px-12 bg-background border-t border-border mt-10"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:pr-12 flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                            {t.contact.title}
                        </h2>
                        <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
                            {t.contact.subtitle}{" "}
                            <a
                                href="mailto:igrfclima@gmail.com"
                                className="text-accent font-bold font"
                            >
                                {t.contact.subtitle2}
                            </a>{" "}
                            {t.contact.subtitle3}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-card-about border border-border flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-text-main" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-semibold text-text-main">
                                        {t.contact.email}
                                    </span>
                                    <a
                                        href="mailto:igrfclima@gmail.com"
                                        className="text-sm text-muted hover:text-accent transition-colors"
                                    >
                                        igrfclima@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-card-about border border-border flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-text-main" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-semibold text-text-main">
                                        {t.contact.phone}
                                    </span>
                                    <a
                                        href="tel:+5531992863422"
                                        className="text-sm text-muted hover:text-accent transition-colors"
                                    >
                                        +55 31 992863422
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-2">
                                <div className="w-12 h-12 rounded-lg bg-card-about border border-border flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-text-main" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-semibold text-text-main">
                                        {t.contact.location}
                                    </span>
                                    <span className="text-sm text-muted">
                                        Belo Horizonte, Brazil
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-card-about border border-border flex items-center justify-center shrink-0">
                                    <BsGithub className="w-5 h-5 text-text-main" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-semibold text-text-main">
                                        {t.contact.github}
                                    </span>
                                    <a
                                        href="https://github.com/igorfclima"
                                        className="text-sm text-muted hover:text-accent transition-colors"
                                    >
                                        github.com/igorfclima
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-card-about border border-border flex items-center justify-center shrink-0">
                                    <BsLinkedin className="w-5 h-5 text-text-main" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-semibold text-text-main">
                                        {t.contact.linkedin}
                                    </span>
                                    <a
                                        href="https://www.linkedin.com/in/igorfclima/"
                                        className="text-sm text-muted hover:text-accent transition-colors"
                                    >
                                        linkedin.com/in/igorfclima
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:pl-12 lg:border-l border-border pt-10 lg:pt-0"
                    >
                        <form
                            className="flex flex-col gap-6"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-text-main"
                                >
                                    {t.contact.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-[#050505] border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-text-main"
                                >
                                    {t.contact.emailInput}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-[#050505] border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="phone"
                                    className="text-sm font-semibold text-text-main"
                                >
                                    {t.contact.phone}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-[#050505] border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-text-main"
                                >
                                    {t.contact.messageInput}
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-[#050505] border border-border rounded-lg px-4 py-3 text-text-main resize-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold text-base rounded-lg py-4 mt-2 hover:bg-gray-200 transition-colors active:scale-[0.98]"
                            >
                                {t.contact.sendButton}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

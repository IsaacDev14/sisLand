"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import { GridPattern } from "./GridPattern";
import MagnifyingMesh from "@/components/MagnifyingMesh";

/* ─── Interfaces ─── */
interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface Pillar {
    title: string;
    features: string[];
}

interface Stat {
    value: string;
    label: string;
}

interface UseCase {
    title: string;
    description: string;
}

interface FAQ {
    question: string;
    answer: string;
}

interface AppPageTemplateProps {
    appName: string;
    tagline: string;
    description: string;
    features: Feature[];
    pillars: Pillar[];
    ctaText: string;
    accentColor?: string;
    heroImage?: string;
    stats?: Stat[];
    useCases?: UseCase[];
    faqs?: FAQ[];
}

/* ─── FAQ Accordion Item ─── */
function FAQItem({ faq }: { faq: FAQ }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-border">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between py-5 text-left text-foreground font-semibold text-lg hover:text-pink-600 transition-colors"
            >
                {faq.question}
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </motion.div>
        </div>
    );
}

/* ─── Main Template ─── */
export default function AppPageTemplate({
    appName,
    tagline,
    description,
    features,
    pillars,
    ctaText,
    heroImage,
    stats,
    useCases,
    faqs
}: AppPageTemplateProps) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="relative">
                {/* ────────── SECTION 1 : SPLIT HERO ────────── */}
                <section className="pt-32 pb-20 relative z-10">
                    {/* Lazy mouse-follow glow — hero only */}
                    <MagnifyingMesh
                        gap={50}
                        radius={250}
                        strength={0.3}
                        className="opacity-40 stroke-pink-500/20"
                    />
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left — Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <span className="inline-block text-pink-600 font-semibold text-sm tracking-widest uppercase mb-4">
                                    {appName}
                                </span>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 leading-[1.05]">
                                    {tagline}
                                </h1>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                                    {description}
                                </p>
                                <div className="flex items-center gap-4 flex-wrap">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-pink-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/25 text-sm"
                                    >
                                        Request a Demo
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-7 py-3 rounded-full font-semibold hover:bg-muted transition-colors text-sm"
                                    >
                                        Talk to Sales
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right — Dashboard Preview */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.15 }}
                                className="relative flex items-center justify-center"
                            >
                                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border bg-card max-w-md w-full">
                                    {/* macOS dots */}
                                    <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary border-b border-border">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                                        <span className="ml-3 text-xs text-muted-foreground font-medium">{appName}</span>
                                    </div>
                                    {heroImage ? (
                                        <Image
                                            src={heroImage}
                                            alt={`${appName} Dashboard`}
                                            width={560}
                                            height={350}
                                            className="w-full h-auto object-cover"
                                            priority
                                        />
                                    ) : (
                                        <div className="aspect-video bg-secondary flex items-center justify-center">
                                            <span className="text-muted-foreground text-sm uppercase tracking-widest">{appName}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ────────── SECTION 2 : STATS BAR ────────── */}
                {stats && stats.length > 0 && (
                    <section className="py-12 border-y border-border bg-secondary/50 relative z-10">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="text-3xl sm:text-4xl font-black text-foreground mb-1">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ────────── SECTION 3 : FEATURE BENTO GRID ────────── */}
                <section className="py-24 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">Capabilities</span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                Everything you need, nothing you don&apos;t
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    className={`group relative p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${idx === 0 ? "md:col-span-2" : ""
                                        }`}
                                >
                                    <div className="mb-5 inline-flex p-3 rounded-xl bg-pink-600/10 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ────────── SECTION 4 : HOW IT WORKS ────────── */}
                <section className="py-24 relative z-10 bg-secondary/50">
                    <div className="mx-auto max-w-5xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">How It Works</span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                Up and running in 3 steps
                            </h2>
                        </motion.div>

                        <div className="relative">
                            {/* Connector line */}
                            <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-border" />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {[
                                    { step: "01", title: "Connect", desc: "Sign up, connect your data sources, and configure your workspace in minutes." },
                                    { step: "02", title: "Configure", desc: "Tailor workflows, permissions, and automations to match how your team operates." },
                                    { step: "03", title: "Launch", desc: "Go live with confidence. Our team supports you through onboarding and beyond." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                                        className="text-center relative"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-pink-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-5 shadow-lg shadow-pink-600/25 relative z-10">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ────────── SECTION 5 : PILLARS (3 Columns) ────────── */}
                <section className="py-28 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">Built for Scale</span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                Complete Feature Set
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                                {pillars.length} core pillars working together to power your operations.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pillars.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                                    className="bg-card border border-border rounded-2xl p-8 hover:border-pink-600/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-9 w-9 rounded-lg bg-pink-600 flex items-center justify-center text-white font-bold text-sm">
                                            {String(idx + 1).padStart(2, "0")}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {pillar.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 group">
                                                <Check className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ────────── SECTION 6 : USE CASES ────────── */}
                {useCases && useCases.length > 0 && (
                    <section className="py-24 relative z-10 bg-secondary/50">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">Use Cases</span>
                                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                    Who is it for?
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {useCases.map((uc, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className="p-6 rounded-2xl border border-border bg-card hover:border-pink-600/30 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-pink-600/10 text-pink-600 flex items-center justify-center font-bold text-sm mb-4">
                                            {String(idx + 1).padStart(2, "0")}
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">{uc.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ────────── SECTION 7 : FAQ ────────── */}
                {faqs && faqs.length > 0 && (
                    <section className="py-24 relative z-10">
                        <div className="mx-auto max-w-3xl px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">FAQ</span>
                                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                    Frequently Asked Questions
                                </h2>
                            </motion.div>

                            <div className="border-t border-border">
                                {faqs.map((faq, idx) => (
                                    <FAQItem key={idx} faq={faq} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ────────── SECTION 8 : CTA ────────── */}
                <section className="py-28 relative z-10 bg-secondary">
                    <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 tracking-tight">{ctaText}</h2>
                            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                                Get started today. No credit card required.
                            </p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/25 text-base"
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-8 py-4 rounded-full font-semibold hover:bg-muted transition-colors text-base"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

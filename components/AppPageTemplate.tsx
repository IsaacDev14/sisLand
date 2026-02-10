"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { GridPattern } from "./GridPattern";

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface Pillar {
    title: string;
    features: string[];
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
}

export default function AppPageTemplate({
    appName,
    tagline,
    description,
    features,
    pillars,
    ctaText,
    accentColor = "pink",
    heroImage
}: AppPageTemplateProps) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="relative">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <GridPattern
                        width={60}
                        height={60}
                        x={-1}
                        y={-1}
                        strokeDasharray={"4 2"}
                        className="[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] opacity-40 dark:opacity-20"
                    />
                </div>

                {/* Peripheral Glow */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
                    <div className="absolute -left-40 top-0 h-[800px] w-[600px] bg-gradient-to-r from-purple-600/20 to-transparent blur-[120px]" />
                    <div className="absolute -right-40 top-0 h-[800px] w-[600px] bg-gradient-to-l from-pink-600/20 to-transparent blur-[120px]" />
                </div>

                {/* Hero - Massive centered text like siscom.tech */}
                <section className="pt-40 pb-20 relative z-10">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-8 leading-[0.95] drop-shadow-sm">
                                {tagline}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                                {description}
                            </p>
                            <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all hover:scale-105 duration-300 text-sm"
                                >
                                    Jump on a call
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3.5 rounded-full font-semibold hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40 hover:scale-105 duration-300 text-sm"
                                >
                                    Sign up here
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Visual Preview Dashboard Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative rounded-2xl bg-slate-900/5 dark:bg-slate-100/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/10 lg:-m-4 lg:rounded-3xl lg:p-4 backdrop-blur-sm"
                            >
                                <div className="rounded-xl shadow-2xl ring-1 ring-slate-900/10 dark:ring-slate-100/10 overflow-hidden bg-white dark:bg-slate-950 aspect-[21/9] flex items-center justify-center relative group">
                                    {heroImage ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={heroImage}
                                                alt={`${appName} Dashboard`}
                                                fill
                                                className="object-cover object-top"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                                                priority
                                            />
                                            {/* Gradient Overlay for better integration */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950" />
                                            <div className="relative z-10 text-center">
                                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 mx-auto mb-4 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">{appName} Interface</span>
                                            </div>
                                            <div className="absolute top-4 left-4 right-4 h-8 bg-slate-100 dark:bg-slate-900 rounded-full opacity-50" />
                                            <div className="absolute top-16 left-4 w-60 bottom-4 bg-slate-100 dark:bg-slate-900 rounded-xl opacity-30 hidden md:block" />
                                            <div className="absolute top-16 right-4 left-4 md:left-72 bottom-4 bg-slate-100 dark:bg-slate-900 rounded-xl opacity-30" />
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Bento Feature Grid */}
                <section className="py-24 relative z-10 bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Platform Capabilities</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Everything you need to succeed.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className={`group relative overflow-hidden p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-1 ${idx === 0 ? "lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" : ""
                                        }`}
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <div className="text-foreground transform scale-150 rotate-12">{feature.icon}</div>
                                    </div>
                                    <div className="mb-6 inline-flex p-3 rounded-2xl bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Complete Feature Set — dark section */}
                <section className="py-32 bg-slate-950 dark:bg-slate-950 relative overflow-hidden">
                    {/* Peripheral glow on dark section */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-40 top-0 h-full w-[600px] bg-gradient-to-r from-purple-600/10 to-transparent blur-[100px]" />
                        <div className="absolute -right-40 top-0 h-full w-[600px] bg-gradient-to-l from-pink-600/10 to-transparent blur-[100px]" />
                        <GridPattern
                            width={40}
                            height={40}
                            x={-1}
                            y={-1}
                            className="stroke-slate-800/50 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
                        />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">Complete Feature Set</h2>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                {pillars.length > 0 && `${pillars.length} powerful pillars working together seamlessly to drive your business forward.`}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pillars.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/80 hover:border-pink-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-pink-500/20">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {pillar.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-slate-400 group">
                                                <div className="mt-1 h-5 w-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                                                    <svg className="w-3 h-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-32 relative z-10">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/5" />
                    </div>
                    <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-8 tracking-tight">{ctaText}</h2>
                            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
                                Get started today and see the difference. No credit card required.
                            </p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-foreground px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-base"
                                >
                                    Contact Sales
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-500 hover:to-rose-500 transition-all shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 hover:scale-105 duration-300 text-base"
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
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

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MinimalHero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-background pt-24 pb-12">
            {/* Subtle background gradient for depth without clutter */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-50/50 via-background to-background dark:from-pink-950/10 dark:via-background dark:to-background" />

            <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">

                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 flex justify-center"
                >
                    <span className="rounded-full bg-pink-500/10 px-4 py-1.5 text-sm font-medium text-pink-600 dark:text-pink-400 border border-pink-500/20">
                        Africa&apos;s Cloud Platform
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="mb-8 text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[6rem] leading-[1.1] md:leading-[1.05]"
                >
                    Reinventing <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-500 dark:to-purple-500">
                        What&apos;s Possible
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed"
                >
                    Locally rooted, globally compliant. <br className="hidden sm:block" />
                    Scalable cloud infrastructure, data intelligence, and AI.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="#contact"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
                    >
                        <span>Start Building</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                    >
                        Explore Infrastructure
                    </Link>
                </motion.div>

                {/* Minimal Trust Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 text-sm text-muted-foreground/60"
                >
                    Trusted by forward-thinking enterprises across Africa
                </motion.div>
            </div>
        </section>
    );
}

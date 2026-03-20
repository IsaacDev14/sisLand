"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingHero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-end">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-slate-950">
                <AnimatePresence>
                    {!isVideoLoaded && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950"
                        >
                            {/* Shimmer effect while loading */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/10 to-transparent animate-shimmer" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Video — drop your own video as public/hero-bg.mp4 */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        isVideoLoaded ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <source src="/frames/People_Technology.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/50" />
            </div>

            {/* Content Container - positioned at bottom like Liquid Tech */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pb-24">
                <div className="max-w-2xl">

                    <FadeIn delay={0.1}>
                        <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold italic leading-[1.2] text-white tracking-tight mb-5">
                            Is Your Business Ready for the <span className="text-pink-600">AI Future?</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mb-0">
                            <span className="text-pink-600 font-semibold">Siscom</span> is innovating and engineering the <span className="text-pink-600 font-semibold">digital backbone</span> designed specifically
                            for African SMEs to thrive in the AI revolution.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

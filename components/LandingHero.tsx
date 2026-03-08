"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function LandingHero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-end">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="https://videos.pexels.com/video-files/3160492/3160492-uhd_2560_1440_30fps.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/50" />
            </div>

            {/* Content Container - positioned at bottom like Liquid Tech */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pb-24">
                <div className="max-w-2xl">
                    <FadeIn delay={0.1}>
                        <span className="inline-block bg-slate-800/60 backdrop-blur-sm text-white text-xs md:text-sm px-4 py-2 rounded mb-6">
                            Siscom is inventing digital infrastructure solutions
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold italic leading-[1.2] text-white tracking-tight mb-5">
                            Empowering a Continent through Intelligent Infrastructure
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mb-0">
                            Siscom is engineering the digital backbone designed specifically for African SMEs to thrive in the AI revolution.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

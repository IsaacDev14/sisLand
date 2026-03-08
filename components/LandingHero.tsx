"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function LandingHero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source
                    src="https://videos.pexels.com/video-files/3160492/3160492-uhd_2560_1440_30fps.mp4"
                    type="video/mp4"
                />
                {/* Fallback image if video fails */}
                <img
                    src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
                    alt="Tech background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </video>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-slate-950/60 z-10" />

            {/* Content Container */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pt-20">
                <div className="max-w-3xl">
                    <FadeIn delay={0.1}>
                        <p className="text-pink-500 font-semibold tracking-wide uppercase mb-4">
                            Siscom is inventing digital infrastructure solutions
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] text-white tracking-tight mb-6">
                            Empowering a Continent through Intelligent Infrastructure
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-10">
                            Siscom is engineering the digital backbone designed specifically for African SMEs to thrive in the AI revolution.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#services"
                                className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-4 rounded-lg transition-colors"
                            >
                                Explore Our Infrastructure
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-4 rounded-lg backdrop-blur-sm transition-colors"
                            >
                                Partner With Siscom
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

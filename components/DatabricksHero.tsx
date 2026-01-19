"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

interface DatabricksHeroProps {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCTA: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
    visualType?: "animation" | "image" | "gradient";
    visualSrc?: string;
    className?: string;
}

export default function DatabricksHero({
    eyebrow,
    title,
    titleAccent,
    subtitle,
    primaryCTA,
    secondaryCTA,
    visualType = "gradient",
    visualSrc,
    className = "",
}: DatabricksHeroProps) {
    const heroRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Staggered entrance animation
            tl.fromTo(".hero-eyebrow", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
            tl.fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");
            tl.fromTo(".hero-subtitle", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5");
            tl.fromTo(".hero-cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3");

            // Visual entrance
            if (visualRef.current) {
                tl.fromTo(
                    visualRef.current,
                    { scale: 0.9, opacity: 0, y: 40 },
                    { scale: 1, opacity: 1, y: 0, duration: 1 },
                    "-=0.8"
                );
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className={`relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] to-white dark:from-slate-900 dark:to-slate-950 ${className}`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/10 to-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <div className="hero-eyebrow inline-flex items-center gap-3 mb-8">
                            <span className="text-xs font-bold tracking-[0.2em] text-pink-600 uppercase">
                                {eyebrow}
                            </span>
                        </div>

                        {/* Massive Title */}
                        <h1 className="hero-title text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-slate-900 dark:text-white mb-8">
                            {title}{" "}
                            <span className="text-pink-600 relative">
                                {titleAccent}
                                {/* Animated underline */}
                                <svg
                                    className="absolute -bottom-2 left-0 w-full h-3"
                                    viewBox="0 0 300 12"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M2 8.5C50 2 100 2 150 8.5C200 15 250 5 298 8.5"
                                        stroke="url(#heroUnderline)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="heroUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#E11D48" />
                                            <stop offset="100%" stopColor="#7C3AED" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="hero-subtitle text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-xl">
                            {subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={primaryCTA.href}
                                className="hero-cta inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5"
                            >
                                {primaryCTA.label}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            {secondaryCTA && (
                                <Link
                                    href={secondaryCTA.href}
                                    className="hero-cta inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    {secondaryCTA.label}
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div ref={visualRef} className="relative lg:pl-8">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-blue-500/10 blur-2xl" />

                            {/* Visual container */}
                            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xl overflow-hidden">
                                {visualType === "image" && visualSrc ? (
                                    <Image
                                        src={visualSrc}
                                        alt="Hero visual"
                                        width={600}
                                        height={450}
                                        className="w-full h-auto"
                                    />
                                ) : (
                                    /* Animated Gradient Visual */
                                    <div className="relative h-[400px] p-8 flex items-center justify-center">
                                        {/* Animated circles */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 animate-pulse" />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 animate-pulse" style={{ animationDelay: "1s" }} />
                                        </div>

                                        {/* Center icon */}
                                        <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-xl flex items-center justify-center">
                                            <svg className="w-12 h-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        {/* Floating metrics */}
                                        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                                            {[
                                                { label: "Uptime", value: "99.99%" },
                                                { label: "Latency", value: "<15ms" },
                                                { label: "Scale", value: "∞" },
                                            ].map((stat) => (
                                                <div key={stat.label} className="flex-1 bg-slate-50 dark:bg-slate-700 rounded-xl p-3 text-center">
                                                    <div className="text-lg font-bold text-pink-600">{stat.value}</div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                LIVE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

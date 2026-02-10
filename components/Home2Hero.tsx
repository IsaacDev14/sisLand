"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import MagnifyingMesh from "@/components/MagnifyingMesh";

// ================== DATABRICKS-INSPIRED HERO ==================
// Split layout • Animated product visual • Blurred glow orbs
// Clean typography • Client logo ticker • Enterprise-modern aesthetic

export default function Home2Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const [activeNode, setActiveNode] = useState(0);
    const [prevNode, setPrevNode] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Staggered entrance animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Left content
            tl.fromTo(".hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
            tl.fromTo(".hero-title", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");
            tl.fromTo(".hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5");
            tl.fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3");

            // Right visual
            tl.fromTo(
                visualRef.current,
                { x: 60, opacity: 0, scale: 0.95 },
                { x: 0, opacity: 1, scale: 1, duration: 1 },
                "-=0.8"
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Animated node cycling with crossfade
    useEffect(() => {
        const interval = setInterval(() => {
            setPrevNode(activeNode);
            setIsTransitioning(true);
            setActiveNode((prev) => (prev + 1) % 4);

            // Clear transition state after animation
            setTimeout(() => setIsTransitioning(false), 600);
        }, 2500);
        return () => clearInterval(interval);
    }, [activeNode]);

    const nodes = [
        { label: "Siscom Nodes", color: "#EC4899", icon: "◆" },
        { label: "Siscom Data", color: "#8B5CF6", icon: "◈" },
        { label: "AI/ML Platform", color: "#06B6D4", icon: "◇" },
        { label: "Cloud Apps", color: "#10B981", icon: "◉" },
    ];

    return (
        <section ref={heroRef} className="relative overflow-hidden bg-background">
            <MagnifyingMesh
                gap={50}
                radius={250}
                strength={0.3}
                className="opacity-40 stroke-pink-500/20"
            />
            {/* ===== MAIN CONTENT - SPLIT LAYOUT ===== */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* LEFT: Text Content */}
                    <div className="max-w-xl">
                        {/* Eyebrow */}
                        <div className="hero-eyebrow inline-flex items-center gap-2 mb-6">
                            <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
                                Africa&apos;s Cloud Platform
                            </span>
                            <span className="px-2 py-0.5 text-[10px] font-semibold bg-pink-100 text-pink-700 rounded-full">
                                NEW
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="hero-title text-[3.5rem] sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight text-foreground mb-6">
                            Reinventing{" "}
                            <span className="relative">
                                <span className="text-pink-600">
                                    What&apos;s Possible
                                </span>
                                {/* Underline decoration with gradient */}
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 300 12"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <defs>
                                        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#EC4899" />
                                            <stop offset="100%" stopColor="#8B5CF6" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M2 8.5C50 2 100 2 150 8.5C200 15 250 5 298 8.5"
                                        stroke="url(#underlineGradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="hero-subtitle text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                            with Local Cloud, Data Intelligence & AI Advantage.{" "}
                            <span className="text-foreground font-medium">
                                Siscom innovates and engineers intelligent outcomes
                            </span>
                            —helping your business thrive in a cloud-first, AI-driven future.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <a
                                href="#contact"
                                className="hero-cta inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-pink-500/25"
                            >
                                Get Started Free
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#demo"
                                className="hero-cta inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-all [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-900 [html[data-theme='light']_&]:hover:bg-slate-200"
                            >
                                Schedule Demo
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="hero-cta flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>SOC2 Certified</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Animated Product Visual */}
                    <div ref={visualRef} className="relative lg:pl-8">
                        <div className="relative">
                            {/* Glow behind visual */}
                            <div
                                className="absolute inset-0 -m-12 rounded-3xl opacity-60"
                                style={{
                                    background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)",
                                    filter: "blur(40px)",
                                }}
                            />

                            {/* Main visual container */}
                            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl p-6 overflow-hidden">
                                {/* Header bar */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="h-6 bg-secondary rounded-lg flex items-center px-3">
                                            <span className="text-xs text-slate-400">siscom.tech/dashboard</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated dashboard content */}
                                <div className="relative h-[350px]">
                                    {/* Pink/purple gradient circle background */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-90" />

                                    {/* Animated connection lines - colored based on active service */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 350">
                                        <style>
                                            {`
                                                @keyframes dashMove {
                                                    0% { stroke-dashoffset: 0; }
                                                    100% { stroke-dashoffset: 20; }
                                                }
                                                .animated-dash {
                                                    animation: dashMove 1.5s linear infinite;
                                                }
                                            `}
                                        </style>
                                        {/* Connection lines that change color with active node */}
                                        {nodes.map((node, idx) => {
                                            const angles = [315, 45, 225, 135];
                                            const angle = (angles[idx] * Math.PI) / 180;
                                            const cx = 200, cy = 175;
                                            const r1 = 0, r2 = 140; // Start from center (r1=0)
                                            const x1 = cx + r1 * Math.cos(angle);
                                            const y1 = cy + r1 * Math.sin(angle);
                                            const x2 = cx + r2 * Math.cos(angle);
                                            const y2 = cy + r2 * Math.sin(angle);
                                            const isActive = activeNode === idx;
                                            return (
                                                <line
                                                    key={idx}
                                                    x1={x1}
                                                    y1={y1}
                                                    x2={x2}
                                                    y2={y2}
                                                    stroke={isActive ? node.color : "#CBD5E1"}
                                                    strokeWidth={isActive ? 2.5 : 1}
                                                    strokeDasharray={isActive ? "0" : "4 4"}
                                                    className={isActive ? "" : "animated-dash"}
                                                    style={{
                                                        transition: "all 0.5s ease",
                                                        animationDelay: `${idx * 0.2}s`
                                                    }}
                                                />
                                            );
                                        })}
                                    </svg>

                                    {/* Central cycling service label - CROSSFADE animation */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                        {/* Previous label (fading out) */}
                                        {isTransitioning && (
                                            <div
                                                className="absolute inset-0 flex items-center gap-1.5 px-3 py-2 rounded-lg border shadow-md bg-card animate-fadeOut"
                                                style={{
                                                    borderColor: nodes[prevNode].color,
                                                    boxShadow: `0 4px 15px ${nodes[prevNode].color}30`,
                                                }}
                                            >
                                                <span
                                                    className="text-sm"
                                                    style={{ color: nodes[prevNode].color }}
                                                >
                                                    {nodes[prevNode].icon}
                                                </span>
                                                <span className="text-xs font-medium whitespace-nowrap text-foreground">
                                                    {nodes[prevNode].label}
                                                </span>
                                            </div>
                                        )}

                                        {/* Current label (fading in) */}
                                        <div
                                            key={activeNode}
                                            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border shadow-md bg-card ${isTransitioning ? 'animate-fadeIn' : ''}`}
                                            style={{
                                                borderColor: nodes[activeNode].color,
                                                boxShadow: `0 4px 15px ${nodes[activeNode].color}30`,
                                            }}
                                        >
                                            <span
                                                className="text-sm"
                                                style={{ color: nodes[activeNode].color }}
                                            >
                                                {nodes[activeNode].icon}
                                            </span>
                                            <span className="text-xs font-medium whitespace-nowrap text-foreground">
                                                {nodes[activeNode].label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Animation styles */}
                                    <style jsx>{`
                                        @keyframes fadeIn {
                                            0% { opacity: 0; }
                                            100% { opacity: 1; }
                                        }
                                        @keyframes fadeOut {
                                            0% { opacity: 1; }
                                            100% { opacity: 0; }
                                        }
                                        .animate-fadeIn {
                                            animation: fadeIn 0.6s ease-in-out forwards;
                                        }
                                        .animate-fadeOut {
                                            animation: fadeOut 0.6s ease-in-out forwards;
                                        }
                                    `}</style>


                                    {/* Floating metrics */}
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                                        {[
                                            { label: "Uptime", value: "99.99%", color: "text-green-600" },
                                            { label: "Latency", value: "<15ms", color: "text-blue-600" },
                                            { label: "Nodes", value: "10+", color: "text-purple-600" },
                                        ].map((metric) => (
                                            <div key={metric.label} className="flex-1 bg-secondary rounded-lg p-3 text-center">
                                                <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                                ● LIVE
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

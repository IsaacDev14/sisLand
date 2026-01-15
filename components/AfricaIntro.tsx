"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

interface AfricaIntroProps {
    onComplete: () => void;
}

export default function AfricaIntro({ onComplete }: AfricaIntroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const pulseRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isVisible, setIsVisible] = useState(true);

    // City positions (approximate on the map image)
    const cities = [
        { name: "Cairo", x: 68, y: 18 },
        { name: "Lagos", x: 28, y: 45 },
        { name: "Nairobi", x: 72, y: 52 },
        { name: "Johannesburg", x: 55, y: 82 },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Fade out and trigger callback
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.inOut",
                        onComplete: () => {
                            setIsVisible(false);
                            onComplete();
                        },
                    });
                },
            });

            // Initial state
            gsap.set(mapRef.current, { scale: 0.8, opacity: 0 });
            gsap.set(textRef.current, { y: 30, opacity: 0 });
            gsap.set(pulseRefs.current, { scale: 0, opacity: 0 });

            // Animate map in
            tl.to(mapRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
            });

            // Animate city pulses sequentially
            pulseRefs.current.forEach((el, i) => {
                tl.to(
                    el,
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: "back.out(1.7)",
                    },
                    "-=0.2"
                );
            });

            // Animate text
            tl.to(
                textRef.current,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.3"
            );

            // Hold for a moment
            tl.to({}, { duration: 1.5 });

            // Zoom and fade transition
            tl.to(mapRef.current, {
                scale: 1.5,
                opacity: 0,
                duration: 1,
                ease: "power2.in",
            });

            tl.to(
                textRef.current,
                {
                    y: -30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.in",
                },
                "-=0.8"
            );
        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0a0612] to-slate-950 dark:from-slate-950 dark:via-[#0a0612] dark:to-slate-950"
            style={{
                background:
                    "var(--intro-bg, linear-gradient(135deg, #0f172a 0%, #0a0612 50%, #0f172a 100%))",
            }}
        >
            {/* Ambient glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />
                <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-pink-500/8 blur-[120px]" />
            </div>

            {/* Map container */}
            <div ref={mapRef} className="relative mb-8">
                <Image
                    src="/frames/africa_network.png"
                    alt="Africa Network"
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-2xl"
                    priority
                />

                {/* Animated pulse dots for cities */}
                {cities.map((city, i) => (
                    <div
                        key={city.name}
                        ref={(el) => {
                            pulseRefs.current[i] = el;
                        }}
                        className="absolute"
                        style={{
                            left: `${city.x}%`,
                            top: `${city.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        {/* Outer pulse ring */}
                        <div className="absolute inset-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-pink-500/30" />
                        {/* Inner dot */}
                        <div className="relative h-3 w-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg shadow-pink-500/50" />
                    </div>
                ))}
            </div>

            {/* Text */}
            <div ref={textRef} className="text-center">
                <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                    Connecting <span className="text-pink-500">Africa</span>
                </h2>
                <p className="text-slate-400">
                    Powering the future with sovereign cloud infrastructure
                </p>
            </div>

            {/* Skip button */}
            <button
                onClick={() => {
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            setIsVisible(false);
                            onComplete();
                        },
                    });
                }}
                className="absolute bottom-8 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-400 transition-all hover:border-pink-500/50 hover:text-pink-400"
            >
                Skip intro
            </button>
        </div>
    );
}

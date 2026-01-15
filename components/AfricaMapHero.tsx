"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// City positions matching the africa_network.png (percentages) - calibrated to stay on the map
const cities = [
    { name: "Cairo", x: 58, y: 18 },      // Northeast - Egypt
    { name: "Lagos", x: 35, y: 45 },       // West coast - Nigeria
    { name: "Nairobi", x: 60, y: 52 },     // East - Kenya
    { name: "Johannesburg", x: 52, y: 72 }, // South - SA
    { name: "Accra", x: 33, y: 47 },       // West - Ghana
    { name: "Addis Ababa", x: 62, y: 40 }, // East - Ethiopia
    { name: "Kampala", x: 56, y: 48 },     // Central east - Uganda
    { name: "Kigali", x: 54, y: 52 },      // Central - Rwanda
];

// Data routes between cities
const dataRoutes = [
    { from: 0, to: 2 },  // Cairo to Nairobi
    { from: 1, to: 3 },  // Lagos to Johannesburg  
    { from: 6, to: 7 },  // Kampala to Cape Town
    { from: 0, to: 5 },  // Cairo to Addis Ababa
    { from: 5, to: 2 },  // Addis Ababa to Nairobi
    { from: 1, to: 0 },  // Lagos to Cairo
    { from: 2, to: 3 },  // Nairobi to Johannesburg
];

// Minimalist data packet - just a clean glowing dot
function DataPacket({
    fromCity,
    toCity,
    delay,
    duration,
    color,
}: {
    fromCity: typeof cities[0];
    toCity: typeof cities[0];
    delay: number;
    duration: number;
    color: string;
}) {
    const packetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!packetRef.current) return;

        const tl = gsap.timeline({ repeat: -1, delay });

        tl.set(packetRef.current, {
            left: `${fromCity.x}%`,
            top: `${fromCity.y}%`,
            opacity: 0,
            scale: 0.5,
        });

        tl.to(packetRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
        });

        tl.to(packetRef.current, {
            left: `${toCity.x}%`,
            top: `${toCity.y}%`,
            duration,
            ease: "power1.inOut",
        });

        tl.to(packetRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.4,
            ease: "power2.in",
        }, `-=0.3`);

        tl.to({}, { duration: 1 + Math.random() * 2 });

        return () => { tl.kill(); };
    }, [fromCity, toCity, delay, duration]);

    return (
        <div
            ref={packetRef}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
            style={{ left: `${fromCity.x}%`, top: `${fromCity.y}%` }}
        >
            {/* Simple glowing dot */}
            <div
                className="w-2 h-2 rounded-full"
                style={{
                    backgroundColor: color,
                    boxShadow: `0 0 6px ${color}, 0 0 12px ${color}80`,
                }}
            />
        </div>
    );
}

// Infrastructure nodes
const infrastructureNodes = [
    { id: "ai", name: "AI Accelerator", metric: "500+ TFLOPS", icon: "◈", color: "#ec4899", orbit: { radius: 200, angle: 30 } },
    { id: "compute", name: "Compute Engine", metric: "10K+ Cores", icon: "⬡", color: "#06b6d4", orbit: { radius: 220, angle: 90 } },
    { id: "storage", name: "Storage Array", metric: "99.99% Durable", icon: "⬢", color: "#a855f7", orbit: { radius: 200, angle: 150 } },
    { id: "network", name: "Network Mesh", metric: "400Gbps", icon: "◇", color: "#22c55e", orbit: { radius: 220, angle: 210 } },
    { id: "security", name: "Security Shield", metric: "SOC2 Certified", icon: "◆", color: "#f59e0b", orbit: { radius: 200, angle: 270 } },
    { id: "data", name: "Data Intelligence", metric: "Real-time AI", icon: "◉", color: "#ef4444", orbit: { radius: 220, angle: 330 } },
];

function HolographicCard({ node, progress, baseAngle }: { node: typeof infrastructureNodes[0]; progress: number; baseAngle: number }) {
    const angleRad = ((baseAngle + progress * 45) * Math.PI) / 180;
    const expandedRadius = node.orbit.radius * Math.min(1, progress * 1.5);
    const x = Math.cos(angleRad) * expandedRadius;
    const y = Math.sin(angleRad) * expandedRadius * 0.4;
    const opacity = Math.min(1, progress * 2);
    const scale = 0.7 + progress * 0.3;

    if (progress < 0.25) return null;

    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`, opacity }}
        >
            <div
                className="w-20 h-20 rounded-lg border backdrop-blur-sm flex flex-col items-center justify-center p-2"
                style={{
                    borderColor: `${node.color}50`,
                    background: `linear-gradient(145deg, rgba(15,15,30,0.9), rgba(10,10,25,0.95))`,
                    boxShadow: `0 0 15px ${node.color}30`,
                }}
            >
                <span className="text-xl" style={{ color: node.color }}>{node.icon}</span>
                <h4 className="text-white font-medium text-[9px] text-center mt-1">{node.name}</h4>
                <span className="text-[7px] text-slate-400 mt-0.5">{node.metric}</span>
            </div>
        </div>
    );
}

export default function AfricaMapHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const infraContainerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(infraContainerRef.current, { opacity: 0, scale: 0.9 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=150%",
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        setScrollProgress(self.progress);
                        setIsScrolling(self.progress > 0 && self.progress < 1);
                    },
                    onLeave: () => setIsScrolling(false),
                    onEnterBack: () => setIsScrolling(true),
                },
            });

            tl.to(mapRef.current, { scale: 0.75, opacity: 0.9, duration: 0.4 }, 0);
            tl.to(infraContainerRef.current, { opacity: 1, scale: 1, duration: 0.3 }, 0.15);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Minimalist packets - fewer, cleaner
    const packets = dataRoutes.map((route, idx) => ({
        fromCity: cities[route.from],
        toCity: cities[route.to],
        delay: idx * 0.8,
        duration: 3 + Math.random(),
        color: idx % 2 === 0 ? "#00D4FF" : "#FF6B9D",
    }));

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a0a14] to-slate-950"
        >
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row items-center justify-between gap-8 px-6 pt-24 pb-12">
                {/* Left: Text */}
                <div className="flex-1 max-w-xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                        <span className="text-sm text-pink-400">Africa&apos;s Cloud Network</span>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Reinventing{" "}
                        <span className="bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">What&apos;s Possible</span>
                    </h1>

                    <p className="mb-4 text-lg text-slate-300">with Local Cloud, Data Intelligence & AI Advantage</p>
                    <p className="mb-8 text-slate-400 leading-relaxed">Siscom innovates and engineers intelligent outcomes—helping your business thrive in a cloud-first, AI-driven future.</p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-600 to-red-500 px-6 py-3 font-medium text-white transition-all hover:opacity-90">
                            Get Started
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#services" className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/30 px-6 py-3 font-medium text-white transition-all hover:bg-slate-800/50">
                            Explore Solutions
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className="mt-12 flex items-center gap-3">
                        <svg className={`h-5 w-5 text-slate-500 ${!isScrolling && scrollProgress < 1 ? "animate-bounce" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <span className="text-sm text-slate-500">
                            {isScrolling ? `Exploring... ${Math.round(scrollProgress * 100)}%` : scrollProgress >= 1 ? "Complete" : "Scroll to explore"}
                        </span>
                    </div>
                </div>

                {/* Right: Africa map with data flow */}
                <div ref={mapContainerRef} className="relative flex-1 flex items-center justify-center min-h-[500px] max-w-[550px]">
                    {/* Map */}
                    <div ref={mapRef} className="relative z-10" style={{ width: 480, height: 480 }}>
                        <Image
                            src="/frames/africa_network.png"
                            alt="Africa Network"
                            fill
                            className="object-contain"
                            priority
                        />
                        {/* Minimalist data packets */}
                        {packets.map((packet, idx) => (
                            <DataPacket key={idx} {...packet} />
                        ))}
                    </div>

                    {/* Orbital cards */}
                    <div ref={infraContainerRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        {infrastructureNodes.map((node) => (
                            <HolographicCard key={node.id} node={node} progress={scrollProgress} baseAngle={node.orbit.angle} />
                        ))}
                    </div>

                    {/* Status - minimalist */}
                    <div className="absolute -right-2 top-12 z-30 flex flex-col gap-2">
                        <div className="flex items-center gap-1.5 rounded-md bg-slate-900/80 px-2.5 py-1 text-[10px] backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            <span className="text-green-400">LIVE</span>
                        </div>
                        <div className="rounded-md bg-slate-900/80 px-2.5 py-1 text-[10px] text-cyan-400 backdrop-blur-sm">
                            99.99% Uptime
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

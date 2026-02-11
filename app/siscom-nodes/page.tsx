"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SolutionCard } from "@/components/SolutionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cpu, HardDrive, Network, Zap, Shield, Globe, Clock, Sliders, Database, ArrowRight, Cloud } from "lucide-react";

// Data: GPU Products
const GPUProducts = [
    { name: "NVIDIA GB200 NVL72 / HGX B200", status: "Available Now" },
    { name: "NVIDIA HGX H100 / H200", status: "Available Now" },
    { name: "NVIDIA HGX A100", status: "Available Now" },
    { name: "NVIDIA PCIe A100", status: "Available Now" },
    { name: "NVIDIA L40 / L40S", status: "Available Now" },
    { name: "NVIDIA A40", status: "Available Now" },
    { name: "NVIDIA RTX GPUs", status: "Coming Soon" },
    { name: "MiniCards", status: "Coming Soon" },
];


function ServerUnit({ index, isActive }: { index: number; isActive: boolean }) {
    if (isActive) {
        return (
            <div className="h-20 bg-background border border-pink-500/30 rounded-lg flex items-center px-5 gap-5 relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(236,72,153,0.3)] group mt-2 transition-all duration-500 ease-in-out dark:bg-zinc-900/50">
                {/* Glowing Accents */}
                <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 shadow-[0_0_15px_-2px_rgba(236,72,153,0.6)]" />
                <div className="absolute inset-0 opacity-10 dark:opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: "8px 8px",
                    }}
                />

                {/* Status LEDs */}
                <div className="flex flex-col gap-1.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-[pulse_1.5s_ease-in-out_infinite]" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-[pulse_2s_ease-in-out_infinite_0.5s]" />
                </div>

                {/* Activity Graph Simulation */}
                <div className="flex-1 flex items-center gap-1 h-full py-6 z-10 opacity-80">
                    {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <div
                            key={i}
                            className="w-1.5 bg-pink-500/40 rounded-full transition-all duration-500 animate-pulse"
                            style={{
                                height: `${h}%`,
                                animationDelay: `${i * 0.15}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Label */}
                <div className="text-[10px] font-mono text-pink-600 dark:text-pink-200/50 tracking-widest uppercase z-10 border border-pink-500/20 px-2 py-1 rounded bg-pink-500/5">
                    Active
                </div>
            </div>
        );
    }

    // Passive / Idle / Maintenance Units (Cycling designs based on index for variety)
    return (
        <div className="h-16 bg-muted/40 rounded-md border border-border/50 flex items-center px-4 gap-4 transition-all duration-500 ease-in-out hover:bg-muted/60 relative overflow-hidden">
            {/* Subtle Shimmer for all idle units */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full animate-[shimmer_5s_infinite]" />

            <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)] ${index % 2 === 0 ? 'bg-emerald-500 animate-[pulse_3s_infinite]' : 'bg-amber-500 animate-[pulse_4s_infinite]'}`} />
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
            <div className="flex-1" />

            {/* Simple Data Bars */}
            <div className="flex gap-1">
                <div className="w-12 h-2 bg-foreground/5 rounded-sm opacity-50" />
            </div>
        </div>
    );
}

function ServerRack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === 3 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return (
            <div className="w-full h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl p-6 flex flex-col gap-4 relative overflow-hidden ring-1 ring-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent pointer-events-none" />
                {[0, 1, 2, 3].map((idx) => (
                    <ServerUnit key={idx} index={idx} isActive={idx === 3} />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl p-6 flex flex-col gap-4 relative overflow-hidden ring-1 ring-foreground/5">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent pointer-events-none" />
            {[0, 1, 2, 3].map((idx) => (
                <ServerUnit key={idx} index={idx} isActive={idx === activeIndex} />
            ))}
        </div>
    );
}

export default function SiscomNodesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                {/* Background Pattern */}
                {/* Background Pattern - Solid Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />

                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="max-w-2xl">
                            {/* Tagline */}
                            <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-600 dark:text-pink-400 bg-pink-500/10 backdrop-blur-sm px-4 py-1.5 text-sm">
                                <span className="mr-2 h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                                Sovereign Cloud & AI Infrastructure
                            </Badge>

                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                                Siscom Nodes
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light max-w-lg">
                                Secure, sovereign compute and AI infrastructure built to meet the performance, compliance, and data-residency needs of African businesses.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="rounded-full px-8 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/20" asChild>
                                    <Link href="/contact">
                                        Start Deploying
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 border-input bg-background/50 backdrop-blur hover:bg-accent hover:text-accent-foreground" asChild>
                                    <Link href="#offerings">
                                        View Pricing
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Visual: Server Illustration (React Component) */}
                        <FadeIn className="hidden lg:block relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl opacity-30 rounded-full" />
                            <div className="relative aspect-square w-full max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                                <ServerRack />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Infrastructure Offerings */}
                <section id="offerings" className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Infrastructure Offerings</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose the right infrastructure for your workload—from dedicated bare metal to flexible virtual nodes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <SolutionCard
                            title="Bare-Metals"
                            description="High-performance dedicated servers tailored to your workloads with full resource allocation and enterprise-grade hardware."
                            href="/siscom-nodes/bare-metal"
                            delay={0.1}
                            icon={<Server className="w-6 h-6 text-pink-500" />}
                            gradient="from-pink-500/20 via-rose-500/20 to-red-500/20"
                            imageSrc="/images/nodes/bare-metal.png"
                        />
                        <SolutionCard
                            title="Virtual Servers"
                            description="Scalable, secure, and cost-effective virtual machines with instant deployment and flexible resource allocation."
                            href="/siscom-nodes/virtual-servers"
                            delay={0.2}
                            icon={<Cloud className="w-6 h-6 text-pink-500" />}
                            gradient="from-pink-500/20 via-rose-500/20 to-red-500/20"
                            imageSrc="/images/nodes/virtual-server-v2.png"
                        />
                        <SolutionCard
                            title="Storage"
                            description="Manage all subscriptions from one place. High-speed, secure, and redundant storage solutions for your critical data."
                            href="/siscom-nodes/storage"
                            delay={0.3}
                            icon={<Database className="w-6 h-6 text-pink-500" />}
                            gradient="from-pink-500/20 via-rose-500/20 to-red-500/20"
                            imageSrc="/images/nodes/storage.png"
                        />
                    </div>
                </section>

                {/* GPU Compute Grid */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-foreground">Available GPU Compute Products</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {GPUProducts.map((product, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group overflow-hidden relative">
                                {/* GPU Image */}
                                <div className="w-full h-32 relative mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/nodes/gpu.png"
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                                </div>

                                <h3 className="text-sm font-medium text-foreground mb-4 relative z-10">{product.name}</h3>
                                <Badge variant={product.status === 'Available Now' ? 'default' : 'secondary'} className={product.status === 'Available Now' ? 'bg-pink-500/10 text-pink-600 hover:bg-pink-500/20 border-pink-200 dark:border-pink-900' : ''}>
                                    {product.status}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Hardware Specifications - Premium Card Grid */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Hardware Specifications</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Enterprise-grade components powering your sovereign infrastructure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                label: "Processors",
                                value: "Intel Xeon Scalable",
                                detail: "& AMD EPYC (Latest Gen)"
                            },
                            {
                                icon: <Sliders className="w-8 h-8" />,
                                label: "Memory",
                                value: "DDR5 ECC",
                                detail: "Registered RAM"
                            },
                            {
                                icon: <HardDrive className="w-8 h-8" />,
                                label: "Storage",
                                value: "NVMe SSDs",
                                detail: "RAID 10 Default"
                            },
                            {
                                icon: <Network className="w-8 h-8" />,
                                label: "Network",
                                value: "2x 10Gbps",
                                detail: "Redundant Uplinks"
                            }
                        ].map((spec, idx) => (
                            <div key={idx} className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mb-5 text-pink-500 group-hover:bg-pink-500/20 transition-colors">
                                    {spec.icon}
                                </div>

                                {/* Label */}
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{spec.label}</p>

                                {/* Value */}
                                <h3 className="text-xl font-bold text-foreground mb-1">{spec.value}</h3>

                                {/* Detail */}
                                <p className="text-sm text-muted-foreground">{spec.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

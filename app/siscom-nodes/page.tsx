"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn } from "@/components/FadeIn";

// Icons
const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className || "w-5 h-5 text-emerald-500 mr-2"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ServerIcon = () => (
    <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
    </svg>
);

const Features = [
    {
        title: "Full Root Access",
        description: "Complete administrative control over your instance. Install any software, configure firewalls, and manage users.",
    },
    {
        title: "99.99% Uptime SLA",
        description: "Enterprise-grade reliability. We guarantee your infrastructure stays online with our financially backed SLA.",
    },
    {
        title: "Data Sovereignty",
        description: "Your data stays in Africa. Full compliance with local data protection regulations and residency requirements.",
    },
    {
        title: "<15ms Latency",
        description: "Blazing fast connection speeds for local users. Direct peering with major ISPs in the region.",
    },
    {
        title: "DDoS Protection",
        description: "Always-on mitigation against network attacks ensures your services remain accessible.",
    },
    {
        title: "Instant Provisioning",
        description: "Deploy new instances in seconds. Scale your infrastructure up or down automatically via API.",
    },
];

const Products = [
    {
        title: "Bare Metal",
        price: "From KES 15,000/mo",
        icon: <ServerIcon />,
        features: ["Dedicated Hardware", "No Hypervisor Overhead", "Custom Specs Available"],
        cta: "Configure Server",
        href: "/contact?product=bare-metal",
    },
    {
        title: "Virtual Private Servers",
        price: "From KES 1,500/mo",
        icon: <ServerIcon />,
        features: ["Shared or Dedicated vCPU", "NVMe Storage", "Instant Deployment"],
        cta: "Deploy VPS",
        href: "/contact?product=vps",
        popular: true,
    },
    {
        title: "Object Storage",
        price: "From KES 500/mo",
        icon: <ServerIcon />,
        features: ["S3 Compatible", "Infinite Scaling", "Free Egress (Local)"],
        cta: "Start Storing",
        href: "/contact?product=storage",
    },
];

// Data: Infrastructure Offerings
const Offerings = [
    {
        title: "Dedicated Nodes",
        tagline: "Full Control. Maximum Performance.",
        description: "Access the full power of dedicated compute—virtual or physical—with complete root access. Designed for mission-critical workloads that demand isolation, performance, and reliability.",
        theme: "blue",
        benefits: [
            "Full root access (virtual or bare metal)",
            "N+1 redundancy for high availability",
            "Hosted in Tier III data centers",
            "Ideal for regulated, high-performance workloads"
        ],
        cta: "Explore Dedicated Nodes"
    },
    {
        title: "Virtual Nodes",
        tagline: "Flexible Compute, Instantly Deployed.",
        description: "Get a slice of Siscom's sovereign infrastructure with Virtual Nodes—deploy remotely in minutes and scale as you grow. Choose the right size for your workload and start fast.",
        theme: "emerald",
        nodeTypes: ["MicroNode", "MegaNode", "TerraNode"],
        benefits: [
            "99.99% uptime SLA",
            "Local technical support",
            "Local billing & local currency",
            "3-month free trial"
        ],
        cta: "Get Started Now"
    },
    {
        title: "Storage Nodes",
        tagline: "High-Speed, Local Data Storage",
        description: "Store enterprise data, video footage, backups, and large datasets locally with maximum upload and download speeds—secure, scalable, and optimized for data-intensive workloads.",
        theme: "amber",
        useCases: [
            "Enterprise data storage",
            "Media & video archives",
            "AI datasets & backups"
        ],
        cta: "Explore Storage Solutions"
    }
];

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
            <div className="h-20 bg-gradient-to-r from-zinc-900 to-zinc-950 border border-pink-500/30 rounded-lg flex items-center px-5 gap-5 relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(236,72,153,0.3)] group mt-2 transition-all duration-500 ease-in-out">
                {/* Glowing Accents */}
                <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 shadow-[0_0_15px_-2px_rgba(236,72,153,0.6)]" />
                <div className="absolute inset-0 bg-[url('/grid-pixel.png')] opacity-20" />

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
                <div className="text-[10px] font-mono text-pink-200/50 tracking-widest uppercase z-10 border border-pink-500/20 px-2 py-1 rounded">
                    Active
                </div>
            </div>
        );
    }

    // Passive / Idle / Maintenance Units (Cycling designs based on index for variety)
    return (
        <div className="h-16 bg-muted/40 rounded-md border border-border/50 flex items-center px-4 gap-4 transition-all duration-500 ease-in-out hover:bg-muted/60 relative overflow-hidden">
            {/* Subtle Shimmer for all idle units */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_5s_infinite]" />

            <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)] ${index % 2 === 0 ? 'bg-emerald-500 animate-[pulse_3s_infinite]' : 'bg-amber-500 animate-[pulse_4s_infinite]'}`} />
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <div className="flex-1" />

            {/* Simple Data Bars */}
            <div className="flex gap-1">
                <div className="w-12 h-2 bg-zinc-500/10 rounded-sm opacity-50" />
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
        <div className="w-full h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl p-6 flex flex-col gap-4 relative overflow-hidden ring-1 ring-white/5">
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
                <GridPattern
                    x={-1}
                    y={-1}
                    className="absolute inset-0 h-full w-full fill-neutral-200/20 stroke-neutral-200/20 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] dark:fill-neutral-800/20 dark:stroke-neutral-800/20"
                    width={40}
                    height={40}
                />

                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="max-w-2xl">
                            {/* Tagline */}
                            <p className="text-xs font-semibold tracking-widest text-pink-500 uppercase mb-4">
                                Sovereign Cloud & AI Infrastructure
                            </p>
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-foreground">
                                Siscom Nodes
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-light">
                                Secure, sovereign compute and AI infrastructure built to meet the performance, compliance, and data-residency needs of African businesses—scalable, resilient, and cloud-first.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
                                >
                                    Start Deploying
                                </Link>
                                <Link
                                    href="#offerings"
                                    className="border border-border bg-background/50 backdrop-blur px-8 py-3.5 rounded-full font-medium hover:bg-muted transition-colors"
                                >
                                    View Pricing
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Visual: Server Illustration (React Component) */}
                        <FadeIn className="hidden lg:block relative">
                            <div className="relative aspect-square w-full max-w-md mx-auto">
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
                        {Offerings.map((offering, idx) => (
                            <div key={idx} className="relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm flex flex-col transition-all duration-300 group hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1">
                                {/* Icon - Siscom Pink */}
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-pink-500/10">
                                    <div className="w-6 h-6 rounded-md bg-pink-500" />
                                </div>

                                <h3 className="text-xl font-semibold text-foreground mb-2">{offering.title}</h3>
                                <p className="text-sm font-medium mb-4 text-pink-500">
                                    {offering.tagline}
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                    {offering.description}
                                </p>

                                {/* Virtual Node Types (Specific) */}
                                {offering.nodeTypes && (
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-xs text-muted-foreground w-full mb-1">Node Types:</span>
                                        {offering.nodeTypes.map(type => (
                                            <span key={type} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-foreground">
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Use Cases / Benefits List */}
                                <div className="space-y-3 mb-8 flex-1">
                                    {(offering.benefits || offering.useCases)?.map((item, i) => (
                                        <div key={i} className="flex gap-3 text-sm text-neutral-300">
                                            <CheckIcon className="w-5 h-5 flex-shrink-0 text-pink-500" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="#" className="flex items-center text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors mt-auto">
                                    {offering.cta} <span className="ml-1">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* GPU Compute Grid */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-foreground">Available GPU Compute Products</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {GPUProducts.map((product, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center text-center">
                                {/* Pink Chip Icon */}
                                <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 text-pink-500">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                                </div>
                                <h3 className="text-sm font-medium text-foreground mb-4">{product.name}</h3>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                                    ${product.status === 'Available Now' ? 'bg-pink-500/10 text-pink-500' : 'bg-muted text-muted-foreground'}
                                `}>
                                    {product.status}
                                </span>
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
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                                    </svg>
                                ),
                                label: "Processors",
                                value: "Intel Xeon Scalable",
                                detail: "& AMD EPYC (Latest Gen)"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                                    </svg>
                                ),
                                label: "Memory",
                                value: "DDR5 ECC",
                                detail: "Registered RAM"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                ),
                                label: "Storage",
                                value: "NVMe SSDs",
                                detail: "RAID 10 Default"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                ),
                                label: "Network",
                                value: "2x 10Gbps",
                                detail: "Redundant Uplinks"
                            }
                        ].map((spec, idx) => (
                            <div key={idx} className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300">
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

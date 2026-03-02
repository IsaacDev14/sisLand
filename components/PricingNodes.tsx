"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, ArrowRight, Server, Cpu, Database, X } from "lucide-react";
import Link from "next/link";

// --- Data Definitions ---

// --- Data Definitions (Same as before) ---
const dedicatedPlans = [
    {
        tier: "Starter Dedicated",
        cpu: "12 vCPU",
        ram: "16 GB",
        storage: "256 GB SSD",
        price: "Ksh 18,500",
        target: "Entry-level servers, small businesses",
    },
    {
        tier: "Professional Dedicated",
        cpu: "20 vCPU",
        ram: "32 GB",
        storage: "256 GB SSD",
        price: "Ksh 30,500",
        target: "Mid-tier organizations, databases",
    },
    {
        tier: "Business Dedicated",
        cpu: "32 vCPU",
        ram: "64 GB",
        storage: "512 GB SSD",
        price: "Ksh 47,500",
        target: "High-performance compute, analytics",
    },
    {
        tier: "Enterprise Dedicated",
        cpu: "32 vCPU",
        ram: "128 GB",
        storage: "512 GB SSD",
        price: "Ksh 74,500",
        target: "AI/ML, fintech, mission-critical workloads",
    },
];

const sharedPlans = [
    {
        tier: "Nano VM",
        cpu: "2 vCPU",
        ram: "2 GB",
        storage: "40 GB SSD",
        price: "Ksh 3,641 (Linux)",
        note: "Ksh 6,891 (Windows)",
        target: "Testing, development, micro-apps",
    },
    {
        tier: "Basic VM",
        cpu: "4 vCPU",
        ram: "4 GB",
        storage: "80 GB SSD",
        price: "Ksh 7,284 (Linux)",
        note: "Ksh 10,534 (Windows)",
        target: "Small business sites",
    },
    {
        tier: "Standard VM",
        cpu: "4 vCPU",
        ram: "8 GB",
        storage: "160 GB SSD",
        price: "Ksh 9,059 (Linux)",
        note: "Ksh 12,308 (Windows)",
        target: "Mid-sized web apps, CMS",
    },
    {
        tier: "Pro VM",
        cpu: "8 vCPU",
        ram: "16 GB",
        storage: "320 GB SSD",
        price: "Ksh 18,118 (Linux)",
        note: "Ksh 25,000 (Windows)",
        target: "High-demand web services, SaaS",
    },
];

const bareMetalPlans = [
    {
        item: "Full Bare Metal Lease",
        cpu: "128 vCPU",
        ram: "256 GB",
        storage: "5.76 TB SSD",
        price: "Ksh 170,000",
        target: "Maximum performance, total isolation",
    },
];

const gpuPlans = [
    { product: "NVIDIA GB200 NVL72 / HGX B200", status: "Available Now" },
    { product: "NVIDIA HGX H100 / H200", status: "Available Now" },
    { product: "NVIDIA HGX A100", status: "Available Now" },
    { product: "NVIDIA PCIe A100", status: "Available Now" },
    { product: "NVIDIA L40 / L40S", status: "Available Now" },
    { product: "NVIDIA A40", status: "Available Now" },
    { product: "NVIDIA RTX GPUs", status: "Coming Soon" },
    { product: "MiniCards", status: "Coming Soon" },
];

// --- Component ---

export default function PricingNodes() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="pricing">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Infrastructure Offerings</h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        High-performance compute solutions for every workload—from shared instances to dedicated bare metal.
                    </p>
                </div>

                {/* Dedicated Servers */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600/10">
                            <Server className="h-6 w-6 text-pink-600" />
                        </div>
                        Dedicated Servers
                    </h3>
                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-zinc-900 text-zinc-100 uppercase tracking-wider text-xs font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Plan / Tier</th>
                                        <th className="px-6 py-4">vCPU</th>
                                        <th className="px-6 py-4">RAM</th>
                                        <th className="px-6 py-4">Storage</th>
                                        <th className="px-6 py-4">Pricing (Monthly)</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {dedicatedPlans.map((plan, idx) => (
                                        <Row key={idx} plan={plan} type="dedicated" />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-border/50 my-16" />

                {/* Shared VMs */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600/10">
                            <Cpu className="h-6 w-6 text-pink-600" />
                        </div>
                        Shared VMs
                    </h3>
                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-zinc-900 text-zinc-100 uppercase tracking-wider text-xs font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Plan / Tier</th>
                                        <th className="px-6 py-4">vCPU</th>
                                        <th className="px-6 py-4">RAM</th>
                                        <th className="px-6 py-4">Storage</th>
                                        <th className="px-6 py-4">Pricing (Monthly)</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {sharedPlans.map((plan, idx) => (
                                        <Row key={idx} plan={plan} type="shared" />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-border/50 my-16" />

                {/* Bare Metal */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600/10">
                            <Database className="h-6 w-6 text-pink-600" />
                        </div>
                        Bare Metal
                    </h3>
                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-zinc-900 text-zinc-100 uppercase tracking-wider text-xs font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Item</th>
                                        <th className="px-6 py-4">vCPU</th>
                                        <th className="px-6 py-4">RAM</th>
                                        <th className="px-6 py-4">Storage</th>
                                        <th className="px-6 py-4">Pricing (Monthly)</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {bareMetalPlans.map((plan, idx) => (
                                        <Row key={idx} plan={plan} type="baremetal" />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-border/50 my-16" />

                {/* GPU Compute */}
                <div className="mb-12">
                    <h3 className="text-3xl md:text-5xl font-black mb-6 text-center tracking-tight">
                        GPU Compute Products
                    </h3>
                    <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12">
                        High-performance GPU instances optimized for AI training, rendering, and scientific computing.
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-zinc-900 text-zinc-100 uppercase tracking-wider text-xs font-semibold">
                                    <tr>
                                        <th className="px-6 py-3">Product</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {gpuPlans.map((plan, idx) => (
                                        <tr key={idx} className="group hover:bg-secondary/20 transition-colors">
                                            <td className="px-6 py-3 align-middle">
                                                <span className="font-bold text-foreground block text-sm">{plan.product}</span>
                                            </td>
                                            <td className="px-6 py-3 align-middle">
                                                <span className={`text-xs font-bold uppercase tracking-wider ${plan.status === "Available Now"
                                                    ? "text-foreground"
                                                    : "text-muted-foreground"
                                                    }`}>
                                                    {plan.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3 align-middle text-right">
                                                {plan.status === "Available Now" ? (
                                                    <Link
                                                        href="/contact?intent=gpu_reservation"
                                                        className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 whitespace-nowrap"
                                                    >
                                                        Reserve <ArrowRight className="ml-2 h-3 w-3" />
                                                    </Link>
                                                ) : (
                                                    <span className="text-xs font-medium text-muted-foreground">
                                                        -
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function Row({ plan, type }: { plan: any; type: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const needsOsSelection = type === "shared" && plan.note;
    const deployHref = `/contact?intent=Infrastructure Offerings&plan=${encodeURIComponent(plan.tier || plan.item)}&cpu=${encodeURIComponent(plan.cpu)}&ram=${encodeURIComponent(plan.ram)}&storage=${encodeURIComponent(plan.storage)}`;

    return (
        <tr className="group hover:bg-secondary/20 transition-colors">
            <td className="px-6 py-5 align-middle">
                <div>
                    <span className="font-bold text-foreground block text-base">{plan.tier || plan.item}</span>
                    <span className="text-xs text-muted-foreground mt-1 block max-w-[200px]">{plan.target}</span>
                </div>
            </td>
            <td className="px-6 py-5 align-middle text-foreground font-medium">{plan.cpu}</td>
            <td className="px-6 py-5 align-middle text-foreground font-medium">{plan.ram}</td>
            <td className="px-6 py-5 align-middle text-foreground font-medium">{plan.storage}</td>
            <td className="px-6 py-5 align-middle">
                <div className="flex flex-col gap-1">
                    <span className="font-bold text-foreground text-sm md:text-base whitespace-nowrap">{plan.price}</span>
                    {plan.note && <span className="font-bold text-muted-foreground text-sm md:text-base whitespace-nowrap">{plan.note}</span>}
                </div>
            </td>
            <td className="px-6 py-5 align-middle text-right">
                {needsOsSelection ? (
                    <>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 whitespace-nowrap"
                        >
                            Deploy <ArrowRight className="ml-2 h-4 w-4" />
                        </button>

                        {isModalOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4">
                                <div className="bg-card border border-border rounded-xl shadow-xl w-full max-w-md p-6 relative text-left">
                                    <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                                        <X className="h-5 w-5" />
                                    </button>
                                    <h3 className="text-xl font-bold mb-2">Select Operating System</h3>
                                    <p className="text-muted-foreground text-sm mb-6">Choose your preferred operating system for the {plan.tier || plan.item} plan.</p>

                                    <div className="flex flex-col gap-3">
                                        <Link
                                            href={`${deployHref}&price=${encodeURIComponent(plan.price)}`}
                                            className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-pink-500 hover:bg-pink-500/5 transition-colors group"
                                        >
                                            <span className="font-semibold text-foreground group-hover:text-pink-600 transition-colors">Linux (Ubuntu/Debian)</span>
                                            <span className="text-sm font-medium text-muted-foreground">{plan.price.replace(" (Linux)", "")}</span>
                                        </Link>
                                        <Link
                                            href={`${deployHref}&price=${encodeURIComponent(plan.note)}`}
                                            className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-pink-500 hover:bg-pink-500/5 transition-colors group"
                                        >
                                            <span className="font-semibold text-foreground group-hover:text-pink-600 transition-colors">Windows Server</span>
                                            <span className="text-sm font-medium text-muted-foreground">{plan.note.replace(" (Windows)", "")}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <Link
                        href={`${deployHref}&price=${encodeURIComponent(plan.price)}`}
                        className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 whitespace-nowrap"
                    >
                        Deploy <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                )}
            </td>
        </tr>
    );
}


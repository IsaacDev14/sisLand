"use client";

import { motion } from "framer-motion";
import { Check, Info, ArrowRight, Server, Cpu, Database } from "lucide-react";
import Link from "next/link";

// --- Data Definitions ---

// --- Data Definitions (Same as before) ---
const dedicatedPlans = [
    {
        tier: "Starter Dedicated",
        cpu: "12 vCPU",
        ram: "16 GB",
        storage: "256 GB SSD",
        price: "Ksh 23,308",
        target: "Entry-level servers, small businesses",
    },
    {
        tier: "Professional Dedicated",
        cpu: "20 vCPU",
        ram: "32 GB",
        storage: "256 GB SSD",
        price: "Ksh 39,832",
        target: "Mid-tier organizations, databases",
    },
    {
        tier: "Business Dedicated",
        cpu: "32 vCPU",
        ram: "64 GB",
        storage: "512 GB SSD",
        price: "Ksh 63,141",
        target: "High-performance compute, analytics",
    },
    {
        tier: "Enterprise Dedicated",
        cpu: "32 vCPU",
        ram: "128 GB",
        storage: "512 GB SSD",
        price: "Ksh 90,682",
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

// --- Component ---

export default function PricingNodes() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="pricing">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Product Pricing</h2>
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

            </div>
        </section>
    );
}

function Row({ plan, type }: { plan: any; type: string }) {
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
                <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 whitespace-nowrap"
                >
                    Deploy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </td>
        </tr>
    );
}


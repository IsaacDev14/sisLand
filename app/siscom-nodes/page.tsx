"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn } from "@/components/FadeIn";

// Icons
const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

export default function SiscomNodesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                {/* Background Pattern */}
                <GridPattern
                    x={-1}
                    y={-1}
                    className="absolute inset-0 h-full w-full fill-neutral-200/50 stroke-neutral-200/50 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] dark:fill-neutral-800/50 dark:stroke-neutral-800/50"
                    width={40}
                    height={40}
                />

                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="max-w-2xl">
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-foreground">
                                Siscom Nodes
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                                Local, compliant, and affordable cloud infrastructure.
                                Built on enterprise-grade hardware utilizing the latest generation processors.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    // UPDATED: Used Pink Brand Color
                                    className="bg-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
                                >
                                    Start Deploying
                                </Link>
                                <Link
                                    href="#products"
                                    className="border border-border bg-background/50 backdrop-blur px-8 py-3.5 rounded-full font-medium hover:bg-muted transition-colors"
                                >
                                    View Pricing
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Visual: Server Illustration (CSS Based) */}
                        <FadeIn className="hidden lg:block relative">
                            <div className="relative aspect-square w-full max-w-md mx-auto">
                                {/* Server Rack Illustration using CSS borders and divs */}
                                <div className="w-full h-full bg-card border border-border rounded-xl shadow-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent pointer-events-none" />

                                    {/* Server Unit 1 */}
                                    <div className="h-16 bg-muted rounded-md border border-border flex items-center px-4 gap-4 animate-pulse">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        <div className="flex-1" />
                                        <div className="w-32 h-2 bg-pink-500/20 rounded" />
                                    </div>
                                    {/* Server Unit 2 */}
                                    <div className="h-16 bg-muted rounded-md border border-border flex items-center px-4 gap-4">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <div className="w-2 h-2 rounded-full bg-zinc-500" />
                                        <div className="flex-1" />
                                        <div className="w-32 h-2 bg-zinc-500/20 rounded" />
                                    </div>
                                    {/* Server Unit 3 */}
                                    <div className="h-16 bg-muted rounded-md border border-border flex items-center px-4 gap-4">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <div className="flex-1" />
                                        <div className="w-32 h-2 bg-zinc-500/20 rounded" />
                                    </div>
                                    {/* Server Unit 4 (Active) */}
                                    <div className="h-16 bg-zinc-900 border border-zinc-800 rounded-md flex items-center px-4 gap-4 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                                        <div className="flex-1" />
                                        <div className="w-24 h-2 bg-zinc-700 rounded" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 relative z-10">
                    <div className="border-t border-border pt-16">
                        <h2 className="text-2xl font-semibold mb-12 text-foreground">Infrastructure Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                            {Features.map((feature, idx) => (
                                <div key={idx}>
                                    <h3 className="text-lg font-medium text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Cards */}
                <section id="products" className="bg-muted/30 py-24 border-y border-border relative">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold text-foreground">Compute Products</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Products.map((product, idx) => (
                                <div
                                    key={idx}
                                    className={`
                      relative p-8 rounded-2xl border bg-card flex flex-col shadow-sm
                      ${product.popular ? 'border-pink-500 shadow-lg ring-1 ring-pink-500/20' : 'border-border hover:border-pink-500/30'}
                      transition-all duration-300
                    `}
                                >
                                    {product.popular && (
                                        <span className="absolute -top-3 left-6 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                            MOST POPULAR
                                        </span>
                                    )}

                                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 border border-border text-foreground">
                                        {product.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-6">{product.price}</p>

                                    <ul className="mb-8 space-y-3 flex-grow">
                                        {product.features.map(feat => (
                                            <li key={feat} className="flex items-center text-sm text-foreground/80">
                                                <CheckIcon />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={product.href}
                                        // UPDATED: Used Pink Brand Color for Buttons
                                        className={`
                        w-full py-3 rounded-lg text-center font-medium transition-colors
                        ${product.popular
                                                ? 'bg-pink-600 text-white hover:bg-pink-500 shadow-md shadow-pink-600/10'
                                                : 'bg-muted text-foreground hover:bg-muted/80'}
                      `}
                                    >
                                        {product.cta}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specs Table (Simple) */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 relative z-10">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-semibold mb-8 text-foreground">Hardware Specifications</h2>
                        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                            <table className="min-w-full divide-y divide-border">
                                <thead className="bg-muted/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Component</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border bg-card">
                                    {/* Rows would be dynamically generated, keeping simple for now */}
                                    {[
                                        ["Processors", "Latest Gen Intel Xeon Scalable / AMD EPYC"],
                                        ["Memory", "DDR5 ECC Registered RAM"],
                                        ["Storage", "Enterprise NVMe SSDs (RAID 10 Default)"],
                                        ["Network", "2x 10Gbps Uplinks per Node (Redundant)"]
                                    ].map(([key, val], i) => (
                                        <tr key={i} className="hover:bg-muted/20 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-foreground">{key}</td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground">{val}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

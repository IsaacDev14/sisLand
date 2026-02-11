"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { GridPattern } from "@/components/GridPattern";
import MagnifyingMesh from "@/components/MagnifyingMesh";

const apps = [
    {
        name: "KAYA CLM",
        tagline: "Customer Lifecycle Management",
        description: "Complete customer lifecycle management for service businesses. Intelligent workflows, real-time tracking, and automated follow-ups.",
        features: ["Workflows", "Scheduling", "Compliance"],
        href: "/cloud-apps/kaya-clm",
        dashboardImage: "/images/dashboards/kaya-clm.png",
    },
    {
        name: "SHOPVERSE",
        tagline: "E-Commerce Platform",
        description: "Build, launch, and scale your online store. Multi-channel sales, inventory management, and seamless payment integration.",
        features: ["Storefront", "Payments", "Analytics"],
        href: "/cloud-apps/shopverse",
        dashboardImage: "/images/dashboards/shopverse.png",
    },
    {
        name: "PULSE 360",
        tagline: "Customer Engagement",
        description: "Listen, understand, and respond to customers. Real-time surveys, NPS tracking, and advanced engagement analytics.",
        features: ["Surveys", "NPS", "Insights"],
        href: "/cloud-apps/pulse-360",
        dashboardImage: "/images/dashboards/pulse-360.png",
    },
    {
        name: "SMARTCOOP",
        tagline: "Cooperative Management",
        description: "Digital solution for SACCOs and cooperatives. Member management, loan processing, savings tracking, and financial reporting.",
        features: ["Members", "Loans", "Dividends"],
        href: "/cloud-apps/smartcoop",
        dashboardImage: "/images/dashboards/smartcoop.png",
    },
    {
        name: "MOBILIZE",
        tagline: "Campaign Mobilization",
        description: "Digital mobilization for campaigns and advocacy. Multi-channel engagement, fundraising, polling, and real-time command center.",
        features: ["Outreach", "Donations", "Events"],
        href: "/cloud-apps/mobilize",
        dashboardImage: "/images/dashboards/mobilize.png",
    },
    {
        name: "PESAHUB",
        tagline: "Fintech Infrastructure",
        description: "Comprehensive financial management for African SMEs. Invoicing, expense tracking, payment processing, and financial reporting.",
        features: ["Invoicing", "Expenses", "Reports"],
        href: "/cloud-apps/pesahub",
        dashboardImage: "/images/dashboards/pesahub.png",
    },
];

const stats = [
    { value: "6", label: "Cloud Applications" },
    { value: "10K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
];

export default function CloudAppsPage() {
    const featured = apps[0];
    const remaining = apps.slice(1);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="relative">
                {/* ---- HERO ---- */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <MagnifyingMesh
                        gap={50}
                        radius={250}
                        strength={0.3}
                        className="opacity-40 stroke-pink-500/20"
                    />
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                                    </span>
                                    Siscom Cloud Suite
                                </div>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[0.95]">
                                    Cloud Apps
                                    <br />
                                    <span className="text-pink-600">
                                        Built for Africa
                                    </span>
                                </h1>
                                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed mb-8">
                                    Purpose-built SaaS applications designed to digitize African SMEs and enterprises. From e-commerce to fintech, we have you covered.
                                </p>
                                <div className="flex items-center gap-4 flex-wrap mb-10">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-pink-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/25 text-sm"
                                    >
                                        Request a Demo
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="#apps"
                                        className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-muted transition-colors text-sm"
                                    >
                                        Explore Apps
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Stats row */}
                                <div className="grid grid-cols-4 gap-6">
                                    {stats.map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                        >
                                            <div className="text-2xl sm:text-3xl font-black text-foreground">{stat.value}</div>
                                            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right: Dashboard preview */}
                            <motion.div
                                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                                    {/* macOS window dots */}
                                    <div className="absolute top-3 left-4 flex items-center gap-2 z-10">
                                        <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                                        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
                                        <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
                                    </div>
                                    <Image
                                        src="/images/dashboards/shopverse.png"
                                        alt="Shopverse Dashboard Preview"
                                        width={700}
                                        height={450}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                </div>
                                {/* Small floating card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="absolute -bottom-8 -left-8 w-56 rounded-xl overflow-hidden shadow-xl ring-1 ring-border"
                                >
                                    {/* macOS window dots */}
                                    <div className="absolute top-2 left-3 flex items-center gap-1.5 z-10">
                                        <span className="w-2 h-2 rounded-full bg-[#FF5F57]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#FEBC2E]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#28C840]"></span>
                                    </div>
                                    <Image
                                        src="/images/dashboards/pulse-360.png"
                                        alt="Pulse 360 Dashboard"
                                        width={224}
                                        height={140}
                                        className="w-full h-auto object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ---- FEATURED APP ---- */}
                <section id="apps" className="py-16 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href={featured.href} className="group block">
                                <div className="relative rounded-3xl overflow-hidden bg-secondary border border-border hover:border-pink-500/40 transition-all duration-500 hover:shadow-xl">
                                    <div className="grid lg:grid-cols-2">
                                        {/* Content */}
                                        <div className="p-10 lg:p-14 flex flex-col justify-center relative z-10">
                                            <span className="text-pink-600 text-sm font-semibold tracking-wide uppercase mb-4">{featured.tagline}</span>
                                            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight group-hover:text-pink-600 transition-colors">
                                                {featured.name}
                                            </h2>
                                            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                                                {featured.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {featured.features.map(f => (
                                                    <span key={f} className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1.5 rounded-lg border border-border">{f}</span>
                                                ))}
                                            </div>
                                            <div className="inline-flex items-center gap-2 text-pink-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                                Explore {featured.name}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                        {/* Dashboard Image */}
                                        <div className="relative h-72 lg:h-auto overflow-hidden">
                                            <Image
                                                src={featured.dashboardImage}
                                                alt={`${featured.name} Dashboard`}
                                                fill
                                                className="object-cover object-left-top"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ---- APP GRID ---- */}
                <section className="py-16 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-end justify-between mb-12"
                        >
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">All Applications</h2>
                                <p className="mt-2 text-muted-foreground text-lg">Everything your business needs in one ecosystem.</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {remaining.map((app, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                >
                                    <Link href={app.href} className="group block h-full">
                                        <div className="relative h-full rounded-2xl overflow-hidden border border-border bg-card hover:border-pink-500/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                            {/* Dashboard preview */}
                                            <div className="relative h-44 overflow-hidden bg-muted">
                                                <Image
                                                    src={app.dashboardImage}
                                                    alt={`${app.name} Dashboard`}
                                                    fill
                                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>

                                            {/* Card content */}
                                            <div className="p-5 pt-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-pink-600 transition-colors">
                                                        {app.name}
                                                    </h3>
                                                </div>
                                                <p className="text-xs font-medium text-pink-600 mb-2">{app.tagline}</p>
                                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                    {app.description}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {app.features.map(f => (
                                                            <span key={f} className="text-[11px] font-medium bg-secondary text-muted-foreground px-2.5 py-1 rounded-md">
                                                                {f}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-pink-600 group-hover:gap-1.5 transition-all whitespace-nowrap">
                                                        Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---- WHY SISCOM CLOUD ---- */}
                <section className="py-24 bg-secondary/50 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-4">Why Siscom Cloud?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Every app is built on our sovereign cloud infrastructure, designed for reliability, security, and the unique needs of African businesses.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Lightning Fast", description: "Optimized for speed across Africa with regional edge nodes and local data centers." },
                                { title: "Enterprise Security", description: "SOC 2 compliant with end-to-end encryption and role-based access control." },
                                { title: "Built for Africa", description: "M-Pesa, mobile money, and local payment integrations built in from day one." },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="text-center p-8 rounded-2xl bg-card border border-border"
                                >
                                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---- TESTIMONIAL ---- */}
                <section className="py-24 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-border">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573164574048-f968d7ee9f20?w=800&q=80"
                                        alt="African professionals collaborating with technology"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <blockquote className="relative">
                                    <p className="text-2xl lg:text-3xl font-bold text-foreground leading-snug mb-6">
                                        &ldquo;Siscom&apos;s cloud apps transformed how we manage our cooperative. What used to take weeks now happens in minutes.&rdquo;
                                    </p>
                                    <footer>
                                        <div className="text-sm font-semibold text-foreground">Sarah Mwangi</div>
                                        <div className="text-sm text-muted-foreground">Operations Manager, Nairobi SACCO</div>
                                    </footer>
                                </blockquote>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ---- BOTTOM CTA ---- */}
                <section className="py-32 relative z-10 bg-secondary overflow-hidden">
                    <div className="pointer-events-none absolute inset-0">
                        <GridPattern
                            width={40}
                            height={40}
                            x={-1}
                            y={-1}
                            className="stroke-border/50 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
                        />
                    </div>
                    <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 tracking-tight">
                                Ready to Digitize
                                <br />
                                Your Business?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                                Join thousands of African businesses already using Siscom Cloud Apps to grow and scale.
                            </p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/25 text-base"
                                >
                                    Get Started Today
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-muted transition-colors text-base"
                                >
                                    Schedule a Demo
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

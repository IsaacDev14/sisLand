"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { ArrowRight, Database, BarChart3, ShieldCheck, Zap, Globe2, Server, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SiscomDataPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-24 relative">
                {/* ────────── HERO SECTION ────────── */}
                <section className="relative overflow-hidden pt-10 pb-24 lg:pt-20 lg:pb-32">
                    {/* Background - Solid Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-background to-background pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                        <FadeIn>
                            <Badge variant="outline" className="mb-8 border-blue-500/50 text-blue-400 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full">
                                <span className="mr-2 h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                                Unified Data Platform
                            </Badge>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                                Turn Sovereignty into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Intelligent Action
                                </span>
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                                The first sovereign data lakehouse built for Africa. Ingest, process, and analyze petabytes of data with strict compliance and zero egress fees.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 h-14 text-lg">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button variant="ghost" size="lg" className="rounded-full px-8 text-foreground hover:bg-white/5 h-14 text-lg">
                                    Talk to Sales
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Hero Visual - Abstract Data Flow */}
                        <FadeIn delay={0.2} className="mt-20 relative">
                            <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm overflow-hidden aspect-[16/9] flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />

                                {/* Placeholder for Dashboard/Visual */}
                                <div className="text-center space-y-4">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center ring-1 ring-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse">
                                        <Database className="w-10 h-10 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-blue-100">Siscom Lakehouse Engine</h3>
                                    <p className="text-sm text-blue-200/60 font-mono">Processing 15PB Daily</p>
                                </div>

                                {/* Animated Grid Lines (Subtle) */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ────────── STATS SECTION ────────── */}
                <section className="border-y border-white/5 bg-white/[0.02]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/5">
                            {[
                                { label: "Data Processed Daily", value: "15PB+" },
                                { label: "Query Latency", value: "<10ms" },
                                { label: "Data Sovereignty", value: "100%" },
                                { label: "Uptime Guarnatee", value: "99.99%" },
                            ].map((stat, i) => (
                                <div key={i} className="px-4">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-blue-200/60 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ────────── FEATURES BENTO GRID ────────── */}
                <section className="py-24 lg:py-32 relative">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-16 md:text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                                Everything you need to master your data
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                A unified platform that brings together data warehousing, data lakes, and streaming analytics.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 - Large */}
                            <FadeIn className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12">
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                                        <Database className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Sovereign Data Lakehouse</h3>
                                    <p className="text-muted-foreground max-w-md">
                                        Combine the flexibility of data lakes with the performance of data warehouses. Keep your data locally resident in compliant African regions.
                                    </p>
                                </div>
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
                            </FadeIn>

                            {/* Card 2 */}
                            <FadeIn className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12">
                                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
                                <p className="text-muted-foreground">
                                    Ingest and analyze streaming data from IoT devices, transactions, and logs with sub-second latency.
                                </p>
                            </FadeIn>

                            {/* Card 3 */}
                            <FadeIn className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12">
                                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Enterprise Governance</h3>
                                <p className="text-muted-foreground">
                                    Fine-grained, role-based access control (RBAC), column-level masking, and automated compliance auditing.
                                </p>
                            </FadeIn>

                            {/* Card 4 - Large */}
                            <FadeIn className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12">
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6">
                                        <BarChart3 className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Intelligent BI & Reporting</h3>
                                    <p className="text-muted-foreground max-w-md">
                                        Create stunning, interactive dashboards that drive decision-making. Integrate seamlessly with Siscom AI for predictive insights.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* ────────── INDUSTRY USE CASES ────────── */}
                <section className="py-24 bg-white/[0.02]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                                Trusted by Industry Leaders
                            </h2>
                            <p className="text-lg text-muted-foreground">Soling complex data challenges across key African sectors.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Financial Services",
                                    icon: <Lock className="w-6 h-6" />,
                                    desc: "Real-time fraud detection and regulatory reporting compliance.",
                                    stat: "40% reduction in fraud",
                                    color: "blue"
                                },
                                {
                                    title: "Telecommunications",
                                    icon: <Globe2 className="w-6 h-6" />,
                                    desc: "Network optimization and customer churn prediction models.",
                                    stat: "100M+ daily events",
                                    color: "cyan"
                                },
                                {
                                    title: "Public Sector",
                                    icon: <Server className="w-6 h-6" />,
                                    desc: "Secure citizen data management and service delivery analytics.",
                                    stat: "Nation-scale deployment",
                                    color: "indigo"
                                }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1} className="group p-8 rounded-2xl bg-card border border-border hover:border-blue-500/30 transition-all duration-300">
                                    <div className={`w-12 h-12 rounded-full bg-${item.color}-500/10 flex items-center justify-center mb-6 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground mb-6 min-h-[3rem]">{item.desc}</p>
                                    <div className="pt-6 border-t border-white/5">
                                        <p className="text-sm font-semibold text-blue-400">{item.stat}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ────────── CTA SECTION ────────── */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5" />
                    <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to unlock your data&apos;s potential?</h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Join the fastest-growing data platform in Africa. Start your free trial today or contact our sales team for a custom demo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="rounded-full px-10 bg-white text-blue-900 hover:bg-blue-50 h-14 text-lg font-semibold">
                                Get Started Now
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-10 border-white/20 text-white hover:bg-white/10 h-14 text-lg">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}


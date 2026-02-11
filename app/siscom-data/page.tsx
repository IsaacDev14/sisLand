"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function SiscomDataPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="max-w-2xl">
                            <span className="text-pink-500 font-medium mb-4 block tracking-wide uppercase text-sm">Siscom Data</span>
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
                                Data & BI Platform
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Transform raw data into actionable business intelligence.
                                From data entry to high-performance clustering and analytics.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
                                >
                                    Start Analyzing
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Visual: Data Image */}
                        <FadeIn className="hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                                <img
                                    src="/blog_analytics.png"
                                    alt="Data Analytics Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <div className="w-full h-px bg-border/50 my-16 max-w-7xl mx-auto" />

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10 text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Data Products</h2>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                            Purpose-built solutions for every data challenge, from warehousing to real-time monitoring.
                        </p>
                    </FadeIn>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Siscom Data Bank */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-pink-500/30 transition-colors flex flex-col">
                            <h3 className="text-xl font-bold text-foreground mb-2">Siscom Data Bank</h3>
                            <p className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wide">Sovereign, compliant data warehousing</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                A secure, sovereign-compliant data warehouse designed for regulated industries.
                                Centralizes enterprise data while meeting data residency, governance, and regulatory requirements.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Sovereign and compliant by design</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> High-performance analytics on unified data</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Secure foundation for AI & insights</li>
                            </ul>
                        </FadeIn>

                        {/* 2. WorkerBee */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-pink-500/30 transition-colors flex flex-col">
                            <h3 className="text-xl font-bold text-foreground mb-2">WorkerBee</h3>
                            <p className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wide">Automated reconciliation & monitoring</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                Real-time reconciliation and transaction monitoring with zero downtime.
                                Detect anomalies, breaks, and risks instantly across systems.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Automated reconciliation across systems</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Continuous, real-time monitoring</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Designed for high-volume finance ops</li>
                            </ul>
                        </FadeIn>

                        {/* 3. Kaa Rada */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-pink-500/30 transition-colors flex flex-col">
                            <h3 className="text-xl font-bold text-foreground mb-2">Kaa Rada</h3>
                            <p className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wide">Cloud CCTV backup & video storage</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                Secure cloud backup for CCTV and video surveillance, ensuring footage is always available when you need it.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Reliable cloud storage for video streams</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Scalable, cost-efficient backup</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Improved incident investigation</li>
                            </ul>
                        </FadeIn>

                        {/* 4. Siscom Fishnet */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-pink-500/30 transition-colors flex flex-col">
                            <h3 className="text-xl font-bold text-foreground mb-2">Siscom Fishnet</h3>
                            <p className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wide">Unified NOC monitoring</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                A Network Operations Center (NOC) monitoring platform that delivers full visibility across systems, networks, and services.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Real-time monitoring and alerting</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Centralized infrastructure view</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Faster incident detection & resolution</li>
                            </ul>
                        </FadeIn>

                        {/* 5. Siscom DAAS */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-pink-500/30 transition-colors flex flex-col md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-secondary/30">
                            <div className="flex flex-col md:flex-row gap-8 h-full">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-foreground mb-2">Siscom DAAS</h3>
                                    <p className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wide">Data Analytics as a Service</p>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Unlock the full power of data analytics, data engineering, business intelligence, and agentic AI — without building or maintaining large, expensive in-house teams.
                                    </p>
                                    <p className="text-foreground font-medium">
                                        Siscom DAAS delivers expert-led analytics and AI capabilities on demand, so you can move faster, reduce cost, and focus on outcomes.
                                    </p>
                                </div>
                                <div className="flex-1 flex items-center justify-center bg-background/50 rounded-xl p-6 border border-border/50">
                                    <div className="text-center space-y-4">
                                        <div className="text-4xl font-bold text-foreground">On-Demand</div>
                                        <div className="text-sm text-muted-foreground uppercase tracking-wider">Expertise</div>
                                        <div className="w-12 h-1 bg-pink-500 mx-auto rounded-full" />
                                        <div className="text-sm text-muted-foreground">Analytics • Engineering • BI • AI</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </FadeInStagger>
                </section>

                <section className="bg-muted/30 py-24 mt-24 border-t border-border relative">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <FadeIn>
                            <h2 className="text-2xl font-bold text-foreground mb-12">Industry Use Cases</h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="border-l-2 border-pink-500 pl-6 space-y-2 group hover:pl-8 transition-all duration-300">
                                    <h4 className="text-foreground font-semibold group-hover:text-pink-500 transition-colors">Healthcare</h4>
                                    <p className="text-sm text-muted-foreground">Patient outcome analysis and resource optimization.</p>
                                </div>
                                <div className="border-l-2 border-pink-500 pl-6 space-y-2 group hover:pl-8 transition-all duration-300">
                                    <h4 className="text-foreground font-semibold group-hover:text-pink-500 transition-colors">Manufacturing</h4>
                                    <p className="text-sm text-muted-foreground">Predictive maintenance and supply chain visibility.</p>
                                </div>
                                <div className="border-l-2 border-pink-500 pl-6 space-y-2 group hover:pl-8 transition-all duration-300">
                                    <h4 className="text-foreground font-semibold group-hover:text-pink-500 transition-colors">Retail</h4>
                                    <p className="text-sm text-muted-foreground">Customer behavior tracking and inventory forecasting.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import MagnifyingMesh from "@/components/MagnifyingMesh";
import { ArrowRight } from "lucide-react";

export default function SiscomDataPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <MagnifyingMesh />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <span className="inline-block bg-pink-500/10 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-pink-500/20">
                                SISCOM DATA
                            </span>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                                From Data Warehousing to AI — <span className="text-pink-600">One Intelligent Stack</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                                Siscom Data empowers financial services and modern enterprises to transform raw data into real-time insights, AI-powered decisions, and measurable business outcomes — all on a secure, scalable, cloud-first platform.
                            </p>
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
                        <FadeIn className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-pink-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-600 transition-colors">Siscom Data Bank</h3>
                            <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Sovereign Data Warehousing</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                A secure, sovereign-compliant data warehouse designed for regulated industries.
                                Centralizes enterprise data while meeting data residency, governance, and regulatory requirements.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Sovereign and compliant by design</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> High-performance analytics on unified data</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Secure foundation for AI & insights</li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all"
                                >
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* 2. WorkerBee */}
                        <FadeIn className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-pink-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-600 transition-colors">WorkerBee</h3>
                            <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Automated Reconciliation</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                Real-time reconciliation and transaction monitoring with zero downtime.
                                Detect anomalies, breaks, and risks instantly across systems.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Automated reconciliation across systems</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Continuous, real-time monitoring</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Designed for high-volume finance ops</li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all"
                                >
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* 3. Kaa Rada */}
                        <FadeIn className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-pink-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-600 transition-colors">Kaa Rada</h3>
                            <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Cloud CCTV Backup</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                Secure cloud backup for CCTV and video surveillance, ensuring footage is always available when you need it.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Reliable cloud storage for video streams</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Scalable, cost-efficient backup</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Improved incident investigation</li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all"
                                >
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* 4. Siscom Fishnet */}
                        <FadeIn className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-pink-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-600 transition-colors">Siscom Fishnet</h3>
                            <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Unified NOC Monitoring</p>
                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                A Network Operations Center (NOC) monitoring platform that delivers full visibility across systems, networks, and services.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Real-time monitoring and alerting</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Centralized infrastructure view</li>
                                <li className="flex gap-2"><span className="text-pink-500">●</span> Faster incident detection & resolution</li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all"
                                >
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* 5. Siscom DAAS */}
                        <FadeIn className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-pink-500/40 transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-secondary/30 hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row gap-8 h-full">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-600 transition-colors">Siscom DAAS</h3>
                                    <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Data Analytics as a Service</p>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Unlock the full power of data analytics, data engineering, business intelligence, and agentic AI — without building or maintaining large, expensive in-house teams.
                                    </p>
                                    <p className="text-foreground font-medium">
                                        Siscom DAAS delivers expert-led analytics and AI capabilities on demand, so you can move faster, reduce cost, and focus on outcomes.
                                    </p>
                                    <div className="mt-8">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all"
                                        >
                                            Inquire About DAAS <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center bg-background/50 rounded-xl p-6 border border-border/50 group-hover:border-pink-500/30 transition-colors">
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
                        <FadeIn className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Industries & Use Cases</h2>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                                Siscom Data powers intelligent outcomes across every sector of the economy.
                            </p>
                        </FadeIn>

                        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Financial Services */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-foreground mb-4">Financial Services</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Hyperpersonalization and lead management
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Fraud detection and prevention
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Regulatory reporting and compliance
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Treasury and capital optimization
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Capital Markets */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-foreground mb-4">Capital Markets & Investment Banks</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Data-driven investment strategies
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Advanced analytics for portfolio insights
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Risk modeling and predictive analysis
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Security Companies */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-foreground mb-4">Security Companies</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Cloud CCTV backup and monitoring
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Incident analysis and compliance reporting
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Media Companies */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-foreground mb-4">Media Companies</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Audience analytics and personalization
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Content performance insights
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Manufacturing */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-foreground mb-4">Manufacturing</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Operational analytics
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Predictive maintenance
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Production efficiency insights
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Aviation */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-foreground mb-4">Aviation</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Customer lifecycle analytics
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Operational intelligence and monitoring
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground text-sm">
                                        <span className="text-pink-500 mt-0.5">●</span> Risk and compliance reporting
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Wide Cards for Complex Use Cases */}

                            {/* MSMEs */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                                <h3 className="text-xl font-bold text-foreground mb-2">MSMEs</h3>
                                <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Enterprise-grade intelligence without enterprise overhead</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Empower MSMEs with unified data, analytics, and AI to make smarter decisions, optimize operations, and scale faster — without building large data teams.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Healthcare */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                                <h3 className="text-xl font-bold text-foreground mb-2">Healthcare</h3>
                                <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Unified data for better care and operational efficiency</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Aggregate siloed clinical, operational, and financial data into a single trusted view. Enable analytics, AI-driven insights, and compliance-ready reporting to improve patient outcomes and efficiency.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Agriculture */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                                <h3 className="text-xl font-bold text-foreground mb-2">Agriculture</h3>
                                <p className="text-xs font-bold text-pink-600 mb-4 uppercase tracking-wider">Unified and market-driven agricultural intelligence</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Unify operational, sensor, weather, and supply chain data to enable predictive insights, yield optimization, and resource efficiency — with market intelligence to track pricing, demand, and trends across regions.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                    >
                                        Discuss Solution <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Infrastructure - Spanning full width on mobile/tablet, single column on large */}
                            <FadeIn className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-pink-500/30 transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-3">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">Infrastructure, Data Centers & Cloud</h3>
                                        <p className="text-sm font-bold text-pink-600 mb-4 uppercase tracking-wider">Always-on operational intelligence</p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Gain real-time visibility across infrastructure, data centers, networks, and cloud environments with centralized monitoring and analytics. Detect issues faster, reduce downtime, and optimize performance using Siscom Fishnet's NOC intelligence.
                                        </p>
                                        <div className="mt-6">
                                            <Link
                                                href="/contact"
                                                className="text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors flex items-center gap-1 group/btn"
                                            >
                                                Optimize Your Infrastructure <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex items-center justify-center p-6 bg-muted/50 rounded-xl border border-border/50">
                                        <div className="text-center space-y-2">
                                            <div className="text-3xl font-bold text-foreground">100%</div>
                                            <div className="text-sm text-muted-foreground">Visibility Across Stack</div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </FadeInStagger>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

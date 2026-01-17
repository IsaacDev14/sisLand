"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function SiscomDataPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-900">
            <Navbar />

            <main>
                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                                    Unified Data Platform
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                    Turn raw logs into <br />
                                    <span className="text-slate-900 decoration-pink-500/30 underline decoration-4 underline-offset-4">business intelligence.</span>
                                </h1>

                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                                    Ingest, process, and analyze petabytes of data with our fully managed, sovereign data stack. Built for speed, security, and compliance.
                                </p>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/10 active:scale-95"
                                    >
                                        Start Building
                                    </Link>
                                    <Link
                                        href="#platform"
                                        className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all hover:border-slate-300 active:scale-95"
                                    >
                                        View Architecture
                                    </Link>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-slate-200 rounded-3xl -rotate-2 transform translate-y-4 translate-x-4"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white aspect-square lg:aspect-[4/3] flex items-center justify-center p-0">
                                    <img
                                        src="/images/siscom_data_pipeline.png"
                                        alt="Siscom Data Pipeline"
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== END-TO-END PIPELINE ===== */}
                <section id="platform" className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                                The Intelligent Data Journey
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                A complete ecosystem to manage your data lifecycle. From ingestion at the edge to actionable insights in the boardroom.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-12 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200 to-transparent w-full animate-pulse" />
                            </div>

                            {/* Step 1: Ingest */}
                            <ScrollReveal delay={0.1} className="relative text-center group">
                                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <img src="/images/siscom_data_ingest.png" alt="Ingest" className="w-16 h-16 object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Ingest</h3>
                                <p className="text-slate-600 leading-relaxed px-4">
                                    Capture real-time streams from IoT devices, servers, and applications with <strong>Kaa Rada</strong>.
                                </p>
                            </ScrollReveal>

                            {/* Step 2: Store & Process */}
                            <ScrollReveal delay={0.2} className="relative text-center group">
                                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <img src="/images/siscom_storage_node.png" alt="Store" className="w-16 h-16 object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Store & Process</h3>
                                <p className="text-slate-600 leading-relaxed px-4">
                                    Securely store in <strong>Data Bank</strong> and transform with <strong>WorkerBee</strong> distributed processing.
                                </p>
                            </ScrollReveal>

                            {/* Step 3: Analyze */}
                            <ScrollReveal delay={0.3} className="relative text-center group">
                                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <img src="/images/siscom_data_analytics.png" alt="Analyze" className="w-16 h-16 object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Analyze & Act</h3>
                                <p className="text-slate-600 leading-relaxed px-4">
                                    Visualize trends and predictive insights with <strong>Fishnet</strong> analytics dashboard.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== PRODUCTS DEEP DIVE ===== */}
                <section className="py-24 bg-slate-50 border-y border-slate-200">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Platform Modules</h2>
                            <p className="text-slate-600">Composable building blocks for your modern data stack.</p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Data Bank */}
                            <ScrollReveal delay={0.1} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Storage</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">Data Bank</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Sovereign, S3-compatible object storage. Designed for 99.999999999% durability. Store logs, media, and backups within national borders.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {["Immutable Buckets", "Lifecycle Policies", "Server-Side Encryption"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* WorkerBee */}
                            <ScrollReveal delay={0.2} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">ETL / Compute</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">WorkerBee</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Serverless data processing. Run Python, Node.js, or Go scripts in response to events. Clean, transform, and load data without managing servers.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {["Event-Driven Triggers", "Auto-Scaling", "Durable Execution Logs"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Kaa Rada */}
                            <ScrollReveal delay={0.3} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Streaming</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Kaa Rada</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    High-throughput message broker. Ingest millions of events per second with sub-millisecond latency. Compatible with Kafka protocols.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {["Pub/Sub Messaging", "Stream Replay", "Schema Registry"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Fishnet */}
                            <ScrollReveal delay={0.4} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Analytics</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">Fishnet</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Interactive BI dashboards. Connect your data sources and visualize metrics in real-time. Share reports with secure role-based access.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {["Drag-and-Drop Builder", "SQL Editor", "Embedded Analytics"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Unlock the value of your data.
                            </h2>
                            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                                Join forward-thinking enterprises building their future on Siscom Data.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-pink-500 transition-all hover:shadow-xl hover:shadow-pink-500/25 active:scale-95"
                                >
                                    Schedule Demo
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="bg-transparent text-white border border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-all active:scale-95"
                                >
                                    View Docs
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

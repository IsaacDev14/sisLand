"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

export default function SiscomDataPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-900">
            <Navbar />

            <main>
                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                Intelligent Data Platform
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                                From Data Warehousing to AI — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">One Intelligent Stack</span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                Siscom Data empowers financial services and modern enterprises to transform raw data into real-time insights, AI-powered decisions, and measurable business outcomes — all on a secure, scalable, cloud-first platform.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95"
                                >
                                    Book a Demo
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all hover:border-slate-300 active:scale-95"
                                >
                                    Review Pricing
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Background Graphic */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-slate-50 via-white to-white z-0 pointer-events-none opacity-50" />
                    <div className="absolute top-1/3 right-0 translate-x-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
                </section>

                {/* ===== THE JOURNEY ===== */}
                <section className="py-24 bg-slate-50 border-y border-slate-200">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Intelligent Data Journey</h2>
                            <p className="text-lg text-slate-600">From raw data to actionable intelligence—our unified platform transforms your data ecosystem.</p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-pink-200 z-0" />

                            {/* Step 1 */}
                            <ScrollReveal delay={0.1} className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-blue-100">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Data Ingestion</h3>
                                <p className="text-slate-600 text-sm mb-4">Seamlessly collect and centralize data from multiple sources in real-time.</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["Databases", "Cloud Services", "APIs"].map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-50 text-slate-600 rounded border border-slate-100">{tag}</span>
                                    ))}
                                </div>
                            </ScrollReveal>

                            {/* Step 2 */}
                            <ScrollReveal delay={0.2} className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                                <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm border border-indigo-100">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Analytics & Processing</h3>
                                <p className="text-slate-600 text-sm mb-4">Transform raw data into structured insights with advanced analytics.</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["Real-time", "Warehousing", "Advanced Analytics"].map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-50 text-slate-600 rounded border border-slate-100">{tag}</span>
                                    ))}
                                </div>
                            </ScrollReveal>

                            {/* Step 3 */}
                            <ScrollReveal delay={0.3} className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                                <div className="w-16 h-16 mx-auto bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 shadow-sm border border-pink-100">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Intelligence & Insights</h3>
                                <p className="text-slate-600 text-sm mb-4">AI-powered insights that drive strategic decisions and outcomes.</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["AI/ML Models", "Predictive", "BI"].map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-50 text-slate-600 rounded border border-slate-100">{tag}</span>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== PRODUCTS GRID ===== */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Data Products</h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Siscom Data Bank */}
                            <ScrollReveal className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900">Siscom Data Bank</h3>
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">Sovereign Warehousing</span>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Maintain absolute control over your data within local borders. Siscom Data Bank offers high-performance warehousing that ensures regulatory compliance without compromising on speed or scalability.
                                </p>
                                <p className="text-sm font-semibold text-slate-900 mb-2">Best for:</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["Banks", "Insurers", "Public-Sector"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600">{tag}</span>
                                    ))}
                                </div>
                                <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </ScrollReveal>

                            {/* WorkerBee */}
                            <ScrollReveal delay={0.1} className="group p-8 rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900">WorkerBee</h3>
                                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wide">Automated Reconciliation</span>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Deliver real-time reconciliation and transaction monitoring with zero downtime. Detect anomalies, breaks, and risks instantly across high-volume financial operations.
                                </p>
                                <Link href="/contact" className="text-amber-600 font-semibold hover:text-amber-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </ScrollReveal>

                            {/* Kaa Rada */}
                            <ScrollReveal delay={0.2} className="group p-8 rounded-2xl border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900">Kaa Rada</h3>
                                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wide">Intelligent Cloud CCTV</span>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Secure cloud backup for CCTV and video surveillance. Ensure your footage is always encrypted, available, and searchable for incident investigation.
                                </p>
                                <Link href="/contact" className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </ScrollReveal>

                            {/* Siscom Fishnet */}
                            <ScrollReveal delay={0.3} className="group p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900">Siscom Fishnet</h3>
                                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide">Unified NOC MOnitoring</span>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    A Network Operations Center (NOC) platform that delivers full visibility. Monitor systems, networks, and services in real-time to prevent downtime.
                                </p>
                                <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 border-t border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_50%)]" />
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Ready to scale your <span className="text-blue-400">Data Platform</span>?
                            </h2>
                            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                                Let&apos;s discuss how Siscom Data can help you build a unified, AI-ready data platform that drives real business outcomes.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                                >
                                    Book a Demo
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="bg-transparent text-white border border-blue-400/30 px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all active:scale-95"
                                >
                                    Review Pricing
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

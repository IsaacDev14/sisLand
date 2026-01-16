"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function CloudAppsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-900">
            <Navbar />

            <main>
                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="max-w-3xl lg:w-1/2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Siscom Cloud Applications
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                                    Intelligent SaaS for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Growing Businesses</span>
                                </h1>

                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                    Purpose-built cloud applications designed for SMEs ready to gain a competitive edge. Streamline operations and drive smarter outcomes.
                                </p>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95"
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        href="#pricing"
                                        className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all hover:border-slate-300 active:scale-95"
                                    >
                                        View Bundle Pricing
                                    </Link>
                                </div>
                            </div>

                            {/* Visual: App Dashboard Collage */}
                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-gradient-to-tl from-green-200 to-teal-200 rounded-full blur-[100px] opacity-40 animate-pulse" />
                                <div className="relative grid grid-cols-2 gap-4 rotate-2 hover:rotate-0 transition-all duration-500">
                                    {/* Card 1 */}
                                    <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 transform translate-y-8">
                                        <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 mb-3 flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div className="h-2 w-16 bg-slate-200 rounded mb-2" />
                                        <div className="h-12 bg-slate-50 rounded mb-2" />
                                        <div className="flex gap-2">
                                            <div className="h-8 w-1/2 bg-green-50 rounded" />
                                            <div className="h-8 w-1/2 bg-slate-50 rounded" />
                                        </div>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 mb-3 flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-slate-100 rounded" />
                                            <div className="h-2 w-3/4 bg-slate-100 rounded" />
                                            <div className="h-2 w-1/2 bg-slate-100 rounded" />
                                        </div>
                                        <div className="mt-4 flex items-end justify-between">
                                            <div className="h-10 w-2 bg-blue-400 rounded-t" />
                                            <div className="h-14 w-2 bg-blue-500 rounded-t" />
                                            <div className="h-8 w-2 bg-blue-300 rounded-t" />
                                            <div className="h-12 w-2 bg-blue-600 rounded-t" />
                                        </div>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="col-span-2 bg-white p-4 rounded-xl shadow-lg border border-slate-100 transform -translate-y-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            </div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded" />
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-slate-50 rounded h-16 border border-slate-100" />
                                            <div className="flex-1 bg-slate-50 rounded h-16 border border-slate-100" />
                                            <div className="flex-1 bg-slate-50 rounded h-16 border border-slate-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== APPS GRID ===== */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Application Modules</h2>
                            <p className="text-lg text-slate-600">Unified tools for every department.</p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Siscom CRM",
                                    slogan: "Relationships that Scale",
                                    desc: "CRM tool built for the African context. Track leads, manage pipeline, and grow revenue.",
                                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                    color: "text-blue-600 bg-blue-50 border-blue-100"
                                },
                                {
                                    name: "Siscom Finance",
                                    slogan: "Financial Intelligence",
                                    desc: "Smart accounting software. Real-time visibility into cash flow, expenses, and profitability.",
                                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    color: "text-green-600 bg-green-50 border-green-100"
                                },
                                {
                                    name: "Siscom Analytics",
                                    slogan: "Data-Driven Decisions",
                                    desc: "BI platform transforming raw data into actionable insights with real-time dashboards.",
                                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                    color: "text-purple-600 bg-purple-50 border-purple-100"
                                },
                                {
                                    name: "Siscom Commerce",
                                    slogan: "Sell Anywhere",
                                    desc: "E-commerce platform bridging physical and digital storefronts with payments and logistics.",
                                    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                                    color: "text-amber-600 bg-amber-50 border-amber-100"
                                },
                                {
                                    name: "Siscom Docs",
                                    slogan: "Collaborate. Create.",
                                    desc: "Document management keeping teams aligned. Edit, share, and track versions securely.",
                                    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                    color: "text-red-600 bg-red-50 border-red-100"
                                }
                            ].map((app, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${app.color}`}>
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.icon} /></svg>
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-slate-900">{app.name}</h3>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">{app.slogan}</p>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{app.desc}</p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-pink-600 transition-colors">
                                        Explore Features <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== INTEGRATIONS ===== */}
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <ScrollReveal>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Seamless Integrations</h2>
                            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Connect with the tools and services you already use. Our applications integrate with leading African and global platforms.</p>

                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60">
                                {["M-PESA", "Stripe", "Slack", "Google Workspace", "Microsoft 365", "Zoom"].map(logo => (
                                    <span key={logo} className="text-xl font-bold text-slate-400">{logo}</span>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-gradient-to-br from-green-900 to-teal-900 border-t border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.2),transparent_50%)]" />
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Start your <span className="text-green-400">Digital Transformation</span>
                            </h2>
                            <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
                                Join thousands of SMEs powering their operations with Siscom Cloud Apps.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-500 transition-all hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
                                >
                                    Get Started
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

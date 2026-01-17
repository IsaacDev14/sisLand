"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function CloudAppsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-900">
            <Navbar />

            <main>
                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                                SaaS Ecosystem
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Integrated critical systems <br />
                                <span className="text-slate-900 decoration-pink-500/30 underline decoration-4 underline-offset-4">for modern business.</span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                                A unified suite of cloud applications designed for African enterprises. CRM, Finance, and Analytics working in perfect harmony.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/10 active:scale-95"
                                >
                                    Schedule Demo
                                </Link>
                                <Link
                                    href="#modules"
                                    className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all hover:border-slate-300 active:scale-95"
                                >
                                    View Modules
                                </Link>
                            </div>
                        </div>

                        {/* Dashboard Collage */}
                        <div className="relative max-w-6xl mx-auto mt-12 perspective-1000">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform hover:-translate-y-2 transition-transform duration-500">
                                <img src="/images/siscom_crm_dashboard.png" alt="CRM Dashboard" className="w-full h-auto" />
                            </div>
                            <div className="absolute -top-12 -left-12 w-64 md:w-80 rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white transform -rotate-6 z-0 hidden md:block opacity-90">
                                <img src="/images/siscom_finance_dashboard.png" alt="Finance Dashboard" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-12 -right-12 w-64 md:w-80 rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white transform rotate-6 z-20 hidden md:block">
                                <img src="/images/siscom_analytics_dashboard.png" alt="Analytics Dashboard" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== APPLICATION MODULES ===== */}
                <section id="modules" className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">

                        {/* CRM Module */}
                        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <img src="/images/siscom_crm_dashboard.png" alt="Siscom CRM" className="rounded-lg shadow-sm w-full h-auto" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="inline-block px-3 py-1 rounded bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-wider mb-4">Sales & Relationships</div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Siscom CRM</h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Manage customer relationships with a localized CRM built for African markets. Track leads via WhatsApp, email, and SMS integration.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Omnichannel Inbox (WhatsApp, SMS, Email)",
                                        "Deal Pipeline Management",
                                        "Automated Follow-ups",
                                        "Local Currency Quoting"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Finance Module */}
                        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                            <div className="lg:w-1/2">
                                <div className="inline-block px-3 py-1 rounded bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-wider mb-4">Finance & Operations</div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Siscom Finance</h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Simplify accounting and payroll. Compliant with local tax regulations and integrated with mobile money providers.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Mobile Money Reconciliation (M-Pesa, Airtel)",
                                        "Automated Invoicing & Receipts",
                                        "Tax Compliance Reports",
                                        "Multi-Currency Support"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <img src="/images/siscom_finance_dashboard.png" alt="Siscom Finance" className="rounded-lg shadow-sm w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Analytics Module */}
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <img src="/images/siscom_analytics_dashboard.png" alt="Siscom Analytics" className="rounded-lg shadow-sm w-full h-auto" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">Business Intelligence</div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Siscom Analytics</h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Unified reporting across your entire stack. Visualize sales, expenses, and operational metrics in a single view.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Cross-Module Reporting",
                                        "Real-time Dashboards",
                                        "AI-Powered Insights",
                                        "Export to PDF/Excel"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                One suite to run your business.
                            </h2>
                            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                                Experience the power of integrated cloud applications.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-pink-500 transition-all hover:shadow-xl hover:shadow-pink-500/25 active:scale-95"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="bg-transparent text-white border border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-all active:scale-95"
                                >
                                    Contact Sales
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

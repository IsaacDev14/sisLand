"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function SiscomNodesPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-900">
            <Navbar />

            <main>
                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                                Siscom Nodes
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                                Purpose-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">Cloud & AI Infrastructure</span> for African Business
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                Sovereign. Compliant. Flexible Billing. Local Currency. Trusted by leading AI labs, platforms, and enterprises.
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
                                    View Pricing
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Background Graphic */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-50 via-white to-white z-0 pointer-events-none opacity-50" />
                    <div className="absolute top-1/4 right-0 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-pink-100/40 to-indigo-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
                </section>

                {/* ===== VALUE PROPOSITION ===== */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16 max-w-3xl">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                                Maximize your potential with Siscom.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Get to market faster by focusing on what you do best—serving customers and maximizing ROI. With Siscom Nodes, shift heavy infrastructure investments from CAPEX to OPEX, reduce complexity, and scale on demand.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Dedicated Nodes */}
                            <ScrollReveal delay={0.1} className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-pink-900/5 hover:border-pink-200 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-pink-500 shadow-sm group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Nodes</h3>
                                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-4">Full Control. Maximum Performance.</p>
                                <ul className="space-y-3 text-slate-600">
                                    {[
                                        "Full root access (virtual or bare metal)",
                                        "N+1 redundancy for high availability",
                                        "Hosted in Tier III data centers",
                                        "Ideal for regulated workloads"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Virtual Nodes */}
                            <ScrollReveal delay={0.2} className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-pink-900/5 hover:border-pink-200 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-pink-500 shadow-sm group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Virtual Nodes</h3>
                                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-4">Flexible Compute. Instantly Deployed.</p>
                                <p className="text-sm text-slate-600 mb-4">Deploy MicroNode, MegaNode, or TeraNode instances in minutes. Scale seamlessly.</p>
                                <ul className="space-y-3 text-slate-600">
                                    {[
                                        "99.99% uptime SLA",
                                        "Local technical support",
                                        "Local billing & currency",
                                        "3-month free trial"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Storage Nodes */}
                            <ScrollReveal delay={0.3} className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-pink-900/5 hover:border-pink-200 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-pink-500 shadow-sm group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Storage Nodes</h3>
                                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-4">High-Speed. Local Data Storage.</p>
                                <p className="text-sm text-slate-600 mb-4">High-throughput block storage and S3-compatible object storage for heavy workloads.</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Media Archives", "AI Datasets", "Backups"].map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600">{tag}</span>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== INVENTORY TABLE ===== */}
                <section className="py-24 bg-slate-50 border-y border-slate-200">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <ScrollReveal>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Available Compute Capacity</h2>
                                <p className="text-slate-600">Real-time inventory status for Region: <span className="font-semibold text-slate-900">Nairobi (NBO-1)</span></p>
                            </ScrollReveal>
                            <div className="flex gap-4 text-sm font-medium text-slate-500">
                                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Immediate</div>
                                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Limited</div>
                                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-400"></span> Roadmap</div>
                            </div>
                        </div>

                        <ScrollReveal delay={0.2} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                                        <th className="px-6 py-4 font-semibold">Instance Type</th>
                                        <th className="px-6 py-4 font-semibold">Specifications</th>
                                        <th className="px-6 py-4 font-semibold">Primary Use</th>
                                        <th className="px-6 py-4 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { name: "NVIDIA GB200 NVL72", specs: "72x B200 GPUs • 1.4 ExaFLOPS", use: "Training, Inference", status: "High Demand", color: "text-amber-600 bg-amber-50" },
                                        { name: "NVIDIA HGX H100", specs: "8x H100 GPUs • 32 PetaFLOPS", use: "LLM Training", status: "Limited", color: "text-amber-600 bg-amber-50" },
                                        { name: "NVIDIA HGX A100", specs: "8x A100 GPUs • 5 PetaFLOPS", use: "Fine-tuning, Inference", status: "Immediate", color: "text-green-600 bg-green-50" },
                                        { name: "NVIDIA L40S", specs: "Ada Lovelace • 48GB GDDR6", use: "Graphics, Omniverse", status: "Immediate", color: "text-green-600 bg-green-50" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">{row.name}</td>
                                            <td className="px-6 py-4 text-slate-600 text-sm">{row.specs}</td>
                                            <td className="px-6 py-4 text-slate-600 text-sm">{row.use}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.color}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-slate-50 text-slate-400 italic">
                                        <td className="px-6 py-4">NVIDIA RTX 6000 Ada</td>
                                        <td className="px-6 py-4 text-xs">Coming Q3</td>
                                        <td className="px-6 py-4 text-xs">Workstation</td>
                                        <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">Roadmap</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.15),transparent_50%)]" />
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Get Early Access to <span className="text-pink-500">Siscom GPU Infrastructure</span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                                Build faster, train smarter, and deploy AI workloads with confidence.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-500 transition-all hover:shadow-lg hover:shadow-pink-500/25 active:scale-95"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="bg-transparent text-white border border-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all active:scale-95"
                                >
                                    View Pricing
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

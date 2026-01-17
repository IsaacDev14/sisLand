"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function SiscomNodesPage() {
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
                                    Infrastructure Level 1
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                    Purpose-Built <br />
                                    <span className="text-slate-900 decoration-pink-500/30 underline decoration-4 underline-offset-4">AI Infrastructure</span>
                                </h1>

                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                                    High-performance compute, sovereign storage, and low-latency networking. Engineered for African enterprise workloads.
                                </p>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/10 active:scale-95"
                                    >
                                        Deploy Nodes
                                    </Link>
                                    <Link
                                        href="#pricing"
                                        className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all hover:border-slate-300 active:scale-95"
                                    >
                                        View Specs
                                    </Link>
                                </div>

                                <div className="mt-12 flex items-center gap-8 text-sm font-semibold text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        99.99% SLA
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        Tier III Security
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-slate-200 rounded-3xl rotate-3 transform translate-y-4 translate-x-4"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white aspect-square lg:aspect-[4/3] flex items-center justify-center p-8">
                                    <img
                                        src="/images/siscom_nodes_hero_rack.png"
                                        alt="Siscom Server Rack"
                                        className="object-contain w-full h-full hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PRODUCTS GRID ===== */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16 max-w-3xl">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Infrastructure for every workload.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                From bare metal for maximum performance to flexible virtual instances for scaling apps.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Dedicated Nodes */}
                            <ScrollReveal delay={0.1} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-pink-500/20 transition-all duration-300">
                                <div className="h-64 bg-slate-50 p-8 flex items-center justify-center border-b border-slate-100">
                                    <img
                                        src="/images/siscom_dedicated_node.png"
                                        alt="Dedicated Node"
                                        className="w-full h-full object-contain drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Nodes</h3>
                                    <p className="text-sm font-bold text-pink-600 uppercase tracking-wider mb-4">Bare Metal Performance</p>
                                    <p className="text-slate-600 mb-6 flex-1">
                                        Full root access to single-tenant hardware. No "noisy neighbors", just raw power for your most demanding databases and AI models.
                                    </p>
                                    <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Intel Xeon / AMD EPYC
                                        </li>
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Up to 128 Cores
                                        </li>
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> 100Gbps Networking
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Virtual Nodes */}
                            <ScrollReveal delay={0.2} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-pink-500/20 transition-all duration-300">
                                <div className="h-64 bg-slate-50 p-8 flex items-center justify-center border-b border-slate-100">
                                    <img
                                        src="/images/siscom_virtual_node.png"
                                        alt="Virtual Node"
                                        className="w-full h-full object-contain drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Virtual Nodes</h3>
                                    <p className="text-sm font-bold text-pink-600 uppercase tracking-wider mb-4">Elastic Compute</p>
                                    <p className="text-slate-600 mb-6 flex-1">
                                        Deploy instances in seconds. Scale up or down based on traffic. Ideal for web servers, microservices, and development environments.
                                    </p>
                                    <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Shared or Dedicated vCPU
                                        </li>
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Instant Provisioning
                                        </li>
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Hourly Billing
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Storage Nodes */}
                            <ScrollReveal delay={0.3} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-pink-500/20 transition-all duration-300">
                                <div className="h-64 bg-slate-50 p-8 flex items-center justify-center border-b border-slate-100">
                                    <img
                                        src="/images/siscom_storage_node.png"
                                        alt="Storage Node"
                                        className="w-full h-full object-contain drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Storage Nodes</h3>
                                    <p className="text-sm font-bold text-pink-600 uppercase tracking-wider mb-4">S3-Compatible Object Storage</p>
                                    <p className="text-slate-600 mb-6 flex-1">
                                        Massive scalability for your data. Archive backups, host media assets, or build data lakes with our high-throughput storage clusters.
                                    </p>
                                    <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> NVMe Caching
                                        </li>
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Triple Replication
                                        </li>
                                        <li className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Zero Egress Fees
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== SPECS TABLE ===== */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal>
                            <div className="flex items-center justify-between mb-12 border-b border-slate-800 pb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Technical Specifications</h2>
                                    <p className="text-slate-400">Detailed hardware configurations for our Nairobi (NBO-1) region.</p>
                                </div>
                                <div className="hidden md:block text-right">
                                    <div className="text-sm text-slate-400">Last Updated</div>
                                    <div className="font-mono text-pink-500">JAN 2026</div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 uppercase tracking-wider font-semibold">
                                            <th className="px-6 py-4">Node Type</th>
                                            <th className="px-6 py-4">Processor (CPU)</th>
                                            <th className="px-6 py-4">Memory (RAM)</th>
                                            <th className="px-6 py-4">Storage</th>
                                            <th className="px-6 py-4">Networking</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800 text-slate-300 font-mono">
                                        <tr className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-white">General Purpose (G3)</td>
                                            <td className="px-6 py-4">Intel Xeon Platinum 8480+</td>
                                            <td className="px-6 py-4">Up to 512GB DDR5</td>
                                            <td className="px-6 py-4">NVMe SSD</td>
                                            <td className="px-6 py-4">25 Gbps</td>
                                        </tr>
                                        <tr className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-white">Compute Optimized (C3)</td>
                                            <td className="px-6 py-4">AMD EPYC 9654 (Genoa)</td>
                                            <td className="px-6 py-4">Up to 256GB DDR5</td>
                                            <td className="px-6 py-4">NVMe SSD</td>
                                            <td className="px-6 py-4">50 Gbps</td>
                                        </tr>
                                        <tr className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-white text-pink-400">AI Training (A1)</td>
                                            <td className="px-6 py-4">2x AMD EPYC 9754</td>
                                            <td className="px-6 py-4">2TB DDR5 + 640GB HBM3</td>
                                            <td className="px-6 py-4">30TB NVMe Gen5</td>
                                            <td className="px-6 py-4">2x 400 Gbps (Infiniband)</td>
                                        </tr>
                                        <tr className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-white">High Memory (M3)</td>
                                            <td className="px-6 py-4">Intel Xeon Gold 6430</td>
                                            <td className="px-6 py-4">Up to 2TB DDR5</td>
                                            <td className="px-6 py-4">NVMe SSD</td>
                                            <td className="px-6 py-4">25 Gbps</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Ready to deploy?
                            </h2>
                            <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg">
                                Spin up your first instance in minutes. No credit card required for the trial.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/10 active:scale-95"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all hover:border-slate-300 active:scale-95"
                                >
                                    Talk to Sales
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

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function SiscomAIMLPage() {
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
                                    Enterprise Intelligence
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                    Deploy generative AI <br />
                                    <span className="text-slate-900 decoration-pink-500/30 underline decoration-4 underline-offset-4">with confidence.</span>
                                </h1>

                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                                    Train, fine-tune, and serve models on sovereign infrastructure. Enterprise-grade security for your proprietary data.
                                </p>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/10 active:scale-95"
                                    >
                                        Start Training
                                    </Link>
                                    <Link
                                        href="#platform"
                                        className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all hover:border-slate-300 active:scale-95"
                                    >
                                        Explore Models
                                    </Link>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-slate-200 rounded-3xl rotate-3 transform translate-y-4 translate-x-4"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white aspect-square lg:aspect-[4/3] flex items-center justify-center p-8">
                                    <img
                                        src="/images/siscom_ai_training_cluster.png"
                                        alt="AI Training Cluster"
                                        className="object-contain w-full h-full hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== AI LIFECYCLE ===== */}
                <section id="platform" className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                                Complete AI Lifecycle Management
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                From raw data to production inference, Siscom provides the toolchain to build faster.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-12 relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200 to-transparent w-full animate-pulse" />
                            </div>

                            {/* Step 1: Orchestrate */}
                            <ScrollReveal delay={0.1} className="relative text-center group">
                                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <img src="/images/siscom_data_pipeline.png" alt="Orchestrate" className="w-16 h-16 object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Orchestrate</h3>
                                <p className="text-slate-600 leading-relaxed px-4">
                                    Automate data preparation and model training pipelines.
                                </p>
                            </ScrollReveal>

                            {/* Step 2: Evaluate */}
                            <ScrollReveal delay={0.2} className="relative text-center group">
                                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <img src="/images/siscom_ai_inference_engine.png" alt="Evaluate" className="w-16 h-16 object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Evaluate</h3>
                                <p className="text-slate-600 leading-relaxed px-4">
                                    Benchmark model performance against industry standards.
                                </p>
                            </ScrollReveal>

                            {/* Step 3: Optimize */}
                            <ScrollReveal delay={0.3} className="relative text-center group">
                                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <img src="/images/siscom_data_intelligence.png" alt="Optimize" className="w-16 h-16 object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Optimize</h3>
                                <p className="text-slate-600 leading-relaxed px-4">
                                    Deploy high-performance inference at the edge or cloud.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== AGENT CATALOG ===== */}
                <section className="py-24 bg-slate-50 border-y border-slate-200">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Specialized AI Agents</h2>
                            <p className="text-slate-600">Pre-trained models available for immediate deployment.</p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Sentiment Analysis", desc: "Real-time emotion detection for customer support feeds.", icon: "siscom_data_analytics.png" },
                                { title: "Document OCR", desc: "Extract structured data from scanned invoices and IDs.", icon: "siscom_data_ingest.png" },
                                { title: "Fraud Detection", desc: "Anomaly detection for financial transactions.", icon: "siscom_ai_inference_engine.png" },
                                { title: "Recommendation Engine", desc: "Personalized product suggestions for e-commerce.", icon: "siscom_data_intelligence.png" },
                                { title: "Voice Synthesis", desc: "Natural language text-to-speech for local languages.", icon: "siscom_ai_training_cluster.png" },
                                { title: "Predictive Maintenance", desc: "Forecast equipment failures before they happen.", icon: "siscom_data_pipeline.png" }
                            ].map((agent, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 border border-slate-100 group-hover:border-pink-200 transition-colors">
                                        <img src={`/images/${agent.icon}`} alt={agent.title} className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{agent.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{agent.desc}</p>
                                    <Link href="/contact" className="text-sm font-semibold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1">
                                        Deploy Agent <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Accelerate your AI roadmap.
                            </h2>
                            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                                Get access to H100s and specialized local models today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-pink-500 transition-all hover:shadow-xl hover:shadow-pink-500/25 active:scale-95"
                                >
                                    Request Access
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="bg-transparent text-white border border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-all active:scale-95"
                                >
                                    Model Pricing
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

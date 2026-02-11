"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern, DotPattern } from "@/components/GridPattern";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function SiscomAIMLPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                {/* Background Pattern - Dots for AI feeling */}
                <DotPattern
                    width={24}
                    height={24}
                    cx={1}
                    cy={1}
                    cr={1}
                    className="absolute inset-0 h-full w-full fill-neutral-200/40 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:fill-neutral-800/40"
                />

                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="text-pink-500 font-medium mb-4 block tracking-wide uppercase text-sm">Siscom AI</span>
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
                                Autonomous AI Agents
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Deploy intelligent edge agents that automate complex financial and operational workflows.
                                Running securely on sovereign infrastructure.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Agent Grid */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 relative z-10">
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Agent Card 1 - Banker AI */}
                        <FadeIn className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-pink-500 transition-colors shadow-sm hover:shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 h-24 w-24 relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-inner">
                                <img
                                    src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400&h=400"
                                    alt="Banker AI"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-500 transition-colors">Banker AI</h3>
                            <p className="text-muted-foreground mb-6 max-w-sm">Automates the creation of Investor Memos and credit risk analysis for financial institutions.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-medium border border-pink-500/10">Financial Analysis</span>
                                <span className="px-2.5 py-1 rounded-md bg-zinc-500/10 text-muted-foreground text-xs font-medium border border-border">Risk Assessment</span>
                            </div>
                        </FadeIn>

                        {/* Agent Card 2 - Risk AI */}
                        <FadeIn className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-red-500 transition-colors shadow-sm hover:shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 h-24 w-24 relative rounded-2xl overflow-hidden border border-red-500/20 shadow-inner">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400&h=400"
                                    alt="Risk AI"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-500 transition-colors">Risk AI</h3>
                            <p className="text-muted-foreground mb-6 max-w-sm">Real-time monitoring of transaction risks and compliance violations across banking networks.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium border border-red-500/10">Security</span>
                                <span className="px-2.5 py-1 rounded-md bg-zinc-500/10 text-muted-foreground text-xs font-medium border border-border">Compliance</span>
                            </div>
                        </FadeIn>

                        {/* Agent Card 3 - Data Analyst AI */}
                        <FadeIn className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-pink-500 transition-colors shadow-sm hover:shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 h-24 w-24 relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-inner">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=400"
                                    alt="Data Analyst AI"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-500 transition-colors">Data Analyst AI</h3>
                            <p className="text-muted-foreground mb-6 max-w-sm">Processes millions of records in seconds to extract actionable insights and trends.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-medium border border-pink-500/10">Big Data</span>
                                <span className="px-2.5 py-1 rounded-md bg-zinc-500/10 text-muted-foreground text-xs font-medium border border-border">Insights</span>
                            </div>
                        </FadeIn>

                        {/* Agent Card 4 - Trader AI */}
                        <FadeIn className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-red-500 transition-colors shadow-sm hover:shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 h-24 w-24 relative rounded-2xl overflow-hidden border border-red-500/20 shadow-inner">
                                <img
                                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400&h=400"
                                    alt="Trader AI"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-500 transition-colors">Trader AI</h3>
                            <p className="text-muted-foreground mb-6 max-w-sm">Algorithmic trading execution and market strategy optimization.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium border border-red-500/10">FinTech</span>
                                <span className="px-2.5 py-1 rounded-md bg-zinc-500/10 text-muted-foreground text-xs font-medium border border-border">Markets</span>
                            </div>
                        </FadeIn>

                    </FadeInStagger>
                </section>

                {/* Builder Section */}
                <section className="border-t border-border bg-muted/30 py-24 relative overflow-hidden">
                    <GridPattern
                        x={-1}
                        y={-1}
                        className="absolute inset-0 h-full w-full fill-neutral-200/30 stroke-neutral-200/30 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] dark:fill-neutral-800/30 dark:stroke-neutral-800/30"
                        width={30}
                        height={30}
                    />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-foreground mb-6">AI Builder Platform</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                A comprehensive suite for orchestrating, evaluating, and deploying your own custom AI models.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Model Orchestration & Chaining",
                                    "Accuracy Evaluation Suite",
                                    "User & Data Governance",
                                    "Edge Deployment Pipeline"
                                ].map(item => (
                                    <li key={item} className="flex items-center text-foreground/80">
                                        <svg className="w-5 h-5 text-pink-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        {/* Visual: Builder Interface Mockup */}
                        <FadeIn className="bg-card rounded-xl border border-border p-8 min-h-[320px] flex items-center justify-center shadow-lg relative">
                            {/* Abstract Interface Nodes */}
                            <div className="relative w-full max-w-sm aspect-video bg-muted/50 rounded border border-dashed border-border flex items-center justify-center">
                                <div className="absolute top-4 left-4 w-12 h-12 bg-card border border-border rounded shadow flex items-center justify-center">
                                    <span className="text-xl">📥</span>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card border border-pink-500/30 rounded-full shadow-lg flex items-center justify-center z-10">
                                    <span className="text-2xl animate-pulse">⚙️</span>
                                </div>
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-card border border-border rounded shadow flex items-center justify-center">
                                    <span className="text-xl">📤</span>
                                </div>

                                {/* Connecting Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="currentColor" className="text-muted-foreground/20" strokeWidth="2" strokeDasharray="4 4" />
                                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" className="text-muted-foreground/20" strokeWidth="2" strokeDasharray="4 4" />
                                </svg>
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

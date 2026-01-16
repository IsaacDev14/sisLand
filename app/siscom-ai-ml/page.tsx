"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

export default function SiscomAIMLPage() {
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
                                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                                    Autonomous AI Workforce
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                                    Your Key to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">True Autonomy</span>
                                </h1>

                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                    Deploy autonomous AI agents that work alongside your team to automate complex workflows, analyze data in real-time, and drive exponential business growth.
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
                                        Watch Demo
                                    </Link>
                                </div>
                            </div>

                            {/* Visual: Code/Agent Representation */}
                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-[100px] opacity-40 animate-pulse" />
                                <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-6 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="text-xs text-slate-500 font-mono">agent_deploy.py</div>
                                    </div>
                                    <pre className="font-mono text-sm text-blue-300 overflow-x-auto">
                                        <code>
                                            {`from siscom_ai import Agent, Model

# Initialize Autonomous Agent
agent = Agent(
    role="Financial Analyst",
    model=Model.GPT4_TURBO,
    tools=["market_data", "reporting"]
)

# Deploy to Workforce
agent.deploy(
    access_level="read_write",
    monitoring=True
)

print("Agent online. Awaiting tasks...")`}
                                        </code>
                                    </pre>
                                    <div className="mt-4 flex items-center gap-2 text-green-400 text-xs font-mono">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Agent online
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== AI LOGIC CYCLE ===== */}
                <section className="py-24 bg-slate-50 border-y border-slate-200">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Orchestrate. Evaluate. Optimize.</h2>
                            <p className="text-lg text-slate-600">The lifecycle of a high-performance autonomous workforce.</p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Orchestrate", desc: "Define roles, assign tools, and deploy agents to handle complex workflows autonomously.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", color: "text-purple-600 bg-purple-50 border-purple-100" },
                                { title: "Evaluate", desc: "Track accuracy, latency, and cost to ensure your agents deliver tangible business value.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "text-blue-600 bg-blue-50 border-blue-100" },
                                { title: "Optimize", desc: "Monitor performance in real-time and fine-tune behavior with granular controls.", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", color: "text-pink-600 bg-pink-50 border-pink-100" }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${item.color}`}>
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== AGENT TYPES ===== */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <ScrollReveal className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Specialized AI Agents</h2>
                            <p className="text-lg text-slate-600 max-w-3xl">Expert agents ready to deploy across your enterprise.</p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Project Manager", role: "Operations", desc: "Automate tracking, resource allocation, and daily standups." },
                                { title: "Marketing AI", role: "Growth", desc: "Generate and distribute personalized content at scale." },
                                { title: "Sales AI", role: "Revenue", desc: "Reach millions with hyper-personalized outreach and follow-ups." },
                                { title: "Simulation AI", role: "Strategy", desc: "Model complex systems and predict detailed customer behaviors." }
                            ].map((agent, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-purple-200 hover:bg-slate-50/50 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-purple-500 transition-colors">{agent.role}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{agent.title}</h3>
                                    <p className="text-sm text-slate-600">{agent.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== PRODUCTS ===== */}
                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_60%)]" />
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <ScrollReveal>
                                <h2 className="text-3xl font-bold mb-6">Core Platform Products</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">AI Enterprise Platform</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">A complete suite for AI Orchestration, User & Data Management, giving you full visibility and control over your autonomous workforce.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">AI Builder</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">Tools to generate Autonomous AI apps at scale. Prototype, test, and deploy custom agents without managing infrastructure.</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className="relative">
                                <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                                    {/* Mock UI for Platform */}
                                    <div className="h-full w-full bg-slate-800 p-4">
                                        <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                            <div className="w-2 h-2 rounded-full bg-slate-600" />
                                            <div className="h-2 w-20 bg-slate-700 rounded-full" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-24 bg-slate-700/50 rounded-lg animate-pulse" />
                                            <div className="h-24 bg-slate-700/50 rounded-lg animate-pulse delay-75" />
                                            <div className="h-24 bg-slate-700/50 rounded-lg animate-pulse delay-150" />
                                        </div>
                                        <div className="mt-4 h-32 bg-slate-700/30 rounded-lg border border-slate-600/50 p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-xs text-slate-400">System Status: Optimal</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                                <div className="h-full w-3/4 bg-purple-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ===== FOOTER CTA ===== */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Ready to build your <span className="text-purple-600">Autonomous Workforce</span>?
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Deploy your first AI agent in minutes and see the results instantly.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
                                >
                                    Get Started Now
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

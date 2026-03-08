"use client";

import { FadeIn } from "@/components/FadeIn";

export default function LandingInfrastructure() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            {/* Decorative subtle background mesh */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02]"
                style={{
                    backgroundImage: "radial-gradient(#EC4899 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
                            A Distributed <br />
                            <span className="text-pink-600">Digital Backbone</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            Siscom operates a distributed infrastructure footprint designed to bring compute closer to African businesses. Our clusters span strategic locations across Africa and Europe to deliver low latency, resilience and scalable performance.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">5+</div>
                                <div className="text-sm font-medium text-pink-600 uppercase tracking-wider">Countries</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100+</div>
                                <div className="text-sm font-medium text-pink-600 uppercase tracking-wider">SME Partners</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">99.9%</div>
                                <div className="text-sm font-medium text-pink-600 uppercase tracking-wider">Uptime SLA</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">24/7</div>
                                <div className="text-sm font-medium text-pink-600 uppercase tracking-wider">Support</div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Visual Content (Abstract Map / Nodes representation) */}
                    <FadeIn delay={0.2} className="relative h-[400px] lg:h-[500px] w-full rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-8">
                        {/* This is a placeholder for a map or data connection visual. */}
                        <div className="absolute inset-0 w-full h-full opacity-50 dark:opacity-30">
                            <img src="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Tech abstract" className="w-full h-full object-cover" />
                        </div>

                        {/* Simulated Nodes on Map */}
                        <div className="relative w-full aspect-video md:aspect-[4/3] max-w-md mx-auto">
                            {/* Just visual dots representing clusters */}
                            <div className="absolute top-[30%] left-[20%] w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-pulse" />
                            <div className="absolute top-[40%] right-[30%] w-3 h-3 rounded-full bg-pink-600 opacity-80" />
                            <div className="absolute bottom-[20%] left-[40%] w-5 h-5 rounded-full bg-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.8)] animate-pulse" style={{ animationDelay: "1s" }} />
                            <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-pink-600 opacity-80" />
                            <div className="absolute top-[10%] left-[60%] w-3 h-3 rounded-full bg-pink-600 opacity-80" />

                            {/* Simulated connecting lines using SVG */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 4px rgba(236,72,153,0.3))" }}>
                                <path d="M 20% 30% L 40% 80% L 70% 40% L 85% 60%" fill="none" stroke="currentColor" strokeWidth="1" className="text-pink-500/30" strokeDasharray="4 4" />
                                <path d="M 60% 10% L 70% 40%" fill="none" stroke="currentColor" strokeWidth="1" className="text-pink-500/30" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

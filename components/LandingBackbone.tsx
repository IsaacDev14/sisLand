"use client";

import { FadeIn } from "@/components/FadeIn";

export default function LandingBackbone() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-4xl mx-auto mb-8">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
                            A Distributed <span className="text-pink-600">Digital Backbone</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                            Siscom operates a distributed infrastructure footprint designed to bring compute closer to African businesses. Our clusters span strategic locations across Africa and Europe to deliver low latency, resilience and scalable performance.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        "Kenya",
                        "Tanzania",
                        "Nigeria",
                        "South Africa",
                        "Germany",
                    ].map((country, idx) => (
                        <FadeIn key={country} delay={0.1 * idx}>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                <span className="w-2.5 h-2.5 rounded-full bg-pink-600 shadow-[0_0_8px_rgba(219,39,119,0.5)]" />
                                <span className="font-semibold text-slate-800">{country}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

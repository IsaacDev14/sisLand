"use client";

import { FadeIn } from "@/components/FadeIn";
import { Cpu, Server, Globe2, Building2 } from "lucide-react";

export default function LandingTargetMarket() {
    const points = [
        {
            icon: <Cpu className="w-8 h-8 text-pink-500" />,
            title: "AI-Ready Infrastructure",
            description: "Purpose-built environments optimized for AI workloads.",
        },
        {
            icon: <Server className="w-8 h-8 text-pink-500" />,
            title: "Distributed Data Centers",
            description: "Edge clusters that reduce latency and improve performance.",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-pink-500" />,
            title: "Global Partnerships",
            description: "Technology alliances enabling scalable infrastructure impact.",
        },
        {
            icon: <Building2 className="w-8 h-8 text-pink-500" />,
            title: "SME-First Design",
            description: "Enterprise-grade infrastructure accessible to growing businesses.",
        },
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                            Built for Africa&apos;s AI Economy
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            We architect performance-driven solutions meant to bridge the digital divide.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, index) => (
                        <FadeIn key={point.title} delay={index * 0.1}>
                            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 h-full hover:shadow-md hover:border-pink-500/30 transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-pink-50 dark:bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 transition-colors">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

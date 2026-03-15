"use client";

import { FadeIn } from "@/components/FadeIn";
import { Cpu, Server, Globe2, Building2 } from "lucide-react";

export default function LandingTargetMarket() {
    const points = [
        {
            icon: <Cpu className="w-8 h-8 text-white" />,
            title: "AI-Ready Infrastructure",
            description: "Purpose-built environments optimized for AI workloads.",
        },
        {
            icon: <Server className="w-8 h-8 text-white" />,
            title: "Distributed Data Centers",
            description: "Edge clusters that reduce latency and improve performance.",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-white" />,
            title: "Global Partnerships",
            description: "Technology alliances enabling scalable infrastructure impact.",
        },
        {
            icon: <Building2 className="w-8 h-8 text-white" />,
            title: "SME-First Design",
            description: "Enterprise-grade infrastructure accessible to growing businesses.",
        },
    ];

    return (
        <section className="py-12 bg-background border-t border-border transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                            Built for Africa&apos;s <span className="text-pink-600">AI Economy</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We architect performance-driven solutions meant to bridge the digital divide.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, index) => (
                        <FadeIn key={point.title} delay={index * 0.1}>
                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border h-full hover:shadow-md hover:border-pink-500/30 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-pink-600 flex items-center justify-center mb-6 group-hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/20">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
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

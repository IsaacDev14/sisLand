"use client";

import { FadeIn } from "@/components/FadeIn";
import { Cpu, Server, Globe2, Building2 } from "lucide-react";

export default function LandingTargetMarket() {
    const locations = [
        "Kenya", "Tanzania", "Nigeria", "South Africa", "Germany"
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                            Infrastructure for the Next <span className="text-pink-600">African Economy</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Siscom builds distributed digital infrastructure powering Africa&apos;s AI future. Through data centers, cloud platforms and connectivity solutions, we enable SMEs, governments and institutions to access enterprise-grade infrastructure without enterprise-scale barriers.
                        </p>
                    </FadeIn>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {locations.map((location, index) => (
                        <FadeIn key={location} delay={index * 0.1}>
                            <div className="bg-white dark:bg-slate-900 px-8 py-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-pink-500/30 transition-all flex items-center gap-3 group cursor-default">
                                <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)] group-hover:scale-150 transition-transform duration-300" />
                                <span className="text-lg font-medium text-slate-800 dark:text-slate-100">{location}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

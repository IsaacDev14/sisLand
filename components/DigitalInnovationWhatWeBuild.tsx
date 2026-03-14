"use client";

import { FadeIn } from "./FadeIn";

const sectors = [
    {
        title: "Fintech & Payments",
        color: "bg-red-500"
    },
    {
        title: "Core Banking Platforms",
        color: "bg-purple-500"
    },
    {
        title: "Investment & Capital Markets",
        color: "bg-cyan-500"
    },
    {
        title: "Government Digitization",
        color: "bg-red-500"
    },
    {
        title: "MSME & Cooperative Platforms",
        color: "bg-blue-500"
    },
    {
        title: "E-Commerce & Logistics",
        color: "bg-cyan-500"
    }
];

export default function DigitalInnovationWhatWeBuild() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-[#002B5B] mb-4">What We Build</h2>
                        <p className="text-xl text-slate-500 font-light">
                            Digital platforms across critical sectors.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, idx) => (
                        <FadeIn key={sector.title} delay={idx * 0.05} direction="up">
                            <div className="bg-[#002B5B] p-12 h-64 flex flex-col justify-center relative group overflow-hidden cursor-pointer">
                                {/* Accent Line */}
                                <div className={`absolute top-12 left-12 w-8 h-1 ${sector.color}`} />
                                
                                <h3 className="text-2xl font-bold text-white max-w-[200px] leading-tight mt-4">
                                    {sector.title}
                                </h3>

                                {/* Hover effect background flare */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

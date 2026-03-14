"use client";

import { FadeIn } from "./FadeIn";

const examples = [
    {
        title: "Fintech Payment Platforms",
        description: "Multiple wallet and payment solutions built for fintech companies.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
    {
        title: "Government Digital Services",
        description: "Digitization of public services for county governments.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
        color: "bg-purple-500"
    },
    {
        title: "Investment Platforms",
        description: "Digital platforms enabling access to new asset classes.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        color: "bg-cyan-500"
    },
    {
        title: "Enterprise Platforms",
        description: "Scalable digital infrastructure for large organizations.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    }
];

export default function DigitalInnovationSuccess() {
    return (
        <section className="bg-white pt-12 pb-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-5xl">
                    <FadeIn>
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">Client Success Examples</h2>
                            <p className="text-xl text-slate-500 font-light italic">
                                Delivering excellence through strategic platform innovation.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {examples.map((example, idx) => (
                        <FadeIn key={example.title} delay={idx * 0.1}>
                            <div className="relative aspect-[3/4] group overflow-hidden cursor-pointer">
                                {/* Image */}
                                <img 
                                    src={example.image} 
                                    alt={example.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                {/* Overlay (Liquid Blue) */}
                                <div className="absolute inset-0 bg-[#002B5B]/50 mix-blend-multiply" />
                                
                                {/* Gradient for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/20 to-transparent opacity-95" />

                                {/* Content */}
                                <div className="absolute inset-x-6 bottom-8">
                                    {/* Accent Line */}
                                    <div className={`w-8 h-1 ${example.color} mb-4`} />
                                    
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {example.title}
                                    </h3>
                                    <p className="text-xs text-slate-300 font-light mt-2 line-clamp-3">
                                        {example.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

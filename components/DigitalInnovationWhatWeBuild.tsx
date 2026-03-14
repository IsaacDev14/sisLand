"use client";

import { FadeIn } from "./FadeIn";

const sectors = [
    {
        title: "Fintech & Payments",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
    {
        title: "Core Banking Platforms",
        image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800",
        color: "bg-purple-500"
    },
    {
        title: "Investment & Capital Markets",
        image: "https://images.unsplash.com/photo-1611974717482-58a2d2c1ec0a?auto=format&fit=crop&q=80&w=800",
        color: "bg-cyan-500"
    },
    {
        title: "Government Digitization",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
    {
        title: "MSME & Cooperative Platforms",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
        color: "bg-blue-500"
    },
    {
        title: "E-Commerce & Logistics",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800",
        color: "bg-cyan-500"
    }
];

export default function DigitalInnovationWhatWeBuild() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-5xl">
                    <FadeIn>
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">What We Build</h2>
                            <p className="text-xl text-slate-500 font-light">
                                Digital platforms across critical sectors.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, idx) => (
                        <FadeIn key={sector.title} delay={idx * 0.05} direction="up">
                            <div className="relative aspect-[4/3] group overflow-hidden cursor-pointer">
                                {/* Image */}
                                <img 
                                    src={sector.image} 
                                    alt={sector.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                {/* Overlay (Liquid Blue) */}
                                <div className="absolute inset-0 bg-[#002B5B]/50 mix-blend-multiply" />
                                
                                {/* Gradient for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/20 to-transparent opacity-90" />
                                
                                {/* Content */}
                                <div className="absolute inset-x-10 bottom-10">
                                    {/* Accent Line */}
                                    <div className={`w-8 h-1 ${sector.color} mb-6`} />
                                    
                                    <h3 className="text-2xl font-bold text-white leading-tight max-w-[200px]">
                                        {sector.title}
                                    </h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

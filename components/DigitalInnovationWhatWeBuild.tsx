"use client";

import { FadeIn } from "./FadeIn";

const sectors = [
    {
        title: "Custom Web Applications",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
    {
        title: "Enterprise Mobile Apps",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        color: "bg-purple-500"
    },
    {
        title: "API & Backend Engineering",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEAOBfCVg0nfg/feedshare-shrink_800/B4DZuNtwLdHwAk-/0/1767609151050?e=1775088000&v=beta&t=T7xCpyco6FkIB0HaUL0AkAsf3zLbtssm6iNE29hZwYg",
        color: "bg-cyan-500"
    },
    {
        title: "Fintech & Core Banking",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
{
        title: "Government Digitization",
        // Image: A confident professional in a sharp suit reviewing data in a modern, secure corporate environment. Conveys authority and trust.
        image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800",
        color: "bg-blue-500"
    },
    {
        title: "E-Commerce & SaaS Platforms",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEkNmrXYjZoew/feedshare-shrink_800/B4DZh6SdJ1GsAg-/0/1754398332967?e=1775088000&v=beta&t=ToIyUFq0i2R5I08zfbjiL2nN9OQUSa9okd0QJVbL6TA",
        color: "bg-cyan-500"
    }
];

export default function DigitalInnovationWhatWeBuild() {
    return (
        <section className="bg-background py-24 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-5xl">
                    <FadeIn>
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-foreground mb-4">What We Build</h2>
                            <p className="text-xl text-muted-foreground font-normal">
                                Digital platforms across critical sectors.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, idx) => (
                        <FadeIn key={sector.title} delay={idx * 0.05} direction="up">
                            <div className="relative aspect-[4/3] group overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                {/* Image */}
                                <img 
                                    src={sector.image} 
                                    alt={sector.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay (Liquid Blue) */}
                                <div className="absolute inset-0 bg-[#002B5B]/50 mix-blend-multiply group-hover:bg-[#002B5B]/30 transition-colors duration-500" />
                                
                                {/* Gradient for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/20 to-transparent opacity-90" />
                                
                                {/* Content */}
                                <div className="absolute inset-x-10 bottom-10">
                                    {/* Accent Line */}
                                    <div className={`w-8 h-1 ${sector.color} mb-6 transition-all duration-500 group-hover:w-12`} />
                                    
                                    <h3 className="text-2xl font-bold text-white leading-tight max-w-[240px]">
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

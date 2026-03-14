"use client";

import { FadeIn } from "./FadeIn";

const whyChoose = [
    {
        title: "Full Product Lifecycle",
        description: "From idea validation to product launch — end to end.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
    {
        title: "Dedicated Product Teams",
        description: "UI/UX designers, product managers, engineers, and DevOps experts.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        color: "bg-purple-500"
    },
    {
        title: "Agile Development",
        description: "Rapid product development with continuous iteration.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        color: "bg-cyan-500"
    },
    {
        title: "Enterprise Infrastructure",
        description: "Built on Siscom Cloud for scalability and reliability.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
    {
        title: "Deep Fintech Experience",
        description: "Strong expertise in payments, banking, and digital platforms.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800",
        color: "bg-blue-500"
    },
    {
        title: "Innovation Hub",
        description: "Product workshops, rapid prototyping, and platform engineering.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        color: "bg-cyan-500"
    }
];

export default function DigitalInnovationValues() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-5xl">
                    <FadeIn>
                        <div className="mb-20">
                            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
                                Why Organisations Choose Siscom
                            </h2>
                            <p className="text-xl text-slate-500 font-light">
                                Full spectrum from idea to launch.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyChoose.map((item, idx) => (
                        <FadeIn key={item.title} delay={idx * 0.1}>
                            <div className="relative aspect-[4/3] group overflow-hidden cursor-pointer">
                                {/* Image */}
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                {/* Overlay (Liquid Blue) */}
                                <div className="absolute inset-0 bg-[#002B5B]/50 mix-blend-multiply" />
                                
                                {/* Gradient for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/20 to-transparent opacity-90" />

                                {/* Content */}
                                <div className="absolute inset-x-8 bottom-8">
                                    {/* Accent Line */}
                                    <div className={`w-8 h-1 ${item.color} mb-4`} />
                                    
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-300 font-light mt-2 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Additional Info: Global Teams (Re-styled for consistency) */}
                <div className="mt-20 pt-16 border-t border-slate-100">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <FadeIn direction="left">
                            <h2 className="text-3xl font-bold text-[#002B5B] mb-6 uppercase tracking-tight">
                                Global Engineering Teams
                            </h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed">
                                Siscom Innovation operates a distributed engineering network across Kenya, India, and the United States. 
                                Our teams are composed of elite engineers who have built complex systems for some of the world's leading organizations.
                            </p>
                        </FadeIn>
                        <FadeIn direction="right">
                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <p className="text-5xl font-black text-pink-600">100+</p>
                                    <p className="text-sm uppercase tracking-widest text-slate-500 mt-4">Engineers Globally</p>
                                </div>
                                <div>
                                    <p className="text-5xl font-black text-pink-600">50+</p>
                                    <p className="text-sm uppercase tracking-widest text-slate-500 mt-4">Large Projects</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}

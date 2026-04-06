"use client";

import { FadeIn } from "./FadeIn";

const whyChoose = [
    {
        title: "Strategic Tech Partnership",
        image: "/StrategicTechPartners.png",
        color: "bg-red-500"
    },
    {
        title: "Elite Engineering Talent",
        image: "https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "bg-purple-500"
    },
    {
        title: "Flexible Engagement Models",
        image: "/flexibleEngagement.png",
        color: "bg-cyan-500"
    },
    {
        title: "Deep Domain Expertise",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-500"
    },
    {
        title: "Radical Transparency",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        color: "bg-blue-500"
    },
    {
        title: "The Siscom Innovation Hub",
        image: "/innovationHub.png",
        color: "bg-cyan-500"
    }
];

export default function DigitalInnovationValues() {
    return (
        <section className="bg-background py-24 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-5xl">
                    <FadeIn>
                        <div className="mb-20">
                            <h2 className="text-4xl font-bold text-foreground mb-4">
                                Why Organisations Choose Siscom
                            </h2>
                            <p className="text-xl text-muted-foreground font-normal">
                                Full spectrum from idea to launch.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyChoose.map((item, idx) => (
                        <FadeIn key={item.title} delay={idx * 0.1}>
                            <div className="relative aspect-[4/3] group overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                {/* Image */}
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay (Liquid Blue) */}
                                <div className="absolute inset-0 bg-[#002B5B]/50 mix-blend-multiply group-hover:bg-[#002B5B]/30 transition-colors duration-500" />
                                
                                {/* Gradient for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/20 to-transparent opacity-90" />

                                {/* Content */}
                                <div className="absolute inset-x-8 bottom-8">
                                    {/* Accent Line */}
                                    <div className={`w-8 h-1 ${item.color} mb-4 transition-all duration-500 group-hover:w-12`} />
                                    
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Additional Info: Global Teams (Re-styled for consistency) */}
                <div className="mt-20 pt-16 border-t border-border">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <FadeIn direction="left">
                            <h2 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-tight">
                                Global Engineering Teams
                            </h2>
                            <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                                Siscom Innovation operates a distributed engineering network across Kenya, India, and the United States. 
                                Our teams are composed of elite engineers who have built complex systems for some of the world's leading organizations.
                            </p>
                        </FadeIn>
                        <FadeIn direction="right">
                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <p className="text-5xl font-black text-pink-600">100+</p>
                                    <p className="text-sm uppercase tracking-widest text-muted-foreground mt-4">Engineers Globally</p>
                                </div>
                                <div>
                                    <p className="text-5xl font-black text-pink-600">50+</p>
                                    <p className="text-sm uppercase tracking-widest text-muted-foreground mt-4">Large Projects</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}

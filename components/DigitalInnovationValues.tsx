"use client";

import { FadeIn } from "./FadeIn";

const whyChoose = [
    {
        title: "Full Product Lifecycle",
        description: "From idea validation to product launch — end to end."
    },
    {
        title: "Dedicated Product Teams",
        description: "UI/UX designers, product managers, engineers, and DevOps experts."
    },
    {
        title: "Agile Development",
        description: "Rapid product development with continuous iteration."
    },
    {
        title: "Enterprise Infrastructure",
        description: "Built on Siscom Cloud for scalability and reliability."
    },
    {
        title: "Deep Fintech Experience",
        description: "Strong expertise in payments, banking, and digital platforms."
    },
    {
        title: "Innovation Hub",
        description: "Product workshops, rapid prototyping, and platform engineering."
    }
];

export default function DigitalInnovationValues() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
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

                <div className="max-w-5xl">
                    <FadeIn>
                        <ul className="space-y-8">
                            {whyChoose.map((item, idx) => (
                                <FadeIn key={item.title} delay={idx * 0.05}>
                                    <li>
                                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                                            <strong className="text-[#002B5B] font-bold">{item.title}:</strong> {item.description}
                                        </p>
                                    </li>
                                </FadeIn>
                            ))}
                        </ul>
                    </FadeIn>
                </div>

                {/* Additional Info: Global Teams (Re-styled for consistency) */}
                <div className="mt-32 pt-24 border-t border-slate-100">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <FadeIn direction="left">
                            <h2 className="text-3xl font-bold text-[#002B5B] mb-8 uppercase tracking-tight">
                                Global Engineering Teams
                            </h2>
                            <p className="text-xl text-slate-600 font-light leading-relaxed">
                                Siscom Innovation operates a distributed engineering network across Kenya, India, and the United States. 
                                Our teams are composed of elite engineers who have built complex systems for some of the world's leading organizations.
                            </p>
                        </FadeIn>
                        <FadeIn direction="right">
                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <p className="text-5xl font-black text-[#002B5B]">100+</p>
                                    <p className="text-sm uppercase tracking-widest text-slate-500 mt-4">Engineers Globally</p>
                                </div>
                                <div>
                                    <p className="text-5xl font-black text-[#002B5B]">50+</p>
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

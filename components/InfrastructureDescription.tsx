"use client";

import { FadeIn } from "./FadeIn";

export default function InfrastructureDescription() {
    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn delay={0.1}>
                        <h2 className="text-xl md:text-2xl font-bold text-indigo-950 leading-tight mb-4">
                            Reliable communication is essential to your business.
                        </h2>
                    </FadeIn>
                    
                    <FadeIn delay={0.2}>
                        <p className="text-base text-slate-500 font-light leading-relaxed">
                            Siscom Africa provides the secure infrastructure you need to manage critical data and digital operations with absolute reliability.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

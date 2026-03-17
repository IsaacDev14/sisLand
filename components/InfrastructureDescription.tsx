"use client";

import { FadeIn } from "./FadeIn";

export default function InfrastructureDescription() {
    return (
        <section className="bg-background pt-16 pb-8 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <FadeIn delay={0.1}>
                        <h2 className="text-lg md:text-xl font-bold text-foreground tracking-tight mb-3">
                            Build on Africa&apos;s Next <span className="text-pink-600">Digital Infrastructure Layer</span>
                        </h2>
                    </FadeIn>
                    
                    <FadeIn delay={0.2}>
                        <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                            Whether you&apos;re building AI applications, scaling a startup or enabling national digital transformation, Siscom provides the infrastructure foundation for Africa&apos;s next wave of innovation.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

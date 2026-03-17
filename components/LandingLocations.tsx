"use client";

import { FadeIn } from "@/components/FadeIn";

export default function LandingLocations() {
    return (
        <section className="py-12 bg-background border-t border-border transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground tracking-tight leading-tight">
                            Infrastructure for the Next African Economy
                        </h2>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

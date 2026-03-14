"use client";

import { FadeIn } from "@/components/FadeIn";

export default function LandingLocations() {
    return (
        <section className="py-12 bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                            Infrastructure for the Next <span className="text-pink-600">African Economy</span>
                        </h2>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

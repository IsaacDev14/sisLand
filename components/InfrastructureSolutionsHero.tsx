"use client";

import { FadeIn } from "./FadeIn";

export default function InfrastructureSolutionsHero() {
    return (
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-end">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
                    alt="Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Liquid Tech style gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/60 via-pink-500/40 to-transparent" />
                <div className="absolute inset-0 bg-slate-950/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pb-16">
                <div className="max-w-2xl">
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4">
                            Siscom Data Centers
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl md:text-2xl text-white/90 font-light max-w-xl">
                            Powering the digital spine of the African economy.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

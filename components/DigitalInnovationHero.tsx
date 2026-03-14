"use client";

import { FadeIn } from "./FadeIn";
import { MoveRight } from "lucide-react";

export default function DigitalInnovationHero() {
    return (
        <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden bg-slate-950 pt-20">
            {/* Network Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/digital-innovation-hero.png"
                    alt="Network Background"
                    className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-24">
                <div className="max-w-4xl">
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            Build Scalable Digital <br />
                            <span className="text-pink-500">Platforms — Faster</span>
                        </h1>
                    </FadeIn>
                    
                    <FadeIn delay={0.2}>
                        <p className="mt-8 text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                            Turn your ideas into market-ready platforms with Siscom Innovation. 
                            From research and product design to engineering and deployment, 
                            our innovation hub helps organizations build powerful digital platforms 
                            for fintech, payments, government, and the AI economy.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold flex items-center gap-2 group transition-all rounded-none uppercase tracking-wider text-sm">
                                Start Your Project
                                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold transition-all rounded-none uppercase tracking-wider text-sm">
                                Book Innovation Consultation
                            </button>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-white">100+</p>
                                <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">Engineers Globally</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
                                <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">Large Projects Delivered</p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
                                <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">Payment Platforms Built</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

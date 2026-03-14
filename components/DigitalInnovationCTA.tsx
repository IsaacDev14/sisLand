"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DigitalInnovationCTA() {
    return (
        <section className="bg-white py-32 border-t border-slate-100">
            <div className="mx-auto max-w-7xl px-6">
                <div className="bg-pink-600 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-32 -mt-32 rotate-45" />
                    
                    <div className="relative z-10 max-w-2xl">
                        <FadeIn direction="left">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Ready to Build <br className="hidden md:block" /> Your Platform?
                            </h2>
                            <p className="text-xl text-white/90 font-light leading-relaxed">
                                Whether you're launching a startup, building fintech infrastructure, 
                                or digitizing services, Siscom Innovation provides the technology, 
                                engineering talent, and infrastructure needed to succeed.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <FadeIn direction="right" delay={0.2}>
                            <div className="flex flex-col gap-4">
                                <Link href="/contact" className="px-10 py-5 bg-white text-pink-600 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                    Start Building Today
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/contact" className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center">
                                    Talk to the Team
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}

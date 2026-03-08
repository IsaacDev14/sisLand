"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function LandingInfrastructure() {
    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                            Build on Africa&apos;s Next <span className="text-pink-600">Digital<br />Infrastructure Layer</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-10">
                            Whether you&apos;re building AI applications, scaling a startup or enabling national digital transformation, Siscom provides the infrastructure foundation for Africa&apos;s next wave of innovation.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-4 rounded-lg transition-all shadow-lg shadow-pink-600/20"
                            >
                                <MessageSquare className="w-5 h-5" />
                                Talk to an Infrastructure Specialist
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </Link>
                            <Link
                                href="#services"
                                className="inline-flex items-center justify-center bg-white text-pink-600 font-medium px-8 py-4 rounded-lg border border-slate-200 hover:border-pink-600 transition-colors"
                            >
                                Explore All Solutions
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <FadeIn delay={0.1}>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:border-pink-500/30 transition-colors">
                            <div className="text-4xl font-bold text-pink-600 mb-2">5+</div>
                            <div className="text-sm font-medium text-slate-500">Countries</div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-pink-500/30 transition-colors">
                            <div className="text-4xl font-bold text-pink-600 mb-2">100+</div>
                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">SME Partners</div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-pink-500/30 transition-colors">
                            <div className="text-4xl font-bold text-pink-600 mb-2">99.9%</div>
                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Uptime SLA</div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-pink-500/30 transition-colors">
                            <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Support</div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

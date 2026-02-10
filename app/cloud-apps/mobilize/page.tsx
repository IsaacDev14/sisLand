"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function MobilizePage() {
    const features = [
        "Intelligence & Insights: AI-powered sentiment and engagement analytics.",
        "Supporter Hub: Centralized volunteer, member, and donor database.",
        "Interactive Engagement: Multi-channel engagement via Web, SMS, WhatsApp, and USSD."
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                <GridPattern
                    width={40}
                    height={40}
                    className="absolute inset-0 h-full w-full fill-neutral-200/40 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:fill-neutral-800/40"
                    x={-1}
                    y={-1}
                />

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="max-w-2xl">
                            <span className="text-pink-500 font-medium mb-4 block tracking-wide uppercase text-sm">Siscom Apps</span>
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
                                MOBILIZE
                            </h1>
                            <p className="text-xl font-medium text-foreground mb-4">
                                Build Influence, Scale Engagement, Drive Action
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                An all-in-one digital mobilization, fundraising and engagement platform designed to help organizations, leaders and movements build influence. From political campaigns to grassroots organizations, empower teams to organize supporters, raise funds, and deploy communications.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn className="hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-slate-900/50 aspect-video flex items-center justify-center">
                                <div className="text-slate-600 font-mono text-sm">Campaign Dashboard Preview</div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Platform Powers</h2>
                        <div className="h-1 w-20 bg-pink-500 rounded-full" />
                    </div>

                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <FadeIn key={idx} className="bg-card border border-border rounded-xl p-8 hover:border-pink-500/50 transition-colors">
                                <div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground leading-snug">{feature}</h3>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-24 border-t border-border text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Mobilize your movement</h2>
                        <Link href="/contact" className="inline-block bg-foreground text-background px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                            Contact Sales
                        </Link>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </div>
    );
}

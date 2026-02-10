"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function PesaHubPage() {
    const features = [
        "Payments & Collections",
        "Wallets & Digital Accounts",
        "Data & Intelligence",
        "Compliance & KYC",
        "Cloud Infrastructure",
        "Operations & Support"
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
                                PESAHUB
                            </h1>
                            <p className="text-xl font-medium text-foreground mb-4">
                                Embed Financial Features into Your Product
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                PesaHub is an African-centered fintech-as-a-service infrastructure designed for businesses that want to embed financial services into their products without building from scratch. It provides robust APIs and developer tools to enable payments, digital wallets, credit scoring, and compliance management.
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
                                <div className="text-slate-600 font-mono text-sm">API Documentation Preview</div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Infrastructure Pillars</h2>
                        <div className="h-1 w-20 bg-pink-500 rounded-full" />
                    </div>

                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <FadeIn key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-pink-500/50 transition-colors flex items-center gap-4">
                                <div className="h-8 w-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 flex-shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-foreground">{feature}</h3>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-24 border-t border-border text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Build Fintech Faster</h2>
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

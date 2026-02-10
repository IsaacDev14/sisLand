"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function ShopversePage() {
    const features = [
        "Pan-African Ready (Native M-Pesa & Mobile Wallet integration)",
        "Launch in Days (Pre-configured templates and automated inventory)",
        "Built to Scale (Enterprise-grade infrastructure for growing merchants)"
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
                                SHOPVERSE
                            </h1>
                            <p className="text-xl font-medium text-foreground mb-4">
                                Ecommerce platform built for African Retailers
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                A full-stack ecommerce solution designed specifically for the African digital commerce revolution. It offers native integrations with local payment methods like M-Pesa and PesaLink, providing everything businesses need to sell online from concept to launch.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
                                >
                                    Start Selling
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn className="hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-slate-900/50 aspect-video flex items-center justify-center">
                                <div className="text-slate-600 font-mono text-sm">Storefront Preview</div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Why Shopverse?</h2>
                        <div className="h-1 w-20 bg-pink-500 rounded-full" />
                    </div>

                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <FadeIn key={idx} className="bg-card border border-border rounded-xl p-8 hover:border-pink-500/50 transition-colors">
                                <div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">{feature}</h3>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-24 border-t border-border text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Launch your store today</h2>
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

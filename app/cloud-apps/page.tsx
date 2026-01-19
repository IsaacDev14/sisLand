"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

const apps = [
    {
        name: "KAYA CLM",
        description: "Complete contract lifecycle management solution. Streamline creation and approvals.",
        features: ["Workflows", "Compliance", "eSignature"]
    },
    {
        name: "SHOPVERSE",
        description: "E-commerce platform to build and grow your online store.",
        features: ["Inventory", "Payments", "Analytics"]
    },
    {
        name: "PULSE 360",
        description: "Customer engagement and feedback management platform.",
        features: ["Surveys", "NPS Tracking", "Insights"]
    },
    {
        name: "SMARTCOOP",
        description: "Digital solution for SACCO and cooperative management.",
        features: ["Member Mgmt", "Loans", "Dividends"]
    },
    {
        name: "MOBILIZE",
        description: "Digital mobilization platform for campaigns and advocacy.",
        features: ["Outreach", "Donations", "Events"]
    },
    {
        name: "PESAHUB",
        description: "Comprehensive financial management platform for SMEs.",
        features: ["Invoicing", "Expenses", "Reports"]
    },
];

export default function CloudAppsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                <GridPattern
                    width={40}
                    height={40}
                    className="absolute inset-0 h-full w-full fill-neutral-200/40 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:fill-neutral-800/40"
                />

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <FadeIn className="max-w-2xl">
                                <span className="text-pink-500 font-medium mb-4 block tracking-wide uppercase text-sm">Siscom Apps</span>
                                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
                                    Cloud Apps
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    A suite of purpose-built SaaS applications designed to digitize African SMEs and enterprises.
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
                                    >
                                        Explore Apps
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Visual: Apps Image */}
                            <FadeIn className="hidden lg:block">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                                    <img
                                        src="/blog_cloud_africa.png"
                                        alt="Siscom Cloud Applications"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </section>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {apps.map((app, idx) => (
                            <FadeIn key={idx} className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                                <div className="h-2 w-12 bg-pink-500/20 rounded-full mb-6 group-hover:bg-pink-500 transition-colors" />
                                <h3 className="text-lg font-bold text-foreground mb-2">{app.name}</h3>
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed min-h-[40px]">
                                    {app.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {app.features.map(f => (
                                        <span key={f} className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded border border-border">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-24 border-t border-border text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Request a Demo</h2>
                        <p className="text-muted-foreground mb-8">See how our apps can transform your business.</p>
                        <Link href="/contact" className="inline-block bg-foreground text-background px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                            Contact Us
                        </Link>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </div>
    );
}

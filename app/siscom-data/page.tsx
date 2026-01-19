"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function SiscomDataPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cyan-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                {/* Background Pattern - Grid for structure */}
                <GridPattern
                    width={60}
                    height={60}
                    className="absolute inset-0 h-full w-full fill-neutral-200/30 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:fill-neutral-800/30"
                />

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="max-w-2xl">
                            <span className="text-cyan-500 font-medium mb-4 block tracking-wide uppercase text-sm">Siscom Data</span>
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
                                Data & BI Platform
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Transform raw data into actionable business intelligence.
                                From data entry to high-performance clustering and analytics.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-cyan-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/20"
                                >
                                    Start Analyzing
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Visual: Data Image */}
                        <FadeIn className="hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                                <img
                                    src="/blog_analytics.png"
                                    alt="Data Analytics Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-cyan-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-sm border border-cyan-500/20">01</span>
                                Clustering
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Identify patterns and segment your data for targeted strategies.
                            </p>
                        </FadeIn>
                        {/* Feature 2 */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-cyan-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-sm border border-cyan-500/20">02</span>
                                Mining
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Efficiently process large datasets to discover hidden relationships.
                            </p>
                        </FadeIn>
                        {/* Feature 3 */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-cyan-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-sm border border-cyan-500/20">03</span>
                                Visualization
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Interactive dashboards that bring your data story to life.
                            </p>
                        </FadeIn>
                        {/* Feature 4 */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-cyan-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-sm border border-cyan-500/20">04</span>
                                Pipelines
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Automated ETL workflows to keep your data fresh and consistent.
                            </p>
                        </FadeIn>
                        {/* Feature 5 */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-cyan-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-sm border border-cyan-500/20">05</span>
                                Storage
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Secure, scalable data lakes compliant with local regulations.
                            </p>
                        </FadeIn>
                        {/* Feature 6 */}
                        <FadeIn className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-cyan-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-sm border border-cyan-500/20">06</span>
                                Governance
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Role-based access control and audit logs for enterprise security.
                            </p>
                        </FadeIn>
                    </FadeInStagger>
                </section>

                <section className="bg-muted/30 py-24 mt-24 border-t border-border relative">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <FadeIn>
                            <h2 className="text-2xl font-bold text-foreground mb-12">Industry Use Cases</h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="border-l-2 border-cyan-500 pl-6 space-y-2 group hover:pl-8 transition-all duration-300">
                                    <h4 className="text-foreground font-semibold group-hover:text-cyan-500 transition-colors">Healthcare</h4>
                                    <p className="text-sm text-muted-foreground">Patient outcome analysis and resource optimization.</p>
                                </div>
                                <div className="border-l-2 border-cyan-500 pl-6 space-y-2 group hover:pl-8 transition-all duration-300">
                                    <h4 className="text-foreground font-semibold group-hover:text-cyan-500 transition-colors">Manufacturing</h4>
                                    <p className="text-sm text-muted-foreground">Predictive maintenance and supply chain visibility.</p>
                                </div>
                                <div className="border-l-2 border-cyan-500 pl-6 space-y-2 group hover:pl-8 transition-all duration-300">
                                    <h4 className="text-foreground font-semibold group-hover:text-cyan-500 transition-colors">Retail</h4>
                                    <p className="text-sm text-muted-foreground">Customer behavior tracking and inventory forecasting.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

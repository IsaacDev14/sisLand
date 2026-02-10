
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Database, Shield, Globe, Lock, HardDrive, RefreshCw, Network } from "lucide-react";
import Link from "next/link";

export default function StoragePage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                {/* Background Decoration */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen dark:opacity-20" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] opacity-40 mix-blend-screen dark:opacity-20" />
                </div>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="max-w-2xl">
                                <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-600 dark:text-pink-400 bg-pink-500/10 backdrop-blur-sm px-4 py-1.5 text-sm">
                                    <Database className="w-3.5 h-3.5 mr-2" />
                                    Infinite Storage
                                </Badge>
                                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                                    Object Storage <br />
                                    <span className="text-pink-600">Simplified</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    S3-compatible, secure, and geographically distributed. Store backups, media, and huge datasets cost-effectively with 99.999% durability.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" className="rounded-full px-8 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/20" asChild>
                                        <Link href="/contact?product=storage">
                                            Start Storing
                                            <HardDrive className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-sm bg-background/50" asChild>
                                        <Link href="/contact">
                                            Estimate Costs
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Visual Simulation */}
                        <FadeIn delay={0.2} className="relative hidden lg:block">
                            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-2 shadow-2xl">
                                <div className="rounded-xl bg-card border border-border overflow-hidden">
                                    <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                        </div>
                                        <div className="ml-4 h-6 w-1/3 bg-muted rounded-md flex items-center px-2 text-[10px] text-muted-foreground">
                                            siscom.console/buckets/media-assets
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        {/* Storage Usage Ring */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="relative w-32 h-32 flex items-center justify-center">
                                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
                                                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-pink-500" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="text-2xl font-bold">76%</span>
                                                    <span className="text-[10px] text-muted-foreground">USED</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 ml-8 space-y-4">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Total Capacity</span>
                                                    <span className="font-medium">2 TB</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Objects</span>
                                                    <span className="font-medium">1.4M</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Bandwidth</span>
                                                    <span className="font-medium text-pink-500">4.2 TB/mo</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Recent files list */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Recent Objects</div>
                                            {[
                                                { name: "backup-2023-10-24.tar.gz", size: "4.2 GB", type: "Archive" },
                                                { name: "promo-video-v2.mp4", size: "128 MB", type: "Media" },
                                                { name: "dataset-processed.json", size: "45 MB", type: "Data" },
                                            ].map((file, i) => (
                                                <div key={i} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded bg-pink-500/10 flex items-center justify-center text-pink-500">
                                                            <HardDrive className="w-4 h-4" />
                                                        </div>
                                                        <span className="truncate max-w-[120px]">{file.name}</span>
                                                    </div>
                                                    <span className="text-muted-foreground text-xs">{file.size}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Pricing / Tiers Section */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                name: "1 TB",
                                description: "Ideal for standard file storage, backups, and small database expansion.",
                                capacity: "1,024 GB",
                                price: "KES 5,490",
                                popular: false
                            },
                            {
                                name: "2 TB",
                                description: "Suitable for media libraries, large historical data, and growing transaction logs.",
                                capacity: "2,048 GB",
                                price: "KES 10,980",
                                popular: true
                            },
                            {
                                name: "4 TB",
                                description: "For high-capacity needs, large-scale analytics, and full archival storage.",
                                capacity: "4,096 GB",
                                price: "KES 21,960",
                                popular: false
                            },
                        ].map((plan, i) => (
                            <FadeIn key={i} delay={0.1 * i} className="h-full">
                                <Card className={`h-full flex flex-col transition-all duration-300 relative group overflow-hidden ${plan.popular ? 'bg-[#18181b] text-white border-pink-500/50 shadow-2xl shadow-pink-500/20 scale-105 z-10' : 'bg-card/50 hover:border-pink-500/30 border-border'}`}>

                                    {/* Technical Corner Markers */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-foreground/10 group-hover:border-pink-500/50 transition-colors" />
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-foreground/10 group-hover:border-pink-500/50 transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-foreground/10 group-hover:border-pink-500/50 transition-colors" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-foreground/10 group-hover:border-pink-500/50 transition-colors" />

                                    <CardHeader>
                                        {plan.popular && (
                                            <Badge variant="default" className="w-fit mb-2 bg-pink-600 text-white hover:bg-pink-700 border-0">
                                                Most Popular
                                            </Badge>
                                        )}
                                        <CardTitle className="text-xl">Storage {plan.name}</CardTitle>
                                        <CardDescription className={`mt-2 ${plan.popular ? 'text-gray-300' : ''}`}>
                                            {plan.description}
                                        </CardDescription>
                                        <div className="mt-4">
                                            <span className="text-3xl font-bold">{plan.price}</span>
                                            <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-muted-foreground'}`}>/month</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {[
                                                { icon: HardDrive, label: plan.capacity + " SSD Storage" },
                                                { icon: Lock, label: "Encrypted Storage" },
                                                { icon: RefreshCw, label: "Automated Backups" },
                                                { icon: Globe, label: "S3 API Compatible" }
                                            ].map((feature, idx) => (
                                                <li key={idx} className={`flex items-center text-sm ${plan.popular ? 'text-gray-300' : 'text-muted-foreground'}`}>
                                                    <feature.icon className="w-4 h-4 mr-3 text-pink-500 flex-shrink-0" />
                                                    {feature.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className={`w-full ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : ''}`} variant={plan.popular ? "default" : "outline"} asChild>
                                            <Link href={`/contact?product=storage-${plan.name.toLowerCase().replace(' ', '-')}`}>
                                                Order Now
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "S3 Compatible",
                                desc: "Seamlessly integrate with your existing tools, SDKs, and libraries using the industry-standard S3 API."
                            },
                            {
                                icon: Shield,
                                title: "Data Durability",
                                desc: "Redundant storage across multiple local nodes ensures your data is safe, replicated, and always accessible."
                            },
                            {
                                icon: Network,
                                title: "Local Egress",
                                desc: "Benefit from high-speed data retrieval with reduced egress costs thanks to our local peering infrastructure."
                            },
                            {
                                icon: Lock,
                                title: "Secure Encryption",
                                desc: "Your data is encrypted at rest and in transit, ensuring maximum security for sensitive information."
                            },
                            {
                                icon: Database,
                                title: "Infinite Scaling",
                                desc: "Start small and scale your storage capacity infinitely as your data requirements grow, without downtime."
                            },
                            {
                                icon: Shield,
                                title: "Compliance Ready",
                                desc: "Keep your data within African borders to meet local data residency and sovereignty regulations."
                            }
                        ].map((feature, i) => (
                            <FadeIn key={i} delay={0.1 * i}>
                                <Card className="h-full bg-card/50 border-border hover:border-pink-500/20 transition-colors">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 text-pink-500">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {feature.desc}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

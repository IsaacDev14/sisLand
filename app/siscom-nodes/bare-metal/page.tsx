
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Server, Shield, Cpu, Network, Zap, Lock, Terminal, Activity } from "lucide-react";
import Link from "next/link";

export default function BareMetalPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                {/* Background Decoration */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen dark:opacity-20" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] opacity-40 mix-blend-screen dark:opacity-20" />
                </div>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="max-w-2xl">
                                <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-600 dark:text-pink-400 bg-pink-500/10 backdrop-blur-sm px-4 py-1.5 text-sm">
                                    <Server className="w-3.5 h-3.5 mr-2" />
                                    Dedicated Infrastructure
                                </Badge>
                                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                                    Bare Metal <br />
                                    <span className="text-pink-600">Reinvented</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Experience raw power with single-tenant physical servers. No noisy neighbors, no hypervisor overhead—just 100% of the hardware dedicated to your workloads.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" className="rounded-full px-8 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/20" asChild>
                                        <Link href="/contact?product=bare-metal">
                                            Deploy Dedicated
                                            <Zap className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-sm bg-background/50" asChild>
                                        <Link href="/contact">
                                            Talk to Solutions
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Visual Presentation / Dashboard Simulation */}
                        <FadeIn delay={0.2} className="relative hidden lg:block">
                            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-2 shadow-2xl">
                                <div className="rounded-xl bg-card border border-border overflow-hidden">
                                    {/* Fake Browser Header */}
                                    <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                        </div>
                                        <div className="ml-4 h-6 w-1/3 bg-muted rounded-md flex items-center px-2 text-[10px] text-muted-foreground">
                                            siscom.console/dedicated/BM-Epyc-7763
                                        </div>
                                    </div>

                                    {/* Dashboard Body */}
                                    <div className="p-6 grid gap-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold flex items-center gap-2">
                                                    <Server className="w-5 h-5 text-pink-500" />
                                                    BM-Enterprise-01
                                                </h3>
                                                <p className="text-xs text-muted-foreground">Ubuntu 22.04 LTS • Nairobi Zone A</p>
                                            </div>
                                            <Badge className="bg-green-500/15 text-green-600 dark:text-green-400 hover:bg-green-500/25 border-0">
                                                <Activity className="w-3 h-3 mr-1" /> Running
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-lg bg-muted/50 border border-border">
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                                    <Cpu className="w-3.5 h-3.5" /> CPU Load
                                                </div>
                                                <div className="text-2xl font-mono font-bold">128 / 128</div>
                                                <div className="text-xs text-pink-500 font-medium">Threads Active</div>
                                                <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                                    <div className="h-full bg-pink-500 w-[85%]" />
                                                </div>
                                            </div>
                                            <div className="p-4 rounded-lg bg-muted/50 border border-border">
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                                    <Activity className="w-3.5 h-3.5" /> Memory Usage
                                                </div>
                                                <div className="text-2xl font-mono font-bold">64 GB</div>
                                                <div className="text-xs text-purple-500 font-medium">ECC DDR4</div>
                                                <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                                    <div className="h-full bg-purple-500 w-[42%]" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-32 bg-muted/20 rounded-lg border border-border border-dashed flex items-center justify-center text-sm text-muted-foreground">
                                            {/* Stylized Graph Placeholder */}
                                            <svg className="w-full h-full p-4" viewBox="0 0 400 100" preserveAspectRatio="none">
                                                <path d="M0,80 Q20,60 40,75 T80,50 T120,65 T160,30 T200,45 T240,20 T280,40 T320,10 T360,35 T400,25" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                                                <path d="M0,80 L400,80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.1" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Pricing / Tiers Section */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Starter",
                                vCPU: "12 vCPU",
                                ram: "16 GB RAM",
                                storage: "256 GB SSD",
                                network: "1 Gbps",
                                price: "KES 23,308",
                                popular: false
                            },
                            {
                                name: "Professional",
                                vCPU: "20 vCPU",
                                ram: "32 GB RAM",
                                storage: "256 GB SSD",
                                network: "1 Gbps",
                                price: "KES 39,832",
                                popular: true
                            },
                            {
                                name: "Business",
                                vCPU: "32 vCPU",
                                ram: "64 GB RAM",
                                storage: "512 GB SSD",
                                network: "10 Gbps High Speed",
                                price: "KES 63,141",
                                popular: false
                            },
                            {
                                name: "Enterprise",
                                vCPU: "32 vCPU",
                                ram: "128 GB RAM",
                                storage: "512 GB SSD",
                                network: "10 Gbps High Speed",
                                price: "KES 90,682",
                                popular: false
                            }
                        ].map((plan, i) => (
                            <FadeIn key={i} delay={0.1 * i} className="h-full">
                                <Card className={`h-full flex flex-col transition-all duration-300 border-border ${plan.popular ? 'border-pink-500/50 shadow-2xl shadow-pink-500/10 scale-105 z-10 bg-card' : 'bg-card/50 hover:border-pink-500/30'}`}>
                                    <CardHeader>
                                        {plan.popular && (
                                            <Badge variant="default" className="w-fit mb-2 bg-pink-500 hover:bg-pink-600 text-white border-0">
                                                Most Popular
                                            </Badge>
                                        )}
                                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                                        <div className="mt-4">
                                            <span className="text-3xl font-bold">{plan.price}</span>
                                            <span className="text-sm text-muted-foreground">/mo</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {[
                                                { icon: Cpu, label: plan.vCPU },
                                                { icon: Server, label: plan.ram },
                                                { icon: Terminal, label: plan.storage },
                                                { icon: Network, label: plan.network }
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                                    <feature.icon className="w-4 h-4 mr-3 text-pink-500 flex-shrink-0" />
                                                    {feature.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className={`w-full ${plan.popular ? 'bg-pink-600 hover:bg-pink-700 text-white' : ''}`} variant={plan.popular ? "default" : "outline"} asChild>
                                            <Link href={`/contact?product=${plan.name.toLowerCase()}`}>
                                                Deploy Now
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-pink-500 uppercase tracking-wider">Features</span>
                        <h2 className="text-3xl font-bold mt-2">Why Choose Bare Metal?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Terminal,
                                title: "Full Root Access",
                                desc: "Complete control over your server environment. Install custom kernels, OS, and software without restrictions."
                            },
                            {
                                icon: Shield,
                                title: "Hardware Isolation",
                                desc: "Physical isolation ensures security and consistent performance for compliance-sensitive workloads."
                            },
                            {
                                icon: Zap,
                                title: "High Performance",
                                desc: "Tailor your CPU, RAM, and Storage requirements to your exact needs with our flexible deployment options."
                            },
                            {
                                icon: Network,
                                title: "High-Speed Connectivity",
                                desc: "Up to 10Gbps uplinks for seamless data transfer and ultra-low latency apps."
                            },
                            {
                                icon: Lock,
                                title: "Secure Data Centers",
                                desc: "Hosted in Tier-3 facilities across Africa with 24/7 monitoring and physical security."
                            },
                            {
                                icon: Activity,
                                title: "99.9% Uptime",
                                desc: "Guaranteed reliability for your mission-critical applications with our financial SLA."
                            },
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

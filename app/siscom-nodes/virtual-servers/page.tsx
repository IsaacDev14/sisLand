
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Cloud, Zap, Cpu, HardDrive, Shield, Globe, Clock, Sliders, Server, CircuitBoard } from "lucide-react";
import Link from "next/link";

export default function VirtualServersPage() {
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
                                    <Cloud className="w-3.5 h-3.5 mr-2" />
                                    Flexible Compute
                                </Badge>
                                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                                    Virtual Servers <br />
                                    <span className="text-pink-600">On Demand</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Deploy scalable virtual machines in seconds. Enjoy full root access, NVMe storage, and enterprise-grade virtualization for your apps and services.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" className="rounded-full px-8 bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/20" asChild>
                                        <Link href="/contact?product=vps">
                                            Create Instance
                                            <Zap className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-sm bg-background/50" asChild>
                                        <Link href="/contact">
                                            View Pricing
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
                                            siscom.console/instances
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="space-y-4">
                                            {[
                                                { name: "web-prod-01", ip: "102.13.x.x", status: "Running", cpu: "12%", ram: "42%" },
                                                { name: "db-replica-02", ip: "102.13.x.y", status: "Running", cpu: "24%", ram: "68%" },
                                                { name: "worker-node-12", ip: "102.13.x.z", status: "Starting", cpu: "5%", ram: "10%" },
                                            ].map((vm, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-2 h-2 rounded-full ${vm.status === 'Running' ? 'bg-pink-500' : 'bg-amber-500 animate-pulse'}`} />
                                                        <div>
                                                            <div className="font-semibold text-sm">{vm.name}</div>
                                                            <div className="text-xs text-muted-foreground">{vm.ip}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-xs font-mono">
                                                        <span className="text-muted-foreground">CPU: <span className="text-foreground">{vm.cpu}</span></span>
                                                        <span className="text-muted-foreground">RAM: <span className="text-foreground">{vm.ram}</span></span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6">
                                            <Button size="sm" className="w-full bg-pink-600/10 text-pink-600 hover:bg-pink-600/20 border border-pink-600/20">
                                                + Deploy New Instance
                                            </Button>
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
                                name: "Nano VM",
                                description: "Entry-level compute for microservices and development.",
                                vCPU: "2 vCPU",
                                ram: "2 GB RAM",
                                storage: "40 GB SSD",
                                price: "KES 3,641",
                                winPrice: "KES 6,891",
                                popular: false
                            },
                            {
                                name: "Basic VM",
                                description: "Balanced performance for web servers and small databases.",
                                vCPU: "4 vCPU",
                                ram: "4 GB RAM",
                                storage: "80 GB SSD",
                                price: "KES 7,284",
                                winPrice: "KES 10,534",
                                popular: true
                            },
                            {
                                name: "Standard VM",
                                description: "Production-ready compute for scaling applications.",
                                vCPU: "4 vCPU",
                                ram: "8 GB RAM",
                                storage: "160 GB SSD",
                                price: "KES 9,059",
                                winPrice: "KES 12,308",
                                popular: false
                            },
                            {
                                name: "Pro VM",
                                description: "High-performance compute for data-intensive workloads.",
                                vCPU: "8 vCPU",
                                ram: "16 GB RAM",
                                storage: "320 GB SSD",
                                price: "KES 18,118",
                                winPrice: "KES 25,000",
                                popular: false
                            }
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
                                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                                        <CardDescription className={`mt-2 ${plan.popular ? 'text-gray-300' : ''}`}>
                                            {plan.description}
                                        </CardDescription>
                                        <div className="mt-4">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-bold">{plan.price}</span>
                                                <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-muted-foreground'}`}>/month</span>
                                            </div>
                                            <div className={`text-xs mt-1 ${plan.popular ? 'text-gray-500' : 'text-muted-foreground'}`}>Windows: {plan.winPrice}</div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {[
                                                { icon: Cpu, label: plan.vCPU },
                                                { icon: CircuitBoard, label: plan.ram },
                                                { icon: HardDrive, label: plan.storage },
                                                { icon: Shield, label: "DDoS Protection" }
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
                                            <Link href="/contact?product=virtual-server">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Instant Provisioning",
                                desc: "Spin up new instances in under 60 seconds. Our automated orchestration gets you online fast."
                            },
                            {
                                icon: HardDrive,
                                title: "NVMe Storage",
                                desc: "All instances are backed by enterprise-grade NVMe SSDs for lightning-fast I/O performance."
                            },
                            {
                                icon: Sliders,
                                title: "Scalable Resources",
                                desc: "Resize your CPU and RAM allocations on the fly as your traffic and user base grows."
                            },
                            {
                                icon: Shield,
                                title: "Full Root Access",
                                desc: "You are in control. Get full root access to your VM to configure it exactly how you need."
                            },
                            {
                                icon: Globe,
                                title: "Local Peering",
                                desc: "Direct connectivity to major African ISPs ensures the lowest latency for your local users."
                            },
                            {
                                icon: Clock,
                                title: "Backup & Snapshots",
                                desc: "Protect your data with automated backups and one-click snapshots for easy recovery."
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

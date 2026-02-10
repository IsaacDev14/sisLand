"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, Server, Globe, Shield, Rocket, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30">
            <Navbar />

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="relative px-6 lg:px-8 mb-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <FadeIn>
                            <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-600 dark:text-pink-400 bg-pink-500/10 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full">
                                Since 2023
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">
                                Empowering Africa's <br /> Digital Sovereignty
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                We are building the infrastructure for the next generation of African innovators.
                                Secure, scalable, and locally hosted cloud solutions designed for the continent's unique challenges.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
                </section>

                {/* Mission & Values */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Data Sovereignty",
                                desc: "Your data stays in Africa. We comply with local regulations and ensure your information is protected by strict privacy laws."
                            },
                            {
                                icon: Rocket,
                                title: "High Performance",
                                desc: "Enterprise-grade hardware and optimized routing ensure low latency and high throughput for your applications."
                            },
                            {
                                icon: Heart,
                                title: "Community First",
                                desc: "We are committed to supporting the developer ecosystem with open resources, fair pricing, and 24/7 support."
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <Card className="p-6 bg-card/50 border-input hover:border-pink-500/30 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-secondary/30 py-24 mb-32 border-y border-border">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: "Data Centers", value: "3", icon: Server },
                                { label: "Countries", value: "5+", icon: Globe },
                                { label: "Happy Clients", value: "10k+", icon: Users },
                                { label: "Uptime", value: "99.99%", icon: Shield },
                            ].map((stat, i) => (
                                <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                                    <div className="flex flex-col items-center">
                                        <stat.icon className="w-8 h-8 text-pink-500 mb-4 opacity-80" />
                                        <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team / Story Placeholder */}
                <section className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
                        <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                            <p className="mb-6">
                                Founded in 2023, Siscom started with a simple mission: to make cloud computing accessible and affordable for African businesses.
                                Frustrated by high latency and expensive foreign providers, our team of engineers built a local alternative that doesn't compromise on quality.
                            </p>
                            <p>
                                Today, we power thousands of applications, from small startups to large enterprises, all running on our sovereign infrastructure.
                                We're just getting started.
                            </p>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <Footer />
        </div>
    );
}

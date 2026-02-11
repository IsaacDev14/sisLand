"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Server, Globe, Shield, Rocket, Heart, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-24 relative">
                {/* ────────── HERO SECTION ────────── */}
                <section className="relative px-6 lg:px-8 py-24 mb-12">
                    <div className="mx-auto max-w-4xl text-center relative z-10">
                        <FadeIn>
                            <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-600 dark:text-pink-400 bg-pink-500/10 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full">
                                Since 2023
                            </Badge>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
                                Empowering Africa's <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">
                                    Digital Sovereignty
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                We are building the infrastructure for the next generation of African innovators.
                                Secure, scalable, and locally hosted cloud solutions designed for the continent's unique challenges.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
                </section>

                {/* ────────── MISSION & VALUES ────────── */}
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
                                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors h-full">
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 border border-pink-500/20">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* ────────── LEADERSHIP TEAM ────────── */}
                <section className="py-24 bg-secondary/20 border-y border-white/5">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <FadeIn className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Meet the Leadership</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Visionaries dedicated to building a self-reliant digital Africa.
                            </p>
                        </FadeIn>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { name: "Dr. Amara Okoli", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" }, // Professional woman
                                { name: "David Mwangi", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" }, // Professional man
                                { name: "Sarah Al-Fayed", role: "Chief Operating Officer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" }, // Professional woman
                            ].map((leader, i) => (
                                <FadeIn key={i} delay={i * 0.2} className="group text-center">
                                    <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-1 ring-white/10">
                                        <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                    <h3 className="text-xl font-bold">{leader.name}</h3>
                                    <p className="text-pink-500 font-medium mb-4">{leader.role}</p>
                                    <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                                        <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ────────── TEAM GRID ────────── */}
                <section className="py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <FadeIn>
                            <h2 className="text-2xl font-bold mb-12">The Builders Behind Siscom</h2>
                        </FadeIn>

                        <FadeInStagger className="flex flex-wrap justify-center gap-6">
                            {[
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
                            ].map((avatar, i) => (
                                <FadeIn key={i} delay={i * 0.05}>
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-background ring-1 ring-white/10 hover:scale-110 transition-transform">
                                        <img src={avatar} alt="Team Member" className="w-full h-full object-cover" />
                                    </div>
                                </FadeIn>
                            ))}
                            <FadeIn delay={0.5}>
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center text-xs font-medium text-muted-foreground hover:bg-white/10 cursor-pointer">
                                    + You?
                                </div>
                            </FadeIn>
                        </FadeInStagger>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

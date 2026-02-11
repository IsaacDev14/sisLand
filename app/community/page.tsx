"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Heart, Code, Coffee, Tent, Mic } from "lucide-react";
import Image from "next/image";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-orange-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-24 relative">
                {/* ────────── HERO SECTION ────────── */}
                <section className="relative overflow-hidden pt-16 pb-32">
                    {/* Background - Warm Orange/Yellow Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-background to-background pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                        <FadeIn>
                            <Badge variant="outline" className="mb-6 border-orange-500/50 text-orange-500 bg-orange-500/10 px-4 py-1.5 rounded-full">
                                <Heart className="w-3 h-3 mr-2 fill-orange-500" />
                                Siscom Community
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                                Building Africa's <br />
                                <span className="text-pink-600 bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 ">
                                    Tech Ecosystem
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                                Join over 10,000 developers, creators, and founders building the next generation of African digital infrastructure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="rounded-full px-8 bg-orange-600 hover:bg-orange-500 text-white font-semibold h-14 text-lg shadow-lg shadow-orange-600/20">
                                    Join Discord
                                    <Users className="w-5 h-5 ml-2" />
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/10 hover:bg-white/5">
                                    Upcoming Events
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ────────── HACKATHONS ────────── */}
                <section className="py-24 bg-white/[0.02] border-y border-white/5">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <FadeIn>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Code className="w-8 h-8 text-orange-500" />
                                    Hackathons
                                </h2>
                                <p className="text-muted-foreground max-w-xl">
                                    48-hour coding sprints to solve real African challenges. Win prizes, mentorship, and cloud credits.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <Button variant="link" className="text-orange-400 hover:text-orange-300 p-0 h-auto font-semibold text-lg">
                                    View all hackathons &rarr;
                                </Button>
                            </FadeIn>
                        </div>

                        <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "FinPrint Lagos", date: "March 15-17, 2026", loc: "Lagos, Nigeria", image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=800&auto=format&fit=crop" },
                                { title: "AgriTech Nairobi", date: "April 22-24, 2026", loc: "Nairobi, Kenya", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" },
                                { title: "HealthAI Cairo", date: "May 10-12, 2026", loc: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
                            ].map((event, i) => (
                                <FadeIn key={i} className="group cursor-pointer">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-white/10">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white border border-white/20">
                                            Open for Reg
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{event.title}</h3>
                                    <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.loc}</span>
                                    </div>
                                </FadeIn>
                            ))}
                        </FadeInStagger>
                    </div>
                </section>

                {/* ────────── OPEN AIR RETREATS ────────── */}
                <section className="py-32 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <FadeIn className="order-2 lg:order-1 relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 bg-muted/20">
                                            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Retreat 1" />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 bg-muted/20">
                                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Retreat 2" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 bg-muted/20">
                                            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Retreat 3" />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 bg-muted/20">
                                            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Retreat 4" />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn className="order-1 lg:order-2">
                                <Badge variant="secondary" className="bg-green-500/10 text-green-400 mb-6 border-green-500/20">
                                    <Tent className="w-3 h-3 mr-2" />
                                    Siscom Open Air
                                </Badge>
                                <h2 className="text-4xl font-bold text-white mb-6">Where Tech Meets Nature</h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    Disconnect to reconnect. Siscom Open Air is our quarterly series of developer retreats held in some of Africa's most beautiful landscapes. No laptops, just ideas, campfires, and deep conversations.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-3 text-muted-foreground">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Coffee className="w-3 h-3" /></div>
                                        Deep work sessions in nature
                                    </li>
                                    <li className="flex gap-3 text-muted-foreground">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Mic className="w-3 h-3" /></div>
                                        Fireside chats with industry leaders
                                    </li>
                                </ul>
                                <Button className="rounded-full bg-white text-black hover:bg-white/90">
                                    Apply for Next Retreat
                                </Button>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* ────────── TOWN HALL ────────── */}
                <section className="py-24 bg-orange-950/20 border-t border-white/5 text-center">
                    <div className="mx-auto max-w-4xl px-6">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-white mb-6">Join the Conversation</h2>
                            <p className="text-muted-foreground mb-10">
                                We hold monthly Town Halls to discuss the roadmap of Siscom Cloud and Open Source in Africa. Your voice matters.
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-orange-300">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                Next Town Hall: April 2nd, 2026 @ 18:00 WAT
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

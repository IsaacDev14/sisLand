"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Rocket, Heart, CheckCircle2, ArrowRight, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-24 relative">
                {/* ────────── HERO SECTION ────────── */}
                <section className="relative px-6 lg:px-8 py-24 lg:py-32 mb-12">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500/20 via-background to-background pointer-events-none" />
                    <div className="mx-auto max-w-5xl text-center relative z-10">
                        <FadeIn>
                            <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-600 dark:text-pink-400 bg-pink-500/10 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full">
                                Est. 2023
                            </Badge>
                            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
                                We Are <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">
                                    Siscom
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Africa's premier sovereign cloud and AI infrastructure provider.
                                We are building the digital backbone for the continent's future 500 million innovators.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* ────────── FOUNDER'S LETTER ────────── */}
                <section className="py-24 bg-secondary/5 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <FadeIn className="relative">
                                {/* Founder Image Card */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-square group">
                                    <Image
                                        src="/images/about/founder.png"
                                        alt="Founder of Siscom"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute bottom-8 left-8 text-white z-10">
                                        <div className="text-3xl font-bold mb-1">Dr. Amara Okoli</div>
                                        <div className="text-pink-400 font-medium tracking-wide uppercase text-sm">Founder & CEO</div>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500/20 blur-3xl rounded-full pointer-events-none" />
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">A Vision for <span className="text-pink-500">Sovereignty</span></h2>
                                        <div className="w-20 h-1 bg-pink-500 rounded-full mb-8" />
                                    </div>

                                    <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                                        <p className="leading-relaxed">
                                            "For too long, Africa's digital destiny has been hosted on servers thousands of miles away.
                                            We realized that for our startups to scale, for our governments to be secure, and for our data to be truly ours—we needed to own the infrastructure."
                                        </p>
                                        <p className="leading-relaxed mt-6">
                                            Siscom was born from a simple yet radical idea: <strong>Africa needs its own cloud.</strong> one that is built close to the user, understands the local context, and performs at a world-class level.
                                        </p>
                                        <p className="leading-relaxed mt-6">
                                            We are not just a tech company; we are a movement. A community of builders proving that the next big thing in tech will be built in Africa, for the world."
                                        </p>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <Button variant="outline" className="gap-2">
                                            Read Our Manifesto <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* ────────── MISSION & VISION ────────── */}
                <section className="py-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Our Driving Force</h2>
                            <p className="text-muted-foreground">The principles that guide every server we rack and every line of code we write.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <FadeIn className="h-full">
                                <div className="relative overflow-hidden rounded-3xl bg-secondary/10 border border-white/5 p-8 h-full hover:bg-secondary/20 transition-colors group">
                                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all" />

                                    <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 border border-pink-500/20 shadow-lg shadow-pink-500/5">
                                        <Target className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        To democratize access to high-performance, sovereign cloud infrastructure for every African developer. We aim to lower the barrier to entry for digital innovation by providing affordable, scalable, and locally compliant computing power.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2} className="h-full">
                                <div className="relative overflow-hidden rounded-3xl bg-secondary/10 border border-white/5 p-8 h-full hover:bg-secondary/20 transition-colors group">
                                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />

                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                                        <Lightbulb className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        A future where Africa is a net exporter of digital services. We envision a continent connected by a robust, self-reliant digital ecosystem that powers global economies and uplifts local communities.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* ────────── WHAT WE DO (DETAILED) ────────── */}
                <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
                    {/* Abstract Background */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-90" />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <FadeIn>
                                <Badge variant="secondary" className="mb-6 bg-pink-600 text-white border-none hover:bg-pink-700">What We Do</Badge>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Building The Backbone</h2>
                                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                    We provide the essential plumbing for the digital economy. From bare metal to serverless AI APIs, our stack is designed for performance and sovereignty.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Sovereign Cloud", desc: "Data residency guaranteed in Kenya, Nigeria, and South Africa." },
                                        { title: "AI Infrastructure", desc: "Access to H100 & A100 GPU clusters for local model training." },
                                        { title: "Edge Connectivity", desc: "Sub-50ms latency across major African metros via direct fiber peering." },
                                        { title: "Developer Ecosystem", desc: "Open-source tools, hackathons, and credits for startups." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="mt-1 bg-pink-500/10 p-2 rounded-lg">
                                                <CheckCircle2 className="w-5 h-5 text-pink-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold">{item.title}</h4>
                                                <p className="text-zinc-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3} className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="aspect-[4/5] rounded-2xl bg-zinc-800 border border-white/5 overflow-hidden relative">
                                            <Image src="/images/nodes/bare-metal.png" alt="Infrastructure" fill className="object-cover opacity-80" />
                                        </div>
                                        <div className="aspect-square rounded-2xl bg-zinc-800 border border-white/5 overflow-hidden relative">
                                            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/10">NBO-1</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="aspect-square rounded-2xl bg-zinc-800 border border-white/5 overflow-hidden relative">
                                            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/10">LOS-1</div>
                                        </div>
                                        <div className="aspect-[4/5] rounded-2xl bg-zinc-800 border border-white/5 overflow-hidden relative">
                                            <Image src="/images/nodes/gpu.png" alt="AI Compute" fill className="object-cover opacity-80" />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* ────────── LIFE AT SISCOM (GALLERY) ────────── */}
                <section className="py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <FadeIn className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 text-pink-500 border-pink-500/20">Community & Culture</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Life at Siscom</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                We are more than just servers. We are a vibrant community of thinkers, creators, and believers in Africa's potential.
                            </p>
                        </FadeIn>

                        <FadeInStagger className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                            {/* Large Featured Image - Span 2 cols */}
                            <FadeIn className="md:col-span-3 lg:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
                                <Image
                                    src="/images/about/event_1.png"
                                    alt="Siscom Town Hall"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                    <div>
                                        <Badge className="mb-2 bg-pink-600 hover:bg-pink-700 border-none">Town Hall</Badge>
                                        <p className="text-white font-bold text-2xl">Building Together</p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Standard Image */}
                            <FadeIn delay={0.1} className="md:col-span-3 lg:col-span-2 relative rounded-3xl overflow-hidden group">
                                <Image
                                    src="/images/about/event_2.png"
                                    alt="Workshop"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                    <div>
                                        <Badge className="mb-2 bg-blue-600 hover:bg-blue-700 border-none">Workshop</Badge>
                                        <p className="text-white font-bold text-lg">Developer Sessions</p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Standard Image */}
                            <FadeIn delay={0.2} className="md:col-span-3 lg:col-span-1 relative rounded-3xl overflow-hidden group">
                                <Image
                                    src="/images/about/event_3.png"
                                    alt="Hackathon"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                    <div>
                                        <Badge className="mb-2 bg-purple-600 hover:bg-purple-700 border-none">Hackathon</Badge>
                                        <p className="text-white font-bold text-lg">Nairobi Leg</p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Standard Image */}
                            <FadeIn delay={0.3} className="md:col-span-3 lg:col-span-1 relative rounded-3xl overflow-hidden group">
                                <Image
                                    src="/images/about/event_4.png"
                                    alt="Signing Ceremony"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                    <div>
                                        <Badge className="mb-2 bg-green-600 hover:bg-green-700 border-none">Partnership</Badge>
                                        <p className="text-white font-bold text-lg">Strategic Alliance</p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* CTA Card */}
                            <FadeIn delay={0.4} className="md:col-span-6 lg:col-span-2 bg-secondary/50 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent group-hover:from-pink-500/20 transition-all" />
                                <Heart className="w-16 h-16 mb-6 text-pink-500 relative z-10" />
                                <h3 className="text-3xl font-bold mb-4 relative z-10">We Are Hiring</h3>
                                <p className="mb-8 text-muted-foreground relative z-10 max-w-sm">Join us in building the digital infrastructure for a continent on the rise.</p>
                                <Button size="lg" className="rounded-full px-8 relative z-10">View Open Roles <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </FadeIn>
                        </FadeInStagger>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}

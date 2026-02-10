"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Twitter, MessageSquare, Terminal } from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30">
            <Navbar />

            <main className="pt-32 pb-24">
                <section className="mx-auto max-w-4xl px-6 lg:px-8 text-center mb-24">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Join the <span className="text-pink-500">Siscom Community</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                            Connect with thousands of developers building the future of African tech.
                            Share projects, get help, and contribute to open source.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Join Discord
                            </Button>
                            <Button size="lg" variant="outline">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </Button>
                        </div>
                    </FadeIn>
                </section>

                <section className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <FadeIn delay={0.2}>
                            <Card className="p-8 bg-card/50 border-input hover:border-pink-500/30 transition-colors h-full">
                                <Terminal className="w-10 h-10 text-pink-500 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Developer Resources</h3>
                                <p className="text-muted-foreground mb-6">
                                    Access comprehensive documentation, API references, and tutorials to help you build and scale your applications on Siscom.
                                </p>
                                <Link href="/docs" className="text-pink-500 font-medium hover:underline">
                                    Read Documentation &rarr;
                                </Link>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <Card className="p-8 bg-card/50 border-input hover:border-pink-500/30 transition-colors h-full">
                                <Twitter className="w-10 h-10 text-sky-500 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Follow Updates</h3>
                                <p className="text-muted-foreground mb-6">
                                    Stay up to date with the latest features, maintenance schedules, and community spotlights on X (formerly Twitter).
                                </p>
                                <Link href="https://twitter.com/siscom" className="text-sky-500 font-medium hover:underline">
                                    Follow @siscom &rarr;
                                </Link>
                            </Card>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

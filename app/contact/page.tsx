"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GridPattern } from "@/components/GridPattern";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                <GridPattern
                    width={100}
                    height={100}
                    className="absolute inset-0 h-full w-full fill-neutral-200/20 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:fill-neutral-800/20"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left Column: Info */}
                        <FadeIn>
                            <h1 className="text-4xl font-bold text-foreground mb-8">Get in Touch</h1>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                Ready to modernize your infrastructure? Our team is ready to discuss your unique challenges and requirements.
                            </p>

                            <div className="space-y-8 mb-16">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0 border border-border">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold mb-1">Visit Us</h3>
                                        <p className="text-muted-foreground">Reliance Center, Woodvale Grove</p>
                                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0 border border-border">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold mb-1">Email</h3>
                                        <a href="mailto:info@siscom.africa" className="text-muted-foreground hover:text-foreground transition-colors">
                                            info@siscom.africa
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0 border border-border">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold mb-1">Phone</h3>
                                        <p className="text-muted-foreground">+254 745 666 660</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right Column: Form */}
                        <FadeIn>
                            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-lg relative">
                                <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">First Name</label>
                                            <input type="text" id="firstName" className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground mb-2">Last Name</label>
                                            <input type="text" id="lastName" className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Work Email</label>
                                        <input type="email" id="email" className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">How can we help?</label>
                                        <textarea id="message" rows={4} className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-foreground text-background font-bold py-3.5 rounded-md hover:opacity-90 transition-opacity">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

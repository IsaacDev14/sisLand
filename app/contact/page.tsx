"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-900">
            <Navbar />

            <main>
                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-6 uppercase tracking-wider shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                                Contact Us
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                                Power Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">Siscom</span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                Ready to deploy sovereign infrastructure, scale your AI workforce, or transform your data stack? Our team is here to help.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== CONTACT FORM & DETAILS ===== */}
                <section className="py-12 bg-white mb-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* Contact Info */}
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                                            <p className="text-slate-600 mb-1">For general inquiries and sales:</p>
                                            <a href="mailto:info@siscom.africa" className="text-pink-600 font-semibold hover:underline">info@siscom.africa</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                                            <p className="text-slate-600 mb-1">Mon-Fri from 8am to 5pm EAT:</p>
                                            <a href="tel:+254700000000" className="text-blue-600 font-semibold hover:underline">+254 700 000 000</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                                            <p className="text-slate-600">Nairobi, Kenya</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Form */}
                            <ScrollReveal delay={0.2} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="Jane" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="jane@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="How can we help you?" />
                                    </div>
                                    <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
                                        Send Message
                                    </button>
                                </form>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

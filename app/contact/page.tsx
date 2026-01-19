"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const plans = [
    {
        name: "Siscom Cloud Starter",
        features: ["1 Node", "2 Core", "4 GB RAM/srv"],
        price: "KES 5,000",
        priceValue: 5000,
        popular: false,
    },
    {
        name: "Siscom Cloud Business",
        features: ["5 Users", "5 Core", "10 GB RAM/srv"],
        price: "KES 15,000",
        priceValue: 15000,
        popular: true,
        badge: "RECOMMENDED"
    },
    {
        name: "Siscom Nodes A100",
        features: ["A100 GPU", "192 vCPU", "600 GB RAM"],
        price: "KES 150",
        priceValue: 150,
        popular: false,
    },
];

export default function ContactPage() {
    const [selectedPlan, setSelectedPlan] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await addDoc(collection(db, 'contact_submissions'), {
                ...formData,
                selectedPlan: plans[selectedPlan].name,
                selectedPlanPrice: plans[selectedPlan].price,
                createdAt: serverTimestamp(),
            });
            setSubmitStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-16">
                {/* Hero */}
                <section className="text-center mb-16 px-6">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Let's Build Something <span className="text-pink-500">Amazing</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Have questions about our enterprise cloud solutions or need a custom quote?
                            Our team is ready to help you attain digital excellence.
                        </p>
                    </FadeIn>
                </section>

                {/* Two Column: Form + Pricing */}
                <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-16">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Contact Form */}
                        <FadeIn>
                            <div className="bg-card rounded-2xl border-2 border-pink-500/30 p-8 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-2">Send us a Message</h2>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-sm">
                                        ✓ Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 text-sm">
                                        ✕ Something went wrong. Please try again.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-muted-foreground mb-1.5">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="John"
                                                required
                                                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-pink-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                placeholder="Doe"
                                                required
                                                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-pink-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">Work Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@company.com"
                                            required
                                            className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-pink-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            placeholder="Your company name"
                                            className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-pink-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">How can we help?</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            placeholder="Tell us about your project needs..."
                                            required
                                            className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Right: Plan Selection */}
                        <FadeIn>
                            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-6">Select Your Plan</h2>

                                <div className="space-y-4 mb-8">
                                    {plans.map((plan, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedPlan(idx)}
                                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === idx
                                                    ? 'border-pink-500 bg-pink-500/5'
                                                    : 'border-border hover:border-muted-foreground/30'
                                                }`}
                                        >
                                            {plan.badge && (
                                                <span className="absolute top-3 right-3 text-[10px] font-bold bg-pink-500 text-white px-2 py-0.5 rounded">
                                                    {plan.badge}
                                                </span>
                                            )}
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === idx ? 'border-pink-500' : 'border-muted-foreground/50'
                                                    }`}>
                                                    {selectedPlan === idx && <div className="w-2 h-2 rounded-full bg-pink-500" />}
                                                </div>
                                                <span className={`font-semibold ${selectedPlan === idx ? 'text-pink-500' : 'text-foreground'}`}>
                                                    {plan.name}
                                                </span>
                                                <span className="ml-auto font-bold text-foreground">{plan.price}</span>
                                            </div>
                                            <div className="flex gap-3 ml-7 text-xs text-muted-foreground">
                                                {plan.features.map((f, i) => (
                                                    <span key={i}>{f}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-border pt-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-muted-foreground">Total Due Today</span>
                                        <span className="text-2xl font-bold text-foreground">{plans[selectedPlan].price}</span>
                                    </div>
                                    <button className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2">
                                        Proceed to Checkout <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Map */}
                <section className="mx-auto max-w-6xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176144890954!2d36.7800!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0Nic0OC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="grayscale"
                            ></iframe>
                        </div>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </div>
    );
}

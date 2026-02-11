"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const gpuTypes = [
    "NVIDIA GB200 NVL72 / HGX B200",
    "NVIDIA HGX H100 / H200",
    "NVIDIA HGX A100",
    "NVIDIA PCIe A100",
    "NVIDIA L40 / L40S",
    "NVIDIA A40",
    "NVIDIA RTX GPUs",
    "MiniCards",
    "Non-GPU Compute"
];

const serviceInterests = [
    "Siscom Nodes (GPU & AI Compute)",
    "Siscom Data (Warehousing & Analytics)",
    "Siscom AI/ML Services",
    "Sovereign Cloud Infrastructure",
    "Siscom DAAS (Data Analytics as a Service)"
];

const timelines = [
    "Immediately",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "Just exploring"
];

const resourceCounts = [
    "1-8 Nodes",
    "9-32 Nodes",
    "33-128 Nodes",
    "128+ Nodes",
    "Custom Requirements"
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        country: '',
        serviceInterest: '',
        resourceCount: '',
        gpuType: [] as string[],
        timeline: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (type: string) => {
        setFormData(prev => {
            const current = [...prev.gpuType];
            if (current.includes(type)) {
                return { ...prev, gpuType: current.filter(t => t !== type) };
            } else {
                return { ...prev, gpuType: [...current, type] };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await addDoc(collection(db, 'contact_submissions'), {
                ...formData,
                createdAt: serverTimestamp(),
            });
            setSubmitStatus('success');
            // Reset form
            setFormData({
                firstName: '', lastName: '', email: '', company: '', jobTitle: '',
                country: '', serviceInterest: '', resourceCount: '', gpuType: [],
                timeline: '', message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="min-h-screen bg-background text-foreground font-sans">
                <Navbar />
                <main className="pt-24 pb-16 flex items-center justify-center px-6">
                    <FadeIn className="max-w-md w-full text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-600">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mb-3">Request Received</h1>
                        <p className="text-muted-foreground mb-6 text-base">
                            Thank you for reaching out. Our team of specialists will review your requirements and get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => setSubmitStatus('idle')}
                            className="text-pink-600 text-sm font-semibold hover:gap-2 flex items-center gap-1 mx-auto transition-all"
                        >
                            Back to Form <ArrowRight className="w-4 h-4" />
                        </button>
                    </FadeIn>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30">
            <Navbar />

            <main className="pt-24 pb-16 relative">
                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <FadeIn className="lg:sticky lg:top-32">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
                                Contact Us
                            </h1>
                            <p className="text-base text-muted-foreground leading-relaxed mb-4">
                                We'd love to better understand your capacity needs and learn how our platform can take your AI-powered innovation to the next level.
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Fill out the form and tell us more about yourself. Our experts are ready to architect the perfect solution for your organization.
                            </p>

                            <div className="mt-8 space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-1">Our Location</h3>
                                    <p className="text-sm text-muted-foreground">Reliance Center, Woodvale</p>
                                    <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-1">Quick Contact</h3>
                                    <p className="text-sm text-muted-foreground">Tech: tech@siscom.tech</p>
                                    <p className="text-sm text-muted-foreground">Investor: investor@siscomcloud.africa</p>
                                    <p className="text-sm text-muted-foreground">Phone: +254 745 666 660</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right Form */}
                        <FadeIn className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 blur-3xl rounded-full -mr-12 -mt-12" />

                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-foreground">First name<span className="text-pink-500">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-foreground">Last name<span className="text-pink-500">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-xs font-medium text-foreground">Company name<span className="text-pink-500">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-xs font-medium text-foreground">Business email<span className="text-pink-500">*</span></label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-foreground">Job title<span className="text-pink-500">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleInputChange}
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-foreground">Country<span className="text-pink-500">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Kenya"
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-xs font-medium text-foreground">I plan to use Siscom for:<span className="text-pink-500">*</span></label>
                                        <div className="relative">
                                            <select
                                                required
                                                name="serviceInterest"
                                                value={formData.serviceInterest}
                                                onChange={handleInputChange}
                                                className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                            >
                                                <option value="">Please Select</option>
                                                {serviceInterests.map(item => (
                                                    <option key={item} value={item}>{item}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                        </div>
                                    </div>

                                    {(formData.serviceInterest.includes("Nodes") || formData.serviceInterest.includes("Cloud")) && (
                                        <>
                                            <div className="space-y-1.5 md:col-span-2">
                                                <label className="text-xs font-medium text-foreground">Expected Number of Nodes/GPUs<span className="text-pink-500">*</span></label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        name="resourceCount"
                                                        value={formData.resourceCount}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                    >
                                                        <option value="">Please Select</option>
                                                        {resourceCounts.map(item => (
                                                            <option key={item} value={item}>{item}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-3 md:col-span-2">
                                                <label className="text-xs font-medium text-foreground block">Types of GPUs Required</label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {gpuTypes.map(type => (
                                                        <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
                                                            <div className="relative flex items-center justify-center">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={formData.gpuType.includes(type)}
                                                                    onChange={() => handleCheckboxChange(type)}
                                                                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-border bg-muted/30 checked:border-pink-500 checked:bg-pink-500 transition-all"
                                                                />
                                                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{type}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-xs font-medium text-foreground">When are you looking to start your project?<span className="text-pink-500">*</span></label>
                                        <div className="relative">
                                            <select
                                                required
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                            >
                                                <option value="">Please Select</option>
                                                {timelines.map(item => (
                                                    <option key={item} value={item}>{item}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-xs font-medium text-foreground">Tell us about your need for high-performance compute/data, and how you plan to use it to advance your business?<span className="text-pink-500">*</span></label>
                                        <textarea
                                            required
                                            rows={3}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none"
                                        />
                                    </div>
                                </FadeInStagger>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-500 transition-all shadow-lg shadow-pink-600/20 disabled:opacity-50 flex items-center justify-center gap-2 group text-sm"
                                    >
                                        {isSubmitting ? 'Architecting Solution...' : 'Submit Request'}
                                        {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                    <p className="text-[10px] text-muted-foreground mt-4 leading-relaxed">
                                        By clicking submit, you agree to allow Siscom Africa to store and process the personal information submitted above to provide you the content requested. See our <Link href="#" className="text-pink-600 hover:underline">Privacy Policy</Link> for details.
                                    </p>
                                </div>
                            </form>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

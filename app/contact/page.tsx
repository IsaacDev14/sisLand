"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ArrowRight, CheckCircle2, ChevronDown, MapPin, Mail, Phone } from "lucide-react";


const serviceInterests = [
    "GPU Reservation",
    "Infrastructure Offerings",
    "Other"
];

const timelines = [
    "Immediately",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "Just exploring"
];

const primaryUseCasesList = [
    "AI Model Training",
    "LLM Development",
    "AI Deployment / Inference",
    "Research & Simulation",
    "E-Government Systems",
    "Data Processing",
    "Computer Vision",
    "Fintech AI",
    "Healthcare AI",
    "Other"
];

const networkingRequirementsList = [
    "Private Network",
    "VPN Access",
    "Dedicated Bandwidth",
    "Hybrid Cloud Integration"
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        // Standard flow fields
        fullName: '',
        company: '',
        organizationType: '',
        email: '',
        phone: '',
        serviceInterest: '',
        timeline: '',
        message: '',

        // GPU Reservation specific fields
        gpuConfiguration: '',
        gpuCount: '',
        allocationType: '',
        primaryUseCases: [] as string[],
        intendedWorkload: '',
        budgetRange: '',
        deploymentTimeline: '',
        dataResidency: '',
        preferredDataRegion: '',
        storageRequirement: '',
        networkingRequirements: [] as string[],
        confirmLegitimate: false,
        confirmContact: false
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const intent = searchParams.get('intent');

        if (intent === 'gpu_reservation') {
            setFormData(prev => ({ ...prev, serviceInterest: 'GPU Reservation' }));
        } else if (intent === 'Infrastructure Offerings') {
            const plan = searchParams.get('plan');
            const price = searchParams.get('price');
            const cpu = searchParams.get('cpu');
            const ram = searchParams.get('ram');
            const storage = searchParams.get('storage');

            let message = '';
            if (plan) {
                message = `I am interested in deploying the following infrastructure plan:
                
Plan: ${plan}
Price: ${price || 'N/A'}
vCPU: ${cpu || 'N/A'}
RAM: ${ram || 'N/A'}
Storage: ${storage || 'N/A'}

Please contact me with further details or setup instructions.`;
            }

            setFormData(prev => ({
                ...prev,
                serviceInterest: 'Infrastructure Offerings',
                ...(message ? { message } : {})
            }));
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleArrayCheckboxChange = (field: 'primaryUseCases' | 'networkingRequirements', value: string) => {
        setFormData(prev => {
            const current = [...prev[field]];
            if (current.includes(value)) {
                return { ...prev, [field]: current.filter((t: string) => t !== value) };
            } else {
                return { ...prev, [field]: [...current, value] };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            console.log("CLIENT: Starting submission...");
            // Setup timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

            // Send email via API Route
            console.log("CLIENT: Sending fetch request to /api/contact");
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                signal: controller.signal
            });
            console.log("CLIENT: Fetch response received", response.status);

            clearTimeout(timeoutId);

            const result = await response.json();
            console.log("CLIENT: Parse JSON result", result);

            if (result.success) {
                setSubmitStatus('success');

                // Also save to Firestore for redundancy (non-blocking)
                addDoc(collection(db, 'contact_submissions'), {
                    ...formData,
                    createdAt: serverTimestamp(),
                }).catch(err => console.error("Firestore backup failed:", err));

                // Reset form
                setFormData({
                    fullName: '', email: '', phone: '', company: '', organizationType: '',
                    serviceInterest: '', timeline: '', message: '',
                    gpuConfiguration: '', gpuCount: '',
                    allocationType: '', primaryUseCases: [], intendedWorkload: '', budgetRange: '',
                    deploymentTimeline: '', dataResidency: '', preferredDataRegion: '',
                    storageRequirement: '', networkingRequirements: [], confirmLegitimate: false, confirmContact: false
                });
            } else {
                alert(`Error: ${JSON.stringify(result.error)}`);
                throw new Error('Failed to send email');
            }
        } catch (error: any) {
            if (error.name === 'AbortError') {
                alert("Request timed out. The server might still be processing your request.");
            } else {
                console.error('Error submitting form:', error);
            }
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

    const isGpuReservation = formData.serviceInterest === 'GPU Reservation';

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30">
            <Navbar />

            <main className="pt-24 pb-16 relative">
                <section className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <FadeIn className="lg:sticky lg:top-32">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
                                {isGpuReservation ? "GPU Reservation – Available Today" : "Contact Us"}
                            </h1>
                            {isGpuReservation ? (
                                <>
                                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                                        Reserve Available GPUs (NVIDIA H200 – Available Today)
                                    </p>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Secure priority access to currently available NVIDIA H200 GPU infrastructure for AI training, research, and production deployments.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                                        We'd love to better understand your capacity needs and learn how our platform can take your AI-powered innovation to the next level.
                                    </p>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Fill out the form and tell us more about yourself. Our experts are ready to architect the perfect solution for your organization.
                                    </p>
                                </>
                            )}

                            <div className="mt-8 space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-1">Our Location</h3>
                                    <p className="text-sm text-muted-foreground">Reliance Center, Floor 2, Woodvale</p>
                                    <p className="text-sm text-muted-foreground">Westlands, Nairobi, Kenya</p>
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
                        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 blur-3xl rounded-full -mr-12 -mt-12" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-sm font-bold text-foreground">I plan to use Siscom for:<span className="text-pink-500">*</span></label>
                                    <div className="relative">
                                        <select
                                            required
                                            name="serviceInterest"
                                            value={formData.serviceInterest}
                                            onChange={handleInputChange}
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                        >
                                            <option value="">Please Select</option>
                                            {serviceInterests.map(item => (
                                                <option key={item} value={item}>{item}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>

                                {isGpuReservation ? (
                                    <div className="space-y-8 mt-6">
                                        {/* SECTION 1: Applicant Information */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Section 1: Applicant Information</h2>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">1. Full Name<span className="text-pink-500">*</span></label>
                                                <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">2. Company / Organization Name<span className="text-pink-500">*</span></label>
                                                <input required type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">3. Email Address<span className="text-pink-500">*</span></label>
                                                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">4. Phone Number <span className="text-muted-foreground font-normal">(Optional)</span></label>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">5. Organization Type<span className="text-pink-500">*</span></label>
                                                <div className="relative">
                                                    <select required name="organizationType" value={formData.organizationType} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none">
                                                        <option value="">Please Select</option>
                                                        {["AI Startup", "Enterprise", "Research Institution", "Government", "Cloud Provider", "Other"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* SECTION 2: GPU Requirements */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Section 2: GPU Requirements</h2>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">6. Which GPU configuration are you reserving?<span className="text-pink-500">*</span></label>
                                                <div className="relative">
                                                    <select required name="gpuConfiguration" value={formData.gpuConfiguration} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none">
                                                        <option value="">Please Select</option>
                                                        {["NVIDIA H200 (Single GPU) – Available Today", "8× NVIDIA H200 Multi-GPU Node – Available Today"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">7. How many GPUs do you require?<span className="text-pink-500">*</span></label>
                                                <input required type="number" min="1" name="gpuCount" value={formData.gpuCount} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">8. Preferred Allocation Type<span className="text-pink-500">*</span></label>
                                                <div className="relative">
                                                    <select required name="allocationType" value={formData.allocationType} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none">
                                                        <option value="">Please Select</option>
                                                        {["Dedicated Hardware Allocation", "Shared Cluster Access", "Long-Term Lease (12+ months)", "Short-Term Project (Under 6 months)"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* SECTION 3: Intended Use */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Section 3: Intended Use</h2>

                                            <div className="space-y-2">
                                                <label className="text-xs font-semibold text-foreground block">9. Primary Use Case (select all that apply)<span className="text-pink-500">*</span></label>
                                                <div className="space-y-2.5">
                                                    {primaryUseCasesList.map(type => (
                                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                                            <div className="relative flex items-center justify-center">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={formData.primaryUseCases.includes(type)}
                                                                    onChange={() => handleArrayCheckboxChange('primaryUseCases', type)}
                                                                    className="peer h-4.5 w-4.5 cursor-pointer appearance-none rounded border border-border bg-muted/30 checked:border-pink-500 checked:bg-pink-500 transition-all shadow-sm"
                                                                />
                                                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{type}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                {formData.primaryUseCases.length === 0 && <span className="text-xs text-red-500">Please select at least one use case.</span>}
                                            </div>

                                            <div className="space-y-1.5 mt-4">
                                                <label className="text-xs font-semibold text-foreground">10. Briefly describe your intended workload<span className="text-pink-500">*</span></label>
                                                <textarea required rows={3} name="intendedWorkload" value={formData.intendedWorkload} onChange={handleInputChange} placeholder="e.g., model size, expected training time, deployment scale, or compute intensity." className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none" />
                                            </div>
                                        </div>

                                        {/* SECTION 4: Budget & Timeline */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Section 4: Budget & Timeline</h2>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">11. Estimated Budget Range<span className="text-pink-500">*</span></label>
                                                <div className="relative">
                                                    <select required name="budgetRange" value={formData.budgetRange} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none">
                                                        <option value="">Please Select</option>
                                                        {["$10,000 – $50,000", "$50,000 – $100,000", "$100,000 – $250,000", "$250,000 – $500,000", "$500,000+"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">12. When do you require deployment?<span className="text-pink-500">*</span></label>
                                                <div className="relative">
                                                    <select required name="deploymentTimeline" value={formData.deploymentTimeline} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none">
                                                        <option value="">Please Select</option>
                                                        {["Immediate (Within 2 Weeks)", "1–2 Months", "3–6 Months", "Flexible"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* SECTION 5: Infrastructure Requirements */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Section 5: Infrastructure Requirements</h2>

                                            <div className="space-y-2">
                                                <label className="text-xs font-semibold text-foreground block">13. Do you have data residency requirements?<span className="text-pink-500">*</span></label>
                                                <div className="flex gap-4">
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input type="radio" name="dataResidency" value="Yes" checked={formData.dataResidency === 'Yes'} onChange={handleInputChange} className="h-4 w-4 bg-muted/30 border-border text-pink-500 focus:ring-pink-500" required />
                                                        <span className="text-sm text-foreground">Yes</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input type="radio" name="dataResidency" value="No" checked={formData.dataResidency === 'No'} onChange={handleInputChange} className="h-4 w-4 bg-muted/30 border-border text-pink-500 focus:ring-pink-500" required />
                                                        <span className="text-sm text-foreground">No</span>
                                                    </label>
                                                </div>
                                            </div>

                                            {formData.dataResidency === 'Yes' && (
                                                <div className="space-y-1.5 pl-4 border-l-2 border-pink-500/30">
                                                    <label className="text-xs font-semibold text-foreground">13a. Preferred Data Region<span className="text-pink-500">*</span></label>
                                                    <div className="relative">
                                                        <select required name="preferredDataRegion" value={formData.preferredDataRegion} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none">
                                                            <option value="">Please Select</option>
                                                            {["Africa", "Europe", "Middle East", "Flexible"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                        </select>
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="space-y-1.5 pt-2">
                                                <label className="text-xs font-semibold text-foreground">14. Estimated Storage Requirement <span className="text-muted-foreground font-normal">(Optional)</span></label>
                                                <div className="relative">
                                                    <select name="storageRequirement" value={formData.storageRequirement} onChange={handleInputChange} className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none">
                                                        <option value="">Please Select</option>
                                                        {["Less than 10TB", "10–50TB", "50–100TB", "100TB+"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-2 pt-2">
                                                <label className="text-xs font-semibold text-foreground block">15. Networking Requirements <span className="text-muted-foreground font-normal">(Optional)</span></label>
                                                <div className="space-y-2.5">
                                                    {networkingRequirementsList.map(type => (
                                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                                            <div className="relative flex items-center justify-center">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={formData.networkingRequirements.includes(type)}
                                                                    onChange={() => handleArrayCheckboxChange('networkingRequirements', type)}
                                                                    className="peer h-4.5 w-4.5 cursor-pointer appearance-none rounded border border-border bg-muted/30 checked:border-pink-500 checked:bg-pink-500 transition-all shadow-sm"
                                                                />
                                                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{type}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* SECTION 6: Confirmation */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Section 6: Confirmation</h2>

                                            <div className="space-y-4">
                                                <label className="flex items-start gap-3 cursor-pointer group">
                                                    <div className="relative flex items-center justify-center mt-0.5">
                                                        <input required type="checkbox" name="confirmLegitimate" checked={formData.confirmLegitimate} onChange={handleInputChange} className="peer h-4.5 w-4.5 cursor-pointer appearance-none rounded border border-border bg-muted/30 checked:border-pink-500 checked:bg-pink-500 transition-all shadow-sm" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                        </span>
                                                    </div>
                                                    <span className="text-sm font-semibold text-foreground group-hover:text-pink-500 transition-colors">16. I confirm this request is for legitimate AI and compute purposes.<span className="text-pink-500">*</span></span>
                                                </label>

                                                <label className="flex items-start gap-3 cursor-pointer group">
                                                    <div className="relative flex items-center justify-center mt-0.5">
                                                        <input required type="checkbox" name="confirmContact" checked={formData.confirmContact} onChange={handleInputChange} className="peer h-4.5 w-4.5 cursor-pointer appearance-none rounded border border-border bg-muted/30 checked:border-pink-500 checked:bg-pink-500 transition-all shadow-sm" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                        </span>
                                                    </div>
                                                    <span className="text-sm font-semibold text-foreground group-hover:text-pink-500 transition-colors">17. I agree to be contacted regarding GPU allocation and enterprise compute services.<span className="text-pink-500">*</span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Standard Flow Form Elements - Personal Information */}
                                        <div className="space-y-1.5 md:col-span-2">
                                            <label className="text-xs font-medium text-foreground">1. Full Name<span className="text-pink-500">*</span></label>
                                            <input
                                                required
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5 md:col-span-2">
                                            <label className="text-xs font-medium text-foreground">2. Company / Organization Name<span className="text-pink-500">*</span></label>
                                            <input
                                                required
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-foreground">3. Email Address<span className="text-pink-500">*</span></label>
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
                                            <label className="text-xs font-medium text-foreground">4. Phone Number <span className="text-muted-foreground font-normal">(Optional)</span></label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="e.g. +254 712 345 678"
                                                className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5 md:col-span-2">
                                            <label className="text-xs font-medium text-foreground">5. Organization Type<span className="text-pink-500">*</span></label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    name="organizationType"
                                                    value={formData.organizationType}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                >
                                                    <option value="">Please Select</option>
                                                    {["AI Startup", "Enterprise", "Research Institution", "Government", "Cloud Provider", "Other"].map(opt => (
                                                        <option key={opt} value={opt}>{opt}</option>
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
                                    </div>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || (isGpuReservation && formData.primaryUseCases.length === 0)}
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
                        </div>
                    </div>
                </section>

                {/* Map & Address Section */}
                < section className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 relative z-10" >
                    <FadeIn>
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-bold text-foreground mb-2">Visit Our Office</h2>
                            <p className="text-sm text-muted-foreground">We're located in the heart of Nairobi's business district.</p>
                        </div>

                        {/* Map Container with Overlaid Card */}
                        <div className="relative rounded-xl overflow-hidden border border-border shadow-sm">
                            {/* Full-width Google Map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819542367738!2d36.77890261475392!3d-1.2636093990384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17399073da9d%3A0x8d63e08e7b0e4f13!2sReliance%20Center!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Siscom Africa Office - Reliance Center, Westlands, Nairobi"
                            />

                            {/* Floating Address Card */}
                            <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-5 shadow-lg max-w-xs">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-9 h-9 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-foreground">Siscom Africa Headquarters</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                                            Reliance Center, Floor 2<br />
                                            Woodvale, Westlands<br />
                                            Nairobi, Kenya
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.google.com/maps/dir//Reliance+Center,+Woodvale+Groove,+Nairobi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors mt-1"
                                >
                                    Get Directions <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </div>
    );
}

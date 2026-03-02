"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/* ─── Data ─── */
const stats = [
    { value: "99.98%", label: "Guaranteed Uptime" },
    { value: "$100", label: "Starting per 1U" },
    { value: "Tier 3", label: "Certified Facilities" },
    { value: "30+", label: "Connected Carriers" },
];

const benefits = [
    {
        title: "Tier 3 Standards",
        description:
            "99.98% Uptime. Concurrently maintainable infrastructure means your servers never go dark, even during maintenance.",
    },
    {
        title: "Full Connectivity",
        description:
            "Direct cross-connects to ISPs, Fiber providers, and the Nairobi-IX for ultra-low latency.",
    },
    {
        title: "Zero CAPEX",
        description:
            "No need to build expensive server rooms. Pay a predictable monthly fee starting at $100/1U.",
    },
    {
        title: "Power Security",
        description:
            "N+1 redundant generators and 2N UPS systems. We stay on when the grid goes off.",
    },
    {
        title: "Sovereign AI Ready",
        description:
            "High-density cooling capable of supporting GPU-heavy workloads and private AI clouds.",
    },
];

const packageSteps = [
    { num: "01", label: "Space", detail: "Secure 1U rack slot in a shared or private cage." },
    { num: "02", label: "Power", detail: "Stable AC/DC power with metered options." },
    { num: "03", label: "Network", detail: "1Gbps / 10Gbps burstable ports." },
    { num: "04", label: "Security", detail: "Biometrics, CCTV, 24/7 Guards." },
    { num: "05", label: "Remote Hands", detail: "On-site support for reboots & swaps." },
];

const locationGroups = [
    { label: "Nairobi, Kenya", locations: ["IX Africa Data Center", "PAIX Data Center"] },
    { label: "Naivasha, Kenya", locations: ["Navon Modular DC"] },
];
const otherRegions = ["Dar es Salaam", "Kampala", "Cape Town", "Lagos"];

const rackOptions = ["1U - 5U", "Quarter Rack", "Full Rack / Cage"];
const locationOptions = ["iXAfrica", "PAIX", "No Preference"];
const workloadOptions = ["General IT", "AI/HPC", "Fintech/Banking", "ISP/Network"];

/* ─── Animation helpers ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1 },
    }),
};

export default function ColocationPage() {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [toast, setToast] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        rackSpace: "",
        preferredLocation: "",
        powerRequirement: "",
        workloadNature: "",
        phone: "",
        selectedColocationRegion: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region);
        setFormData((prev) => ({ ...prev, selectedColocationRegion: region }));
        setToast(region);
        setTimeout(() => setToast(null), 2500);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    serviceInterest: "Colocation",
                    formSource: "colocation-page",
                }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);
            const result = await response.json();

            if (result.success) {
                setSubmitStatus("success");
                addDoc(collection(db, "contact_submissions"), {
                    ...formData,
                    serviceInterest: "Colocation",
                    formSource: "colocation-page",
                    createdAt: serverTimestamp(),
                }).catch((err) => console.error("Firestore backup failed:", err));

                setFormData({
                    fullName: "",
                    rackSpace: "",
                    preferredLocation: "",
                    powerRequirement: "",
                    workloadNature: "",
                    phone: "",
                    selectedColocationRegion: "",
                });
                setSelectedRegion(null);
            } else {
                throw new Error("Failed to submit");
            }
        } catch (error: any) {
            if (error.name === "AbortError") alert("Request timed out. Please try again.");
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            {/* ── Toast notification ── */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-50"
                    >
                        <div className="flex items-center gap-2 bg-card border border-pink-600/30 shadow-lg rounded-full px-5 py-2.5">
                            <CheckCircle2 className="w-4 h-4 text-pink-600" />
                            <span className="text-sm font-medium text-foreground">
                                <span className="font-bold text-pink-600">{toast}</span> selected — scroll down to complete the form
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="relative">

                {/* ═══════════════════ HERO ═══════════════════ */}
                <section className="pt-32 pb-20 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-3xl"
                        >


                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 leading-[1.05]">
                                Colocation as a Service:{" "}
                                <span className="text-pink-600">
                                    Scale Locally, Reach Globally
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                                Stop managing server rooms and start scaling your business.
                                Enterprise-grade rack space from{" "}
                                <span className="text-foreground font-semibold">$100 per 1U</span>{" "}
                                in Nairobi&apos;s premier Tier 3 data centers.
                            </p>


                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════ STATS BAR ═══════════════════ */}
                <section className="py-12 border-y border-border bg-secondary/50 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={idx}
                                    variants={fadeUp}
                                    className="text-center"
                                >
                                    <div className="text-3xl sm:text-4xl font-black text-foreground mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════ DATA CENTER PARTNERS ═══════════════════ */}
                <section className="py-24 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">
                                Our Partners
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                East Africa&apos;s Most Connected Buildings
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    num: "01",
                                    title: "iXAfrica (Nairobi One)",
                                    desc: "The region's largest hyperscale, AI-ready campus. Ideal for high-density workloads and cloud on-ramps.",
                                },
                                {
                                    num: "02",
                                    title: "PAIX (Nairobi-1)",
                                    desc: "Located in the heart of Upper Hill. The most interconnected hub with access to 30+ carriers and the Kenya Internet Exchange (KIXP).",
                                },
                            ].map((partner, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={idx}
                                    variants={fadeUp}
                                    className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-lg bg-pink-600/10 text-pink-600 flex items-center justify-center font-bold text-sm">
                                            {partner.num}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {partner.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {partner.desc}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-sm font-medium">Learn More</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════ BENEFITS ═══════════════════ */}
                <section className="py-24 relative z-10 bg-secondary/50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">
                                Why Siscom
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                Everything you need, nothing you don&apos;t
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {benefits.map((b, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={idx}
                                    variants={fadeUp}
                                    className={`group relative p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 ${idx === 0 ? "md:col-span-2" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-9 h-9 rounded-lg bg-pink-600 flex items-center justify-center text-white font-bold text-sm">
                                            {String(idx + 1).padStart(2, "0")}
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground">
                                            {b.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {b.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════ 1U PACKAGE — TABLE ═══════════════════ */}
                <section className="py-24 relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">
                                What&apos;s Included
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                The &ldquo;Plug &amp; Play&rdquo; 1U Package
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                                Every 1U allocation comes fully kitted with everything you need to go live.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="overflow-hidden rounded-2xl border border-border bg-card"
                        >
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-secondary/80">
                                        <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-muted-foreground">#</th>
                                        <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Included</th>
                                        <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {packageSteps.map((step, idx) => (
                                        <tr
                                            key={idx}
                                            className={`border-t border-border transition-colors hover:bg-secondary/40 ${idx % 2 === 0 ? "bg-card" : "bg-secondary/20"}`}
                                        >
                                            <td className="px-6 py-4 text-sm font-bold text-pink-600">{step.num}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-foreground">{step.label}</td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground">{step.detail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════ LOCATION + QUOTE FORM ═══════════════════ */}
                <section id="quote" className="py-24 relative z-10 bg-secondary/50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Section header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >

                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mt-3">
                                Choose Your Location &amp; Get a Quote
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                                Select your preferred data center and fill in the details. Our
                                infrastructure team will reach out within 2 hours.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

                            {/* ── Left Column: Location Selection ── */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={1}
                                variants={fadeUp}
                                className="lg:col-span-2 space-y-6"
                            >
                                {/* Kenyan locations */}
                                {locationGroups.map((group) => (
                                    <div key={group.label}>
                                        <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                                            {group.label}
                                        </h3>
                                        <div className="space-y-2">
                                            {group.locations.map((loc) => (
                                                <button
                                                    key={loc}
                                                    type="button"
                                                    onClick={() => handleRegionSelect(loc)}
                                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-sm font-medium transition-all duration-200 ${selectedRegion === loc
                                                        ? "bg-pink-600/5 border-pink-600 text-pink-600 ring-1 ring-pink-600/20"
                                                        : "bg-card border-border text-foreground hover:border-pink-500/40"
                                                        }`}
                                                >
                                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedRegion === loc
                                                        ? "border-pink-600 bg-pink-600"
                                                        : "border-muted-foreground/40"
                                                        }`}>
                                                        {selectedRegion === loc && (
                                                            <CheckCircle2 className="w-3 h-3 text-white" />
                                                        )}
                                                    </div>
                                                    {loc}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Other regions */}
                                <div>
                                    <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                                        Other Regions
                                    </h3>
                                    <div className="space-y-2">
                                        {otherRegions.map((loc) => (
                                            <button
                                                key={loc}
                                                type="button"
                                                onClick={() => handleRegionSelect(loc)}
                                                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-sm font-medium transition-all duration-200 ${selectedRegion === loc
                                                    ? "bg-pink-600/5 border-pink-600 text-pink-600 ring-1 ring-pink-600/20"
                                                    : "bg-card border-border text-foreground hover:border-pink-500/40"
                                                    }`}
                                            >
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedRegion === loc
                                                    ? "border-pink-600 bg-pink-600"
                                                    : "border-muted-foreground/40"
                                                    }`}>
                                                    {selectedRegion === loc && (
                                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                                    )}
                                                </div>
                                                {loc}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* ── Right Column: Quote Form ── */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={2}
                                variants={fadeUp}
                                className="lg:col-span-3 lg:sticky lg:top-28"
                            >
                                <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm">
                                    {submitStatus === "success" ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-pink-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-8 h-8 text-pink-600" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-foreground">
                                                Quote Request Received
                                            </h3>
                                            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                                                Our infrastructure team will reach out within 2 hours.
                                            </p>
                                            <button
                                                onClick={() => setSubmitStatus("idle")}
                                                className="text-pink-600 text-sm font-semibold flex items-center gap-1 mx-auto hover:gap-2 transition-all"
                                            >
                                                Submit Another Request <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                                                Get a Colocation Quote
                                            </h2>
                                            <p className="text-sm text-muted-foreground mb-8">
                                                Fill in the details and we&apos;ll get back to you fast.
                                            </p>

                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                {/* Full Name / Company */}
                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-semibold text-foreground">
                                                        Full Name / Company Name
                                                        <span className="text-pink-500"> *</span>
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        placeholder="e.g. John Doe / Acme Corp"
                                                        className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-muted-foreground/50"
                                                    />
                                                </div>

                                                {/* Rack Space + Location */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-semibold text-foreground">
                                                            Estimated Rack Space
                                                            <span className="text-pink-500"> *</span>
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                required
                                                                name="rackSpace"
                                                                value={formData.rackSpace}
                                                                onChange={handleInputChange}
                                                                className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                            >
                                                                <option value="">Select</option>
                                                                {rackOptions.map((o) => (
                                                                    <option key={o} value={o}>{o}</option>
                                                                ))}
                                                            </select>
                                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-semibold text-foreground">
                                                            Preferred Location
                                                            <span className="text-pink-500"> *</span>
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                required
                                                                name="preferredLocation"
                                                                value={formData.preferredLocation}
                                                                onChange={handleInputChange}
                                                                className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                            >
                                                                <option value="">Select</option>
                                                                {locationOptions.map((o) => (
                                                                    <option key={o} value={o}>{o}</option>
                                                                ))}
                                                            </select>
                                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Power + Workload */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-semibold text-foreground">
                                                            Power Requirement (kW)
                                                            <span className="text-pink-500"> *</span>
                                                        </label>
                                                        <input
                                                            required
                                                            type="number"
                                                            min="0"
                                                            step="0.1"
                                                            name="powerRequirement"
                                                            value={formData.powerRequirement}
                                                            onChange={handleInputChange}
                                                            placeholder="e.g. 2.5"
                                                            className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-muted-foreground/50"
                                                        />
                                                    </div>

                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-semibold text-foreground">
                                                            Nature of Workload
                                                            <span className="text-pink-500"> *</span>
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                required
                                                                name="workloadNature"
                                                                value={formData.workloadNature}
                                                                onChange={handleInputChange}
                                                                className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                            >
                                                                <option value="">Select</option>
                                                                {workloadOptions.map((o) => (
                                                                    <option key={o} value={o}>{o}</option>
                                                                ))}
                                                            </select>
                                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Phone */}
                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-semibold text-foreground">
                                                        Phone Number
                                                        <span className="text-pink-500"> *</span>
                                                    </label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="e.g. +254 712 345 678"
                                                        className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-muted-foreground/50"
                                                    />
                                                </div>

                                                {/* Selected region */}
                                                {selectedRegion && (
                                                    <div className="bg-pink-600/5 border border-pink-600/20 rounded-lg px-4 py-2.5">
                                                        <p className="text-sm text-foreground">
                                                            Selected region:{" "}
                                                            <span className="font-semibold text-pink-600">
                                                                {selectedRegion}
                                                            </span>
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Submit */}
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-pink-600 text-white font-bold py-3.5 rounded-full hover:bg-pink-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group text-sm tracking-wide"
                                                >
                                                    {isSubmitting ? "Submitting..." : "COLOCATE WITH SISCOM"}
                                                    {!isSubmitting && (
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    )}
                                                </button>

                                                {submitStatus === "error" && (
                                                    <p className="text-sm text-red-500 text-center">
                                                        Something went wrong. Please try again.
                                                    </p>
                                                )}
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

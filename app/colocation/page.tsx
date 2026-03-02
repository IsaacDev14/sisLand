"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

/* ─── Location data ─── */
const locationGroups = [
    {
        label: "Colocate in Nairobi, Kenya",
        locations: ["IX Africa Data Center", "PAIX Data Center"],
    },
    {
        label: "Colocate in Naivasha, Kenya",
        locations: ["Navon Modular DC"],
    },
];

const otherRegions = [
    "Dar es Salaam, Tanzania",
    "Kampala, Uganda",
    "Cape Town, South Africa",
    "Lagos, Nigeria",
];

/* ─── Benefits data ─── */
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

/* ─── 1U Package items ─── */
const packageItems = [
    { label: "Space", detail: "Secure 1U rack slot in a shared or private cage." },
    { label: "Power", detail: "Stable AC/DC power with metered options." },
    { label: "Network", detail: "1Gbps / 10Gbps burstable ports." },
    { label: "Security", detail: "5 layers of physical security (Biometrics, CCTV, 24/7 Guards)." },
    { label: "Remote Hands", detail: "On-site technical support for reboots and hardware swaps." },
];

/* ─── Form select options ─── */
const rackOptions = ["1U - 5U", "Quarter Rack", "Full Rack / Cage"];
const locationOptions = ["iXAfrica", "PAIX", "No Preference"];
const workloadOptions = ["General IT", "AI/HPC", "Fintech/Banking", "ISP/Network"];

export default function ColocationPage() {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const [formData, setFormData] = useState({
        fullName: "",
        rackSpace: "",
        preferredLocation: "",
        powerRequirement: "",
        workloadNature: "",
        phone: "",
        selectedColocationRegion: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region);
        setFormData((prev) => ({ ...prev, selectedColocationRegion: region }));
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
                }).catch((err) =>
                    console.error("Firestore backup failed:", err)
                );

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
            if (error.name === "AbortError") {
                alert("Request timed out. Please try again.");
            }
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30 overflow-hidden">
            <Navbar />

            <main className="pt-32 pb-24 relative">

                {/* ════════════════════ HERO ════════════════════ */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="text-pink-500 font-medium mb-4 block tracking-wide uppercase text-sm">
                                Colocation
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                                Colocation as a Service (CaaS):{" "}
                                <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                                    Scale Locally, Reach Globally
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl font-semibold text-foreground/90 mb-4">
                                Enterprise-Grade Rack Space from{" "}
                                <span className="text-pink-500">$100</span> per
                                1U
                            </p>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                Stop managing server rooms and start scaling
                                your business. Siscom provides fully kitted,
                                high-availability rack space in Nairobi&apos;s
                                premier Tier 3 data centers. Get the power,
                                cooling, and security of a global giant at a
                                price built for Kenyan enterprises.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* ════════════════════ DATA CENTER PARTNERS ════════════════════ */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
                    <FadeIn>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                            Our Data Center Partners
                        </h2>
                        <p className="text-muted-foreground mb-10 max-w-2xl text-base">
                            We colocate your mission-critical hardware in the
                            most &ldquo;Connected&rdquo; buildings in East
                            Africa.
                        </p>
                    </FadeIn>

                    <FadeInStagger className="grid md:grid-cols-2 gap-6">
                        {/* iXAfrica Card */}
                        <FadeIn className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-pink-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-foreground mb-3">
                                    iXAfrica (Nairobi One)
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    The region&apos;s largest hyperscale,
                                    AI-ready campus. Ideal for high-density
                                    workloads and cloud on-ramps.
                                </p>
                            </div>
                        </FadeIn>

                        {/* PAIX Card */}
                        <FadeIn className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-pink-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-foreground mb-3">
                                    PAIX (Nairobi-1)
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Located in the heart of Upper Hill. The most
                                    interconnected hub with access to 30+
                                    carriers and the Kenya Internet Exchange
                                    (KIXP).
                                </p>
                            </div>
                        </FadeIn>
                    </FadeInStagger>

                    <FadeIn>
                        <div className="mt-8 bg-muted/40 border border-border rounded-xl px-5 py-4">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">
                                    30+ carriers
                                </span>{" "}
                                and the{" "}
                                <span className="font-semibold text-foreground">
                                    Kenya Internet Exchange (KIXP)
                                </span>{" "}
                                accessible from both facilities.
                            </p>
                        </div>
                    </FadeIn>
                </section>

                {/* ════════════════════ BENEFITS ════════════════════ */}
                <section className="border-t border-border bg-muted/30 py-24 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <FadeIn>
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                                Why Colocate with Siscom?
                            </h2>
                            <p className="text-muted-foreground mb-12 max-w-xl text-base">
                                Enterprise infrastructure without the
                                enterprise build-out.
                            </p>
                        </FadeIn>

                        <FadeInStagger className="space-y-4">
                            {benefits.map((b) => (
                                <FadeIn
                                    key={b.title}
                                    className="group rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-pink-500/40 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <h3 className="text-base font-bold text-foreground mb-1.5">
                                        {b.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {b.description}
                                    </p>
                                </FadeIn>
                            ))}
                        </FadeInStagger>
                    </div>
                </section>

                {/* ════════════════════ 1U PACKAGE ════════════════════ */}
                <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 relative z-10">
                    <FadeIn>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                            The &ldquo;Plug &amp; Play&rdquo; 1U Package
                        </h2>
                        <p className="text-muted-foreground mb-10 max-w-lg">
                            Every 1U allocation comes fully kitted:
                        </p>
                    </FadeIn>

                    <FadeInStagger className="space-y-3">
                        {packageItems.map((item) => (
                            <FadeIn
                                key={item.label}
                                className="flex items-baseline gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-pink-500/30 transition-all"
                            >
                                <span className="text-sm font-bold text-pink-500 min-w-[100px] shrink-0">
                                    {item.label}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    {item.detail}
                                </span>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </section>

                {/* ════════════════════ LOCATION BUTTONS + FORM ════════════════════ */}
                <section className="border-t border-border bg-muted/30 py-24 relative overflow-hidden">
                    <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
                        {/* Location Selector */}
                        <FadeIn>
                            <div className="mb-16">
                                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">
                                    Choose Your Location
                                </h2>
                                <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">
                                    Select where you&apos;d like to colocate
                                    your infrastructure.
                                </p>

                                <div className="space-y-6">
                                    {locationGroups.map((group) => (
                                        <div key={group.label}>
                                            <h3 className="text-sm font-semibold text-foreground mb-3">
                                                {group.label}
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {group.locations.map((loc) => (
                                                    <button
                                                        key={loc}
                                                        type="button"
                                                        onClick={() =>
                                                            handleRegionSelect(
                                                                loc
                                                            )
                                                        }
                                                        className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${selectedRegion ===
                                                                loc
                                                                ? "bg-pink-600 text-white border-pink-600 shadow-lg shadow-pink-600/20"
                                                                : "bg-card border-border text-foreground hover:border-pink-500/50 hover:bg-pink-500/5"
                                                            }`}
                                                    >
                                                        {loc}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Other Regions */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-3">
                                            Other Regions
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {otherRegions.map((loc) => (
                                                <button
                                                    key={loc}
                                                    type="button"
                                                    onClick={() =>
                                                        handleRegionSelect(loc)
                                                    }
                                                    className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${selectedRegion === loc
                                                            ? "bg-pink-600 text-white border-pink-600 shadow-lg shadow-pink-600/20"
                                                            : "bg-card border-border text-foreground hover:border-pink-500/50 hover:bg-pink-500/5"
                                                        }`}
                                                >
                                                    {loc}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* ──── Quote Form ──── */}
                        <FadeIn>
                            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden">
                                {/* Decorative glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-3xl rounded-full -mr-16 -mt-16" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/5 blur-3xl rounded-full -ml-12 -mb-12" />

                                {submitStatus === "success" ? (
                                    <div className="text-center py-12 relative z-10">
                                        <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-pink-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground">
                                            Quote Request Received
                                        </h3>
                                        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                                            Our infrastructure team will reach
                                            out within 2 hours.
                                        </p>
                                        <button
                                            onClick={() =>
                                                setSubmitStatus("idle")
                                            }
                                            className="text-pink-600 text-sm font-semibold hover:gap-2 flex items-center gap-1 mx-auto transition-all"
                                        >
                                            Submit Another Request{" "}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="relative z-10">
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                                            Get a Colocation Quote
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-8">
                                            Ready to migrate? Fill in the
                                            details below and our
                                            infrastructure team will reach out
                                            within 2 hours.
                                        </p>

                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            {/* Full Name / Company Name */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">
                                                    Full Name / Company Name
                                                    <span className="text-pink-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. John Doe / Acme Corp"
                                                    className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-muted-foreground/50"
                                                />
                                            </div>

                                            {/* Rack Space + Location */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-semibold text-foreground">
                                                        Estimated Rack Space
                                                        Needed
                                                        <span className="text-pink-500">
                                                            *
                                                        </span>
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            required
                                                            name="rackSpace"
                                                            value={
                                                                formData.rackSpace
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                        >
                                                            <option value="">
                                                                Select
                                                            </option>
                                                            {rackOptions.map(
                                                                (o) => (
                                                                    <option
                                                                        key={o}
                                                                        value={
                                                                            o
                                                                        }
                                                                    >
                                                                        {o}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                    </div>
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-semibold text-foreground">
                                                        Preferred Location
                                                        <span className="text-pink-500">
                                                            *
                                                        </span>
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            required
                                                            name="preferredLocation"
                                                            value={
                                                                formData.preferredLocation
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                        >
                                                            <option value="">
                                                                Select
                                                            </option>
                                                            {locationOptions.map(
                                                                (o) => (
                                                                    <option
                                                                        key={o}
                                                                        value={
                                                                            o
                                                                        }
                                                                    >
                                                                        {o}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Power + Workload */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-semibold text-foreground">
                                                        Estimated Power
                                                        Requirement (kW)
                                                        <span className="text-pink-500">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        required
                                                        type="number"
                                                        min="0"
                                                        step="0.1"
                                                        name="powerRequirement"
                                                        value={
                                                            formData.powerRequirement
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        placeholder="e.g. 2.5"
                                                        className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-muted-foreground/50"
                                                    />
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-semibold text-foreground">
                                                        Nature of Workload
                                                        <span className="text-pink-500">
                                                            *
                                                        </span>
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            required
                                                            name="workloadNature"
                                                            value={
                                                                formData.workloadNature
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                                                        >
                                                            <option value="">
                                                                Select
                                                            </option>
                                                            {workloadOptions.map(
                                                                (o) => (
                                                                    <option
                                                                        key={o}
                                                                        value={
                                                                            o
                                                                        }
                                                                    >
                                                                        {o}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-foreground">
                                                    Phone Number
                                                    <span className="text-pink-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. +254 712 345 678"
                                                    className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-muted-foreground/50"
                                                />
                                            </div>

                                            {/* Selected region display */}
                                            {selectedRegion && (
                                                <div className="bg-pink-500/5 border border-pink-500/20 rounded-lg px-4 py-2.5">
                                                    <p className="text-sm text-foreground">
                                                        Selected region:{" "}
                                                        <span className="font-semibold text-pink-500">
                                                            {selectedRegion}
                                                        </span>
                                                    </p>
                                                </div>
                                            )}

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-pink-600 text-white font-bold py-3.5 rounded-lg hover:bg-pink-500 transition-all shadow-lg shadow-pink-600/20 disabled:opacity-50 flex items-center justify-center gap-2 group text-sm tracking-wide"
                                            >
                                                {isSubmitting
                                                    ? "Submitting..."
                                                    : "COLOCATE WITH SISCOM"}
                                                {!isSubmitting && (
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                )}
                                            </button>

                                            {submitStatus === "error" && (
                                                <p className="text-sm text-red-500 text-center">
                                                    Something went wrong.
                                                    Please try again.
                                                </p>
                                            )}
                                        </form>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, HelpCircle, FileText, CreditCard, Shield } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        category: "General",
        icon: <HelpCircle className="w-5 h-5" />,
        questions: [
            { q: "What is Siscom Cloud?", a: "Siscom Cloud is Africa's first sovereign cloud platform, offering rigorous data residency compliance, low-latency infrastructure, and localized support for businesses across the continent." },
            { q: "Where are your data centers located?", a: "We operate Tier III and IV data centers in Lagos, Nairobi, Johannesburg, and Cairo, ensuring your data stays within African borders." },
            { q: "How do you compare to AWS or Azure?", a: "We offer up to 40% lower costs, zero egress fees, and guaranteed local data residency, which global providers often struggle to guarantee legally." },
        ]
    },
    {
        category: "Billing & Pricing",
        icon: <CreditCard className="w-5 h-5" />,
        questions: [
            { q: "Do you charge for data egress?", a: "No. Siscom Cloud believes your data belongs to you. We have a strict zero egress fee policy for all our compute and storage products." },
            { q: "What currency do you bill in?", a: "We support billing in major African currencies (NGN, KES, ZAR, EGP) as well as USD, helping you mitigate FX volatility." },
            { q: "Is there a free tier?", a: "Yes, we offer a generous free tier for startups and developers, including 100GB of object storage and 2 vCPUs for compute." },
        ]
    },
    {
        category: "Technical",
        icon: <FileText className="w-5 h-5" />,
        questions: [
            { q: "Do you support Kubernetes?", a: "Yes, Siscom Kubernetes Service (SKS) is a fully managed, CNCF-certified Kubernetes offering that integrates seamlessly with our storage and networking." },
            { q: "What is the uptime SLA?", a: "We provide a 99.99% uptime SLA for all core services, backed by financial credits." },
            { q: "Can I migrate from AWS S3?", a: "Absolutely. Our object storage is S3-compatible, so migration is often as simple as changing your endpoint URL and credentials." },
        ]
    },
    {
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
        questions: [
            { q: "Are you GDPR compliant?", a: "Yes, we are fully compliant with GDPR, NDPR (Nigeria), and other African data protection regulations." },
            { q: "Do you offer DDoS protection?", a: "All public-facing endpoints on Siscom Cloud are protected by our automated, multi-layer DDoS mitigation system at no extra cost." },
        ]
    }
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openCategory, setOpenCategory] = useState<string | null>("General");
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const filteredFaqs = faqs.map(cat => ({
        ...cat,
        questions: cat.questions.filter(q =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.questions.length > 0);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30">
            <Navbar />

            <main className="pt-32 pb-24 relative min-h-screen">
                {/* Background - Subtle Soft Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500/10 via-background to-background pointer-events-none" />

                <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
                    <FadeIn className="text-center mb-16">
                        <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-500 bg-pink-500/10 px-4 py-1.5 rounded-full">
                            Support Center
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                            How can we help you?
                        </h1>
                        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                            Search our knowledge base or browse frequently asked questions about our platform, pricing, and security.
                        </p>

                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search questions..."
                                className="pl-12 h-14 rounded-full bg-white/5 border-white/10 focus:border-pink-500/50 text-lg shadow-xl shadow-black/5"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </FadeIn>

                    <div className="space-y-8">
                        {filteredFaqs.map((category, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                                    <button
                                        onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                                        className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500">
                                                {category.icon}
                                            </div>
                                            <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                                        </div>
                                        <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300",
                                            openCategory === category.category ? "rotate-180" : ""
                                        )} />
                                    </button>

                                    <AnimatePresence>
                                        {(openCategory === category.category || searchQuery) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="border-t border-border">
                                                    {category.questions.map((faq, qIdx) => {
                                                        const uniqueId = idx * 100 + qIdx;
                                                        const isOpen = openQuestion === uniqueId;
                                                        return (
                                                            <div key={qIdx} className="border-b border-border last:border-0">
                                                                <button
                                                                    onClick={() => setOpenQuestion(isOpen ? null : uniqueId)}
                                                                    className="w-full text-left p-6 hover:bg-muted/30 transition-colors"
                                                                >
                                                                    <div className="flex justify-between items-start gap-4">
                                                                        <span className="font-medium text-foreground text-lg">{faq.q}</span>
                                                                        {isOpen ? (
                                                                            <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center flex-shrink-0">-</div>
                                                                        ) : (
                                                                            <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">+</div>
                                                                        )}
                                                                    </div>
                                                                    <AnimatePresence>
                                                                        {isOpen && (
                                                                            <motion.div
                                                                                initial={{ height: 0, opacity: 0 }}
                                                                                animate={{ height: "auto", opacity: 1 }}
                                                                                exit={{ height: 0, opacity: 0 }}
                                                                                className="overflow-hidden"
                                                                            >
                                                                                <p className="mt-4 text-muted-foreground leading-relaxed pr-8">
                                                                                    {faq.a}
                                                                                </p>
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </button>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        ))}

                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground">
                                No questions found matching &quot;{searchQuery}&quot;. Try a different keyword.
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

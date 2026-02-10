"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
// Accordion imports removed as we use custom implementation

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-500/30">
            <Navbar />

            <main className="pt-32 pb-24 mx-auto max-w-3xl px-6">
                <FadeIn>
                    <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
                    <p className="text-muted-foreground text-center mb-12">
                        Everything you need to know about Siscom services and billing.
                    </p>
                </FadeIn>

                <div className="space-y-4">
                    {[
                        {
                            q: "Where are your data centers located?",
                            a: "Our primary data centers are located in Nairobi, Kenya, and Lagos, Nigeria. We are expanding to South Africa and Egypt soon to provide continental coverage."
                        },
                        {
                            q: "Do you offer a free trial?",
                            a: "Yes! New users get $100 in free credits to explore our platform for the first month. No commitment required."
                        },
                        {
                            q: "How is billing calculated?",
                            a: "We use hourly billing. You only pay for what you use. If you run a server for 5 hours, you're only charged for 5 hours."
                        },
                        {
                            q: "Can I migrate my data from AWS/GCP?",
                            a: "Absolutely. Our S3-compatible storage makes data migration seamless. We also offer dedicated migration support for enterprise clients."
                        },
                        {
                            q: "Do you accept M-Pesa?",
                            a: "Yes, we accept local payment methods including M-Pesa, Card, and Bank Transfer to make it easy for local businesses."
                        }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <FAQItem question={item.q} answer={item.a} />
                        </FadeIn>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
            >
                {question}
                {isOpen ? <Minus className="w-4 h-4 text-pink-500" /> : <Plus className="w-4 h-4 text-muted-foreground" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="p-4 pt-0 text-muted-foreground border-t border-border/50 mt-2">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

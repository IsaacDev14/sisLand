"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Database, Bot, LayoutGrid, Users, ArrowRight } from "lucide-react";

const features = [
    {
        icon: Server,
        title: "Siscom Nodes",
        description: "Secure, sovereign compute and hardware infrastructure built for performance and compliance.",
        href: "/siscom-nodes",
        color: "text-pink-500",
    },
    {
        icon: Database,
        title: "Siscom Data",
        description: "Unified data intelligence stack turning raw information into actionable business insights.",
        href: "/siscom-data",
        color: "text-purple-500",
    },
    {
        icon: Bot,
        title: "Siscom AI/ML",
        description: "Deploy scalable agentic AI and automation to drive efficiency and competitive advantage.",
        href: "/siscom-ai-ml",
        color: "text-blue-500",
    },
    {
        icon: LayoutGrid,
        title: "Cloud Apps",
        description: "Purpose-built SaaS applications designed to help African SMEs scale and succeed.",
        href: "/cloud-apps",
        color: "text-emerald-500",
    },
    {
        icon: Users,
        title: "DevPreneur",
        description: "Join a thriving community of builders. Learn, connect, and unlock new revenue streams.",
        href: "/devpreneur",
        color: "text-amber-500",
    },
];

export default function MinimalValueProps() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        The Siscom Ecosystem
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        A unified platform of sovereign cloud, data, and AI capabilities designed to power African innovation.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary ${feature.color} bg-opacity-10`}>
                                <feature.icon className={`h-6 w-6 ${feature.color}`} />
                            </div>

                            <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                            <p className="mb-6 text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>

                            <Link
                                href={feature.href}
                                className="inline-flex items-center text-sm font-medium text-foreground hover:text-pink-600 transition-colors"
                            >
                                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}

                    {/* CTA Card for the last slot to balance the grid if odd number */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/30 p-8 text-center"
                    >
                        <h3 className="text-lg font-semibold">Ready to build?</h3>
                        <p className="mt-2 text-sm text-muted-foreground mb-6">
                            Start your journey with Siscom today.
                        </p>
                        <Link
                            href="/contact"
                            className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

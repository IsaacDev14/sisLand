"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const solutions = [
    {
        id: "nodes",
        icon: "/frames/layer_mesh.png",
        title: "Siscom Nodes",
        subtitle: "SOVEREIGN INFRASTRUCTURE",
        description:
            "Secure, sovereign compute and AI infrastructure built to meet the performance, compliance, and data residency needs of modern enterprises.",
        href: "/",
    },
    {
        id: "data",
        icon: "/frames/layer_gpu.png",
        title: "Siscom Data",
        subtitle: "INTELLIGENT DATA STACK",
        description:
            "From modern data warehousing to advanced analytics, delivering a unified data stack that turns trusted data into actionable intelligence.",
        href: "/siscom-data",
    },
    {
        id: "aiml",
        icon: "/frames/layer_blade.png",
        title: "Siscom AI/ML",
        subtitle: "AGENTIC AI AUTOMATION",
        description:
            "Design, deploy, and scale agentic AI and automation use cases—driving efficiency, insight, and competitive advantage.",
        href: "/siscom-ai-ml",
    },
    {
        id: "devpreneur",
        icon: "/frames/layer_mesh.png",
        title: "Siscom DevPreneur",
        subtitle: "BUILD. CONNECT. EARN.",
        description:
            "Join a growing community of builders. Accelerate your journey, grow your skills, and unlock new revenue opportunities.",
        href: "/devpreneur",
    },
];

export default function SolutionsSection() {
    return (
        <section
            id="services"
            className="relative py-24 bg-[var(--bg-secondary)]"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <ScrollReveal animation="fadeUp" className="mb-16 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-500">
                        Our Ecosystem
                    </p>
                    <h2 className="mb-6 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                        Solutions for{" "}
                        <span className="text-pink-500">Every Stage</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
                        A unified platform of sovereign cloud, data, and AI capabilities
                        designed to power African innovation.
                    </p>
                </ScrollReveal>

                {/* Solutions Grid */}
                <ScrollReveal animation="stagger" staggerDelay={0.15} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {solutions.slice(0, 3).map((solution) => (
                        <a
                            key={solution.id}
                            href={solution.href}
                            className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 transition-all hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10"
                        >
                            {/* Icon */}
                            <div className="mb-6 h-16 w-16 relative">
                                <Image
                                    src={solution.icon}
                                    alt={solution.title}
                                    fill
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)]">
                                {solution.title}
                            </h3>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-pink-500">
                                {solution.subtitle}
                            </p>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                {solution.description}
                            </p>

                            {/* Arrow */}
                            <div className="mt-6 flex items-center gap-2 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-medium">Learn More</span>
                                <svg
                                    className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </div>
                        </a>
                    ))}
                </ScrollReveal>

                {/* Second row - 2 cards centered */}
                <ScrollReveal animation="stagger" staggerDelay={0.15} delay={0.2} className="mt-6 grid gap-6 md:grid-cols-2 lg:max-w-3xl lg:mx-auto">
                    {solutions.slice(3).map((solution) => (
                        <a
                            key={solution.id}
                            href={solution.href}
                            className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 transition-all hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10"
                        >
                            {/* Icon */}
                            <div className="mb-6 h-16 w-16 relative">
                                <Image
                                    src={solution.icon}
                                    alt={solution.title}
                                    fill
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)]">
                                {solution.title}
                            </h3>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-pink-500">
                                {solution.subtitle}
                            </p>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                {solution.description}
                            </p>

                            {/* Arrow */}
                            <div className="mt-6 flex items-center gap-2 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-medium">Learn More</span>
                                <svg
                                    className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </div>
                        </a>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}

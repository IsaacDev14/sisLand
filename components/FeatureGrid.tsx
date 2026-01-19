"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
    href?: string;
}

interface FeatureGridProps {
    features: Feature[];
    columns?: 2 | 3 | 4;
    className?: string;
}

export default function FeatureGrid({ features, columns = 3, className = "" }: FeatureGridProps) {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-2 lg:grid-cols-3",
        4: "sm:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
            {features.map((feature, idx) => (
                <ScrollReveal key={idx} animation="fadeUp" delay={idx * 0.1}>
                    <div className="group relative h-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 transition-all duration-300 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
                        {/* Badge */}
                        {feature.badge && (
                            <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide bg-pink-500 text-white rounded-full">
                                {feature.badge}
                            </span>
                        )}

                        {/* Icon */}
                        <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>

                        {/* Content */}
                        <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)] group-hover:text-pink-500 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {feature.description}
                        </p>

                        {/* Hover Arrow */}
                        {feature.href && (
                            <div className="mt-6 flex items-center gap-2 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                        )}
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}

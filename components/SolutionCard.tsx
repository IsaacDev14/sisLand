"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SolutionCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
    delay?: number;
    className?: string;
    gradient?: string;
}

export function SolutionCard({
    title,
    description,
    href,
    icon,
    delay = 0,
    className,
    gradient = "from-pink-500/20 via-purple-500/20 to-blue-500/20",
}: SolutionCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn("h-full", className)}
        >
            <Link
                href={href}
                className="group relative block h-full overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Animated Background Mesh/Grid */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 dark:opacity-20", gradient)} />
                    {/* Grid Pattern */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(120,120,120,0.15) 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                            transform: isHovered ? "scale(1.05)" : "scale(1)",
                            transition: "transform 1s ease-out",
                        }}
                    />
                </div>

                <div className="relative z-10 flex h-full flex-col p-8">
                    {/* Icon Box */}
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary ring-1 ring-border transition-all duration-300 group-hover:bg-background group-hover:ring-pink-500/50 group-hover:scale-110 shadow-sm">
                        {icon ? icon : <div className="h-6 w-6 rounded-full bg-pink-500/50" />}
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-2xl font-bold text-card-foreground transition-colors group-hover:text-pink-600 dark:group-hover:text-pink-400">
                        {title}
                    </h3>

                    <p className="mb-8 flex-grow text-muted-foreground transition-colors leading-relaxed">
                        {description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-pink-600 dark:text-pink-500 transition-all duration-300 group-hover:translate-x-2">
                        <span>Explore Solutions</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

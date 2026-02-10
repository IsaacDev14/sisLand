import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SolutionCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
    delay?: number;
    className?: string;
    gradient?: string;
    imageSrc?: string;
}

export function SolutionCard({
    title,
    description,
    href,
    icon,
    delay = 0,
    className,
    gradient = "from-pink-500/20 via-purple-500/20 to-blue-500/20",
    imageSrc,
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
                className="group relative block h-full overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Top Image Section */}
                {imageSrc && (
                    <div className="relative w-full h-48 overflow-hidden bg-muted">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    </div>
                )}

                {/* Animated Background Mesh/Grid (only if no image, or overlaid) */}
                {!imageSrc && (
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 dark:opacity-20", gradient)} />
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
                )}


                <div className="relative z-10 flex flex-1 flex-col p-8 pt-6">
                    {/* Icon Box - Floating overlap if image exists */}
                    <div className={cn(
                        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/80 backdrop-blur-md ring-1 ring-border transition-all duration-300 group-hover:bg-background/80 group-hover:ring-pink-500/50 group-hover:scale-110 shadow-sm",
                        imageSrc ? "-mt-12 shadow-lg mb-6" : "mb-6"
                    )}>
                        {icon ? icon : <div className="h-6 w-6 rounded-full bg-pink-500/50" />}
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-2xl font-bold text-foreground transition-colors group-hover:text-pink-600 dark:group-hover:text-pink-400">
                        {title}
                    </h3>

                    <p className="mb-8 flex-grow text-muted-foreground transition-colors leading-relaxed group-hover:text-foreground/90">
                        {description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-pink-600 dark:text-pink-500 transition-all duration-300 group-hover:translate-x-2 mt-auto">
                        <span>Explore Solutions</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

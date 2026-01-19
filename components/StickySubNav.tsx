"use client";

import { useEffect, useState, useRef } from "react";

interface SubNavItem {
    id: string;
    label: string;
}

interface StickySubNavProps {
    items: SubNavItem[];
    className?: string;
}

export default function StickySubNav({ items, className = "" }: StickySubNavProps) {
    const [activeSection, setActiveSection] = useState(items[0]?.id || "");
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);

    // Intersection observer for sticky behavior
    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    // Scroll spy for active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map((item) => document.getElementById(item.id));
            const scrollPos = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(items[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [items]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const top = element.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Sentinel for sticky detection */}
            <div ref={sentinelRef} className="h-0" />

            {/* Sub Navigation */}
            <div
                ref={navRef}
                className={`
                    ${isSticky ? "fixed top-[72px] left-0 right-0 z-40 shadow-lg" : "relative"}
                    bg-[var(--bg-primary)] border-b border-[var(--border-color)]
                    transition-shadow duration-300
                    ${className}
                `}
            >
                <div className="mx-auto max-w-7xl px-6">
                    <nav className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                                    px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all
                                    ${activeSection === item.id
                                        ? "bg-pink-500 text-white shadow-md shadow-pink-500/25"
                                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                                    }
                                `}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Spacer when sticky */}
            {isSticky && <div className="h-[52px]" />}
        </>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
// import { ChevronDown } from "lucide-react"; // Unused
// import { motion, AnimatePresence } from "framer-motion"; // Unused

// Link data moved into component or cleaned up

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Nodes", href: "/siscom-nodes" },
        { name: "Data", href: "/siscom-data" },
        { name: "AI/ML", href: "/siscom-ai-ml" },
    ];

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 dark:bg-slate-950/80 dark:border-slate-800/50 [html[data-theme='light']_&]:bg-white/90 [html[data-theme='light']_&]:border-slate-200">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/siscom-logo.png"
                            alt="Siscom"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-6 lg:flex">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive
                                        ? "text-pink-500 dark:text-pink-400"
                                        : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Contact Link (Last Item) */}
                        <Link
                            href="/contact"
                            className={`text-sm font-medium transition-colors ${pathname === "/contact"
                                ? "text-pink-500 dark:text-pink-400"
                                : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right side: Theme toggle + CTA */}
                    <div className="hidden items-center gap-4 md:flex">
                        <ThemeToggle />
                        <Link
                            href="/contact"
                            className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-pink-700 hover:shadow-xl hover:shadow-pink-500/40"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <ThemeToggle />
                        <button
                            className="text-white [html[data-theme='light']_&]:text-slate-900"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-slate-800 py-4 lg:hidden [html[data-theme='light']_&]:border-slate-200">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block py-2 transition-colors ${isActive
                                        ? "text-pink-500 dark:text-pink-400"
                                        : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Mobile Contact Link */}
                        <Link
                            href="/contact"
                            className={`block py-2 transition-colors ${pathname === "/contact"
                                ? "text-pink-500 dark:text-pink-400"
                                : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <Link
                            href="#contact"
                            className="mt-4 block rounded-full bg-pink-600 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-pink-700 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

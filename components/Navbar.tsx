"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Nodes", href: "/siscom-nodes" },
    { name: "Data", href: "/siscom-data" },
    { name: "AI/ML", href: "/siscom-ai-ml" },
    { name: "Cloud Apps", href: "/cloud-apps" },
];

const companyItems = [
    { name: "About Siscom", href: "/about", description: "Our mission & story" },
    { name: "FAQs", href: "/faqs", description: "Billing, account & support" },
    { name: "Community", href: "/community", description: "Events, Discord & Forum" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setCompanyDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setCompanyDropdownOpen(false);
    }, [pathname]);

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
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive
                                        ? "text-pink-500 dark:text-pink-400"
                                        : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Company Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                                onMouseEnter={() => setCompanyDropdownOpen(true)}
                                className={`flex items-center gap-1 text-sm font-medium transition-colors ${companyDropdownOpen || pathname.startsWith("/about") || pathname.startsWith("/faqs") || pathname.startsWith("/community")
                                        ? "text-pink-500"
                                        : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                    }`}
                            >
                                Company
                                <ChevronDown className={`w-4 h-4 transition-transform ${companyDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {companyDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        onMouseLeave={() => setCompanyDropdownOpen(false)}
                                        className="absolute top-full right-0 mt-2 w-64 rounded-xl border border-border bg-popover p-2 shadow-xl"
                                    >
                                        <div className="grid gap-1">
                                            {companyItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted transition-colors group"
                                                    onClick={() => setCompanyDropdownOpen(false)}
                                                >
                                                    <div>
                                                        <div className="text-sm font-medium text-foreground group-hover:text-pink-500 transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Contact Link (Last Item) */}
                        <Link
                            href="/contact"
                            className={`text-sm font-medium transition-colors ${pathname === "/contact"
                                ? "text-pink-500 dark:text-pink-400"
                                : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                }`}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Right side: Theme toggle + CTA */}
                    <div className="hidden items-center gap-4 md:flex">
                        <ThemeToggle />
                        <Link
                            href="/contact"
                            className="rounded-full bg-gradient-to-r from-pink-600 to-red-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/40"
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
                            const isActive = pathname === link.href;
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

                        {/* Mobile Company Section */}
                        <div className="py-2 border-t border-slate-800/50 mt-2 pt-4">
                            <div className="text-xs font-semibold text-muted-foreground uppercase mb-2 px-2">Company</div>
                            {companyItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 py-2 px-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Contact Link */}
                        <Link
                            href="/contact"
                            className={`block py-2 transition-colors ${pathname === "/contact"
                                ? "text-pink-500 dark:text-pink-400"
                                : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>

                        <Link
                            href="#contact"
                            className="mt-4 block rounded-full bg-gradient-to-r from-pink-600 to-red-500 px-5 py-2 text-center text-sm font-semibold text-white"
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

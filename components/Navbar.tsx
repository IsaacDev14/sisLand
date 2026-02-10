"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Removed "Nodes" from here to handle it manually with dropdown
const navLinks = [
    { name: "Home", href: "/" },
    // Nodes is manually placed
    { name: "Data", href: "/siscom-data" },
    { name: "AI/ML", href: "/siscom-ai-ml" },
    { name: "Cloud Apps", href: "/cloud-apps" },
];

const companyItems = [
    { name: "About Siscom", href: "/about", description: "Our mission & story" },
    { name: "FAQs", href: "/faqs", description: "Billing, account & support" },
    { name: "Community", href: "/community", description: "Events, Discord & Forum" },
];

const nodesItems = [
    { name: "Virtual Servers", href: "/siscom-nodes/virtual-servers", description: "Flexible cloud copute" },
    { name: "Bare Metal", href: "/siscom-nodes/bare-metal", description: "Dedicated physical performance" },
    { name: "Storage", href: "/siscom-nodes/storage", description: "Object & Block storage" },
];

const cloudAppItems = [
    { name: "KAYA CLM", href: "/cloud-apps/kaya-clm", description: "Customer Lifecycle Management" },
    { name: "SHOPVERSE", href: "/cloud-apps/shopverse", description: "African E-Commerce Platform" },
    { name: "PULSE 360", href: "/cloud-apps/pulse-360", description: "Customer Engagement" },
    { name: "SMARTCOOP", href: "/cloud-apps/smartcoop", description: "Cooperative Management" },
    { name: "MOBILIZE", href: "/cloud-apps/mobilize", description: "Campaign Mobilization" },
    { name: "PESAHUB", href: "/cloud-apps/pesahub", description: "Fintech Infrastructure" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const [nodesDropdownOpen, setNodesDropdownOpen] = useState(false);
    const [cloudAppsDropdownOpen, setCloudAppsDropdownOpen] = useState(false);
    const pathname = usePathname();
    const companyDropdownRef = useRef<HTMLDivElement>(null);
    const nodesDropdownRef = useRef<HTMLDivElement>(null);
    const cloudAppsDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target as Node)) {
                setCompanyDropdownOpen(false);
            }
            if (nodesDropdownRef.current && !nodesDropdownRef.current.contains(event.target as Node)) {
                setNodesDropdownOpen(false);
            }
            if (cloudAppsDropdownRef.current && !cloudAppsDropdownRef.current.contains(event.target as Node)) {
                setCloudAppsDropdownOpen(false);
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
        setNodesDropdownOpen(false);
        setCloudAppsDropdownOpen(false);
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
                        {/* Home Link */}
                        <Link
                            href="/"
                            className={`text-sm font-medium transition-colors ${pathname === "/"
                                ? "text-pink-500 dark:text-pink-400"
                                : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                }`}
                        >
                            Home
                        </Link>

                        {/* Nodes Dropdown (Clickable Parent) */}
                        <div className="relative" ref={nodesDropdownRef}
                            onMouseEnter={() => setNodesDropdownOpen(true)}
                            onMouseLeave={() => setNodesDropdownOpen(false)}>
                            <div className="flex items-center gap-1">
                                <Link
                                    href="/siscom-nodes"
                                    className={`text-sm font-medium transition-colors ${pathname.startsWith("/siscom-nodes")
                                        ? "text-pink-500"
                                        : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                        }`}
                                    onClick={() => setNodesDropdownOpen(false)}
                                >
                                    Nodes
                                </Link>
                                <ChevronDown className={`w-4 h-4 transition-transform text-slate-300 [html[data-theme='light']_&]:text-slate-600 ${nodesDropdownOpen ? "rotate-180" : ""}`} />
                            </div>

                            <AnimatePresence>
                                {nodesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-border bg-popover p-1 shadow-xl"
                                    >
                                        <div className="grid gap-0.5">
                                            {nodesItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-start rounded-md px-2.5 py-1.5 hover:bg-muted transition-colors group"
                                                    onClick={() => setNodesDropdownOpen(false)}
                                                >
                                                    <div>
                                                        <div className="text-xs font-medium text-foreground group-hover:text-pink-500 transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-[10px] text-pink-500 leading-tight">
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

                        {/* Other Nav Links */}
                        {navLinks.slice(1, 3).map((link) => { // Data and AI/ML
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

                        {/* Cloud Apps Dropdown (Clickable Parent) */}
                        <div className="relative" ref={cloudAppsDropdownRef}
                            onMouseEnter={() => setCloudAppsDropdownOpen(true)}
                            onMouseLeave={() => setCloudAppsDropdownOpen(false)}>
                            <div className="flex items-center gap-1">
                                <Link
                                    href="/cloud-apps"
                                    className={`text-sm font-medium transition-colors ${pathname.startsWith("/cloud-apps")
                                        ? "text-pink-500"
                                        : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                        }`}
                                    onClick={() => setCloudAppsDropdownOpen(false)}
                                >
                                    Cloud Apps
                                </Link>
                                <ChevronDown className={`w-4 h-4 transition-transform text-slate-300 [html[data-theme='light']_&]:text-slate-600 ${cloudAppsDropdownOpen ? "rotate-180" : ""}`} />
                            </div>

                            <AnimatePresence>
                                {cloudAppsDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-border bg-popover p-1 shadow-xl"
                                    >
                                        <div className="grid gap-0.5">
                                            {cloudAppItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-start rounded-md px-2.5 py-1.5 hover:bg-muted transition-colors group"
                                                    onClick={() => setCloudAppsDropdownOpen(false)}
                                                >
                                                    <div>
                                                        <div className="text-xs font-medium text-foreground group-hover:text-pink-500 transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-[10px] text-pink-500 leading-tight">
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

                        {/* Company Dropdown */}
                        <div className="relative" ref={companyDropdownRef}>
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
                                        className="absolute top-full right-0 mt-2 w-52 rounded-lg border border-border bg-popover p-1 shadow-xl"
                                    >
                                        <div className="grid gap-0.5">
                                            {companyItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-start rounded-md px-2.5 py-1.5 hover:bg-muted transition-colors group"
                                                    onClick={() => setCompanyDropdownOpen(false)}
                                                >
                                                    <div>
                                                        <div className="text-xs font-medium text-foreground group-hover:text-pink-500 transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-[10px] text-pink-500 leading-tight">
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
                        {/* Home Link */}
                        <Link
                            href="/"
                            className={`block py-2 transition-colors ${pathname === "/"
                                ? "text-pink-500 dark:text-pink-400"
                                : "text-slate-300 hover:text-white [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-slate-900"
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>

                        {/* Mobile Nodes Section */}
                        <div className="py-2 border-t border-slate-800/50 mt-2 pt-4">
                            <div className="flex items-center justify-between px-2 mb-2">
                                <Link
                                    href="/siscom-nodes"
                                    className="text-xs font-semibold text-muted-foreground uppercase hover:text-pink-500 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Nodes (All)
                                </Link>
                            </div>
                            {nodesItems.map((item) => (
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

                        {/* Other Mobile Links */}
                        {navLinks.slice(1, 3).map((link) => {
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

                        {/* Mobile Cloud Apps Section */}
                        <div className="py-2 border-t border-slate-800/50 mt-2 pt-4">
                            <div className="flex items-center justify-between px-2 mb-2">
                                <Link
                                    href="/cloud-apps"
                                    className="text-xs font-semibold text-muted-foreground uppercase hover:text-pink-500 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Cloud Apps (All)
                                </Link>
                            </div>
                            {cloudAppItems.map((item) => (
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

"use client";

import Link from "next/link";

const footerLinks = {
    solutions: [
        { name: "Siscom Nodes", href: "#nodes" },
        { name: "Siscom Data", href: "#data" },
        { name: "Siscom AI/ML", href: "#ai" },
        { name: "Cloud Applications", href: "#apps" },
        { name: "DevPreneur", href: "#devpreneur" },
    ],
    company: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Partners", href: "#partners" },
        { name: "Contact", href: "#contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 [html[data-theme='light']_&]:bg-white [html[data-theme='light']_&]:border-slate-100">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block">
                            <img
                                src="/siscom-logo.png"
                                alt="Siscom"
                                className="h-8 w-auto brightness-0 invert [html[data-theme='light']_&]:brightness-100 [html[data-theme='light']_&]:invert-0"
                            />
                        </Link>
                        <p className="mt-4 text-sm text-slate-400 [html[data-theme='light']_&]:text-slate-600 leading-relaxed">
                            Sovereign Cloud & AI Infrastructure powering the future of African
                            enterprise.
                        </p>

                        {/* Social links */}
                        <div className="mt-6 flex gap-4">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-pink-500/20 hover:text-pink-400 [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-pink-500/20 hover:text-pink-400 [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300 [html[data-theme='light']_&]:text-slate-900">
                            Solutions
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 transition-colors hover:text-pink-400 [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-pink-600"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300 [html[data-theme='light']_&]:text-slate-900">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 transition-colors hover:text-pink-400 [html[data-theme='light']_&]:text-slate-600 [html[data-theme='light']_&]:hover:text-pink-600"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300 [html[data-theme='light']_&]:text-slate-900">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-400 [html[data-theme='light']_&]:text-slate-600">
                            <li className="flex items-center gap-2">
                                <svg
                                    className="h-4 w-4 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:info@siscom.africa"
                                    className="hover:text-pink-400 transition-colors [html[data-theme='light']_&]:hover:text-pink-600"
                                >
                                    info@siscom.africa
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    className="h-4 w-4 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+254 700 000 000</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg
                                    className="mt-0.5 h-4 w-4 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>Nairobi, Kenya</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-slate-800 pt-8 text-center [html[data-theme='light']_&]:border-slate-200">
                    <p className="text-sm text-slate-500 [html[data-theme='light']_&]:text-slate-600">
                        © 2026 Siscom Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

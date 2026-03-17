"use client";

import Link from "next/link";

const footerLinks = {
    solutions: [
        { name: "Siscom Data Centers", href: "/infrastructure-solutions" },
        { name: "Colocation", href: "/colocation" },
        { name: "Siscom Nodes", href: "/siscom-nodes" },
        { name: "Reserve GPU", href: "/reserve-gpu" },
        { name: "Siscom Data", href: "/siscom-data" },
        { name: "Siscom AI/ML", href: "/siscom-ai-ml" },
        { name: "Siscom Innovation", href: "/siscom-innovation" },
    ],
    company: [
        { name: "Contact", href: "/contact" },
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
                                href="https://www.linkedin.com/showcase/siscom-technologies/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-pink-500/20 hover:text-pink-400 [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/siscom_tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-pink-500/20 hover:text-pink-400 [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/254110362222"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-pink-500/20 hover:text-pink-400 [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/siscomafrica/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-pink-500/20 hover:text-pink-400 [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.258.058 2.13.27 2.766.516.637.247 1.157.568 1.688 1.098.53.53.85 1.05 1.1 1.688.246.636.458 1.508.515 2.766.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.258-.27 2.13-.516 2.766-.247.637-.568 1.157-1.098 1.688-.53.53-1.05.85-1.688 1.1-.636.246-1.508.458-2.766.515-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.258-.058-2.13-.27-2.766-.516-.637-.247-1.157-.568-1.688-1.098-.53-.53-.85-1.05-1.1-1.688-.246-.636-.458-1.508-.515-2.766-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.258.27-2.13.516-2.766.247-.637.568-1.157 1.098-1.688.53-.53 1.05-.85 1.688-1.1.636-.246 1.508-.458 2.766-.515 1.266-.058 1.646-.07 4.85-.07zm0-2.163.001.002c-3.259.001-3.667.014-4.947.072-1.277.058-2.149.261-2.91.556-.788.306-1.459.715-2.126 1.383-.667.668-1.076 1.339-1.382 2.126-.295.761-.497 1.632-.556 2.91-.058 1.279-.071 1.688-.072 4.947 0 3.258.014 3.667.072 4.947.058 1.277.261 2.149.556 2.91.306.788.715 1.459 1.382 2.126.668.667 1.339 1.076 2.126 1.382.761.295 1.632.497 2.91.556 1.279.058 1.688.071 4.947.072h.001c3.258.001 3.667-.014 4.947-.072 1.277-.058 2.149-.261 2.91-.556.788-.306 1.459-.715 2.126-1.382.667-.668 1.076-1.339 1.382-2.126.295-.761.497-1.632.556-2.91.058-1.279.071-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.058-1.277-.261-2.149-.556-2.91-.306-.788-.715-1.459-1.382-2.126-.668-.667-1.339-1.076-2.126-1.383-.761-.295-1.632-.497-2.91-.556-1.279-.058-1.688-.071-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://web.facebook.com/profile.php?id=61562835363418"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-pink-500/20 hover:text-pink-400 [html[data-theme='light']_&]:bg-slate-100 [html[data-theme='light']_&]:text-slate-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
                                    href="mailto:tech@siscom.tech"
                                    className="hover:text-pink-400 transition-colors [html[data-theme='light']_&]:hover:text-pink-600"
                                >
                                    tech@siscom.tech
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
                                <a href="tel:+254110362222" className="hover:text-pink-400 transition-colors [html[data-theme='light']_&]:hover:text-pink-600">
                                    +254110362222
                                </a>
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
                                <span>Reliance Center, Woodvale, Nairobi</span>
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

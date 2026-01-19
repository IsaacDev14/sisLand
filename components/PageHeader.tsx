"use client";

import Link from "next/link";

interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
    return (
        <header className="pt-28 pb-12 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
            <div className="mx-auto max-w-7xl px-6">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="mb-4">
                        <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                            <li>
                                <Link href="/" className="hover:text-pink-500 transition-colors">
                                    Home
                                </Link>
                            </li>
                            {breadcrumbs.map((crumb, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="text-[var(--text-secondary)]">/</span>
                                    {idx === breadcrumbs.length - 1 ? (
                                        <span className="text-[var(--text-primary)] font-medium">{crumb.label}</span>
                                    ) : (
                                        <Link href={crumb.href} className="hover:text-pink-500 transition-colors">
                                            {crumb.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}

                {/* Title */}
                <h1 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
                    {title}
                </h1>

                {/* Description */}
                {description && (
                    <p className="mt-3 text-lg text-[var(--text-secondary)] max-w-3xl">
                        {description}
                    </p>
                )}
            </div>
        </header>
    );
}

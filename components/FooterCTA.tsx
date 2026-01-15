"use client";

export default function FooterCTA() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-24 px-6"
        >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-pink-500/10 blur-[100px]" />
                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Badge */}
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-pink-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
                    Let&apos;s Build Together
                </span>

                {/* Heading */}
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Ready to Transform{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                        Your Business?
                    </span>
                </h2>

                {/* Description */}
                <p className="mb-10 text-lg text-slate-300 max-w-2xl mx-auto">
                    Let&apos;s discuss how Siscom can help you build a future-ready
                    infrastructure with our cloud, data, and AI solutions.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:info@siscom.africa"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/40 hover:scale-[1.02]"
                    >
                        Contact Our Team
                        <svg
                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                    </a>
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-700/50"
                    >
                        View Pricing
                    </a>
                </div>
            </div>
        </section>
    );
}

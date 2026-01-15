"use client";

const services = [
    {
        id: "nodes",
        title: "Siscom Nodes",
        subtitle: "SOVEREIGN INFRASTRUCTURE",
        description:
            "Secure, sovereign compute and AI infrastructure built to meet the performance, compliance, and data-residency needs of African businesses.",
        tags: ["Compute", "GPU"],
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
            </svg>
        ),
        gradient: "from-pink-500 to-rose-500",
        hoverBorder: "hover:border-pink-300",
        hoverShadow: "hover:shadow-pink-500/10",
    },
    {
        id: "data",
        title: "Siscom Data",
        subtitle: "INTELLIGENT DATA STACK",
        description:
            "From modern data warehousing to advanced analytics, delivering a unified data stack that turns trusted data into actionable intelligence.",
        tags: ["Warehousing", "Analytics"],
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
            </svg>
        ),
        gradient: "from-purple-500 to-indigo-500",
        hoverBorder: "hover:border-purple-300",
        hoverShadow: "hover:shadow-purple-500/10",
    },
    {
        id: "ai",
        title: "Siscom AI/ML",
        subtitle: "AGENTIC AI AUTOMATION",
        description:
            "Design, deploy, and scale agentic AI and automation use cases—driving efficiency, insight, and competitive advantage.",
        tags: ["Agents", "Automation"],
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        gradient: "from-cyan-500 to-blue-500",
        hoverBorder: "hover:border-cyan-300",
        hoverShadow: "hover:shadow-cyan-500/10",
    },
];

export default function ServicesSection() {
    return (
        <section id="solutions" className="bg-slate-50 py-24 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-purple-600">
                        Our Ecosystem
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                        Powering the{" "}
                        <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Future of Africa
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        End-to-end infrastructure solutions designed for African enterprises
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 ${service.hoverBorder} hover:shadow-xl ${service.hoverShadow}`}
                        >
                            {/* Icon */}
                            <div
                                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                            >
                                {service.icon}
                            </div>

                            {/* Subtitle */}
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                {service.subtitle}
                            </p>

                            {/* Title */}
                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mb-6 text-slate-600 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Arrow link */}
                            <div className="mt-6 flex items-center text-sm font-semibold text-pink-600 opacity-0 transition-opacity group-hover:opacity-100">
                                Learn more
                                <svg
                                    className="ml-2 h-4 w-4"
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

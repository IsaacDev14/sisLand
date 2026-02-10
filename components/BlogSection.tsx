"use client";

import Image from "next/image";

const blogPosts = [
    {
        title: "The Future of Sovereign Cloud in Africa",
        excerpt:
            "Exploring how data residency requirements are reshaping cloud infrastructure on the continent...",
        category: "CLOUD INFRASTRUCTURE",
        date: "Dec 10, 2024",
        color: "pink",
        image: "/blog_cloud_africa.png",
    },
    {
        title: "Data Intelligence: Turning Analytics into Action",
        excerpt:
            "How modern data stacks are enabling real-time decision making for African enterprises...",
        category: "DATA & ANALYTICS",
        date: "Dec 5, 2024",
        color: "purple",
        image: "/blog_analytics.png",
    },
    {
        title: "AI Automation for Enterprise: A Practical Guide",
        excerpt:
            "Step-by-step approach to implementing agentic AI systems that drive business value...",
        category: "AI/ML",
        date: "Nov 28, 2024",
        color: "cyan",
        image: "/blog_robot_ai.png",
    },
];

export default function BlogSection() {
    return (
        <section className="bg-background py-24 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                            Blog & News
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Insights, updates, and stories from the Siscom team
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-pink-600 transition-all hover:text-pink-700"
                    >
                        View All
                        <svg
                            className="h-4 w-4"
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
                </div>

                {/* Blog Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="group cursor-pointer rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-pink-300/50 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <span
                                        className={`text-xs font-semibold uppercase tracking-wider ${post.color === "pink"
                                            ? "text-pink-600"
                                            : post.color === "purple"
                                                ? "text-purple-600"
                                                : "text-cyan-600"
                                            }`}
                                    >
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground">•</span>
                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                </div>

                                <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-pink-600 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

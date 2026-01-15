"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
    {
        quote:
            "Siscom's GPU infrastructure has completely transformed our AI model training. We've seen a 40% reduction in training time and significant cost savings.",
        name: "Sarah Jenkins",
        title: "CTO",
        company: "FinTech Kenya",
        image: "/testimonial_sarah.png",
    },
    {
        quote:
            "The reliability of the Siscom Data Cloud is unmatched. Our real-time tracking systems have processed over 10TB of data with zero downtime this year.",
        name: "David Mwangi",
        title: "Director of Operations",
        company: "LogisticsHub",
        image: "/testimonial_david.png",
    },
    {
        quote:
            "Moving to Siscom's bare metal servers gave us the raw performance we needed for our satellite imagery analysis. Truly world-class infrastructure.",
        name: "Amara Okafor",
        title: "Lead Data Scientist",
        company: "AgriTech Solutions",
        image: "/testimonial_amara.png",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <ScrollReveal animation="fadeUp" className="mb-16 text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-pink-600">
                        Customer Stories
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                        Success Stories:{" "}
                        <span className="text-pink-600">Real Impact, Real Results</span>
                    </h2>
                </ScrollReveal>

                {/* Testimonials Grid */}
                <ScrollReveal animation="stagger" staggerDelay={0.15} className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition-all duration-300 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-500/10"
                        >
                            {/* Quote icon */}
                            <div className="absolute -top-4 left-8">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30">
                                    <svg
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="mb-6 mt-4 text-slate-600 leading-relaxed">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-pink-100">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {testimonial.title}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}

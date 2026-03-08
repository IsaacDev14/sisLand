"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function LandingServices() {
    const services = [
        {
            id: "colocation",
            title: "Distributed Colocation Infrastructure",
            image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/colocation",
        },
        {
            id: "edge-ai",
            title: "AI Infrastructure for the Edge",
            image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/siscom-ai-ml",
        },
        {
            id: "starnets",
            title: "Starnets Internet Zones",
            image: "https://images.pexels.com/photos/5690940/pexels-photo-5690940.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/contact",
        },
        {
            id: "e-gov",
            title: "E-Government AI Campuses",
            image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/contact",
        },
        {
            id: "compute",
            title: "Compute Solutions (IaaS)",
            image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/contact",
        },
        {
            id: "data",
            title: "Data Warehousing & Processing",
            image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/siscom-data",
        },
    ];

    const topRow = services.slice(0, 3);
    const bottomRow = services.slice(3);

    return (
        <section id="services" className="w-full bg-slate-950">
            <div className="px-4 py-4">
                {/* Top row - 3 equal columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {topRow.map((service, index) => (
                        <FadeIn key={service.id} delay={index * 0.08}>
                            <Link href={service.link} className="block group relative h-[340px] md:h-[380px] rounded-xl overflow-hidden">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />

                                {/* Title top-left */}
                                <div className="absolute top-0 left-0 right-0 p-6 z-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Button bottom-left */}
                                <div className="absolute bottom-0 left-0 p-6 z-10">
                                    <span className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors">
                                        Find out more
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                {/* Bottom row - 3 equal columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bottomRow.map((service, index) => (
                        <FadeIn key={service.id} delay={(index + 3) * 0.08}>
                            <Link href={service.link} className="block group relative h-[340px] md:h-[380px] rounded-xl overflow-hidden">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />

                                {/* Title top-left */}
                                <div className="absolute top-0 left-0 right-0 p-6 z-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Button bottom-left */}
                                <div className="absolute bottom-0 left-0 p-6 z-10">
                                    <span className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors">
                                        Find out more
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

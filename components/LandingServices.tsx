"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function LandingServices() {
    const services = [
        {
            id: "colocation",
            title: "Colocation",
            subtitle: "Distributed Colocation Infrastructure",
            description:
                "Access Tier III data center capabilities through Siscom's distributed clusters across Kenya, Tanzania, Nigeria, South Africa and Germany — designed to give SMEs secure, scalable infrastructure without large long-term contracts.",
            image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/colocation",
        },
        {
            id: "edge-ai",
            title: "EdgeAI Infrastructure",
            subtitle: "AI Infrastructure for the Edge",
            description:
                "Through our partnership with Navon World, Siscom is deploying modular AI-ready data centers beginning at Naivasha SEZ, enabling powerful edge compute clusters for AI workloads and advanced digital services.",
            image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/siscom-ai-ml",
        },
        {
            id: "starnets",
            title: "Starnets",
            subtitle: "Starnets Internet Zones",
            description:
                "Our subsidiary Starnets delivers affordable high-speed connectivity using Starlink-powered internet zones for universities and institutions in remote regions where fiber access remains limited.",
            image: "https://images.pexels.com/photos/5690940/pexels-photo-5690940.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", // Alternative: satellite dish or connectivity image
            link: "/contact", // Assuming Starnets specifically might not have a page yet
        },
    ];

    return (
        <section id="services" className="w-full bg-slate-950 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {services.map((service, index) => (
                    <FadeIn key={service.id} delay={index * 0.1} className="relative group h-[500px] md:h-[600px] overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Dark Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 md:from-slate-950/90 via-slate-950/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

                        {/* Content block constrained to bottom */}
                        <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                            <h3 className="text-pink-500 font-bold tracking-wider uppercase text-sm mb-2">
                                {service.title}
                            </h3>
                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                {service.subtitle}
                            </h4>
                            <p className="text-slate-300 mb-8 leading-relaxed line-clamp-4">
                                {service.description}
                            </p>

                            <Link
                                href={service.link}
                                className="inline-flex items-center gap-2 text-white font-medium group/link"
                            >
                                Learn More
                                <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1 text-pink-500" />
                            </Link>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

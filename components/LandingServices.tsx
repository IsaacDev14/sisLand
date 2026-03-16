"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function LandingServices() {
    const services = [
        {
            id: "innovation",
            title: "Siscom Innovation",
            subtitle: "Digital Platform Innovation",
            description:
                "Turn your ideas into market-ready platforms with the Siscom Innovation Hub, from concept to deployment across fintech, government and AI sectors.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            link: "/siscom-innovation",
        },
        {
            id: "edge-ai",
            title: "Siscom Data Centers",
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
            image: "https://images.pexels.com/photos/5690940/pexels-photo-5690940.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/contact",
        },
        {
            id: "siscom-ai",
            title: "Siscom AI",
            subtitle: "Managed ML & Compute Clusters",
            description:
                "Through our partnership with Navon World, Siscom is deploying modular AI-ready data centers enabling powerful compute clusters for AI workloads and advanced digital services.",
            image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/siscom-ai-ml",
        },
        {
            id: "siscom-data",
            title: "Siscom Data",
            subtitle: "Scalable Data Platforms",
            description:
                "Process, store and analyze large datasets using Siscom\u2019s advanced data infrastructure designed for analytics, machine learning pipelines and business intelligence.",
            image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/siscom-data",
        },

    ];

    const topRow = services.slice(0, 3);
    const bottomRow = services.slice(3);

    const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
        <FadeIn delay={index * 0.08}>
            <Link href={service.link} className="block group relative h-[250px] md:h-[280px] rounded-none overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                {/* Dual gradient overlay for top and bottom readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-slate-950/20" />

                {/* Content Overlay - separated top and bottom */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    {/* Top Content - ONLY TITLE */}
                    <div>
                        <span className="text-white font-extrabold tracking-widest uppercase text-sm mb-2 block">
                            {service.title}
                        </span>
                    </div>

                    {/* Bottom Content - Subtitle and Button */}
                    <div>
                        <h3 className="text-xl font-bold text-white leading-tight mb-4">
                            {service.subtitle}
                        </h3>
                        <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                            <span className="bg-pink-600 px-5 py-2.5 rounded-none text-xs font-bold hover:bg-pink-700 transition-colors">
                                Find out more
                            </span>
                            <ArrowRight className="w-4 h-4 text-pink-500 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );

    return (
        <section id="services" className="w-full bg-background py-10 transition-colors duration-300">
            <div className="px-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {topRow.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bottomRow.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index + 3} />
                    ))}
                </div>
            </div>
        </section>
    );
}

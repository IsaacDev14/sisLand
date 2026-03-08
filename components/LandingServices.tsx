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
                "Access Tier III data center capabilities through Siscom\u2019s distributed clusters across Kenya, Tanzania, Nigeria, South Africa and Germany \u2014 designed to give SMEs secure, scalable infrastructure without large long-term contracts.",
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
            image: "https://images.pexels.com/photos/5690940/pexels-photo-5690940.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/contact",
        },
        {
            id: "e-gov",
            title: "E-Government AI Campuses",
            subtitle: "National AI Infrastructure",
            description:
                "Siscom partners with governments through PPP programs to develop AI campuses and compute clusters across Kenya, helping power national digital transformation and AI innovation.",
            image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/contact",
        },
        {
            id: "compute",
            title: "Compute Solutions (IaaS)",
            subtitle: "Infrastructure-as-a-Service",
            description:
                "Deploy virtual machines, AI workloads and enterprise applications on Siscom\u2019s scalable compute infrastructure without investing in physical hardware.",
            image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/contact",
        },
        {
            id: "data",
            title: "Data Warehousing & Processing",
            subtitle: "Data Platforms for the AI Era",
            description:
                "Process, store and analyze large datasets using Siscom\u2019s advanced data infrastructure designed for analytics, machine learning pipelines and business intelligence.",
            image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
            link: "/siscom-data",
        },
    ];

    const topRow = services.slice(0, 3);
    const bottomRow = services.slice(3);

    const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
        <FadeIn delay={index * 0.08}>
            <Link href={service.link} className="block group relative h-[420px] md:h-[460px] rounded-xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/30 group-hover:via-slate-950/80 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <span className="text-pink-500 font-bold tracking-wider uppercase text-xs mb-1.5">
                        {service.title}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {service.subtitle}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                        {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white text-sm font-medium group/link">
                        <span className="bg-pink-600 px-4 py-2 rounded text-xs font-semibold group-hover:bg-pink-700 transition-colors">
                            Find out more
                        </span>
                        <ArrowRight className="w-4 h-4 text-pink-500 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </Link>
        </FadeIn>
    );

    return (
        <section id="services" className="w-full bg-slate-950">
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

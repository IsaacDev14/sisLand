"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Server, Cpu, Wifi, Building2, Cloud, Database } from "lucide-react";

export default function LandingServices() {
    const services = [
        {
            id: "colocation",
            icon: <Server className="w-6 h-6" />,
            title: "Colocation",
            subtitle: "Distributed Colocation Infrastructure",
            description:
                "Access Tier III data center capabilities through Siscom\u2019s distributed clusters across Kenya, Tanzania, Nigeria, South Africa and Germany \u2014 designed to give SMEs secure, scalable infrastructure without large long-term contracts.",
            link: "/colocation",
        },
        {
            id: "edge-ai",
            icon: <Cpu className="w-6 h-6" />,
            title: "EdgeAI Infrastructure",
            subtitle: "AI Infrastructure for the Edge",
            description:
                "Through our partnership with Navon World, Siscom is deploying modular AI-ready data centers beginning at Naivasha SEZ, enabling powerful edge compute clusters for AI workloads and advanced digital services.",
            link: "/siscom-ai-ml",
        },
        {
            id: "starnets",
            icon: <Wifi className="w-6 h-6" />,
            title: "Starnets",
            subtitle: "Starnets Internet Zones",
            description:
                "Our subsidiary Starnets delivers affordable high-speed connectivity using Starlink-powered internet zones for universities and institutions in remote regions where fiber access remains limited.",
            link: "/contact",
        },
        {
            id: "e-gov",
            icon: <Building2 className="w-6 h-6" />,
            title: "E-Government AI Campuses",
            subtitle: "National AI Infrastructure",
            description:
                "Siscom partners with governments through PPP programs to develop AI campuses and compute clusters across Kenya, helping power national digital transformation and AI innovation.",
            link: "/contact",
        },
        {
            id: "compute",
            icon: <Cloud className="w-6 h-6" />,
            title: "Compute Solutions (IaaS)",
            subtitle: "Infrastructure-as-a-Service",
            description:
                "Deploy virtual machines, AI workloads and enterprise applications on Siscom\u2019s scalable compute infrastructure without investing in physical hardware.",
            link: "/contact",
        },
        {
            id: "data",
            icon: <Database className="w-6 h-6" />,
            title: "Data Warehousing & Processing",
            subtitle: "Data Platforms for the AI Era",
            description:
                "Process, store and analyze large datasets using Siscom\u2019s advanced data infrastructure designed for analytics, machine learning pipelines and business intelligence.",
            link: "/siscom-data",
        },
    ];

    return (
        <section id="services" className="py-20 bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <FadeIn key={service.id} delay={index * 0.07}>
                            <div className="relative bg-gradient-to-br from-slate-900 to-slate-900/80 border border-slate-800/80 rounded-2xl p-7 h-full flex flex-col group hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.06)] transition-all duration-500">
                                {/* Accent dot */}
                                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]" />

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-500 mb-5 group-hover:bg-pink-600/15 group-hover:border-pink-500/30 transition-all duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {service.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-xs font-medium text-pink-500 mb-4">
                                    {service.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                    {service.description}
                                </p>

                                {/* Learn More */}
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center gap-2 text-pink-500 text-sm font-medium group/link hover:text-pink-400 transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

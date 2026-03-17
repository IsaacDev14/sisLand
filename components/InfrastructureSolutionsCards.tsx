"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";

export default function InfrastructureSolutionsCards() {
    return (
        <section className="bg-background pb-24 pt-0 px-6 flex items-center justify-center transition-colors duration-300">
            <div className="w-full max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* --- CARD 1: COLOCATION --- */}
                    <FadeIn delay={0.1}>
                        <Link href="/colocation" className="group relative h-[260px] w-full overflow-hidden rounded-none shadow-xl cursor-pointer bg-black block">
                            {/* Base Image */}
                            <img
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"
                                alt="Colocation Data Center"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Initial State Overlay - Dark Bottom Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ease-in-out group-hover:opacity-0" />

                            {/* Hover State Overlay - Solid Navy Mask */}
                            <div className="absolute inset-0 bg-[#0f172a] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                            
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                            {/* Content Container */}
                            <div className="absolute left-8 right-8 top-[calc(100%-4rem)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:top-4 flex flex-col z-10">
                                <h2 className="text-3xl font-bold text-white tracking-tight m-0">
                                    Colocation
                                </h2>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                                    <div className="overflow-hidden">
                                        <div className="pt-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col gap-4">
                                            <p className="text-gray-300 text-base leading-relaxed">
                                                Tier III data center facilities across Africa's strategic markets. Secure, carrier-neutral infrastructure for mission-critical workloads.
                                            </p>
                                            <div className="flex items-center text-pink-500 font-semibold w-max group/link">
                                                Learn more
                                                <span className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>

                    {/* --- CARD 2: SISCOM NODES --- */}
                    <FadeIn delay={0.2}>
                        <Link href="/siscom-nodes" className="group relative h-[260px] w-full overflow-hidden rounded-none shadow-xl cursor-pointer bg-black block">
                            {/* Base Image */}
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                                alt="Server Nodes"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Initial State Overlay - Dark Bottom Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ease-in-out group-hover:opacity-0" />

                            {/* Hover State Overlay - Solid Navy Mask */}
                            <div className="absolute inset-0 bg-[#0f172a] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                            
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                            {/* Content Container */}
                            <div className="absolute left-8 right-8 top-[calc(100%-4rem)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:top-4 flex flex-col z-10">
                                <h2 className="text-3xl font-bold text-white tracking-tight m-0">
                                    Siscom Nodes
                                </h2>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                                    <div className="overflow-hidden">
                                        <div className="pt-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col gap-6">
                                            <p className="text-gray-300 text-base leading-relaxed">
                                                The next evolution of decentralized compute. Plug into the backbone of Africa's AI economy.
                                            </p>
                                            <div className="flex items-center text-pink-500 font-semibold w-max group/link">
                                                Get started 
                                                <span className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}

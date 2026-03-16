"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

// Partner logos with SVG icons matching reference design
const partners = [
    {
        name: "COV",
        src: "/images/partners-Logo/COV.png",
    },
    {
        name: "Nextcare",
        src: "/images/partners-Logo/Nextcare.png",
    },
    {
        name: "SAF",
        src: "/images/partners-Logo/SAF-MAIN-LOGO.png",
    },
    {
        name: "TCUOK",
        src: "/images/partners-Logo/TCUOK.png",
    },
    {
        name: "Tradiam",
        src: "/images/partners-Logo/tradiam.png",
    },
];


export default function DigitalInnovationPartners() {
    // Quadruple the partners for a more robust seamless loop on wide screens
    const allPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="bg-background pt-10 pb-6 overflow-hidden transition-colors duration-300">
            {/* Header */}
            <div className="mb-4 text-center">
                <FadeIn>
                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
                        Trusted Partners & Technology Stack
                    </p>
                </FadeIn>
            </div>

            {/* Scrolling marquee */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                {/* Marquee track */}
                <div className="flex animate-marquee whitespace-nowrap min-w-max">
                    {allPartners.map((partner, i) => (
                        <div
                            key={`${partner.name}-${i}`}
                            className="flex-shrink-0 mx-10 flex items-center"
                        >
                                <div className={`${partner.name === 'SAF' ? 'h-24 scale-110' : 'h-12'} w-auto flex items-center transition-all duration-300`}>
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        width={partner.name === 'SAF' ? 240 : 120}
                                        height={partner.name === 'SAF' ? 96 : 48}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
}

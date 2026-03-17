"use client";

import { FadeIn } from "./FadeIn";

const steps = [
    {
        number: "01",
        title: "Research & Product Discovery",
        // Image: Two Black professionals collaborating over a laptop in a modern office
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "02",
        title: "UX Research & Product Design",
        // Image: A Black woman in a corporate tech setting focused on her screen
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "03",
        title: "Product Architecture",
        // Image: Abstract high-tech circuit board (kept from your original for tech aesthetic)
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "04",
        title: "Agile Product Development",
        // Image: A Black male software engineer working intensely at his computer
        image: "https://images.unsplash.com/photo-1760952851538-17a59f691efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        number: "05",
        title: "Infrastructure & DevOps",
        // Image: Dark, premium glowing server room racks
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "06",
        title: "Testing & Launch",
        // Image: Glowing analytics/dashboard on a screen (kept from your original)
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }
];

export default function DigitalInnovationApproach() {
    return (
        <section className="bg-background pt-12 pb-24 transition-colors duration-300">
            {/* Story Intro */}
            <div className="mx-auto max-w-7xl px-6 mb-16">
                <div className="max-w-5xl">
                    <FadeIn direction="up">
                        <div className="text-center mx-auto max-w-3xl">
                            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                                Bring Your Ideas to Life
                            </h2>
                        </div>
                    </FadeIn>
                    
                    <FadeIn direction="up" delay={0.1}>
                        <div className="text-center mx-auto max-w-3xl">
                            <p className="text-xl text-foreground/70 font-normal leading-relaxed mb-8">
                                Most organizations struggle to move from idea → product → scalable platform. 
                                Siscom Innovation solves this with a dedicated innovation hub that works 
                                with you from concept to launch.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="mt-16">
                            <p className="text-xl text-foreground font-bold mb-10">
                                With Siscom you get:
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Future-Proof Architecture",
                                        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-red-500"
                                    },
                                    {
                                        title: "Bank-Grade Security & Compliance",
                                        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-purple-500"
                                    },
                                    {
                                        title: "High-Adoption UI/UX",
                                        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-cyan-500"
                                    },
                                    {
                                        title: "Rapid Time-to-Market",
                                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-red-500"
                                    },
                                    {
                                        title: "Continuous Post-Launch Support",
                                        image: "https://images.unsplash.com/photo-1758876202189-0fbc277dfed9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                        color: "bg-blue-500"
                                    }
                                ].map((item, idx) => (
                                    <FadeIn key={item.title} delay={idx * 0.1}>
                                        <div className="relative aspect-[4/3] group overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-[#002B5B]/50 mix-blend-multiply group-hover:bg-[#002B5B]/30 transition-colors duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/20 to-transparent opacity-95" />
                                            <div className="absolute inset-x-6 bottom-6 transition-transform duration-500">
                                                <div className={`w-10 h-1 ${item.color} mb-4 transition-all duration-500 group-hover:w-16`} />
                                                <h3 className="text-xl font-bold text-white leading-tight">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                            <p className="text-foreground/70 font-normal mt-12 pt-8 border-t border-border text-center">
                                We combine product strategy, engineering, and infrastructure to deliver platforms that scale.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Process Steps */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <div className="mb-20">
                            <h2 className="text-4xl font-bold text-foreground mb-4">
                                The Siscom Innovation Process
                            </h2>
                            <p className="text-xl text-foreground/70 font-normal">
                                Our proven framework transforms ideas into scalable platforms.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <FadeIn key={step.number} delay={idx * 0.1}>
                            <div className="relative aspect-[4/3] group overflow-hidden cursor-pointer">
                                {/* Image */}
                                <img 
                                    src={step.image} 
                                    alt={step.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                {/* Overlay (Liquid Blue-ish Gradient) */}
                                <div className="absolute inset-0 bg-[#002B5B]/40 mix-blend-multiply" />
                                
                                {/* Bottom Gradient for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-transparent to-transparent opacity-90" />

                                {/* Content */}
                                <div className="absolute inset-x-8 bottom-8">
                                    <div className="text-orange-500 font-bold mb-2">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {step.title}
                                    </h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

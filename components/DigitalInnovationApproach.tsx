"use client";

import { FadeIn } from "./FadeIn";

const steps = [
    {
        number: "01",
        title: "Research & Product Discovery",
        image: "https://images.unsplash.com/photo-1553413077-190dd306264c?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "02",
        title: "UX Research & Product Design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "03",
        title: "Product Architecture",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "04",
        title: "Agile Product Development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "05",
        title: "Infrastructure & DevOps",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "06",
        title: "Testing & Launch",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }
];

export default function DigitalInnovationApproach() {
    return (
        <section className="bg-white py-24">
            {/* Story Intro */}
            <div className="mx-auto max-w-7xl px-6 mb-32">
                <div className="max-w-5xl">
                    <FadeIn direction="up">
                        <div className="text-center mx-auto max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#002B5B] leading-tight mb-12">
                                Bring Your Ideas to Life
                            </h2>
                        </div>
                    </FadeIn>
                    
                    <FadeIn direction="up" delay={0.1}>
                        <div className="text-center mx-auto max-w-3xl">
                            <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
                                Most organizations struggle to move from idea → product → scalable platform. 
                                Siscom Innovation solves this with a dedicated innovation hub that works 
                                with you from concept to launch.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="mt-16">
                            <p className="text-xl text-[#002B5B] font-bold mb-10">
                                With Siscom you get:
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "End-to-end platform development",
                                        description: "We manage the entire lifecycle from initial concept to market-ready deployment.",
                                        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-red-500"
                                    },
                                    {
                                        title: "Dedicated product teams",
                                        description: "Access high-performing teams consisting of product managers, designers, and engineers.",
                                        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-purple-500"
                                    },
                                    {
                                        title: "Agile delivery frameworks",
                                        description: "We use proven agile methodologies to ensure rapid, iterative, and reliable delivery.",
                                        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-cyan-500"
                                    },
                                    {
                                        title: "Enterprise-grade infrastructure",
                                        description: "Built on robust foundations that prioritize security and high availability.",
                                        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-red-500"
                                    },
                                    {
                                        title: "Scalable cloud deployment",
                                        description: "Leverage Siscom Cloud for infrastructure that grows seamlessly with your user base.",
                                        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                                        color: "bg-blue-500"
                                    }
                                ].map((item, idx) => (
                                    <FadeIn key={item.title} delay={idx * 0.1}>
                                        <div className="relative aspect-[4/3] group overflow-hidden cursor-pointer">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-[#002B5B]/50 mix-blend-multiply" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/20 to-transparent opacity-95" />
                                            <div className="absolute inset-x-6 bottom-6">
                                                <div className={`w-8 h-1 ${item.color} mb-3`} />
                                                <h3 className="text-lg font-bold text-white leading-tight">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs text-slate-300 font-light mt-2 line-clamp-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                            <p className="text-slate-500 font-light mt-12 pt-8 border-t border-slate-100 text-center">
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
                            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
                                The Siscom Innovation Process
                            </h2>
                            <p className="text-xl text-slate-500 font-light">
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

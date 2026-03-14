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
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002B5B] leading-tight mb-12">
                            Bring Your Ideas to Life
                        </h2>
                    </FadeIn>
                    
                    <FadeIn direction="up" delay={0.1}>
                        <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
                            Most organizations struggle to move from idea → product → scalable platform. 
                            Siscom Innovation solves this with a dedicated innovation hub that works 
                            with you from concept to launch.
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="space-y-8">
                            <p className="text-lg text-slate-500 font-light">
                                With Siscom you get:
                            </p>
                            <ul className="space-y-6">
                                <li>
                                    <p className="text-slate-500 font-light leading-relaxed">
                                        <strong className="text-[#002B5B] font-bold">End-to-end platform development:</strong> We manage the entire lifecycle from initial concept to market-ready deployment.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-slate-500 font-light leading-relaxed">
                                        <strong className="text-[#002B5B] font-bold">Dedicated product teams:</strong> Access high-performing teams consisting of product managers, designers, and engineers.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-slate-500 font-light leading-relaxed">
                                        <strong className="text-[#002B5B] font-bold">Agile delivery frameworks:</strong> We use proven agile methodologies to ensure rapid, iterative, and reliable delivery.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-slate-500 font-light leading-relaxed">
                                        <strong className="text-[#002B5B] font-bold">Enterprise-grade infrastructure:</strong> Built on robust foundations that prioritize security and high availability.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-slate-500 font-light leading-relaxed">
                                        <strong className="text-[#002B5B] font-bold">Scalable cloud deployment:</strong> Leverage Siscom Cloud for infrastructure that grows seamlessly with your user base.
                                    </p>
                                </li>
                            </ul>
                            <p className="text-slate-500 font-light pt-4 border-t border-slate-100">
                                We combine product strategy, engineering, and infrastructure to deliver platforms that scale.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Process Steps */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-5xl">
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

"use client";

import { FadeIn } from "./FadeIn";

const steps = [
    {
        number: "01",
        title: "Research & Product Discovery",
        description: "Validate the problem, market, and opportunity.",
        features: ["R&D", "Market validation", "Feasibility"],
    },
    {
        number: "02",
        title: "UX Research & Product Design",
        description: "Design intuitive digital experiences.",
        features: ["User journeys", "UX research", "Prototyping"],
    },
    {
        number: "03",
        title: "Product Architecture",
        description: "Build strong product foundations.",
        features: ["PRD docs", "Technical arch.", "API planning"],
    },
    {
        number: "04",
        title: "Agile Product Development",
        description: "Our engineering teams bring the platform to life.",
        features: ["Frontend dev", "Backend eng", "API integrations"],
    },
    {
        number: "05",
        title: "Infrastructure & DevOps",
        description: "Launch on scalable infrastructure powered by Siscom Cloud.",
        features: ["DevOps", "Cloud infra", "CI/CD"],
    },
    {
        number: "06",
        title: "Testing & Launch",
        description: "Deliver reliable production-ready platforms.",
        features: ["QA testing", "Security", "Deployment"],
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-slate-100">
                    {steps.map((step, idx) => (
                        <FadeIn key={step.number} delay={idx * 0.1}>
                            <div className={`p-10 h-full border-slate-100 
                                ${idx % 3 !== 2 ? 'lg:border-r' : ''} 
                                ${idx < 3 ? 'border-b' : ''}
                                ${idx % 2 !== 1 ? 'md:border-r lg:border-r-inherit' : ''}
                                ${idx < 4 ? 'md:border-b lg:border-b-inherit' : ''}
                                `}>
                                <div className="text-lg font-bold text-orange-600 mb-6">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold text-[#002B5B] mb-6">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-light">
                                    {step.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {step.features.map((feat) => (
                                        <span key={feat} className="px-3 py-1 bg-slate-100 text-[11px] font-bold text-[#002B5B] uppercase tracking-wider rounded-sm">
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

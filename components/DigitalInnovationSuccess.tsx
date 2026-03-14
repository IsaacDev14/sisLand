"use client";

import { FadeIn } from "./FadeIn";

const examples = [
    {
        title: "Fintech Payment Platforms",
        description: "Multiple wallet and payment solutions built for fintech companies.",
        image: "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    },
    {
        title: "Government Digital Services",
        description: "Digitization of public services for county governments.",
        image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    },
    {
        title: "Investment Platforms",
        description: "Digital platforms enabling access to new asset classes.",
        image: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    },
    {
        title: "Enterprise Platforms",
        description: "Scalable digital infrastructure for large organizations.",
        image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    }
];

export default function DigitalInnovationSuccess() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Client Success Examples</h2>
                        <p className="text-xl text-slate-600 font-light italic">
                            Delivering excellence through strategic platform innovation.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {examples.map((example, idx) => (
                        <FadeIn key={example.title} delay={idx * 0.1}>
                            <div className="group bg-white border border-slate-200 overflow-hidden h-full flex flex-col">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={example.image} 
                                        alt={example.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">
                                        {example.title}
                                    </h3>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        {example.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

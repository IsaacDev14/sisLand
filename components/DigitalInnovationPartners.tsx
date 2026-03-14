"use client";

import { FadeIn } from "./FadeIn";

const partners = [
    { name: "Safaricom", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Safaricom_logo.svg" },
    { name: "Payless", logo: "https://vignette.wikia.nocookie.net/logopedia/images/4/4a/Payless_ShoeSource.svg" },
    { name: "Nextcare Dental", logo: "" }, // Hidden if logo empty
    { name: "Belong", logo: "" },
    { name: "Vihiga County", logo: "" },
    { name: "Cooperative University", logo: "" },
    { name: "Tradiam", logo: "" },
];

export default function DigitalInnovationPartners() {
    return (
        <section className="bg-white py-16 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-6">
                <FadeIn>
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-12">
                        Trusted by Leading Organizations
                    </p>
                </FadeIn>
                
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60">
                    {/* For now using text labels for unknown logos to keep it clean and professional */}
                    {["Safaricom", "Payless", "Nextcare Dental", "Belong", "Vihiga County Government", "Cooperative University of Kenya", "Tradiam Investments"].map((name) => (
                        <span key={name} className="text-lg font-bold text-slate-900 filter grayscale hover:grayscale-0 transition-all cursor-default lg:text-xl">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

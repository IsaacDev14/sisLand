import { FadeIn } from "./FadeIn";
import { ChevronDown, MoveRight } from "lucide-react";

export default function DigitalInnovationHero() {
    return (
        <section className="relative min-h-[95vh] w-full flex items-center overflow-hidden bg-[#002B5B]">
            {/* Background Image: City Buildings with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000"
                    alt="City Buildings"
                    className="h-full w-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-[#002B5B]/50" />
                {/* Siscom Brand Gradient Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#002B5B] via-transparent to-pink-600/20 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B] via-[#002B5B]/40 to-transparent opacity-80" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-8 w-full pt-40 pb-20">
                <div className="max-w-5xl">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            Build Scalable <br />
                            <span className="text-pink-500">Digital Platforms</span>
                        </h1>
                    </FadeIn>
                    
                    <FadeIn direction="up" delay={0.1}>
                        <div className="mt-8 max-w-2xl">
                            <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                                Turn your ideas into market-ready platforms with the Siscom Innovation Hub.
                            </p>
                            <p className="mt-4 text-base text-slate-300 font-light leading-relaxed border-l-2 border-pink-600 pl-6">
                                We help organizations build powerful digital platforms for fintech, 
                                government, and the AI economy — from concept to deployment.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mt-16 flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-20">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                <button className="px-8 py-4 bg-pink-600 text-white font-bold flex items-center gap-2 group transition-all rounded-none uppercase tracking-wider text-xs hover:bg-pink-700 shadow-lg shadow-pink-900/20">
                                    Start Your Project
                                    <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold transition-all rounded-none uppercase tracking-wider text-xs">
                                    Book Consultation
                                </button>
                            </div>
                        </FadeIn>

                        {/* Horizontal Trust indicators on the right */}
                        <FadeIn direction="up" delay={0.3}>
                            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 xl:border-l xl:border-white/20 xl:pl-16">
                                <div className="flex items-center gap-4">
                                    <p className="text-3xl font-bold text-pink-500 leading-none">100+</p>
                                    <p className="text-[11px] text-slate-300 uppercase tracking-widest font-medium leading-tight">Engineers <br /> Globally</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-3xl font-bold text-pink-500 leading-none">50+</p>
                                    <p className="text-[11px] text-slate-300 uppercase tracking-widest font-medium leading-tight">Large Projects <br /> Delivered</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-3xl font-bold text-pink-500 leading-none">10+</p>
                                    <p className="text-[11px] text-slate-300 uppercase tracking-widest font-medium leading-tight">Payment Platforms <br /> Built</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-4 left-8">
                    <FadeIn delay={0.5}>
                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer group">
                            <ChevronDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Particle component for stunning effects
function FloatingParticles({ progress }: { progress: number }) {
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      hue: Math.random() > 0.5 ? 330 : 190, // Pink or cyan
    })),
    []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `hsla(${p.hue}, 100%, 70%, ${0.3 + progress * 0.5})`,
            boxShadow: `0 0 ${p.size * 4}px hsla(${p.hue}, 100%, 70%, 0.6)`,
            transform: `translateY(${Math.sin(Date.now() / 1000 + p.delay) * 20}px)`,
            opacity: 0.4 + progress * 0.4,
          }}
        />
      ))}
    </div>
  );
}

// 3D Holographic component with data streams
function HolographicLayer({
  layer,
  progress,
  index,
  totalLayers,
}: {
  layer: typeof infrastructureLayers[0];
  progress: number;
  index: number;
  totalLayers: number;
}) {
  // Calculate orbital position based on progress
  const baseAngle = (index / totalLayers) * Math.PI * 2;
  const expandProgress = Math.min(progress * 1.5, 1);
  const orbitRadius = 100 + expandProgress * 180;
  const rotationAngle = baseAngle + progress * Math.PI * 0.5;

  const x = Math.sin(rotationAngle) * orbitRadius * expandProgress;
  const y = (layer.baseY * (1 - expandProgress)) + (Math.cos(rotationAngle) * 50 * expandProgress);
  const z = Math.cos(rotationAngle) * 50 * expandProgress;

  const scale = 0.8 + expandProgress * 0.4;
  const opacity = progress > 0.1 ? 1 : progress * 10;

  return (
    <div
      className="absolute left-1/2 top-1/2 transition-none"
      style={{
        transform: `
          translate(-50%, -50%)
          translateX(${x}px)
          translateY(${y}px)
          translateZ(${z}px)
          scale(${scale})
          rotateY(${progress * 15}deg)
          rotateX(${-15 + progress * 5}deg)
        `,
        zIndex: Math.round(10 - z / 10),
        opacity,
      }}
    >
      {/* Glowing ring behind the component */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: layer.size + 40,
          height: layer.size + 40,
          background: `radial-gradient(circle, ${layer.glowColor}40 0%, transparent 70%)`,
          filter: "blur(10px)",
          opacity: 0.6 + expandProgress * 0.4,
        }}
      />

      {/* Main component card */}
      <div
        className="relative rounded-2xl border backdrop-blur-xl overflow-hidden"
        style={{
          width: layer.size,
          height: layer.size,
          borderColor: `${layer.glowColor}60`,
          background: `linear-gradient(145deg, 
            rgba(15, 15, 35, 0.9) 0%, 
            rgba(10, 10, 25, 0.95) 100%)`,
          boxShadow: `
            0 0 40px ${layer.glowColor}30,
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Holographic scan lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />

        {/* Animated data streams */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: expandProgress }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px"
              style={{
                left: 0,
                right: 0,
                top: `${30 + i * 25}%`,
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  ${layer.glowColor} 30%, 
                  ${layer.glowColor} 70%, 
                  transparent 100%)`,
                animation: `dataStream ${2 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>

        {/* Icon container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div
            className="text-5xl mb-3 drop-shadow-lg"
            style={{
              filter: `drop-shadow(0 0 20px ${layer.glowColor})`,
            }}
          >
            {layer.icon}
          </div>
          <h3 className="text-white font-bold text-center text-sm mb-1">
            {layer.name}
          </h3>
          <p className="text-slate-400 text-xs text-center">
            {layer.description}
          </p>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: layer.glowColor }} />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: layer.glowColor }} />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: layer.glowColor }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: layer.glowColor }} />
      </div>

      {/* Floating label */}
      <div
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300"
        style={{
          top: layer.size + 20,
          opacity: expandProgress > 0.5 ? (expandProgress - 0.5) * 2 : 0,
          transform: `translateX(-50%) translateY(${expandProgress > 0.5 ? 0 : 20}px)`,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="h-px w-6 bg-gradient-to-r from-transparent" style={{ background: `linear-gradient(to right, transparent, ${layer.glowColor})` }} />
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 border backdrop-blur-md" style={{ borderColor: `${layer.glowColor}40`, color: layer.glowColor }}>
            {layer.metric}
          </span>
          <div className="h-px w-6 bg-gradient-to-l from-transparent" style={{ background: `linear-gradient(to left, transparent, ${layer.glowColor})` }} />
        </div>
      </div>
    </div>
  );
}

// Connection lines between components
function ConnectionLines({ progress }: { progress: number }) {
  const lineOpacity = Math.max(0, (progress - 0.3) * 2);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: lineOpacity }}
    >
      <defs>
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
          <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Animated connection paths */}
      <path
        d="M 200 200 Q 300 150 400 200"
        stroke="url(#lineGradient1)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="10 5"
        className="animate-pulse"
      />
      <path
        d="M 350 180 Q 300 250 250 320"
        stroke="url(#lineGradient2)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="10 5"
        className="animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </svg>
  );
}

// Central core with pulsing effect
function CentralCore({ progress }: { progress: number }) {
  const coreScale = 1 - progress * 0.3;
  const coreOpacity = 1 - progress * 0.7;

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translate(-50%, -50%) scale(${coreScale})`,
        opacity: coreOpacity,
      }}
    >
      {/* Outer rings */}
      {[1, 2, 3].map((ring) => (
        <div
          key={ring}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: 80 + ring * 60,
            height: 80 + ring * 60,
            borderColor: `rgba(236, 72, 153, ${0.3 - ring * 0.08})`,
            animation: `spin ${10 + ring * 5}s linear infinite${ring % 2 === 0 ? ' reverse' : ''}`,
          }}
        />
      ))}

      {/* Core */}
      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)`,
          boxShadow: `
            0 0 60px rgba(236, 72, 153, 0.4),
            0 0 100px rgba(6, 182, 212, 0.2)
          `,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 animate-pulse" />
      </div>
    </div>
  );
}

const infrastructureLayers = [
  {
    id: "ai",
    name: "AI Accelerator",
    description: "Neural Processing",
    icon: "🧠",
    glowColor: "#ec4899",
    size: 130,
    baseY: -100,
    metric: "500+ TFLOPS",
  },
  {
    id: "compute",
    name: "Compute Engine",
    description: "High Performance",
    icon: "⚡",
    glowColor: "#06b6d4",
    size: 130,
    baseY: -30,
    metric: "10K+ Cores",
  },
  {
    id: "storage",
    name: "Storage Array",
    description: "Petabyte Scale",
    icon: "💾",
    glowColor: "#a855f7",
    size: 130,
    baseY: 40,
    metric: "99.99% Durability",
  },
  {
    id: "network",
    name: "Network Mesh",
    description: "Global Fabric",
    icon: "🌐",
    glowColor: "#22c55e",
    size: 130,
    baseY: 110,
    metric: "400Gbps",
  },
  {
    id: "security",
    name: "Security Shield",
    description: "Zero Trust",
    icon: "🛡️",
    glowColor: "#f59e0b",
    size: 130,
    baseY: 180,
    metric: "SOC2 Certified",
  },
];

export default function ExplodedViewHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: heroRef.current,
        pinSpacing: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative">
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes dataStream {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Pinned Hero */}
      <div
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, 
            rgba(15, 10, 30, 1) 0%, 
            rgba(5, 5, 15, 1) 50%, 
            rgba(0, 0, 0, 1) 100%)`,
        }}
      >
        {/* Animated star field */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingParticles progress={scrollProgress} />
        </div>

        {/* Radial gradient overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(236, 72, 153, ${0.08 + scrollProgress * 0.1}) 0%, transparent 60%)`,
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(6, 182, 212, ${0.08 + scrollProgress * 0.1}) 0%, transparent 60%)`,
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: `perspective(1000px) rotateX(60deg) translateY(-50%)`,
            opacity: 0.5 + scrollProgress * 0.3,
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
          {/* Left: Hero Copy */}
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-pink-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
              Sovereign Infrastructure
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              The Future of{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Cloud
                </span>
                <span
                  className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-400/20 to-cyan-400/20 blur-lg"
                  aria-hidden="true"
                />
              </span>
              <br />
              Built Different
            </h1>

            <p className="mb-4 text-lg font-medium text-slate-200 lg:text-xl">
              Explore our multi-layered sovereign infrastructure
            </p>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-400">
              Scroll to witness how each component works together to deliver
              unparalleled performance, security, and data sovereignty.
            </p>

            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-400">
                  Infrastructure Exploration
                </span>
                <span className="text-xs font-bold text-pink-400">
                  {Math.round(scrollProgress * 100)}%
                </span>
              </div>
              <div className="h-1 w-64 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-100"
                  style={{
                    width: `${scrollProgress * 100}%`,
                    background: "linear-gradient(90deg, #ec4899, #a855f7, #06b6d4)",
                  }}
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/40 hover:scale-[1.02]"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-700/50"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: 3D Holographic Infrastructure */}
          <div className="relative flex h-full items-center justify-center" style={{ perspective: "1500px" }}>
            {/* Stats panel */}
            <div
              className="absolute right-0 top-1/4 z-50 rounded-xl border border-slate-700/50 bg-slate-900/90 px-4 py-3 backdrop-blur-md"
              style={{
                opacity: 0.8 + scrollProgress * 0.2,
                transform: `translateX(${scrollProgress * -20}px)`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-slate-300">
                    ALL SYSTEMS NOMINAL
                  </span>
                </div>
              </div>
            </div>

            {/* 3D Container */}
            <div
              className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${10 - scrollProgress * 5}deg) rotateY(${scrollProgress * 20}deg)`,
              }}
            >
              {/* Central core */}
              <CentralCore progress={scrollProgress} />

              {/* Connection lines */}
              <ConnectionLines progress={scrollProgress} />

              {/* Holographic layers */}
              {infrastructureLayers.map((layer, index) => (
                <HolographicLayer
                  key={layer.id}
                  layer={layer}
                  progress={scrollProgress}
                  index={index}
                  totalLayers={infrastructureLayers.length}
                />
              ))}
            </div>

            {/* Layer indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {infrastructureLayers.map((layer, index) => {
                const isActive = scrollProgress > (index / infrastructureLayers.length);
                return (
                  <div
                    key={layer.id}
                    className="flex flex-col items-center gap-1 transition-all duration-300"
                    style={{
                      opacity: isActive ? 1 : 0.4,
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? layer.glowColor : "#334155",
                        boxShadow: isActive ? `0 0 12px ${layer.glowColor}` : "none",
                      }}
                    />
                    <span
                      className="text-[9px] font-medium transition-all duration-300 whitespace-nowrap"
                      style={{ color: isActive ? layer.glowColor : "#64748b" }}
                    >
                      {layer.name.split(" ")[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
    </section>
  );
}

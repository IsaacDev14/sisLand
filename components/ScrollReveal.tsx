"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
    children: ReactNode;
    animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp" | "stagger";
    delay?: number;
    duration?: number;
    className?: string;
    staggerDelay?: number;
}

export default function ScrollReveal({
    children,
    animation = "fadeUp",
    delay = 0,
    duration = 0.8,
    className = "",
    staggerDelay = 0.1,
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Define animation configurations
        const animations: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
            fadeUp: {
                from: { opacity: 0, y: 60 },
                to: { opacity: 1, y: 0 },
            },
            fadeIn: {
                from: { opacity: 0 },
                to: { opacity: 1 },
            },
            slideLeft: {
                from: { opacity: 0, x: 100 },
                to: { opacity: 1, x: 0 },
            },
            slideRight: {
                from: { opacity: 0, x: -100 },
                to: { opacity: 1, x: 0 },
            },
            scaleUp: {
                from: { opacity: 0, scale: 0.8 },
                to: { opacity: 1, scale: 1 },
            },
            stagger: {
                from: { opacity: 0, y: 40 },
                to: { opacity: 1, y: 0 },
            },
        };

        const { from, to } = animations[animation];

        // Set initial state
        gsap.set(element, from);

        // Create scroll trigger animation
        const scrollTrigger = ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            once: true,
            onEnter: () => {
                if (animation === "stagger") {
                    // Stagger children
                    gsap.fromTo(
                        element.children,
                        from,
                        {
                            ...to,
                            duration,
                            delay,
                            stagger: staggerDelay,
                            ease: "power3.out",
                        }
                    );
                    gsap.set(element, { opacity: 1 });
                } else {
                    gsap.to(element, {
                        ...to,
                        duration,
                        delay,
                        ease: "power3.out",
                    });
                }
            },
        });

        return () => {
            scrollTrigger.kill();
        };
    }, [animation, delay, duration, staggerDelay]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}

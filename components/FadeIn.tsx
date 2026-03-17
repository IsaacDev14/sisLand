"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FadeInStaggerContext = createContext(false);

export function FadeIn({ 
    delay = 0, 
    direction = "up",
    ...props 
}: React.ComponentPropsWithoutRef<"div"> & { 
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50 + (delay * 1000));
        return () => clearTimeout(timer);
    }, [delay]);

    const getTranslation = () => {
        if (isVisible) return "opacity-100 translate-x-0 translate-y-0";
        switch (direction) {
            case "up": return "opacity-0 translate-y-8";
            case "down": return "opacity-0 -translate-y-8";
            case "left": return "opacity-0 translate-x-8";
            case "right": return "opacity-0 -translate-x-8";
            default: return "opacity-0 translate-y-8";
        }
    };

    return (
        <div
            {...props}
            className={`transition-all duration-1000 ease-out transform ${getTranslation()} ${props.className || ""}`}
        />
    );
}

export function FadeInStagger({
    faster = false,
    ...props
}: React.ComponentPropsWithoutRef<"div"> & { faster?: boolean }) {
    // Simple pass-through for now, can be enhanced later if needed
    return (
        <FadeInStaggerContext.Provider value={true}>
            <div {...props} />
        </FadeInStaggerContext.Provider>
    );
}

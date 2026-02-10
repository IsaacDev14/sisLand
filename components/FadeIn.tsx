"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FadeInStaggerContext = createContext(false);

export function FadeIn({ delay = 0, ...props }: React.ComponentPropsWithoutRef<"div"> & { delay?: number }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation shortly after mount to ensure transition happens
        const timer = setTimeout(() => setIsVisible(true), 50 + (delay * 1000));
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            {...props}
            className={`transition-all duration-700 ease-out transform ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${props.className || ""}`}
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

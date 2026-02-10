"use client";

import { useEffect, useRef } from "react";

interface Bubble {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    drift: number;
    rise: number;
    decay: number;
}

/**
 * Subtle floating bubbles that spawn near the cursor and fade away quickly.
 * Scoped to its parent container. Non-persistent, non-intrusive.
 */
export default function MouseTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const bubbles = useRef<Bubble[]>([]);
    const lastSpawn = useRef(0);
    const active = useRef(false);
    const moving = useRef(false);
    const moveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const mouse = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement;
        if (!parent) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const rect = parent.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        resize();
        window.addEventListener("resize", resize);

        // Use document-level listener so it works instantly, even during animations
        const handleMove = (e: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;

            active.current = inside;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
                moving.current = true;
                clearTimeout(moveTimer.current);
                moveTimer.current = setTimeout(() => { moving.current = false; }, 100);
            }
        };

        document.addEventListener("mousemove", handleMove);

        const spawn = (now: number) => {
            if (now - lastSpawn.current < 60) return;
            lastSpawn.current = now;

            const count = 1 + Math.floor(Math.random() * 2);
            for (let i = 0; i < count; i++) {
                bubbles.current.push({
                    x: mouse.current.x + (Math.random() - 0.5) * 24,
                    y: mouse.current.y + (Math.random() - 0.5) * 24,
                    radius: 2 + Math.random() * 4,
                    alpha: 0.25 + Math.random() * 0.2,
                    drift: (Math.random() - 0.5) * 0.6,
                    rise: -(0.3 + Math.random() * 0.5),
                    decay: 0.008 + Math.random() * 0.006,
                });
            }
        };

        const animate = (now: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (active.current && moving.current) spawn(now);

            bubbles.current = bubbles.current.filter((b) => {
                b.alpha -= b.decay;
                if (b.alpha <= 0) return false;

                b.x += b.drift;
                b.y += b.rise;

                ctx.save();
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(330, 75%, 60%, ${b.alpha})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(b.x - b.radius * 0.25, b.y - b.radius * 0.3, b.radius * 0.35, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(330, 90%, 85%, ${b.alpha * 0.5})`;
                ctx.fill();

                ctx.restore();
                return true;
            });

            animRef.current = requestAnimationFrame(animate);
        };
        animRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", handleMove);
            cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-20 pointer-events-none"
        />
    );
}

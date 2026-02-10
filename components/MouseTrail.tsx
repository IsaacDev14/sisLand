"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
}

export default function MouseTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mouse = useRef({ x: -100, y: -100 });
    const animationRef = useRef<number>(0);

    const createParticles = useCallback((x: number, y: number) => {
        const count = 3;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2 + 0.5;
            particles.current.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1,
                life: 1,
                maxLife: 40 + Math.random() * 30,
                size: Math.random() * 4 + 2,
                hue: 330 + Math.random() * 30, // pink range
            });
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouse = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            createParticles(e.clientX, e.clientY);
        };
        window.addEventListener("mousemove", handleMouse);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update & draw particles
            particles.current = particles.current.filter((p) => {
                p.life++;
                if (p.life > p.maxLife) return false;

                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.02; // tiny gravity
                p.vx *= 0.99;

                const progress = p.life / p.maxLife;
                const alpha = 1 - progress;
                const scale = 1 - progress * 0.5;

                ctx.save();
                ctx.globalAlpha = alpha * 0.6;
                ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
                ctx.fill();

                // Glow
                ctx.globalAlpha = alpha * 0.2;
                ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha * 0.3})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * scale * 3, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
                return true;
            });

            // Cursor glow
            ctx.save();
            const gradient = ctx.createRadialGradient(
                mouse.current.x, mouse.current.y, 0,
                mouse.current.x, mouse.current.y, 80
            );
            gradient.addColorStop(0, "hsla(330, 80%, 60%, 0.15)");
            gradient.addColorStop(0.5, "hsla(330, 80%, 60%, 0.05)");
            gradient.addColorStop(1, "hsla(330, 80%, 60%, 0)");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(mouse.current.x, mouse.current.y, 80, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            animationRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
            cancelAnimationFrame(animationRef.current);
        };
    }, [createParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        />
    );
}

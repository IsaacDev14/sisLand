"use client";

import { useEffect, useRef } from "react";

interface Point {
    x: number;
    y: number;
    originX: number;
    originY: number;
}

interface MagnifyingMeshProps {
    className?: string;
    gap?: number;
    radius?: number;
    strength?: number;
}

export default function MagnifyingMesh({
    className = "",
    gap = 40,
    radius = 200,
    strength = 0.5
}: MagnifyingMeshProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -1000, y: -1000 });
    const points = useRef<Point[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            initPoints(canvas.width, canvas.height);
        };

        const initPoints = (width: number, height: number) => {
            const newPoints: Point[] = [];
            // Create a grid of points extending slightly beyond the canvas
            for (let x = -gap; x < width + gap; x += gap) {
                for (let y = -gap; y < height + gap; y += gap) {
                    newPoints.push({ x, y, originX: x, originY: y });
                }
            }
            points.current = newPoints;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mouse.current = { x: -1000, y: -1000 };
        };

        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        // Initial setup
        resize();

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update points based on mouse position
            points.current.forEach(point => {
                const dx = mouse.current.x - point.originX;
                const dy = mouse.current.y - point.originY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < radius) {
                    // Calculate magnifying displacement
                    // Grid should expand away from mouse (magnifying effect)
                    // Or "bulge" effect
                    const force = (1 - dist / radius) * strength;
                    // Move point AWAY from mouse to create magnification look inside
                    const angle = Math.atan2(dy, dx);
                    // Standard lens distortion moves points outward from center
                    // To simulate "zoom in", points should move OUTWARD

                    const moveX = Math.cos(angle) * force * 50; // Tunable constant
                    const moveY = Math.sin(angle) * force * 50;

                    // Smooth lerp to target
                    point.x = point.originX - dx * force * 0.5; // Simple bulge
                    point.y = point.originY - dy * force * 0.5;

                    // Let's try a different formula for "magnifying glass"
                    // New pos = Center + (OldPos - Center) * ScaleFactor
                    // Where ScaleFactor > 1 near center, and decays to 1 at radius

                    // Reverting to simple displacement for visual effect:
                    // Push points away from cursor
                    // point.x = point.originX - (dx / dist) * force * 40;
                    // point.y = point.originY - (dy / dist) * force * 40;

                    // Actually, "Magnifying" usually means points move OUTWARD from the lens center?
                    // Let's do a simple radial displacement

                    // Simple easing approach:
                    // TargetX = OriginX + Displacement
                    // Displacement = Cos(angle) * StrengthFactor

                } else {
                    // Reset to origin
                    point.x = point.originX;
                    point.y = point.originY;
                }
            });

            // Draw grid lines
            ctx.beginPath();
            ctx.strokeStyle = "rgba(236, 72, 153, 0.2)"; // Pinkish low opacity
            ctx.lineWidth = 1;

            // Since points are 1D array, we need to connect logic
            // But implementing connectivity in 1D array is tricky if grid size changes
            // Instead, just iterate and draw lines to prompt neighbors? expensive O(N^2)
            // Or structure points as 2D array?

            // Let's just draw dots for now? No, "mesh or grid".

            // Re-think: Just draw the grid mathematically in the loop, calculating magnified positions on the fly
            // No need to store state if connection topology is implicit.

            const cols = Math.ceil(canvas.width / gap) + 2;
            const rows = Math.ceil(canvas.height / gap) + 2;
            const startX = -gap;
            const startY = -gap;

            // Helper to get distorted position
            const getDistortedPos = (bx: number, by: number) => {
                const dx = bx - mouse.current.x;
                const dy = by - mouse.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < radius) {
                    // Magnification formula:
                    // P' = P + (P - M) * (Strength * (1 - dist/R)^2)
                    // This pushes points OUTWARD from mouse, creating a "magnified" look (things in center get bigger/spread out)
                    const force = strength * Math.pow(1 - dist / radius, 2);
                    return {
                        x: bx + dx * force,
                        y: by + dy * force
                    };
                }
                return { x: bx, y: by };
            };

            // Draw horizontal lines
            for (let y = startY; y < canvas.height + gap; y += gap) {
                ctx.beginPath();
                let first = true;
                for (let x = startX; x < canvas.width + gap; x += 10) { // smaller step for interpolation
                    const pos = getDistortedPos(x, y);
                    if (first) {
                        ctx.moveTo(pos.x, pos.y);
                        first = false;
                    } else {
                        ctx.lineTo(pos.x, pos.y);
                    }
                }
                ctx.stroke();
            }

            // Draw vertical lines
            for (let x = startX; x < canvas.width + gap; x += gap) {
                ctx.beginPath();
                let first = true;
                for (let y = startY; y < canvas.height + gap; y += 10) {
                    const pos = getDistortedPos(x, y);
                    if (first) {
                        ctx.moveTo(pos.x, pos.y);
                        first = false;
                    } else {
                        ctx.lineTo(pos.x, pos.y);
                    }
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gap, radius, strength]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none absolute inset-0 z-0 ${className}`}
        />
    );
}

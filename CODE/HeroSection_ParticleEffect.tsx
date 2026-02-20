"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { useEffect, useRef } from "react";

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const particles: Particle[] = [];

        // Define the origin of the flow (starts at center)
        const origin = { x: w / 2, y: h / 2 };

        // Track actual mouse position
        const mouse = { x: w / 2, y: h / 2, isActive: false };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY - canvas.getBoundingClientRect().top;
            mouse.isActive = true;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
                mouse.isActive = true;
            }
        };

        const handleMouseLeave = () => {
            mouse.isActive = false;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("mouseout", handleMouseLeave);

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            if (!mouse.isActive) {
                origin.x = w / 2;
                origin.y = h / 2;
            }
            init();
        };
        window.addEventListener("resize", handleResize);

        class Particle {
            x: number;
            y: number;
            z: number; // For 3D depth simulation
            baseSize: number;
            type: 'emerald' | 'white' | 'darkemerald';

            constructor() {
                // Initialize randomly on a 3D plane
                this.x = (Math.random() - 0.5) * w * 2;
                this.y = (Math.random() - 0.5) * h * 2;
                this.z = Math.random() * w; // Depth depth

                // Smaller, denser particles
                this.baseSize = Math.random() * 2 + 1;

                const types: ('emerald' | 'white' | 'darkemerald')[] = ['emerald', 'white', 'darkemerald'];
                this.type = types[Math.floor(Math.random() * types.length)];
            }

            draw() {
                // Determine 2D coordinates based on 3D depth and current origin
                const scale = w / this.z;
                const px = this.x * scale + origin.x;
                const py = this.y * scale + origin.y;

                // Calculate the "previous" position (where the particle was a moment ago)
                const prevZ = this.z + 9; // speed value
                const prevScale = w / prevZ;
                const prevPx = this.x * prevScale + origin.x;
                const prevPy = this.y * prevScale + origin.y;

                // Calculate dynamic size (larger as it gets closer)
                const currentSize = this.baseSize * (w / this.z) * 0.5;

                // Only draw if within screen bounds and size is reasonable
                if (px > -currentSize && px < w + currentSize && py > -currentSize && py < h + currentSize && currentSize > 0.5) {

                    // Draw a streaking line from previous to current position
                    let strokeColor: string;
                    let tipColor: string;

                    if (this.type === 'white') {
                        strokeColor = 'rgba(255, 255, 255, 0.4)';
                        tipColor = 'rgba(255, 255, 255, 0.95)';
                    } else if (this.type === 'emerald') {
                        strokeColor = 'rgba(52, 211, 153, 0.3)';
                        tipColor = 'rgba(52, 211, 153, 0.9)';
                    } else {
                        strokeColor = 'rgba(6, 78, 59, 0.3)';
                        tipColor = 'rgba(16, 185, 129, 0.8)';
                    }

                    // Draw the streak/tail line
                    ctx!.beginPath();
                    ctx!.moveTo(prevPx, prevPy);
                    ctx!.lineTo(px, py);
                    ctx!.strokeStyle = strokeColor;
                    ctx!.lineWidth = Math.max(0.5, currentSize * 0.6);
                    ctx!.stroke();

                    // Draw the bright tip (head of the particle)
                    ctx!.fillStyle = tipColor;
                    ctx!.beginPath();
                    ctx!.arc(px, py, Math.max(0.5, currentSize * 0.8), 0, Math.PI * 2);
                    ctx!.closePath();
                    ctx!.fill();
                }
            }

            update() {
                // Move particle closer to viewer (decrease depth)
                // 2x speed: much faster warp
                const speed = 9;
                this.z -= speed;

                // If particle passes the viewer, reset it to the far distance
                if (this.z <= 0) {
                    this.z = w;
                    this.x = (Math.random() - 0.5) * w * 2;
                    this.y = (Math.random() - 0.5) * h * 2;
                }

                this.draw();
            }
        }

        const init = () => {
            particles.length = 0;
            // Adaptive: dense on desktop, capped on mobile for smooth 60fps
            const isMobile = w < 768;
            const numberOfParticles = isMobile
                ? Math.min((w * h) / 1500, 800)  // Mobile: cap at 800
                : (w * h) / 1000;                  // Desktop: maximum density
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            // Smoothly move the flow origin towards the mouse
            const targetX = mouse.isActive ? mouse.x : w / 2;
            const targetY = mouse.isActive ? mouse.y : h / 2;

            origin.x += (targetX - origin.x) * 0.12;
            origin.y += (targetY - origin.y) * 0.12;

            // Full clear for sharp, crisp particle movement
            ctx!.clearRect(0, 0, w, h);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
            {/* Custom Canvas Particle Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-auto" />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

            <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                {/* 이 안에 Hero 텍스트와 CTA 버튼을 배치합니다 */}
            </div>
        </section>
    );
}

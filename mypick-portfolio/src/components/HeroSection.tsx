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

            {/* Gradient Overlay for Text Readability - Reduced opacity to reveal the waves */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

            <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.3] mb-8 text-white break-keep">
                        <span className="block mb-4 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-300">홈페이지가 없다면,</span>
                        고객은 <span className="text-primary">신뢰하지 않습니다</span>
                    </h1>

                    <p className="text-base md:text-xl text-zinc-400 mx-auto leading-relaxed font-medium mb-12 break-keep">
                        온라인에서의 첫인상은 비즈니스의 퀄리티와 직결됩니다.<br className="hidden md:block" />
                        압도적인 디자인과 탄탄한 기술력으로 확실한 신뢰를 구축해 드립니다.
                    </p>

                    <button
                        onClick={() => {
                            const el = document.getElementById("portfolio");
                            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                        }}
                        className="bg-primary hover:bg-emerald-500 text-black px-10 py-3 rounded-full font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,208,132,0.3)] relative z-30 inline-block focus:outline-none"
                    >
                        포트폴리오 더 보기
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

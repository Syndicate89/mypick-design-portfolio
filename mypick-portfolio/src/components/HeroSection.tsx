"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { useEffect, useRef } from "react";

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        if (!canvas || !section) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let isVisible = true;
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const origin = { x: w / 2, y: h / 2 };
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
            if (isVisible) init();
        };
        window.addEventListener("resize", handleResize);

        class Particle {
            x: number;
            y: number;
            z: number;
            baseSize: number;
            type: 'emerald' | 'white' | 'darkemerald';

            constructor() {
                this.x = (Math.random() - 0.5) * w * 2;
                this.y = (Math.random() - 0.5) * h * 2;
                this.z = Math.random() * w;
                this.baseSize = Math.random() * 2 + 1;

                const types: ('emerald' | 'white' | 'darkemerald')[] = ['emerald', 'white', 'darkemerald'];
                this.type = types[Math.floor(Math.random() * types.length)];
            }

            draw() {
                const scale = w / this.z;
                // Rounding pixel values to avoid sub-pixel rendering overhead
                const px = Math.round(this.x * scale + origin.x);
                const py = Math.round(this.y * scale + origin.y);

                const prevZ = this.z + 9;
                const prevScale = w / prevZ;
                const prevPx = Math.round(this.x * prevScale + origin.x);
                const prevPy = Math.round(this.y * prevScale + origin.y);

                const currentSize = this.baseSize * (w / this.z) * 0.5;

                if (px > -currentSize && px < w + currentSize && py > -currentSize && py < h + currentSize && currentSize > 0.5) {
                    let strokeColor: string;
                    let tipColor: string;

                    if (this.type === 'white') {
                        strokeColor = 'rgba(148, 163, 184, 0.4)'; // slate-400
                        tipColor = 'rgba(100, 116, 139, 0.8)'; // slate-500
                    } else if (this.type === 'emerald') {
                        strokeColor = 'rgba(59, 130, 246, 0.4)'; // blue-500
                        tipColor = 'rgba(37, 99, 235, 0.9)';     // blue-600
                    } else {
                        strokeColor = 'rgba(29, 78, 216, 0.3)';  // blue-700
                        tipColor = 'rgba(30, 58, 138, 0.8)';     // blue-900
                    }

                    ctx!.beginPath();
                    ctx!.moveTo(prevPx, prevPy);
                    ctx!.lineTo(px, py);
                    ctx!.strokeStyle = strokeColor;
                    ctx!.lineWidth = Math.max(0.5, currentSize * 0.6);
                    ctx!.stroke();

                    ctx!.fillStyle = tipColor;
                    ctx!.beginPath();
                    ctx!.arc(px, py, Math.max(0.5, currentSize * 0.8), 0, Math.PI * 2);
                    ctx!.closePath();
                    ctx!.fill();
                }
            }

            update() {
                const speed = 9;
                this.z -= speed;

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
            const isMobile = w < 768;
            // Increased by 25% as requested
            const numberOfParticles = isMobile
                ? Math.min((w * h) / 1600, 500)
                : Math.min((w * h) / 1200, 1250);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!isVisible) return; // Stop animation loop when not visible

            const targetX = mouse.isActive ? mouse.x : w / 2;
            const targetY = mouse.isActive ? mouse.y : h / 2;

            origin.x += (targetX - origin.x) * 0.12;
            origin.y += (targetY - origin.y) * 0.12;

            ctx!.clearRect(0, 0, w, h);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const wasVisible = isVisible;
                    isVisible = entry.isIntersecting;

                    // Resume animation if it just became visible
                    if (isVisible && !wasVisible) {
                        animate();
                    }
                });
            },
            { threshold: 0.01 }
        );

        observer.observe(section);
        init();
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
            observer.unobserve(section);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[90vh] flex flex-col items-center justify-center pt-0 pb-32 overflow-hidden bg-background">
            {/* Custom Canvas Particle Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-auto" />

            {/* Gradient Overlay for Text Readability - Reduced opacity to reveal the waves */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 pointer-events-none" />

            <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center -mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.3] mb-8 text-foreground break-keep">
                        <span className="block mb-4 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-600">홈페이지가 없다면,</span>
                        고객은 <span className="text-primary">신뢰하지 않습니다</span>
                    </h1>

                    <p className="text-base md:text-xl text-zinc-500 mx-auto leading-relaxed font-medium mb-12 break-keep">
                        온라인에서의 첫인상은 비즈니스의 퀄리티와 직결됩니다.<br className="hidden md:block" />
                        압도적인 디자인과 탄탄한 기술력으로 확실한 신뢰를 구축해 드립니다.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}

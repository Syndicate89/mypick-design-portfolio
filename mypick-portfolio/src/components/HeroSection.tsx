"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        if (vantaEffect) return;

        const loadScript = (src: string) => {
            return new Promise((resolve, reject) => {
                // If script already exists, resolve immediately
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve(true);
                    return;
                }
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const initVanta = async () => {
            try {
                // 1. Ensure THREE is loaded first
                if (!(window as any).THREE) {
                    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
                }

                // 2. Ensure VANTA is loaded second
                if (!(window as any).VANTA) {
                    await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js");
                }

                // 3. Initialize effect
                if (!(window as any).VANTA) {
                    console.error("Vanta failed to load globally");
                    return;
                }

                if (!vantaRef.current) {
                    console.warn("Vanta ref is not available, skipping initialization.");
                    return;
                }

                const effect = (window as any).VANTA.WAVES({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x074526,
                    shininess: 60.00,
                    waveHeight: 20.00,
                    waveSpeed: 0.90,
                    zoom: 0.85
                });
                setVantaEffect(effect);
            } catch (err) {
                console.error("Failed to load Vanta Scripts via CDN:", err);
            }
        };

        initVanta();

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
            {/* Vanta.js WebGL Background */}
            <div ref={vantaRef} className="absolute inset-0 z-0 w-full h-full" />

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

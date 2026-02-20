"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
            {/* Dark Background with Realistic Wavy Aurora Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Background Core Darkness */}
                <div className="absolute inset-0 bg-black z-0"></div>

                {/* Subdued ambient back light */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-emerald-900/20 blur-[150px] rounded-full z-10 animate-pulse" style={{ animationDuration: '8s' }} />

                {/* The sweeping Aurora Waves constructed via CSS transforms */}
                <div className="absolute top-[30%] w-full h-[70vh] z-10 flex justify-center perspective-[1000px] mix-blend-screen opacity-90">
                    {/* Background wide sweeping wave - Thick Glass Ribbon */}
                    <div
                        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[300px] rounded-[100%] animate-pulse border-y border-emerald-300/60 bg-gradient-to-b from-emerald-400/20 via-transparent to-cyan-500/20 backdrop-blur-[2px] shadow-[inset_0_0_40px_rgba(52,211,153,0.3)] blur-[6px]"
                        style={{ transform: 'rotate(-8deg) scaleY(0.12)', animationDuration: '8s' }}
                    />

                    {/* New Layer 1 - Deep Emerald Glass */}
                    <div
                        className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[190%] md:w-[140%] h-[250px] rounded-[100%] animate-pulse border-y-[2px] border-emerald-400/50 bg-gradient-to-b from-emerald-300/10 via-transparent to-teal-400/20 backdrop-blur-sm shadow-[inset_0_0_35px_rgba(16,185,129,0.3)] blur-[5px]"
                        style={{ transform: 'rotate(2deg) scaleY(0.15)', animationDuration: '11s', animationDelay: '1.5s' }}
                    />

                    {/* Core bright emission line - Sharp White Glass Edge */}
                    <div
                        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[180%] md:w-[130%] h-[200px] rounded-[100%] animate-pulse border-y-[2px] border-white/70 bg-gradient-to-b from-emerald-200/30 via-transparent to-emerald-200/30 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(255,255,255,0.4)] blur-[3px]"
                        style={{ transform: 'rotate(-3deg) scaleY(0.18)', animationDuration: '6s', animationDelay: '1s' }}
                    />

                    {/* New Layer 2 - High Arching Cyan Glass */}
                    <div
                        className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[170%] md:w-[125%] h-[350px] rounded-[100%] animate-pulse border-y border-cyan-200/70 bg-gradient-to-b from-cyan-300/20 via-transparent to-blue-400/20 backdrop-blur-[3px] shadow-[inset_0_0_45px_rgba(34,211,238,0.25)] blur-[7px]"
                        style={{ transform: 'rotate(-6deg) scaleY(0.14)', animationDuration: '9s', animationDelay: '2.5s' }}
                    />

                    {/* Secondary overlapping wave - Cyan Glass Layer */}
                    <div
                        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[160%] md:w-[120%] h-[400px] rounded-[100%] animate-pulse border-y border-cyan-300/50 bg-gradient-to-b from-cyan-400/20 via-transparent to-teal-500/20 backdrop-blur-[4px] shadow-[inset_0_0_50px_rgba(34,211,238,0.2)] blur-[8px]"
                        style={{ transform: 'rotate(5deg) scaleY(0.15)', animationDuration: '10s', animationDelay: '3s' }}
                    />

                    {/* New Layer 3 - Low sweeping Teal Glass */}
                    <div
                        className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[150%] md:w-[110%] h-[250px] rounded-[100%] animate-pulse border-y-[2px] border-teal-200/60 bg-gradient-to-b from-teal-400/15 via-transparent to-emerald-300/20 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(45,212,191,0.35)] blur-[5px]"
                        style={{ transform: 'rotate(-4deg) scaleY(0.16)', animationDuration: '7.5s', animationDelay: '4.5s' }}
                    />

                    {/* Center Grounding Glow - Soft light source inside the glass */}
                    <div
                        className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[100%] md:w-[80%] h-[150px] bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent rounded-[100%] blur-[25px] animate-pulse"
                        style={{ transform: 'rotate(1deg) scaleY(0.2)', animationDuration: '7s', animationDelay: '2s' }}
                    />
                </div>
            </div>

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

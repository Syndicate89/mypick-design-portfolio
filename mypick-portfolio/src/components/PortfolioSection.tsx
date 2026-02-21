"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
    { id: 1, name: "In Pilates", category: "Health & Fitness", image: "/portfolio/1.png", link: "https://syndicate89.github.io/inpilates/" },
    { id: 2, name: "NUEVO", category: "Emotional Forest Stay", image: "/portfolio/2.png", link: "https://syndicate89.github.io/nuevo/" },
    { id: 4, name: "Stay Yunseul", category: "Private Stay", image: "/portfolio/4.png", link: "https://syndicate89.github.io/stay-yunseul/" },
    { id: 5, name: "Sewoom Medical Center", category: "Medical Center", image: "/portfolio/5.png", link: "https://syndicate89.github.io/sewoom-medical-center/" },
    { id: 6, name: "Newton IP Law Firm", category: "Law Firm", image: "/portfolio/6.png", link: "https://syndicate89.github.io/newton-ip-law-firm/" },
    { id: 7, name: "Design Youth", category: "Interior Design Studio", image: "/portfolio/7.png", link: "https://syndicate89.github.io/designyouth/" },
    { id: 8, name: "더 바른 정성 치과", category: "Dental Clinic", image: "/portfolio/8.png", link: "https://syndicate89.github.io/barundental/" },
];

export default function PortfolioSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Slight parallax effect on the whole section based on scroll
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    // Duplicate projects array to create a seamless infinite loop
    const doubledProjects = [...projects, ...projects];

    return (
        <section ref={sectionRef} id="portfolio" className="pt-0 pb-32 bg-zinc-50 relative overflow-hidden z-20 -mt-24 md:-mt-48">
            <motion.div style={{ y }} className="w-full">

                {/* Infinite Marquee Wrapper */}
                <div className="relative w-full flex flex-col gap-8 md:gap-12 mt-8 md:mt-12 py-12 md:py-20">

                    {/* First Track (Moves Left) */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pr-8 md:pr-12">
                        <div className="flex gap-8 md:gap-12 px-4 md:px-6">
                            {doubledProjects.map((project, idx) => (
                                <div key={`track1-${project.id}-${idx}`} className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] max-w-[900px] shrink-0 mx-4 md:mx-8">
                                    <div className="relative w-full perspective-[2000px] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:z-50">

                                        {/* MacBook Frame */}
                                        <div className="relative w-full pt-[58.33%] rounded-[1rem] md:rounded-[2.5rem] border-[4px] md:border-[8px] border-zinc-200 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-2">

                                            {/* Screen Content */}
                                            <div className="absolute inset-0 overflow-hidden bg-zinc-900 rounded-[0.5rem] md:rounded-[2rem]">
                                                {/* Image Wrapper */}
                                                <div className="absolute inset-0 w-full h-full">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.name}
                                                        fill
                                                        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 60vw, 45vw"
                                                        style={{ imageRendering: "-webkit-optimize-contrast" }}
                                                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                                    />
                                                </div>

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 md:p-10 pointer-events-none">
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-bold text-black bg-white px-6 py-3 md:px-8 md:py-4 rounded-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 shadow-2xl flex items-center hover:bg-zinc-100 pointer-events-auto text-sm md:text-base"
                                                    >
                                                        프로젝트 보러가기
                                                        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* MacBook Camera / Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[12%] h-[4%] md:h-[5%] bg-zinc-200 rounded-b-lg md:rounded-b-2xl z-20 flex justify-center items-end pb-[2px] md:pb-1">
                                                <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-zinc-800 shadow-inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Masks for smooth edge fading */}
                    <div className="absolute inset-y-0 left-0 w-[5%] md:w-[10%] bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-[5%] md:w-[10%] bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none"></div>

                </div>
            </motion.div>
        </section>
    );
}


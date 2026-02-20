"use client";

import { motion } from "framer-motion";
import { PenTool, Code2, TrendingUp } from "lucide-react";

export default function ServiceSection() {
    const services = [
        {
            title: "맞춤형 웹 디자인",
            desc: "브랜드의 가치를 시각적으로 극대화하는 트렌디하고 독창적인 UI/UX 디자인을 제공합니다.",
            icon: <PenTool className="w-10 h-10 text-primary" strokeWidth={1.5} />,
        },
        {
            title: "프론트엔드 개발",
            desc: "React, Next.js 등 최신 프레임워크를 활용하여 빠르고 안정적인 최적의 인터랙티브 웹사이트를 구축합니다.",
            icon: <Code2 className="w-10 h-10 text-primary" strokeWidth={1.5} />,
        },
        {
            title: "SEO 및 퍼포먼스 마케팅",
            desc: "검색 엔진 최적화를 기본으로 탑재하여 트래픽을 늘리고, 구매 전환율을 극대화하는 구조를 설계합니다.",
            icon: <TrendingUp className="w-10 h-10 text-primary" strokeWidth={1.5} />,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    };

    return (
        <section className="py-32 bg-black relative">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.3] break-keep">
                        마이픽의 <span className="text-primary">핵심 서비스</span>
                    </h2>
                    <p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto break-keep leading-relaxed">
                        비즈니스 성장에 필요한 모든 웹 에이전시 서비스를 한 곳에서 제공합니다.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className="bg-[#18181b] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 break-keep">
                                {service.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm md:text-[0.95rem] break-keep">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, RefreshCw, CalendarCheck, MessageSquare, BadgeDollarSign } from "lucide-react";

export default function DifferentiatorSection() {
    const features = [
        {
            icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
            title: "100% 맞춤형 코딩 제작",
            desc: "공장형 템플릿이나 노코드가 아닙니다. 브랜드의 고유한 가치를 담아 비즈니스 목적에 맞게 처음부터 끝까지 직접 코딩합니다.",
            highlight: "템플릿 복붙 불가. 완전한 커스텀 개발."
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-primary" />,
            title: "컨펌될 때까지, 무제한 수정",
            desc: "디자인 단계에서 추가 비용 걱정 없이 마음에 드실 때까지 수정해 드립니다. 고객님의 만족이 최우선입니다.",
            highlight: "추가 결제 없는 완벽한 수정 보장."
        },
        {
            icon: <CalendarCheck className="w-8 h-8 text-primary" />,
            title: "오직 한 곳에만 집중, 100% 예약제",
            desc: "동시다발적인 다수 프로젝트를 진행하지 않습니다. 기간 내 오직 하나의 프로젝트에 모든 리소스를 투입하여 퀄리티를 극대화합니다.",
            highlight: "최고의 퀄리티를 위한 선택적 수주."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-primary" />,
            title: "답답함 없는 투명한 소통",
            desc: "작업의 진척 상황을 수시로 꼼꼼하게 공유해 드립니다. 외주 의뢰 시 흔히 겪는 '연락 두절'이나 '소통의 부재'는 없습니다.",
            highlight: "진행 상황 실시간 공유."
        },
        {
            icon: <BadgeDollarSign className="w-8 h-8 text-primary" />,
            title: "디자인 불만족 시 100% 전액 환불",
            desc: "시안 컨펌 단계에서 디자인이 정 마음에 들지 않으신다면 망설임 없이 전액 환불해 드립니다. 결과물로 증명하겠습니다.",
            highlight: "불안감을 완벽히 해소하는 환불 보증제."
        },
    ];

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Dark Background with Realistic Wavy Aurora Overlay (from HeroSection) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Background Core Darkness */}
                <div className="absolute inset-0 bg-black z-0"></div>

                {/* Subdued ambient back light */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-emerald-900/10 blur-[150px] rounded-full z-10 animate-pulse" style={{ animationDuration: '8s' }} />

                {/* The sweeping Aurora Waves constructed via CSS transforms */}
                <div className="absolute top-[20%] lg:top-[30%] w-full h-[70vh] z-10 flex justify-center perspective-[1000px] mix-blend-screen opacity-[0.65]">
                    {/* Background wide sweeping wave - Thick Glass Ribbon */}
                    <div
                        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[300px] rounded-[100%] animate-pulse border-y border-emerald-300/40 bg-gradient-to-b from-emerald-400/10 via-transparent to-cyan-500/10 backdrop-blur-[2px] shadow-[inset_0_0_40px_rgba(52,211,153,0.15)] blur-[6px]"
                        style={{ transform: 'rotate(-8deg) scaleY(0.12)', animationDuration: '8s' }}
                    />

                    {/* New Layer 1 - Deep Emerald Glass */}
                    <div
                        className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[190%] md:w-[140%] h-[250px] rounded-[100%] animate-pulse border-y-[2px] border-emerald-400/30 bg-gradient-to-b from-emerald-300/5 via-transparent to-teal-400/10 backdrop-blur-sm shadow-[inset_0_0_35px_rgba(16,185,129,0.15)] blur-[5px]"
                        style={{ transform: 'rotate(2deg) scaleY(0.15)', animationDuration: '11s', animationDelay: '1.5s' }}
                    />

                    {/* Core bright emission line - Sharp White Glass Edge */}
                    <div
                        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[180%] md:w-[130%] h-[200px] rounded-[100%] animate-pulse border-y-[2px] border-white/40 bg-gradient-to-b from-emerald-200/15 via-transparent to-emerald-200/15 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] blur-[3px]"
                        style={{ transform: 'rotate(-3deg) scaleY(0.18)', animationDuration: '6s', animationDelay: '1s' }}
                    />

                    {/* New Layer 2 - High Arching Cyan Glass */}
                    <div
                        className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[170%] md:w-[125%] h-[350px] rounded-[100%] animate-pulse border-y border-cyan-200/40 bg-gradient-to-b from-cyan-300/10 via-transparent to-blue-400/10 backdrop-blur-[3px] shadow-[inset_0_0_45px_rgba(34,211,238,0.1)] blur-[7px]"
                        style={{ transform: 'rotate(-6deg) scaleY(0.14)', animationDuration: '9s', animationDelay: '2.5s' }}
                    />

                    {/* Secondary overlapping wave - Cyan Glass Layer */}
                    <div
                        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[160%] md:w-[120%] h-[400px] rounded-[100%] animate-pulse border-y border-cyan-300/30 bg-gradient-to-b from-cyan-400/10 via-transparent to-teal-500/10 backdrop-blur-[4px] shadow-[inset_0_0_50px_rgba(34,211,238,0.1)] blur-[8px]"
                        style={{ transform: 'rotate(5deg) scaleY(0.15)', animationDuration: '10s', animationDelay: '3s' }}
                    />

                    {/* New Layer 3 - Low sweeping Teal Glass */}
                    <div
                        className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[150%] md:w-[110%] h-[250px] rounded-[100%] animate-pulse border-y-[2px] border-teal-200/40 bg-gradient-to-b from-teal-400/10 via-transparent to-emerald-300/10 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(45,212,191,0.2)] blur-[5px]"
                        style={{ transform: 'rotate(-4deg) scaleY(0.16)', animationDuration: '7.5s', animationDelay: '4.5s' }}
                    />

                    {/* Center Grounding Glow - Soft light source inside the glass */}
                    <div
                        className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[100%] md:w-[80%] h-[150px] bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent rounded-[100%] blur-[25px] animate-pulse"
                        style={{ transform: 'rotate(1deg) scaleY(0.2)', animationDuration: '7s', animationDelay: '2s' }}
                    />
                </div>
            </div>

            <div className="container relative z-20 mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.3] break-keep">
                        마이픽 디자인의 <br />
                        <span className="text-primary">압도적인 5가지 차이점</span>
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground break-keep leading-relaxed">
                        단순히 예쁜 디자인을 넘어, 고객의 비즈니스 성공을 돕는 탄탄한 기술력과 책임감으로 보답합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-zinc-900 border border-border rounded-2xl p-6 md:p-8 hover:bg-zinc-800 transition-colors duration-300 shadow-sm hover:shadow-md"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-muted rounded-xl flex items-center justify-center mb-5 md:mb-6 border border-border">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 break-keep">{feature.title}</h3>
                            <p className="text-primary font-medium mb-3 md:mb-4 text-xs md:text-sm tracking-wide break-keep">{feature.highlight}</p>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base break-keep">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

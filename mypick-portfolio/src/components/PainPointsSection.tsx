"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PainPointsSection() {
    const basePath = process.env.NODE_ENV === "production" ? "/mypick-design-portfolio" : "";

    const painPoints = [
        {
            title: "업체 연락이 잘 안 되면 어쩌지?",
            desc: "결제 후 담당자와 연락이 닿지 않거나 피드백이 느릴까 봐 걱정이신가요? 작업 현황을 알 수 없어 답답한 상황을 만들지 않습니다.",
            bgColor: "bg-[#b0f5c8]",
            image: `${basePath}/images/painpoint_contact.png`,
        },
        {
            title: "공장형 템플릿으로 대충 만드는 거 아니야?",
            desc: "남들과 똑같은 결과물이 나오는 건 아닐까 염려되시나요? 브랜드 고유의 가치를 살린 100% 맞춤형 디자인을 약속합니다.",
            bgColor: "bg-[#f5f5f5]",
            image: `${basePath}/images/painpoint_template.png`,
        },
        {
            title: "결과물이 마음에 안 들면 어쩌지?",
            desc: "미리 결과물을 보지 못하고 결제부터 해야 해서 불안하신가요? 마음에 들 때까지 수정해 드리고, 불만족 시 환불해 드립니다.",
            bgColor: "bg-[#ffe2bb]",
            image: `${basePath}/images/painpoint_dissatisfaction.png`,
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
        <section className="py-32 bg-black relative z-30">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.3] break-keep">
                        홈페이지 제작 의뢰하기<br />
                        걱정 많으시죠?
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {painPoints.map((point, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className="bg-[#18181b] rounded-[2rem] p-4 flex flex-col transition-transform duration-500 hover:-translate-y-2 border border-white border-opacity-5"
                        >
                            {/* Image Area */}
                            <div className={`w-full h-56 lg:h-64 rounded-[1.5rem] mb-6 flex items-center justify-center overflow-hidden relative ${point.bgColor}`}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={point.image}
                                        alt={point.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>

                            {/* Text Area */}
                            <div className="px-2 pb-4 flex flex-col flex-grow">
                                <h3 className="text-xl md:text-[1.35rem] font-bold mb-3 text-white tracking-tight break-keep">
                                    {point.title}
                                </h3>
                                <p className="text-zinc-400 text-sm md:text-[0.95rem] leading-[1.6] break-keep">
                                    {point.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

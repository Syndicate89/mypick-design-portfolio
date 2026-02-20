"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "불만족 시 환불 가능한가요?",
            answer: "고객 만족을 최우선으로 생각합니다. 일주일 동안 디자인 수정을 거친 뒤에도 결과물이 불만족스러우시다면 100% 환불을 보장해 드립니다. 그만큼 결과물에 자신 있습니다."
        },
        {
            question: "긴급 제작(단기 제작)도 가능한가요?",
            answer: "죄송하지만 긴급 제작은 어렵습니다. 마이픽 디자인은 단순히 예쁜 디자인을 넘어, 방문자를 실제 고객으로 전환시키는 탄탄한 구조를 설계해야 하기 때문에 프로젝트마다 충분한 기획과 제작 시간이 필요합니다."
        },
        {
            question: "제작 기간은 어느 정도 소요되나요?",
            answer: "평균적으로 2주 정도 소요됩니다. 다만, 프로젝트의 규모나 필요한 기능, 상호 피드백 속도에 따라 제작 기간에 변동이 생길 수 있습니다."
        },
        {
            question: "웹사이트 유지 비용은 어떻게 되나요?",
            answer: "기본적으로 웹사이트를 유지하기 위한 도메인 구매 및 서버 호스팅 비용이 연 단위로 발생합니다. 그 외 기능 추가나 유지 보수 등의 기타 유지 관리비는 무료 상담을 통해 안내해 드리고 있습니다."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 bg-black relative z-40">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.3] break-keep">
                        자주 묻는 질문 <span className="text-primary">FAQ</span>
                    </h2>
                    <p className="text-base md:text-lg text-zinc-400 break-keep leading-relaxed">
                        문의하시기 전 확인해 보시면 좋은 질문들을 모았습니다.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-[#18181b] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-white flex-1 pr-8 break-keep">
                                    <span className="text-primary mr-3">Q.</span>
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                                >
                                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        key="answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 text-zinc-300 leading-relaxed text-[0.95rem] md:text-base break-keep border-t border-white/5 mt-2">
                                            <div className="pt-6">
                                                <span className="text-primary font-bold mr-3">A.</span>
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

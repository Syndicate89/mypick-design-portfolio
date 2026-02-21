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
            question: "제작 기간은 어느 정도 소요되나요?",
            answer: "평균적으로 2주 정도 소요됩니다. 다만, 프로젝트의 규모나 필요한 기능, 상호 피드백 속도에 따라 제작 기간에 변동이 생길 수 있습니다."
        },
        {
            question: "별도로 발생하는 비용이 있나요?",
            answer: "홈페이지를 운영하는 데 필수적인 호스팅, 도메인, SSL 비용이 별도로 발생합니다. 호스팅은 홈페이지에 대한 월세, 도메인은 홈페이지의 고유 주소(ex. www.example.com), SSL은 방문자의 개인정보를 보호하는 보안 인증서라고 생각하시면 이해하기 쉽습니다. 자세한 금액은 무료 상담을 통해 안내해 드립니다."
        },
        {
            question: "홈페이지 제작 전 무엇을 준비해야 하나요?",
            answer: "로고, 참고하실 레퍼런스(벤치마킹) 사이트, 그리고 회사 소개·연락처 등 기업 필수 정보를 미리 준비해 주시면 제작이 한결 수월해집니다. 그 외 세부적으로 필요한 사항은 상담 시 별도로 안내드리겠습니다."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 bg-background relative z-40">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6 leading-[1.3] break-keep">
                        자주 묻는 질문 <span className="text-primary">FAQ</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground break-keep leading-relaxed">
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
                            className="bg-zinc-50 border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 shadow-sm"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-foreground flex-1 pr-8 break-keep">
                                    <span className="text-primary mr-3">Q.</span>
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center"
                                >
                                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
                                        <div className="px-6 md:px-8 pb-8 pt-0 text-zinc-600 leading-relaxed text-[0.95rem] md:text-base break-keep border-t border-border mt-2">
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

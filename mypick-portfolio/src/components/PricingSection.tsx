"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
    const plans = [
        {
            name: "랜딩 페이지",
            target: "포트폴리오, 홍보, 프리랜서, 이벤트",
            desc: "단일 페이지에 핵심 메시지를 압축하여 전달하는 가장 직관적이고 강력한 구조입니다.",
            features: [
                "1페이지만으로 완벽한 기획 및 구성",
                "PC / 모바일 100% 반응형 최적화",
                "기본 검색 엔진(SEO) 세팅",
                "빠른 로딩 속도 및 렌더링 최적화",
            ],
            popular: false,
        },
        {
            name: "스탠다드 페이지",
            target: "브랜딩, 중소·스타트업 기업",
            desc: "기업의 신뢰도를 높이고 비즈니스를 본격적으로 시작하기 위한 가장 대중적인 필수 패키지입니다.",
            features: [
                "메인 1p + 서브 4p 기준 구성",
                "브랜드 맞춤형 UI/UX 디자인",
                "포트폴리오 및 게시판 솔루션 연동",
                "마케팅·SEO 풀스택 최적화 적용",
                "컨펌 완료 시까지 무제한 디자인 수정",
            ],
            popular: true,
        },
        {
            name: "프리미엄 페이지",
            target: "페이지 10장 이상의 대규모 플랫폼",
            desc: "고도의 커스텀 기획과 방대한 정보 전달이 필요한 대규모 웹사이트입니다.",
            features: [
                "아키텍처 맞춤형 복합 페이지 구성",
                "사용자 시선을 사로잡는 고도화된 애니메이션",
                "서버사이드 데이터 연동 및 특수 기능 지원",
                "프리미엄 프로젝트 전담 관리 1:1 배정",
            ],
            popular: false,
        },
    ];

    return (
        <section id="service" className="py-32 bg-muted/30 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.3] break-keep">
                        비즈니스에 맞춘 <br /> <span className="text-primary">최적의 플랜</span>을 선택하세요
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto break-keep leading-relaxed">
                        100% 맞춤 코딩 프론트엔드 최적화가 적용된 서비스 라인업입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative bg-white border rounded-3xl p-8 md:p-10 flex flex-col transition-transform duration-300 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${plan.popular ? "border-primary shadow-[0_0_30px_rgba(0,208,132,0.15)]" : "border-border"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm">
                                    Mypick&apos;s Choice
                                </div>
                            )}

                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 mt-4">{plan.name}</h3>
                            <p className="text-primary font-medium text-sm tracking-wide mb-6 pb-6 border-b border-border">{plan.target}</p>

                            <p className="text-muted-foreground mb-8 text-sm leading-relaxed min-h-[60px] break-keep">
                                {plan.desc}
                            </p>

                            <ul className="flex-grow space-y-4 mb-10 overflow-hidden">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start text-foreground">
                                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                                        <span className="text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-[0.95rem] tracking-tighter sm:tracking-normal whitespace-nowrap">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="http://pf.kakao.com/_UiPpn/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold tracking-wide transition-colors duration-300 block text-center shadow-sm ${plan.popular
                                    ? "bg-primary text-white hover:bg-emerald-500"
                                    : "bg-zinc-100 text-foreground hover:bg-zinc-200 border border-border"
                                    }`}
                            >
                                문의하기
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

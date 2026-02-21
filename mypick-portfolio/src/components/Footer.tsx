"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contact" className="bg-background pt-32 pb-12 border-t border-border relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 md:mb-8 leading-[1.3] break-keep">
                        단순한 웹사이트를 넘어, <br />
                        비즈니스의 강력한 무기가 됩니다.
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground mb-10 md:mb-12 break-keep leading-relaxed">
                        지금 바로 문의를 남기시고 비즈니스의 격을 높이세요. <br />
                        (고퀄리티 작업을 위한 100% 예약 진행)
                    </p>

                    <div className="max-w-xl mx-auto bg-zinc-900 p-10 md:p-14 rounded-3xl border border-border shadow-sm text-center relative group">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">마이픽 비즈니스 상담</h3>
                        <p className="text-muted-foreground mb-10 text-sm md:text-base">
                            카카오톡으로 언제 어디서든 빠르고 간편하게<br className="hidden md:block" />
                            프로젝트 설계 및 견적 상담을 받아보세요.
                        </p>

                        <a
                            href="http://pf.kakao.com/_UiPpn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#000000] font-bold text-lg md:text-xl py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-sm border border-black/5"
                        >
                            {/* Kakao Talk Icon (Simple SVG) */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3C6.477 3 2 6.545 2 10.916C2 13.791 3.593 16.32 6.014 17.822L5.05 21.287L8.68 18.914C9.728 19.22 10.844 19.387 12 19.387C17.523 19.387 22 15.841 22 11.47C22 7.098 17.523 3 12 3Z" />
                            </svg>
                            <span className="relative z-10">카카오톡 문의하기</span>
                        </a>

                        <p className="text-center text-zinc-400 text-xs mt-6 font-medium">* 연중무휴 24시간 빠른 채팅 상담</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end border-t border-border pt-12">
                    <div>
                        <div className="text-3xl font-black tracking-tighter cursor-pointer text-foreground mb-6" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            mypickdesign.
                        </div>
                        <p className="text-sm text-zinc-500 leading-loose max-w-sm">
                            우리는 클라이언트의 비즈니스 목적에 완벽하게 부합하는 커스텀 솔루션을 제안하고 직접 개발합니다.
                        </p>
                    </div>

                    <div className="text-sm text-zinc-500 md:text-right leading-loose flex flex-col items-start md:items-end">
                        <p>회사명 : 마이픽 디자인</p>
                        <p>이메일 : tpoint1014@gmail.com</p>
                        <a
                            href="https://www.instagram.com/mypick.design/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 mt-2 font-medium"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            @mypick.design
                        </a>
                        <p className="mt-4 text-xs text-zinc-700">
                            © {new Date().getFullYear()} Mypick Design. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

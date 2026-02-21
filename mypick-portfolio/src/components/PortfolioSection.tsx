"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
    { id: 1, name: "In Pilates", category: "Health & Fitness", color: "bg-purple-100", link: "https://syndicate89.github.io/inpilates/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Finpilates%2F?w=1200" },
    { id: 2, name: "NUEVO", category: "Emotional Forest Stay", color: "bg-green-100", link: "https://syndicate89.github.io/nuevo/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fnuevo%2F?w=1200" },
    { id: 4, name: "Stay Yunseul", category: "Private Stay", color: "bg-teal-100", link: "https://syndicate89.github.io/stay-yunseul/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fstay-yunseul%2F?w=1200" },
    { id: 5, name: "Sewoom Medical Center", category: "Medical Center", color: "bg-blue-100", link: "https://syndicate89.github.io/sewoom-medical-center/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fsewoom-medical-center%2F?w=1200" },
    { id: 6, name: "Newton IP Law Firm", category: "Law Firm", color: "bg-slate-100", link: "https://syndicate89.github.io/newton-ip-law-firm/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fnewton-ip-law-firm%2F?w=1200" },
    { id: 7, name: "Design Youth", category: "Interior Design Studio", color: "bg-orange-100", link: "https://syndicate89.github.io/designyouth/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fdesignyouth%2F?w=1200" },
];

export default function PortfolioSection() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section id="portfolio" className="pt-0 pb-32 bg-transparent relative overflow-hidden -mt-32 z-20">
            <div className="relative w-full group max-w-[100vw]">
                {/* Coverflow Carousel */}
                <div className="w-full pb-10">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        coverflowEffect={{
                            rotate: 35,          // Rotation angle of side slides
                            stretch: 0,          // Space between slides
                            depth: 250,          // Depth offset in 3D space
                            modifier: 1,         // Effect multiplier
                            slideShadows: true,  // Enable slide shadows
                        }}
                        modules={[EffectCoverflow, Autoplay, Navigation]}
                        className="w-full !px-0"
                    >
                        {projects.map((project, idx) => (
                            <SwiperSlide
                                key={`${project.id}-${idx}`}
                                className="!w-[85vw] md:!w-[60vw] lg:!w-[40vw]"
                            >
                                <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden ${project.color} group/card border border-border shadow-2xl`}>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover/card:scale-105 pointer-events-none"
                                    />
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent mix-blend-overlay pointer-events-none"></div>

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                                        <div className="pointer-events-auto">
                                            <p className="text-white/70 font-medium mb-2 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">{project.category}</p>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">{project.name}</h3>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 font-semibold text-white/90 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-100 flex items-center hover:text-white cursor-pointer w-max relative z-20">
                                                자세히 보기
                                                <span className="ml-2 group-hover/card:translate-x-2 transition-transform duration-300">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Navigation Controls */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg pointer-events-auto z-30"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg pointer-events-auto z-30"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => swiperRef.current?.slideToLoop(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


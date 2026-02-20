import Image from "next/image";

const projects = [
    { id: 1, name: "In Pilates", category: "Health & Fitness", color: "bg-purple-100", link: "https://syndicate89.github.io/inpilates/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Finpilates%2F?w=1200" },
    { id: 2, name: "NUEVO", category: "Emotional Forest Stay", color: "bg-green-100", link: "https://syndicate89.github.io/nuevo/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fnuevo%2F?w=1200" },
    { id: 4, name: "Stay Yunseul", category: "Private Stay", color: "bg-teal-100", link: "https://syndicate89.github.io/stay-yunseul/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fstay-yunseul%2F?w=1200" },
    { id: 5, name: "Sewoom Medical Center", category: "Medical Center", color: "bg-blue-100", link: "https://syndicate89.github.io/sewoom-medical-center/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fsewoom-medical-center%2F?w=1200" },
    { id: 6, name: "Newton IP Law Firm", category: "Law Firm", color: "bg-slate-100", link: "https://syndicate89.github.io/newton-ip-law-firm/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fnewton-ip-law-firm%2F?w=1200" },
    { id: 7, name: "Design Youth", category: "Interior Design Studio", color: "bg-orange-100", link: "https://syndicate89.github.io/designyouth/", image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsyndicate89.github.io%2Fdesignyouth%2F?w=1200" },
];

export const metadata = {
    title: "포트폴리오 | 마이픽 디자인",
    description: "마이픽 디자인이 100% 맞춤 코딩으로 제작한 웹사이트 결과물들을 확인해 보세요.",
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen pt-8 pb-32 bg-background">
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <div className="max-w-2xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        포트폴리오
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        저희가 직접 기획하고 코딩하여 제작한 100% 맞춤형 웹사이트 사례입니다.
                        단순한 템플릿 복사를 넘어서는 차이를 경험해 보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`${project.id}-${idx}`}
                            className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden ${project.color} group border border-border flex items-center justify-center`}
                        >
                            <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-8 md:p-10">
                                <p className="text-white/80 font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</p>
                                <h3 className="text-3xl md:text-4xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.name}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}

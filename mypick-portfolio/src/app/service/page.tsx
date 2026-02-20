import PricingSection from "@/components/PricingSection";

export const metadata = {
    title: "서비스 라인업 | 마이픽 디자인",
    description: "비즈니스에 맞춘 3단계 최적의 맞춤형 프론트엔드 제작 플랜을 선택하세요.",
};

export default function ServicePage() {
    return (
        <main className="min-h-screen pt-24 pb-12">
            <PricingSection />
        </main>
    );
}

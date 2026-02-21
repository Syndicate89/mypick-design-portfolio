import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import dynamic from "next/dynamic";

const PainPointsSection = dynamic(() => import("@/components/PainPointsSection"), { ssr: true });
const DifferentiatorSection = dynamic(() => import("@/components/DifferentiatorSection"), { ssr: true });
const PricingSection = dynamic(() => import("@/components/PricingSection"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: true });

export default function Home() {
  return (
    <main className="flex-1 w-full bg-background overflow-hidden relative">
      <HeroSection />
      <PortfolioSection />
      <PainPointsSection />
      <DifferentiatorSection />
      <PricingSection />
      <FaqSection />
    </main>
  );
}

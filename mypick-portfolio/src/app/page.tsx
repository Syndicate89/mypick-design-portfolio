import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import PainPointsSection from "@/components/PainPointsSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";

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

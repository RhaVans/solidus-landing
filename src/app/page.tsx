import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import VisiMisiSection from "@/components/sections/VisiMisi";
import HistorySection from "@/components/sections/History";
import StatisticsSection from "@/components/sections/Statistics";
import PortfolioSection from "@/components/sections/Portfolio";
import AUMGrowthSection from "@/components/sections/AUMGrowth";
import TeamSection from "@/components/sections/Team";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <HistorySection />
      <StatisticsSection />
      <PortfolioSection />
      <AUMGrowthSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}

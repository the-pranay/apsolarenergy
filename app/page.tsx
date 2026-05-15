import { CareSection } from "@/components/CareSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { StatsSection } from "@/components/StatsSection";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <OfferingsSection />
      <WhyUsSection />
      <CareSection />
      <StatsSection />
      <SavingsCalculator />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

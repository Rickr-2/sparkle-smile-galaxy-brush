import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TechSpecsSection } from '@/components/TechSpecsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TechSpecsSection />
      <CTASection />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CodeExamplesSection from "@/components/CodeExamplesSection";
import PlatformsSection from "@/components/PlatformsSection";
import QuickStartSection from "@/components/QuickStartSection";
import CommunitySection from "@/components/CommunitySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <FeaturesSection />
      <CodeExamplesSection />
      <PlatformsSection />
      <QuickStartSection />
      <CommunitySection />
      <FooterSection />
    </div>
  );
};

export default Index;

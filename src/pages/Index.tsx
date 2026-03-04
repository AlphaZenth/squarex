import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import HeroTeamSection from "@/components/HeroTeamSection";
import WorldSection from "@/components/WorldSection";
import NewsSection from "@/components/NewsSection";
import PersonOfYearSection from "@/components/PersonOfYearSection";
import TokenSection from "@/components/TokenSection";
import SocialSection from "@/components/SocialSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StorySection />
      <HeroTeamSection />
      <WorldSection />
      <NewsSection />
      <PersonOfYearSection />
      <TokenSection />
      <SocialSection />
      <FooterSection />
    </div>
  );
};

export default Index;

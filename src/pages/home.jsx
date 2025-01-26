import HeroSection from "../components/hero-section";
import MessageSection from "../components/message-section";
import Navbar from "../components/navbar";
import ProvenExpertiseSection from "../components/proven-expertise-section";
import HeroVideoSection from "../components/hero-video-section";
import StepsSection from "../components/steps-section";
import GrowthSection from "../components/growth-section";
import FamilyBusinessesSection from "../components/family-businesses-section";
import TestimonialsSection from "../components/testimonials-section";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroVideoSection />
      <MessageSection />
      <ProvenExpertiseSection />
      <GrowthSection />
      <StepsSection />
      <FamilyBusinessesSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
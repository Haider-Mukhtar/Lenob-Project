import HeroSection from "../components/hero-section";
import MessageSection from "../components/message-section";
import Navbar from "../components/navbar";
import ProvenExpertiseSection from "../components/proven-expertise-section";
import HeroVideoSection from "../components/hero-video-section";
import StepsSection from "../components/steps-section";
import GrowthSection from "../components/growth-section";
import FamilyBusinessesSection from "../components/family-businesses-section";
import SuccessStoriesSection from "../components/success-stories-section";
import ReadyToWorkSection from "../components/ready-to-work-section";
import InnovateInspireCreateSection from "../components/innovate-inspire-create-section";
import KickstartJourneySection from "../components/kickstart-journey-section";
import Footer from "../components/footer";
import ClientsSaysSection from "../components/clients-says-section";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <ClientsSaysSection />
      <SuccessStoriesSection />
      <KickstartJourneySection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
      {/*
        */}
    </>
  );
};

export default Home;
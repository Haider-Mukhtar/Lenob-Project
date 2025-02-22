import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import EMHeroSection from '../components/ecommerce-marketing/em-hero-section';
import EMMessageSection from '../components/ecommerce-marketing/em-message-section';
import EMCommonStrategy from '../components/ecommerce-marketing/em-common-strategy';
import EMTurnProblemsSection from '../components/ecommerce-marketing/em-turn-problems-section';
import EMGameChanger from '../components/ecommerce-marketing/em-game-changer';
import EMOwnerTrust from '../components/ecommerce-marketing/em-owner-trust';
import EMRealStoriesSection from '../components/ecommerce-marketing/em-real-stories-section';
import EMHiddenCost from '../components/ecommerce-marketing/em-hidden-cost';
import EMRoadmapSection from '../components/ecommerce-marketing/em-roadmap-section';
import EMFAQSection from '../components/ecommerce-marketing/em-faq-section';
import EMProfitMachine from '../components/ecommerce-marketing/em-profit-machine';
import EMFormSection from '../components/ecommerce-marketing/em-form-section';
import InnovateInspireCreateSection from '../components/innovate-inspire-create-section';
import ReadyToWorkSection from '../components/ready-to-work-section';
import Footer from '../components/footer';

const EcommerceMarketing = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <EMHeroSection />
      <EMMessageSection />
      <EMCommonStrategy />
      <EMTurnProblemsSection />
      <EMGameChanger />
      <EMOwnerTrust />
      <EMRealStoriesSection />
      <EMHiddenCost />
      <EMRoadmapSection />
      <EMFAQSection />
      <EMProfitMachine />
      <EMFormSection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  )
}

export default EcommerceMarketing
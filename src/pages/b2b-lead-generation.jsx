import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import B2BHeroSection from '../components/b2b-lead-generation/b2b-hero-section';
import B2BMessageSection from '../components/b2b-lead-generation/b2b-message-section';
import B2BFrameworkSection from '../components/b2b-lead-generation/b2b-framework-section';
import B2BStepsSections from '../components/b2b-lead-generation/b2b-steps-sections';
import B2BPainPointsSection from '../components/b2b-lead-generation/b2b-pain-points-section';
import B2BSuccessStoriesSection from '../components/b2b-lead-generation/b2b-success-stories-section';
import B2BFAQSection from '../components/b2b-lead-generation/b2b-faq-section';
import B2BProfitMachineSection from '../components/b2b-lead-generation/b2b-profit-machine-section copy';
import B2BFormSection from '../components/b2b-lead-generation/b2b-form-section';
import InnovateInspireCreateSection from '../components/innovate-inspire-create-section';
import ReadyToWorkSection from '../components/ready-to-work-section';
import Footer from '../components/footer';

const B2BLeadGeneration = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <B2BHeroSection />
      <B2BMessageSection />
      <B2BFrameworkSection />
      <B2BStepsSections />
      <B2BPainPointsSection />

      <B2BSuccessStoriesSection />
      <B2BFAQSection />
      <B2BProfitMachineSection />
      <B2BFormSection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  )
}

export default B2BLeadGeneration
import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import FAHeroSection from '../components/facebook-ads/fa-hero-section'
import FAMessageSection from '../components/facebook-ads/fa-message-section'
import FAImagesScetion from '../components/facebook-ads/fa-images-scetion'
import FAFAQSection from '../components/facebook-ads/fa-faq-section'
import InnovateInspireCreateSection from '../components/innovate-inspire-create-section'
import ReadyToWorkSection from '../components/ready-to-work-section'
import Footer from '../components/footer'
import FARealStoriesSection from '../components/facebook-ads/fa-real-stories-section'
import FA6StepsSection from '../components/facebook-ads/fa-6-steps-section'
import ClientsSaysSection from '../components/clients-says-section'
import FAUltimateSecret from '../components/facebook-ads/fa-ultimate-secret'
import FAHintEveryone from '../components/facebook-ads/fa-hint-everyone'
import FAFormSection from '../components/facebook-ads/fa-form-section'

const FacebookAds = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <FAHeroSection />
      <FAMessageSection />
      <FAImagesScetion />
      <FAUltimateSecret />
      <FAHintEveryone />
      <FA6StepsSection />      
      <FARealStoriesSection />
      <ClientsSaysSection />
      <FAFAQSection />
      <FAFormSection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  )
}

export default FacebookAds
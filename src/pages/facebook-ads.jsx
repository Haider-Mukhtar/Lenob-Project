import React from 'react'
import Navbar from '../components/navbar'
import FAHeroSection from '../components/facebook-ads/fa-hero-section'
import FAMessageSection from '../components/facebook-ads/fa-message-section'
import FAImagesScetion from '../components/facebook-ads/fa-images-scetion'
import FAClientsSaysSection from '../components/facebook-ads/fa-clients-says-section'
import FAFAQSection from '../components/facebook-ads/fa-faq-section'
import InnovateInspireCreateSection from '../components/innovate-inspire-create-section'
import ReadyToWorkSection from '../components/ready-to-work-section'
import Footer from '../components/footer'
import CFormSection from '../components/contact/c-form-section'
import FARealStoriesSection from '../components/facebook-ads/fa-real-stories-section'
import FA6StepsSection from '../components/facebook-ads/fa-6-steps-section'

const FacebookAds = () => {
  return (
    <>
      <Navbar />
      <FAHeroSection />
      <FAMessageSection />
      <FAImagesScetion />

      <FA6StepsSection />      
      <FARealStoriesSection />
      <FAClientsSaysSection />
      <FAFAQSection />
      <CFormSection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  )
}

export default FacebookAds
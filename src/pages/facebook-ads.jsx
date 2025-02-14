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

const FacebookAds = () => {
  return (
    <>
      <Navbar />
      <FAHeroSection />
      <FAMessageSection />
      <FAImagesScetion />

      <FAClientsSaysSection />
      <FAFAQSection />

      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  )
}

export default FacebookAds